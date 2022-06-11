import{_ as n,o as s,c as a,e}from"./app.89e8a229.js";const t={},p=e(`<h1 id="hashmap\u5B9E\u73B0\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#hashmap\u5B9E\u73B0\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> HashMap\u5B9E\u73B0\u539F\u7406\u5206\u6790</h1><p><code>HashMap</code>\u4E3B\u8981\u662F\u7528\u6570\u7EC4\u6765\u5B58\u50A8\u6570\u636E\u7684\uFF0C\u6211\u4EEC\u90FD\u77E5\u9053\u5B83\u4F1A\u5BF9<code>key</code>\u8FDB\u884C\u54C8\u5E0C\u8FD0\u7B97\uFF0C\u54C8\u7CFB\u8FD0\u7B97\u4F1A\u6709\u91CD\u590D\u7684\u54C8\u5E0C\u503C\uFF0C\u5BF9\u4E8E\u54C8\u5E0C\u503C\u7684\u51B2\u7A81\uFF0C<code>HashMap</code>\u91C7\u7528\u94FE\u8868\u6765\u89E3\u51B3\u7684\u3002 <code>\u5728HashMap</code>\u91CC\u6709\u8FD9\u6837\u7684\u4E00\u53E5\u5C5E\u6027\u58F0\u660E:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">transient</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> table<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230<code>Map</code>\u662F\u901A\u8FC7\u6570\u7EC4\u7684\u65B9\u5F0F\u6765\u50A8\u5B58<code>Entry</code>\u90A3<code>Entry</code>\u662F\u795E\u9A6C\u5462\uFF1F\u5C31\u662F<code>HashMap</code>\u5B58\u50A8\u6570\u636E\u6240\u7528\u7684\u7C7B\uFF0C\u5B83\u62E5\u6709\u7684\u5C5E\u6027\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Entry</span> <span class="token keyword">implements</span> <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span> <span class="token punctuation">{</span>
	<span class="token keyword">final</span> <span class="token class-name">K</span> key<span class="token punctuation">;</span>
	<span class="token class-name">V</span> value<span class="token punctuation">;</span>
	<span class="token class-name">Entry</span> next<span class="token punctuation">;</span>
	<span class="token keyword">final</span> <span class="token keyword">int</span> hash<span class="token punctuation">;</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token comment">//More code goes here</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u5230<code>next</code>\u4E86\u5417\uFF1F<code>next</code>\u5C31\u662F\u4E3A\u4E86\u54C8\u5E0C\u51B2\u7A81\u800C\u5B58\u5728\u7684\u3002\u6BD4\u5982\u901A\u8FC7\u54C8\u5E0C\u8FD0\u7B97\uFF0C\u4E00\u4E2A\u65B0\u5143\u7D20\u5E94\u8BE5\u5728\u6570\u7EC4\u7684\u7B2C10\u4E2A\u4F4D\u7F6E\uFF0C\u4F46\u662F\u7B2C10\u4E2A\u4F4D\u7F6E\u5DF2\u7ECF\u6709Entry\uFF0C\u90A3\u4E48\u597D\u5427\uFF0C \u5C06\u65B0\u52A0\u7684\u5143\u7D20\u4E5F\u653E\u5230\u7B2C10\u4E2A\u4F4D\u7F6E\uFF0C\u5C06\u7B2C10\u4E2A\u4F4D\u7F6E\u7684\u539F\u6709<code>Entry</code>\u8D4B\u503C\u7ED9\u5F53\u524D\u65B0\u52A0\u7684<code>Entry</code>\u7684<code>next</code>\u5C5E\u6027\u3002\u6570\u7EC4\u5B58\u50A8\u7684\u662F\u94FE\u8868\uFF0C\u94FE\u8868\u662F\u4E3A\u4E86\u89E3\u51B3\u54C8\u5E0C\u51B2\u7A81\u7684\uFF0C\u8FD9\u4E00\u70B9\u8981\u6CE8\u610F\u3002</p><p>\u597D\u4E86\uFF0C\u603B\u7ED3\u4E00\u4E0B:</p><ul><li><code>HashMap</code>\u4E2D\u6709\u4E00\u4E2A\u53EB<code>table</code>\u7684<code>Entry</code>\u6570\u7EC4\u3002</li><li>\u8FD9\u4E2A\u6570\u7EC4\u5B58\u50A8\u4E86<code>Entry</code>\u7C7B\u7684\u5BF9\u8C61\u3002<code>HashMap</code>\u7C7B\u6709\u4E00\u4E2A\u53EB\u505A<code>Entry</code>\u7684\u5185\u90E8\u7C7B\u3002\u8FD9\u4E2A<code>Entry</code>\u7C7B\u5305\u542B\u4E86<code>key-value</code>\u4F5C\u4E3A\u5B9E\u4F8B\u53D8\u91CF\u3002</li><li>\u6BCF\u5F53\u5F80<code>Hashmap</code>\u91CC\u9762\u5B58\u653E<code>key-value</code>\u5BF9\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u4E3A\u5B83\u4EEC\u5B9E\u4F8B\u5316\u4E00\u4E2A<code>Entry</code>\u5BF9\u8C61\uFF0C\u8FD9\u4E2A<code>Entry</code>\u5BF9\u8C61\u5C31\u4F1A\u5B58\u50A8\u5728\u524D\u9762\u63D0\u5230\u7684<code>Entry</code>\u6570\u7EC4<code>table</code>\u4E2D\u3002 \u73B0\u5728\u4F60\u4E00\u5B9A\u5F88\u60F3\u77E5\u9053\uFF0C\u4E0A\u9762\u521B\u5EFA\u7684<code>Entry</code>\u5BF9\u8C61\u5C06\u4F1A\u5B58\u653E\u5728\u5177\u4F53\u54EA\u4E2A\u4F4D\u7F6E(\u5728<code>table</code>\u4E2D\u7684\u7CBE\u786E\u4F4D\u7F6E)\u3002\u7B54\u6848\u5C31\u662F\uFF0C\u6839\u636E<code>key</code>\u7684<code>hashcode()</code>\u65B9\u6CD5\u8BA1\u7B97\u51FA\u6765\u7684<code>hash</code>\u503C\u6765\u51B3\u5B9A\u3002 <code>hash</code>\u503C\u7528\u6765\u8BA1\u7B97<code>key</code>\u5728<code>Entry</code>\u6570\u7EC4\u7684\u7D22\u5F15\u3002</li><li>\u6211\u4EEC\u5F80<code>hashmap</code>\u653E\u4E864\u4E2A<code>key-value</code>\u5BF9\uFF0C\u4F46\u662F\u6709\u65F6\u5019\u770B\u4E0A\u53BB\u597D\u50CF\u53EA\u67092\u4E2A\u5143\u7D20\uFF01\uFF01\uFF01\u8FD9\u662F\u56E0\u4E3A\uFF0C\u5982\u679C\u4E24\u4E2A\u5143\u7D20\u6709\u76F8\u540C\u7684<code>hashcode</code>\uFF0C\u5B83\u4EEC\u4F1A\u88AB\u653E\u5728\u540C\u4E00\u4E2A\u7D22\u5F15\u4E0A\u3002 \u95EE\u9898\u51FA\u73B0\u4E86\uFF0C\u8BE5\u600E\u4E48\u653E\u5462\uFF1F\u539F\u6765\u5B83\u662F\u4EE5\u94FE\u8868<code>(LinkedList)</code>\u7684\u5F62\u5F0F\u6765\u5B58\u50A8\u7684\u3002</li></ul><p>\u63A5\u4E0B\u6765\u770B\u4E00\u4E0B<code>put</code>\u65B9\u6CD5:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
* Associates the specified value with the specified key in this map. If the
* map previously contained a mapping for the key, the old value is
* replaced.
*
* <span class="token keyword">@param</span> <span class="token parameter">key</span>
*            key with which the specified value is to be associated
* <span class="token keyword">@param</span> <span class="token parameter">value</span>
*            value to be associated with the specified key
* <span class="token keyword">@return</span> the previous value associated with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">key</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span>, or <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token keyword">null</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span>
*         if there was no mapping for <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">key</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span>. (A <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token keyword">null</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span> return
*         can also indicate that the map previously associated
*         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token keyword">null</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span> with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">key</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span>.)
*/</span>
<span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9key\u505Anull\u68C0\u67E5\u3002\u5982\u679Ckey\u662Fnull\uFF0C\u4F1A\u88AB\u5B58\u50A8\u5230table[0]\uFF0C\u56E0\u4E3Anull\u7684hash\u503C\u603B\u662F0\u3002</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token function">putForNullKey</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// \u8BA1\u7B97key\u7684hash\u503C,hash\u503C\u7528\u6765\u627E\u5230\u5B58\u50A8Entry\u5BF9\u8C61\u7684\u6570\u7EC4\u7684\u7D22\u5F15\u3002\u6709\u65F6\u5019hash\u51FD\u6570\u53EF\u80FD\u5199\u7684\u5F88\u4E0D\u597D\uFF0C\u6240\u4EE5JDK\u7684\u8BBE\u8BA1\u8005\u6DFB\u52A0\u4E86\u53E6\u4E00\u4E2A\u53EB\u505Ahash()\u7684\u65B9\u6CD5\uFF0C\u5B83\u63A5\u6536\u521A\u624D\u8BA1\u7B97\u7684hash\u503C\u4F5C\u4E3A\u53C2\u6570	</span>
	<span class="token keyword">int</span> hash <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// indexFor(hash,table.length)\u7528\u6765\u8BA1\u7B97\u5728table\u6570\u7EC4\u4E2D\u5B58\u50A8Entry\u5BF9\u8C61\u7684\u7CBE\u786E\u7684\u7D22\u5F15</span>
	<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span>k <span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token comment">// \u5982\u679C\u8FD9\u4E2A\u4F4D\u7F6E\u5DF2\u7ECF\u6709\u4E86(\u4E5F\u5C31\u662Fhash\u503C\u4E00\u6837)\u5C31\u7528\u94FE\u8868\u6765\u5B58\u4E86\u3002 \u5F00\u59CB\u8FED\u4EE3\u94FE\u8868</span>
		<span class="token class-name">Object</span> k<span class="token punctuation">;</span>
		<span class="token comment">// \u76F4\u5230Entry-&gt;next\u4E3Anull\uFF0C\u5C31\u628A\u5F53\u524D\u7684Entry\u5BF9\u8C61\u53D8\u6210\u94FE\u8868\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u3002</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		    <span class="token comment">// \u5982\u679C\u6211\u4EEC\u518D\u6B21\u653E\u5165\u540C\u6837\u7684key\u4F1A\u600E\u6837\u5462\uFF1F\u5B83\u4F1A\u66FF\u6362\u8001\u7684value\u3002\u5728\u8FED\u4EE3\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u8C03\u7528equals()\u65B9\u6CD5\u6765\u68C0\u67E5key\u7684\u76F8\u7B49\u6027(key.equals(k))\uFF0C</span>
			<span class="token comment">// \u5982\u679C\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DEtrue\uFF0C\u5B83\u5C31\u4F1A\u7528\u5F53\u524DEntry\u7684value\u6765\u66FF\u6362\u4E4B\u524D\u7684value\u3002</span>
			<span class="token class-name">V</span> oldValue <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
			e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
			e<span class="token punctuation">.</span><span class="token function">recordAccess</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u5982\u679C\u8BA1\u7B97\u51FA\u6765\u7684\u7D22\u5F15\u4F4D\u7F6E\u6CA1\u6709\u5143\u7D20\uFF0C\u5C31\u76F4\u63A5\u628AEntry\u5BF9\u8C61\u653E\u5230\u90A3\u4E2A\u7D22\u5F15\u4E0A\u3002</span>
	modCount<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token function">addEntry</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u770B\u4E00\u4E0B<code>get</code>\u65B9\u6CD5:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * Returns the value to which the specified key is mapped, or <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token keyword">null</span></span></span><span class="token punctuation">}</span>
  * if this map contains no mapping for the key.
  *
  * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  * More formally, if this map contains a mapping from a key <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">k</span></span><span class="token punctuation">}</span> to a
  * value <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">v</span></span><span class="token punctuation">}</span> such that <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token punctuation">(</span>key<span class="token operator">==</span><span class="token keyword">null</span> <span class="token operator">?</span> k<span class="token operator">==</span><span class="token keyword">null</span> <span class="token operator">:</span></span>
  * <span class="token code language-java">key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">}</span>, then this method returns <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">v</span></span><span class="token punctuation">}</span>; otherwise it returns
  * <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token keyword">null</span></span></span><span class="token punctuation">}</span>. (There can be at most one such mapping.)
  *
  * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  * A return value of <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token keyword">null</span></span></span><span class="token punctuation">}</span> does not <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>necessarily<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> indicate that
  * the map contains no mapping for the key; it&#39;s also possible that the map
  * explicitly maps the key to <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token keyword">null</span></span></span><span class="token punctuation">}</span>. The <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">containsKey</span></span>
  * containsKey<span class="token punctuation">}</span> operation may be used to distinguish these two cases.
  *
  * <span class="token keyword">@see</span> <span class="token reference"><span class="token punctuation">#</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">)</span></span>
  */</span>
<span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679Ckey\u662Fnull\uFF0Ctable[0]\u8FD9\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\u5C06\u88AB\u8FD4\u56DE\u3002</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token function">getForNullKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// \u8BA1\u7B97hash\u503C</span>
	<span class="token keyword">int</span> hash <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// indexFor(hash,table.length)\u7528\u6765\u8BA1\u7B97\u8981\u83B7\u53D6\u7684Entry\u5BF9\u8C61\u5728table\u6570\u7EC4\u4E2D\u7684\u7CBE\u786E\u7684\u4F4D\u7F6E\uFF0C\u4F7F\u7528\u521A\u624D\u8BA1\u7B97\u7684hash\u503C\u3002</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span>k <span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span><span class="token function">indexFor</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Object</span> k<span class="token punctuation">;</span>
		<span class="token comment">// \u5728\u83B7\u53D6\u4E86table\u6570\u7EC4\u7684\u7D22\u5F15\u4E4B\u540E\uFF0C\u4F1A\u8FED\u4EE3\u94FE\u8868\uFF0C\u8C03\u7528equals()\u65B9\u6CD5\u68C0\u67E5key\u7684\u76F8\u7B49\u6027\uFF0C\u5982\u679Cequals()\u65B9\u6CD5\u8FD4\u56DEtrue\uFF0Cget\u65B9\u6CD5\u8FD4\u56DEEntry\u5BF9\u8C61\u7684value\uFF0C\u5426\u5219\uFF0C\u8FD4\u56DEnull\u3002</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    		<span class="token keyword">return</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3:</p><ul><li><code>HashMap</code>\u6709\u4E00\u4E2A\u53EB\u505A<code>Entry</code>\u7684\u5185\u90E8\u7C7B\uFF0C\u5B83\u7528\u6765\u5B58\u50A8<code>key-value</code>\u5BF9\u3002</li><li>\u4E0A\u9762\u7684<code>Entry</code>\u5BF9\u8C61\u662F\u5B58\u50A8\u5728\u4E00\u4E2A\u53EB\u505A<code>table</code>\u7684<code>Entry</code>\u6570\u7EC4\u4E2D\u3002</li><li><code>table</code>\u7684\u7D22\u5F15\u5728\u903B\u8F91\u4E0A\u53EB\u505A\u201C\u6876\u201D<code>(bucket)</code>\uFF0C\u5B83\u5B58\u50A8\u4E86\u94FE\u8868\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002</li><li><code>key</code>\u7684<code>hashcode()</code>\u65B9\u6CD5\u7528\u6765\u627E\u5230<code>Entry</code>\u5BF9\u8C61\u6240\u5728\u7684\u6876\u3002</li><li>\u5982\u679C\u4E24\u4E2A<code>key</code>\u6709\u76F8\u540C\u7684<code>hash</code>\u503C\uFF0C\u4ED6\u4EEC\u4F1A\u88AB\u653E\u5728<code>table</code>\u6570\u7EC4\u7684\u540C\u4E00\u4E2A\u6876\u91CC\u9762\u3002</li><li><code>key</code>\u7684<code>equals()</code>\u65B9\u6CD5\u7528\u6765\u786E\u4FDD<code>key</code>\u7684\u552F\u4E00\u6027\u3002</li><li><code>value</code>\u5BF9\u8C61\u7684<code>equals()</code>\u548C<code>hashcode()</code>\u65B9\u6CD5\u6839\u672C\u4E00\u70B9\u7528\u4E5F\u6CA1\u6709\u3002</li></ul><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,16),o=[p];function c(l,i){return s(),a("div",null,o)}var k=n(t,[["render",c],["__file","HashMap\u5B9E\u73B0\u539F\u7406\u5206\u6790.html.vue"]]);export{k as default};
