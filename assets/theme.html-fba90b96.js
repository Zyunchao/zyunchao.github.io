import{_ as n,p as s,q as a,a1 as p}from"./framework-7d8e42ec.js";const e="/assets/theme-dir-20a62b04.png",t={},c=p('<h1 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h1><p>系统后续会接入换肤功能，需要在开发时，注意 css 变量的使用</p><p>系统的 css 变量存放于基座应用下 <code>/src/assets/theme</code> 目录</p><p><img src="'+e+`" alt="them-dir"></p><h2 id="目前已经添加公用-css-变量" tabindex="-1"><a class="header-anchor" href="#目前已经添加公用-css-变量" aria-hidden="true">#</a> 目前已经添加公用 css 变量</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
    <span class="token comment">// 基础字体颜色</span>
    <span class="token property">--jn-base-font-color</span><span class="token punctuation">:</span> #595959<span class="token punctuation">;</span>
    <span class="token comment">// 基础加黑字体颜色</span>
    <span class="token property">--jn-base-font-color-black</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
    <span class="token comment">// 基础字体大小</span>
    <span class="token property">--jn-base-font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
    <span class="token comment">// 基础中号字体</span>
    <span class="token property">--jn-base-font-size-m</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token comment">// 基础小号字体</span>
    <span class="token property">--jn-base-font-size-s</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token comment">// 基础边框颜色</span>
    <span class="token property">--jn-base-border-color</span><span class="token punctuation">:</span> #e8e8e8<span class="token punctuation">;</span>
    <span class="token comment">// 基础字体间距</span>
    <span class="token property">--jn-base-letter-spacing</span><span class="token punctuation">:</span> 0.75px<span class="token punctuation">;</span>
    <span class="token comment">// 基础激活颜色</span>
    <span class="token property">--jn-base-active-color</span><span class="token punctuation">:</span> #399ffb<span class="token punctuation">;</span>
    <span class="token comment">// 基础圆角</span>
    <span class="token property">--jn-base-border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token comment">// 基础动画时间</span>
    <span class="token property">--jn-base-animation-date</span><span class="token punctuation">:</span> 0.2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="element-提供的-css-变量" tabindex="-1"><a class="header-anchor" href="#element-提供的-css-变量" aria-hidden="true">#</a> Element 提供的 css 变量</h2><p>这里列出了颜色变量，更多变量请查看系统 html 的样式</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
    <span class="token property">--el-color-white</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
    <span class="token property">--el-color-black</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span>
    <span class="token property">--el-color-primary</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">;</span>
    <span class="token property">--el-color-primary-light-1</span><span class="token punctuation">:</span> #53a8ff<span class="token punctuation">;</span>
    <span class="token property">--el-color-primary-light-2</span><span class="token punctuation">:</span> #66b1ff<span class="token punctuation">;</span>
    <span class="token property">--el-color-primary-light-3</span><span class="token punctuation">:</span> #79bbff<span class="token punctuation">;</span>
    <span class="token property">--el-color-primary-light-4</span><span class="token punctuation">:</span> #8cc5ff<span class="token punctuation">;</span>
    <span class="token property">--el-color-primary-light-5</span><span class="token punctuation">:</span> #a0cfff<span class="token punctuation">;</span>
    <span class="token property">--el-color-primary-light-6</span><span class="token punctuation">:</span> #b3d8ff<span class="token punctuation">;</span>
    <span class="token property">--el-color-primary-light-7</span><span class="token punctuation">:</span> #c6e2ff<span class="token punctuation">;</span>
    <span class="token property">--el-color-primary-light-8</span><span class="token punctuation">:</span> #d9ecff<span class="token punctuation">;</span>
    <span class="token property">--el-color-primary-light-9</span><span class="token punctuation">:</span> #ecf5ff<span class="token punctuation">;</span>
    <span class="token property">--el-color-success</span><span class="token punctuation">:</span> #67c23a<span class="token punctuation">;</span>
    <span class="token property">--el-color-success-light</span><span class="token punctuation">:</span> #e1f3d8<span class="token punctuation">;</span>
    <span class="token property">--el-color-success-lighter</span><span class="token punctuation">:</span> #f0f9eb<span class="token punctuation">;</span>
    <span class="token property">--el-color-warning</span><span class="token punctuation">:</span> #e6a23c<span class="token punctuation">;</span>
    <span class="token property">--el-color-warning-light</span><span class="token punctuation">:</span> #faecd8<span class="token punctuation">;</span>
    <span class="token property">--el-color-warning-lighter</span><span class="token punctuation">:</span> #fdf6ec<span class="token punctuation">;</span>
    <span class="token property">--el-color-danger</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">;</span>
    <span class="token property">--el-color-danger-light</span><span class="token punctuation">:</span> #fde2e2<span class="token punctuation">;</span>
    <span class="token property">--el-color-danger-lighter</span><span class="token punctuation">:</span> #fef0f0<span class="token punctuation">;</span>
    <span class="token property">--el-color-error</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">;</span>
    <span class="token property">--el-color-error-light</span><span class="token punctuation">:</span> #fde2e2<span class="token punctuation">;</span>
    <span class="token property">--el-color-error-lighter</span><span class="token punctuation">:</span> #fef0f0<span class="token punctuation">;</span>
    <span class="token property">--el-color-info</span><span class="token punctuation">:</span> #909399<span class="token punctuation">;</span>
    <span class="token property">--el-color-info-light</span><span class="token punctuation">:</span> #e9e9eb<span class="token punctuation">;</span>
    <span class="token property">--el-color-info-lighter</span><span class="token punctuation">:</span> #f4f4f5<span class="token punctuation">;</span>
    <span class="token property">--el-bg-color</span><span class="token punctuation">:</span> #f5f7fa<span class="token punctuation">;</span>
    <span class="token property">--el-text-color-primary</span><span class="token punctuation">:</span> #303133<span class="token punctuation">;</span>
    <span class="token property">--el-text-color-regular</span><span class="token punctuation">:</span> #606266<span class="token punctuation">;</span>
    <span class="token property">--el-text-color-secondary</span><span class="token punctuation">:</span> #909399<span class="token punctuation">;</span>
    <span class="token property">--el-text-color-placeholder</span><span class="token punctuation">:</span> #c0c4cc<span class="token punctuation">;</span>
    <span class="token property">--el-border-color-base</span><span class="token punctuation">:</span> #dcdfe6<span class="token punctuation">;</span>
    <span class="token property">--el-border-color-light</span><span class="token punctuation">:</span> #e4e7ed<span class="token punctuation">;</span>
    <span class="token property">--el-border-color-lighter</span><span class="token punctuation">:</span> #ebeef5<span class="token punctuation">;</span>
    <span class="token property">--el-border-color-extra-light</span><span class="token punctuation">:</span> #f2f6fc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>这里的变量是 css 的原生变量，不是 css 的预处理器的变量，预处理的变量为静态编译处理，css 原生变量是动态处理的</p></div><p>在任意样式（*.scss, *.css, *.less, *.vue[scss]）中</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.box </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--jn-base-font-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--jn-base-font-size-m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--jn-base-border-radius<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[c];function l(i,r){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","theme.html.vue"]]);export{d as default};
