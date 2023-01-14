import{_ as n,p as s,q as a,a1 as t}from"./framework-7db056f4.js";const o={},p=t(`<h1 id="表单数据解析和绑定" tabindex="-1"><a class="header-anchor" href="#表单数据解析和绑定" aria-hidden="true">#</a> 表单数据解析和绑定</h1><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;ie=edge&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Document<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">&quot;http://localhost:8000/loginForm&quot;</span> method<span class="token operator">=</span><span class="token string">&quot;post&quot;</span> enctype<span class="token operator">=</span><span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token operator">&gt;</span>
        用户名<span class="token operator">&lt;</span>input <span class="token keyword">type</span><span class="token operator">=</span><span class="token string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;username&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
        密码<span class="token operator">&lt;</span>input <span class="token keyword">type</span><span class="token operator">=</span><span class="token string">&quot;password&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;password&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>input <span class="token keyword">type</span><span class="token operator">=</span><span class="token string">&quot;submit&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;提交&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;net/http&quot;</span>

    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 定义接收数据的结构体</span>
<span class="token keyword">type</span> Login <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// binding:&quot;required&quot;修饰的字段，若接收为空值，则报错，是必须字段</span>
    User    <span class="token builtin">string</span> <span class="token string">\`form:&quot;username&quot; json:&quot;user&quot; uri:&quot;user&quot; xml:&quot;user&quot; binding:&quot;required&quot;\`</span>
    Pssword <span class="token builtin">string</span> <span class="token string">\`form:&quot;password&quot; json:&quot;password&quot; uri:&quot;password&quot; xml:&quot;password&quot; binding:&quot;required&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.创建路由</span>
    <span class="token comment">// 默认使用了 2 个中间件 Logger(), Recovery()</span>
    r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// JSON 绑定</span>
    r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/loginForm&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 声明接收的变量</span>
        <span class="token keyword">var</span> form Login
        <span class="token comment">// Bind()默认解析并绑定 form 格式</span>
        <span class="token comment">// 根据请求头中 content-type 自动推断</span>
        <span class="token keyword">if</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Bind</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>form<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">:</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 判断用户名密码是否正确</span>
        <span class="token keyword">if</span> form<span class="token punctuation">.</span>User <span class="token operator">!=</span> <span class="token string">&quot;root&quot;</span> <span class="token operator">||</span> form<span class="token punctuation">.</span>Pssword <span class="token operator">!=</span> <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;304&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[p];function c(l,i){return s(),a("div",null,e)}const u=n(o,[["render",c],["__file","12-表单.html.vue"]]);export{u as default};
