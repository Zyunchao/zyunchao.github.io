import{_ as c}from"./创建动态路由-b29e6dc8.js";import{_ as r,M as p,p as l,q as d,Q as n,N as o,V as t,a1 as a,t as s}from"./framework-7d8e42ec.js";const u="/element-component/images/micro/router-remote-example.png",h={},_=a('<h1 id="微应用开发步骤教程" tabindex="-1"><a class="header-anchor" href="#微应用开发步骤教程" aria-hidden="true">#</a> 微应用开发步骤教程</h1><div class="custom-container tip"><p class="custom-container-title">基于已部署的基座开发微应用模式：</p><p>原理流程：将基座应用部署，访问部署的基座应用地址，基座应用在运行阶段以 <code>localhost</code> 加载开发者本地的微应用</p><p>优点：</p><ul><li>不需要本地启动基座应用</li><li>不需要配置路由模式</li><li>不需要配置额外代理</li><li>开发只需要关注微应用框架即可，减轻开发负担</li></ul><p>缺点：</p><ul><li>微应用注册较为封闭，需要部署人员在线上环境中修改</li></ul></div><h2 id="_1-创建微应用模板" tabindex="-1"><a class="header-anchor" href="#_1-创建微应用模板" aria-hidden="true">#</a> 1. 创建微应用模板</h2>',3),m=s("使用现成的脚手架，构建一个微应用模板，详见"),k=s("微应用脚手架"),v=n("h2",{id:"_2-注册微应用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-注册微应用","aria-hidden":"true"},"#"),s(" 2. 注册微应用")],-1),q=s("在已部署的线上基座的"),j=s("微应用注册列表"),b=s(" (路径： "),g=n("code",null,"basic/microApps/index.js",-1),f=s(" ) 中，添加构建的微应用的名称及端口"),x=n("h2",{id:"_3-创建页面",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-创建页面","aria-hidden":"true"},"#"),s(" 3. 创建页面")],-1),y=n("p",null,[s("在子项目中，创建 "),n("code",null,".vue"),s(" 页面文件（路径： "),n("code",null,"rootPro/subPro/src/views/xxx"),s(" ）")],-1),w=s("页面开发规范"),E=s("详见"),A=n("h2",{id:"_4-在系统中添加页面路由",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-在系统中添加页面路由","aria-hidden":"true"},"#"),s(" 4. 在系统中添加页面路由")],-1),D=s("前往 "),B=n("code",null,"应用管理 > 应用功能",-1),N=s(" 添加 "),P=s("动态路由"),C=a('<p><img src="'+c+'" alt="创建动态路由.png"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>新添加的菜单，需要重新登录，且把菜单分配到具体角色才能正常展示，否则将会 404</p></div><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>微应用整个框架采用 monorepo 方案架构，开发时有以下三个概念</p><ul><li>本地模块：直接存在于子项目内部的模块</li><li>远程模块：微应用核心功能抽取到了 npm 私库的模块</li><li>公用页面模块：monorepo 工作区 <code>common-module</code> 模块</li></ul><h3 id="本地模块" tabindex="-1"><a class="header-anchor" href="#本地模块" aria-hidden="true">#</a> 本地模块</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>本地模块内部也默认引用了对应的远程模块，当在项目中使用本地引用（如： <code>@/store</code> ）时，实际会包含远程抛出的模块实例，只不过没有具体的子级模块</p></div><p>本地模块顾名思义：项目内部自己的模块</p><p>就是普通 vue 工程化的项目内模块，存在于每一个子应用中，定制化强，可以由每个开发者自由发挥，目前框架已提供的本地模块有：</p>',9),L=s("api"),V=s("：远程会覆盖本地的，目前远程仅提供了一个 "),I=n("code",null,"common.api",-1),R=s("，意味着你不应该在本地的模块中存在 common.api 的模块"),S=s("store"),T=s("：仅做了远程模块的引用抛出，即方便引用远程 store 模块"),z=s("router"),M=s("：内部引用了远程模块，也提供了本地的模块文件夹，会合并二者"),F=s("directives"),G=s("：目前仅做了引用远程模块"),Q=a('<p>拿 router 模块举例：</p><p>router 模块你应该引用本地的，框架提供了合并本地模块和远程模块的能力。</p><p>因为远程模块，核心部分得以隐藏，你也可以基于框架提供的远程模块定制化二次开发本地模块</p><p><img src="'+u+`" alt="router-remote"></p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>如果您熟练掌握前端工程化，对工程化各模块的作用、特性特别熟悉，我才建议您定制化自己的微应用框架模块</p><p>否则，请不要动已提供的本地模块（router 添加子模块除外）</p></div><h3 id="远程模块" tabindex="-1"><a class="header-anchor" href="#远程模块" aria-hidden="true">#</a> 远程模块</h3><p>将微应用项目核心工程化模块以 npm 依赖的方式抽取了出去，不属于当前微应用的模块，即为远程模块</p><p>远程模块有如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;@jsjn/micro-core-api&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;@jsjn/micro-core-assets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;@jsjn/micro-core-components&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;@jsjn/micro-core-constants&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;@jsjn/micro-core-directives&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;@jsjn/micro-core-hooks&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;@jsjn/micro-core-micro-main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;@jsjn/micro-core-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;@jsjn/micro-core-store&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;@jsjn/micro-core-utils&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;@jsjn/micro-core-views&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;@jsjn/types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.3.0&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更新远程模块" tabindex="-1"><a class="header-anchor" href="#更新远程模块" aria-hidden="true">#</a> 更新远程模块</h4><p>在项目根目录（最外层）的 <code>package.json</code> 中更改对应模块的版本号，然后在执行 <code>pnpm i -w</code> 即可完成更新</p><p>通常更新后需要重启下编辑器，有时候新增的 ts 类型，不会被编辑器识别到</p><p>如：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;@jsjn/types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.3.0&quot;</span><span class="token punctuation">,</span>

# 更新 ↓↓↓

<span class="token property">&quot;@jsjn/types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.4.0&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="公用页面模块" tabindex="-1"><a class="header-anchor" href="#公用页面模块" aria-hidden="true">#</a> 公用页面模块</h3><p>框架基座 <code>monorepo</code> 本身是有能力支持多个微应用项目在同一个根项目的，但是这样会有子项目版本管理的问题，因此不建议将多个项目放到一起</p><p>但是，框架依旧提供了多个子应用间 <code>公用页面模块</code> 的能力，即多个页面都能够引用（编译）的页面存放模块</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;@jsjn/common-module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workspace:*&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>特殊情况下，多个项目有重复的页面，不需要在每个项目中创建这个页面，只需要将这个页面放到根目录下的 <code>rootPro/common-module/views/xxx</code> 下</p><p>后台路由处理核心将会首先加载指定项目下的页面，如果没找到就会去 <code>common-module/views</code> 下寻找，如果还是没找到，就抛出错误页面</p>`,20),H=s("公共模块基于 "),J={href:"https://pnpm.io/zh/workspaces",target:"_blank",rel:"noopener noreferrer"},K=s("pnpm workspace"),O=s(" 隶属于本地模块"),U=n("h2",{id:"扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#扩展","aria-hidden":"true"},"#"),s(" 扩展")],-1),W=s("对于框架开发者，在您熟悉 "),X={href:"https://pnpm.io/zh/workspaces",target:"_blank",rel:"noopener noreferrer"},Y=s("pnpm workspace"),Z=s(" 的前提下，您可以在现有 "),$=n("code",null,"monorepo",-1),ss=s(" 项目中，继续扩展自己的模块"),ns=n("p",null,"如：子项目公用组件模块",-1);function os(es,ts){const e=p("RouterLink"),i=p("ExternalLinkIcon");return l(),d("div",null,[_,n("p",null,[m,o(e,{to:"/micro-cli/"},{default:t(()=>[k]),_:1})]),v,n("p",null,[q,o(e,{to:"/micro/microRegList.html"},{default:t(()=>[j]),_:1}),b,g,f]),x,y,n("p",null,[w,o(e,{to:"/micro/moduleDetail/pages.html"},{default:t(()=>[E]),_:1})]),A,n("p",null,[D,B,N,o(e,{to:"/micro/moduleDetail/routerPractical.html#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E6%B3%A8%E5%86%8C"},{default:t(()=>[P]),_:1})]),C,n("ul",null,[n("li",null,[o(e,{to:"/micro/moduleDetail/requestApi.html"},{default:t(()=>[L]),_:1}),V,I,R]),n("li",null,[o(e,{to:"/micro/moduleDetail/storeConcept.html"},{default:t(()=>[S]),_:1}),T]),n("li",null,[o(e,{to:"/micro/moduleDetail/routerConcept.html"},{default:t(()=>[z]),_:1}),M]),n("li",null,[o(e,{to:"/micro/moduleDetail/directives.html"},{default:t(()=>[F]),_:1}),G])]),Q,n("p",null,[H,n("a",J,[K,o(i)]),O]),U,n("p",null,[W,n("a",X,[Y,o(i)]),Z,$,ss]),ns])}const ps=r(h,[["render",os],["__file","quickStart-monorepo.html.vue"]]);export{ps as default};