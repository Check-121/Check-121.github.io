import{_ as n,o as s,c as a,a as e}from"./app-43ae11cc.js";const i={},l=e(`<h2 id="常用包管理工具" tabindex="-1"><a class="header-anchor" href="#常用包管理工具" aria-hidden="true">#</a> 常用包管理工具</h2><h3 id="npm-全局及镜像" tabindex="-1"><a class="header-anchor" href="#npm-全局及镜像" aria-hidden="true">#</a> npm 全局及镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化</span>
<span class="token function">npm</span> init
<span class="token function">npm</span> init <span class="token parameter variable">--yes</span>
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>

<span class="token comment"># 查看版本</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> version

<span class="token comment"># 淘宝镜像</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
<span class="token comment"># 官方镜像源</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
<span class="token comment"># 查看当前镜像源</span>
<span class="token function">npm</span> config get registry


<span class="token comment"># 查看npm配置</span>
<span class="token function">npm</span> config list
<span class="token comment"># 查看当前目录下已安装的 node 包, -g查看全局</span>
<span class="token function">npm</span> list
<span class="token function">npm</span> list <span class="token parameter variable">-g</span>

<span class="token comment"># 清除缓存</span>
<span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span>

<span class="token comment"># 升级npm版本</span>
<span class="token function">npm</span> <span class="token function">install</span> npm@latest <span class="token parameter variable">-g</span> <span class="token comment">#（@latest表示最新的版本）</span>

<span class="token comment"># 安装/卸载依赖</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token comment">#简写 npm i</span>
<span class="token function">npm</span> uninstall <span class="token comment">#卸载依赖</span>
<span class="token function">npm</span> update <span class="token comment">#更新依赖</span>

<span class="token function">npm</span> <span class="token function">install</span> webpack@^1.0.0 --save-dev

-g： <span class="token comment">#--global 的缩写，表示安装到全局目录里</span>
-S： <span class="token comment">#--save 的缩写，表示安装的包将写入package.json里面的dependencies生产依赖</span>
-D： <span class="token comment">#--save-dev 的缩写，表示将安装的包将写入packege.json里面的devDependencies开发依赖</span>
 i： <span class="token comment">#install的缩写，表示安装</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nvm-的安装与使用" tabindex="-1"><a class="header-anchor" href="#nvm-的安装与使用" aria-hidden="true">#</a> nvm 的安装与使用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装nvm：</span>
<span class="token number">1</span>. 先查看当前版本node <span class="token parameter variable">-v</span>
<span class="token number">2</span>. 全局下载 n <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n <span class="token comment"># mac如果权限不够可以使用sudo npm install -g n</span>

nvm命令：
nvm <span class="token function">install</span> stable <span class="token comment">## 安装最新稳定版 node</span>
nvm <span class="token function">install</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token comment">## 安装指定版本</span>
nvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token comment">## 删除已安装的指定版本</span>
nvm use <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token comment">## 切换使用指定的版本node</span>
nvm <span class="token function">ls</span> <span class="token comment">## 列出所有安装的版本</span>
nvm ls-remote <span class="token comment">## 列出所有远程服务器的版本</span>
nvm current <span class="token comment">## 显示当前的版本</span>
nvm <span class="token builtin class-name">alias</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token comment">## 给不同的版本号添加别名</span>
nvm <span class="token builtin class-name">unalias</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token comment">## 删除已定义的别名</span>
nvm reinstall-packages <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token comment">## 在当前版本 node 环境下，重新 全局安装指定版本号的 npm 包</span>
nvm <span class="token builtin class-name">alias</span> default <span class="token punctuation">[</span>node版本号<span class="token punctuation">]</span> <span class="token comment">##设置默认版本</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yarn-常用" tabindex="-1"><a class="header-anchor" href="#yarn-常用" aria-hidden="true">#</a> yarn 常用</h3><p>Yarn 的三个特点</p><ol><li>速度快: Yarn 缓存了每个下载过的包，再次使用时无需重复下载。同时它是并行的，因此安装速度更快</li><li>安全: 在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。</li><li>可靠: 使用详细、简洁的锁文件格式和明确的安装算法，使 Yarn 能够在不同系统上保证无差异的工作。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token comment"># 添加依赖</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> <span class="token parameter variable">--dev</span> <span class="token comment"># 安装开发依赖</span>
<span class="token function">yarn</span> global <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> <span class="token comment"># 安装全局依赖</span>

<span class="token function">yarn</span> <span class="token function">install</span> <span class="token comment"># 安装项目中所有依赖项</span>
<span class="token function">yarn</span> upgrade <span class="token comment"># 升级依赖包， --latest 升级最新</span>
<span class="token function">yarn</span> remove <span class="token operator">&lt;</span>packageName<span class="token operator">&gt;</span> <span class="token comment"># 删除依赖</span>

<span class="token function">yarn</span> version <span class="token comment"># 查看版本 yarn -v</span>
<span class="token function">yarn</span> list <span class="token comment"># 列出安装的依赖</span>
<span class="token function">yarn</span> pack <span class="token comment"># 创建依赖项的压缩gzip</span>
<span class="token function">yarn</span> policies <span class="token comment"># 规定整个项目中执行Yarn的版本</span>
<span class="token function">yarn</span> publish <span class="token comment"># 将依赖发布到npm注册表</span>

<span class="token comment"># 缓存</span>
<span class="token function">yarn</span> cache
<span class="token function">yarn</span> cache list <span class="token comment"># 列出已缓存的每个包</span>
<span class="token function">yarn</span> cache <span class="token function">dir</span> <span class="token comment"># 返回 全局缓存位置</span>
<span class="token function">yarn</span> cache clean <span class="token comment"># 清除缓存 --force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[l];function t(p,o){return s(),a("div",null,c)}const r=n(i,[["render",t],["__file","2.Npm包管理工具.html.vue"]]);export{r as default};
