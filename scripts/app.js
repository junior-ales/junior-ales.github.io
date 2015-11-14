!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},n={},r={},s={}.hasOwnProperty,i="components/",o=function(e,t){var n=0;t&&(0===t.indexOf(i)&&(n=i.length),t.indexOf("/",n)>0&&(t=t.substring(n,t.indexOf("/",n))));var s=r[e+"/index.js"]||r[t+"/deps/"+e+"/index.js"];return s?i+s.substring(0,s.length-".js".length):e},a=/^\.\.?(\/|$)/,l=function(e,t){for(var n,r=[],s=(a.test(t)?e+"/"+t:t).split("/"),i=0,o=s.length;o>i;i++)n=s[i],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},c=function(e){return e.split("/").slice(0,-1).join("/")},m=function(t){return function(n){var r=l(c(t),n);return e.require(r,t)}},u=function(e,t){var r={id:e,exports:{}};return n[e]=r,t(r.exports,m(e),r),r.exports},d=function(e,r){var i=l(e,".");if(null==r&&(r="/"),i=o(e,r),s.call(n,i))return n[i].exports;if(s.call(t,i))return u(i,t[i]);var a=l(i,"./index");if(s.call(n,a))return n[a].exports;if(s.call(t,a))return u(a,t[a]);throw new Error('Cannot find module "'+e+'" from "'+r+'"')};d.alias=function(e,t){r[t]=e},d.register=d.define=function(e,n){if("object"==typeof e)for(var r in e)s.call(e,r)&&(t[r]=e[r]);else t[e]=n},d.list=function(){var e=[];for(var n in t)s.call(t,n)&&e.push(n);return e},d.brunch=!0,d._cache=n,e.require=d}}(),require.register("views/components/emailSender",function(e,t,n){"use strict";function r(e){function t(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t.length>0&&(t+="&"),t+=encodeURI(n+"="+e[n]));return t}function n(e){var t=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;return t.test(e)}function r(t){return function(){200===t.status?(e.senderEmail.value="",e.senderMessage.value="",i.success()):i.error()}}var i=new s(e);this.send=function(s){if(s.preventDefault(),!e.senderMessage.value||!n(e.senderEmail.value))return void i.error("Please add a valid email and a message");var o=t({message:e.senderMessage.value,_replyto:e.senderEmail.value,_subject:"New Message from Cover Page",_gotcha:e.senderGotcha.value}),a=new XMLHttpRequest;a.open("POST","//formspree.io/edilson.ales.jr@gmail.com",!0),a.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01"),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),a.onload=r(a);try{a.send(o)}catch(l){i.error(),console.log(l)}}}var s=t("./notifier");n.exports=r}),require.register("views/components/homePage",function(e,t,n){"use strict";function r(e,t){this.senderGotcha=e.getElementById("sender-gotcha"),this.alertContentElem=e.getElementById("alert-content"),this.alertElem=e.getElementById("alert-box"),this.senderMessage=e.getElementById("sender-message"),this.senderEmailButton=e.getElementById("send-email-button"),this.senderEmail=e.getElementById("sender-email"),this.emailMeSection=e.getElementById("email-me"),this.emailLink=e.getElementById("email-link"),this.titleElem=e.getElementById("title"),this.socialMediaButtons=e.getElementById("social-media-buttons"),this.footerElem=e.getElementById("main-footer"),this.contentElem=e.getElementById("content"),this.viewLessElem=e.getElementById("view-less"),this.viewMoreElem=e.getElementById("view-more"),this.largestDimension=function(){var n=t,r="inner";return"innerWidth"in t||(r="client",n=e.documentElement||e.body),n[r+"Width"]>n[r+"Height"]?n[r+"Width"]:n[r+"Height"]}()}n.exports=r}),require.register("views/components/notifier",function(e,t,n){"use strict";function r(e){function t(){e.alertElem.style["z-index"]=15,e.alertElem.style.opacity=1,setTimeout(function(){e.alertElem.style.opacity=0,e.alertElem.style["z-index"]=0},5e3)}var n=new s(window.mixpanel);this.success=function(){e.alertContentElem.innerHTML="Email Sent Successfuly",e.alertElem.style["background-color"]="rgb(48, 93, 84)",t(),n.track("coverpage:email-sender:success")},this.error=function(r){e.alertContentElem.innerHTML=r||"Oops! Something went wrong.<br>Please try again",e.alertElem.style["background-color"]="rgb(242, 105, 125)",t();var s="coverpage:email-sender:failure:";s+=r?"fields":"exception",n.track(s)}}var s=t("./tracker");n.exports=r}),require.register("views/components/tracker",function(e,t,n){"use strict";function r(e){var t=function(t){e.track(t)},n=function(e){var t=this;return{as:function(n){e.onclick=function(){t.track(n)}}}};return{track:t,trackElem:n,trackElems:function(e){var t=this;return{as:function(n){return Array.prototype.map.call(e,function(e){t.trackElem(e).as(n)}),{andIds:function(){Array.prototype.map.call(e,function(e){t.trackElem(e).as(n+e.dataset.trackIdentifier)})}}}}}}}n.exports=r}),require.register("views/index",function(e,t,n){"use strict";function r(e,t,n){function r(){e.socialMediaButtons.style.display="none",e.titleElem.style.display="none",e.footerElem.style.display="none",e.contentElem.style.position="initial",e.contentElem.style["-webkit-transform"]="translateY(0)",e.contentElem.style["-moz-transform"]="translateY(0)",e.contentElem.style["-ms-transform"]="translateY(0)",e.contentElem.style["-o-transform"]="translateY(0)",e.contentElem.style.transform="translateY(0)",setTimeout(function(){e.viewLessElem.style.display="block"},550)}function s(){e.socialMediaButtons.style.display=null,e.titleElem.style.display=null,e.contentElem.style["-webkit-transform"]="translateY("+e.largestDimension+"px)",e.contentElem.style["-moz-transform"]="translateY("+e.largestDimension+"px)",e.contentElem.style["-ms-transform"]="translateY("+e.largestDimension+"px)",e.contentElem.style["-o-transform"]="translateY("+e.largestDimension+"px)",e.contentElem.style.transform="translateY("+e.largestDimension+"px)",e.contentElem.style.position="fixed",e.viewLessElem.style.display="none",e.footerElem.style.display=null}function i(e,t){return function(){n.track(e),t.apply(this,arguments)}}function o(){r(),setTimeout(function(){e.emailMeSection.scrollIntoView()},550)}function a(){e.viewLessElem.style.opacity=1}function l(){e.viewLessElem.style.opacity=.2}e.viewMoreElem.onclick=i("coverpage:expand-details",r),e.viewLessElem.onclick=i("coverpage:collapse-details",s),e.emailLink.onclick=i("coverpage:header:email",o),e.senderEmail.onfocus=l,e.senderMessage.onfocus=l,e.senderEmail.onblur=a,e.senderMessage.onblur=a,e.senderEmailButton.onclick=i("coverpage:email-sender:send",t.send),function(){var e=document.querySelectorAll("*[data-track-identifier]");n.trackElems(e).as("coverpage:").andIds()}()}function s(e){e.contentElem.style["-webkit-transform"]="translateY("+e.largestDimension+"px)",e.contentElem.style["-moz-transform"]="translateY("+e.largestDimension+"px)",e.contentElem.style["-ms-transform"]="translateY("+e.largestDimension+"px)",e.contentElem.style["-o-transform"]="translateY("+e.largestDimension+"px)",e.contentElem.style.transform="translateY("+e.largestDimension+"px)",setTimeout(function(){e.contentElem.style.visibility="visible"},550)}var i=t("./components/homePage"),o=t("./components/emailSender"),a=t("./components/tracker"),l={init:function(){document.addEventListener("DOMContentLoaded",function(){var e=new i(document,window),t=new o(e),n=new a(window.mixpanel);r(e,t,n),s(e),n.track("coverpage:visit")})}};n.exports=l});