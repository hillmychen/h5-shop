!function(e){function t(t){for(var r,u,a=t[0],c=t[1],l=t[2],s=0,f=[];s<a.length;s++)u=a[s],o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(d&&d(t);f.length;)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={1:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var i,a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=function(e){return u.p+""+({2:"index",3:"catagories",4:"productsCard"}[e]||e)+"."+{2:"e182a7ca",3:"246e368a",4:"dd3cb83c"}[e]+".js"}(e),i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");u.type=r,u.request=i,n[1](u)}o[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,a.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=c;i.push([247,0]),n()}({114:function(e,t,n){"use strict";n.r(t);var r=n(115),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t.default=o.a},115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}}}},116:function(e,t){},165:function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app"},[t("transition",{attrs:{name:"router-fade",mode:"out-in"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1)],1),this._v(" "),t("transition",{attrs:{name:"router-fade",mode:"out-in"}},[this.$route.meta.keepAlive?this._e():t("router-view")],1)],1)},o=[];r._withStripped=!0,n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o;t.baseUrl=r="//elm.cangdu.org",t.imgBaseUrl=o="//elm.cangdu.org/img/",t.baseUrl=r,t.routerMode="hash",t.imgBaseUrl=o},205:function(e,t,n){"use strict";n.r(t);var r=n(165),o=n(114);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n(455);var u=n(9),a=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);a.options.__file="src\\App.vue",t.default=a.exports},247:function(e,t,n){n(248),e.exports=n(450)},450:function(e,t,n){"use strict";var r=l(n(451)),o=l(n(205)),i=l(n(456)),u=n(169),a=l(n(457));n(458);var c=l(n(459));function l(e){return e&&e.__esModule?e:{default:e}}"addEventListener"in document&&(document.addEventListener("DOMContentLoaded",function(){c.default.attach(document.body)},!1),document.addEventListener("touchstart",function(e){e.cancelable&&(e.defaultPrevented||e.preventDefault())},!1)),r.default.use(a.default);var d=new a.default({routes:i.default,mode:u.routerMode,strict:!1,scrollBehavior:function(e,t,n){return n||(t.meta.keepAlive&&(t.meta.savedPosition=document.body.scrollTop),{x:0,y:e.meta.savedPosition||0})}});new r.default({el:"#app",router:d,render:function(e){return e(o.default)}})},455:function(e,t,n){"use strict";var r=n(116);n.n(r).a},456:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(205));t.default=[{path:"/",component:r.default,children:[{path:"",redirect:"/index"},{path:"/index",redirect:"/index/catagories/0/sort",component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){return e(n(243))}.bind(null,n)).catch(n.oe)},children:[{path:"catagories/:id",component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){return e(n(244))}.bind(null,n)).catch(n.oe)},name:"catagories",children:[{path:"sort",component:function(e){return n.e(4).then(function(){return e(n(246))}.bind(null,n)).catch(n.oe)},name:"productsCard"}]}]}]}]},458:function(e,t,n){"use strict";!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=window;t.default=n.flex=function(e,t){var r=e||100,o=t||1,i=n.document,u=navigator.userAgent,a=u.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),c=u.match(/U3\/((\d+|\.){5,})/i),l=c&&parseInt(c[1].split(".").join(""),10)>=80,d=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=n.devicePixelRatio||1;d||a&&a[1]>534||l||(s=1);var f=1/s,p=i.querySelector('meta[name="viewport"]');p||((p=i.createElement("meta")).setAttribute("name","viewport"),i.head.appendChild(p)),p.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+f+",maximum-scale="+f+",minimum-scale="+f),i.documentElement.style.fontSize=r/2*s*o+"px"},e.exports=t.default}]),flex(100,1)}});