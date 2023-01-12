var _=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var $=Object.prototype.hasOwnProperty;var m=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of P(t))!$.call(e,i)&&i!==r&&_(e,i,{get:()=>t[i],enumerable:!(n=w(t,i))||n.enumerable});return e},v=(e,t,r)=>(m(e,t,"default"),r&&m(r,t,"default"));var a={};v(a,T);import*as T from"https://registry.koishi.chat/modules/@koishijs/core/index.js";var b=Object.defineProperty,k=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>b(e,"name",{value:t,configurable:!0}),y=(e,t,r)=>(k(e,typeof t!="symbol"?t+"":t,r),r);function h(e){return e?.default||e}g(h,"unwrapExports");function d(e,t=!1){let r={},n={};for(let[i,o]of Object.entries(e||{}))i.startsWith("$")?n[i]=o:r[i]=o;return[t?e:r,n]}g(d,"separate");var c=Symbol("update");a.Context.service("loader");var f=new a.Logger("app"),j={name:"group",reusable:!0,apply(e,t){e.state[u.kRecord]||=Object.create(null);for(let r in t||{})r.startsWith("~")||r.startsWith("$")||e.lifecycle.queue(e.loader.reloadPlugin(e,r,t[r]));e.accept(r=>{let n=e.state.config;for(let i in{...n,...r}){if(i.startsWith("~")||i.startsWith("$"))continue;e.state[u.kRecord][i]?i in r?e.loader.reloadPlugin(e,i,r[i]||{}):e.loader.unloadPlugin(e,i):e.loader.reloadPlugin(e,i,r[i])}},{passive:!0})}},s=class{envData;ctxData={};app;baseDir;config;entry;suspend=!1;filename;writable=!0;envfile;cache=Object.create(null);interpolate(e){return this.writable?typeof e=="string"?(0,a.interpolate)(e,this.ctxData,/\$\{\{(.+?)\}\}/g):!e||typeof e!="object"?e:Array.isArray(e)?e.map(t=>this.interpolate(t)):(0,a.valueMap)(e,t=>this.interpolate(t)):e}async forkPlugin(e,t,r){let n=await this.resolvePlugin(e);if(!!n)return(0,a.resolveConfig)(n,t),r.plugin(n,this.interpolate(t))}isTruthyLike(e){return(0,a.isNullable)(e)?!0:!!this.interpolate(`\${{ ${e} }}`)}async reloadPlugin(e,t,r){let n=e.state[s.kRecord][t],i=t.split(":",1)[0],[o,l]=d(r,i==="group");if(n){if(!this.isTruthyLike(l.$if)){this.unloadPlugin(e,t);return}n[c]=!0,n.update(o)}else{if(!this.isTruthyLike(l.$if))return;f.info("apply plugin %c",t);let p=e.extend();if(i==="group"?n=p.plugin(j,o):n=await this.forkPlugin(i,o,p),!n)return;n.alias=t.slice(i.length+1),e.state[s.kRecord][t]=n}return n.parent.filter=p=>e.filter(p)&&(!l.$filter||p.resolve(l.$filter)),n}unloadPlugin(e,t){let r=e.state[s.kRecord][t];r&&(r.dispose(),delete e.state[s.kRecord][t],f.info("unload plugin %c",t))}async createApp(){let e=this.app=new a.Context(this.interpolate(this.config));e.loader=this,e.baseDir=this.baseDir,e.envData=this.envData,e.state[s.kRecord]=Object.create(null);let t=await this.reloadPlugin(e,"group:entry",this.config.plugins);return this.entry=t.ctx,e.accept(["plugins"],r=>{this.reloadPlugin(e,"group:entry",r.plugins)},{passive:!0}),e.on("dispose",()=>{this.fullReload()}),e.on("internal/update",r=>{let n=r.parent.state[s.kRecord];if(!!n)for(let i in n)n[i]===r&&f.info("reload plugin %c",i)}),e.on("internal/before-update",(r,n)=>{if(r[c])return delete r[c];let i=r.parent.state[s.kRecord];if(!!i)for(let o in i){if(i[o]!==r)continue;let l=r.runtime.schema?.simplify;r.parent.state.config[o]={...d(r.parent.state.config[o])[1],...l?l(n):n}}}),e}},u=s;g(u,"Loader");y(u,"kRecord",Symbol.for("koishi.loader.record"));y(u,"exitCode",51);var I=Object.defineProperty,R=(e,t)=>I(e,"name",{value:t,configurable:!0});function L(e){if(e[0]==="@"){let[t,r]=e.split("/");return[`${t}/koishi-plugin-${r}`]}else return[`@koishijs/plugin-${e}`,`koishi-plugin-${e}`]}R(L,"resolveName");var O=class extends u{envData={};config={plugins:{}};_initTask;constructor(){super()}async prepare(){let e=await fetch("https://registry.koishi.chat/market.json").then(t=>t.json());for(let t of e.objects)this.cache[t.shortname]=`https://registry.koishi.chat/modules/${t.name}/index.js`}readConfig(){return null}writeConfig(){this.app.emit("config")}async resolve(e){return await(this._initTask||=this.prepare()),this.cache[e]}async resolvePlugin(e){await(this._initTask||=this.prepare());let t=(0,a.makeArray)(this.cache[e]);for(let r of t)try{return h(await import(r))}catch{}console.error(`cannot resolve plugin ${e}`)}fullReload(){console.info("trigger full reload")}};R(O,"BrowserLoader");export{u as Loader,O as default,h as unwrapExports};
