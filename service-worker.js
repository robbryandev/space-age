if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"99404bf7accee657cb3c.jpg",revision:null},{url:"bundle.js",revision:"c291c6dc4db05990e422d7b24eb1e743"},{url:"bundle.js.LICENSE.txt",revision:"1886ff6c835fe633b408f6a190cf504d"},{url:"index.html",revision:"db941c344eb62ab0c1439b848573584e"}],{})}));
