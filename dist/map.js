/*! For license information please see map.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/js/utils.js":(e,t,o)=>{o.r(t),o.d(t,{authorizedUserCheck:()=>u,checkUserData:()=>i,createConfirmationModal:()=>h,createSpecifiedDomElement:()=>f,disableFormButton:()=>a,formatDate:()=>m,getMaxOfArray:()=>g,logout:()=>c,notification:()=>S,redirectToHome:()=>s,toggleInputWarning:()=>r,unauthorizedUserCheck:()=>d,userFinder:()=>l});const n=document.querySelector("body");let a=function(e,t){t.disabled=!e.checkValidity()},r=function(e,t){let o=document.querySelector(t).querySelector(".text-warning");e.checkValidity()?o.classList.remove("show"):o.classList.add("show")};const l=function(e){let t=JSON.parse(localStorage.getItem("users")),o=t.findIndex((t=>t.email===e));return-1===o?-1:t[o]};let i=function(e,t){let o=l(e);if(-1!==o)return o.password===t},c=function(){document.querySelector(".btn-logout").addEventListener("click",(function(){localStorage.removeItem("active-user"),p()}))},d=function(){setTimeout((function(){null===localStorage.getItem("active-user")&&p()}),1)},u=function(){setTimeout((function(){null!==localStorage.getItem("active-user")&&s()}),1)},s=function(){window.location.replace("./home.html")},p=function(){window.location.replace("./index.html")};function m(e){let t=e.getDate();t<10&&(t="0"+t);let o=e.getMonth()+1;o<10&&(o="0"+o);let n=e.getFullYear();return n<10&&(n="0"+n),t+"."+o+"."+n}function g(e){return Math.max.apply(null,e)}function f(e,t,o){let n=document.createElement(e);return n.classList.add(t),n.innerHTML=o,n}function h(){let e=f("div","modal",""),t=f("h4","modal-header","Confirmation"),o=f("p","modal-body","Are you sure you want to delete?"),a=f("div","modal-footer",""),r=f("button","btn","Delete");r.classList.add("btn-danger","btn__delete");let l=f("button","btn","Cancel");l.classList.add("btn-secondary","btn__cancel"),e.append(t),e.append(o),e.append(a),a.append(r),a.append(l),n.append(e)}function S(e){let t=document.createElement("div");t.classList.add("badge");let o=f("h4","notification__header",e);t.append(o);let a=document.createElement("button");t.append(a),a.classList.add("btn","btn-close"),a.addEventListener("click",(function(){t.remove()})),n.append(t)}}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{o.r(n);var e=o("./src/js/utils.js");(0,e.logout)(),window.initMap=function(){let e=[["Shop №1",53.93187753029889,27.65008890420089,1],["Shop №2",53.93115283699134,27.63719370707769,2],["Shop №3",53.936573744297746,27.61321361156399,3],["Shop №4",53.936169887814074,27.595745797123858,4],["Shop №5",53.92878192988065,27.582627163589375,5],["Shop №6",53.91315886061578,27.60538140828371,6],["Shop №7",53.89031275353563,27.609349990830715,7],["Shop №8",53.87872782790282,27.593861507360938,8],["Shop №9",53.86319875580873,27.567809076457632,9],["Shop №10",53.86628169775165,27.508384519642636,10],["Shop №11",53.868790726518284,27.479745119858688,11],["Shop №12",53.86291071680432,27.440889784373674,12],["Shop №13",53.887041648286086,27.43727931494765,13],["Shop №14",53.91571766075251,27.47018445080508,14],["Shop №15",53.93864307880945,27.48552005508541,15]];const t=new google.maps.Map(document.getElementById("googleMap"),{zoom:12,center:new google.maps.LatLng(53.90089008939261,27.55758402318272)}),o=new google.maps.InfoWindow;let n,a;for(a=0;a<e.length;a++)n=new google.maps.Marker({position:new google.maps.LatLng(e[a][1],e[a][2]),map:t}),google.maps.event.addListener(n,"click",function(n,a){return function(){o.setContent(e[a][0]),o.open(t,n)}}(n,a))},(0,e.unauthorizedUserCheck)()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBWSxrQkFBbUIsbUJBQW9CLElBQ3BELENBQUMsV0FBWSxtQkFBb0IsbUJBQW9CLElBQ3JELENBQUMsV0FBWSxrQkFBbUIsbUJBQW9CLElBQ3BELENBQUMsV0FBWSxtQkFBb0Isa0JBQW1CLElBQ3BELENBQUMsV0FBWSxrQkFBbUIsa0JBQW1CLElBQ25ELENBQUMsV0FBWSxrQkFBbUIsa0JBQW1CLEtBRXZELE1BQU1DLEVBQU0sSUFBSUMsT0FBT0MsS0FBS0MsSUFBSW5HLFNBQVNvRyxlQUFlLGFBQWMsQ0FDbEVDLEtBQU0sR0FDTkMsT0FBUSxJQUFJTCxPQUFPQyxLQUFLSyxPQUFPLGtCQUFtQixxQkFHaERDLEVBQWEsSUFBSVAsT0FBT0MsS0FBS08sV0FFbkMsSUFBSUMsRUFBUUMsRUFFWixJQUFLQSxFQUFJLEVBQUdBLEVBQUlaLEVBQVVhLE9BQVFELElBQzlCRCxFQUFTLElBQUlULE9BQU9DLEtBQUtXLE9BQU8sQ0FDNUJDLFNBQVUsSUFBSWIsT0FBT0MsS0FBS0ssT0FBT1IsRUFBVVksR0FBRyxHQUFJWixFQUFVWSxHQUFHLElBQy9EWCxJQUFLQSxJQUdUQyxPQUFPQyxLQUFLYSxNQUFNQyxZQUFZTixFQUFRLFFBQVUsU0FBU0EsRUFBUUMsR0FDN0QsT0FBTyxXQUNISCxFQUFXUyxXQUFXbEIsRUFBVVksR0FBRyxJQUNuQ0gsRUFBV1UsS0FBS2xCLEVBQUtVLElBSG1CLENBSzdDQSxFQUFRQyxNQU1uQjdFLEVBQUFBLEVBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXYtc3RvcmUvLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hdi1zdG9yZS8uL3NyYy9qcy9tYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbmxldCBkaXNhYmxlRm9ybUJ1dHRvbiA9IGZ1bmN0aW9uIChmb3JtLCBidXR0b25JbkZvcm0pIHtcclxuICAgIGJ1dHRvbkluRm9ybS5kaXNhYmxlZCA9ICFmb3JtLmNoZWNrVmFsaWRpdHkoKTtcclxufVxyXG5cclxubGV0IHRvZ2dsZUlucHV0V2FybmluZyA9IGZ1bmN0aW9uIChpbnB1dEZpZWxkLCBzZWxlY3Rvcikge1xyXG4gICAgbGV0IGZpbmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXHJcbiAgICBsZXQgd2FybmluZyA9IGZpbmRJbnB1dC5xdWVyeVNlbGVjdG9yKCcudGV4dC13YXJuaW5nJyk7XHJcbiAgICBpZiAoIWlucHV0RmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgd2FybmluZy5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2FybmluZy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdXNlckxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcnMnKSk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZXJGaW5kZXIgPSBmdW5jdGlvbiAoZW1haWxWYWx1ZSkge1xyXG4gICAgbGV0IHVzZXJzID0gdXNlckxpc3QoKTtcclxuICAgIGxldCB1c2VyID0gdXNlcnMuZmluZEluZGV4KHVzZXIgPT4gdXNlci5lbWFpbCA9PT0gZW1haWxWYWx1ZSk7XHJcbiAgICBpZiAodXNlciA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gLTFcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJzW3VzZXJdO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY2hlY2tVc2VyRGF0YSA9IGZ1bmN0aW9uIChlbWFpbFZhbHVlLCBwYXNzd29yZFZhbHVlKSB7XHJcbiAgICBsZXQgdXNlciA9IHVzZXJGaW5kZXIoZW1haWxWYWx1ZSk7XHJcbiAgICBpZiAodXNlciAhPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gdXNlclsncGFzc3dvcmQnXSA9PT0gcGFzc3dvcmRWYWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBsb2dvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWxvZ291dCcpO1xyXG4gICAgbG9nb3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY3RpdmUtdXNlcicpO1xyXG4gICAgICAgIHJlZGlyZWN0VG9Mb2dpbigpXHJcbiAgICB9KVxyXG59XHJcblxyXG5sZXQgdW5hdXRob3JpemVkVXNlckNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtdXNlcicpXHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZWRpcmVjdFRvTG9naW4oKVxyXG4gICAgICAgIH1cclxuICAgIH0sIDEpXHJcbn1cclxuXHJcbmxldCBhdXRob3JpemVkVXNlckNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtdXNlcicpXHJcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZWRpcmVjdFRvSG9tZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgMSlcclxufVxyXG5cclxubGV0IHJlZGlyZWN0VG9Ib21lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy4vaG9tZS5odG1sJylcclxufVxyXG5cclxubGV0IHJlZGlyZWN0VG9Mb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcuL2luZGV4Lmh0bWwnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgIGxldCBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgaWYgKGRkIDwgMTApIGRkID0gJzAnICsgZGQ7XHJcblxyXG4gICAgbGV0IG1tID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGlmIChtbSA8IDEwKSBtbSA9ICcwJyArIG1tO1xyXG5cclxuICAgIGxldCB5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGlmICh5eSA8IDEwKSB5eSA9ICcwJyArIHl5O1xyXG5cclxuICAgIHJldHVybiBkZCArICcuJyArIG1tICsgJy4nICsgeXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1heE9mQXJyYXkobnVtQXJyYXkpIHtcclxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBudW1BcnJheSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQodGFnTmFtZSwgY2xhc3NOYW1lLCBpbm5lckhUTUwpIHtcclxuICAgIGxldCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XHJcbiAgICByZXR1cm4gZG9tRWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb25maXJtYXRpb25Nb2RhbCgpIHtcclxuICAgIGxldCBtb2RhbCA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ2RpdicsICdtb2RhbCcsICcnKTtcclxuICAgIGxldCBtb2RhbEhlYWRlciA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ2g0JywgJ21vZGFsLWhlYWRlcicsICdDb25maXJtYXRpb24nLCAnJyk7XHJcbiAgICBsZXQgbW9kYWxCb2R5ID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgncCcsICdtb2RhbC1ib2R5JywgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/JylcclxuICAgIGxldCBtb2RhbEZvb3RlciA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ2RpdicsICdtb2RhbC1mb290ZXInLCAnJyk7XHJcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgnYnV0dG9uJywgJ2J0bicsICdEZWxldGUnKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tZGFuZ2VyJywgJ2J0bl9fZGVsZXRlJylcclxuICAgIGxldCBjYW5jZWxCdXR0b24gPSBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KCdidXR0b24nLCAnYnRuJywgJ0NhbmNlbCcpO1xyXG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1zZWNvbmRhcnknLCAnYnRuX19jYW5jZWwnKTtcclxuICAgIG1vZGFsLmFwcGVuZChtb2RhbEhlYWRlcik7XHJcbiAgICBtb2RhbC5hcHBlbmQobW9kYWxCb2R5KTtcclxuICAgIG1vZGFsLmFwcGVuZChtb2RhbEZvb3Rlcik7XHJcbiAgICBtb2RhbEZvb3Rlci5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcclxuICAgIG1vZGFsRm9vdGVyLmFwcGVuZChjYW5jZWxCdXR0b24pXHJcbiAgICBib2R5LmFwcGVuZChtb2RhbClcclxufVxyXG5cclxuZnVuY3Rpb24gbm90aWZpY2F0aW9uKHRleHQpIHtcclxuICAgIGxldCB3aW5kb3dOb3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdpbmRvd05vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdiYWRnZScpO1xyXG4gICAgbGV0IG5vdGlmaWNhdGlvbkhlYWRlciA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ2g0JywgJ25vdGlmaWNhdGlvbl9faGVhZGVyJywgdGV4dCk7XHJcbiAgICB3aW5kb3dOb3RpZmljYXRpb24uYXBwZW5kKG5vdGlmaWNhdGlvbkhlYWRlcik7XHJcbiAgICBsZXQgY2xvc2VOb3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHdpbmRvd05vdGlmaWNhdGlvbi5hcHBlbmQoY2xvc2VOb3RpZmljYXRpb24pXHJcbiAgICBjbG9zZU5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWNsb3NlJyk7XHJcbiAgICBjbG9zZU5vdGlmaWNhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3dOb3RpZmljYXRpb24ucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gICAgYm9keS5hcHBlbmQod2luZG93Tm90aWZpY2F0aW9uKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZGlzYWJsZUZvcm1CdXR0b24sXHJcbiAgICB0b2dnbGVJbnB1dFdhcm5pbmcsXHJcbiAgICBjaGVja1VzZXJEYXRhLFxyXG4gICAgdXNlckZpbmRlcixcclxuICAgIGxvZ291dCxcclxuICAgIHVuYXV0aG9yaXplZFVzZXJDaGVjayxcclxuICAgIGF1dGhvcml6ZWRVc2VyQ2hlY2ssXHJcbiAgICByZWRpcmVjdFRvSG9tZSxcclxuICAgIGZvcm1hdERhdGUsXHJcbiAgICBnZXRNYXhPZkFycmF5LFxyXG4gICAgY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCxcclxuICAgIGNyZWF0ZUNvbmZpcm1hdGlvbk1vZGFsLFxyXG4gICAgbm90aWZpY2F0aW9uXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gICAgbG9nb3V0LFxyXG4gICAgdW5hdXRob3JpemVkVXNlckNoZWNrLFxyXG59IGZyb20gJy4vdXRpbHMuanMnXHJcbmxvZ291dCgpXHJcblxyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgbGV0IGxvY2F0aW9ucyA9IFtcclxuICAgICAgICBbJ1Nob3Ag4oSWMScsIDUzLjkzMTg3NzUzMDI5ODg5LCAyNy42NTAwODg5MDQyMDA4OSwgMV0sXHJcbiAgICAgICAgWydTaG9wIOKEljInLCA1My45MzExNTI4MzY5OTEzNCwgMjcuNjM3MTkzNzA3MDc3NjksIDJdLFxyXG4gICAgICAgIFsnU2hvcCDihJYzJywgNTMuOTM2NTczNzQ0Mjk3NzQ2LCAyNy42MTMyMTM2MTE1NjM5OSwgM10sXHJcbiAgICAgICAgWydTaG9wIOKEljQnLCA1My45MzYxNjk4ODc4MTQwNzQsIDI3LjU5NTc0NTc5NzEyMzg1OCwgNF0sXHJcbiAgICAgICAgWydTaG9wIOKEljUnLCA1My45Mjg3ODE5Mjk4ODA2NSwgMjcuNTgyNjI3MTYzNTg5Mzc1LCA1XSxcclxuICAgICAgICBbJ1Nob3Ag4oSWNicsIDUzLjkxMzE1ODg2MDYxNTc4LCAyNy42MDUzODE0MDgyODM3MSwgNl0sXHJcbiAgICAgICAgWydTaG9wIOKEljcnLCA1My44OTAzMTI3NTM1MzU2MywgMjcuNjA5MzQ5OTkwODMwNzE1LCA3XSxcclxuICAgICAgICBbJ1Nob3Ag4oSWOCcsIDUzLjg3ODcyNzgyNzkwMjgyLCAyNy41OTM4NjE1MDczNjA5MzgsIDhdLFxyXG4gICAgICAgIFsnU2hvcCDihJY5JywgNTMuODYzMTk4NzU1ODA4NzMsIDI3LjU2NzgwOTA3NjQ1NzYzMiwgOV0sXHJcbiAgICAgICAgWydTaG9wIOKEljEwJywgNTMuODY2MjgxNjk3NzUxNjUsIDI3LjUwODM4NDUxOTY0MjYzNiwgMTBdLFxyXG4gICAgICAgIFsnU2hvcCDihJYxMScsIDUzLjg2ODc5MDcyNjUxODI4NCwgMjcuNDc5NzQ1MTE5ODU4Njg4LCAxMV0sXHJcbiAgICAgICAgWydTaG9wIOKEljEyJywgNTMuODYyOTEwNzE2ODA0MzIsIDI3LjQ0MDg4OTc4NDM3MzY3NCwgMTJdLFxyXG4gICAgICAgIFsnU2hvcCDihJYxMycsIDUzLjg4NzA0MTY0ODI4NjA4NiwgMjcuNDM3Mjc5MzE0OTQ3NjUsIDEzXSxcclxuICAgICAgICBbJ1Nob3Ag4oSWMTQnLCA1My45MTU3MTc2NjA3NTI1MSwgMjcuNDcwMTg0NDUwODA1MDgsIDE0XSxcclxuICAgICAgICBbJ1Nob3Ag4oSWMTUnLCA1My45Mzg2NDMwNzg4MDk0NSwgMjcuNDg1NTIwMDU1MDg1NDEsIDE1XSxcclxuICAgIF07XHJcbiAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29nbGVNYXAnKSwge1xyXG4gICAgICAgIHpvb206IDEyLFxyXG4gICAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1My45MDA4OTAwODkzOTI2MSwgMjcuNTU3NTg0MDIzMTgyNzIpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93O1xyXG5cclxuICAgIGxldCBtYXJrZXIsIGk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsb2NhdGlvbnNbaV1bMV0sIGxvY2F0aW9uc1tpXVsyXSksXHJcbiAgICAgICAgICAgIG1hcDogbWFwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgKGZ1bmN0aW9uKG1hcmtlciwgaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvd2luZG93LnNldENvbnRlbnQobG9jYXRpb25zW2ldWzBdKTtcclxuICAgICAgICAgICAgICAgIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KShtYXJrZXIsIGkpKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmluaXRNYXAgPSBpbml0TWFwO1xyXG5cclxudW5hdXRob3JpemVkVXNlckNoZWNrKClcclxuIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNhYmxlRm9ybUJ1dHRvbiIsImZvcm0iLCJidXR0b25JbkZvcm0iLCJkaXNhYmxlZCIsImNoZWNrVmFsaWRpdHkiLCJ0b2dnbGVJbnB1dFdhcm5pbmciLCJpbnB1dEZpZWxkIiwic2VsZWN0b3IiLCJ3YXJuaW5nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidXNlckZpbmRlciIsImVtYWlsVmFsdWUiLCJ1c2VycyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyIiwiZmluZEluZGV4IiwiZW1haWwiLCJjaGVja1VzZXJEYXRhIiwicGFzc3dvcmRWYWx1ZSIsImxvZ291dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVJdGVtIiwicmVkaXJlY3RUb0xvZ2luIiwidW5hdXRob3JpemVkVXNlckNoZWNrIiwic2V0VGltZW91dCIsImF1dGhvcml6ZWRVc2VyQ2hlY2siLCJyZWRpcmVjdFRvSG9tZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImZvcm1hdERhdGUiLCJkYXRlIiwiZGQiLCJnZXREYXRlIiwibW0iLCJnZXRNb250aCIsInl5IiwiZ2V0RnVsbFllYXIiLCJnZXRNYXhPZkFycmF5IiwibnVtQXJyYXkiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50IiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImRvbUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlQ29uZmlybWF0aW9uTW9kYWwiLCJtb2RhbCIsIm1vZGFsSGVhZGVyIiwibW9kYWxCb2R5IiwibW9kYWxGb290ZXIiLCJkZWxldGVCdXR0b24iLCJjYW5jZWxCdXR0b24iLCJhcHBlbmQiLCJub3RpZmljYXRpb24iLCJ0ZXh0Iiwid2luZG93Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uSGVhZGVyIiwiY2xvc2VOb3RpZmljYXRpb24iLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsImluaXRNYXAiLCJsb2NhdGlvbnMiLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZ2V0RWxlbWVudEJ5SWQiLCJ6b29tIiwiY2VudGVyIiwiTGF0TG5nIiwiaW5mb3dpbmRvdyIsIkluZm9XaW5kb3ciLCJtYXJrZXIiLCJpIiwibGVuZ3RoIiwiTWFya2VyIiwicG9zaXRpb24iLCJldmVudCIsImFkZExpc3RlbmVyIiwic2V0Q29udGVudCIsIm9wZW4iXSwic291cmNlUm9vdCI6IiJ9