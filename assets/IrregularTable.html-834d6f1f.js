import{_ as u,M as e,p as k,q as d,N as a,V as t,a1 as l,Q as n,t as s}from"./framework-d7d41868.js";const m={},b=l('<h1 id="irregulartable" tabindex="-1"><a class="header-anchor" href="#irregulartable" aria-hidden="true">#</a> IrregularTable</h1><p>组件意义</p><ul><li>需求：一些需要表格布局的展示方式</li><li>痛点：纯手写需要写大量的 html 布局代码，且需要频繁的书写 合并单元格，并计算掉被合并的单元格，工作量巨大繁琐</li><li>解决：将繁琐的合并单元格计算、大量的 html 结构封装了起来，形成当前组件</li><li>意为：不规则表格</li></ul><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>使用当前表格，就像在定位坐标，当你知道一个有效单元格的 x, y （row, col） 后，再横向、纵向对比，确定 <code>rowspan</code> <code>colspan</code> 就可以将目标单元格合并</p><p>而定位坐标的前提，是需要一个画布</p><h2 id="画布" tabindex="-1"><a class="header-anchor" href="#画布" aria-hidden="true">#</a> 画布</h2><p>首先确定最小单元格，以这个最小单元格（行、列）出发，用最小单元格去合并大的单元格，最终形成整体布局</p>',8),v=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("g-irregular-table")]),s(),n("span",{class:"token attr-name"},":col-num"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("38"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":row-num"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("5"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":cell-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("[]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'DrawingBoard'"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toRaw"),n("span",{class:"token punctuation"},","),s(" watch"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" toRefs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("h2",{id:"设计",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设计","aria-hidden":"true"},"#"),s(" 设计")],-1),h=n("p",null,"可以理解为把部分小的单元格去掉，合并成大的单元格，小的是点，大的是面，最终组合成一个不规则的表格展示布局",-1),f=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"无论是数据标题，还是数据本身，都是作为单元格在表格内展示的，修改数据时，要从单元格列表中寻找，然后改变数据，所以，一定要将单元格配置列表定义为响应式对象")],-1),w=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("g-irregular-table")]),s(),n("span",{class:"token attr-name"},":col-num"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("38"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":row-num"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("5"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":cell-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("efficaciousCellList"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'IrregularTableDesign'"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toRaw"),n("span",{class:"token punctuation"},","),s(" watch"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" toRefs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" getEfficaciousCellList "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./data/efficaciousCellList'"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" efficaciousCellList "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getEfficaciousCellList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-tsx line-numbers-mode","data-ext":"tsx"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`\r
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" IrregularTableCell "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'jn-ve-global'"),s(`\r
\r
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`\r
    `),n("span",{class:"token keyword"},"const"),s(" row1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"reactive"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("IrregularTableCell"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'机 构'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`\r
            rowspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'名 称'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"14"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'电 话'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"28"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),s(`\r
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`\r
    `),n("span",{class:"token keyword"},"const"),s(" row2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"reactive"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("IrregularTableCell"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'地 址'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"14"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'许可证编号'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"28"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),s(`\r
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`\r
    `),n("span",{class:"token keyword"},"const"),s(" row3 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"reactive"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("IrregularTableCell"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'用 户'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`\r
            rowspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'名 称'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"14"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'电 话'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"28"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),s(`\r
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`\r
    `),n("span",{class:"token keyword"},"const"),s(" row4 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"reactive"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("IrregularTableCell"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'地 址'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"14"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'联系人'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"28"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),s(`\r
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`\r
    \r
    `),n("span",{class:"token keyword"},"const"),s(" row5 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"reactive"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("IrregularTableCell"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`\r
            colspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),s(`\r
            rowspan`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'万'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'千'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'百'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"33"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'十'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"34"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'元'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"35"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'角'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token punctuation"},"{"),s(`\r
            content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'分'"),n("span",{class:"token punctuation"},","),s(`\r
            ri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`\r
            ci`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"37"),n("span",{class:"token punctuation"},","),s(`\r
            align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(`\r
        `),n("span",{class:"token punctuation"},"}"),s(`\r
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`\r
\r
    `),n("span",{class:"token keyword"},"const"),s(" efficaciousCellList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"computed"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("IrregularTableCell"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"["),s(`\r
        `),n("span",{class:"token operator"},"..."),s("row1"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token operator"},"..."),s("row2"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token operator"},"..."),s("row3"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token operator"},"..."),s("row4"),n("span",{class:"token punctuation"},","),s(`\r
        `),n("span",{class:"token operator"},"..."),s(`row5\r
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`\r
\r
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`\r
        efficaciousCellList\r
    `),n("span",{class:"token punctuation"},"}"),s(`\r
`),n("span",{class:"token punctuation"},"}"),s(`\r
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=l(`<h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rowNum</td><td>表格有限行数（画布 y）</td><td>number</td><td>0</td></tr><tr><td>colNum</td><td>表格有限列数 （画布 x）</td><td>number</td><td>0</td></tr><tr><td>cellList</td><td>单元格（有效的节点）</td><td>Cell[]</td><td>[]</td></tr></tbody></table><h2 id="单元格可配属性" tabindex="-1"><a class="header-anchor" href="#单元格可配属性" aria-hidden="true">#</a> 单元格可配属性</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> VNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">interface</span> <span class="token class-name">Cell</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 内容
     */</span>
    content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> VNode <span class="token operator">|</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element
    <span class="token doc-comment comment">/**
     * 行坐标（起始）
     */</span>
    ri<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token doc-comment comment">/**
     * 列坐标（起始）
     */</span>
    ci<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token doc-comment comment">/**
     * 列合并
     */</span>
    colspan<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token doc-comment comment">/**
     * 行合并
     */</span>
    rowspan<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token doc-comment comment">/**
     * 是否销毁（被合并的）
     */</span>
    destroyed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token doc-comment comment">/**
     * 内容对齐方式
     */</span>
    align<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span>
    <span class="token doc-comment comment">/**
     * 额外的类名
     */</span>
    <span class="token keyword">class</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 数据的 key，用来查找
     */</span>
    propKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function x(C,I){const p=e("IrregularTable-drawingBoard"),o=e("demo-block"),r=e("IrregularTable-design"),c=e("CodeGroupItem"),i=e("CodeGroup");return k(),d("div",null,[b,a(o,null,{code:t(()=>[v]),default:t(()=>[a(p)]),_:1}),g,h,f,a(o,null,{code:t(()=>[a(i,null,{default:t(()=>[a(c,{title:"基本使用",active:""},{default:t(()=>[w]),_:1}),a(c,{title:"efficaciousCellList.tsx"},{default:t(()=>[y]),_:1})]),_:1})]),default:t(()=>[a(r)]),_:1}),_])}const q=u(m,[["render",x],["__file","IrregularTable.html.vue"]]);export{q as default};
