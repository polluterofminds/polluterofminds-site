"use strict";(()=>{var e={};e.id=904,e.ids=[904],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6813:(e,t,r)=>{r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>c,originalPathname:()=>x,pages:()=>m,routeModule:()=>g,tree:()=>p});var s=r(3137),a=r(4647),i=r(4183),n=r.n(i),l=r(1775),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=s.AppPageRouteModule,p=["",{children:["tags",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1802)),"/Users/polluterofminds/Development/polluterofminds-site/app/tags/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,4335)),"/Users/polluterofminds/Development/polluterofminds-site/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,9725)),"/Users/polluterofminds/Development/polluterofminds-site/app/not-found.tsx"]}],m=["/Users/polluterofminds/Development/polluterofminds-site/app/tags/page.tsx"],x="/tags/page",c={require:r,loadChunk:()=>Promise.resolve()},g=new d({definition:{kind:a.x.APP_PAGE,page:"/tags/page",pathname:"/tags",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},1995:(e,t,r)=>{r.d(t,{D:()=>i});var s=r(7388),a=r.n(s);function i({title:e,description:t,image:r,...s}){return{title:e,openGraph:{title:`${e} | ${a().title}`,description:t||a().description,url:"./",siteName:a().title,images:r?[r]:[a().socialBanner],locale:"en_US",type:"website"},twitter:{title:`${e} | ${a().title}`,card:"summary_large_image",images:r?[r]:[a().socialBanner]},...s}}},1802:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p,metadata:()=>d});var s=r(8144),a=r(5136),i=r(3670),n=r(6749),l=r(9752),o=r(1995);let d=(0,o.D)({title:"Tags",description:"Things I blog about"});async function p(){let e=Object.keys(l),t=e.sort((e,t)=>l[t]-l[e]);return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0",children:[s.jsx("div",{className:"space-x-2 pb-8 pt-6 md:space-y-5",children:s.jsx("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14",children:"Tags"})}),(0,s.jsxs)("div",{className:"flex max-w-lg flex-wrap",children:[0===e.length&&"No tags found.",t.map(e=>(0,s.jsxs)("div",{className:"mb-2 mr-5 mt-2",children:[s.jsx(i.Z,{text:e}),s.jsx(a.Z,{href:`/tags/${(0,n.slug)(e)}`,className:"-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300","aria-label":`View posts tagged ${e}`,children:` (${l[e]})`})]},e))]})]})})}},3670:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(8144),a=r(4602),i=r.n(a),n=r(6749);let l=({text:e})=>s.jsx(i(),{href:`/tags/${(0,n.slug)(e)}`,className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:e.split(" ").join("-")})},9752:e=>{e.exports=JSON.parse('{"product":26,"startups":18,"writing":4,"personal":21,"dev":10}')}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[393,818,749,388,313],()=>r(6813));module.exports=s})();