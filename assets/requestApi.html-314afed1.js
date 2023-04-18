import{_ as o,M as l,p as c,q as p,Q as s,N as e,V as i,t as n,a1 as t}from"./framework-7d8e42ec.js";const d="/images/realize/apiModule.png",r={},u=s("h1",{id:"api-模块",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#api-模块","aria-hidden":"true"},"#"),n(" Api 模块")],-1),m=n("api 模块隶属于 请求模块，"),v=n("http部分"),k=n(" 是对请求工具的封装，api 模块是对于要发送的请求的封装"),b=t('<p><img src="'+d+'" alt="apiModule"></p><p>api 的配置，基座应用和微应用一致</p><h2 id="封装思想" tabindex="-1"><a class="header-anchor" href="#封装思想" aria-hidden="true">#</a> 封装思想</h2><p>api 模块的封装属于将每个请求抽象成了配置对象</p><p>通过提取配置对象的各参数，创建符合：</p><ul><li>请求方法</li><li>参数类型</li><li>参数</li><li>请求头</li><li>响应格式</li></ul>',6),h=n("的请求方法，请求方法内使用 "),_=n("http 模块"),g=n(" 封装的实例发送请求"),f=s("p",null,"api 各配置模块同样采用自动化引入的思想，自动化引入，形成完整的配置数组，然后统一处理配置配置对象",-1),y=n("配置化开发模式下的请求前缀，配置 "),x=n("http 模块.proxy"),q=n("，完成统一配置代理"),E=t(`<p>源码不多，可参考源码</p><h2 id="requestconfig-配置对象" tabindex="-1"><a class="header-anchor" href="#requestconfig-配置对象" aria-hidden="true">#</a> RequestConfig 配置对象</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RequestConfig</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * api 调用名
     */</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 对应后台的接口 api
     */</span>
    api<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 请求方法
     */</span>
    method<span class="token operator">:</span> REQMethods
    <span class="token doc-comment comment">/**
     * 当前请求需要携带的请求头
     */</span>
    headers<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 参数发送形式
     */</span>
    paramType<span class="token operator">?</span><span class="token operator">:</span> REQParamsType
    <span class="token doc-comment comment">/**
     * 开发模式前缀：取决于开发模式下已经添加的代理前缀
     * 见 vite.config.ts
     */</span>
    devPrefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 请求时，axios 的额外配置
     * 可用配置请参考：https://www.kancloud.cn/yunye/axios/234845
     */</span>
    axiosRequestConfig<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求类型" tabindex="-1"><a class="header-anchor" href="#请求类型" aria-hidden="true">#</a> 请求类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> REQMethods <span class="token punctuation">{</span>
   <span class="token constant">GET</span> <span class="token operator">=</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
   <span class="token constant">POST</span> <span class="token operator">=</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
   <span class="token constant">PUT</span> <span class="token operator">=</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span>
   <span class="token constant">DELETE</span> <span class="token operator">=</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
   <span class="token constant">HEAD</span> <span class="token operator">=</span> <span class="token string">&#39;head&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数枚举" tabindex="-1"><a class="header-anchor" href="#请求参数枚举" aria-hidden="true">#</a> 请求参数枚举</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> REQParamsType <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * key value 形式：用于登录，需要改请求头
     * &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded&#39;
     */</span>
    <span class="token constant">KEY_VALUE</span> <span class="token operator">=</span> <span class="token string">&#39;keyValue&#39;</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 默认的 Post/Put 请求 json 格式，不需要改请求头
     */</span>
    <span class="token constant">JSON</span> <span class="token operator">=</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * RESTful 风格，简单请求是参数以 query 形式拼接在请求路径后面
     * 如：/res/iam-post/entity/<span class="token punctuation">{</span>id<span class="token punctuation">}</span>
     */</span>
    <span class="token constant">QUERY</span> <span class="token operator">=</span> <span class="token string">&#39;query&#39;</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 简单请求的默认形式
     */</span>
    <span class="token constant">URL</span> <span class="token operator">=</span> <span class="token string">&#39;url&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function R(w,C){const a=l("RouterLink");return c(),p("div",null,[u,s("p",null,[m,e(a,{to:"/micro/moduleDetail/requestConcept.html"},{default:i(()=>[v]),_:1}),k]),b,s("p",null,[h,e(a,{to:"/micro/moduleDetail/requestConcept.html"},{default:i(()=>[_]),_:1}),g]),f,s("p",null,[y,e(a,{to:"/micro/moduleDetail/requestConcept.html#proxys"},{default:i(()=>[x]),_:1}),q]),E])}const P=o(r,[["render",R],["__file","requestApi.html.vue"]]);export{P as default};
