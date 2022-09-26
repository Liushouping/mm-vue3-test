function an(i,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function Zn(i,e,n){return e&&an(i.prototype,e),n&&an(i,n),i}/*!
 * Observer 3.11.1
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,$r,Ye,Pt,Et,$t,Mn,Ct,sr,Pn,it,Ge,En=function(){return Ce||typeof window<"u"&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},Dn=1,Wt=[],A=[],Qe=[],lr=Date.now,Ur=function(e,n){return n},jn=function(){var e=sr.core,n=e.bridge||{},t=e._scrollers,r=e._proxies;t.push.apply(t,A),r.push.apply(r,Qe),A=t,Qe=r,Ur=function(a,s){return n[a](s)}},yt=function(e,n){return~Qe.indexOf(e)&&Qe[Qe.indexOf(e)+1][n]},kr=function(e){return!!~Pn.indexOf(e)},Me=function(e,n,t,r,o){return e.addEventListener(n,t,{passive:!r,capture:!!o})},ye=function(e,n,t,r){return e.removeEventListener(n,t,!!r)},gr="scrollLeft",hr="scrollTop",un=function(){return it&&it.isPressed||A.cache++},Lr=function(e,n){var t=function r(o){if(o||o===0){Dn&&(Ye.history.scrollRestoration="manual");var a=it&&it.isPressed;o=r.v=Math.round(o)||(it&&it.iOS?1:0),e(o),r.cacheID=A.cache,a&&Ur("ss",o)}else(n||A.cache!==r.cacheID||Ur("ref"))&&(r.cacheID=A.cache,r.v=e());return r.v+r.offset};return t.offset=0,e&&t},ke={s:gr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Lr(function(i){return arguments.length?Ye.scrollTo(i,ie.sc()):Ye.pageXOffset||Pt[gr]||Et[gr]||$t[gr]||0})},ie={s:hr,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ke,sc:Lr(function(i){return arguments.length?Ye.scrollTo(ke.sc(),i):Ye.pageYOffset||Pt[hr]||Et[hr]||$t[hr]||0})},Pe=function(e){return Ce.utils.toArray(e)[0]||(typeof e=="string"&&Ce.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mt=function(e,n){var t=n.s,r=n.sc,o=A.indexOf(e),a=r===ie.sc?1:2;return!~o&&(o=A.push(e)-1),A[o+a]||(A[o+a]=Lr(yt(e,t),!0)||(kr(e)?r:Lr(function(s){return arguments.length?e[t]=s:e[t]})))},qr=function(e,n,t){var r=e,o=e,a=lr(),s=a,p=n||50,E=Math.max(500,p*3),k=function(g,B){var F=lr();B||F-a>p?(o=r,r=g,s=a,a=F):t?r+=g:r=o+(g-o)/(F-s)*(a-s)},x=function(){o=r=t?0:r,s=a=0},d=function(g){var B=s,F=o,S=lr();return(g||g===0)&&g!==r&&k(g),a===s||S-s>E?0:(r+(t?F:-F))/((t?S:a)-B)*1e3};return{update:k,reset:x,getVelocity:d}},tr=function(e,n){return n&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},cn=function(e){var n=Math.max.apply(Math,e),t=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(t)?n:t},On=function(){sr=Ce.core.globals().ScrollTrigger,sr&&sr.core&&jn()},An=function(e){return Ce=e||En(),Ce&&typeof document<"u"&&document.body&&(Ye=window,Pt=document,Et=Pt.documentElement,$t=Pt.body,Pn=[Ye,Pt,Et,$t],Ce.utils.clamp,Ct="onpointerenter"in $t?"pointer":"mouse",Mn=te.isTouch=Ye.matchMedia&&Ye.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ye||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ge=te.eventTypes=("ontouchstart"in Et?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Et?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Dn=0},500),On(),$r=1),$r};ke.op=ie;A.cache=0;var te=function(){function i(n){this.init(n)}var e=i.prototype;return e.init=function(t){$r||An(Ce)||console.warn("Please gsap.registerPlugin(Observer)"),sr||On();var r=t.tolerance,o=t.dragMinimum,a=t.type,s=t.target,p=t.lineHeight,E=t.debounce,k=t.preventDefault,x=t.onStop,d=t.onStopDelay,f=t.ignore,g=t.wheelSpeed,B=t.event,F=t.onDragStart,S=t.onDragEnd,le=t.onDrag,K=t.onPress,C=t.onRelease,he=t.onRight,N=t.onLeft,y=t.onUp,Ee=t.onDown,Be=t.onChangeX,m=t.onChangeY,I=t.onChange,D=t.onToggleX,Ve=t.onToggleY,ce=t.onHover,_e=t.onHoverEnd,L=t.onMove,be=t.ignoreCheck,H=t.isNormalizer,re=t.onGestureStart,l=t.onGestureEnd,Ie=t.onWheel,at=t.onEnable,ut=t.onDisable,ct=t.onClick,ft=t.scrollSpeed,X=t.capture,fe=t.allowClicks,we=t.lockAxis,qt=t.onLockAxis;this.target=s=Pe(s)||Et,this.vars=t,f&&(f=Ce.utils.toArray(f)),r=r||1e-9,o=o||0,g=g||1,ft=ft||1,a=a||"wheel,touch,pointer",E=E!==!1,p||(p=parseFloat(Ye.getComputedStyle($t).lineHeight)||22);var De,Xe,O,pe,Oe,$e,xe,u=this,et=0,W=0,pt=mt(s,ke),dt=mt(s,ie),Yt=pt(),ve=dt(),Kt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ge[0]==="pointerdown",gt=kr(s),Z=s.ownerDocument||Pt,Ae=[0,0,0],de=[0,0,0],Zt=0,ht=function(){return Zt=lr()},Ue=function(c,h){return(u.event=c)&&f&&~f.indexOf(c.target)||h&&Kt&&c.pointerType!=="touch"||be&&be(c,h)},jt=function(){u._vx.reset(),u._vy.reset(),Xe.pause(),x&&x(u)},_t=function(){var c=u.deltaX=cn(Ae),h=u.deltaY=cn(de),_=Math.abs(c)>=r,w=Math.abs(h)>=r;I&&(_||w)&&I(u,c,h,Ae,de),_&&(he&&u.deltaX>0&&he(u),N&&u.deltaX<0&&N(u),Be&&Be(u),D&&u.deltaX<0!=et<0&&D(u),et=u.deltaX,Ae[0]=Ae[1]=Ae[2]=0),w&&(Ee&&u.deltaY>0&&Ee(u),y&&u.deltaY<0&&y(u),m&&m(u),Ve&&u.deltaY<0!=W<0&&Ve(u),W=u.deltaY,de[0]=de[1]=de[2]=0),(pe||O)&&(L&&L(u),O&&(le(u),O=!1),pe=!1),$e&&!($e=!1)&&qt&&qt(u),Oe&&(Ie(u),Oe=!1),De=0},St=function(c,h,_){Ae[_]+=c,de[_]+=h,u._vx.update(c),u._vy.update(h),E?De||(De=requestAnimationFrame(_t)):_t()},It=function(c,h){we&&!xe&&(u.axis=xe=Math.abs(c)>Math.abs(h)?"x":"y",$e=!0),xe!=="y"&&(Ae[2]+=c,u._vx.update(c,!0)),xe!=="x"&&(de[2]+=h,u._vy.update(h,!0)),E?De||(De=requestAnimationFrame(_t)):_t()},Y=function(c){if(!Ue(c,1)){c=tr(c,k);var h=c.clientX,_=c.clientY,w=h-u.x,ne=_-u.y,v=u.isDragging;u.x=h,u.y=_,(v||Math.abs(u.startX-h)>=o||Math.abs(u.startY-_)>=o)&&(le&&(O=!0),v||(u.isDragging=!0),It(w,ne),v||F&&F(u))}},bt=u.onPress=function(M){Ue(M,1)||(u.axis=xe=null,Xe.pause(),u.isPressed=!0,M=tr(M),et=W=0,u.startX=u.x=M.clientX,u.startY=u.y=M.clientY,u._vx.reset(),u._vy.reset(),Me(H?s:Z,Ge[1],Y,k,!0),u.deltaX=u.deltaY=0,K&&K(u))},Re=function(c){if(!Ue(c,1)){ye(H?s:Z,Ge[1],Y,!0);var h=u.isDragging&&(Math.abs(u.x-u.startX)>3||Math.abs(u.y-u.startY)>3),_=tr(c);h||(u._vx.reset(),u._vy.reset(),k&&fe&&Ce.delayedCall(.08,function(){if(lr()-Zt>300&&!c.defaultPrevented){if(c.target.click)c.target.click();else if(Z.createEvent){var w=Z.createEvent("MouseEvents");w.initMouseEvent("click",!0,!0,Ye,1,_.screenX,_.screenY,_.clientX,_.clientY,!1,!1,!1,!1,0,null),c.target.dispatchEvent(w)}}})),u.isDragging=u.isGesturing=u.isPressed=!1,x&&!H&&Xe.restart(!0),S&&h&&S(u),C&&C(u,h)}},Ne=function(c){return c.touches&&c.touches.length>1&&(u.isGesturing=!0)&&re(c,u.isDragging)},qe=function(){return(u.isGesturing=!1)||l(u)},wt=function(c){if(!Ue(c)){var h=pt(),_=dt();St((h-Yt)*ft,(_-ve)*ft,1),Yt=h,ve=_,x&&Xe.restart(!0)}},Tt=function(c){if(!Ue(c)){c=tr(c,k),Ie&&(Oe=!0);var h=(c.deltaMode===1?p:c.deltaMode===2?Ye.innerHeight:1)*g;St(c.deltaX*h,c.deltaY*h,0),x&&!H&&Xe.restart(!0)}},Xt=function(c){if(!Ue(c)){var h=c.clientX,_=c.clientY,w=h-u.x,ne=_-u.y;u.x=h,u.y=_,pe=!0,(w||ne)&&It(w,ne)}},tt=function(c){u.event=c,ce(u)},Jt=function(c){u.event=c,_e(u)},Qt=function(c){return Ue(c)||tr(c,k)&&ct(u)};Xe=u._dc=Ce.delayedCall(d||.25,jt).pause(),u.deltaX=u.deltaY=0,u._vx=qr(0,50,!0),u._vy=qr(0,50,!0),u.scrollX=pt,u.scrollY=dt,u.isDragging=u.isGesturing=u.isPressed=!1,u.enable=function(M){return u.isEnabled||(Me(gt?Z:s,"scroll",un),a.indexOf("scroll")>=0&&Me(gt?Z:s,"scroll",wt,k,X),a.indexOf("wheel")>=0&&Me(s,"wheel",Tt,k,X),(a.indexOf("touch")>=0&&Mn||a.indexOf("pointer")>=0)&&(Me(s,Ge[0],bt,k,X),Me(Z,Ge[2],Re),Me(Z,Ge[3],Re),fe&&Me(s,"click",ht,!1,!0),ct&&Me(s,"click",Qt),re&&Me(Z,"gesturestart",Ne),l&&Me(Z,"gestureend",qe),ce&&Me(s,Ct+"enter",tt),_e&&Me(s,Ct+"leave",Jt),L&&Me(s,Ct+"move",Xt)),u.isEnabled=!0,M&&M.type&&bt(M),at&&at(u)),u},u.disable=function(){u.isEnabled&&(Wt.filter(function(M){return M!==u&&kr(M.target)}).length||ye(gt?Z:s,"scroll",un),u.isPressed&&(u._vx.reset(),u._vy.reset(),ye(H?s:Z,Ge[1],Y,!0)),ye(gt?Z:s,"scroll",wt,X),ye(s,"wheel",Tt,X),ye(s,Ge[0],bt,X),ye(Z,Ge[2],Re),ye(Z,Ge[3],Re),ye(s,"click",ht,!0),ye(s,"click",Qt),ye(Z,"gesturestart",Ne),ye(Z,"gestureend",qe),ye(s,Ct+"enter",tt),ye(s,Ct+"leave",Jt),ye(s,Ct+"move",Xt),u.isEnabled=u.isPressed=u.isDragging=!1,ut&&ut(u))},u.kill=function(){u.disable();var M=Wt.indexOf(u);M>=0&&Wt.splice(M,1),it===u&&(it=0)},Wt.push(u),H&&kr(s)&&(it=u),u.enable(B)},Zn(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();te.version="3.11.1";te.create=function(i){return new te(i)};te.register=An;te.getAll=function(){return Wt.slice()};te.getById=function(i){return Wt.filter(function(e){return e.vars.id===i})[0]};En()&&Ce.registerPlugin(te);/*!
 * ScrollTrigger 3.11.1
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var b,Bt,P,U,st,q,Rn,Yr,Ir,Gt,Cr,_r,ae,zr,Kr,Se,fn,pn,Nt,Ln,Hr,Yn,ze,In,Xn,zn,xt,Zr,Br,br=1,Te=Date.now,Nr=Te(),He=0,wr=0,dn=function(){return zr=1},gn=function(){return zr=0},je=function(e){return e},nr=function(e){return Math.round(e*1e5)/1e5||0},Fn=function(){return typeof window<"u"},Hn=function(){return b||Fn()&&(b=window.gsap)&&b.registerPlugin&&b},At=function(e){return!!~Rn.indexOf(e)},Bn=function(e){return yt(e,"getBoundingClientRect")||(At(e)?function(){return Rr.width=P.innerWidth,Rr.height=P.innerHeight,Rr}:function(){return ot(e)})},Jn=function(e,n,t){var r=t.d,o=t.d2,a=t.a;return(a=yt(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(n?P["inner"+o]:e["client"+o])||0}},Qn=function(e,n){return!n||~Qe.indexOf(e)?Bn(e):function(){return Rr}},vt=function(e,n){var t=n.s,r=n.d2,o=n.d,a=n.a;return(t="scroll"+r)&&(a=yt(e,t))?a()-Bn(e)()[o]:At(e)?(st[t]||q[t])-(P["inner"+r]||st["client"+r]||q["client"+r]):e[t]-e["offset"+r]},xr=function(e,n){for(var t=0;t<Nt.length;t+=3)(!n||~n.indexOf(Nt[t+1]))&&e(Nt[t],Nt[t+1],Nt[t+2])},Ze=function(e){return typeof e=="string"},lt=function(e){return typeof e=="function"},or=function(e){return typeof e=="number"},Mr=function(e){return typeof e=="object"},rr=function(e,n,t){return e&&e.progress(n?0:1)&&t&&e.pause()},Wr=function(e,n){if(e.enabled){var t=n(e);t&&t.totalTime&&(e.callbackAnimation=t)}},Ft=Math.abs,Nn="left",Wn="top",tn="right",rn="bottom",Dt="width",Ot="height",ar="Right",ur="Left",cr="Top",fr="Bottom",ee="padding",Fe="margin",Ut="Width",nn="Height",me="px",Je=function(e){return P.getComputedStyle(e)},eo=function(e){var n=Je(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},hn=function(e,n){for(var t in n)t in e||(e[t]=n[t]);return e},ot=function(e,n){var t=n&&Je(e)[Kr]!=="matrix(1, 0, 0, 1, 0, 0)"&&b.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return t&&t.progress(0).kill(),r},jr=function(e,n){var t=n.d2;return e["offset"+t]||e["client"+t]||0},Gn=function(e){var n=[],t=e.labels,r=e.duration(),o;for(o in t)n.push(t[o]/r);return n},to=function(e){return function(n){return b.utils.snap(Gn(e),n)}},on=function(e){var n=b.utils.snap(e),t=Array.isArray(e)&&e.slice(0).sort(function(r,o){return r-o});return t?function(r,o,a){a===void 0&&(a=.001);var s;if(!o)return n(r);if(o>0){for(r-=a,s=0;s<t.length;s++)if(t[s]>=r)return t[s];return t[s-1]}else for(s=t.length,r+=a;s--;)if(t[s]<=r)return t[s];return t[0]}:function(r,o,a){a===void 0&&(a=.001);var s=n(r);return!o||Math.abs(s-r)<a||s-r<0==o<0?s:n(o<0?r-e:r+e)}},ro=function(e){return function(n,t){return on(Gn(e))(n,t.direction)}},vr=function(e,n,t,r){return t.split(",").forEach(function(o){return e(n,o,r)})},ue=function(e,n,t,r,o){return e.addEventListener(n,t,{passive:!r,capture:!!o})},se=function(e,n,t,r){return e.removeEventListener(n,t,!!r)},yr=function(e,n,t){return t&&t.wheelHandler&&e(n,"wheel",t)},_n={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},mr={toggleActions:"play",anticipatePin:0},Xr={top:0,left:0,center:.5,bottom:1,right:1},Pr=function(e,n){if(Ze(e)){var t=e.indexOf("="),r=~t?+(e.charAt(t-1)+1)*parseFloat(e.substr(t+1)):0;~t&&(e.indexOf("%")>t&&(r*=n/100),e=e.substr(0,t-1)),e=r+(e in Xr?Xr[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},Sr=function(e,n,t,r,o,a,s,p){var E=o.startColor,k=o.endColor,x=o.fontSize,d=o.indent,f=o.fontWeight,g=U.createElement("div"),B=At(t)||yt(t,"pinType")==="fixed",F=e.indexOf("scroller")!==-1,S=B?q:t,le=e.indexOf("start")!==-1,K=le?E:k,C="border-color:"+K+";font-size:"+x+";color:"+K+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return C+="position:"+((F||p)&&B?"fixed;":"absolute;"),(F||p||!B)&&(C+=(r===ie?tn:rn)+":"+(a+parseFloat(d))+"px;"),s&&(C+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),g._isStart=le,g.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),g.style.cssText=C,g.innerText=n||n===0?e+"-"+n:e,S.children[0]?S.insertBefore(g,S.children[0]):S.appendChild(g),g._offset=g["offset"+r.op.d2],Er(g,0,r,le),g},Er=function(e,n,t,r){var o={display:"block"},a=t[r?"os2":"p2"],s=t[r?"p2":"os2"];e._isFlipped=r,o[t.a+"Percent"]=r?-100:0,o[t.a]=r?"1px":0,o["border"+a+Ut]=1,o["border"+s+Ut]=0,o[t.p]=n+"px",b.set(e,o)},T=[],Jr={},Qr,bn=function(){return Te()-He>34&&pr()},Ht=function(){(!ze||!ze.isPressed||ze.startX>q.clientWidth)&&(A.cache++,Qr||(Qr=requestAnimationFrame(pr)),He||Lt("scrollStart"),He=Te())},wn=function(){zn=P.innerWidth,Xn=P.innerHeight},ir=function(){A.cache++,!ae&&!Yn&&!U.fullscreenElement&&!U.webkitFullscreenElement&&(!In||zn!==P.innerWidth||Math.abs(P.innerHeight-Xn)>P.innerHeight*.25)&&Yr.restart(!0)},Rt={},no=[],Vn=function i(){return se(R,"scrollEnd",i)||Vt(!0)},Lt=function(e){return Rt[e]&&Rt[e].map(function(n){return n()})||no},Le=[],$n=function(e){for(var n=0;n<Le.length;n+=5)(!e||Le[n+4]&&Le[n+4].query===e)&&(Le[n].style.cssText=Le[n+1],Le[n].getBBox&&Le[n].setAttribute("transform",Le[n+2]||""),Le[n+3].uncache=1)},sn=function(e,n){var t;for(Se=0;Se<T.length;Se++)t=T[Se],t&&(!n||t._ctx===n)&&(e?t.kill(1):t.revert(!0,!0));n&&$n(n),n||Lt("revert")},Un=function(){return A.cache++&&A.forEach(function(e){return typeof e=="function"&&(e.rec=0)})},nt,Dr=0,Vt=function(e,n){if(He&&!e){ue(R,"scrollEnd",Vn);return}nt=!0;var t=Lt("refreshInit");Ln&&R.sort(),n||sn(),T.slice(0).forEach(function(r){return r.refresh()}),T.forEach(function(r){return r.vars.end==="max"&&r.setPositions(r.start,Math.max(r.start+1,vt(r.scroller,r._dir)))}),t.forEach(function(r){return r&&r.render&&r.render(-1)}),A.forEach(function(r){return typeof r=="function"&&r(r.rec)}),Un(),Yr.pause(),Dr++,nt=!1,Lt("refresh")},xn=0,Or=1,Mt,pr=function(){if(!nt){R.isUpdating=!0,Mt&&Mt.update(0);var e=T.length,n=Te(),t=n-Nr>=50,r=e&&T[0].scroll();if(Or=xn>r?-1:1,xn=r,t&&(He&&!zr&&n-He>200&&(He=0,Lt("scrollEnd")),Cr=Nr,Nr=n),Or<0){for(Se=e;Se-- >0;)T[Se]&&T[Se].update(0,t);Or=1}else for(Se=0;Se<e;Se++)T[Se]&&T[Se].update(0,t);R.isUpdating=!1}Qr=0},en=[Nn,Wn,rn,tn,Fe+fr,Fe+ar,Fe+cr,Fe+ur,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ar=en.concat([Dt,Ot,"boxSizing","max"+Ut,"max"+nn,"position",Fe,ee,ee+cr,ee+ar,ee+fr,ee+ur]),oo=function(e,n,t){dr(t);var r=e._gsap;if(r.spacerIsNative)dr(r.spacerState);else if(e._gsap.swappedIn){var o=n.parentNode;o&&(o.insertBefore(e,n),o.removeChild(n))}e._gsap.swappedIn=!1},Gr=function(e,n,t,r){if(!e._gsap.swappedIn){for(var o=en.length,a=n.style,s=e.style,p;o--;)p=en[o],a[p]=t[p];a.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(a.display="inline-block"),s[rn]=s[tn]="auto",a.flexBasis=t.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Dt]=jr(e,ke)+me,a[Ot]=jr(e,ie)+me,a[ee]=s[Fe]=s[Wn]=s[Nn]="0",dr(r),s[Dt]=s["max"+Ut]=t[Dt],s[Ot]=s["max"+nn]=t[Ot],s[ee]=t[ee],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},io=/([A-Z])/g,dr=function(e){if(e){var n=e.t.style,t=e.length,r=0,o,a;for((e.t._gsap||b.core.getCache(e.t)).uncache=1;r<t;r+=2)a=e[r+1],o=e[r],a?n[o]=a:n[o]&&n.removeProperty(o.replace(io,"-$1").toLowerCase())}},Tr=function(e){for(var n=Ar.length,t=e.style,r=[],o=0;o<n;o++)r.push(Ar[o],t[Ar[o]]);return r.t=e,r},so=function(e,n,t){for(var r=[],o=e.length,a=t?8:0,s;a<o;a+=2)s=e[a],r.push(s,s in n?n[s]:e[a+1]);return r.t=e.t,r},Rr={left:0,top:0},vn=function(e,n,t,r,o,a,s,p,E,k,x,d,f){lt(e)&&(e=e(p)),Ze(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Pr("0"+e.substr(3),t):0));var g=f?f.time():0,B,F,S;if(f&&f.seek(0),or(e))s&&Er(s,t,r,!0);else{lt(n)&&(n=n(p));var le=(e||"0").split(" "),K,C,he,N;S=Pe(n)||q,K=ot(S)||{},(!K||!K.left&&!K.top)&&Je(S).display==="none"&&(N=S.style.display,S.style.display="block",K=ot(S),N?S.style.display=N:S.style.removeProperty("display")),C=Pr(le[0],K[r.d]),he=Pr(le[1]||"0",t),e=K[r.p]-E[r.p]-k+C+o-he,s&&Er(s,he,r,t-he<20||s._isStart&&he>20),t-=t-he}if(a){var y=e+t,Ee=a._isStart;B="scroll"+r.d2,Er(a,y,r,Ee&&y>20||!Ee&&(x?Math.max(q[B],st[B]):a.parentNode[B])<=y+1),x&&(E=ot(s),x&&(a.style[r.op.p]=E[r.op.p]-r.op.m-a._offset+me))}return f&&S&&(B=ot(S),f.seek(d),F=ot(S),f._caScrollDist=B[r.p]-F[r.p],e=e/f._caScrollDist*d),f&&f.seek(g),f?e:Math.round(e)},lo=/(webkit|moz|length|cssText|inset)/i,yn=function(e,n,t,r){if(e.parentNode!==n){var o=e.style,a,s;if(n===q){e._stOrig=o.cssText,s=Je(e);for(a in s)!+a&&!lo.test(a)&&s[a]&&typeof o[a]=="string"&&a!=="0"&&(o[a]=s[a]);o.top=t,o.left=r}else o.cssText=e._stOrig;b.core.getCache(e).uncache=1,n.appendChild(e)}},mn=function(e,n){var t=mt(e,n),r="_scroll"+n.p2,o,a,s=function p(E,k,x,d,f){var g=p.tween,B=k.onComplete,F={};return x=x||t(),f=d&&f||0,d=d||E-x,g&&g.kill(),o=Math.round(x),k[r]=E,k.modifiers=F,F[r]=function(S){return S=Math.round(t()),S!==o&&S!==a&&Math.abs(S-o)>3&&Math.abs(S-a)>3?(g.kill(),p.tween=0):S=x+d*g.ratio+f*g.ratio*g.ratio,a=o,o=Math.round(S)},k.onComplete=function(){p.tween=0,B&&B.call(g)},g=p.tween=b.to(e,k),g};return e[r]=t,t.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ue(e,"wheel",t.wheelHandler),s},R=function(){function i(n,t){Bt||i.register(b)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(n,t)}var e=i.prototype;return e.init=function(t,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!wr){this.update=this.refresh=this.kill=je;return}t=hn(Ze(t)||or(t)||t.nodeType?{trigger:t}:t,mr);var o=t,a=o.onUpdate,s=o.toggleClass,p=o.id,E=o.onToggle,k=o.onRefresh,x=o.scrub,d=o.trigger,f=o.pin,g=o.pinSpacing,B=o.invalidateOnRefresh,F=o.anticipatePin,S=o.onScrubComplete,le=o.onSnapComplete,K=o.once,C=o.snap,he=o.pinReparent,N=o.pinSpacer,y=o.containerAnimation,Ee=o.fastScrollEnd,Be=o.preventOverlaps,m=t.horizontal||t.containerAnimation&&t.horizontal!==!1?ke:ie,I=!x&&x!==0,D=Pe(t.scroller||P),Ve=b.core.getCache(D),ce=At(D),_e=("pinType"in t?t.pinType:yt(D,"pinType")||ce&&"fixed")==="fixed",L=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],be=I&&t.toggleActions.split(" "),H="markers"in t?t.markers:mr.markers,re=ce?0:parseFloat(Je(D)["border"+m.p2+Ut])||0,l=this,Ie=t.onRefreshInit&&function(){return t.onRefreshInit(l)},at=Jn(D,ce,m),ut=Qn(D,ce),ct=0,ft=0,X=mt(D,m),fe,we,qt,De,Xe,O,pe,Oe,$e,xe,u,et,W,pt,dt,Yt,ve,Kt,gt,Z,Ae,de,Zt,ht,Ue,jt,_t,St,It,Y,bt,Re,Ne,qe,wt,Tt,Xt,tt;if(Zr(l),l._dir=m,F*=45,l.scroller=D,l.scroll=y?y.time.bind(y):X,De=X(),l.vars=t,r=r||t.animation,"refreshPriority"in t&&(Ln=1,t.refreshPriority===-9999&&(Mt=l)),Ve.tweenScroll=Ve.tweenScroll||{top:mn(D,ie),left:mn(D,ke)},l.tweenTo=fe=Ve.tweenScroll[m.p],l.scrubDuration=function(c){bt=or(c)&&c,bt?Y?Y.duration(c):Y=b.to(r,{ease:"expo",totalProgress:"+=0.001",duration:bt,paused:!0,onComplete:function(){return S&&S(l)}}):(Y&&Y.progress(1).kill(),Y=0)},r&&(r.vars.lazy=!1,r._initted||r.vars.immediateRender!==!1&&t.immediateRender!==!1&&r.render(0,!0,!0),l.animation=r.pause(),r.scrollTrigger=l,l.scrubDuration(x),St=0,p||(p=r.vars.id)),T.push(l),C&&((!Mr(C)||C.push)&&(C={snapTo:C}),"scrollBehavior"in q.style&&b.set(ce?[q,st]:D,{scrollBehavior:"auto"}),qt=lt(C.snapTo)?C.snapTo:C.snapTo==="labels"?to(r):C.snapTo==="labelsDirectional"?ro(r):C.directional!==!1?function(c,h){return on(C.snapTo)(c,Te()-ft<500?0:h.direction)}:b.utils.snap(C.snapTo),Re=C.duration||{min:.1,max:2},Re=Mr(Re)?Gt(Re.min,Re.max):Gt(Re,Re),Ne=b.delayedCall(C.delay||bt/2||.1,function(){var c=X(),h=Te()-ft<500,_=fe.tween;if((h||Math.abs(l.getVelocity())<10)&&!_&&!zr&&ct!==c){var w=(c-O)/W,ne=r&&!I?r.totalProgress():w,v=h?0:(ne-It)/(Te()-Cr)*1e3||0,j=b.utils.clamp(-w,1-w,Ft(v/2)*v/.185),G=w+(C.inertia===!1?0:j),Ke=Gt(0,1,qt(G,l)),z=Math.round(O+Ke*W),ge=C,We=ge.onStart,V=ge.onInterrupt,$=ge.onComplete;if(c<=pe&&c>=O&&z!==c){if(_&&!_._initted&&_.data<=Ft(z-c))return;C.inertia===!1&&(j=Ke-w),fe(z,{duration:Re(Ft(Math.max(Ft(G-ne),Ft(Ke-ne))*.185/v/.05||0)),ease:C.ease||"power3",data:Ft(z-c),onInterrupt:function(){return Ne.restart(!0)&&V&&V(l)},onComplete:function(){l.update(),ct=X(),St=It=r&&!I?r.totalProgress():l.progress,le&&le(l),$&&$(l)}},c,j*W,z-c-j*W),We&&We(l,fe.tween)}}else l.isActive&&ct!==c&&Ne.restart(!0)}).pause()),p&&(Jr[p]=l),d=l.trigger=Pe(d||f),tt=d&&d._gsap&&d._gsap.stRevert,tt&&(tt=tt(l)),f=f===!0?d:Pe(f),Ze(s)&&(s={targets:d,className:s}),f&&(g===!1||g===Fe||(g=!g&&Je(f.parentNode).display==="flex"?!1:ee),l.pin=f,t.force3D!==!1&&b.set(f,{force3D:!0}),we=b.core.getCache(f),we.spacer?pt=we.pinState:(N&&(N=Pe(N),N&&!N.nodeType&&(N=N.current||N.nativeElement),we.spacerIsNative=!!N,N&&(we.spacerState=Tr(N))),we.spacer=ve=N||U.createElement("div"),ve.classList.add("pin-spacer"),p&&ve.classList.add("pin-spacer-"+p),we.pinState=pt=Tr(f)),l.spacer=ve=we.spacer,_t=Je(f),Zt=_t[g+m.os2],gt=b.getProperty(f),Z=b.quickSetter(f,m.a,me),Gr(f,ve,_t),Yt=Tr(f)),H){et=Mr(H)?hn(H,_n):_n,xe=Sr("scroller-start",p,D,m,et,0),u=Sr("scroller-end",p,D,m,et,0,xe),Kt=xe["offset"+m.op.d2];var Jt=Pe(yt(D,"content")||D);Oe=this.markerStart=Sr("start",p,Jt,m,et,Kt,0,y),$e=this.markerEnd=Sr("end",p,Jt,m,et,Kt,0,y),y&&(Xt=b.quickSetter([Oe,$e],m.a,me)),!_e&&!(Qe.length&&yt(D,"fixedMarkers")===!0)&&(eo(ce?q:D),b.set([xe,u],{force3D:!0}),Ue=b.quickSetter(xe,m.a,me),jt=b.quickSetter(u,m.a,me))}if(y){var Qt=y.vars.onUpdate,M=y.vars.onUpdateParams;y.eventCallback("onUpdate",function(){l.update(0,0,1),Qt&&Qt.apply(M||[])})}l.previous=function(){return T[T.indexOf(l)-1]},l.next=function(){return T[T.indexOf(l)+1]},l.revert=function(c,h){if(!h)return l.kill(!0);var _=c!==!1||!l.enabled,w=ae;_!==l.isReverted&&(_&&(!l.scroll.rec&&(ae||nt)&&(l.scroll.rec=X(),nt&&X(0)),wt=Math.max(X(),l.scroll.rec||0),qe=l.progress,Tt=r&&r.progress()),Oe&&[Oe,$e,xe,u].forEach(function(ne){return ne.style.display=_?"none":"block"}),_&&(ae=1),l.update(_),ae=w,f&&(_?oo(f,ve,pt):(!he||!l.isActive)&&Gr(f,ve,Je(f),ht)),l.isReverted=_)},l.refresh=function(c,h){if(!((ae||!l.enabled)&&!h)){if(f&&c&&He){ue(i,"scrollEnd",Vn);return}!nt&&Ie&&Ie(l),ae=1,ft=Te(),fe.tween&&(fe.tween.kill(),fe.tween=0),Y&&Y.pause(),B&&r&&r.revert().invalidate(),l.isReverted||l.revert(!0,!0);for(var _=at(),w=ut(),ne=y?y.duration():vt(D,m),v=0,j=0,G=t.end,Ke=t.endTrigger||d,z=t.start||(t.start===0||!d?0:f?"0 0":"0 100%"),ge=l.pinnedContainer=t.pinnedContainer&&Pe(t.pinnedContainer),We=d&&Math.max(0,T.indexOf(l))||0,V=We,$,J,zt,kt,oe,Q,rt,Fr,ln,er;V--;)Q=T[V],Q.end||Q.refresh(0,1)||(ae=1),rt=Q.pin,rt&&(rt===d||rt===f)&&!Q.isReverted&&(er||(er=[]),er.unshift(Q),Q.revert(!0,!0)),Q!==T[V]&&(We--,V--);for(lt(z)&&(z=z(l)),O=vn(z,d,_,m,X(),Oe,xe,l,w,re,_e,ne,y)||(f?-.001:0),lt(G)&&(G=G(l)),Ze(G)&&!G.indexOf("+=")&&(~G.indexOf(" ")?G=(Ze(z)?z.split(" ")[0]:"")+G:(v=Pr(G.substr(2),_),G=Ze(z)?z:O+v,Ke=d)),pe=Math.max(O,vn(G||(Ke?"100% 0":ne),Ke,_,m,X()+v,$e,u,l,w,re,_e,ne,y))||-.001,W=pe-O||(O-=.01)&&.001,v=0,V=We;V--;)Q=T[V],rt=Q.pin,rt&&Q.start-Q._pinPush<O&&!y&&Q.end>0&&($=Q.end-Q.start,(rt===d||rt===ge)&&!or(z)&&(v+=$*(1-Q.progress)),rt===f&&(j+=$));if(O+=v,pe+=v,l._pinPush=j,Oe&&v&&($={},$[m.a]="+="+v,ge&&($[m.p]="-="+X()),b.set([Oe,$e],$)),f)$=Je(f),kt=m===ie,zt=X(),Ae=parseFloat(gt(m.a))+j,!ne&&pe>1&&((ce?q:D).style["overflow-"+m.a]="scroll"),Gr(f,ve,$),Yt=Tr(f),J=ot(f,!0),Fr=_e&&mt(D,kt?ke:ie)(),g&&(ht=[g+m.os2,W+j+me],ht.t=ve,V=g===ee?jr(f,m)+W+j:0,V&&ht.push(m.d,V+me),dr(ht),_e&&X(wt)),_e&&(oe={top:J.top+(kt?zt-O:Fr)+me,left:J.left+(kt?Fr:zt-O)+me,boxSizing:"border-box",position:"fixed"},oe[Dt]=oe["max"+Ut]=Math.ceil(J.width)+me,oe[Ot]=oe["max"+nn]=Math.ceil(J.height)+me,oe[Fe]=oe[Fe+cr]=oe[Fe+ar]=oe[Fe+fr]=oe[Fe+ur]="0",oe[ee]=$[ee],oe[ee+cr]=$[ee+cr],oe[ee+ar]=$[ee+ar],oe[ee+fr]=$[ee+fr],oe[ee+ur]=$[ee+ur],dt=so(pt,oe,he),nt&&X(0)),r?(ln=r._initted,Hr(1),r.render(r.duration(),!0,!0),de=gt(m.a)-Ae+W+j,W!==de&&_e&&dt.splice(dt.length-2,2),r.render(0,!0,!0),ln||r.invalidate(),Hr(0)):de=W;else if(d&&X()&&!y)for(J=d.parentNode;J&&J!==q;)J._pinOffset&&(O-=J._pinOffset,pe-=J._pinOffset),J=J.parentNode;er&&er.forEach(function(Kn){return Kn.revert(!1,!0)}),l.start=O,l.end=pe,De=Xe=X(),!y&&!nt&&(De<wt&&X(wt),l.scroll.rec=0),l.revert(!1,!0),Ne&&(ct=-1,l.isActive&&X(O+W*qe),Ne.restart(!0)),ae=0,r&&I&&(r._initted||Tt)&&r.progress()!==Tt&&r.progress(Tt,!0).render(r.time(),!0,!0),(qe!==l.progress||y)&&(r&&!I&&r.totalProgress(qe,!0),l.progress=(De-O)/W===qe?0:qe,l.update(0,0,1)),f&&g&&(ve._pinOffset=Math.round(l.progress*de)),k&&k(l)}},l.getVelocity=function(){return(X()-Xe)/(Te()-Cr)*1e3||0},l.endAnimation=function(){rr(l.callbackAnimation),r&&(Y?Y.progress(1):r.paused()?I||rr(r,l.direction<0,1):rr(r,r.reversed()))},l.labelToScroll=function(c){return r&&r.labels&&(O||l.refresh()||O)+r.labels[c]/r.duration()*W||0},l.getTrailing=function(c){var h=T.indexOf(l),_=l.direction>0?T.slice(0,h).reverse():T.slice(h+1);return(Ze(c)?_.filter(function(w){return w.vars.preventOverlaps===c}):_).filter(function(w){return l.direction>0?w.end<=O:w.start>=pe})},l.update=function(c,h,_){if(!(y&&!_&&!c)){var w=l.scroll(),ne=c?0:(w-O)/W,v=ne<0?0:ne>1?1:ne||0,j=l.progress,G,Ke,z,ge,We,V,$,J;if(h&&(Xe=De,De=y?X():w,C&&(It=St,St=r&&!I?r.totalProgress():v)),F&&!v&&f&&!ae&&!br&&He&&O<w+(w-Xe)/(Te()-Cr)*F&&(v=1e-4),v!==j&&l.enabled){if(G=l.isActive=!!v&&v<1,Ke=!!j&&j<1,V=G!==Ke,We=V||!!v!=!!j,l.direction=v>j?1:-1,l.progress=v,We&&!ae&&(z=v&&!j?0:v===1?1:j===1?2:3,I&&(ge=!V&&be[z+1]!=="none"&&be[z+1]||be[z],J=r&&(ge==="complete"||ge==="reset"||ge in r))),Be&&(V||J)&&(J||x||!r)&&(lt(Be)?Be(l):l.getTrailing(Be).forEach(function(Q){return Q.endAnimation()})),I||(Y&&!ae&&!br?((y||Mt&&Mt!==l)&&Y.render(Y._dp._time-Y._start),Y.resetTo?Y.resetTo("totalProgress",v,r._tTime/r._tDur):(Y.vars.totalProgress=v,Y.invalidate().restart())):r&&r.totalProgress(v,!!ae)),f){if(c&&g&&(ve.style[g+m.os2]=Zt),!_e)Z(nr(Ae+de*v));else if(We){if($=!c&&v>j&&pe+1>w&&w+1>=vt(D,m),he)if(!c&&(G||$)){var zt=ot(f,!0),kt=w-O;yn(f,q,zt.top+(m===ie?kt:0)+me,zt.left+(m===ie?0:kt)+me)}else yn(f,ve);dr(G||$?dt:Yt),de!==W&&v<1&&G||Z(Ae+(v===1&&!$?de:0))}}C&&!fe.tween&&!ae&&!br&&Ne.restart(!0),s&&(V||K&&v&&(v<1||!Br))&&Ir(s.targets).forEach(function(Q){return Q.classList[G||K?"add":"remove"](s.className)}),a&&!I&&!c&&a(l),We&&!ae?(I&&(J&&(ge==="complete"?r.pause().totalProgress(1):ge==="reset"?r.restart(!0).pause():ge==="restart"?r.restart(!0):r[ge]()),a&&a(l)),(V||!Br)&&(E&&V&&Wr(l,E),L[z]&&Wr(l,L[z]),K&&(v===1?l.kill(!1,1):L[z]=0),V||(z=v===1?1:3,L[z]&&Wr(l,L[z]))),Ee&&!G&&Math.abs(l.getVelocity())>(or(Ee)?Ee:2500)&&(rr(l.callbackAnimation),Y?Y.progress(1):rr(r,ge==="reverse"?1:!v,1))):I&&a&&!ae&&a(l)}if(jt){var oe=y?w/y.duration()*(y._caScrollDist||0):w;Ue(oe+(xe._isFlipped?1:0)),jt(oe)}Xt&&Xt(-w/y.duration()*(y._caScrollDist||0))}},l.enable=function(c,h){l.enabled||(l.enabled=!0,ue(D,"resize",ir),ue(ce?U:D,"scroll",Ht),Ie&&ue(i,"refreshInit",Ie),c!==!1&&(l.progress=qe=0,De=Xe=ct=X()),h!==!1&&l.refresh())},l.getTween=function(c){return c&&fe?fe.tween:Y},l.setPositions=function(c,h){f&&(Ae+=c-O,de+=h-c-W),l.start=O=c,l.end=pe=h,W=h-c,l.update()},l.disable=function(c,h){if(l.enabled&&(c!==!1&&l.revert(!0,!0),l.enabled=l.isActive=!1,h||Y&&Y.pause(),wt=0,we&&(we.uncache=1),Ie&&se(i,"refreshInit",Ie),Ne&&(Ne.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!ce)){for(var _=T.length;_--;)if(T[_].scroller===D&&T[_]!==l)return;se(D,"resize",ir),se(D,"scroll",Ht)}},l.kill=function(c,h){l.disable(c,h),Y&&!h&&Y.kill(),p&&delete Jr[p];var _=T.indexOf(l);_>=0&&T.splice(_,1),_===Se&&Or>0&&Se--,_=0,T.forEach(function(w){return w.scroller===l.scroller&&(_=1)}),_||nt||(l.scroll.rec=0),r&&(r.scrollTrigger=null,c&&r.render(-1),h||r.kill()),Oe&&[Oe,$e,xe,u].forEach(function(w){return w.parentNode&&w.parentNode.removeChild(w)}),Mt===l&&(Mt=0),f&&(we&&(we.uncache=1),_=0,T.forEach(function(w){return w.pin===f&&_++}),_||(we.spacer=0)),t.onKill&&t.onKill(l)},l.enable(!1,!1),tt&&tt(l),!r||!r.add||W?l.refresh():b.delayedCall(.01,function(){return O||pe||l.refresh()})&&(W=.01)&&(O=pe=0)},i.register=function(t){return Bt||(b=t||Hn(),Fn()&&window.document&&i.enable(),Bt=wr),Bt},i.defaults=function(t){if(t)for(var r in t)mr[r]=t[r];return mr},i.disable=function(t,r){wr=0,T.forEach(function(a){return a[r?"kill":"disable"](t)}),se(P,"wheel",Ht),se(U,"scroll",Ht),clearInterval(_r),se(U,"touchcancel",je),se(q,"touchstart",je),vr(se,U,"pointerdown,touchstart,mousedown",dn),vr(se,U,"pointerup,touchend,mouseup",gn),Yr.kill(),xr(se);for(var o=0;o<A.length;o+=3)yr(se,A[o],A[o+1]),yr(se,A[o],A[o+2])},i.enable=function(){if(P=window,U=document,st=U.documentElement,q=U.body,b&&(Ir=b.utils.toArray,Gt=b.utils.clamp,Zr=b.core.context||je,Hr=b.core.suppressOverwrites||je,b.core.globals("ScrollTrigger",i),q)){wr=1,te.register(b),i.isTouch=te.isTouch,xt=te.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ue(P,"wheel",Ht),Rn=[P,U,st,q],b.matchMedia?(i.matchMedia=function(p){var E=b.matchMedia(),k;for(k in p)E.add(k,p[k]);return E},b.addEventListener("matchMediaInit",function(){return sn()}),b.addEventListener("matchMediaRevert",function(){return $n()}),b.addEventListener("matchMedia",function(){Vt(0,1),Lt("matchMedia")}),b.matchMedia("(orientation: portrait)",function(){return wn(),wn})):console.warn("Requires GSAP 3.11.0 or later"),ue(U,"scroll",Ht);var t=q.style,r=t.borderTopStyle,o=b.core.Animation.prototype,a,s;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),t.borderTopStyle="solid",a=ot(q),ie.m=Math.round(a.top+ie.sc())||0,ke.m=Math.round(a.left+ke.sc())||0,r?t.borderTopStyle=r:t.removeProperty("border-top-style"),_r=setInterval(bn,250),b.delayedCall(.5,function(){return br=0}),ue(U,"touchcancel",je),ue(q,"touchstart",je),vr(ue,U,"pointerdown,touchstart,mousedown",dn),vr(ue,U,"pointerup,touchend,mouseup",gn),Kr=b.utils.checkPrefix("transform"),Ar.push(Kr),Bt=Te(),Yr=b.delayedCall(.2,Vt).pause(),Nt=[U,"visibilitychange",function(){var p=P.innerWidth,E=P.innerHeight;U.hidden?(fn=p,pn=E):(fn!==p||pn!==E)&&ir()},U,"DOMContentLoaded",Vt,P,"load",Vt,P,"resize",ir],xr(ue),T.forEach(function(p){return p.enable(0,1)}),s=0;s<A.length;s+=3)yr(se,A[s],A[s+1]),yr(se,A[s],A[s+2])}},i.config=function(t){"limitCallbacks"in t&&(Br=!!t.limitCallbacks);var r=t.syncInterval;r&&clearInterval(_r)||(_r=r)&&setInterval(bn,r),"ignoreMobileResize"in t&&(In=i.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(xr(se)||xr(ue,t.autoRefreshEvents||"none"),Yn=(t.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(t,r){var o=Pe(t),a=A.indexOf(o),s=At(o);~a&&A.splice(a,s?6:2),r&&(s?Qe.unshift(P,r,q,r,st,r):Qe.unshift(o,r))},i.clearMatchMedia=function(t){T.forEach(function(r){return r._ctx&&r._ctx.query===t&&r._ctx.kill(!0,!0)})},i.isInViewport=function(t,r,o){var a=(Ze(t)?Pe(t):t).getBoundingClientRect(),s=a[o?Dt:Ot]*r||0;return o?a.right-s>0&&a.left+s<P.innerWidth:a.bottom-s>0&&a.top+s<P.innerHeight},i.positionInViewport=function(t,r,o){Ze(t)&&(t=Pe(t));var a=t.getBoundingClientRect(),s=a[o?Dt:Ot],p=r==null?s/2:r in Xr?Xr[r]*s:~r.indexOf("%")?parseFloat(r)*s/100:parseFloat(r)||0;return o?(a.left+p)/P.innerWidth:(a.top+p)/P.innerHeight},i.killAll=function(t){if(T.forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),t!==!0){var r=Rt.killAll||[];Rt={},r.forEach(function(o){return o()})}},i}();R.version="3.11.1";R.saveStyles=function(i){return i?Ir(i).forEach(function(e){if(e&&e.style){var n=Le.indexOf(e);n>=0&&Le.splice(n,5),Le.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),b.core.getCache(e),Zr())}}):Le};R.revert=function(i,e){return sn(!i,e)};R.create=function(i,e){return new R(i,e)};R.refresh=function(i){return i?ir():(Bt||R.register())&&Vt(!0)};R.update=pr;R.clearScrollMemory=Un;R.maxScroll=function(i,e){return vt(i,e?ke:ie)};R.getScrollFunc=function(i,e){return mt(Pe(i),e?ke:ie)};R.getById=function(i){return Jr[i]};R.getAll=function(){return T.filter(function(i){return i.vars.id!=="ScrollSmoother"})};R.isScrolling=function(){return!!He};R.snapDirectional=on;R.addEventListener=function(i,e){var n=Rt[i]||(Rt[i]=[]);~n.indexOf(e)||n.push(e)};R.removeEventListener=function(i,e){var n=Rt[i],t=n&&n.indexOf(e);t>=0&&n.splice(t,1)};R.batch=function(i,e){var n=[],t={},r=e.interval||.016,o=e.batchMax||1e9,a=function(E,k){var x=[],d=[],f=b.delayedCall(r,function(){k(x,d),x=[],d=[]}).pause();return function(g){x.length||f.restart(!0),x.push(g.trigger),d.push(g),o<=x.length&&f.progress(1)}},s;for(s in e)t[s]=s.substr(0,2)==="on"&&lt(e[s])&&s!=="onRefreshInit"?a(s,e[s]):e[s];return lt(o)&&(o=o(),ue(R,"refresh",function(){return o=e.batchMax()})),Ir(i).forEach(function(p){var E={};for(s in t)E[s]=t[s];E.trigger=p,n.push(R.create(E))}),n};var Sn=function(e,n,t,r){return n>r?e(r):n<0&&e(0),t>r?(r-n)/(t-n):t<0?n/(n-t):1},Vr=function i(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(te.isTouch?" pinch-zoom":""):"none",e===st&&i(q,n)},Tn={auto:1,scroll:1},ao=function(e){var n=e.event,t=e.target,r=e.axis,o=(n.changedTouches?n.changedTouches[0]:n).target,a=o._gsap||b.core.getCache(o),s=Te(),p;if(!a._isScrollT||s-a._isScrollT>2e3){for(;o&&o.scrollHeight<=o.clientHeight;)o=o.parentNode;a._isScroll=o&&!At(o)&&o!==t&&(Tn[(p=Je(o)).overflowY]||Tn[p.overflowX]),a._isScrollT=s}(a._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},qn=function(e,n,t,r){return te.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&ao,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return t&&ue(U,te.eventTypes[0],Cn,!1,!0)},onDisable:function(){return se(U,te.eventTypes[0],Cn,!0)}})},uo=/(input|label|select|textarea)/i,kn,Cn=function(e){var n=uo.test(e.target.tagName);(n||kn)&&(e._gsapAllow=!0,kn=n)},co=function(e){Mr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,t=n.normalizeScrollX,r=n.momentum,o=n.allowNestedScroll,a,s,p=Pe(e.target)||st,E=b.core.globals().ScrollSmoother,k=E&&E.get(),x=xt&&(e.content&&Pe(e.content)||k&&e.content!==!1&&!k.smooth()&&k.content()),d=mt(p,ie),f=mt(p,ke),g=1,B=(te.isTouch&&P.visualViewport?P.visualViewport.scale*P.visualViewport.width:P.outerWidth)/P.innerWidth,F=0,S=lt(r)?function(){return r(a)}:function(){return r||2.8},le,K,C=qn(p,e.type,!0,o),he=function(){return K=!1},N=je,y=je,Ee=function(){s=vt(p,ie),y=Gt(xt?1:0,s),t&&(N=Gt(0,vt(p,ke))),le=Dr},Be=function(){x._gsap.y=nr(parseFloat(x._gsap.y)+d.offset)+"px",x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(x._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},m=function(){if(K){requestAnimationFrame(he);var be=nr(a.deltaY/2),H=y(d.v-be);if(x&&H!==d.v+d.offset){d.offset=H-d.v;var re=nr((parseFloat(x&&x._gsap.y)||0)-d.offset);x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+re+", 0, 1)",x._gsap.y=re+"px",d.cacheID=A.cache,pr()}return!0}d.offset&&Be(),K=!0},I,D,Ve,ce,_e=function(){Ee(),I.isActive()&&I.vars.scrollY>s&&(d()>s?I.progress(1)&&d(s):I.resetTo("scrollY",s))};return x&&b.set(x,{y:"+=0"}),e.ignoreCheck=function(L){return xt&&L.type==="touchmove"&&m()||g>1.05&&L.type!=="touchstart"||a.isGesturing||L.touches&&L.touches.length>1},e.onPress=function(){var L=g;g=nr((P.visualViewport&&P.visualViewport.scale||1)/B),I.pause(),L!==g&&Vr(p,g>1.01?!0:t?!1:"x"),D=f(),Ve=d(),Ee(),le=Dr},e.onRelease=e.onGestureStart=function(L,be){if(d.offset&&Be(),!be)ce.restart(!0);else{A.cache++;var H=S(),re,l;t&&(re=f(),l=re+H*.05*-L.velocityX/.227,H*=Sn(f,re,l,vt(p,ke)),I.vars.scrollX=N(l)),re=d(),l=re+H*.05*-L.velocityY/.227,H*=Sn(d,re,l,vt(p,ie)),I.vars.scrollY=y(l),I.invalidate().duration(H).play(.01),(xt&&I.vars.scrollY>=s||re>=s-1)&&b.to({},{onUpdate:_e,duration:H})}},e.onWheel=function(){I._ts&&I.pause(),Te()-F>1e3&&(le=0,F=Te())},e.onChange=function(L,be,H,re,l){if(Dr!==le&&Ee(),be&&t&&f(N(re[2]===be?D+(L.startX-L.x):f()+be-re[1])),H){d.offset&&Be();var Ie=l[2]===H,at=Ie?Ve+L.startY-L.y:d()+H-l[1],ut=y(at);Ie&&at!==ut&&(Ve+=ut-at),d(ut)}(H||be)&&pr()},e.onEnable=function(){Vr(p,t?!1:"x"),ue(P,"resize",_e),C.enable()},e.onDisable=function(){Vr(p,!0),se(P,"resize",_e),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new te(e),a.iOS=xt,xt&&!d()&&d(1),xt&&b.ticker.add(je),ce=a._dc,I=b.to(a,{ease:"power4",paused:!0,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:ce.vars.onComplete}),a};R.sort=function(i){return T.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+e.start-(n.start+(n.vars.refreshPriority||0)*-1e6)})};R.observe=function(i){return new te(i)};R.normalizeScroll=function(i){if(typeof i>"u")return ze;if(i===!0&&ze)return ze.enable();if(i===!1)return ze&&ze.kill();var e=i instanceof te?i:co(i);return ze&&ze.target===e.target&&ze.kill(),At(e.target)&&(ze=e),e};R.core={_getVelocityProp:qr,_inputObserver:qn,_scrollers:A,_proxies:Qe,bridge:{ss:function(){He||Lt("scrollStart"),He=Te()},ref:function(){return ae}}};Hn()&&b.registerPlugin(R);export{R as S};
