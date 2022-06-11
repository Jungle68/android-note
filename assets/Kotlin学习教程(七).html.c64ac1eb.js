import{_ as n,o as a,c as s,e as t}from"./app.e2a3b496.js";const e={},o=t(`<h1 id="kotlin\u5B66\u4E60\u6559\u7A0B-\u4E03" tabindex="-1"><a class="header-anchor" href="#kotlin\u5B66\u4E60\u6559\u7A0B-\u4E03" aria-hidden="true">#</a> Kotlin\u5B66\u4E60\u6559\u7A0B(\u4E03)</h1><p>\u8FD9\u7BC7\u6587\u7AE0\u4E3B\u8981\u5B66\u4E60\u4E0B<code>lambda</code>\u8868\u8FBE\u5F0F\u3002\u56E0\u4E3A\u540E\u7EED\u4E00\u4E9B\u4F8B\u5B50\u4F1A\u7528\u5230\u3002</p><blockquote><p>\u201CLambda \u8868\u8FBE\u5F0F\u201D(lambda expression)\u662F\u4E00\u4E2A\u533F\u540D\u51FD\u6570\uFF0CLambda\u8868\u8FBE\u5F0F\u57FA\u4E8E\u6570\u5B66\u4E2D\u7684\u03BB\u6F14\u7B97\u5F97\u540D\uFF0C\u76F4\u63A5\u5BF9\u5E94\u4E8E\u5176\u4E2D\u7684lambda\u62BD\u8C61(lambda abstraction)\uFF0C\u662F\u4E00\u4E2A\u533F\u540D\u51FD\u6570\uFF0C\u5373\u6CA1\u6709\u51FD\u6570\u540D\u7684\u51FD\u6570\u3002Lambda\u8868\u8FBE\u5F0F\u53EF\u4EE5\u8868\u793A\u95ED\u5305\uFF08\u6CE8\u610F\u548C\u6570\u5B66\u4F20\u7EDF\u610F\u4E49\u4E0A\u7684\u4E0D\u540C\uFF09\u3002</p></blockquote><p><code>Java 8</code>\u7684\u4E00\u4E2A\u5927\u4EAE\u70B9\u662F\u5F15\u5165<code>Lambda</code>\u8868\u8FBE\u5F0F\uFF0C\u4F7F\u7528\u5B83\u8BBE\u8BA1\u7684\u4EE3\u7801\u4F1A\u66F4\u52A0\u7B80\u6D01\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6CA1\u6709\u4F7F\u7528Lambda\u7684\u8001\u65B9\u6CD5:   </span>
button<span class="token punctuation">.</span><span class="token function">addActionListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ActionListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">actionPerformed</span><span class="token punctuation">(</span><span class="token class-name">ActionEvent</span> ae<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Actiondetected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4F7F\u7528Lambda:  </span>
button<span class="token punctuation">.</span><span class="token function">addActionListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span> 
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Actiondetected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// \u4E0D\u91C7\u7528Lambda\u7684\u8001\u65B9\u6CD5: </span>
<span class="token class-name">Runnable</span> runnable1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;RunningwithoutLambda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u4F7F\u7528Lambda:   </span>
<span class="token class-name">Runnable</span> runnable2<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;RunningfromLambda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Lambda</code>\u80FD\u8BA9\u4EE3\u7801\u66F4\u7B80\u6D01\uFF0C\u800C\u4E3B\u6253\u7B80\u6D01\u7684<code>Kotlin</code>\u600E\u4E48\u53EF\u80FD\u4E0D\u652F\u6301\u5462\uFF1F \u5F53\u7136\u4F1A\u652F\u6301\u3002</p><p>\u4E0B\u9762\u6765\u770B\u770B\u4E00\u4E2A\u7B80\u77ED\u7684\u6982\u8FF0:</p><ul><li><code>lambda</code>\u8868\u8FBE\u5F0F\u603B\u662F\u88AB\u5927\u62EC\u53F7\u62EC\u7740</li><li>\u5176\u53C2\u6570(\u5982\u679C\u6709\u7684\u8BDD)\u5728<code>-&gt;</code>\u4E4B\u524D\u58F0\u660E(\u53C2\u6570\u7C7B\u578B\u53EF\u4EE5\u7701\u7565)\uFF0C</li><li>\u51FD\u6570\u4F53(\u5982\u679C\u5B58\u5728\u7684\u8BDD)\u5728<code>-&gt;</code>\u540E\u9762\u3002</li></ul><p><code>Lambda</code>\u8868\u8FBE\u5F0F\u662F\u5B9A\u4E49\u533F\u540D\u51FD\u6570\u7684\u7B80\u5355\u65B9\u6CD5\u3002\u7531\u4E8E<code>Lambda</code>\u8868\u8FBE\u5F0F\u907F\u514D\u5728\u62BD\u8C61\u7C7B\u6216\u63A5\u53E3\u4E2D\u7F16\u5199\u660E\u786E\u7684\u51FD\u6570\u58F0\u660E\uFF0C\u8FDB\u800C\u4E5F\u907F\u514D\u4E86\u7C7B\u7684\u5B9E\u73B0\u90E8\u5206\uFF0C\u6240\u4EE5\u5B83\u662F\u975E\u5E38\u6709\u7528\u7684\u3002 \u5728<code>Kotlin</code>\u8BED\u8A00\u4E2D\uFF0C\u53EF\u4EE5\u5C06\u4E00\u51FD\u6570\u4F5C\u4E3A\u53E6\u4E00\u51FD\u6570\u7684\u53C2\u6570\u3002</p><p><code>Lambda</code>\u8868\u8FBE\u5F0F\u7531\u7BAD\u5934\u5DE6\u4FA7\u51FD\u6570\u7684\u53C2\u6570\uFF08\u5728\u5706\u62EC\u53F7\u91CC\u7684\u5185\u5BB9\uFF09\u5B9A\u4E49\u7684\uFF0C\u5C06\u503C\u8FD4\u56DE\u5230\u7BAD\u5934\u53F3\u4FA7\u3002 <code>view.setOnClickListener({ view -&gt; toast(&quot;Click&quot;)})</code> \u5728\u5B9A\u4E49\u51FD\u6570\u65F6\uFF0C\u5FC5\u987B\u5728\u7BAD\u5934\u7684\u5DE6\u4FA7\u7528\u65B9\u62EC\u53F7\uFF0C\u5E76\u6307\u5B9A\u53C2\u6570\u503C\uFF0C\u800C\u51FD\u6570\u7684\u6267\u884C\u4EE3\u7801\u5728\u7BAD\u5934\u53F3\u4FA7\u3002\u5982\u679C\u5DE6\u4FA7\u4E0D\u4F7F\u7528\u53C2\u6570\uFF0C\u751A\u81F3\u53EF\u4EE5\u7701\u53BB\u5DE6\u4FA7\u90E8\u5206:<br><code>view.setOnClickListener({ toast(&quot;Click&quot;) })</code> \u5982\u679C\u51FD\u6570\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u51FD\u6570\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5C06\u4F5C\u4E3A\u53C2\u6570\u7684\u51FD\u6570\u79FB\u5230\u5706\u62EC\u53F7\u5916\u9762: <code>view.setOnClickListener() { toast(&quot;Click&quot;) }</code></p><p>\u5148\u770B\u4E00\u4E2A\u4F8B\u5B50:</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token operator">:</span> String<span class="token punctuation">,</span> b<span class="token operator">:</span> String<span class="token punctuation">)</span><span class="token operator">:</span> Boolean <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
<span class="token function">max</span><span class="token punctuation">(</span>strings<span class="token punctuation">,</span> compare<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C31\u662F\u627E\u51FA<code>strings</code>\u91CC\u9762\u6700\u957F\u7684\u90A3\u4E2A\u3002\u4F46\u662F\u6211\u4E2A\u4EBA\u89C9\u5F97<code>compare</code>\u8FD8\u662F\u5F88\u788D\u773C\u7684\uFF0C\u56E0\u4E3A\u6211\u5E76\u4E0D\u60F3\u5728\u540E\u9762\u5F15\u7528\u4ED6\uFF0C\u90A3\u6211\u600E\u4E48\u529E\u5462\uFF0C\u5C31\u662F\u7528\u201C\u533F\u540D\u51FD\u6570\u201D\u65B9\u5F0F\u3002</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token function">max</span><span class="token punctuation">(</span>strings<span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>a<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>length<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>(a,b)-&gt;{a.length &lt; b.length}</code>\u5C31\u662F\u4E00\u4E2A\u6CA1\u6709\u540D\u5B57\u7684\u51FD\u6570\uFF0C\u76F4\u63A5\u4F5C\u4E3A\u53C2\u6570\u8D4B\u7ED9<code>max</code>\u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002\u4F46\u8FD9\u4E2A\u65B9\u6CD5\u6709\u5F88\u591A\u4E1C\u897F\u90FD\u6CA1\u6709\u5199\u660E\uFF0C\u5982:</p><ul><li>\u53C2\u6570\u7684\u7C7B\u578B</li><li>\u8FD4\u56DE\u503C\u7684\u7C7B\u578B</li></ul><p>\u4F46\u8FD9\u4E9B\u771F\u7684\u5FC5\u8981\u5417\uFF1F<code>a.length &lt; b.length</code>\u5F88\u660E\u663E\u8FD4\u56DE\u4E00\u4E2A<code>Boolean</code>\u7684\u503C\uFF0C\u518D\u5C31\u662F<code>max</code>\u7684\u5B9A\u4E49\u4E2D\u80AF\u5B9A\u4E5F\u5B9A\u4E49\u4E86\u8FD9\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u7C7B\u578B\u548C\u8FD4\u56DE\u503C\u7C7B\u578B\u3002\u8FD9\u4E48\u660E\u663E\u7684\u4E8B\u4E3A\u4EC0\u4E48\u4E0D\u8BA9\u8BA1\u7B97\u673A\u81EA\u5DF1\u53BB\u505A\u800C\u8981\u8BA9\u4EBA\u5199\u4EE3\u7801\u53BB\u505A\u5462\uFF1F\u8FD9\u5C31\u662F\u533F\u540D\u51FD\u6570\u7684\u597D\u5904\u4E86\u3002\u5230\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u548C<code>Lambda</code>\u5F88\u63A5\u8FD1\u4E86\u3002</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">val</span> sum<span class="token operator">:</span> <span class="token punctuation">(</span>Int<span class="token punctuation">,</span> Int<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> Int <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token operator">-&gt;</span> x <span class="token operator">+</span> y <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Lambda</code>\u8868\u8FBE\u5F0F\u5C31\u662F\u88AB\u5927\u62EC\u53F7\u62EC\u7740\u7684\u90A3\u4E00\u90E8\u5206\uFF0C\u5728<code>-&gt;</code>\u7B26\u53F7\u4E4B\u524D\u6709\u53C2\u6570\u58F0\u660E\uFF0C\u51FD\u6570\u4F53\u8DDF\u5728\u4E00\u4E2A<code>-&gt;</code>\u7B26\u53F7\u4E4B\u540E\u3002 \u800C\u4E14\u6B64<code>Lambda</code>\u8868\u8FBE\u5F0F\u4E4B\u524D\u6709\u4E00\u4E2A\u533F\u540D\u7684\u51FD\u6570\u58F0\u660E(\u5728\u6B64\u4F8B\u4E2D\u4E24\u4E2A<code>Int</code>\u578B\u7684\u8F93\u5165\uFF0C\u4E00\u4E2A<code>Int</code>\u578B\u7684\u8FD4\u56DE\u503C)\uFF0C\u8FD9\u4E2A\u58F0\u660E\u662F\u53EF\u4EE5\u4E0D\u4F7F\u7528\u7684\u3002 \u5219\u6B64<code>Lambda</code>\u8868\u8FBE\u5F0F\u53D8\u6210<code>val sum = { x: Int, y: Int -&gt; x + y }</code>\uFF0C\u6B64\u65F6<code>Lambda</code>\u8868\u8FBE\u5F0F\u4F1A\u6839\u636E\u4E3B\u4F53\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\uFF08\u6216\u53EF\u80FD\u662F\u5355\u4E2A\uFF09\u8868\u8FBE\u5F0F\u4F1A\u89C6\u4E3A\u8FD4\u56DE\u503C\u3002 \u5F53\u7136\uFF0C\u5728\u67D0\u4E9B\u7279\u5B9A\u60C5\u51B5\u4E0B\uFF0C<code>x</code>\u3001<code>y</code>\u7684\u7C7B\u578B\u4E86\u662F\u53EF\u4EE5\u63A8\u65AD\u7684\uFF0C\u6240\u4EE5<code>val sum = { x, y -&gt; x + y }</code>\u3002</p><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,21),p=[o];function c(l,i){return a(),s("div",null,p)}var d=n(e,[["render",c],["__file","Kotlin\u5B66\u4E60\u6559\u7A0B(\u4E03).html.vue"]]);export{d as default};
