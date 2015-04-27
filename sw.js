(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function handleFontRequest(e){var t,n,s;return regeneratorRuntime.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,caches.match(e);case 2:if(t=r.sent,!t){r.next=5;break}return r.abrupt("return",t);case 5:return r.next=7,fetch(e.clone());case 7:return n=r.sent,r.next=10,caches.open("svgomg-fonts");case 10:return s=r.sent,s.put(e,n.clone()),r.abrupt("return",n);case 13:case"end":return r.stop()}},null,this)}require("regenerator/runtime"),require("./cache-polyfill");var storage=require("../utils/storage"),version=require("../../changelog.json")[0].version,cacheVerion=version.split(".")[0];self.addEventListener("install",function(e){var t=this;e.waitUntil(function(e){var n,s,r;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return n=storage.get("active-version"),e.next=3,caches.open("svgomg-static-"+cacheVerion);case 3:return s=e.sent,e.next=6,s.addAll(["./","imgs/icon.png","css/all.css","js/gzip-worker.js","js/page.js","js/prism-worker.js","js/svgo-worker.js","changelog.json",new Request("https://fonts.googleapis.com/css?family=Roboto:400,700|Inconsolata",{mode:"no-cors"})]);case 6:return e.next=8,n;case 8:r=e.sent,r&&r.split(".")[0]!==version.split(".")[0]||self.skipWaiting&&self.skipWaiting();case 10:case"end":return e.stop()}},null,t)}())});var expectedCaches=["svgomg-static-"+cacheVerion];self.addEventListener("activate",function(e){var t=this;e.waitUntil(function(e){var n,s,r,a;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,caches.keys();case 2:n=e.sent,s=n[Symbol.iterator]();case 4:if((r=s.next()).done){e.next=13;break}if(a=r.value,/^svgomg-/.test(a)){e.next=8;break}return e.abrupt("continue",11);case 8:if(-1!=expectedCaches.indexOf(a)){e.next=11;break}return e.next=11,caches["delete"](a);case 11:e.next=4;break;case 13:return e.next=15,storage.set("active-version",version);case 15:case"end":return e.stop()}},null,t)}())}),self.addEventListener("fetch",function(e){var t=new URL(e.request.url);e.respondWith("fonts.gstatic.com"==t.host?handleFontRequest(e.request):caches.match(e.request).then(function(t){return t||fetch(e.request)}))});
//# sourceMappingURL=out.js.map

},{"../../changelog.json":3,"../utils/storage":6,"./cache-polyfill":4,"regenerator/runtime":2}],2:[function(require,module,exports){
(function (global){
!function(t){"use strict";function r(t,r,e,o){var i=Object.create((r||n).prototype);return i._invoke=a(t,e||null,new f(o||[])),i}function e(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}function n(){}function o(){}function i(){}function a(t,r,n){var o=w;return function(i,a){if(o===L)throw new Error("Generator is already running");if(o===x)return h();for(;;){var c=n.delegate;if(c){if("return"===i||"throw"===i&&c.iterator[i]===p){n.delegate=null;var u=c.iterator["return"];if(u){var l=e(u,c.iterator,a);if("throw"===l.type){i="throw",a=l.arg;continue}}if("return"===i)continue}var l=e(c.iterator[i],c.iterator,a);if("throw"===l.type){n.delegate=null,i="throw",a=l.arg;continue}i="next",a=p;var f=l.arg;if(!f.done)return o=m,f;n[c.resultName]=f.value,n.next=c.nextLoc,n.delegate=null}if("next"===i)o===m?n.sent=a:delete n.sent;else if("throw"===i){if(o===w)throw o=x,a;n.dispatchException(a)&&(i="next",a=p)}else"return"===i&&n.abrupt("return",a);o=L;var l=e(t,r,n);if("normal"===l.type){o=n.done?x:m;var f={value:l.arg,done:n.done};if(l.arg!==b)return f;n.delegate&&"next"===i&&(a=p)}else"throw"===l.type&&(o=x,i="throw",a=l.arg)}}}function c(t){E[t]=function(r){return this._invoke(t,r)}}function u(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function l(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function f(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(u,this),this.reset()}function s(t){if(t){var r=t[v];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function o(){for(;++e<t.length;)if(y.call(t,e))return o.value=t[e],o.done=!1,o;return o.value=p,o.done=!0,o};return n.next=n}}return{next:h}}function h(){return{value:p,done:!0}}var p,y=Object.prototype.hasOwnProperty,v="function"==typeof Symbol&&Symbol.iterator||"@@iterator",d="object"==typeof module,g=t.regeneratorRuntime;if(g)return void(d&&(module.exports=g));g=t.regeneratorRuntime=d?module.exports:{},g.wrap=r;var w="suspendedStart",m="suspendedYield",L="executing",x="completed",b={},E=i.prototype=n.prototype;o.prototype=E.constructor=i,i.constructor=o,o.displayName="GeneratorFunction",g.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return r?r===o||"GeneratorFunction"===(r.displayName||r.name):!1},g.mark=function(t){return t.__proto__=i,t.prototype=Object.create(E),t},g.async=function(t,n,o,i){return new Promise(function(a,c){function u(t,r){var n=e(l[t],l,r);if("throw"===n.type)return void c(n.arg);var o=n.arg;o.done?a(o.value):Promise.resolve(o.value).then(f,s)}var l=r(t,n,o,i),f=u.bind(l,"next"),s=u.bind(l,"throw");f()})},c("next"),c("throw"),c("return"),E[v]=function(){return this},E.toString=function(){return"[object Generator]"},g.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},g.values=s,f.prototype={constructor:f,reset:function(){this.prev=0,this.next=0,this.sent=p,this.done=!1,this.delegate=null,this.tryEntries.forEach(l);for(var t,r=0;y.call(this,t="t"+r)||20>r;++r)this[t]=null},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){function r(r,n){return i.type="throw",i.arg=t,e.next=r,!!n}if(this.done)throw t;for(var e=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=y.call(o,"catchLoc"),c=y.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?this.next=o.finallyLoc:this.complete(i),b},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&r&&(this.next=r),b},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc)}},"catch":function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;l(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:s(t),resultName:r,nextLoc:e},b}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
module.exports=[
  {
    "version": "1.4.3",
    "changes": [
      "Fixing layout in Chrome beta."
    ]
  },
  {
    "version": "1.4.2",
    "changes": [
      "Better cache cleanup."
    ]
  },
  {
    "version": "1.4.1",
    "changes": [
      "Fixes to 'remove hidden items'."
    ]
  },
  {
    "version": "1.4.0",
    "changes": [
      "Updated to SVGO v0.5.1, bringing:",
      "Remove useless defs option.",
      "Round number in number lists.",
      "And loads of fixes!"
    ]
  },
  {
    "version": "1.3.0",
    "changes": [
      "Using manifest spec for icons etc."
    ]
  },
  {
    "version": "1.2.4",
    "changes": [
      "Download button now works in IE."
    ]
  },
  {
    "version": "1.2.3",
    "changes": [
      "Fixing bug introduced by browserify."
    ]
  },
  {
    "version": "1.2.2",
    "changes": [
      "Better font loading."
    ]
  },
  {
    "version": "1.2.1",
    "changes": [
      "Lots of performance improvements."
    ]
  },
  {
    "version": "1.2.0",
    "changes": [
      "Code view.",
      "Prettify code option."
    ]
  },
  {
    "version": "1.1.7",
    "changes": [
      "Performance improvements."
    ]
  },
  {
    "version": "1.1.6",
    "changes": [
      "Fix zooming with mouse wheels."
    ]
  },
  {
    "version": "1.1.5",
    "changes": [
      "Removing erroneous scrollbars in Firefox."
    ]
  },
  {
    "version": "1.1.4",
    "changes": [
      "Fixed 'about' link."
    ]
  },
  {
    "version": "1.1.3",
    "changes": [
      "Reverting some painting stuff until I get a handle on the performance.",
      "Using simpler demo SVG."
    ]
  },
  {
    "version": "1.1.2",
    "changes": [
      "Sharper rendering on desktop Chrome & Safari.",
      "Fixed right mouse button issue."
    ]
  },
  {
    "version": "1.1.1",
    "changes": [
      "Reset zooming on image load."
    ]
  },
  {
    "version": "1.1.0",
    "changes": [
      "Click/touch and drag panning.",
      "Pinch zooming.",
      "Wheel zooming."
    ]
  },
  {
    "version": "1.0.4",
    "changes": [
      "Fixing checkered background in IE.",
      "Improving slider touch interaction."
    ]
  },
  {
    "version": "1.0.3",
    "changes": [
      "Fixing SVG output in Firefox."
    ]
  },
  {
    "version": "1.0.2",
    "changes": [
      "Caching fonts for offline use.",
      "Removing tap delay on iPhone/iPad.",
      "Fixing iOS add-to-homescreen.",
      "Better mobile demo image."
    ]
  },
  {
    "version": "1.0.1",
    "changes": [
      "Layout fixes.",
      "Better mobile keyboard handling.",
      "A lighter demo SVG for mobile.",
      "Fixing drag & drop."
    ]
  },
  {
    "version": "1.0.0",
    "changes": [
      "First release."
    ]
  }
]
},{}],4:[function(require,module,exports){
"use strict";Cache.prototype.add||(Cache.prototype.add=function(t){return this.addAll([t])}),Cache.prototype.addAll||(Cache.prototype.addAll=function(t){var e=function(t){this.name="NetworkError",this.code=19,this.message=t},r=this;return e.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return t=t.map(function(t){return t instanceof Request?t:String(t)}),Promise.all(t.map(function(t){"string"==typeof t&&(t=new Request(t));var r=new URL(t.url).protocol;if("http:"!==r&&"https:"!==r)throw new e("Invalid scheme");return fetch(t.clone())}))}).then(function(e){return Promise.all(e.map(function(e,n){return r.put(t[n],e)}))}).then(function(){return void 0})}),CacheStorage.prototype.match||(CacheStorage.prototype.match=function(t,e){var r=this;return this.keys().then(function(n){var o;return n.reduce(function(n,u){return n.then(function(){return o||r.open(u).then(function(r){return r.match(t,e)}).then(function(t){return o=t})})},Promise.resolve())})}),module.exports=self.caches;
//# sourceMappingURL=out.js.map

},{}],5:[function(require,module,exports){
"use strict";function promisifyRequest(e){return new Promise(function(t,r){var n=function(r){t(e.result),i()},o=function(t){r(e.error),i()},i=function(){e.removeEventListener("complete",n),e.removeEventListener("success",n),e.removeEventListener("error",o),e.removeEventListener("abort",o)};e.addEventListener("complete",n),e.addEventListener("success",n),e.addEventListener("error",o),e.addEventListener("abort",o)})}var _prototypeProperties=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},IndexedDouchebag=function(){function e(e,t,r){var n=indexedDB.open(e,t);this.ready=promisifyRequest(n),n.onupgradeneeded=function(e){r(n.result,e.oldVersion)}}return _prototypeProperties(e,null,{transaction:{value:function(e,t,r){return this.ready.then(function(n){var o="readonly";t.apply?r=t:t&&(o=t);var i,u=n.transaction(e,o),a=r(u,n),s=promisifyRequest(u);return a?(i=a[0]&&"result"in a[0]?Promise.all(a.map(promisifyRequest)):promisifyRequest(a),s.then(function(){return i})):s})},writable:!0,enumerable:!0,configurable:!0},get:{value:function(e,t){return this.transaction(e,function(r){return r.objectStore(e).get(t)})},writable:!0,enumerable:!0,configurable:!0},put:{value:function(e,t,r){return this.transaction(e,"readwrite",function(n){n.objectStore(e).put(r,t)})},writable:!0,enumerable:!0,configurable:!0},"delete":{value:function(e,t){return this.transaction(e,"readwrite",function(r){r.objectStore(e)["delete"](t)})},writable:!0,enumerable:!0,configurable:!0}}),e}();module.exports=IndexedDouchebag;
//# sourceMappingURL=out.js.map

},{}],6:[function(require,module,exports){
"use strict";function getIdb(){return idb||(idb=new Idb("svgo-keyval",1,function(e){e.createObjectStore("keyval")})),idb}var Idb=require("./indexeddouchbag"),idb;self.indexedDB?module.exports={get:function(e){return getIdb().get("keyval",e)},set:function(e,t){return getIdb().put("keyval",e,t)},"delete":function(e){return getIdb()["delete"]("keyval",e)}}:module.exports={get:function(e){return Promise.resolve(localStorage.getItem(e))},set:function(e,t){return Promise.resolve(localStorage.setItem(e,t))},"delete":function(e){return Promise.resolve(localStorage.removeItem(e))}};
//# sourceMappingURL=out.js.map

},{"./indexeddouchbag":5}]},{},[1]);

//# sourceMappingURL=sw.js.map