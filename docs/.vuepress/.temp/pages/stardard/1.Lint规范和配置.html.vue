<template><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> Eslint</h2>
<ol>
<li>安装 eslint 依赖</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i --save-dev babel-eslint eslint eslint-plugin-vue eslint-plugin-prettier eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>package.json 中的 scripts 里添加</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"lint:js"</span><span class="token operator">:</span> <span class="token string">"eslint --fix --ext \".js,.vue,.ts\" src"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>项目根目录添加 .eslintignore 文件，里面表示不需要检验的目录</li>
</ol>
<div class="language-plain ext-plain line-numbers-mode"><pre v-pre class="language-plain"><code>build/*.js
src/assets
public
dist

# 类型
typings

# 第三方库
wxcomponents
qqmap-wx-jssdk1.2
tki-qrcode
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="4">
<li>项目根目录添加 .eslintrc.js 文件，添加对应的规则</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">"vue-eslint-parser"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">"@typescript-eslint/parser"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">globalReturn</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">impliedStrict</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">experimentalObjectRestSpread</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//启用对对象的扩展</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">es2020</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"prettier"</span><span class="token punctuation">,</span> <span class="token string">"@typescript-eslint"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>
        <span class="token string">"plugin:vue/recommended"</span><span class="token punctuation">,</span>
        <span class="token string">"plugin:@typescript-eslint/eslint-recommended"</span><span class="token punctuation">,</span>
        <span class="token string">"eslint-config-prettier"</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">uni</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">wx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">getCurrentPages</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">WechatMiniprogram</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">getApp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">UniApp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"no-console"</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">"production"</span> <span class="token operator">?</span> <span class="token string">"warn"</span> <span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"no-debugger"</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">"production"</span> <span class="token operator">?</span> <span class="token number">2</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// 以下关闭 新项目需打开</span>
        <span class="token string-property property">"no-empty"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">"@typescript-eslint/no-explicit-any"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">"vue/attribute-hyphenation"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">"prefer-rest-params"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">"vue/component-definition-name-casing"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 驼峰法命名规则</span>
        <span class="token string-property property">"no-undef"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">"no-unused-vars"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">"no-useless-escape"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><ul>
<li>vue/component-definition-name-casing</li>
</ul>
<p>Define a style for component definition name casing for consistency purposes.</p>
<p>此项 fix 会自动修改命名，防止出错，关闭</p>
<h2 id="stylelint" tabindex="-1"><a class="header-anchor" href="#stylelint" aria-hidden="true">#</a> Stylelint</h2>
<ol>
<li>安装 stylelint 依赖</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev stylelint stylelint-scss stylelint-config-standard stylelint-config-prettier stylelint-order stylelint-config-recess-order
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>stylelint-scss</strong></p>
<blockquote>
<p>scss 拓展，增加支持 scss 语法</p>
</blockquote>
<p><strong>stylelint-config-standard</strong></p>
<blockquote>
<p>作用：配置 Stylelint 规则。
官方的代码风格 ：<code>stylelint-config-standard</code>。该风格是 Stylelint 的维护者汲取了 GitHub、Google、Airbnb 多家之长生成的。</p>
</blockquote>
<p><strong>stylelint-order</strong></p>
<blockquote>
<p>该插件的作用是强制你按照某个顺序编写 css。例如先写定位，再写盒模型，再写内容区样式，最后写 CSS3 相关属性。这样可以极大的保证我们代码的可读性。</p>
</blockquote>
<p><strong>stylelint-config-recess-order</strong></p>
<blockquote>
<p>stylelint-order 插件的第三方配置</p>
</blockquote>
<ol start="2">
<li>package.json 中的 scripts 里添加</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"lint:style"</span><span class="token operator">:</span> <span class="token string">"stylelint --fix \"src/**/*.{vue,css,less,scss}\" --ignore-path .eslintignore"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>项目根目录添加 .stylelintrc.js 文件</li>
</ol>
<p><strong>配置方式：</strong></p>
<ol>
<li>在 package.json 中的 stylelint 属性指定规则</li>
<li>在 .stylelintrc 文件中指定，文件格式可以是 JSON 或者 YAML。也可以给该文件加后缀，像这样：.stylelintrc.json, .stylelintrc.yaml, .stylelintrc.yml, .stylelintrc.js</li>
<li>stylelint.config.js 文件，该文件 exports 一个配置对象 span&gt;
<blockquote>
<p>按顺序查找，以上三种方式任何一项有值，就会结束查找</p>
</blockquote>
</li>
</ol>
<p>在项目根目录新建 .stylelintrc.js 文件，复制以下内容</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"stylelint-config-standard"</span><span class="token punctuation">,</span>
        <span class="token string">"stylelint-config-recess-order"</span><span class="token punctuation">,</span>
        <span class="token string">"stylelint-config-prettier"</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"stylelint-scss"</span><span class="token punctuation">,</span> <span class="token string">"stylelint-order"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"font-family-no-missing-generic-family-keyword"</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string-property property">"selector-type-no-unknown"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">ignoreTypes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/^page/"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">"at-rule-no-unknown"</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string-property property">"unit-no-unknown"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">ignoreUnits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"rpx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">"function-name-case"</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string-property property">"no-descending-specificity"</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><ul>
<li>
<p>at-rule-no-unknown</p>
<p><a href="http://stylelint.docschina.org/user-guide/rules/at-rule-no-unknown/" target="_blank" rel="noopener noreferrer">禁止未知的@规则<ExternalLinkIcon/></a></p>
<p>禁掉是为了让 Stylelint 支持 SCSS 语法中的 mixin、extend、content 语法，目前完全关闭</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>   <span class="token string-property property">'at-rule-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">ignoreAtRules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'mixin'</span><span class="token punctuation">,</span> <span class="token string">'extend'</span><span class="token punctuation">,</span> <span class="token string">'content'</span><span class="token punctuation">,</span> <span class="token string">'include'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>
<p>No-descending-specificity:</p>
<p>禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。</p>
</li>
</ul>
<p><strong>片段禁用规则</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* stylelint-disable */</span>
<span class="token comment">/* （请说明禁止检测的理由）前端组件限制类名 */</span>
<span class="token selector">.cropper_topContainer .img-preview</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0 none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* stylelint-enable */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>fix 方式</strong></p>
<ul>
<li>stylelint --fix</li>
</ul>
<h2 id="vscode-配置" tabindex="-1"><a class="header-anchor" href="#vscode-配置" aria-hidden="true">#</a> vscode 配置</h2>
<ol>
<li>安装 ESLint 、stylelint 扩展</li>
<li>工作区配置</li>
</ol>
<p>在.vscode/settings.json 文件中，追加以下配置项</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"eslint.alwaysShowStatus"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 总是在 VSCode 显示 ESLint 的状态</span>
  <span class="token property">"eslint.quiet"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 显示 warning 的错误</span>
  <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"source.fixAll"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 保存时使用 eslint/stylelint 修复可修复错误</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>使用</strong></p>
<p>ctrl + s 自动修复</p>
<h2 id="pre-commit" tabindex="-1"><a class="header-anchor" href="#pre-commit" aria-hidden="true">#</a> pre-commit</h2>
<p>package.json 文件， &quot;lint-staged&quot;添加以下两项，放在 prettier 配置之前</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"src/**/*.{js,ts,vue}"</span><span class="token operator">:</span> <span class="token string">"eslint --fix --ignore-path .eslintignore"</span><span class="token punctuation">,</span>
<span class="token property">"src/**/*.{less,sass,css,vue}"</span><span class="token operator">:</span> <span class="token string">"stylelint --fix --ignore-path .eslintignore"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
