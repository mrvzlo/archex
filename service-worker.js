if(!self.define){let i,l={};const n=(n,g)=>(n=new URL(n+".js",g).href,l[n]||new Promise((l=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=l,document.head.appendChild(i)}else i=n,importScripts(n),l()})).then((()=>{let i=l[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(g,e)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const f=i=>n(i,r),c={module:{uri:r},exports:u,require:f};l[r]=Promise.all(g.map((i=>c[i]||f(i)))).then((i=>(e(...i),u)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"big-city-life"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/big-city-life/css/app.e1eccd90.css",revision:null},{url:"/big-city-life/img/0.2aac456e.png",revision:null},{url:"/big-city-life/img/0.559c4834.png",revision:null},{url:"/big-city-life/img/0.986933d8.png",revision:null},{url:"/big-city-life/img/0.ac1b7598.png",revision:null},{url:"/big-city-life/img/0.c44b8b9e.png",revision:null},{url:"/big-city-life/img/1.21552a5a.png",revision:null},{url:"/big-city-life/img/1.565dfba9.png",revision:null},{url:"/big-city-life/img/1.630385f7.png",revision:null},{url:"/big-city-life/img/1.c3440d23.png",revision:null},{url:"/big-city-life/img/1.cda008d3.png",revision:null},{url:"/big-city-life/img/1.e5174db0.png",revision:null},{url:"/big-city-life/img/10.25e345b3.png",revision:null},{url:"/big-city-life/img/10.56e0fe39.png",revision:null},{url:"/big-city-life/img/10.78bd07c3.png",revision:null},{url:"/big-city-life/img/10.edf7d5d7.png",revision:null},{url:"/big-city-life/img/10.f4f09967.png",revision:null},{url:"/big-city-life/img/10.f56d7fa8.png",revision:null},{url:"/big-city-life/img/11.160694d8.png",revision:null},{url:"/big-city-life/img/11.19d07d44.png",revision:null},{url:"/big-city-life/img/11.269f9a61.png",revision:null},{url:"/big-city-life/img/11.561904a0.png",revision:null},{url:"/big-city-life/img/11.623c6bef.png",revision:null},{url:"/big-city-life/img/11.b79e7c3b.png",revision:null},{url:"/big-city-life/img/12.10ffc14d.png",revision:null},{url:"/big-city-life/img/12.2ec62f8c.png",revision:null},{url:"/big-city-life/img/12.34f4f15f.png",revision:null},{url:"/big-city-life/img/12.8af61176.png",revision:null},{url:"/big-city-life/img/12.8f0f9f01.png",revision:null},{url:"/big-city-life/img/12.9da0580d.png",revision:null},{url:"/big-city-life/img/13.87a6b41d.png",revision:null},{url:"/big-city-life/img/13.8ed0dd0f.png",revision:null},{url:"/big-city-life/img/13.9bd94e1a.png",revision:null},{url:"/big-city-life/img/13.a487f068.png",revision:null},{url:"/big-city-life/img/13.a6ed4df0.png",revision:null},{url:"/big-city-life/img/13.cabd2ebe.png",revision:null},{url:"/big-city-life/img/14.036d7fdb.png",revision:null},{url:"/big-city-life/img/14.08008101.png",revision:null},{url:"/big-city-life/img/14.771ff7dd.png",revision:null},{url:"/big-city-life/img/14.a18502d1.png",revision:null},{url:"/big-city-life/img/14.cd9fb0a4.png",revision:null},{url:"/big-city-life/img/14.f960ba8f.png",revision:null},{url:"/big-city-life/img/15.480c795f.png",revision:null},{url:"/big-city-life/img/15.67bf9b4f.png",revision:null},{url:"/big-city-life/img/15.6a29970a.png",revision:null},{url:"/big-city-life/img/15.d4286425.png",revision:null},{url:"/big-city-life/img/15.f2f6280d.png",revision:null},{url:"/big-city-life/img/15.fb35b8d6.png",revision:null},{url:"/big-city-life/img/16.06075e1d.png",revision:null},{url:"/big-city-life/img/16.112faed1.png",revision:null},{url:"/big-city-life/img/16.87b54734.png",revision:null},{url:"/big-city-life/img/16.8deb6313.png",revision:null},{url:"/big-city-life/img/16.cc9fbfaf.png",revision:null},{url:"/big-city-life/img/16.fcbeb6c2.png",revision:null},{url:"/big-city-life/img/17.03113478.png",revision:null},{url:"/big-city-life/img/17.06c915a2.png",revision:null},{url:"/big-city-life/img/17.26c5a08b.png",revision:null},{url:"/big-city-life/img/17.50f4a182.png",revision:null},{url:"/big-city-life/img/17.60f1239b.png",revision:null},{url:"/big-city-life/img/17.8db01167.png",revision:null},{url:"/big-city-life/img/2.1335b2b7.png",revision:null},{url:"/big-city-life/img/2.1f725798.png",revision:null},{url:"/big-city-life/img/2.2edd335c.png",revision:null},{url:"/big-city-life/img/2.74cbb430.png",revision:null},{url:"/big-city-life/img/2.a448a0de.png",revision:null},{url:"/big-city-life/img/2.cfa60139.png",revision:null},{url:"/big-city-life/img/20.7e231925.png",revision:null},{url:"/big-city-life/img/21.34a35c9b.png",revision:null},{url:"/big-city-life/img/21.3e2d4a8f.png",revision:null},{url:"/big-city-life/img/21.47225a63.png",revision:null},{url:"/big-city-life/img/21.a2397415.png",revision:null},{url:"/big-city-life/img/21.af3b49e3.png",revision:null},{url:"/big-city-life/img/21.c1a357c9.png",revision:null},{url:"/big-city-life/img/22.09a50ac8.png",revision:null},{url:"/big-city-life/img/22.2e4d01c1.png",revision:null},{url:"/big-city-life/img/22.45f05941.png",revision:null},{url:"/big-city-life/img/22.54e066ee.png",revision:null},{url:"/big-city-life/img/22.5c4d5746.png",revision:null},{url:"/big-city-life/img/22.8b139813.png",revision:null},{url:"/big-city-life/img/23.275d0741.png",revision:null},{url:"/big-city-life/img/23.35c574d4.png",revision:null},{url:"/big-city-life/img/23.682b25d3.png",revision:null},{url:"/big-city-life/img/23.74f61447.png",revision:null},{url:"/big-city-life/img/23.bb020103.png",revision:null},{url:"/big-city-life/img/23.d8e17eb4.png",revision:null},{url:"/big-city-life/img/3.23fae275.png",revision:null},{url:"/big-city-life/img/3.34cdbe7d.png",revision:null},{url:"/big-city-life/img/3.74cb479a.png",revision:null},{url:"/big-city-life/img/3.7f22ef58.png",revision:null},{url:"/big-city-life/img/3.86b515d9.png",revision:null},{url:"/big-city-life/img/3.f187808a.png",revision:null},{url:"/big-city-life/img/4.632574f9.png",revision:null},{url:"/big-city-life/img/4.803778cd.png",revision:null},{url:"/big-city-life/img/4.c6c04d7c.png",revision:null},{url:"/big-city-life/img/4.e69f4b80.png",revision:null},{url:"/big-city-life/img/4.f827cf26.png",revision:null},{url:"/big-city-life/img/4.fc4e2ced.png",revision:null},{url:"/big-city-life/img/5.4bd67360.png",revision:null},{url:"/big-city-life/img/5.590422c6.png",revision:null},{url:"/big-city-life/img/5.89c7ab3b.png",revision:null},{url:"/big-city-life/img/5.a25381a6.png",revision:null},{url:"/big-city-life/img/5.e30119f6.png",revision:null},{url:"/big-city-life/img/5.fb8ad8be.png",revision:null},{url:"/big-city-life/img/6.24b754ce.png",revision:null},{url:"/big-city-life/img/6.3a696a96.png",revision:null},{url:"/big-city-life/img/6.863382de.png",revision:null},{url:"/big-city-life/img/6.895dfc90.png",revision:null},{url:"/big-city-life/img/6.bc2381ea.png",revision:null},{url:"/big-city-life/img/6.ed0e84be.png",revision:null},{url:"/big-city-life/img/7.0b13cd3d.png",revision:null},{url:"/big-city-life/img/7.1759bdf7.png",revision:null},{url:"/big-city-life/img/7.37e6b6dc.png",revision:null},{url:"/big-city-life/img/7.8236216c.png",revision:null},{url:"/big-city-life/img/7.e45d2e5f.png",revision:null},{url:"/big-city-life/img/7.f3401ce9.png",revision:null},{url:"/big-city-life/img/8.18c11351.png",revision:null},{url:"/big-city-life/img/8.1cc25b7a.png",revision:null},{url:"/big-city-life/img/8.233bf11c.png",revision:null},{url:"/big-city-life/img/8.ada1a0a6.png",revision:null},{url:"/big-city-life/img/8.b38d65ee.png",revision:null},{url:"/big-city-life/img/8.f87c2edb.png",revision:null},{url:"/big-city-life/img/9.25d616e8.png",revision:null},{url:"/big-city-life/img/9.2bd820b7.png",revision:null},{url:"/big-city-life/img/9.372bf4e2.png",revision:null},{url:"/big-city-life/img/9.8bb95a8f.png",revision:null},{url:"/big-city-life/img/9.ea46335c.png",revision:null},{url:"/big-city-life/img/9.f33c1202.png",revision:null},{url:"/big-city-life/index.html",revision:"48ce24a6472af9b50dec3fea1e10d1ed"},{url:"/big-city-life/js/app.d780e5b2.js",revision:null},{url:"/big-city-life/js/chunk-vendors.1d7257bb.js",revision:null},{url:"/big-city-life/manifest.json",revision:"a200fa4b761f3ad87342deb26ce64c05"},{url:"/big-city-life/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
