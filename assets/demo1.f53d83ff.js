var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;import{f as s,h as n,m as p,r as u,o as f,q as i,l as b}from"./app.f0fab4ab.js";import{t as m}from"./treeData.c7303609.js";var d,v=s((d=((e,r)=>{for(var t in r||(r={}))o.call(r,t)&&c(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&c(e,t,r[t]);return e})({},{name:"SelectTreeDemo1"}),r(d,t({setup:function(e){const r=n("");return p((()=>r.value),(e=>{console.log("%c activeData on change == ","color: #67c23a;",e)})),(e,t)=>{const a=u("g-select-tree");return f(),i(a,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),"tree-data":b(m),placeholder:"请选择","every-choose":"",style:{width:"400px"}},null,8,["modelValue","tree-data"])}}}))));export{v as default};