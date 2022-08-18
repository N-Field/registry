import { mkdir, rm, writeFile } from 'fs/promises'
import { SpawnOptions } from 'child_process'
import { dirname, resolve } from 'path'
import { build } from 'esbuild'
import { createRequire } from 'module'
import spawn from 'cross-spawn'
import { PackageJson } from '../src'

function spawnAsync(args: string[], options?: SpawnOptions) {
  const child = spawn(args[0], args.slice(1), { ...options, stdio: 'ignore' })
  return new Promise<number>((resolve, reject) => {
    child.on('close', resolve)
  })
}

const tempDir = resolve(__dirname, '../temp')

export default async function start(name: string, version: string) {
  const cwd = resolve(tempDir, name)
  await rm(cwd, { recursive: true, force: true })
  await mkdir(cwd, { recursive: true })
  await writeFile(cwd + '/index.js', `module.exports = require('${name}')`)
  await writeFile(cwd + '/package.json', JSON.stringify({
    dependencies: {
      [name]: version,
    },
  }))

  const code = await spawnAsync(['npm', 'install'], { cwd })
  if (code) return 'install failed'

  return bundle(name, cwd).catch(() => 'bundle failed')
}

async function bundle(name: string, cwd: string) {
  const require = createRequire(cwd + '/package.json')
  const meta: PackageJson = require(name + '/package.json')
  const result = await build({
    outdir: resolve(__dirname, '../dist'),
    outbase: cwd,
    entryPoints: [cwd + '/index.js'],
    bundle: true,
    minify: true,
    write: false,
    charset: 'utf8',
    platform: 'browser',
    target: 'esnext',
    format: 'cjs',
    logLevel: 'silent',
    define: {
      'process.env.KOISHI_PLAY': 'true',
    },
    plugins: [{
      name: 'dep check',
      setup(build) {
        build.onResolve({ filter: /^[@/\w-]+$/ }, (args) => {
          if (args.path in meta.peerDependencies) return { external: true }
          return null
        })
      },
    }],
  })

  const { contents } = result.outputFiles[0]
  if (contents.byteLength > 1024 * 1024) return 'size exceeded'
  const filename = resolve(__dirname, '../dist/plugins', name + '.js')
  await mkdir(dirname(filename), { recursive: true })
  await writeFile(filename, contents)
}

if (require.main === module) {
  start('koishi-plugin-dialogue', '4.0.1')
}