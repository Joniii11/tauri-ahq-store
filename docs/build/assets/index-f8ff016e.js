import{R as i,j as o}from"./index-7d433165.js";var h={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d=i.createContext&&i.createContext(h),l=globalThis&&globalThis.__assign||function(){return l=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++){r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},l.apply(this,arguments)},g=globalThis&&globalThis.__rest||function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(e[n[a]]=t[n[a]]);return e};function m(t){return t&&t.map(function(r,e){return i.createElement(r.tag,l({key:e},r.attr),m(r.child))})}function v(t){return function(r){return i.createElement(w,l({attr:l({},t.attr)},r),m(t.child))}}function w(t){var r=function(e){var n=t.attr,a=t.size,s=t.title,f=g(t,["attr","size","title"]),u=a||e.size||"1em",c;return e.className&&(c=e.className),t.className&&(c=(c?c+" ":"")+t.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,f,{className:c,style:l(l({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&i.createElement("title",null,s),t.children)};return d!==void 0?i.createElement(d.Consumer,null,function(e){return r(e)}):r(h)}function x(t){return v({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11 18.004h-4.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99"}},{tag:"path",attr:{d:"M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}},{tag:"path",attr:{d:"M20.2 20.2l1.8 1.8"}}]})(t)}const y=()=>window.location.pathname="/home",b=()=>window.open("https://discord.gg/wmEm7DNwwj","_blank");function p(){const t=window.location.search;return o.jsxs("div",{className:"err-main",children:[o.jsxs("div",{className:"err-body",children:[o.jsx(x,{}),o.jsx("h1",{children:"Oops!"}),o.jsx("h2",{children:t=="type=404"?"The requested resource was not found":"Something went wrong"})]}),o.jsxs("div",{className:"err-footer",children:[o.jsx("button",{onClick:()=>y(),children:"Home"}),o.jsx("button",{onClick:()=>b(),children:"Report"})]})]})}export{p as default};
