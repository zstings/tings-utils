import{_ as s,c as a,o as e,a as n}from"./app.4cf35e8b.js";const b=JSON.parse('{"title":"toNumber \u{1F389} \u{1F4AF}","description":"","frontmatter":{},"headers":[{"level":2,"title":"toNumber \u{1F389} \u{1F4AF}","slug":"tonumber-tada-100"}],"relativePath":"toNumber.md"}'),l={name:"toNumber.md"},o=n(`<h2 id="tonumber-tada-100" tabindex="-1">toNumber \u{1F389} \u{1F4AF} <a class="header-anchor" href="#tonumber-tada-100" aria-hidden="true">#</a></h2><p>\u8F6C\u6362\u4E3A\u6570\u5B57</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li>value <code>T</code> \u4EFB\u610F\u503C</li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>toNumber&lt;T&gt;(value: T): number</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>number</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8FD4\u56DE\u6570\u5B57</p></div><h4 id="\u5F02\u5E38" tabindex="-1">\u5F02\u5E38 <a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>\u65E0\u6CD5\u8F6C\u6362\u4E3A\u6570\u5B57</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">toNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">toNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 1.2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">toNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// error =&gt; a123\u65E0\u6CD5\u8F6C\u6362\u4E3A\u6570\u5B57</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),t=[o];function r(p,c,i,d,u,h){return e(),a("div",null,t)}var y=s(l,[["render",r]]);export{b as __pageData,y as default};
