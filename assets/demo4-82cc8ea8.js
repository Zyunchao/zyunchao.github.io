import{c as g,b as i,r as b,M as r,p as h,q as v,N as d,V as n,Q as w,O as C,t as o,_ as x}from"./framework-7d8e42ec.js";const y=[{id:"1",date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:"2",date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:"3",date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:"4",date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{id:"5",date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:"6",date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:"7",date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:"8",date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{id:"9",date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:"10",date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],k=[{id:"1",date:"2016-05-02",name:"胡图图",address:"上海市普陀区金沙江路 1518 弄"},{id:"2",date:"2016-05-04",name:"胡图图",address:"上海市普陀区金沙江路 1517 弄"},{id:"3",date:"2016-05-01",name:"胡图图",address:"上海市普陀区金沙江路 1519 弄"},{id:"4",date:"2016-05-03",name:"胡图图",address:"上海市普陀区金沙江路 1516 弄"},{id:"5",date:"2016-05-02",name:"胡图图",address:"上海市普陀区金沙江路 1518 弄"},{id:"6",date:"2016-05-04",name:"胡图图",address:"上海市普陀区金沙江路 1517 弄"},{id:"7",date:"2016-05-01",name:"胡图图",address:"上海市普陀区金沙江路 1519 弄"},{id:"8",date:"2016-05-03",name:"胡图图",address:"上海市普陀区金沙江路 1516 弄"},{id:"9",date:"2016-05-01",name:"胡图图",address:"上海市普陀区金沙江路 1519 弄"},{id:"10",date:"2016-05-03",name:"胡图图",address:"上海市普陀区金沙江路 1516 弄"}],R=[{id:"1",date:"2016-05-02",name:"小豆丁",address:"上海市普陀区金沙江路 1518 弄"},{id:"2",date:"2016-05-04",name:"小豆丁",address:"上海市普陀区金沙江路 1517 弄"},{id:"3",date:"2016-05-01",name:"小豆丁",address:"上海市普陀区金沙江路 1519 弄"},{id:"4",date:"2016-05-03",name:"小豆丁",address:"上海市普陀区金沙江路 1516 弄"},{id:"5",date:"2016-05-02",name:"小豆丁",address:"上海市普陀区金沙江路 1518 弄"},{id:"6",date:"2016-05-04",name:"小豆丁",address:"上海市普陀区金沙江路 1517 弄"},{id:"7",date:"2016-05-01",name:"小豆丁",address:"上海市普陀区金沙江路 1519 弄"},{id:"8",date:"2016-05-03",name:"小豆丁",address:"上海市普陀区金沙江路 1516 弄"},{id:"9",date:"2016-05-01",name:"小豆丁",address:"上海市普陀区金沙江路 1519 弄"},{id:"10",date:"2016-05-03",name:"小豆丁",address:"上海市普陀区金沙江路 1516 弄"}],e={data1:y,data2:k,data3:R},S=o(" 添加勾选项 "),N=o(" 清空勾选项 "),V=o(" 获取勾选项 "),B={class:"table-demo1"},z={name:"TableDemo4"},D=g({...z,setup(T){const l=i([{prop:"date",label:"日期",width:180},{prop:"name",label:"姓名",width:180},{prop:"address",label:"地址"}]),a=i({instance:null,columns:l,data:e.data1,showSelection:!0,selectedRows:[e.data1[0],e.data1[1],e.data1[2]],pagination:{pageSize:10,currentPage:1,total:30,onChange(c,u){a.data=e[`data${c}`]}}});let t=b(3);const m=()=>{t.value<e.data1.length&&a.selectedRows.push(e.data1[t.value++])},_=()=>{a.selectedRows=[],t.value=0},p=()=>{console.log("%c selectRows == ","color: #67c23a;",a.selectedRows)};return(c,u)=>{const s=r("el-button"),f=r("g-table");return h(),v(C,null,[d(s,{type:"primary",onClick:m},{default:n(()=>[S]),_:1}),d(s,{type:"primary",onClick:_},{default:n(()=>[N]),_:1}),d(s,{type:"success",onClick:p},{default:n(()=>[V]),_:1}),w("div",B,[d(f,{config:a},null,8,["config"])])],64)}}});const E=x(D,[["__scopeId","data-v-cb67fdfa"],["__file","demo4.vue"]]);export{E as default};