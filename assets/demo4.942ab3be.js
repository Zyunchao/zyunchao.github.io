var e=Object.defineProperty,a=Object.defineProperties,d=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,d,s)=>d in a?e(a,d,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[d]=s;"undefined"!=typeof require&&require;import{f as i,p as o,g as l,k as c,h as m,r as p,o as u,a as f,b,w as y,d as g,l as w,F as v,e as O}from"./app.e2777018.js";var h={data1:[{id:"1",date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:"2",date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:"3",date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:"4",date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{id:"5",date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:"6",date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:"7",date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:"8",date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{id:"9",date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:"10",date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],data2:[{id:"1",date:"2016-05-02",name:"胡图图",address:"上海市普陀区金沙江路 1518 弄"},{id:"2",date:"2016-05-04",name:"胡图图",address:"上海市普陀区金沙江路 1517 弄"},{id:"3",date:"2016-05-01",name:"胡图图",address:"上海市普陀区金沙江路 1519 弄"},{id:"4",date:"2016-05-03",name:"胡图图",address:"上海市普陀区金沙江路 1516 弄"},{id:"5",date:"2016-05-02",name:"胡图图",address:"上海市普陀区金沙江路 1518 弄"},{id:"6",date:"2016-05-04",name:"胡图图",address:"上海市普陀区金沙江路 1517 弄"},{id:"7",date:"2016-05-01",name:"胡图图",address:"上海市普陀区金沙江路 1519 弄"},{id:"8",date:"2016-05-03",name:"胡图图",address:"上海市普陀区金沙江路 1516 弄"},{id:"9",date:"2016-05-01",name:"胡图图",address:"上海市普陀区金沙江路 1519 弄"},{id:"10",date:"2016-05-03",name:"胡图图",address:"上海市普陀区金沙江路 1516 弄"}],data3:[{id:"1",date:"2016-05-02",name:"小豆丁",address:"上海市普陀区金沙江路 1518 弄"},{id:"2",date:"2016-05-04",name:"小豆丁",address:"上海市普陀区金沙江路 1517 弄"},{id:"3",date:"2016-05-01",name:"小豆丁",address:"上海市普陀区金沙江路 1519 弄"},{id:"4",date:"2016-05-03",name:"小豆丁",address:"上海市普陀区金沙江路 1516 弄"},{id:"5",date:"2016-05-02",name:"小豆丁",address:"上海市普陀区金沙江路 1518 弄"},{id:"6",date:"2016-05-04",name:"小豆丁",address:"上海市普陀区金沙江路 1517 弄"},{id:"7",date:"2016-05-01",name:"小豆丁",address:"上海市普陀区金沙江路 1519 弄"},{id:"8",date:"2016-05-03",name:"小豆丁",address:"上海市普陀区金沙江路 1516 弄"},{id:"9",date:"2016-05-01",name:"小豆丁",address:"上海市普陀区金沙江路 1519 弄"},{id:"10",date:"2016-05-03",name:"小豆丁",address:"上海市普陀区金沙江路 1516 弄"}]};o("data-v-0ac6cf4c");const j=O(" 添加勾选项 "),P=O(" 清空勾选项 "),R=O(" 获取勾选项 "),_={class:"table-demo1"};l();var k,C=i((k=((e,a)=>{for(var d in a||(a={}))t.call(a,d)&&n(e,d,a[d]);if(s)for(var d of s(a))r.call(a,d)&&n(e,d,a[d]);return e})({},{name:"TableDemo4"}),a(k,d({setup:function(e){const a=c([{prop:"date",label:"日期",width:180},{prop:"name",label:"姓名",width:180},{prop:"address",label:"地址"}]),d=c({instance:null,columns:a,data:h.data1,showSelection:!0,selectedRows:[h.data1[0],h.data1[1],h.data1[2]],pagination:{pageSize:10,currentPage:1,total:30,onChange(e,a){d.data=h[`data${e}`]}}});let s=m(3);const t=()=>{s.value<h.data1.length&&d.selectedRows.push(h.data1[s.value++])},r=()=>{d.selectedRows=[],s.value=0},n=()=>{console.log("%c selectRows == ","color: #67c23a;",d.selectedRows)};return(e,a)=>{const s=p("el-button"),i=p("g-table");return u(),f(v,null,[b(s,{type:"primary",onClick:t},{default:y((()=>[j])),_:1}),b(s,{type:"primary",onClick:r},{default:y((()=>[P])),_:1}),b(s,{type:"success",onClick:n},{default:y((()=>[R])),_:1}),g("div",_,[b(i,{config:w(d)},null,8,["config"])])],64)}}}))));C.__scopeId="data-v-0ac6cf4c";export{C as default};