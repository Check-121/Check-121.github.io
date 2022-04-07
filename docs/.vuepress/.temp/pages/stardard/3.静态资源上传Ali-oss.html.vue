<template><h2 id="安装-betterwood-ali-oss" tabindex="-1"><a class="header-anchor" href="#安装-betterwood-ali-oss" aria-hidden="true">#</a> 安装 @betterwood/ali-oss</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @betterwood/ali-oss -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="项目根目录下增加配置-alioss-config-js" tabindex="-1"><a class="header-anchor" href="#项目根目录下增加配置-alioss-config-js" aria-hidden="true">#</a> 项目根目录下增加配置 alioss.config.js</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">oss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">accessKeyId</span><span class="token operator">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">accessKeySecret</span><span class="token operator">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bucket</span><span class="token operator">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">task</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'resources'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">'/xxx/***/'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>说明</strong>：</p>
<ul>
<li>会将 dist 下的所有文件，上传至阿里云 oss bucket 名为 mfsports 下的 publicPath 目录中</li>
<li>source 参数使用相对路径，通过 path.resolve 生成绝对路径</li>
<li>publicPath 参数前后需加 /</li>
</ul>
<h2 id="上传命令" tabindex="-1"><a class="header-anchor" href="#上传命令" aria-hidden="true">#</a> 上传命令</h2>
<ul>
<li>默认命令</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx oss  <span class="token comment"># 默认会使用根目录下 alioss.config.js 配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>指定配置文件</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx oss --config alioss.production.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>指定参数（推荐生产环境，accessKeyId、accessKeySecret 通过参数传入）</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx oss --config alioss.production.js --accessKeyId xxx --accessKeySecret xxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
