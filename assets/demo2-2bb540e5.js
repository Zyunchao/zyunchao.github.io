import{c as n,b as r,N as e,M as t,t as a,O as c,p,U as s,_ as d}from"./framework-7d8e42ec.js";const i={name:"OperateExcelDemo2"},m=n({...i,setup(_){const o=r([{type:"index",label:""},{prop:"age",label:"年龄"},{prop:"name",label:"姓名"},{prop:"sex",label:"性别",rules:[{required:!0}]},{prop:"height",label:"身高"},{prop:"hobby",label:"爱好"},{label:"操作",width:200,fixed:"right",render(l){return e(c,null,[l.edit?e(t("el-button"),{text:!0,onClick:()=>{l.edit=!1}},{default:()=>[a("保存")]}):e(t("el-button"),{text:!0,onClick:()=>{l.edit=!0}},{default:()=>[a("编辑")]}),e(t("el-button"),{text:!0},{default:()=>[a("人员设置")]}),e(t("el-button"),{text:!0,type:"danger"},{default:()=>[a("删除")]})])}}]);return(l,f)=>{const u=t("GOperateExcel");return p(),s(u,{"columns-config":o,mode:"template","file-name":"测试模板2"},null,8,["columns-config"])}}}),x=d(m,[["__file","demo2.vue"]]);export{x as default};