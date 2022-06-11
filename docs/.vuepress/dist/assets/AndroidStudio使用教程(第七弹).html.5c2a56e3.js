import{_ as i,r as a,o as l,c as t,a as n,b as d,e as r,d as e}from"./app.89e8a229.js";const u={},o=r(`<h1 id="androidstudio\u4F7F\u7528\u6559\u7A0B-\u7B2C\u4E03\u5F39" tabindex="-1"><a class="header-anchor" href="#androidstudio\u4F7F\u7528\u6559\u7A0B-\u7B2C\u4E03\u5F39" aria-hidden="true">#</a> AndroidStudio\u4F7F\u7528\u6559\u7A0B(\u7B2C\u4E03\u5F39)</h1><p>\u672C\u6587\u8BB2\u89E3\u4E00\u4E0B<code>Gradle</code>\u7684\u5E94\u7528\uFF0C\u5927\u5BB6\u90FD\u77E5\u9053<code>Gradle</code>\u4F7F\u7528\u8D77\u6765\u975E\u5E38\u65B9\u4FBF\uFF0C\u90A3\u4ED6\u7A76\u7ADF\u65B9\u4FBF\u5728\u54EA\u91CC\uFF1F</p><ul><li>\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u5728\u6253\u5370<code>Log</code>\u65E5\u5FD7\u7684\u65F6\u5019\u90FD\u662F\u9700\u8981\u5728<code>Debug</code>\u7248\u672C\u4E2D\u8FDB\u884C\u6253\u5370\uFF0C\u800C\u5728\u6B63\u5F0F\u7248\u672C\u4E2D\u5173\u95ED\u3002 \u901A\u5E38\u6211\u4EEC\u90FD\u662F\u7528\u4E00\u4E2A<code>Config</code>\u6587\u4EF6\u6765\u914D\u7F6E\uFF0C\u4E0D\u77E5\u9053\u5927\u5BB6\u6709\u6CA1\u6709\u9047\u5230\u8FC7\u6B63\u5F0F\u7248\u4E2D\u5FD8\u8BB0\u5173\u95ED<code>Log</code>\u65E5\u5FD7\u7684\u60C5\u51B5\u3002</li><li>\u591A\u6E20\u9053\u5305\u975E\u5E38\u8BA9\u4EBA\u5934\u75BC\u3002\u73B0\u5728\u56FD\u5185\u5E02\u573A\u8FD9\u4E48\u591A\u3002\u4E00\u4E2A\u4E2A\u7684\u6253\u591A\u9EBB\u70E6\uFF0C\u867D\u7136\u6211\u4EEC\u4F1A\u7528\u53CB\u76DF\u6253\u5305\u5DE5\u5177\u7B49\u3002 \u600E\u4E48\u7834\uFF1F</li></ul><p>\u5148\u628A\u9879\u76EE\u4E2D\u7684<code>build.gradle</code>\u5C55\u73B0\u4E00\u4E0B\uFF0C\u7136\u540E\u6162\u6162\u5206\u6790\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>apply plugin: &#39;com.android.application&#39;

android {
    compileSdkVersion 22
    buildToolsVersion &quot;22.0.1&quot;

    defaultConfig {
        applicationId &quot;com.charon.*&quot;
        minSdkVersion 11
        targetSdkVersion 22
        versionCode 1
        versionName &quot;1.0&quot;

        multiDexEnabled true
        // default umeng channel name
        manifestPlaceholders = [UMENG_CHANNEL_VALUE: &quot;umeng&quot;]
    }

    signingConfigs {
        debug {
            storeFile file(&quot;debug.keystore&quot;)
        }

        release {
            storeFile file(&quot;keystore.keystore&quot;)
            storePassword &quot;android&quot;
            keyAlias &quot;androiddebugkey&quot;
            keyPassword &quot;android&quot;
        }
    }

    buildTypes {
        debug {
            versionNameSuffix &quot;-debug&quot;
            minifyEnabled false
            zipAlignEnabled false
            shrinkResources false
            signingConfig signingConfigs.debug
        }

        release {
            zipAlignEnabled true
            // remove unused resources
            shrinkResources true
            minifyEnabled true
            proguardFiles getDefaultProguardFile(&#39;proguard-android.txt&#39;), &#39;proguard-rules.pro&#39;
            signingConfig signingConfigs.release
        }
    }

    productFlavors {
        xiaomi {}
        _360 {}
        baidu {}
        qq {}
    }

    productFlavors.all {
            // change UMENG_CHANNEL_VALUE to the product channel name
        flavor -&gt; flavor.manifestPlaceholders = [UMENG_CHANNEL_VALUE: name]
    }

    lintOptions {
        // if true, stop the gradle build if errors are found
        abortOnError false

        // set to true to turn off analysis progress reporting by lint
        // quiet true
        // if true, only report errors
//        ignoreWarnings true
        // if true, emit full/absolute paths to files with errors (true by default)
        //absolutePaths true
        // if true, check all issues, including those that are off by default
//        checkAllWarnings true
        // if true, treat all warnings as errors
//        warningsAsErrors true
        // turn off checking the given issue id&#39;s
//        disable &#39;TypographyFractions&#39;,&#39;TypographyQuotes&#39;
        // turn on the given issue id&#39;s
//        enable &#39;RtlHardcoded&#39;,&#39;RtlCompat&#39;, &#39;RtlEnabled&#39;
        // check *only* the given issue id&#39;s
//        check &#39;NewApi&#39;, &#39;InlinedApi&#39;
        // if true, don&#39;t include source code lines in the error output
//        noLines true
        // if true, show all locations for an error, do not truncate lists, etc.
//        showAll true
        // Fallback lint configuration (default severities, etc.)
        lintConfig file(&quot;default-lint.xml&quot;)
        // if true, generate a text report of issues (false by default)
//        textReport true
        // location to write the output; can be a file or &#39;stdout&#39;
//        textOutput &#39;stdout&#39;
        // if true, generate an XML report for use by for example Jenkins
//        xmlReport false
        // file to write report to (if not specified, defaults to lint-results.xml)
//        xmlOutput file(&quot;lint-report.xml&quot;)
        // if true, generate an HTML report (with issue explanations, sourcecode, etc)
//        htmlReport true
        // optional path to report (default will be lint-results.html in the builddir)
//        htmlOutput file(&quot;lint-report.html&quot;)

        // set to true to have all release builds run lint on issues with severity=fatal
        // and abort the build (controlled by abortOnError above) if fatal issues are found
//        checkReleaseBuilds true
        // Set the severity of the given issues to fatal (which means they will be
        // checked during release builds (even if the lint target is not included)
//        fatal &#39;NewApi&#39;, &#39;InlineApi&#39;
        // Set the severity of the given issues to error
//        error &#39;Wakelock&#39;, &#39;TextViewEdits&#39;
        // Set the severity of the given issues to warning
//        warning &#39;ResourceAsColor&#39;
        // Set the severity of the given issues to ignore (same as disabling the check)
//        ignore &#39;TypographyQuotes&#39;
    }

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_7
        targetCompatibility JavaVersion.VERSION_1_7
    }

    applicationVariants.all { variant -&gt;
        variant.outputs.each { output -&gt;
            def outputFile = output.outputFile
            if (outputFile != null &amp;&amp; outputFile.name.endsWith(&#39;.apk&#39;)) {
                def fileName = outputFile.name.replace(&quot;.apk&quot;, &quot;-\${defaultConfig.versionName}.apk&quot;)
                output.outputFile = new File(outputFile.parent, fileName)
            }
        }
    }
}

dependencies {
    compile fileTree(dir: &#39;libs&#39;, include: [&#39;*.jar&#39;])
    compile project(&#39;:libraries:framework&#39;)
    // square leakcanary
    debugCompile &#39;com.squareup.leakcanary:leakcanary-android:1.3.1&#39;
    releaseCompile &#39;com.squareup.leakcanary:leakcanary-android-no-op:1.3.1&#39;
}

repositories {
    mavenCentral()
    maven{
        url &quot;[maven reposity path]&quot;
    }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u6765\u8BE6\u7EC6\u8BB2\u51E0\u4E2A\u5730\u65B9:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>apply plugin: &#39;com.android.application&#39;

android {
    ...
    defaultConfig {
        // \u652F\u6301\u65B9\u6CD5\u6570\u8D85\u8FC765536\u540E\u7684\u5904\u7406
        multiDexEnabled true
        // \u8FD9\u91CC\u5C31\u662F\u4E0A\u9762\u63D0\u5230\u7684\u66FF\u6362\u53CB\u76DF\u7EDF\u8BA1\u4E2Dchannel\u7684\u503C\uFF0C\u4E0B\u9762\u8FD9\u53E5\u8BDD\u7684\u610F\u601D\u5C31\u662F\u9ED8\u8BA4\u503C\u4E3Aumeng
        manifestPlaceholders = [UMENG_CHANNEL_VALUE: &quot;umeng&quot;]
    }

	// \u7B7E\u540D\u64CD\u4F5C
    signingConfigs {
        debug {
		     // debug\u7B7E\u540D\u6587\u4EF6\u914D\u7F6E
            storeFile file(&quot;debug.keystore&quot;)
        }

        release {
		    // \u6B63\u5F0F\u7248\u7B7E\u540D\u6587\u4EF6\u914D\u7F6E
            storeFile file(&quot;keystore.keystore&quot;)
            storePassword &quot;android&quot;
            keyAlias &quot;androiddebugkey&quot;
            keyPassword &quot;android&quot;
        }
    }

    buildTypes {
        debug {
		    // debug\u7684\u7B7E\u540D\u5904\u7406
            versionNameSuffix &quot;-debug&quot;
            minifyEnabled false
            zipAlignEnabled false
            shrinkResources false
            signingConfig signingConfigs.debug
        }

        release {
		    // \u6B63\u5F0F\u7248\u7B7E\u540D\u5904\u7406
            zipAlignEnabled true
            // remove unused resources
            shrinkResources true
			// proguard \u6DF7\u6DC6
            minifyEnabled true
            proguardFiles getDefaultProguardFile(&#39;proguard-android.txt&#39;), &#39;proguard-rules.pro&#39;
            signingConfig signingConfigs.release
        }
    }

	// \u591A\u6E20\u9053\u6253\u5305
    productFlavors {
        xiaomi {}
        _360 {}
        baidu {}
        qq {}
		free {
		    // \u5F53\u7136\u8FD9\u91CC\u8FD8\u53EF\u4EE5\u6307\u5B9A applicationId \u7248\u672C\u7B49\u8FD9\u4E9B\u5185\u5BB9\uFF0C\u6BD4\u5982\u6211\u4EEC\u7A0B\u5E8F\u6709\u4E00\u4E2A\u6536\u8D39\u7248\u4E00\u4E2A\u4ED8\u8D39\u7248\uFF0C\u4ED6\u4FE9\u7684\u5305\u540D\u4E0D\u540C\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6765\u6307\u5B9A\u3002
			applicationId = &#39;com.test.test&#39;
            versionName = &#39;1.0&#39;
            versionCode = 1
		}
    }

    productFlavors.all {
        // \u7EDF\u4E00\u5C06manifest\u4E2D\u7684UMENG_CHANNEL_VALUE\u503C\u66FF\u6362\u4E3A\u4E0A\u9762productFlavors\u4E2D\u5BF9\u5E94\u7684\u6E20\u9053\u540D
        flavor -&gt; flavor.manifestPlaceholders = [UMENG_CHANNEL_VALUE: name]
    }

    lintOptions {
        // if true, stop the gradle build if errors are found
        abortOnError false

		// \u4E0B\u9762\u662F\u4E00\u4E9B\u5176\u4ED6\u7684\u9009\u9879\uFF0C\u4E00\u822C\u90FD\u7528\u4E0D\u5230
        // set to true to turn off analysis progress reporting by lint
        // quiet true
        // if true, only report errors
//        ignoreWarnings true
        // if true, emit full/absolute paths to files with errors (true by default)
        //absolutePaths true
        // if true, check all issues, including those that are off by default
//        checkAllWarnings true
        // if true, treat all warnings as errors
//        warningsAsErrors true
        // turn off checking the given issue id&#39;s
//        disable &#39;TypographyFractions&#39;,&#39;TypographyQuotes&#39;
        // turn on the given issue id&#39;s
//        enable &#39;RtlHardcoded&#39;,&#39;RtlCompat&#39;, &#39;RtlEnabled&#39;
        // check *only* the given issue id&#39;s
//        check &#39;NewApi&#39;, &#39;InlinedApi&#39;
        // if true, don&#39;t include source code lines in the error output
//        noLines true
        // if true, show all locations for an error, do not truncate lists, etc.
//        showAll true
        // Fallback lint configuration (default severities, etc.)
        lintConfig file(&quot;default-lint.xml&quot;)
        // if true, generate a text report of issues (false by default)
//        textReport true
        // location to write the output; can be a file or &#39;stdout&#39;
//        textOutput &#39;stdout&#39;
        // if true, generate an XML report for use by for example Jenkins
//        xmlReport false
        // file to write report to (if not specified, defaults to lint-results.xml)
//        xmlOutput file(&quot;lint-report.xml&quot;)
        // if true, generate an HTML report (with issue explanations, sourcecode, etc)
//        htmlReport true
        // optional path to report (default will be lint-results.html in the builddir)
//        htmlOutput file(&quot;lint-report.html&quot;)

        // set to true to have all release builds run lint on issues with severity=fatal
        // and abort the build (controlled by abortOnError above) if fatal issues are found
//        checkReleaseBuilds true
        // Set the severity of the given issues to fatal (which means they will be
        // checked during release builds (even if the lint target is not included)
//        fatal &#39;NewApi&#39;, &#39;InlineApi&#39;
        // Set the severity of the given issues to error
//        error &#39;Wakelock&#39;, &#39;TextViewEdits&#39;
        // Set the severity of the given issues to warning
//        warning &#39;ResourceAsColor&#39;
        // Set the severity of the given issues to ignore (same as disabling the check)
//        ignore &#39;TypographyQuotes&#39;
    }

	// \u53EF\u4EE5\u6307\u5B9A\u7528\u5177\u4F53\u54EA\u4E2AJDK\u7248\u672C\u6765\u8FDB\u884C\u7F16\u8BD1
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_7
        targetCompatibility JavaVersion.VERSION_1_7
    }

	// \u66F4\u6539\u751F\u6210\u7684apk\u6587\u4EF6\u540D\u5B57\uFF0C\u65B9\u4FBF\u533A\u5206\u591A\u6E20\u9053
    applicationVariants.all { variant -&gt;
        variant.outputs.each { output -&gt;
            def outputFile = output.outputFile
            if (outputFile != null &amp;&amp; outputFile.name.endsWith(&#39;.apk&#39;)) {
                def fileName = outputFile.name.replace(&quot;.apk&quot;, &quot;-\${defaultConfig.versionName}.apk&quot;)
                output.outputFile = new File(outputFile.parent, fileName)
            }
        }
    }
}

dependencies {
    compile fileTree(dir: &#39;libs&#39;, include: [&#39;*.jar&#39;])
    compile project(&#39;:libraries:framework&#39;)
    // square leakcanary
    debugCompile &#39;com.squareup.leakcanary:leakcanary-android:1.3.1&#39;
    releaseCompile &#39;com.squareup.leakcanary:leakcanary-android-no-op:1.3.1&#39;
}

repositories {
    //\u4ECE\u4E2D\u592E\u5E93\u91CC\u9762\u83B7\u53D6\u4F9D\u8D56
    mavenCentral()
    //\u6216\u8005\u4F7F\u7528\u6307\u5B9A\u7684\u672C\u5730maven \u5E93
    maven{
        url &quot;file://F:/githubrepo/releases&quot;
    }
    //\u6216\u8005\u4F7F\u7528\u6307\u5B9A\u7684\u8FDC\u7A0Bmaven\u5E93
    maven{
        url &quot;\u8FDC\u7A0B\u5E93\u5730\u5740&quot;
    }
}

\u4E0A\u9762\`build.gradle\`\u4E2D\u7684\u914D\u7F6E\u57FA\u672C\u5C31\u662F\u8FD9\u4E9B\uFF0C\u90A3\u4E48\`manifest\`\u4E2D\u7684\u6E05\u5355\u6587\u4EF6\u8BE5\u5982\u4F55\u5BF9\`umeng\`\u6E20\u9053\u8FDB\u884C\u4FEE\u6539\u5462\uFF1F 
\`\`\`xml
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span>
        <span class="token attr-name"><span class="token namespace">android:</span>allowBackup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.application.RetailApplication<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@mipmap/ic_launcher<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@android:style/Theme.Light.NoTitleBar.Fullscreen<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@string/app_name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span>
            <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.SplashActivity<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>screenOrientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>portrait<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>configChanges</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keyboardHidden|orientation|screenSize<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@string/app_name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.action.MAIN<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.category.LAUNCHER<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activity</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--\u652F\u6301Gradle\u4E2D\u7684\u6E20\u9053\u66FF\u6362--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta-data</span>
            <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UMENG_CHANNEL<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${UMENG_CHANNEL_VALUE}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>application</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u8BB2\u89E3\u4E86\u5982\u4F55\u8FDB\u884C\u591A\u6E20\u9053\u6253\u5305\u3002\u8FD8\u5269\u4E0B\u4E00\u4E2A\u95EE\u9898\uFF0C\u5C31\u662F<code>Log</code>\u5F00\u5173\u7684\u95EE\u9898\u3002\u8FD9\u5C31\u8981\u7528\u5230<code>BuildConfig.DEBUG</code>\u3002 <code>Gradle</code>\u811A\u672C\u9ED8\u8BA4\u6709<code>debug</code>\u548C<code>release</code>\u4E24\u79CD\u6A21\u5F0F\uFF0C\u5BF9\u5E94\u7684<code>BuildCondig.DEBUG</code>\u5B57\u6BB5\u5206\u522B\u4E3A<code>true</code>\u548C<code>false</code>\uFF0C\u800C\u4E14\u4E0D\u53EF\u66F4\u6539\u3002\u8BE5\u5B57\u6BB5\u7F16\u8BD1\u540E\u81EA\u52A8\u751F\u6210\uFF0C\u5728<code>app/build/source/BuildConfig/Build Varients/package name/BuildConfig</code>\u6587\u4EF6\u4E2D\u3002\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5728<code>LogUtil</code>\u4E2D\u8FD9\u6837\u914D\u7F6E\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogUtil</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * If print log here.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> LOG_LEVEL <span class="token operator">=</span> <span class="token class-name">BuildConfig</span><span class="token punctuation">.</span>DEBUG <span class="token operator">?</span> <span class="token number">6</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> VERBOSE <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEBUG <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> INFO <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> WARN <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> ERROR <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u518D\u591A\u63D0\u4E00\u53E5\uFF0C\u5C31\u662F\u5982\u679C\u6211\u4EEC\u4E0D\u60F3\u4F7F\u7528<code>BuildConfig.DEBUG</code>\uFF0C\u60F3\u989D\u5916\u7684\u4F7F\u7528\u4E00\u4E9B\u5176\u4ED6\u7684\u914D\u7F6E\u8BE5\u5982\u4F55\u64CD\u4F5C\u5462\uFF1F \u53EF\u4EE5\u5728<code>gradle</code>\u6587\u4EF6\u4E2D\u7684<code>buildTypes</code>\u4E2D\u8FDB\u884C\u6DFB\u52A0\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>buildTypes {
	debug {
		// \u663E\u793ALog
		buildConfigField &quot;boolean&quot;, &quot;LOG_DEBUG&quot;, &quot;true&quot;
		versionNameSuffix &quot;-debug&quot;
		minifyEnabled false
		zipAlignEnabled false
		shrinkResources false
		signingConfig signingConfigs.debug
	}

	release {
		// \u4E0D\u663E\u793ALog
		buildConfigField &quot;boolean&quot;, &quot;LOG_DEBUG&quot;, &quot;false&quot;
		zipAlignEnabled true
		// remove unused resources
		shrinkResources true
		minifyEnabled true
		proguardFiles getDefaultProguardFile(&#39;proguard-android.txt&#39;), &#39;proguard-rules.pro&#39;
		signingConfig signingConfigs.release
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528<code>BuildConfig.LOG_DEBUG</code>\u5C31\u53EF\u4EE5\u4E86\u3002</p>`,12),c=e("\u66F4\u591A\u5185\u5BB9\u8BF7\u53C2\u8003"),v={href:"http://tools.android.com/tech-docs/new-build-system/user-guide",target:"_blank",rel:"noopener noreferrer"},p=e("Gradle Plugin User Guide"),m=n("p",null,[e("\u6700\u540E\u9644\u4E0A\u4E00\u5F20"),n("code",null,"Build"),e("\u6D41\u7A0B\u56FE:")],-1),b=n("p",null,[n("img",{src:"https://raw.githubusercontent.com/CharonChui/Pictures/master/build.png?raw=true",alt:"Image"})],-1),k=n("hr",null,null,-1),g=n("ul",null,[n("li",null,"\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com"),n("li",null,"Good Luck!")],-1);function f(h,q){const s=a("ExternalLinkIcon");return l(),t("div",null,[o,n("p",null,[c,n("a",v,[p,d(s)])]),m,b,k,g])}var _=i(u,[["render",f],["__file","AndroidStudio\u4F7F\u7528\u6559\u7A0B(\u7B2C\u4E03\u5F39).html.vue"]]);export{_ as default};
