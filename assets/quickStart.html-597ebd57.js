import{_ as p,a as l,b as c,c as i}from"./pages-ee732987.js";import{_ as u,M as r,p as d,q as k,Q as n,N as t,V as e,t as s,a1 as o}from"./framework-7d8e42ec.js";const v="/element-component/images/realize/microAppRoutesToBaseApp.png",m={},g=n("h1",{id:"基于本地基座应用开发",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基于本地基座应用开发","aria-hidden":"true"},"#"),s(" 基于本地基座应用开发")],-1),b=n("p",null,"本篇旨在走一遍大体的流程，跟随本章，快速搭建属于你自己的微应用",-1),_={class:"custom-container tip"},h=n("p",{class:"custom-container-title"},"TIP",-1),f=n("p",null,"本章为基于本地启动的基座应用开发模式",-1),q=s("此模式不对外开放，请前往"),x=s("基于部署生产的基座应用开发"),y=n("p",null,"此模式需要拿到基座应用代码，本地运行基座应用",-1),w=n("p",null,"此模式需要对基座应用有一定了解，需要掌握",-1),A=n("ul",null,[n("li",null,"路由模式配置"),n("li",null,"代理配置")],-1),R=n("p",null,"优点：",-1),B=n("ul",null,[n("li",null,"可配置静态路由"),n("li",null,"灵活配置代理")],-1),E=n("h2",{id:"微应用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#微应用","aria-hidden":"true"},"#"),s(" 微应用")],-1),j=s("获取微应用框架，请参考"),T=s("仓库管理"),C=n("li",null,[n("p",null,"在拿到微应用框架后，更改文件夹名称"),n("blockquote",null,[n("p",null,[s("文件夹命名以各项目名为准，如： "),n("code",null,"baseMicroAppFrame"),s(" => "),n("code",null,"apollo")])])],-1),N=o('<p><img src="'+p+'" alt="微应用目录名称修改"></p><ol start="3"><li>修改 package.json 的 name 字段 <code>/package.json</code><blockquote><p>命名以项目名为准，微应用内部会使用 name 作为唯一标识拼接一些变量</p></blockquote></li></ol><p><img src="'+l+'" alt="packageName.png"></p><ol start="4"><li>修改 package.json 的 port 字段 <code>/package.json</code><blockquote><p>开发模式下，应用是以端口进行本地部署的，如果在本地跑多个微应用，<strong style="color:#ff3040;">每个微应用的端口应该唯一</strong>，关乎基座应用的注册及加载资源</p></blockquote></li></ol><p><img src="'+c+`" alt="portChnage"></p><ol start="5"><li>在 <code>/.gitignore</code> 中添加生产包的忽略配置 <blockquote><p>由于项目采用二级目录配置，打包出来的生产包，以 第三步 的命名，命名生产包，生产包不需要 git 管理，故需要将项目名配置到 .gitignore 中</p></blockquote></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .gitignore</span>
apollp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),P={start:"6"},V=s("添加页面 "),I=n("code",null,"/src/views/",-1),M=s("依据"),S=s("页面创建规则"),z=s("，添加页面"),D=o('<p><img src="'+i+`" alt="pages"></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Burseraceae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Burseraceae&#39;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> toRaw<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，完成了微应用的开发</p><h2 id="基座应用" tabindex="-1"><a class="header-anchor" href="#基座应用" aria-hidden="true">#</a> 基座应用</h2>`,4),L=s("注册微应用 "),O=n("code",null,"/public/microApps/index.js",-1),U=s(" 详见 "),F=s("微应用注册列表"),G=n("li",null,[n("p",null,[s("确认基座应用的路由模式为 “静态路由” "),n("code",null,"/.env"),s(" 或 "),n("code",null,"/.env.local")])],-1),Q=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .env.local</span>

<span class="token comment"># 路由配置方式（后端 | 前端）&quot;backEnd&quot; | &quot;frontEnd&quot;</span>
<span class="token assign-left variable">VUE_APP_ROUTE_MODE</span><span class="token operator">=</span>frontEnd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>将微应用的路由文件复制粘贴到基座应用的 <code>/src/router/modules/microApps/xxx</code><blockquote><p>&#39;xxx&#39; 为应用注册的 <code>name</code> ，基座应用的微应用配置路由文件应该与微应用自身的路由配置保持一致</p></blockquote></li></ol><p><img src="`+v+`" alt="microAppRoutesToBaseApp"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>静态路由的配置并不灵活，需要手动复制粘贴文件，不过我对一些引用做了特殊处理，庆幸的是，你只需要原封不动的将微应用的路由模块粘贴到基座应用下，然后执行第 4 步，就可以完成微应用的注册工作了</p><p>当然，这只是静态路由的配置方式，动态路由的配置不需要如此 “落后”</p><p>在微前端框架搭建之初，曾经考虑过不再支持静态路由，因为它实在无法做到物理磁盘上的跨越，只能开发者主动的去 “倒腾” 文件，但经过再三考量，还是决定将静态路由的功能提供出来</p><p>所以，<strong style="color:purple;">不要嫌弃静态路由配置的方式落后，这是不可避免的，框架本可以不提供静态路由方式的</strong></p></div><ol start="4"><li>修改路由组件 <code>/src/router/modules/microApps/xxx/yyy.ts</code><blockquote><p>复制过来的微应用路由，component 还是引用的微应用的内部组件，在基座应用里面是不存在的，也是不需要的<br> 需要将静态路由的 component 修改成基座应用的 microAppRoot 组件</p></blockquote></li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/@types/Route&#39;</span>

<span class="token doc-comment comment">/**
 * 业务路由为 / 路由的后代路由，path 不需要加 &#39;/&#39;
 * 否则将被定义为根路径
 * 参考：https://next.router.vuejs.org/zh/guide/essentials/nested-routes.html
 *
 * 路由配置参数参考：https://next.router.vuejs.org/zh/api/#routerecordraw
 * 路由配置呈嵌套模式，只有拥有 component 的配置才会被真正注册呈路由，没有 component 仅做层级结构
 */</span>
<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;botany&#39;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;botany&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&#39;植物科&#39;</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token string">&#39;el-Grape&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">&#39;aceraceae&#39;</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;aceraceae&#39;</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">&#39;槭树科&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/microAppRoot/index.vue&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">&#39;burseraceae&#39;</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;burseraceae&#39;</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">&#39;橄榄科&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/microAppRoot/index.vue&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> routes

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>microAppRoot 组件是基座应用展示微应用的根组件</p></div><p>至此 4 步，完成了基座应用注册微应用</p><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><ul><li>基座应用：进入基座应用目录 <code>yarn dev</code> 或 <code>npm run dev</code></li><li>微应用：进入微应用目录 <code>yarn dev</code> 或 <code>npm run dev</code></li></ul><p>在启动之后，基座应用会自动打开浏览器及端口，微应用不会打开，但是当你在浏览器中输入微应用的端口时，依然能够访问到微应用（会报错）</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>微应用是没有办法单独运行的，要依赖基座应用的资源，数据等</p></div>`,12);function $(H,J){const a=r("RouterLink");return d(),k("div",null,[g,b,n("div",_,[h,f,n("p",null,[q,t(a,{to:"/micro/quickStart2.html"},{default:e(()=>[x]),_:1})]),y,w,A,R,B]),E,n("ol",null,[n("li",null,[n("p",null,[j,t(a,{to:"/micro/storeMage.html"},{default:e(()=>[T]),_:1})])]),C]),N,n("ol",P,[n("li",null,[V,I,n("blockquote",null,[n("p",null,[M,t(a,{to:"/micro/moduleDetail/pages.html#%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6%E8%A7%84%E8%8C%83"},{default:e(()=>[S]),_:1}),z])])])]),D,n("ol",null,[n("li",null,[n("p",null,[L,O,U,t(a,{to:"/micro/microRegList.html"},{default:e(()=>[F]),_:1})])]),G]),Q])}const X=u(m,[["render",$],["__file","quickStart.html.vue"]]);export{X as default};