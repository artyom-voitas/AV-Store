/*! For license information please see signUp.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/js/utils.js":(e,t,o)=>{o.r(t),o.d(t,{checkUserData:()=>i,disableFormButton:()=>n,isUserExist:()=>r,isUserLoggedIn:()=>l,logout:()=>a,redirectToHome:()=>c,toggleInputWarning:()=>s}),window.appUsers=[{email:"art@gmail.com",password:"123456"}];let n=function(e,t){t.disabled=!e.checkValidity()},s=function(e,t){let o=document.querySelector(t).querySelector(".text-warning");e.checkValidity()?o.classList.remove("show"):o.classList.add("show")},r=function(e){return localStorage.getItem("email")===e},i=function(e,t){if(!0===r(e))return localStorage.getItem("password")===t},a=function(){document.querySelector(".btn-logout").addEventListener("click",(function(){localStorage.clear(),window.location.replace("./index.html")}))},l=function(){setTimeout((function(){"logged-in"===localStorage.getItem("status")&&c()}),0)},c=function(){window.location.replace("./home.html")}}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{o.r(n);var e=o("./src/js/utils.js");let t=document.forms["sign-up"],s=t.elements["new-user-email"],r=t.elements["new-user-password"],i=t.elements["confirm-password"],a=t.elements["sign-up-button"];t.addEventListener("input",(function(){(0,e.disableFormButton)(this,a)})),s.addEventListener("change",(function(){(0,e.toggleInputWarning)(this,".input-email")})),r.addEventListener("change",(function(){(0,e.toggleInputWarning)(this,".input-password")})),t.addEventListener("submit",(function(t){t.preventDefault();let o=document.querySelector(".text-warning"),n=document.querySelector(".confirm-password"),a=document.querySelector(".registered");a.classList.remove("show"),a.innerHTML="";let l=s.value,c=r.value,u=i.value;!0===(0,e.isUserExist)(l)?(o.innerHTML="A user with the same email already exists. Try to Sign In",o.classList.add("show")):(o.innerHTML="The email address is incorrect. Please retry...",o.classList.remove("show"),u===c?(a.classList.add("show"),n.classList.remove("show"),window.localStorage.setItem("email",s.value),window.localStorage.setItem("password",r.value),a.innerHTML="You are successfully Signed Up!",setTimeout((()=>{window.location.replace("./index.html")}),2e3)):n.classList.add("show"))})),(0,e.isUserLoggedIn)()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UXlELFVBQVksa0RBQ3BCekQsRUFBUUcsVUFBVUMsT0FBTyxRQUNyQndELElBQWdDRCxHQUNoQ0gsRUFBZ0JyRCxVQUFVRSxJQUFJLFFBQzlCa0QsRUFBbUJwRCxVQUFVQyxPQUFPLFFBQ3BDaEIsT0FBT29CLGFBQWFxRCxRQUFRLFFBQVNkLEVBQWFILE9BQ2xEeEQsT0FBT29CLGFBQWFxRCxRQUFRLFdBQVlaLEVBQWdCTCxPQUN4RFksRUFBZ0JDLFVBQVksa0NBQzVCdkMsWUFBVyxLQUNQOUIsT0FBTzJCLFNBQVNDLFFBQVEsa0JBQ3pCLE1BRUh1QyxFQUFtQnBELFVBQVVFLElBQUksYUFLN0NZLEVBQUFBLEVBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXYtc3RvcmUvLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hdi1zdG9yZS8uL3NyYy9qcy9zaWduLXVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hcHBVc2VycyA9IFtcclxuICAgIHtcclxuICAgICAgICBlbWFpbDogJ2FydEBnbWFpbC5jb20nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnMTIzNDU2J1xyXG4gICAgfVxyXG5dO1xyXG5cclxubGV0IGRpc2FibGVGb3JtQnV0dG9uID0gZnVuY3Rpb24gKGZvcm0sIGJ1dHRvbkluRm9ybSkge1xyXG4gICAgYnV0dG9uSW5Gb3JtLmRpc2FibGVkID0gIWZvcm0uY2hlY2tWYWxpZGl0eSgpO1xyXG59XHJcblxyXG5sZXQgdG9nZ2xlSW5wdXRXYXJuaW5nID0gZnVuY3Rpb24gKGlucHV0RmllbGQsIHNlbGVjdG9yKSB7XHJcbiAgICBsZXQgZmluZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcclxuICAgIGxldCB3YXJuaW5nID0gZmluZElucHV0LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXdhcm5pbmcnKTtcclxuICAgIGlmICghaW5wdXRGaWVsZC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3YXJuaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgaXNFbWFpbEV4aXN0SW5Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJyk7XHJcbn1cclxuXHJcbmxldCBpc1Bhc3N3b3JkRXhpc3RJbkxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKTtcclxufVxyXG5cclxubGV0IGlzVXNlckV4aXN0ID0gZnVuY3Rpb24gKGVtYWlsVmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gaXNFbWFpbEV4aXN0SW5Mb2NhbFN0b3JhZ2UoKSA9PT0gZW1haWxWYWx1ZTtcclxufVxyXG5cclxubGV0IGNoZWNrVXNlckRhdGEgPSBmdW5jdGlvbiAoZW1haWxWYWx1ZSwgcGFzc3dvcmRWYWx1ZSkge1xyXG4gICAgaWYgKGlzVXNlckV4aXN0KGVtYWlsVmFsdWUpID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc3dvcmRFeGlzdEluTG9jYWxTdG9yYWdlKCkgPT09IHBhc3N3b3JkVmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBsb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbG9nb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1sb2dvdXQnKTtcclxuICAgIGxvZ291dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLi9pbmRleC5odG1sJyk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5sZXQgaXNVc2VyTG9nZ2VkSW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdXNlclN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0dXMnKVxyXG4gICAgICAgIGlmICh1c2VyU3RhdHVzID09PSAnbG9nZ2VkLWluJykge1xyXG4gICAgICAgICAgICByZWRpcmVjdFRvSG9tZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDApXHJcbn1cclxuXHJcbmxldCByZWRpcmVjdFRvSG9tZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcuL2hvbWUuaHRtbCcpXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBkaXNhYmxlRm9ybUJ1dHRvbixcclxuICAgIHRvZ2dsZUlucHV0V2FybmluZyxcclxuICAgIGlzVXNlckV4aXN0LFxyXG4gICAgY2hlY2tVc2VyRGF0YSxcclxuICAgIGxvZ291dCxcclxuICAgIGlzVXNlckxvZ2dlZEluLFxyXG4gICAgcmVkaXJlY3RUb0hvbWVcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRpc2FibGVGb3JtQnV0dG9uLCB0b2dnbGVJbnB1dFdhcm5pbmcsIGlzVXNlckV4aXN0LCBpc1VzZXJMb2dnZWRJbiB9IGZyb20gJy4vdXRpbHMuanMnXHJcblxyXG5sZXQgc2lnblVwRm9ybSA9IGRvY3VtZW50LmZvcm1zWydzaWduLXVwJ107XHJcbmxldCBuZXdVc2VyRW1haWwgPSBzaWduVXBGb3JtLmVsZW1lbnRzWyduZXctdXNlci1lbWFpbCddO1xyXG5sZXQgbmV3VXNlclBhc3N3b3JkID0gc2lnblVwRm9ybS5lbGVtZW50c1snbmV3LXVzZXItcGFzc3dvcmQnXTtcclxubGV0IG5ld1VzZXJDb25maXJtUGFzc3dvcmQgPSBzaWduVXBGb3JtLmVsZW1lbnRzWydjb25maXJtLXBhc3N3b3JkJ107XHJcbmxldCBzaWduVXBCdXR0b24gPSBzaWduVXBGb3JtLmVsZW1lbnRzWydzaWduLXVwLWJ1dHRvbiddXHJcblxyXG5zaWduVXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgZGlzYWJsZUZvcm1CdXR0b24odGhpcywgc2lnblVwQnV0dG9uKVxyXG59KTtcclxuXHJcbm5ld1VzZXJFbWFpbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0b2dnbGVJbnB1dFdhcm5pbmcodGhpcywgJy5pbnB1dC1lbWFpbCcpXHJcbn0pXHJcblxyXG5uZXdVc2VyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdG9nZ2xlSW5wdXRXYXJuaW5nKHRoaXMsICcuaW5wdXQtcGFzc3dvcmQnKVxyXG59KVxyXG5cclxuc2lnblVwRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgd2FybmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXdhcm5pbmcnKTtcclxuICAgIGxldCBwYXNzd29yZHNEb05vdE11Y2g9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLXBhc3N3b3JkJylcclxuICAgIGxldCByZWdpc3Rlck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXJlZCcpXHJcbiAgICByZWdpc3Rlck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgcmVnaXN0ZXJNZXNzYWdlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgbGV0IG5ld1VzZXJFbWFpbFZhbHVlID0gbmV3VXNlckVtYWlsLnZhbHVlO1xyXG4gICAgbGV0IG5ld1VzZXJQYXNzd29yZFZhbHVlID0gbmV3VXNlclBhc3N3b3JkLnZhbHVlO1xyXG4gICAgbGV0IG5ld1VzZXJDb25maXJtUGFzc3dvcmRWYWx1ZSA9IG5ld1VzZXJDb25maXJtUGFzc3dvcmQudmFsdWU7XHJcbiAgICBpZiAoaXNVc2VyRXhpc3QobmV3VXNlckVtYWlsVmFsdWUpID09PSB0cnVlKSB7XHJcbiAgICAgICAgd2FybmluZy5pbm5lckhUTUwgPSAnQSB1c2VyIHdpdGggdGhlIHNhbWUgZW1haWwgYWxyZWFkeSBleGlzdHMuIFRyeSB0byBTaWduIEluJztcclxuICAgICAgICB3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2FybmluZy5pbm5lckhUTUwgPSAnVGhlIGVtYWlsIGFkZHJlc3MgaXMgaW5jb3JyZWN0LiBQbGVhc2UgcmV0cnkuLi4nXHJcbiAgICAgICAgd2FybmluZy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgaWYgKG5ld1VzZXJDb25maXJtUGFzc3dvcmRWYWx1ZSA9PT0gbmV3VXNlclBhc3N3b3JkVmFsdWUpIHtcclxuICAgICAgICAgICAgcmVnaXN0ZXJNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgcGFzc3dvcmRzRG9Ob3RNdWNoLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIG5ld1VzZXJFbWFpbC52YWx1ZSlcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIG5ld1VzZXJQYXNzd29yZC52YWx1ZSlcclxuICAgICAgICAgICAgcmVnaXN0ZXJNZXNzYWdlLmlubmVySFRNTCA9ICdZb3UgYXJlIHN1Y2Nlc3NmdWxseSBTaWduZWQgVXAhJ1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcuL2luZGV4Lmh0bWwnKVxyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXNzd29yZHNEb05vdE11Y2guY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmlzVXNlckxvZ2dlZEluKClcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhcHBVc2VycyIsImVtYWlsIiwicGFzc3dvcmQiLCJkaXNhYmxlRm9ybUJ1dHRvbiIsImZvcm0iLCJidXR0b25JbkZvcm0iLCJkaXNhYmxlZCIsImNoZWNrVmFsaWRpdHkiLCJ0b2dnbGVJbnB1dFdhcm5pbmciLCJpbnB1dEZpZWxkIiwic2VsZWN0b3IiLCJ3YXJuaW5nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaXNVc2VyRXhpc3QiLCJlbWFpbFZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoZWNrVXNlckRhdGEiLCJwYXNzd29yZFZhbHVlIiwibG9nb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyIiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaXNVc2VyTG9nZ2VkSW4iLCJzZXRUaW1lb3V0IiwicmVkaXJlY3RUb0hvbWUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInNpZ25VcEZvcm0iLCJmb3JtcyIsIm5ld1VzZXJFbWFpbCIsImVsZW1lbnRzIiwibmV3VXNlclBhc3N3b3JkIiwibmV3VXNlckNvbmZpcm1QYXNzd29yZCIsInNpZ25VcEJ1dHRvbiIsInRoaXMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFzc3dvcmRzRG9Ob3RNdWNoIiwicmVnaXN0ZXJNZXNzYWdlIiwiaW5uZXJIVE1MIiwibmV3VXNlckVtYWlsVmFsdWUiLCJuZXdVc2VyUGFzc3dvcmRWYWx1ZSIsIm5ld1VzZXJDb25maXJtUGFzc3dvcmRWYWx1ZSIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9