if(!self.define){let e,r={};const o=(o,u)=>(o=new URL(o+".js",u).href,r[o]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=r,document.head.appendChild(e)}else e=o,importScripts(o),r()})).then((()=>{let e=r[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(u,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let i={};const l=e=>o(e,n),t={module:{uri:n},exports:i,require:l};r[n]=Promise.all(u.map((e=>t[e]||l(e)))).then((e=>(s(...e),i)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-four"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vue-four/css/chunk-vendors.163cd8a5.css",revision:null},{url:"/vue-four/img/logo.4d6033c9.svg",revision:null},{url:"/vue-four/index.html",revision:"e160a0f426d116d1641fe0e62170b5f3"},{url:"/vue-four/js/about.9bc1868f.js",revision:null},{url:"/vue-four/js/app.5e3d8826.js",revision:null},{url:"/vue-four/js/chunk-vendors.8e673a80.js",revision:null},{url:"/vue-four/manifest.json",revision:"c1b53a210a87597a3c70073409f00a45"},{url:"/vue-four/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
