import{_ as r,M as e,p as i,q as u,N as a,V as t,a1 as k,Q as n,t as s}from"./framework-7d8e42ec.js";const d={},m=k(`<h1 id="饼图" tabindex="-1"><a class="header-anchor" href="#饼图" aria-hidden="true">#</a> 饼图</h1><h2 id="config-interface" tabindex="-1"><a class="header-anchor" href="#config-interface" aria-hidden="true">#</a> Config interface</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BaseConfig</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 标题
     */</span>
    title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 调色板
     */</span>
    colors<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token doc-comment comment">/**
     * 是否隐藏工具箱
     */</span>
    hideToolBox<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PieConfig</span> <span class="token keyword">extends</span> <span class="token class-name">BaseConfig</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 类型：饼图
     */</span>
    type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span>
    <span class="token doc-comment comment">/**
     * 饼图数据
     */</span>
    data<span class="token operator">?</span><span class="token operator">:</span> PieSeriesOption<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span>
    <span class="token doc-comment comment">/**
     * 饼图的半径
     */</span>
    radius<span class="token operator">?</span><span class="token operator">:</span> PieSeriesOption<span class="token punctuation">[</span><span class="token string">&#39;radius&#39;</span><span class="token punctuation">]</span>
    <span class="token doc-comment comment">/**
     * label 的位置
     * &#39;outside&#39; 饼图扇区外侧，通过视觉引导线连到相应的扇区。
     * &#39;inside&#39; 饼图扇区内部。
     * &#39;inner&#39; 同 &#39;inside&#39;。
     * &#39;center&#39; 在饼图中心位置。见圆环图示例
     */</span>
    labelPosition<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;outside&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;inside&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;inner&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span>
    <span class="token doc-comment comment">/**
     * 是否显示饼 item 的边框
     */</span>
    showBorder<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
     *  &#39;radius&#39; 扇区圆心角展现数据的百分比，半径展现数据的大小。
     *  &#39;area&#39; 所有扇区圆心角相同，仅通过半径展现数据大小。
     */</span>
    roseType<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token string">&#39;radius&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;area&#39;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="饼图-1" tabindex="-1"><a class="header-anchor" href="#饼图-1" aria-hidden="true">#</a> 饼图</h2><div class="custom-container tip"><p class="custom-container-title">2.1.6+</p><p>增加图例位置配置 api，默认 <code>right</code></p></div>`,5),v=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("examples-base-wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("GChart")]),s(),n("span",{class:"token attr-name"},":config"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("chartConfig"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toRaw"),n("span",{class:"token punctuation"},","),s(" watch"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" toRefs"),n("span",{class:"token punctuation"},","),s(" onMounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" ChartConfig "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@component/GChart/interface/ChartConfig'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" chartConfig "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("ChartConfig"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'pie'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"labelPosition"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'outside'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"335"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'直接访问直接访问直接访问直接访问'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"234"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'联盟广告'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1548"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎222'"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"legendPosition"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'right'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".examples-base-wrapper"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("h2",{id:"圆环图",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#圆环图","aria-hidden":"true"},"#"),s(" 圆环图")],-1),y=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("examples-base-wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("GChart")]),s(),n("span",{class:"token attr-name"},":config"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("chartConfig"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toRaw"),n("span",{class:"token punctuation"},","),s(" watch"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" toRefs"),n("span",{class:"token punctuation"},","),s(" onMounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" ChartConfig "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@component/GChart/interface/ChartConfig'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" chartConfig "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("ChartConfig"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'pie'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"labelPosition"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'outside'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"radius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'30%'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'70%'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"335"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'直接访问直接访问直接访问直接访问'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"234"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'联盟广告'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1548"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"234"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'联盟广告2'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1548"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎23'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎22'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1548"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎3'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎6'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"234"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'联盟广告3'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1548"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎4'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎5'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1548"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎46'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎56'"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"legendPosition"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".examples-base-wrapper"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("h2",{id:"南丁格尔图-玫瑰图",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#南丁格尔图-玫瑰图","aria-hidden":"true"},"#"),s(" 南丁格尔图（玫瑰图）")],-1),h=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("examples-base-wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("GChart")]),s(),n("span",{class:"token attr-name"},":config"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("chartConfig"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toRaw"),n("span",{class:"token punctuation"},","),s(" watch"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" toRefs"),n("span",{class:"token punctuation"},","),s(" onMounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" ChartConfig "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@component/GChart/interface/ChartConfig'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" chartConfig "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("ChartConfig"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'南丁格尔图（玫瑰图）'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'pie'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"labelPosition"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'outside'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"radius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'30%'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'70%'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"roseType"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'area'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"335"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'直接访问直接访问直接访问直接访问'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"234"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'联盟广告'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1548"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"234"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'联盟广告2'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1548"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎23'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎22'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1548"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎3'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎6'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"234"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'联盟广告3'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1548"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎4'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎5'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1548"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎46'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'搜索引擎56'"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"legendPosition"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bottom'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".examples-base-wrapper"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(C,_){const p=e("Charts-pie-demo1"),o=e("demo-block"),l=e("Charts-pie-demo2"),c=e("Charts-pie-demo3");return i(),u("div",null,[m,a(o,null,{code:t(()=>[v]),default:t(()=>[a(p)]),_:1}),b,a(o,null,{code:t(()=>[y]),default:t(()=>[a(l)]),_:1}),g,a(o,null,{code:t(()=>[h]),default:t(()=>[a(c)]),_:1})])}const x=r(d,[["render",f],["__file","Pie.html.vue"]]);export{x as default};
