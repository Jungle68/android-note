import{_ as e,o,c,e as a}from"./app.e2a3b496.js";const d={},i=a(`<h1 id="jvm\u5783\u573E\u56DE\u6536\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#jvm\u5783\u573E\u56DE\u6536\u673A\u5236" aria-hidden="true">#</a> JVM\u5783\u573E\u56DE\u6536\u673A\u5236</h1><h2 id="\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5" aria-hidden="true">#</a> \u5F15\u7528\u8BA1\u6570\u7B97\u6CD5</h2><p>\u5728<code>JDK1.2</code>\u4E4B\u524D\uFF0C\u4F7F\u7528\u7684\u662F\u5F15\u7528\u8BA1\u6570\u5668\u7B97\u6CD5\uFF0C\u5373\u5F53\u8FD9\u4E2A\u7C7B\u88AB\u52A0\u8F7D\u5230\u5185\u5B58\u4EE5\u540E\uFF0C\u5C31\u4F1A\u4EA7\u751F\u65B9\u6CD5\u533A\uFF0C \u5806\u6808\u3001\u7A0B\u5E8F\u8BA1\u6570\u5668\u7B49\u4E00\u7CFB\u5217\u4FE1\u606F\uFF0C\u5F53\u521B\u5EFA\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u4E3A\u8FD9\u4E2A\u5BF9\u8C61\u5728\u5806\u6808\u7A7A\u95F4\u4E2D\u5206\u914D\u5BF9\u8C61\uFF0C \u540C\u65F6\u4F1A\u4EA7\u751F\u4E00\u4E2A\u5F15\u7528\u8BA1\u6570\u5668\uFF0C\u540C\u65F6\u5F15\u7528\u8BA1\u6570\u5668+1\uFF0C\u5F53\u6709\u65B0\u7684\u5F15\u7528\u7684\u65F6\u5019\uFF0C\u5F15\u7528\u8BA1\u6570\u5668\u7EE7\u7EED+1\uFF0C \u800C\u5F53\u5176\u4E2D\u4E00\u4E2A\u5F15\u7528\u9500\u6BC1\u7684\u65F6\u5019\uFF0C\u5F15\u7528\u8BA1\u6570\u5668-1\uFF0C\u5F53\u5F15\u7528\u8BA1\u6570\u5668\u88AB\u51CF\u4E3A\u96F6\u7684\u65F6\u5019\uFF0C \u6807\u5FD7\u7740\u8FD9\u4E2A\u5BF9\u8C61\u5DF2\u7ECF\u6CA1\u6709\u5F15\u7528\u4E86\uFF0C\u53EF\u4EE5\u56DE\u6536\u4E86\uFF01 \u8FD9\u79CD\u7B97\u6CD5\u5728JDK1.2\u4E4B\u524D\u7684\u7248\u672C\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u4F46\u662F\u968F\u7740\u4E1A\u52A1\u7684\u53D1\u5C55\uFF0C\u5F88\u5FEB\u51FA\u73B0\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u90A3\u5C31\u662F\u4E92\u76F8\u5F15\u7528\u7684\u95EE\u9898:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ObjA</span><span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token class-name">ObjB</span>
<span class="token class-name">ObjB</span><span class="token punctuation">.</span>obj <span class="token operator">-</span> <span class="token class-name">ObjA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u7684\u4EE3\u7801\u4F1A\u4EA7\u751F\u5982\u4E0B\u5F15\u7528\u60C5\u5F62<code>objA</code>\u6307\u5411<code>objB</code>\uFF0C\u800C<code>objB</code>\u53C8\u6307\u5411<code>objA</code>\uFF0C\u8FD9\u6837\u5F53\u5176\u4ED6\u6240\u6709\u7684\u5F15\u7528\u90FD\u6D88\u5931\u4E86\u4E4B\u540E\uFF0C <code>objA</code>\u548C<code>objB</code>\u8FD8\u6709\u4E00\u4E2A\u76F8\u4E92\u7684\u5F15\u7528\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E24\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\u8BA1\u6570\u5668\u5404\u4E3A1\uFF0C \u800C\u5B9E\u9645\u4E0A\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u90FD\u5DF2\u7ECF\u6CA1\u6709\u989D\u5916\u7684\u5F15\u7528\uFF0C\u5DF2\u7ECF\u662F\u5783\u573E\u4E86\u3002</p><p><img src="https://raw.githubusercontent.com/CharonChui/Pictures/master/yinyongjishu.jpg" alt="image"></p><h2 id="\u6839\u641C\u7D22\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6839\u641C\u7D22\u7B97\u6CD5" aria-hidden="true">#</a> \u6839\u641C\u7D22\u7B97\u6CD5</h2><p>\u6839\u641C\u7D22\u7B97\u6CD5\u662F\u4ECE\u79BB\u6563\u6570\u5B66\u4E2D\u7684\u56FE\u8BBA\u5F15\u5165\u7684\uFF0C\u7A0B\u5E8F\u628A\u6240\u6709\u7684\u5F15\u7528\u5173\u7CFB\u770B\u4F5C\u4E00\u5F20\u56FE\uFF0C \u4ECE\u4E00\u4E2A\u8282\u70B9<code>GC ROOT</code>\u5F00\u59CB\uFF0C\u5BFB\u627E\u5BF9\u5E94\u7684\u5F15\u7528\u8282\u70B9\uFF0C\u627E\u5230\u8FD9\u4E2A\u8282\u70B9\u4EE5\u540E\uFF0C\u7EE7\u7EED\u5BFB\u627E\u8FD9\u4E2A\u8282\u70B9\u7684\u5F15\u7528\u8282\u70B9\uFF0C \u5F53\u6240\u6709\u7684\u5F15\u7528\u8282\u70B9\u5BFB\u627E\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u5269\u4F59\u7684\u8282\u70B9\u5219\u88AB\u8BA4\u4E3A\u662F\u6CA1\u6709\u88AB\u5F15\u7528\u5230\u7684\u8282\u70B9\uFF0C\u5373\u65E0\u7528\u7684\u8282\u70B9\u3002<br><img src="https://raw.githubusercontent.com/CharonChui/Pictures/master/genshousuo.jpg" alt="image"></p><p>\u76EE\u524Djava\u4E2D\u53EF\u4F5C\u4E3AGC Root\u7684\u5BF9\u8C61\u6709:</p><ul><li>\u865A\u62DF\u673A\u6808\u4E2D\u5F15\u7528\u7684\u5BF9\u8C61\uFF08\u672C\u5730\u53D8\u91CF\u8868\uFF09</li><li>\u65B9\u6CD5\u533A\u4E2D\u9759\u6001\u5C5E\u6027\u5F15\u7528\u7684\u5BF9\u8C61</li><li>\u65B9\u6CD5\u533A\u4E2D\u5E38\u91CF\u5F15\u7528\u7684\u5BF9\u8C61</li><li>\u672C\u5730\u65B9\u6CD5\u6808\u4E2D\u5F15\u7528\u7684\u5BF9\u8C61\uFF08Native\u5BF9\u8C61\uFF09</li></ul><h2 id="\u5783\u573E\u56DE\u6536\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u56DE\u6536\u7B97\u6CD5" aria-hidden="true">#</a> \u5783\u573E\u56DE\u6536\u7B97\u6CD5</h2><p>\u800C\u624B\u673A\u540E\u7684\u5783\u573E\u662F\u901A\u8FC7\u4EC0\u4E48\u7B97\u6CD5\u6765\u56DE\u6536\u7684\u5462\uFF1A</p><ul><li>\u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5</li><li>\u590D\u5236\u7B97\u6CD5</li><li>\u6807\u8BB0\u6574\u7406\u7B97\u6CD5</li></ul><p>\u90A3\u6211\u4EEC\u5C31\u7EE7\u7EED\u5206\u6790\u4E0B\u8FD9\u4E09\u79CD\u7B97\u6CD5\uFF1A</p><ul><li><p>\u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5(Mark-Sweep)<br><img src="https://raw.githubusercontent.com/CharonChui/Pictures/master/biaoji_qingchu.jpg" alt="image"> \u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5\u91C7\u7528\u4ECE\u6839\u96C6\u5408\u8FDB\u884C\u626B\u63CF\uFF0C\u5BF9\u5B58\u6D3B\u7684\u5BF9\u8C61\u5BF9\u8C61\u6807\u8BB0\uFF0C\u6807\u8BB0\u5B8C\u6BD5\u540E\uFF0C\u518D\u626B\u63CF\u6574\u4E2A\u7A7A\u95F4\u4E2D\u672A\u88AB\u6807\u8BB0 \u7684\u5BF9\u8C61\uFF0C\u8FDB\u884C\u56DE\u6536\uFF0C\u5982\u4E0A\u56FE\u6240\u793A\u3002 \u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5\u4E0D\u9700\u8981\u8FDB\u884C\u5BF9\u8C61\u7684\u79FB\u52A8\uFF0C\u5E76\u4E14\u4EC5\u5BF9\u4E0D\u5B58\u6D3B\u7684\u5BF9\u8C61\u8FDB\u884C\u5904\u7406\uFF0C\u5728\u5B58\u6D3B\u5BF9\u8C61\u6BD4\u8F83\u591A\u7684\u60C5\u51B5\u4E0B\u6781\u4E3A\u9AD8\u6548\uFF0C\u4F46\u7531\u4E8E\u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5\u76F4\u63A5\u56DE\u6536\u4E0D\u5B58\u6D3B\u7684\u5BF9\u8C61\uFF0C\u56E0\u6B64\u4F1A\u9020\u6210\u5185\u5B58\u788E\u7247\uFF01</p></li><li><p>\u590D\u5236\u7B97\u6CD5(Copying)<br><img src="https://raw.githubusercontent.com/CharonChui/Pictures/master/fuzhisuanfa.jpg" alt="image"></p><p>\u590D\u5236\u7B97\u6CD5\u91C7\u7528\u4ECE\u6839\u96C6\u5408\u626B\u63CF\uFF0C\u5E76\u5C06\u5B58\u6D3B\u5BF9\u8C61\u590D\u5236\u5230\u4E00\u5757\u65B0\u7684\uFF0C\u6CA1\u6709\u4F7F\u7528\u8FC7\u7684\u7A7A\u95F4\u4E2D\uFF0C\u8FD9\u79CD\u7B97\u6CD5\u5F53\u63A7\u4EF6\u5B58\u6D3B\u7684\u5BF9\u8C61\u6BD4\u8F83\u5C11\u65F6\uFF0C\u6781\u4E3A\u9AD8\u6548\uFF0C\u4F46\u662F\u5E26\u6765\u7684\u6210\u672C\u662F\u9700\u8981\u4E00\u5757\u5185\u5B58\u4EA4\u6362\u7A7A\u95F4\u7528\u4E8E\u8FDB\u884C\u5BF9\u8C61\u7684\u79FB\u52A8\u3002</p></li><li><p>\u6807\u8BB0-\u6574\u7406\u7B97\u6CD5(Mark-Compact)<br><img src="https://raw.githubusercontent.com/CharonChui/Pictures/master/biaoji_zhengli.jpg" alt="image"></p><p>\u6574\u7406\u7B97\u6CD5\u91C7\u7528\u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5\u4E00\u6837\u7684\u65B9\u5F0F\u8FDB\u884C\u5BF9\u8C61\u7684\u6807\u8BB0\uFF0C\u4F46\u5728\u6E05\u9664\u65F6\u4E0D\u540C\uFF0C\u5728\u56DE\u6536\u4E0D\u5B58\u6D3B\u7684\u5BF9\u8C61\u5360\u7528\u7684\u7A7A\u95F4\u540E\uFF0C\u4F1A\u5C06\u6240\u6709\u7684\u5B58\u6D3B\u5BF9\u8C61\u5F80\u5DE6\u7AEF\u7A7A\u95F2\u7A7A\u95F4\u79FB\u52A8\uFF0C\u5E76\u66F4\u65B0\u5BF9\u5E94\u7684\u6307\u9488\u3002\u6807\u8BB0-\u6574\u7406\u7B97\u6CD5\u662F\u5728\u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5\u7684\u57FA\u7840\u4E0A\uFF0C\u53C8\u8FDB\u884C\u4E86\u5BF9\u8C61\u7684\u79FB\u52A8\uFF0C\u56E0\u6B64\u6210\u672C\u66F4\u9AD8\uFF0C\u4F46\u662F\u5374\u89E3\u51B3\u4E86\u5185\u5B58\u788E\u7247\u7684\u95EE\u9898\u3002</p></li><li><p>\u5206\u4EE3\u6536\u96C6\u7B97\u6CD5(Generational Collection) \u5206\u4EE3\u6536\u96C6\u7B97\u6CD5\u662F\u76EE\u524D\u5927\u90E8\u5206<code>JVM</code>\u7684\u5783\u573E\u6536\u96C6\u5668\u91C7\u7528\u7684\u7B97\u6CD5\u3002\u5B83\u7684\u6838\u5FC3\u601D\u60F3\u662F\u6839\u636E\u5BF9\u8C61\u5B58\u6D3B\u7684\u751F\u547D\u5468\u671F\u5C06\u5185\u5B58\u5212\u5206\u4E3A\u82E5\u5E72\u4E2A\u4E0D\u540C\u7684\u533A\u57DF\u3002 \u4E00\u822C\u60C5\u51B5\u4E0B\u5C06\u5806\u533A\u5212\u5206\u4E3A\u8001\u5E74\u4EE3\uFF08<code>Tenured Generation</code>\uFF09\u548C\u65B0\u751F\u4EE3\uFF08<code>Young Generation</code>\uFF09\uFF0C\u8001\u5E74\u4EE3\u7684\u7279\u70B9\u662F\u6BCF\u6B21\u5783\u573E\u6536\u96C6\u65F6\u53EA\u6709\u5C11\u91CF\u5BF9\u8C61\u9700\u8981\u88AB\u56DE\u6536\uFF0C \u800C\u65B0\u751F\u4EE3\u7684\u7279\u70B9\u662F\u6BCF\u6B21\u5783\u573E\u56DE\u6536\u65F6\u90FD\u6709\u5927\u91CF\u7684\u5BF9\u8C61\u9700\u8981\u88AB\u56DE\u6536\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u4EE3\u7684\u7279\u70B9\u91C7\u53D6\u6700\u9002\u5408\u7684\u6536\u96C6\u7B97\u6CD5\u3002 \u3000\u3000\u76EE\u524D\u5927\u90E8\u5206\u5783\u573E\u6536\u96C6\u5668\u5BF9\u4E8E\u65B0\u751F\u4EE3\u90FD\u91C7\u53D6\u590D\u5236\u7B97\u6CD5\uFF0C\u56E0\u4E3A\u65B0\u751F\u4EE3\u4E2D\u6BCF\u6B21\u5783\u573E\u56DE\u6536\u90FD\u8981\u56DE\u6536\u5927\u90E8\u5206\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u8BF4\u9700\u8981\u590D\u5236\u7684\u64CD\u4F5C\u6B21\u6570\u8F83\u5C11\uFF0C \u4F46\u662F\u5B9E\u9645\u4E2D\u5E76\u4E0D\u662F\u6309\u71671\uFF1A1\u7684\u6BD4\u4F8B\u6765\u5212\u5206\u65B0\u751F\u4EE3\u7684\u7A7A\u95F4\u7684\uFF0C\u4E00\u822C\u6765\u8BF4\u662F\u5C06\u65B0\u751F\u4EE3\u5212\u5206\u4E3A\u4E00\u5757\u8F83\u5927\u7684<code>Eden</code>\u7A7A\u95F4\u548C\u4E24\u5757\u8F83\u5C0F\u7684<code>Survivor</code>\u7A7A\u95F4\uFF0C \u6BCF\u6B21\u4F7F\u7528<code>Eden</code>\u7A7A\u95F4\u548C\u5176\u4E2D\u7684\u4E00\u5757<code>Survivor</code>\u7A7A\u95F4\uFF0C\u5F53\u8FDB\u884C\u56DE\u6536\u65F6\uFF0C\u5C06<code>Eden</code>\u548C<code>Survivor</code>\u4E2D\u8FD8\u5B58\u6D3B\u7684\u5BF9\u8C61\u590D\u5236\u5230\u53E6\u4E00\u5757<code>Survivor</code>\u7A7A\u95F4\u4E2D\uFF0C \u7136\u540E\u6E05\u7406\u6389<code>Eden</code>\u548C\u521A\u624D\u4F7F\u7528\u8FC7\u7684<code>Survivor</code>\u7A7A\u95F4\u3002</p></li></ul><p>\u800C\u7531\u4E8E\u8001\u5E74\u4EE3\u7684\u7279\u70B9\u662F\u6BCF\u6B21\u56DE\u6536\u90FD\u53EA\u56DE\u6536\u5C11\u91CF\u5BF9\u8C61\uFF0C\u4E00\u822C\u4F7F\u7528\u7684\u662F\u6807\u8BB0-\u6574\u7406\u7B97\u6CD5\u3002 \u3000\u3000\u6CE8\u610F\uFF0C\u5728\u5806\u533A\u4E4B\u5916\u8FD8\u6709\u4E00\u4E2A\u4EE3\u5C31\u662F\u6C38\u4E45\u4EE3\uFF08<code>Permanet Generation</code>\uFF09\uFF0C\u5B83\u7528\u6765\u5B58\u50A8<code>class</code>\u7C7B\u3001\u5E38\u91CF\u3001\u65B9\u6CD5\u63CF\u8FF0\u7B49\u3002\u5BF9\u6C38\u4E45\u4EE3\u7684\u56DE\u6536\u4E3B\u8981\u56DE\u6536\u4E24\u90E8\u5206\u5185\u5BB9\uFF1A \u5E9F\u5F03\u5E38\u91CF\u548C\u65E0\u7528\u7684\u7C7B\u3002<br><img src="https://raw.githubusercontent.com/CharonChui/Pictures/master/xinshengdai.jpg" alt="image"> \u5BF9\u8C61\u7684\u5185\u5B58\u5206\u914D\uFF0C\u5F80\u5927\u65B9\u5411\u4E0A\u8BB2\u5C31\u662F\u5728\u5806\u4E0A\u5206\u914D\uFF0C\u5BF9\u8C61\u4E3B\u8981\u5206\u914D\u5728\u65B0\u751F\u4EE3\u7684<code>Eden Space</code>\u548C<code>From Space</code>\uFF0C \u5C11\u6570\u60C5\u51B5\u4E0B\u4F1A\u76F4\u63A5\u5206\u914D\u5728\u8001\u5E74\u4EE3\u3002\u5982\u679C\u65B0\u751F\u4EE3\u7684<code>Eden Space</code>\u548C<code>From Space</code>\u7684\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u5219\u4F1A\u53D1\u8D77\u4E00\u6B21<code>GC</code>\uFF0C\u5982\u679C\u8FDB\u884C\u4E86<code>GC</code>\u4E4B\u540E\uFF0C<code>Eden Space</code>\u548C<code>From Space</code> \u80FD\u591F\u5BB9\u7EB3\u8BE5\u5BF9\u8C61\u5C31\u653E\u5728<code>Eden Space</code>\u548C<code>From Space</code>\u3002\u5728<code>GC</code>\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5C06<code>Eden Space</code>\u548C<code>From Space</code>\u4E2D\u7684\u5B58\u6D3B\u5BF9\u8C61\u79FB\u52A8\u5230<code>To Space</code>\uFF0C \u7136\u540E\u5C06<code>Eden Space</code>\u548C<code>From Space</code>\u8FDB\u884C\u6E05\u7406\u3002\u5982\u679C\u5728\u6E05\u7406\u7684\u8FC7\u7A0B\u4E2D\uFF0C<code>To Space</code>\u65E0\u6CD5\u8DB3\u591F\u6765\u5B58\u50A8\u67D0\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u4F1A\u5C06\u8BE5\u5BF9\u8C61\u79FB\u52A8\u5230\u8001\u5E74\u4EE3\u4E2D\u3002 \u5728\u8FDB\u884C\u4E86<code>GC\u4E4B</code>\u540E\uFF0C\u4F7F\u7528\u7684\u4FBF\u662F<code>Eden space</code>\u548C<code>To Space</code>\u4E86\uFF0C\u4E0B\u6B21<code>GC</code>\u65F6\u4F1A\u5C06\u5B58\u6D3B\u5BF9\u8C61\u590D\u5236\u5230<code>From Space</code>\uFF0C\u5982\u6B64\u53CD\u590D\u5FAA\u73AF\u3002 \u5F53\u5BF9\u8C61\u5728<code>Survivor</code>\u533A\u8EB2\u8FC7\u4E00\u6B21<code>GC</code>\u7684\u8BDD\uFF0C\u5176\u5BF9\u8C61\u5E74\u9F84\u4FBF\u4F1A\u52A01\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u5BF9\u8C61\u5E74\u9F84\u8FBE\u523015\u5C81\uFF0C\u5C31\u4F1A\u79FB\u52A8\u5230\u8001\u5E74\u4EE3\u4E2D\u3002</p><h2 id="\u5783\u573E\u6536\u96C6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u6536\u96C6\u5668" aria-hidden="true">#</a> \u5783\u573E\u6536\u96C6\u5668</h2><p>\u5783\u573E\u6536\u96C6\u7B97\u6CD5\u662F\u5185\u5B58\u56DE\u6536\u7684\u7406\u8BBA\u57FA\u7840\uFF0C\u800C\u5783\u573E\u6536\u96C6\u5668\u5C31\u662F\u5185\u5B58\u56DE\u6536\u7684\u5177\u4F53\u5B9E\u73B0\u3002 \u4E0B\u9762\u4ECB\u7ECD\u4E00\u4E0B<code>HotSpot(JDK 7)</code>\u865A\u62DF\u673A\u63D0\u4F9B\u7684\u51E0\u79CD\u5783\u573E\u6536\u96C6\u5668\uFF0C\u7528\u6237\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u7EC4\u5408\u51FA\u5404\u4E2A\u5E74\u4EE3\u4F7F\u7528\u7684\u6536\u96C6\u5668\u3002</p><ul><li><p>Serial/Serial Old <code>Serial/Serial Old</code>\u6536\u96C6\u5668\u662F\u6700\u57FA\u672C\u6700\u53E4\u8001\u7684\u6536\u96C6\u5668\uFF0C\u5B83\u662F\u4E00\u4E2A\u5355\u7EBF\u7A0B\u6536\u96C6\u5668\uFF0C\u5E76\u4E14\u5728\u5B83\u8FDB\u884C\u5783\u573E\u6536\u96C6\u65F6\uFF0C \u5FC5\u987B\u6682\u505C\u6240\u6709\u7528\u6237\u7EBF\u7A0B\u3002<code>Serial</code>\u6536\u96C6\u5668\u662F\u9488\u5BF9\u65B0\u751F\u4EE3\u7684\u6536\u96C6\u5668\uFF0C\u91C7\u7528\u7684\u662F<code>Copying</code>\u7B97\u6CD5\uFF0C<code>Serial Old</code>\u6536\u96C6\u5668\u662F\u9488\u5BF9\u8001\u5E74\u4EE3\u7684\u6536\u96C6\u5668\uFF0C \u91C7\u7528\u7684\u662F<code>Mark-Compact</code>\u7B97\u6CD5\u3002\u5B83\u7684\u4F18\u70B9\u662F\u5B9E\u73B0\u7B80\u5355\u9AD8\u6548\uFF0C\u4F46\u662F\u7F3A\u70B9\u662F\u4F1A\u7ED9\u7528\u6237\u5E26\u6765\u505C\u987F\u3002</p></li><li><p>ParNew <code>ParNew</code>\u6536\u96C6\u5668\u662F<code>Serial</code>\u6536\u96C6\u5668\u7684\u591A\u7EBF\u7A0B\u7248\u672C\uFF0C\u4F7F\u7528\u591A\u4E2A\u7EBF\u7A0B\u8FDB\u884C\u5783\u573E\u6536\u96C6\u3002</p></li><li><p>Parallel Scavenge <code>Parallel Scavenge</code>\u6536\u96C6\u5668\u662F\u4E00\u4E2A\u65B0\u751F\u4EE3\u7684\u591A\u7EBF\u7A0B\u6536\u96C6\u5668\uFF08\u5E76\u884C\u6536\u96C6\u5668\uFF09\uFF0C\u5B83\u5728\u56DE\u6536\u671F\u95F4\u4E0D\u9700\u8981\u6682\u505C\u5176\u4ED6\u7528\u6237\u7EBF\u7A0B\uFF0C\u5176\u91C7\u7528\u7684\u662F<code>Copying</code>\u7B97\u6CD5\uFF0C \u8BE5\u6536\u96C6\u5668\u4E0E\u524D\u4E24\u4E2A\u6536\u96C6\u5668\u6709\u6240\u4E0D\u540C\uFF0C\u5B83\u4E3B\u8981\u662F\u4E3A\u4E86\u8FBE\u5230\u4E00\u4E2A\u53EF\u63A7\u7684\u541E\u5410\u91CF\u3002</p></li><li><p>Parallel Old <code>Parallel Old</code>\u662F<code>Parallel Scavenge</code>\u6536\u96C6\u5668\u7684\u8001\u5E74\u4EE3\u7248\u672C\uFF08\u5E76\u884C\u6536\u96C6\u5668\uFF09\uFF0C\u4F7F\u7528\u591A\u7EBF\u7A0B\u548C<code>Mark-Compact</code>\u7B97\u6CD5\u3002</p></li><li><p>CMS <code>CMS(Current Mark Sweep)</code>\u6536\u96C6\u5668\u662F\u4E00\u79CD\u4EE5\u83B7\u53D6\u6700\u77ED\u56DE\u6536\u505C\u987F\u65F6\u95F4\u4E3A\u76EE\u6807\u7684\u6536\u96C6\u5668\uFF0C\u5B83\u662F\u4E00\u79CD\u5E76\u53D1\u6536\u96C6\u5668\uFF0C\u91C7\u7528\u7684\u662F<code>Mark-Sweep</code>\u7B97\u6CD5\u3002</p></li><li><p>G1 <code>G1</code>\u6536\u96C6\u5668\u662F\u5F53\u4ECA\u6536\u96C6\u5668\u6280\u672F\u53D1\u5C55\u6700\u524D\u6CBF\u7684\u6210\u679C\uFF0C\u5B83\u662F\u4E00\u6B3E\u9762\u5411\u670D\u52A1\u7AEF\u5E94\u7528\u7684\u6536\u96C6\u5668\uFF0C\u5B83\u80FD\u5145\u5206\u5229\u7528\u591A<code>CPU</code>\u3001\u591A\u6838\u73AF\u5883\u3002\u56E0\u6B64\u5B83\u662F\u4E00\u6B3E\u5E76\u884C\u4E0E\u5E76\u53D1\u6536\u96C6\u5668\uFF0C \u5E76\u4E14\u5B83\u80FD\u5EFA\u7ACB\u53EF\u9884\u6D4B\u7684\u505C\u987F\u65F6\u95F4\u6A21\u578B\u3002</p></li></ul><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,21),r=[i];function n(l,s){return o(),c("div",null,r)}var t=e(d,[["render",n],["__file","JVM\u5783\u573E\u56DE\u6536\u673A\u5236.html.vue"]]);export{t as default};
