import{_ as n,p as s,q as a,a1 as e}from"./framework-7d8e42ec.js";const t={},p=e(`<h1 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h1><h2 id="tothousands" tabindex="-1"><a class="header-anchor" href="#tothousands" aria-hidden="true">#</a> toThousands</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 数字转换成千分位
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>numer | string<span class="token punctuation">}</span> number 要格式化的数字
 * <span class="token keyword">@returns</span> 千分位分割字符串
 */</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">toThousands</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="restrictdecimals" tabindex="-1"><a class="header-anchor" href="#restrictdecimals" aria-hidden="true">#</a> restrictDecimals</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 只允许存在数字或小数点后指定位数
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> 要格式化的数字
 * <span class="token keyword">@param</span> <span class="token parameter">s</span> 小数点后位数
 * <span class="token keyword">@returns</span> 格式化后的值
 */</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">restrictDecimals</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> s<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clearnonum" tabindex="-1"><a class="header-anchor" href="#clearnonum" aria-hidden="true">#</a> clearNoNum</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 格式化成整数 or 小数（未指定小数位数）
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> 需要格式化的值
 * <span class="token keyword">@returns</span> 数值
 */</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">clearNoNum</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getnumunit" tabindex="-1"><a class="header-anchor" href="#getnumunit" aria-hidden="true">#</a> getNumUnit</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 依照数值，获取当前数值的单位
 * <span class="token keyword">@param</span> <span class="token parameter">number</span>
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">getNumUnit</span><span class="token punctuation">(</span><span class="token builtin">number</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[p];function r(o,c){return s(),a("div",null,i)}const d=n(t,[["render",r],["__file","number.html.vue"]]);export{d as default};