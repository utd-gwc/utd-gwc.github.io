(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/gwc2020_website_logo_nobg.63e40a6a.png"},52:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(35),c=n.n(o),l=n(7),i=n(87),u=n(86),m=n(72),s=n(18),d=n(89),p=n(2),g=n(90),f=n(36),h=n.n(f);function E(e){var t=e.scrollTop,n=p.a.theme.global.size.xsmall.match(/\d+/)[0],a=p.a.theme.global.size.xxsmall.match(/\d+/)[0];return r.a.createElement(s.a,{align:"center",height:Math.max(n-t,a)+"px",style:{transition:"height .05s ease"}},r.a.createElement(g.a,{src:h.a,fit:"contain",fill:"vertical",a11yTitle:"UTD Girls Who Code logo"}))}function b(e){var t=e.innerRef,n=e.children;return r.a.createElement(s.a,{as:"body",overflow:"auto",ref:t,pad:"medium"},n)}var v=n(28),w=n.n(v),x=n(50),k=r.a.createElement("svg",{version:"1.1",viewBox:"0 0 32 32",width:"28px",height:"28px",fill:"#F794B9"},r.a.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),r.a.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"0.8s",repeatCount:"indefinite"}))),j=function(){return r.a.createElement(s.a,{align:"center",justify:"center"},k)},F=n(81),y=n(82),C=n(91),O=n(83),B=n(92),S=n(93),D=n(88),A=n(84),z=n(85);function T(e){return r.a.createElement(F.a,{height:"medium",margin:"medium",width:"medium",background:"card-background",elevation:"medium"},r.a.createElement(y.a,{pad:"small",margin:"none",wrap:!0},r.a.createElement(C.a,{level:"3",margin:"none"},e.title),r.a.createElement(C.a,{level:"4",margin:"none"},e.date)),r.a.createElement(O.a,{overflow:"auto",pad:"medium"},r.a.createElement(B.a,{margin:"none"},e.description)),r.a.createElement(S.a,{pad:{horizontal:"small"},background:"card-footer"},r.a.createElement(D.a,{icon:r.a.createElement(A.a,{color:"icon-color"}),hoverIndicator:!0}),r.a.createElement(D.a,{icon:r.a.createElement(z.a,{color:"icon-color"}),hoverIndicator:!0})))}var L=n(51),R=n(17),W=function(e){var t=e.cols,n=e.children,r=e.fullRow,o=a.useState(window.innerWidth<1920?window.innerWidth<1080?6:4:3),c=Object(l.a)(o,2),i=c[0],u=c[1];a.useEffect((function(){function e(){u(window.outerWidth<1080?6:window.outerWidth>1968?3:4)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var m=12/t,s=Object(L.chunk)(a.Children.toArray(n),r?i:t);return a.createElement(R.Grid,null,s.map((function(e){return a.createElement(R.Row,null,e.map((function(e){return a.createElement(R.Col,{sm:12,md:r?i:m},e)})))})))};function M(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),i=Object(l.a)(c,2),u=i[0],m=i[1];function d(){return(d=Object(x.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,fetch("https://utd-gwc-api.herokuapp.com/api/events",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,o(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,m(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),r.a.createElement(s.a,{fill:"horizontal",direction:"row-responsive",justify:"center"},u||null==n?r.a.createElement(j,null):r.a.createElement(W,{fullRow:!0},n.map((function(e){var t={dateString:null,timeString:null};if(null!=e.date){var n=new Date(e.date);t.dateString=n.toLocaleDateString(),t.timeString=n.toLocaleTimeString()}return r.a.createElement(T,{title:e.title,description:e.description,date:t.dateString})}))))}var G=n(13),I={font:{family:"Roboto",size:"18px",height:"20px"}},_={checkBox:{border:{color:{dark:"neutral-1",light:"neutral-1"}},hover:{border:{color:{dark:"white",light:"brand"}}},toggle:{background:{dark:"neutral-1",light:"neutral-1"}}}},J={elevation:{light:{none:"none",xsmall:"0px 1px 2px rgba(27, 58, 93, 0.2)",small:"0px 2px 4px rgba(27, 58, 93, 0.2)",medium:"0px 4px 8px rgba(27, 58, 93, 0.2)",large:"0px 8px 16px rgba(27, 58, 93, 0.2)",xlarge:"0px 12px 24px rgba(27, 58, 93, 0.2)"},dark:{none:"none",xsmall:"none",small:"none",medium:"none",large:"none",xlarge:"none"}}},N=Object(G.a)({global:Object(G.a)({colors:{brand:"#F794B9","accent-1":"#002364","neutral-1":"#1B3A5D","accent-2":"#FFFFFF","neutral-2":"#ECEDF8","accent-3":"#FCC0C5","neutral-3":"#B67186","neutral-4":"#B84C65",active:"accent-2",focus:"neutral-1",white:"#ECEDF8",background:"#ECEDF8","card-background":"accent-2","card-footer":"accent-3","icon-color":"neutral-3"}},I,{},J)},_),U=Object(G.a)({global:Object(G.a)({colors:{brand:"#002364","accent-1":"#F794B9","neutral-1":"#B84C65","accent-2":"#FCC0C5","neutral-2":"#B67186","accent-3":"#FFFFFF","neutral-3":"#ECEDF8","neutral-4":"#1B3A5D",active:"neutral-1",focus:"neutral-1",white:"#ECEDF8",background:"#1B3A5D","card-background":"#224975","card-footer":"accent-3","icon-color":"brand"}},I,{},J)},_);var $=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(document.body.scrollTop),p=Object(l.a)(c,2),g=p[0],f=p[1],h=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var n=t.current;return n.addEventListener("scroll",e),function(){n.removeEventListener("scroll",e)}}),[e]),t}((function(e){f(e.target.scrollTop)}));return r.a.createElement(i.a,{theme:n?N:U,full:!0},r.a.createElement(u.a,null,r.a.createElement(m.a,{pad:{left:"medium",right:"small",vertical:"small"},elevation:"xsmall",background:0===g?"background":"neutral-3",style:{transition:"background-color .4s"}},r.a.createElement(E,{scrollTop:g}),r.a.createElement(s.a,{justify:"between",fill:"horizontal",align:"end"},r.a.createElement(d.a,{toggle:!0,onChange:function(){o(!n)}}))),r.a.createElement(b,{innerRef:h},r.a.createElement(M,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.08941f63.chunk.js.map