<template><h2 id="linters" tabindex="-1"><a class="header-anchor" href="#linters" aria-hidden="true">#</a> linters</h2>
<ul>
<li>格式化规则
<ul>
<li>prettier</li>
</ul>
</li>
<li>代码质量规则</li>
</ul>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h3 id="_1-本地安装-prettier" tabindex="-1"><a class="header-anchor" href="#_1-本地安装-prettier" aria-hidden="true">#</a> 1. 本地安装 Prettier：</h3>
<blockquote>
<p>用 --save-exact 锁定版本
prettier 不同版本会有排版差别</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev --save-exact prettier
<span class="token function">yarn</span> <span class="token function">add</span> --dev --exact prettier
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>排版</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx prettier --write <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>格式校验</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx prettier --check <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>关闭 ESLint/stylelint 格式化规则</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>eslint-config-prettier
stylelint-config-prettier
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-prettierrc-js-配置" tabindex="-1"><a class="header-anchor" href="#_2-prettierrc-js-配置" aria-hidden="true">#</a> 2. .prettierrc.js 配置</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_3-添加-prettierignore-配置" tabindex="-1"><a class="header-anchor" href="#_3-添加-prettierignore-配置" aria-hidden="true">#</a> 3. 添加 .prettierignore 配置</h3>
<p>Example：</p>
<div class="language-plain ext-plain line-numbers-mode"><pre v-pre class="language-plain"><code># Ignore artifacts:
build
coverage
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_4-vscode-工作区配置" tabindex="-1"><a class="header-anchor" href="#_4-vscode-工作区配置" aria-hidden="true">#</a> 4. vscode 工作区配置</h3>
<ul>
<li>安装 Prettier - Code formatter 插件</li>
<li>工作区配置</li>
</ul>
<p>首选项 -&gt; 设置 -&gt; 工作区 -&gt; 打开设置（.json）</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"prettier.enable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span><span class="token punctuation">,</span>
  <span class="token property">"files.autoSave"</span><span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnType"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnPaste"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_5-pre-commit-hook" tabindex="-1"><a class="header-anchor" href="#_5-pre-commit-hook" aria-hidden="true">#</a> 5. Pre-commit Hook</h3>
<h4 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一：</h4>
<ul>
<li>安装 husky 和 lint-staged</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev husky lint-staged
npx husky <span class="token function">install</span>
npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">"npx lint-staged"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>添加 lint-staged 配置到 package.json
<blockquote>
<p>prettier 应放在 eslint/stylelint 之后</p>
</blockquote>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"**/*"</span><span class="token operator">:</span> <span class="token string">"prettier --check . --ignore-unknown"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二：</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i mrm -g
npx mrm lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>
<p><a href="https://prettier.io/docs/en/options.html" target="_blank" rel="noopener noreferrer">https://prettier.io/docs/en/options.html<ExternalLinkIcon/></a></p>
<h2 id="husky-deprecated-git-hook-配置" tabindex="-1"><a class="header-anchor" href="#husky-deprecated-git-hook-配置" aria-hidden="true">#</a> Husky Deprecated：Git Hook 配置</h2>
<p>husky 在 6.0.0 开始，进行了破坏性变更，以下方式废弃：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token string">"husky"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"hooks"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"pre-commit"</span><span class="token builtin class-name">:</span> <span class="token string">"lint-staged"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h3>
<ul>
<li><a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">prettier 官方文档<ExternalLinkIcon/></a></li>
</ul>
</template>
