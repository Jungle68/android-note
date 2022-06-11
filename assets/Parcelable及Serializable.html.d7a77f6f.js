import{_ as e,o as a,c as l,e as c}from"./app.e2a3b496.js";const i={},o=c('<h1 id="parcelable\u53CAserializable" tabindex="-1"><a class="header-anchor" href="#parcelable\u53CAserializable" aria-hidden="true">#</a> Parcelable\u53CASerializable</h1><p><code>Serializable</code>\u7684\u4F5C\u7528\u662F\u4E3A\u4E86\u4FDD\u5B58\u5BF9\u8C61\u7684\u5C5E\u6027\u5230\u672C\u5730\u6587\u4EF6\u3001\u6570\u636E\u5E93\u3001\u7F51\u7EDC\u6D41\u3001<code>rmi</code>\u4EE5\u65B9\u4FBF\u6570\u636E\u4F20\u8F93\uFF0C \u5F53\u7136\u8FD9\u79CD\u4F20\u8F93\u53EF\u4EE5\u662F\u7A0B\u5E8F\u5185\u7684\u4E5F\u53EF\u4EE5\u662F\u4E24\u4E2A\u7A0B\u5E8F\u95F4\u7684\u3002\u800C<code>Parcelable</code>\u7684\u8BBE\u8BA1\u521D\u8877\u662F\u56E0\u4E3A<code>Serializable</code>\u6548\u7387\u8FC7\u6162\uFF0C \u4E3A\u4E86\u5728\u7A0B\u5E8F\u5185\u4E0D\u540C\u7EC4\u4EF6\u95F4\u4EE5\u53CA\u4E0D\u540C<code>Android</code>\u7A0B\u5E8F\u95F4(<code>AIDL</code>)\u9AD8\u6548\u7684\u4F20\u8F93\u6570\u636E\u800C\u8BBE\u8BA1\uFF0C\u8FD9\u4E9B\u6570\u636E\u4EC5\u5728\u5185\u5B58\u4E2D\u5B58\u5728\uFF0C<code>Parcelable</code>\u662F\u901A\u8FC7<code>IBinder</code>\u901A\u4FE1\u7684\u6D88\u606F\u7684\u8F7D\u4F53\u3002</p><p><code>Parcelable</code>\u7684\u6027\u80FD\u6BD4<code>Serializable</code>\u597D\uFF0C\u5728\u5185\u5B58\u5F00\u9500\u65B9\u9762\u8F83\u5C0F\uFF0C\u6240\u4EE5\u5728\u5185\u5B58\u95F4\u6570\u636E\u4F20\u8F93\u65F6\u63A8\u8350\u4F7F\u7528<code>Parcelable</code>\uFF0C \u5982<code>activity</code>\u95F4\u4F20\u8F93\u6570\u636E\uFF0C\u800C<code>Serializable</code>\u53EF\u5C06\u6570\u636E\u6301\u4E45\u5316\u65B9\u4FBF\u4FDD\u5B58\uFF0C\u6240\u4EE5\u5728\u9700\u8981\u4FDD\u5B58\u6216\u7F51\u7EDC\u4F20\u8F93\u6570\u636E\u65F6\u9009\u62E9 <code>Serializable</code>\uFF0C\u56E0\u4E3A<code>android</code>\u4E0D\u540C\u7248\u672C<code>Parcelable</code>\u53EF\u80FD\u4E0D\u540C\uFF0C\u6240\u4EE5\u4E0D\u63A8\u8350\u4F7F\u7528<code>Parcelable</code>\u8FDB\u884C\u6570\u636E\u6301\u4E45\u5316\u3002</p><p>\u533A\u522B:</p><ul><li>Parcelable is faster than serializable interface</li><li>Parcelable interface takes more time for implemetation compared to serializable interface</li><li>serializable interface is easier to implement</li><li>serializable interface create a lot of temporary objects and cause quite a bit of garbage collection</li><li>Parcelable array can be pass via Intent in android.</li></ul><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>',7),r=[o];function d(t,n){return a(),l("div",null,r)}var s=e(i,[["render",d],["__file","Parcelable\u53CASerializable.html.vue"]]);export{s as default};
