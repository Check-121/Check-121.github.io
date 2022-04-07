<template><h2 id="gitflow-介绍" tabindex="-1"><a class="header-anchor" href="#gitflow-介绍" aria-hidden="true">#</a> GitFlow 介绍</h2>
<p>虽然有 Git 这样优秀的版本管理工具，但是我们面对版本管理的时候，依然有非常大的挑战，我们都知道大家工作在同一个仓库上，那么彼此的代码协作必然带来很多问题和挑战，如下：</p>
<ol>
<li>如何开始一个 Feature 的开发，而不影响别的 Feature？</li>
<li>由于很容易创建新分支，分支多了如何管理，时间久了，如何知道每个分支是干什么的？</li>
<li>哪些分支已经合并回了主干？</li>
<li>如何进行 Release 的管理？开始一个 Release 的时候如何冻结 Feature, 如何在 Prepare Release 的时候，开发人员可以继续开发新的功能？</li>
<li>线上代码出 Bug 了，如何快速修复？而且修复的代码要包含到开发人员的分支以及下一个 Release?</li>
<li>大部分开发人员现在使用 Git 就只是用三个甚至两个分支，一个是 Master, 一个是 Develop, 还有一个是基于 Develop 打的各种分支。这个在小项目规模的时候还勉强可以支撑，因为很多人做项目就只有一个 Release, 但是人员一多，而且项目周期一长就会出现各种问题。</li>
</ol>
<p>诸如以上问题，代码需要代码规范一样，同样代码管理也需要一个清晰的流程和规范，荷兰程序员 Vincent Driessen 为了解决这个问题提出了<a href="https://link.juejin.cn?target=https%3A%2F%2Fnvie.com%2Fposts%2Fa-successful-git-branching-model%2F" target="_blank" rel="noopener noreferrer">A Successful Git Branching Model<ExternalLinkIcon/></a>。流程图如下：</p>
<p><img src="@source/stardard/images/git-flow.png" alt="git-flow"></p>
<ul>
<li>Gitflow 工作流程围绕项目发布定义了严格的分支模型。尽管它比 Feature Branch Workflow 更复杂一些，但它也为管理更大规模的项目提供了坚实的框架。</li>
<li>与 Feature Branch Workflow 比起来，Gitflow 流程并没有增加任何新的概念或命令。 其特色在于，它为不同的分支分配了非常明确的角色，并且定义了使用场景和用法。除了用于功能开发的分支，它还使用独立的分支进行发布前的准备、记录以及后期维护。当然，你还是能充分利用 Feature Branch Workflow 的好处：拉拽请求（Pull Request）、隔离的试验以及更高效率的合作。</li>
</ul>
<h2 id="gitflow-常用分支" tabindex="-1"><a class="header-anchor" href="#gitflow-常用分支" aria-hidden="true">#</a> GitFlow 常用分支</h2>
<h3 id="master" tabindex="-1"><a class="header-anchor" href="#master" aria-hidden="true">#</a> master</h3>
<ul>
<li>主分支, 产品的功能全部实现后, 最终在 <code>master</code> 分支对外发布;</li>
<li>该分支为只读唯一分支, 只能从其他分支<code>(release/hotfix)</code>合并, 不能在此分支修改;</li>
<li>另外所有在 <code>master</code> 分支的推送应该打标签做记录, 方便追溯;</li>
<li>例如 <code>release</code> 合并到 <code>master</code>, 或 <code>hotfix</code> 合并到 <code>master</code>。</li>
</ul>
<h3 id="develop" tabindex="-1"><a class="header-anchor" href="#develop" aria-hidden="true">#</a> develop</h3>
<ul>
<li>主开发分支, 基于 <code>master</code> 分支克隆;</li>
<li>包含所有要发布到下一个 <code>release</code> 的代码;</li>
<li>该分支为只读唯一分支, 只能从其他分支合并;</li>
<li><code>feature</code> 功能分支完成, 合并到 develop(不推送);</li>
<li><code>develop</code> 拉取 <code>release</code> 分支, 提测;</li>
<li><code>release/hotfix</code> 分支上线完毕, 合并到 <code>develop</code> 并推送。</li>
</ul>
<h3 id="feature" tabindex="-1"><a class="header-anchor" href="#feature" aria-hidden="true">#</a> feature</h3>
<ul>
<li>功能开发分支, 基于 <code>develop</code> 分支克隆, 主要用于新需求新功能的开发;</li>
<li>功能开发完毕后合到 <code>develop</code> 分支(未正式上线之前不推送到远程中央仓库!!!);</li>
<li><code>feature</code> 分支可同时存在多个, 用于团队中多个功能同时开发 , 属于临时分支 , 功能完成后可选删除。</li>
</ul>
<h3 id="release" tabindex="-1"><a class="header-anchor" href="#release" aria-hidden="true">#</a> release</h3>
<ul>
<li>测试分支, 基于 <code>feature</code> 分支合并到 <code>develop</code> 之后, 从 <code>develop</code> 分支克隆;</li>
<li>主要用于提交给测试人员进行功能测试, 测试过程中发现的 BUG 在本分支进行修复, 修复完成上线后合并到 <code>develop/master</code> 分支并推送(完成功能), 打 Tag</li>
<li>属于临时分支, 功能上线后可选删除。</li>
</ul>
<h3 id="hotfix" tabindex="-1"><a class="header-anchor" href="#hotfix" aria-hidden="true">#</a> hotfix</h3>
<ul>
<li>补丁分支, 基于 <code>master</code> 分支克隆, 主要用于对线上的版本进行 BUG 修复;</li>
<li>修复完毕后合并到 <code>develop/master</code> 分支并推送, 打 Tag;</li>
<li>属于临时分支, 补丁修复上线后可选删除;</li>
<li>所有 <code>hotfix</code> 分支的修改会进入到下一个 <code>release</code>。</li>
</ul>
<h2 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h2>
<h3 id="master-分支" tabindex="-1"><a class="header-anchor" href="#master-分支" aria-hidden="true">#</a> master 分支</h3>
<p><code>master</code> 分支为初始分支, 也是用于记录历史的分支, 所有在 <code>master</code> 分支上的 Commit 应该 Tag。</p>
<p>GitFlow 使用两个分支来记录项目开发的历史, 而不是使用单一的 <code>master</code> 分支。在 Gitflow 流程中，<code>master</code> 只是用于保存官方的发布历史，而 <code>develop</code> 分支才是用于集成各种功能开发的分支。使用版本号为 <code>master</code> 上的所有提交打标签（tag）也很方便。事实上, Gitflow 流程就是围绕这两个特点鲜明的分支展开的。</p>
<p><img src="@source/stardard/images/git-master.png" alt="git-master"></p>
<h3 id="feature-分支" tabindex="-1"><a class="header-anchor" href="#feature-分支" aria-hidden="true">#</a> Feature 分支</h3>
<p>分支名 feature/*</p>
<p>每一个新功能的开发都应该各自使用独立的分支。 为了备份或便于团队之间的合作，这种分支也可以被推送到中央仓库。 但是，在创建新的功能开发分支时，父分支应该选择 <code>develop</code>（而不是 master）。 当功能开发完成时，改动的代码应该被合并（merge）到 <code>develop</code> 分支。功能开发永远不应该直接牵扯到 <code>master</code>。</p>
<p><img src="@source/stardard/images/git-feature.png" alt="git-feature"></p>
<h3 id="release-分支" tabindex="-1"><a class="header-anchor" href="#release-分支" aria-hidden="true">#</a> Release 分支</h3>
<p>分支名 release/*</p>
<p><code>release</code> 分支基于 <code>develop</code> 分支创建，打完 <code>release</code> 分之后，我们可以在这个 <code>release</code> 分支上测试，修改 Bug 等。同时，其它开发人员可以基于开发新的 <code>feature</code>。 (注意：一旦打了 <code>release</code> 分支之后不要从 <code>develop</code> 分支上合并新的改动到 <code>release</code> 分支)</p>
<p>发布 <code>release</code> 分支时，合并 <code>release</code> 到 <code>master</code> 和 <code>develop</code>， 同时在 <code>master</code> 分支上打个 Tag 记住 <code>release</code> 版本号，然后可以删除 <code>release</code> 分支了。</p>
<p><img src="@source/stardard/images/git-release.png" alt="git-release"></p>
<h3 id="hotfix-分支" tabindex="-1"><a class="header-anchor" href="#hotfix-分支" aria-hidden="true">#</a> Hotfix 分支</h3>
<p>分支名 hotfix/*</p>
<p><code>hotfix</code> 分支是维护分支，基于 <code>master</code> 分支创建。发布后的维护工作或者紧急问题的快速修复也需要使用一个独立的分支。这是唯一一种可以直接基于 <code>master</code> 创建的分支。一旦问题被修复了，所做的改动应该被合并入 <code>master</code> 和 <code>develop</code> 分支（或者用于当前发布的分支）。在这之后，<code>master</code> 上还要使用更新的版本号打好 Tag。</p>
<p><img src="@source/stardard/images/git-hotfix.png" alt="git-hotfix"></p>
<h2 id="工作主要流程" tabindex="-1"><a class="header-anchor" href="#工作主要流程" aria-hidden="true">#</a> 工作主要流程</h2>
<ol>
<li>
<p>初始化项目为 <code>gitflow</code>, 默认创建 <code>master</code> 分支, 然后从 <code>master</code> 拉取第一个 <code>develop</code> 分支;</p>
</li>
<li>
<p>从 <code>develop</code> 拉取 <code>feature</code> 分支进行编码开发(多个开发人员拉取多个 feature 同时进行并行开发, 互不影响);</p>
</li>
<li>
<p><code>feature</code> 分支完成后, 合并到 <code>develop</code>(不推送, feature 功能完成还未提测, 推送后会影响其他功能分支的开发),合并 <code>feature</code> 到 <code>develop</code>, 可以选择删除当前 <code>feature</code>, 也可以不删除, 但当前 <code>feature</code> 就不可更改了, 必须从 <code>release</code> 分支继续编码修改</p>
</li>
<li>
<p>从 <code>develop</code> 拉取 <code>release</code> 分支进行提测, 提测过程中在 <code>release</code> 分支上修改 BUG;</p>
</li>
<li>
<p><code>release</code> 分支上线后, 合并 <code>release</code> 分支到 <code>develop/master</code> 并推送, 合并之后, 可选删除当前 <code>release</code> 分支, 若不删除, 则当前 <code>release</code> 不可修改。 线上有问题也必须从 <code>master</code> 拉取 <code>hotfix</code> 分支进行修改;</p>
</li>
<li>
<p>上线之后若发现线上 BUG, 从 <code>master</code> 拉取 <code>hotfix</code> 进行 BUG 修改;</p>
</li>
<li>
<p><code>hotfix</code> 通过测试上线后, 合并 <code>hotfix</code> 分支到 <code>master/develop</code> 并推送, 合并之后, 可选删除当前 <code>hostfix</code>, 若不删除, 则当前 <code>hotfix</code> 不可修改, 若补丁未修复, 需要从 <code>master</code> 拉取新的 <code>hotfix</code> 继续修改;</p>
</li>
<li>
<p>当进行一个 <code>feature</code> 时, 若 <code>develop</code> 分支有变动, 如其他开发人员完成功能并上线, 则需要将完成的功能合并到自己分支上,即合并 <code>develop</code> 到当前 <code>feature</code> 分支;</p>
</li>
<li>
<p>当进行一个 <code>release</code> 分支时, 若 <code>develop</code> 分支有变动, 如其他开发人员完成功能并上线, 则需要将完成的功能合并到自己分支上, 即合并 <code>develop</code> 到当前 <code>release</code> 分支 (!!! 因为当前 release 分支通过测试后会发布到线上, 如果不合并最新的 develop 分支, 就会发生丢代码的情况)。</p>
</li>
</ol>
<h2 id="gitflow-流程命令代码示例" tabindex="-1"><a class="header-anchor" href="#gitflow-流程命令代码示例" aria-hidden="true">#</a> GitFlow 流程命令代码示例</h2>
<h3 id="一般命令代码" tabindex="-1"><a class="header-anchor" href="#一般命令代码" aria-hidden="true">#</a> 一般命令代码</h3>
<h4 id="创建-develop-分支" tabindex="-1"><a class="header-anchor" href="#创建-develop-分支" aria-hidden="true">#</a> 创建 develop 分支</h4>
<p>给默认的 <code>master</code> 配备一个 <code>develop</code> 分支, 一种简单的做法是：让一个开发者在本地建立一个空的 <code>develop</code> 分支, 然后把它推送到服务器。<code>develop </code>分支将包含项目的所有历史，而 <code>master</code> 会是一个缩减版本。现在，其他开发者应该克隆（clone）中央仓库，并且为 <code>develop</code> 创建一个追踪分支。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch develop
<span class="token function">git</span> push -u origin develop
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="开始新-feature-开发" tabindex="-1"><a class="header-anchor" href="#开始新-feature-开发" aria-hidden="true">#</a> 开始新 Feature 开发</h4>
<p>当我们开始开发新功能时，我们需要各自建立了自己的分支。注意，在创建分支时，父分支不能选择 <code>master</code>，而要选择 <code>develop</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -b feature/xxx develop
<span class="token comment"># Optionally, push branch to origin:</span>
<span class="token function">git</span> push -u origin feature/xxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> status
<span class="token function">git</span> <span class="token function">add</span> some-file
<span class="token function">git</span> commit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="完成-feature" tabindex="-1"><a class="header-anchor" href="#完成-feature" aria-hidden="true">#</a> 完成 Feature</h4>
<p>当新功能开发完毕时，需要将代码合并到 <code>develop</code> 分支，并删除 <code>feature</code> 分支。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> pull origin develop
<span class="token function">git</span> checkout develop
<span class="token function">git</span> merge --no-ff feature/xxx
<span class="token function">git</span> push origin develop

<span class="token function">git</span> branch -d feature/xxx

<span class="token comment"># If you pushed branch to origin:</span>
<span class="token function">git</span> push origin --delete feature/xxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="开始-relase" tabindex="-1"><a class="header-anchor" href="#开始-relase" aria-hidden="true">#</a> 开始 Relase</h4>
<p>当功能开发完成时需要新建一个分支来进行产品代码发布的相关工作，这个分支专门用于发布前的准备，包括一些清理工作、全面的测试、文档的更新以及任何其他的准备工作。它与用于功能开发的分支相似，不同之处在于它是专为产品代码发布服务的。一旦创建了这个分支并把它推向中央仓库，这次产品发布包含的功能也就固定下来了。 任何还处于开发状态的功能只能等待下一个发布周期。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -b release/v1.0.0 develop

<span class="token comment"># Optional: Bump version number, commit</span>
<span class="token comment"># Prepare release, commit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="完成-release" tabindex="-1"><a class="header-anchor" href="#完成-release" aria-hidden="true">#</a> 完成 Release</h4>
<p>一切准备就绪之后，就要把发布分支合并入 <code>master</code> 和 <code>develop</code> 分支， 并为 <code>master</code> 分支打上合适的标签，然后再将发布分支删除。注意，往 <code>develop</code> 分支的合并是很重要的，因为开发人员可能在发布分支上修复了一些关键的问题，而这些修复对于正在开发中的新功能是有益的。再次提醒一下，如果 A 功能团队强调代码评审（Code Review），此时非常适合提出这样的请求。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> merge --no-ff release/v1.0.0
<span class="token function">git</span> push

<span class="token function">git</span> checkout develop
<span class="token function">git</span> merge --no-ff release/v1.0.0
<span class="token function">git</span> push

<span class="token function">git</span> branch -d release/v1.0.0

<span class="token comment"># If you pushed branch to origin:</span>
<span class="token function">git</span> push origin --delete release/v1.0.0

<span class="token function">git</span> tag -a v1.0.0 master
<span class="token function">git</span> push --tags
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="开始-hotfix" tabindex="-1"><a class="header-anchor" href="#开始-hotfix" aria-hidden="true">#</a> 开始 Hotfix</h4>
<p>如果线上发现 Bug，需要从 <code>master</code> 分支新建一个维护分支来修复线上 Bug。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -b hotfix/v1.1.1 master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="完成-hotfix" tabindex="-1"><a class="header-anchor" href="#完成-hotfix" aria-hidden="true">#</a> 完成 Hotfix</h4>
<p>当 bug 修复完毕，需要将代码合并到 <code>master/develop</code> 分支， 并将 <code>master</code> 打上 Tag， 最后删除维护分支。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> merge --no-ff hotfix/v1.1.1
<span class="token function">git</span> push

<span class="token function">git</span> checkout develop
<span class="token function">git</span> merge --no-ff hotfix/v1.1.1
<span class="token function">git</span> push

<span class="token function">git</span> branch -d hotfix/v1.1.1

<span class="token function">git</span> tag -a v1.1.1 master
<span class="token function">git</span> push --tags
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="gitflow-命令代码" tabindex="-1"><a class="header-anchor" href="#gitflow-命令代码" aria-hidden="true">#</a> GitFlow 命令代码</h3>
<ul>
<li>初始化：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> flow init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个命令会进行一些默认的配置，可以自动创建上面介绍的所有分支：<code>master</code>、<code>develop</code>、<code>feature</code>、<code>relase</code>、<code>hotfix</code>等分支。 完成后当前所在分支就变成 develop. 任何开发都必须从 develop 开始。</p>
<ul>
<li>开始新 Feature:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> flow feature start MYFEATURE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令会创建一个 <code>feature</code> 分支</p>
<ul>
<li>完成一个 Feature:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> flow feature finish MYFEATURE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令将会把 <code>feature/MYFEATURE</code> 合并到 <code>develope</code> 分支，然后删除功能(feature)分支。</p>
<ul>
<li>Publish 一个 Feature(也就是 push 到远程服务器):</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> flow feature publish MYFEATURE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>获取 Publish 的 Feature:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> flow feature pull origin MYFEATURE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>开始一个 Release:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> flow release start RELEASE BASE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>发布 Release:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> flow release finish RELEASE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当完成(finish)一个发布分支时，它会把所有的修改合并到 <code>master</code> 分支，同时合并回 <code>develop</code> 分支，所以不需要担心 <code>master</code> 分支比 <code>develop</code> 分支更加超前。</p>
<ul>
<li>Publish 一个 Release:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> flow release publish RELEASE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>注意打标签:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push --tags
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>开始一个 Hotfix:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> flow hotfix start VERSION BASENAME
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>发布一个 Hotfix:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> flow hotfix finish VERSION
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当完成(finish)一个维护分支时，它会把所有的修改合并到 <code>master</code> 分支，同时合并回 <code>develop</code> 分支。</p>
<p><img src="@source/stardard/images/git-flow-process.png" alt="git-flow-process"></p>
</template>
