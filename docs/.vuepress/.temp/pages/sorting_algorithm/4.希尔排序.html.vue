<template><h2 id="算法思路" tabindex="-1"><a class="header-anchor" href="#算法思路" aria-hidden="true">#</a> 算法思路</h2>
<p>希尔排序是插入排序的一种更高效的实现。不同之处在于，它会优先比较距离较远的元素。
希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。</p>
<p><img src="@source/sorting_algorithm/images/shell_sort.gif" alt="希尔排序"></p>
<h2 id="算法实现" tabindex="-1"><a class="header-anchor" href="#算法实现" aria-hidden="true">#</a> 算法实现</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">592</span><span class="token punctuation">,</span> <span class="token number">401</span><span class="token punctuation">,</span> <span class="token number">874</span><span class="token punctuation">,</span> <span class="token number">141</span><span class="token punctuation">,</span> <span class="token number">348</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">,</span> <span class="token number">911</span><span class="token punctuation">,</span> <span class="token number">887</span><span class="token punctuation">,</span> <span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">283</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token function-variable function">shellSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> temp
  <span class="token keyword">let</span> gap <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length

  <span class="token keyword">while</span> <span class="token punctuation">(</span>gap <span class="token operator">&lt;</span> len <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    gap <span class="token operator">=</span> gap <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>gap<span class="token punctuation">;</span> gap <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> gap <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>gap <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// gap = 1时，变为插入排序</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> gap<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> j <span class="token operator">=</span> i
      temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> gap <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> temp <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> gap<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> gap<span class="token punctuation">]</span>
        j <span class="token operator">=</span> j <span class="token operator">-</span> gap
      <span class="token punctuation">}</span>

      arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token comment">// 测试</span>
console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">'shellSort time'</span><span class="token punctuation">)</span>
<span class="token function">shellSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//</span>
console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">'shellSort time'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="算法分析" tabindex="-1"><a class="header-anchor" href="#算法分析" aria-hidden="true">#</a> 算法分析</h2>
<p>第一次排序: gap 为 5，结果为 72 401 874 141 283 592 911 887 820 348
第二次排序: gap 为 2，结果为 72 141 283 348 820 401 874 592 911 887
第三次排序: gap 为 1，结果为 72 141 283 348 401 592 820 874 887 911</p>
<ul>
<li><code>平均时间复杂度为 O(n * logn), 平均空间复杂度为 O(1)，不占用额外内存且是不稳定的</code></li>
</ul>
</template>
