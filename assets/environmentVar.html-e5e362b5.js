import{_ as t,M as a,p as o,q as c,Q as n,N as e,V as r,t as s,a1 as d}from"./framework-7d8e42ec.js";const p={},v=n("h1",{id:"环境变量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境变量","aria-hidden":"true"},"#"),s(" 环境变量")],-1),m=n("p",null,"环境变量即为当前系统的一些配置属性",-1),_=s("详情请参考 "),u={href:"https://cli.vuejs.org/zh/guide/mode-and-env.html",target:"_blank",rel:"noopener noreferrer"},b=s("Vue-cli 模式和环境变量"),E=d(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>每人应在自己的项目代码中，添加 .env.local 文件，用来配置自己的开发环境变量，git 自动忽略，避免变量冲突</p></div><h2 id="基座应用配置" tabindex="-1"><a class="header-anchor" href="#基座应用配置" aria-hidden="true">#</a> 基座应用配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">VUE_APP_TITLE</span><span class="token operator">=</span>地方金融科技平台

<span class="token comment"># 基础请求地址</span>
<span class="token assign-left variable">VUE_APP_BASE_REQ_URL</span><span class="token operator">=</span>http://172.31.33.87:20000

<span class="token comment"># 后台网关代理</span>
<span class="token comment">#VUE_APP_KINSO_ROUTE=kinso-basic-resources-server:1234</span>
<span class="token assign-left variable">VUE_APP_KINSO_ROUTE</span><span class="token operator">=</span>
<span class="token comment"># ClintId（登录使用）</span>
<span class="token assign-left variable">VUE_APP_CLIENT_ID</span><span class="token operator">=</span><span class="token number">9999</span>
<span class="token assign-left variable">VUE_APP_CLIENT_SECRET</span><span class="token operator">=</span><span class="token number">1234567</span>

<span class="token comment"># 配置是否需要登录鉴权（仅做为静态页面调试）</span>
<span class="token assign-left variable">VUE_APP_NEED_LOGIN</span><span class="token operator">=</span>true

<span class="token comment"># 路由配置方式（后端 | 前端）&quot;backEnd&quot; | &quot;frontEnd&quot;</span>
<span class="token assign-left variable">VUE_APP_ROUTE_MODE</span><span class="token operator">=</span>frontEnd

<span class="token comment"># 轮询间隔（分钟）</span>
<span class="token assign-left variable">VUE_APP_POLL_TIME</span><span class="token operator">=</span><span class="token number">2</span>

<span class="token comment"># 发送验证码的间隔（秒）</span>
<span class="token assign-left variable">VUE_APP_SEND_VALID</span><span class="token operator">=</span><span class="token number">60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微应用配置" tabindex="-1"><a class="header-anchor" href="#微应用配置" aria-hidden="true">#</a> 微应用配置</h2><p>一些关键变量，需要与基座应用统一，故取消了微应用的配置，转为接收基座应用的配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">VUE_APP_TITLE</span><span class="token operator">=</span>地方金融科技平台

<span class="token comment"># 后台网关代理（微应用的 axios 是独立的，请求头的添加也是独立的）</span>
<span class="token assign-left variable">VUE_APP_KINSO_ROUTE</span><span class="token operator">=</span>

<span class="token comment"># 请求超时数值（秒）</span>
<span class="token assign-left variable">VUE_APP_REQ_TIMEOUT</span><span class="token operator">=</span><span class="token number">3</span>

<span class="token comment"># 基座应用部署位置，用来加载静态共享资源，静态共享资源存在于基座应用中</span>
<span class="token assign-left variable">VUE_APP_BASE_APP_SERVER</span><span class="token operator">=</span>http://172.31.33.84/basic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k=s("关于静态资源，请参考"),h=s("打包静态资源优化");function P(f,g){const i=a("ExternalLinkIcon"),l=a("RouterLink");return o(),c("div",null,[v,m,n("p",null,[_,n("a",u,[b,e(i)])]),E,n("p",null,[k,e(l,{to:"/micro/production.html#%E5%85%B3%E4%BA%8E%E6%89%93%E5%8C%85%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E4%BC%98%E5%8C%96"},{default:r(()=>[h]),_:1})])])}const A=t(p,[["render",P],["__file","environmentVar.html.vue"]]);export{A as default};
