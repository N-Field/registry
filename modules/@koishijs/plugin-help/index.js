var j=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var k=Object.prototype.hasOwnProperty;var E=(e,t)=>()=>(e&&(t=e(e=0)),t);var D=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var v=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of T(t))!k.call(e,l)&&l!==n&&j(e,l,{get:()=>t[l],enumerable:!(a=N(t,l))||a.enumerable});return e},_=(e,t,n)=>(v(e,t,"default"),n&&v(n,t,"default"));var U=e=>v(j({},"__esModule",{value:!0}),e);var f={};import*as te from"https://registry.koishi.chat/modules/koishi/index.js";var A=E(()=>{_(f,te)});var Z=D((ae,S)=>{var b=Object.defineProperty,B=Object.getOwnPropertyDescriptor,J=Object.getOwnPropertyNames,L=Object.prototype.hasOwnProperty,h=(e,t)=>b(e,"name",{value:t,configurable:!0}),M=(e,t)=>{for(var n in t)b(e,n,{get:t[n],enumerable:!0})},V=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of J(t))!L.call(e,l)&&l!==n&&b(e,l,{get:()=>t[l],enumerable:!(a=B(t,l))||a.enumerable});return e},W=e=>V(b({},"__esModule",{value:!0}),e),P={};M(P,{Config:()=>X,apply:()=>O,enableHelp:()=>y,name:()=>Y});S.exports=W(P);var g=(A(),U(f)),R={commands:{help:{description:"显示帮助信息",shortcuts:{help:"帮助"},options:{help:"显示此信息",authority:"显示权限设置",showHidden:"查看隐藏的选项和指令"},messages:{"not-found":"指令未找到。","hint-authority":"括号内为对应的最低权限等级","hint-subcommand":"标有星号的表示含有子指令","command-aliases":"别名：{0}。","command-examples":"使用示例：","command-authority":"最低权限：{0} 级。","subcommand-prolog":"可用的子指令有{0}：","global-prolog":"当前可用的指令有{0}：","global-epilog":"输入“帮助 指令名”查看特定指令的语法和使用示例。","available-options":"可用的选项有：","available-options-with-authority":"可用的选项有（括号内为额外要求的权限等级）："}}}},G={commands:{help:{description:"Show help",options:{help:"show this message",authority:"show authority requirements",showHidden:"show hidden options and commands"},messages:{"not-found":"Command not found.","hint-authority":"this minimum authority is marked in parentheses","hint-subcommand":"those marked with an asterisk have subcommands","command-aliases":"Aliases: {0}.","command-examples":"Examples:","command-authority":"Minimal authority: {0}.","subcommand-prolog":"Available subcommands{0}:","global-prolog":"Available commands{0}:","global-epilog":'Type "help <command>" to see syntax and examples for a specific command.',"available-options":"Available options:","available-options-with-authority":"Available options (parentheses indicate additional authority requirement):"}}}},I={commands:{help:{description:"ヘルプを表示",options:{help:"このメッセージを表示",authority:"コマンドやオプションの権限を表示",showHidden:"隠しコマンドやオプションを表示"},messages:{"not-found":"コマンドが見つかりません。","hint-authority":"最低権限は括弧にで表示されています","hint-subcommand":"サブコマンドがあるコマンドはアスタリスクで表示されています","command-aliases":"別名: {0}。","command-examples":"例：","command-authority":"最低権限：{0}。","subcommand-prolog":"利用可能なサブコマンド{0}：","global-prolog":"利用可能なコマンド{0}：","global-epilog":"「help <command>」を送信してコマンドの使い方を表示します。","available-options":"利用可能なオプション：","available-options-with-authority":"利用可能なオプション（必要な権限は括弧にで表示されています）："}}}},K={commands:{help:{description:"Afficher l'aide",options:{help:"afficher cette aide",authority:"afficher les droits nécessaires",showHidden:"afficher les options et commandes cachées"},messages:{"not-found":"Commande inconnue.","hint-authority":"les droits minimums sont indiqués entre parenthèses","hint-subcommand":"ces commandes avec un astérisque ont des sous-commandes","command-aliases":"Alias : {0}.","command-examples":"Exemples :","command-authority":"Droit minimum : {0}.","subcommand-prolog":"Commandes disponibles{0} :","global-prolog":"Commandes disponibles{0} :","global-epilog":'Tapez "help <commande>" pour voir la syntaxe et les exemples pour une commande spécifique.',"available-options":"Options disponibles :","available-options-with-authority":"Options disponibles (les parenthèses indiquent un droit supplémentaire) :"}}}},Q={commands:{help:{description:"顯示幫助信息",options:{help:"顯示當前信息",authority:"顯示權限設定",showHidden:"顯示隱藏的指令和選項"},messages:{"not-found":"未找到指令。","hint-authority":"括弧内為對應的最低權限","hint-subcommand":"附有星號的表示其包含子指令","command-aliases":"別名：{0}。","command-examples":"使用示例：","command-authority":"最低權限：{0} 級。","subcommand-prolog":"可用的子指令有{0}：","global-prolog":"當前可用的子指令有{0}：","global-epilog":"輸入「help 指令名」檢視特定指令的語法及使用示例。","available-options":"可用的選項有：","available-options-with-authority":"可用的選項有（括弧表示額外的權限要求）："}}}},X=g.Schema.object({shortcut:g.Schema.boolean().default(!0).description("是否启用快捷调用。"),options:g.Schema.boolean().default(!0).description("是否为每个指令添加 `-h, --help` 选项。")});function y(e){return e._disposables=e.ctx.registry.get(O).disposables,e.option("help","-h",{hidden:!0,notUsage:!0,descPath:"commands.help.options.help"})}h(y,"enableHelp");function x(e,t){if(!!e.app.$commander.getCommand("help"))return e.execute({name:"help",args:[t]})}h(x,"executeHelp");var Y="help";function O(e,t){e.i18n.define("zh",R),e.i18n.define("en",G),e.i18n.define("ja",I),e.i18n.define("fr",K),e.i18n.define("zh-TW",Q),t.options!==!1&&(e.$commander._commandList.forEach(r=>r.use(y)),e.on("command-added",r=>r.use(y))),e.before("command/execute",r=>{let{command:o,options:s,session:p}=r;if(s.help&&o._options.help)return x(p,o.name);if(!o._actions.length)return x(p,o.name)});let n=e.$commander;function a(r,o){let s=n.resolve(r);if(s?.match(o))return s;let p=e.i18n.find("commands.(name).shortcuts.(variant)",r).map(u=>({...u,command:n.resolve(u.data.name)})).filter(u=>{var c;return(c=u.command)==null?void 0:c.match(o)}),m=p.filter(u=>u.similarity===1);return m.length?m[0].command:p}h(a,"findCommand");let l=h(r=>(o,s)=>{let{args:[p],session:m}=o,u=a(p,m);if(!Array.isArray(u)){m.collect(r,{...o,command:u,args:[],options:{help:!0}},s);return}for(let{command:c}of u)m.collect(r,{...o,command:c,args:[],options:{help:!0}},s)},"createCollector");async function i(r,o){let s=a(r,o);if(!Array.isArray(s))return s;let p=n.available(o).filter(u=>u&&o.app.i18n.compare(u,r));for(let u of s)p.includes(u.data.name)||p.push(u.data.name);let m=await o.suggest({expect:p,prefix:o.text(".not-found"),suffix:o.text("internal.suggest-command")});return n.resolve(m)}h(i,"inferCommand");let d=e.command("help [command:string]",{authority:0,...t}).userFields(["authority"]).userFields(l("user")).channelFields(l("channel")).option("authority","-a").option("showHidden","-H").action(async(r,o)=>{let{session:s,options:p}=r;if(!o){let u=n._commandList.filter(F=>F.parent===null),c=H(".global-prolog",s,u,p),$=s.text(".global-epilog");return $&&c.push($),c.filter(Boolean).join(`
`)}let m=await i(o,s);if(m)return z(m,s,p)});t.shortcut!==!1&&d.shortcut("help",{i18n:!0,fuzzy:!0})}h(O,"apply");function*C(e,t,n=!1){for(let a of t)!n&&a.config.hidden||(a.match(e)?yield a:yield*C(e,a.children,n))}h(C,"getCommands");function H(e,t,n,a){let l=Array.from(C(t,n,a.showHidden)).sort((s,p)=>s.displayName>p.displayName?1:-1);if(!l.length)return[];let i=!1,d=l.map(({name:s,displayName:p,config:m,children:u})=>{let c="    "+p;return a.authority&&(c+=` (${m.authority}${u.length?(i=!0,"*"):""})`),c+="  "+t.text([`commands.${s}.description`,""],m.params),c}),r=[];a.authority&&r.push(t.text(".hint-authority")),i&&r.push(t.text(".hint-subcommand"));let o=r.length?t.text("general.paren",[r.join(t.text("general.comma"))]):"";return d.unshift(t.text(e,[o])),d}h(H,"formatCommands");function w(e,t){return t.user&&e.authority>t.user.authority?!1:!t.resolve(e.hidden)}h(w,"getOptionVisibility");function q(e,t,n){if(e.config.hideOptions&&!n.showHidden)return[];let a=n.showHidden?Object.values(e._options):Object.values(e._options).filter(i=>w(i,t));if(!a.length)return[];let l=[];return Object.values(e._options).forEach(i=>{let d=i.authority&&n.authority?`(${i.authority}) `:"";function r(o,s){var p;if(!n.showHidden&&!w(o,t))return;let m=`${d}${g.segment.escape(o.syntax)}`,u=t.text((p=o.descPath)!=null?p:[`commands.${e.name}.options.${s}`,""],o.params);u&&(m+="  "+u),m=e.ctx.chain("help/option",m,o,e,t),l.push("    "+m)}h(r,"pushOption"),"value"in i||r(i,i.name);for(let o in i.variants)r(i.variants[o],`${i.name}.${o}`)}),l.length?(l.unshift(n.authority&&a.some(i=>i.authority)?t.text(".available-options-with-authority"):t.text(".available-options")),l):[]}h(q,"getOptions");async function z(e,t,n){let a=[e.displayName+g.segment.escape(e.declaration)],l=t.text([`commands.${e.name}.description`,""],e.config.params);if(l&&a.push(l),t.app.database){let i={command:e,args:[],options:{help:!0}},d=t.collect("user",i);if(await t.observeUser(d),t.subtype==="group"){let r=t.collect("channel",i);await t.observeChannel(r)}}if(e._aliases.length>1&&a.push(t.text(".command-aliases",[Array.from(e._aliases.slice(1)).join("，")])),t.app.emit(t,"help/command",a,e,t),t.user&&e.config.authority>1&&a.push(t.text(".command-authority",[e.config.authority])),e._usage)a.push(typeof e._usage=="string"?e._usage:await e._usage(t));else{let i=t.text([`commands.${e.name}.usage`,""]);i&&a.push(i)}if(a.push(...q(e,t,n)),e._examples.length)a.push(t.text(".command-examples"),...e._examples.map(i=>"    "+i));else{let i=t.text([`commands.${e.name}.examples`,""]);i&&a.push(...i.split(`
`).map(d=>"    "+d))}return a.push(...H(".subcommand-prolog",t,e.children,n)),a.filter(Boolean).join(`
`)}h(z,"showHelp")});export default Z();