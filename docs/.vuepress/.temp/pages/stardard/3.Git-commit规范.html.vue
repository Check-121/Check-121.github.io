<template><p><strong>来源</strong>：</p>
<blockquote>
<p><a href="https://link.zhihu.com/?target=http%3A//juejin.im/post/5d0b3f8c6fb9a07ec07fc5d0" target="_blank" rel="noopener noreferrer">https://link.zhihu.com/?target=http%3A//juejin.im/post/5d0b3f8c6fb9a07ec07fc5d0<ExternalLinkIcon/></a></p>
</blockquote>
<p>git 是现在市面上最流行的版本控制工具，书写良好的 commit message 能大大提高代码维护的效率。但是在日常开发中由于缺少对 commit message 的约束，导致填写内容随意、质量参差不齐，可读性低亦难以维护。</p>
<h2 id="用什么规范" tabindex="-1"><a class="header-anchor" href="#用什么规范" aria-hidden="true">#</a> <strong>用什么规范？</strong></h2>
<p>现在市面上比较流行的方案是<code>约定式提交规范</code>（<code>Conventional Commits</code>），它受到了<code>Angular提交准则</code>的启发，并在很大程度上以其为依据。<code>约定式提交规范</code>是一种基于提交消息的轻量级约定。</p>
<p>它提供了一组用于创建清晰的提交历史的简单规则；这使得编写基于规范的自动化工具变得更容易。这个约定与<code>SemVer</code>相吻合，在提交信息中描述新特性、bug 修复和破坏性变更。它的 message 格式如下:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;类型>[可选的作用域]: &lt;描述>

[可选的正文]

