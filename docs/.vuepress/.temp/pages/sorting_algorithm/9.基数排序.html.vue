<template><h2 id="算法思路" tabindex="-1"><a class="header-anchor" href="#算法思路" aria-hidden="true">#</a> 算法思路</h2>
<ul>
<li>取得数组中的最大数，并取得位数</li>
<li>arr 为原始数组，从最低位开始取每个位组成 radix 数组</li>
<li>对 radix 进行计数排序（利用计数排序适用于小范围数的特点）</li>
</ul>
<p><img src="@source/sorting_algorithm/images/radix_sort.gif" alt="基数排序"></p>
<h2 id="算法实现" tabindex="-1"><a class="header-anchor" href="#算法实现" aria-hidden="true">#</a> 算法实现</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">47</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token function-variable function">radixSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> maxDigit</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> mod <span class="token operator">=</span> <span class="token number">10</span>
  <span class="token keyword">let</span> dev <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> maxDigit<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> dev <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">,</span> mod <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> bucket <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">%</span> mod<span class="token punctuation">)</span> <span class="token operator">/</span> dev<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">[</span>bucket<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>bucket<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      result<span class="token punctuation">[</span>bucket<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> result<span class="token punctuation">.</span>length<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>result<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          arr<span class="token punctuation">[</span>pos<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token comment">// test</span>
console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">'radixSort time'</span><span class="token punctuation">)</span>
<span class="token function">radixSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 1.489990234375ms</span>
console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">'radixSort time'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="算法分析" tabindex="-1"><a class="header-anchor" href="#算法分析" aria-hidden="true">#</a> 算法分析</h2>
<p>第一次排序结果: 50 2 3 44 4 15 5 36 26 46 47 27 38 48 19
第二次排序结果: 2 3 4 5 15 19 26 27 36 38 44 46 47 47 50</p>
<ul>
<li>适用于数据范围通常在 1000 以内，且每个数值都要大于等于 0 的情况</li>
<li>必须要知道最高有多少位</li>
<li><code>平均时间复杂度为 O(n * k), 平均空间复杂度为 O(n + k)，占用额外内存且是稳定的</code></li>
</ul>
</template>
