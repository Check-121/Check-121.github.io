import{_ as i,r as t,o as l,c,b as n,d as s,e as o,a}from"./app-43ae11cc.js";const p={},r=a(`<h2 id="_1-git-版本" tabindex="-1"><a class="header-anchor" href="#_1-git-版本" aria-hidden="true">#</a> 1.git 版本</h2><h3 id="i-版本回退" tabindex="-1"><a class="header-anchor" href="#i-版本回退" aria-hidden="true">#</a> I.版本回退</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.使用 git log 命令历史版本记录回退版本</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> f6a7c803a6931a9ec
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> f6a7c803a6931a9ec
<span class="token comment"># 撤回上一次提交</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^

<span class="token comment"># 2.推送到远程</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> <span class="token parameter variable">-u</span> origin xxxx（需要回退的分支）
<span class="token comment"># 或者推送到远程分支并创建</span>
 <span class="token function">git</span> push origin <span class="token parameter variable">-u</span> feature/xxxx

<span class="token comment"># 3.git撤回add</span>
<span class="token function">git</span> reset HEAD

<span class="token comment"># 4.撤销上一次提交</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^

<span class="token comment"># 5.比较两个分支差异</span>
<span class="token function">git</span> <span class="token function">diff</span> branch1 branch2 <span class="token parameter variable">--stat</span>        <span class="token comment">#显示出所有有差异的文件列表</span>
<span class="token function">git</span> <span class="token function">diff</span> branch1 branch2 具体文件路径    <span class="token comment">#显示指定文件的详细差异</span>
<span class="token function">git</span> <span class="token function">diff</span> branch1 branch2               <span class="token comment">#显示出所有有差异的文件的详细差异</span>

<span class="token comment"># 6.revert 常规commit：</span>
<span class="token function">git</span> revert <span class="token operator">&lt;</span>commit id<span class="token operator">&gt;</span> <span class="token comment"># 即可，git 会生成一个新的 commit，将指定的 commit 内容从当前分支上撤除。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ii-版本-tag" tabindex="-1"><a class="header-anchor" href="#ii-版本-tag" aria-hidden="true">#</a> II.版本 tag</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 给分支加tag</span>
<span class="token function">git</span> tag <span class="token comment">#（查看当前标签）</span>

<span class="token function">git</span> tag <span class="token parameter variable">-a</span> 版本号<span class="token punctuation">(</span>v1.0.0<span class="token punctuation">)</span> <span class="token parameter variable">-m</span> “<span class="token punctuation">(</span>注释<span class="token punctuation">)</span>”
<span class="token comment"># -a 0.1.3是增加 名为0.1.3的标签</span>
<span class="token comment"># -m 后面跟着的是标签的注释, 如：</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token number">0.1</span>.3 <span class="token parameter variable">-m</span> <span class="token string">&#39;Release version 0.1.3&#39;</span>

<span class="token comment"># 把分支推送到远程上</span>
<span class="token function">git</span> push origin tagName
<span class="token comment"># 例：</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> v4.9.3 <span class="token parameter variable">-m</span> “v4.9.3”
<span class="token function">git</span> push origin v4.9.3

<span class="token comment"># 把本地所有的tags推到服务器，普通的git push origin master操作不会推送标签到服务器端。</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>

<span class="token function">git</span> tag <span class="token parameter variable">--list</span>  <span class="token comment"># 查看已有tag列表</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>tag/branch/commit<span class="token punctuation">]</span>  <span class="token comment"># 切换到指定tag/branch/commit都是此命令</span>

<span class="token comment"># 删除tag</span>
<span class="token comment">#1. 删除本地tag</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> v4.9.3
<span class="token comment">#2. 删除远程tag</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> v4.9.3     <span class="token comment">#(新版本&gt;1.7)</span>
<span class="token function">git</span> push origin :refs/tags/v4.9.3   <span class="token comment">#(&lt;1.7老版本)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_2-分支管理" tabindex="-1"><a class="header-anchor" href="#_2-分支管理" aria-hidden="true">#</a> 2.分支管理</h2><h3 id="i-远程仓库" tabindex="-1"><a class="header-anchor" href="#i-远程仓库" aria-hidden="true">#</a> I.远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.查看远程关联</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 2.添加关联远程地址</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://xxxx.git

<span class="token comment"># 3.修改关联地址</span>
<span class="token comment"># 方式1、直接修改：</span>
<span class="token function">git</span> remote set-url origin xxxxx.git
<span class="token comment"># 方式2、先删后加 ：</span>
<span class="token function">git</span> remote <span class="token function">rm</span> origin
<span class="token function">git</span> remote <span class="token function">add</span> origin xxxxx.git

<span class="token comment"># 4.删除指定远程地址</span>
<span class="token function">git</span> remote remove origin

<span class="token comment"># 5.新创建git仓库</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://xxxx.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ii-分支管理" tabindex="-1"><a class="header-anchor" href="#ii-分支管理" aria-hidden="true">#</a> II.分支管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看分支</span>
<span class="token function">git</span> branch
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>  <span class="token comment">#查看本地及远程</span>

<span class="token comment"># 删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> xxxx

<span class="token comment"># git 删除本地存在，远程已经删除的分支</span>
<span class="token function">git</span> remote prune origin

<span class="token comment"># 切换分支</span>
<span class="token function">git</span> checkout xxxx
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> xxxx <span class="token comment">#创建分支并切换</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> xxxx origin/xxxx <span class="token comment">#创建切换并关联远程</span>

<span class="token comment"># 修改分支名</span>
<span class="token comment">#如果对于分支不是当前分支，可以使用下面代码：</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> <span class="token string">&quot;原分支名&quot;</span> <span class="token string">&quot;新分支名&quot;</span>
<span class="token comment">#如果是当前，那么可以使用加上新名字</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> <span class="token string">&quot;新分支名称&quot;</span>

<span class="token comment"># 修改默认pull和push分支：</span>
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/develop develop
<span class="token comment"># origin/develop develop为要设置的默认分支</span>

<span class="token comment"># 本地推远程，创建远程新分支并关联</span>
<span class="token function">git</span> push --set-upstream origin xxxx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iii-分支合并" tabindex="-1"><a class="header-anchor" href="#iii-分支合并" aria-hidden="true">#</a> III.分支合并</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可以允许不相关历史提，强制合并</span>
<span class="token function">git</span> pull origin master --allow-unrelated-histories

<span class="token comment"># Git merge</span>
<span class="token comment"># 1、合并xxx分支，并保留其所有commit</span>
<span class="token function">git</span> merge —no-ff  xxx
<span class="token comment"># 2、合并xxx分支，压缩器commit 记录成一个</span>
<span class="token function">git</span> merge —squash xxx

<span class="token comment"># git-rebase</span>
<span class="token comment"># 1.将多次commit合并，只保留一次提交历史记录</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD~6
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> xxxx <span class="token comment">##(合并前三个，xxxx为第4个hash)</span>

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--continue</span>
<span class="token comment"># 2.若无冲突 or 冲突已 fix，则会出现一个 commit message 编辑页面，修改 commit message ，然后 输入：wq or x 保存退出。</span>

<span class="token comment"># 若想退出放弃此次压缩，执行命令：</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--abort</span>

<span class="token comment"># 将多个commit 合并到另一个分支</span>
<span class="token function">git</span> rebase <span class="token punctuation">[</span>startpoint<span class="token punctuation">]</span> <span class="token punctuation">[</span>endpoint<span class="token punctuation">]</span> <span class="token parameter variable">--onto</span> <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span>


<span class="token comment"># cherry-pick</span>
<span class="token comment">## git cherry-pick命令的作用，就是将指定的提交（commit）应用于其他分支。</span>
<span class="token comment"># 当前分支，如：把dev的 xxxx 一次提交 贴到 feature分支</span>
<span class="token function">git</span> log      <span class="token comment">#复制当前分支的xxxx hash</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feature <span class="token comment">#切换分支</span>
<span class="token function">git</span> cherry-pick xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d={href:"https://www.jianshu.com/p/571153f5daa1",target:"_blank",rel:"noopener noreferrer"},m=a(`<hr><h2 id="_3-git-配置" tabindex="-1"><a class="header-anchor" href="#_3-git-配置" aria-hidden="true">#</a> 3.git 配置</h2><h3 id="i-git-全局配置命令" tabindex="-1"><a class="header-anchor" href="#i-git-全局配置命令" aria-hidden="true">#</a> I.git 全局配置命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name xxxx <span class="token comment">#添加配置用户</span>

 <span class="token function">git</span> config <span class="token parameter variable">--global</span> --replace-all user.name xxxx <span class="token comment">#修改配置用户</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email xxx.@xx.com <span class="token comment">#添加配置用户邮件</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> --replace-all user.email xxx.@xx.com  <span class="token comment">#修改配置用户邮件</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">-l</span> <span class="token comment">#查看添加全局变量修改的配置信息 </span>

<span class="token function">git</span> config <span class="token parameter variable">-l</span>  <span class="token comment">#查看所有配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ii-ssh-密钥" tabindex="-1"><a class="header-anchor" href="#ii-ssh-密钥" aria-hidden="true">#</a> II.ssh 密钥</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># mac git生成ssh密钥</span>
<span class="token comment"># 1.本地生成公钥</span>
ssh-keygen <span class="token parameter variable">-o</span>
<span class="token comment"># 2.查看</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(u,b){const e=t("ExternalLinkIcon");return l(),c("div",null,[r,n("p",null,[s("git-rebase from => "),n("a",d,[s("https://www.jianshu.com/p/571153f5daa1"),o(e)])]),m])}const g=i(p,[["render",v],["__file","1.Git常用.html.vue"]]);export{g as default};
