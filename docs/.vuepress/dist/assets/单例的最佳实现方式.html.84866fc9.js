import{_ as n,o as s,c as a,e}from"./app.89e8a229.js";const t={},c=e(`<h1 id="\u5355\u4F8B\u7684\u6700\u4F73\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u7684\u6700\u4F73\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u7684\u6700\u4F73\u5B9E\u73B0\u65B9\u5F0F</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,4),o=[c];function l(i,p){return s(),a("div",null,o)}var d=n(t,[["render",l],["__file","\u5355\u4F8B\u7684\u6700\u4F73\u5B9E\u73B0\u65B9\u5F0F.html.vue"]]);export{d as default};
