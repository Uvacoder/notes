import{_ as a,p as e,q as t,t as n,a1 as s}from"./framework-7db056f4.js";const p={},o=s(`<h1 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h1><h2 id="多表关系" tabindex="-1"><a class="header-anchor" href="#多表关系" aria-hidden="true">#</a> 多表关系</h2><p>项目开发中，在进行数据库表结构设计时，会根据业务需求及业务模块之间的关系，分析并设计表结构名，由于业务之间相互关联，所以各个表结构之间也存在着各种联系，基本上分为三种：</p><ul><li>一对多</li><li>多对多</li><li>一对一</li></ul><h3 id="一对多" tabindex="-1"><a class="header-anchor" href="#一对多" aria-hidden="true">#</a> 一对多</h3><ul><li>案例：部门与员工的关系</li><li>关系：一个部门对应多个员工，一个员工对应一个部门</li><li>实现：<code>在多的一方建立外键，指向一的一方的主键</code></li></ul><h3 id="多对多" tabindex="-1"><a class="header-anchor" href="#多对多" aria-hidden="true">#</a> 多对多</h3><ul><li>案例：学生与课程的关系</li><li>关系：一个学生可以选修多门课程，一门课程也可以供多个学生选修</li><li>实现：<code>建立第三张中间表，中间表值扫包含两个外键，分别关联两方主键</code></li></ul><h3 id="一对一" tabindex="-1"><a class="header-anchor" href="#一对一" aria-hidden="true">#</a> 一对一</h3><ul><li>案例：用户与用户详情的关系</li><li>关系：一对一关系，用于单表拆分，将一张表的基础字段放在在一张表中，其他详情字段放在另一张表中，以提升操作效率</li><li>实现：<code>在任意一方加入外键，关联另外一方的主键，并且设置外键为唯一的( unique )</code></li></ul><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><ul><li>概述：指从多张表中查询数据</li><li>笛卡尔积：笛卡儿积指子数学中，两个集合的所有组合情况（在多表查询时，需要消除无效的笛卡尔积）</li></ul><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2><ul><li>查询连接 <ul><li>内连接：相当于查询 A、B 交集部分数据</li><li>外连接： <ul><li>左外连接：查询左表所有数据，以及两张表交集部分数据</li><li>右外连接：查询右表所有数据，以及两张表交集部分数据</li></ul></li><li>自连接：当前表与自身的连接查询，自连接必须使用表别名</li></ul></li><li>子查询</li></ul><h3 id="内连接" tabindex="-1"><a class="header-anchor" href="#内连接" aria-hidden="true">#</a> 内连接</h3><p>查询两张表交集的部分</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 隐式内连接</span>
<span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表 <span class="token number">1</span><span class="token punctuation">,</span> 表 <span class="token number">2</span> <span class="token keyword">where</span> 条件<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>

<span class="token comment"># 显式内连接</span>
<span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表 <span class="token number">1</span> <span class="token punctuation">[</span><span class="token keyword">inner</span><span class="token punctuation">]</span> <span class="token keyword">join</span> 表 <span class="token number">2</span> <span class="token keyword">on</span> 条件<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外连接" tabindex="-1"><a class="header-anchor" href="#外连接" aria-hidden="true">#</a> 外连接</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 两个写法可以互换</span>
<span class="token comment"># 左外连接，相当于查询左表（表 1）的所有数据，包含交集部分</span>
<span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表 <span class="token number">1</span> <span class="token keyword">left</span> <span class="token punctuation">[</span><span class="token keyword">outer</span><span class="token punctuation">]</span> <span class="token keyword">join</span> 表 <span class="token number">2</span> <span class="token keyword">on</span> 条件<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>

<span class="token comment"># 右外连接，相当于查询右表（表 2）的所有数据，包含交集部分</span>
<span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表 <span class="token number">1</span> <span class="token keyword">right</span> <span class="token punctuation">[</span><span class="token keyword">outer</span><span class="token punctuation">]</span> <span class="token keyword">join</span> 表 <span class="token number">2</span> <span class="token keyword">on</span> 条件<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自连接" tabindex="-1"><a class="header-anchor" href="#自连接" aria-hidden="true">#</a> 自连接</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> 字段列表框 <span class="token keyword">from</span> 表 A 别名 A <span class="token keyword">join</span> 表 A 别名 B <span class="token keyword">on</span> 条件<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="联合查询" tabindex="-1"><a class="header-anchor" href="#联合查询" aria-hidden="true">#</a> 联合查询</h3><p>对于 union 查询，就是把多次查询的结果合并起来，形成一个新的查询结果集。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表 A<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>

<span class="token keyword">union</span><span class="token punctuation">[</span><span class="token keyword">ALL</span><span class="token punctuation">]</span>

<span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表 B<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询" aria-hidden="true">#</a> 子查询</h3><p>sql 语句中嵌套 select 语句，称为嵌套查询，又称为子查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> table1 <span class="token keyword">where</span> column1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">select</span> column1 <span class="token keyword">from</span> table2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>子查询外部的语句可以是 insert / update / delete / select 的任何一个</p><p>根据子查询结果的不同，分为：</p><ul><li>标量子查询（子查询结果为单个值）</li><li>列子查询（查询结果为一列）</li><li>行子查询（查询结果为一行）</li><li>表子查询（查询结果为多行多列）</li></ul><h4 id="标量子查询" tabindex="-1"><a class="header-anchor" href="#标量子查询" aria-hidden="true">#</a> 标量子查询</h4><p>子查询返回的结果是单个值（数字、字符串、日期等）, 最简单的形式，这种子查询成为标量子查询</p><p>常用的操作符：<code>= , &lt;&gt; , &gt; , &gt;= , &lt; , &lt;=</code></p><h4 id="列子查询" tabindex="-1"><a class="header-anchor" href="#列子查询" aria-hidden="true">#</a> 列子查询</h4><p>子查询返回的结果是一列（可以是多行），这种子查询称为列子查询</p><p>常见的操作符：<code>in , not in , any , some , all</code></p><table><thead><tr><th>操作符</th><th>描述</th></tr></thead><tbody><tr><td>in</td><td>在指定的集合范围之内，多选一</td></tr><tr><td>not in</td><td>不在指定的集合范围之内</td></tr><tr><td>any</td><td>子查询返回列表中，有任意一个满足即可</td></tr><tr><td>some</td><td>与 any 等同，使用 some 的地方都可以使用 any</td></tr><tr><td>all</td><td>子查询返回列表的所有值都必须满足</td></tr></tbody></table><br>`,38),l=s(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> salary <span class="token operator">&gt;</span> <span class="token keyword">some</span> <span class="token punctuation">(</span><span class="token keyword">select</span> salary <span class="token keyword">from</span> emp <span class="token keyword">where</span> dept_id  <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">select</span> id <span class="token keyword">from</span> dept <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;研发部&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h4 id="行子查询" tabindex="-1"><a class="header-anchor" href="#行子查询" aria-hidden="true">#</a> 行子查询</h4><p>返回的结果是一行（可以是多列），这种子查询称为行子查询</p><br>`,5),c=s(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> <span class="token punctuation">(</span>salary<span class="token punctuation">,</span> managerid<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">select</span> salary<span class="token punctuation">,</span> managerid <span class="token keyword">from</span> emp <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h4 id="多表查询-1" tabindex="-1"><a class="header-anchor" href="#多表查询-1" aria-hidden="true">#</a> 多表查询</h4><p>即将子查询的结果表作为表，进行进一步的查询</p><br>`,5),i=s(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> <span class="token punctuation">(</span>job<span class="token punctuation">,</span> salary<span class="token punctuation">)</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token keyword">select</span> job<span class="token punctuation">,</span> salary <span class="token keyword">from</span> emp <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">or</span> name <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">select</span> e<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> entrydate <span class="token operator">&gt;</span> <span class="token string">&#39;2006-01-01&#39;</span><span class="token punctuation">)</span> e <span class="token keyword">left</span> <span class="token keyword">join</span> dept d <span class="token keyword">on</span> e<span class="token punctuation">.</span>dept_id <span class="token operator">=</span> d<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(d,u){return e(),t("div",null,[o,n(" 例： "),l,n(" 例： "),c,n(" 例： "),i])}const h=a(p,[["render",r],["__file","08-多表查询.html.vue"]]);export{h as default};
