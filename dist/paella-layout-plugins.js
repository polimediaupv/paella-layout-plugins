!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("paella-core")):"function"==typeof define&&define.amd?define(["paella-core"],e):"object"==typeof exports?exports["paella-layout-plugins"]=e(require("paella-core")):t["paella-layout-plugins"]=e(t[void 0])}(self,(function(t){return(()=>{var e={911:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});var i=o(995);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function l(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(f,t);var e,o,i,n,s=(i=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(i);if(n){var o=c(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return l(this,t)});function f(){return r(this,f),s.apply(this,arguments)}return e=f,(o=[{key:"moduleName",get:function(){return"paella-layout-plugins"}},{key:"moduleVersion",get:function(){return"1.8.0"}}])&&a(e.prototype,o),f}(i.PluginModule)},533:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>x});var i=o(995),n=o(725),r=o.n(n),a=o(550),u=o.n(a),l=o(835),c=o.n(l);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e,o,i,n,r,a){try{var u=t[r](a),l=u.value}catch(t){return void o(t)}u.done?e(l):Promise.resolve(l).then(i,n)}function p(t){return function(){var e=this,o=arguments;return new Promise((function(i,n){var r=t.apply(e,o);function a(t){f(r,i,n,a,u,"next",t)}function u(t){f(r,i,n,a,u,"throw",t)}a(void 0)}))}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function y(t,e,o){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(i){var n=Object.getOwnPropertyDescriptor(i,e);return n.get?n.get.call(o):n.value}},y(t,e,o||t)}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}function g(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var b=i.utils.getCookie,w=i.utils.setCookieIfAllowed,C={sideBySide:{id:"sideBySide",videos:[{content:null,rect:[{aspectRatio:"16/9",width:614,height:345,top:187,left:17},{aspectRatio:"16/10",width:614,height:384,top:167,left:17},{aspectRatio:"4/3",width:614,height:460,top:130,left:17},{aspectRatio:"3/2",width:614,height:409,top:155,left:17},{aspectRatio:"5/4",width:614,height:491,top:114,left:17}],visible:!0,layer:1},{content:null,rect:[{aspectRatio:"16/9",width:614,height:345,top:187,left:649},{aspectRatio:"16/10",width:614,height:384,top:167,left:649},{aspectRatio:"4/3",width:614,height:460,top:130,left:649},{aspectRatio:"3/2",width:614,height:409,top:155,left:649},{aspectRatio:"5/4",width:614,height:491,top:114,left:649}],visible:!0,layer:"1"}],buttons:[]},leftMaximized:{id:"leftMaximized",videos:[{content:null,rect:[{aspectRatio:"5/4",left:35,top:8,width:847,height:699},{aspectRatio:"3/2",left:35,top:66,width:874,height:584},{aspectRatio:"4/3",left:35,top:32,width:874,height:656},{aspectRatio:"16/10",left:35,top:84,width:874,height:548},{aspectRatio:"16/9",left:35,top:112,width:874,height:493}],visible:!0,layer:1},{content:null,rect:[{aspectRatio:"5/4",left:947,top:352,width:316,height:253},{aspectRatio:"3/2",left:947,top:374,width:316,height:211},{aspectRatio:"4/3",left:947,top:360,width:316,height:237},{aspectRatio:"16/10",left:947,top:380,width:316,height:198},{aspectRatio:"16/9",left:947,top:390,width:316,height:178}],visible:!0,layer:2}],buttons:[]},rightMaximized:{id:"rightMaximized",videos:[{content:null,rect:[{aspectRatio:"5/4",left:35,top:352,width:316,height:253},{aspectRatio:"3/2",left:35,top:374,width:316,height:211},{aspectRatio:"4/3",left:35,top:360,width:316,height:237},{aspectRatio:"16/10",left:35,top:380,width:316,height:198},{aspectRatio:"16/9",left:35,top:390,width:316,height:178}],visible:!0,layer:1},{content:null,rect:[{aspectRatio:"5/4",left:359,top:8,width:847,height:699},{aspectRatio:"3/2",left:359,top:66,width:874,height:584},{aspectRatio:"4/3",left:359,top:32,width:874,height:656},{aspectRatio:"16/10",left:359,top:84,width:874,height:548},{aspectRatio:"16/9",left:359,top:112,width:874,height:493}],visible:!0,layer:2}],buttons:[]}},R="sideBySide",x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(x,t);var e,o,n,a,l,s,f=(l=x,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(l);if(s){var o=m(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return g(this,t)});function x(){return d(this,x),f.apply(this,arguments)}return e=x,o=[{key:"identifier",get:function(){return"dual-video-ethz"}},{key:"load",value:(a=p(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.cookieType=this.config.cookieType||"preferences",""!==(e=b("dualVideoLayoutEthz"))&&-1!==Object.keys(C).indexOf(e)&&(R=e),this.player.log.debug("Dual video ETHZ layout loaded");case 4:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"getValidStreams",value:function(t){return y(m(x.prototype),"getValidStreams",this).call(this,t).filter((function(t){return 2===t.length}))}},{key:"setSideBySide",value:function(){R="sideBySide",this.player.videoContainer.updateLayout()}},{key:"setLeftMaximized",value:function(){R="leftMaximized",this.player.videoContainer.updateLayout()}},{key:"setRightMaximized",value:function(){R="rightMaximized",this.player.videoContainer.updateLayout()}},{key:"closeVideo",value:function(t){var e=this.player.videoContainer.validContentIds.filter((function(t){return-1===t.indexOf("-")})).find((function(e){return e!=t}));this.player.videoContainer.setLayout(e)}},{key:"getVideoCanvasButtons",value:function(t,e,o,n){var a=this,l=function(){return{icon:a.player.getCustomPluginIcon(a.name,"iconMinimize")||r(),position:i.CanvasButtonPosition.RIGHT,title:a.player.translate("Minimize video"),ariaLabel:a.player.translate("Minimize video"),click:function(){e===a._currentContent[0]?a.setRightMaximized():a.setLeftMaximized()}}},s=function(){return{icon:a.player.getCustomPluginIcon(a.name,"iconMaximize")||u(),position:i.CanvasButtonPosition.RIGHT,title:a.player.translate("Maximize video"),ariaLabel:a.player.translate("Maximize video"),click:function(){a.setSideBySide()}}},f=function(){return{icon:a.player.getCustomPluginIcon(a.name,"iconClose")||c(),position:i.CanvasButtonPosition.RIGHT,title:a.player.translate("Close video"),ariaLabel:a.player.translate("Close video"),click:function(){a.closeVideo(e)}}};return"sideBySide"===t.id?[f(),l()]:"leftMaximized"===t.id?e===this._currentContent[0]?[f(),l()]:[f(),s()]:"rightMaximized"===t.id?e===this._currentContent[0]?[f(),s()]:[f(),l()]:void 0}},{key:"getLayoutStructure",value:function(t,e){if(!this._currentContent){var o=this.validContent.find((function(t){return t.id===e})),i=o.content;this._currentContent=i}var n=function(t){var e=JSON.parse(JSON.stringify(C[R]));return e.videos[0].content=t[0],e.videos[1].content=t[1],e}(this._currentContent),r={id:n.id,player:this.player,name:{es:"Dos streams con posición dinámica"},hidden:!1,videos:n.videos,buttons:[]};return w(this.player,this.cookieType,"dualVideoLayoutEthz",R),r}},{key:"getDictionaries",value:(n=p(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{es:{"Maximize video":"Maximizar vídeo","Minimize video":"Minimizar vídeo","Close video":"Cerrar vídeo"}});case 1:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})}],o&&h(e.prototype,o),x}(i.VideoLayout)},835:t=>{t.exports='<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"></path></svg>'},550:t=>{t.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 2C12.4477 2 12 1.55228 12 1C12 0.447715 12.4477 0 13 0H19C19.5523 0 20 0.447715 20 1V7C20 7.55228 19.5523 8 19 8C18.4477 8 18 7.55228 18 7V3.41421L12.7071 8.70711C12.3166 9.09763 11.6834 9.09763 11.2929 8.70711C10.9024 8.31658 10.9024 7.68342 11.2929 7.29289L16.5858 2H13ZM7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929C9.09763 11.6834 9.09763 12.3166 8.70711 12.7071L3.41421 18H7C7.55228 18 8 18.4477 8 19C8 19.5523 7.55228 20 7 20H1C0.447715 20 0 19.5523 0 19V13C0 12.4477 0.447715 12 1 12C1.55228 12 2 12.4477 2 13V16.5858L7.29289 11.2929Z"></path></svg>'},725:t=>{t.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2929 0.292893C18.6834 -0.0976311 19.3166 -0.0976311 19.7071 0.292893C20.0976 0.683417 20.0976 1.31658 19.7071 1.70711L14.4142 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H12C11.4477 9 11 8.55228 11 8V2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V5.58579L18.2929 0.292893ZM1 12C1 11.4477 1.44772 11 2 11H8C8.55228 11 9 11.4477 9 12V18C9 18.5523 8.55228 19 8 19C7.44772 19 7 18.5523 7 18V14.4142L1.70711 19.7071C1.31658 20.0976 0.683417 20.0976 0.292893 19.7071C-0.0976311 19.3166 -0.0976311 18.6834 0.292893 18.2929L5.58579 13H2C1.44772 13 1 12.5523 1 12Z"></path></svg>'},757:(t,e,o)=>{var i={"./LayoutPluginsModule.js":911,"./es.upv.paella.dualVideoSideBySide.js":533};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id=757},995:e=>{"use strict";e.exports=t}},o={};function i(t){var n=o[t];if(void 0!==n)return n.exports;var r=o[t]={exports:{}};return e[t](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";function t(){return i(757)}i.r(n),i.d(n,{default:()=>t,DualVideoSideBySideLayoutPlugin:()=>e});var e=i(533).default})(),n})()}));
//# sourceMappingURL=paella-layout-plugins.js.map