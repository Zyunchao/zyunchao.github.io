import{_ as s,M as l,p as d,q as r,Q as e,N as t,V as n,t as o,a1 as c}from"./framework-7d8e42ec.js";const _="/element-component/images/monorepo/bind-store.jpg",p="/element-component/images/monorepo/update-old.png",h="/element-component/images/monorepo/update-new.png",m="/element-component/images/monorepo/node_modules-old.png",u="/element-component/images/monorepo/node_modules-new.png",f="/element-component/images/monorepo/mutile-edit.png",g="/element-component/images/monorepo/mono-edit.png",x={},b=e("h1",{id:"解决问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#解决问题","aria-hidden":"true"},"#"),o(" 解决问题")],-1),k={class:"table-of-contents"},v=o("更新方式"),w=o("旧的方式"),N=o("新的方式"),V=o("前端项目占磁盘大"),M=o("旧的方式"),B=o("新的方式"),j=o("项目运行"),C=o("旧的方式"),E=o("新的方式"),L=e("p",null,"目前架构组的部分前端项目（basic、uums）都已接入 monorepo 架构",-1),R=e("p",null,"基于已经实现的方案，解决问题对比",-1),q=e("h2",{id:"更新方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#更新方式","aria-hidden":"true"},"#"),o(" 更新方式")],-1),Q=e("h3",{id:"旧的方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#旧的方式","aria-hidden":"true"},"#"),o(" 旧的方式")],-1),S=o("基于 "),T=o("仓库管理"),y=c('<ol><li>更新繁琐：每个微应用要想更新框架，都要去绑定远程仓库拉取更新，如果是项目初始就绑定了远程仓库还好说，但是项目一旦步入开发（旧项目）想要再更新，就变得非常繁琐（绑仓库、去冲突、覆盖提交历史、强制推送....）等等操作</li></ol><p><img src="'+_+'" alt="bind"></p><ol start="2"><li>更新遗漏</li></ol><p>Multirepo 架构下，大量的微应用项目，很难做到每个项目随时更新</p><p><img src="'+p+'" alt="dirs"></p><ol start="3"><li>更新冲突</li></ol><p>旧的微应用框架，框架核心部分未与业务代码隔离，更新时，可能会产生代码冲突</p><h3 id="新的方式" tabindex="-1"><a class="header-anchor" href="#新的方式" aria-hidden="true">#</a> 新的方式</h3><p>Monorepo 模式下，框架的核心部分已于框架分离，采用 npm 包安装的方式接入框架：</p><ol><li>每次更新只需要更改版本号，重新安装即可</li><li>所有的微应用都在一个仓库下，并且依赖是公用的，不存在某个微应用没有更新的情况</li><li>安装包的形式，原始框架更新于业务代码分离，根本不会产生冲突</li></ol><p><img src="'+h+'" alt="update-new"></p><h2 id="前端项目占磁盘大" tabindex="-1"><a class="header-anchor" href="#前端项目占磁盘大" aria-hidden="true">#</a> 前端项目占磁盘大</h2><h3 id="旧的方式-1" tabindex="-1"><a class="header-anchor" href="#旧的方式-1" aria-hidden="true">#</a> 旧的方式</h3><p>每个微应用都要安装 node_modules 目录，占据磁盘空间较多</p><p><img src="'+m+'" alt="node_modules-old.png"></p><h3 id="新的方式-1" tabindex="-1"><a class="header-anchor" href="#新的方式-1" aria-hidden="true">#</a> 新的方式</h3><p>monorepo 下，所有的项目可以公用一个 node_modules，将大大减少磁盘的占用</p><p><img src="'+u+'" alt="node_modules-new.png"></p><h2 id="项目运行" tabindex="-1"><a class="header-anchor" href="#项目运行" aria-hidden="true">#</a> 项目运行</h2><h3 id="旧的方式-2" tabindex="-1"><a class="header-anchor" href="#旧的方式-2" aria-hidden="true">#</a> 旧的方式</h3><p>之前多个微应用在开发时，要开启多个编辑器（如果在一个编辑器工作区里打开多个项目，可能会导致 eslint、prettier 的配置失效），编辑器之间来回切换也是心智负担</p><p><img src="'+f+'" alt="mutile-edit.png"></p><h3 id="新的方式-2" tabindex="-1"><a class="header-anchor" href="#新的方式-2" aria-hidden="true">#</a> 新的方式</h3><p>新框架下，Eslint 等的配置都在项目根目录下，一个工作区就可以开发所有项目</p><p>并且通过 js 脚本，一条命令即可运行所有的微应用</p><p><img src="'+g+'" alt="mono-edit.png"></p>',26);function z(A,D){const a=l("router-link"),i=l("RouterLink");return d(),r("div",null,[b,e("nav",k,[e("ul",null,[e("li",null,[t(a,{to:"#更新方式"},{default:n(()=>[v]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#旧的方式"},{default:n(()=>[w]),_:1})]),e("li",null,[t(a,{to:"#新的方式"},{default:n(()=>[N]),_:1})])])]),e("li",null,[t(a,{to:"#前端项目占磁盘大"},{default:n(()=>[V]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#旧的方式-1"},{default:n(()=>[M]),_:1})]),e("li",null,[t(a,{to:"#新的方式-1"},{default:n(()=>[B]),_:1})])])]),e("li",null,[t(a,{to:"#项目运行"},{default:n(()=>[j]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#旧的方式-2"},{default:n(()=>[C]),_:1})]),e("li",null,[t(a,{to:"#新的方式-2"},{default:n(()=>[E]),_:1})])])])])]),L,R,q,Q,e("p",null,[S,t(i,{to:"/micro/storeMage.html"},{default:n(()=>[T]),_:1})]),y])}const G=s(x,[["render",z],["__file","resolve.html.vue"]]);export{G as default};