[可选的脚注]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> <strong>Quick Start</strong></h2>
<h3 id="_1-全局安装-commitizen-cz-conventional-changelog" tabindex="-1"><a class="header-anchor" href="#_1-全局安装-commitizen-cz-conventional-changelog" aria-hidden="true">#</a> 1. 全局安装 commitizen &amp; cz-conventional-changelog</h3>
<p><code>commitizen</code>是一个撰写合格<code>commit message</code>的工具，用于代替<code>git commit</code> 指令，而<code>cz-conventional-changelog</code>适配器提供 conventional-changelog 标准（约定式提交标准）。基于不同需求，也可以使用不同适配器。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g commitizen cz-conventional-changelog
<span class="token builtin class-name">echo</span> <span class="token string">'{ "path": "cz-conventional-changelog" }'</span> <span class="token operator">></span> ~/.czrc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>安装完毕后，可直接使用<code>git cz</code>来取代<code>git commit</code>。
任何<code>git commit</code>指令的<code>option</code>都能用在 <code>git cz</code>指令上, 例如<code>git cz -a</code></p>
<p>全局模式下，需要 <code>~/.czrc</code> 配置文件, 为<code>commitizen</code>指定<code>Adapter</code>。</p>
<h3 id="_2-项目内安装-commitlint-husky" tabindex="-1"><a class="header-anchor" href="#_2-项目内安装-commitlint-husky" aria-hidden="true">#</a> 2. 项目内安装 commitlint &amp; husky</h3>
<p><code>commitlint</code>负责用于对<code>commit message</code>进行格式校验，<code>husky</code>负责提供更易用的<code>git hook</code>。
<code>Use npm</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D husky @commitlint/config-conventional @commitlint/cli
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>Use yarn</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> husky @commitlint/config-conventional @commitlint/cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>commitlint</code>只能做格式规范，无法触及内容。对于内容质量的把控只能靠我们自己。</p>
<h3 id="_3-添加相应配置" tabindex="-1"><a class="header-anchor" href="#_3-添加相应配置" aria-hidden="true">#</a> 3. 添加相应配置</h3>
<p>创建<code>commitlint.config.js</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># In the same path as package.json</span>
<span class="token builtin class-name">echo</span> <span class="token string">'module.exports = {extends: ["@commitlint/config-conventional"]};'</span> <span class="token operator">></span> ./commitlint.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>引入<code>husky</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> husky <span class="token function">add</span> .husky/commit-msg <span class="token string">'yarn commitlint --edit $1'</span>
<span class="token comment"># npm</span>
npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">'npx --no-install commitlint --edit "$1"'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_4-使用" tabindex="-1"><a class="header-anchor" href="#_4-使用" aria-hidden="true">#</a> 4. 使用</h3>
<p>执行<code>git cz</code>进入 interactive 模式，根据提示依次填写</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">1</span>.Select the <span class="token builtin class-name">type</span> of change that you're committing 选择改动类型 <span class="token punctuation">(</span><span class="token operator">&lt;</span>type<span class="token operator">></span><span class="token punctuation">)</span>
<span class="token number">2</span>.What is the scope of this change <span class="token punctuation">(</span>e.g. component or <span class="token function">file</span> name<span class="token punctuation">)</span>? 填写改动范围 <span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">></span><span class="token punctuation">)</span>
<span class="token number">3</span>.Write a short, imperative tense description of the change: 写一个精简的描述 <span class="token punctuation">(</span><span class="token operator">&lt;</span>subject<span class="token operator">></span><span class="token punctuation">)</span>
<span class="token number">4</span>.Provide a longer description of the change: <span class="token punctuation">(</span>press enter to skip<span class="token punctuation">)</span> 对于改动写一段长描述 <span class="token punctuation">(</span><span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">)</span>
<span class="token number">5</span>.Are there any breaking changes? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span> 是破坏性修改吗？默认n <span class="token punctuation">(</span><span class="token operator">&lt;</span>footer<span class="token operator">></span><span class="token punctuation">)</span>
<span class="token number">6</span>.Does this change affect any openreve issues? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span> 改动修复了哪个问题？默认n <span class="token punctuation">(</span><span class="token operator">&lt;</span>footer<span class="token operator">></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>生成的 commit message 格式如下：</p>
<div class="language-plain ext-plain line-numbers-mode"><pre v-pre class="language-plain"><code>&lt;type>(&lt;scope>): &lt;subject>
&lt;BLANK LINE>
&lt;body>
&lt;BLANK LINE>
&lt;footer>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>填写完毕后，<code>husky</code>会调用<code>commitlint</code>对 message 进行格式校验，默认规定<code>type</code>及<code>subject</code>为必填项。</p>
<h2 id="commit-message-规范在-bdw-项目落地使用情况" tabindex="-1"><a class="header-anchor" href="#commit-message-规范在-bdw-项目落地使用情况" aria-hidden="true">#</a> <strong>Commit message 规范在 bdw 项目落地使用情况</strong></h2>
<p>针对团队目前的情况，我们讨论后拟定了<code>commit message</code>每一部分的填写规则。</p>
<h3 id="_1-type" tabindex="-1"><a class="header-anchor" href="#_1-type" aria-hidden="true">#</a> 1. type</h3>
<p><code>type</code>为必填项，用于指定 commit 的类型，约定了<code>feat</code>、<code>fix</code>两个<code>主要type</code>，以及 docs、style、build、refactor、revert 五个<code>特殊type</code>，<code>其余type</code>暂不使用。</p>
<div class="language-plain ext-plain line-numbers-mode"><pre v-pre class="language-plain"><code># 主要type
feat:     增加新功能
fix:      修复bug
# 特殊type
docs:     只改动了文档相关的内容
style:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
build:    构造工具的或者外部依赖的改动，例如webpack，npm
refactor: 代码重构时使用
revert:   执行git revert打印的message
# 其它type
test:     添加测试或者修改现有测试
perf:     提高性能的改动
ci:       与CI（持续集成服务）有关的改动
chore:    不修改src或者test的其余修改，例如构建过程或辅助工具的变动
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>当一次改动包括<code>主要type</code>与<code>特殊type</code>时，统一采用<code>主要type</code>。</p>
<h3 id="_2-scope" tabindex="-1"><a class="header-anchor" href="#_2-scope" aria-hidden="true">#</a> 2. scope</h3>
<p><code>scope</code>也为必填项，用于描述改动的范围，格式为项目名/模块名，例如：
<code>node-pc/common</code> <code>rrd-h5/activity</code>，而<code>we-sdk</code>不需指定模块名。如果一次 commit 修改多个模块，建议拆分成多次 commit，以便更好追踪和维护。</p>
<h3 id="_3-subject" tabindex="-1"><a class="header-anchor" href="#_3-subject" aria-hidden="true">#</a> 3. subject</h3>
<p>是 commit 目的的简短描述，不超过 50 个字符。</p>
<div class="language-git ext-git line-numbers-mode"><pre v-pre class="language-git"><code>以动词开头，使用第一人称现在时，比如change，而不是changed或changes
第一个字母小写
结尾不加句号（.）
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_4-body" tabindex="-1"><a class="header-anchor" href="#_4-body" aria-hidden="true">#</a> 4. body</h3>
<p><code>body</code>填写详细描述，主要描述<code>改动之前的情况</code>及<code>修改动机</code>，对于小的修改不作要求，但是重大需求、更新等必须添加 body 来作说明。</p>
<h3 id="_5-break-changes" tabindex="-1"><a class="header-anchor" href="#_5-break-changes" aria-hidden="true">#</a> 5. break changes</h3>
<p><code>break changes</code>指明是否产生了破坏性修改，涉及 break changes 的改动必须指明该项，类似版本升级、接口参数减少、接口删除、迁移等。</p>
<h3 id="_6-affect-issues" tabindex="-1"><a class="header-anchor" href="#_6-affect-issues" aria-hidden="true">#</a> 6. affect issues</h3>
<p><code>affect issues</code>指明是否影响了某个问题。例如我们使用 jira 时，我们在<code>commit message</code>中可以填写其影响的<code>JIRA_ID</code>，若要开启该功能需要先打通<code>jira</code>与<code>gitlab</code>。</p>
<p>参考文档：</p>
<blockquote>
<p><a href="https://docs.gitlab.com/ee/user/project/integrations/jira.html" target="_blank" rel="noopener noreferrer">https://docs.gitlab.com/ee/user/project/integrations/jira.html<ExternalLinkIcon/></a></p>
</blockquote>
<p>填写方式例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>re #JIRA_ID
fix #JIRA_ID
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> <strong>示例</strong></h2>
<p>完整的 commit message 示例</p>
<p><img src="@source/stardard/images/git-commit-1.jpeg" alt=""></p>
<p>相应的 git log</p>
<p><img src="@source/stardard/images/git-commit-2.jpeg" alt=""></p>
<h2 id="扩展阅读" tabindex="-1"><a class="header-anchor" href="#扩展阅读" aria-hidden="true">#</a> 扩展阅读</h2>
<p><strong>1、</strong><a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank" rel="noopener noreferrer"><strong>conventional commits</strong><ExternalLinkIcon/></a> <code>必读</code> 介绍约定式提交标准。</p>
<p><strong>2、<a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noopener noreferrer">Angular 规范<ExternalLinkIcon/></a></strong> <code>必读</code> 介绍 Angular 标准每个部分该写什么、该怎么写。</p>
<p><strong>3、<a href="https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum" target="_blank" rel="noopener noreferrer">@commitlint/config-conventional <ExternalLinkIcon/></a></strong> <code>必读</code> 介绍 commitlint 的校验规则 config-conventional，以及一些常见 passes/fails 情况。</p>
</template>
