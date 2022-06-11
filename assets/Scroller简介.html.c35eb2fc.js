import{_ as n,o as s,c as a,e}from"./app.e2a3b496.js";const c={},o=e(`<h1 id="scroller\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#scroller\u7B80\u4ECB" aria-hidden="true">#</a> Scroller\u7B80\u4ECB</h1><p>\u5728<code>SlidingMenu</code>\u9879\u76EE\u4E2D\u4E3A\u4E86\u5B9E\u73B0\u63A7\u4EF6\u7684\u6ED1\u52A8\uFF0C\u9700\u8981\u7528\u5230<code>Scroller</code>\u7C7B\u6765\u5B9E\u73B0\u7F13\u6162\u7684\u6ED1\u52A8\u8FC7\u7A0B\uFF0C\u81F3\u4E8E\u6709\u4EBA\u8BF4<code>View</code>\u7C7B\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528<code>scrollTo()</code>\u65B9\u6CD5\uFF0C \u8FD9\u91CC<code>scrollTo()</code>\u65B9\u6CD5\u4E5F\u80FD\u5B9E\u73B0\u79FB\u52A8\uFF0C\u4F46\u662F\u5B83\u7684\u79FB\u52A8\u662F\u5F88\u5FEB\u4E00\u4E0B\u5B50\u5C31\u79FB\u8FC7\u53BB\u4E86\uFF0C\u5C31\u50CF\u7A7F\u8D8A\u4E00\u6837\uFF0C\u76F4\u63A5\u4ECE\u73B0\u5B9E\u56DE\u5230\u4E86\u8FC7\u53BB\uFF0C\u800C<code>Scroller</code>\u7C7B\u80FD\u591F\u5B9E\u73B0\u8FC7\u7A0B\u7684\u79FB\u52A8\u3002 \u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u6B65\u6B65\u7684\u8D70\u3002</p><ol><li><p>\u67E5\u770BScroller\u6E90\u7801</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Scroller</span>  <span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D1\u73B0<code>Scroller</code>\u7C7B\u5E76\u4E0D\u662F<code>View</code>\u7684\u5B50\u7C7B\uFF0C\u53EA\u662F\u4E00\u4E2A\u666E\u901A\u7684\u7C7B\uFF0C\u8FD9\u4E2A\u7C7B\u4E2D\u5C01\u88C5\u4E86\u6EDA\u52A8\u7684\u64CD\u4F5C\uFF0C\u8BB0\u5F55\u4E86\u6EDA\u52A8\u7684\u4F4D\u7F6E\u4EE5\u53CA\u65F6\u95F4\u7B49\u3002<br> \u8BE5\u7C7B\u6709\u4E24\u4E2A\u91CD\u8981\u7684\u65B9\u6CD5\uFF1A</p><ul><li><code>computeScrollOffset()</code>:<br> \u6587\u6863\u7684\u8BF4\u660E\u4E3A<code>Call this when you want to know the new location.</code>\u67E5\u770B\u6E90\u7801\u53EF\u4EE5\u53D1\u73B0\uFF0C\u5982\u679C\u5728\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u540E\u5C31\u4F1A\u8FD4\u56DEfalse.\u6B63\u5728\u79FB\u52A8\u7684\u8FC7\u7A0B\u4E2D\u8FD4\u56DEtrue\u3002</li><li><code>startScroll()</code>:<br> \u8BE5\u65B9\u6CD5\u7684\u5185\u90E8\u5B9E\u73B0\uFF0C\u5E76\u6CA1\u6709\u5177\u4F53\u7684\u79FB\u52A8\u65B9\u6CD5\uFF0C\u800C\u662F\u8BBE\u7F6E\u4E86\u4E00\u4E9B\u79FB\u52A8\u6240\u9700\u7684\u6570\u636E\uFF0C\u5305\u62EC\u79FB\u52A8\u6301\u7EED\u7684\u65F6\u95F4\u3001\u5F00\u59CB\u4F4D\u7F6E\u3001\u7ED3\u675F\u4F4D\u7F6E\u7B49\u3002\u4ECE\u800C\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\u8C03\u7528<code>Scroller.startScroll()</code>\u65B9\u6CD5\u5E76\u6CA1\u6709\u771F\u6B63\u7684\u79FB\u52A8\uFF0C\u800C\u662F\u8BBE\u7F6E\u4E86\u4E00\u4E9B\u6570\u636E\u3002</li></ul></li><li><p><code>Scroller.startScoll()</code>\u662F\u5982\u4F55\u4E0E<code>View</code>\u7684\u79FB\u52A8\u76F8\u5173\u8054\u5462\uFF1F\u5728<code>View</code>\u7684\u6E90\u7801\u4E2D\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Called by a parent to request that a child update its values for mScrollX
 * and mScrollY if necessary. This will typically be done if the child is
 * animating a scroll using a <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">Scroller</span></span> Scroller<span class="token punctuation">}</span>
 * object.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">computeScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u6CE8\u91CA\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u8BE5\u65B9\u6CD5\u53C8\u7236\u7C7B\u8C03\u7528\u6839\u636E\u6EDA\u52A8\u7684\u503C\u53BB\u66F4\u65B0<code>View</code>\uFF0C\u5728\u4F7F\u7528<code>Scroller</code>\u7684\u65F6\u5019\u901A\u5E38\u90FD\u8981\u5B9E\u73B0\u8BE5\u65B9\u6CD5\u3002\u6765\u8FBE\u5230\u5B50<code>View</code>\u7684\u6EDA\u52A8\u6548\u679C\u3002<br> \u7EE7\u7EED\u5F80\u4E0B\u8DDF\u53D1\u73B0\u5728<code>draw()</code>\u65B9\u6CD5\u4E2D\u56DE\u53BB\u8C03\u7528<code>computeScroll()</code>\uFF0C\u800C<code>draw()</code>\u65B9\u6CD5\u4F1A\u5728\u7236\u5E03\u5C40\u8C03\u7528<code>drawChild()</code>\u7684\u65F6\u5019\u4F7F\u7528\u3002</p></li><li><p>\u5177\u4F53\u5173\u8054<br> \u901A\u8FC7\u4E0A\u9762\u4E24\u6B65\u5927\u4F53\u80FD\u5F97\u5230<code>Scroller</code>\u4E0E<code>View</code>\u7684\u79FB\u52A8\u8981\u901A\u8FC7<code>computeScroll()</code>\u6765\u5B8C\u6210\uFF0C\u4F46\u662F\u5728\u7A76\u7ADF\u5982\u4F55\u8FDB\u884C\u4EE3\u7801\u5B9E\u73B0\u3002<br><code>Scroller.startScroll()</code>\u65B9\u6CD5\u88AB\u8C03\u7528\u540E\u4F1A\u50A8\u5B58\u8981\u6EDA\u52A8\u7684\u8D77\u59CB\u4F4D\u7F6E\u3001\u7ED3\u675F\u4F4D\u7F6E\u3001\u6301\u7EED\u65F6\u95F4\u3002\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5728<code>computeScroll()</code>\u65B9\u6CD5\u4E2D\u53BB\u5224\u65AD\u4E00\u4E0B\u5F53\u524D\u662F\u5426\u5DF2\u7ECF\u6EDA\u52A8\u5B8C\u6210\uFF0C\u5982\u679C\u6CA1\u6709\u6EDA\u52A8\u5B8C\u6210\uFF0C \u6211\u4EEC\u5C31\u53BB\u4E0D\u65AD\u7684\u83B7\u53D6\u5F53\u524D<code>Scroller\u7684\u4F4D\u7F6E</code>\uFF0C\u6839\u636E\u8FD9\u4E2A\u4F4D\u7F6E\uFF0C\u6765\u628A\u76F8\u5E94\u7684<code>View</code>\u79FB\u52A8\u5230\u8FD9\u91CC\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">computeScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>mScroller<span class="token punctuation">.</span><span class="token function">computeScrollOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u5982\u679C\u8FD8\u6CA1\u6709\u6EDA\u52A8\u5B8C\u6210\uFF0C\u6211\u4EEC\u5C31\u53BB\u8BA9\u5F53\u524D\u7684View\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u53BB</span>
		mCenterView<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span>mScroller<span class="token punctuation">.</span><span class="token function">getCurrX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mScroller<span class="token punctuation">.</span><span class="token function">getCurrY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//\u79FB\u52A8\u5B8C\u540E\uFF0C\u6211\u4EEC\u5E94\u8BE5\u7EE7\u7EED\u8C03\u7528computeScoll\u65B9\u6CD5\u53BB\u83B7\u53D6\u5E76\u4E14\u79FB\u52A8\u5F53\u524DView\u3002\u6240\u4EE5\u6211\u4EEC\u8C03\u7528invalidate\u65B9\u6CD5\u53BB\u8BF7\u6C42\u91CD\u7ED8\uFF0C\u8FD9\u6837\u7236\u7C7B\u5C31\u4F1A\u8C03\u7528computeScroll</span>
		<span class="token function">postInvalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,5),l=[o];function t(i,p){return s(),a("div",null,l)}var r=n(c,[["render",t],["__file","Scroller\u7B80\u4ECB.html.vue"]]);export{r as default};
