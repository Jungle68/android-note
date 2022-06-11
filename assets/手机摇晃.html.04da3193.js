import{_ as n,o as s,c as a,e}from"./app.e2a3b496.js";const p={},t=e(`<h1 id="\u624B\u673A\u6447\u6643" tabindex="-1"><a class="header-anchor" href="#\u624B\u673A\u6447\u6643" aria-hidden="true">#</a> \u624B\u673A\u6447\u6643</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
* \u5904\u7406\u624B\u673A\u6447\u6643\u7684\u76D1\u542C
* 
* <span class="token keyword">@author</span> Administrator
* 
*/</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ShakeSensor</span> <span class="token keyword">implements</span> <span class="token class-name">SensorEventListener</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6BCF\u9694\u4E00\u4E2A\u65F6\u95F4\u6BB5\u83B7\u53D6\u4E00\u4E2A\u91C7\u6837\u70B9\uFF1A100\u6BEB\u79D2</span>
    <span class="token comment">// \u4E09\u4E2A\u8F74\u7684\u52A0\u901F\u503C\u83B7\u53D6</span>
    <span class="token comment">// \u8BA1\u7B97\u589E\u91CF\uFF08\u5BF9\u4E8E\u7B2C\u4E00\u4E2A\u91C7\u6837\u70B9\uFF1A\u65E0\u589E\u91CF\u8BA1\u7B97\uFF09</span>
    <span class="token comment">// \u7EDF\u8BA1\u6BCF\u6B21\u4E09\u4E2A\u8F74\u4E0A\u7684\u589E\u91CF\uFF0C\u5F97\u5230\u4E00\u4E2A\u4E09\u4E2A\u8F74\u603B\u589E\u91CF</span>
    <span class="token comment">// \u5C06\u6BCF\u6B21\u7EDF\u8BA1\u7684\u589E\u91CF\u8FDB\u884C\u7D2F\u52A0</span>
    <span class="token comment">// \u5F53\u7D2F\u52A0\u7684\u503C\u5927\u4E8E200\u2014\u2014\u73A9\u5BB6\u5728\u6447\u6643\u624B\u673A\u2014\u2014\u751F\u4EA7\u4E00\u6CE8\u5F69\u7968\uFF08\u968F\u673A\uFF09</span>

    <span class="token keyword">long</span> lastTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> lastX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// \u8BB0\u5F55\u4E0A\u4E00\u4E2A\u70B9x\u8F74\u7684\u52A0\u901F\u5EA6\u503C</span>
    <span class="token keyword">float</span> lastY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// \u8BB0\u5F55\u4E0A\u4E00\u4E2A\u70B9y\u8F74\u7684\u52A0\u901F\u5EA6\u503C</span>
    <span class="token keyword">float</span> lastZ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// \u8BB0\u5F55\u4E0A\u4E00\u4E2A\u70B9z\u8F74\u7684\u52A0\u901F\u5EA6\u503C</span>

    <span class="token keyword">float</span> shake <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// \u76F8\u5BF9\u4E8E\u4E0A\u4E00\u4E2A\u70B9\u589E\u91CF</span>
    <span class="token keyword">float</span> totalShake <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// \u6BCF\u6B21\u589E\u91CF\u6C47\u603B</span>

    <span class="token keyword">float</span> switchValue <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span><span class="token comment">// \u5224\u65AD\u624B\u673A\u662F\u5426\u6447\u6643\u7684\u9608\u503C</span>

    <span class="token class-name">Vibrator</span> vibrator<span class="token punctuation">;</span><span class="token comment">// \u9707\u52A8\u5904\u7406</span>

    <span class="token class-name">Context</span> context<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ShakeSensor</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> context<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onAccuracyChanged</span><span class="token punctuation">(</span><span class="token class-name">Sensor</span> sensor<span class="token punctuation">,</span> <span class="token keyword">int</span> accuracy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onSensorChanged</span><span class="token punctuation">(</span><span class="token class-name">SensorEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> currentTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">-</span> lastTime <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u83B7\u53D6\u5230\u4E09\u4E2A\u8F74\u7684\u52A0\u901F\u5EA6\u503C</span>
            <span class="token keyword">float</span> x <span class="token operator">=</span> event<span class="token punctuation">.</span>values<span class="token punctuation">[</span><span class="token class-name">SensorManager</span><span class="token punctuation">.</span>DATA_X<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">float</span> y <span class="token operator">=</span> event<span class="token punctuation">.</span>values<span class="token punctuation">[</span><span class="token class-name">SensorManager</span><span class="token punctuation">.</span>DATA_Y<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">float</span> z <span class="token operator">=</span> event<span class="token punctuation">.</span>values<span class="token punctuation">[</span><span class="token class-name">SensorManager</span><span class="token punctuation">.</span>DATA_Z<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5F53\u624B\u673A\u9759\u6B62\u4E0D\u52A8\uFF0C\u4F1A\u6709\u5FAE\u5C0F\u7684\u53D8\u52A8\uFF0C\u5F53\u7528\u6237\u8FDB\u5165\u5230\u53CC\u8272\u7403\u9009\u53F7\u754C\u9762\uFF0C\u8FC7\u4E00\u4E2A\u65F6\u95F4\u6BB5\u81EA\u5DF1\u9009\u53F7</span>
            <span class="token comment">// \u662F\u5426\u53EF\u4EE5\u8BA1\u7B97\u589E\u91CF</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>lastTime <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u5F53\u7B2C\u4E00\u4E2A\u91C7\u6837\u70B9\uFF0C\u4E0D\u9700\u8981\u8BA1\u7B97</span>
                lastX <span class="token operator">=</span> x<span class="token punctuation">;</span>
                lastY <span class="token operator">=</span> y<span class="token punctuation">;</span>
                lastZ <span class="token operator">=</span> z<span class="token punctuation">;</span>
                lastTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u7B2C\u4E8C\u4E2A\u4EE5\u540E</span>
                <span class="token comment">// \u83B7\u53D6\u5230\u76F8\u5BF9\u4E8E\u4E0A\u4E00\u4E2A\u70B9\u7684\u589E\u91CF,\u7D2F\u79EF</span>
                <span class="token keyword">float</span> ix <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>x <span class="token operator">-</span> lastX<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">float</span> iy <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>y <span class="token operator">-</span> lastY<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">float</span> iz <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>z <span class="token operator">-</span> lastZ<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//\u5373\u4F7F\u4E0D\u6447\u6643\u7684\u65F6\u5019\u624B\u673A\u7684\u4F20\u611F\u5668\u6570\u503C\u4E5F\u4F1A\u6709\u7EC6\u5FAE\u7684\u6539\u53D8\uFF0C\u6211\u4EEC\u4E0D\u80FD\u8BA9\u7528\u6237\u5728\u4E70\u5F69\u7968\u7684\u9875\u9762\u8FC7\u4E00\u4F1A\u5C31\u81EA\u52A8\u9009\u5F69\u7968\u4E86\uFF0C\u5FC5\u987B\u5904\u7406</span>
                <span class="token comment">//\u5C31\u662F\u8BA9\u5FAE\u5C0F\u7684\u53D8\u52A8\u90FD\u53D8\u62100</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ix <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ix <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>iy <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    iy <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>iz <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    iz <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                shake <span class="token operator">=</span> ix <span class="token operator">+</span> iy <span class="token operator">+</span> iz<span class="token punctuation">;</span><span class="token comment">// \u5982\u679C\u624B\u673A\u9759\u6B62\u4E0D\u52A8\uFF0C\u5355\u6B21\u7EDF\u8BA1\u4E3A\u96F6</span>
                <span class="token comment">//\u5F53\u5224\u65AD\u7528\u6237\u6CA1\u6709\u6447\u52A8\u624B\u673A\uFF0C\u6240\u6709\u503C\u6062\u590D\u521D\u59CB\u72B6\u6001</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>shake <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                totalShake <span class="token operator">+=</span> shake<span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>totalShake <span class="token operator">&gt;</span> switchValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u751F\u4EA7\u4E00\u6CE8\uFF1A\u53CC\u8272\u7403\u9009\u53F7\u754C\u9762\uFF1A\u673A\u9009\u53CC\u8272\u7403</span>
                    <span class="token comment">// \u5728\u798F\u5F693D\u673A\u9009</span>
                    <span class="token function">createLottery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// \u544A\u77E5\u7528\u6237\uFF1A\u9707\u52A8</span>
                    <span class="token function">vibrator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// \u56DE\u590D\u5230\u521D\u59CB\u72B6\u6001</span>
                    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    lastX <span class="token operator">=</span> x<span class="token punctuation">;</span>
                    lastY <span class="token operator">=</span> y<span class="token punctuation">;</span>
                    lastZ <span class="token operator">=</span> z<span class="token punctuation">;</span>
                    lastTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lastTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        lastX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// \u8BB0\u5F55\u4E0A\u4E00\u4E2A\u70B9x\u8F74\u7684\u52A0\u901F\u5EA6\u503C</span>
        lastY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// \u8BB0\u5F55\u4E0A\u4E00\u4E2A\u70B9y\u8F74\u7684\u52A0\u901F\u5EA6\u503C</span>
        lastZ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// \u8BB0\u5F55\u4E0A\u4E00\u4E2A\u70B9z\u8F74\u7684\u52A0\u901F\u5EA6\u503C</span>

        shake <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// \u76F8\u5BF9\u4E8E\u4E0A\u4E00\u4E2A\u70B9\u589E\u91CF</span>
        totalShake <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// \u6BCF\u6B21\u589E\u91CF\u6C47\u603B</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">vibrator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vibrator <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Vibrator</span><span class="token punctuation">)</span> context<span class="token punctuation">.</span><span class="token function">getSystemService</span><span class="token punctuation">(</span><span class="token class-name">Context</span><span class="token punctuation">.</span>VIBRATOR_SERVICE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        vibrator<span class="token punctuation">.</span><span class="token function">vibrate</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u751F\u6210\u4E00\u6CE8\u5F69\u7968
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">createLottery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,4),o=[t];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","\u624B\u673A\u6447\u6643.html.vue"]]);export{k as default};
