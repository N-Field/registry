var m=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var _=Object.prototype.hasOwnProperty;var f=(e,r,t,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of h(r))!_.call(e,i)&&i!==t&&m(e,i,{get:()=>r[i],enumerable:!(s=b(r,i))||s.enumerable});return e},d=(e,r,t)=>(f(e,r,"default"),t&&f(t,r,"default"));var a={};d(a,y);import*as y from"https://registry.koishi.chat/modules/koishi/index.js";var n={};d(n,x);import*as x from"https://registry.koishi.chat/modules/@koishijs/plugin-console/index.js";var l=Object.defineProperty,S=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>l(e,"name",{value:r,configurable:!0}),O=(e,r,t)=>(S(e,typeof r!="symbol"?r+"":r,t),t);function u(e){return e instanceof Date?`"d${e.toJSON()}"`:JSON.stringify(e,(r,t)=>{if(typeof t=="string")return"s"+t;if(typeof t=="object"){if(t instanceof Date)return"d"+new Date(t).toJSON();if(t===null)return null;let s=Array.isArray(t)?[]:{};for(let i in t)t[i]instanceof Date?(s[i]=new Date(t[i]),s[i].toJSON=void 0):s[i]=t[i];return s}return t})}c(u,"serialize");function p(e){if(e!==void 0)return JSON.parse(e,(r,t)=>typeof t=="string"?t[0]==="s"?t.slice(1):new Date(t.slice(1)):t)}c(p,"deserialize");var o=class extends n.DataService{task;addListener(e,r=!1){this.ctx.console.addListener(`database/${e}`,async(...t)=>{let s=await this.ctx.database[e](...t.map(p));return r&&this.refresh(),s===void 0?s:u(s)},{authority:4})}constructor(e){super(e,"database",{authority:4}),e.console.addEntry(["https://registry.koishi.chat/modules/@koishijs/plugin-dataview/dist/index.js","https://registry.koishi.chat/modules/@koishijs/plugin-dataview/dist/style.css"]),this.addListener("create",!0),this.addListener("eval",!0),this.addListener("get"),this.addListener("remove",!0),this.addListener("set"),this.addListener("stats"),this.addListener("upsert",!0),e.on("model",()=>this.refresh())}async getInfo(){let e=await this.ctx.database.stats(),r={tables:{},...e},t=r.tables;r.tables={};for(let s in this.ctx.model.tables)r.tables[s]={...this.ctx.model.tables[s],...t[s]};return r.tables=Object.fromEntries(Object.entries(r.tables).sort(([s],[i])=>s.localeCompare(i))),r}get(e=!1){return e&&delete this.task,this.task||=this.getInfo()}};c(o,"DatabaseProvider");O(o,"using",["console","database"]);(e=>{e.Config=a.Schema.object({})})(o||(o={}));var L=o;export{L as default,p as deserialize,u as serialize};
