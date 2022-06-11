import{_ as n,o as s,c as a,e as p}from"./app.e2a3b496.js";const t={},c=p(`<h1 id="rmb\u5927\u5C0F\u5199\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#rmb\u5927\u5C0F\u5199\u8F6C\u6362" aria-hidden="true">#</a> RMB\u5927\u5C0F\u5199\u8F6C\u6362</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RenMingBi</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token char">&#39;\u96F6&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u58F9&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u8D30&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u53C1&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u8086&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u4F0D&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u9646&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u67D2&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u634C&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u7396&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> units <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token char">&#39;\u5143&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u62FE&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u4F70&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u4EDF&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u4E07&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u62FE&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u4F70&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u4EDF&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;\u4EBF&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">convert</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">convert</span><span class="token punctuation">(</span><span class="token keyword">int</span> money<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuffer</span> sbf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> unit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>money <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sbf<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> units<span class="token punctuation">[</span>unit<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sbf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> number <span class="token operator">=</span> money <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            sbf<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            money <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sbf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,4),o=[c];function e(l,u){return s(),a("div",null,o)}var k=n(t,[["render",e],["__file","RMB\u5927\u5C0F\u5199\u8F6C\u6362.html.vue"]]);export{k as default};
