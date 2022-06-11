import{_ as n,o as a,c as s,e as t}from"./app.89e8a229.js";const e={},p=t(`<h1 id="\u81EA\u5B9A\u4E49\u63A7\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u63A7\u4EF6" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u63A7\u4EF6</h1><h2 id="\u81EA\u5B9A\u4E49\u63A7\u4EF6\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u63A7\u4EF6\u7684\u6B65\u9AA4" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u63A7\u4EF6\u7684\u6B65\u9AA4</h2><ul><li>\u81EA\u5B9A\u4E49\u4E00\u4E2AView\u7EE7\u627FViewGroup\u7B49\u76F8\u4F3C\u6548\u679C\u7684View;</li><li>\u91CD\u5199\u6784\u9020\u65B9\u6CD5<br> \u53EF\u4EE5\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u9644\u52A0\u8981\u663E\u793A\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A<br><code>View.inflate(context, R.layout.ui_setting_view, this);</code> \u8FD9\u91CC\u5C31\u662F\u8BA9\u8FD9\u4E2A\u586B\u5145\u51FA\u6765\u7684<code>View</code>\u663E\u793A\u5230\u5F53\u524D\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684\u8FD9\u4E2A\u5E03\u5C40\u4E2D<code>View</code>\u7684\u6784\u9020\u65B9\u6CD5\u5171\u6709\u4E09\u4E2A\uFF0C\u5176\u4E2D\u4E00\u4E2A\u53C2\u6570\u7684\u6784\u9020\u65B9\u6CD5\uFF0C\u662F\u901A\u8FC7\u4EE3\u7801<code>new</code>\u5BF9\u8C61\u7684\u65F6\u5019\u8C03\u7528\uFF0C \u4E24\u4E2A\u53C2\u6570\u7684\u6784\u9020\u65B9\u6CD5\u662F\u901A\u8FC7\u5728<code>xml</code>\u5E03\u5C40\u6587\u4EF6\u4E2D\u58F0\u660E\u7684\u6784\u9020</li><li>\u5B9E\u73B0\u901A\u8FC7<code>Xml</code>\u6587\u4EF6\u914D\u7F6E\u5C5E\u6027 <ul><li><code>values</code>\u76EE\u5F55\u4E0B\u65B0\u5EFA<code>attrs.xml</code></li><li>\u5185\u5BB9\u5982\u4E0B<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>declare-styleable</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SettingView<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>attr</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>string<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>declare-styleable</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><p>\u914D\u7F6E\u5B8C\u6210\u540E\u4F1A\u81EA\u52A8\u5728<code>R</code>\u6587\u4EF6\u4E2D\u751F\u4EA7\u5BF9\u5E94\u7684<code>R.styleable</code>\u5185\u90E8\u7C7B</p><ul><li>\u4EE3\u7801\u8BBE\u7F6E <ul><li>\u5728\u6784\u9020\u51FD\u6570\u4E2D\u5C06<code>Xml</code>\u914D\u7F6E\u4E0E\u5C5E\u6027\u503C\u5EFA\u7ACB\u6620\u5C04\u5173\u7CFB</li><li>\u4F7F\u7528<code>typedArray.getString(R.styleable.SettingView_title)</code>\u5F97\u5230<code>xml</code>\u4E2D\u7684\u5C5E\u6027\u503C\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u7ED9\u76F8\u5E94\u63A7\u4EF6\u7684\u5C5E\u6027\u3002</li><li>\u8C03\u7528<code>typedArray.recycle()</code>; \u56DE\u6536\u6389\u8D44\u6E90.<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">SettingView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">AttributeSet</span> attrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> attrs<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">TypedArray</span> typedArray <span class="token operator">=</span> mContext<span class="token punctuation">.</span><span class="token function">obtainStyledAttributes</span><span class="token punctuation">(</span>attrs<span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>styleable<span class="token punctuation">.</span>SettingView<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//R.styleable.SettingView_title\u4E3AR\u6587\u4EF6\u4E2D\u81EA\u52A8\u751F\u6210\u7684\u76F8\u5E94\u5C5E\u6027\u540D</span>
	<span class="token class-name">String</span> title <span class="token operator">=</span> typedArray<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>styleable<span class="token punctuation">.</span>SettingView_title<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">setTitle</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
	typedArray<span class="token punctuation">.</span><span class="token function">recycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>\u5E03\u5C40\u4F7F\u7528<br><code>Android</code>\u7684\u547D\u540D\u7A7A\u95F4\u4E3A<code>xmlns:android=http://schemas.android.com/apk/res/android</code><br> \u5B9A\u4E49\u81EA\u5DF1\u7684\u547D\u540D\u7A7A\u95F4\u65F6\u53EA\u9700\u8981\u628A\u6700\u540E\u9762\u7684<code>android</code>\u6539\u4E3A\u6211\u4EEC\u5E94\u7528\u7A0B\u5E8F\u7684\u5305\u540D <code>xmlns:itheima=&quot;http://schemas.android.com/apk/res/com.charon.test&quot;</code></li></ul><p>\u4EE5\u7CFB\u7EDF\u8BBE\u7F6E\u9875\u9762\u7684\u9009\u4E2D\u4E3A\u4F8B</p><p><img src="https://raw.githubusercontent.com/CharonChui/Pictures/master/custom_widget.jpg" alt="image"></p><ol><li><p>\u6837\u5F0F<br> \u793A\u4F8B\u4EE3\u7801\uFF1A<code>settingview.xml</code></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RelativeLayout</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>
		<span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/tv_settingview_title<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_alignParentLeft</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_alignParentTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_marginLeft</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4dip<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u529F\u80FD\u7684\u63CF\u8FF0<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>textAppearance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>?android:attr/textAppearanceLarge<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#000000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>
		<span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/tv_settingview_status<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_alignParentLeft</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_below</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/tv_settingview_title<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_marginLeft</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4dip<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_marginTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5dip<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u529F\u80FD\u7684\u72B6\u6001<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>textAppearance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>?android:attr/textAppearanceSmall<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#88000000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckBox</span>
		<span class="token attr-name"><span class="token namespace">android:</span>clickable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>focusable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/cb_settingview_status<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_alignParentRight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_alignParentTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RelativeLayout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728<code>res-values</code>\u4E0B\u9762\u65B0\u5EFA\u4E00\u4E2A<code>attrs.xml</code>\u6587\u4EF6</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>declare-styleable</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SettingView<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>//\u8FD9\u4E2Aname\u5C31\u662F\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684\u7EC4\u5408\u63A7\u4EF6\u7684\u540D\u5B57
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>attr</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>string<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  //\u8FD9\u4E2Aattr\u7684name\u5C31\u662F\u6211\u4EEC\u8981\u5728xml\u6587\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528\u7684\u5C5E\u6027format\u662F\u6307\u8FD9\u4E2A\u5C5E\u6027\u7684\u503C\u662F\u4EC0\u4E48\u7C7B\u578B\u7684
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>attr</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>unchecked_text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>string<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>attr</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checked_text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>string<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>declare-styleable</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u7EE7\u627F<code>ViewGroup</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SettingView</span> <span class="token keyword">extends</span> <span class="token class-name">RelativeLayout</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">TextView</span> tv_settingview_title<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">TextView</span> tv_settingview_status<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">CheckBox</span> cb_settingview_status<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> check_text<span class="token punctuation">;</span> <span class="token comment">// \u9009\u4E2D\u6587\u672C</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> uncheck_text<span class="token punctuation">;</span> <span class="token comment">// \u672A\u9009\u4E2D\u6587\u672C</span>

	<span class="token keyword">public</span> <span class="token class-name">SettingView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">AttributeSet</span> attrs<span class="token punctuation">,</span> <span class="token keyword">int</span> defStyle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> defStyle<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * \u5E03\u5C40\u6587\u4EF6\u521B\u5EFAview\u5BF9\u8C61 \u4F1A\u4F7F\u7528 \u6709\u4E24\u4E2A\u53C2\u6570\u7684\u6784\u9020\u65B9\u6CD5.
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">SettingView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">AttributeSet</span> attrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> attrs<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">View</span> view <span class="token operator">=</span> <span class="token class-name">View</span><span class="token punctuation">.</span><span class="token function">inflate</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>ui_setting_view<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//inflate\u4E4B\u540E\u76F4\u63A5\u6307\u5B9A\u4E86\u7236\u5143\u7D20\u5C31\u662Fthis\uFF0C\u6240\u4EE5\u8FD9\u53E5\u4EE3\u7801\u4E00\u6267\u884C\u5C31\u4F1A\u5728Relativelayout\u4E2D\u663E\u793A\u51FA\u6765\u8FD9\u4E2A\u6837\u5F0F</span>
		cb_settingview_status <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">CheckBox</span><span class="token punctuation">)</span> view
				<span class="token punctuation">.</span><span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>cb_settingview_status<span class="token punctuation">)</span><span class="token punctuation">;</span>
		tv_settingview_status <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TextView</span><span class="token punctuation">)</span> view
				<span class="token punctuation">.</span><span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>tv_settingview_status<span class="token punctuation">)</span><span class="token punctuation">;</span>
		tv_settingview_title <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TextView</span><span class="token punctuation">)</span> view
				<span class="token punctuation">.</span><span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>tv_settingview_title<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// \u628A\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027 \u548C \u5C5E\u6027\u96C6attrs \u5EFA\u7ACB\u4E00\u4E2A\u5BF9\u5E94\u5173\u7CFB.\u5728\u7528attrs.xml\u58F0\u660E\u4E86\u4E4B\u540E\u4F1A\u5728R\u6587\u4EF6\u4E2D\u751F\u6210\u4E00\u4E2AR.styleable.SettingView\u8FD9\u662F\u4E00\u4E2Aint\u578B\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u662F\u6211\u4EEC\u5728attrs\u4E2D\u58F0\u660E\u7684\u4E09\u4E2Aattr\u5C5E\u6027</span>
		<span class="token class-name">TypedArray</span> a <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">obtainStyledAttributes</span><span class="token punctuation">(</span>attrs<span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>styleable<span class="token punctuation">.</span>SettingView<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> title <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>styleable<span class="token punctuation">.</span>SettingView_title<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8FD9\u4E2AR.styleable.SettingView_title\u5C31\u662F\u6211\u4EEC\u5728attrs\u4E2D\u5B9A\u4E49\u7684title</span>
		check_text <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>styleable<span class="token punctuation">.</span>SettingView_checked_text<span class="token punctuation">)</span><span class="token punctuation">;</span>
		uncheck_text <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>styleable<span class="token punctuation">.</span>SettingView_unchecked_text<span class="token punctuation">)</span><span class="token punctuation">;</span>
		a<span class="token punctuation">.</span><span class="token function">recycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token class-name">SettingView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">initView</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528\u81EA\u5B9A\u4E49\u63A7\u4EF6</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
&lt;LinearLayout xmlns:android=http://schemas.android.com/apk/res/android
	//\u58F0\u660E\u81EA\u5DF1\u7684\u547D\u540D\u63A7\u4EF6\u5F15\u5165itheima\u628A\u6700\u540E\u9762\u7684android\u6539\u4E3A\u6211\u4EEC\u5E94\u7528\u7A0B\u5E8F\u7684\u5305\u540D
	xmlns:itheima=&quot;http://schemas.android.com/apk/res/com.itheima.mobilesafe&quot;
	android:layout_width=&quot;match_parent&quot;
	android:layout_height=&quot;match_parent&quot;
	android:orientation=&quot;vertical&quot; &gt;
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60dip<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#3185A3<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>gravity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BBE\u7F6E\u4E2D\u5FC3<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#B3EBFF<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>textSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>25sp<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>com.itheima.mobilesafe.ui.SettingView</span>
		<span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/sv_setting_update<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">itheima:</span>checked_text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u81EA\u52A8\u66F4\u65B0\u5DF2\u7ECF\u5F00\u542F<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">itheima:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u81EA\u52A8\u66F4\u65B0\u8BBE\u7F6E<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name"><span class="token namespace">itheima:</span>unchecked_text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u81EA\u52A8\u66F4\u65B0\u6CA1\u6709\u5F00\u542F<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>com.itheima.mobilesafe.ui.SettingView</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,10),o=[p];function c(l,u){return a(),s("div",null,o)}var k=n(e,[["render",c],["__file","\u81EA\u5B9A\u4E49\u63A7\u4EF6.html.vue"]]);export{k as default};
