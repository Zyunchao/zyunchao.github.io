import{T as m,m as p}from"./TableColumns-60f5d6fa.js";import{S as _}from"./SearchFormConfig-88e7e86d.js";import{c as i,b as u,M as d,p as b,q as g,N as f,z as a,_ as h}from"./framework-7d8e42ec.js";const S={class:"self"},C=i({__name:"moreSearchPullDown",setup(P){const o=_(),l=m(),e={currentPage:1,pageSize:10,total:50};u({currentPage:1,pageSize:10,total:100});const s=[{label:"添加",onClick:()=>{}},{label:"授权",type:"success",onClick:()=>{console.log("%c 添加 === ","color: #e6a23c;")}}],c=n=>{const t={page:e.currentPage,size:e.pageSize,...o.model};console.log("%c params == ","color: #e6a23c;",t)};return(n,t)=>{const r=d("GBaseModule");return b(),g("div",S,[f(r,{"more-search-mode":"pull-down","highlight-current-row":"","search-form-props":a(o),btns:s,"load-table-methods":c,"table-columns":a(l),"table-data":a(p).data1,"table-pagination":e,"table-loading":!1},null,8,["search-form-props","table-columns","table-data"])])}}});const z=h(C,[["__scopeId","data-v-b11caa7a"],["__file","moreSearchPullDown.vue"]]);export{z as default};