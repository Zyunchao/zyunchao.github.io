import{c,b as o,N as a,M as n,C as s,t as l,O as u,p as _,q as p,_ as m}from"./framework-7d8e42ec.js";const b={class:"table-demo1"},f={name:"TableDemo1"},g=c({...f,setup(h){const t=o([{prop:"date",label:"日期",width:180},{prop:"name",label:"姓名",width:180},{prop:"address",label:"地址"},{prop:"opertion",label:"操作",width:300,fixed:"right",render(r){return a(u,null,[a(n("el-button"),{text:!0,onClick:()=>{t.find(e=>e.prop==="date").hide=!1,s(()=>{d.instance.doLayout()})}},{default:()=>[l("显示")]}),a(n("el-button"),{text:!0,type:"danger",onClick:()=>{t.find(e=>e.prop==="date").hide=!0,s(()=>{d.instance.doLayout()})}},{default:()=>[l("隐藏")]})])}}]),d=o({instance:null,columns:t,data:[{id:"1",date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:"2",date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:"3",date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:"4",date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{id:"5",date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:"6",date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:"7",date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:"8",date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],pagination:{pageSize:10,currentPage:1,total:50}});return(r,e)=>{const i=n("g-table");return _(),p("div",b,[a(i,{config:d},null,8,["config"])])}}});const v=m(g,[["__scopeId","data-v-e6eb8216"],["__file","hideColumnDemo.vue"]]);export{v as default};