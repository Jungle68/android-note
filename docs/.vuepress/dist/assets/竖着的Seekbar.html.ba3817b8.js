import{_ as n,o as s,c as a,e as t}from"./app.89e8a229.js";const p={},e=t(`<h1 id="\u7AD6\u7740\u7684seekbar" tabindex="-1"><a class="header-anchor" href="#\u7AD6\u7740\u7684seekbar" aria-hidden="true">#</a> \u7AD6\u7740\u7684Seekbar</h1><p>\u89C6\u9891\u64AD\u653E\u5668\u9875\u9762\u97F3\u91CF\u63A7\u5236<code>Seekbar</code>\u5B9E\u73B0\u7AD6\u76F4\u7684\u6548\u679C\u3002\u7AD6\u76F4\u53EA\u662F\u5C06<code>Seekbar</code>\u8F6C\u4E8690\u5EA6\u6216-90\u5EA6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u753B\u5E03\u8F6C\u4E00\u4E2A\u89D2\u5EA6\uFF0C\u7136\u540E\u4EA4\u7ED9\u7CFB\u7EDF\u53BB\u753B\uFF0C \u5177\u4F53\u7684\u505A\u6CD5\u5C31\u662F\u91CD\u5199<code>ondraw()</code>\u8C03\u6574\u753B\u5E03\uFF0C\u7136\u540E\u8C03\u7528<code>super.onDraw()</code>\u3002</p><ul><li>\u5411\u4E0A\u7684Seekbar</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onDraw</span><span class="token punctuation">(</span><span class="token class-name">Canvas</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	c<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	c<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span>height<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//height\u662F\u4F60\u7684verticalseekbar\u7684\u9AD8</span>
    	<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onDraw</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5411\u4E0B\u7684seekbar\u5219\u5E94\u8BE5\u662F\uFF1A</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onDraw</span><span class="token punctuation">(</span><span class="token class-name">Canvas</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	c<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	c<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//width\u662F\u4F60\u7684verticalseekbar\u7684\u5BBD</span>
    	<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onDraw</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u793A\u4F8B\u4EE3\u7801</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VerticalSeekBar</span> <span class="token keyword">extends</span> <span class="token class-name">SeekBar</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token class-name">VerticalSeekBar</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token class-name">VerticalSeekBar</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">AttributeSet</span> attrs<span class="token punctuation">,</span> <span class="token keyword">int</span> defStyle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> defStyle<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token class-name">VerticalSeekBar</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">AttributeSet</span> attrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> attrs<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onSizeChanged</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">,</span> <span class="token keyword">int</span> h<span class="token punctuation">,</span> <span class="token keyword">int</span> oldw<span class="token punctuation">,</span> <span class="token keyword">int</span> oldh<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onSizeChanged</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> w<span class="token punctuation">,</span> oldh<span class="token punctuation">,</span> oldw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">onMeasure</span><span class="token punctuation">(</span><span class="token keyword">int</span> widthMeasureSpec<span class="token punctuation">,</span> <span class="token keyword">int</span> heightMeasureSpec<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onMeasure</span><span class="token punctuation">(</span>heightMeasureSpec<span class="token punctuation">,</span> widthMeasureSpec<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">setMeasuredDimension</span><span class="token punctuation">(</span><span class="token function">getMeasuredHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getMeasuredWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onDraw</span><span class="token punctuation">(</span><span class="token class-name">Canvas</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            c<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onDraw</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">setProgress</span><span class="token punctuation">(</span><span class="token keyword">int</span> progress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">setProgress</span><span class="token punctuation">(</span>progress<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">onSizeChanged</span><span class="token punctuation">(</span><span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>
        
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">onTouchEvent</span><span class="token punctuation">(</span><span class="token class-name">MotionEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token class-name">MotionEvent</span><span class="token punctuation">.</span>ACTION_DOWN<span class="token operator">:</span>
                <span class="token keyword">case</span> <span class="token class-name">MotionEvent</span><span class="token punctuation">.</span>ACTION_MOVE<span class="token operator">:</span>
                <span class="token keyword">case</span> <span class="token class-name">MotionEvent</span><span class="token punctuation">.</span>ACTION_UP<span class="token operator">:</span>
                    <span class="token function">setProgress</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token function">getMax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span> <span class="token punctuation">(</span><span class="token function">getMax</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> event<span class="token punctuation">.</span><span class="token function">getY</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token operator">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onTouchEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,10),o=[e];function c(u,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","\u7AD6\u7740\u7684Seekbar.html.vue"]]);export{k as default};
