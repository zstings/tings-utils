(function(n,o){typeof exports=="object"&&typeof module<"u"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(n=typeof globalThis<"u"?globalThis:n||self,o(n.tingsUtils={}))})(this,function(n){"use strict";const o=function(e){return/^1[3-9][\d]{9}$/.test(e.toString())},l=function(e){return c(e)==="Array"},c=function(e){return Object.prototype.toString.call(e).slice(8,-1)},a=e=>{if(!o(e))throw"\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E";return typeof e=="number"&&(e=e.toString()),e.replace(e.substring(3,7),"****")},f=(e,i)=>{var d;const t=i?new URL(i):window.location,r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),s=t.search.substring(1).match(r),u=(d=t.hash.split("?")[1])==null?void 0:d.match(r);return s!=null?decodeURIComponent(s[2]):u!=null?decodeURIComponent(u[2]):null},p=(e,i)=>{const t=document.createElement("a"),r=window.URL.createObjectURL(i);t.style.display="none",t.href=r,t.download=e,document.body.appendChild(t),t.click(),window.URL.revokeObjectURL(r),t.remove()};n.downloadFile=p,n.getDataType=c,n.getUrlParam=f,n.isArray=l,n.isPhone=o,n.phoneEncrypt=a,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});