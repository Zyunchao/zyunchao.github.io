import{c as p,r as m,b as i,M as t,p as u,q as f,Q as b,N as a,V as l,O as y,t as s,_ as g}from"./framework-7d8e42ec.js";const v={class:"examples-base-wrapper"},C=s(" 打开 "),V=s(" 这是抽屉的内容 "),k={name:"DialogTest"},x=p({...k,setup(h){const e=m(!1),n=i([{label:"提交",type:"primary",loading:!0,onClick:()=>{console.log("%c 提交","color: #67c23a;")}},{label:"保存",type:"primary",onClick:()=>{console.log("%c 保存","color: #67c23a;")}}]),c=()=>{e.value=!0};return(w,o)=>{const r=t("el-button"),_=t("g-modal");return u(),f(y,null,[b("div",v,[a(r,{type:"primary",onClick:c},{default:l(()=>[C]),_:1})]),a(_,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),"append-to-body":"",title:"这是一个抽屉",btns:n,type:"drawer"},{default:l(()=>[V]),_:1},8,["modelValue","btns"])],64)}}}),B=g(x,[["__file","demo1.vue"]]);export{B as default};