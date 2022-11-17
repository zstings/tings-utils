import{_ as s,c as a,o,a as n}from"./app.e9f93013.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"omit \u{1F389} \u{1F4AF}","slug":"omit","link":"#omit","children":[]}],"relativePath":"omit.md"}'),e={name:"omit.md"},t=n(`<h2 id="omit" tabindex="-1">omit \u{1F389} \u{1F4AF} <a class="header-anchor" href="#omit" aria-hidden="true">#</a></h2><p>\u5220\u9664\u6307\u5B9A\u5BF9\u8C61\u7684\u6307\u5B9A\u5C5E\u6027</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><p><strong>object</strong> <code>Record&lt;string, any&gt;</code> \u6307\u5B9A\u5BF9\u8C61</p></li><li><p><strong>paths</strong> <code>string[]</code></p></li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>omit(object: Record&lt;string, any&gt;, paths: string[]): Record&lt;string, any&gt;</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>Record</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u65B0\u7684\u5BF9\u8C61</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">omit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;">// =&gt; {b: 2}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,11),l=[t];function p(c,r,i,d,h,D){return o(),a("div",null,l)}const C=s(e,[["render",p]]);export{F as __pageData,C as default};