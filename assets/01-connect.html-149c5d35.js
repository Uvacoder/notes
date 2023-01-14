import{_ as t,M as o,p as c,q as p,R as n,t as s,N as i,a1 as a}from"./framework-7db056f4.js";const l={},u=n("h1",{id:"database-连接数据库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#database-连接数据库","aria-hidden":"true"},"#"),s(" database/连接数据库")],-1),d=n("p",null,"数据库驱动, 需要加载目标数据库的驱动，驱动里包含着与该数据库交互的逻辑",-1),r={href:"https://github.com/go-sql-driver/mysql",target:"_blank",rel:"noopener noreferrer"},k=a("<li><p>使用 <code>sql.Open()</code></p><ul><li>数据库驱动的名称</li><li>数据源连接</li><li>得到一个指向 <code>sql.DB</code> struct 的指针</li></ul></li><li><p>使用<code>sql.DB</code> 来操作数据库，它代表了 0 个或多个底层连接的 池，这些连接由 sql 包维护，sql 包会自动创建和释放这些连接</p><ul><li>它对于多个 goroutine 并发的使用是安全的</li></ul></li>",2),v=a(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;database/sql&quot;</span>

	<span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// DSN:Data Source Name</span>
	dsn <span class="token operator">:=</span> <span class="token string">&quot;user:password@tcp(127.0.0.1:3306)/dbname&quot;</span>
	db<span class="token punctuation">,</span> err <span class="token operator">:=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> dsn<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> db<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 注意这行代码要写在上面err判断的下面</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="open" tabindex="-1"><a class="header-anchor" href="#open" aria-hidden="true">#</a> Open()</h2><ul><li><code>Open()</code>函数并不会连接数据库, 甚至不会验证其参数，它只是把后续连接到数据库所必需的 <code>struct</code> 给设置好了</li><li>它只是用以处理数据库，而不是实际的连接，而真正的连接是在被需要的时候才进行懒设置的,</li><li><code>sql.DB</code> 不需要进行关闭(也可以关闭)</li><li>这个抽象包含了数据库连接的池，并且会对此进行维护</li><li>在使用<code>sql.DB</code>的时候，可以对它的全局变量进行使用，也可以传递到数据库里</li></ul><h2 id="如何获得驱动" tabindex="-1"><a class="header-anchor" href="#如何获得驱动" aria-hidden="true">#</a> 如何获得驱动</h2><p>正常的做法是使用<code>sql.Register()</code>函数，数据库驱动的名称和一个实现了<code>driver.Driver</code>接口的 struct，来注册数据库的驱动，例：</p><p><code>sql.Register(&quot;mysql&quot;, &amp;drv{})</code></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>我们之所以没有写这条语句，是因为 mysql 的驱动，在这个包被引入的时候进行了自我注册</p></div><h2 id="pingcontext" tabindex="-1"><a class="header-anchor" href="#pingcontext" aria-hidden="true">#</a> PingContext()</h2><p><code>(* DB)func PingContext()</code>函数</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">PingContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">Fataln</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Connected!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>db.PingContext()</code> 函数是用来验证数据库连接是否仍然有效，如有必要则建立一个连接</p><ul><li>需要一个 <code>Context</code> 类型参数，这种类型可以携带截止时间、取消信号和其他其他请求范围的值，并且可以横跨 API 边界和进程</li><li>上例创建 context 使用的是 context.Background() 函数。该函数返回一个非 nil 的空 Context，它不会被取消，它没有值，没有截止时间</li><li>它通常用在 main 函数、初始化或测试中，作为请求的顶级 Context</li></ul><h3 id="ping" tabindex="-1"><a class="header-anchor" href="#ping" aria-hidden="true">#</a> Ping()</h3><p>也可以直接使用<code>Ping()</code>验证,没有特殊要求的话，推荐使用这个 ☺️</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">Fataln</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
lgo<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Connected!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setmaxopenconns" tabindex="-1"><a class="header-anchor" href="#setmaxopenconns" aria-hidden="true">#</a> SetMaxOpenConns()</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>db <span class="token operator">*</span>DB<span class="token punctuation">)</span> <span class="token function">SetMaxOpenConns</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>SetMaxOpenConns</code>设置与数据库建立连接的最大数目。 如果 n 大于 0 且小于最大闲置连接数，会将最大闲置连接数减小到匹配最大开启连接数的限制。 如果 n&lt;=0，不会限制最大开启连接数，默认为 0（无限制）。</p><h2 id="setmaxidleconns" tabindex="-1"><a class="header-anchor" href="#setmaxidleconns" aria-hidden="true">#</a> SetMaxIdleConns()</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>db <span class="token operator">*</span>DB<span class="token punctuation">)</span> <span class="token function">SetMaxIdleConns</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>SetMaxIdleConns</code>设置连接池中的最大闲置连接数。 如果 n 大于最大开启连接数，则新的最大闲置连接数会减小到匹配最大开启连接数的限制。 如果 n&lt;=0，不会保留闲置连接。</p>`,21);function m(b,g){const e=o("ExternalLinkIcon");return c(),p("div",null,[u,n("ol",null,[n("li",null,[d,n("ul",null,[n("li",null,[s("mysql 的话，推荐"),n("a",r,[s("这个"),i(e)])])])]),k]),v])}const x=t(l,[["render",m],["__file","01-connect.html.vue"]]);export{x as default};