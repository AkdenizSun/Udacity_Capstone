if(!self.define){let e,a={};const i=(i,r)=>(i=new URL(i+".js",r).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,d)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(a[f])return;let c={};const o=e=>i(e,f),b={module:{uri:f},exports:c,require:o};a[f]=Promise.all(r.map((e=>b[e]||o(e)))).then((e=>(d(...e),c)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"17e92ee128fc5ddf8666db1597c7196c"},{url:"3b0598d91b2d05a6d431.jpg",revision:null},{url:"6afcd6f9d6cd579f3490.jpg",revision:null},{url:"main.js",revision:"da6cc3fcadcf70c2a06ca243b7515651"},{url:"media/04.png",revision:"5497369672995d2763c088c820bf012a"},{url:"media/05.png",revision:"0e03f580dd3694250922f42550c546f2"},{url:"media/06.png",revision:"90fbd389e5b934f74e55d83d7be0b719"},{url:"media/Top Designation canada.jpg",revision:"88e57acc0f91cc26e85b5d56af80abbc"},{url:"media/Top Desination maldives1.jpg",revision:"4331051332c23f38e91fbb432a8bdca0"},{url:"media/Travel Blog 1.jpg",revision:"e520603d979744edfc88f12792e667c7"},{url:"media/about.jpeg",revision:"22a6305952db7490fede44b6b789885d"},{url:"media/canada1.jpg",revision:"a4b41623e65dba2a36b1362a5e2300f5"},{url:"media/counting number bg 15.jpg",revision:"c9be294b5acc66be2c35c8fb001f88e0"},{url:"media/france1.jpg",revision:"2d476fb4eac40092844715caedab473e"},{url:"media/greece1.jpg",revision:"9965b1ff017936b0831ac64a35b19de9"},{url:"media/italy1.jpg",revision:"114b5ff27010e6c3aeea8f25f7816fa2"},{url:"media/italy1fina.jpg",revision:"3f128d7b8e153c6f0be4d59f3e3c6f4c"},{url:"media/logo-light.png",revision:"8ae5a9aa39c1ea181b2b6656e9b34fe0"},{url:"media/maldives1.jpg",revision:"6b944a49f619aef60fa8b204fe2f7748"},{url:"media/milano.jpg",revision:"61c1f1aa57c9b2a9ef5a1a0b508b7aa2"},{url:"media/most popular aosta1.jpg",revision:"bef6ab64994a19df4ca3bfd2cec2841d"},{url:"media/most popular france-bordeaux1.jpg",revision:"e71ab7253be05ff33a3c25890f22b596"},{url:"media/most popular france-cannes1.jpg",revision:"0c2fac1250051b7010cc535fa9c70d66"},{url:"media/most popular france-lyon1.jpg",revision:"1d16184d2dc74f80abfca4529aac1d8c"},{url:"media/most popular france-marsielle1.jpg",revision:"3506f82506ab6be10e68f31e70267ba8"},{url:"media/most popular france-normandiya1.jpg",revision:"9d5aab490b6fff9ce15e3fae287461a8"},{url:"media/most popular france-paris1.jpg",revision:"bd71c82674905e3352833388fc8c63b6"},{url:"media/most popular parma1.jpg",revision:"66be898a5fe5b0503755f8d9df6c2983"},{url:"media/most popular perugia1.jpg",revision:"96e2aa920b691983b479a62acfd39ac3"},{url:"media/most popular rome.jpg",revision:"9d9ea7c295d5bdcfbdd053c3d5d6e772"},{url:"media/most popular venice.jpg",revision:"2f6866b4f13fbc3ab6f69743962378ba"},{url:"media/reviewbgimg15.jpg",revision:"c9be294b5acc66be2c35c8fb001f88e0"},{url:"media/show-case-1.jpg",revision:"e7d8ec0cf327f0a01f4b0e3c0a315819"},{url:"media/show-case-2.jpg",revision:"67b9964347394ff5b7fc9c819fc6d402"},{url:"media/show-case-3.jpg",revision:"1e8b8eed59b6d2d6f141ebc9b691bd25"},{url:"media/top designation dubai.jpg",revision:"71feaf052fbaee8e42794bafeca6e17e"},{url:"media/top designation france.jpg",revision:"b247e60682c18ba5dbdf00d6e4e4e5e6"},{url:"media/top designation italy.jpg",revision:"ded7c924730a6bf375b40a02246c0972"},{url:"media/top designation-greece.jpg",revision:"cd2af06a57daa8cdb568aac40a83bdef"},{url:"media/travel blog 2.jpg",revision:"10e6e2af09208b636faba58ee569b9f2"},{url:"media/travel blog 3.jpg",revision:"15e26b091f10ffbb55fe47381066766c"},{url:"media/travel blog 4.jpg",revision:"3f1721052dc19cd14c70354a3191a7b3"},{url:"media/travel blog 5.jpg",revision:"e50173c766d5b31d88e9fc5179a0956a"},{url:"media/travel blog 6.jpg",revision:"f29becbf9ea570080f1b5d6eefbbf5b4"}],{})}));
