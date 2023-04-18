import{_ as c,M as o,p as i,q as r,Q as n,N as a,V as t,t as s,a1 as u}from"./framework-7d8e42ec.js";const k={},d=n("h1",{id:"buttongroup",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#buttongroup","aria-hidden":"true"},"#"),s(" ButtonGroup")],-1),b=n("p",null,"按钮组，基础组件，可配置的按钮列表",-1),m=n("p",null,"组件服务于：",-1),v=s("BaseModule"),y=s("Modal"),g=s("Tree"),f=u(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 按钮组的配置
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">BtnProps</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 按钮名称
     */</span>
    label<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 授权标识
     */</span>
    authCode<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 按钮的类型，同 Element Button
     */</span>
    type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;danger&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;default&#39;</span>
    <span class="token doc-comment comment">/**
     * 是否为文字按钮 2.2.0
     */</span>
    text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token doc-comment comment">/**
     * 是否显示文字按钮背景颜色 2.2.0
     */</span>
    bg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token doc-comment comment">/**
     * 禁用
     */</span>
    disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>row<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> index<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span>
    <span class="token doc-comment comment">/**
     * 事件
     */</span>
    onClick<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
    <span class="token doc-comment comment">/**
     * 按钮尺寸
     */</span>
    size<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;large&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;default&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;small&#39;</span>
    <span class="token doc-comment comment">/**
     * 加载中
     */</span>
    loading<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>row<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> index<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span>
    <span class="token doc-comment comment">/**
     * 是否为朴素按钮
     */</span>
    plain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token doc-comment comment">/**
     * 是否为圆角按钮
     */</span>
    round<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token doc-comment comment">/**
     * 是否为圆形按钮
     */</span>
    circle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token doc-comment comment">/**
     * 是否隐藏
     */</span>
    hide<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>row<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> index<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span>
    <span class="token doc-comment comment">/**
     * 类名
     */</span>
    <span class="token keyword">class</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 具体的行内样式
     */</span>
    style<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>k<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 按钮图标，（仅支持组件库内 icon 图标）
     */</span>
    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>`,2),h=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        普通：`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("g-button-group")]),s(),n("span",{class:"token attr-name"},":btns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btnsNomal"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        禁用：`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("g-button-group")]),s(),n("span",{class:"token attr-name"},":btns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("disabledBtns"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        隐藏：`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("g-button-group")]),s(),n("span",{class:"token attr-name"},":btns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("hideBtns"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        加载：`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("g-button-group")]),s(),n("span",{class:"token attr-name"},":btns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("loadingBtns"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        文本：`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("g-button-group")]),s(),n("span",{class:"token attr-name"},":btns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("textBtns"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'BtnGroupTest'"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toRaw"),n("span",{class:"token punctuation"},","),s(" watch"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" toRefs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" BtnProps "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@component/GButtonGroup/interface/BtnProps'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" isHide "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" isLoading "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" isDis "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"btnsNomal"),n("span",{class:"token operator"},":"),s(" BtnProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'el-ChatLineRound'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'el-ChatLineRound'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'el-ChatLineRound'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'el-ChatLineRound'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'el-ChatLineRound'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'el-ChatLineRound'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'自定义样式'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"backgroundColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ff3040'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'el-ChatLineRound'"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"disabledBtns"),n("span",{class:"token operator"},":"),s(" BtnProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'控制禁用'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"onClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            isDis`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("isDis"),n("span",{class:"token punctuation"},"."),s(`value
            disabledBtns`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("disabled "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("disabledBtns"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s(`disabled
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'值控制'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'值传递'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(" isDis"),n("span",{class:"token punctuation"},"."),s(`value
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'函数返回'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"disabled"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" isDis"),n("span",{class:"token punctuation"},"."),s(`value
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"hideBtns"),n("span",{class:"token operator"},":"),s(" BtnProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'控制隐藏'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"onClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            isHide`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("isHide"),n("span",{class:"token punctuation"},"."),s(`value
            hideBtns`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("hide "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("hideBtns"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s(`hide
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'值控制'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"hide"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'值传递'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"hide"),n("span",{class:"token operator"},":"),s(" isHide"),n("span",{class:"token punctuation"},"."),s(`value
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'函数返回'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" isHide"),n("span",{class:"token punctuation"},"."),s(`value
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"loadingBtns"),n("span",{class:"token operator"},":"),s(" BtnProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'控制加载'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"onClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            isLoading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("isLoading"),n("span",{class:"token punctuation"},"."),s(`value
            loadingBtns`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("loading "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("loadingBtns"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s(`loading
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'值控制'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"loading"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'值传递'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"loading"),n("span",{class:"token operator"},":"),s(" isLoading"),n("span",{class:"token punctuation"},"."),s(`value
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'函数返回'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"loading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" isLoading"),n("span",{class:"token punctuation"},"."),s(`value
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"textBtns"),n("span",{class:"token operator"},":"),s(" BtnProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"bg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"bg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"bg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'自定义样式'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'green'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"bg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".btn-box"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(B,w){const e=o("RouterLink"),p=o("ButtonGroup-demo1"),l=o("demo-block");return i(),r("div",null,[d,b,m,n("ul",null,[n("li",null,[a(e,{to:"/components/BaseModule.html"},{default:t(()=>[v]),_:1})]),n("li",null,[a(e,{to:"/components/Modal.html"},{default:t(()=>[y]),_:1})]),n("li",null,[a(e,{to:"/components/Tree.html"},{default:t(()=>[g]),_:1})])]),f,a(l,null,{code:t(()=>[h]),default:t(()=>[a(p)]),_:1})])}const C=c(k,[["render",_],["__file","ButtonGroup.html.vue"]]);export{C as default};
