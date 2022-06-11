import{_ as n,o as s,c as a,e as t}from"./app.e2a3b496.js";const e={},i=t(`<h1 id="\u5251\u6307offer-\u4E0A" tabindex="-1"><a class="header-anchor" href="#\u5251\u6307offer-\u4E0A" aria-hidden="true">#</a> \u5251\u6307Offer(\u4E0A)</h1><p>\u6700\u8FD1\u9762\u8BD5\uFF0C\u9047\u5230\u4E00\u4E9B\u7B14\u8BD5\u9898\uFF0C\u5199\u4E0D\u4E0A\u6765\uFF0C\u5185\u5FC3\u662F\u5D29\u6E83\u7684\uFF0C\u8BE5\u597D\u597D\u590D\u4E60\u4E0B\u4E86\uFF0C\u6240\u4EE5\u51B3\u5B9A\u4ED4\u7EC6\u505A\u4E00\u904D\uFF0C\u968F\u4FBF\u4E5F\u6574\u7406\u4E0B\uFF0C\u65B9\u4FBF\u5927\u5BB6\u5B66\u4E60\u3002</p><ol><li><p>\u6211\u6CA1\u627E\u5230\u7B2C\u4E00\u9898\u662F\u4EC0\u4E48- -!,\u8C01\u77E5\u9053\u7684\u7ED9\u8865\u5145\u4E0B\u5427</p></li><li><p>\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F<br> \u5355\u4F8B\u7684\u5B9E\u73B0\u5206\u4E3A\u597D\u51E0\u79CD:</p><ul><li>\u997F\u6C49\u5F0F</li><li>\u61D2\u6C49\u5F0F</li><li>\u679A\u4E3E</li></ul><p>\u5177\u4F53\u5B9E\u73B0:</p><ul><li>\u997F\u6C49\u5F0F<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> SINGLETON <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> SINGLETON<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u61D2\u6C49\u5F0F<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> singleton <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u540C\u6B65\u4F1A\u5BFC\u81F4\u6548\u7387\u4F4E\uFF0C\u8FD9\u91CC\u91C7\u7528\u53CC\u91CD\u5224\u65AD\u7684\u65B9\u5F0F\u6765\u63D0\u9AD8\u6548\u7387</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> singleton<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u679A\u4E3E<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
	INSTANCE<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>\u6211\u8FD9\u91CC\u5199\u4E00\u79CD\u81EA\u6211\u611F\u89C9\u662F\u5355\u4F8B\u6700\u5B8C\u7F8E\u7684\u5B9E\u73B0\u65B9\u5F0F:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
	<span class="token comment">// Private constructor prevents instantiation from other classes</span>
	<span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	* SingletonHolder is loaded on the first execution of Singleton.getInstance() 
	* or the first access to SingletonHolder.INSTANCE, not before.
	*/</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonHolder</span> <span class="token punctuation">{</span> 
			<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> INSTANCE <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token class-name">SingletonHolder</span><span class="token punctuation">.</span>INSTANCE<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E8C\u7EF4\u6570\u7EC4\u4E2D\u7684\u67E5\u627E<br> \u9898\u76EE\u63CF\u8FF0\uFF1A\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u6BCF\u4E00\u884C\u4ECE\u5DE6\u5230\u53F3\u9012\u589E\uFF0C\u6BCF\u4E00\u5217\u4ECE\u4E0A\u5230\u4E0B\u9012\u589E\uFF0E\u8F93\u5165\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4\u548C\u4E00\u4E2A\u6574\u6570\uFF0C\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u542B\u6709\u6574\u6570\u3002</p><p>\u5206\u6790:<br> 1 6 11 5 9 15 7 13 20</p><p>\u5047\u8BBE\u6211\u4EEC\u8981\u627E7\uFF0C\u90A3\u600E\u4E48\u627E\u5462\uFF1F<br> \u6211\u4EEC\u5148\u4ECE\u7B2C\u4E00\u884C\u627E\uFF0C\u4ECE\u540E\u5F80\u524D\u627E\uFF0C\u56E0\u4E3A\u4ED6\u662F\u9012\u589E\u7684\uFF0C\u5148\u662F11\uFF0C\u8FD9\u91CC11&gt;7\u6240\u4EE5\u80AF\u5B9A\u4E0D\u662F\u7B2C\u4E09\u5217\u7684\u3002\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u627E\u7B2C\u4E8C\u5217\uFF0C<br> \u8FD9\u4E2A\u503C\u662F6,6 &lt; 7,\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u4ECE\u7B2C\u4E8C\u5217\u5F80\u4E0B\u627E\uFF0C\u8FD9\u4E2A\u6570\u53EF\u80FD\u4F1A\u518D\u7B2C\u4E8C\u5217\u6216\u8005\u7B2C\u4E00\u5217\u3002\u628A\u884C\u6570\u52A01\uFF0C\u6765\u5230\u7B2C\u4E8C\u884C\u7B2C\u4E8C\u5217\u76849<br> \u8FD9\u65F6\u5019\u4E00\u5224\u65AD9 &gt; 7\uFF0C\u6240\u4EE5\u4E0D\u53EF\u80FD\u662F\u7B2C\u4E8C\u5217\u4E86\uFF0C\u8FD9\u65F6\u5019\u628A\u5217\u6570\u518D\u524D\u79FB\uFF0C\u6765\u5230\u7B2C\u4E00\u5217\uFF0C\u521A\u624D\u662F\u7B2C\u4E8C\u884C\uFF0C\u6240\u4EE5\u6211\u4EEC\u53D6\u7B2C\u4E00\u5217\u7B2C\u4E8C\u884C<br> \u7684\u6570\uFF0C\u4E5F\u5C31\u662F5,5 &lt; 7\uFF0C\u6240\u4EE5\u8FD8\u8981\u7EE7\u7EED\u5F80\u540E\u627E\uFF0C\u5C31\u662F\u628A\u884C\u6570\u52A01\uFF0C\u5C31\u6765\u5230\u4E86\u7B2C\u4E09\u884C\u7B2C\u4E00\u5217\uFF0C\u4E5F\u5C31\u662F7\uFF0C\u4E00\u5224\u65AD\u5C31\u662F\u4ED6\u4E86\u3002<br> \u6574\u4F53\u601D\u8DEF\u5C31\u662F\u4ECE\u53F3\u4E0A\u89D2\u5F00\u59CB\uFF0C\u9010\u6E10\u524D\u79FB\u5217\u6570\u6216\u8005\u589E\u52A0\u884C\u6570\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>array <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// \u4ECE\u7B2C\u4E00\u884C\u6700\u540E\u4E00\u5217\u7684\u6570\u5F00\u59CB</span>
	<span class="token keyword">int</span> column <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>row <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> column <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span> <span class="token operator">==</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span> <span class="token operator">&gt;</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u5982\u679C\u8FD9\u4E2A\u6570\u6BD4\u8981\u627E\u7684\u6570\u5927\uFF0C\u90A3\u80AF\u5B9A\u4E0D\u662F\u8FD9\u4E00\u5217\u4E86\uFF0C\u53EA\u80FD\u662F\u524D\u4E00\u5217</span>
			column<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u5C0F\u7684\u8BDD\uFF0C\u90A3\u80AF\u5B9A\u5728\u8BE5\u6570\u7684\u4E0B\u9762\uFF0C\u5C31\u8981\u589E\u5927\u884C\u6570</span>
			row<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u66FF\u6362\u7A7A\u683C<br> \u8BF7\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u628A\u5B57\u7B26\u4E32\u4E2D\u7684\u6BCF\u4E2A\u7A7A\u683C\u66FF\u6362\u6210<code>%20</code>\u3002<br> \u601D\u8DEF: \u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5224\u65AD\u6BCF\u4E2A\u5B57\u7B26\u662F\u5426\u4E3A\u7A7A\u7740\uFF0C\u4F46\u4E5F\u8981\u6CE8\u610F\u4F7F\u7528<code>StringBuilder</code>\u4F1A\u6BD4<code>StringBuffer</code>\u6548\u7387\u7A0D\u9AD8\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">replaceBlank</span><span class="token punctuation">(</span><span class="token class-name">String</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>input <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>	
	<span class="token class-name">StringBuilder</span>  sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> input<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868<br> \u8F93\u5165\u4E00\u4E2A\u94FE\u8868\u7684\u5934\u7ED3\u70B9\uFF0C\u4ECE\u5C3E\u5230\u5934\u53CD\u8FC7\u6765\u6253\u5370\u51FA\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u3002 \u601D\u8DEF: \u6211\u4EEC\u53EF\u4EE5\u4ECE\u5934\u5F00\u59CB\u904D\u5386\uFF0C\u4F46\u662F\u8981\u8BA9\u5148\u904D\u5386\u7684\u6700\u540E\u6253\u5370\uFF0C\u8FD9\u5C31\u662F\u4E00\u4E2A\u5403\u8FDB\u53BB\u3001\u5410\u51FA\u6765\u7684\u65B9\u5F0F\uFF0C\u6700\u9002\u5408\u7684\u5C31\u662F\u6808.</p><ul><li>\u904D\u5386\u7684\u65B9\u5F0F</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListNodeTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ListNode</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ListNode</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ListNode</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		node1<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		node2<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
		node3<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
		node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2<span class="token punctuation">;</span>
		node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node3<span class="token punctuation">;</span>

		<span class="token class-name">ListNodeTest</span><span class="token punctuation">.</span><span class="token function">reversePrint</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">reversePrint</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>headNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u904D\u5386\uFF0C\u7136\u540E\u7528\u6808\u6765\u4FDD\u5B58</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>headNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
			headNode <span class="token operator">=</span> headNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span>

	<span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>
	<span class="token keyword">int</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9012\u5F52</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printListReverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>headNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>headNode<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">printListReverse</span><span class="token punctuation">(</span>headNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>headNode<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u91CD\u5EFA\u4E8C\u53C9\u6811 <br> \u8F93\u5165\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386\u548C\u4E2D\u5E8F\u904D\u5386\u7684\u7ED3\u679C\uFF0C\u91CD\u5EFA\u51FA\u8BE5\u4E8C\u53C9\u6811\u3002\u5047\u8BBE\u524D<br> \u5E8F\u904D\u5386\u548C\u4E2D\u5E8F\u904D\u5386\u7ED3\u679C\u4E2D\u90FD\u4E0D\u5305\u542B\u91CD\u590D\u7684\u6570\u5B57\uFF0C\u4F8B\u5982\u8F93\u5165\u7684\u524D\u5E8F\u904D\u5386\u5E8F\u5217<br> {1,2,4,7,3,5,6,8}\u548C\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217{4,7,2,1,5,3,8,6}\u91CD\u5EFA\u51FA\u5982\u56FE\u6240\u793A\u7684\u4E8C\u53C9\u6811\u3002</p><p><img src="https://raw.githubusercontent.com/CharonChui/Pictures/master/binary_offer.png" alt="image"> <br> \u601D\u8DEF: \u524D\u5E8F\u904D\u5386\u5E8F\u5217\u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u6570\u5B57\u603B\u662F\u6811\u7684\u6839\u8282\u70B9\u7684\u503C\u3002<br> \u4E2D\u5E8F\u904D\u5386\u6839\u8282\u70B9\u5728\u5E8F\u5217\u7684\u4E2D\u95F4\uFF0C\u5DE6\u8FB9\u662F\u5DE6\u5B50\u6811\uFF0C\u53F3\u8FB9\u662F\u53F3\u5B50\u6811\u3002<br> \u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u524D\u5E8F\u904D\u5386\u7684\u7B2C\u4E00\u4E2A\u503C\u53BB\u4E2D\u65EC\u904D\u5386\u6570\u7EC4\u4E2D\u67E5\u627E\uFF0C\u5C31\u80FD\u627E\u51FA\u6765\u4E2D\u5E8F\u7684\u5206\u5272\u70B9\u662F\u8C01\u3002<br> \u8FD9\u6837\u5728\u4ED6\u5DE6\u8FB9\u7684\u5C31\u90FD\u662F\u5DE6\u5B50\u6811\uFF0C\u53F3\u8FB9\u662F\u53F3\u5B50\u6811\u3002\u8FD9\u6837\u4E5F\u5C31\u80FD\u77E5\u9053\u5DE6\u5B50\u6811\u7684\u4E2A\u6570\uFF0C\u518D\u7528\u8FD9\u4E2A\u6570\u91CF\u53BB\u524D\u5B50\u6811\u4E2D\u53BB\u524D\u51E0\u4E2A\u6570\u3002<br> \u5C31\u8FD9\u6837\u518D\u9012\u5F52\u4E0B\u53BB\u6392\u5217\u4E8C\u7EA7\u5DE6\u5B50\u6811\u7684\u6839\u8282\u70B9\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BinaryTree</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> preorder <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token class-name">BinaryTreeNode</span> root <span class="token operator">=</span> <span class="token function">constructCore</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> inorder<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BinaryTreeNode</span> <span class="token function">constructCore</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> preorder<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">)</span>
			<span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>preorder <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> inorder <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>preorder<span class="token punctuation">.</span>length <span class="token operator">!=</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;error params&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">BinaryTreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BinaryTreeNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				root<span class="token punctuation">.</span>value <span class="token operator">=</span> inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token comment">// \u9012\u5F52\u8BA9\u518D\u53BB\u6784\u5EFA\u5DE6\u5B50\u6811\u7684\u4E0B\u4E00\u4E2A\u6839\u8282\u70B9</span>
				root<span class="token punctuation">.</span>leftNode <span class="token operator">=</span> <span class="token function">constructCore</span><span class="token punctuation">(</span>
						<span class="token comment">// \u524D\u5E8F\u904D\u5386\u4ECE\u7B2C\u4E8C\u4E2A\u5F00\u59CB\u540E\u7684i\u4E2A\u90FD\u662F\u5DE6\u5B50\u6811\u7684</span>
						<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						<span class="token comment">// \u4E2D\u5E8F\u904D\u5386\u6700\u8FB9\u8FB9\u8FD9i\u4E2A\u4E5F\u662F\u5DE6\u5B50\u6811</span>
						<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				root<span class="token punctuation">.</span>rightNode <span class="token operator">=</span> <span class="token function">constructCore</span><span class="token punctuation">(</span>
						<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> preorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">,</span>
						<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// \u5C31\u8FD9\u6837\u5FAA\u73AF\u9012\u5F52\u4E0B\u53BB\uFF0C\u5C31OK\u4E86\u3002</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> root<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BinaryTreeNode</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token class-name">BinaryTreeNode</span> leftNode<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token class-name">BinaryTreeNode</span> rightNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217<br> \u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217\uFF0C\u5B9E\u73B0\u5BF9\u4E86\u7684\u4E24\u4E2A\u51FD\u6570<code>appendTail</code>\u548C<br><code>deleteHead</code>\uFF0C\u5206\u522B\u5B8C\u6210\u5728\u961F\u5217\u5C3E\u63D2\u5165\u7ED3\u70B9\u548C\u5728\u961F\u5217\u5934\u90E8\u5220\u9664\u7ED3\u70B9\u7684\u529F\u80FD\u3002<br> \u601D\u8DEF\uFF1A \u6808\u662F\u5565\uFF1F\u6808\u662F\u5148\u8FDB\u540E\u51FA\uFF0C\u56E0\u4E3A\u6808\u662F\u4E00\u4E2A\u51FA\u53E3\u554A\uFF0C\u5148\u8FDB\u5165\u7684\u88AB\u538B\u5728\u6700\u4E0B\u9762\u4E86\uFF0C\u51FA\u8981\u4ECE\u4E0A\u9762\u5F00\u59CB\u51FA\uFF0C\u4E5F\u5C31\u662F\u5403\u4E86\u5410\u51FA\u6765\u3002<br> \u961F\u5217\u662F\u5565\uFF1F\u4E24\u5934\u7684\uFF0C\u5C31\u60F3\u7BA1\u9053\u4E00\u6837\uFF0C\u5148\u8FDB\u5148\u51FA\u3002\u4E0D\u96C5\u7684\u8BF4\uFF0C\u5C31\u662F\u5403\u4E86\u62C9\u51FA\u6765\u3002<br> \u961F\u5217\u5C3E\u63D2\u5165\u8282\u70B9\u597D\u8BF4\u554A\uFF0C\u5C31\u662F\u5728\u6808\u4E2D\u5F80\u91CC\u653E\u3002<br> \u90A3\u961F\u5217\u5934\u90E8\u5220\u9664\u600E\u4E48\u5F04\uFF1F\u56E0\u4E3A\u4ED6\u5728\u6808\u7684\u6700\u5E95\u90E8\u554A\uFF0C\u4F60\u6CA1\u6CD5\u76F4\u63A5\u5220\u4ED6\u554A\uFF0C\u4E0D\u8981\u5FD8\u4E86\uFF0C\u6211\u4EEC\u662F\u7528\u4E24\u4E2A\u6808\u6765\u5B9E\u73B0\u3002\u6240\u4EE5\u81EA\u7136\u60F3\u5230 \u5C31\u662F\u628A\u8FD9\u4E2A\u6808\u4E2D\u7684\u6570\u636E\u90FD\u53D6\u51FA\u653E\u5165\u5230\u7B2C\u4E8C\u4E2A\u6808\u4E2D\uFF0C\u7136\u540E\u5220\u9664\u7B2C\u4E8C\u4E2A\u6808\u7684\u6700\u4E0A\u9762\u7684\u5143\u7D20\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StackListTest</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> stack1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> stack2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">appendTail</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u5F80\u68081\u4E2D\u5B58</span>
		stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">deleteHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>stack2<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u628A\u68081\u7684\u6570\u90FD\u653E\u5230\u68082\u4E2D</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack1<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				stack2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack1<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// \u8F6C\u79FB\u5230\u68082\u540E\uFF0C\u5C31\u76F8\u5F53\u4E8E\u628A\u68081\u5012\u5E8F\u4E86\u3002</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>stack2<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;\u961F\u5217\u4E3A\u7A7A\uFF0C\u4E0D\u80FD\u5220\u9664&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// \u76F4\u63A5\u53D6\u68082\u4E2D\u6700\u4E0A\u5C42\u7684\u5C31\u53EF\u4EE5\u4E86\u3002</span>
		<span class="token keyword">return</span> stack2<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token class-name">StackListTest</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> p7 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StackListTest</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		p7<span class="token punctuation">.</span><span class="token function">appendTail</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		p7<span class="token punctuation">.</span><span class="token function">appendTail</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		p7<span class="token punctuation">.</span><span class="token function">appendTail</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		p7<span class="token punctuation">.</span><span class="token function">deleteHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u65CB\u8F6C\u6570\u7EC4\u7684\u6700\u5C0F\u6570\u5B57<br> \u628A\u4E00\u4E2A\u6570\u7EC4\u6700\u5F00\u59CB\u7684\u82E5\u5E72\u4E2A\u5143\u7D20\u642C\u5230\u6570\u7EC4\u7684\u672B\u5C3E\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u6570\u7EC4\u7684<br> \u65CB\u8F6C\u3002\u8F93\u5165\u4E00\u4E2A\u9012\u589E\u6392\u5E8F\u7684\u6570\u7EC4\u7684\u4E00\u4E2A\u65CB\u8F6C\uFF0C\u8F93\u51FA\u65CB\u8F6C\u6570\u7EC4\u7684\u6700\u5C0F\u5143\u7D20\u3002\u4F8B\u5982\u6570<br> \u7EC4{3,4,5,1,2}\u4E3A{1,2,3,4,5}\u7684\u4E00\u4E2A\u65CB\u8F6C\uFF0C\u8BE5\u6570\u7EC4\u7684\u6700\u5C0F\u503C\u4E3A 1.</p><p>\u601D\u8DEF: \u5F00\u59CB\u770B\u5230\u8FD9\u9053\u9898\uFF0C\u6211\u611F\u89C9\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5FAA\u73AF\u6BD4\u8F83\u4E0B\u627E\u51FA\u6700\u4E0B\u7684\u5C31\u5B8C\u4E86\uFF0C\u6211\u611F\u89C9\u4EC0\u4E48\u65CB\u8F6C\u6570\u7EC4\u90FD\u662F\u9762\u8BD5\u5B98 \u653E\u7684\u70DF\u96FE\u5F39\u3002\u540E\u6765\u6211\u53D1\u73B0\u6211\u9519\u4E86\u3002\u65CB\u8F6C\u6570\u7EC4\u662F\u6709\u7528\u7684\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FindTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// int[] array={1,1,1,2,0};</span>
		<span class="token comment">// int[] array={3,4,5,1,2};</span>
		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u662F0\uFF0C1\uFF0C1\uFF0C1\uFF0C1\u7684\u65CB\u8F6C</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">findMinNum</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">findMinNum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>array <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">int</span> leftIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> rightIndex <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token comment">// \u6700\u5C0F\u7684\u6570\u5C31\u5728\u8FD9\u4E2D\u95F4</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> array<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>rightIndex <span class="token operator">-</span> leftIndex <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// \u8FD9\u5C31\u662F\u6700\u5C0F\u7684\u4E86</span>
				mid <span class="token operator">=</span> rightIndex<span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// \u53BB\u4E2D\u95F4\u7684\u503C\uFF0C\u7C7B\u4F3C\u4E8C\u5206\u6CD5\u67E5\u627E</span>
			mid <span class="token operator">=</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">+</span> rightIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
			<span class="token comment">// \u524D\u3001\u4E2D\u3001\u540E\u4E09\u4E2A\u503C\u90FD\u76F8\u7B49\u7684\u60C5\u51B5\uFF0C\u4E3B\u8981\u5C31\u662F\u4E3A\u4E86\u533A\u52060\uFF0C1\uFF0C1\uFF0C1\uFF0C1\u8FD9\u79CD\u6570\u503C\u76F8\u540C\u7684\u60C5\u51B5</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">==</span> array<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">==</span> array<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// \u628A\u6307\u9488\u5728\u79FB\u52A8\u4E00\u4E0B\uFF0C\u4E0D\u76F8\u7B49\u5C31\u7EE7\u7EED\u53D8mid\u7684\u503C</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>leftIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> array<span class="token punctuation">[</span>rightIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					mid <span class="token operator">=</span> array<span class="token punctuation">[</span>leftIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> array<span class="token punctuation">[</span>rightIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>rightIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">break</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					leftIndex<span class="token operator">++</span><span class="token punctuation">;</span>
					rightIndex<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> array<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span><span class="token punctuation">)</span>
					leftIndex <span class="token operator">=</span> mid<span class="token punctuation">;</span>
				<span class="token keyword">else</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> array<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">)</span>
						rightIndex <span class="token operator">=</span> mid<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> array<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6590\u6CE2\u90A3\u5951\u6570\u5217 <br> \u4EC0\u4E48\u662F\u6590\u6CE2\u90A3\u5951\u6570\u5217\u5462\uFF1F \u5C31\u662Ff(0)=0;f(1)=1;f(n)=f(n-1)+f(n-2);<br> \u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u8F93\u5165n\uFF0C\u6C42\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u7B2Cn\u9879\u3002<br> \u601D\u8DEF:\u6807\u51C6\u7684\u4E00\u4E2A\u9012\u5F52\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">fibonacci1</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> <span class="token function">fibonacci1</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci1</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C8C\u4F3C\u5F88\u5408\u7406\uFF0C\u4F46\u5176\u5B9E\u4E5F\u662F\u6709\u95EE\u9898\u7684\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u91CD\u590D\u8BA1\u7B97\uFF0C\u4F8B\u5982\u6211\u4EEC\u5728\u7B97f(10)\uFF0C\u9700\u8981\u5148\u6C42\u51FAf(9)\u548Cf(8)\uFF0C\u800C\u7B97f(9)\u53C8\u8981\u6C42\u51FAf(8)\u548Cf(7)\uFF0C\u5F88\u663E\u7136\u91CD\u590D\u4E86\u3002\u663E\u7136\u9762\u8BD5\u5B98\u4E0D\u4F1A\u6EE1\u610F\u7684\u3002\u90A3\u8BE5\u600E\u4E48\u505A\u5462\uFF1F \u90A3\u5C31\u662F\u7D2F\u52A0\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Fibonacci</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">long</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">long</span> preOne <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">long</span> preTwo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> preOne<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> preTwo<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result <span class="token operator">=</span> preOne <span class="token operator">+</span> preTwo<span class="token punctuation">;</span>
			preOne <span class="token operator">=</span> preTwo<span class="token punctuation">;</span>
			preTwo <span class="token operator">=</span> result<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2\u8FDB\u5236\u4E2D1\u7684\u4E2A\u6570<br> \u8BF7\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570,\u8F93\u5165\u4E00\u4E2A\u6574\u6570,\u8F93\u51FA\u8BE5\u6570\u4E8C\u8FDB\u5236\u8868\u793A\u4E2D 1 \u7684\u4E2A\u6570\u3002\u4F8B\u5982 \u628A 9 \u8868\u793A\u6210\u4E8C\u8FDB\u5236\u662F 1001;\u6709 2 \u4F4D\u662F 1,\u56E0\u6B64\u5982\u679C\u8F93\u5165 9,\u51FD\u6570\u8F93\u51FA 2.<br> \u601D\u8DEF: \u628A\u4E00\u4E2A\u6574\u6570\u51CF\u53BB1\uFF0C\u518D\u548C\u539F\u6574\u6570\u505A\u4E0E\u8FD0\u7B97\uFF0C\u4F1A\u628A\u8BE5\u6574\u6570\u6700\u53F3\u8FB9\u7684\u4E00\u4E2A1\u53D8\u62100.\u90A3\u4E48\u4E00\u4E2A\u6574\u6570\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u4E2D\u6709\u591A\u5C11\u4E2A1\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u884C\u591A\u5C11\u6B21\u8FD0\u7B97\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">numberOf1</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token operator">++</span><span class="token punctuation">;</span>
		n <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> n<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6570\u503C\u7684\u6574\u6570\u6B21\u65B9<br> \u5B9E\u73B0\u51FD\u6570double Power(double base,int exponent),\u6C42base\u7684exponent\u6B21\u65B9\u3002\u4E0D\u5F97\u4F7F\u7528\u5E93\u51FD\u6570\uFF0C\u540C\u65F6\u4E0D\u9700\u8981\u8003\u8651\u5927\u6570\u95EE\u9898\u3002<br> \u601D\u8DEF:\u5C31\u662F\u4E0D\u65AD\u7684\u7D2F\u8BA1\u53BB\u4E58.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">powerWithExponent</span><span class="token punctuation">(</span><span class="token keyword">double</span> base<span class="token punctuation">,</span> <span class="token keyword">int</span> exponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">double</span> result <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> exponent<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result <span class="token operator">=</span> result <span class="token operator">*</span> base<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u672C\u6765\u60F3\u7740\u633A\u7B80\u5355\uFF0C\u5176\u5B9E\u5DF2\u7ECF\u5199\u9519\u4E86\u3002\u56E0\u4E3Aexponent\u5982\u679C\u662F0\u6216\u8005\u8D1F\u6570\u5462\uFF1F<br> \u601D\u8DEF\uFF1A\u5F53\u6307\u6570\u4E3A\u8D1F\u6570\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5148\u5BF9\u6307\u6570\u6C42\u7EDD\u5BF9\u503C\uFF0C\u7136\u540E\u7B97\u51FA\u6B21\u65B9\u7684\u7ED3\u679C\u4E4B\u540E\u518D\u53D6\u5012\u6570\u3002\u65E2\u7136\u6709\u6C42\u5012\u6570\uFF0C\u6211\u4EEC\u5F88\u81EA\u7136\u7684\u5C31\u8981\u60F3\u5230\u6709\u6CA1\u6709\u53EF\u80FD\u5BF90\u6C42\u5012\u6570\uFF0C\u5982\u679C\u5BF90\u6C42\u5012\u6570\u600E\u4E48\u529E\uFF1F\u5F53\u5E95\u6570base\u662F\u96F6\u4E14\u6307\u6570\u662F\u8D1F\u6570\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E0D\u505A\u7279\u6B8A\u7684\u5904\u7406\uFF0C\u5C31\u4F1A\u53D1\u73B0\u5BF90\u6C42\u5012\u6570\u4ECE\u800C\u5BFC\u81F4\u7A0B\u5E8F\u8FD0\u884C\u51FA\u9519\u3002\u600E\u4E48\u544A\u8BC9\u51FD\u6570\u7684\u8C03\u7528\u8005\u51FA\u73B0\u4E86\u8FD9\u79CD\u9519\u8BEF\uFF1F\u5728Java\u4E2D\u53EF\u4EE5\u629B\u51FA\u5F02\u5E38\u6765\u89E3\u51B3\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">power</span><span class="token punctuation">(</span><span class="token keyword">double</span> base<span class="token punctuation">,</span> <span class="token keyword">int</span> exponent<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
	<span class="token keyword">double</span> result <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
	<span class="token comment">// \u5982\u679C\u662F\u6C420\u7684\u8D1F\u6570\u6B21\u5E42</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">equal</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> exponent <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;0\u7684\u8D1F\u6570\u6B21\u5E42\u6CA1\u6709\u610F\u4E49&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u8D1F\u6570\u6B21\u5E42\uFF0C\u5148\u53D6\u7EDD\u5BF9\u503C\u7B97\u51FA\u6B21\u65B9\u540E\u518D\u6C42\u5012\u6570</span>
		result <span class="token operator">=</span> <span class="token number">1.0</span> <span class="token operator">/</span> <span class="token function">powerWithExpoment</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> <span class="token operator">-</span>exponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		result <span class="token operator">=</span> <span class="token function">powerWithExpoment</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> exponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">powerWithExpoment</span><span class="token punctuation">(</span><span class="token keyword">double</span> base<span class="token punctuation">,</span> <span class="token keyword">int</span> exponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> base<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">double</span> result <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> exponent<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result <span class="token operator">=</span> result <span class="token operator">*</span> base<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5224\u65AD\u4E24\u4E2Adouble\u6570\u636E\u662F\u5426\u76F8\u7B49
 * <span class="token keyword">@param</span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token parameter">num2</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">equal</span><span class="token punctuation">(</span><span class="token keyword">double</span> num1<span class="token punctuation">,</span> <span class="token keyword">double</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>num1 <span class="token operator">-</span> num2 <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">0.0000001</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> num1 <span class="token operator">-</span> num2 <span class="token operator">&lt;</span> <span class="token number">0.0000001</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6253\u5370 1 \u5230\u6700\u5927\u7684 n \u4F4D\u6570<br> \u8F93\u5165\u6570\u5B57n\uFF0C\u6309\u987A\u5E8F\u6253\u5370\u51FA\u4ECE1\u6700\u5927\u7684\u7684n\u4F4D\u6570\u5341\u8FDB\u5236\u6570\u3002\u6BD4\u5982\u8F93\u51653\uFF0C\u5219\u6253\u5370\u51FA1\uFF0C2\uFF0C3\u4E00\u76F4\u5230\u6700\u5927\u76843\u4F4D\u6570\u5373999.<br> \u601D\u8DEF: 1\u4F4D\u6570\u5C31\u662F10-1\uFF0C\u4E24\u4F4D\u6570\u5C31\u662F10<em>10-1\u4E09\u4F4D\u6570\u5C31\u662F10</em>10*10-1</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print1ToMaxOfNDigits</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">++</span> <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		number <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> number<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u611F\u89C9\u633A\u7B80\u5355\uFF0C\u5176\u5B9E\u5DF2\u7ECF\u9519\u4E86\u3002\u56E0\u4E3A\u6CA1\u6709\u89C4\u5B9An\u7684\u503C\uFF0C\u5982\u679C\u5F88\u5927\u7684\u8BDD\uFF0C\u663E\u7136\u4F1A\u8D85\u8FC7int\u578B\u7684\u6700\u5927\u503C\u3002\u6211\u4EEC\u5F88\u81EA\u7136\u7684\u60F3\u5230\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u9700\u8981\u4E00\u4E2A\u5927\u6570\u3002\u6700\u5E38\u7528\u7684\u4E5F\u662F\u6700\u5BB9\u6613\u7684\u7528\u5B57\u7B26\u4E32\u6216\u8005\u6570\u7EC4\u8868\u8FBE\u5927\u6570\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u7528\u6570\u7EC4\u6765\u89E3\u51B3\u5927\u6570\u95EE\u9898\u3002 \u601D\u8DEF:\u6BCF\u4E00\u4F4D\u6570\u90FD\u662F0\u52309\uFF0C\u8FD9\u6837\u5F04\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u957F\u5EA6\u5C31\u662Fn\uFF0C\u6BCF\u4E00\u4F4D\u90FD\u662F0-9\uFF0C\u8FD9\u6837\uFF0C\u5FAA\u73AF\u53BB\u6253\u5370\u6570\u7EC4\u5C31\u53EF\u4EE5\u4E86</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">printToMaxOfNDigits</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printToMaxOfNDigits</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token function">printArray</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printArray</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u6BCF\u4E00\u4F4D\u90FD\u662F0-9</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			array<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
			<span class="token comment">// \u9012\u5F52\u5F04\u53E6\u4E00\u4F4D</span>
			<span class="token function">printArray</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">boolean</span> isFirstNo0 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isFirstNo0<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						isFirstNo0 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>isFirstNo0<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token comment">// 10 20 \u8FD9\u79CD\u540E\u4F4D\u662F0\u7684</span>
						<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// \u6253\u5370\u5B8C\u5C31return</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>13. \u5728O(1)\u65F6\u95F4\u5220\u9664\u94FE\u8868\u8282\u70B9            
    \u7ED9\u5B9A\u5355\u5411\u94FE\u8868\u7684\u5934\u6307\u9488\u548C\u4E00\u4E2A\u8282\u70B9\u6307\u9488\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u5728O(1)\u65F6\u95F4\u5220\u9664\u8BE5\u8282\u70B9\u3002          
    \u601D\u8DEF\uFF1A\u5728\u5355\u5411\u94FE\u8868\u4E2D\u5220\u9664\u4E00\u4E2A\u8282\u70B9\uFF0C\u6700\u5E38\u89C4\u7684\u65B9\u6CD5\u65E0\u7591\u662F\u4ECE\u94FE\u8868\u7684\u5934\u7ED3\u70B9\u5F00\u59CB\uFF0C\u987A\u5E8F\u904D\u5386\u67E5\u627E\u8981\u5220\u9664\u7684\u8282\u70B9\uFF0C\u5E76\u5728\u94FE\u8868\u4E2D\u5220\u9664\u8BE5\u8282\u70B9\u3002\u5220\u9664\u5C31\u662F\u5C06\u8FD9\u4E2A\u8981\u88AB\u5220\u9664\u7684\u8282\u70B9\u7684\u524D\u4E00\u8282\u70B9\u8BBE\u7F6E\u6210\u8BE5\u8981\u88AB\u5220\u9664\u8282\u70B9\u7684\u4E0B\u4E00\u8282\u70B9\u3002- -\uFF01 
    \`\`\`java
    public class DeleteListNodeTest {
		public static void main(String[] args) {
			ListNode head = new ListNode();
			ListNode second = new ListNode();
			ListNode third = new ListNode();
			head.nextNode = second;
			second.nextNode = third;
			head.data = 1;
			second.data = 2;
			third.data = 3;
			deleteNode(head, second);
			System.out.println(head.nextNode.data);
		}
	
		/**
		 * 
		 * @param head
		 *            \u5934\u7ED3\u70B9
		 * @param deListNode
		 *            \u5C06\u88AB\u5220\u9664\u7684\u8282\u70B9
		 */
		public static void deleteNode(ListNode head, ListNode deListNode) {
			if (deListNode == null || head == null) {
				return;
			}
	
			if (head == deListNode) {
				// \u8981\u5220\u9664\u7684\u8FD9\u4E2A\u8282\u70B9\u6B63\u597D\u662F\u5934\u8282\u70B9
				head = null;
			} else if (deListNode.nextNode == null) {
				// \u8981\u5220\u9664\u7684\u8FD9\u4E2A\u8282\u70B9\u6B63\u597D\u662F\u6700\u540E\u4E00\u4E2A\u8282\u70B9
				ListNode pointListNode = head;
				while (pointListNode.nextNode.nextNode != null) {
					pointListNode = pointListNode.nextNode;
				}
				pointListNode.nextNode = null;
			} else {
				// \u8981\u5220\u9664\u7684\u8282\u70B9\u662F\u4E2D\u95F4\u7684\u8282\u70B9\uFF0C\u76F4\u63A5\u628A\u8BE5\u8282\u70B9\u7684\u503C\u548Cnext\u6307\u5411\u4E0B\u4E00\u4E2A\u8282\u70B9\u5C31\u53EF\u4EE5\u3002
				deListNode.data = deListNode.nextNode.data;
				deListNode.nextNode = deListNode.nextNode.nextNode;
			}
		}
	}
	
	class ListNode {
		int data;
		ListNode nextNode;
	}
    \`\`\`
14. \u8C03\u6574\u6570\u7EC4\u987A\u5E8F\u4F7F\u5947\u6570\u4F4D\u4E8E\u5076\u6570\u524D\u9762              
    \u8F93\u5165\u4E00\u4E2A\u6574\u6570\u6570\u7EC4\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\u6765\u8C03\u6574\u8BE5\u51FD\u6570\u6570\u7EC4\u4E2D\u6570\u5B57\u7684\u987A\u5E8F\uFF0C\u4F7F\u5F97
\u6240\u6709\u5947\u6570\u4F4D\u4E8E\u6570\u7EC4\u7684\u524D\u534A\u90E8\u5206\uFF0C\u6240\u6709\u5076\u6570\u4F4D\u4E8E\u6570\u7EC4\u7684\u540E\u534A\u90E8\u5206\u3002
    \u601D\u8DEF: \u7EF4\u62A4\u4E24\u4E2A\u6307\u9488\uFF0C\u4E00\u4E2A\u6307\u5411\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u4E00\u4E2A\u6307\u5411\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u7136\u540E\u901A\u8FC7\u6307\u9488\u7684\u79FB\u52A8\uFF0C\u6765\u5224\u65AD\u5F53\u524D\u5143\u7D20\u662F\u5947\u6570\u8FD8\u662F\u5076\u6570\uFF0C\u6765\u4EA4\u6362\u4F4D\u7F6E\u3002\u3000\u3000\u3000
	\`\`\`java
	public static void order(int[] array) {
		if (array == null || array.length == 0) {
			return;
		}
		int start = 0;
		int end = array.length - 1;
		while (start &lt; end) {
			while (start &lt; end &amp;&amp; !isEven(array[start])) {
				// \u5982\u679C\u5F53\u524D\u4F4D\u7F6E\u662F\u5947\u6570\uFF0C\u5C31\u4E0B\u79FB\u6307\u9488
				start++;
			}
			while (start &lt; end &amp;&amp; isEven(array[end])) {
				// \u7B2C\u4E8C\u4E2A\u6307\u9488\u5982\u679C\u5F53\u524D\u4F4D\u7F6E\u662F\u5076\u6570\uFF0C\u5C31\u5411\u524D\u79FB\u52A8\u6307\u9488
				end--;
			}
			if (start &lt; end) {
			    // \u8BF4\u660E\u7B2C\u4E00\u4E2A\u6307\u9488\u6307\u5411\u7684\u662F\u5076\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u6307\u9488\u6307\u5411\u7684\u662F\u5947\u6570\uFF0C\u6211\u4EEC\u6765\u66F4\u6362\u4ED6\u4FE9\u7684\u4F4D\u7F6E\u3002
				int temp = array[start];
				array[start] = array[end];
				array[end] = temp;
			}
		}
	}

	private static boolean isEven(int n) {
		return n % 2 == 0;
	}
	\`\`\`
	
15. \u94FE\u8868\u4E2D\u5012\u6570\u7B2CK\u4E2A\u7ED3\u70B9            
    \u8F93\u5165\u4E00\u4E2A\u94FE\u8868\uFF0C\u8F93\u51FA\u8BE5\u94FE\u8868\u4E2D\u5012\u6570\u7B2C\`k\`\u4E2A\u7ED3\u70B9\u3002   
    \u601D\u8DEF: \u62FF\u5230\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u77E5\u9053\u8BE5\u94FE\u8868\u7684\u603B\u957F\u5EA6\uFF0C\u7136\u540E\u6211\u4EEC\u4ECE\u5934\u5F00\u59CB\u904D\u5386\u6E20\u9053\u7B2C\`totalLength-k\`\u4E2A\u5C31\u662F\u4E86\u3002\u5982\u4F55\u62FF\u5230\u603B\u957F\u5EA6\uFF0C\u4E5F\u7B80\u5355\u5C31\u662F\u904D\u5386\u4E00\u904D\u5C31\u77E5\u9053\u4E86\u3002
	\u4F46\u662F\u8FD9\u6837\u4F1A\u7275\u626F\u5230\u4E24\u6B21\u904D\u5386\uFF0C\u6548\u7387\u6BD4\u8F83\u4F4E\u3002\u90A3\u600E\u4E48\u5904\u7406\u5462\uFF1F\u4E5F\u662F\u4F7F\u7528\u4E24\u4E2A\u6307\u9488\uFF0C\u6211\u4EEC\u8981\u4FDD\u8BC1\u7B2C\u4E00\u4E2A\u6307\u9488\u8D70\u5230\u94FE\u8868\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E(totalLength)\u7684\u65F6\u5019\uFF0C\u7B2C\u4E8C\u4E2A\u6307\u9488\u6B63\u597D\u6307\u5411\u5012\u6570\u7B2C\`k\`\u4E2A\u8282\u70B9(
	\u4E5F\u5C31\u662F\u4ECE\u5934\u5F00\u59CB\u7B2C\`totalLength-k+1\u4E2A\`)\uFF0C\u90A3\u8FD9\u4E24\u4E2A\u6307\u9488\u4E4B\u95F4\u5DEE\u591A\u5C11\u5462\uFF1F\`totalLength-(totalLength-k+1)\`\u4E5F\u5C31\u662F\`k-1\`\u4E2A\u4F4D\u7F6E\uFF0C\u6240\u4EE5\u8BA9\u7B2C\u4E00\u4E2A\u6307\u9488\u79FB\u52A8\u5230\u7B2C\`k-1\`\u4E2A\u4F4D\u7F6E\u540E\uFF0C\u5C31\u8BA9\u7B2C\u4E8C\u4E2A\u6307\u9488
	\u5F00\u59CB\u79FB\u52A8\uFF0C\u8FD9\u6837\u7B49\u7B2C\u4E00\u4E2A\u79FB\u52A8\u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u7684\u65F6\u5019\uFF0C\u7B2C\u4E8C\u4E2A\u6B63\u597D\u6307\u5411\u4E86\u5012\u6570\u7B2C\`k\`\u4E2A\u5143\u7D20\u3002
	\`\`\`java
	public class ListNodeTailText {
		public static void main(String[] args) {
			ListNode node1 = new ListNode();
			ListNode node2 = new ListNode();
			ListNode node3 = new ListNode();
			ListNode node4 = new ListNode();
			node1.nextNode = node2;
			node2.nextNode = node3;
			node3.nextNode = node4;
			node1.data = 1;
			node2.data = 2;
			node3.data = 3;
			node4.data = 4;
			ListNode resultListNode = findKToTail(node1, 3);
			System.out.println(resultListNode.data);
		}

		public static ListNode findKToTail(ListNode head, int k) {
			if (head == null || k == 0) {
				return null;
			}
			ListNode firstIndex = head;
			ListNode secondIndex = head;
			for (int i = 0; i &lt; k; ++i) {
				if (firstIndex.nextNode != null) {
					firstIndex = firstIndex.nextNode;
				} else {
					return null;
				}
			}
			while (firstIndex != null) {
				secondIndex = secondIndex.nextNode;
				firstIndex = firstIndex.nextNode;
			}
			return secondIndex;
		}
	}

	class ListNode {
		int data;
		ListNode nextNode;
	}
	\`\`\`
16. \u53CD\u8F6C\u94FE\u8868           
    \u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\uFF0C\u8F93\u5165\u4E00\u4E2A\u94FE\u8868\u7684\u5934\u7ED3\u70B9\uFF0C\u53CD\u8F6C\u8BE5\u94FE\u8868\u5E76\u8F93\u51FA\u53CD\u8F6C\u540E\u94FE\u8868\u7684\u5934\u7ED3\u70B9\u3002       
	\u601D\u8DEF:\u53CD\u8F6C\u94FE\u8868\u95EE\u7684\u6BD4\u8F83\u591A\uFF0C\u6574\u4F53\u7684\u601D\u8DEF\u5C31\u662F\u4ECE\u540E\u5F80\u524D\u6765\uFF0C\u8FD9\u4E2A\u95EE\u9898\u6211\u4E5F\u662F\u82B1\u4E86\u5F88\u957F\u65F6\u95F4\u624D\u5F04\u660E\u767D\uFF0C\u592A\u7B28\u4E86\u3002
    \u4E5F\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A\u9012\u5F52\u548C\u666E\u901A\u7684\u65B9\u5F0F        

    \`\`\`java
    public class LinkedListDemo {
    	public static void main(String[] args) {
    		ListNode head = new ListNode();
    		ListNode second = new ListNode();
    		ListNode third = new ListNode();
    		ListNode forth = new ListNode();
    		head.nextNode = second;
    		second.nextNode = third;
    		third.nextNode = forth;
    		head.data = 1;
    		second.data = 2;
    		third.data = 3;
    		forth.data = 4;
    		ListNode resultListNode = reverse1(head);
    		System.out.println(resultListNode.data);
    	}
    
    	/**
    	 * \u9012\u5F52
    	 * 
    	 * @param head
    	 * @return
    	 */
    	public static ListNode reverse1(ListNode head) {
    		if (null == head || null == head.getNextNode()) {
    			return head;
    		}
    		// A B C -&gt; A C B -&gt; C B A
    		ListNode reversedHead = reverse1(head.getNextNode());
    		head.getNextNode().setNextNode(head);
    		head.setNextNode(null);
    		return reversedHead;
    	}
    
    	public static ListNode reverse2(ListNode head) {
    		if (null == head) {
    			return head;
    		}
    		// A B C
    		ListNode pre = head;  // A
    		ListNode cur = head.getNextNode();  // B
    		ListNode next;
    		while (cur != null) {
    			// next = C
    			next = cur.getNextNode();
    			// B -&gt; A
    			cur.setNextNode(pre);
    			// pre = B
    			pre = cur;
    			// cur = C
    			cur = next;
    			// \u7B2C\u4E00\u8F6E\u4E0B\u6765\u5C31\u662F A B C -&gt; A B A 
    			// \u7B2C\u4E8C\u8F6E\u4E0B\u6765\u5C31\u662F C B A  pre = C cur = null
    			// \u518D\u7EE7\u7EED\u5C31\u4F1A\u8DF3\u51FA\u5FAA\u73AF
    		}
    	
    		// \u867D\u7136\u5DF2\u7ECF\u662FC B A \u4E86\uFF0C\u4F46\u662F\u4E0D\u8981\u5FD8\u4E86\u6B64\u65F6A\u7684next\u8FD8\u662FB\uFF0C\u6240\u4EE5\u6211\u4EEC\u8981\u5C06\u5176\u8BBE\u7F6E\u4E3Anull
    		// \u5C06\u539F\u94FE\u8868\u7684\u5934\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u7F6E\u4E3Anull\uFF0C\u518D\u5C06\u53CD\u8F6C\u540E\u7684\u5934\u8282\u70B9\u8D4B\u7ED9head
    		head.setNextNode(null);
    		head = pre;
    		// \u5230\u8FD9\u5C31\u662F\u8FD4\u56DEC\u4E86\u3002
    		return head;
    	}
    }
    
    class ListNode {
    	public ListNode nextNode;
    	public int data;
    
    	public ListNode getNextNode() {
    		return nextNode;
    	}
    
    	public void setNextNode(ListNode nextNode) {
    		this.nextNode = nextNode;
    	}
    
    	public int getData() {
    		return data;
    	}
    
    	public void setData(int data) {
    		this.data = data;
    	}
    }
    \`\`\`
17. \u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868
    \u8F93\u5165\u4E24\u4E2A\u9012\u589E\u6392\u5E8F\u7684\u94FE\u8868\uFF0C\u5408\u5E76\u8FD9\u4E24\u4E2A\u94FE\u8868\u5E76\u4F7F\u65B0\u94FE\u8868\u4E2D\u7684\u7ED3\u70B9\u4ECD\u7136\u662F\u6309
    \u7167\u9012\u589E\u6392\u5E8F\u7684\u3002	
	\u601D\u8DEF: \u5408\u5E76\u4E24\u4E2A\u94FE\u8868\uFF0C\u6309\u7167\u9012\u589E\u987A\u5E8F\uFF0C\u90A3\u5C31\u662F\u5047\u8BBE\u7B2C\u4E00\u4E2A\u94FE\u8868\u662F1 3 \u7B2C\u4E8C\u4E2A\u94FE\u8868\u662F2 4 6\u90A3\u600E\u4E48\u53BB\u5408\u5E76\u5462\uFF1F
	\u5148\u662F\u6BD4\u8F83\u4E24\u4E2A\u94FE\u8868\u7684\u5934\u7ED3\u70B9\uFF0C\uFF11\u548C\uFF12\u6BD4\u8F83\uFF0C\u90A3\u5408\u5E76\u540E\u7684\u65B0\u94FE\u8868\u5934\u80AF\u5B9A\u662F\uFF11\u4E86\uFF0C\u7136\u540E\u518D\u62FF2\u548C3\u6BD4\u8F83\u770B\u8C01\u662F\u7B2C\u4E8C\u4E2A\u7ED3\u70B9\uFF0C\u90A3\u53EF\u5B9A\u662F2\u4E86\uFF0C\u5230\u8FD9\u91CC\u5C31\u786E\u5B9A\u4E86\u65B0\u94FE\u8868\u7684\u524D\u4E24\u4E2A\u7ED3\u70B9\uFF0C
	\u5C31\u662F1 2 \u7136\u540E\u518D\u75283\u548C4\u6BD4\u8F83\u786E\u5B9A\u8C01\u662F\u7B2C\u4E09\u4E2A\uFF0C\u8FD9\u662F\u5565\uFF1F\u8FD9\u662F\u9012\u5F52\u3002
	\`\`\`java
	public class MergeListTest {
		public static void main(String[] args) {
			ListNode head1 = new ListNode();
			ListNode second1 = new ListNode();
			ListNode head2 = new ListNode();
			ListNode second2 = new ListNode();
			ListNode third2 = new ListNode();
			head1.nextNode = second1;
			head2.nextNode = second2;
			second2.nextNode = third2;
			head1.data = 1;
			second1.data = 3;
			head2.data = 2;
			second2.data = 2;
			third2.data = 2;
			MergeListTest test = new MergeListTest();
			ListNode result = test.mergeList(head1, head2);
			System.out.println(result.nextNode.nextNode.nextNode.nextNode.data);
		}

		public ListNode mergeList(ListNode head1, ListNode head2) {
			if (head1 == null) {
				return head2;
			} else if (head2 == null) {
				return head1;
			}
			ListNode mergeHead = null;
			if (head1.data &lt; head2.data) {
				mergeHead = head1;
				mergeHead.nextNode = mergeList(head1.nextNode, head2);
			} else {
				mergeHead = head2;
				mergeHead.nextNode = mergeList(head1, head2.nextNode);
			}
			return mergeHead;
		}
	}

	class ListNode {
		public ListNode nextNode;
		public int data;

		public ListNode getNextNode() {
			return nextNode;
		}

		public void setNextNode(ListNode nextNode) {
			this.nextNode = nextNode;
		}

		public int getData() {
			return data;
		}

		public void setData(int data) {
			this.data = data;
		}
	}
	\`\`\`
18. \u6811\u7684\u5B50\u7ED3\u6784	               

    \u8F93\u5165\u4E24\u9897\u4E8C\u53C9\u6811 A \u548C B\uFF0C\u5224\u65AD B \u662F\u4E0D\u662F A \u7684\u5B50\u7ED3\u6784\u3002
	![image](https://raw.githubusercontent.com/CharonChui/Pictures/master/findchildbinarytree.png)	  
	\u601D\u8DEF:   \u60F3\u8981\u5224\u65ADB\u6811\u662F\u4E0D\u662FA\u7684\u5B50\u6811\uFF0C\u90A3\u9996\u5148\u8981\u5148\u53BB\u5728A\u6811\u79CD\u904D\u5386\u627E\u5230\u4E0EB\u6811\u6839\u8282\u70B9\u76F8\u540C\u7684\u7ED3\u70B9\uFF0C\u7136\u540E\u518D\u4ECE\u8FD9\u4E2A\u7ED3\u70B9\u53BB\u904D\u5386\u5B50\u7ED3\u70B9
	\u770B\u5B57\u8282\u70B9\u4E0EB\u6811\u662F\u5426\u4E00\u6837\uFF0C\u5982\u679C\u4E0D\u4E00\u6837\u5C31\u7EE7\u7EED\u5F80\u4E0B\u904D\u5386\u7ED3\u70B9\uFF0C\u627E\u4E0EB\u6811\u6839\u8282\u70B9\u4E00\u76F4\u7684\u7ED3\u70B9\uFF0C\u5982\u6B64\u5FAA\u73AF\u3002
	\u4EE5\u4E0A\u56FE\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u5148\u5728A\u4E2D\u627E8\u7684\u7ED3\u70B9\uFF0C\u53D1\u73B0A\u7684\u6839\u8282\u70B9\u5C31\u662F\uFF0C\u7136\u540E\u7EE7\u7EED\u770BA\u7684\u5DE6\u5B50\u8282\u70B9\u662F8\uFF0C\u800CB\u7684\u5DE6\u5B50\u8282\u70B9\u662F9\uFF0C\u9501\u7740\u8FD9
	\u80AF\u5B9A\u4E0D\u662F\u4E86\uFF0C\u7EE7\u7EED\u5F80\u4E0B\u627E\u4E3A8\u7684\u7ED3\u70B9\uFF0C\u53D1\u73B0\u5728A\u6811\u7684\u7B2C\u4E8C\u5C42\u627E\u6253\u4E86\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u5224\u65AD\u8BE5\u7ED3\u70B9\u4E0B\u7684\u5B50\u8282\u70B9\uFF0C\u53D1\u73B0\u4E3A9\u548C2\uFF0C\u6B63\u597D\u4E0EB\u7684\u76F8\u540C
	\u5C31\u662F\u4ED6\u4E86\u3002
	\`\`\`java
	public class Problem18 {
		public static void main(String args[]) {
			BinaryTreeNode root1 = new BinaryTreeNode();
			BinaryTreeNode node1 = new BinaryTreeNode();
			BinaryTreeNode node2 = new BinaryTreeNode();
			BinaryTreeNode node3 = new BinaryTreeNode();
			BinaryTreeNode node4 = new BinaryTreeNode();
			BinaryTreeNode node5 = new BinaryTreeNode();
			BinaryTreeNode node6 = new BinaryTreeNode();
			root1.leftNode = node1;
			root1.rightNode = node2;
			node1.leftNode = node3;
			node1.rightNode = node4;
			node4.leftNode = node5;
			node4.rightNode = node6;
			root1.value = 8;
			node1.value = 8;
			node2.value = 7;
			node3.value = 9;
			node4.value = 2;
			node5.value = 4;
			node6.value = 7;
			BinaryTreeNode root2 = new BinaryTreeNode();
			BinaryTreeNode a = new BinaryTreeNode();
			BinaryTreeNode b = new BinaryTreeNode();
			root2.leftNode = a;
			root2.rightNode = b;
			root2.value = 8;
			a.value = 9;
			b.value = 2;
			System.out.println(hasSubTree(root1, root2));
		}

		public static boolean hasSubTree(BinaryTreeNode root1, BinaryTreeNode root2) {
			boolean result = false;
			if (root1 != null &amp;&amp; root2 != null) {
				if (root1.value == root2.value) {
					result = doesTree1HavaTree2(root1, root2);
					if (!result) {
						result = hasSubTree(root1.leftNode, root2);
					}
					if (!result) {
						result = hasSubTree(root1.rightNode, root2);
					}
				}
			}
			return result;
		}

		private static boolean doesTree1HavaTree2(BinaryTreeNode root1,
				BinaryTreeNode root2) {
			if (root2 == null) {
				return true;
			} else if (root1 == null)
				return false;
			if (root1.value != root2.value) {
				return false;
			}
			return doesTree1HavaTree2(root1.leftNode, root2.leftNode)
					&amp;&amp; doesTree1HavaTree2(root1.rightNode, root2.rightNode);
		}
	}

	class BinaryTreeNode {
		int value;
		BinaryTreeNode leftNode;
		BinaryTreeNode rightNode;
	}
	\`\`\`
19. \u4E8C\u53C9\u6811\u7684\u955C\u50CF
    \u8BF7\u5B8C\u6210\u4E00\u4E2A\u51FD\u6570\uFF0C\u8F93\u5165\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u8BE5\u51FD\u6570\u8F93\u51FA\u5B83\u7684\u955C\u50CF\u3002	
    \u601D\u8DEF\uFF1A\u4EC0\u4E48\u4E8B\u955C\u50CF\uFF1F \u5C31\u50CF\u7167\u955C\u5B50\u4E00\u6837\u3002\u6253\u4E2A\u6BD4\u65B9\u73B0\u5728\u7684\u6570\u662F
    \`\`\`
            1                                                   1
        2         3      \u5DE6\u56FE\u7684\u4E8C\u53C9\u6811\u7684\u955C\u50CF\u5C31\u662F             3          2
     4     5  6       7                              7       6  5        4
    \`\`\`
    \u5C31\u662F\u4ECE\u6839\u8282\u70B9\u5F00\u59CB\uFF0C\u5148\u524D\u5E8F\u904D\u5386\u8FD9\u68F5\u6811\u7684\u6BCF\u4E2A\u7ED3\u70B9,\u5148\u8F6C\u6362\u5B83\u7684\u4E24\u4E2A\u5B50\u8282\u70B9\uFF0C\u7136\u540E\u518D\u5BF9\u8FD9\u4E24\u4E2A\u5B50\u8282\u70B9\u4E0B\u7684\u5B50\u8282\u70B9\u8FDB\u884C\u8F6C\u6362\u3002
    \`\`\`java
    public class mirrorBinaryTreeTest {
        public static void main(String[] args) {
    		BinaryTreeNode root1 = new BinaryTreeNode();
    		BinaryTreeNode node1 = new BinaryTreeNode();
    		BinaryTreeNode node2 = new BinaryTreeNode();
    
    		BinaryTreeNode node3 = new BinaryTreeNode();
    		BinaryTreeNode node4 = new BinaryTreeNode();
    		BinaryTreeNode node5 = new BinaryTreeNode();
    		BinaryTreeNode node6 = new BinaryTreeNode();
    		root1.leftNode = node1;
    		root1.rightNode = node2;
    		node1.leftNode = node3;
    		node1.rightNode = node4;
    		node4.leftNode = node5;
    		node4.rightNode = node6;
    		root1.value = 8;
    		node1.value = 8;
    		node2.value = 7;
    		node3.value = 9;
    		node4.value = 2;
    		node5.value = 4;
    		node6.value = 7;
    		BinaryTreeNode rootBinaryTreeNode = mirrorBinaryTree(root1);
    	}
    
    	public static BinaryTreeNode mirrorBinaryTree(BinaryTreeNode root) {
    		if (root == null) {
    			return null;
    		}
    		if (root.leftNode == null &amp;&amp; root.rightNode == null)
    			return null;
    		Stack&lt;BinaryTreeNode&gt; stack = new Stack&lt;BinaryTreeNode&gt;();
    		while (root != null || !stack.isEmpty()) {
    			while (root != null) {
    				BinaryTreeNode temp = root.leftNode;
    				root.leftNode = root.rightNode;
    				root.rightNode = temp;
    				stack.push(root);
    				root = root.leftNode;
    			}
    			root = stack.pop();
    			root = root.rightNode;
    		}
    		return root;
    	}
    }
    
    class BinaryTreeNode {
    	public int value;
    	public BinaryTreeNode leftNode;
    	public BinaryTreeNode rightNode;
    
    	public BinaryTreeNode() {
    
    	}
    
    	public BinaryTreeNode(int value) {
    		this.value = value;
    		this.leftNode = null;
    		this.rightNode = null;
    	}
    }
    \`\`\`
20. \u987A\u65F6\u9488\u6253\u5370\u77E9\u9635
    \u8F93\u5165\u4E00\u4E2A\u77E9\u9635,\u6309\u7167\u4ECE\u5916\u5411\u91CC\u4EE5\u987A\u65F6\u9488\u7684\u987A\u5E8F\u4F9D\u6B21\u6253\u5370\u51FA\u6BCF\u4E00\u4E2A\u6570\u5B57\u3002
    \`\`\`
    1   2   3    4  
    5   6   7    8
    9   10  11  12
    \`\`\`
    \u601D\u8DEF\uFF1A\u987A\u65F6\u9488\u6253\u5370\u4E5F\u5C31\u662F4\u6B65\uFF0C\u4ECE\u5DE6\u5F80\u53F3\u3001\u4ECE\u4E0A\u5F80\u4E0B\u3001\u4ECE\u53F3\u5411\u5DE6\u3001\u4ECE\u4E0B\u5F80\u4E0A\uFF0C\u7136\u540E\u7EE7\u7EED\u5FAA\u73AF\u5982\u6B64\uFF0C
    \u5F53\u7136\u5728\u6BCF\u6B21\u5FAA\u73AF\u7684\u65F6\u5019\u90FD\u8981\u5224\u65AD\u597D\uFF0C\u4EE5\u514D\u53EA\u6709\u4E00\u884C\u6216\u8005\u4E00\u5217\u6216\u8005\u4E00\u4E2A\u5143\u7D20\u7684\u60C5\u51B5\u3002
    \`\`\`java
    public class printMatrixTest {
        public static void main(String[] args) {
    		int[][] arr = { { 1, 2, 3, 4 }, { 5, 6, 7, 8 }, { 9, 10, 11, 12 } };
    		printMatrixInCircle(arr);
    	}
    
    	public static void printMatrixInCircle(int[][] array) {
    		if (array == null) {
    			return;
    		}
    		int start = 0;
    		// \u5FAA\u73AF\u7684\u6B21\u6570\u5C31\u662F\u7EF4\u5EA6\u8981\u5927\u4E8E\u6307\u9488\u76842\u500D
    		while (array[0].length &gt; start * 2 &amp;&amp; array.length &gt; start * 2) {
    			printOneCircle(array, start);
    			start++;
    		}
    	}
    
    	private static void printOneCircle(int[][] array, int start) {
    		int columns = array[0].length;
    		int rows = array.length;
    		int endX = columns - 1 - start;
    		int endY = rows - 1 - start;
    		// \u4ECE\u5DE6\u5230\u53F3\u6253\u5370\u4E00\u884C
    		for (int i = start; i &lt;= endX; i++) {
    			int number = array[start][i];
    			System.out.print(number + &quot;,&quot;);
    		}
    		// \u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E00\u5217
    		if (start &lt; endY) {
    			for (int i = start + 1; i &lt;= endY; i++) {
    				int number = array[i][endX];
    				System.out.print(number + &quot;,&quot;);
    			}
    		}
    		// \u4ECE\u53F3\u5230\u5DE6\u6253\u5370\u4E00\u884C
    		if (start &lt; endX &amp;&amp; start &lt; endY) {
    			for (int i = endX - 1; i &gt;= start; i--) {
    				int number = array[endY][i];
    				System.out.print(number + &quot;,&quot;);
    			}
    		}
    		// \u4ECE\u4E0B\u5230\u4E0A\u6253\u5370\u4E00\u5217
    		if (start &lt; endY &amp;&amp; start &lt; endY - 1) {
    			for (int i = endY - 1; i &gt;= start + 1; i--) {
    				int number = array[i][start];
    				System.out.print(number + &quot;,&quot;);
    			}
    		}
    	}
    }
    \`\`\`
21. \u5305\u542B\`min\`\u51FD\u6570\u7684\u6808        
    \u5B9A\u4E49\u6808\u7684\u6570\u636E\u7ED3\u6784,\u8BF7\u5728\u8BE5\u7C7B\u578B\u4E2D\u5B9E\u73B0\u4E00\u4E2A\u80FD\u591F\u5F97\u5230\u6808\u7684\u6700\u5C0F\u5143\u7D20\u7684\`min\`\u51FD\u6570\u3002
    \u5728\u8BE5\u6808\u4E2D,\u8C03\u7528\`min\`\u3001\`push\`\u53CA\`pop\`\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u90FD\u662FO(1)          
    \u601D\u8DEF: \u6700\u5148\u60F3\u5230\u7684\u5C31\u662F\u7528\u4E00\u4E2A\u53D8\u91CF\u8BB0\u5F55\u4F4F\u6700\u5C0F\u7684\u5143\u7D20\uFF0C\u4F46\u662F\u5982\u679C\u8FD9\u4E2A\u6700\u5C0F\u7684\u5143\u7D20\u88AB\u53D6\u51FA\u4E86\u5462\uFF1F 
    \u600E\u4E48\u518D\u8FD4\u56DE\u5269\u4E0B\u6240\u6709\u5143\u7D20\u4E2D\u6700\u5C0F\u7684\u4E00\u4E2A\u5462\uFF1F\u5F88\u663E\u7136\u7528\u4E00\u4E2A\u53D8\u91CF\u8BB0\u4F4F\u662F\u4E0D\u884C\u7684\uFF0C\u6211\u4EEC\u5FC5\u987B\u8981\u7528
    \u4E00\u4E2A\u8F85\u52A9\u6808\u6765\u7EAA\u5F55\u8FD9\u5C0F\u5C0F\u5143\u7D20\u3002
    \`\`\`java
    public class MinInStack {
        /**
    	 * \u8F85\u52A9\u6808\uFF0C\u6765\u7EAA\u5F55\u8FD9\u4E9B\u5C0F\u7684\u5143\u7D20
    	 */
    	private MyStack&lt;Integer&gt; minStack = new MyStack&lt;&gt;();
    	private MyStack&lt;Integer&gt; dataStack = new MyStack&lt;&gt;();
    
    	public void push(Integer item) {
    		dataStack.push(item);
    		if (minStack.length == 0 || item &lt;= minStack.head.data) {
    			minStack.push(item);
    		} else {
    			minStack.push(minStack.head.data);
    		}
    	}
    
    	public Integer pop() {
    		if (dataStack.length == 0 || minStack.length == 0) {
    			return null;
    		}
    		minStack.pop();
    		return dataStack.pop();
    	}
    
    	public Integer min() {
    		if (minStack.length == 0) {
    			return null;
    		}
    		return minStack.head.data;
    	}
    
    	public static void main(String[] args) {
    		MinInStack test = new MinInStack();
    		test.push(3);
    		test.push(2);
    		test.push(1);
    		System.out.println(test.pop());
    		System.out.println(test.min());
    	}
    }
    
    /**
     * \u94FE\u8868
     */
    class ListNode&lt;K&gt; {
    	K data;
    	ListNode&lt;K&gt; nextNode;
    }
    
    /**
     * \u81EA\u5B9A\u4E49\u6808\u7684\u6570\u636E\u7ED3\u6784
     */
    class MyStack&lt;K&gt; {
    	public ListNode&lt;K&gt; head;
    	/**
    	 * \u5F53\u524D\u6808\u7684\u5927\u5C0F
    	 */
    	public int length;
    
    	public void push(K item) {
    		ListNode&lt;K&gt; node = new ListNode&lt;K&gt;();
    		node.data = item;
    		node.nextNode = head;
    		head = node;
    		length++;
    	}
    
    	public K pop() {
    		if (head == null)
    			return null;
    		ListNode&lt;K&gt; temp = head;
    		head = head.nextNode;
    		length--;
    		return temp.data;
    	}
    
    }
    \`\`\`
22. \u6808\u7684\u538B\u5165\u3001\u5F39\u51FA\u5E8F\u5217         
    \u9898\u76EE:\u8F93\u5165\u4E24\u4E2A\u6574\u6570\u5E8F\u5217,\u7B2C\u4E00\u4E2A\u5E8F\u5217\u8868\u793A\u6808\u7684\u538B\u5165\u987A\u5E8F,\u8BF7\u5224\u65AD\u7B2C\u4E8C\u4E2A\u5E8F\u5217\u662F 
    \u5426\u4E3A\u8BE5\u6808\u7684\u5F39\u51FA\u5E8F\u5217\u3002\u5047\u8BBE\u538B\u5165\u6808\u7684\u6240\u6709\u6570\u5B57\u5747\u4E0D\u76F8\u7B49\u3002
    \u4F8B\u5982\u538B\u6808\u5E8F\u5217\u4E3A 1\u30012\u30013\u30014\u30015.\u5E8F\u5217 4\u30015\u30013\u30012\u30011 \u662F\u538B\u6808\u5E8F\u5217\u5BF9\u5E94\u7684\u4E00\u4E2A
    \u5F39\u51FA\u5E8F\u5217,\u4F46 4\u30013\u30015\u30011\u30012 \u5374\u4E0D\u662F\u3002        
    \u601D\u8DEF: \u8FD9\u9053\u9898\u6211\u5B8C\u5168\u6CA1\u770B\u61C2\uFF0C\u770B\u5B8C\u540E\u5B9E\u5728\u4E0D\u7406\u89E3\u662F\u4EC0\u4E48\u610F\u601D\u3002 - -\uFF01\u641C\u4E86\u5F88\u4E45\u624D\u5F04\u660E\u767D\u3002
    \u4EC0\u4E48\u4E8B\u5BF9\u5E94\u7684\u5F39\u51FA\u5E8F\u5217\u5462\uFF1F \u5C31\u662F\u8FD9\u4E2A\u5165\u6808\u540E\u6240\u6709\u7684\u53EF\u80FD\u5F39\u51FA\u7684\u65B9\u5F0F\u3002\u6BD4\u5982\u6211\u53EF\u4EE5\u5B8C\u5168\u6309\u71671\u30012\u30013\u30014\u30015
    \u7684\u65B9\u5F0F\u53BB\u653E\u5165\uFF0C\u7136\u540E\u53D6\u51FA\u5C31\u662F5\u30014\u30013\u30012\u30011\uFF0C\u4E5F\u53EF\u4EE5\u57281\u30012
    \u8FDB\u5165\u7684\u65F6\u5019\u5148\u628A2\u5F39\u51FA\uFF0C\u7136\u540E\u518D\u7EE7\u7EED\u6DFB\u52A03\u30014\u30015\uFF0C\u8FD9\u6837\u7684\u5F39\u51FA\u987A\u5E8F\u5C31\u662F2\u30015\u30014\u30013\u30011\u3002
    \u4F46\u662F\u4E3A\u4EC0\u4E484\u30013\u30015\u30011\u30012\u662F\u4E0D\u5BF9\u7684\u5462\uFF1F \u8FD9\u662F\u56E0\u4E3A1\u30012\u30013\u30014\u6DFB\u52A0\u8FDB\u5165\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5148\u5F39\u51FA
    4\u7136\u540E\u518D\u5F39\u51FA3\uFF0C\u56E0\u4E3A\u4EE5\u540E\u8981\u5F395\uFF0C\u6240\u4EE5\u6211\u4EEC\u5FC5\u987B\u7EE7\u7EED\u6DFB\u52A05\uFF0C\u8FD9\u6837\u6808\u5185\u5C31\u5269\u4E0B\u4E861\u30012\u30015\uFF0C\u7136\u540E\u6211\u4EEC\u518D
    \u5F80\u5916\u5F39\u51FA\u5C31\u53EA\u80FD\u662F5\u30012\u30011\uFF0C\u4E5F\u5C31\u662F\u4ED6\u7684\u987A\u5E8F\u53EA\u80FD\u662F4\u30013\u30015\u30012\u30011\u3002        
    \u90A3\u600E\u4E48\u5224\u65AD\u5462\uFF1F \u5982\u679C\u4E0B\u4E00\u4E2A\u5F39\u51FA\u7684\u6570\u5B57\u521A\u597D\u662F\u6808\u9876\u6570\u5B57\uFF0C\u90A3\u4E48\u76F4\u63A5\u5F39\u51FA\u3002
    \u5982\u679C\u4E0B\u4E00\u4E2A\u5F39\u51FA\u7684\u6570\u5B57\u4E0D\u5728\u6808\u9876\uFF0C\u6211\u4EEC\u628A\u538B\u6808\u5E8F\u5217\u4E2D\u8FD8\u6CA1\u6709\u5165\u6808\u7684\u6570\u5B57\u538B\u5165\u8F85\u52A9\u6808\uFF0C
    \u76F4\u5230\u628A\u4E0B\u4E00\u4E2A\u9700\u8981\u5F39\u51FA\u7684\u6570\u5B57\u538B\u5165\u6808\u9876\u4E3A\u6B62\u3002\u5982\u679C\u6240\u6709\u7684\u6570\u5B57\u90FD\u538B\u5165\u6808\u4E86\u4ECD\u6CA1\u6709
    \u627E\u5230\u4E0B\u4E00\u4E2A\u5F39\u51FA\u7684\u6570\u5B57\uFF0C\u90A3\u4E48\u8BE5\u5E8F\u5217\u4E0D\u53EF\u80FD\u662F\u4E00\u4E2A\u5F39\u51FA\u5E8F\u5217\u3002
    \`\`\`java
    public class PopOrderTest {
        public static void main(String[] args) {
    		int[] array1 = { 1, 2, 3, 4, 5 };
    		int[] array2 = { 4, 3, 5, 1, 2 };
    		System.out.println(isPopOrder(array1, array2));
    	}
    
    	public static boolean isPopOrder(int[] line1, int[] line2) {
    		if (line1 == null || line2 == null) {
    			return false;
    		}
    		int index = 0;
    		// \u628Aline1\u4E2D\u7684\u5143\u7D20\u90FD\u52A0\u5165\u8BE5\u6808
    		Stack&lt;Integer&gt; stack = new Stack&lt;Integer&gt;();
    		for (int i = 0; i &lt; line2.length; i++) {
    			if (!stack.isEmpty() &amp;&amp; stack.peek() == line2[i]) {
    				// \u8981\u53D6\u51FA\u7684\u5143\u7D20\u6B63\u597D\u662F\u6808\u9876\u7684\u5143\u7D20\uFF0C\u5C31\u76F4\u63A5\u53D6\u51FA\u3002
    				stack.pop();
    			} else {
    				if (index == line1.length) {
    					// line1\u7684\u5143\u7D20\u5DF2\u7ECF\u5168\u90E8\u52A0\u5165\u6808\u4E2D\uFF0C\u4E14\u8981\u53D6\u51FA\u7684\u5143\u7D20\u4ECD\u7136\u4E0D\u662F\u6808\u9876\u7684\u5143\u7D20\uFF0C\u90A3\u5C31\u8BF4\u660Eline1\u4E2D\u4E0D\u5305\u542B\u8981\u53D6\u51FA\u7684\u5143\u7D20\u3002\u76F4\u63A5\u8FD4\u56DEfalse
    					return false;
    				} else {
    					// \u53EA\u8981\u8981\u53D6\u51FA\u7684\u5143\u7D20\u4E0D\u662F\u6808\u9876\u7684\uFF0C\u5C31\u4E00\u76F4\u5F80\u6808\u91CC\u9762\u52A0
    					do {
    						stack.push(line1[index++]);
    					} while (stack.peek() != line2[i] &amp;&amp; index != line1.length);
    					
    					if (stack.peek() == line2[i]) {
    						stack.pop();
    					} else {
    						return false;
    					}
    				}
    			}
    		}
    		return true;
    	}
    }
    \`\`\`
23. \u4ECE\u4E0A\u5F80\u4E0B\u6253\u5370\u4E8C\u53C9\u6811         
    \u4ECE\u4E0A\u5F80\u4E0B\u6253\u5370\u4E8C\u53C9\u6811\u7684\u6BCF\u4E2A\u7ED3\u70B9\uFF0C\u540C\u4E00\u5C42\u7684\u7ED3\u70B9\u6309\u7167\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u6253\u5370\u3002      
    \u601D\u8DEF: \u6BCF\u4E00\u6B21\u6253\u5370\u4E00\u4E2A\u7ED3\u70B9\u7684\u65F6\u5019\uFF0C\u5982\u679C\u8BE5\u7ED3\u70B9\u6709\u5B50\u8282\u70B9\uFF0C\u628A\u8BE5\u7ED3\u70B9\u7684\u5B50\u8282\u70B9\u653E\u5230\u4E00\u4E2A\u961F\u5217\u7684\u5C3E\u3002\u63A5\u4E0B\u6765\u5230\u961F\u5217\u7684\u5934\u90E8\u53D6\u51FA\u6700\u65E9\u8FDB\u5165\u961F\u5217\u7684\u7ED3\u70B9\uFF0C\u91CD\u590D\u524D\u9762\u6253\u5370\u64CD\u4F5C\uFF0C\u76F4\u5230\u961F\u5217\u4E2D\u6240\u6709\u7684\u7ED3\u70B9\u90FD\u88AB\u6253\u5370\u51FA\u4E3A\u6B62\u3002
    \`\`\`java
    public class Problem23 {
        public static void main(String args[]) {
    		BinaryTreeNode root1 = new BinaryTreeNode();
    		BinaryTreeNode node1 = new BinaryTreeNode();
    		BinaryTreeNode node2 = new BinaryTreeNode();
    		BinaryTreeNode node3 = new BinaryTreeNode();
    		BinaryTreeNode node4 = new BinaryTreeNode();
    		BinaryTreeNode node5 = new BinaryTreeNode();
    		BinaryTreeNode node6 = new BinaryTreeNode();
    
    		root1.leftNode = node1;
    		root1.rightNode = node2;
    		node1.leftNode = node3;
    		node1.rightNode = node4;
    		node4.leftNode = node5;
    		node4.rightNode = node6;
    		root1.value = 8;
    		node1.value = 8;
    		node2.value = 7;
    		node3.value = 9;
    		node4.value = 2;
    		node5.value = 4;
    		node6.value = 7;
    
    		Problem23 test = new Problem23();
    		test.printFromTopToBottom(root1);
    	}
    
    	public void printFromTopToBottom(BinaryTreeNode root) {
    		if (root == null)
    			return;
    		Queue&lt;BinaryTreeNode&gt; queue = new LinkedList&lt;BinaryTreeNode&gt;();
    		queue.add(root);
    		while (!queue.isEmpty()) {
    			BinaryTreeNode node = queue.poll();
    			System.out.print(node.value);
    			if (node.leftNode != null) {
    				queue.add(node.leftNode);
    			}
    			if (node.rightNode != null) {
    				queue.add(node.rightNode);
    			}
    		}
    	}
    }
    
    class BinaryTreeNode {
    	public int value;
    	public BinaryTreeNode leftNode;
    	public BinaryTreeNode rightNode;
    
    	public BinaryTreeNode() {
    
    	}
    
    	public BinaryTreeNode(int value) {
    		this.value = value;
    		this.leftNode = null;
    		this.rightNode = null;
    	}
    }
    \`\`\`


---

- \u90AE\u7BB1 \uFF1Acharon.chui@gmail.com  
- Good Luck! 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[i];function p(c,o){return s(),a("div",null,l)}var d=n(e,[["render",p],["__file","\u5251\u6307Offer(\u4E0A).html.vue"]]);export{d as default};
