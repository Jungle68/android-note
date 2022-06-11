import{_ as e,o as c,c as o,e as d}from"./app.e2a3b496.js";const i={},t=d('<h1 id="android\u542F\u52A8\u6A21\u5F0F\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#android\u542F\u52A8\u6A21\u5F0F\u8BE6\u89E3" aria-hidden="true">#</a> Android\u542F\u52A8\u6A21\u5F0F\u8BE6\u89E3</h1><ul><li>standard \u9ED8\u8BA4\u6A21\u5F0F\u3002\u5728\u8BE5\u6A21\u5F0F\u4E0B\uFF0C<code>Activity</code>\u53EF\u4EE5\u62E5\u6709\u591A\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u5B9E\u4F8B\u65E2\u53EF\u4EE5\u4F4D\u4E8E\u540C\u4E00\u4E2Atask\uFF0C\u4E5F\u53EF\u4EE5\u4F4D\u4E8E\u4E0D\u540C\u7684task\u3002\u6BCF\u6B21\u90FD\u4F1A\u65B0\u521B\u5EFA\u3002</li><li>singleTop \u8BE5\u6A21\u5F0F\u4E0B\uFF0C\u5728\u540C\u4E00\u4E2A<code>task</code>\u4E2D\uFF0C\u5982\u679C\u5B58\u5728\u8BE5<code>Activity</code>\u7684\u5B9E\u4F8B\uFF0C\u5E76\u4E14\u8BE5<code>Activity</code>\u5B9E\u4F8B\u4F4D\u4E8E\u6808\u9876\u5219\u4E0D\u4F1A\u521B\u5EFA\u8BE5<code>Activity</code>\u7684\u793A\u4F8B,\u800C\u4EC5\u4EC5\u53EA\u662F\u8C03\u7528<code>Activity</code>\u7684<code>onNewIntent()</code>\u3002\u5426\u5219\u7684\u8BDD\uFF0C\u5219\u65B0\u5EFA\u8BE5<code>Activity</code>\u7684\u5B9E\u4F8B\uFF0C\u5E76\u5C06\u5176\u7F6E\u4E8E\u6808\u9876\u3002</li><li>singleTask \u987E\u540D\u601D\u4E49\uFF0C\u53EA\u5BB9\u8BB8\u6709\u4E00\u4E2A\u5305\u542B\u8BE5<code>Activity</code>\u5B9E\u4F8B\u7684<code>task</code>\u5B58\u5728\uFF01 \u5728<code>android</code>\u6D4F\u89C8\u5668<code>browser</code>\u4E2D\uFF0C<code>BrowserActivity</code>\u7684<code>launcherMode=&quot;singleTask&quot;</code>\uFF0C\u56E0\u4E3A<code>browser</code>\u4E0D\u65AD\u5730\u542F\u52A8\u81EA\u5DF1\uFF0C\u6240\u4EE5\u8981\u6C42\u8FD9\u4E2A\u6808\u4E2D\u4FDD\u6301\u53EA\u80FD\u6709\u4E00\u4E2A\u81EA\u5DF1\u7684\u5B9E\u4F8B\uFF0C<code>browser</code>\u4E0A\u7F51\u7684\u65F6\u5019\uFF0C \u9047\u5230\u64AD\u653E\u89C6\u9891\u7684\u94FE\u63A5\uFF0C\u5C31\u4F1A\u901A\u8FC7\u9690\u5F0F<code>intent</code>\u65B9\u5F0F\u8DF3\u8F6C\u627E<code>Gallery3D</code>\u4E2D\u7684<code>MovieView</code>\u8FD9\u4E2A\u7C7B\u6765\u64AD\u653E\u89C6\u9891\uFF0C\u8FD9\u65F6\u5019\u5982\u679C\u4F60\u70B9\u51FB<code>home</code>\u952E\uFF0C\u518D\u70B9\u51FB<code>browser</code>\uFF0C\u4F60\u4F1A\u53D1\u73B0<code>MovieView</code>\u8FD9\u4E2A\u7C7B\u5DF2\u7ECF\u9500\u6BC1\u4E0D\u5B58\u5728\u4E86\uFF0C \u800C\u4E0D\u4F1A\u50CF\u4FDD\u5B58\u8FD9\u4E2A<code>MovieView</code>\u7684\u7C7B\u5BF9\u8C61\uFF0C\u7ED9\u5BA2\u6237\u5E26\u6765\u7684\u7528\u6237\u4F53\u9A8C\u7279\u522B\u7684\u4E0D\u597D\u3002\u5C31\u50CF\u522B\u4EBA\u603B\u7ED3\u7684<code>singleTask</code>\u6A21\u5F0F\u7684<code>Activity</code>\u4E0D\u7BA1\u662F\u4F4D\u4E8E\u6808\u9876\u8FD8\u662F\u6808\u5E95\uFF0C\u518D\u6B21\u8FD0\u884C\u8FD9\u4E2A<code>Activity</code>\u65F6\uFF0C\u90FD\u4F1A<code>destory</code>\u6389\u5B83\u4E0A\u9762\u7684<code>Activity</code>\u6765\u4FDD\u8BC1\u6574\u4E2A\u6808\u4E2D\u53EA\u6709\u4E00\u4E2A\u81EA\u5DF1\u3002<br> \u4E0B\u9762\u662F\u5B98\u65B9\u6587\u6863\u4E2D\u7684\u4ECB\u7ECD:<br><code>The system creates a new task and instantiates the activity at the root of the new task. However, if an instance of the activity already exists in a separate task, the system routes the intent to the existing instance through a call to its onNewIntent() method, rather than creating a new instance. Only one instance of the activity can exist at a time.</code> \u4EE5<code>singleTask</code>\u65B9\u5F0F\u542F\u52A8\u7684<code>Activity</code>\uFF0C\u5168\u5C40\u53EA\u6709\u552F\u4E00\u4E2A\u5B9E\u4F8B\u5B58\u5728\uFF0C\u56E0\u6B64\uFF0C\u5F53\u6211\u4EEC\u7B2C\u4E00\u6B21\u542F\u52A8\u8FD9\u4E2A<code>Activity</code>\u65F6\uFF0C\u7CFB\u7EDF\u4FBF\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4EFB\u52A1\u6808\uFF0C\u5E76\u4E14\u521D\u59CB\u5316\u4E00\u4E2A<code>Activity</code>\u5B9E\u4F8B\uFF0C\u653E\u5728\u65B0\u4EFB\u52A1\u6808\u7684\u5E95\u90E8\uFF0C\u5982\u679C\u4E0B\u6B21\u518D\u542F\u52A8\u8FD9\u4E2A<code>Activity</code>\u65F6\uFF0C \u7CFB\u7EDF\u53D1\u73B0\u5DF2\u7ECF\u5B58\u5728\u8FD9\u6837\u7684<code>Activity</code>\u5B9E\u4F8B\uFF0C\u5C31\u4F1A\u8C03\u7528\u8FD9\u4E2A<code>Activity</code>\u5B9E\u4F8B\u7684<code>onNewIntent</code>\u65B9\u6CD5\uFF0C\u4ECE\u800C\u628A\u5B83\u6FC0\u6D3B\u8D77\u6765\u3002\u4ECE\u8FD9\u53E5\u8BDD\u5C31\u53EF\u4EE5\u63A8\u65AD\u51FA\uFF0C\u4EE5<code>singleTask</code>\u65B9\u5F0F\u542F\u52A8\u7684<code>Activity</code>\u603B\u662F\u5C5E\u4E8E\u4E00\u4E2A\u4EFB\u52A1\u6808\u7684\u6839<code>Activity</code>\u3002 \u4E0B\u9762\u6211\u4EEC\u770B\u4E00\u4E0B\u793A\u4F8B\u56FE:\u3000 <img src="https://github.com/CharonChui/Pictures/blob/master/singletask.gif?raw=true" alt="image"> \u5751\u7239\u554A\uFF01\u6709\u6728\u6709\uFF01\u524D\u9762\u521A\u8BF4<code>singleTask</code>\u4F1A\u5728\u65B0\u7684\u4EFB\u52A1\u4E2D\u8FD0\u884C\uFF0C\u5E76\u4E14\u4F4D\u4E8E\u4EFB\u52A1\u5806\u6808\u7684\u5E95\u90E8\uFF0C\u8FD9\u91CC\u5728<code>Task B</code>\u4E2D\uFF0C\u4E00\u4E2A\u8D64\u88F8\u88F8\u7684\u5E26\u7740<code>singleTask</code>\u6807\u7B7E\u7684\u7BAD\u5934\u65E0\u60C5\u5730\u6307\u5411<code>Task B</code>\u5806\u6808\u9876\u7AEF\u7684<code>Activity Y</code>\uFF0C\u4EC0\u4E48\u9B3C\uFF1F<br> \u8FD9\u5176\u5B9E\u662F\u548C<code>taskAffinity</code>\u6709\u5173\uFF0C\u5728\u5C06\u8981\u542F\u52A8\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u6839\u636E\u8981\u542F\u52A8\u7684<code>Activity</code>\u7684<code>taskAffinity</code>\u5C5E\u6027\u503C\u5728\u7CFB\u7EDF\u4E2D\u67E5\u627E\u8FD9\u6837\u7684\u4E00\u4E2A<code>Task</code>\uFF1A<code>Task</code>\u7684<code>affinity</code>\u5C5E\u6027\u503C\u4E0E\u5373\u5C06\u8981\u542F\u52A8\u7684<code>Activity</code>\u7684<code>taskAffinity</code>\u5C5E\u6027\u503C\u4E00\u81F4\u3002\u5982\u679C\u5B58\u5728\uFF0C \u5C31\u8FD4\u56DE\u8FD9\u4E2A<code>Task</code>\u5806\u6808\u9876\u7AEF\u7684<code>Activity</code>\u56DE\u53BB\uFF0C\u4E0D\u91CD\u65B0\u521B\u5EFA\u4EFB\u52A1\u6808\u4E86\uFF0C\u518D\u53BB\u542F\u52A8\u53E6\u5916\u4E00\u4E2A<code>singletask</code>\u7684<code>activity</code>\u65F6\u5C31\u4F1A\u5728\u8DDF\u5B83\u6709\u76F8\u540C<code>taskAffinity</code>\u7684\u4EFB\u52A1\u4E2D\u542F\u52A8\uFF0C\u5E76\u4E14\u4F4D\u4E8E\u8FD9\u4E2A\u4EFB\u52A1\u7684\u5806\u6808\u9876\u7AEF\uFF0C\u4E8E\u662F\uFF0C\u524D\u9762\u90A3\u4E2A\u56FE\u4E2D\uFF0C \u5C31\u4F1A\u51FA\u73B0\u4E00\u4E2A\u5E26\u7740<code>singleTask</code>\u6807\u7B7E\u7684\u7BAD\u5934\u6307\u5411\u4E00\u4E2A\u4EFB\u52A1\u5806\u6808\u9876\u7AEF\u7684<code>Activity Y</code>\u4E86\u3002\u5728\u4E0A\u9762\u7684<code>AndroidManifest.xml</code>\u6587\u4EF6\u4E2D\uFF0C\u6CA1\u6709\u914D\u7F6E<code>MainActivity</code>\u548C<code>SubActivity</code>\u7684<code>taskAffinity</code>\u5C5E\u6027\uFF0C \u4E8E\u662F\u5B83\u4EEC\u7684<code>taskAffinity</code>\u5C5E\u6027\u503C\u5C31\u9ED8\u8BA4\u4E3A\u7236\u6807\u7B7E<code>application</code>\u7684<code>taskAffinity</code>\u5C5E\u6027\u503C\uFF0C\u8FD9\u91CC\uFF0C\u6807\u7B7E<code>application</code>\u7684<code>taskAffinity</code>\u4E5F\u6CA1\u6709\u914D\u7F6E\uFF0C\u4E8E\u662F\u5B83\u4EEC\u5C31\u9ED8\u8BA4\u4E3A\u5305\u540D\u3002<br> \u603B\u7684\u6765\u8BF4\uFF1A<code>singleTask</code>\u7684\u7ED3\u8BBA\u4E0E<code>android:taskAffinity</code>\u76F8\u5173\uFF1A <ul><li>\u8BBE\u7F6E\u4E86<code>singleTask</code>\u542F\u52A8\u6A21\u5F0F\u7684<code>Activity</code>\uFF0C\u5B83\u5728\u542F\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u5148\u5728\u7CFB\u7EDF\u4E2D\u67E5\u627E\u5C5E\u6027\u503C<code>affinity</code>\u7B49\u4E8E\u5B83\u7684\u5C5E\u6027\u503C<code>taskAffinity</code>\u7684\u4EFB\u52A1\u6808\u7684\u5B58\u5728\uFF1B\u5982\u679C\u5B58\u5728\u8FD9\u6837\u7684\u4EFB\u52A1\u6808\uFF0C\u5B83\u5C31\u4F1A\u5728\u8FD9\u4E2A\u4EFB\u52A1\u6808\u4E2D\u542F\u52A8\uFF0C\u5426\u5219\u5C31\u4F1A\u5728\u65B0\u4EFB\u52A1\u6808\u4E2D\u542F\u52A8\u3002 \u56E0\u6B64\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u8981\u8BBE\u7F6E\u4E86<code>singleTask</code>\u542F\u52A8\u6A21\u5F0F\u7684<code>Activity</code>\u5728\u65B0\u7684\u4EFB\u52A1\u6808\u4E2D\u542F\u52A8\uFF0C\u5C31\u8981\u4E3A\u5B83\u8BBE\u7F6E\u4E00\u4E2A\u72EC\u7ACB\u7684<code>taskAffinity</code>\u5C5E\u6027\u503C\u3002\u4EE5<code>A</code>\u542F\u52A8<code>B</code>\u6765\u8BF4\u5F53<code>A</code>\u548C<code>B</code>\u7684<code>taskAffinity</code>\u76F8\u540C\u65F6\uFF1A\u7B2C\u4E00\u6B21\u521B\u5EFA<code>B</code>\u7684\u5B9E\u4F8B\u65F6\uFF0C\u5E76\u4E0D\u4F1A\u542F\u52A8\u65B0\u7684<code>task</code>\uFF0C \u800C\u662F\u76F4\u63A5\u5C06<code>B</code>\u6DFB\u52A0\u5230<code>A</code>\u6240\u5728\u7684<code>task</code>\uFF1B\u5426\u5219\uFF0C\u5C06<code>B</code>\u6240\u5728<code>task</code>\u4E2D\u4F4D\u4E8E<code>B</code>\u4E4B\u4E0A\u7684\u5168\u90E8<code>Activity</code>\u90FD\u5220\u9664\uFF0C\u7136\u540E\u8DF3\u8F6C\u5230<code>B</code>\u4E2D\u3002</li><li>\u5982\u679C\u8BBE\u7F6E\u4E86<code>singleTask</code>\u542F\u52A8\u6A21\u5F0F\u7684<code>Activity</code>\u4E0D\u662F\u5728\u65B0\u7684\u4EFB\u52A1\u4E2D\u542F\u52A8\u65F6\uFF0C\u5B83\u4F1A\u5728\u5DF2\u6709\u7684\u4EFB\u52A1\u4E2D\u67E5\u770B\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u76F8\u5E94\u7684<code>Activity</code>\u5B9E\u4F8B\uFF0C\u5982\u679C\u5B58\u5728\uFF0C\u5C31\u4F1A\u628A\u4F4D\u4E8E\u8FD9\u4E2A<code>Activity</code>\u5B9E\u4F8B\u4E0A\u9762\u7684<code>Activity</code>\u5168\u90E8\u7ED3\u675F\u6389\uFF0C \u5373\u6700\u7EC8\u8FD9\u4E2AActivity\u5B9E\u4F8B\u4F1A\u4F4D\u4E8E\u4EFB\u52A1\u7684\u5806\u6808\u9876\u7AEF\u4E2D\u3002\u4EE5<code>A</code>\u542F\u52A8<code>B</code>\u6765\u8BF4,\u5F53<code>A</code>\u548C<code>B</code>\u7684<code>taskAffinity</code>\u4E0D\u540C\u65F6\uFF1A\u7B2C\u4E00\u6B21\u521B\u5EFA<code>B</code>\u7684\u5B9E\u4F8B\u65F6\uFF0C\u4F1A\u542F\u52A8\u65B0\u7684<code>task</code>\uFF0C\u7136\u540E\u5C06<code>B</code>\u6DFB\u52A0\u5230\u65B0\u5EFA\u7684<code>task</code>\u4E2D\uFF1B\u5426\u5219\uFF0C\u5C06<code>B</code>\u6240\u5728<code>task</code>\u4E2D\u4F4D\u4E8E<code>B</code>\u4E4B\u4E0A\u7684\u5168\u90E8<code>Activity</code>\u90FD\u5220\u9664\uFF0C\u7136\u540E\u8DF3\u8F6C\u5230<code>B</code>\u4E2D\u3002</li></ul></li><li>singleInstance \u987E\u540D\u601D\u4E49\uFF0C\u662F\u5355\u4E00\u5B9E\u4F8B\u7684\u610F\u601D\uFF0C\u5373\u4EFB\u610F\u65F6\u523B\u53EA\u5141\u8BB8\u5B58\u5728\u552F\u4E00\u7684<code>Activity</code>\u5B9E\u4F8B\uFF0C\u800C\u4E14\u8BE5<code>Activity</code>\u6240\u5728\u7684<code>task</code>\u4E0D\u80FD\u5BB9\u7EB3\u9664\u8BE5<code>Activity</code>\u4E4B\u5916\u7684\u5176\u4ED6<code>Activity</code>\u5B9E\u4F8B\uFF01<br> \u5B83\u4E0E<code>singleTask</code>\u6709\u76F8\u540C\u4E4B\u5904\uFF0C\u4E5F\u6709\u4E0D\u540C\u4E4B\u5904\u3002<br> \u76F8\u540C\u4E4B\u5904\uFF1A\u4EFB\u610F\u65F6\u523B\uFF0C\u6700\u591A\u53EA\u5141\u8BB8\u5B58\u5728\u4E00\u4E2A\u5B9E\u4F8B\u3002<br> \u4E0D\u540C\u4E4B\u5904\uFF1A <ul><li><code>singleTask</code>\u53D7<code>android:taskAffinity</code>\u5C5E\u6027\u7684\u5F71\u54CD\uFF0C\u800C<code>singleInstance</code>\u4E0D\u53D7<code>android:taskAffinity</code>\u7684\u5F71\u54CD\u3002</li><li><code>singleTask</code>\u6240\u5728\u7684<code>task</code>\u4E2D\u80FD\u6709\u5176\u5B83\u7684<code>Activity</code>\uFF0C\u800C<code>singleInstance</code>\u7684<code>task</code>\u4E2D\u4E0D\u80FD\u6709\u5176\u4ED6<code>Activity</code>\u3002</li><li>\u5F53\u8DF3\u8F6C\u5230<code>singleTask</code>\u7C7B\u578B\u7684<code>Activity</code>\uFF0C\u5E76\u4E14\u8BE5<code>Activity</code>\u5B9E\u4F8B\u5DF2\u7ECF\u5B58\u5728\u65F6\uFF0C\u4F1A\u5220\u9664\u8BE5<code>Activity</code>\u6240\u5728<code>task</code>\u4E2D\u4F4D\u4E8E\u8BE5<code>Activity</code>\u4E4B\u4E0A\u7684\u5168\u90E8<code>Activity</code>\u5B9E\u4F8B\uFF1B\u800C\u8DF3\u8F6C\u5230<code>singleInstance</code>\u7C7B\u578B\u7684<code>Activity</code>\uFF0C\u5E76\u4E14\u8BE5<code>Activity</code>\u5DF2\u7ECF\u5B58\u5728\u65F6\uFF0C \u4E0D\u9700\u8981\u5220\u9664\u5176\u4ED6<code>Activity</code>\uFF0C\u56E0\u4E3A\u5B83\u6240\u5728\u7684<code>task</code>\u53EA\u6709\u8BE5<code>Activity</code>\u552F\u4E00\u4E00\u4E2A<code>Activity</code>\u5B9E\u4F8B\u3002</li></ul></li></ul><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>',4),a=[t];function s(n,y){return c(),o("div",null,a)}var A=e(i,[["render",s],["__file","Android\u542F\u52A8\u6A21\u5F0F\u8BE6\u89E3.html.vue"]]);export{A as default};
