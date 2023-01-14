import{_ as a,p as e,q as n,a1 as s}from"./framework-7db056f4.js";const o={},t=s(`<h1 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h1><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p>创建项目<code>box-app</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>create<span class="token operator">-</span>react<span class="token operator">-</span>app box<span class="token operator">-</span>app
cd box<span class="token operator">-</span>app
npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装<code>bootstrap</code>库：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i bootstrap
bootstrap 的引入方式：

<span class="token keyword">import</span> <span class="token string">&#39;bootstrap/dist/css/bootstrap.css&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-component" tabindex="-1"><a class="header-anchor" href="#创建-component" aria-hidden="true">#</a> 创建 Component</h2><h2 id="创建按钮" tabindex="-1"><a class="header-anchor" href="#创建按钮" aria-hidden="true">#</a> 创建按钮</h2><p>当子节点数量大于 1 时，可以用<code>&lt;div&gt;</code>或<code>&lt;React.Fragment&gt;</code>将其括起来。</p><h2 id="内嵌表达式" tabindex="-1"><a class="header-anchor" href="#内嵌表达式" aria-hidden="true">#</a> 内嵌表达式</h2><p>JSX 中使用<code>{}</code>嵌入表达式。</p><h2 id="设置属性" tabindex="-1"><a class="header-anchor" href="#设置属性" aria-hidden="true">#</a> 设置属性</h2><ul><li><code>class -&gt; className</code></li><li>CSS 属性：<code>background-color -&gt; backgroundColor</code>，其它属性类似</li></ul><h2 id="数据驱动改变-style" tabindex="-1"><a class="header-anchor" href="#数据驱动改变-style" aria-hidden="true">#</a> 数据驱动改变 Style</h2><h2 id="渲染列表" tabindex="-1"><a class="header-anchor" href="#渲染列表" aria-hidden="true">#</a> 渲染列表</h2><ul><li>使用 map 函数</li><li>每个元素需要具有唯一的<code>key</code>属性，用来帮助 React 快速找到被修改的 DOM 元素。</li></ul><h2 id="conditional-rendering" tabindex="-1"><a class="header-anchor" href="#conditional-rendering" aria-hidden="true">#</a> Conditional Rendering</h2><p>利用逻辑表达式的短路原则。</p><ul><li>与表达式中 <code>expr1 &amp;&amp; expr2</code>，当<code>expr1</code>为假时返回<code>expr1</code>的值，否则返回<code>expr2</code>的值</li><li>或表达式中 <code>expr1 || expr2</code>，当<code>expr1</code>为真时返回<code>expr1</code>的值，否则返回<code>expr2</code>的值</li></ul><h2 id="绑定事件" tabindex="-1"><a class="header-anchor" href="#绑定事件" aria-hidden="true">#</a> 绑定事件</h2><p>注意妥善处理好绑定事件函数的<code>this</code></p><h2 id="修改-state" tabindex="-1"><a class="header-anchor" href="#修改-state" aria-hidden="true">#</a> 修改 state</h2><p>需要使用<code>this.setState()</code>函数 每次调用<code>this.setState()</code>函数后，会重新调用<code>this.render()</code>函数，用来修改虚拟 DOM 树。React 只会修改不同步的实际 DOM 树节点。</p><h2 id="给事件函数添加参数" tabindex="-1"><a class="header-anchor" href="#给事件函数添加参数" aria-hidden="true">#</a> 给事件函数添加参数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">xxx</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25),d=[t];function c(r,i){return e(),n("div",null,d)}const l=a(o,[["render",c],["__file","03-Components.html.vue"]]);export{l as default};