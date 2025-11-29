(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,9300,(e,t,n)=>{t.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!s(l))return!1;var u=e[l],d=t[l];if(!1===(o=n?n.call(r,u,d,l):void 0)||void 0===o&&u!==d)return!1}return!0}},8733,e=>{"use strict";var t=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],n=t.join(","),r="undefined"==typeof Element,o=r?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=!r&&Element.prototype.getRootNode?function(e){var t;return null==e||null==(t=e.getRootNode)?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},a=function(e,t){void 0===t&&(t=!0);var n,r=null==e||null==(n=e.getAttribute)?void 0:n.call(e,"inert");return""===r||"true"===r||t&&e&&a(e.parentNode)},s=function(e){var t,n=null==e||null==(t=e.getAttribute)?void 0:t.call(e,"contenteditable");return""===n||"true"===n},c=function(e,t,r){if(a(e))return[];var i=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&o.call(e,n)&&i.unshift(e),i=i.filter(r)},l=function(e,t,r){for(var i=[],s=Array.from(e);s.length;){var c=s.shift();if(!a(c,!1))if("SLOT"===c.tagName){var u=c.assignedElements(),d=l(u.length?u:c.children,!0,r);r.flatten?i.push.apply(i,d):i.push({scopeParent:c,candidates:d})}else{o.call(c,n)&&r.filter(c)&&(t||!e.includes(c))&&i.push(c);var p=c.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(c),f=!a(p,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(c));if(p&&f){var h=l(!0===p?c.children:p.children,!0,r);r.flatten?i.push.apply(i,h):i.push({scopeParent:c,candidates:h})}else s.unshift.apply(s,c.children)}}return i},u=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},d=function(e){if(!e)throw Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||s(e))&&!u(e)?0:e.tabIndex},p=function(e,t){var n=d(e);return n<0&&t&&!u(e)?0:n},f=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},h=function(e){return"INPUT"===e.tagName},v=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},b=function(e){if(!e.name)return!0;var t,n=e.form||i(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=v(t,e.form);return!o||o===e},m=function(e){return h(e)&&"radio"===e.type&&!b(e)},g=function(e){var t,n,r,o,a,s,c,l=e&&i(e),u=null==(t=l)?void 0:t.host,d=!1;if(l&&l!==e)for(d=!!(null!=(n=u)&&null!=(r=n.ownerDocument)&&r.contains(u)||null!=e&&null!=(o=e.ownerDocument)&&o.contains(e));!d&&u;)d=!!(null!=(s=u=null==(a=l=i(u))?void 0:a.host)&&null!=(c=s.ownerDocument)&&c.contains(u));return d},y=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},x=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("full-native"===n&&"checkVisibility"in e)return!e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});if("hidden"===getComputedStyle(e).visibility)return!0;var a=o.call(e,"details>summary:first-of-type")?e.parentElement:e;if(o.call(a,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"full-native"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return y(e)}else{if("function"==typeof r){for(var s=e;e;){var c=e.parentElement,l=i(e);if(c&&!c.shadowRoot&&!0===r(c))return y(e);e=e.assignedSlot?e.assignedSlot:c||l===e.ownerDocument?c:l.host}e=s}if(g(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},w=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!o.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1},S=function(e,t){return!(t.disabled||a(t)||h(t)&&"hidden"===t.type||x(t,e)||"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some(function(e){return"SUMMARY"===e.tagName})||w(t))},k=function(e,t){return!(m(t)||0>d(t))&&!!S(e,t)},O=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!isNaN(t)||!!(t>=0)},E=function(e){var t=[],n=[];return e.forEach(function(e,r){var o=!!e.scopeParent,i=o?e.scopeParent:e,a=p(i,o),s=o?E(e.candidates):i;0===a?o?t.push.apply(t,s):t.push(i):n.push({documentOrder:r,tabIndex:a,item:e,isScope:o,content:s})}),n.sort(f).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(t)},j=function(e,t){return E((t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:k.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:O}):c(e,t.includeContainer,k.bind(null,t)))},P=function(e,t){return(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:S.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):c(e,t.includeContainer,S.bind(null,t))},T=function(e,t){if(t=t||{},!e)throw Error("No node provided");return!1!==o.call(e,n)&&k(t,e)},C=t.concat("iframe").join(","),N=function(e,t){if(t=t||{},!e)throw Error("No node provided");return!1!==o.call(e,C)&&S(t,e)};e.s(["focusable",()=>P,"getTabIndex",()=>d,"isFocusable",()=>N,"isTabbable",()=>T,"tabbable",()=>j])},6836,e=>{"use strict";var t=e.i(8733);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var i=function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n._setPausedState(!0)}var r=e.indexOf(t);-1===r||e.splice(r,1),e.push(t)},a=function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&!e[e.length-1]._isManuallyPaused()&&e[e.length-1]._setPausedState(!1)},s=function(e){return(null==e?void 0:e.key)==="Tab"||(null==e?void 0:e.keyCode)===9},c=function(e){return s(e)&&!e.shiftKey},l=function(e){return s(e)&&e.shiftKey},u=function(e){return setTimeout(e,0)},d=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,n):e},p=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},f=[],h=function(e,r){var h,v=(null==r?void 0:r.document)||document,b=(null==r?void 0:r.trapStack)||f,m=o({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:c,isKeyBackward:l},r),g={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},y=function(e,t,n){return e&&void 0!==e[t]?e[t]:m[n||t]},x=function(e,t){var n="function"==typeof(null==t?void 0:t.composedPath)?t.composedPath():void 0;return g.containerGroups.findIndex(function(t){var r=t.container,o=t.tabbableNodes;return r.contains(e)||(null==n?void 0:n.includes(r))||o.find(function(t){return t===e})})},w=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.hasFallback,i=r.params,a=m[e];if("function"==typeof a&&(a=a.apply(void 0,function(e){if(Array.isArray(e))return n(e)}(t=void 0===i?[]:i)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return n(e,void 0);var r=({}).toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,void 0):void 0}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),!0===a&&(a=void 0),!a){if(void 0===a||!1===a)return a;throw Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=a;if("string"==typeof a){try{s=v.querySelector(a)}catch(t){throw Error("`".concat(e,'` appears to be an invalid selector; error="').concat(t.message,'"'))}if(!s&&!(void 0!==o&&o))throw Error("`".concat(e,"` as selector refers to no known node"))}return s},S=function(){var e=w("initialFocus",{hasFallback:!0});if(!1===e)return!1;if(void 0===e||e&&!(0,t.isFocusable)(e,m.tabbableOptions))if(x(v.activeElement)>=0)e=v.activeElement;else{var n=g.tabbableGroups[0];e=n&&n.firstTabbableNode||w("fallbackFocus")}else null===e&&(e=w("fallbackFocus"));if(!e)throw Error("Your focus-trap needs to have at least one focusable element");return e},k=function(){if(g.containerGroups=g.containers.map(function(e){var n=(0,t.tabbable)(e,m.tabbableOptions),r=(0,t.focusable)(e,m.tabbableOptions),o=n.length>0?n[0]:void 0,i=n.length>0?n[n.length-1]:void 0,a=r.find(function(e){return(0,t.isTabbable)(e)}),s=r.slice().reverse().find(function(e){return(0,t.isTabbable)(e)}),c=!!n.find(function(e){return(0,t.getTabIndex)(e)>0});return{container:e,tabbableNodes:n,focusableNodes:r,posTabIndexesFound:c,firstTabbableNode:o,lastTabbableNode:i,firstDomTabbableNode:a,lastDomTabbableNode:s,nextTabbableNode:function(e){var o=!(arguments.length>1)||void 0===arguments[1]||arguments[1],i=n.indexOf(e);return i<0?o?r.slice(r.indexOf(e)+1).find(function(e){return(0,t.isTabbable)(e)}):r.slice(0,r.indexOf(e)).reverse().find(function(e){return(0,t.isTabbable)(e)}):n[i+(o?1:-1)]}}}),g.tabbableGroups=g.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),g.tabbableGroups.length<=0&&!w("fallbackFocus"))throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(g.containerGroups.find(function(e){return e.posTabIndexesFound})&&g.containerGroups.length>1)throw Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},O=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&null!==t.shadowRoot.activeElement?O(t.shadowRoot):t},E=function(e){if(!1!==e&&e!==O(document)){if(!e||!e.focus)return void E(S());e.focus({preventScroll:!!m.preventScroll}),g.mostRecentlyFocusedNode=e,e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select&&e.select()}},j=function(e){var t=w("setReturnFocus",{params:[e]});return t||!1!==t&&e},P=function(e){var n=e.target,r=e.event,o=e.isBackward,i=void 0!==o&&o;n=n||p(r),k();var a=null;if(g.tabbableGroups.length>0){var c=x(n,r),l=c>=0?g.containerGroups[c]:void 0;if(c<0)a=i?g.tabbableGroups[g.tabbableGroups.length-1].lastTabbableNode:g.tabbableGroups[0].firstTabbableNode;else if(i){var u=g.tabbableGroups.findIndex(function(e){var t=e.firstTabbableNode;return n===t});if(u<0&&(l.container===n||(0,t.isFocusable)(n,m.tabbableOptions)&&!(0,t.isTabbable)(n,m.tabbableOptions)&&!l.nextTabbableNode(n,!1))&&(u=c),u>=0){var d=0===u?g.tabbableGroups.length-1:u-1,f=g.tabbableGroups[d];a=(0,t.getTabIndex)(n)>=0?f.lastTabbableNode:f.lastDomTabbableNode}else s(r)||(a=l.nextTabbableNode(n,!1))}else{var h=g.tabbableGroups.findIndex(function(e){var t=e.lastTabbableNode;return n===t});if(h<0&&(l.container===n||(0,t.isFocusable)(n,m.tabbableOptions)&&!(0,t.isTabbable)(n,m.tabbableOptions)&&!l.nextTabbableNode(n))&&(h=c),h>=0){var v=h===g.tabbableGroups.length-1?0:h+1,b=g.tabbableGroups[v];a=(0,t.getTabIndex)(n)>=0?b.firstTabbableNode:b.firstDomTabbableNode}else s(r)||(a=l.nextTabbableNode(n))}}else a=w("fallbackFocus");return a},T=function(e){x(p(e),e)>=0||(d(m.clickOutsideDeactivates,e)?h.deactivate({returnFocus:m.returnFocusOnDeactivate}):d(m.allowOutsideClick,e)||e.preventDefault())},C=function(e){var n=p(e),r=x(n,e)>=0;if(r||n instanceof Document)r&&(g.mostRecentlyFocusedNode=n);else{e.stopImmediatePropagation();var o,i=!0;if(g.mostRecentlyFocusedNode)if((0,t.getTabIndex)(g.mostRecentlyFocusedNode)>0){var a=x(g.mostRecentlyFocusedNode),s=g.containerGroups[a].tabbableNodes;if(s.length>0){var c=s.findIndex(function(e){return e===g.mostRecentlyFocusedNode});c>=0&&(m.isKeyForward(g.recentNavEvent)?c+1<s.length&&(o=s[c+1],i=!1):c-1>=0&&(o=s[c-1],i=!1))}}else g.containerGroups.some(function(e){return e.tabbableNodes.some(function(e){return(0,t.getTabIndex)(e)>0})})||(i=!1);else i=!1;i&&(o=P({target:g.mostRecentlyFocusedNode,isBackward:m.isKeyBackward(g.recentNavEvent)})),o?E(o):E(g.mostRecentlyFocusedNode||S())}g.recentNavEvent=void 0},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];g.recentNavEvent=e;var n=P({event:e,isBackward:t});n&&(s(e)&&e.preventDefault(),E(n))},I=function(e){(m.isKeyForward(e)||m.isKeyBackward(e))&&N(e,m.isKeyBackward(e))},D=function(e){((null==e?void 0:e.key)==="Escape"||(null==e?void 0:e.key)==="Esc"||(null==e?void 0:e.keyCode)===27)&&!1!==d(m.escapeDeactivates,e)&&(e.preventDefault(),h.deactivate())},F=function(e){x(p(e),e)>=0||d(m.clickOutsideDeactivates,e)||d(m.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},R=function(){if(g.active)return i(b,h),g.delayInitialFocusTimer=m.delayInitialFocus?u(function(){E(S())}):E(S()),v.addEventListener("focusin",C,!0),v.addEventListener("mousedown",T,{capture:!0,passive:!1}),v.addEventListener("touchstart",T,{capture:!0,passive:!1}),v.addEventListener("click",F,{capture:!0,passive:!1}),v.addEventListener("keydown",I,{capture:!0,passive:!1}),v.addEventListener("keydown",D),h},A=function(){if(g.active)return v.removeEventListener("focusin",C,!0),v.removeEventListener("mousedown",T,!0),v.removeEventListener("touchstart",T,!0),v.removeEventListener("click",F,!0),v.removeEventListener("keydown",I,!0),v.removeEventListener("keydown",D),h},_="undefined"!=typeof window&&"MutationObserver"in window?new MutationObserver(function(e){e.some(function(e){return Array.from(e.removedNodes).some(function(e){return e===g.mostRecentlyFocusedNode})})&&E(S())}):void 0,$=function(){_&&(_.disconnect(),g.active&&!g.paused&&g.containers.map(function(e){_.observe(e,{subtree:!0,childList:!0})}))};return Object.defineProperties(h={get active(){return g.active},get paused(){return g.paused},activate:function(e){if(g.active)return this;var t=y(e,"onActivate"),n=y(e,"onPostActivate"),r=y(e,"checkCanFocusTrap");r||k(),g.active=!0,g.paused=!1,g.nodeFocusedBeforeActivation=O(v),null==t||t();var o=function(){r&&k(),R(),$(),null==n||n()};return r?r(g.containers.concat()).then(o,o):o(),this},deactivate:function(e){if(!g.active)return this;var t=o({onDeactivate:m.onDeactivate,onPostDeactivate:m.onPostDeactivate,checkCanReturnFocus:m.checkCanReturnFocus},e);clearTimeout(g.delayInitialFocusTimer),g.delayInitialFocusTimer=void 0,A(),g.active=!1,g.paused=!1,$(),a(b,h);var n=y(t,"onDeactivate"),r=y(t,"onPostDeactivate"),i=y(t,"checkCanReturnFocus"),s=y(t,"returnFocus","returnFocusOnDeactivate");null==n||n();var c=function(){u(function(){s&&E(j(g.nodeFocusedBeforeActivation)),null==r||r()})};return s&&i?i(j(g.nodeFocusedBeforeActivation)).then(c,c):c(),this},pause:function(e){return g.active?(g.manuallyPaused=!0,this._setPausedState(!0,e)):this},unpause:function(e){return g.active?(g.manuallyPaused=!1,b[b.length-1]!==this)?this:this._setPausedState(!1,e):this},updateContainerElements:function(e){return g.containers=[].concat(e).filter(Boolean).map(function(e){return"string"==typeof e?v.querySelector(e):e}),g.active&&k(),$(),this}},{_isManuallyPaused:{value:function(){return g.manuallyPaused}},_setPausedState:{value:function(e,t){if(g.paused===e)return this;if(g.paused=e,e){var n=y(t,"onPause"),r=y(t,"onPostPause");null==n||n(),A(),$(),null==r||r()}else{var o=y(t,"onUnpause"),i=y(t,"onPostUnpause");null==o||o(),k(),R(),$(),null==i||i()}return this}}}),h.updateContainerElements(e),h};e.s(["createFocusTrap",()=>h])},7605,(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(o=function(){return!!e})()}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:t+""}var c,l,u=e.r(1788),d=e.r(6836).createFocusTrap,p=e.r(8733).isFocusable,f=parseInt(null!=(c=null==(l=/^(\d+)\./.exec(u.version))?void 0:l[1])?c:0,10),h=function(e){var t;function n(e){if(!(this instanceof n))throw TypeError("Cannot call a class as a function");t=n,a=[e],t=i(t),c=d=function(e,t){if(t&&("object"==r(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");var n=e;if(void 0===n)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(this,o()?Reflect.construct(t,a||[],i(this).constructor):t.apply(this,a)),l="getNodeForOption",u=function(e){var t,n,r=null!=(t=this.internalOptions[e])?t:this.originalOptions[e];if("function"==typeof r){for(var o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];r=r.apply(void 0,i)}if(!0===r&&(r=void 0),!r){if(void 0===r||!1===r)return r;throw Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=r;if("string"==typeof r&&!(s=null==(n=this.getDocument())?void 0:n.querySelector(r)))throw Error("`".concat(e,"` as selector refers to no known node"));return s},(l=s(l))in c?Object.defineProperty(c,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):c[l]=u,d.handleDeactivate=d.handleDeactivate.bind(d),d.handlePostDeactivate=d.handlePostDeactivate.bind(d),d.handleClickOutsideDeactivates=d.handleClickOutsideDeactivates.bind(d),d.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:d.handleDeactivate,onPostDeactivate:d.handlePostDeactivate,clickOutsideDeactivates:d.handleClickOutsideDeactivates},d.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var t,a,c,l,u,d,p=e.focusTrapOptions;for(var f in p)if(Object.prototype.hasOwnProperty.call(p,f)){if("returnFocusOnDeactivate"===f||"onDeactivate"===f||"onPostDeactivate"===f||"checkCanReturnFocus"===f||"clickOutsideDeactivates"===f){d.originalOptions[f]=p[f];continue}d.internalOptions[f]=p[f]}return d.outsideClick=null,d.focusTrapElements=e.containerElements||[],d.updatePreviousElement(),d}if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");return n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&a(n,e),t=[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||("undefined"!=typeof document?document:void 0)}},{key:"getReturnFocusNode",value:function(){var e=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return e||!1!==e&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var e=this.getDocument();e&&(this.previouslyFocusedElement=e.activeElement)}},{key:"deactivateTrap",value:function(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(e){var t="function"==typeof this.originalOptions.clickOutsideDeactivates?this.originalOptions.clickOutsideDeactivates.call(null,e):this.originalOptions.clickOutsideDeactivates;return t&&(this.outsideClick={target:e.target,allowDeactivation:t}),t}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var e=this,t=function(){var t=e.getReturnFocusNode(),n=!!(e.originalOptions.returnFocusOnDeactivate&&null!=t&&t.focus&&(!e.outsideClick||e.outsideClick.allowDeactivation&&!p(e.outsideClick.target,e.internalOptions.tabbableOptions))),r=e.internalOptions.preventScroll;n&&t.focus({preventScroll:void 0!==r&&r}),e.originalOptions.onPostDeactivate&&e.originalOptions.onPostDeactivate.call(null),e.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(t,t):t()}},{key:"setupFocusTrap",value:function(){this.focusTrap?this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()):this.focusTrapElements.some(Boolean)&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(e){if(this.focusTrap){e.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var t=!e.active&&this.props.active,n=e.active&&!this.props.active,r=!e.paused&&this.props.paused,o=e.paused&&!this.props.paused;if(t&&(this.updatePreviousElement(),this.focusTrap.activate()),n)return void this.deactivateTrap();r&&this.focusTrap.pause(),o&&this.focusTrap.unpause()}else e.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var e=this,t=this.props.children?u.Children.only(this.props.children):void 0;if(t){if(t.type&&t.type===u.Fragment)throw Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");return u.cloneElement(t,{ref:function(n){var r=e.props.containerElements;t&&(f>=19?"function"==typeof t.props.ref?t.props.ref(n):t.props.ref&&(t.props.ref.current=n):"function"==typeof t.ref?t.ref(n):t.ref&&(t.ref.current=n)),e.focusTrapElements=r||[n]}})}return null}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s(r.key),r)}}(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),n}(u.Component);h.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:d},t.exports=h,t.exports.FocusTrap=h},8678,(e,t,n)=>{t.exports=e.r(963)},7856,e=>{"use strict";var t,n=e.i(1398),r=e.i(461),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;Object.create(null);var a=e.i(1788),s=e.i(9300),c="-ms-",l="-moz-",u="-webkit-",d="comm",p="rule",f="decl",h="@keyframes",v=Math.abs,b=String.fromCharCode,m=Object.assign;function g(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function x(e,t,n){return e.indexOf(t,n)}function w(e,t){return 0|e.charCodeAt(t)}function S(e,t,n){return e.slice(t,n)}function k(e){return e.length}function O(e,t){return t.push(e),e}function E(e,t){return e.filter(function(e){return!g(e,t)})}var j=1,P=1,T=0,C=0,N=0,I="";function D(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:j,column:P,length:a,return:"",siblings:s}}function F(e,t){return m(D("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function R(e){for(;e.root;)e=F(e.root,{children:[e]});O(e,e.siblings)}function A(){return N=C<T?w(I,C++):0,P++,10===N&&(P=1,j++),N}function _(){return w(I,C)}function $(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G(e){var t,n;return(t=C-1,n=function e(t){for(;A();)switch(N){case t:return C;case 34:case 39:34!==t&&39!==t&&e(N);break;case 40:41===t&&e(t);break;case 92:A()}return C}(91===e?e+2:40===e?e+1:e),S(I,t,n)).trim()}function z(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function L(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case d:return"";case h:return e.return=e.value+"{"+z(e.children,r)+"}";case p:if(!k(e.value=e.props.join(",")))return""}return k(n=z(e.children,r))?e.return=e.value+"{"+n+"}":""}function B(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:e.return=function e(t,n,r){var o;switch(o=n,45^w(t,0)?(((o<<2^w(t,0))<<2^w(t,1))<<2^w(t,2))<<2^w(t,3):0){case 5103:return u+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+t+t;case 4789:return l+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return u+t+l+t+c+t+t;case 5936:switch(w(t,n+11)){case 114:return u+t+c+y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return u+t+c+y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return u+t+c+y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return u+t+c+t+t;case 6165:return u+t+c+"flex-"+t+t;case 5187:return u+t+y(t,/(\w+).+(:[^]+)/,u+"box-$1$2"+c+"flex-$1$2")+t;case 5443:return u+t+c+"flex-item-"+y(t,/flex-|-self/g,"")+(g(t,/flex-|baseline/)?"":c+"grid-row-"+y(t,/flex-|-self/g,""))+t;case 4675:return u+t+c+"flex-line-pack"+y(t,/align-content|flex-|-self/g,"")+t;case 5548:return u+t+c+y(t,"shrink","negative")+t;case 5292:return u+t+c+y(t,"basis","preferred-size")+t;case 6060:return u+"box-"+y(t,"-grow","")+u+t+c+y(t,"grow","positive")+t;case 4554:return u+y(t,/([^-])(transform)/g,"$1"+u+"$2")+t;case 6187:return y(y(y(t,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),t,"")+t;case 5495:case 3959:return y(t,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return y(y(t,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+t+t;case 4200:if(!g(t,/flex-|baseline/))return c+"grid-column-align"+S(t,n)+t;break;case 2592:case 3360:return c+y(t,"template-","")+t;case 4384:case 3616:if(r&&r.some(function(e,t){return n=t,g(e.props,/grid-\w+-end/)}))return~x(t+(r=r[n].value),"span",0)?t:c+y(t,"-start","")+t+c+"grid-row-span:"+(~x(r,"span",0)?g(r,/\d+/):g(r,/\d+/)-g(t,/\d+/))+";";return c+y(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(e){return g(e.props,/grid-\w+-start/)})?t:c+y(y(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return y(t,/(.+)-inline(.+)/,u+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(t)-1-n>6)switch(w(t,n+1)){case 109:if(45!==w(t,n+4))break;case 102:return y(t,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+l+(108==w(t,n+3)?"$3":"$2-$3"))+t;case 115:return~x(t,"stretch",0)?e(y(t,"stretch","fill-available"),n,r)+t:t}break;case 5152:case 5920:return y(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,n,r,o,i,a,s){return c+n+":"+r+s+(o?c+n+"-span:"+(i?a:a-r)+s:"")+t});case 4949:if(121===w(t,n+6))return y(t,":",":"+u)+t;break;case 6444:switch(w(t,45===w(t,14)?18:11)){case 120:return y(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===w(t,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+c+"$2box$3")+t;case 100:return y(t,":",":"+c)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,n);return;case h:return z([F(e,{value:y(e.value,"@","@"+u)})],r);case p:if(e.length){var o,i;return o=n=e.props,i=function(t){switch(g(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":R(F(e,{props:[y(t,/:(read-\w+)/,":"+l+"$1")]})),R(F(e,{props:[t]})),m(e,{props:E(n,r)});break;case"::placeholder":R(F(e,{props:[y(t,/:(plac\w+)/,":"+u+"input-$1")]})),R(F(e,{props:[y(t,/:(plac\w+)/,":"+l+"$1")]})),R(F(e,{props:[y(t,/:(plac\w+)/,c+"input-$1")]})),R(F(e,{props:[t]})),m(e,{props:E(n,r)})}return""},o.map(i).join("")}}}function M(e,t,n,r,o,i,a,s,c,l,u,d){for(var f=o-1,h=0===o?i:[""],b=h.length,m=0,g=0,x=0;m<r;++m)for(var w=0,k=S(e,f+1,f=v(g=a[m])),O=e;w<b;++w)(O=(g>0?h[w]+" "+k:y(k,/&\f/g,h[w])).trim())&&(c[x++]=O);return D(e,t,n,0===o?p:s,c,l,u,d)}function U(e,t,n,r,o){return D(e,t,n,f,S(e,0,r),S(e,r+1,-1),r,o)}var Y={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},W=void 0!==r.default&&void 0!==r.default.env&&(r.default.env.REACT_APP_SC_ATTR||r.default.env.SC_ATTR)||"data-styled",K="active",q="data-styled-version",V="6.1.19",H="/*!sc*/\n",X="undefined"!=typeof window&&"undefined"!=typeof document,Q=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==r.default&&void 0!==r.default.env&&void 0!==r.default.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==r.default.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==r.default.env.REACT_APP_SC_DISABLE_SPEEDY&&r.default.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==r.default&&void 0!==r.default.env&&void 0!==r.default.env.SC_DISABLE_SPEEDY&&""!==r.default.env.SC_DISABLE_SPEEDY&&"false"!==r.default.env.SC_DISABLE_SPEEDY&&r.default.env.SC_DISABLE_SPEEDY),Z=Object.freeze([]),J=Object.freeze({}),ee=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),et=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,en=/(^-|-$)/g;function er(e){return e.replace(et,"-").replace(en,"")}var eo=/(a)(d)/gi,ei=function(e){return String.fromCharCode(e+(e>25?39:97))};function ea(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ei(t%52)+n;return(ei(t%52)+n).replace(eo,"$1-$2")}var es,ec=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},el=function(e){return ec(5381,e)};function eu(e){return"string"==typeof e}var ed="function"==typeof Symbol&&Symbol.for,ep=ed?Symbol.for("react.memo"):60115,ef=ed?Symbol.for("react.forward_ref"):60112,eh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ev={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},em=((es={})[ef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},es[ep]=eb,es);function eg(e){return("type"in e&&e.type.$$typeof)===ep?eb:"$$typeof"in e?em[e.$$typeof]:eh}var ey=Object.defineProperty,ex=Object.getOwnPropertyNames,ew=Object.getOwnPropertySymbols,eS=Object.getOwnPropertyDescriptor,ek=Object.getPrototypeOf,eO=Object.prototype;function eE(e){return"function"==typeof e}function ej(e){return"object"==typeof e&&"styledComponentId"in e}function eP(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eT(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function eC(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eN(e,t){Object.defineProperty(e,"toString",{value:t})}function eI(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var eD=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw eI(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(H);return t},e}(),eF=new Map,eR=new Map,eA=1,e_=function(e){if(eF.has(e))return eF.get(e);for(;eR.has(eA);)eA++;var t=eA++;return eF.set(e,t),eR.set(t,e),t},e$=function(e,t){eA=t+1,eF.set(e,t),eR.set(t,e)},eG="style[".concat(W,"][").concat(q,'="').concat(V,'"]'),ez=new RegExp("^".concat(W,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eL=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},eB=function(e,t){for(var n,r=(null!=(n=t.textContent)?n:"").split(H),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var c=s.match(ez);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(e$(u,l),eL(e,u,c[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(s)}}},eM=function(e){for(var t=document.querySelectorAll(eG),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(W)!==K&&(eB(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function eU(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var eY=function(e){var t,n=document.head,r=e||n,o=document.createElement("style"),i=(t=Array.from(r.querySelectorAll("style[".concat(W,"]"))))[t.length-1],a=void 0!==i?i.nextSibling:null;o.setAttribute(W,K),o.setAttribute(q,V);var s=eU();return s&&o.setAttribute("nonce",s),r.insertBefore(o,a),o},eW=function(){function e(e){this.element=eY(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw eI(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),eK=function(){function e(e){this.element=eY(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eq=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),eV=X,eH={isServer:!X,useCSSOMInjection:!Q},eX=function(){function e(e,t,n){void 0===e&&(e=J),void 0===t&&(t={});var r=this;this.options=o(o({},eH),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&X&&eV&&(eV=!1,eM(this)),eN(this,function(){for(var e=r.getTag(),t=e.length,n="",o=0;o<t;o++)!function(t){var o=eR.get(t);if(void 0===o)return;var i=r.names.get(o),a=e.getGroup(t);if(void 0!==i&&i.size&&0!==a.length){var s="".concat(W,".g").concat(t,'[id="').concat(o,'"]'),c="";void 0!==i&&i.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),n+="".concat(a).concat(s,'{content:"').concat(c,'"}').concat(H)}}(o);return n})}return e.registerId=function(e){return e_(e)},e.prototype.rehydrate=function(){!this.server&&X&&eM(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(o(o({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,n;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,n=e.target,new eD(e.isServer?new eq(n):t?new eW(n):new eK(n))))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(e_(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(e_(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(e_(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),eQ=/&/g,eZ=/^\s*\/\/.*$/gm;function eJ(e){var t,n,r,o=void 0===e?J:e,i=o.options,a=void 0===i?J:i,s=o.plugins,c=void 0===s?Z:s,l=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push(function(e){e.type===p&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(eQ,n).replace(r,l))}),a.prefix&&u.push(B),u.push(L);var f=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=o,r=RegExp("\\".concat(n,"\\b"),"g");var c,l,p,f,h,m,g=e.replace(eZ,""),E=(h=function e(t,n,r,o,i,a,s,c,l){for(var u,p,f,h,m=0,g=0,E=s,T=0,F=0,R=0,z=1,L=1,B=1,Y=0,W="",K=i,q=a,V=o,H=W;L;)switch(R=Y,Y=A()){case 40:if(108!=R&&58==w(H,E-1)){-1!=x(H+=y(G(Y),"&","&\f"),"&\f",v(m?c[m-1]:0))&&(B=-1);break}case 34:case 39:case 91:H+=G(Y);break;case 9:case 10:case 13:case 32:H+=function(e){for(;N=_();)if(N<33)A();else break;return $(e)>2||$(N)>3?"":" "}(R);break;case 92:H+=function(e,t){for(var n;--t&&A()&&!(N<48)&&!(N>102)&&(!(N>57)||!(N<65))&&(!(N>70)||!(N<97)););return n=C+(t<6&&32==_()&&32==A()),S(I,e,n)}(C-1,7);continue;case 47:switch(_()){case 42:case 47:O((u=function(e,t){for(;A();)if(e+N===57)break;else if(e+N===84&&47===_())break;return"/*"+S(I,t,C-1)+"*"+b(47===e?e:A())}(A(),C),p=n,f=r,h=l,D(u,p,f,d,b(N),S(u,2,-2),0,h)),l);break;default:H+="/"}break;case 123*z:c[m++]=k(H)*B;case 125*z:case 59:case 0:switch(Y){case 0:case 125:L=0;case 59+g:-1==B&&(H=y(H,/\f/g,"")),F>0&&k(H)-E&&O(F>32?U(H+";",o,r,E-1,l):U(y(H," ","")+";",o,r,E-2,l),l);break;case 59:H+=";";default:if(O(V=M(H,n,r,m,g,i,c,W,K=[],q=[],E,a),a),123===Y)if(0===g)e(H,n,V,V,K,a,E,c,q);else switch(99===T&&110===w(H,3)?100:T){case 100:case 108:case 109:case 115:e(t,V,V,o&&O(M(t,V,V,0,0,i,c,W,i,K=[],E,q),q),i,q,E,c,o?K:q);break;default:e(H,V,V,V,[""],q,0,c,q)}}m=g=F=0,z=B=1,W=H="",E=s;break;case 58:E=1+k(H),F=R;default:if(z<1){if(123==Y)--z;else if(125==Y&&0==z++&&125==(N=C>0?w(I,--C):0,P--,10===N&&(P=1,j--),N))continue}switch(H+=b(Y),Y*z){case 38:B=g>0?1:(H+="\f",-1);break;case 44:c[m++]=(k(H)-1)*B,B=1;break;case 64:45===_()&&(H+=G(A())),T=_(),g=E=k(W=H+=function(e){for(;!$(_());)A();return S(I,e,C)}(C)),Y++;break;case 45:45===R&&2==k(H)&&(z=0)}}return a}("",null,null,null,[""],(f=p=i||o?"".concat(i," ").concat(o," { ").concat(g," }"):g,j=P=1,T=k(I=f),C=0,p=[]),0,[0],p),I="",h);a.namespace&&(E=function e(t,n){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(e){return"".concat(n," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,n)),t})}(E,a.namespace));var F=[];return z(E,(l=(c=u.concat((m=function(e){return F.push(e)},function(e){!e.root&&(e=e.return)&&m(e)}))).length,function(e,t,n,r){for(var o="",i=0;i<l;i++)o+=c[i](e,t,n,r)||"";return o})),F};return f.hash=c.length?c.reduce(function(e,t){return t.name||eI(15),ec(e,t.name)},5381).toString():"",f}var e0=new eX,e1=eJ(),e2=a.default.createContext({shouldForwardProp:void 0,styleSheet:e0,stylis:e1}),e3=(e2.Consumer,a.default.createContext(void 0));function e5(){return(0,a.useContext)(e2)}function e4(e){var t=(0,a.useState)(e.stylisPlugins),n=t[0],r=t[1],o=e5().styleSheet,i=(0,a.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),c=(0,a.useMemo)(function(){return eJ({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,a.useEffect)(function(){(0,s.default)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,a.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:c}},[e.shouldForwardProp,i,c]);return a.default.createElement(e2.Provider,{value:l},a.default.createElement(e3.Provider,{value:c},e.children))}var e6=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=e1);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,eN(this,function(){throw eI(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=e1),this.name+e.hash},e}();function e8(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;r>="A"&&r<="Z"?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var e7=function(e){return null==e||!1===e||""===e},e9=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!e7(r)&&(Array.isArray(r)&&r.isCss||eE(r)?t.push("".concat(e8(n),":"),r,";"):eC(r)?t.push.apply(t,i(i(["".concat(n," {")],e9(r),!1),["}"],!1)):t.push("".concat(e8(n),": ").concat(null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in Y||n.startsWith("--")?String(r).trim():"".concat(r,"px"),";")))}return t};function te(e,t,n,r){if(e7(e))return[];if(ej(e))return[".".concat(e.styledComponentId)];if(eE(e))return!eE(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:te(e(t),t,n,r);return e instanceof e6?n?(e.inject(n,r),[e.getName(r)]):[e]:eC(e)?e9(e):Array.isArray(e)?Array.prototype.concat.apply(Z,e.map(function(e){return te(e,t,n,r)})):[e.toString()]}function tt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(eE(n)&&!ej(n))return!1}return!0}var tn=el(V),tr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&tt(e),this.componentId=t,this.baseHash=ec(tn,t),this.baseStyle=n,eX.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=eP(r,this.staticRulesId);else{var o=eT(te(this.rules,e,t,n)),i=ea(ec(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=eP(r,i),this.staticRulesId=i}else{for(var s=ec(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u;else if(u){var d=eT(te(u,e,t,n));s=ec(s,d+l),c+=d}}if(c){var p=ea(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(c,".".concat(p),void 0,this.componentId)),r=eP(r,p)}}return r},e}(),to=a.default.createContext(void 0);to.Consumer;var ti={};function ta(e,t,n){var r,i,s,c,l=ej(e),u=!eu(e),d=t.attrs,p=void 0===d?Z:d,f=t.componentId,h=void 0===f?(r=t.displayName,i=t.parentComponentId,ti[s="string"!=typeof r?"sc":er(r)]=(ti[s]||0)+1,c="".concat(s,"-").concat(ea(el(V+s+ti[s])>>>0)),i?"".concat(i,"-").concat(c):c):f,v=t.displayName,b=void 0===v?eu(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):v,m=t.displayName&&t.componentId?"".concat(er(t.displayName),"-").concat(t.componentId):t.componentId||h,g=l&&e.attrs?e.attrs.concat(p).filter(Boolean):p,y=t.shouldForwardProp;if(l&&e.shouldForwardProp){var x=e.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;y=function(e,t){return x(e,t)&&w(e,t)}}else y=x}var S=new tr(n,m,l?e.componentStyle:void 0);function k(e,t){return function(e,t,n){var r,i,s=e.attrs,c=e.componentStyle,l=e.defaultProps,u=e.foldedComponentIds,d=e.styledComponentId,p=e.target,f=a.default.useContext(to),h=e5(),v=e.shouldForwardProp||h.shouldForwardProp,b=(void 0===(r=l)&&(r=J),t.theme!==r.theme&&t.theme||f||r.theme||J),m=function(e,t,n){for(var r,i=o(o({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var s=eE(r=e[a])?r(i):r;for(var c in s)i[c]="className"===c?eP(i[c],s[c]):"style"===c?o(o({},i[c]),s[c]):s[c]}return t.className&&(i.className=eP(i.className,t.className)),i}(s,t,b),g=m.as||p,y={};for(var x in m)void 0===m[x]||"$"===x[0]||"as"===x||"theme"===x&&m.theme===b||("forwardedAs"===x?y.as=m.forwardedAs:v&&!v(x,g)||(y[x]=m[x]));var w=(i=e5(),c.generateAndInjectStyles(m,i.styleSheet,i.stylis)),S=eP(u,d);return w&&(S+=" "+w),m.className&&(S+=" "+m.className),y[eu(g)&&!ee.has(g)?"class":"className"]=S,n&&(y.ref=n),(0,a.createElement)(g,y)}(O,e,t)}k.displayName=b;var O=a.default.forwardRef(k);return O.attrs=g,O.componentStyle=S,O.displayName=b,O.shouldForwardProp=y,O.foldedComponentIds=l?eP(e.foldedComponentIds,e.styledComponentId):"",O.styledComponentId=m,O.target=l?e.target:e,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=l?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0;r<t.length;r++)!function e(t,n,r){if(void 0===r&&(r=!1),!r&&!eC(t)&&!Array.isArray(t))return n;if(Array.isArray(n))for(var o=0;o<n.length;o++)t[o]=e(t[o],n[o]);else if(eC(n))for(var o in n)t[o]=e(t[o],n[o]);return t}(e,t[r],!0);return e}({},e.defaultProps,t):t}}),eN(O,function(){return".".concat(O.styledComponentId)}),u&&function e(t,n,r){if("string"!=typeof n){if(eO){var o=ek(n);o&&o!==eO&&e(t,o,r)}var i=ex(n);ew&&(i=i.concat(ew(n)));for(var a=eg(t),s=eg(n),c=0;c<i.length;++c){var l=i[c];if(!(l in ev||r&&r[l]||s&&l in s||a&&l in a)){var u=eS(n,l);try{ey(t,l,u)}catch(e){}}}}return t}(O,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function ts(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var tc=function(e){return Object.assign(e,{isCss:!0})};function tl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return eE(e)||eC(e)?tc(te(ts(Z,i([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?te(e):tc(te(ts(e,t)))}var tu=function(e){return function e(t,n,r){if(void 0===r&&(r=J),!n)throw eI(1,n);var a=function(e){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return t(n,r,tl.apply(void 0,i([e],o,!1)))};return a.attrs=function(i){return e(t,n,o(o({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},a.withConfig=function(i){return e(t,n,o(o({},r),i))},a}(ta,e)};function td(e,t){this.rules=e,this.componentId=t,this.isStatic=tt(e),eX.registerId(this.componentId+1)}function tp(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=eU(),r=eT([n&&'nonce="'.concat(n,'"'),"".concat(W,'="true"'),"".concat(q,'="').concat(V,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw eI(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw eI(2);var t,n=e.instance.toString();if(!n)return[];var r=((t={})[W]="",t[q]=V,t.dangerouslySetInnerHTML={__html:n},t),i=eU();return i&&(r.nonce=i),[a.default.createElement("style",o({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new eX({isServer:!0}),this.sealed=!1}ee.forEach(function(e){tu[e]=tu(e)}),td.prototype.createStyles=function(e,t,n,r){var o=r(eT(te(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},td.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},td.prototype.renderStyles=function(e,t,n,r){e>2&&eX.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},tp.prototype.collectStyles=function(e){if(this.sealed)throw eI(2);return a.default.createElement(e4,{sheet:this.instance},e)},tp.prototype.interleaveWithNodeStream=function(e){throw eI(3)};let tf=tu.a`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  height: 100%;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  @media (prefers-color-scheme: dark) {
    background: #1a1a1a;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    &:hover {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
    }
  }
`,th=tu.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`,tv=tu.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,tb=tu.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`,tm=tu.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.3;
  color: #1a1a1a;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`,tg=tu.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`,ty=tu.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;

  @media (prefers-color-scheme: dark) {
    border-top-color: #333;
  }
`,tx=tu.span`
  font-size: 16px;
  font-weight: 700;
  color: #2563eb;

  @media (prefers-color-scheme: dark) {
    color: #60a5fa;
  }
`,tw=tu.span`
  font-size: 12px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: #999;
  }
`;function tS(){return(tS=Object.assign.bind()).apply(null,arguments)}let tk=function(e){return a.createElement("svg",tS({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130 130"},e),a.createElement("path",{d:"M65 29c-6-10-16-17-28-17C20 12 7 25 7 42c0 33 18 38 58 76 40-38 58-43 58-76 0-17-13-30-30-30-12 0-22 7-28 17",style:{fill:"inherit"}}))},tO=tu.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 18px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`,tE=tu.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 48px;
    height: 48px;
  }
`,tj=tu.div`
  width: 100%;
  height: 100%;
  border: 4px solid #e5e7eb;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-color-scheme: dark) {
    border-color: #333;
    border-top-color: #60a5fa;
  }
`,tP=tu.div`
  background: #fee;
  color: #c33;
  padding: 16px 24px;
  border-radius: 12px;
  text-align: center;
  margin: 48px auto;
  max-width: 600px;

  @media (prefers-color-scheme: dark) {
    background: #2a1a1a;
    color: #ff6b6b;
  }
`,tT=tu.button`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  background: none;
  border: none;
  width: 24px;
  height: 24px;

  svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`;var tC=e.i(1105),tN=e.i(2276);let tI=({albumId:e})=>{let t=(0,tN.useSelector)(e=>e.user),{data:r}=(0,tC.useGetUserFavoritesQuery)({userId:t.localId},{skip:!t.localId}),[o,{isLoading:i,error:s}]=(0,tC.useSetUserFavoritesMutation)(),c=!!r?.find(t=>e===t);(0,a.useEffect)(()=>{s&&window.alert("Unable to add album to favorites, please try again later")},[s]);let l=async(e,n)=>{let i;i="add"===n?[...r||[],e]:(r||[]).filter(t=>t!==e),await o({userId:t.localId,favorites:i})};return(0,n.jsx)(n.Fragment,{children:t.localId&&(c?(0,n.jsxs)(tT,{onClick:t=>{e&&(t.preventDefault(),l(e,"remove"))},children:[(0,n.jsx)(tk,{fill:"red"}),(0,n.jsx)("span",{className:"sr-only",children:"Remove from favorites"})]}):(0,n.jsx)(tT,{onClick:t=>{e&&(t.preventDefault(),l(e,"add"))},children:i?(0,n.jsx)(tj,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(tk,{fill:"lightgray"}),(0,n.jsx)("span",{className:"sr-only",children:"Add to favorites"})]})}))})},tD=({album:e})=>{let t=e?.["im:image"]?.[e?.["im:image"].length-1].label;return(0,n.jsxs)(tf,{href:e.link?.attributes.href,target:"_blank",rel:"noopener noreferrer",children:[e.id?.attributes?.["im:id"]&&(0,n.jsx)(tI,{albumId:e.id?.attributes?.["im:id"]}),(0,n.jsx)(th,{children:(0,n.jsx)(tv,{src:t,alt:e.title?.label,loading:"lazy"})}),(0,n.jsxs)(tb,{children:[(0,n.jsx)(tm,{children:e.title?.label}),(0,n.jsx)(tg,{children:e["im:artist"]?.label}),(0,n.jsxs)(ty,{children:[(0,n.jsx)(tx,{children:e["im:price"]?.label}),(0,n.jsx)(tw,{children:e.category?.attributes.label})]})]})]})};var tF=e.i(6447);let tR=()=>{let{data:e,isLoading:t,error:r}=(0,tF.useGetTopAlbumsQuery)();return(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)(tE,{children:(0,n.jsx)(tj,{})}),r&&(0,n.jsx)(tP,{children:"Error: Failed to load albums"}),!t&&!r&&(0,n.jsx)(tO,{children:(e?.feed?.entry||[]).map(e=>(0,n.jsx)(tD,{album:e},e.id?.label))})]})},tA=tu.header`
  background: transparent;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (prefers-color-scheme: dark) {
    background: transparent;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  }
`,t_=tu.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 24px;
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 32px 48px;
  }
`,t$=tu.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`,tG=tu.p`
  margin: 8px 0 0 0;
  color: #666;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`;function tz(){return(tz=Object.assign.bind()).apply(null,arguments)}let tL=function(e){return a.createElement("svg",tz({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"currentColor"},e),t||(t=a.createElement("path",{d:"M2.3 19.1.9 17.7 8.6 10 .9 2.3 2.3.9 10 8.6 17.7.9l1.4 1.4-7.7 7.7 7.7 7.7-1.4 1.4-7.7-7.7z"})))},tB=tu.div`
  text-align: center;

  p {
    margin: 16px 0 24px 0;
  }

  & > button {
    width: 250px;
    height: 45px;
    border-radius: 24px;
    font-size: 22px;
  }
`,tM=tu.button`
  background: none;
  border: none;
  position: absolute;
  top: 16px;
  right: 24px;
  cursor: pointer;
`;var tU=e.i(8146),tY=e.i(5107);let tW=tu.button`
  font-size: 16px;
  font-weight: 700;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  border: 0 solid transparent;
  border-radius: 20px;
  padding: 6px 16px;
  cursor: pointer;
  position: relative;
  height: 30px;

  &:hover {
    background: #000;

    &::before {
      content: '';
    }
  }

  &:disabled {
    background: grey;
    cursor: not-allowed;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -2px;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  }
`,tK=tu.button`
  background: none;
  border: none;
  color: #82378c;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
`,tq=tu.div`
  position: relative;

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    top: -50px;
    left: 0;
    font-size: 16px;
  }
`,tV=tu.label`
  position: relative;
  left: 0;
  top: -24px;
  color: #fff;
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 16px;
  line-height: 1.42;
  opacity: 1;
`,tH=tu.input`
  width: 100%;
  font-size: 16px;
  line-height: 1.43;
  background: none;
  border: none;
  border-bottom: 1px solid grey;
  cursor: text;
`,tX=tu.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,tQ=tu.div`
  background: #1a1a1a;
  width: 85%;
  max-width: 600px;
  min-height: 300px;
  position: relative;
  border-radius: 16px;
  padding: 4.25rem 4.5rem;
  display: grid;
  grid-gap: 18px;
  position: relative;
`,tZ=tu.p`
  color: red;
`,tJ=tu.p`
  color: green;
`;var t0=e.i(7605);let t1=({mode:e,closeCallback:t})=>{let[r,{data:o,isLoading:i,error:s}]=(0,tU.useRegisterUserMutation)(),[c,{isLoading:l,error:u}]=(0,tU.useLoginUserMutation)(),[d,p]=(0,a.useState)(e),[f,h]=(0,a.useState)(""),[v,b]=(0,a.useState)(""),m=(0,tN.useDispatch)(),g=()=>{m(tU.identityApi.util.resetApiState()),p("login"===d?"signup":"login"),h(""),b("")},y=async()=>{if("login"===d){let{data:e}=await c({email:v,password:f});e&&(m((0,tY.setUser)(e)),t())}else{let{data:e}=await r({email:v,password:f});e&&m((0,tY.setUser)(e))}};return(0,n.jsx)(tX,{children:(0,n.jsx)(t0.FocusTrap,{children:(0,n.jsxs)(tQ,{children:[(0,n.jsx)(tM,{onClick:()=>t(),children:(0,n.jsx)(tL,{})}),(0,n.jsxs)(tq,{children:[(0,n.jsx)(tH,{id:"email",placeholder:"",value:v,onChange:e=>b(e.target.value),autoComplete:"email"}),(0,n.jsx)(tV,{htmlFor:"email",children:"Email"})]}),(0,n.jsxs)(tq,{children:[(0,n.jsx)(tH,{id:"password",placeholder:"",type:"password",value:f,onChange:e=>h(e.target.value),autoComplete:"current-password"}),(0,n.jsx)(tV,{htmlFor:"password",children:"Password"})]}),(0,n.jsxs)(tB,{children:[!o&&("login"===d?(0,n.jsxs)("p",{children:["Don't have an account?, ",(0,n.jsx)(tK,{onClick:g,children:"Sign up"})]}):(0,n.jsxs)("p",{children:["Already have an account?, ",(0,n.jsx)(tK,{onClick:g,children:"Log in"})]})),"login"===d&&u&&(0,n.jsx)(tZ,{children:"Unable to login, incorrect email or password"}),"signup"===d&&s&&(0,n.jsx)(tZ,{children:"Unable to sign up at the moment, try again later"}),o&&(0,n.jsxs)(tJ,{children:["Sign up successfull! ",(0,n.jsx)("br",{})," you have been automatically logged in"]}),l||i?(0,n.jsx)(tE,{children:(0,n.jsx)(tj,{})}):!o&&(0,n.jsx)(tW,{onClick:y,disabled:!v||!f,children:"login"===d?"Log in":"Sign up"})]})]})})})},t2=tu.div`
  p {
    padding-bottom: 16px;
  }
  & > button {
    float: right;
  }
`,t3=()=>{let[e,t]=(0,a.useState)(!1),r=(0,tN.useSelector)(e=>e.user),o=(0,tN.useDispatch)();return(0,n.jsxs)(t2,{children:[r.email&&(0,n.jsxs)("p",{children:["Hello, ",r.email]}),r.localId?(0,n.jsx)(tW,{onClick:()=>o((0,tY.resetUser)()),children:"Log out"}):(0,n.jsx)(tW,{onClick:()=>t(!0),children:"Log in"}),e&&(0,n.jsx)(t1,{mode:"login",closeCallback:()=>t(!1)})]})},t5=()=>(0,n.jsx)(tA,{children:(0,n.jsxs)(t_,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(t$,{children:"Top 100 Albums"}),(0,n.jsx)(tG,{children:"Discover the most popular albums on iTunes"})]}),(0,n.jsx)(t3,{})]})}),t4=tu.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to bottom, #0a0a0a, #000000);
  }
`,t6=tu.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;

  @media (min-width: 768px) {
    padding: 48px 48px;
  }
`;var t8=e.i(8678);function t7(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t8.default,{children:[(0,n.jsx)("title",{children:"Top 100 Albums - iTunes"}),(0,n.jsx)("meta",{name:"description",content:"Discover the top 100 most popular albums on iTunes"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,n.jsxs)(t4,{children:[(0,n.jsx)(t5,{}),(0,n.jsx)(t6,{children:(0,n.jsx)(tR,{})})]})]})}e.s(["__N_SSG",()=>!0,"default",()=>t7],7856)},5075,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(7856)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})}]);