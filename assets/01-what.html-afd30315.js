import{_ as e,M as t,p,q as i,R as n,t as s,N as c,a1 as o}from"./framework-7db056f4.js";const l={},r=n("h1",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),d=n("h2",{id:"什么是-typescript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是-typescript","aria-hidden":"true"},"#"),s(" 什么是 TypeScript")],-1),u=n("blockquote",null,[n("p",null,"Typed JavaScript at Any Scale. 添加了类型系统的 JavaScript，适用于任何规模的项目。")],-1),v={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},h=o(`<p>它强调了 TypeScript 的两个最重要的特性——类型系统、适用于任何规模。</p><h3 id="typescript-的特性" tabindex="-1"><a class="header-anchor" href="#typescript-的特性" aria-hidden="true">#</a> TypeScript 的特性</h3><h4 id="类型系统" tabindex="-1"><a class="header-anchor" href="#类型系统" aria-hidden="true">#</a> 类型系统</h4><p>我们知道，JavaScript 是一门非常灵活的编程语言：</p><ul><li>它没有类型约束，一个变量可能初始化时是字符串，过一会儿又被赋值为数字。</li><li>由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。</li><li>基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改。</li><li>函数是 JavaScript 中的一等公民，可以赋值给变量，也可以当作参数或返回值。</li></ul><p>这种灵活性就像一把双刃剑，一方面使得 JavaScript 蓬勃发展，无所不能，从 2013 年开始就一直蝉联最普遍使用的编程语言排行榜冠军；另一方面也使得它的代码质量参差不齐，维护成本高，运行时错误多。</p><p>TypeScript 的类型系统，在很大程度上弥补了 JavaScript 的缺点。</p><h4 id="静态类型" tabindex="-1"><a class="header-anchor" href="#静态类型" aria-hidden="true">#</a> 静态类型</h4><p>类型系统按照「类型检查的时机」来分类，可以分为动态类型和静态类型。</p><p>动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误。JavaScript 是一门解释型语言，没有编译阶段，所以它是动态类型，以下这段代码在运行时才会报错：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught TypeError: foo.split is not a function</span>
<span class="token comment">// 运行时会报错（foo.split 不是一个函数），造成线上 bug</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态类型是指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。TypeScript 在运行前需要先编译为 JavaScript，而在编译阶段就会进行类型检查，所以 TypeScript 是静态类型，这段 TypeScript 代码在编译阶段就会报错了：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Property &#39;split&#39; does not exist on type &#39;number&#39;.</span>
<span class="token comment">// 编译时会报错（数字没有 split 方法），无法通过编译</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ts 代码与 js 代码看上去没什么区别， 大部分的 js 代码只需要经过少量的修改就能变成 ts, 这都得益于 ts 强大的类型推论，即使不去手动声明 <code>foo</code> 类型，也能在变量初始化时自动推论出其 <code>number</code> 类型</p><h4 id="弱类型" tabindex="-1"><a class="header-anchor" href="#弱类型" aria-hidden="true">#</a> 弱类型</h4><p>类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 打印出字符串 &#39;11&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以它们都是弱类型。</p><p>作为对比，Python 是强类型，以下代码会在运行时报错：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># TypeError: unsupported operand type(s) for +: &#39;int&#39; and &#39;str&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="适用于任何规模" tabindex="-1"><a class="header-anchor" href="#适用于任何规模" aria-hidden="true">#</a> 适用于任何规模</h4><p>TypeScript 非常适用于大型项目——这是显而易见的，类型系统可以为大型项目带来更高的可维护性，以及更少的 bug。</p><p>由于类型推论大部分类型都不需要手动声明, 相反 TypeScript 增强了编辑器（IDE）的功能，包括代码补全、接口提示、跳转到定义、代码重构等，这在很大程度上提高了开发效率，因此也十分合适中小型项目的开发</p><h2 id="安装-typescript" tabindex="-1"><a class="header-anchor" href="#安装-typescript" aria-hidden="true">#</a> 安装 TypeScript</h2><p>命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令会在全局环境下安装 tsc 命令，安装完成之后，我们就可以在任何地方执行 tsc 命令了。</p><p>编译一个 TypeScript 文件很简单：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc hello.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们约定使用 TypeScript 编写的文件以 .ts 为后缀，用 TypeScript 编写 React 时，以 .tsx 为后缀。</p><h3 id="deno" tabindex="-1"><a class="header-anchor" href="#deno" aria-hidden="true">#</a> Deno</h3><p>跟 Node.js 一样，Deno 也是一个服务器运行时，但是支持多种语言，可以直接运行 JavaScript、TypeScript 和 WebAssembly 程序。</p><p>它内置了 V8 引擎，用来解释 JavaScript。同时，也内置了 tsc 引擎，解释 TypeScript。它使用 Rust 语言开发，由于 Rust 原生支持 WebAssembly，所以它也能直接运行 WebAssembly。它的异步操作不使用 libuv 这个库，而是使用 Rust 语言的 Tokio 库，来实现事件循环（event loop）。</p><p>Deno 还有许多许多优秀的地方，这里不一一介绍了</p><p>因此，如果只是学习 TypeScript 的不考虑项目依赖啥的话，也可以顺便试试 deno 😛</p><blockquote><p>之后会时不时用 deno 💩</p></blockquote><h2 id="hello-typescript" tabindex="-1"><a class="header-anchor" href="#hello-typescript" aria-hidden="true">#</a> Hello TypeScript</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// hello.ts</span>
<span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;hello &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> me<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;mosquito&quot;</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ tsc hello.ts
<span class="token comment"># 执行这条会得到一个编译好的 hello.js</span>
$ <span class="token function">node</span> hello.js
<span class="token comment"># 执行</span>

$ deno run hello.ts
<span class="token comment"># deno支持直接运行ts 得到的结果就是 hello mosquito</span>
<span class="token comment"># 如果要编译成js 执行$ deno bundle hello.ts hello.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39);function m(k,b){const a=t("ExternalLinkIcon");return p(),i("div",null,[r,d,u,n("p",null,[s("以上描述是"),n("a",v,[s("官网"),c(a)]),s("对于 TypeScript 的定义。")]),h])}const g=e(l,[["render",m],["__file","01-what.html.vue"]]);export{g as default};