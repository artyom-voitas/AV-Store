/*! For license information please see sign-in.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/js/utils.js":(e,t,n)=>{n.r(t),n.d(t,{authorizedUserCheck:()=>d,checkUserData:()=>s,createConfirmationModal:()=>h,createSpecifiedDomElement:()=>g,disableFormButton:()=>r,formatDate:()=>p,getMaxOfArray:()=>f,logout:()=>l,notification:()=>v,redirectToHome:()=>u,toggleInputWarning:()=>a,unauthorizedUserCheck:()=>c,userFinder:()=>i});const o=document.querySelector("body");let r=function(e,t){t.disabled=!e.checkValidity()},a=function(e,t){let n=document.querySelector(t).querySelector(".text-warning");e.checkValidity()?n.classList.remove("show"):n.classList.add("show")};const i=function(e){let t=JSON.parse(localStorage.getItem("users")),n=t.findIndex((t=>t.email===e));return-1===n?-1:t[n]};let s=function(e,t){let n=i(e);if(-1!==n)return n.password===t},l=function(){document.querySelector(".btn-logout").addEventListener("click",(function(){localStorage.removeItem("active-user"),m()}))},c=function(){setTimeout((function(){null===localStorage.getItem("active-user")&&m()}),1)},d=function(){setTimeout((function(){null!==localStorage.getItem("active-user")&&u()}),1)},u=function(){window.location.replace("./home.html")},m=function(){window.location.replace("./index.html")};function p(e){let t=e.getDate();t<10&&(t="0"+t);let n=e.getMonth()+1;n<10&&(n="0"+n);let o=e.getFullYear();return o<10&&(o="0"+o),t+"."+n+"."+o}function f(e){return Math.max.apply(null,e)}function g(e,t,n){let o=document.createElement(e);return o.classList.add(t),o.innerHTML=n,o}function h(){let e=g("div","modal",""),t=g("h4","modal-header","Confirmation"),n=g("p","modal-body","Are you sure you want to delete?"),r=g("div","modal-footer",""),a=g("button","btn","Delete");a.classList.add("btn-danger","btn__delete");let i=g("button","btn","Cancel");i.classList.add("btn-secondary","btn__cancel"),e.append(t),e.append(n),e.append(r),r.append(a),r.append(i),o.append(e)}function v(e){let t=document.createElement("div");t.classList.add("badge");let n=g("h4","notification__header",e);t.append(n);let r=document.createElement("button");t.append(r),r.classList.add("btn","btn-close"),r.addEventListener("click",(function(){t.remove()})),o.append(t)}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o);var e=n("./src/js/utils.js");let t=document.forms["sign-in"],r=t.elements["user-email"],a=t.elements["user-password"],i=t.elements["authorization-button"];t.addEventListener("input",(function(){(0,e.disableFormButton)(this,i)})),r.addEventListener("change",(function(){(0,e.toggleInputWarning)(this,".input-email")})),a.addEventListener("change",(function(){(0,e.toggleInputWarning)(this,".input-password")})),t.addEventListener("submit",(function(t){t.preventDefault();let n=document.querySelector(".log-in");n.classList.remove("show"),n.innerHTML="";let o=r.value,i=a.value;if((0,e.userFinder)(o))!0===(0,e.checkUserData)(o,i)?(n.classList.remove("text-warning"),n.innerHTML="You are successfully logged in!",n.classList.add("show"),localStorage.setItem("active-user",o),setTimeout((()=>{(0,e.redirectToHome)()}),1e3)):(n.innerHTML="Oops, something wrong with yours email or password!",n.classList.add("text-warning"),n.classList.add("show"));else{let e=document.querySelector(".text-warning");e.innerHTML="A user with such email address does not exist",e.classList.add("show")}})),(0,e.authorizedUserCheck)()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxpQkFDTixJQUFJQyxFQUFldkcsU0FBU0MsY0FBYyxXQUMxQ3NHLEVBQWE1RixVQUFVQyxPQUFPLFFBQzlCMkYsRUFBYWxELFVBQVksR0FDekIsSUFBSW1ELEVBQWlCUixFQUFVSCxNQUMzQlksRUFBb0JQLEVBQWFMLE1BQ3JDLElBQUsvRSxFQUFBQSxFQUFBQSxZQUFXMEYsSUFLNkMsS0FBckRoRixFQUFBQSxFQUFBQSxlQUFjZ0YsRUFBZ0JDLElBQzlCRixFQUFhNUYsVUFBVUMsT0FBTyxnQkFDOUIyRixFQUFhbEQsVUFBWSxrQ0FDekJrRCxFQUFhNUYsVUFBVUUsSUFBSSxRQUMzQk0sYUFBYXVGLFFBQVEsY0FBZUYsR0FDcEN6RSxZQUFXLE1BQ1JFLEVBQUFBLEVBQUFBLG9CQUNBLE9BRUhzRSxFQUFhbEQsVUFBWSxzREFDekJrRCxFQUFhNUYsVUFBVUUsSUFBSSxnQkFDM0IwRixFQUFhNUYsVUFBVUUsSUFBSSxhQWhCRixDQUM3QixJQUFJSCxFQUFVVixTQUFTQyxjQUFjLGlCQUNyQ1MsRUFBUTJDLFVBQVksZ0RBQ3BCM0MsRUFBUUMsVUFBVUUsSUFBSSxhQWtCOUJtQixFQUFBQSxFQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F2LXN0b3JlLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hdi1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvLi9zcmMvanMvc2lnbi1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxubGV0IGRpc2FibGVGb3JtQnV0dG9uID0gZnVuY3Rpb24gKGZvcm0sIGJ1dHRvbkluRm9ybSkge1xyXG4gICAgYnV0dG9uSW5Gb3JtLmRpc2FibGVkID0gIWZvcm0uY2hlY2tWYWxpZGl0eSgpO1xyXG59XHJcblxyXG5sZXQgdG9nZ2xlSW5wdXRXYXJuaW5nID0gZnVuY3Rpb24gKGlucHV0RmllbGQsIHNlbGVjdG9yKSB7XHJcbiAgICBsZXQgZmluZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcclxuICAgIGxldCB3YXJuaW5nID0gZmluZElucHV0LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXdhcm5pbmcnKTtcclxuICAgIGlmICghaW5wdXRGaWVsZC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3YXJuaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VyTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VycycpKTtcclxufVxyXG5cclxuY29uc3QgdXNlckZpbmRlciA9IGZ1bmN0aW9uIChlbWFpbFZhbHVlKSB7XHJcbiAgICBsZXQgdXNlcnMgPSB1c2VyTGlzdCgpO1xyXG4gICAgbGV0IHVzZXIgPSB1c2Vycy5maW5kSW5kZXgodXNlciA9PiB1c2VyLmVtYWlsID09PSBlbWFpbFZhbHVlKTtcclxuICAgIGlmICh1c2VyID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdXNlcnNbdXNlcl07XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBjaGVja1VzZXJEYXRhID0gZnVuY3Rpb24gKGVtYWlsVmFsdWUsIHBhc3N3b3JkVmFsdWUpIHtcclxuICAgIGxldCB1c2VyID0gdXNlckZpbmRlcihlbWFpbFZhbHVlKTtcclxuICAgIGlmICh1c2VyICE9PSAtMSkge1xyXG4gICAgICAgIHJldHVybiB1c2VyWydwYXNzd29yZCddID09PSBwYXNzd29yZFZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGxvZ291dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbG9nb3V0Jyk7XHJcbiAgICBsb2dvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjdGl2ZS11c2VyJyk7XHJcbiAgICAgICAgcmVkaXJlY3RUb0xvZ2luKClcclxuICAgIH0pXHJcbn1cclxuXHJcbmxldCB1bmF1dGhvcml6ZWRVc2VyQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc3RhdHVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS11c2VyJylcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0VG9Mb2dpbigpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgMSlcclxufVxyXG5cclxubGV0IGF1dGhvcml6ZWRVc2VyQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc3RhdHVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS11c2VyJylcclxuICAgICAgICBpZiAoc3RhdHVzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0VG9Ib21lKClcclxuICAgICAgICB9XHJcbiAgICB9LCAxKVxyXG59XHJcblxyXG5sZXQgcmVkaXJlY3RUb0hvbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLi9ob21lLmh0bWwnKVxyXG59XHJcblxyXG5sZXQgcmVkaXJlY3RUb0xvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy4vaW5kZXguaHRtbCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gICAgbGV0IGRkID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICBpZiAoZGQgPCAxMCkgZGQgPSAnMCcgKyBkZDtcclxuXHJcbiAgICBsZXQgbW0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgaWYgKG1tIDwgMTApIG1tID0gJzAnICsgbW07XHJcblxyXG4gICAgbGV0IHl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgaWYgKHl5IDwgMTApIHl5ID0gJzAnICsgeXk7XHJcblxyXG4gICAgcmV0dXJuIGRkICsgJy4nICsgbW0gKyAnLicgKyB5eTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWF4T2ZBcnJheShudW1BcnJheSkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIG51bUFycmF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCh0YWdOYW1lLCBjbGFzc05hbWUsIGlubmVySFRNTCkge1xyXG4gICAgbGV0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBkb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcclxuICAgIHJldHVybiBkb21FbGVtZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbmZpcm1hdGlvbk1vZGFsKCkge1xyXG4gICAgbGV0IG1vZGFsID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgnZGl2JywgJ21vZGFsJywgJycpO1xyXG4gICAgbGV0IG1vZGFsSGVhZGVyID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgnaDQnLCAnbW9kYWwtaGVhZGVyJywgJ0NvbmZpcm1hdGlvbicsICcnKTtcclxuICAgIGxldCBtb2RhbEJvZHkgPSBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KCdwJywgJ21vZGFsLWJvZHknLCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nKVxyXG4gICAgbGV0IG1vZGFsRm9vdGVyID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgnZGl2JywgJ21vZGFsLWZvb3RlcicsICcnKTtcclxuICAgIGxldCBkZWxldGVCdXR0b24gPSBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KCdidXR0b24nLCAnYnRuJywgJ0RlbGV0ZScpO1xyXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1kYW5nZXInLCAnYnRuX19kZWxldGUnKVxyXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ2J1dHRvbicsICdidG4nLCAnQ2FuY2VsJyk7XHJcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLXNlY29uZGFyeScsICdidG5fX2NhbmNlbCcpO1xyXG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsSGVhZGVyKTtcclxuICAgIG1vZGFsLmFwcGVuZChtb2RhbEJvZHkpO1xyXG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsRm9vdGVyKTtcclxuICAgIG1vZGFsRm9vdGVyLmFwcGVuZChkZWxldGVCdXR0b24pO1xyXG4gICAgbW9kYWxGb290ZXIuYXBwZW5kKGNhbmNlbEJ1dHRvbilcclxuICAgIGJvZHkuYXBwZW5kKG1vZGFsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBub3RpZmljYXRpb24odGV4dCkge1xyXG4gICAgbGV0IHdpbmRvd05vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd2luZG93Tm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2JhZGdlJyk7XHJcbiAgICBsZXQgbm90aWZpY2F0aW9uSGVhZGVyID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgnaDQnLCAnbm90aWZpY2F0aW9uX19oZWFkZXInLCB0ZXh0KTtcclxuICAgIHdpbmRvd05vdGlmaWNhdGlvbi5hcHBlbmQobm90aWZpY2F0aW9uSGVhZGVyKTtcclxuICAgIGxldCBjbG9zZU5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgd2luZG93Tm90aWZpY2F0aW9uLmFwcGVuZChjbG9zZU5vdGlmaWNhdGlvbilcclxuICAgIGNsb3NlTm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tY2xvc2UnKTtcclxuICAgIGNsb3NlTm90aWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbmRvd05vdGlmaWNhdGlvbi5yZW1vdmUoKTtcclxuICAgIH0pXHJcbiAgICBib2R5LmFwcGVuZCh3aW5kb3dOb3RpZmljYXRpb24pXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBkaXNhYmxlRm9ybUJ1dHRvbixcclxuICAgIHRvZ2dsZUlucHV0V2FybmluZyxcclxuICAgIGNoZWNrVXNlckRhdGEsXHJcbiAgICB1c2VyRmluZGVyLFxyXG4gICAgbG9nb3V0LFxyXG4gICAgdW5hdXRob3JpemVkVXNlckNoZWNrLFxyXG4gICAgYXV0aG9yaXplZFVzZXJDaGVjayxcclxuICAgIHJlZGlyZWN0VG9Ib21lLFxyXG4gICAgZm9ybWF0RGF0ZSxcclxuICAgIGdldE1heE9mQXJyYXksXHJcbiAgICBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50LFxyXG4gICAgY3JlYXRlQ29uZmlybWF0aW9uTW9kYWwsXHJcbiAgICBub3RpZmljYXRpb25cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRpc2FibGVGb3JtQnV0dG9uLCB1c2VyRmluZGVyLCB0b2dnbGVJbnB1dFdhcm5pbmcsIGNoZWNrVXNlckRhdGEsIGF1dGhvcml6ZWRVc2VyQ2hlY2ssIHJlZGlyZWN0VG9Ib21lIH0gZnJvbSAnLi91dGlscy5qcyc7XHJcblxyXG5sZXQgc2lnbkluRm9ybSA9IGRvY3VtZW50LmZvcm1zWydzaWduLWluJ107XHJcbmxldCB1c2VyRW1haWwgPSBzaWduSW5Gb3JtLmVsZW1lbnRzWyd1c2VyLWVtYWlsJ107XHJcbmxldCB1c2VyUGFzc3dvcmQgPSBzaWduSW5Gb3JtLmVsZW1lbnRzWyd1c2VyLXBhc3N3b3JkJ107XHJcbmxldCBsb2dpbkJ1dHRvbiA9IHNpZ25JbkZvcm0uZWxlbWVudHNbJ2F1dGhvcml6YXRpb24tYnV0dG9uJ107XHJcblxyXG5zaWduSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgZGlzYWJsZUZvcm1CdXR0b24odGhpcywgbG9naW5CdXR0b24pXHJcbn0pO1xyXG5cclxudXNlckVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRvZ2dsZUlucHV0V2FybmluZyh0aGlzLCAnLmlucHV0LWVtYWlsJylcclxufSlcclxuXHJcbnVzZXJQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0b2dnbGVJbnB1dFdhcm5pbmcodGhpcywgJy5pbnB1dC1wYXNzd29yZCcpXHJcbn0pXHJcblxyXG5zaWduSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBsb2dpbk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nLWluJylcclxuICAgIGxvZ2luTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICBsb2dpbk1lc3NhZ2UuaW5uZXJIVE1MID0gJydcclxuICAgIGxldCB1c2VyRW1haWxWYWx1ZSA9IHVzZXJFbWFpbC52YWx1ZTtcclxuICAgIGxldCB1c2VyUGFzc3dvcmRWYWx1ZSA9IHVzZXJQYXNzd29yZC52YWx1ZTtcclxuICAgIGlmICghdXNlckZpbmRlcih1c2VyRW1haWxWYWx1ZSkpIHtcclxuICAgICAgICBsZXQgd2FybmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXdhcm5pbmcnKTtcclxuICAgICAgICB3YXJuaW5nLmlubmVySFRNTCA9IFwiQSB1c2VyIHdpdGggc3VjaCBlbWFpbCBhZGRyZXNzIGRvZXMgbm90IGV4aXN0XCI7XHJcbiAgICAgICAgd2FybmluZy5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgIH0gZWxzZSAge1xyXG4gICAgICAgIGlmIChjaGVja1VzZXJEYXRhKHVzZXJFbWFpbFZhbHVlLCB1c2VyUGFzc3dvcmRWYWx1ZSkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgbG9naW5NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQtd2FybmluZycpXHJcbiAgICAgICAgICAgIGxvZ2luTWVzc2FnZS5pbm5lckhUTUwgPSAnWW91IGFyZSBzdWNjZXNzZnVsbHkgbG9nZ2VkIGluISdcclxuICAgICAgICAgICAgbG9naW5NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZS11c2VyJywgdXNlckVtYWlsVmFsdWUpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICByZWRpcmVjdFRvSG9tZSgpXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvZ2luTWVzc2FnZS5pbm5lckhUTUwgPSAnT29wcywgc29tZXRoaW5nIHdyb25nIHdpdGggeW91cnMgZW1haWwgb3IgcGFzc3dvcmQhJ1xyXG4gICAgICAgICAgICBsb2dpbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgndGV4dC13YXJuaW5nJyk7XHJcbiAgICAgICAgICAgIGxvZ2luTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuYXV0aG9yaXplZFVzZXJDaGVjaygpXHJcbiJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGlzYWJsZUZvcm1CdXR0b24iLCJmb3JtIiwiYnV0dG9uSW5Gb3JtIiwiZGlzYWJsZWQiLCJjaGVja1ZhbGlkaXR5IiwidG9nZ2xlSW5wdXRXYXJuaW5nIiwiaW5wdXRGaWVsZCIsInNlbGVjdG9yIiwid2FybmluZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInVzZXJGaW5kZXIiLCJlbWFpbFZhbHVlIiwidXNlcnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsImZpbmRJbmRleCIsImVtYWlsIiwiY2hlY2tVc2VyRGF0YSIsInBhc3N3b3JkVmFsdWUiLCJsb2dvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlSXRlbSIsInJlZGlyZWN0VG9Mb2dpbiIsInVuYXV0aG9yaXplZFVzZXJDaGVjayIsInNldFRpbWVvdXQiLCJhdXRob3JpemVkVXNlckNoZWNrIiwicmVkaXJlY3RUb0hvbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImRkIiwiZ2V0RGF0ZSIsIm1tIiwiZ2V0TW9udGgiLCJ5eSIsImdldEZ1bGxZZWFyIiwiZ2V0TWF4T2ZBcnJheSIsIm51bUFycmF5IiwiTWF0aCIsIm1heCIsImFwcGx5IiwiY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJkb21FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUNvbmZpcm1hdGlvbk1vZGFsIiwibW9kYWwiLCJtb2RhbEhlYWRlciIsIm1vZGFsQm9keSIsIm1vZGFsRm9vdGVyIiwiZGVsZXRlQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYXBwZW5kIiwibm90aWZpY2F0aW9uIiwidGV4dCIsIndpbmRvd05vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbkhlYWRlciIsImNsb3NlTm90aWZpY2F0aW9uIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJzaWduSW5Gb3JtIiwiZm9ybXMiLCJ1c2VyRW1haWwiLCJlbGVtZW50cyIsInVzZXJQYXNzd29yZCIsImxvZ2luQnV0dG9uIiwidGhpcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsb2dpbk1lc3NhZ2UiLCJ1c2VyRW1haWxWYWx1ZSIsInVzZXJQYXNzd29yZFZhbHVlIiwic2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=