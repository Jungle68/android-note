import{_ as n,o as s,c as a,e as t}from"./app.89e8a229.js";const e={},p=t(`<h1 id="\u6ED1\u52A8\u5207\u6362activity-gesturedetector" tabindex="-1"><a class="header-anchor" href="#\u6ED1\u52A8\u5207\u6362activity-gesturedetector" aria-hidden="true">#</a> \u6ED1\u52A8\u5207\u6362Activity(GestureDetector)</h1><ol><li><p>\u5B9E\u73B0\u624B\u52BF\u6ED1\u52A8\u5207\u6362<code>Activity</code></p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u624B\u52BF\u8BC6\u522B\u5668(<code>GestureDetector</code>)</li><li>\u5728<code>Activity</code>\u7684<code>onTouchEvent</code>\u4E2D\u53BB\u4F7F\u7528\u8BE5\u624B\u52BF\u8BC6\u522B\u5668<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SetupBaseActivity</span> <span class="token keyword">extends</span> <span class="token class-name">Activity</span> <span class="token punctuation">{</span>
	<span class="token keyword">protected</span> <span class="token class-name">SharedPreferences</span> sp<span class="token punctuation">;</span>
	<span class="token keyword">protected</span> <span class="token class-name">GestureDetector</span> mGestureDetector<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>
		sp <span class="token operator">=</span><span class="token function">getSharedPreferences</span><span class="token punctuation">(</span><span class="token string">&quot;config&quot;</span><span class="token punctuation">,</span> MODE_PRIVATE<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">initView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">setupView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//1.\u521B\u5EFA\u4E00\u4E2A\u624B\u52BF\u8BC6\u522B\u5668 new \u5BF9\u8C61\uFF0C\u5E76\u7ED9\u8FD9\u4E2A\u624B\u52BF\u8BC6\u522B\u5668\u8BBE\u7F6E\u76D1\u542C\u5668</span>
		mGestureDetector <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GestureDetector</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GestureDetector<span class="token punctuation">.</span>SimpleOnGestureListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//\u5F53\u624B\u6307\u5728\u5C4F\u5E55\u4E0A\u6ED1\u52A8\u7684\u65F6\u5019 \u8C03\u7528\u7684\u65B9\u6CD5.</span>
			<span class="token annotation punctuation">@Override</span>
			<span class="token comment">//e1\u4EE3\u8868\u7684\u662F\u624B\u6307\u521A\u5F00\u59CB\u6ED1\u52A8\u7684\u4E8B\u4EF6\uFF0Ce2\u4EE3\u8868\u624B\u6307\u6ED1\u52A8\u5B8C\u4E86\u7684\u4E8B\u4EF6</span>
			<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">onFling</span><span class="token punctuation">(</span><span class="token class-name">MotionEvent</span> e1<span class="token punctuation">,</span> <span class="token class-name">MotionEvent</span> e2<span class="token punctuation">,</span><span class="token keyword">float</span> velocityX<span class="token punctuation">,</span> <span class="token keyword">float</span> velocityY<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>e1<span class="token punctuation">.</span><span class="token function">getRawX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> e2<span class="token punctuation">.</span><span class="token function">getRawX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token function">showNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5411\u53F3\u6ED1\u52A8\uFF0C\u663E\u793A\u4E0B\u4E00\u4E2A\u754C\u9762</span>
					<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>

				<span class="token keyword">if</span><span class="token punctuation">(</span>e2<span class="token punctuation">.</span><span class="token function">getRawX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> e1<span class="token punctuation">.</span><span class="token function">getRawX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token function">showPre</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5411\u5DE6\u6ED1\u52A8\uFF0C\u663E\u793A\u4E0A\u4E00\u4E2A\u754C\u9762</span>
					<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onFling</span><span class="token punctuation">(</span>e1<span class="token punctuation">,</span> e2<span class="token punctuation">,</span> velocityX<span class="token punctuation">,</span> velocityY<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//2.\u8BA9\u624B\u52BF\u8BC6\u522B\u5668\u751F\u6548\uFF0C\u91CD\u5199Activity\u7684\u89E6\u6478\u4E8B\u4EF6\uFF0C\u5E76\u4E14\u5C06Activity\u7684\u89E6\u6478\u4E8B\u4EF6\u4F20\u5165\u5230\u624B\u52BF\u8BC6\u522B\u5668\u4E2D</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">onTouchEvent</span><span class="token punctuation">(</span><span class="token class-name">MotionEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		mGestureDetector<span class="token punctuation">.</span><span class="token function">onTouchEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onTouchEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u5B9E\u73B0\u5207\u6362\u6548\u679C \u7ECF\u8FC7\u4E0A\u4E00\u6B65\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u6ED1\u52A8\u754C\u9762\u7684\u5207\u6362\uFF0C\u4F46\u662F\u5207\u6362\u754C\u9762\u65F6\u7684\u6548\u679C\u4E0D\u597D\u770B\uFF0C\u6211\u4EEC\u9700\u8981\u81EA\u5B9A\u4E49\u5207\u6362\u7684\u6548\u679C</p><ul><li><p>\u5728res\u76EE\u5F55\u4E0B\u9762\u65B0\u5EFA\u4E00\u4E2Aanim\u6587\u4EF6\u5939\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E2D\u65B0\u5EFA\u52A8\u753B\u6548\u679C tran_next_in.xml//\u4E0B\u4E00\u4E2A\u754C\u9762\u8FDB\u5165\u7684\u6837\u5F0F<br> tran_next_out.xml//\u4E0B\u4E00\u4E2A\u754C\u9762\u8FDB\u5165\u65F6\u5F53\u524D\u9875\u9762\u51FA\u53BB\u7684\u6837\u5F0F<br> tran_pre_in.xml//\u4E0A\u4E00\u4E2A\u754C\u9762\u8FDB\u5165\u7684\u6837\u5F0F<br> tran_pre_out.xml//\u4E0A\u4E00\u4E2A\u754C\u9762\u8FDB\u5165\u65F6\u5F53\u524D\u9875\u9762\u51FA\u53BB\u7684\u6837\u5F0F</p><ul><li><p>tran_next_in.xml\u91CC\u9762\u7684\u5185\u5BB9</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
&lt;translate xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;    //translate\u662F\u6307\u5B9A\u6574\u4E2A\u56FE\u7247\u662F\u4F4D\u79FB\u52A8
	android:fromXDelta=&quot;100%p&quot; //\u5F00\u59CB\u65F6\u7684X\u8F74\u4F4D\u7F6E\uFF0C100%p\u5F53\u8868\u662F\u5F53\u524D\u7A97\u4F53\u7684\u5BBD\u5EA6
	android:toXDelta=&quot;0&quot;//\u7ED3\u675F\u65F6\u5019\u7684X\u8F74\u4F4D\u7F6E
	android:fromYDelta=&quot;0&quot;//\u5F00\u59CB\u65F6Y\u8F74\u7684\u4F4D\u7F6E
	android:toYDelta=&quot;0&quot;//\u7ED3\u675F\u65F6Y\u8F74\u7684\u4F4D\u7F6E
	android:duration=&quot;300&quot;//\u6574\u4E2A\u52A8\u753B\u6301\u7EED\u7684\u65F6\u95F4
	&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>translate</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>tran_next_out.xml\u91CC\u9762\u7684\u5185\u5BB9</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>translate</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>fromXDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>toXDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>-100%p<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>fromYDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>toYDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span>
	<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>translate</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>tran_pre_in.xml\u91CC\u9762\u7684\u5185\u5BB9</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>translate</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>fromXDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>-100%p<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>toXDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>fromYDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>toYDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span>
	<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>translate</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>tran_pre_out.xml\u91CC\u9762\u7684\u5185\u5BB9</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>translate</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>fromXDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>toXDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%p<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>fromYDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>toYDelta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span>
	<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>translate</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u8BA9<code>Activity</code>\u5728\u521B\u5EFA\u548C\u9500\u6BC1\u65F6\u4F7F\u7528\u4E0A\u9762\u81EA\u5B9A\u4E49\u7684\u52A8\u753B</p><p><code>public void overridePendingTransition(int enterAnim, int exitAnim);</code><code>Call immediately after one of the flavors of startActivity(Intent) or finish() to specify an explicit transition animation to perform next.</code><code>Parameters:</code><code>enterAnim - A resource ID of the animation resource to use for the incoming activity. Use 0 for no animation.</code><code>exitAnim - A resource ID of the animation resource to use for the outgoing activity. Use 0 for no animation.</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>      
	<span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token class-name">Setup3Activity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">startActivity</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//\u8C03\u7528\u6B64\u65B9\u6CD5\u8BA9\u52A8\u753B\u6548\u679C\u751F\u6548</span>
	<span class="token function">overridePendingTransition</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>anim<span class="token punctuation">.</span>tran_next_in<span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>anim<span class="token punctuation">.</span>tran_next_out<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showPre</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token class-name">Setup1Activity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">startActivity</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">overridePendingTransition</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>anim<span class="token punctuation">.</span>tran_pre_in<span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>anim<span class="token punctuation">.</span>tran_pre_out<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,4),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","\u6ED1\u52A8\u5207\u6362Activity(GestureDetector).html.vue"]]);export{r as default};
