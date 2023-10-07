import{_ as n,p as s,q as a,a1 as e}from"./framework-d7d41868.js";const o="/images/monorepo/mono-mutil.png",p="/images/monorepo/mmm.png",t={},r=e('<h1 id="monorepo" tabindex="-1"><a class="header-anchor" href="#monorepo" aria-hidden="true">#</a> Monorepo</h1><p>Monorepo 可以理解为一种基于仓库的代码管理策略，它提出将多个代码工程“独立”的放在一个仓库里的管理模式，其中“独立”这个词非常重要，每个代码工程在逻辑上是可以独立运行开发以及维护管理的。Monorepo在实际场景中的运用可以非常宽泛，甚至有企业将它所有业务和不同方向语言的代码放在同一个仓库中管理，当然，这样的运用方式对企业的仓库底层能力要求相当高。因此，更多的Monorepo实践会根据业务和职能范围来进行组织。</p><p><img src="'+o+'" alt="mono"></p><h2 id="谁在用" tabindex="-1"><a class="header-anchor" href="#谁在用" aria-hidden="true">#</a> 谁在用？</h2><p>Monorepo这个概念的提出已经有很长的历史，但直到最近几年，随着技术的更新迭代，以及各项工具链的完善，逐渐开始成为一个热门的话题，很多大型的互联网公司都在采取这样的代码管理策略，比如 <code>Google、Facebook、Uber、MicroSoft</code> 等。</p><p>也有很多著名的前端开源库选择用这种方式来构建和管理自己的代码，比如 <code>Vue、React、Vite、Babel、Element-plus</code> 等。</p><h2 id="为何用" tabindex="-1"><a class="header-anchor" href="#为何用" aria-hidden="true">#</a> 为何用？</h2><p>Monorepo 解决了哪些项目代码管理上的问题，让这么多大型厂商和开源项目都纷纷尝试并投身其中？回答这个问题前，我们需要先引出另外两种较为普遍的管理策略： <code>Single-repo Monolith</code> 和 <code>Multirepo</code> ，目前大部分项目所使用的都是这两种管理策略。</p><p>接下来我们通过对比，来逐步探索对Monorepo的理解以及使用它的原因。</p><p><img src="'+p+`" alt="msm"></p><p>从图中我们来分析三种策略在架构模式上核心的不同点：</p><ul><li>Monorepo：只有一个仓库，并且把项目拆分多个独立的代码工程进行管理，而代码工程之间可以通过相应的工具简单的进行代码共享。</li><li>Single-repo Monolith：同样也只有一个仓库，而它并不会独立的分割每个代码工程，而是让他们成为一体来进行开发管理，模块的拆分取决于代码工程的设计。</li><li>Multi-repo：则是通过建立多个仓库，每个仓库包含拆分好的代码工程，而仓库间的调用共享则是通过NPM或者其他代码引用的方式进行。</li></ul><p>虽然这样可以简单的区别三种策略，而实际情况下，这三种策略其实是可以相互转换，相互包含的。一个Monorepo里可以包含多个以Single-repo Monolith形式组织的代码。Multi-repo中的每个repo都可以是一个Monorepo等等。</p><h2 id="场景分析" tabindex="-1"><a class="header-anchor" href="#场景分析" aria-hidden="true">#</a> 场景分析</h2><p>除了从架构概念上的区分外，这里再构造一个简单前端场景：</p><p>假设现在有两个可以逻辑上被分割的项目 Project1 和 Project2 以及他们共用的一个公共库lib。</p><p>在这个假设的场景中，我们通过实际的代码目录组织和相互引用方式来更加直观的展示三种策略的不同：</p><h3 id="single-repo-monolith" tabindex="-1"><a class="header-anchor" href="#single-repo-monolith" aria-hidden="true">#</a> Single-repo Monolith</h3><p>在Single-repo Monolith这个策略下，Project和lib都会被组织在一个仓库当中，并会将两个Projects中代码进行杂糅，放在同一个代码工程当中， 而lib代码会放在该工程目录下，两个Projects可以简单的通过路径去引用，也可以通过工具设置绝对地址alias来方便引入。最终整个项目会共同构建并部署。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Repository - monolith</span>
<span class="token punctuation">.</span>
├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
├── src<span class="token operator">/</span>
│   ├── views<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── project1<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── project2<span class="token operator">/</span>
│   ├── router<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── project1<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── project2<span class="token operator">/</span>
<span class="token operator">|</span>   ├── <span class="token operator">...</span>
│   └── lib<span class="token operator">/</span>
└── <span class="token constant">README</span><span class="token punctuation">.</span>md
 
 
<span class="token comment">// 代码共享 package1/example.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>method<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../lib&#39;</span><span class="token punctuation">;</span>
 
<span class="token comment">// script引入共享</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;@static/lib/index.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="multi-repo" tabindex="-1"><a class="header-anchor" href="#multi-repo" aria-hidden="true">#</a> Multi-repo</h3><p>在Multi-repo这个策略下，两个Project会单独成立代码工程放入两个仓库当中。而lib也会独立成库进行开发，并通过构建后进行NPM发包，两个Projects需要通过NPM的形式安装和更新lib。最终项目分别独立打包并进行部署。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Repository - project1</span>
<span class="token punctuation">.</span>
├── node_modules<span class="token operator">/</span>
├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
├── src<span class="token operator">/</span>
│   ├── views<span class="token operator">/</span>
│   ├── router<span class="token operator">/</span>
<span class="token operator">|</span>   ├── <span class="token operator">...</span>
├── <span class="token constant">README</span><span class="token punctuation">.</span>md
  
<span class="token comment">// Repository - project2</span>
<span class="token punctuation">.</span>
├── node_modules<span class="token operator">/</span>
├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
├── src<span class="token operator">/</span>
│   ├── views<span class="token operator">/</span>
│   ├── router<span class="token operator">/</span>
<span class="token operator">|</span>   ├── <span class="token operator">...</span>
├── <span class="token constant">README</span><span class="token punctuation">.</span>md
 
<span class="token comment">// Repository - lib</span>
<span class="token punctuation">.</span>
├── node_modules<span class="token operator">/</span>
├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
├── src
<span class="token operator">|</span>   ├── <span class="token operator">...</span>
├── <span class="token constant">README</span><span class="token punctuation">.</span>md
 
<span class="token comment">// 代码共享</span>
<span class="token operator">-</span> lib进行发包，比如包名为 <span class="token decorator"><span class="token at operator">@</span><span class="token function">my</span></span><span class="token operator">-</span>scope<span class="token operator">/</span>lib
<span class="token operator">-</span> 进入Package1 或 Package2 进行npm install 或 npm update
<span class="token operator">-</span> 在代码中引入
<span class="token keyword">import</span> <span class="token punctuation">{</span>method<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@my-scope/lib&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="monorepo-1" tabindex="-1"><a class="header-anchor" href="#monorepo-1" aria-hidden="true">#</a> Monorepo</h3><p>在Monorepo这个策略下，将会把两个Projects和一个lib统一放到packages目录下面，每个都会作为独立的包进行开发运行，公用依赖可以放在一级的node_module中，各个package也可以有自己独有的依赖。这里以Pnpm为例来展示，在pnpm-workspace.yaml里配置把packages下的所有包视为子项目，纳入包管理。在lib目录下的pacakge.json中为其添name，同时添加到一级目录的package.json当中，即可被两个Projects引用，而无需进行发包操作。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Repository - monorepo</span>
<span class="token punctuation">.</span>
├── node_modules<span class="token operator">/</span>
├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
├── packages<span class="token operator">/</span>
│   ├── pacakge1<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── src<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── <span class="token constant">README</span><span class="token punctuation">.</span>md
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── node_modules<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── pacakge<span class="token punctuation">.</span>json
│   ├── package2<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── src<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── <span class="token constant">README</span><span class="token punctuation">.</span>md
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── node_modules<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── pacakge<span class="token punctuation">.</span>json
│   └── lib<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── src<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── <span class="token constant">README</span><span class="token punctuation">.</span>md
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── node_modules<span class="token operator">/</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── pacakge<span class="token punctuation">.</span>json
├── <span class="token constant">README</span><span class="token punctuation">.</span>md
├── pnpm<span class="token operator">-</span>workspace<span class="token punctuation">.</span>yaml
 
<span class="token comment">// pnpm-workspace.yaml</span>
packages<span class="token operator">:</span>
  <span class="token operator">-</span> <span class="token string">&#39;packages/*&#39;</span>
 
<span class="token comment">// 代码共享</span>
<span class="token operator">-</span> 假设 lib 的包名为 <span class="token decorator"><span class="token at operator">@</span><span class="token function">my</span></span><span class="token operator">-</span>scope<span class="token operator">/</span>lib，无需发包至<span class="token constant">NPM</span>
<span class="token operator">-</span> 在一级目录的 <span class="token keyword">package</span><span class="token punctuation">.</span>json 添加包名 <span class="token decorator"><span class="token at operator">@</span><span class="token function">my</span></span><span class="token operator">-</span>scope<span class="token operator">/</span>lib<span class="token operator">:</span> <span class="token string">&quot;workspace:*&quot;</span>
<span class="token operator">-</span> 在两个 projects 中的代码中引入
<span class="token keyword">import</span> <span class="token punctuation">{</span>method<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@my-scope/lib&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发展趋势分析" tabindex="-1"><a class="header-anchor" href="#发展趋势分析" aria-hidden="true">#</a> 发展趋势分析</h2><p>通过两组形式的对比，对Monorepo策略应该有了基础的了解，这里回过头来解答一下开头提出的问题，“为何用Monorepo”</p><h3 id="monolith时期" tabindex="-1"><a class="header-anchor" href="#monolith时期" aria-hidden="true">#</a> Monolith时期</h3><p>Monolith这种模式是最早开发人员所使用的仓库架构模式，当时的前端功能还很简单，还没有过多的框架出现，仅仅是HTML，CSS的编写以及加上简单的JS逻辑。在那个时期，项目的前后端还杂糅在一起，类似JSP的开发模式被广泛应用，因此前后端的代码会集中在一个仓库里，最终页面会由后端进行渲染，仓库代码也会整体进行构建和部署。</p><p>而往后发展，Web能力开始变得越来越强大，前端能做到的事情逐渐变多，对应的工程也越来越复杂，AJAX的应用催生了前后端分离的概念。顺应趋势，前端开始将整体模块单独抽离形成仓库进行管理，到这里我们开始看到了Multi-repo的影子，但前端的代码依旧会统一在一个仓库里进行开发和管理。</p><p>随着前端功能还在不断的增多，更多的依赖被引入到仓库中，使得仓库越来越臃肿，特别在当时NPM还没被应用时，前端往往会去各个开源库官网或GitHub上下载文件并放入自己的项目当中。因此，在Single-repo Monolith架构下，对开发人员代码架构组织能力要求越来越高，同时扩展性和维护性也变得越来越低。</p><h3 id="multi-repo时期" tabindex="-1"><a class="header-anchor" href="#multi-repo时期" aria-hidden="true">#</a> Multi-repo时期</h3><p>Multi-repo的流行很大程度上是为了解决这种模块高度耦合，代码臃肿的情况，开发者们开始更加倾向将整个业务项目进行拆分，独立进行管理。</p><p>伴随着当时Web环境质的飞跃，SPA框架的流行，对应Bundle工具的产生，npm的流行以及ES，Commonjs模块化的代码引入方式天然的为分割代码模块提供了良好的时机。这使得更多开发人员将工具代码单独成库并发布成包，并将庞大的业务进行拆分，每个业务模块建立单独的库由各自团队负责开发以及维护，各种包都通过npm来进行共享。</p><p>然而随着模块拆分不断的增多，开发者们又发现过多的仓库加大了维护的成本，新的项目环境搭建，和涉及整体业务的重构和依赖同步都将变得繁琐，此时回归单repo的概念又开始兴起。因此，已经被提出很久的Monorepo开始浮出水面，应运而生的工具也开始占据了一席之地。</p><h3 id="monorepo时期" tabindex="-1"><a class="header-anchor" href="#monorepo时期" aria-hidden="true">#</a> Monorepo时期</h3><p>Monorepo的出现开始解决环境及依赖统一的问题，代码之间的共享也不再强依赖于NPM来进行。既保留了Monolith单仓环境维护的便利性，同时满足Multi-repo对于项目解耦的独立开发管理。</p><p>而后类似lerna+yarn的包管理方案的出现让Monorepo拥有了较为完整的解决方案，并伴随着新兴的技术Pnpm，Changesets，Turborepo的不断推出，Monorepo的整个管理流程变得越来越完善和简单，也逐渐被很多开发者所采用。</p><h2 id="monorepo-优劣分析" tabindex="-1"><a class="header-anchor" href="#monorepo-优劣分析" aria-hidden="true">#</a> Monorepo 优劣分析</h2><h3 id="优势" tabindex="-1"><a class="header-anchor" href="#优势" aria-hidden="true">#</a> 优势</h3><ul><li><p>统一管理：由于只有一个仓库，所有的配置都可以统一进行管理，而无需为不同项目重复构建环境，包括通用的代码规范检测，相同的测试框架，以及统一的CI/CD构建流程等。</p></li><li><p>原子提交：这一点也是建立在统一管理的基础之上，使用原子提交轻松重构全局特性，而无需为每个repo执行拉取请求找出构建更改的顺序。这样可以简单的保持所有项目的全局特性是统一的，并且交由专人进行维护升级，而各个代码工程的开发者无需过度关注。</p></li><li><p>简单依赖：多个代码工程的相同依赖可以提升至根目录进行管理，大大减少重复安装所带来的空间浪费。同时，代码工程之间也可以在保持隔离的同时相互引用，而无需在构建时依次构建相关依赖包并重新发布。</p></li><li><p>文化开放：由于使用相同的代码库，所有开发者都能够浏览以及提交代码，在一定程度上也会激励团队成员共建可复用的组件及工具方法。</p></li></ul><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><ul><li><p>权限问题：由于单仓的管理模式，使用Monorepo将无法简单的控制各个模块代码的访问限制，任何有权限访问该仓库的人员将有权限访问所有的代码工程，这可能会导致部分安全问题。</p></li><li><p>性能问题：当仓库的代码规模非常的巨大，达到GB/TB的级别，会增大开发环境的代码下载成本，以及本地硬盘的压力，执行git status也可能需要花费数秒甚至数分钟的时间。并且，当代码工程很多且活跃数量也很多的情况，会加大分支管理策略和各个代码工程版本管理的压力。</p></li></ul><h2 id="适用场景思考" tabindex="-1"><a class="header-anchor" href="#适用场景思考" aria-hidden="true">#</a> 适用场景思考</h2><p>说到适用场景，是很难用一刀切的方式来决定合适或者不合适，实际情况需要考虑的问题往往是非常复杂的。这里，总结比较常见的问题，并结合Monorepo的优劣势来做出决策，选择是否采用Monorepo来管理团队的代码：</p><ul><li>项目的代码规模如何？</li><li>项目的开发人员规模如何？</li><li>项目是否依赖权限管理？</li><li>项目的技术栈是否统一？</li><li>公司文化是否鼓励团队进行合作？</li></ul><p>当逐条去回答上面提出的问题后，我们可以得出一个粗略的Monorepo使用场景的总结：</p><ul><li>代码规模相对来说不会太大，包括代码数据量和packages量。</li><li>代码并不涉及机密性核心技术，无需做较强的权限管理。</li><li>代码的技术选择相对统一，可复用性强。</li><li>公司文化鼓励协同合作，共建代码。</li></ul>`,49),i=[r];function l(c,d){return s(),a("div",null,i)}const k=n(t,[["render",l],["__file","index.html.vue"]]);export{k as default};
