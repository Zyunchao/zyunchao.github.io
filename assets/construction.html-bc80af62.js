import{_ as n,p as s,q as e,a1 as i}from"./framework-7d8e42ec.js";const a="/images/realize/基座应用目录.png",l="/images/realize/微应用目录.png",c={},m=i(`<h1 id="框架结构" tabindex="-1"><a class="header-anchor" href="#框架结构" aria-hidden="true">#</a> 框架结构</h1><h2 id="基座应用" tabindex="-1"><a class="header-anchor" href="#基座应用" aria-hidden="true">#</a> 基座应用</h2><p>目录树</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── README.md 
├── babel.config.js <span class="token comment"># babel 配置文件</span>
├── lint-staged.config.js <span class="token comment"># git 钩子</span>
├── nodesrc <span class="token comment"># 快捷创建模块脚本（待完善）</span>
│   ├── modules
│   ├── start.ts
│   ├── templates
│   └── utils
├── package.json <span class="token comment"># 依赖表、项目信息</span>
├── postcss.config.js <span class="token comment"># postcss 配置、适配、px2rem等</span>
├── public <span class="token comment"># 静态资源目录</span>
│   ├── favicon.ico <span class="token comment"># 图标</span>
│   ├── index.html <span class="token comment"># 主文件</span>
│   ├── lib <span class="token comment"># 共享依赖资源</span>
│   ├── microApps <span class="token comment"># 微应用注册模块</span>
│   └── server.js <span class="token comment"># 生产环境的服务路径配置</span>
├── src <span class="token comment"># 源码文件夹</span>
│   ├── @types <span class="token comment"># 项目类型、实体类等</span>
│   │   ├── Request.ts <span class="token comment"># api 配置类型</span>
│   │   ├── Response.ts <span class="token comment"># 响应结构基本类型</span>
│   │   ├── Route.ts <span class="token comment"># vue-router 的路由配置对象</span>
│   │   ├── entity <span class="token comment"># 实体类</span>
│   │   └── validator <span class="token comment"># 校验表</span>
│   ├── App.vue <span class="token comment"># 主 vue 文件</span>
│   ├── api <span class="token comment"># 后台接口配置模块文件夹</span>
│   │   ├── base.ts <span class="token comment"># 将配置对象映射成请求函数的主文件</span>
│   │   ├── index.ts <span class="token comment"># 主文件，主要用来统筹模块，暴露模块等</span>
│   │   ├── modules <span class="token comment"># 业务接口模块文件夹</span>
│   │   └── prefix.ts <span class="token comment"># 前缀配置</span>
│   ├── assets <span class="token comment"># 项目静态资源目录</span>
│   │   ├── data <span class="token comment"># 一些数据（假数据）</span>
│   │   ├── images <span class="token comment"># 图片</span>
│   │   └── styles <span class="token comment"># 全局 css、变量、覆盖主题等</span>
│   ├── components <span class="token comment"># 项目内组件 </span>
│   │   ├── business <span class="token comment"># 业务组件存放目录</span>
│   │   └── global <span class="token comment"># 全局组件存放目录</span>
│   ├── directives <span class="token comment"># vue 自定义指令存放目录</span>
│   │   ├── auth.ts <span class="token comment"># 按钮鉴权指令</span>
│   │   └── index.ts <span class="token comment"># 自动化注册文件</span>
│   ├── global.d.ts <span class="token comment"># ts 声明文件</span>
│   ├── hooks <span class="token comment"># 自定义 hook（同 mixins）</span>
│   ├── http <span class="token comment"># 请求封装模块目录</span>
│   │   ├── constant <span class="token comment"># 常量</span>
│   │   ├── index.ts <span class="token comment"># 抛出请求实例等</span>
│   │   ├── interceptors <span class="token comment"># 拦截器处理函数</span>
│   │   ├── proxys <span class="token comment"># 代理配置</span>
│   │   └── utils.ts <span class="token comment"># http 模块的工具</span>
│   ├── main.ts <span class="token comment"># 主入口</span>
│   ├── microApp <span class="token comment"># 微应用运行依赖模块（基座应用不同于微应用，微应用包含较多必须的运行模块）</span>
│   │   └── register.ts <span class="token comment"># 微应用执行注册文件</span>
│   ├── mixins <span class="token comment"># mixins（混入）</span>
│   │   ├── businessModuleMixin.ts <span class="token comment"># 业务模块基础混入</span>
│   │   └── navTo.ts <span class="token comment"># 基座应用路由跳转方法，内含 hook 使用，所以采用混入的形式</span>
│   ├── plugins <span class="token comment"># 查件（暂时无用）</span>
│   ├── router <span class="token comment"># 路由模块</span>
│   │   ├── backEnd.ts <span class="token comment"># 动态路由加载模块</span>
│   │   ├── common <span class="token comment"># 公共路由存放目录</span>
│   │   │   ├── index.ts <span class="token comment"># 抛出公共路由等</span>
│   │   │   ├── microAppBaseRoute.ts <span class="token comment"># 自动化注册微应用的保险路由等，如 /uums/:page*</span>
│   │   │   └── my.ts <span class="token comment"># 个人中心模块等</span>
│   │   ├── frontEnd.ts <span class="token comment"># 静态路由自动化转换、引入等</span>
│   │   ├── index.ts <span class="token comment"># 统筹路由模块、导航守卫、动态添加路由等</span>
│   │   └── modules <span class="token comment"># 业务模块路由存放目录</span>
│   ├── shims-vue.d.ts <span class="token comment"># ts 声明文件</span>
│   ├── source.d.ts <span class="token comment"># ts 声明文件</span>
│   ├── store <span class="token comment"># vuex 全局状态管理</span>
│   │   ├── index.ts <span class="token comment"># 自动化引入、注册、转换</span>
│   │   ├── interface <span class="token comment"># 接口类型</span>
│   │   │   ├── AppFuncTree.ts <span class="token comment"># 包含应用功能树（注册路由、菜单树、权限树）等</span>
│   │   │   ├── CurrentStatus.ts <span class="token comment"># 当前系统的一些状态全局保存</span>
│   │   │   ├── CurrentUserInfo.ts <span class="token comment"># 当前登录人的一些信息</span>
│   │   │   ├── LoginInfo.ts <span class="token comment"># 登录信息</span>
│   │   │   ├── RootStateTypes.ts <span class="token comment"># 根 Store 的类型</span>
│   │   │   ├── SysDict.ts <span class="token comment"># 系统字典类型</span>
│   │   │   └── index.ts <span class="token comment"># 抛出各类型</span>
│   │   └── modules <span class="token comment"># 接口实现</span>
│   ├── utils <span class="token comment"># 工具函数存放文件夹</span>
│   └── views <span class="token comment"># 页面文件夹</span>
├── tsconfig.json <span class="token comment"># ts 配置</span>
└── vue.config.js <span class="token comment"># vue-cli 配置文件</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>截图</p><p><img src="`+a+`" alt="基座应用目录"></p><h2 id="微应用" tabindex="-1"><a class="header-anchor" href="#微应用" aria-hidden="true">#</a> 微应用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── README.md
├── babel.config.js
├── lint-staged.config.js
├── nodesrc
│   ├── modules
│   ├── start.ts
│   ├── templates
│   └── utils
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── microApps
│   └── server.js
├── src
│   ├── @types
│   │   ├── Request.ts
│   │   ├── Response.ts
│   │   ├── Route.ts
│   │   ├── entity <span class="token comment"># 实体类</span>
│   │   │   ├── root <span class="token comment"># uums 的一些实体类，uums 属于基本系统，包含一些关键信息，如机构、应用、角色等</span>
                     <span class="token comment"># 所以在每个微应用都添加了 uums 的实体类</span>
│   │   └── validator
│   ├── App.vue
│   ├── api
│   │   ├── base.ts
│   │   ├── index.ts
│   │   ├── modules
│   │   └── prefix.ts
│   ├── assets
│   │   ├── data
│   │   ├── images
│   │   └── styles
│   ├── components
│   │   ├── business <span class="token comment"># 业务组件</span>
│   │   │   ├── remoteMicroAppComponent <span class="token comment"># 加载远程组件的组件</span>
│   │   └── global <span class="token comment"># 全局组件</span>
│   │   │   ├── index.ts <span class="token comment"># 自动化注册</span>
│   │   │   └── lodingShade
│   ├── directives <span class="token comment"># 自定义指令</span>
│   │   ├── auth.ts
│   │   └── index.ts
│   ├── global.d.ts
│   ├── main.ts
│   ├── microApp <span class="token comment"># 微应用运行依赖模块，不同于基座应用，微应用的运行模块做的事情比较多</span>
│   │   ├── currentMicroTagName.ts <span class="token comment"># 用来定义当前应用的 micro-app-xx 标签，用来嵌套应用（物料提供者）的使用</span>
│   │   ├── httpInterceptors.ts <span class="token comment"># 请求拦截处理函数（来自基座应用）</span>
│   │   ├── lifecycle.ts <span class="token comment"># 生命周期</span>
│   │   ├── navTo.ts <span class="token comment"># 微应用跳转应用的封装方法</span>
│   │   ├── parentDataMsgHandle.ts <span class="token comment"># 接收基座应用的各种数据</span>
│   │   ├── register.ts <span class="token comment"># 注册微应用（嵌套应用）</span>
│   │   ├── routeMode.ts <span class="token comment"># 路由模式，来自基座应用</span>
│   │   ├── sendData.ts <span class="token comment"># 发送数据（发给基座，发给子）方法封装</span>
│   │   └── setLocalStore.ts <span class="token comment"># 设置当前应用的全局状态管理</span>
│   ├── mixins
│   │   └── businessModuleMixin.ts
│   ├── router <span class="token comment"># 路由模块，与基座应用差异较大</span>
│   │   ├── backEnd.ts <span class="token comment"># 动态路由配置，依赖基座应用</span>
│   │   ├── common <span class="token comment"># 公共路由、模糊路由、暴露出的组件路由（物料提供者）</span>
│   │   │   ├── blurry.ts
│   │   │   ├── exposes.ts
│   │   │   ├── index.ts
│   │   │   └── utils.ts
│   │   ├── frontEnd.ts <span class="token comment"># 静态路由处理</span>
│   │   ├── index.ts <span class="token comment"># 抛出路由实例，导航守卫等</span>
│   │   └── modules
│   ├── shims-vue.d.ts
│   ├── source.d.ts
│   ├── store <span class="token comment"># 全局状态管理（每个系统都有自己的 vuex 实例，微应用的 vuex 不需要持久化）</span>
│   │   ├── index.ts <span class="token comment"># 自动化引入、注册</span>
│   │   ├── interface <span class="token comment"># 接口</span>
│   │   │   ├── AppFuncTree.ts <span class="token comment"># 当前系统的路由等</span>
│   │   │   ├── CurrentStatus.ts <span class="token comment"># 当前系统的状态</span>
│   │   │   ├── CurrentUserInfo.ts <span class="token comment"># 登录人信息 </span>
│   │   │   ├── LoginInfo.ts <span class="token comment"># 登录信息</span>
│   │   │   ├── RootStateTypes.ts
│   │   │   ├── SysDict.ts <span class="token comment"># 字典表</span>
│   │   │   └── index.ts
│   │   └── modules <span class="token comment"># 实现</span>
│   │   │   ├── appFuncTree.ts
│   │   │   ├── currentStatus.ts
│   │   │   ├── currentUserInfo.ts
│   │   │   ├── loginInfo.ts
│   │   │   └── sysDict.ts
│   ├── utils <span class="token comment"># 工具库</span>
│   └── views <span class="token comment"># 页面</span>
├── tsconfig.json
└── vue.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>截图</p><p><img src="`+l+'" alt="微应用目录"></p>',10),t=[m];function d(v,o){return s(),e("div",null,t)}const r=n(c,[["render",d],["__file","construction.html.vue"]]);export{r as default};
