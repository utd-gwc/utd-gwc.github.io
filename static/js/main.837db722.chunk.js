(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/gwc2020_website_logo_nobg.63e40a6a.png"},47:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),o=a(9),i=a(76),u=a(75),m=a(61),s=a(16),d=a(77),f=a(2),g=a(81),h=a(32),p=a.n(h);function E(e){var t=e.scrollTop,a=f.a.theme.global.size.xsmall.match(/\d+/)[0],n=f.a.theme.global.size.xxsmall.match(/\d+/)[0];return r.a.createElement(s.a,{align:"center",height:Math.max(a-t,n)+"px"},r.a.createElement(g.a,{src:p.a,fit:"contain",fill:"vertical",a11yTitle:"UTD Girls Who Code logo"}))}function b(e){var t=e.innerRef,a=e.children;return r.a.createElement(s.a,{as:"body",overflow:"auto",ref:t,pad:"medium"},a)}var v=a(24),w=a.n(v),F=a(46),j=r.a.createElement("svg",{version:"1.1",viewBox:"0 0 32 32",width:"28px",height:"28px",fill:"#F794B9"},r.a.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),r.a.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"0.8s",repeatCount:"indefinite"}))),k=function(){return r.a.createElement(s.a,{align:"center",justify:"center"},j)},x=a(70),y=a(71),C=a(82),O=a(72),B=a(79),S=a(80),D=a(78),A=a(73),T=a(74);function z(e){return r.a.createElement(x.a,{height:"medium",margin:"medium",width:"medium",background:"accent-2",elevation:"medium"},r.a.createElement(y.a,{pad:"small",margin:"none",wrap:!0},r.a.createElement(C.a,{level:"3",margin:"none"},e.title),r.a.createElement(C.a,{level:"4",margin:"none"},e.date)),r.a.createElement(O.a,{overflow:"auto",pad:"medium"},r.a.createElement(B.a,{margin:"none"},e.description)),r.a.createElement(S.a,{pad:{horizontal:"small"},background:"accent-3"},r.a.createElement(D.a,{icon:r.a.createElement(A.a,{color:"brand"}),hoverIndicator:!0}),r.a.createElement(D.a,{icon:r.a.createElement(T.a,{color:"brand"}),hoverIndicator:!0})))}function L(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),u=i[0],m=i[1];function d(){return(d=Object(F.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,fetch("https://utd-gwc-api.herokuapp.com/api/events",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,c(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,m(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),u||null==a?r.a.createElement(k,null):r.a.createElement(s.a,{fill:"horizontal",direction:"row-responsive",justify:"center"},a.map((function(e){var t={dateString:null,timeString:null};if(null!=e.date){var a=new Date(e.date);t.dateString=a.toLocaleDateString(),t.timeString=a.toLocaleTimeString()}return r.a.createElement(z,{title:e.title,description:e.description,date:t.dateString})})))}var M=a(12),R={font:{family:"Roboto",size:"18px",height:"20px"}},I={checkBox:{border:{color:{dark:"neutral-1",light:"neutral-1"}},hover:{border:{color:{dark:"white",light:"brand"}}},toggle:{background:{dark:"neutral-1",light:"neutral-1"}}}},W=Object(M.a)({global:Object(M.a)({colors:{brand:"#F794B9","accent-1":"#002364","neutral-1":"#1B3A5D","accent-2":"#FFFFFF","neutral-2":"#ECEDF8","accent-3":"#FCC0C5","neutral-3":"#B67186","neutral-4":"#B84C65",active:"accent-2",focus:"neutral-1",white:"#ECEDF8",background:"#ECEDF8"}},R)},I),_=Object(M.a)({global:Object(M.a)({colors:{brand:"#002364","accent-1":"#F794B9","neutral-1":"#B84C65","accent-2":"#FCC0C5","neutral-2":"#B67186","accent-3":"#FFFFFF","neutral-3":"#ECEDF8","neutral-4":"#1B3A5D",active:"accent-2",focus:"neutral-1",white:"#ECEDF8",background:"#1B3A5D"}},R)},I);var G=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(document.body.scrollTop),f=Object(o.a)(l,2),g=f[0],h=f[1],p=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var a=t.current;return a.addEventListener("scroll",e),function(){a.removeEventListener("scroll",e)}}),[]),t}((function(e){h(e.target.scrollTop)}));return r.a.createElement(i.a,{theme:a?W:_,full:!0},r.a.createElement(u.a,null,r.a.createElement(m.a,{pad:{left:"medium",right:"small",vertical:"small"},elevation:"xsmall",background:0===g?"background":"neutral-3",style:{transition:"background-color .4s"}},r.a.createElement(E,{scrollTop:g}),r.a.createElement(s.a,{justify:"between",fill:"horizontal",align:"end"},r.a.createElement(d.a,{toggle:!0,onChange:function(){c(!a)}}))),r.a.createElement(b,{innerRef:p},r.a.createElement(L,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.837db722.chunk.js.map