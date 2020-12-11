(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=a(6),i=a(24),u=a(158),m=a(156),s=a(132),d=a(165),f=a(162),g=a(13);a(79);function p(e){var t=e.children,a=e.style,l=Object(n.useState)(!1),c=Object(o.a)(l,2),i=c[0],u=c[1],m=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&(u(!0),e.unobserve(m.current))}));return e.observe(m.current),function(){return e.unobserve(m.current)}}),[]),r.a.createElement("div",{ref:m,className:"fade-in-section ".concat(i?"is-visible":""),style:Object(g.a)({},a)},t)}function E(e){var t=e.title,a=e.children,n=e.id;return r.a.createElement(i.a,{flex:"grow",margin:{horizontal:"medium",bottom:"small"},id:n,style:{scrollMarginTop:"50px"}},r.a.createElement(p,null,r.a.createElement(f.a,{level:"2",margin:"none"},t)),r.a.createElement(p,null,a))}var h=a(10),b=a.n(h),v=a(15),y=r.a.createElement("svg",{version:"1.1",viewBox:"0 0 32 32",width:"28px",height:"28px",fill:"#F794B9"},r.a.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),r.a.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"0.8s",repeatCount:"indefinite"}))),w=function(){return r.a.createElement(i.a,{align:"center",justify:"center"},y)},x=a(16),k=a(146),j=a(147),O=a(159),T=a(163),S=a(157),F=a(150),C=a(164),D=a(66),L=a.n(D),U=a(149),A=a(67);function B(e){var t=e.children;return r.a.createElement(k.a,{height:"medium",margin:"medium",width:"medium",background:"card-background",elevation:"medium",round:"medium",flex:"grow",pad:"none",align:"center",alignSelf:"center"},t)}function _(e){var t=e.toggleShowFlyer,a=e.showFlyer,n=e.event;return r.a.createElement(j.a,{align:"center",direction:"row-responsive",justify:"between",gap:"medium",pad:{horizontal:"small"},fill:"horizontal",background:"card-footer"},null!=n.flyerUrl&&r.a.createElement(O.a,{primary:!0,label:r.a.createElement(T.a,null,a?"View Text":"View Flyer"),color:"card-background",onClick:t}),r.a.createElement(S.a,{icon:r.a.createElement(U.a,{color:"icon-color"}),hoverIndicator:!0,items:[{label:"Open Flyer",onClick:function(){window.open(n.flyerUrl,"_blank")}},{label:"Save iCal Event",onClick:function(){!function(e){var t=new Date(e.dateObj);Object(A.createEvent)({title:e.title,description:e.description,busyStatus:"BUSY",duration:{hours:1},start:[t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes()],organizer:{name:"UTD Girls Who Code",email:"utdgirlswhocode@gmail.com"}},(function(t,a){var n=document.createElement("a"),r=new Blob([a],{type:"text/calendar"});n.href=URL.createObjectURL(r),n.download=e.title+".ics",document.body.appendChild(n),n.click()}))}(n)}}]}))}function z(e){var t,a=Object(n.useState)(!1),l=Object(o.a)(a,2),c=l[0],u=l[1],m=function(e){u(!c)};return r.a.createElement(L.a,{isFlipped:c},r.a.createElement(B,null,r.a.createElement(F.a,(t={fill:"horizontal",pad:"small",align:"center",justify:"between",margin:"none"},Object(x.a)(t,"pad","small"),Object(x.a)(t,"gap","medium"),Object(x.a)(t,"direction","row-responsive"),t),r.a.createElement(f.a,{level:"2",margin:"xsmall",textAlign:"start",size:"medium"},e.title),r.a.createElement(i.a,{direction:"column",justify:"center",align:"end"},r.a.createElement(T.a,null,e.date),r.a.createElement(T.a,null,e.time||"TBD"))),r.a.createElement(i.a,{align:"center",justify:"center",pad:"xsmall",margin:"xsmall",height:"large"},r.a.createElement(C.a,{size:"medium",margin:"medium",textAlign:"center",truncate:!0},e.description)),r.a.createElement(_,{toggleShowFlyer:m,showFlyer:c,event:e})),r.a.createElement(B,{toggleShowFlyer:m,flyerUrl:e.flyerUrl,showFlyer:c},r.a.createElement(i.a,{align:"center",justify:"center",pad:"none",margin:"none",height:"large"},r.a.createElement(d.a,{src:e.flyerUrl,fill:"vertical",fit:"contain"})),r.a.createElement(_,{toggleShowFlyer:m,showFlyer:c,event:e})))}var M=a(68),I=a(23),W=function(e){var t=e.cols,a=e.children,r=e.fullRow,l=n.useState(window.innerWidth<1920?window.innerWidth<1080?6:4:3),c=Object(o.a)(l,2),i=c[0],u=c[1];n.useEffect((function(){function e(){u(window.outerWidth<1080?6:window.outerWidth>1968?3:4)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var m=12/t,s=Object(M.chunk)(n.Children.toArray(a),r?12/i:t);return n.createElement(I.Grid,null,s.map((function(e,t){return n.createElement(I.Row,{key:t},e.map((function(e,t){return n.createElement(I.Col,{key:t,sm:12,md:r?i:m},e)})))})))};function G(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),m=u[0],s=u[1];function d(){return(d=Object(v.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://utd-gwc-api.herokuapp.com/api/events/upcoming?sort=+date",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,l(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),r.a.createElement(i.a,{fill:!0,direction:"row-responsive",justify:"center"},m||null==a?r.a.createElement(w,null):r.a.createElement(W,{fullRow:!0},a.map((function(e){var t={dateString:null,timeString:null};if(null!=e.date){var a=new Date(e.date);t.dateString=a.toLocaleDateString(),t.timeString=a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}return r.a.createElement(z,{key:e.title,title:e.title,description:e.description,dateObj:e.date,date:t.dateString,time:t.timeString,flyerUrl:e.flyerUrl})}))))}var R={font:{family:"Roboto",size:"18px",height:"20px"}},N={checkBox:{border:{color:{dark:"neutral-1",light:"neutral-1"}},hover:{border:{color:{dark:"white",light:"brand"}}},toggle:{background:{dark:"neutral-1",light:"neutral-1"}}}},H={elevation:{light:{none:"none",xsmall:"0px 1px 2px rgba(27, 58, 93, 0.2)",small:"0px 2px 4px rgba(27, 58, 93, 0.2)",medium:"0px 4px 8px rgba(27, 58, 93, 0.2)",large:"0px 8px 16px rgba(27, 58, 93, 0.2)",xlarge:"0px 12px 24px rgba(27, 58, 93, 0.2)"},dark:{none:"none",xsmall:"none",small:"none",medium:"none",large:"none",xlarge:"none"}}},J=Object(g.a)({global:Object(g.a)({colors:{brand:"#F794B9","accent-1":"#002364","neutral-1":"#1B3A5D","accent-2":"#FFFFFF","neutral-2":"#ECEDF8","accent-3":"#FCC0C5","neutral-3":"#B67186","neutral-4":"#B84C65",active:"accent-2",focus:"neutral-1",white:"#ECEDF8",background:"#ECEDF8","card-background":"accent-2","card-footer":"accent-3","icon-color":"neutral-3","code-keyword":"neutral-3","code-variable":"neutral-1","code-function":"neutral-4","code-string":"accent-3","button-primary":"accent-3","button-hover":"accent-2","footer-background":"neutral-3"}},R,{},H)},N),K=Object(g.a)({global:Object(g.a)({colors:{brand:"#002364","accent-1":"#F794B9","neutral-1":"#B84C65","accent-2":"#FCC0C5","neutral-2":"#B67186","accent-3":"#FFFFFF","neutral-3":"#ECEDF8","neutral-4":"#1B3A5D",active:"neutral-1",focus:"neutral-1",white:"#ECEDF8",background:"#1B3A5D","card-background":"#224975","card-footer":"accent-3","icon-color":"brand","code-keyword":"accent-2","code-variable":"neutral-1","code-function":"neutral-2","code-string":"accent-1","button-primary":"accent-3","button-hover":"accent-2","footer-background":"card-background"}},R,{},H)},N),P=a(69),V=a.n(P),Y=function(e){var t=e.children;return r.a.createElement(i.a,{margin:{left:"medium"}},t)},$=function(e){var t=e.children,a=e.type,n=e.nospace;return r.a.createElement(f.a,{level:3,margin:"none",color:"code-"+a,style:{display:"inline"}},t,!n&&" ")},q=function(e){var t=e.children;return e.isTypingDone?r.a.createElement(i.a,{elevation:"medium",margin:{horizontal:"medium"},round:"small"},t):r.a.createElement(i.a,{elevation:"none",margin:{horizontal:"medium"}},t)};function Q(){var e=r.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return r.a.createElement(q,{isTypingDone:a},r.a.createElement(V.a,{avgTypingDelay:45,cursor:{show:!1},onTypingDone:function(){n(!0)}},r.a.createElement(i.a,{margin:"medium"},r.a.createElement("div",null,r.a.createElement($,{type:"keyword"},"const club"),r.a.createElement($,{type:"variable"},"GWC"),r.a.createElement($,null,"= () => {")),r.a.createElement(Y,null,r.a.createElement("div",null,r.a.createElement($,{type:"keyword"},"if"),r.a.createElement($,null,"("),r.a.createElement($,{type:"function",nospace:!0},"viewing"),r.a.createElement($,{nospace:!0},"("),r.a.createElement($,{type:"variable",nospace:!0},"you"),r.a.createElement($,null,") == "),r.a.createElement($,{type:"keyword",nospace:!0},"this"),r.a.createElement($,{nospace:!0},"."),r.a.createElement($,{type:"variable"},"page"),r.a.createElement($,null,") {")),r.a.createElement(Y,null,r.a.createElement("div",null,r.a.createElement($,{type:"function",nospace:!0},"print"),r.a.createElement($,{nospace:!0},"("),r.a.createElement($,{type:"string",nospace:!0},'"Welcome to UTD Girls Who Code!"'),r.a.createElement($,null,");"))),r.a.createElement($,null,"}"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement($,{type:"keyword"},"let"),r.a.createElement($,{type:"variable"},"goals"),r.a.createElement($,null,"= {")),r.a.createElement(Y,null,r.a.createElement("div",null,r.a.createElement($,{type:"variable",nospace:!0},'"one"'),r.a.createElement($,null,": "),r.a.createElement($,{type:"function",nospace:!0},"build_sisterhood()"),r.a.createElement($,null,","),r.a.createElement("br",null),r.a.createElement($,{type:"variable",nospace:!0},'"two"'),r.a.createElement($,null,": "),r.a.createElement($,{type:"function",nospace:!0},"empower_womxn()"),r.a.createElement($,null,","),r.a.createElement("br",null),r.a.createElement($,{type:"variable",nospace:!0},'"three"'),r.a.createElement($,null,": "),r.a.createElement($,{type:"function",nospace:!0},"learn_technical_skills()"),r.a.createElement($,null,","))),r.a.createElement($,null,"};"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement($,{type:"keyword"},"return"),r.a.createElement($,{type:"variable",nospace:!0},"goals"),r.a.createElement($,null,";"))),r.a.createElement($,null,"}"))))}var X=a(70),Z=a.n(X);function ee(e){var t=e.children;return r.a.createElement(p,{style:{alignSelf:"center"}},r.a.createElement(i.a,{align:"center",alignSelf:"center",justify:"center"},r.a.createElement(f.a,{level:"2",margin:{bottom:"small",top:"none"}},"Stay In The Loop!"),r.a.createElement(i.a,{width:"medium",height:"medium",background:"card-background",round:!0,direction:"column",elevation:"medium"},t)))}function te(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),m=u[0],s=u[1];function g(){return(g=Object(v.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://utd-gwc-api.herokuapp.com/api/events/upcoming?sort=+date",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,l(a[0]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),m?r.a.createElement(i.a,{align:"center"},r.a.createElement(i.a,{justify:"center",width:"medium",height:"medium",background:"none"},r.a.createElement(w,null))):null==a||null==a.flyerUrl?r.a.createElement(ee,null,r.a.createElement(f.a,{textAlign:"center",level:"3",margin:{top:"medium",bottom:"none",horizontal:"medium"}},"All of our events are hosted on Microsoft Teams"),r.a.createElement(d.a,{fit:"cover",src:Z.a}),r.a.createElement(O.a,{color:"button-primary",label:r.a.createElement(f.a,{level:"3",margin:"none"},"Join Our Team"),style:{width:"medium"},margin:{top:"none",bottom:"medium"},alignSelf:"center",primary:!0,hoverIndicator:{color:"card-background"},href:"",target:"_blank"})):r.a.createElement(ee,null,r.a.createElement(d.a,{fit:"contain",src:a.flyerUrl}))}function ae(){return r.a.createElement(i.a,{height:{min:"100vh"},fill:"vertical",direction:"row-responsive",margin:{top:"large"}},r.a.createElement(i.a,{direction:"column",width:"large"},r.a.createElement(Q,null)),r.a.createElement(i.a,{flex:"grow",align:"end",direction:"column"},r.a.createElement(te,null)))}var ne=a(21),re=a.n(ne),le=a(151),ce=a(152),oe=a(153),ie=a(154);function ue(e){var t=e.externalLinks;return null==t?null:r.a.createElement("div",null,null!=t.GITHUB&&r.a.createElement(O.a,{icon:r.a.createElement(le.a,{color:"accent-3"}),href:t.GITHUB,target:"_blank",referrer:"noreferrer"}),null!=t.LINKEDIN&&r.a.createElement(O.a,{icon:r.a.createElement(ce.a,{color:"accent-3"}),href:t.LINKEDIN,target:"_blank",referrer:"noreferrer"}),null!=t.INSTAGRAM&&r.a.createElement(O.a,{icon:r.a.createElement(oe.a,{color:"accent-3"}),href:t.INSTAGRAM,target:"_blank",referrer:"noreferrer"}),null!=t.WEBSITE&&r.a.createElement(O.a,{icon:r.a.createElement(ie.a,{color:"accent-3"}),href:t.WEBSITE,target:"_blank",referrer:"noreferrer"}))}function me(e){var t=null!=e.profilePhotoUrl?"url('"+e.profilePhotoUrl+"\n')":"url('https://avatars2.githubusercontent.com/u/72423830?s=400&u=4a017c61d36667ab14429abaf655243af85988a9&v=4')";return r.a.createElement(i.a,null,r.a.createElement(i.a,{align:"center",justify:"center",pad:"xsmall",margin:"xsmall"},r.a.createElement(i.a,{align:"center",justify:"center",pad:"xlarge",margin:"medium",background:{dark:!1,color:"light-2",image:t},round:"full"}),r.a.createElement(f.a,{level:"3",size:"medium",margin:"xsmall",textAlign:"center"},e.name),r.a.createElement(T.a,{textAlign:"center"},e.position),r.a.createElement(i.a,{align:"center",justify:"center",pad:"small",direction:"row-responsive",flex:!0,alignSelf:"center",basis:"xxsmall",gap:"small",margin:"xsmall"},r.a.createElement(ue,{externalLinks:e.externalLinks}))))}function se(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),m=u[0],s=u[1];function d(){return(d=Object(v.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://utd-gwc-api.herokuapp.com/api/officers?sort=+order",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,l(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),r.a.createElement(i.a,{fill:!0,direction:"row-responsive",justify:"center"},m||null==a?r.a.createElement(w,null):r.a.createElement(W,{fullRow:!0},a.map((function(e){return r.a.createElement(me,Object.assign({key:e._id},e))}))))}var de=a(160),fe=a(133),ge=a(161),pe=a(2),Ee=a(155),he=a(166),be=a(71),ve=a.n(be);function ye(e){var t=e.scrollTop,a=e.theme,n=pe.a.theme.global.size.xsmall.match(/\d+/)[0],l=pe.a.theme.global.size.xxsmall.match(/\d+/)[0],c=r.a.useContext(Ee.a),o="dark"===a&&0===t;return r.a.createElement(i.a,{align:"center",height:Math.max(n-t,l)+"px",style:{transition:"height .05s ease"},pad:{left:"small"===c?"large":"none"}},r.a.createElement(he.a,{fill:"vertical"},r.a.createElement(d.a,{src:re.a,style:{transition:"opacity 0.2s ease-out",opacity:o?0:100},fit:"contain",fill:"vertical",a11yTitle:"UTD Girls Who Code logo"}),r.a.createElement(d.a,{src:ve.a,style:{transition:"opacity 0.2s ease-in",opacity:o?100:0},fit:"contain",fill:"vertical",a11yTitle:"UTD Girls Who Code logo"})))}function we(e,t){return e?t>0?"neutral-2":"neutral-1":t>0?"brand":"accent-1"}function xe(e){var t=e.isLightMode,a=e.scrollTop,n=e.id,l=e.label;return r.a.createElement(i.a,{pad:{right:"small"}},r.a.createElement(de.a,{color:we(t,a),id:n,label:l,target:"_self"}))}function ke(e){var t=e.scrollTop,a=e.isLightMode,n=e.setIsLightMode;return r.a.createElement(fe.a,{pad:{left:"medium",right:"small",vertical:"small"},elevation:"xsmall",background:0===t?"background":"neutral-3",style:{transition:"background-color .4s"}},r.a.createElement(ye,{scrollTop:t,theme:a?"light":"dark"}),r.a.createElement(i.a,{direction:"row",fill:"horizontal",justify:"end",align:"center"},r.a.createElement(xe,{id:"events",label:"Events",isLightMode:a,scrollTop:t}),r.a.createElement(xe,{id:"team",label:"Team",isLightMode:a,scrollTop:t}),r.a.createElement(ge.a,{toggle:!0,checked:!a,onChange:function(){n(!a)}})))}function je(e){var t=e.children;return r.a.createElement(i.a,{flex:"grow",pad:"medium"},t)}function Oe(e){var t=e.children,a=e.innerRef;return r.a.createElement(i.a,{overflow:"auto",ref:a},t)}var Te=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(document.body.scrollTop),g=Object(o.a)(c,2),p=g[0],h=g[1],b=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var a=t.current;return a.addEventListener("scroll",e),function(){a.removeEventListener("scroll",e)}}),[e]),t}((function(e){h(e.target.scrollTop)}));return r.a.createElement(u.a,{theme:a?J:K,full:!0},r.a.createElement(m.a,null,r.a.createElement(ke,{isLightMode:a,scrollTop:p,setIsLightMode:l}),r.a.createElement(Oe,{innerRef:b},r.a.createElement(je,null,r.a.createElement(ae,null),r.a.createElement(E,{title:"Upcoming Events",id:"events"},r.a.createElement(G,null)),r.a.createElement(E,{title:"Our Team",id:"team"},r.a.createElement(se,null))),r.a.createElement(s.a,{fill:"horizontal",background:"footer-background",flex:"grow",pad:"medium"},r.a.createElement(i.a,{width:"medium"},r.a.createElement(d.a,{src:re.a,fit:"contain",fill:"vertical",a11yTitle:"UTD Girls Who Code logo"}),r.a.createElement(f.a,{textAlign:"center",margin:"none",level:2,color:"black"},"UTD Girls Who Code"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t,a){e.exports=a.p+"static/media/gwc2020_website_logo_nobg.63e40a6a.png"},70:function(e,t,a){e.exports=a.p+"static/media/Microsoft_Teams-Logo.wine.80ccd59e.svg"},71:function(e,t,a){e.exports=a.p+"static/media/gwc2020_DARK_website_logo_nobg.211ab73e.png"},74:function(e,t,a){e.exports=a(131)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.a07b1cdb.chunk.js.map