import{_ as p,r as c,o as t,c as l,a as n,b as r,F as i,d as s,e as a}from"./app.4198e563.js";const o={},m=s(`<h2 id="git-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#git-\u7248\u672C" aria-hidden="true">#</a> git \u7248\u672C</h2><h3 id="_1-\u7248\u672C\u56DE\u9000" tabindex="-1"><a class="header-anchor" href="#_1-\u7248\u672C\u56DE\u9000" aria-hidden="true">#</a> 1. \u7248\u672C\u56DE\u9000</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1.\u4F7F\u7528 git log \u547D\u4EE4\u5386\u53F2\u7248\u672C\u8BB0\u5F55\u56DE\u9000\u7248\u672C</span>
<span class="token function">git</span> reset --hard f6a7c803a6931a9ec
<span class="token function">git</span> reset --soft f6a7c803a6931a9ec
<span class="token comment"># 2.\u63A8\u9001\u5230\u8FDC\u7A0B</span>
<span class="token function">git</span> push -f -u origin xxxx\uFF08\u9700\u8981\u56DE\u9000\u7684\u5206\u652F\uFF09
<span class="token comment"># \u6216\u8005\u63A8\u9001\u5230\u8FDC\u7A0B\u5206\u652F\u5E76\u521B\u5EFA</span>
 <span class="token function">git</span> push origin -u feature/xxxx

<span class="token comment"># 3.git\u64A4\u56DEadd</span>
<span class="token function">git</span> reset HEAD

<span class="token comment"># 4.\u64A4\u9500\u4E0A\u4E00\u6B21\u63D0\u4EA4</span>
<span class="token function">git</span> reset --soft HEAD^

<span class="token comment"># \u6BD4\u8F83\u4E24\u4E2A\u5206\u652F\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> branch1 branch2 --stat        <span class="token comment">#\u663E\u793A\u51FA\u6240\u6709\u6709\u5DEE\u5F02\u7684\u6587\u4EF6\u5217\u8868</span>
<span class="token function">git</span> <span class="token function">diff</span> branch1 branch2 \u5177\u4F53\u6587\u4EF6\u8DEF\u5F84    <span class="token comment">#\u663E\u793A\u6307\u5B9A\u6587\u4EF6\u7684\u8BE6\u7EC6\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> branch1 branch2               <span class="token comment">#\u663E\u793A\u51FA\u6240\u6709\u6709\u5DEE\u5F02\u7684\u6587\u4EF6\u7684\u8BE6\u7EC6\u5DEE\u5F02</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_2-\u7248\u672C-tag" tabindex="-1"><a class="header-anchor" href="#_2-\u7248\u672C-tag" aria-hidden="true">#</a> 2. \u7248\u672C tag</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7ED9\u5206\u652F\u52A0tag</span>
<span class="token function">git</span> tag <span class="token comment">#\uFF08\u67E5\u770B\u5F53\u524D\u6807\u7B7E\uFF09</span>

<span class="token function">git</span> tag -a \u7248\u672C\u53F7<span class="token punctuation">(</span>v1.0.0<span class="token punctuation">)</span> -m \u201C<span class="token punctuation">(</span>\u6CE8\u91CA<span class="token punctuation">)</span>\u201D
<span class="token comment"># -a 0.1.3\u662F\u589E\u52A0 \u540D\u4E3A0.1.3\u7684\u6807\u7B7E</span>
<span class="token comment"># -m \u540E\u9762\u8DDF\u7740\u7684\u662F\u6807\u7B7E\u7684\u6CE8\u91CA, \u5982\uFF1A</span>
<span class="token function">git</span> tag -a <span class="token number">0.1</span>.3 -m <span class="token string">&#39;Release version 0.1.3&#39;</span>

<span class="token comment"># \u628A\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u4E0A</span>
<span class="token function">git</span> push origin tagName
<span class="token comment"># \u4F8B\uFF1A</span>
<span class="token function">git</span> tag -a v4.9.3 -m \u201Cv4.9.3\u201D
<span class="token function">git</span> push origin v4.9.3

<span class="token comment"># \u628A\u672C\u5730\u6240\u6709\u7684tags\u63A8\u5230\u670D\u52A1\u5668\uFF0C\u666E\u901A\u7684git push origin master\u64CD\u4F5C\u4E0D\u4F1A\u63A8\u9001\u6807\u7B7E\u5230\u670D\u52A1\u5668\u7AEF\u3002</span>
<span class="token function">git</span> push origin --tags

<span class="token function">git</span> tag --list  <span class="token comment"># \u67E5\u770B\u5DF2\u6709tag\u5217\u8868</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>tag/branch/commit<span class="token punctuation">]</span>  <span class="token comment"># \u5207\u6362\u5230\u6307\u5B9Atag/branch/commit\u90FD\u662F\u6B64\u547D\u4EE4</span>

<span class="token comment"># \u5220\u9664tag</span>
<span class="token comment">#1. \u5220\u9664\u672C\u5730tag</span>
<span class="token function">git</span> tag -d v4.9.3
<span class="token comment">#2. \u5220\u9664\u8FDC\u7A0Btag</span>
<span class="token function">git</span> push origin --delete v4.9.3     <span class="token comment">#(\u65B0\u7248\u672C&gt;1.7)</span>
<span class="token function">git</span> push origin :refs/tags/v4.9.3   <span class="token comment">#(&lt;1.7\u8001\u7248\u672C)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><hr><h2 id="\u5206\u652F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a> \u5206\u652F\u7BA1\u7406</h2><h3 id="_1-\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> 1.\u8FDC\u7A0B\u4ED3\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1.\u67E5\u770B\u8FDC\u7A0B\u5173\u8054</span>
<span class="token function">git</span> remote -v

<span class="token comment"># 2.\u6DFB\u52A0\u5173\u8054\u8FDC\u7A0B\u5730\u5740</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://xxxx.git

<span class="token comment"># 3.\u4FEE\u6539\u5173\u8054\u5730\u5740</span>
<span class="token comment"># \u65B9\u5F0F1\u3001\u76F4\u63A5\u4FEE\u6539\uFF1A</span>
<span class="token function">git</span> remote set-url origin xxxxx.git
<span class="token comment"># \u65B9\u5F0F2\u3001\u5148\u5220\u540E\u52A0 \uFF1A</span>
<span class="token function">git</span> remote <span class="token function">rm</span> origin
<span class="token function">git</span> remote <span class="token function">add</span> origin xxxxx.git

<span class="token comment"># 4.\u5220\u9664\u6307\u5B9A\u8FDC\u7A0B\u5730\u5740</span>
<span class="token function">git</span> remote remove origin

<span class="token comment"># 5.\u65B0\u521B\u5EFAgit\u4ED3\u5E93</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://xxxx.git
<span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_2-\u5206\u652F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a> 2.\u5206\u652F\u7BA1\u7406</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5206\u652F</span>
<span class="token function">git</span> branch
<span class="token function">git</span> branch -a  <span class="token comment">#\u67E5\u770B\u672C\u5730\u53CA\u8FDC\u7A0B</span>

<span class="token comment"># \u5220\u9664\u5206\u652F</span>
<span class="token function">git</span> branch -D xxxx

<span class="token comment"># git \u5220\u9664\u672C\u5730\u5B58\u5728\uFF0C\u8FDC\u7A0B\u5DF2\u7ECF\u5220\u9664\u7684\u5206\u652F</span>
<span class="token function">git</span> remote prune origin

<span class="token comment"># \u5207\u6362\u5206\u652F</span>
<span class="token function">git</span> checkout xxxx
<span class="token function">git</span> checkout -b xxxx <span class="token comment">#\u521B\u5EFA\u5206\u652F\u5E76\u5207\u6362</span>
<span class="token function">git</span> checkout -b xxxx origin/xxxx <span class="token comment">#\u521B\u5EFA\u5207\u6362\u5E76\u5173\u8054\u8FDC\u7A0B</span>

<span class="token comment"># \u4FEE\u6539\u5206\u652F\u540D</span>
<span class="token comment">#\u5982\u679C\u5BF9\u4E8E\u5206\u652F\u4E0D\u662F\u5F53\u524D\u5206\u652F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u4EE3\u7801\uFF1A</span>
<span class="token function">git</span> branch -m <span class="token string">&quot;\u539F\u5206\u652F\u540D&quot;</span> <span class="token string">&quot;\u65B0\u5206\u652F\u540D&quot;</span>
<span class="token comment">#\u5982\u679C\u662F\u5F53\u524D\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528\u52A0\u4E0A\u65B0\u540D\u5B57</span>
<span class="token function">git</span> branch -m <span class="token string">&quot;\u65B0\u5206\u652F\u540D\u79F0&quot;</span>

<span class="token comment"># \u4FEE\u6539\u9ED8\u8BA4pull\u548Cpush\u5206\u652F\uFF1A</span>
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/develop develop
<span class="token comment"># origin/develop develop\u4E3A\u8981\u8BBE\u7F6E\u7684\u9ED8\u8BA4\u5206\u652F</span>

<span class="token comment"># \u672C\u5730\u63A8\u8FDC\u7A0B\uFF0C\u521B\u5EFA\u8FDC\u7A0B\u65B0\u5206\u652F\u5E76\u5173\u8054</span>
<span class="token function">git</span> push --set-upstream origin xxxx

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="_3-\u5206\u652F\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#_3-\u5206\u652F\u5408\u5E76" aria-hidden="true">#</a> 3.\u5206\u652F\u5408\u5E76</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u53EF\u4EE5\u5141\u8BB8\u4E0D\u76F8\u5173\u5386\u53F2\u63D0\uFF0C\u5F3A\u5236\u5408\u5E76</span>
<span class="token function">git</span> pull origin master --allow-unrelated-histories

<span class="token comment"># Git merge</span>
<span class="token comment"># 1\u3001\u5408\u5E76xxx\u5206\u652F\uFF0C\u5E76\u4FDD\u7559\u5176\u6240\u6709commit</span>
<span class="token function">git</span> merge \u2014no-ff  xxx
<span class="token comment"># 2\u3001\u5408\u5E76xxx\u5206\u652F\uFF0C\u538B\u7F29\u5668commit \u8BB0\u5F55\u6210\u4E00\u4E2A</span>
<span class="token function">git</span> merge \u2014squash xxx

<span class="token comment"># git-rebase</span>
<span class="token comment"># 1.\u5C06\u591A\u6B21commit\u5408\u5E76\uFF0C\u53EA\u4FDD\u7559\u4E00\u6B21\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55</span>
<span class="token function">git</span> rebase -i HEAD~6
<span class="token function">git</span> rebase -i xxxx <span class="token comment">##(\u5408\u5E76\u524D\u4E09\u4E2A\uFF0Cxxxx\u4E3A\u7B2C4\u4E2Ahash)</span>

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> rebase --continue
<span class="token comment"># 2.\u82E5\u65E0\u51B2\u7A81 or \u51B2\u7A81\u5DF2 fix\uFF0C\u5219\u4F1A\u51FA\u73B0\u4E00\u4E2A commit message \u7F16\u8F91\u9875\u9762\uFF0C\u4FEE\u6539 commit message \uFF0C\u7136\u540E \u8F93\u5165\uFF1Awq or x \u4FDD\u5B58\u9000\u51FA\u3002</span>

<span class="token comment"># \u82E5\u60F3\u9000\u51FA\u653E\u5F03\u6B64\u6B21\u538B\u7F29\uFF0C\u6267\u884C\u547D\u4EE4\uFF1A</span>
<span class="token function">git</span> rebase --abort

<span class="token comment"># \u5C06\u591A\u4E2Acommit \u5408\u5E76\u5230\u53E6\u4E00\u4E2A\u5206\u652F</span>
<span class="token function">git</span> rebase <span class="token punctuation">[</span>startpoint<span class="token punctuation">]</span> <span class="token punctuation">[</span>endpoint<span class="token punctuation">]</span> --onto <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span>


<span class="token comment"># cherry-pick</span>
<span class="token comment">## git cherry-pick\u547D\u4EE4\u7684\u4F5C\u7528\uFF0C\u5C31\u662F\u5C06\u6307\u5B9A\u7684\u63D0\u4EA4\uFF08commit\uFF09\u5E94\u7528\u4E8E\u5176\u4ED6\u5206\u652F\u3002</span>
<span class="token comment"># \u5F53\u524D\u5206\u652F\uFF0C\u5982\uFF1A\u628Adev\u7684 xxxx \u4E00\u6B21\u63D0\u4EA4 \u8D34\u5230 feature\u5206\u652F</span>
<span class="token function">git</span> log      <span class="token comment">#\u590D\u5236\u5F53\u524D\u5206\u652F\u7684xxxx hash</span>
<span class="token function">git</span> checkout -b feature <span class="token comment">#\u5207\u6362\u5206\u652F</span>
<span class="token function">git</span> cherry-pick xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,13),b=a("git-rebase from => "),u={href:"https://www.jianshu.com/p/571153f5daa1",target:"_blank",rel:"noopener noreferrer"},g=a("https://www.jianshu.com/p/571153f5daa1"),k=s(`<hr><h2 id="git-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#git-\u914D\u7F6E" aria-hidden="true">#</a> git \u914D\u7F6E</h2><h3 id="_1-git-\u5168\u5C40\u914D\u7F6E\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-git-\u5168\u5C40\u914D\u7F6E\u547D\u4EE4" aria-hidden="true">#</a> 1. git \u5168\u5C40\u914D\u7F6E\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name xxxx <span class="token comment">#\u6DFB\u52A0\u914D\u7F6E\u7528\u6237</span>

 <span class="token function">git</span> config --global --replace-all user.name xxxx <span class="token comment">#\u4FEE\u6539\u914D\u7F6E\u7528\u6237</span>

<span class="token function">git</span> config --global user.email xxx.@xx.com <span class="token comment">#\u6DFB\u52A0\u914D\u7F6E\u7528\u6237\u90AE\u4EF6</span>

<span class="token function">git</span> config --global --replace-all user.email xxx.@xx.com  <span class="token comment">#\u4FEE\u6539\u914D\u7F6E\u7528\u6237\u90AE\u4EF6</span>

<span class="token function">git</span> config --global -l <span class="token comment">#\u67E5\u770B\u6DFB\u52A0\u5168\u5C40\u53D8\u91CF\u4FEE\u6539\u7684\u914D\u7F6E\u4FE1\u606F </span>

<span class="token function">git</span> config -l  <span class="token comment">#\u67E5\u770B\u6240\u6709\u914D\u7F6E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_2-ssh-\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#_2-ssh-\u5BC6\u94A5" aria-hidden="true">#</a> 2. ssh \u5BC6\u94A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># mac git\u751F\u6210ssh\u5BC6\u94A5</span>
<span class="token comment"># 1.\u672C\u5730\u751F\u6210\u516C\u94A5</span>
ssh-keygen -o
<span class="token comment"># 2.\u67E5\u770B</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,6);function d(h,x){const e=c("ExternalLinkIcon");return t(),l(i,null,[m,n("p",null,[b,n("a",u,[g,r(e)])]),k],64)}var v=p(o,[["render",d],["__file","1.Git\u5E38\u7528.html.vue"]]);export{v as default};
