!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=Vue},function(t,e,n){
/*!
 * vue-countdown v1.1.5
 * https://fengyuanchen.github.io/vue-countdown
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-02-25T01:19:32.769Z
 */
t.exports=function(){"use strict";return{name:"countdown",data:function(){return{counting:!1,endTime:0,totalMilliseconds:0}},props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:function(t){return t>=0}},now:{type:Function,default:function(){return Date.now()}},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:function(t){return t>=0}},transform:{type:Function,default:function(t){return t}}},computed:{days:function(){return Math.floor(this.totalMilliseconds/864e5)},hours:function(){return Math.floor(this.totalMilliseconds%864e5/36e5)},minutes:function(){return Math.floor(this.totalMilliseconds%36e5/6e4)},seconds:function(){return Math.floor(this.totalMilliseconds%6e4/1e3)},milliseconds:function(){return Math.floor(this.totalMilliseconds%1e3)},totalDays:function(){return this.days},totalHours:function(){return Math.floor(this.totalMilliseconds/36e5)},totalMinutes:function(){return Math.floor(this.totalMilliseconds/6e4)},totalSeconds:function(){return Math.floor(this.totalMilliseconds/1e3)}},render:function(t){return t(this.tag,this.$scopedSlots.default?[this.$scopedSlots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:this.$slots.default)},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},methods:{start:function(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit("start"),"visible"===document.visibilityState&&this.continue())},continue:function(){var t=this;if(this.counting){var e=Math.min(this.totalMilliseconds,this.interval);if(e>0)if(window.requestAnimationFrame){var n,i;this.requestId=requestAnimationFrame((function o(s){n||(n=s),i||(i=s);var r=s-n;r>=e||r+(s-i)/2>=e?t.progress():t.requestId=requestAnimationFrame(o),i=s}))}else this.timeoutId=setTimeout((function(){t.progress()}),e);else this.end()}},pause:function(){window.requestAnimationFrame?cancelAnimationFrame(this.requestId):clearTimeout(this.timeoutId)},progress:function(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit("progress",{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort:function(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit("abort"))},end:function(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit("end"))},update:function(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange:function(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause()}}},mounted:function(){document.addEventListener("visibilitychange",this.handleVisibilityChange)},beforeDestroy:function(){document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.pause()}}}()},function(t,e,n){var i;i=function(t){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=2)}([function(t,e){t.exports=function(t,e,n,i){var o,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(o=t,s=t.default);var a="function"==typeof s?s.options:s;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var c=Object.create(a.computed||null);Object.keys(i).forEach((function(t){var e=i[t];c[t]=function(){return e}})),a.computed=c}return{esModule:o,exports:s,options:a}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(20),o=new(n.n(i).a)({name:"vue-notification"})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i),s=n(1),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.installed){this.installed=!0,this.params=e,t.component(e.componentName||"notifications",o.a);var n=function(t){"string"==typeof t&&(t={title:"",text:t}),"object"===(void 0===t?"undefined":r(t))&&s.a.$emit("add",t)};n.close=function(t){s.a.$emit("close",t)};var i=e.name||"notify";t.prototype["$"+i]=n,t[i]=n}}};e.default=a},function(t,e,n){n(17);var i=n(0)(n(5),n(15),null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CssGroup",props:["name"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n(1),s=n(9),r=n(7),a=n(13),c=n.n(a),u=n(12),l=n.n(u),d=n(8),f=0,p=2,h={name:"Notifications",components:{VelocityGroup:c.a,CssGroup:l.a},props:{group:{type:String,default:""},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:function(){return r.a.position}},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css",validator:function(t){return"css"===t||"velocity"===t}},animation:{type:Object,default:function(){return r.a.velocityAnimation}},animationName:{type:String,default:r.a.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0},ignoreDuplicates:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0}},data:function(){return{list:[],velocity:i.default.params.velocity}},mounted:function(){o.a.$on("add",this.addItem),o.a.$on("close",this.closeItem)},computed:{actualWidth:function(){return n.i(d.a)(this.width)},isVA:function(){return"velocity"===this.animationType},componentName:function(){return this.isVA?"VelocityGroup":"CssGroup"},styles:function(){var t,e,i,o=n.i(s.a)(this.position),r=o.x,a=o.y,c=this.actualWidth.value,u=this.actualWidth.type,l=(i="0px",(e=a)in(t={width:c+u})?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t);return"center"===r?l.left="calc(50% - "+c/2+u+")":l[r]="0px",l},active:function(){return this.list.filter((function(t){return t.state!==p}))},botToTop:function(){return this.styles.hasOwnProperty("bottom")}},methods:{destroyIfNecessary:function(t){this.closeOnClick&&this.destroy(t)},addItem:function(t){var e=this;if(t.group=t.group||"",this.group===t.group)if(t.clean||t.clear)this.destroyAll();else{var i="number"==typeof t.duration?t.duration:this.duration,o="number"==typeof t.speed?t.speed:this.speed,r="boolean"==typeof t.ignoreDuplicates?t.ignoreDuplicates:this.ignoreDuplicates,a=t.title,c=t.text,u=t.type,l=t.data,d={id:t.id||n.i(s.b)(),title:a,text:c,type:u,state:f,speed:o,length:i+2*o,data:l};i>=0&&(d.timer=setTimeout((function(){e.destroy(d)}),d.length));var p=this.reverse?!this.botToTop:this.botToTop,h=-1,A=this.active.some((function(e){return e.title===t.title&&e.text===t.text}));(!r||!A)&&(p?(this.list.push(d),this.active.length>this.max&&(h=0)):(this.list.unshift(d),this.active.length>this.max&&(h=this.active.length-1)),-1!==h&&this.destroy(this.active[h]))}},closeItem:function(t){this.destroyById(t)},notifyClass:function(t){return["vue-notification-template",this.classes,t.type]},notifyWrapperStyle:function(t){return this.isVA?null:{transition:"all "+t.speed+"ms"}},destroy:function(t){clearTimeout(t.timer),t.state=p,this.isVA||this.clean()},destroyById:function(t){var e=this.list.find((function(e){return e.id===t}));e&&this.destroy(e)},destroyAll:function(){this.active.forEach(this.destroy)},getAnimation:function(t,e){var n=this.animation[t];return"function"==typeof n?n.call(this,e):n},enter:function(t){var e=t.el,n=t.complete,i=this.getAnimation("enter",e);this.velocity(e,i,{duration:this.speed,complete:n})},leave:function(t){var e=t.el,n=t.complete,i=this.getAnimation("leave",e);this.velocity(e,i,{duration:this.speed,complete:n})},clean:function(){this.list=this.list.filter((function(t){return t.state!==p}))}}};e.default=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"VelocityGroup",methods:{enter:function(t,e){this.$emit("enter",{el:t,complete:e})},leave:function(t,e){this.$emit("leave",{el:t,complete:e})},afterLeave:function(){this.$emit("afterLeave")}}}},function(t,e,n){"use strict";e.a={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:function(t){return{height:[t.clientHeight,0],opacity:[1,0]}},leave:{height:0,opacity:[0,1]}}}},function(t,e,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=[{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+px$")},{name:"%",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+%$")},{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+$")}];e.a=function(t){switch(void 0===t?"undefined":i(t)){case"number":return{type:"px",value:t};case"string":return function(t){if("auto"===t)return{type:t,value:0};for(var e=0;e<o.length;e++){var n=o[e];if(n.regexp.test(t))return{type:n.name,value:parseFloat(t)}}return{type:"",value:t}}(t);default:return{type:"",value:t}}}},function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return r}));var i,o={x:["left","center","right"],y:["top","bottom"]},s=(i=0,function(){return i++}),r=function(t){"string"==typeof t&&(t=function(t){return"string"!=typeof t?[]:t.split(/\s+/gi).filter((function(t){return t}))}(t));var e=null,n=null;return t.forEach((function(t){-1!==o.y.indexOf(t)&&(n=t),-1!==o.x.indexOf(t)&&(e=t)})),{x:e,y:n}}},function(t,e,n){(t.exports=n(11)()).push([t.i,".vue-notification-group{display:block;position:fixed;z-index:5000}.vue-notification-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.notification-title{font-weight:600}.vue-notification-template{background:#fff}.vue-notification,.vue-notification-template{display:block;box-sizing:border-box;text-align:left}.vue-notification{font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44a4fc;border-left:5px solid #187fe7}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#e54d42;border-left-color:#b82e24}.vue-notification.success{background:#68cd86;border-left-color:#42a85f}.vn-fade-enter-active,.vn-fade-leave-active,.vn-fade-move{transition:all .5s}.vn-fade-enter,.vn-fade-leave-to{opacity:0}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(i[s]=!0)}for(o=0;o<e.length;o++){var r=e[o];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(t,e,n){var i=n(0)(n(4),n(16),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(6),n(14),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("transition-group",{attrs:{css:!1},on:{enter:this.enter,leave:this.leave,"after-leave":this.afterLeave}},[this._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-notification-group",style:t.styles},[n(t.componentName,{tag:"component",attrs:{name:t.animationName},on:{enter:t.enter,leave:t.leave,"after-leave":t.clean}},t._l(t.active,(function(e){return n("div",{key:e.id,staticClass:"vue-notification-wrapper",style:t.notifyWrapperStyle(e),attrs:{"data-id":e.id}},[t._t("body",[n("div",{class:t.notifyClass(e),on:{click:function(n){return t.destroyIfNecessary(e)}}},[e.title?n("div",{staticClass:"notification-title",domProps:{innerHTML:t._s(e.title)}}):t._e(),t._v(" "),n("div",{staticClass:"notification-content",domProps:{innerHTML:t._s(e.text)}})])],{item:e,close:function(){return t.destroy(e)}})],2)})),0)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("transition-group",{attrs:{name:this.name}},[this._t("default")],2)},staticRenderFns:[]}},function(t,e,n){var i=n(10);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),n(18)("2901aeae",i,!0)},function(t,e,n){var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(19),s={},r=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,l=function(){},d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t){for(var e=0;e<t.length;e++){var n=t[e],i=s[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(h(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(o=0;o<n.parts.length;o++)r.push(h(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:r}}}}function p(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function h(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(u)return l;i.parentNode.removeChild(i)}if(d){var o=c++;i=a||(a=p()),e=v.bind(null,i,o,!1),n=v.bind(null,i,o,!0)}else i=p(),e=y.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}t.exports=function(t,e,n){u=n;var i=o(t,e);return f(i),function(e){for(var n=[],r=0;r<i.length;r++){var a=i[r];(c=s[a.id]).refs--,n.push(c)}for(e?f(i=o(t,e)):i=[],r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete s[c.id]}}}};var A,m=(A=[],function(t,e){return A[t]=e,A.filter(Boolean).join("\n")});function v(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var s=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function y(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var s=e[o],r=s[0],a={id:t+":"+o,css:s[1],media:s[2],sourceMap:s[3]};i[r]?i[r].parts.push(a):n.push(i[r]={id:r,parts:[a]})}return n}},function(e,n){e.exports=t}])},t.exports=i(n(0))},function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("main-filter",{attrs:{options:this.excercisesOptions},on:{"data-update":this.sendData}}),this._v(" "),e("notifications",{attrs:{group:"twelve_app"}})],1)};r._withStripped=!0;var a=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"spinner",attrs:{viewBox:"0 0 50 50","data-size":"small","data-flow":"inline"}},[e("circle",{staticClass:"path",attrs:{cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"5",stroke:"#93bfec"}})])};function c(t,e,n,i,o,s,r,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}a._withStripped=!0;var u=c({},a,[],!1,null,null,null);u.options.__file="components/Spinner.vue";var l=u.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("name-form",{on:{"toggle-introduced":t.toggleUserIntroduced}}),t._v(" "),t._l(t.options,(function(e){return t.currentExcercise===e.id?n("div",{staticClass:"excercise-container"},[n("div",{staticClass:"exercise-content"},[n("div",{staticClass:"close-button",on:{click:t.closeExerciseModal}},[t._v("X")]),t._v(" "),t.timerStart?n("countdown",{attrs:{time:3e4,"emit-events":!0},on:{start:function(n){return t.triggerTimerStart(e.id)},end:function(n){return t.triggerTimerEnd(e.id)}},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.minutes)+" minutes, "+t._s(e.seconds)+" seconds.\n        ")]}}],null,!0)}):t._e(),t._v(" "),t.timerStart?t._e():n("button",{on:{click:function(e){t.timerStart=!0}}},[t._v("Start")])],1)]):t._e()})),t._v(" "),n("div",{staticClass:"container",class:{"visually-disabled":t.userIntroduced||t.exerciseModalVisible}},t._l(t.options,(function(e){return n("div",{staticClass:"today-progress-item",class:{checked:t.checked.includes(e.id)},on:{click:function(n){return t.checkExcercise(e.id)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"twelve_"+e.id,name:"today-progress-checkboxes"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var n=t.checked,i=e.target,o=!!i.checked;if(Array.isArray(n)){var s=t._i(n,null);i.checked?s<0&&(t.checked=n.concat([null])):s>-1&&(t.checked=n.slice(0,s).concat(n.slice(s+1)))}else t.checked=o}}}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.label))]),t._v(" "),n("div",{staticClass:"description",domProps:{innerHTML:t._s(e.description)}})])})),0)],2)};d._withStripped=!0;var f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"introduce-form"},[t.userIntroduced?n("div",{staticClass:"user-name-container"},[n("span",[t._v("Hi, "+t._s(t.username))]),t._v(" "),n("button",{on:{click:t.toggleStatus}},[t._v("Change name")])]):t._e(),t._v(" "),t.userIntroduced?t._e():n("div",{staticClass:"user-login-container"},[n("div",{staticClass:"window"},[n("div",{staticClass:"login-message"},[t._v("Please, enter your name:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"username",attrs:{type:"text",name:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),""!==t.username?n("input",{attrs:{type:"button",value:"Go"},on:{click:t.setLogin}}):t._e()])])])};f._withStripped=!0;var p=c({data:function(){return{username:""===localStorage.twelveUserName?"":localStorage.twelveUserName,userIntroduced:""!==localStorage.twelveUserName}},methods:{toggleStatus:function(){this.userIntroduced=!1,this.$emit("toggle-introduced")},setLogin:function(){localStorage.twelveUserName=this.username,this.userIntroduced=!0,this.$emit("toggle-introduced"),this.$notify({group:"twelve_app",title:"You have introduced yourself",text:"Lets start training!"})}}},f,[],!1,null,null,null);p.options.__file="components/NameForm.vue";var h=p.exports,A=n(1),m=c({props:["options"],components:{NameForm:h,Countdown:n.n(A).a},data:function(){return{checked:[],userIntroduced:!1,currentExcercise:0,timerStart:!1,exerciseModalVisible:!1}},created:function(){null!=this.default&&(this.checked=this.default.split(","))},computed:{},methods:{triggerTimerEnd:function(t){-1===this.checked.indexOf(t)?(this.checked.push(t),this.$emit("data-update",this.checked),this.beep(),s,this.$notify({group:"twelve_app",title:"Hooray, you have finished your excercise!",text:"Now, lets have some rest."})):this.checked.splice(this.checked.indexOf(t),1)},triggerTimerStart:function(t){console.log(t)},checkExcercise:function(t){""!==localStorage.twelveUserName&&(this.currentExcercise=t,this.exerciseModalVisible=!0)},toggleUserIntroduced:function(){this.userIntroduced=!this.userIntroduced},closeExerciseModal:function(){this.currentExcercise=0,this.exerciseModalVisible=!1},beep:function(){new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=").play()}},watch:{checked:function(t){}},mounted:function(){}},d,[],!1,null,null,null);m.options.__file="components/Filter.vue";var v=c({props:["excercises","current_nid"],data:function(){return{checkedExcercises:[],userData:{name:""},isStepNextDisabled:!0}},components:{Spinner:l,MainFilter:m.exports},mounted:function(){console.log(this.current_nid)},methods:{sendData:function(t){}},computed:{excercisesOptions:function(){var t={};for(var e in console.log(this.excercises),this.excercises){var n=this.excercises[e];t[e]={label:n.label,description:n.description,id:e}}return t}}},r,[],!1,null,null,null);v.options.__file="components/TodayProgress.vue";var y=v.exports,g=n(2),b=n.n(g);o.a.use(b.a),new o.a({delimiters:["[{","}]"],components:{TodayProgress:y}}).$mount("#twelve_day_progress_app"),o.a.config.devtools=!0}]);