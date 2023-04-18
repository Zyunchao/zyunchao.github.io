import{_ as n,p as s,q as a,a1 as e}from"./framework-7d8e42ec.js";const t={},p=e(`<h1 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> Bom</h1><p>一些关于浏览器 bom 的方法</p><h2 id="geturlparams" tabindex="-1"><a class="header-anchor" href="#geturlparams" aria-hidden="true">#</a> getUrlParams</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 获取 url 中的参数，并转换为对象
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getUrlParams</span><span class="token punctuation">(</span>queryString<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="detectbrowser" tabindex="-1"><a class="header-anchor" href="#detectbrowser" aria-hidden="true">#</a> detectBrowser</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token doc-comment comment">/**
 * 浏览器嗅探，获取浏览器信息
 * <span class="token keyword">@param</span> <span class="token parameter">navigator</span>
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">detectBrowser</span><span class="token punctuation">(</span>navigator<span class="token operator">?</span><span class="token operator">:</span> Window<span class="token punctuation">[</span><span class="token string">&#39;navigator&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    os<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>k<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    browser<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>k<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,r){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","bom.html.vue"]]);export{u as default};
