import{_ as s,c as a,o as e,a as n}from"./app.e9f93013.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"byteSize \u{1F389} \u{1F4AF}","slug":"bytesize","link":"#bytesize","children":[]}],"relativePath":"byteSize.md"}'),l={name:"byteSize.md"},t=n(`<h2 id="bytesize" tabindex="-1">byteSize \u{1F389} \u{1F4AF} <a class="header-anchor" href="#bytesize" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u957F\u5EA6</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><strong>str</strong> <code>any</code> \u4F20\u5165\u53C2\u6570, \u5982\u679C\u53C2\u6570\u4E0D\u662F\u5B57\u7B26\u4E32\uFF0C\u4F1A\u5148\u8C03\u7528toString\u65B9\u6CD5</li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>byteSize(str: any): number</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>number</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5B57\u7B26\u4E32</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">byteSize</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fred</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 4</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">byteSize</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4F60\u597D!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 7</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u751F\u50FB\u6C49\u5B57</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">byteSize</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u{20BB7}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 4</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u53C2\u6570\u4E0D\u662F\u5B57\u7B26\u4E32\uFF0C\u4F1A\u5148\u8C03\u7528toString\u65B9\u6CD5</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">byteSize</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// &#39;4&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,16),p=[t];function o(c,r,i,d,y,b){return e(),a("div",null,p)}const C=s(l,[["render",o]]);export{h as __pageData,C as default};