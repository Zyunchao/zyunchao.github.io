var d=Object.defineProperty,u=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var n=(a,e,o)=>e in a?d(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,r=(a,e)=>{for(var o in e||(e={}))m.call(e,o)&&n(a,o,e[o]);if(s)for(var o of s(e))f.call(e,o)&&n(a,o,e[o]);return a},_=(a,e)=>u(a,p(e));import{_ as i,f as b,r as h,o as k,a as v,b as C,k as D}from"./app.c4386b48.js";import{t as g}from"./treeData.bd715954.js";const x={class:"tree-demo1"},B={name:"TreeDemo3"},j=b(_(r({},B),{setup(a){const e=[{label:"\u6DFB\u52A0\u83DC\u5355",onClick:()=>{console.log("%c \u6DFB\u52A0\u83DC\u5355.....","color: #e6a23c;")}}],o=(t,c)=>{console.log("%c data == ","color: #e6a23c;",t),console.log("%c node == ","color: #67c23a;",c)};return(t,c)=>{const l=h("g-tree");return k(),v("div",x,[C(l,{"show-btn-area":!1,data:D(g),btns:e,"show-checkbox":"",onNodeClick:o,onCheck:o},null,8,["data"])])}}}));var F=i(j,[["__scopeId","data-v-69f88cba"]]);export{F as default};