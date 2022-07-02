/*! For license information please see clients.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/js/utils.js":(e,t,o)=>{o.r(t),o.d(t,{checkUserData:()=>a,disableFormButton:()=>r,isUserExist:()=>s,isUserLoggedIn:()=>i,logout:()=>c,redirectToHome:()=>l,toggleInputWarning:()=>n}),window.appUsers=[{email:"art@gmail.com",password:"123456"}];let r=function(e,t){t.disabled=!e.checkValidity()},n=function(e,t){let o=document.querySelector(t).querySelector(".text-warning");e.checkValidity()?o.classList.remove("show"):o.classList.add("show")},s=function(e){return localStorage.getItem("email")===e},a=function(e,t){if(!0===s(e))return localStorage.getItem("password")===t},c=function(){document.querySelector(".btn-logout").addEventListener("click",(function(){localStorage.clear(),window.location.replace("./index.html")}))},i=function(){setTimeout((function(){"logged-in"===localStorage.getItem("status")&&l()}),0)},l=function(){window.location.replace("./home.html")}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{o.r(r),(0,o("./src/js/utils.js").logout)();(async function(){const e=await fetch("https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json",{method:"GET",headers:{"Accept-Language":"en-US,ge"}});console.log("Response Headers",e.headers.get("expires"),e.headers.get("content-type")),console.log(e.ok);const t=await e.json();return Promise.resolve(t)})().then((e=>{console.log("Users",e)}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5qcyIsIm1hcHBpbmdzIjoiO3NOQUFBQSxPQUFPQyxTQUFXLENBQ2QsQ0FDSUMsTUFBTyxnQkFDUEMsU0FBVSxXQUlsQixJQUFJQyxFQUFvQixTQUFVQyxFQUFNQyxHQUNwQ0EsRUFBYUMsVUFBWUYsRUFBS0csaUJBRzlCQyxFQUFxQixTQUFVQyxFQUFZQyxHQUMzQyxJQUNJQyxFQURZQyxTQUFTQyxjQUFjSCxHQUNmRyxjQUFjLGlCQUNqQ0osRUFBV0YsZ0JBR1pJLEVBQVFHLFVBQVVDLE9BQU8sUUFGekJKLEVBQVFHLFVBQVVFLElBQUksU0FjMUJDLEVBQWMsU0FBVUMsR0FDcEIsT0FSR0MsYUFBYUMsUUFBUSxXQVFnQkYsR0FHNUNHLEVBQWdCLFNBQVVILEVBQVlJLEdBQ3RDLElBQWdDLElBQTVCTCxFQUFZQyxHQUNaLE9BVEdDLGFBQWFDLFFBQVEsY0FTbUJFLEdBSS9DQyxFQUFTLFdBQ1VYLFNBQVNDLGNBQWMsZUFDN0JXLGlCQUFpQixTQUFTLFdBQ25DTCxhQUFhTSxRQUNiMUIsT0FBTzJCLFNBQVNDLFFBQVEsb0JBSTVCQyxFQUFpQixXQUNqQkMsWUFBVyxXQUVZLGNBREZWLGFBQWFDLFFBQVEsV0FFbENVLE1BRUwsSUFHSEEsRUFBaUIsV0FDakIvQixPQUFPMkIsU0FBU0MsUUFBUSxrQkN4RHhCSSxFQUEyQixHQUcvQixTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCRSxJQUFqQkQsRUFDSCxPQUFPQSxFQUFhRSxRQUdyQixJQUFJQyxFQUFTTixFQUF5QkUsR0FBWSxDQUdqREcsUUFBUyxJQU9WLE9BSEFFLEVBQW9CTCxHQUFVSSxFQUFRQSxFQUFPRCxRQUFTSixHQUcvQ0ssRUFBT0QsUUNwQmZKLEVBQW9CTyxFQUFJLENBQUNILEVBQVNJLEtBQ2pDLElBQUksSUFBSUMsS0FBT0QsRUFDWFIsRUFBb0JVLEVBQUVGLEVBQVlDLEtBQVNULEVBQW9CVSxFQUFFTixFQUFTSyxJQUM1RUUsT0FBT0MsZUFBZVIsRUFBU0ssRUFBSyxDQUFFSSxZQUFZLEVBQU1DLElBQUtOLEVBQVdDLE1DSjNFVCxFQUFvQlUsRUFBSSxDQUFDSyxFQUFLQyxJQUFVTCxPQUFPTSxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHQ0NsRmhCLEVBQW9Cb0IsRUFBS2hCLElBQ0gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNYLE9BQU9DLGVBQWVSLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RaLE9BQU9DLGVBQWVSLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyw0QkNKdkRoQyx5QkFBQUEsV0FJQWlDLGlCQUNJLE1BQU1DLFFBQVlDLE1BSE4sa0lBR3VCLENBQy9CQyxPQUFRLE1BQ1JDLFFBQVMsQ0FDTCxrQkFBbUIsY0FHM0JDLFFBQVFDLElBQUksbUJBQW9CTCxFQUFJRyxRQUFRZCxJQUFJLFdBQVlXLEVBQUlHLFFBQVFkLElBQUksaUJBQzVFZSxRQUFRQyxJQUFJTCxFQUFJTSxJQUVoQixNQUFNQyxRQUFjUCxFQUFJUSxPQUV4QixPQUFPQyxRQUFRQyxRQUFRSCxJQUczQkksR0FBYUMsTUFBTUwsSUFDZkgsUUFBUUMsSUFBSSxRQUFTRSIsInNvdXJjZXMiOlsid2VicGFjazovL2F2LXN0b3JlLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hdi1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvLi9zcmMvanMvY2xpZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYXBwVXNlcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZW1haWw6ICdhcnRAZ21haWwuY29tJyxcclxuICAgICAgICBwYXNzd29yZDogJzEyMzQ1NidcclxuICAgIH1cclxuXTtcclxuXHJcbmxldCBkaXNhYmxlRm9ybUJ1dHRvbiA9IGZ1bmN0aW9uIChmb3JtLCBidXR0b25JbkZvcm0pIHtcclxuICAgIGJ1dHRvbkluRm9ybS5kaXNhYmxlZCA9ICFmb3JtLmNoZWNrVmFsaWRpdHkoKTtcclxufVxyXG5cclxubGV0IHRvZ2dsZUlucHV0V2FybmluZyA9IGZ1bmN0aW9uIChpbnB1dEZpZWxkLCBzZWxlY3Rvcikge1xyXG4gICAgbGV0IGZpbmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXHJcbiAgICBsZXQgd2FybmluZyA9IGZpbmRJbnB1dC5xdWVyeVNlbGVjdG9yKCcudGV4dC13YXJuaW5nJyk7XHJcbiAgICBpZiAoIWlucHV0RmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgd2FybmluZy5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2FybmluZy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgIH1cclxufVxyXG5cclxubGV0IGlzRW1haWxFeGlzdEluTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpO1xyXG59XHJcblxyXG5sZXQgaXNQYXNzd29yZEV4aXN0SW5Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bhc3N3b3JkJyk7XHJcbn1cclxuXHJcbmxldCBpc1VzZXJFeGlzdCA9IGZ1bmN0aW9uIChlbWFpbFZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRW1haWxFeGlzdEluTG9jYWxTdG9yYWdlKCkgPT09IGVtYWlsVmFsdWU7XHJcbn1cclxuXHJcbmxldCBjaGVja1VzZXJEYXRhID0gZnVuY3Rpb24gKGVtYWlsVmFsdWUsIHBhc3N3b3JkVmFsdWUpIHtcclxuICAgIGlmIChpc1VzZXJFeGlzdChlbWFpbFZhbHVlKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBpc1Bhc3N3b3JkRXhpc3RJbkxvY2FsU3RvcmFnZSgpID09PSBwYXNzd29yZFZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGxvZ291dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbG9nb3V0Jyk7XHJcbiAgICBsb2dvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy4vaW5kZXguaHRtbCcpO1xyXG4gICAgfSlcclxufVxyXG5cclxubGV0IGlzVXNlckxvZ2dlZEluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHVzZXJTdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdHVzJylcclxuICAgICAgICBpZiAodXNlclN0YXR1cyA9PT0gJ2xvZ2dlZC1pbicpIHtcclxuICAgICAgICAgICAgcmVkaXJlY3RUb0hvbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAwKVxyXG59XHJcblxyXG5sZXQgcmVkaXJlY3RUb0hvbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLi9ob21lLmh0bWwnKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZGlzYWJsZUZvcm1CdXR0b24sXHJcbiAgICB0b2dnbGVJbnB1dFdhcm5pbmcsXHJcbiAgICBpc1VzZXJFeGlzdCxcclxuICAgIGNoZWNrVXNlckRhdGEsXHJcbiAgICBsb2dvdXQsXHJcbiAgICBpc1VzZXJMb2dnZWRJbixcclxuICAgIHJlZGlyZWN0VG9Ib21lXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuL3V0aWxzLmpzJztcclxubG9nb3V0KClcclxuXHJcbmxldCB1c2Vyc0RhdGEgPSAnaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9vREFTQ28vM2Y0MDE0ZDI0ZGM3OWUxZTI5YjU4YmZhOTZhZmFhMWIvcmF3LzY3NzUxNmVlM2JkMjc4ZjdlM2Q4MDUxMDg1OTZjYTQzMWQwMGI2MjkvZGIuanNvbidcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcnMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1c2Vyc0RhdGEsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICdlbi1VUyxnZScsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSBIZWFkZXJzJywgcmVzLmhlYWRlcnMuZ2V0KCdleHBpcmVzJyksIHJlcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpXHJcbiAgICBjb25zb2xlLmxvZyhyZXMub2spXHJcblxyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VycylcclxufVxyXG5cclxuZmV0Y2hVc2VycygpLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnVXNlcnMnLCB1c2VycylcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhcHBVc2VycyIsImVtYWlsIiwicGFzc3dvcmQiLCJkaXNhYmxlRm9ybUJ1dHRvbiIsImZvcm0iLCJidXR0b25JbkZvcm0iLCJkaXNhYmxlZCIsImNoZWNrVmFsaWRpdHkiLCJ0b2dnbGVJbnB1dFdhcm5pbmciLCJpbnB1dEZpZWxkIiwic2VsZWN0b3IiLCJ3YXJuaW5nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaXNVc2VyRXhpc3QiLCJlbWFpbFZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoZWNrVXNlckRhdGEiLCJwYXNzd29yZFZhbHVlIiwibG9nb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyIiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaXNVc2VyTG9nZ2VkSW4iLCJzZXRUaW1lb3V0IiwicmVkaXJlY3RUb0hvbWUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsImFzeW5jIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsIm9rIiwidXNlcnMiLCJqc29uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmZXRjaFVzZXJzIiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=