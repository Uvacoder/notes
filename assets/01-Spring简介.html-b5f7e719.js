import{_ as s,p as a,q as t,a1 as n,R as p}from"./framework-7db056f4.js";const e={},o=n('<h1 id="spring-framework" tabindex="-1"><a class="header-anchor" href="#spring-framework" aria-hidden="true">#</a> Spring-Framework</h1><p>这里主要以 Spring 5 为例</p><h2 id="spring-是什么" tabindex="-1"><a class="header-anchor" href="#spring-是什么" aria-hidden="true">#</a> Spring 是什么</h2><ol><li>Spring 是一个轻量级的开源 JavaEE 框架</li><li>Spring 可以解决企业应用开发的复杂性</li><li>Spring 有两个核心部分：IOC 和 Aop <ul><li>IOC: 控制反转，把创建对象过程交给 spring 进行</li><li>Aop: 面向切面，不修改源代码进行功能增强</li></ul></li></ol><h2 id="spring-特点" tabindex="-1"><a class="header-anchor" href="#spring-特点" aria-hidden="true">#</a> Spring 特点</h2><ol><li>方便解耦，简化开发</li><li>Aop 编程的支持</li><li>方便进行事务操作</li><li>方便程序测试</li><li>方便与其他框架整合</li><li>降低 API 开发难度</li><li>源码的设计显示出 Java 造诣高深的能力</li></ol><h2 id="入门案例" tabindex="-1"><a class="header-anchor" href="#入门案例" aria-hidden="true">#</a> 入门案例</h2><ol><li><p>下载 Spring5</p><ul><li>https://repo.spring.io/artifactory/release/org/springframework/spring/</li></ul></li><li><p>创建工程</p></li><li><p>导入 jar 包</p><ul><li>Jar 包的结构：</li></ul></li></ol>',8),c=p("iframe",{frameborder:"0",style:{width:"100%",height:"433px"},src:"https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=SpringJarSort.drawio#Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fmosqu1t0%2FSources%2Fmaster%2Fmap%2FSpringJarSort.drawio"},null,-1),l=n(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>一般地只需要导入基础的 Beans, Core, Context, Expression 等包就足够了</p></div><p>::: warn 如果报错，可能是没有导入日志包<code>commons-logging-xx.jar</code>导致的 :::</p><ol start="4"><li><p>创建普通类，在这个类创建普通方法</p></li><li><p>创建 Spring 配置文件，在配置文件配置创建的对象</p></li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.demo.test.testm.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: warn 在新版本的 spring 中，配置文件应该放在<code>src/main/resources</code>下，否则找不到 :::</p><ol start="6"><li>代码编写</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test<span class="token punctuation">.</span>testm<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">ClassPathXmlApplicationContext</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestUser</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;bean1.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>代码运行成功</li></ol>`,8),i=[o,c,l];function u(r,k){return a(),t("div",null,i)}const m=s(e,[["render",u],["__file","01-Spring简介.html.vue"]]);export{m as default};
