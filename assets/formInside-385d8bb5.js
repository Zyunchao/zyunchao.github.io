import{c as d,u as r}from"./userList-37b4d28b.js";import{c as g,r as h,M as l,p as v,q as x,N as s,z as y,V as i,t as _,_ as C}from"./framework-7d8e42ec.js";const I={class:"box"},b=_(" 获取数据 "),k=_(" 重置 "),F={name:"InfoAutocompleteFormInsideTest"},T=g({...F,setup(w){let t=h({instance:null,labelPosition:"right",labelWidth:"120px",model:{name:""},formItems:[{prop:"name",label:"输入建议",span:24,controlConfig:{type:"infoAutocomplete",columns:d,fetchSuggestions:u,valueKey:"name"}}]});const m=()=>{console.log("%c data =========== ","color: #67c23a;",t.value.model)},f=()=>{t.value.instance.resetFields()};let a;function u(e,o){const n=e?r.filter(p(e)):r;clearTimeout(a),a=setTimeout(()=>{o(n)},2e3*Math.random())}function p(e){return o=>o.name.toLowerCase().indexOf(e.toLowerCase())===0}return(e,o)=>{const n=l("g-form"),c=l("el-button");return v(),x("div",I,[s(n,{config:y(t)},null,8,["config"]),s(c,{type:"primary",onClick:m},{default:i(()=>[b]),_:1}),s(c,{type:"primary",onClick:f},{default:i(()=>[k]),_:1})])}}});const N=C(T,[["__scopeId","data-v-0f51c22a"],["__file","formInside.vue"]]);export{N as default};