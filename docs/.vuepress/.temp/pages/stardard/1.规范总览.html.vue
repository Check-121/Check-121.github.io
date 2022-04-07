<template><h2 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h2>
<ul>
<li>vscode</li>
</ul>
<h2 id="开发语言" tabindex="-1"><a class="header-anchor" href="#开发语言" aria-hidden="true">#</a> 开发语言</h2>
<ul>
<li>
<p>typescript</p>
<p>官方文档：<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">https://www.typescriptlang.org/<ExternalLinkIcon/></a></p>
</li>
<li>
<p>css</p>
<ul>
<li>
<p>less/sass</p>
<p><strong>现状</strong>
管理后台：less
C 端 H5：sass</p>
</li>
<li>
<p>postcss</p>
</li>
</ul>
</li>
</ul>
<h2 id="知识库" tabindex="-1"><a class="header-anchor" href="#知识库" aria-hidden="true">#</a> 知识库</h2>
<ul>
<li>
<p>飞书- 云文档</p>
<p>位置：飞书&gt; 共享空间&gt; 产品研发中心&gt;</p>
</li>
</ul>
<h2 id="格式化代码" tabindex="-1"><a class="header-anchor" href="#格式化代码" aria-hidden="true">#</a> 格式化代码</h2>
<p>统一采用公司标准。</p>
<ul>
<li>
<p>prettier</p>
<ul>
<li>项目配置</li>
</ul>
</li>
<li>
<p>IDE vscode 设置</p>
<ul>
<li>安装 Prettier - Code formatter 插件</li>
<li>工作区配置：.vscode/settings.json</li>
</ul>
</li>
<li>
<p>Git hook 配置</p>
</li>
</ul>
<p>文档: <RouterLink to="/stardard/5.Prettier%E8%A7%84%E8%8C%83%E5%92%8C%E9%85%8D%E7%BD%AE.html">Prettier 规范和配置</RouterLink></p>
<h2 id="代码规范-linters" tabindex="-1"><a class="header-anchor" href="#代码规范-linters" aria-hidden="true">#</a> 代码规范 &amp; Linters</h2>
<p>eslint &amp; stylelint</p>
<ul>
<li>执行标准：采用各框架推荐配置</li>
<li>vue 框架：<RouterLink to="/stardard/4.Lint%E8%A7%84%E8%8C%83%E5%92%8C%E9%85%8D%E7%BD%AE.html">Lint 规范和配置</RouterLink></li>
</ul>
<h2 id="git-commit-规范" tabindex="-1"><a class="header-anchor" href="#git-commit-规范" aria-hidden="true">#</a> Git Commit 规范</h2>
<ul>
<li><RouterLink to="/stardard/6.Git-commit%E8%A7%84%E8%8C%83.html">Git commit message 规范</RouterLink></li>
</ul>
<h2 id="git-提交校验" tabindex="-1"><a class="header-anchor" href="#git-提交校验" aria-hidden="true">#</a> Git 提交校验</h2>
<ul>
<li>
<p>git hooks</p>
<p>linters &amp; prettier &amp; git commit 需要配置对应的 git hook</p>
</li>
</ul>
<h2 id="代码分支管理规范" tabindex="-1"><a class="header-anchor" href="#代码分支管理规范" aria-hidden="true">#</a> 代码分支管理规范</h2>
<ul>
<li><RouterLink to="/stardard/7.GitFlow%E8%A7%84%E8%8C%83.html">GitFlow 规范</RouterLink></li>
</ul>
<h2 id="ci-cd" tabindex="-1"><a class="header-anchor" href="#ci-cd" aria-hidden="true">#</a> CI/CD</h2>
<h4 id="_1-环境隔离" tabindex="-1"><a class="header-anchor" href="#_1-环境隔离" aria-hidden="true">#</a> 1. 环境隔离</h4>
<p>生产环境必须自动化、禁止手动直接操作</p>
<ul>
<li>测试环境</li>
<li>预发布环境（uat）</li>
<li>生产环境</li>
</ul>
<h4 id="_2-部署" tabindex="-1"><a class="header-anchor" href="#_2-部署" aria-hidden="true">#</a> 2. 部署</h4>
<ul>
<li>
<p>Jenkins</p>
<p>目前采用 Jenkins 统一部署</p>
</li>
<li>
<p><RouterLink to="/stardard/3.%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E4%B8%8A%E4%BC%A0Ali-oss.html">静态资源 CI/CD</RouterLink></p>
</li>
</ul>
<h2 id="框架选型" tabindex="-1"><a class="header-anchor" href="#框架选型" aria-hidden="true">#</a> 框架选型</h2>
<p>现各项目采用如下方案，如需引入新方案，需技术组合议。</p>
<h4 id="_1-小程序" tabindex="-1"><a class="header-anchor" href="#_1-小程序" aria-hidden="true">#</a> 1. 小程序</h4>
<ul>
<li>uniapp</li>
</ul>
<h4 id="_2-管理后台" tabindex="-1"><a class="header-anchor" href="#_2-管理后台" aria-hidden="true">#</a> 2. 管理后台</h4>
<ul>
<li>react</li>
</ul>
<h4 id="_3-c-端-h5" tabindex="-1"><a class="header-anchor" href="#_3-c-端-h5" aria-hidden="true">#</a> 3. C 端 H5</h4>
<ul>
<li>vue3</li>
</ul>
</template>
