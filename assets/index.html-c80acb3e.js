import{_ as a,p as e,q as t,a1 as d}from"./framework-7d8e42ec.js";const i="/element-component/images/micro/dulibushu.png",r="/element-component/images/micro/tdzz.png",h={},l=d('<h1 id="🧐-什么是微前端" tabindex="-1"><a class="header-anchor" href="#🧐-什么是微前端" aria-hidden="true">#</a> 🧐 什么是微前端</h1><p>本章将从旧的前端架构出发，列举需求，一步步带入微前端的概念</p><h2 id="单页面应用与多页面应用" tabindex="-1"><a class="header-anchor" href="#单页面应用与多页面应用" aria-hidden="true">#</a> 单页面应用与多页面应用</h2><h3 id="🗿-多页面" tabindex="-1"><a class="header-anchor" href="#🗿-多页面" aria-hidden="true">#</a> 🗿 多页面</h3><p>在古老的前端开发中，采用的多是多页面（MultiPage Application）开发，即多个 html 组成的系统；</p><p>特点：多页面跳转刷新所有资源，每个公共资源(js、css等)需选择性重新加载，常用于 app 或 客户端等</p><h3 id="🚉-单页面" tabindex="-1"><a class="header-anchor" href="#🚉-单页面" aria-hidden="true">#</a> 🚉 单页面</h3><p>现代化前端，多是使用单页面方式（SinglePage Web Application）开发</p><p>概念：只有一张Web页面的应用，是一种从Web服务器加载的富客户端，单页面跳转仅刷新局部资源 ，公共资源(js、css等)仅需加载一次，常用于PC端官网、购物等网站</p><p>优势：</p><ul><li>切换路由就是切换页面组件，组件的挂载和卸载非常快</li><li>应用共享 DOM</li><li>前端控制路由，想前就前，想后就后</li><li>React 通信有 Redux，Vue 通信有 Vuex，可与 App 组件进行资源共享</li></ul><h3 id="🎭-mpa-spa-对比" tabindex="-1"><a class="header-anchor" href="#🎭-mpa-spa-对比" aria-hidden="true">#</a> 🎭 MPA &amp; SPA 对比</h3><table><thead><tr><th>类目</th><th>SPA</th><th>MPA</th></tr></thead><tbody><tr><td>组成</td><td>一个外壳页面和多个页面片段组成</td><td>多个完整页面构成</td></tr><tr><td>资源共用(css, js)</td><td>共用，只需在外壳部分加载</td><td>不共用，每个页面都需要加载</td></tr><tr><td>刷新方式</td><td>页面局部刷新或更改</td><td>整页刷新</td></tr><tr><td>url 模式</td><td>a.com/#/pageone</td><td>a.com/pageone.html</td></tr><tr><td>用户体验</td><td>页面片段间的切换快，用户体验良好</td><td>页面切换加载缓慢，流畅度不够，用户体验比较差</td></tr><tr><td>转场动画</td><td>容易实现</td><td>无法实现</td></tr><tr><td>数据传递</td><td>容易</td><td>依赖 url传参、或者cookie 、localStorage等</td></tr><tr><td>搜索引擎优化(SEO)</td><td>需要单独方案、实现较为困难、不利于SEO检索 可利用服务器端渲染(SSR)优化</td><td>实现方法简易</td></tr><tr><td>试用范围</td><td>高要求的体验度、追求界面流畅的应用</td><td>适用于追求高度支持搜索引擎的应用</td></tr><tr><td>开发成本</td><td>较高，常需借助专业的框架</td><td>较低 ，但页面重复代码多</td></tr><tr><td>维护成本</td><td>相对容易</td><td>相对复杂</td></tr></tbody></table><h2 id="单页面实现" tabindex="-1"><a class="header-anchor" href="#单页面实现" aria-hidden="true">#</a> 单页面实现</h2><ul><li>📦   打包：gulp、rollup、webpack、vite.....</li><li>📏   框架：vue/react/angular/.....</li><li>🍡   antd/iview/elementui/mintui.....</li></ul><h2 id="🧐-启发" tabindex="-1"><a class="header-anchor" href="#🧐-启发" aria-hidden="true">#</a> 🧐 启发</h2><p>能不能有这么一个巨型 SPA 框架，把现有的 SPA 当成 Page Component 来组装成一个新的 SPA 呢</p><h2 id="🚩-引出微前端" tabindex="-1"><a class="header-anchor" href="#🚩-引出微前端" aria-hidden="true">#</a> 🚩 引出微前端</h2><p>从具体需求出发，寻找痛点，思考如何解决痛点</p><h3 id="📃-需求1" tabindex="-1"><a class="header-anchor" href="#📃-需求1" aria-hidden="true">#</a> 📃 需求1</h3><p>有一天产品经理突然说：我们要做一个 A 页面，我看到隔壁组已经做过这个 A 页面了，你把它放到我们项目里吧，应该不是很难吧？明天上线吧。<br> 此时，产品经理想的是：应该就填一个 URL 就好吧？再不行，复制粘贴也很快吧。<br> 而程序员想的却是：又要看屎山了。又要重构了。又要联调了。测试数据有没有啊？等一下，联调的后端是谁啊？<br></p><p>估计这是做大项目时经常遇到的需求了：搬运一个现有的页面。我想大多数人都会选择在自己项目里复制粘贴别人的代码，然后稍微重构一下，再测试环境联调，最后上线。<br> 但是，这样就又多了一份代码了，如果别人的页面改了，那么自己项目又要跟着同步修改，再联调，再上线，非常麻烦。</p><h3 id="📃-需求2" tabindex="-1"><a class="header-anchor" href="#📃-需求2" aria-hidden="true">#</a> 📃 需求2</h3><p>假设你想构建一个渐进式的 Web 应用程序，但是你很难将新的功能实现于现有的整体应用中。<br> 比如你想开始使用新的 JS 语法（或TypeScript），但是你无法在现有的构建过程中使用对应的构建工具。<br> 又或者，你只想扩展你的开发团队，以便多个团队可以同时处理一个产品，但是现有应用中的耦合和复杂度让每个开发者互相掣肘。<br> 这些都是真实存在的问题，这些问题极大地降低了大型团队的开发效率。</p><h2 id="📜-定义" tabindex="-1"><a class="header-anchor" href="#📜-定义" aria-hidden="true">#</a> 📜 定义</h2><p>如何将前端整体分解，每一块可以独立开发、测试和部署，同时对用户而言仍是一个整体，这种技术就是微前端。</p><p>我们将其定义为：<strong style="color:#ff3040;">一种将独立的前端应用组成一个更大的整体的架构风格！</strong></p><h2 id="👊-解决问题" tabindex="-1"><a class="header-anchor" href="#👊-解决问题" aria-hidden="true">#</a> 👊 解决问题</h2><h3 id="📚-增量升级" tabindex="-1"><a class="header-anchor" href="#📚-增量升级" aria-hidden="true">#</a> 📚 增量升级</h3><p>技术债阻碍了项目的发展，只能重写。为了避免完全重写的风险，我们更希望 逐个替换旧的模块。</p><h3 id="📦-简单、解耦的代码库" tabindex="-1"><a class="header-anchor" href="#📦-简单、解耦的代码库" aria-hidden="true">#</a> 📦 简单、解耦的代码库</h3><ul><li>每个单独的微型前端应用的源代码都将比单个整体前端应用的源代码少得多。</li><li>这些较小的代码库对于开发人员来说更容易维护。</li><li>尤其是我们避免了组件间耦合所导致的复杂性。</li></ul><h3 id="🌐-独立部署" tabindex="-1"><a class="header-anchor" href="#🌐-独立部署" aria-hidden="true">#</a> 🌐 独立部署</h3><p>就像微服务一样，微前端的独立部署能力是关键。部署范围的减小，带来了风险的降低。每个微前端应用都应具有自己的持续交付途径，不停地构建、测试、部署。</p><p><img src="'+i+'" alt="dulibushu"></p><h3 id="👫-团队自治" tabindex="-1"><a class="header-anchor" href="#👫-团队自治" aria-hidden="true">#</a> 👫 团队自治</h3><p>每个团队需要围绕业务功能垂直组建，而不是根据技术能力来组建。这为团队带来了更高的凝聚力。</p><p><img src="'+r+'" alt="tdzz"></p><h2 id="📌-小结" tabindex="-1"><a class="header-anchor" href="#📌-小结" aria-hidden="true">#</a> 📌 小结</h2><p>简而言之，微前端就是将大而恐怖的东西切成更小、更易于管理的部分，然后明确地表明它们之间的依赖性。<br> 我们的技术选择，我们的代码库，我们的团队以及我们的发布流程都应该能够彼此独立地操作和发展，无需过多的协调。</p><h2 id="👍-微前端优点" tabindex="-1"><a class="header-anchor" href="#👍-微前端优点" aria-hidden="true">#</a> 👍 微前端优点</h2><ul><li>适用于大规模 Web 应用的开发</li><li>更快的开发速度</li><li>支持迭代可开发和增强升级</li><li>拆解后的部分降低了开发者的理解成本</li><li>同时具备 UX 和 DX 的开发模式</li></ul><h2 id="👎-微前端缺点" tabindex="-1"><a class="header-anchor" href="#👎-微前端缺点" aria-hidden="true">#</a> 👎 微前端缺点</h2><ul><li>复杂度从代码转向基础设施</li><li>整个应用的稳定性和安全性变得更加不可控</li><li>具备一定的学习和了解成本</li><li>需要建立全面的微前端周边设施，才能充分发挥其架构的优势 <ul><li>调试工具</li><li>监控系统</li><li>上层 Web 框架</li><li>部署平台</li></ul></li></ul><h2 id="🧐-何时使用微前端" tabindex="-1"><a class="header-anchor" href="#🧐-何时使用微前端" aria-hidden="true">#</a> 🧐 何时使用微前端</h2><ul><li><span style="color:purple;">大规模企业级 Web 应用开发</span></li><li><span style="color:purple;">跨团队及企业级应用协作开发</span></li><li>长期收益高于短期收益</li><li>不同技术选型的项目</li><li><span style="color:purple;">内聚的单个产品中部分需要独立发布、灰度等能力</span></li><li>微前端的目标并非用于取代 Iframe <ul><li>应用的来源必须可信</li><li>用户体验要求更高</li></ul></li></ul><h2 id="📝-寄语" tabindex="-1"><a class="header-anchor" href="#📝-寄语" aria-hidden="true">#</a> 📝 寄语</h2><p>微前端概念的出现是前端发展的必然阶段，PC 互联网转向移动互联网时代时，PC 的场景并未完全被消灭，反而转向了衍生出了更多沉浸感更高、体验感更强的应用，与之对应的应该是出现新的架构模式来应对这些应用规模的增长。</p><p>微前端也并非银弹，<strong>采用微前端后复杂度并未凭空消失，而是由代码转向了基础设施，对架构设计带来了更大的挑战</strong>，并且在新的架构下需要设计并提供更多的周边工具和生态来助力这一新的研发模式。</p>',49),n=[l];function s(p,c){return e(),t("div",null,n)}const u=a(h,[["render",s],["__file","index.html.vue"]]);export{u as default};