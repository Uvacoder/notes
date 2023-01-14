import{_ as p,M as o,p as c,q as i,R as n,t as s,N as e,a1 as t}from"./framework-7db056f4.js";const l={},r=t('<h1 id="贪心" tabindex="-1"><a class="header-anchor" href="#贪心" aria-hidden="true">#</a> 贪心</h1><h2 id="区间选择问题" tabindex="-1"><a class="header-anchor" href="#区间选择问题" aria-hidden="true">#</a> 区间选择问题</h2><h2 id="区间问题" tabindex="-1"><a class="header-anchor" href="#区间问题" aria-hidden="true">#</a> 区间问题</h2><h3 id="区间合并" tabindex="-1"><a class="header-anchor" href="#区间合并" aria-hidden="true">#</a> 区间合并</h3>',4),u={href:"https://www.acwing.com/problem/content/description/3305/",target:"_blank",rel:"noopener noreferrer"},d=t(`<p><b>思路：</b> 把所有区间按左端点排序，再依次从左往右遍历：</p><ol><li>如果遍历到的区间左端点在当前区间右端点右边(即两区间未重合)，计数区间，并把当前区间更新</li><li>如果遍历到的区间左端点在当前区间右端点左边或相等(即两区间重合)，不需要计数，把两区间合并(当前区间的右端点取最大的)</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;algorithm&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> vector<span class="token operator">&lt;</span>pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> VII<span class="token punctuation">;</span>

VII segs<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span>VII <span class="token operator">&amp;</span>segs<span class="token punctuation">)</span><span class="token punctuation">{</span>
    VII res<span class="token punctuation">;</span>

    <span class="token keyword">int</span> st <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2e9</span><span class="token punctuation">,</span> ed <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2e9</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> seg <span class="token operator">:</span> segs<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ed <span class="token operator">&lt;</span> seg<span class="token punctuation">.</span>first<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>st <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">2e9</span><span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token punctuation">{</span>st<span class="token punctuation">,</span> ed<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            st <span class="token operator">=</span> seg<span class="token punctuation">.</span>first<span class="token punctuation">,</span> ed <span class="token operator">=</span> seg<span class="token punctuation">.</span>second<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> ed <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>ed<span class="token punctuation">,</span> seg<span class="token punctuation">.</span>second<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>st <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">2e9</span><span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token punctuation">{</span>st<span class="token punctuation">,</span> ed<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 把最后一个区间压入，如果根本就没区间输入，需要排除初始值[-2e9, -2e9]</span>

    segs <span class="token operator">=</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> l<span class="token punctuation">,</span> r<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> l <span class="token operator">&gt;&gt;</span> r<span class="token punctuation">;</span>
        segs<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token punctuation">{</span>l<span class="token punctuation">,</span> r<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>segs<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> segs<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// pair 默认先排序 first 再排序 second</span>

    <span class="token function">merge</span><span class="token punctuation">(</span>segs<span class="token punctuation">)</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> segs<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分配问题" tabindex="-1"><a class="header-anchor" href="#分配问题" aria-hidden="true">#</a> 分配问题</h2><h2 id="贪心背包" tabindex="-1"><a class="header-anchor" href="#贪心背包" aria-hidden="true">#</a> 贪心背包</h2><h2 id="最小生成树" tabindex="-1"><a class="header-anchor" href="#最小生成树" aria-hidden="true">#</a> 最小生成树</h2><h3 id="prim" tabindex="-1"><a class="header-anchor" href="#prim" aria-hidden="true">#</a> Prim</h3>`,7),k={href:"/algorithm/data/04-%E5%9B%BE#Prim",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"kruscal",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kruscal","aria-hidden":"true"},"#"),s(" Kruscal")],-1),m={href:"/algorithm/data/04-%E5%9B%BE#kruscal",target:"_blank",rel:"noopener noreferrer"};function h(b,g){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[n("a",u,[s("Acwing 3302. 表达式求值"),e(a)])]),d,n("p",null,[s("详细请看图章节"),n("a",k,[s("最小生成树 Prim"),e(a)])]),v,n("p",null,[s("详细请看图章节"),n("a",m,[s("最小生成树 Kruscal"),e(a)])])])}const _=p(l,[["render",h],["__file","03-贪心.html.vue"]]);export{_ as default};
