import{_ as n,p as s,q as a,a1 as t}from"./framework-7db056f4.js";const e={},p=t(`<h1 id="mybatis-获取参数值的两种方式-重点" tabindex="-1"><a class="header-anchor" href="#mybatis-获取参数值的两种方式-重点" aria-hidden="true">#</a> MyBatis 获取参数值的两种方式（重点）</h1><ul><li>MyBatis 获取参数值的两种方式：<code>\${}</code>和<code>#{}</code></li><li><code>\${}</code>的本质就是字符串拼接，<code>#{}</code>的本质就是占位符赋值</li><li><code>\${}</code>使用字符串拼接的方式拼接 sql，若为字符串类型或日期类型的字段进行赋值时，需要手动加单引号；但是<code>#{}</code>使用占位符赋值的方式拼接 sql，此时为字符串类型或日期类型的字段进行赋值时，可以自动添加单引号</li></ul><h2 id="单个字面量类型的参数" tabindex="-1"><a class="header-anchor" href="#单个字面量类型的参数" aria-hidden="true">#</a> 单个字面量类型的参数</h2><ul><li>若 mapper 接口中的方法参数为单个的字面量类型，此时可以使用、<code>\${}</code>和<code>#{}</code>以任意的名称（最好见名识意）获取参数的值，注意<code>\${}</code>需要手动加单引号</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--User getUserByUsername(String username);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserByUsername<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_user where username = #{username}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--User getUserByUsername(String username);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserByUsername<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_user where username = &#39;\${username}&#39;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多个字面量类型的参数" tabindex="-1"><a class="header-anchor" href="#多个字面量类型的参数" aria-hidden="true">#</a> 多个字面量类型的参数</h2><ul><li><p>若 mapper 接口中的方法参数为多个时，此时 MyBatis 会自动将这些参数放在一个 map 集合中</p><ol><li>以 <code>arg0,arg1…</code>为键，以参数为值；</li><li>以 <code>param1,param2…</code>为键，以参数为值；</li></ol></li><li><p>因此只需要通过、<code>\${}</code>和<code>#{}</code>访问 map 集合的键就可以获取相对应的值，注意<code>\${}</code>需要手动加单引号。</p></li><li><p>使用 arg 或者 param 都行，要注意的是，arg 是从 arg0 开始的，param 是从 param1 开始的</p></li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--User checkLogin(String username,String password);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkLogin<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_user where username = #{arg0} and password = #{arg1}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--User checkLogin(String username,String password);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkLogin<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_user where username = &#39;\${param1}&#39; and password = &#39;\${param2}&#39;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map-集合类型的参数" tabindex="-1"><a class="header-anchor" href="#map-集合类型的参数" aria-hidden="true">#</a> map 集合类型的参数</h2><ul><li>若 mapper 接口中的方法需要的参数为多个时，此时可以手动创建 map 集合，将这些数据放在 map 中只需要通过、<code>\${}</code>和<code>#{}</code>访问 map 集合的键就可以获取相对应的值，注意<code>\${}</code>需要手动加单引号</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--User checkLoginByMap(Map&lt;String,Object&gt; map);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkLoginByMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_user where username = #{username} and password = #{password}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkLoginByMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">SqlSessionUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">ParameterMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">ParameterMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;usermane&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">User</span> user <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">checkLoginByMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实体类类型的参数" tabindex="-1"><a class="header-anchor" href="#实体类类型的参数" aria-hidden="true">#</a> 实体类类型的参数</h2><ul><li>若 mapper 接口中的方法参数为实体类对象时此时可以使用、<code>\${}</code>和<code>#{}</code>，通过访问实体类对象中的属性名获取属性值，注意<code>\${}</code>需要手动加单引号</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--int insertUser(User user);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insertUser<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	insert into t_user values(null,#{username},#{password},#{age},#{sex},#{email})
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">SqlSessionUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">ParameterMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">ParameterMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123@321.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	mapper<span class="token punctuation">.</span><span class="token function">insertUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-param-标识参数" tabindex="-1"><a class="header-anchor" href="#使用-param-标识参数" aria-hidden="true">#</a> 使用@Param 标识参数</h2><ul><li><p>可以通过@Param 注解标识 mapper 接口中的方法参数，此时，会将这些参数放在 map 集合中</p><ol><li>以@Param 注解的 value 属性值为键，以参数为值；</li><li>以 param1,param2…为键，以参数为值；</li></ol></li><li><p>只需要通过、{}和#{}访问 map 集合的键就可以获取相对应的值，注意{}需要手动加单引号</p></li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--User CheckLoginByParam(@Param(&quot;username&quot;) String username, @Param(&quot;password&quot;) String password);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CheckLoginByParam<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    select * from t_user where username = #{username} and password = #{password}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkLoginByParam</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">SqlSessionUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">ParameterMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">ParameterMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name"><span class="token namespace">mapper<span class="token punctuation">.</span></span>CheckLoginByParam</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>建议分成两种情况进行处理</p><ol><li>实体类类型的参数</li><li>使用@Param 标识参数</li></ol>`,25),c=[p];function o(l,u){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","06-获取参数值.html.vue"]]);export{r as default};
