var h=Object.defineProperty,m=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var s=(o,e,t)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,c=(o,e)=>{for(var t in e||(e={}))k.call(e,t)&&s(o,t,e[t]);if(a)for(var t of a(e))b.call(e,t)&&s(o,t,e[t]);return o},l=(o,e)=>m(o,F(e));import{f as g,g as _,r as v,o as C,a as D,d as n,t as d,b as r,w as i,F as x,e as p}from"./app.efc47fdc.js";const A=n("h3",null,"\u9ED8\u8BA4\u9632\u6296",-1),E=p(" Click "),N=n("h3",null,"\u5173\u95ED\u9632\u6296",-1),V=p(" Click "),w={name:"DebounceButtonDemo1"},q=g(l(c({},w),{setup(o){const e=_(0),t=_(0),f=()=>{e.value++},B=()=>{t.value++};return(j,y)=>{const u=v("g-d-button");return C(),D(x,null,[A,n("p",null,"\u70B9\u51FB\u6B21\u6570\uFF1A"+d(e.value),1),r(u,{"on-click":f},{default:i(()=>[E]),_:1}),N,n("p",null,"\u70B9\u51FB\u6B21\u6570\uFF1A"+d(t.value),1),r(u,{"on-click":B,debounce:!1},{default:i(()=>[V]),_:1})],64)}}}));export{q as default};