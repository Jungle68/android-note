import{_ as n,o as s,c as a,e as t}from"./app.89e8a229.js";const p={},e=t(`<h1 id="\u5F00\u53D1\u4E2Dlog\u7684\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u4E2Dlog\u7684\u7BA1\u7406" aria-hidden="true">#</a> \u5F00\u53D1\u4E2DLog\u7684\u7BA1\u7406</h1><p><strong>LogUtil</strong>\u662F\u4E00\u4E2A\u7BA1\u7406<code>Log</code>\u6253\u5370\u7684\u5DE5\u5177\u7C7B\u3002\u5728\u5F00\u53D1\u7684\u4E0D\u540C\u9636\u6BB5\u4E2D\u901A\u8FC7\u5BF9\u8BE5\u7C7B\u7684\u63A7\u5236\u6765\u5B9E\u73B0\u4E0D\u540C\u7EA7\u522B<code>Log</code>\u7684\u6253\u5370\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogUtil</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> VERBOSE <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEBUG <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> INFO <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> WARN <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> ERROR <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/** \u901A\u8FC7\u6539\u53D8\u8BE5\u503C\u6765\u8FDB\u884C\u4E0D\u540C\u7EA7\u522B\u7684Log\u6253\u5370\uFF0C\u4E0A\u7EBF\u7684\u65F6\u5C06\u8BE5\u503C\u6539\u4E3A0\u6765\u5173\u95ED\u6240\u6709log\u6253\u5370 */</span>
	<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">int</span> LOG_LEVEL <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">v</span><span class="token punctuation">(</span><span class="token class-name">String</span> tag<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>LOG_LEVEL <span class="token operator">&gt;</span> VERBOSE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">v</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">d</span><span class="token punctuation">(</span><span class="token class-name">String</span> tag<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>LOG_LEVEL <span class="token operator">&gt;</span> DEBUG<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">i</span><span class="token punctuation">(</span><span class="token class-name">String</span> tag<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>LOG_LEVEL <span class="token operator">&gt;</span> INFO<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">i</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">w</span><span class="token punctuation">(</span><span class="token class-name">String</span> tag<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>LOG_LEVEL <span class="token operator">&gt;</span> WARN<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">w</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token class-name">String</span> tag<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>LOG_LEVEL <span class="token operator">&gt;</span> ERROR<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">e</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,5),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","\u5F00\u53D1\u4E2DLog\u7684\u7BA1\u7406.html.vue"]]);export{k as default};
