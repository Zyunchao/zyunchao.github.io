import{_ as e,p as o,q as n,a1 as i}from"./framework-7d8e42ec.js";const c="/element-component/images/micro-cli/jn-micro-cli-run.png",s="/element-component/images/micro-cli/jn-micro-cli-input-config.png",t="/element-component/images/micro-cli/download.png",l="/element-component/images/micro-cli/success.png",a="/element-component/images/micro-cli/project-dir.png",r="/element-component/images/micro-cli/configed.png",p={},m=i('<h1 id="创建根项目" tabindex="-1"><a class="header-anchor" href="#创建根项目" aria-hidden="true">#</a> 创建根项目</h1><p>所谓的根项目，就是以 <code>monorepo</code> 为单位的一个项目模板，在安装完 <code>jn-micro-cli</code> 后</p><ol><li><p>进入想要创建项目的目录</p></li><li><p>在其目录下，执行命令：</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jn-micro create <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>\n<span class="token comment"># `&lt;name&gt;` 为项目名称</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="'+c+'" alt="run"></p><ol start="3"><li>回车后，按照交互命令输入配置项：</li></ol><p><img src="'+s+'" alt="config"></p><ol start="4"><li>回车后，进入模版下载阶段：</li></ol><p><img src="'+t+'" alt="download"></p><ol start="5"><li>等待成功后的输出：</li></ol><p><img src="'+l+'" alt="success"></p><ol start="6"><li>成功后，会在当前目录看到对应的项目，项目结构</li></ol><p><img src="'+a+'" alt="pro-dir"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>截止目前，你获得了一个全新的 微应用 monorepo 项目，并且不在需要你任何改动，可以直接进行开发了</p></div><p>可以查看原先需要手动配置的地方，已经依据创建命令输入的信息，自动改掉了</p><p><img src="'+r+'" alt="configed"></p>',16),d=[m];function g(_,u){return o(),n("div",null,d)}const f=e(p,[["render",g],["__file","moenorepo.html.vue"]]);export{f as default};