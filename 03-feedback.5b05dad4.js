!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,i,u,f,a,c,l=0,d=!1,s=!1,y=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function O(e){return l=e,a=setTimeout(S,t),d?j(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function S(){var e=p();if(h(e))return T(e);a=setTimeout(S,function(e){var n=t-(e-c);return s?m(n,u-(e-l)):n}(e))}function T(e){return a=void 0,y&&r?j(e):(r=i=void 0,f)}function w(){var e=p(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return O(c);if(s)return a=setTimeout(S,t),j(c)}return void 0===a&&(a=setTimeout(S,t)),f}return t=g(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},w.flush=function(){return void 0===a?f:T(p())},w}function b(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=b(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):i.test(e)?NaN:+e}document.querySelector(".feedback-form");var j=document.querySelector('input[name="email"]'),O=document.querySelector('textarea[name="message"]');function h(){var e={email:j.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}j.addEventListener("input",h),O.addEventListener("input",h)}();
//# sourceMappingURL=03-feedback.5b05dad4.js.map
