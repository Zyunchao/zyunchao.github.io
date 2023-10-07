import{_ as i,M as t,p as c,q as l,Q as n,N as a,t as s,a1 as o}from"./framework-d7d41868.js";const r="/images/realize/基座应用store.png",p="/images/realize/微应用store.png",d={},u=n("h1",{id:"全局状态管理概念",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#全局状态管理概念","aria-hidden":"true"},"#"),s(" 全局状态管理概念")],-1),v=s("当前系统使用的全局状态管理插件为 "),m={href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},b=s("Vuex4"),k=n("h2",{id:"封装思想",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#封装思想","aria-hidden":"true"},"#"),s(" 封装思想")],-1),h=n("p",null,"vuex 的封装没有太多复杂的操作，封装主要实现了：",-1),g=n("li",null,"分模块",-1),f={href:"https://vuex.vuejs.org/zh/guide/typescript-support.html",target:"_blank",rel:"noopener noreferrer"},_=s("支持 TypeScript"),y=n("li",null,"自动化引入、注册",-1),x=n("li",null,"持久化（基座应用）",-1),C=o('<p>具体的封装可参考源码，多是interface的定义，及实现</p><h2 id="具体存储的内容" tabindex="-1"><a class="header-anchor" href="#具体存储的内容" aria-hidden="true">#</a> 具体存储的内容</h2><h3 id="基座应用" tabindex="-1"><a class="header-anchor" href="#基座应用" aria-hidden="true">#</a> 基座应用</h3><p><img src="'+r+`" alt="基座应用store"></p><h4 id="appfunctree" tabindex="-1"><a class="header-anchor" href="#appfunctree" aria-hidden="true">#</a> AppFuncTree</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AppFuncTree</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 当前用户的功能树源数据
     */</span>
    currentUserAppFuncTree<span class="token operator">:</span> AppFunc<span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token doc-comment comment">/**
     * 包含系统所有功能的树
     */</span>
    systemAppFuncTree<span class="token operator">:</span> AppFunc<span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token doc-comment comment">/**
     * 当进行应用管理时，出发刷新当前用户功能树的 flag
     */</span>
    updateAppFuncTreeFlag<span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token doc-comment comment">/**
     * 后台源数据 =&gt; 前端需要的格式
     */</span>
    routeConfigs<span class="token operator">:</span> RouteConfig<span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token doc-comment comment">/**
     * 有 component 的组件（有效注册）
     */</span>
    registeredRoutes<span class="token operator">:</span> RouteConfig<span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token doc-comment comment">/**
     * 加载后台 route flag
     */</span>
    loadRouteFlag<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="currentstatus" tabindex="-1"><a class="header-anchor" href="#currentstatus" aria-hidden="true">#</a> CurrentStatus</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CurrentStatus</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 当前路由 path
     */</span>
    currentPath<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 页面跳转 路由加载 flag
     */</span>
    routeLoading<span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token doc-comment comment">/**
     * 是否为根路由
     */</span>
    isRootRoute<span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token doc-comment comment">/**
     * 当前业务是否全屏（非全屏）
     */</span>
    isFullScreen<span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token doc-comment comment">/**
     * 当前屏幕与设计稿的比例
     */</span>
    screenRatio<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token doc-comment comment">/**
     * 是否在登录之后
     *  1. 登录
     *  2. 重新登录
     */</span>
    isFirstAfterLogin<span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token doc-comment comment">/**
     * 是否提示更改密码，同步首次登录
     */</span>
    hintUpdatePass<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="currentuserinfo" tabindex="-1"><a class="header-anchor" href="#currentuserinfo" aria-hidden="true">#</a> CurrentUserInfo</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CurrentUserInfo</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 账户信息
     */</span>
    accountInfo<span class="token operator">:</span> UserInfo
    <span class="token doc-comment comment">/**
     * 客户端信息
     */</span>
    clientInfo<span class="token operator">:</span> ClientChannel
    <span class="token doc-comment comment">/**
     * 部门列表
     */</span>
    departList<span class="token operator">:</span> Department<span class="token punctuation">[</span><span class="token punctuation">]</span>
    device<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 机构信息
     */</span>
    instituInfo<span class="token operator">:</span> OrgInfo
    <span class="token doc-comment comment">/**
     * 登录信息
     */</span>
    loginInfo<span class="token operator">:</span> <span class="token builtin">any</span>
    <span class="token doc-comment comment">/**
     * 职务列表
     */</span>
    postList<span class="token operator">:</span> Post<span class="token punctuation">[</span><span class="token punctuation">]</span>
    roleList<span class="token operator">:</span> RoleInfo<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="logininfo" tabindex="-1"><a class="header-anchor" href="#logininfo" aria-hidden="true">#</a> LoginInfo</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">LoginInfo</span> <span class="token punctuation">{</span>
    access_token<span class="token operator">:</span> <span class="token builtin">string</span>
    refresh_token<span class="token operator">:</span> <span class="token builtin">string</span>
    token_type<span class="token operator">:</span> <span class="token builtin">string</span>
    expires_in<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
    scope<span class="token operator">:</span> <span class="token builtin">string</span>
    expiration_time<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sysdict" tabindex="-1"><a class="header-anchor" href="#sysdict" aria-hidden="true">#</a> SysDict</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SysDict</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 字典全量列表
     */</span>
    list<span class="token operator">:</span> SysDictEntity<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="微应用" tabindex="-1"><a class="header-anchor" href="#微应用" aria-hidden="true">#</a> 微应用</h3><p><img src="`+p+`" alt="微应用store"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>微应用的这些状态都是经由基座或父应用传递的，自身没有维护（持久化）这些状态</p><p>模块与基座应用一致</p><p>有两个模块不同</p></div><h4 id="appfunctree-1" tabindex="-1"><a class="header-anchor" href="#appfunctree-1" aria-hidden="true">#</a> AppFuncTree</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AppFuncTree</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 来自基座应用的注册路由
     */</span>
    remoteRegisteredRoutes<span class="token operator">:</span> RouteConfig<span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token doc-comment comment">/**
     * 有 component 的组件（有效注册）
     */</span>
    registeredRoutes<span class="token operator">:</span> RouteConfig<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="currentstatus-1" tabindex="-1"><a class="header-anchor" href="#currentstatus-1" aria-hidden="true">#</a> CurrentStatus</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CurrentStatus</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 当前路由 path
     */</span>
    currentPath<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 页面跳转 路由加载 flag
     */</span>
    routeLoading<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function I(F,R){const e=t("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[v,n("a",m,[b,a(e)])]),k,h,n("ul",null,[g,n("li",null,[n("a",f,[_,a(e)])]),y,x]),C])}const L=i(d,[["render",I],["__file","storeConcept.html.vue"]]);export{L as default};
