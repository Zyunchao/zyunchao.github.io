import{f as i,D as _,E as p,r as f,o as k,a as v,d as o,t as c,b as L,w as g,l,e as x}from"./app.efc47fdc.js";const B={class:"theme-container"},N={class:"theme-default-content"},T=o("h1",null,"404",-1),R=i({setup(b){var a,s,n;const r=_(),e=p(),t=(a=e.value.notFound)!=null?a:["Not Found"],u=()=>t[Math.floor(Math.random()*t.length)],m=(s=e.value.home)!=null?s:r.value,d=(n=e.value.backToHome)!=null?n:"Back to home";return(C,D)=>{const h=f("RouterLink");return k(),v("div",B,[o("div",N,[T,o("blockquote",null,c(u()),1),L(h,{to:l(m)},{default:g(()=>[x(c(l(d)),1)]),_:1},8,["to"])])])}}});export{R as default};