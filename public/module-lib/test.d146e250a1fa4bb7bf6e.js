!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.test=t():e.test=t()}(window,function(){return function(c){function e(e){for(var t,n,r=e[0],o=e[1],u=0,i=[];u<r.length;u++)n=r[u],f[n]&&i.push(f[n][0]),f[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(c[t]=o[t]);for(l&&l(e);i.length;)i.shift()()}var n={},f={1:0};function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(o){var e=[],n=f[o];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise(function(e,t){n=f[o]=[e,t]});e.push(n[2]=t);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(e){return a.p+""+({}[e]||e)+"."+{2:"0bcf41c4d31d717cb3d3",4:"f302734a3cf81837d6dd"}[e]+".js"}(o);var i=new Error;r=function(e){u.onerror=u.onload=null,clearTimeout(c);var t=f[o];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;i.message="Loading chunk "+o+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,t[1](i)}f[o]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:u})},12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},a.m=c,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/module-lib/",a.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp_name_=window.webpackJsonp_name_||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var l=r;return a(a.s=0)}([function(e,t,n){"use strict";n.r(t);var r=[{path:"/test",component:function(){return n.e(2).then(n.bind(null,11))},children:[{path:"a",component:function(){return n.e(4).then(n.bind(null,13))}}]}];n.d(t,"router",function(){return r})}])});