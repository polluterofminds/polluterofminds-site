"use strict";(()=>{var e={};e.id=107,e.ids=[107],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9018:(e,t,r)=>{r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>c,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>g});var n=r(3137),a=r(4647),o=r(4183),s=r.n(o),l=r(1775),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let p=n.AppPageRouteModule,g=["",{children:["blog",{children:["page",{children:["[page]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4034)),"/Users/polluterofminds/Development/polluterofminds-site/app/blog/page/[page]/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,4335)),"/Users/polluterofminds/Development/polluterofminds-site/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,9725)),"/Users/polluterofminds/Development/polluterofminds-site/app/not-found.tsx"]}],d=["/Users/polluterofminds/Development/polluterofminds-site/app/blog/page/[page]/page.tsx"],u="/blog/page/[page]/page",c={require:r,loadChunk:()=>Promise.resolve()},m=new p({definition:{kind:a.x.APP_PAGE,page:"/blog/page/[page]/page",pathname:"/blog/page/[page]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:g}})},4034:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i,generateStaticParams:()=>l});var n=r(8144),a=r(3915),o=r(7340),s=r(6179);let l=async()=>{let e=Math.ceil(s.R6.length/5),t=Array.from({length:e},(e,t)=>({page:(t+1).toString()}));return t};function i({params:e}){let t=(0,o.ND)((0,o.O2)(s.R6)),r=parseInt(e.page),l=t.slice(5*(r-1),5*r),i={currentPage:r,totalPages:Math.ceil(t.length/5)};return n.jsx(a.ZP,{posts:t,initialDisplayPosts:l,pagination:i,title:"All Posts"})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[393,818,986,194,388,313,179,711],()=>r(9018));module.exports=n})();