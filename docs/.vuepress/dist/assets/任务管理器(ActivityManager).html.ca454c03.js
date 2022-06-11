import{_ as n,o as s,c as a,e as t}from"./app.89e8a229.js";const p={},e=t(`<h1 id="\u4EFB\u52A1\u7BA1\u7406\u5668-activitymanager" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u7BA1\u7406\u5668-activitymanager" aria-hidden="true">#</a> \u4EFB\u52A1\u7BA1\u7406\u5668(ActivityManager)</h1><p><code>Android</code>\u4E2D<strong>ActivityManager</strong>\u7C7B\u4F3C\u4E8E<code>Windows</code>\u4E0B\u7684\u4EFB\u52A1\u7BA1\u7406\u5668\uFF0C\u80FD\u5F97\u5230\u6B63\u5728\u8FD0\u884C\u7A0B\u5E8F\u7684\u5185\u5BB9\u7B49\u4FE1\u606F</p><ol><li><p>List&lt;ActivityManager.RunningServiceInfo&gt; getRunningServices(int maxNum)<br> Return a list of the services that are currently running. \u8FD9\u4E2AmaxNum\u662F\u6307\u8FD4\u56DE\u7684\u8FD9\u4E2A\u96C6\u5408\u7684\u6700\u5927\u503C<br> \u53EF\u4EE5\u5229\u7528<code>ActivityManager</code>\u53BB\u5224\u65AD\u5F53\u524D\u67D0\u4E2A\u670D\u52A1\u662F\u5426\u6B63\u5728\u8FD0\u884C\u3002</p></li><li><p>List&lt;ActivityManager.RunningAppProcessInfo&gt; getRunningAppProcesses()<br> Returns a list of application processes that are running on the device.</p></li><li><p>List&lt;ActivityManager.RecentTaskInfo&gt; getRecentTasks(int maxNum, int flags)<br> \u5F97\u5230\u6700\u8FD1\u4F7F\u7528\u7684\u7A0B\u5E8F\uFF0C\u96C6\u5408\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20\u662F\u521A\u624D\u6B63\u5728\u4F7F\u7528\u7684</p></li><li><p>Debug.MemoryInfo[] getProcessMemoryInfo(int[] pids)<br> Return information about the memory usage of one or more processes. \u53EF\u4EE5\u901A\u8FC7\u67D0\u4E2A\u8FDB\u7A0B\u7684id\u5F97\u5230\u8FDB\u7A0B\u7684\u5185\u5B58\u4F7F\u7528\u4FE1\u606F\uFF0C\u7136\u540E\u901A\u8FC7\u8FD9\u4E2A\u5185\u5B58\u4FE1\u606F\u80FD\u591F\u5F97\u5230\u6BCF\u4E2A\u7A0B\u5E8F\u4F7F\u7528\u7684\u5185\u5B58\u5927\u5C0F</p><p>MemoryInfo\u4E2D\u7684\u65B9\u6CD5<br> int getTotalPrivateDirty()<br> Return total private dirty memory usage in kB\u5F97\u5230\u5360\u7528\u5185\u5B58\u7684\u5927\u5C0F\uFF0C\u5355\u4F4D\u662Fkb</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u8FD4\u56DE\u6240\u6709\u7684\u8FDB\u7A0B\u5217\u8868\u4FE1\u606F
 * <span class="token keyword">@param</span> <span class="token parameter">context</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TaskInfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">getTaskInfos</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">ActivityManager</span> am <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ActivityManager</span><span class="token punctuation">)</span> context<span class="token punctuation">.</span><span class="token function">getSystemService</span><span class="token punctuation">(</span><span class="token class-name">Context</span><span class="token punctuation">.</span>ACTIVITY_SERVICE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RunningAppProcessInfo</span><span class="token punctuation">&gt;</span></span> appProcessInfos <span class="token operator">=</span> am<span class="token punctuation">.</span><span class="token function">getRunningAppProcesses</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TaskInfo</span><span class="token punctuation">&gt;</span></span> taskInfos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TaskInfo</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">PackageManager</span> pm <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getPackageManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">RunningAppProcessInfo</span> appProcessInfo <span class="token operator">:</span> appProcessInfos<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> packname <span class="token operator">=</span> appProcessInfo<span class="token punctuation">.</span>processName<span class="token punctuation">;</span>
        <span class="token class-name">TaskInfo</span> taskInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TaskInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        taskInfo<span class="token punctuation">.</span><span class="token function">setPackname</span><span class="token punctuation">(</span>packname<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">MemoryInfo</span><span class="token punctuation">[</span><span class="token punctuation">]</span> memoryInfos <span class="token operator">=</span> am<span class="token punctuation">.</span><span class="token function">getProcessMemoryInfo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>appProcessInfo<span class="token punctuation">.</span>pid<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> memsize <span class="token operator">=</span> memoryInfos<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getTotalPrivateDirty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>
        taskInfo<span class="token punctuation">.</span><span class="token function">setMemsize</span><span class="token punctuation">(</span>memsize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">PackageInfo</span> packInfo <span class="token operator">=</span> pm<span class="token punctuation">.</span><span class="token function">getPackageInfo</span><span class="token punctuation">(</span>packname<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Drawable</span> icon <span class="token operator">=</span> packInfo<span class="token punctuation">.</span>applicationInfo<span class="token punctuation">.</span><span class="token function">loadIcon</span><span class="token punctuation">(</span>pm<span class="token punctuation">)</span><span class="token punctuation">;</span>
            taskInfo<span class="token punctuation">.</span><span class="token function">setIcon</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> packInfo<span class="token punctuation">.</span>applicationInfo<span class="token punctuation">.</span><span class="token function">loadLabel</span><span class="token punctuation">(</span>pm<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            taskInfo<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">AppInfoProvider</span><span class="token punctuation">.</span><span class="token function">filterApp</span><span class="token punctuation">(</span>packInfo<span class="token punctuation">.</span>applicationInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                taskInfo<span class="token punctuation">.</span><span class="token function">setUserTask</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                taskInfo<span class="token punctuation">.</span><span class="token function">setUserTask</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NameNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            taskInfo<span class="token punctuation">.</span><span class="token function">setIcon</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getResources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDrawable</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>drawable<span class="token punctuation">.</span>ic_launcher<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            taskInfo<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>packname<span class="token punctuation">)</span><span class="token punctuation">;</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> 
        taskInfos<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>taskInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> taskInfos<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E00\u952E\u6E05\u7406<br> \u6740\u6B7B\u8FDB\u7A0B\u9700\u8981\u6743\u9650</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>android.permission.KILL_BACKGROUND_PROCESSES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6740\u6B7B\u8FDB\u7A0B\u5C31\u662F\u4F7F\u7528ActivityManager\u7684killBackgroundProcess\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void killBackgroundProcesses(String packageName)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u83B7\u53D6\u5185\u5B58\u53EF\u7528\u5927\u5C0F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProcessStatusUtils</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u6709\u591A\u5C11\u4E2A\u7A0B\u5E8F\u6B63\u5904\u4E8E\u8FD0\u884C\u72B6\u6001.
     * <span class="token keyword">@param</span> <span class="token parameter">context</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getProcessCount</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ActivityManager</span> am <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ActivityManager</span><span class="token punctuation">)</span> context<span class="token punctuation">.</span><span class="token function">getSystemService</span><span class="token punctuation">(</span><span class="token class-name">Context</span><span class="token punctuation">.</span>ACTIVITY_SERVICE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> am<span class="token punctuation">.</span><span class="token function">getRunningAppProcesses</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u624B\u673A\u91CC\u9762\u53EF\u7528\u7684\u5185\u5B58\u7A7A\u95F4
     * <span class="token keyword">@param</span> <span class="token parameter">context</span>
     * <span class="token keyword">@return</span> long\u7C7B\u578B\u7684byte\u7684\u503C
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">getAvailRAM</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ActivityManager</span> am <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ActivityManager</span><span class="token punctuation">)</span> context<span class="token punctuation">.</span><span class="token function">getSystemService</span><span class="token punctuation">(</span><span class="token class-name">Context</span><span class="token punctuation">.</span>ACTIVITY_SERVICE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MemoryInfo</span> outInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemoryInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        am<span class="token punctuation">.</span><span class="token function">getMemoryInfo</span><span class="token punctuation">(</span>outInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> outInfo<span class="token punctuation">.</span>availMem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u83B7\u53D6\u624B\u673A\u7684\u603B\u5185\u5B58\uFF0CAndroid\u7684Api\u4E2D\u6CA1\u6709\u63D0\u4F9B\u83B7\u53D6\u603B\u5185\u5B58\u7684\u65B9\u6CD5\uFF0C\u5728linux\u7CFB\u7EDF\u4E2D\u6211\u4EEC\u8981\u901A\u8FC7\u8FD9\u4E2A\u6587\u4EF6\u624D\u80FD\u5F97\u5230\u603B\u5185\u5B58</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">getTotalRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;/proc/meminfo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Android\u7CFB\u7EDF\u8FD9\u4E2A\u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u5C31\u80FD\u5F97\u5230\u603B\u7684\u5185\u5B58\u5927\u5C0F</span>
            <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>fis<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> str <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//MemTotal:         513248 kB</span>
            <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">:</span> chars<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>c<span class="token operator">&gt;=</span><span class="token char">&#39;0&#39;</span><span class="token operator">&amp;&amp;</span>c<span class="token operator">&lt;=</span><span class="token char">&#39;9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">;</span><span class="token comment">//\u5F97\u5230\u7684\u662F\u591A\u5C11kb,\u5C06kb\u8F6C\u6210b</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
<span class="token comment">//\u4E0A\u9762\u7684\u65B9\u6CD5\u90FD\u662F\u5F97\u5230\u7684\u591A\u5C11\u6BD4\u7279\u7684\u5927\u5C0F\uFF0C\u5728\u4F7F\u7528\u4E2D\u53EF\u4EE5\u4F7F\u7528Formatter.formatFileSize(Context context, long b)\u5C06\u5176\u81EA\u52A8\u8F6C\u6210K,M,G\u7B49</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,5),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","\u4EFB\u52A1\u7BA1\u7406\u5668(ActivityManager).html.vue"]]);export{k as default};
