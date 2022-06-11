import{_ as a,o as n,c as e,e as s}from"./app.e2a3b496.js";const o={},t=s(`<h1 id="\u901A\u8FC7hardware-layer\u63D0\u9AD8\u52A8\u753B\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7hardware-layer\u63D0\u9AD8\u52A8\u753B\u6027\u80FD" aria-hidden="true">#</a> \u901A\u8FC7Hardware Layer\u63D0\u9AD8\u52A8\u753B\u6027\u80FD</h1><p>\u9879\u76EE\u4E2D\u8D8A\u6765\u8D8A\u591A\u7684\u52A8\u753B\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u6548\u679C\u5BFC\u81F4\u4E86\u5E94\u7528\u6027\u80FD\u8D8A\u6765\u8D8A\u4F4E\u3002\u8BE5\u5982\u4F55\u63D0\u5347\u3002</p><h3 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h3><p>\u5728<code>View</code>\u64AD\u653E\u52A8\u753B\u7684\u8FC7\u7A0B\u4E2D\u6BCF\u4E00\u5E27\u90FD\u9700\u8981\u88AB\u91CD\u7ED8\u3002\u5982\u679C\u4F7F\u7528<code>view layers</code>\uFF0C\u5C31\u4E0D\u7528\u6BCF\u5E27\u90FD\u53BB\u91CD\u7ED8\uFF0C\u56E0\u4E3A<code>View</code>\u6E32\u67D3\u4E00\u65E6\u79BB\u5F00\u5C4F\u5E55\u7F13\u51B2\u533A\u5C31\u53EF\u4EE5\u88AB\u91CD\u7528\u3002</p><p>\u800C\u4E14\uFF0C<code>hardware layers</code>\u4F1A\u5728<code>GPU</code>\u4E0A\u7F13\u5B58\uFF0C\u8FD9\u6837\u5C31\u4F1A\u8BA9\u4E00\u4E9B\u52A8\u753B\u8FC7\u7A0B\u4E2D\u7684\u64CD\u4F5C\u53D8\u5F97\u66F4\u5FEB\u3002\u901A\u8FC7<code>hardware layers</code>\u53EF\u4EE5\u5FEB\u901F\u7684\u6E32\u67D3\u4E00\u4E9B\u7B80\u5355\u7684\u8F6C\u53D8(\u4F4D\u79FB\u3001\u9009\u4E2D\u3001\u7F29\u653E\u3001\u989C\u8272\u6E10\u53D8)\u3002\u7531\u4E8E\u5F88\u591A\u52A8\u753B\u90FD\u662F\u8FD9\u4E9B\u52A8\u4F5C\u7684\u7ED3\u5408\uFF0C\u6240\u4EE5<code>hardware layers</code>\u53EF\u4EE5\u663E\u8457\u7684\u63D0\u9AD8\u52A8\u753B\u6027\u80FD\u3002</p><p>\u5728<code>View</code>\u5F53\u4E2D\u63D0\u4F9B\u4E86\u4E09\u79CD\u7C7B\u578B\u7684<code>Layer type</code>:</p><ul><li><p>LAYER_TYPE_HARDWARE</p><blockquote><p>Indicates that the view has a hardware layer. A hardware layer is backed by a hardware specific texture (generally Frame Buffer Objects or FBO on OpenGL hardware) and causes the view to be rendered using Android&#39;s hardware rendering pipeline, but only if hardware acceleration is turned on for the view hierarchy. When hardware acceleration is turned off, hardware layers behave exactly as software layers.</p></blockquote><blockquote><p>A hardware layer is useful to apply a specific color filter and/or blending mode and/or translucency to a view and all its children.</p></blockquote><blockquote><p>A hardware layer can be used to cache a complex view tree into a texture and reduce the complexity of drawing operations. For instance, when animating a complex view tree with a translation, a hardware layer can be used to render the view tree only once.</p></blockquote><blockquote><p>A hardware layer can also be used to increase the rendering quality when rotation transformations are applied on a view. It can also be used to prevent potential clipping issues when applying 3D transforms on a view.</p></blockquote></li><li><p>LAYER_TYPE_SOFTWARE</p><blockquote><p>Indicates that the view has a software layer. A software layer is backed by a bitmap and causes the view to be rendered using Android&#39;s software rendering pipeline, even if hardware acceleration is enabled.</p></blockquote><blockquote><p>Software layers have various usages:</p></blockquote><blockquote><p>When the application is not using hardware acceleration, a software layer is useful to apply a specific color filter and/or blending mode and/or translucency to a view and all its children.</p></blockquote><blockquote><p>When the application is using hardware acceleration, a software layer is useful to render drawing primitives not supported by the hardware accelerated pipeline. It can also be used to cache a complex view tree into a texture and reduce the complexity of drawing operations. For instance, when animating a complex view tree with a translation, a software layer can be used to render the view tree only once.</p></blockquote><blockquote><p>Software layers should be avoided when the affected view tree updates often. Every update will require to re-render the software layer, which can potentially be slow (particularly when hardware acceleration is turned on since the layer will have to be uploaded into a hardware texture after every update.)</p></blockquote></li><li><p>LAYER_TYPE_NONE</p><blockquote><p>Indicates that the view does not have a layer. \u9ED8\u8BA4\u503C\u3002</p></blockquote></li></ul><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>\u9996\u5148\u4F7F\u7528\u7684\u524D\u63D0\u662F\u5728\u6E05\u5355\u6587\u4EF6\u4E2D\u5F00\u542F\u4E86\u786C\u4EF6\u52A0\u901F\u3002\u5426\u5219\u5C06\u65E0\u6CD5\u4F7F\u7528<code>hardware layer</code>\u3002\u8FD9\u4E00\u70B9\u5728\u4E0A\u9762\u7684\u6587\u6863\u4E2D\u4E5F\u6709\u8BF4\u660E\u3002</p><p><code>API</code>\u4E5F\u662F\u975E\u5E38\u7B80\u5355\u7684\uFF0C\u76F4\u63A5\u4F7F\u7528<code>View.setLayerType()</code>\u5C31\u597D\u3002\u4F7F\u7528\u65F6\u5E94\u8BE5\u53EA\u662F\u6682\u65F6\u7684\u8BBE\u7F6E<code>Hardware Layer</code>\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u65E0\u6CD5\u81EA\u52A8\u91CA\u653E\u3002<br> \u57FA\u672C\u7684\u4F7F\u7528\u6B65\u9AA4\uFF1A</p><ul><li>\u5BF9\u6BCF\u4E2A\u60F3\u8981\u5728\u52A8\u753B\u8FC7\u7A0B\u4E2D\u8FDB\u884C\u7F13\u5B58\u7684<code>view</code>\u8C03\u7528<code>View.setLayerType(View.LAYER_TYPE_HARDWARE, null)</code>\u65B9\u6CD5\u3002</li><li>\u6267\u884C\u52A8\u753B\u3002</li><li>\u5728\u52A8\u753B\u6267\u884C\u7ED3\u675F\u540E\u8C03\u7528<code>View.setLayerType(View.LAYER_TYPE_NONE, null)</code>\u65B9\u6CD5\u6765\u8FDB\u884C\u6E05\u9664\u3002</li></ul><p>\u793A\u4F8B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>mView<span class="token punctuation">.</span><span class="token function">setLayerType</span><span class="token punctuation">(</span><span class="token class-name">View</span><span class="token punctuation">.</span>LAYER_TYPE_HARDWARE<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

animator<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AnimatorListenerAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onAnimationEnd</span><span class="token punctuation">(</span><span class="token class-name">Animator</span> animation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mView<span class="token punctuation">.</span><span class="token function">setLayerType</span><span class="token punctuation">(</span><span class="token class-name">View</span><span class="token punctuation">.</span>LAYER_TYPE_NONE<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

animator<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u5982\u679C\u5728<code>4.0.x</code>\u7684\u7248\u672C\u4E2D\u4F7F\u7528\u4E0A\u9762\u7684\u4EE3\u7801\u4F1A\u672C\u4E8F\uFF0C\u5FC5\u987B\u8981\u628A<code>setLayerType</code>\u653E\u5230<code>Runnable</code>\u4E2D\u3002\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>mView<span class="token punctuation">.</span><span class="token function">setLayerType</span><span class="token punctuation">(</span><span class="token class-name">View</span><span class="token punctuation">.</span>LAYER_TYPE_HARDWARE<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

animator<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AnimatorListenerAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onAnimationEnd</span><span class="token punctuation">(</span><span class="token class-name">Animator</span> animation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//This will work successfully</span>
    <span class="token function">post</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> run <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setLayerType</span><span class="token punctuation">(</span>LAYER_TYPE_NONE<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

animator<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u57FA\u4E8E<code>minSdkVersion 16</code>\u4EE5\u4E0A\u5E76\u4E14\u4F7F\u7528<code>ViewPropertyAnimator</code>\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528<code>withLayer()</code>\u65B9\u6CD5\u66FF\u4EE3\u5982\u4E0A\u7684\u64CD\u4F5C:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>mView<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">translationX</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\u5728<code>api 14</code>\u4EE5\u4E0A\u65F6\u4F7F\u7528<code>ViewCompat.animate().withLayer()</code> \u8FD9\u6837\u505A\uFF0C\u4F60\u7684\u52A8\u753B\u5C31\u4F1A\u53D8\u5F97\u66F4\u6D41\u7545\uFF01</p><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h3><p>\u4F60\u5E94\u8BE5\u77E5\u9053\uFF0C\u4E8B\u60C5\u6CA1\u90A3\u4E48\u7B80\u5355\u3002<br><code>Hardware layers</code>\u6709\u7740\u60CA\u4EBA\u7684\u63D0\u5347\u52A8\u753B\u6027\u80FD\u7684\u80FD\u529B\u3002\u7136\u800C\uFF0C\u5982\u679C\u6EE5\u7528\uFF0C\u5B83\u7684\u5371\u5BB3\u66F4\u5927\u3002<strong>\u4E0D\u8981\u76F2\u76EE\u7684\u4F7F\u7528<code>layers</code></strong></p><ul><li><p>\u9996\u5148\uFF0C\u5728\u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C<code>hardware layers</code>\u9664\u4E86<code>view</code>\u6E32\u67D3\u5916\u8FD8\u4F1A\u6267\u884C\u66F4\u591A\u7684\u5DE5\u4F5C\u3002\u7F13\u5B58<code>layer</code>\u5C06\u4F1A\u9700\u8981\u65F6\u95F4\uFF0C\u56E0\u4E3A\u9996\u9009\u7B2C\u4E00\u6B65\u5C31\u9700\u8981\u4E24\u4E2A\u8FC7\u7A0B: \u5148\u5C06\u8FD9\u4E9B<code>view</code>\u6E32\u67D3\u5230<code>GPU</code>\u7684\u4E00\u4E2A<code>layer</code>\u4E2D\u7136\u540E<code>GPU</code>\u518D\u6E32\u67D3\u8BE5<code>layer</code>\u5230<code>Window</code>\u4E0A\u3002\u5982\u679C\u8981\u6E32\u67D3\u7684<code>View</code>\u975E\u5E38\u7B80\u5355(\u4F8B\u5982\u4E00\u4E2A\u7EAF\u8272\u503C),\u90A3\u4E48\u8FD9\u6837\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u5C31\u4F1A\u589E\u52A0<code>Hardware Layer</code>\u4E0D\u5FC5\u8981\u7684\u5F00\u9500\u3002</p></li><li><p>\u5176\u6B21\uFF0C\u5BF9\u6240\u6709\u7684\u7F13\u5B58\u6765\u8BB2\uFF0C\u90FD\u6709\u4E00\u4E2A\u7F13\u5B58\u5931\u6548\u7684\u53EF\u80FD\u6027\u3002\u4EFB\u4F55\u65F6\u5019\u5982\u679C\u5728\u52A8\u753B\u8FC7\u7A0B\u4E2D\u8C03\u7528<code>view.invalidate()</code>\uFF0C\u90A3\u4E48<code>layer</code>\u5C31\u5FC5\u987B\u8981\u91CD\u65B0\u6E32\u67D3\u3002\u7ECF\u5E38\u7684\u5E9F\u5F03<code>hardware layers</code>\u4F1A\u6BD4\u6CA1\u6709<code>layers</code>\u7684\u60C5\u51B5\u4E0B\u66F4\u7CDF\u7CD5\uFF0C\u56E0\u4E3A\u5982\u540C\u4E0A\u9762\u8BB2\u5230\u7684<code>hardware layers</code>\u5728\u8BBE\u7F6E\u7F13\u5B58\u65F6\u4F1A\u6709\u989D\u5916\u7684\u5F00\u9500\u3002\u5982\u679C\u4F60\u9700\u8981\u7ECF\u5E38\u7684\u91CD\u65B0\u7F13\u5B58<code>layer</code>\uFF0C\u90A3\u5C31\u4F1A\u6709\u6781\u5927\u7684\u635F\u5BB3\u3002</p><p>\u8FD9\u4E2A\u95EE\u9898\u4E5F\u662F\u975E\u5E38\u5BB9\u6613\u51FA\u73B0\u7684\uFF0C\u56E0\u4E3A\u52A8\u753B\u7ECF\u5E38\u6709\u591A\u4E2A\u79FB\u52A8\u7684\u90E8\u5206\u3002\u5047\u5982\u73B0\u5728\u6709\u4E00\u4E2A\u4E09\u4E2A\u90E8\u5206\u79FB\u52A8\u7684\u52A8\u753B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Parent</span> <span class="token class-name">ViewGroup</span>
\u2014<span class="token operator">-&gt;</span> <span class="token class-name">Child</span> <span class="token class-name">View1</span> <span class="token punctuation">(</span>\u5F80\u5DE6\u79FB\u52A8<span class="token punctuation">)</span>
\u2014<span class="token operator">-&gt;</span> <span class="token class-name">Child</span> <span class="token class-name">View2</span> <span class="token punctuation">(</span>\u5F80\u53F3\u79FB\u52A8<span class="token punctuation">)</span>
\u2014<span class="token operator">-&gt;</span> <span class="token class-name">Child</span> <span class="token class-name">View3</span> <span class="token punctuation">(</span>\u5F80\u4E0A\u79FB\u52A8<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u53EA\u5728\u7236\u5E03\u5C40<code>ViewGroup</code>\u4E0A\u8BBE\u7F6E\u4E00\u4E2A<code>layer</code>\uFF0C\u90A3\u5C31\u5C06\u7ECF\u5E38\u7684\u7F13\u5B58\u5931\u6548\uFF0C\u56E0\u4E3A<code>ViewGroup</code>\u4F1A\u968F\u7740\u5B50<code>View</code>\u4E0D\u65AD\u5730\u6539\u53D8\u3002\u7136\u800C\u5BF9\u6BCF\u4E2A\u5355\u72EC\u7684\u5B50<code>Views</code>\u800C\u8A00\uFF0C\u4ED6\u4EEC\u53EA\u662F\u5728\u4F4D\u79FB\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6700\u597D\u662F\u5BF9\u6BCF\u4E2A\u5B50<code>View\u4E0A</code>\u8BBE\u7F6E<code>Hardware Layer</code>\uFF08\u800C\u4E0D\u662F\u5728\u7236\u5E03\u5C40\u4E0A\uFF09\u3002</p><p><em><strong>\u518D\u6B21\u91CD\u7533\uFF0C\u901A\u5E38\u662F\u5BF9\u591A\u4E2A\u5B50<code>View\u4E0A</code>\u9002\u5F53\u7684\u8BBE\u7F6E<code>Hardware Layer</code>\uFF0C\u8FD9\u6837\u4ED6\u4EEC\u5C31\u4E0D\u4F1A\u5728\u52A8\u753B\u8FD0\u884C\u65F6\u5931\u6548\u3002</strong></em></p><p>\u5728\u624B\u673A\u5F00\u53D1\u8005\u9009\u9879\u4E2D\u7684*\u663E\u793A\u786C\u4EF6\u5C42\u66F4\u65B0\uFF08Show hardware layers updates\uFF09*\u529F\u80FD\u662F\u8FFD\u8E2A\u8FD9\u4E2A\u95EE\u9898\u7684\u5F00\u53D1\u5229\u5668\u3002\u5F53<code>View</code>\u6E32\u67D3<code>Hardware Layer</code>\u7684\u65F6\u5019\u95EA\u70C1\u7EFF\u8272\uFF0C\u5B83\u5E94\u8BE5\u5728\u52A8\u753B\u5F00\u59CB\u7684\u65F6\u5019\u95EA\u70C1\u4E00\u6B21\uFF08\u4E5F\u5C31\u662F<code>Layer</code>\u6E32\u67D3\u521D\u59CB\u5316\u7684\u65F6\u5019\uFF09\uFF0C\u7136\u800C\uFF0C\u5982\u679C\u4F60\u7684<code>View</code>\u5728\u6574\u4E2A\u52A8\u753B\u671F\u95F4\u90FD\u662F\u7EFF\u8272\uFF0C\u90A3\u5C31\u662F\u9047\u5230\u5931\u6548\u7684\u95EE\u9898\u4E86\u3002</p></li><li><p>\u6700\u540E\uFF0C<code>hardware layers</code>\u4F7F\u7528<code>GPU</code>\u5185\u5B58\uFF0C\u4F60\u5F53\u7136\u4E0D\u60F3\u51FA\u73B0\u5185\u5B58\u6CC4\u6F0F\u7684\u95EE\u9898\u3002\u6240\u4EE5\u4F60\u5E94\u8BE5\u5728\u5FC5\u8981\u7684\u65F6\u5019\u518D\u53BB\u4F7F\u7528<code>hardware layers</code>\uFF0C\u5C31\u60F3\u64AD\u653E\u52A8\u753B\u65F6\u3002</p></li></ul><p>\u8FD9\u91CC\u4E5F\u6CA1\u6709\u786C\u6027\u89C4\u5219\u3002<code>Android</code>\u6E32\u67D3\u7CFB\u7EDF\u662F\u975E\u5E38\u590D\u6742\u7684\u3002\u5C31\u50CF\u6240\u6709\u6027\u80FD\u95EE\u9898\u4E00\u6837\uFF0C\u6D4B\u8BD5\u624D\u662F\u5173\u952E\u3002\u901A\u8FC7\u4F7F\u7528\u201C\u663E\u793A\u786C\u4EF6\u5C42\u66F4\u65B0\u201D\u5F00\u53D1\u8005\u9009\u9879\u6765\u786E\u5B9A<code>layers</code>\u662F\u5728\u5E2E\u4F60\u8FD8\u662F\u5BB3\u4F60\u3002</p><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,24),c=[t];function p(i,l){return n(),e("div",null,c)}var d=a(o,[["render",p],["__file","\u901A\u8FC7Hardware Layer\u63D0\u9AD8\u52A8\u753B\u6027\u80FD.html.vue"]]);export{d as default};
