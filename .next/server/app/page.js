(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9455:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>x});var r=s(3137),a=s(4647),i=s(4183),l=s.n(i),n=s(1775),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);s.d(t,d);let o=r.AppPageRouteModule,x=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3994)),"/Users/polluterofminds/Development/polluterofminds-site/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,4335)),"/Users/polluterofminds/Development/polluterofminds-site/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,9725)),"/Users/polluterofminds/Development/polluterofminds-site/app/not-found.tsx"]}],c=["/Users/polluterofminds/Development/polluterofminds-site/app/page.tsx"],p="/page",m={require:s,loadChunk:()=>Promise.resolve()},u=new o({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:x}})},2666:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,1297,23)),Promise.resolve().then(s.bind(s,2647))},3994:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(8144),a=s(7340),i=s(6179),l=s(5136),n=s(3670),d=s(7388),o=s.n(d),x=s(669),c=s(7766);function p({posts:e}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,r.jsxs)("div",{className:"space-y-2 pb-8 pt-6 md:space-y-5",children:[r.jsx("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"Latest"}),r.jsx("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:o().description})]}),(0,r.jsxs)("ul",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[!e.length&&"No posts found.",e.slice(0,5).map(e=>{let{slug:t,date:s,title:a,summary:i,tags:d}=e;return r.jsx("li",{className:"py-12",children:r.jsx("article",{children:(0,r.jsxs)("div",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0",children:[(0,r.jsxs)("dl",{children:[r.jsx("dt",{className:"sr-only",children:"Published on"}),r.jsx("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:r.jsx("time",{dateTime:s,children:(0,x.p)(s,o().locale)})})]}),(0,r.jsxs)("div",{className:"space-y-5 xl:col-span-3",children:[(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{children:[r.jsx("h2",{className:"text-2xl font-bold leading-8 tracking-tight",children:r.jsx(l.Z,{href:`/blog/${t}`,className:"text-gray-900 dark:text-gray-100",children:a})}),r.jsx("div",{className:"flex flex-wrap",children:d.map(e=>r.jsx(n.Z,{text:e},e))})]}),r.jsx("div",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:i})]}),r.jsx("div",{className:"text-base font-medium leading-6",children:r.jsx(l.Z,{href:`/blog/${t}`,className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":`Read "${a}"`,children:"Read more →"})})]})]})})},t)})]})]}),e.length>5&&r.jsx("div",{className:"flex justify-end text-base font-medium leading-6",children:r.jsx(l.Z,{href:"/blog",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"All posts",children:"All Posts →"})}),o().newsletter?.provider&&r.jsx("div",{className:"flex items-center justify-center pt-4",children:r.jsx(c.ZP,{})})]})}async function m(){let e=(0,a.O2)(i.R6),t=(0,a.ND)(e).filter(e=>!1===e.draft);return r.jsx(p,{posts:t})}},3670:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(8144),a=s(4602),i=s.n(a),l=s(6749);let n=({text:e})=>r.jsx(i(),{href:`/tags/${(0,l.slug)(e)}`,className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:e.split(" ").join("-")})}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[393,818,986,749,297,388,313,179],()=>s(9455));module.exports=r})();