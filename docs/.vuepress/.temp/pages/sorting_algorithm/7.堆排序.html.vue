<template><h2 id="算法思路" tabindex="-1"><a class="header-anchor" href="#算法思路" aria-hidden="true">#</a> 算法思路</h2>
<p>堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：</p>
<p><strong>大顶堆</strong>：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列 -&gt; <code>arr[i] &gt;= arr[2i+1] &amp;&amp; arr[i] &gt;= arr[2i+2] </code>
<strong>小顶堆</strong>：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列 -&gt; <code>arr[i] &lt;= arr[2i+1] &amp;&amp; arr[i] &lt;= arr[2i+2] </code></p>
<ul>
<li>将待排序序列构建成一个堆 H[0……n-1]，根据（升序降序需求）选择大顶堆或小顶堆；</li>
<li>把堆首（最大值）和堆尾互换；</li>
<li>把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；</li>
<li>重复步骤 2，直到堆的尺寸为 1。</li>
</ul>
<p><img src="@source/sorting_algorithm/images/heap_sort.gif" alt="堆排序"></p>
<h2 id="算法实现" tabindex="-1"><a class="header-anchor" href="#算法实现" aria-hidden="true">#</a> 算法实现</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">47</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token function-variable function">heapSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length

  <span class="token comment">// 初始化大顶堆，从第一个非叶子结点开始</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">heapify</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> i<span class="token punctuation">,</span> len<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 交换堆顶元素与最后一个有效子元素</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token comment">// 堆化有效序列(有效序列长度为 currentHeapSize，抛除了最后一个元素)</span>
    <span class="token function">heapify</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> items
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">heapify</span><span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> i<span class="token punctuation">,</span> heapSize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    r <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span>
    maxIndex <span class="token operator">=</span> i

  <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> heapSize <span class="token operator">&amp;&amp;</span> items<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">></span> items<span class="token punctuation">[</span>maxIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    maxIndex <span class="token operator">=</span> l
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;</span> heapSize <span class="token operator">&amp;&amp;</span> items<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">></span> items<span class="token punctuation">[</span>maxIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    maxIndex <span class="token operator">=</span> r
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>maxIndex <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> i<span class="token punctuation">,</span> maxIndex<span class="token punctuation">)</span>
    <span class="token function">heapify</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> maxIndex<span class="token punctuation">,</span> heapSize<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  items<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
  items<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
<span class="token punctuation">}</span>

<span class="token comment">// 测试</span>
console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">'heapSort time'</span><span class="token punctuation">)</span>
<span class="token function">heapSort</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span> <span class="token comment">// 0.10986328125 ms</span>
console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">'heapSort time'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="算法分析" tabindex="-1"><a class="header-anchor" href="#算法分析" aria-hidden="true">#</a> 算法分析</h2>
<ul>
<li>建堆: 每一层元素个数为 2^n-1, n 表示行数</li>
<li>堆排序:
<ul>
<li>堆排序中最后一位不就是 2^n-m(n 代表总行数，m 代表差多少位不到完成堆的位数)</li>
<li>那该元素的父级是谁，2^n-1-m/2，2^n-1，m/2 表示数组的中间值</li>
<li>l = 2 _ x + 1 与 r = 2 _ x + 2 ，就是每个父级元素对应的子堆</li>
<li>每一层的堆排序都能够把本层的最大值剔除出来，这样当所有 层循环结束之后，序列也就完成了</li>
</ul>
</li>
</ul>
</template>
