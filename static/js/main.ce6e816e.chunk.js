(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/gwc2020_website_logo_nobg.63e40a6a.png"},38:function(e,t,a){e.exports=a.p+"static/media/gwc2020_DARK_website_logo_nobg.211ab73e.png"},54:function(e,t,a){e.exports=a.p+"static/media/Microsoft_Teams-Logo.wine.80ccd59e.svg"},56:function(e,t,a){e.exports=a(76)},66:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),c=a.n(l),o=a(5),i=a(17),u=a(98),m=a(97),s=a(77),d=a(100),E=a(78),p=a(102),f=a(103),g=a(2),h=a(85),v=a(101),b=a(18),y=a.n(b),w=a(38),x=a.n(w);function k(e){var t=e.scrollTop,a=e.theme,n=g.a.theme.global.size.xsmall.match(/\d+/)[0],l=g.a.theme.global.size.xxsmall.match(/\d+/)[0],c=r.a.useContext(h.a),o="dark"===a&&0===t;return r.a.createElement(i.a,{align:"center",height:Math.max(n-t,l)+"px",style:{transition:"height .05s ease"},pad:{left:"small"===c?"large":"none"}},r.a.createElement(v.a,{fill:"vertical"},r.a.createElement(p.a,{src:y.a,style:{transition:"opacity 0.2s ease-out",opacity:o?0:100},fit:"contain",fill:"vertical",a11yTitle:"UTD Girls Who Code logo"}),r.a.createElement(p.a,{src:x.a,style:{transition:"opacity 0.2s ease-in",opacity:o?100:0},fit:"contain",fill:"vertical",a11yTitle:"UTD Girls Who Code logo"})))}var j=a(13);a(66);function O(e){var t=e.children,a=e.style,l=Object(n.useState)(!1),c=Object(o.a)(l,2),i=c[0],u=c[1],m=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&(u(!0),e.unobserve(m.current))}));return e.observe(m.current),function(){return e.unobserve(m.current)}}),[]),r.a.createElement("div",{ref:m,className:"fade-in-section ".concat(i?"is-visible":""),style:Object(j.a)({},a)},t)}function T(e){var t=e.title,a=e.children;return r.a.createElement(i.a,{flex:"grow",margin:{horizontal:"medium",bottom:"small"}},r.a.createElement(O,null,r.a.createElement(f.a,{level:"2",margin:"none"},t)),r.a.createElement(O,null,a))}var S=a(10),C=a.n(S),D=a(15),F=r.a.createElement("svg",{version:"1.1",viewBox:"0 0 32 32",width:"28px",height:"28px",fill:"#F794B9"},r.a.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),r.a.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"0.8s",repeatCount:"indefinite"}))),A=function(){return r.a.createElement(i.a,{align:"center",justify:"center"},F)},B=a(87),_=a(88),I=a(89),W=a(104),z=a(90),G=a(99),L=a(91),R=a(92);function U(e){return r.a.createElement(B.a,{height:"medium",margin:"medium",width:"medium",background:"card-background",elevation:"medium"},r.a.createElement(_.a,{pad:"small",margin:"none",wrap:!0},r.a.createElement(f.a,{level:"3",margin:"none"},e.title),r.a.createElement(f.a,{level:"4",margin:"none"},e.date)),r.a.createElement(I.a,{overflow:"auto",pad:"medium"},r.a.createElement(W.a,{margin:"none"},e.description)),r.a.createElement(z.a,{pad:{horizontal:"small"},background:"card-footer"},r.a.createElement(G.a,{icon:r.a.createElement(L.a,{color:"icon-color"}),hoverIndicator:!0}),r.a.createElement(G.a,{icon:r.a.createElement(R.a,{color:"icon-color"}),hoverIndicator:!0})))}var M=a(52),N=a(21),J=function(e){var t=e.cols,a=e.children,r=e.fullRow,l=n.useState(window.innerWidth<1920?window.innerWidth<1080?6:4:3),c=Object(o.a)(l,2),i=c[0],u=c[1];n.useEffect((function(){function e(){u(window.outerWidth<1080?6:window.outerWidth>1968?3:4)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var m=12/t,s=Object(M.chunk)(n.Children.toArray(a),r?12/i:t);return n.createElement(N.Grid,null,s.map((function(e,t){return n.createElement(N.Row,{key:t},e.map((function(e,t){return n.createElement(N.Col,{key:t,sm:12,md:r?i:m},e)})))})))};function K(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),m=u[0],s=u[1];function d(){return(d=Object(D.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://utd-gwc-api.herokuapp.com/api/events/upcoming?sort=+date",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,l(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),r.a.createElement(i.a,{fill:!0,direction:"row-responsive",justify:"center"},m||null==a?r.a.createElement(A,null):r.a.createElement(J,{fullRow:!0},a.map((function(e){var t={dateString:null,timeString:null};if(null!=e.date){var a=new Date(e.date);t.dateString=a.toLocaleDateString(),t.timeString=a.toLocaleTimeString()}return r.a.createElement(U,{key:e.title,title:e.title,description:e.description,date:t.dateString})}))))}var H={font:{family:"Roboto",size:"18px",height:"20px"}},P={checkBox:{border:{color:{dark:"neutral-1",light:"neutral-1"}},hover:{border:{color:{dark:"white",light:"brand"}}},toggle:{background:{dark:"neutral-1",light:"neutral-1"}}}},$={elevation:{light:{none:"none",xsmall:"0px 1px 2px rgba(27, 58, 93, 0.2)",small:"0px 2px 4px rgba(27, 58, 93, 0.2)",medium:"0px 4px 8px rgba(27, 58, 93, 0.2)",large:"0px 8px 16px rgba(27, 58, 93, 0.2)",xlarge:"0px 12px 24px rgba(27, 58, 93, 0.2)"},dark:{none:"none",xsmall:"none",small:"none",medium:"none",large:"none",xlarge:"none"}}},q=Object(j.a)({global:Object(j.a)({colors:{brand:"#F794B9","accent-1":"#002364","neutral-1":"#1B3A5D","accent-2":"#FFFFFF","neutral-2":"#ECEDF8","accent-3":"#FCC0C5","neutral-3":"#B67186","neutral-4":"#B84C65",active:"accent-2",focus:"neutral-1",white:"#ECEDF8",background:"#ECEDF8","card-background":"accent-2","card-footer":"accent-3","icon-color":"neutral-3","code-keyword":"neutral-3","code-variable":"neutral-1","code-function":"neutral-4","code-string":"accent-3","button-primary":"accent-3","button-hover":"accent-2","footer-background":"neutral-3"}},H,{},$)},P),Q=Object(j.a)({global:Object(j.a)({colors:{brand:"#002364","accent-1":"#F794B9","neutral-1":"#B84C65","accent-2":"#FCC0C5","neutral-2":"#B67186","accent-3":"#FFFFFF","neutral-3":"#ECEDF8","neutral-4":"#1B3A5D",active:"neutral-1",focus:"neutral-1",white:"#ECEDF8",background:"#1B3A5D","card-background":"#224975","card-footer":"accent-3","icon-color":"brand","code-keyword":"accent-2","code-variable":"neutral-1","code-function":"neutral-2","code-string":"accent-1","button-primary":"accent-3","button-hover":"accent-2","footer-background":"card-background"}},H,{},$)},P),V=a(53),X=a.n(V),Y=function(e){var t=e.children;return r.a.createElement(i.a,{margin:{left:"medium"}},t)},Z=function(e){var t=e.children,a=e.type,n=e.nospace;return r.a.createElement(f.a,{level:3,margin:"none",color:"code-"+a,style:{display:"inline"}},t,!n&&" ")},ee=function(e){var t=e.children;return e.isTypingDone?r.a.createElement(i.a,{elevation:"medium",margin:{horizontal:"medium"},round:"small"},t):r.a.createElement(i.a,{elevation:"none",margin:{horizontal:"medium"}},t)};function te(){var e=r.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return r.a.createElement(ee,{isTypingDone:a},r.a.createElement(X.a,{avgTypingDelay:45,cursor:{show:!1},onTypingDone:function(){n(!0)}},r.a.createElement(i.a,{margin:"medium"},r.a.createElement("div",null,r.a.createElement(Z,{type:"keyword"},"const club"),r.a.createElement(Z,{type:"variable"},"GWC"),r.a.createElement(Z,null,"= () => {")),r.a.createElement(Y,null,r.a.createElement("div",null,r.a.createElement(Z,{type:"keyword"},"if"),r.a.createElement(Z,null,"("),r.a.createElement(Z,{type:"function",nospace:!0},"viewing"),r.a.createElement(Z,{nospace:!0},"("),r.a.createElement(Z,{type:"variable",nospace:!0},"you"),r.a.createElement(Z,null,") == "),r.a.createElement(Z,{type:"keyword",nospace:!0},"this"),r.a.createElement(Z,{nospace:!0},"."),r.a.createElement(Z,{type:"variable"},"page"),r.a.createElement(Z,null,") {")),r.a.createElement(Y,null,r.a.createElement("div",null,r.a.createElement(Z,{type:"function",nospace:!0},"print"),r.a.createElement(Z,{nospace:!0},"("),r.a.createElement(Z,{type:"string",nospace:!0},'"Welcome to UTD Girls Who Code!"'),r.a.createElement(Z,null,");"))),r.a.createElement(Z,null,"}"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(Z,{type:"keyword"},"let"),r.a.createElement(Z,{type:"variable"},"goals"),r.a.createElement(Z,null,"= {")),r.a.createElement(Y,null,r.a.createElement("div",null,r.a.createElement(Z,{type:"variable",nospace:!0},'"one"'),r.a.createElement(Z,null,": "),r.a.createElement(Z,{type:"function",nospace:!0},"build_sisterhood()"),r.a.createElement(Z,null,","),r.a.createElement("br",null),r.a.createElement(Z,{type:"variable",nospace:!0},'"two"'),r.a.createElement(Z,null,": "),r.a.createElement(Z,{type:"function",nospace:!0},"empower_womxn()"),r.a.createElement(Z,null,","),r.a.createElement("br",null),r.a.createElement(Z,{type:"variable",nospace:!0},'"three"'),r.a.createElement(Z,null,": "),r.a.createElement(Z,{type:"function",nospace:!0},"learn_technical_skills()"),r.a.createElement(Z,null,","))),r.a.createElement(Z,null,"};"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(Z,{type:"keyword"},"return"),r.a.createElement(Z,{type:"variable",nospace:!0},"goals"),r.a.createElement(Z,null,";"))),r.a.createElement(Z,null,"}"))))}var ae=a(54),ne=a.n(ae);function re(e){var t=e.children;return r.a.createElement(O,{style:{alignSelf:"center"}},r.a.createElement(i.a,{align:"center",alignSelf:"center",justify:"center"},r.a.createElement(f.a,{level:"2",margin:{bottom:"small",top:"none"}},"Stay In The Loop!"),r.a.createElement(i.a,{width:"medium",height:"medium",background:"card-background",round:!0,direction:"column",elevation:"medium"},t)))}function le(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),m=u[0],s=u[1];function d(){return(d=Object(D.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://utd-gwc-api.herokuapp.com/api/events/upcoming?sort=+date",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,l(a[0]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),m?r.a.createElement(i.a,{align:"center"},r.a.createElement(i.a,{justify:"center",width:"medium",height:"medium",background:"none"},r.a.createElement(A,null))):null==a||null==a.flyerUrl?r.a.createElement(re,null,r.a.createElement(f.a,{textAlign:"center",level:"3",margin:{top:"medium",bottom:"none",horizontal:"medium"}},"All of our events are hosted on Microsoft Teams"),r.a.createElement(p.a,{fit:"cover",src:ne.a}),r.a.createElement(G.a,{color:"button-primary",label:r.a.createElement(f.a,{level:"3",margin:"none"},"Join Our Team"),style:{width:"medium"},margin:{top:"none",bottom:"medium"},alignSelf:"center",primary:!0,hoverIndicator:{color:"card-background"},href:"",target:"_blank"})):r.a.createElement(re,null,r.a.createElement(p.a,{fit:"cover",src:a.flyerUrl}))}function ce(){return r.a.createElement(i.a,{height:{min:"100vh"},fill:"vertical",direction:"row-responsive",margin:{top:"large"}},r.a.createElement(i.a,{direction:"column",width:"large"},r.a.createElement(te,null)),r.a.createElement(i.a,{flex:"grow",align:"end",direction:"column"},r.a.createElement(le,null)))}var oe=a(105),ie=a(93),ue=a(94),me=a(95),se=a(96);function de(e){var t=e.externalLinks;return null==t?null:r.a.createElement("div",null,null!=t.GITHUB&&r.a.createElement(G.a,{icon:r.a.createElement(ie.a,{color:"accent-3"}),href:t.GITHUB,target:"_blank",referrer:"noreferrer"}),null!=t.LINKEDIN&&r.a.createElement(G.a,{icon:r.a.createElement(ue.a,{color:"accent-3"}),href:t.LINKEDIN,target:"_blank",referrer:"noreferrer"}),null!=t.INSTAGRAM&&r.a.createElement(G.a,{icon:r.a.createElement(me.a,{color:"accent-3"}),href:t.INSTAGRAM,target:"_blank",referrer:"noreferrer"}),null!=t.WEBSITE&&r.a.createElement(G.a,{icon:r.a.createElement(se.a,{color:"accent-3"}),href:t.WEBSITE,target:"_blank",referrer:"noreferrer"}))}function Ee(e){var t=null!=e.profilePhotoUrl?"url('"+e.profilePhotoUrl+"\n')":"url('https://avatars2.githubusercontent.com/u/72423830?s=400&u=4a017c61d36667ab14429abaf655243af85988a9&v=4')";return r.a.createElement(i.a,null,r.a.createElement(i.a,{align:"center",justify:"center",pad:"xsmall",margin:"xsmall"},r.a.createElement(i.a,{align:"center",justify:"center",pad:"xlarge",margin:"medium",background:{dark:!1,color:"light-2",image:t},round:"full"}),r.a.createElement(f.a,{level:"3",size:"medium",margin:"xsmall",textAlign:"center"},e.name),r.a.createElement(oe.a,{textAlign:"center"},e.position),r.a.createElement(i.a,{align:"center",justify:"center",pad:"small",direction:"row-responsive",flex:!0,alignSelf:"center",basis:"xxsmall",gap:"small",margin:"xsmall"},r.a.createElement(de,{externalLinks:e.externalLinks}))))}function pe(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),m=u[0],s=u[1];function d(){return(d=Object(D.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://utd-gwc-api.herokuapp.com/api/officers",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,l(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),r.a.createElement(i.a,{fill:!0,direction:"row-responsive",justify:"center"},m||null==a?r.a.createElement(A,null):r.a.createElement(J,{fullRow:!0},a.map((function(e){return r.a.createElement(Ee,Object.assign({key:e._id},e))}))))}function fe(e){var t=e.children;return r.a.createElement(i.a,{flex:"grow",pad:"medium"},t)}function ge(e){var t=e.children,a=e.innerRef;return r.a.createElement(i.a,{overflow:"auto",ref:a},t)}var he=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(document.body.scrollTop),g=Object(o.a)(c,2),h=g[0],v=g[1],b=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var a=t.current;return a.addEventListener("scroll",e),function(){a.removeEventListener("scroll",e)}}),[e]),t}((function(e){v(e.target.scrollTop)}));return r.a.createElement(u.a,{theme:a?q:Q,full:!0},r.a.createElement(m.a,null,r.a.createElement(s.a,{pad:{left:"medium",right:"small",vertical:"small"},elevation:"xsmall",background:0===h?"background":"neutral-3",style:{transition:"background-color .4s"}},r.a.createElement(k,{scrollTop:h,theme:a?"light":"dark"}),r.a.createElement(i.a,{justify:"between",fill:"horizontal",align:"end"},r.a.createElement(d.a,{toggle:!0,onChange:function(){l(!a)}}))),r.a.createElement(ge,{innerRef:b},r.a.createElement(fe,null,r.a.createElement(ce,null),r.a.createElement(T,{title:"Upcoming Events"},r.a.createElement(K,null)),r.a.createElement(T,{title:"Our Team"},r.a.createElement(pe,null))),r.a.createElement(E.a,{fill:"horizontal",background:"footer-background",flex:"grow",pad:"medium"},r.a.createElement(i.a,{width:"medium"},r.a.createElement(p.a,{src:y.a,fit:"contain",fill:"vertical",a11yTitle:"UTD Girls Who Code logo"}),r.a.createElement(f.a,{textAlign:"center",margin:"none",level:2,color:"black"},"UTD Girls Who Code"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.ce6e816e.chunk.js.map