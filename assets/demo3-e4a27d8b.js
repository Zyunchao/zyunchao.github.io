import{c as d,b as p,M as l,p as u,q as i,N as n,O as o,_ as s}from"./framework-7d8e42ec.js";const y=[{id:"110000",parentId:"-1",parentType:"QH",name:"北京市",level:"01",type:"QH",attribute:null,industryId:null,children:[{id:"110101",parentId:"110000",parentType:"QH",name:"东城区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110102",parentId:"110000",parentType:"QH",name:"西城区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110105",parentId:"110000",parentType:"QH",name:"朝阳区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110106",parentId:"110000",parentType:"QH",name:"丰台区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110107",parentId:"110000",parentType:"QH",name:"石景山区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110108",parentId:"110000",parentType:"QH",name:"海淀区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110109",parentId:"110000",parentType:"QH",name:"门头沟区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110111",parentId:"110000",parentType:"QH",name:"房山区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110112",parentId:"110000",parentType:"QH",name:"通州区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110113",parentId:"110000",parentType:"QH",name:"顺义区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110114",parentId:"110000",parentType:"QH",name:"昌平区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110115",parentId:"110000",parentType:"QH",name:"大兴区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110116",parentId:"110000",parentType:"QH",name:"怀柔区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110117",parentId:"110000",parentType:"QH",name:"平谷区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110118",parentId:"110000",parentType:"QH",name:"密云区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"},{id:"110119",parentId:"110000",parentType:"QH",name:"延庆区",level:"10",type:"QH",attribute:null,industryId:null,children:null,optFlag:"EDIT"}],optFlag:"EDIT"}],I={name:"AddressDemo3"},c=d({...I,setup(m){const e=p({instance:null,labelWidth:"100",model:{address:[]},formItems:[{prop:"address",label:"地址",span:24,controlConfig:{type:"address",options:y}}]}),t=[{label:"获取数据",onClick(){console.log("%c 数据：","color: #67c23a;",e.model)}},{label:"重置",type:"default",onClick(){e.instance.resetFields()}},{label:"回填",type:"default",onClick(){e.model.address=[["140000","140400","140406"],"上元大街88号"]}}];return(H,Q)=>{const a=l("g-form"),r=l("g-button-group");return u(),i(o,null,[n(a,{config:e},null,8,["config"]),n(r,{btns:t})],64)}}}),g=s(c,[["__file","demo3.vue"]]);export{g as default};