import{c as r,r as s,M as i,p,q as m,Q as e,v as c,N as a,V as l,O as f,t as _,_ as h}from"./framework-7d8e42ec.js";const v=e("h3",null,"默认防抖",-1),k=_(" Click "),x=e("h3",null,"关闭防抖",-1),C=_(" Click "),b={name:"DebounceButtonDemo1"},g=r({...b,setup(B){const t=s(0),o=s(0),u=()=>{t.value++},d=()=>{o.value++};return(N,V)=>{const n=i("g-d-button");return p(),m(f,null,[v,e("p",null,"点击次数："+c(t.value),1),a(n,{"on-click":u},{default:l(()=>[k]),_:1}),x,e("p",null,"点击次数："+c(o.value),1),a(n,{"on-click":d,debounce:!1},{default:l(()=>[C]),_:1})],64)}}}),q=h(g,[["__file","demo1.vue"]]);export{q as default};