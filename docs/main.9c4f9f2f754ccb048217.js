/*! For license information please see main.9c4f9f2f754ccb048217.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(){r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",d=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var d=s(t,e,n);if("normal"===d.type){if(r=n.done?"completed":"suspendedYield",d.arg===p)continue;return{value:d.arg,done:n.done}}"throw"===d.type&&(r="completed",n.method="throw",n.arg=d.arg)}}}(t,n,i),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var p={};function f(){}function h(){}function m(){}var v={};l(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==n&&o.call(g,i)&&(v=g);var b=m.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(e,n){function r(a,i,c,d){var l=s(e[a],e,i);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,c,d)}),(function(t){r("throw",t,c,d)})):n.resolve(p).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,d)}))}d(l.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function L(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=m,l(b,"constructor",m),l(m,"constructor",h),h.displayName=l(m,d,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,d,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),l(b,d,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),d=o.call(a,"finallyLoc");if(c&&d){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function o(t,e,n,r,o,a,i){try{var c=t[a](i),d=c.value}catch(t){return void n(t)}c.done?e(d):Promise.resolve(d).then(r,o)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={mesa:"",hora:"",pedido:[]},l={1:"Comida",2:"Bebida",3:"Postre"},u=function(){var t=document.querySelector("#formulario");bootstrap.Modal.getInstance(t).hide()},s=function(){document.querySelectorAll(".d-none").forEach((function(t){t.classList.remove("d-none")}))},p=function(){var t,e=(t=r().mark((function t(){var e,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,fetch("http://localhost:4000/platillos");case 4:return e=t.sent,t.next=7,e.json();case 7:n=t.sent,f(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function c(t){o(i,r,a,c,d,"next",t)}function d(t){o(i,r,a,c,d,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),f=function(t){var n=document.querySelector("#platillos .contenido");t.forEach((function(t){var r=document.createElement("div");r.classList.add("row","py-3","border-top");var o=document.createElement("div");o.classList.add("col-md-4"),o.textContent=t.nombre;var a=document.createElement("div");a.classList.add("col-md-3","fw-bold"),a.textContent="$ ".concat(t.precio);var c=document.createElement("div");c.classList.add("col-md-3"),c.textContent=l[t.categoria];var u=document.createElement("input");u.type="number",u.min=0,u.value=0,u.id="cantidad-".concat(t.id),u.classList.add("form-control"),u.onchange=function(){var n=parseInt(u.value);!function(t){var n=d.pedido;if(t.cantidad>0)if(n.some((function(e){return e.id===t.id}))){var r=n.map((function(e){return e.id===t.id&&(e.cantidad=t.cantidad),e}));d.pedido=e(r)}else d.pedido=[].concat(e(n),[t]);else{var o=n.filter((function(e){return e.id!==t.id}));d.pedido=e(o)}m(),d.pedido.length?h():y()}(i(i({},t),{},{cantidad:n}))};var s=document.createElement("div");s.classList.add("col-md-2"),s.appendChild(u),r.appendChild(o),r.appendChild(a),r.appendChild(c),r.appendChild(s),n.appendChild(r)}))},h=function(){var t=document.querySelector("#resumen .contenido"),e=document.createElement("div");e.classList.add("col-md-6","card","py-5","px-3","shadow");var n=document.createElement("p");n.textContent="Mesa: ".concat(d.mesa),n.classList.add("fw-bold");var r=document.createElement("p");r.textContent="Hora: ".concat(d.hora),r.classList.add("fw-bold");var o=document.createElement("h3");o.classList.add("my-4","text-center"),o.textContent="Platillos Consumidos";var a=document.createElement("ul");a.classList.add("list-group"),d.pedido.forEach((function(t){var e=t.id,n=t.nombre,r=t.precio,o=t.cantidad,i=document.createElement("li");i.classList.add("list-group-item");var c=document.createElement("h4");c.classList.add("my-4"),c.textContent=n;var d=document.createElement("h6");d.classList.add("my-4"),d.textContent="Cantidad: ".concat(o);var l=document.createElement("h6");l.classList.add("my-4"),l.textContent="Precio: $ ".concat(r);var u=document.createElement("p");u.classList.add("fw-bold","my-4"),u.textContent="Subtotal: $ ".concat(r*o);var s=document.createElement("button");s.classList.add("btn","btn-danger"),s.textContent="Eliminar Pedido",s.onclick=function(){v(e)},i.appendChild(c),i.appendChild(d),i.appendChild(l),i.appendChild(u),i.appendChild(s),a.appendChild(i)})),e.appendChild(o),e.appendChild(n),e.appendChild(r),e.appendChild(a),t.appendChild(e),g()},m=function(){for(var t=document.querySelector("#resumen .contenido");t.firstChild;)t.removeChild(t.firstChild)},v=function(t){var n=d.pedido.filter((function(e){return e.id!==t}));d.pedido=e(n),m(),d.pedido.length?h():y(),document.querySelector("#cantidad-".concat(t)).value=0},y=function(){var t=document.querySelector("#resumen .contenido"),e=document.createElement("p");e.classList.add("text-center"),e.textContent="Añade los elementos del pedido",t.appendChild(e)},g=function(){var t=document.querySelector("#resumen .contenido"),e=document.createElement("div");e.classList.add("col-md-6","formulario");var n=document.createElement("div");n.classList.add("card","py-5","px-3","shadow");var r=document.createElement("h3");r.classList.add("my-4","text-center"),r.textContent="Propinas";var o=document.createElement("input");o.type="radio",o.name="propina",o.value="10",o.classList.add("form-check-input"),o.onclick=b;var a=document.createElement("label");a.textContent="10 %",a.classList.add("form-check-label");var i=document.createElement("div");i.classList.add("form-check"),i.appendChild(o),i.appendChild(a);var c=document.createElement("input");c.type="radio",c.name="propina",c.value="25",c.classList.add("form-check-input"),c.onclick=b;var d=document.createElement("label");d.textContent="25 %",d.classList.add("form-check-label");var l=document.createElement("div");l.classList.add("form-check"),l.appendChild(c),l.appendChild(d);var u=document.createElement("input");u.type="radio",u.name="propina",u.value="50",u.classList.add("form-check-input"),u.onclick=b;var s=document.createElement("label");s.textContent="50 %",s.classList.add("form-check-label");var p=document.createElement("div");p.classList.add("form-check"),p.appendChild(u),p.appendChild(s),n.appendChild(r),n.appendChild(i),n.appendChild(l),n.appendChild(p),e.appendChild(n),t.appendChild(e)},b=function(){var t=d.pedido,e=0;t.forEach((function(t){e+=t.precio*t.cantidad}));var n=document.querySelector('input[name="propina"]:checked').value,r=e*parseInt(n)/100;w(e,r,e+r)},w=function(t,e,n){var r=document.createElement("div");r.classList.add("total-pagar");var o=document.createElement("p");o.classList.add("fs-5","fw-bold","mt-2"),o.textContent="Subtotal: $".concat(t.toFixed(2));var a=document.createElement("p");a.classList.add("fs-5","fw-bold","mt-2"),a.textContent="Propina: $".concat(e.toFixed(2));var i=document.createElement("p");i.classList.add("fs-3","fw-bold","mt-2","bg-light","py-3","text-center","border","border-primary"),i.textContent="Total: $".concat(n.toFixed(2));var c=document.querySelector(".total-pagar");c&&c.remove(),r.appendChild(o),r.appendChild(a),r.appendChild(i),document.querySelector(".formulario > div").appendChild(r)};document.querySelector("#guardar-cliente").addEventListener("click",(function(){var t=document.querySelector("#mesa").value,e=document.querySelector("#hora").value;[t,e].some((function(t){return""===t}))?Swal.fire({icon:"error",title:"Oops...",text:"Todos los campos son obligatorios!"}):(d=i(i({},d),{},{mesa:t,hora:e}),u(),s(),p())}))})();