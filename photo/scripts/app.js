!function(){"use strict";var n="undefined"==typeof window?global:window;if("function"!=typeof n.require){var r={},t={},e={}.hasOwnProperty,i={},o=function(n,r){var t=0;r&&(r.indexOf(!1)&&(t="components/".length),r.indexOf("/",t)>0&&(r=r.substring(t,r.indexOf("/",t))));var e=i[n+"/index.js"]||i[r+"/deps/"+n+"/index.js"];return e?"components/"+e.substring(0,e.length-".js".length):n},u=function(){var n=/^\.\.?(\/|$)/;return function(r,t){var e,i,o=[];e=(n.test(t)?r+"/"+t:t).split("/");for(var u=0,f=e.length;f>u;u++)i=e[u],".."===i?o.pop():"."!==i&&""!==i&&o.push(i);return o.join("/")}}(),f=function(n){return n.split("/").slice(0,-1).join("/")},s=function(r){return function(t){var e=u(f(r),t);return n.require(e,r)}},c=function(n,r){var e={id:n,exports:{}};return t[n]=e,r(e.exports,s(n),e),e.exports},l=function(n,i){var f=u(n,".");if(null==i&&(i="/"),f=o(n,i),e.call(t,f))return t[f].exports;if(e.call(r,f))return c(f,r[f]);var s=u(f,"./index");if(e.call(t,s))return t[s].exports;if(e.call(r,s))return c(s,r[s]);throw new Error('Cannot find module "'+n+'" from "'+i+'"')};l.alias=function(n,r){i[r]=n},l.register=l.define=function(n,t){if("object"==typeof n)for(var i in n)e.call(n,i)&&(r[i]=n[i]);else r[n]=t},l.list=function(){var n=[];for(var t in r)e.call(r,t)&&n.push(t);return n},l.brunch=!0,n.require=l}}(),require.register("application",function(n,r,t){"use strict";var e={init:function(){console.log("Init")}};t.exports=e});