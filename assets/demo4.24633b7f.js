var p=Object.defineProperty,i=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var l=(a,e,o)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,r=(a,e)=>{for(var o in e||(e={}))v.call(e,o)&&l(a,o,e[o]);if(n)for(var o of n(e))C.call(e,o)&&l(a,o,e[o]);return a},_=(a,e)=>i(a,m(e));import{_ as g,f as y,g as b,r as D,o as x,a as B,d as u,b as k,k as f}from"./app.f5508170.js";import{t as h}from"./treeData.bd715954.js";const N={class:"tree-demol-root"},j={class:"tree-demo1"},w={class:"tree-demo1"},A={name:"TreeDemo4"};function F(a){const e=[{label:"\u6DFB\u52A0\u83DC\u5355",onClick:()=>{console.log("%c \u6DFB\u52A0\u83DC\u5355.....","color: #e6a23c;")}}],o=b(["1424688522159378434","1425374667260223489","1425374958969872386"]),c=(t,s)=>{console.log("%c data == ","color: #e6a23c;",t),console.log("%c node == ","color: #67c23a;",s)};return(t,s)=>{const d=D("g-tree");return x(),B("div",N,[u("div",j,[k(d,{data:f(h),btns:e,"show-checkbox":"","default-checked-keys":o.value,onNodeClick:c,onCheck:c},null,8,["data","default-checked-keys"])]),u("div",w,[k(d,{data:f(h),btns:e,"show-checkbox":"","default-checked-keys":o.value,"filter-parent-checked-keys-flag":"",onNodeClick:c,onCheck:c},null,8,["data","default-checked-keys"])])])}}const V=y(_(r({},A),{setup:F}));var T=g(V,[["__scopeId","data-v-b6feadee"]]);export{T as default};