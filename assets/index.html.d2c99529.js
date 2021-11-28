import{_ as n,c as s}from"./app.f5508170.js";const a={},e=s(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># npm</span>
<span class="token function">npm</span> i jn-ve-global -S

<span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> jn-ve-global -S
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528" aria-hidden="true">#</a> \u5F15\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js \u6CE8\u518C\u672A\u5168\u5C40\u7EC4\u4EF6</span>
<span class="token keyword">import</span> GlobalComponents <span class="token keyword">from</span> <span class="token string">&#39;jn-ve-global&#39;</span>
<span class="token comment">// \u5F15\u5165\u6837\u5F0F</span>
<span class="token keyword">import</span> <span class="token string">&#39;jn-ve-global/style.css&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>GlobalComponents<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,4);function p(c,t){return e}var o=n(a,[["render",p]]);export{o as default};
