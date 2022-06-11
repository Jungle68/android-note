import{_ as n,o as e,c as s,e as a}from"./app.89e8a229.js";const i={},t=a(`<h1 id="androidstudio\u4E2D\u8FDB\u884Cndk\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#androidstudio\u4E2D\u8FDB\u884Cndk\u5F00\u53D1" aria-hidden="true">#</a> AndroidStudio\u4E2D\u8FDB\u884Cndk\u5F00\u53D1</h1><ul><li><p>\u521B\u5EFA\u5DE5\u7A0B\uFF0C\u58F0\u660E<code>native</code>\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">startDaemon</span><span class="token punctuation">(</span><span class="token class-name">String</span> serviceName<span class="token punctuation">,</span> <span class="token keyword">int</span> sdkVersion<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">static</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">loadLibrary</span><span class="token punctuation">(</span><span class="token string">&quot;daemon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u751F\u6210<code>class</code>\u6587\u4EF6\u3002<br> \u6267\u884C<code>Build-Make Project</code>\u547D\u4EE4\uFF0C\u751F\u6210<code>class</code>\u6587\u4EF6\u3002\u6240\u5728\u76EE\u5F55\u4E3A<code>app_path/build/intermediates/classes/debug</code></p></li><li><p>\u6267\u884C<code>javah</code>\u751F\u6210<code>.h\u6587\u4EF6</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\Administrator&gt;javah -help
\u7528\u6CD5:
  javah [options] &lt;classes&gt;
\u5176\u4E2D, [options] \u5305\u62EC:
  -o &lt;file&gt;                \u8F93\u51FA\u6587\u4EF6 (\u53EA\u80FD\u4F7F\u7528 -d \u6216 -o \u4E4B\u4E00)
  -d &lt;dir&gt;                 \u8F93\u51FA\u76EE\u5F55
  -v  -verbose             \u542F\u7528\u8BE6\u7EC6\u8F93\u51FA
  -h  --help  -?           \u8F93\u51FA\u6B64\u6D88\u606F
  -version                 \u8F93\u51FA\u7248\u672C\u4FE1\u606F
  -jni                     \u751F\u6210 JNI \u6837\u5F0F\u7684\u6807\u5934\u6587\u4EF6 (\u9ED8\u8BA4\u503C)
  -force                   \u59CB\u7EC8\u5199\u5165\u8F93\u51FA\u6587\u4EF6
  -classpath &lt;path&gt;        \u4ECE\u4E2D\u52A0\u8F7D\u7C7B\u7684\u8DEF\u5F84
  -cp &lt;path&gt;               \u4ECE\u4E2D\u52A0\u8F7D\u7C7B\u7684\u8DEF\u5F84
  -bootclasspath &lt;path&gt;    \u4ECE\u4E2D\u52A0\u8F7D\u5F15\u5BFC\u7C7B\u7684\u8DEF\u5F84
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<code>Studio Terminal</code>\u4E2D\u8FDB\u5165\u5230<code>src/main</code>\u76EE\u5F55\u4E0B\u6267\u884C<code>javah</code>\u547D\u4EE4:<br><code>javah -d jni -classpath &lt;SDK_android.jar&gt;;&lt;APP_classes&gt; &lt;class&gt;</code></p><p><code>F:\\DaemonService\\app\\src\\main&gt;javah -d jni -classpath C:\\develop\\android-sdk-windows\\platforms\\android-22\\android.jar;..\\..\\build\\intermediates\\classes\\debug com.charonchui.daemonservice.service.DaemonService</code> \u6267\u884C\u5B8C\u6210\u540E\u5C31\u4F1A\u5728<code>src/main/jni</code>\u76EE\u5F55\u4E0B\u751F\u6210<code>com_charonchui_daemonservice_service_DaemonService.h</code>\u6587\u4EF6\u3002</p></li><li><p>\u5728<code>module/src/main/jni</code>\u76EE\u5F55\u4E0B\u521B\u5EFA\u5BF9\u5E94\u7684<code>.c</code>\u6587\u4EF6\u3002</p></li><li><p>\u914D\u7F6E<code>ndk</code>\u8DEF\u5F84\uFF0C\u5728\u9879\u76EE\u53F3\u952E<code>Moudle Setting</code>\u4E2D\u8BBE\u7F6E\u3002<br><img src="https://raw.githubusercontent.com/CharonChui/Pictures/master/studio_ndk_jni.png?raw=true" alt="image"></p></li><li><p>\u5728<code>build.gradle</code>\u4E2D\u914D\u7F6E<code>ndk</code>\u9009\u9879</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>android <span class="token punctuation">{</span>
	compileSdkVersion <span class="token number">23</span>
	buildToolsVersion <span class="token string">&quot;23.0.1&quot;</span>

	defaultConfig <span class="token punctuation">{</span>
		applicationId <span class="token string">&quot;com.charonchui.daemonservice&quot;</span>
		minSdkVersion <span class="token number">8</span>
		targetSdkVersion <span class="token number">23</span>
		versionCode <span class="token number">1</span>
		versionName <span class="token string">&quot;1.0&quot;</span>

		ndk <span class="token punctuation">{</span>
			moduleName <span class="token string">&quot;uninstall_feedback&quot;</span> <span class="token comment">// \u914D\u7F6Eso\u540D\u5B57</span>
			ldLibs <span class="token string">&quot;log&quot;</span>
<span class="token comment">//            abiFilters &quot;armeabi&quot;, &quot;x86&quot;  // \u9ED8\u8BA4\u5C31\u662F\u5168\u90E8\u7684\uFF0C\u52A0\u4E86\u914D\u7F6E\u624D\u4F1A\u751F\u6210\u9009\u4E2D\u7684</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	buildTypes <span class="token punctuation">{</span>
		release <span class="token punctuation">{</span>
			minifyEnabled <span class="token boolean">false</span>
			proguardFiles <span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span>&#39;proguard<span class="token operator">-</span>android<span class="token punctuation">.</span>txt<span class="token char">&#39;), &#39;</span>proguard<span class="token operator">-</span>rules<span class="token punctuation">.</span>pro&#39;
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u53EF\u80FD\u4F1A\u51FA\u73B0\u9519\u8BEF:</p><ul><li><code>Error: NDK integration is deprecated in the current plugin. Consider trying the new experimental plugin. For details, see http://tools.android.com/tech-docs/new-build-system/gradle-experimental. Set &quot;android.useDeprecatedNdk=true&quot; in gradle.properties to continue using the current NDK integration.</code> \u89E3\u51B3\u65B9\u6CD5\u5C31\u662F\u5728<code>gradle.properties</code>\u6587\u4EF6\u4E2D\u6DFB\u52A0<code>android:useDeprecatedNdk=true</code>\u5C31\u53EF\u4EE5\u4E86\u3002</li><li>\`Error:Execution failed for task &#39;:app:compileDebugNdk&#39;. <blockquote><p>com.android.ide.common.process.ProcessException: org.gradle.process.internal.ExecException: Process &#39;command &#39;E:\\android-ndk-r10\\ndk-build.cmd&#39;&#39; finished with non-zero exit value 2<code> \u89E3\u51B3\u65B9\u6CD5\u5C31\u662F\u5728</code>jni<code>\u76EE\u5F55\u5EFA\u4E00\u4E2A\u4EFB\u610F\u540D\u5B57\u7684</code>.c\`\u7A7A\u6587\u4EF6\u5C31\u53EF\u4EE5\u4E86\u3002</p></blockquote></li></ul></li><li><p>\u6267\u884CBuild<br> \u7136\u540E\u5C31\u53EF\u4EE5\u5728<code>app/build/intermediates/ndk/debug/obj/local</code>\u4E0B\u770B\u5230\u6240\u6709\u67B6\u6784\u7684<code>so</code>\u4E86\u3002 <img src="https://raw.githubusercontent.com/CharonChui/Pictures/master/studio_ndk_build.png?raw=true" alt="image"></p></li></ul><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,4),o=[t];function d(c,l){return e(),s("div",null,o)}var p=n(i,[["render",d],["__file","AndroidStudio\u4E2D\u8FDB\u884Cndk\u5F00\u53D1.html.vue"]]);export{p as default};
