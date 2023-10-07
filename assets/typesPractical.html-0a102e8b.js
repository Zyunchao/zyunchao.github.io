import{_ as n,p as s,q as e,a1 as a}from"./framework-d7d41868.js";const i={},t=a(`<h1 id="实体类具体使用" tabindex="-1"><a class="header-anchor" href="#实体类具体使用" aria-hidden="true">#</a> 实体类具体使用</h1><p>实体类，他并不是一个 <code>class</code> ， 由于前端的对象构造方式有多种（构造函数、字面量等），我们在实际的开发中，构建一个对象多是使用字面量的形式；</p><p>因此，实体类的概念实际上就是 “用接口 (interface) 去限制对象”，以让我们一眼看过去，就知道这个对象里面拥有哪些字段，以及与哪个实体类相关联，更像是具象化的业务节点；</p><p>并且在我们限制一个对象的类型后，我们在操作这个对象时，编辑器会友好的为我们提示这个对象下的字段，使我们查找字段更容易。</p><p>简而言之：<strong style="color:#ff3040;">实体类就是一个接口 (interface) ，用来限制对象，并且结合编辑器添加提示，且能够让我们的代码更容易阅读；</strong></p><h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2><ol><li><p>在 <code>/src/@types/entity</code> 目录下新建自定义命名的 .ts 文件，如：<code>AppFunc.ts</code></p><blockquote><p>具体的命名需要具有语义化，尽量与后台的对应模块的实体类相对应；<br> 因为是类型文件，要以大驼峰规则命名；<br> 希望各位开发审视自身代码，查看自己模块 :App 类型的使用，它代表的不是广泛的应用系统，它代表的是 uums 下的应用管理模块的实体类</p></blockquote></li><li><p>接口的定义也是模块化的，内部遵循 es6 的模块化</p><blockquote><p>import 引入实体类使用；<br> export 到处实体类；</p></blockquote></li><li><p>模块内容部分为抛出一个接口，这个接口下的字段对应后台表中的字段</p><blockquote><p>每个字段都应该添加文档注释，这样在使用的过程中，编辑器才能给出中文提示；<br> 在后台修改表中字段时，应同步及时更新实体类中的字段</p></blockquote></li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// AppFunc.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">interface</span> <span class="token class-name">AppFunc</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 应用编号
     */</span>
    appId<span class="token operator">:</span> App<span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">]</span>
    <span class="token doc-comment comment">/**
     * 应用名称
     */</span>
    appName<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 按钮权限状态
     */</span>
    btnStatus<span class="token operator">:</span> BtnStatus
    <span class="token doc-comment comment">/**
     * 前端组件
     */</span>
    component<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * 前端组件name
     */</span>
    componentName<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>使用：在具体的模块（任何 *.vue/*.ts/*.tsx）中，import 引入</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> AppFunc <span class="token keyword">from</span> <span class="token string">&#39;@/@types/entity/AppFunc&#39;</span>

<span class="token keyword">const</span> obj<span class="token operator">:</span> AppFunc <span class="token operator">=</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基座应用-微应用" tabindex="-1"><a class="header-anchor" href="#基座应用-微应用" aria-hidden="true">#</a> 基座应用 &amp; 微应用</h2><p>基座应用中的所有实体类都存在于 微应用中的 <code>/src/@types/entity/root</code> 中，因为 uums 的一些实体类可能是其他业务模块需要用到的，如：用户、机构、角色等</p>`,12),c=[t];function p(l,o){return s(),e("div",null,c)}const r=n(i,[["render",p],["__file","typesPractical.html.vue"]]);export{r as default};
