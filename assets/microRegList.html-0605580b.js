import{_ as n,p as s,q as a,a1 as e}from"./framework-d7d41868.js";const p="/images/micro/微应用注册列表-basic.png",t="/images/micro/微应用注册列表-dist.png",o={},i=e('<h1 id="微应用注册列表" tabindex="-1"><a class="header-anchor" href="#微应用注册列表" aria-hidden="true">#</a> 微应用注册列表</h1><p>所有的微应用都是运行在基座应用中的，而要运行哪些微应用？这个微应用的资源又在哪里？这些信息都是需要告诉基座应用的</p><p>告诉基座应用微应用的信息是通过一个 <code>list</code> 来完成的，<strong style="color:#ff3040;">依据约定的数据格式配置基座要加载微应用的信息，这个 <code>list</code> 就是所谓的 <code>微应用注册列表</code></strong></p><h2 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h2><h3 id="基座" tabindex="-1"><a class="header-anchor" href="#基座" aria-hidden="true">#</a> 基座</h3><p><img src="'+p+'" alt="注册列表"></p><h3 id="生产模式-基座包" tabindex="-1"><a class="header-anchor" href="#生产模式-基座包" aria-hidden="true">#</a> 生产模式（基座包）</h3><p><img src="'+t+`" alt="注册列表"></p><h2 id="微应用注册列表-interface" tabindex="-1"><a class="header-anchor" href="#微应用注册列表-interface" aria-hidden="true">#</a> 微应用注册列表 interface</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MicroApp</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 微应用名称，必填
     */</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 来源
     */</span>
    origin<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 缓存，默认 true
     */</span>
    keepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token comment">// 注册列表</span>
<span class="token keyword">type</span> <span class="token class-name">MicroAppList</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> MicroApp<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型格式详解" tabindex="-1"><a class="header-anchor" href="#类型格式详解" aria-hidden="true">#</a> 类型格式详解</h2><p>列表的每一个配置项，可采用字符串、对象的两种形式配置</p><ul><li><p>字符串：<code>mappingMicroList</code> 方法会自动获取当前基座的部署服务器的 <code>location.origin</code>，并拼接列表的这一项，映射成原有格式的注册数据</p><blockquote><p>常用于生产模式，可以省去很多配置</p></blockquote></li><li><p>对象：<code>mappingMicroList</code> 方法内部会自动拼接 <code>name</code> + <code>origin</code></p><blockquote><p>常用于开发模式，指定不同于基座部署环境的微应用</p></blockquote></li></ul><h3 id="配置模式示例" tabindex="-1"><a class="header-anchor" href="#配置模式示例" aria-hidden="true">#</a> 配置模式示例</h3><h4 id="生产模式下" tabindex="-1"><a class="header-anchor" href="#生产模式下" aria-hidden="true">#</a> 生产模式下</h4><p>生产模式下，微应用可直接配置字符串数组</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> isProduction <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">const</span> microAppList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;uums&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;apollo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ares&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;kinsoProduct&#39;</span><span class="token punctuation">]</span>

window<span class="token punctuation">.</span>__MICRO_APP_LIST__ <span class="token operator">=</span> <span class="token function">mappingMicroList</span><span class="token punctuation">(</span>microAppList<span class="token punctuation">,</span> isProduction<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开发模式下" tabindex="-1"><a class="header-anchor" href="#开发模式下" aria-hidden="true">#</a> 开发模式下</h4><p>由于开发模式下需要运行本地的微应用，需要指定特殊的部署地址，采用对象的配置方式，如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> isProduction <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">const</span> microAppList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3002&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;uums&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3001&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;apollo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3098&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ares&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3099&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;kinsoProduct&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3006&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

window<span class="token punctuation">.</span>__MICRO_APP_LIST__ <span class="token operator">=</span> <span class="token function">mappingMicroList</span><span class="token punctuation">(</span>microAppList<span class="token punctuation">,</span> isProduction<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="混合模式" tabindex="-1"><a class="header-anchor" href="#混合模式" aria-hidden="true">#</a> 混合模式</h4><p>目前来说，开发时，需要同时指定 已部署的微应用（如：uums、home） + 开发模式的微应用</p><p>可以采用混合模式：即 字符串 + 对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> isProduction <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">const</span> microAppList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 对象模式下，不配置 origin 或 origin 为 &#39;&#39;，都将等同于字符串的配置方式</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;uums&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;apollo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3098&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ares&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3099&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;kinsoProduct&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3006&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

window<span class="token punctuation">.</span>__MICRO_APP_LIST__ <span class="token operator">=</span> <span class="token function">mappingMicroList</span><span class="token punctuation">(</span>microAppList<span class="token punctuation">,</span> isProduction<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一键生产模式-推荐" tabindex="-1"><a class="header-anchor" href="#一键生产模式-推荐" aria-hidden="true">#</a> 一键生产模式（推荐）</h4><p>对于字符串与对象的配置区别主要在于请求资源的 <code>origin</code> 的拼接：</p><p>如果在不想在 <code>开发模式</code> 与 <code>生产模式</code> 下配置两个注册列表</p><p>可以只配置一个开发模式的列表，在将要部署生产时，将 <code>/public/microApps/index.js</code> 里面的 <code>isProduction</code> 配置为 true（开发模式下必须为 false），这样一来，所有的微应用都将强制拼接为当前运行的环境 <code>location.origin</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> isProduction <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token keyword">const</span> microAppList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 对象模式下，不配置 origin 或 origin 为 &#39;&#39;，都将等同于字符串的配置方式</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;uums&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;apollo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3098&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ares&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3099&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;kinsoProduct&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3006&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

window<span class="token punctuation">.</span>__MICRO_APP_LIST__ <span class="token operator">=</span> <span class="token function">mappingMicroList</span><span class="token punctuation">(</span>microAppList<span class="token punctuation">,</span> isProduction<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>优化的本质，是对之前需要频繁修改注册列表的优化，微应用注册列表的本质还是之前的格式，代码中对于 <code>__MICRO_APP_LIST__</code> 的操作，没有任何变化</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>以往的注册列表依旧生效</p><p>优化同样适用于远程组件时微应用中的微应用注册列表</p></div>`,31),c=[i];function l(r,d){return s(),a("div",null,c)}const k=n(o,[["render",l],["__file","microRegList.html.vue"]]);export{k as default};
