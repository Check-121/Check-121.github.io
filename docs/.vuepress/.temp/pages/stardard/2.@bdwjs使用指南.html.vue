<template><blockquote>
<p>此指南说明如下：</p>
<ul>
<li>eslint 配置目前只适用 vue3(ts),</li>
<li>stylelint 配置目前支持 scss,</li>
<li>其它可通用</li>
</ul>
</blockquote>
<h2 id="一、vscode-配置" tabindex="-1"><a class="header-anchor" href="#一、vscode-配置" aria-hidden="true">#</a> 一、vscode 配置</h2>
<ol>
<li>安装 Prettier - Code formatter、ESLint 、stylelint 扩展</li>
<li>工作区配置</li>
</ol>
<p>首选项 -&gt; 设置 -&gt; 工作区 -&gt; 打开设置（.json）</p>
<p>会创建.vscode/settings.json 文件，添加以下配置项</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code># .vscode/settings.json
<span class="token punctuation">{</span>
  <span class="token property">"prettier.enable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span><span class="token punctuation">,</span>
  <span class="token property">"files.autoSave"</span><span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnType"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnPaste"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token property">"eslint.alwaysShowStatus"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 总是在 VSCode 显示 ESLint 的状态</span>
  <span class="token property">"eslint.quiet"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 显示 warning 的错误</span>
  <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"source.fixAll"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 保存时使用 eslint/stylelint 修复可修复错误</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>使用</strong></p>
<p>ctrl + s 自动修复</p>
<h2 id="二、-prettier" tabindex="-1"><a class="header-anchor" href="#二、-prettier" aria-hidden="true">#</a> 二、 prettier</h2>
<ol>
<li>安装依赖</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @bdwjs/prettier-config -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>配置 <code>.prettierrc.js</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fabric <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@bdwjs/prettier-config'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>fabric<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="三、-stylelint" tabindex="-1"><a class="header-anchor" href="#三、-stylelint" aria-hidden="true">#</a> 三、 stylelint</h2>
<blockquote>
<p>目前支持 scss</p>
</blockquote>
<ol>
<li>安装依赖</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @bdwjs/stylelint-config -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>配置 <code>.stylelintrc.js</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  root: true,
  extends: <span class="token punctuation">[</span><span class="token string">'@bdwjs/stylelint-config'</span><span class="token punctuation">]</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="四、-eslint" tabindex="-1"><a class="header-anchor" href="#四、-eslint" aria-hidden="true">#</a> 四、 eslint</h2>
<blockquote>
<p>支持: vue3(ts)</p>
</blockquote>
<ol>
<li>安装依赖</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @bdwjs/eslint-config -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>配置 <code>.eslintrc.js</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  root: true,
  extends: <span class="token punctuation">[</span><span class="token string">'@bdwjs'</span><span class="token punctuation">]</span>,
  rules: <span class="token punctuation">{</span>
    <span class="token string">'global-require'</span><span class="token builtin class-name">:</span> <span class="token string">'off'</span>,
    <span class="token string">'arrow-body-style'</span><span class="token builtin class-name">:</span> <span class="token string">'off'</span>,
    <span class="token string">'vue/attribute-hyphenation'</span><span class="token builtin class-name">:</span> <span class="token string">'off'</span>,
    <span class="token string">'no-use-before-define'</span><span class="token builtin class-name">:</span> <span class="token string">'off'</span>,
    <span class="token string">'no-restricted-syntax'</span><span class="token builtin class-name">:</span> <span class="token string">'off'</span>,
    <span class="token string">'array-callback-return'</span><span class="token builtin class-name">:</span> <span class="token string">'off'</span>,
    <span class="token string">'guard-for-in'</span><span class="token builtin class-name">:</span> <span class="token string">'off'</span>,
  <span class="token punctuation">}</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="五、-commitlint" tabindex="-1"><a class="header-anchor" href="#五、-commitlint" aria-hidden="true">#</a> 五、 commitlint</h2>
<ol>
<li>安装依赖</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @bdwjs/commitlint-config -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>配置 <code>commitlint.config.js</code> 文件</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> -e <span class="token string">"module.exports = {<span class="token entity" title="\n">\n</span>  extends: ['@bdwjs/commitlint-config'],<span class="token entity" title="\n">\n</span>}"</span> <span class="token operator">></span> ./commitlint.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="六、-pre-commit-hook" tabindex="-1"><a class="header-anchor" href="#六、-pre-commit-hook" aria-hidden="true">#</a> 六、 Pre-commit Hook</h3>
<h4 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一：</h4>
<ul>
<li>安装 husky 和 lint-staged</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> husky lint-staged -D
<span class="token function">yarn</span> husky <span class="token function">install</span>
<span class="token function">yarn</span> husky <span class="token function">add</span> .husky/pre-commit <span class="token string">"npx lint-staged"</span>
<span class="token function">yarn</span> husky <span class="token function">add</span> .husky/commit-msg <span class="token string">'yarn commitlint --edit $1'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>添加 lint-staged 配置到 package.json
<blockquote>
<p>prettier 应放在 eslint/stylelint 之后</p>
</blockquote>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"src/**/*.{js,ts,vue}"</span><span class="token operator">:</span> <span class="token string">"eslint --fix --ignore-path .eslintignore"</span><span class="token punctuation">,</span>
    <span class="token property">"src/**/*.{less,sass,css,vue}"</span><span class="token operator">:</span> <span class="token string">"stylelint --fix --ignore-path .eslintignore"</span><span class="token punctuation">,</span>
    <span class="token property">"**/*"</span><span class="token operator">:</span> <span class="token string">"prettier --check . --ignore-unknown"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二：</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i mrm -g
npx mrm lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="七、配置scripts命令" tabindex="-1"><a class="header-anchor" href="#七、配置scripts命令" aria-hidden="true">#</a> 七、配置<code>scripts</code>命令</h2>
<p>1.项目根目录添加 .eslintignore 文件，里面表示不需要检验的目录</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>build/*.js
src/assets
public
dist

# 类型
typings

# 第三方库
wxcomponents
qqmap-wx-jssdk1.2
tki-qrcode
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>说明</strong></p>
<p>根据需要设置</p>
<ol start="2">
<li>package.json 中的 scripts 里添加</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"lint:js"</span><span class="token operator">:</span> <span class="token string">"eslint --fix --ext \".js,.vue,.ts\" src"</span><span class="token punctuation">,</span>
<span class="token property">"lint:style"</span><span class="token operator">:</span> <span class="token string">"stylelint --fix \"src/**/*.{vue,css,less,scss}\" --ignore-path .eslintignore"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>说明</strong></p>
<p><code>--ignore-path</code>: 参数指定 eslint、stylelint 忽略<code>配置文件</code>,其内表示不需要检验的目录</p>
</template>
