import{_ as s,c as e,o as a,a as n}from"./app.e9f93013.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"removeHTML \u{1F389} \u{1F4AF}","slug":"removehtml","link":"#removehtml","children":[]}],"relativePath":"removeHTML.md"}'),l={name:"removeHTML.md"},t=n(`<h2 id="removehtml" tabindex="-1">removeHTML \u{1F389} \u{1F4AF} <a class="header-anchor" href="#removehtml" aria-hidden="true">#</a></h2><p>\u79FB\u9664\u5B57\u7B26\u4E32\u4E2D\u7684html\u6807\u7B7E</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><strong>str</strong> <code>any</code> \u4F20\u5165\u53C2\u6570, \u5982\u679C\u53C2\u6570\u4E0D\u662F\u5B57\u7B26\u4E32\uFF0C\u4F1A\u5148\u8C03\u7528toString\u65B9\u6CD5</li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>removeHTML(str: any): string</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>string</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5B57\u7B26\u4E32</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">removeHTML</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;p&gt;\u8FD9\u662F&lt;em&gt;\u4E00\u4E2A&lt;/em&gt;\u6BB5\u843D\u3002&lt;/p&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; \u8FD9\u662F\u4E00\u4E2A\u6BB5\u843D\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>// \u8F6C\u4E49\u7B26\u4E5F\u4F1A\u88AB\u53BB\u9664</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">removeHTML</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;p&gt;\u8FD9\u662F&lt;em&gt;\u4E00\u4E2A&lt;/em&gt;\u6BB5\u843D\u3002&amp;nbsp;&lt;/p&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; \u8FD9\u662F\u4E00\u4E2A\u6BB5\u843D\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u53C2\u6570\u4E0D\u662F\u5B57\u7B26\u4E32\uFF0C\u4F1A\u5148\u8C03\u7528toString\u65B9\u6CD5</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">removeHTML</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// &#39;true&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),o=[t];function p(r,c,i,d,m,h){return a(),e("div",null,o)}const b=s(l,[["render",p]]);export{v as __pageData,b as default};