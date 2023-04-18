import{_ as n,p as s,q as a,a1 as e}from"./framework-7d8e42ec.js";const t={},i=e(`<h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> Dom</h1><p>操作 html 原生 dom 的方法</p><h2 id="getstyle" tabindex="-1"><a class="header-anchor" href="#getstyle" aria-hidden="true">#</a> getStyle</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 获取 dom 的样式值
 * <span class="token keyword">@param</span> <span class="token parameter">element</span> dom 节点
 * <span class="token keyword">@param</span> <span class="token parameter">attr</span> 属性
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getStyle</span><span class="token punctuation">(</span>element<span class="token operator">:</span> Element<span class="token punctuation">,</span> attr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="size2rem" tabindex="-1"><a class="header-anchor" href="#size2rem" aria-hidden="true">#</a> size2Rem</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 将传递的尺寸进行 rem 的换算
 * <span class="token keyword">@param</span> <span class="token parameter">size</span>
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">size2Rem</span><span class="token punctuation">(</span>size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[i];function c(o,r){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","dom.html.vue"]]);export{d as default};
