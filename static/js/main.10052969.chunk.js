(this["webpackJsonpreact-google-slides-example"]=this["webpackJsonpreact-google-slides-example"]||[]).push([[0],{1:function(e,t,n){var o;window,e.exports=(o=n(10),function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(1)),i=new RegExp("(((https|http)://|)docs.google.com/presentation/d/)(.+?(?=(/.+|/|$)))"),a=function(e){return e?"number"==typeof e?"".concat(e,"px"):e:"480px"};t.default=function(e){var t=e.slidesLink,n=e.loop,o=void 0!==n&&n,l=e.slideDuration,c=void 0===l?2:l,s=e.showControls,d=void 0!==s&&s,u=e.width,p=void 0===u?"640px":u,f=e.height,m=void 0===f?"480px":f,h=e.containerStyle,g=void 0===h?null:h,y=function(e,t,n,o){if(!e)throw new Error("Failed to fetch presentation key, check the presentation url");var r="https://docs.google.com/presentation/d/";return r+="".concat(e,"/embed?"),r+="start=true",r+="&loop=".concat(t?"true":"false"),r+="&delayms=".concat(1e3*n),o||(r+="&rm=minimal"),r}(function(e){var t=i.exec(e);return t?t[4]:null}(t),o,c,d);return r.default.createElement("iframe",{src:y,width:a(p),height:a(m),style:g||{border:0},allowFullScreen:!0})}},function(e,t){e.exports=o}]))},13:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(3),a=n.n(i),l=(n(9),n(1)),c=n.n(l),s=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{padding:20}},r.a.createElement(c.a,{width:"100%",slidesLink:"https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM",slideDuration:5})),r.a.createElement("div",{style:{padding:20}},r.a.createElement(c.a,{width:"50%",slidesLink:"https://docs.google.com/presentation/d/1_f7J6Mu4wAy5TOkcgQREekvGvGd3V_Tt09nMmKb6T0I/edit?usp=sharing",showControls:!0,loop:!0})),r.a.createElement("div",{style:{padding:20}},r.a.createElement(c.a,{slidesLink:"https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM",width:"75%",slideDuration:10,showControls:!0})),r.a.createElement("div",{style:{padding:20}},r.a.createElement(c.a,{slidesLink:"https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM",width:300,height:300,loop:!0})))};a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root"))},4:function(e,t,n){e.exports=n(13)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.10052969.chunk.js.map