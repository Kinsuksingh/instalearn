(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function s(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(u){if(u.ep)return;u.ep=!0;const f=s(u);fetch(u.href,f)}})();function Vl(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var yu={exports:{}},_l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Eb(){if(Kp)return _l;Kp=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function s(o,u,f){var p=null;if(f!==void 0&&(p=""+f),u.key!==void 0&&(p=""+u.key),"key"in u){f={};for(var v in u)v!=="key"&&(f[v]=u[v])}else f=u;return u=f.ref,{$$typeof:a,type:o,key:p,ref:u!==void 0?u:null,props:f}}return _l.Fragment=l,_l.jsx=s,_l.jsxs=s,_l}var Zp;function jb(){return Zp||(Zp=1,yu.exports=Eb()),yu.exports}var d=jb(),vu={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Cb(){if(Jp)return ce;Jp=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),j=Symbol.iterator;function R(C){return C===null||typeof C!="object"?null:(C=j&&C[j]||C["@@iterator"],typeof C=="function"?C:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,U={};function M(C,G,F){this.props=C,this.context=G,this.refs=U,this.updater=F||k}M.prototype.isReactComponent={},M.prototype.setState=function(C,G){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,G,"setState")},M.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function $(){}$.prototype=M.prototype;function L(C,G,F){this.props=C,this.context=G,this.refs=U,this.updater=F||k}var Z=L.prototype=new $;Z.constructor=L,_(Z,M.prototype),Z.isPureReactComponent=!0;var J=Array.isArray;function H(){}var V={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function de(C,G,F){var W=F.ref;return{$$typeof:a,type:C,key:G,ref:W!==void 0?W:null,props:F}}function _e(C,G){return de(C.type,G,C.props)}function Ae(C){return typeof C=="object"&&C!==null&&C.$$typeof===a}function Be(C){var G={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(F){return G[F]})}var P=/\/+/g;function Q(C,G){return typeof C=="object"&&C!==null&&C.key!=null?Be(""+C.key):G.toString(36)}function re(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(H,H):(C.status="pending",C.then(function(G){C.status==="pending"&&(C.status="fulfilled",C.value=G)},function(G){C.status==="pending"&&(C.status="rejected",C.reason=G)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function N(C,G,F,W,ie){var se=typeof C;(se==="undefined"||se==="boolean")&&(C=null);var me=!1;if(C===null)me=!0;else switch(se){case"bigint":case"string":case"number":me=!0;break;case"object":switch(C.$$typeof){case a:case l:me=!0;break;case x:return me=C._init,N(me(C._payload),G,F,W,ie)}}if(me)return ie=ie(C),me=W===""?"."+Q(C,0):W,J(ie)?(F="",me!=null&&(F=me.replace(P,"$&/")+"/"),N(ie,G,F,"",function(jt){return jt})):ie!=null&&(Ae(ie)&&(ie=_e(ie,F+(ie.key==null||C&&C.key===ie.key?"":(""+ie.key).replace(P,"$&/")+"/")+me)),G.push(ie)),1;me=0;var qe=W===""?".":W+":";if(J(C))for(var Se=0;Se<C.length;Se++)W=C[Se],se=qe+Q(W,Se),me+=N(W,G,F,se,ie);else if(Se=R(C),typeof Se=="function")for(C=Se.call(C),Se=0;!(W=C.next()).done;)W=W.value,se=qe+Q(W,Se++),me+=N(W,G,F,se,ie);else if(se==="object"){if(typeof C.then=="function")return N(re(C),G,F,W,ie);throw G=String(C),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return me}function K(C,G,F){if(C==null)return C;var W=[],ie=0;return N(C,W,"","",function(se){return G.call(F,se,ie++)}),W}function I(C){if(C._status===-1){var G=C._result;G=G(),G.then(function(F){(C._status===0||C._status===-1)&&(C._status=1,C._result=F)},function(F){(C._status===0||C._status===-1)&&(C._status=2,C._result=F)}),C._status===-1&&(C._status=0,C._result=G)}if(C._status===1)return C._result.default;throw C._result}var ee=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ue={map:K,forEach:function(C,G,F){K(C,function(){G.apply(this,arguments)},F)},count:function(C){var G=0;return K(C,function(){G++}),G},toArray:function(C){return K(C,function(G){return G})||[]},only:function(C){if(!Ae(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return ce.Activity=w,ce.Children=ue,ce.Component=M,ce.Fragment=s,ce.Profiler=u,ce.PureComponent=L,ce.StrictMode=o,ce.Suspense=g,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ce.__COMPILER_RUNTIME={__proto__:null,c:function(C){return V.H.useMemoCache(C)}},ce.cache=function(C){return function(){return C.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(C,G,F){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var W=_({},C.props),ie=C.key;if(G!=null)for(se in G.key!==void 0&&(ie=""+G.key),G)!ne.call(G,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&G.ref===void 0||(W[se]=G[se]);var se=arguments.length-2;if(se===1)W.children=F;else if(1<se){for(var me=Array(se),qe=0;qe<se;qe++)me[qe]=arguments[qe+2];W.children=me}return de(C.type,ie,W)},ce.createContext=function(C){return C={$$typeof:p,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},ce.createElement=function(C,G,F){var W,ie={},se=null;if(G!=null)for(W in G.key!==void 0&&(se=""+G.key),G)ne.call(G,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ie[W]=G[W]);var me=arguments.length-2;if(me===1)ie.children=F;else if(1<me){for(var qe=Array(me),Se=0;Se<me;Se++)qe[Se]=arguments[Se+2];ie.children=qe}if(C&&C.defaultProps)for(W in me=C.defaultProps,me)ie[W]===void 0&&(ie[W]=me[W]);return de(C,se,ie)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(C){return{$$typeof:v,render:C}},ce.isValidElement=Ae,ce.lazy=function(C){return{$$typeof:x,_payload:{_status:-1,_result:C},_init:I}},ce.memo=function(C,G){return{$$typeof:m,type:C,compare:G===void 0?null:G}},ce.startTransition=function(C){var G=V.T,F={};V.T=F;try{var W=C(),ie=V.S;ie!==null&&ie(F,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(H,ee)}catch(se){ee(se)}finally{G!==null&&F.types!==null&&(G.types=F.types),V.T=G}},ce.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ce.use=function(C){return V.H.use(C)},ce.useActionState=function(C,G,F){return V.H.useActionState(C,G,F)},ce.useCallback=function(C,G){return V.H.useCallback(C,G)},ce.useContext=function(C){return V.H.useContext(C)},ce.useDebugValue=function(){},ce.useDeferredValue=function(C,G){return V.H.useDeferredValue(C,G)},ce.useEffect=function(C,G){return V.H.useEffect(C,G)},ce.useEffectEvent=function(C){return V.H.useEffectEvent(C)},ce.useId=function(){return V.H.useId()},ce.useImperativeHandle=function(C,G,F){return V.H.useImperativeHandle(C,G,F)},ce.useInsertionEffect=function(C,G){return V.H.useInsertionEffect(C,G)},ce.useLayoutEffect=function(C,G){return V.H.useLayoutEffect(C,G)},ce.useMemo=function(C,G){return V.H.useMemo(C,G)},ce.useOptimistic=function(C,G){return V.H.useOptimistic(C,G)},ce.useReducer=function(C,G,F){return V.H.useReducer(C,G,F)},ce.useRef=function(C){return V.H.useRef(C)},ce.useState=function(C){return V.H.useState(C)},ce.useSyncExternalStore=function(C,G,F){return V.H.useSyncExternalStore(C,G,F)},ce.useTransition=function(){return V.H.useTransition()},ce.version="19.2.0",ce}var Fp;function yf(){return Fp||(Fp=1,vu.exports=Cb()),vu.exports}var y=yf();const Re=Vl(y);var bu={exports:{}},Bl={},xu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Tb(){return Wp||(Wp=1,(function(a){function l(N,K){var I=N.length;N.push(K);e:for(;0<I;){var ee=I-1>>>1,ue=N[ee];if(0<u(ue,K))N[ee]=K,N[I]=ue,I=ee;else break e}}function s(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var K=N[0],I=N.pop();if(I!==K){N[0]=I;e:for(var ee=0,ue=N.length,C=ue>>>1;ee<C;){var G=2*(ee+1)-1,F=N[G],W=G+1,ie=N[W];if(0>u(F,I))W<ue&&0>u(ie,F)?(N[ee]=ie,N[W]=I,ee=W):(N[ee]=F,N[G]=I,ee=G);else if(W<ue&&0>u(ie,I))N[ee]=ie,N[W]=I,ee=W;else break e}}return K}function u(N,K){var I=N.sortIndex-K.sortIndex;return I!==0?I:N.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var p=Date,v=p.now();a.unstable_now=function(){return p.now()-v}}var g=[],m=[],x=1,w=null,j=3,R=!1,k=!1,_=!1,U=!1,M=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function Z(N){for(var K=s(m);K!==null;){if(K.callback===null)o(m);else if(K.startTime<=N)o(m),K.sortIndex=K.expirationTime,l(g,K);else break;K=s(m)}}function J(N){if(_=!1,Z(N),!k)if(s(g)!==null)k=!0,H||(H=!0,Be());else{var K=s(m);K!==null&&re(J,K.startTime-N)}}var H=!1,V=-1,ne=5,de=-1;function _e(){return U?!0:!(a.unstable_now()-de<ne)}function Ae(){if(U=!1,H){var N=a.unstable_now();de=N;var K=!0;try{e:{k=!1,_&&(_=!1,$(V),V=-1),R=!0;var I=j;try{t:{for(Z(N),w=s(g);w!==null&&!(w.expirationTime>N&&_e());){var ee=w.callback;if(typeof ee=="function"){w.callback=null,j=w.priorityLevel;var ue=ee(w.expirationTime<=N);if(N=a.unstable_now(),typeof ue=="function"){w.callback=ue,Z(N),K=!0;break t}w===s(g)&&o(g),Z(N)}else o(g);w=s(g)}if(w!==null)K=!0;else{var C=s(m);C!==null&&re(J,C.startTime-N),K=!1}}break e}finally{w=null,j=I,R=!1}K=void 0}}finally{K?Be():H=!1}}}var Be;if(typeof L=="function")Be=function(){L(Ae)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,Q=P.port2;P.port1.onmessage=Ae,Be=function(){Q.postMessage(null)}}else Be=function(){M(Ae,0)};function re(N,K){V=M(function(){N(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return j},a.unstable_next=function(N){switch(j){case 1:case 2:case 3:var K=3;break;default:K=j}var I=j;j=K;try{return N()}finally{j=I}},a.unstable_requestPaint=function(){U=!0},a.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var I=j;j=N;try{return K()}finally{j=I}},a.unstable_scheduleCallback=function(N,K,I){var ee=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ee+I:ee):I=ee,N){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=I+ue,N={id:x++,callback:K,priorityLevel:N,startTime:I,expirationTime:ue,sortIndex:-1},I>ee?(N.sortIndex=I,l(m,N),s(g)===null&&N===s(m)&&(_?($(V),V=-1):_=!0,re(J,I-ee))):(N.sortIndex=ue,l(g,N),k||R||(k=!0,H||(H=!0,Be()))),N},a.unstable_shouldYield=_e,a.unstable_wrapCallback=function(N){var K=j;return function(){var I=j;j=K;try{return N.apply(this,arguments)}finally{j=I}}}})(Su)),Su}var Ip;function zb(){return Ip||(Ip=1,xu.exports=Tb()),xu.exports}var wu={exports:{}},ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function Rb(){if(Pp)return ft;Pp=1;var a=yf();function l(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(l(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(g,m,x){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:w==null?null:""+w,children:g,containerInfo:m,implementation:x}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ft.createPortal=function(g,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return f(g,m,null,x)},ft.flushSync=function(g){var m=p.T,x=o.p;try{if(p.T=null,o.p=2,g)return g()}finally{p.T=m,o.p=x,o.d.f()}},ft.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(g,m))},ft.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},ft.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var x=m.as,w=v(x,m.crossOrigin),j=typeof m.integrity=="string"?m.integrity:void 0,R=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?o.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:j,fetchPriority:R}):x==="script"&&o.d.X(g,{crossOrigin:w,integrity:j,fetchPriority:R,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ft.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=v(m.as,m.crossOrigin);o.d.M(g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(g)},ft.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,w=v(x,m.crossOrigin);o.d.L(g,x,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ft.preloadModule=function(g,m){if(typeof g=="string")if(m){var x=v(m.as,m.crossOrigin);o.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(g)},ft.requestFormReset=function(g){o.d.r(g)},ft.unstable_batchedUpdates=function(g,m){return g(m)},ft.useFormState=function(g,m,x){return p.H.useFormState(g,m,x)},ft.useFormStatus=function(){return p.H.useHostTransitionStatus()},ft.version="19.2.0",ft}var em;function p1(){if(em)return wu.exports;em=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),wu.exports=Rb(),wu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function kb(){if(tm)return Bl;tm=1;var a=zb(),l=yf(),s=p1();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return g(r),e;if(c===i)return g(r),t;c=c.sibling}throw Error(o(188))}if(n.return!==i.return)n=r,i=c;else{for(var h=!1,b=r.child;b;){if(b===n){h=!0,n=r,i=c;break}if(b===i){h=!0,i=r,n=c;break}b=b.sibling}if(!h){for(b=c.child;b;){if(b===n){h=!0,n=c,i=r;break}if(b===i){h=!0,i=c,n=r;break}b=b.sibling}if(!h)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,j=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),_e=Symbol.for("react.memo_cache_sentinel"),Ae=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=Ae&&e[Ae]||e["@@iterator"],typeof e=="function"?e:null)}var P=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===P?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case M:return"Profiler";case U:return"StrictMode";case J:return"Suspense";case H:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case L:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:Q(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return Q(e(t))}catch{}}return null}var re=Array.isArray,N=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ee=[],ue=-1;function C(e){return{current:e}}function G(e){0>ue||(e.current=ee[ue],ee[ue]=null,ue--)}function F(e,t){ue++,ee[ue]=e.current,e.current=t}var W=C(null),ie=C(null),se=C(null),me=C(null);function qe(e,t){switch(F(se,t),F(ie,e),F(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gp(t),e=yp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(W),F(W,e)}function Se(){G(W),G(ie),G(se)}function jt(e){e.memoizedState!==null&&F(me,e);var t=W.current,n=yp(t,e.type);t!==n&&(F(ie,e),F(W,n))}function Jt(e){ie.current===e&&(G(W),G(ie)),me.current===e&&(G(me),Ml._currentValue=I)}var pt,La;function Lt(e){if(pt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pt=t&&t[1]||"",La=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pt+e+La}var Le=!1;function $a(e,t){if(!e||Le)return"";Le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(B){var D=B}Reflect.construct(e,[],X)}else{try{X.call()}catch(B){D=B}e.call(X.prototype)}}else{try{throw Error()}catch(B){D=B}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(B){if(B&&D&&typeof B.stack=="string")return[B.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),h=c[0],b=c[1];if(h&&b){var E=h.split(`
`),O=b.split(`
`);for(r=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(i===E.length||r===O.length)for(i=E.length-1,r=O.length-1;1<=i&&0<=r&&E[i]!==O[r];)r--;for(;1<=i&&0<=r;i--,r--)if(E[i]!==O[r]){if(i!==1||r!==1)do if(i--,r--,0>r||E[i]!==O[r]){var Y=`
`+E[i].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=i&&0<=r);break}}}finally{Le=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Lt(n):""}function Yi(e,t){switch(e.tag){case 26:case 27:case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return e.child!==t&&t!==null?Lt("Suspense Fallback"):Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return $a(e.type,!1);case 11:return $a(e.type.render,!1);case 1:return $a(e.type,!0);case 31:return Lt("Activity");default:return""}}function Kf(e){try{var t="",n=null;do t+=Yi(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ns=Object.prototype.hasOwnProperty,as=a.unstable_scheduleCallback,is=a.unstable_cancelCallback,ty=a.unstable_shouldYield,ny=a.unstable_requestPaint,Ct=a.unstable_now,ay=a.unstable_getCurrentPriorityLevel,Zf=a.unstable_ImmediatePriority,Jf=a.unstable_UserBlockingPriority,Fl=a.unstable_NormalPriority,iy=a.unstable_LowPriority,Ff=a.unstable_IdlePriority,ly=a.log,ry=a.unstable_setDisableYieldValue,qi=null,Tt=null;function Hn(e){if(typeof ly=="function"&&ry(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(qi,e)}catch{}}var zt=Math.clz32?Math.clz32:cy,oy=Math.log,sy=Math.LN2;function cy(e){return e>>>=0,e===0?32:31-(oy(e)/sy|0)|0}var Wl=256,Il=262144,Pl=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function er(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,c=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~c,i!==0?r=ma(i):(h&=b,h!==0?r=ma(h):n||(n=b&~e,n!==0&&(r=ma(n))))):(b=i&~c,b!==0?r=ma(b):h!==0?r=ma(h):n||(n=i&~e,n!==0&&(r=ma(n)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:r}function Xi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function uy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wf(){var e=Pl;return Pl<<=1,(Pl&62914560)===0&&(Pl=4194304),e}function ls(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fy(e,t,n,i,r,c){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,E=e.expirationTimes,O=e.hiddenUpdates;for(n=h&~n;0<n;){var Y=31-zt(n),X=1<<Y;b[Y]=0,E[Y]=-1;var D=O[Y];if(D!==null)for(O[Y]=null,Y=0;Y<D.length;Y++){var B=D[Y];B!==null&&(B.lane&=-536870913)}n&=~X}i!==0&&If(e,i,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(h&~t))}function If(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-zt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Pf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-zt(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function ed(e,t){var n=t&-t;return n=(n&42)!==0?1:rs(n),(n&(e.suspendedLanes|t))!==0?0:n}function rs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function os(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function td(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Hp(e.type))}function nd(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Gn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Gn,gt="__reactProps$"+Gn,Ua="__reactContainer$"+Gn,ss="__reactEvents$"+Gn,dy="__reactListeners$"+Gn,hy="__reactHandles$"+Gn,ad="__reactResources$"+Gn,Qi="__reactMarker$"+Gn;function cs(e){delete e[lt],delete e[gt],delete e[ss],delete e[dy],delete e[hy]}function Ha(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ua]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jp(e);e!==null;){if(n=e[lt])return n;e=jp(e)}return t}e=n,n=e.parentNode}return null}function Ga(e){if(e=e[lt]||e[Ua]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ki(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ya(e){var t=e[ad];return t||(t=e[ad]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Qi]=!0}var id=new Set,ld={};function ga(e,t){qa(e,t),qa(e+"Capture",t)}function qa(e,t){for(ld[e]=t,e=0;e<t.length;e++)id.add(t[e])}var py=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rd={},od={};function my(e){return ns.call(od,e)?!0:ns.call(rd,e)?!1:py.test(e)?od[e]=!0:(rd[e]=!0,!1)}function tr(e,t,n){if(my(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function nr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function hn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(h){n=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function us(e){if(!e._valueTracker){var t=sd(e)?"checked":"value";e._valueTracker=gy(e,t,""+e[t])}}function cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=sd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ar(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var yy=/[\n"\\]/g;function Ut(e){return e.replace(yy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fs(e,t,n,i,r,c,h,b){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$t(t)):e.value!==""+$t(t)&&(e.value=""+$t(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?ds(e,h,$t(t)):n!=null?ds(e,h,$t(n)):i!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+$t(b):e.removeAttribute("name")}function ud(e,t,n,i,r,c,h,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){us(e);return}n=n!=null?""+$t(n):"",t=t!=null?""+$t(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),us(e)}function ds(e,t,n){t==="number"&&ar(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Xa(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function fd(e,t,n){if(t!=null&&(t=""+$t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$t(n):""}function dd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(re(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=$t(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),us(e)}function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||vy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function pd(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&hd(e,r,i)}else for(var c in t)t.hasOwnProperty(c)&&hd(e,c,t[c])}function hs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var by=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ir(e){return xy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pn(){}var ps=null;function ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,Ka=null;function md(e){var t=Ga(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(fs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[gt]||null;if(!r)throw Error(o(90));fs(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&cd(i)}break e;case"textarea":fd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Xa(e,!!n.multiple,t,!1)}}}var gs=!1;function gd(e,t,n){if(gs)return e(t,n);gs=!0;try{var i=e(t);return i}finally{if(gs=!1,(Qa!==null||Ka!==null)&&(Vr(),Qa&&(t=Qa,e=Ka,Ka=Qa=null,md(t),e)))for(t=0;t<e.length;t++)md(e[t])}}function Zi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[gt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ys=!1;if(mn)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){ys=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{ys=!1}var Yn=null,vs=null,lr=null;function yd(){if(lr)return lr;var e,t=vs,n=t.length,i,r="value"in Yn?Yn.value:Yn.textContent,c=r.length;for(e=0;e<n&&t[e]===r[e];e++);var h=n-e;for(i=1;i<=h&&t[n-i]===r[c-i];i++);return lr=r.slice(e,1<i?1-i:void 0)}function rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function or(){return!0}function vd(){return!1}function yt(e){function t(n,i,r,c,h){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?or:vd,this.isPropagationStopped=vd,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),t}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sr=yt(ya),Fi=w({},ya,{view:0,detail:0}),Sy=yt(Fi),bs,xs,Wi,cr=w({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(bs=e.screenX-Wi.screenX,xs=e.screenY-Wi.screenY):xs=bs=0,Wi=e),bs)},movementY:function(e){return"movementY"in e?e.movementY:xs}}),bd=yt(cr),wy=w({},cr,{dataTransfer:0}),Ey=yt(wy),jy=w({},Fi,{relatedTarget:0}),Ss=yt(jy),Cy=w({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),Ty=yt(Cy),zy=w({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ry=yt(zy),ky=w({},ya,{data:0}),xd=yt(ky),Ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ny(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Oy[e])?!!t[e]:!1}function ws(){return Ny}var Dy=w({},Fi,{key:function(e){if(e.key){var t=Ay[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?My[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ws,charCode:function(e){return e.type==="keypress"?rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_y=yt(Dy),By=w({},cr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=yt(By),Ly=w({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ws}),$y=yt(Ly),Uy=w({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=yt(Uy),Gy=w({},cr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=yt(Gy),qy=w({},ya,{newState:0,oldState:0}),Xy=yt(qy),Vy=[9,13,27,32],Es=mn&&"CompositionEvent"in window,Ii=null;mn&&"documentMode"in document&&(Ii=document.documentMode);var Qy=mn&&"TextEvent"in window&&!Ii,wd=mn&&(!Es||Ii&&8<Ii&&11>=Ii),Ed=" ",jd=!1;function Cd(e,t){switch(e){case"keyup":return Vy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Td(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Za=!1;function Ky(e,t){switch(e){case"compositionend":return Td(t);case"keypress":return t.which!==32?null:(jd=!0,Ed);case"textInput":return e=t.data,e===Ed&&jd?null:e;default:return null}}function Zy(e,t){if(Za)return e==="compositionend"||!Es&&Cd(e,t)?(e=yd(),lr=vs=Yn=null,Za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wd&&t.locale!=="ko"?null:t.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jy[e.type]:t==="textarea"}function Rd(e,t,n,i){Qa?Ka?Ka.push(i):Ka=[i]:Qa=i,t=Ir(t,"onChange"),0<t.length&&(n=new sr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Pi=null,el=null;function Fy(e){up(e,0)}function ur(e){var t=Ki(e);if(cd(t))return e}function kd(e,t){if(e==="change")return t}var Ad=!1;if(mn){var js;if(mn){var Cs="oninput"in document;if(!Cs){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),Cs=typeof Md.oninput=="function"}js=Cs}else js=!1;Ad=js&&(!document.documentMode||9<document.documentMode)}function Od(){Pi&&(Pi.detachEvent("onpropertychange",Nd),el=Pi=null)}function Nd(e){if(e.propertyName==="value"&&ur(el)){var t=[];Rd(t,el,e,ms(e)),gd(Fy,t)}}function Wy(e,t,n){e==="focusin"?(Od(),Pi=t,el=n,Pi.attachEvent("onpropertychange",Nd)):e==="focusout"&&Od()}function Iy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ur(el)}function Py(e,t){if(e==="click")return ur(t)}function ev(e,t){if(e==="input"||e==="change")return ur(t)}function tv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:tv;function tl(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ns.call(t,r)||!Rt(e[r],t[r]))return!1}return!0}function Dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _d(e,t){var n=Dd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dd(n)}}function Bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ld(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ar(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ar(e.document)}return t}function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var nv=mn&&"documentMode"in document&&11>=document.documentMode,Ja=null,zs=null,nl=null,Rs=!1;function $d(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rs||Ja==null||Ja!==ar(i)||(i=Ja,"selectionStart"in i&&Ts(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),nl&&tl(nl,i)||(nl=i,i=Ir(zs,"onSelect"),0<i.length&&(t=new sr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ja)))}function va(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fa={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},ks={},Ud={};mn&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function ba(e){if(ks[e])return ks[e];if(!Fa[e])return e;var t=Fa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ud)return ks[e]=t[n];return e}var Hd=ba("animationend"),Gd=ba("animationiteration"),Yd=ba("animationstart"),av=ba("transitionrun"),iv=ba("transitionstart"),lv=ba("transitioncancel"),qd=ba("transitionend"),Xd=new Map,As="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");As.push("scrollEnd");function Ft(e,t){Xd.set(e,t),ga(t,[e])}var fr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],Wa=0,Ms=0;function dr(){for(var e=Wa,t=Ms=Wa=0;t<e;){var n=Ht[t];Ht[t++]=null;var i=Ht[t];Ht[t++]=null;var r=Ht[t];Ht[t++]=null;var c=Ht[t];if(Ht[t++]=null,i!==null&&r!==null){var h=i.pending;h===null?r.next=r:(r.next=h.next,h.next=r),i.pending=r}c!==0&&Vd(n,r,c)}}function hr(e,t,n,i){Ht[Wa++]=e,Ht[Wa++]=t,Ht[Wa++]=n,Ht[Wa++]=i,Ms|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Os(e,t,n,i){return hr(e,t,n,i),pr(e)}function xa(e,t){return hr(e,null,null,t),pr(e)}function Vd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-zt(n),e=c.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),c):null}function pr(e){if(50<jl)throw jl=0,Gc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ia={};function rv(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,i){return new rv(e,t,n,i)}function Ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Qd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mr(e,t,n,i,r,c){var h=0;if(i=e,typeof e=="function")Ns(e)&&(h=1);else if(typeof e=="string")h=fb(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=kt(31,n,t,r),e.elementType=de,e.lanes=c,e;case _:return Sa(n.children,r,c,t);case U:h=8,r|=24;break;case M:return e=kt(12,n,t,r|2),e.elementType=M,e.lanes=c,e;case J:return e=kt(13,n,t,r),e.elementType=J,e.lanes=c,e;case H:return e=kt(19,n,t,r),e.elementType=H,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:h=10;break e;case $:h=9;break e;case Z:h=11;break e;case V:h=14;break e;case ne:h=16,i=null;break e}h=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=kt(h,n,t,r),t.elementType=e,t.type=i,t.lanes=c,t}function Sa(e,t,n,i){return e=kt(7,e,i,t),e.lanes=n,e}function Ds(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function Kd(e){var t=kt(18,null,null,0);return t.stateNode=e,t}function _s(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zd=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var n=Zd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Kf(t)},Zd.set(e,t),t)}return{value:e,source:t,stack:Kf(t)}}var Pa=[],ei=0,gr=null,al=0,Yt=[],qt=0,qn=null,an=1,ln="";function yn(e,t){Pa[ei++]=al,Pa[ei++]=gr,gr=e,al=t}function Jd(e,t,n){Yt[qt++]=an,Yt[qt++]=ln,Yt[qt++]=qn,qn=e;var i=an;e=ln;var r=32-zt(i)-1;i&=~(1<<r),n+=1;var c=32-zt(t)+r;if(30<c){var h=r-r%5;c=(i&(1<<h)-1).toString(32),i>>=h,r-=h,an=1<<32-zt(t)+r|n<<r|i,ln=c+e}else an=1<<c|n<<r|i,ln=e}function Bs(e){e.return!==null&&(yn(e,1),Jd(e,1,0))}function Ls(e){for(;e===gr;)gr=Pa[--ei],Pa[ei]=null,al=Pa[--ei],Pa[ei]=null;for(;e===qn;)qn=Yt[--qt],Yt[qt]=null,ln=Yt[--qt],Yt[qt]=null,an=Yt[--qt],Yt[qt]=null}function Fd(e,t){Yt[qt++]=an,Yt[qt++]=ln,Yt[qt++]=qn,an=t.id,ln=t.overflow,qn=e}var rt=null,$e=null,xe=!1,Xn=null,Xt=!1,$s=Error(o(519));function Vn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il(Gt(t,e)),$s}function Wd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[lt]=e,t[gt]=i,n){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(n=0;n<Tl.length;n++)ye(Tl[n],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),ud(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),dd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||pp(t.textContent,n)?(i.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),i.onScroll!=null&&ye("scroll",t),i.onScrollEnd!=null&&ye("scrollend",t),i.onClick!=null&&(t.onclick=pn),t=!0):t=!1,t||Vn(e,!0)}function Id(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:rt=rt.return}}function ti(e){if(e!==rt)return!1;if(!xe)return Id(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||nu(e.type,e.memoizedProps)),n=!n),n&&$e&&Vn(e),Id(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));$e=Ep(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));$e=Ep(e)}else t===27?(t=$e,la(e.type)?(e=ou,ou=null,$e=e):$e=t):$e=rt?Qt(e.stateNode.nextSibling):null;return!0}function wa(){$e=rt=null,xe=!1}function Us(){var e=Xn;return e!==null&&(St===null?St=e:St.push.apply(St,e),Xn=null),e}function il(e){Xn===null?Xn=[e]:Xn.push(e)}var Hs=C(null),Ea=null,vn=null;function Qn(e,t,n){F(Hs,t._currentValue),t._currentValue=n}function bn(e){e._currentValue=Hs.current,G(Hs)}function Gs(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ys(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var h=r.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=r;for(var E=0;E<t.length;E++)if(b.context===t[E]){c.lanes|=n,b=c.alternate,b!==null&&(b.lanes|=n),Gs(c.return,n,e),i||(h=null);break e}c=b.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(o(341));h.lanes|=n,c=h.alternate,c!==null&&(c.lanes|=n),Gs(h,n,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function ni(e,t,n,i){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var b=r.type;Rt(r.pendingProps.value,h.value)||(e!==null?e.push(b):e=[b])}}else if(r===me.current){if(h=r.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ml):e=[Ml])}r=r.return}e!==null&&Ys(t,e,n,i),t.flags|=262144}function yr(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){Ea=e,vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return Pd(Ea,e)}function vr(e,t){return Ea===null&&ja(e),Pd(e,t)}function Pd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},vn===null){if(e===null)throw Error(o(308));vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vn=vn.next=t;return n}var ov=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},sv=a.unstable_scheduleCallback,cv=a.unstable_NormalPriority,Je={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qs(){return{controller:new ov,data:new Map,refCount:0}}function ll(e){e.refCount--,e.refCount===0&&sv(cv,function(){e.controller.abort()})}var rl=null,Xs=0,ai=0,ii=null;function uv(e,t){if(rl===null){var n=rl=[];Xs=0,ai=Kc(),ii={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Xs++,t.then(e0,e0),t}function e0(){if(--Xs===0&&rl!==null){ii!==null&&(ii.status="fulfilled");var e=rl;rl=null,ai=0,ii=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fv(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var t0=N.S;N.S=function(e,t){$h=Ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&uv(e,t),t0!==null&&t0(e,t)};var Ca=C(null);function Vs(){var e=Ca.current;return e!==null?e:De.pooledCache}function br(e,t){t===null?F(Ca,Ca.current):F(Ca,t.pool)}function n0(){var e=Vs();return e===null?null:{parent:Je._currentValue,pool:e}}var li=Error(o(460)),Qs=Error(o(474)),xr=Error(o(542)),Sr={then:function(){}};function a0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function i0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(pn,pn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,r0(e),e;default:if(typeof t.status=="string")t.then(pn,pn);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,r0(e),e}throw za=t,li}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(za=n,li):n}}var za=null;function l0(){if(za===null)throw Error(o(459));var e=za;return za=null,e}function r0(e){if(e===li||e===xr)throw Error(o(483))}var ri=null,ol=0;function wr(e){var t=ol;return ol+=1,ri===null&&(ri=[]),i0(ri,e,t)}function sl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Er(e,t){throw t.$$typeof===j?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function o0(e){function t(z,T){if(e){var A=z.deletions;A===null?(z.deletions=[T],z.flags|=16):A.push(T)}}function n(z,T){if(!e)return null;for(;T!==null;)t(z,T),T=T.sibling;return null}function i(z){for(var T=new Map;z!==null;)z.key!==null?T.set(z.key,z):T.set(z.index,z),z=z.sibling;return T}function r(z,T){return z=gn(z,T),z.index=0,z.sibling=null,z}function c(z,T,A){return z.index=A,e?(A=z.alternate,A!==null?(A=A.index,A<T?(z.flags|=67108866,T):A):(z.flags|=67108866,T)):(z.flags|=1048576,T)}function h(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function b(z,T,A,q){return T===null||T.tag!==6?(T=Ds(A,z.mode,q),T.return=z,T):(T=r(T,A),T.return=z,T)}function E(z,T,A,q){var le=A.type;return le===_?Y(z,T,A.props.children,q,A.key):T!==null&&(T.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ne&&Ta(le)===T.type)?(T=r(T,A.props),sl(T,A),T.return=z,T):(T=mr(A.type,A.key,A.props,null,z.mode,q),sl(T,A),T.return=z,T)}function O(z,T,A,q){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=_s(A,z.mode,q),T.return=z,T):(T=r(T,A.children||[]),T.return=z,T)}function Y(z,T,A,q,le){return T===null||T.tag!==7?(T=Sa(A,z.mode,q,le),T.return=z,T):(T=r(T,A),T.return=z,T)}function X(z,T,A){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Ds(""+T,z.mode,A),T.return=z,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case R:return A=mr(T.type,T.key,T.props,null,z.mode,A),sl(A,T),A.return=z,A;case k:return T=_s(T,z.mode,A),T.return=z,T;case ne:return T=Ta(T),X(z,T,A)}if(re(T)||Be(T))return T=Sa(T,z.mode,A,null),T.return=z,T;if(typeof T.then=="function")return X(z,wr(T),A);if(T.$$typeof===L)return X(z,vr(z,T),A);Er(z,T)}return null}function D(z,T,A,q){var le=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return le!==null?null:b(z,T,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case R:return A.key===le?E(z,T,A,q):null;case k:return A.key===le?O(z,T,A,q):null;case ne:return A=Ta(A),D(z,T,A,q)}if(re(A)||Be(A))return le!==null?null:Y(z,T,A,q,null);if(typeof A.then=="function")return D(z,T,wr(A),q);if(A.$$typeof===L)return D(z,T,vr(z,A),q);Er(z,A)}return null}function B(z,T,A,q,le){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return z=z.get(A)||null,b(T,z,""+q,le);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case R:return z=z.get(q.key===null?A:q.key)||null,E(T,z,q,le);case k:return z=z.get(q.key===null?A:q.key)||null,O(T,z,q,le);case ne:return q=Ta(q),B(z,T,A,q,le)}if(re(q)||Be(q))return z=z.get(A)||null,Y(T,z,q,le,null);if(typeof q.then=="function")return B(z,T,A,wr(q),le);if(q.$$typeof===L)return B(z,T,A,vr(T,q),le);Er(T,q)}return null}function te(z,T,A,q){for(var le=null,we=null,ae=T,he=T=0,be=null;ae!==null&&he<A.length;he++){ae.index>he?(be=ae,ae=null):be=ae.sibling;var Ee=D(z,ae,A[he],q);if(Ee===null){ae===null&&(ae=be);break}e&&ae&&Ee.alternate===null&&t(z,ae),T=c(Ee,T,he),we===null?le=Ee:we.sibling=Ee,we=Ee,ae=be}if(he===A.length)return n(z,ae),xe&&yn(z,he),le;if(ae===null){for(;he<A.length;he++)ae=X(z,A[he],q),ae!==null&&(T=c(ae,T,he),we===null?le=ae:we.sibling=ae,we=ae);return xe&&yn(z,he),le}for(ae=i(ae);he<A.length;he++)be=B(ae,z,he,A[he],q),be!==null&&(e&&be.alternate!==null&&ae.delete(be.key===null?he:be.key),T=c(be,T,he),we===null?le=be:we.sibling=be,we=be);return e&&ae.forEach(function(ua){return t(z,ua)}),xe&&yn(z,he),le}function oe(z,T,A,q){if(A==null)throw Error(o(151));for(var le=null,we=null,ae=T,he=T=0,be=null,Ee=A.next();ae!==null&&!Ee.done;he++,Ee=A.next()){ae.index>he?(be=ae,ae=null):be=ae.sibling;var ua=D(z,ae,Ee.value,q);if(ua===null){ae===null&&(ae=be);break}e&&ae&&ua.alternate===null&&t(z,ae),T=c(ua,T,he),we===null?le=ua:we.sibling=ua,we=ua,ae=be}if(Ee.done)return n(z,ae),xe&&yn(z,he),le;if(ae===null){for(;!Ee.done;he++,Ee=A.next())Ee=X(z,Ee.value,q),Ee!==null&&(T=c(Ee,T,he),we===null?le=Ee:we.sibling=Ee,we=Ee);return xe&&yn(z,he),le}for(ae=i(ae);!Ee.done;he++,Ee=A.next())Ee=B(ae,z,he,Ee.value,q),Ee!==null&&(e&&Ee.alternate!==null&&ae.delete(Ee.key===null?he:Ee.key),T=c(Ee,T,he),we===null?le=Ee:we.sibling=Ee,we=Ee);return e&&ae.forEach(function(wb){return t(z,wb)}),xe&&yn(z,he),le}function Ne(z,T,A,q){if(typeof A=="object"&&A!==null&&A.type===_&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case R:e:{for(var le=A.key;T!==null;){if(T.key===le){if(le=A.type,le===_){if(T.tag===7){n(z,T.sibling),q=r(T,A.props.children),q.return=z,z=q;break e}}else if(T.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ne&&Ta(le)===T.type){n(z,T.sibling),q=r(T,A.props),sl(q,A),q.return=z,z=q;break e}n(z,T);break}else t(z,T);T=T.sibling}A.type===_?(q=Sa(A.props.children,z.mode,q,A.key),q.return=z,z=q):(q=mr(A.type,A.key,A.props,null,z.mode,q),sl(q,A),q.return=z,z=q)}return h(z);case k:e:{for(le=A.key;T!==null;){if(T.key===le)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){n(z,T.sibling),q=r(T,A.children||[]),q.return=z,z=q;break e}else{n(z,T);break}else t(z,T);T=T.sibling}q=_s(A,z.mode,q),q.return=z,z=q}return h(z);case ne:return A=Ta(A),Ne(z,T,A,q)}if(re(A))return te(z,T,A,q);if(Be(A)){if(le=Be(A),typeof le!="function")throw Error(o(150));return A=le.call(A),oe(z,T,A,q)}if(typeof A.then=="function")return Ne(z,T,wr(A),q);if(A.$$typeof===L)return Ne(z,T,vr(z,A),q);Er(z,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,T!==null&&T.tag===6?(n(z,T.sibling),q=r(T,A),q.return=z,z=q):(n(z,T),q=Ds(A,z.mode,q),q.return=z,z=q),h(z)):n(z,T)}return function(z,T,A,q){try{ol=0;var le=Ne(z,T,A,q);return ri=null,le}catch(ae){if(ae===li||ae===xr)throw ae;var we=kt(29,ae,null,z.mode);return we.lanes=q,we.return=z,we}finally{}}}var Ra=o0(!0),s0=o0(!1),Kn=!1;function Ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(je&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=pr(e),Vd(e,null,n),t}return hr(e,i,t,n),pr(e)}function cl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Pf(e,n)}}function Js(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=h:c=c.next=h,n=n.next}while(n!==null);c===null?r=c=t:c=c.next=t}else r=c=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Fs=!1;function ul(){if(Fs){var e=ii;if(e!==null)throw e}}function fl(e,t,n,i){Fs=!1;var r=e.updateQueue;Kn=!1;var c=r.firstBaseUpdate,h=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var E=b,O=E.next;E.next=null,h===null?c=O:h.next=O,h=E;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,b=Y.lastBaseUpdate,b!==h&&(b===null?Y.firstBaseUpdate=O:b.next=O,Y.lastBaseUpdate=E))}if(c!==null){var X=r.baseState;h=0,Y=O=E=null,b=c;do{var D=b.lane&-536870913,B=D!==b.lane;if(B?(ve&D)===D:(i&D)===D){D!==0&&D===ai&&(Fs=!0),Y!==null&&(Y=Y.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var te=e,oe=b;D=t;var Ne=n;switch(oe.tag){case 1:if(te=oe.payload,typeof te=="function"){X=te.call(Ne,X,D);break e}X=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=oe.payload,D=typeof te=="function"?te.call(Ne,X,D):te,D==null)break e;X=w({},X,D);break e;case 2:Kn=!0}}D=b.callback,D!==null&&(e.flags|=64,B&&(e.flags|=8192),B=r.callbacks,B===null?r.callbacks=[D]:B.push(D))}else B={lane:D,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Y===null?(O=Y=B,E=X):Y=Y.next=B,h|=D;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;B=b,b=B.next,B.next=null,r.lastBaseUpdate=B,r.shared.pending=null}}while(!0);Y===null&&(E=X),r.baseState=E,r.firstBaseUpdate=O,r.lastBaseUpdate=Y,c===null&&(r.shared.lanes=0),ea|=h,e.lanes=h,e.memoizedState=X}}function c0(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function u0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)c0(n[e],t)}var oi=C(null),jr=C(0);function f0(e,t){e=Rn,F(jr,e),F(oi,t),Rn=e|t.baseLanes}function Ws(){F(jr,Rn),F(oi,oi.current)}function Is(){Rn=jr.current,G(oi),G(jr)}var At=C(null),Vt=null;function Fn(e){var t=e.alternate;F(Ke,Ke.current&1),F(At,e),Vt===null&&(t===null||oi.current!==null||t.memoizedState!==null)&&(Vt=e)}function Ps(e){F(Ke,Ke.current),F(At,e),Vt===null&&(Vt=e)}function d0(e){e.tag===22?(F(Ke,Ke.current),F(At,e),Vt===null&&(Vt=e)):Wn()}function Wn(){F(Ke,Ke.current),F(At,At.current)}function Mt(e){G(At),Vt===e&&(Vt=null),G(Ke)}var Ke=C(0);function Cr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||lu(n)||ru(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xn=0,fe=null,Me=null,Fe=null,Tr=!1,si=!1,ka=!1,zr=0,dl=0,ci=null,dv=0;function Ve(){throw Error(o(321))}function ec(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function tc(e,t,n,i,r,c){return xn=c,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?J0:gc,ka=!1,c=n(i,r),ka=!1,si&&(c=p0(t,n,i,r)),h0(e),c}function h0(e){N.H=ml;var t=Me!==null&&Me.next!==null;if(xn=0,Fe=Me=fe=null,Tr=!1,dl=0,ci=null,t)throw Error(o(300));e===null||We||(e=e.dependencies,e!==null&&yr(e)&&(We=!0))}function p0(e,t,n,i){fe=e;var r=0;do{if(si&&(ci=null),dl=0,si=!1,25<=r)throw Error(o(301));if(r+=1,Fe=Me=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}N.H=F0,c=t(n,i)}while(si);return c}function hv(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?hl(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(fe.flags|=1024),t}function nc(){var e=zr!==0;return zr=0,e}function ac(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ic(e){if(Tr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Tr=!1}xn=0,Fe=Me=fe=null,si=!1,dl=zr=0,ci=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?fe.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ze(){if(Me===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Fe===null?fe.memoizedState:Fe.next;if(t!==null)Fe=t,Me=e;else{if(e===null)throw fe.alternate===null?Error(o(467)):Error(o(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Fe===null?fe.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Rr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(e){var t=dl;return dl+=1,ci===null&&(ci=[]),e=i0(ci,e,t),t=fe,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?J0:gc),e}function kr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hl(e);if(e.$$typeof===L)return ot(e)}throw Error(o(438,String(e)))}function lc(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=fe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Rr(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=_e;return t.index++,n}function Sn(e,t){return typeof t=="function"?t(e):t}function Ar(e){var t=Ze();return rc(t,Me,e)}function rc(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var r=e.baseQueue,c=i.pending;if(c!==null){if(r!==null){var h=r.next;r.next=c.next,c.next=h}t.baseQueue=r=c,i.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var b=h=null,E=null,O=t,Y=!1;do{var X=O.lane&-536870913;if(X!==O.lane?(ve&X)===X:(xn&X)===X){var D=O.revertLane;if(D===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),X===ai&&(Y=!0);else if((xn&D)===D){O=O.next,D===ai&&(Y=!0);continue}else X={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},E===null?(b=E=X,h=c):E=E.next=X,fe.lanes|=D,ea|=D;X=O.action,ka&&n(c,X),c=O.hasEagerState?O.eagerState:n(c,X)}else D={lane:X,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},E===null?(b=E=D,h=c):E=E.next=D,fe.lanes|=X,ea|=X;O=O.next}while(O!==null&&O!==t);if(E===null?h=c:E.next=b,!Rt(c,e.memoizedState)&&(We=!0,Y&&(n=ii,n!==null)))throw n;e.memoizedState=c,e.baseState=h,e.baseQueue=E,i.lastRenderedState=c}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function oc(e){var t=Ze(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,c=t.memoizedState;if(r!==null){n.pending=null;var h=r=r.next;do c=e(c,h.action),h=h.next;while(h!==r);Rt(c,t.memoizedState)||(We=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,i]}function m0(e,t,n){var i=fe,r=Ze(),c=xe;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var h=!Rt((Me||r).memoizedState,n);if(h&&(r.memoizedState=n,We=!0),r=r.queue,uc(v0.bind(null,i,r,e),[e]),r.getSnapshot!==t||h||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,ui(9,{destroy:void 0},y0.bind(null,i,r,n,t),null),De===null)throw Error(o(349));c||(xn&127)!==0||g0(i,t,n)}return n}function g0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=Rr(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function y0(e,t,n,i){t.value=n,t.getSnapshot=i,b0(t)&&x0(e)}function v0(e,t,n){return n(function(){b0(t)&&x0(e)})}function b0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function x0(e){var t=xa(e,2);t!==null&&wt(t,e,2)}function sc(e){var t=mt();if(typeof e=="function"){var n=e;if(e=n(),ka){Hn(!0);try{n()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},t}function S0(e,t,n,i){return e.baseState=n,rc(e,Me,typeof i=="function"?i:Sn)}function pv(e,t,n,i,r){if(Nr(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};N.T!==null?n(!0):c.isTransition=!1,i(c),n=t.pending,n===null?(c.next=t.pending=c,w0(t,c)):(c.next=n.next,t.pending=n.next=c)}}function w0(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var c=N.T,h={};N.T=h;try{var b=n(r,i),E=N.S;E!==null&&E(h,b),E0(e,t,b)}catch(O){cc(e,t,O)}finally{c!==null&&h.types!==null&&(c.types=h.types),N.T=c}}else try{c=n(r,i),E0(e,t,c)}catch(O){cc(e,t,O)}}function E0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){j0(e,t,i)},function(i){return cc(e,t,i)}):j0(e,t,n)}function j0(e,t,n){t.status="fulfilled",t.value=n,C0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,w0(e,n)))}function cc(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,C0(t),t=t.next;while(t!==i)}e.action=null}function C0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function T0(e,t){return t}function z0(e,t){if(xe){var n=De.formState;if(n!==null){e:{var i=fe;if(xe){if($e){t:{for(var r=$e,c=Xt;r.nodeType!==8;){if(!c){r=null;break t}if(r=Qt(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){$e=Qt(r.nextSibling),i=r.data==="F!";break e}}Vn(i)}i=!1}i&&(t=n[0])}}return n=mt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:T0,lastRenderedState:t},n.queue=i,n=Q0.bind(null,fe,i),i.dispatch=n,i=sc(!1),c=mc.bind(null,fe,!1,i.queue),i=mt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=pv.bind(null,fe,r,c,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function R0(e){var t=Ze();return k0(t,Me,e)}function k0(e,t,n){if(t=rc(e,t,T0)[0],e=Ar(Sn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=hl(t)}catch(h){throw h===li?xr:h}else i=t;t=Ze();var r=t.queue,c=r.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,ui(9,{destroy:void 0},mv.bind(null,r,n),null)),[i,c,e]}function mv(e,t){e.action=t}function A0(e){var t=Ze(),n=Me;if(n!==null)return k0(t,n,e);Ze(),t=t.memoizedState,n=Ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ui(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=fe.updateQueue,t===null&&(t=Rr(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function M0(){return Ze().memoizedState}function Mr(e,t,n,i){var r=mt();fe.flags|=e,r.memoizedState=ui(1|t,{destroy:void 0},n,i===void 0?null:i)}function Or(e,t,n,i){var r=Ze();i=i===void 0?null:i;var c=r.memoizedState.inst;Me!==null&&i!==null&&ec(i,Me.memoizedState.deps)?r.memoizedState=ui(t,c,n,i):(fe.flags|=e,r.memoizedState=ui(1|t,c,n,i))}function O0(e,t){Mr(8390656,8,e,t)}function uc(e,t){Or(2048,8,e,t)}function gv(e){fe.flags|=4;var t=fe.updateQueue;if(t===null)t=Rr(),fe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function N0(e){var t=Ze().memoizedState;return gv({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function D0(e,t){return Or(4,2,e,t)}function _0(e,t){return Or(4,4,e,t)}function B0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function L0(e,t,n){n=n!=null?n.concat([e]):null,Or(4,4,B0.bind(null,t,e),n)}function fc(){}function $0(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ec(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function U0(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ec(t,i[1]))return i[0];if(i=e(),ka){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[i,t],i}function dc(e,t,n){return n===void 0||(xn&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Hh(),fe.lanes|=e,ea|=e,n)}function H0(e,t,n,i){return Rt(n,t)?n:oi.current!==null?(e=dc(e,n,i),Rt(e,t)||(We=!0),e):(xn&42)===0||(xn&1073741824)!==0&&(ve&261930)===0?(We=!0,e.memoizedState=n):(e=Hh(),fe.lanes|=e,ea|=e,t)}function G0(e,t,n,i,r){var c=K.p;K.p=c!==0&&8>c?c:8;var h=N.T,b={};N.T=b,mc(e,!1,t,n);try{var E=r(),O=N.S;if(O!==null&&O(b,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var Y=fv(E,i);pl(e,t,Y,Dt(e))}else pl(e,t,i,Dt(e))}catch(X){pl(e,t,{then:function(){},status:"rejected",reason:X},Dt())}finally{K.p=c,h!==null&&b.types!==null&&(h.types=b.types),N.T=h}}function yv(){}function hc(e,t,n,i){if(e.tag!==5)throw Error(o(476));var r=Y0(e).queue;G0(e,r,t,I,n===null?yv:function(){return q0(e),n(i)})}function Y0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function q0(e){var t=Y0(e);t.next===null&&(t=e.alternate.memoizedState),pl(e,t.next.queue,{},Dt())}function pc(){return ot(Ml)}function X0(){return Ze().memoizedState}function V0(){return Ze().memoizedState}function vv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Dt();e=Zn(n);var i=Jn(t,e,n);i!==null&&(wt(i,t,n),cl(i,t,n)),t={cache:qs()},e.payload=t;return}t=t.return}}function bv(e,t,n){var i=Dt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Nr(e)?K0(t,n):(n=Os(e,t,n,i),n!==null&&(wt(n,e,i),Z0(n,t,i)))}function Q0(e,t,n){var i=Dt();pl(e,t,n,i)}function pl(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nr(e))K0(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,b=c(h,n);if(r.hasEagerState=!0,r.eagerState=b,Rt(b,h))return hr(e,t,r,0),De===null&&dr(),!1}catch{}finally{}if(n=Os(e,t,r,i),n!==null)return wt(n,e,i),Z0(n,t,i),!0}return!1}function mc(e,t,n,i){if(i={lane:2,revertLane:Kc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Nr(e)){if(t)throw Error(o(479))}else t=Os(e,n,i,2),t!==null&&wt(t,e,2)}function Nr(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function K0(e,t){si=Tr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Z0(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Pf(e,n)}}var ml={readContext:ot,use:kr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};ml.useEffectEvent=Ve;var J0={readContext:ot,use:kr,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:O0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Mr(4194308,4,B0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mr(4194308,4,e,t)},useInsertionEffect:function(e,t){Mr(4,2,e,t)},useMemo:function(e,t){var n=mt();t=t===void 0?null:t;var i=e();if(ka){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=mt();if(n!==void 0){var r=n(t);if(ka){Hn(!0);try{n(t)}finally{Hn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=bv.bind(null,fe,e),[i.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=sc(e);var t=e.queue,n=Q0.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:fc,useDeferredValue:function(e,t){var n=mt();return dc(n,e,t)},useTransition:function(){var e=sc(!1);return e=G0.bind(null,fe,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=fe,r=mt();if(xe){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),De===null)throw Error(o(349));(ve&127)!==0||g0(i,t,n)}r.memoizedState=n;var c={value:n,getSnapshot:t};return r.queue=c,O0(v0.bind(null,i,c,e),[e]),i.flags|=2048,ui(9,{destroy:void 0},y0.bind(null,i,c,n,t),null),n},useId:function(){var e=mt(),t=De.identifierPrefix;if(xe){var n=ln,i=an;n=(i&~(1<<32-zt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=dv++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:pc,useFormState:z0,useActionState:z0,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mc.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:lc,useCacheRefresh:function(){return mt().memoizedState=vv.bind(null,fe)},useEffectEvent:function(e){var t=mt(),n={impl:e};return t.memoizedState=n,function(){if((je&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},gc={readContext:ot,use:kr,useCallback:$0,useContext:ot,useEffect:uc,useImperativeHandle:L0,useInsertionEffect:D0,useLayoutEffect:_0,useMemo:U0,useReducer:Ar,useRef:M0,useState:function(){return Ar(Sn)},useDebugValue:fc,useDeferredValue:function(e,t){var n=Ze();return H0(n,Me.memoizedState,e,t)},useTransition:function(){var e=Ar(Sn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:m0,useId:X0,useHostTransitionStatus:pc,useFormState:R0,useActionState:R0,useOptimistic:function(e,t){var n=Ze();return S0(n,Me,e,t)},useMemoCache:lc,useCacheRefresh:V0};gc.useEffectEvent=N0;var F0={readContext:ot,use:kr,useCallback:$0,useContext:ot,useEffect:uc,useImperativeHandle:L0,useInsertionEffect:D0,useLayoutEffect:_0,useMemo:U0,useReducer:oc,useRef:M0,useState:function(){return oc(Sn)},useDebugValue:fc,useDeferredValue:function(e,t){var n=Ze();return Me===null?dc(n,e,t):H0(n,Me.memoizedState,e,t)},useTransition:function(){var e=oc(Sn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:m0,useId:X0,useHostTransitionStatus:pc,useFormState:A0,useActionState:A0,useOptimistic:function(e,t){var n=Ze();return Me!==null?S0(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lc,useCacheRefresh:V0};F0.useEffectEvent=N0;function yc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vc={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Dt(),r=Zn(i);r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,i),t!==null&&(wt(t,e,i),cl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Dt(),r=Zn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,i),t!==null&&(wt(t,e,i),cl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),i=Zn(n);i.tag=2,t!=null&&(i.callback=t),t=Jn(e,i,n),t!==null&&(wt(t,e,n),cl(t,e,n))}};function W0(e,t,n,i,r,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,h):t.prototype&&t.prototype.isPureReactComponent?!tl(n,i)||!tl(r,c):!0}function I0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&vc.enqueueReplaceState(t,t.state,null)}function Aa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function P0(e){fr(e)}function eh(e){console.error(e)}function th(e){fr(e)}function Dr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function nh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function bc(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Dr(e,t)},n}function ah(e){return e=Zn(e),e.tag=3,e}function ih(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=i.value;e.payload=function(){return r(c)},e.callback=function(){nh(t,n,i)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){nh(t,n,i),typeof r!="function"&&(ta===null?ta=new Set([this]):ta.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function xv(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ni(t,n,r,!0),n=At.current,n!==null){switch(n.tag){case 31:case 13:return Vt===null?Qr():n.alternate===null&&Qe===0&&(Qe=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Sr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Xc(e,i,r)),!1;case 22:return n.flags|=65536,i===Sr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Xc(e,i,r)),!1}throw Error(o(435,n.tag))}return Xc(e,i,r),Qr(),!1}if(xe)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==$s&&(e=Error(o(422),{cause:i}),il(Gt(e,n)))):(i!==$s&&(t=Error(o(423),{cause:i}),il(Gt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Gt(i,n),r=bc(e.stateNode,i,r),Js(e,r),Qe!==4&&(Qe=2)),!1;var c=Error(o(520),{cause:i});if(c=Gt(c,n),El===null?El=[c]:El.push(c),Qe!==4&&(Qe=2),t===null)return!0;i=Gt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=bc(n.stateNode,i,e),Js(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ta===null||!ta.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=ah(r),ih(r,e,n,i),Js(n,r),!1}n=n.return}while(n!==null);return!1}var xc=Error(o(461)),We=!1;function st(e,t,n,i){t.child=e===null?s0(t,null,n,i):Ra(t,e.child,n,i)}function lh(e,t,n,i,r){n=n.render;var c=t.ref;if("ref"in i){var h={};for(var b in i)b!=="ref"&&(h[b]=i[b])}else h=i;return ja(t),i=tc(e,t,n,h,c,r),b=nc(),e!==null&&!We?(ac(e,t,r),wn(e,t,r)):(xe&&b&&Bs(t),t.flags|=1,st(e,t,i,r),t.child)}function rh(e,t,n,i,r){if(e===null){var c=n.type;return typeof c=="function"&&!Ns(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,oh(e,t,c,i,r)):(e=mr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Rc(e,r)){var h=c.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(h,i)&&e.ref===t.ref)return wn(e,t,r)}return t.flags|=1,e=gn(c,i),e.ref=t.ref,e.return=t,t.child=e}function oh(e,t,n,i,r){if(e!==null){var c=e.memoizedProps;if(tl(c,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=c,Rc(e,r))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,wn(e,t,r)}return Sc(e,t,n,i,r)}function sh(e,t,n,i){var r=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~c}else i=0,t.child=null;return ch(e,t,c,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&br(t,c!==null?c.cachePool:null),c!==null?f0(t,c):Ws(),d0(t);else return i=t.lanes=536870912,ch(e,t,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(br(t,c.cachePool),f0(t,c),Wn(),t.memoizedState=null):(e!==null&&br(t,null),Ws(),Wn());return st(e,t,r,n),t.child}function gl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ch(e,t,n,i,r){var c=Vs();return c=c===null?null:{parent:Je._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&br(t,null),Ws(),d0(t),e!==null&&ni(e,t,i,!0),t.childLanes=r,null}function _r(e,t){return t=Lr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uh(e,t,n){return Ra(t,e.child,null,n),e=_r(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function Sv(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(i.mode==="hidden")return e=_r(t,i),t.lanes=536870912,gl(null,e);if(Ps(t),(e=$e)?(e=wp(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},n=Kd(e),n.return=t,t.child=n,rt=t,$e=null)):e=null,e===null)throw Vn(t);return t.lanes=536870912,null}return _r(t,i)}var c=e.memoizedState;if(c!==null){var h=c.dehydrated;if(Ps(t),r)if(t.flags&256)t.flags&=-257,t=uh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(We||ni(e,t,n,!1),r=(n&e.childLanes)!==0,We||r){if(i=De,i!==null&&(h=ed(i,n),h!==0&&h!==c.retryLane))throw c.retryLane=h,xa(e,h),wt(i,e,h),xc;Qr(),t=uh(e,t,n)}else e=c.treeContext,$e=Qt(h.nextSibling),rt=t,xe=!0,Xn=null,Xt=!1,e!==null&&Fd(t,e),t=_r(t,i),t.flags|=4096;return t}return e=gn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Br(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Sc(e,t,n,i,r){return ja(t),n=tc(e,t,n,i,void 0,r),i=nc(),e!==null&&!We?(ac(e,t,r),wn(e,t,r)):(xe&&i&&Bs(t),t.flags|=1,st(e,t,n,r),t.child)}function fh(e,t,n,i,r,c){return ja(t),t.updateQueue=null,n=p0(t,i,n,r),h0(e),i=nc(),e!==null&&!We?(ac(e,t,c),wn(e,t,c)):(xe&&i&&Bs(t),t.flags|=1,st(e,t,n,c),t.child)}function dh(e,t,n,i,r){if(ja(t),t.stateNode===null){var c=Ia,h=n.contextType;typeof h=="object"&&h!==null&&(c=ot(h)),c=new n(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=vc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},Ks(t),h=n.contextType,c.context=typeof h=="object"&&h!==null?ot(h):Ia,c.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(yc(t,n,h,i),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&vc.enqueueReplaceState(c,c.state,null),fl(t,i,c,r),ul(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var b=t.memoizedProps,E=Aa(n,b);c.props=E;var O=c.context,Y=n.contextType;h=Ia,typeof Y=="object"&&Y!==null&&(h=ot(Y));var X=n.getDerivedStateFromProps;Y=typeof X=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,Y||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||O!==h)&&I0(t,c,i,h),Kn=!1;var D=t.memoizedState;c.state=D,fl(t,i,c,r),ul(),O=t.memoizedState,b||D!==O||Kn?(typeof X=="function"&&(yc(t,n,X,i),O=t.memoizedState),(E=Kn||W0(t,n,E,i,D,O,h))?(Y||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=O),c.props=i,c.state=O,c.context=h,i=E):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,Zs(e,t),h=t.memoizedProps,Y=Aa(n,h),c.props=Y,X=t.pendingProps,D=c.context,O=n.contextType,E=Ia,typeof O=="object"&&O!==null&&(E=ot(O)),b=n.getDerivedStateFromProps,(O=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==X||D!==E)&&I0(t,c,i,E),Kn=!1,D=t.memoizedState,c.state=D,fl(t,i,c,r),ul();var B=t.memoizedState;h!==X||D!==B||Kn||e!==null&&e.dependencies!==null&&yr(e.dependencies)?(typeof b=="function"&&(yc(t,n,b,i),B=t.memoizedState),(Y=Kn||W0(t,n,Y,i,D,B,E)||e!==null&&e.dependencies!==null&&yr(e.dependencies))?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,B,E),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,B,E)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=B),c.props=i,c.state=B,c.context=E,i=Y):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,Br(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=Ra(t,e.child,null,r),t.child=Ra(t,null,n,r)):st(e,t,n,r),t.memoizedState=c.state,e=t.child):e=wn(e,t,r),e}function hh(e,t,n,i){return wa(),t.flags|=256,st(e,t,n,i),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ec(e){return{baseLanes:e,cachePool:n0()}}function jc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Nt),e}function ph(e,t,n){var i=t.pendingProps,r=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),h&&(r=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(r?Fn(t):Wn(),(e=$e)?(e=wp(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},n=Kd(e),n.return=t,t.child=n,rt=t,$e=null)):e=null,e===null)throw Vn(t);return ru(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,r?(Wn(),r=t.mode,b=Lr({mode:"hidden",children:b},r),i=Sa(i,r,n,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=Ec(n),i.childLanes=jc(e,h,n),t.memoizedState=wc,gl(null,i)):(Fn(t),Cc(t,b))}var E=e.memoizedState;if(E!==null&&(b=E.dehydrated,b!==null)){if(c)t.flags&256?(Fn(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState!==null?(Wn(),t.child=e.child,t.flags|=128,t=null):(Wn(),b=i.fallback,r=t.mode,i=Lr({mode:"visible",children:i.children},r),b=Sa(b,r,n,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,Ra(t,e.child,null,n),i=t.child,i.memoizedState=Ec(n),i.childLanes=jc(e,h,n),t.memoizedState=wc,t=gl(null,i));else if(Fn(t),ru(b)){if(h=b.nextSibling&&b.nextSibling.dataset,h)var O=h.dgst;h=O,i=Error(o(419)),i.stack="",i.digest=h,il({value:i,source:null,stack:null}),t=Tc(e,t,n)}else if(We||ni(e,t,n,!1),h=(n&e.childLanes)!==0,We||h){if(h=De,h!==null&&(i=ed(h,n),i!==0&&i!==E.retryLane))throw E.retryLane=i,xa(e,i),wt(h,e,i),xc;lu(b)||Qr(),t=Tc(e,t,n)}else lu(b)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,$e=Qt(b.nextSibling),rt=t,xe=!0,Xn=null,Xt=!1,e!==null&&Fd(t,e),t=Cc(t,i.children),t.flags|=4096);return t}return r?(Wn(),b=i.fallback,r=t.mode,E=e.child,O=E.sibling,i=gn(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,O!==null?b=gn(O,b):(b=Sa(b,r,n,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,gl(null,i),i=t.child,b=e.child.memoizedState,b===null?b=Ec(n):(r=b.cachePool,r!==null?(E=Je._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=n0(),b={baseLanes:b.baseLanes|n,cachePool:r}),i.memoizedState=b,i.childLanes=jc(e,h,n),t.memoizedState=wc,gl(e.child,i)):(Fn(t),n=e.child,e=n.sibling,n=gn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=Lr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Lr(e,t){return e=kt(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Ra(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Gs(e.return,t,n)}function zc(e,t,n,i,r,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=n,h.tailMode=r,h.treeForkCount=c)}function gh(e,t,n){var i=t.pendingProps,r=i.revealOrder,c=i.tail;i=i.children;var h=Ke.current,b=(h&2)!==0;if(b?(h=h&1|2,t.flags|=128):h&=1,F(Ke,h),st(e,t,i,n),i=xe?al:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mh(e,n,t);else if(e.tag===19)mh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Cr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),zc(t,!1,r,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Cr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}zc(t,!0,n,null,c,i);break;case"together":zc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ni(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&yr(e)))}function wv(e,t,n){switch(t.tag){case 3:qe(t,t.stateNode.containerInfo),Qn(t,Je,e.memoizedState.cache),wa();break;case 27:case 5:jt(t);break;case 4:qe(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ps(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Fn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ph(e,t,n):(Fn(t),e=wn(e,t,n),e!==null?e.sibling:null);Fn(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ni(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return gh(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),F(Ke,Ke.current),i)break;return null;case 22:return t.lanes=0,sh(e,t,n,t.pendingProps);case 24:Qn(t,Je,e.memoizedState.cache)}return wn(e,t,n)}function yh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Rc(e,n)&&(t.flags&128)===0)return We=!1,wv(e,t,n);We=(e.flags&131072)!==0}else We=!1,xe&&(t.flags&1048576)!==0&&Jd(t,al,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")Ns(e)?(i=Aa(e,i),t.tag=1,t=dh(null,t,e,i,n)):(t.tag=0,t=Sc(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===Z){t.tag=11,t=lh(null,t,e,i,n);break e}else if(r===V){t.tag=14,t=rh(null,t,e,i,n);break e}}throw t=Q(e)||e,Error(o(306,t,""))}}return t;case 0:return Sc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Aa(i,t.pendingProps),dh(e,t,i,r,n);case 3:e:{if(qe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var c=t.memoizedState;r=c.element,Zs(e,t),fl(t,i,null,n);var h=t.memoizedState;if(i=h.cache,Qn(t,Je,i),i!==c.cache&&Ys(t,[Je],n,!0),ul(),i=h.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=hh(e,t,i,n);break e}else if(i!==r){r=Gt(Error(o(424)),t),il(r),t=hh(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Qt(e.firstChild),rt=t,xe=!0,Xn=null,Xt=!0,n=s0(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(wa(),i===r){t=wn(e,t,n);break e}st(e,t,i,n)}t=t.child}return t;case 26:return Br(e,t),e===null?(n=Rp(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,i=Pr(se.current).createElement(n),i[lt]=t,i[gt]=e,ct(i,n,e),tt(i),t.stateNode=i):t.memoizedState=Rp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return jt(t),e===null&&xe&&(i=t.stateNode=Cp(t.type,t.pendingProps,se.current),rt=t,Xt=!0,r=$e,la(t.type)?(ou=r,$e=Qt(i.firstChild)):$e=r),st(e,t,t.pendingProps.children,n),Br(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((r=i=$e)&&(i=Iv(i,t.type,t.pendingProps,Xt),i!==null?(t.stateNode=i,rt=t,$e=Qt(i.firstChild),Xt=!1,r=!0):r=!1),r||Vn(t)),jt(t),r=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,i=c.children,nu(r,c)?i=null:h!==null&&nu(r,h)&&(t.flags|=32),t.memoizedState!==null&&(r=tc(e,t,hv,null,null,n),Ml._currentValue=r),Br(e,t),st(e,t,i,n),t.child;case 6:return e===null&&xe&&((e=n=$e)&&(n=Pv(n,t.pendingProps,Xt),n!==null?(t.stateNode=n,rt=t,$e=null,e=!0):e=!1),e||Vn(t)),null;case 13:return ph(e,t,n);case 4:return qe(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ra(t,null,i,n):st(e,t,i,n),t.child;case 11:return lh(e,t,t.type,t.pendingProps,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Qn(t,t.type,i.value),st(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,ja(t),r=ot(r),i=i(r),t.flags|=1,st(e,t,i,n),t.child;case 14:return rh(e,t,t.type,t.pendingProps,n);case 15:return oh(e,t,t.type,t.pendingProps,n);case 19:return gh(e,t,n);case 31:return Sv(e,t,n);case 22:return sh(e,t,n,t.pendingProps);case 24:return ja(t),i=ot(Je),e===null?(r=Vs(),r===null&&(r=De,c=qs(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),t.memoizedState={parent:i,cache:r},Ks(t),Qn(t,Je,r)):((e.lanes&n)!==0&&(Zs(e,t),fl(t,null,null,n),ul()),r=e.memoizedState,c=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Qn(t,Je,i)):(i=c.cache,Qn(t,Je,i),i!==r.cache&&Ys(t,[Je],n,!0))),st(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function En(e){e.flags|=4}function kc(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Xh())e.flags|=8192;else throw za=Sr,Qs}else e.flags&=-16777217}function vh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Np(t))if(Xh())e.flags|=8192;else throw za=Sr,Qs}function $r(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Wf():536870912,e.lanes|=t,pi|=t)}function yl(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Ev(e,t,n){var i=t.pendingProps;switch(Ls(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),bn(Je),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ti(t)?En(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Us())),Ue(t),null;case 26:var r=t.type,c=t.memoizedState;return e===null?(En(t),c!==null?(Ue(t),vh(t,c)):(Ue(t),kc(t,r,null,i,n))):c?c!==e.memoizedState?(En(t),Ue(t),vh(t,c)):(Ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&En(t),Ue(t),kc(t,r,e,i,n)),null;case 27:if(Jt(t),n=se.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ue(t),null}e=W.current,ti(t)?Wd(t):(e=Cp(r,i,n),t.stateNode=e,En(t))}return Ue(t),null;case 5:if(Jt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ue(t),null}if(c=W.current,ti(t))Wd(t);else{var h=Pr(se.current);switch(c){case 1:c=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?h.createElement("select",{is:i.is}):h.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?h.createElement(r,{is:i.is}):h.createElement(r)}}c[lt]=t,c[gt]=i;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=c;e:switch(ct(c,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&En(t)}}return Ue(t),kc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=se.current,ti(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=rt,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||pp(e.nodeValue,n)),e||Vn(t,!0)}else e=Pr(e).createTextNode(i),e[lt]=t,t.stateNode=e}return Ue(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ti(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[lt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),e=!1}else n=Us(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ue(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ti(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[lt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),r=!1}else r=Us(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),$r(t,t.updateQueue),Ue(t),null);case 4:return Se(),e===null&&Wc(t.stateNode.containerInfo),Ue(t),null;case 10:return bn(t.type),Ue(t),null;case 19:if(G(Ke),i=t.memoizedState,i===null)return Ue(t),null;if(r=(t.flags&128)!==0,c=i.rendering,c===null)if(r)yl(i,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Cr(e),c!==null){for(t.flags|=128,yl(i,!1),e=c.updateQueue,t.updateQueue=e,$r(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Qd(n,e),n=n.sibling;return F(Ke,Ke.current&1|2),xe&&yn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ct()>qr&&(t.flags|=128,r=!0,yl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Cr(c),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,$r(t,e),yl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!xe)return Ue(t),null}else 2*Ct()-i.renderingStartTime>qr&&n!==536870912&&(t.flags|=128,r=!0,yl(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ct(),e.sibling=null,n=Ke.current,F(Ke,r?n&1|2:n&1),xe&&yn(t,i.treeForkCount),e):(Ue(t),null);case 22:case 23:return Mt(t),Is(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&$r(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&G(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bn(Je),Ue(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function jv(e,t){switch(Ls(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(Je),Se(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jt(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(o(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Ke),null;case 4:return Se(),null;case 10:return bn(t.type),null;case 22:case 23:return Mt(t),Is(),e!==null&&G(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return bn(Je),null;case 25:return null;default:return null}}function bh(e,t){switch(Ls(t),t.tag){case 3:bn(Je),Se();break;case 26:case 27:case 5:Jt(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:G(Ke);break;case 10:bn(t.type);break;case 22:case 23:Mt(t),Is(),e!==null&&G(Ca);break;case 24:bn(Je)}}function vl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var c=n.create,h=n.inst;i=c(),h.destroy=i}n=n.next}while(n!==r)}}catch(b){ze(t,t.return,b)}}function In(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var c=r.next;i=c;do{if((i.tag&e)===e){var h=i.inst,b=h.destroy;if(b!==void 0){h.destroy=void 0,r=t;var E=n,O=b;try{O()}catch(Y){ze(r,E,Y)}}}i=i.next}while(i!==c)}}catch(Y){ze(t,t.return,Y)}}function xh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{u0(t,n)}catch(i){ze(e,e.return,i)}}}function Sh(e,t,n){n.props=Aa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ze(e,t,i)}}function bl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){ze(e,t,r)}}function rn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){ze(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function wh(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){ze(e,e.return,r)}}function Ac(e,t,n){try{var i=e.stateNode;Qv(i,e.type,n,t),i[gt]=t}catch(r){ze(e,e.return,r)}}function Eh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&la(e.type)||e.tag===4}function Mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&la(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pn));else if(i!==4&&(i===27&&la(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}function Ur(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&la(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ur(e,t,n),e=e.sibling;e!==null;)Ur(e,t,n),e=e.sibling}function jh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ct(t,i,n),t[lt]=e,t[gt]=n}catch(c){ze(e,e.return,c)}}var jn=!1,Ie=!1,Nc=!1,Ch=typeof WeakSet=="function"?WeakSet:Set,nt=null;function Cv(e,t){if(e=e.containerInfo,eu=ro,e=Ld(e),Ts(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var h=0,b=-1,E=-1,O=0,Y=0,X=e,D=null;t:for(;;){for(var B;X!==n||r!==0&&X.nodeType!==3||(b=h+r),X!==c||i!==0&&X.nodeType!==3||(E=h+i),X.nodeType===3&&(h+=X.nodeValue.length),(B=X.firstChild)!==null;)D=X,X=B;for(;;){if(X===e)break t;if(D===n&&++O===r&&(b=h),D===c&&++Y===i&&(E=h),(B=X.nextSibling)!==null)break;X=D,D=X.parentNode}X=B}n=b===-1||E===-1?null:{start:b,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(tu={focusedElem:e,selectionRange:n},ro=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,r=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var te=Aa(n.type,r);e=i.getSnapshotBeforeUpdate(te,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(oe){ze(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)iu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":iu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function Th(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(e,n),i&4&&vl(5,n);break;case 1:if(Tn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){ze(n,n.return,h)}else{var r=Aa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){ze(n,n.return,h)}}i&64&&xh(n),i&512&&bl(n,n.return);break;case 3:if(Tn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{u0(e,t)}catch(h){ze(n,n.return,h)}}break;case 27:t===null&&i&4&&jh(n);case 26:case 5:Tn(e,n),t===null&&i&4&&wh(n),i&512&&bl(n,n.return);break;case 12:Tn(e,n);break;case 31:Tn(e,n),i&4&&kh(e,n);break;case 13:Tn(e,n),i&4&&Ah(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Dv.bind(null,n),eb(e,n))));break;case 22:if(i=n.memoizedState!==null||jn,!i){t=t!==null&&t.memoizedState!==null||Ie,r=jn;var c=Ie;jn=i,(Ie=t)&&!c?zn(e,n,(n.subtreeFlags&8772)!==0):Tn(e,n),jn=r,Ie=c}break;case 30:break;default:Tn(e,n)}}function zh(e){var t=e.alternate;t!==null&&(e.alternate=null,zh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&cs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,vt=!1;function Cn(e,t,n){for(n=n.child;n!==null;)Rh(e,t,n),n=n.sibling}function Rh(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(qi,n)}catch{}switch(n.tag){case 26:Ie||rn(n,t),Cn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ie||rn(n,t);var i=Ye,r=vt;la(n.type)&&(Ye=n.stateNode,vt=!1),Cn(e,t,n),Rl(n.stateNode),Ye=i,vt=r;break;case 5:Ie||rn(n,t);case 6:if(i=Ye,r=vt,Ye=null,Cn(e,t,n),Ye=i,vt=r,Ye!==null)if(vt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(c){ze(n,t,c)}else try{Ye.removeChild(n.stateNode)}catch(c){ze(n,t,c)}break;case 18:Ye!==null&&(vt?(e=Ye,xp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),wi(e)):xp(Ye,n.stateNode));break;case 4:i=Ye,r=vt,Ye=n.stateNode.containerInfo,vt=!0,Cn(e,t,n),Ye=i,vt=r;break;case 0:case 11:case 14:case 15:In(2,n,t),Ie||In(4,n,t),Cn(e,t,n);break;case 1:Ie||(rn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Sh(n,t,i)),Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:Ie=(i=Ie)||n.memoizedState!==null,Cn(e,t,n),Ie=i;break;default:Cn(e,t,n)}}function kh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wi(e)}catch(n){ze(t,t.return,n)}}}function Ah(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wi(e)}catch(n){ze(t,t.return,n)}}function Tv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ch),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ch),t;default:throw Error(o(435,e.tag))}}function Hr(e,t){var n=Tv(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=_v.bind(null,e,i);i.then(r,r)}})}function bt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],c=e,h=t,b=h;e:for(;b!==null;){switch(b.tag){case 27:if(la(b.type)){Ye=b.stateNode,vt=!1;break e}break;case 5:Ye=b.stateNode,vt=!1;break e;case 3:case 4:Ye=b.stateNode.containerInfo,vt=!0;break e}b=b.return}if(Ye===null)throw Error(o(160));Rh(c,h,r),Ye=null,vt=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mh(t,e),t=t.sibling}var Wt=null;function Mh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),xt(e),i&4&&(In(3,e,e.return),vl(3,e),In(5,e,e.return));break;case 1:bt(t,e),xt(e),i&512&&(Ie||n===null||rn(n,n.return)),i&64&&jn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Wt;if(bt(t,e),xt(e),i&512&&(Ie||n===null||rn(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":c=r.getElementsByTagName("title")[0],(!c||c[Qi]||c[lt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(i),r.head.insertBefore(c,r.querySelector("head > title"))),ct(c,i,n),c[lt]=e,tt(c),i=c;break e;case"link":var h=Mp("link","href",r).get(i+(n.href||""));if(h){for(var b=0;b<h.length;b++)if(c=h[b],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(b,1);break t}}c=r.createElement(i),ct(c,i,n),r.head.appendChild(c);break;case"meta":if(h=Mp("meta","content",r).get(i+(n.content||""))){for(b=0;b<h.length;b++)if(c=h[b],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(b,1);break t}}c=r.createElement(i),ct(c,i,n),r.head.appendChild(c);break;default:throw Error(o(468,i))}c[lt]=e,tt(c),i=c}e.stateNode=i}else Op(r,e.type,e.stateNode);else e.stateNode=Ap(r,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?Op(r,e.type,e.stateNode):Ap(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ac(e,e.memoizedProps,n.memoizedProps)}break;case 27:bt(t,e),xt(e),i&512&&(Ie||n===null||rn(n,n.return)),n!==null&&i&4&&Ac(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bt(t,e),xt(e),i&512&&(Ie||n===null||rn(n,n.return)),e.flags&32){r=e.stateNode;try{Va(r,"")}catch(te){ze(e,e.return,te)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Ac(e,r,n!==null?n.memoizedProps:r)),i&1024&&(Nc=!0);break;case 6:if(bt(t,e),xt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(te){ze(e,e.return,te)}}break;case 3:if(no=null,r=Wt,Wt=eo(t.containerInfo),bt(t,e),Wt=r,xt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(te){ze(e,e.return,te)}Nc&&(Nc=!1,Oh(e));break;case 4:i=Wt,Wt=eo(e.stateNode.containerInfo),bt(t,e),xt(e),Wt=i;break;case 12:bt(t,e),xt(e);break;case 31:bt(t,e),xt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Hr(e,i)));break;case 13:bt(t,e),xt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Yr=Ct()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Hr(e,i)));break;case 22:r=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,O=jn,Y=Ie;if(jn=O||r,Ie=Y||E,bt(t,e),Ie=Y,jn=O,xt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||E||jn||Ie||Ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(c=E.stateNode,r)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{b=E.stateNode;var X=E.memoizedProps.style,D=X!=null&&X.hasOwnProperty("display")?X.display:null;b.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(te){ze(E,E.return,te)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(te){ze(E,E.return,te)}}}else if(t.tag===18){if(n===null){E=t;try{var B=E.stateNode;r?Sp(B,!0):Sp(E.stateNode,!1)}catch(te){ze(E,E.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Hr(e,n))));break;case 19:bt(t,e),xt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Hr(e,i)));break;case 30:break;case 21:break;default:bt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Eh(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,c=Mc(e);Ur(e,c,r);break;case 5:var h=n.stateNode;n.flags&32&&(Va(h,""),n.flags&=-33);var b=Mc(e);Ur(e,b,h);break;case 3:case 4:var E=n.stateNode.containerInfo,O=Mc(e);Oc(e,O,E);break;default:throw Error(o(161))}}catch(Y){ze(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Oh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Oh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Th(e,t.alternate,t),t=t.sibling}function Ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:In(4,t,t.return),Ma(t);break;case 1:rn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Sh(t,t.return,n),Ma(t);break;case 27:Rl(t.stateNode);case 26:case 5:rn(t,t.return),Ma(t);break;case 22:t.memoizedState===null&&Ma(t);break;case 30:Ma(t);break;default:Ma(t)}e=e.sibling}}function zn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:zn(r,c,n),vl(4,c);break;case 1:if(zn(r,c,n),i=c,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){ze(i,i.return,O)}if(i=c,r=i.updateQueue,r!==null){var b=i.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)c0(E[r],b)}catch(O){ze(i,i.return,O)}}n&&h&64&&xh(c),bl(c,c.return);break;case 27:jh(c);case 26:case 5:zn(r,c,n),n&&i===null&&h&4&&wh(c),bl(c,c.return);break;case 12:zn(r,c,n);break;case 31:zn(r,c,n),n&&h&4&&kh(r,c);break;case 13:zn(r,c,n),n&&h&4&&Ah(r,c);break;case 22:c.memoizedState===null&&zn(r,c,n),bl(c,c.return);break;case 30:break;default:zn(r,c,n)}t=t.sibling}}function Dc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ll(n))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ll(e))}function It(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nh(e,t,n,i),t=t.sibling}function Nh(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,i),r&2048&&vl(9,t);break;case 1:It(e,t,n,i);break;case 3:It(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ll(e)));break;case 12:if(r&2048){It(e,t,n,i),e=t.stateNode;try{var c=t.memoizedProps,h=c.id,b=c.onPostCommit;typeof b=="function"&&b(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){ze(t,t.return,E)}}else It(e,t,n,i);break;case 31:It(e,t,n,i);break;case 13:It(e,t,n,i);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?It(e,t,n,i):xl(e,t):c._visibility&2?It(e,t,n,i):(c._visibility|=2,fi(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Dc(h,t);break;case 24:It(e,t,n,i),r&2048&&_c(t.alternate,t);break;default:It(e,t,n,i)}}function fi(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,h=t,b=n,E=i,O=h.flags;switch(h.tag){case 0:case 11:case 15:fi(c,h,b,E,r),vl(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?fi(c,h,b,E,r):xl(c,h):(Y._visibility|=2,fi(c,h,b,E,r)),r&&O&2048&&Dc(h.alternate,h);break;case 24:fi(c,h,b,E,r),r&&O&2048&&_c(h.alternate,h);break;default:fi(c,h,b,E,r)}t=t.sibling}}function xl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:xl(n,i),r&2048&&Dc(i.alternate,i);break;case 24:xl(n,i),r&2048&&_c(i.alternate,i);break;default:xl(n,i)}t=t.sibling}}var Sl=8192;function di(e,t,n){if(e.subtreeFlags&Sl)for(e=e.child;e!==null;)Dh(e,t,n),e=e.sibling}function Dh(e,t,n){switch(e.tag){case 26:di(e,t,n),e.flags&Sl&&e.memoizedState!==null&&db(n,Wt,e.memoizedState,e.memoizedProps);break;case 5:di(e,t,n);break;case 3:case 4:var i=Wt;Wt=eo(e.stateNode.containerInfo),di(e,t,n),Wt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Sl,Sl=16777216,di(e,t,n),Sl=i):di(e,t,n));break;default:di(e,t,n)}}function _h(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,Lh(i,e)}_h(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bh(e),e=e.sibling}function Bh(e){switch(e.tag){case 0:case 11:case 15:wl(e),e.flags&2048&&In(9,e,e.return);break;case 3:wl(e);break;case 12:wl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gr(e)):wl(e);break;default:wl(e)}}function Gr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,Lh(i,e)}_h(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),Gr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gr(t));break;default:Gr(t)}e=e.sibling}}function Lh(e,t){for(;nt!==null;){var n=nt;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ll(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,nt=i;else e:for(n=e;nt!==null;){i=nt;var r=i.sibling,c=i.return;if(zh(i),i===n){nt=null;break e}if(r!==null){r.return=c,nt=r;break e}nt=c}}}var zv={getCacheForType:function(e){var t=ot(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ot(Je).controller.signal}},Rv=typeof WeakMap=="function"?WeakMap:Map,je=0,De=null,ge=null,ve=0,Te=0,Ot=null,Pn=!1,hi=!1,Bc=!1,Rn=0,Qe=0,ea=0,Oa=0,Lc=0,Nt=0,pi=0,El=null,St=null,$c=!1,Yr=0,$h=0,qr=1/0,Xr=null,ta=null,et=0,na=null,mi=null,kn=0,Uc=0,Hc=null,Uh=null,jl=0,Gc=null;function Dt(){return(je&2)!==0&&ve!==0?ve&-ve:N.T!==null?Kc():td()}function Hh(){if(Nt===0)if((ve&536870912)===0||xe){var e=Il;Il<<=1,(Il&3932160)===0&&(Il=262144),Nt=e}else Nt=536870912;return e=At.current,e!==null&&(e.flags|=32),Nt}function wt(e,t,n){(e===De&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(gi(e,0),aa(e,ve,Nt,!1)),Vi(e,n),((je&2)===0||e!==De)&&(e===De&&((je&2)===0&&(Oa|=n),Qe===4&&aa(e,ve,Nt,!1)),on(e))}function Gh(e,t,n){if((je&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Xi(e,t),r=i?Mv(e,t):qc(e,t,!0),c=i;do{if(r===0){hi&&!i&&aa(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!kv(n)){r=qc(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var b=e;r=El;var E=b.current.memoizedState.isDehydrated;if(E&&(gi(b,h).flags|=256),h=qc(b,h,!1),h!==2){if(Bc&&!E){b.errorRecoveryDisabledLanes|=c,Oa|=c,r=4;break e}c=St,St=r,c!==null&&(St===null?St=c:St.push.apply(St,c))}r=h}if(c=!1,r!==2)continue}}if(r===1){gi(e,0),aa(e,t,0,!0);break}e:{switch(i=e,c=r,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:aa(i,t,Nt,!Pn);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Yr+300-Ct(),10<r)){if(aa(i,t,Nt,!Pn),er(i,0,!0)!==0)break e;kn=t,i.timeoutHandle=vp(Yh.bind(null,i,n,St,Xr,$c,t,Nt,Oa,pi,Pn,c,"Throttled",-0,0),r);break e}Yh(i,n,St,Xr,$c,t,Nt,Oa,pi,Pn,c,null,-0,0)}}break}while(!0);on(e)}function Yh(e,t,n,i,r,c,h,b,E,O,Y,X,D,B){if(e.timeoutHandle=-1,X=t.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pn},Dh(t,c,X);var te=(c&62914560)===c?Yr-Ct():(c&4194048)===c?$h-Ct():0;if(te=hb(X,te),te!==null){kn=c,e.cancelPendingCommit=te(Fh.bind(null,e,t,c,n,i,r,h,b,E,Y,X,null,D,B)),aa(e,c,h,!O);return}}Fh(e,t,c,n,i,r,h,b,E)}function kv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],c=r.getSnapshot;r=r.value;try{if(!Rt(c(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function aa(e,t,n,i){t&=~Lc,t&=~Oa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var c=31-zt(r),h=1<<c;i[c]=-1,r&=~h}n!==0&&If(e,n,t)}function Vr(){return(je&6)===0?(Cl(0),!1):!0}function Yc(){if(ge!==null){if(Te===0)var e=ge.return;else e=ge,vn=Ea=null,ic(e),ri=null,ol=0,e=ge;for(;e!==null;)bh(e.alternate,e),e=e.return;ge=null}}function gi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),kn=0,Yc(),De=e,ge=n=gn(e.current,null),ve=t,Te=0,Ot=null,Pn=!1,hi=Xi(e,t),Bc=!1,pi=Nt=Lc=Oa=ea=Qe=0,St=El=null,$c=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-zt(i),c=1<<r;t|=e[r],i&=~c}return Rn=t,dr(),n}function qh(e,t){fe=null,N.H=ml,t===li||t===xr?(t=l0(),Te=3):t===Qs?(t=l0(),Te=4):Te=t===xc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ot=t,ge===null&&(Qe=1,Dr(e,Gt(t,e.current)))}function Xh(){var e=At.current;return e===null?!0:(ve&4194048)===ve?Vt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Vt:!1}function Vh(){var e=N.H;return N.H=ml,e===null?ml:e}function Qh(){var e=N.A;return N.A=zv,e}function Qr(){Qe=4,Pn||(ve&4194048)!==ve&&At.current!==null||(hi=!0),(ea&134217727)===0&&(Oa&134217727)===0||De===null||aa(De,ve,Nt,!1)}function qc(e,t,n){var i=je;je|=2;var r=Vh(),c=Qh();(De!==e||ve!==t)&&(Xr=null,gi(e,t)),t=!1;var h=Qe;e:do try{if(Te!==0&&ge!==null){var b=ge,E=Ot;switch(Te){case 8:Yc(),h=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var O=Te;if(Te=0,Ot=null,yi(e,b,E,O),n&&hi){h=0;break e}break;default:O=Te,Te=0,Ot=null,yi(e,b,E,O)}}Av(),h=Qe;break}catch(Y){qh(e,Y)}while(!0);return t&&e.shellSuspendCounter++,vn=Ea=null,je=i,N.H=r,N.A=c,ge===null&&(De=null,ve=0,dr()),h}function Av(){for(;ge!==null;)Kh(ge)}function Mv(e,t){var n=je;je|=2;var i=Vh(),r=Qh();De!==e||ve!==t?(Xr=null,qr=Ct()+500,gi(e,t)):hi=Xi(e,t);e:do try{if(Te!==0&&ge!==null){t=ge;var c=Ot;t:switch(Te){case 1:Te=0,Ot=null,yi(e,t,c,1);break;case 2:case 9:if(a0(c)){Te=0,Ot=null,Zh(t);break}t=function(){Te!==2&&Te!==9||De!==e||(Te=7),on(e)},c.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:a0(c)?(Te=0,Ot=null,Zh(t)):(Te=0,Ot=null,yi(e,t,c,7));break;case 5:var h=null;switch(ge.tag){case 26:h=ge.memoizedState;case 5:case 27:var b=ge;if(h?Np(h):b.stateNode.complete){Te=0,Ot=null;var E=b.sibling;if(E!==null)ge=E;else{var O=b.return;O!==null?(ge=O,Kr(O)):ge=null}break t}}Te=0,Ot=null,yi(e,t,c,5);break;case 6:Te=0,Ot=null,yi(e,t,c,6);break;case 8:Yc(),Qe=6;break e;default:throw Error(o(462))}}Ov();break}catch(Y){qh(e,Y)}while(!0);return vn=Ea=null,N.H=i,N.A=r,je=n,ge!==null?0:(De=null,ve=0,dr(),Qe)}function Ov(){for(;ge!==null&&!ty();)Kh(ge)}function Kh(e){var t=yh(e.alternate,e,Rn);e.memoizedProps=e.pendingProps,t===null?Kr(e):ge=t}function Zh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fh(n,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=fh(n,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:ic(t);default:bh(n,t),t=ge=Qd(t,Rn),t=yh(n,t,Rn)}e.memoizedProps=e.pendingProps,t===null?Kr(e):ge=t}function yi(e,t,n,i){vn=Ea=null,ic(t),ri=null,ol=0;var r=t.return;try{if(xv(e,r,t,n,ve)){Qe=1,Dr(e,Gt(n,e.current)),ge=null;return}}catch(c){if(r!==null)throw ge=r,c;Qe=1,Dr(e,Gt(n,e.current)),ge=null;return}t.flags&32768?(xe||i===1?e=!0:hi||(ve&536870912)!==0?e=!1:(Pn=e=!0,(i===2||i===9||i===3||i===6)&&(i=At.current,i!==null&&i.tag===13&&(i.flags|=16384))),Jh(t,e)):Kr(t)}function Kr(e){var t=e;do{if((t.flags&32768)!==0){Jh(t,Pn);return}e=t.return;var n=Ev(t.alternate,t,Rn);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Qe===0&&(Qe=5)}function Jh(e,t){do{var n=jv(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);Qe=6,ge=null}function Fh(e,t,n,i,r,c,h,b,E){e.cancelPendingCommit=null;do Zr();while(et!==0);if((je&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Ms,fy(e,n,c,h,b,E),e===De&&(ge=De=null,ve=0),mi=t,na=e,kn=n,Uc=c,Hc=r,Uh=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Bv(Fl,function(){return tp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=N.T,N.T=null,r=K.p,K.p=2,h=je,je|=4;try{Cv(e,t,n)}finally{je=h,K.p=r,N.T=i}}et=1,Wh(),Ih(),Ph()}}function Wh(){if(et===1){et=0;var e=na,t=mi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var i=K.p;K.p=2;var r=je;je|=4;try{Mh(t,e);var c=tu,h=Ld(e.containerInfo),b=c.focusedElem,E=c.selectionRange;if(h!==b&&b&&b.ownerDocument&&Bd(b.ownerDocument.documentElement,b)){if(E!==null&&Ts(b)){var O=E.start,Y=E.end;if(Y===void 0&&(Y=O),"selectionStart"in b)b.selectionStart=O,b.selectionEnd=Math.min(Y,b.value.length);else{var X=b.ownerDocument||document,D=X&&X.defaultView||window;if(D.getSelection){var B=D.getSelection(),te=b.textContent.length,oe=Math.min(E.start,te),Ne=E.end===void 0?oe:Math.min(E.end,te);!B.extend&&oe>Ne&&(h=Ne,Ne=oe,oe=h);var z=_d(b,oe),T=_d(b,Ne);if(z&&T&&(B.rangeCount!==1||B.anchorNode!==z.node||B.anchorOffset!==z.offset||B.focusNode!==T.node||B.focusOffset!==T.offset)){var A=X.createRange();A.setStart(z.node,z.offset),B.removeAllRanges(),oe>Ne?(B.addRange(A),B.extend(T.node,T.offset)):(A.setEnd(T.node,T.offset),B.addRange(A))}}}}for(X=[],B=b;B=B.parentNode;)B.nodeType===1&&X.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<X.length;b++){var q=X[b];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}ro=!!eu,tu=eu=null}finally{je=r,K.p=i,N.T=n}}e.current=t,et=2}}function Ih(){if(et===2){et=0;var e=na,t=mi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var i=K.p;K.p=2;var r=je;je|=4;try{Th(e,t.alternate,t)}finally{je=r,K.p=i,N.T=n}}et=3}}function Ph(){if(et===4||et===3){et=0,ny();var e=na,t=mi,n=kn,i=Uh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,mi=na=null,ep(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ta=null),os(n),t=t.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(qi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=N.T,r=K.p,K.p=2,N.T=null;try{for(var c=e.onRecoverableError,h=0;h<i.length;h++){var b=i[h];c(b.value,{componentStack:b.stack})}}finally{N.T=t,K.p=r}}(kn&3)!==0&&Zr(),on(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Gc?jl++:(jl=0,Gc=e):jl=0,Cl(0)}}function ep(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ll(t)))}function Zr(){return Wh(),Ih(),Ph(),tp()}function tp(){if(et!==5)return!1;var e=na,t=Uc;Uc=0;var n=os(kn),i=N.T,r=K.p;try{K.p=32>n?32:n,N.T=null,n=Hc,Hc=null;var c=na,h=kn;if(et=0,mi=na=null,kn=0,(je&6)!==0)throw Error(o(331));var b=je;if(je|=4,Bh(c.current),Nh(c,c.current,h,n),je=b,Cl(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(qi,c)}catch{}return!0}finally{K.p=r,N.T=i,ep(e,t)}}function np(e,t,n){t=Gt(n,t),t=bc(e.stateNode,t,2),e=Jn(e,t,2),e!==null&&(Vi(e,2),on(e))}function ze(e,t,n){if(e.tag===3)np(e,e,n);else for(;t!==null;){if(t.tag===3){np(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ta===null||!ta.has(i))){e=Gt(n,e),n=ah(2),i=Jn(t,n,2),i!==null&&(ih(n,i,t,e),Vi(i,2),on(i));break}}t=t.return}}function Xc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Rv;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Bc=!0,r.add(n),e=Nv.bind(null,e,t,n),t.then(e,e))}function Nv(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(ve&n)===n&&(Qe===4||Qe===3&&(ve&62914560)===ve&&300>Ct()-Yr?(je&2)===0&&gi(e,0):Lc|=n,pi===ve&&(pi=0)),on(e)}function ap(e,t){t===0&&(t=Wf()),e=xa(e,t),e!==null&&(Vi(e,t),on(e))}function Dv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ap(e,n)}function _v(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),ap(e,n)}function Bv(e,t){return as(e,t)}var Jr=null,vi=null,Vc=!1,Fr=!1,Qc=!1,ia=0;function on(e){e!==vi&&e.next===null&&(vi===null?Jr=vi=e:vi=vi.next=e),Fr=!0,Vc||(Vc=!0,$v())}function Cl(e,t){if(!Qc&&Fr){Qc=!0;do for(var n=!1,i=Jr;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var c=0;else{var h=i.suspendedLanes,b=i.pingedLanes;c=(1<<31-zt(42|e)+1)-1,c&=r&~(h&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,op(i,c))}else c=ve,c=er(i,i===De?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||Xi(i,c)||(n=!0,op(i,c));i=i.next}while(n);Qc=!1}}function Lv(){ip()}function ip(){Fr=Vc=!1;var e=0;ia!==0&&Zv()&&(e=ia);for(var t=Ct(),n=null,i=Jr;i!==null;){var r=i.next,c=lp(i,t);c===0?(i.next=null,n===null?Jr=r:n.next=r,r===null&&(vi=n)):(n=i,(e!==0||(c&3)!==0)&&(Fr=!0)),i=r}et!==0&&et!==5||Cl(e),ia!==0&&(ia=0)}function lp(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var h=31-zt(c),b=1<<h,E=r[h];E===-1?((b&n)===0||(b&i)!==0)&&(r[h]=uy(b,t)):E<=t&&(e.expiredLanes|=b),c&=~b}if(t=De,n=ve,n=er(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&is(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Xi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&is(i),os(n)){case 2:case 8:n=Jf;break;case 32:n=Fl;break;case 268435456:n=Ff;break;default:n=Fl}return i=rp.bind(null,e),n=as(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&is(i),e.callbackPriority=2,e.callbackNode=null,2}function rp(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Zr()&&e.callbackNode!==n)return null;var i=ve;return i=er(e,e===De?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Gh(e,i,t),lp(e,Ct()),e.callbackNode!=null&&e.callbackNode===n?rp.bind(null,e):null)}function op(e,t){if(Zr())return null;Gh(e,t,!0)}function $v(){Fv(function(){(je&6)!==0?as(Zf,Lv):ip()})}function Kc(){if(ia===0){var e=ai;e===0&&(e=Wl,Wl<<=1,(Wl&261888)===0&&(Wl=256)),ia=e}return ia}function sp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ir(""+e)}function cp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Uv(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var c=sp((r[gt]||null).action),h=i.submitter;h&&(t=(t=h[gt]||null)?sp(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var b=new sr("action","action",null,i,r);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ia!==0){var E=h?cp(r,h):new FormData(r);hc(n,{pending:!0,data:E,method:r.method,action:c},null,E)}}else typeof c=="function"&&(b.preventDefault(),E=h?cp(r,h):new FormData(r),hc(n,{pending:!0,data:E,method:r.method,action:c},c,E))},currentTarget:r}]})}}for(var Zc=0;Zc<As.length;Zc++){var Jc=As[Zc],Hv=Jc.toLowerCase(),Gv=Jc[0].toUpperCase()+Jc.slice(1);Ft(Hv,"on"+Gv)}Ft(Hd,"onAnimationEnd"),Ft(Gd,"onAnimationIteration"),Ft(Yd,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(av,"onTransitionRun"),Ft(iv,"onTransitionStart"),Ft(lv,"onTransitionCancel"),Ft(qd,"onTransitionEnd"),qa("onMouseEnter",["mouseout","mouseover"]),qa("onMouseLeave",["mouseout","mouseover"]),qa("onPointerEnter",["pointerout","pointerover"]),qa("onPointerLeave",["pointerout","pointerover"]),ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function up(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var h=i.length-1;0<=h;h--){var b=i[h],E=b.instance,O=b.currentTarget;if(b=b.listener,E!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=O;try{c(r)}catch(Y){fr(Y)}r.currentTarget=null,c=E}else for(h=0;h<i.length;h++){if(b=i[h],E=b.instance,O=b.currentTarget,b=b.listener,E!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=O;try{c(r)}catch(Y){fr(Y)}r.currentTarget=null,c=E}}}}function ye(e,t){var n=t[ss];n===void 0&&(n=t[ss]=new Set);var i=e+"__bubble";n.has(i)||(fp(t,e,2,!1),n.add(i))}function Fc(e,t,n){var i=0;t&&(i|=4),fp(n,e,i,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function Wc(e){if(!e[Wr]){e[Wr]=!0,id.forEach(function(n){n!=="selectionchange"&&(Yv.has(n)||Fc(n,!1,e),Fc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,Fc("selectionchange",!1,t))}}function fp(e,t,n,i){switch(Hp(t)){case 2:var r=gb;break;case 8:r=yb;break;default:r=du}n=r.bind(null,t,n,e),r=void 0,!ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Ic(e,t,n,i,r){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var b=i.stateNode.containerInfo;if(b===r)break;if(h===4)for(h=i.return;h!==null;){var E=h.tag;if((E===3||E===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;b!==null;){if(h=Ha(b),h===null)return;if(E=h.tag,E===5||E===6||E===26||E===27){i=c=h;continue e}b=b.parentNode}}i=i.return}gd(function(){var O=c,Y=ms(n),X=[];e:{var D=Xd.get(e);if(D!==void 0){var B=sr,te=e;switch(e){case"keypress":if(rr(n)===0)break e;case"keydown":case"keyup":B=_y;break;case"focusin":te="focus",B=Ss;break;case"focusout":te="blur",B=Ss;break;case"beforeblur":case"afterblur":B=Ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=$y;break;case Hd:case Gd:case Yd:B=Ty;break;case qd:B=Hy;break;case"scroll":case"scrollend":B=Sy;break;case"wheel":B=Yy;break;case"copy":case"cut":case"paste":B=Ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Sd;break;case"toggle":case"beforetoggle":B=Xy}var oe=(t&4)!==0,Ne=!oe&&(e==="scroll"||e==="scrollend"),z=oe?D!==null?D+"Capture":null:D;oe=[];for(var T=O,A;T!==null;){var q=T;if(A=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||A===null||z===null||(q=Zi(T,z),q!=null&&oe.push(zl(T,q,A))),Ne)break;T=T.return}0<oe.length&&(D=new B(D,te,null,n,Y),X.push({event:D,listeners:oe}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",D&&n!==ps&&(te=n.relatedTarget||n.fromElement)&&(Ha(te)||te[Ua]))break e;if((B||D)&&(D=Y.window===Y?Y:(D=Y.ownerDocument)?D.defaultView||D.parentWindow:window,B?(te=n.relatedTarget||n.toElement,B=O,te=te?Ha(te):null,te!==null&&(Ne=f(te),oe=te.tag,te!==Ne||oe!==5&&oe!==27&&oe!==6)&&(te=null)):(B=null,te=O),B!==te)){if(oe=bd,q="onMouseLeave",z="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Sd,q="onPointerLeave",z="onPointerEnter",T="pointer"),Ne=B==null?D:Ki(B),A=te==null?D:Ki(te),D=new oe(q,T+"leave",B,n,Y),D.target=Ne,D.relatedTarget=A,q=null,Ha(Y)===O&&(oe=new oe(z,T+"enter",te,n,Y),oe.target=A,oe.relatedTarget=Ne,q=oe),Ne=q,B&&te)t:{for(oe=qv,z=B,T=te,A=0,q=z;q;q=oe(q))A++;q=0;for(var le=T;le;le=oe(le))q++;for(;0<A-q;)z=oe(z),A--;for(;0<q-A;)T=oe(T),q--;for(;A--;){if(z===T||T!==null&&z===T.alternate){oe=z;break t}z=oe(z),T=oe(T)}oe=null}else oe=null;B!==null&&dp(X,D,B,oe,!1),te!==null&&Ne!==null&&dp(X,Ne,te,oe,!0)}}e:{if(D=O?Ki(O):window,B=D.nodeName&&D.nodeName.toLowerCase(),B==="select"||B==="input"&&D.type==="file")var we=kd;else if(zd(D))if(Ad)we=ev;else{we=Iy;var ae=Wy}else B=D.nodeName,!B||B.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?O&&hs(O.elementType)&&(we=kd):we=Py;if(we&&(we=we(e,O))){Rd(X,we,n,Y);break e}ae&&ae(e,D,O),e==="focusout"&&O&&D.type==="number"&&O.memoizedProps.value!=null&&ds(D,"number",D.value)}switch(ae=O?Ki(O):window,e){case"focusin":(zd(ae)||ae.contentEditable==="true")&&(Ja=ae,zs=O,nl=null);break;case"focusout":nl=zs=Ja=null;break;case"mousedown":Rs=!0;break;case"contextmenu":case"mouseup":case"dragend":Rs=!1,$d(X,n,Y);break;case"selectionchange":if(nv)break;case"keydown":case"keyup":$d(X,n,Y)}var he;if(Es)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Za?Cd(e,n)&&(be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(be="onCompositionStart");be&&(wd&&n.locale!=="ko"&&(Za||be!=="onCompositionStart"?be==="onCompositionEnd"&&Za&&(he=yd()):(Yn=Y,vs="value"in Yn?Yn.value:Yn.textContent,Za=!0)),ae=Ir(O,be),0<ae.length&&(be=new xd(be,e,null,n,Y),X.push({event:be,listeners:ae}),he?be.data=he:(he=Td(n),he!==null&&(be.data=he)))),(he=Qy?Ky(e,n):Zy(e,n))&&(be=Ir(O,"onBeforeInput"),0<be.length&&(ae=new xd("onBeforeInput","beforeinput",null,n,Y),X.push({event:ae,listeners:be}),ae.data=he)),Uv(X,e,O,n,Y)}up(X,t)})}function zl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ir(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Zi(e,n),r!=null&&i.unshift(zl(e,r,c)),r=Zi(e,t),r!=null&&i.push(zl(e,r,c))),e.tag===3)return i;e=e.return}return[]}function qv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dp(e,t,n,i,r){for(var c=t._reactName,h=[];n!==null&&n!==i;){var b=n,E=b.alternate,O=b.stateNode;if(b=b.tag,E!==null&&E===i)break;b!==5&&b!==26&&b!==27||O===null||(E=O,r?(O=Zi(n,c),O!=null&&h.unshift(zl(n,O,E))):r||(O=Zi(n,c),O!=null&&h.push(zl(n,O,E)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var Xv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function hp(e){return(typeof e=="string"?e:""+e).replace(Xv,`
`).replace(Vv,"")}function pp(e,t){return t=hp(t),hp(e)===t}function Oe(e,t,n,i,r,c){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Va(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Va(e,""+i);break;case"className":nr(e,"class",i);break;case"tabIndex":nr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":nr(e,n,i);break;case"style":pd(e,i,c);break;case"data":if(t!=="object"){nr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ir(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Oe(e,t,"name",r.name,r,null),Oe(e,t,"formEncType",r.formEncType,r,null),Oe(e,t,"formMethod",r.formMethod,r,null),Oe(e,t,"formTarget",r.formTarget,r,null)):(Oe(e,t,"encType",r.encType,r,null),Oe(e,t,"method",r.method,r,null),Oe(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ir(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=pn);break;case"onScroll":i!=null&&ye("scroll",e);break;case"onScrollEnd":i!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ir(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ye("beforetoggle",e),ye("toggle",e),tr(e,"popover",i);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":tr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=by.get(n)||n,tr(e,n,i))}}function Pc(e,t,n,i,r,c){switch(n){case"style":pd(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Va(e,i):(typeof i=="number"||typeof i=="bigint")&&Va(e,""+i);break;case"onScroll":i!=null&&ye("scroll",e);break;case"onScrollEnd":i!=null&&ye("scrollend",e);break;case"onClick":i!=null&&(e.onclick=pn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ld.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),c=e[gt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):tr(e,n,i)}}}function ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var i=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var h=n[c];if(h!=null)switch(c){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Oe(e,t,c,h,n,null)}}r&&Oe(e,t,"srcSet",n.srcSet,n,null),i&&Oe(e,t,"src",n.src,n,null);return;case"input":ye("invalid",e);var b=c=h=r=null,E=null,O=null;for(i in n)if(n.hasOwnProperty(i)){var Y=n[i];if(Y!=null)switch(i){case"name":r=Y;break;case"type":h=Y;break;case"checked":E=Y;break;case"defaultChecked":O=Y;break;case"value":c=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:Oe(e,t,i,Y,n,null)}}ud(e,c,b,E,O,h,r,!1);return;case"select":ye("invalid",e),i=h=c=null;for(r in n)if(n.hasOwnProperty(r)&&(b=n[r],b!=null))switch(r){case"value":c=b;break;case"defaultValue":h=b;break;case"multiple":i=b;default:Oe(e,t,r,b,n,null)}t=c,n=h,e.multiple=!!i,t!=null?Xa(e,!!i,t,!1):n!=null&&Xa(e,!!i,n,!0);return;case"textarea":ye("invalid",e),c=r=i=null;for(h in n)if(n.hasOwnProperty(h)&&(b=n[h],b!=null))switch(h){case"value":i=b;break;case"defaultValue":r=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:Oe(e,t,h,b,n,null)}dd(e,i,r,c);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(i=n[E],i!=null))switch(E){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Oe(e,t,E,i,n,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(i=0;i<Tl.length;i++)ye(Tl[i],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(i=n[O],i!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Oe(e,t,O,i,n,null)}return;default:if(hs(t)){for(Y in n)n.hasOwnProperty(Y)&&(i=n[Y],i!==void 0&&Pc(e,t,Y,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&Oe(e,t,b,i,n,null))}function Qv(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,h=null,b=null,E=null,O=null,Y=null;for(B in n){var X=n[B];if(n.hasOwnProperty(B)&&X!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":E=X;default:i.hasOwnProperty(B)||Oe(e,t,B,null,i,X)}}for(var D in i){var B=i[D];if(X=n[D],i.hasOwnProperty(D)&&(B!=null||X!=null))switch(D){case"type":c=B;break;case"name":r=B;break;case"checked":O=B;break;case"defaultChecked":Y=B;break;case"value":h=B;break;case"defaultValue":b=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:B!==X&&Oe(e,t,D,B,i,X)}}fs(e,h,b,E,O,Y,c,r);return;case"select":B=h=b=D=null;for(c in n)if(E=n[c],n.hasOwnProperty(c)&&E!=null)switch(c){case"value":break;case"multiple":B=E;default:i.hasOwnProperty(c)||Oe(e,t,c,null,i,E)}for(r in i)if(c=i[r],E=n[r],i.hasOwnProperty(r)&&(c!=null||E!=null))switch(r){case"value":D=c;break;case"defaultValue":b=c;break;case"multiple":h=c;default:c!==E&&Oe(e,t,r,c,i,E)}t=b,n=h,i=B,D!=null?Xa(e,!!n,D,!1):!!i!=!!n&&(t!=null?Xa(e,!!n,t,!0):Xa(e,!!n,n?[]:"",!1));return;case"textarea":B=D=null;for(b in n)if(r=n[b],n.hasOwnProperty(b)&&r!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(e,t,b,null,i,r)}for(h in i)if(r=i[h],c=n[h],i.hasOwnProperty(h)&&(r!=null||c!=null))switch(h){case"value":D=r;break;case"defaultValue":B=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==c&&Oe(e,t,h,r,i,c)}fd(e,D,B);return;case"option":for(var te in n)if(D=n[te],n.hasOwnProperty(te)&&D!=null&&!i.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Oe(e,t,te,null,i,D)}for(E in i)if(D=i[E],B=n[E],i.hasOwnProperty(E)&&D!==B&&(D!=null||B!=null))switch(E){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Oe(e,t,E,D,i,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)D=n[oe],n.hasOwnProperty(oe)&&D!=null&&!i.hasOwnProperty(oe)&&Oe(e,t,oe,null,i,D);for(O in i)if(D=i[O],B=n[O],i.hasOwnProperty(O)&&D!==B&&(D!=null||B!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:Oe(e,t,O,D,i,B)}return;default:if(hs(t)){for(var Ne in n)D=n[Ne],n.hasOwnProperty(Ne)&&D!==void 0&&!i.hasOwnProperty(Ne)&&Pc(e,t,Ne,void 0,i,D);for(Y in i)D=i[Y],B=n[Y],!i.hasOwnProperty(Y)||D===B||D===void 0&&B===void 0||Pc(e,t,Y,D,i,B);return}}for(var z in n)D=n[z],n.hasOwnProperty(z)&&D!=null&&!i.hasOwnProperty(z)&&Oe(e,t,z,null,i,D);for(X in i)D=i[X],B=n[X],!i.hasOwnProperty(X)||D===B||D==null&&B==null||Oe(e,t,X,D,i,B)}function mp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],c=r.transferSize,h=r.initiatorType,b=r.duration;if(c&&b&&mp(h)){for(h=0,b=r.responseEnd,i+=1;i<n.length;i++){var E=n[i],O=E.startTime;if(O>b)break;var Y=E.transferSize,X=E.initiatorType;Y&&mp(X)&&(E=E.responseEnd,h+=Y*(E<b?1:(b-O)/(E-O)))}if(--i,t+=8*(c+h)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var eu=null,tu=null;function Pr(e){return e.nodeType===9?e:e.ownerDocument}function gp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var au=null;function Zv(){var e=window.event;return e&&e.type==="popstate"?e===au?!1:(au=e,!0):(au=null,!1)}var vp=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(e){return bp.resolve(null).then(e).catch(Wv)}:vp;function Wv(e){setTimeout(function(){throw e})}function la(e){return e==="head"}function xp(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),wi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Rl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Rl(n);for(var c=n.firstChild;c;){var h=c.nextSibling,b=c.nodeName;c[Qi]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=h}}else n==="body"&&Rl(e.ownerDocument.body);n=r}while(n);wi(t)}function Sp(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function iu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":iu(n),cs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Iv(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Qi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function Pv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qt(e.nextSibling),e===null))return null;return e}function wp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function lu(e){return e.data==="$?"||e.data==="$~"}function ru(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function eb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ou=null;function Ep(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Qt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function jp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Cp(e,t,n){switch(t=Pr(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Rl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);cs(e)}var Kt=new Map,Tp=new Set;function eo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var An=K.d;K.d={f:tb,r:nb,D:ab,C:ib,L:lb,m:rb,X:sb,S:ob,M:cb};function tb(){var e=An.f(),t=Vr();return e||t}function nb(e){var t=Ga(e);t!==null&&t.tag===5&&t.type==="form"?q0(t):An.r(e)}var bi=typeof document>"u"?null:document;function zp(e,t,n){var i=bi;if(i&&typeof t=="string"&&t){var r=Ut(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Tp.has(r)||(Tp.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),ct(t,"link",e),tt(t),i.head.appendChild(t)))}}function ab(e){An.D(e),zp("dns-prefetch",e,null)}function ib(e,t){An.C(e,t),zp("preconnect",e,t)}function lb(e,t,n){An.L(e,t,n);var i=bi;if(i&&e&&t){var r='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ut(n.imageSizes)+'"]')):r+='[href="'+Ut(e)+'"]';var c=r;switch(t){case"style":c=xi(e);break;case"script":c=Si(e)}Kt.has(c)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(c,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(kl(c))||t==="script"&&i.querySelector(Al(c))||(t=i.createElement("link"),ct(t,"link",e),tt(t),i.head.appendChild(t)))}}function rb(e,t){An.m(e,t);var n=bi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ut(i)+'"][href="'+Ut(e)+'"]',c=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Si(e)}if(!Kt.has(c)&&(e=w({rel:"modulepreload",href:e},t),Kt.set(c,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Al(c)))return}i=n.createElement("link"),ct(i,"link",e),tt(i),n.head.appendChild(i)}}}function ob(e,t,n){An.S(e,t,n);var i=bi;if(i&&e){var r=Ya(i).hoistableStyles,c=xi(e);t=t||"default";var h=r.get(c);if(!h){var b={loading:0,preload:null};if(h=i.querySelector(kl(c)))b.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(c))&&su(e,n);var E=h=i.createElement("link");tt(E),ct(E,"link",e),E._p=new Promise(function(O,Y){E.onload=O,E.onerror=Y}),E.addEventListener("load",function(){b.loading|=1}),E.addEventListener("error",function(){b.loading|=2}),b.loading|=4,to(h,t,i)}h={type:"stylesheet",instance:h,count:1,state:b},r.set(c,h)}}}function sb(e,t){An.X(e,t);var n=bi;if(n&&e){var i=Ya(n).hoistableScripts,r=Si(e),c=i.get(r);c||(c=n.querySelector(Al(r)),c||(e=w({src:e,async:!0},t),(t=Kt.get(r))&&cu(e,t),c=n.createElement("script"),tt(c),ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function cb(e,t){An.M(e,t);var n=bi;if(n&&e){var i=Ya(n).hoistableScripts,r=Si(e),c=i.get(r);c||(c=n.querySelector(Al(r)),c||(e=w({src:e,async:!0,type:"module"},t),(t=Kt.get(r))&&cu(e,t),c=n.createElement("script"),tt(c),ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Rp(e,t,n,i){var r=(r=se.current)?eo(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=xi(n.href),n=Ya(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=xi(n.href);var c=Ya(r).hoistableStyles,h=c.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=r.querySelector(kl(e)))&&!c._p&&(h.instance=c,h.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),c||ub(r,e,n,h.state))),t&&i===null)throw Error(o(528,""));return h}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Si(n),n=Ya(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function xi(e){return'href="'+Ut(e)+'"'}function kl(e){return'link[rel="stylesheet"]['+e+"]"}function kp(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function ub(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ct(t,"link",n),tt(t),e.head.appendChild(t))}function Si(e){return'[src="'+Ut(e)+'"]'}function Al(e){return"script[async]"+e}function Ap(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(i)return t.instance=i,tt(i),i;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tt(i),ct(i,"style",r),to(i,n.precedence,e),t.instance=i;case"stylesheet":r=xi(n.href);var c=e.querySelector(kl(r));if(c)return t.state.loading|=4,t.instance=c,tt(c),c;i=kp(n),(r=Kt.get(r))&&su(i,r),c=(e.ownerDocument||e).createElement("link"),tt(c);var h=c;return h._p=new Promise(function(b,E){h.onload=b,h.onerror=E}),ct(c,"link",i),t.state.loading|=4,to(c,n.precedence,e),t.instance=c;case"script":return c=Si(n.src),(r=e.querySelector(Al(c)))?(t.instance=r,tt(r),r):(i=n,(r=Kt.get(c))&&(i=w({},n),cu(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),tt(r),ct(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,to(i,n.precedence,e));return t.instance}function to(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,c=r,h=0;h<i.length;h++){var b=i[h];if(b.dataset.precedence===t)c=b;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function su(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function cu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var no=null;function Mp(e,t,n){if(no===null){var i=new Map,r=no=new Map;r.set(n,i)}else r=no,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[Qi]||c[lt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=e+h;var b=i.get(h);b?b.push(c):i.set(h,[c])}}return i}function Op(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function fb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Np(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function db(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=xi(i.href),c=t.querySelector(kl(r));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ao.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,tt(c);return}c=t.ownerDocument||t,i=kp(i),(r=Kt.get(r))&&su(i,r),c=c.createElement("link"),tt(c);var h=c;h._p=new Promise(function(b,E){h.onload=b,h.onerror=E}),ct(c,"link",i),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ao.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var uu=0;function hb(e,t){return e.stylesheets&&e.count===0&&lo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&lo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&uu===0&&(uu=62500*Kv());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>uu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function ao(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var io=null;function lo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,io=new Map,t.forEach(pb,e),io=null,ao.call(e))}function pb(e,t){if(!(t.state.loading&4)){var n=io.get(e);if(n)var i=n.get(null);else{n=new Map,io.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var h=r[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),i=h)}i&&n.set(null,i)}r=t.instance,h=r.getAttribute("data-precedence"),c=n.get(h)||i,c===i&&n.set(null,r),n.set(h,r),this.count++,i=ao.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ml={$$typeof:L,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function mb(e,t,n,i,r,c,h,b,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ls(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.hiddenUpdates=ls(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Dp(e,t,n,i,r,c,h,b,E,O,Y,X){return e=new mb(e,t,n,h,E,O,Y,X,b),t=1,c===!0&&(t|=24),c=kt(3,null,null,t),e.current=c,c.stateNode=e,t=qs(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:t},Ks(c),e}function _p(e){return e?(e=Ia,e):Ia}function Bp(e,t,n,i,r,c){r=_p(r),i.context===null?i.context=r:i.pendingContext=r,i=Zn(t),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Jn(e,i,t),n!==null&&(wt(n,e,t),cl(n,e,t))}function Lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fu(e,t){Lp(e,t),(e=e.alternate)&&Lp(e,t)}function $p(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&wt(t,e,67108864),fu(e,67108864)}}function Up(e){if(e.tag===13||e.tag===31){var t=Dt();t=rs(t);var n=xa(e,t);n!==null&&wt(n,e,t),fu(e,t)}}var ro=!0;function gb(e,t,n,i){var r=N.T;N.T=null;var c=K.p;try{K.p=2,du(e,t,n,i)}finally{K.p=c,N.T=r}}function yb(e,t,n,i){var r=N.T;N.T=null;var c=K.p;try{K.p=8,du(e,t,n,i)}finally{K.p=c,N.T=r}}function du(e,t,n,i){if(ro){var r=hu(i);if(r===null)Ic(e,t,i,oo,n),Gp(e,i);else if(bb(r,e,t,n,i))i.stopPropagation();else if(Gp(e,i),t&4&&-1<vb.indexOf(e)){for(;r!==null;){var c=Ga(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=ma(c.pendingLanes);if(h!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;h;){var E=1<<31-zt(h);b.entanglements[1]|=E,h&=~E}on(c),(je&6)===0&&(qr=Ct()+500,Cl(0))}}break;case 31:case 13:b=xa(c,2),b!==null&&wt(b,c,2),Vr(),fu(c,2)}if(c=hu(i),c===null&&Ic(e,t,i,oo,n),c===r)break;r=c}r!==null&&i.stopPropagation()}else Ic(e,t,i,null,n)}}function hu(e){return e=ms(e),pu(e)}var oo=null;function pu(e){if(oo=null,e=Ha(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return oo=e,null}function Hp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ay()){case Zf:return 2;case Jf:return 8;case Fl:case iy:return 32;case Ff:return 268435456;default:return 32}default:return 32}}var mu=!1,ra=null,oa=null,sa=null,Ol=new Map,Nl=new Map,ca=[],vb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gp(e,t){switch(e){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":Ol.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(t.pointerId)}}function Dl(e,t,n,i,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[r]},t!==null&&(t=Ga(t),t!==null&&$p(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function bb(e,t,n,i,r){switch(t){case"focusin":return ra=Dl(ra,e,t,n,i,r),!0;case"dragenter":return oa=Dl(oa,e,t,n,i,r),!0;case"mouseover":return sa=Dl(sa,e,t,n,i,r),!0;case"pointerover":var c=r.pointerId;return Ol.set(c,Dl(Ol.get(c)||null,e,t,n,i,r)),!0;case"gotpointercapture":return c=r.pointerId,Nl.set(c,Dl(Nl.get(c)||null,e,t,n,i,r)),!0}return!1}function Yp(e){var t=Ha(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,nd(e.priority,function(){Up(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,nd(e.priority,function(){Up(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function so(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ps=i,n.target.dispatchEvent(i),ps=null}else return t=Ga(n),t!==null&&$p(t),e.blockedOn=n,!1;t.shift()}return!0}function qp(e,t,n){so(e)&&n.delete(t)}function xb(){mu=!1,ra!==null&&so(ra)&&(ra=null),oa!==null&&so(oa)&&(oa=null),sa!==null&&so(sa)&&(sa=null),Ol.forEach(qp),Nl.forEach(qp)}function co(e,t){e.blockedOn===t&&(e.blockedOn=null,mu||(mu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,xb)))}var uo=null;function Xp(e){uo!==e&&(uo=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){uo===e&&(uo=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(pu(i||n)===null)continue;break}var c=Ga(n);c!==null&&(e.splice(t,3),t-=3,hc(c,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function wi(e){function t(E){return co(E,e)}ra!==null&&co(ra,e),oa!==null&&co(oa,e),sa!==null&&co(sa,e),Ol.forEach(t),Nl.forEach(t);for(var n=0;n<ca.length;n++){var i=ca[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ca.length&&(n=ca[0],n.blockedOn===null);)Yp(n),n.blockedOn===null&&ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],c=n[i+1],h=r[gt]||null;if(typeof c=="function")h||Xp(n);else if(h){var b=null;if(c&&c.hasAttribute("formAction")){if(r=c,h=c[gt]||null)b=h.formAction;else if(pu(r)!==null)continue}else b=h.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),Xp(n)}}}function Vp(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(h){return r=h})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function gu(e){this._internalRoot=e}fo.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=Dt();Bp(n,i,e,t,null,null)},fo.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bp(e.current,2,null,e,null,null),Vr(),t[Ua]=null}};function fo(e){this._internalRoot=e}fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=td();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ca.length&&t!==0&&t<ca[n].priority;n++);ca.splice(n,0,e),n===0&&Yp(e)}};var Qp=l.version;if(Qp!=="19.2.0")throw Error(o(527,Qp,"19.2.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Sb={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{qi=ho.inject(Sb),Tt=ho}catch{}}return Bl.createRoot=function(e,t){if(!u(e))throw Error(o(299));var n=!1,i="",r=P0,c=eh,h=th;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Dp(e,1,!1,null,null,n,i,null,r,c,h,Vp),e[Ua]=t.current,Wc(e),new gu(t)},Bl.hydrateRoot=function(e,t,n){if(!u(e))throw Error(o(299));var i=!1,r="",c=P0,h=eh,b=th,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=Dp(e,1,!0,t,n??null,i,r,E,c,h,b,Vp),t.context=_p(null),n=t.current,i=Dt(),i=rs(i),r=Zn(i),r.callback=null,Jn(n,r,i),n=i,t.current.lanes=n,Vi(t,n),on(t),e[Ua]=t.current,Wc(e),new fo(t)},Bl.version="19.2.0",Bl}var nm;function Ab(){if(nm)return bu.exports;nm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),bu.exports=kb(),bu.exports}var Mb=Ab();const Ob=Vl(Mb);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var am="popstate";function Nb(a={}){function l(o,u){let{pathname:f,search:p,hash:v}=o.location;return ef("",{pathname:f,search:p,hash:v},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function s(o,u){return typeof u=="string"?u:Yl(u)}return _b(l,s,null,a)}function Xe(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function un(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Db(){return Math.random().toString(36).substring(2,10)}function im(a,l){return{usr:a.state,key:a.key,idx:l}}function ef(a,l,s=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Bi(l):l,state:s,key:l&&l.key||o||Db()}}function Yl({pathname:a="/",search:l="",hash:s=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function Bi(a){let l={};if(a){let s=a.indexOf("#");s>=0&&(l.hash=a.substring(s),a=a.substring(0,s));let o=a.indexOf("?");o>=0&&(l.search=a.substring(o),a=a.substring(0,o)),a&&(l.pathname=a)}return l}function _b(a,l,s,o={}){let{window:u=document.defaultView,v5Compat:f=!1}=o,p=u.history,v="POP",g=null,m=x();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function x(){return(p.state||{idx:null}).idx}function w(){v="POP";let U=x(),M=U==null?null:U-m;m=U,g&&g({action:v,location:_.location,delta:M})}function j(U,M){v="PUSH";let $=ef(_.location,U,M);m=x()+1;let L=im($,m),Z=_.createHref($);try{p.pushState(L,"",Z)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;u.location.assign(Z)}f&&g&&g({action:v,location:_.location,delta:1})}function R(U,M){v="REPLACE";let $=ef(_.location,U,M);m=x();let L=im($,m),Z=_.createHref($);p.replaceState(L,"",Z),f&&g&&g({action:v,location:_.location,delta:0})}function k(U){return Bb(U)}let _={get action(){return v},get location(){return a(u,p)},listen(U){if(g)throw new Error("A history only accepts one active listener");return u.addEventListener(am,w),g=U,()=>{u.removeEventListener(am,w),g=null}},createHref(U){return l(u,U)},createURL:k,encodeLocation(U){let M=k(U);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:j,replace:R,go(U){return p.go(U)}};return _}function Bb(a,l=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(s,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Yl(a);return o=o.replace(/ $/,"%20"),!l&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function m1(a,l,s="/"){return Lb(a,l,s,!1)}function Lb(a,l,s,o){let u=typeof l=="string"?Bi(l):l,f=Bn(u.pathname||"/",s);if(f==null)return null;let p=g1(a);$b(p);let v=null;for(let g=0;v==null&&g<p.length;++g){let m=Jb(f);v=Kb(p[g],m,o)}return v}function g1(a,l=[],s=[],o="",u=!1){let f=(p,v,g=u,m)=>{let x={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:v,route:p};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&g)return;Xe(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let w=Dn([o,x.relativePath]),j=s.concat(x);p.children&&p.children.length>0&&(Xe(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),g1(p.children,l,j,w,g)),!(p.path==null&&!p.index)&&l.push({path:w,score:Vb(w,p.index),routesMeta:j})};return a.forEach((p,v)=>{if(p.path===""||!p.path?.includes("?"))f(p,v);else for(let g of y1(p.path))f(p,v,!0,g)}),l}function y1(a){let l=a.split("/");if(l.length===0)return[];let[s,...o]=l,u=s.endsWith("?"),f=s.replace(/\?$/,"");if(o.length===0)return u?[f,""]:[f];let p=y1(o.join("/")),v=[];return v.push(...p.map(g=>g===""?f:[f,g].join("/"))),u&&v.push(...p),v.map(g=>a.startsWith("/")&&g===""?"/":g)}function $b(a){a.sort((l,s)=>l.score!==s.score?s.score-l.score:Qb(l.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var Ub=/^:[\w-]+$/,Hb=3,Gb=2,Yb=1,qb=10,Xb=-2,lm=a=>a==="*";function Vb(a,l){let s=a.split("/"),o=s.length;return s.some(lm)&&(o+=Xb),l&&(o+=Gb),s.filter(u=>!lm(u)).reduce((u,f)=>u+(Ub.test(f)?Hb:f===""?Yb:qb),o)}function Qb(a,l){return a.length===l.length&&a.slice(0,-1).every((o,u)=>o===l[u])?a[a.length-1]-l[l.length-1]:0}function Kb(a,l,s=!1){let{routesMeta:o}=a,u={},f="/",p=[];for(let v=0;v<o.length;++v){let g=o[v],m=v===o.length-1,x=f==="/"?l:l.slice(f.length)||"/",w=Oo({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},x),j=g.route;if(!w&&m&&s&&!o[o.length-1].route.index&&(w=Oo({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},x)),!w)return null;Object.assign(u,w.params),p.push({params:u,pathname:Dn([f,w.pathname]),pathnameBase:Pb(Dn([f,w.pathnameBase])),route:j}),w.pathnameBase!=="/"&&(f=Dn([f,w.pathnameBase]))}return p}function Oo(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[s,o]=Zb(a.path,a.caseSensitive,a.end),u=l.match(s);if(!u)return null;let f=u[0],p=f.replace(/(.)\/+$/,"$1"),v=u.slice(1);return{params:o.reduce((m,{paramName:x,isOptional:w},j)=>{if(x==="*"){let k=v[j]||"";p=f.slice(0,f.length-k.length).replace(/(.)\/+$/,"$1")}const R=v[j];return w&&!R?m[x]=void 0:m[x]=(R||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:p,pattern:a}}function Zb(a,l=!1,s=!0){un(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],u="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,g)=>(o.push({paramName:v,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),u+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?u+="\\/*$":a!==""&&a!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,l?void 0:"i"),o]}function Jb(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return un(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function Bn(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let s=l.endsWith("/")?l.length-1:l.length,o=a.charAt(s);return o&&o!=="/"?null:a.slice(s)||"/"}function Fb(a,l="/"){let{pathname:s,search:o="",hash:u=""}=typeof a=="string"?Bi(a):a;return{pathname:s?s.startsWith("/")?s:Wb(s,l):l,search:e2(o),hash:t2(u)}}function Wb(a,l){let s=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(u=>{u===".."?s.length>1&&s.pop():u!=="."&&s.push(u)}),s.length>1?s.join("/"):"/"}function Eu(a,l,s,o){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ib(a){return a.filter((l,s)=>s===0||l.route.path&&l.route.path.length>0)}function v1(a){let l=Ib(a);return l.map((s,o)=>o===l.length-1?s.pathname:s.pathnameBase)}function b1(a,l,s,o=!1){let u;typeof a=="string"?u=Bi(a):(u={...a},Xe(!u.pathname||!u.pathname.includes("?"),Eu("?","pathname","search",u)),Xe(!u.pathname||!u.pathname.includes("#"),Eu("#","pathname","hash",u)),Xe(!u.search||!u.search.includes("#"),Eu("#","search","hash",u)));let f=a===""||u.pathname==="",p=f?"/":u.pathname,v;if(p==null)v=s;else{let w=l.length-1;if(!o&&p.startsWith("..")){let j=p.split("/");for(;j[0]==="..";)j.shift(),w-=1;u.pathname=j.join("/")}v=w>=0?l[w]:"/"}let g=Fb(u,v),m=p&&p!=="/"&&p.endsWith("/"),x=(f||p===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(m||x)&&(g.pathname+="/"),g}var Dn=a=>a.join("/").replace(/\/\/+/g,"/"),Pb=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),e2=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,t2=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function n2(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var x1=["POST","PUT","PATCH","DELETE"];new Set(x1);var a2=["GET",...x1];new Set(a2);var Li=y.createContext(null);Li.displayName="DataRouter";var qo=y.createContext(null);qo.displayName="DataRouterState";y.createContext(!1);var S1=y.createContext({isTransitioning:!1});S1.displayName="ViewTransition";var i2=y.createContext(new Map);i2.displayName="Fetchers";var l2=y.createContext(null);l2.displayName="Await";var fn=y.createContext(null);fn.displayName="Navigation";var Ql=y.createContext(null);Ql.displayName="Location";var $n=y.createContext({outlet:null,matches:[],isDataRoute:!1});$n.displayName="Route";var vf=y.createContext(null);vf.displayName="RouteError";function r2(a,{relative:l}={}){Xe(Kl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=y.useContext(fn),{hash:u,pathname:f,search:p}=Zl(a,{relative:l}),v=f;return s!=="/"&&(v=f==="/"?s:Dn([s,f])),o.createHref({pathname:v,search:p,hash:u})}function Kl(){return y.useContext(Ql)!=null}function dn(){return Xe(Kl(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Ql).location}var w1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E1(a){y.useContext(fn).static||y.useLayoutEffect(a)}function bf(){let{isDataRoute:a}=y.useContext($n);return a?b2():o2()}function o2(){Xe(Kl(),"useNavigate() may be used only in the context of a <Router> component.");let a=y.useContext(Li),{basename:l,navigator:s}=y.useContext(fn),{matches:o}=y.useContext($n),{pathname:u}=dn(),f=JSON.stringify(v1(o)),p=y.useRef(!1);return E1(()=>{p.current=!0}),y.useCallback((g,m={})=>{if(un(p.current,w1),!p.current)return;if(typeof g=="number"){s.go(g);return}let x=b1(g,JSON.parse(f),u,m.relative==="path");a==null&&l!=="/"&&(x.pathname=x.pathname==="/"?l:Dn([l,x.pathname])),(m.replace?s.replace:s.push)(x,m.state,m)},[l,s,f,u,a])}y.createContext(null);function Zl(a,{relative:l}={}){let{matches:s}=y.useContext($n),{pathname:o}=dn(),u=JSON.stringify(v1(s));return y.useMemo(()=>b1(a,JSON.parse(u),o,l==="path"),[a,u,o,l])}function s2(a,l){return j1(a,l)}function j1(a,l,s,o,u){Xe(Kl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=y.useContext(fn),{matches:p}=y.useContext($n),v=p[p.length-1],g=v?v.params:{},m=v?v.pathname:"/",x=v?v.pathnameBase:"/",w=v&&v.route;{let $=w&&w.path||"";C1(m,!w||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let j=dn(),R;if(l){let $=typeof l=="string"?Bi(l):l;Xe(x==="/"||$.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${$.pathname}" was given in the \`location\` prop.`),R=$}else R=j;let k=R.pathname||"/",_=k;if(x!=="/"){let $=x.replace(/^\//,"").split("/");_="/"+k.replace(/^\//,"").split("/").slice($.length).join("/")}let U=m1(a,{pathname:_});un(w||U!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),un(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=h2(U&&U.map($=>Object.assign({},$,{params:Object.assign({},g,$.params),pathname:Dn([x,f.encodeLocation?f.encodeLocation($.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?x:Dn([x,f.encodeLocation?f.encodeLocation($.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathnameBase])})),p,s,o,u);return l&&M?y.createElement(Ql.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},M):M}function c2(){let a=v2(),l=n2(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),s=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:f},"ErrorBoundary")," or"," ",y.createElement("code",{style:f},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},l),s?y.createElement("pre",{style:u},s):null,p)}var u2=y.createElement(c2,null),f2=class extends y.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.unstable_onError?this.props.unstable_onError(a,l):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?y.createElement($n.Provider,{value:this.props.routeContext},y.createElement(vf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function d2({routeContext:a,match:l,children:s}){let o=y.useContext(Li);return o&&o.static&&o.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=l.route.id),y.createElement($n.Provider,{value:a},s)}function h2(a,l=[],s=null,o=null,u=null){if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(l.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let f=a,p=s?.errors;if(p!=null){let m=f.findIndex(x=>x.route.id&&p?.[x.route.id]!==void 0);Xe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let v=!1,g=-1;if(s)for(let m=0;m<f.length;m++){let x=f[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(g=m),x.route.id){let{loaderData:w,errors:j}=s,R=x.route.loader&&!w.hasOwnProperty(x.route.id)&&(!j||j[x.route.id]===void 0);if(x.route.lazy||R){v=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((m,x,w)=>{let j,R=!1,k=null,_=null;s&&(j=p&&x.route.id?p[x.route.id]:void 0,k=x.route.errorElement||u2,v&&(g<0&&w===0?(C1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,_=null):g===w&&(R=!0,_=x.route.hydrateFallbackElement||null)));let U=l.concat(f.slice(0,w+1)),M=()=>{let $;return j?$=k:R?$=_:x.route.Component?$=y.createElement(x.route.Component,null):x.route.element?$=x.route.element:$=m,y.createElement(d2,{match:x,routeContext:{outlet:m,matches:U,isDataRoute:s!=null},children:$})};return s&&(x.route.ErrorBoundary||x.route.errorElement||w===0)?y.createElement(f2,{location:s.location,revalidation:s.revalidation,component:k,error:j,children:M(),routeContext:{outlet:null,matches:U,isDataRoute:!0},unstable_onError:o}):M()},null)}function xf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function p2(a){let l=y.useContext(Li);return Xe(l,xf(a)),l}function m2(a){let l=y.useContext(qo);return Xe(l,xf(a)),l}function g2(a){let l=y.useContext($n);return Xe(l,xf(a)),l}function Sf(a){let l=g2(a),s=l.matches[l.matches.length-1];return Xe(s.route.id,`${a} can only be used on routes that contain a unique "id"`),s.route.id}function y2(){return Sf("useRouteId")}function v2(){let a=y.useContext(vf),l=m2("useRouteError"),s=Sf("useRouteError");return a!==void 0?a:l.errors?.[s]}function b2(){let{router:a}=p2("useNavigate"),l=Sf("useNavigate"),s=y.useRef(!1);return E1(()=>{s.current=!0}),y.useCallback(async(u,f={})=>{un(s.current,w1),s.current&&(typeof u=="number"?a.navigate(u):await a.navigate(u,{fromRouteId:l,...f}))},[a,l])}var rm={};function C1(a,l,s){!l&&!rm[a]&&(rm[a]=!0,un(!1,s))}y.memo(x2);function x2({routes:a,future:l,state:s,unstable_onError:o}){return j1(a,void 0,s,o,l)}function Na(a){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function S2({basename:a="/",children:l=null,location:s,navigationType:o="POP",navigator:u,static:f=!1}){Xe(!Kl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),v=y.useMemo(()=>({basename:p,navigator:u,static:f,future:{}}),[p,u,f]);typeof s=="string"&&(s=Bi(s));let{pathname:g="/",search:m="",hash:x="",state:w=null,key:j="default"}=s,R=y.useMemo(()=>{let k=Bn(g,p);return k==null?null:{location:{pathname:k,search:m,hash:x,state:w,key:j},navigationType:o}},[p,g,m,x,w,j,o]);return un(R!=null,`<Router basename="${p}"> is not able to match the URL "${g}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:y.createElement(fn.Provider,{value:v},y.createElement(Ql.Provider,{children:l,value:R}))}function w2({children:a,location:l}){return s2(tf(a),l)}function tf(a,l=[]){let s=[];return y.Children.forEach(a,(o,u)=>{if(!y.isValidElement(o))return;let f=[...l,u];if(o.type===y.Fragment){s.push.apply(s,tf(o.props.children,f));return}Xe(o.type===Na,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=tf(o.props.children,f)),s.push(p)}),s}var jo="get",Co="application/x-www-form-urlencoded";function Xo(a){return a!=null&&typeof a.tagName=="string"}function E2(a){return Xo(a)&&a.tagName.toLowerCase()==="button"}function j2(a){return Xo(a)&&a.tagName.toLowerCase()==="form"}function C2(a){return Xo(a)&&a.tagName.toLowerCase()==="input"}function T2(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function z2(a,l){return a.button===0&&(!l||l==="_self")&&!T2(a)}var po=null;function R2(){if(po===null)try{new FormData(document.createElement("form"),0),po=!1}catch{po=!0}return po}var k2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ju(a){return a!=null&&!k2.has(a)?(un(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Co}"`),null):a}function A2(a,l){let s,o,u,f,p;if(j2(a)){let v=a.getAttribute("action");o=v?Bn(v,l):null,s=a.getAttribute("method")||jo,u=ju(a.getAttribute("enctype"))||Co,f=new FormData(a)}else if(E2(a)||C2(a)&&(a.type==="submit"||a.type==="image")){let v=a.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||v.getAttribute("action");if(o=g?Bn(g,l):null,s=a.getAttribute("formmethod")||v.getAttribute("method")||jo,u=ju(a.getAttribute("formenctype"))||ju(v.getAttribute("enctype"))||Co,f=new FormData(v,a),!R2()){let{name:m,type:x,value:w}=a;if(x==="image"){let j=m?`${m}.`:"";f.append(`${j}x`,"0"),f.append(`${j}y`,"0")}else m&&f.append(m,w)}}else{if(Xo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=jo,o=null,u=Co,p=a}return f&&u==="text/plain"&&(p=f,f=void 0),{action:o,method:s.toLowerCase(),encType:u,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wf(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function M2(a,l,s){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${s}`:l&&Bn(o.pathname,l)==="/"?o.pathname=`${l.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function O2(a,l){if(a.id in l)return l[a.id];try{let s=await import(a.module);return l[a.id]=s,s}catch(s){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function N2(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function D2(a,l,s){let o=await Promise.all(a.map(async u=>{let f=l.routes[u.route.id];if(f){let p=await O2(f,s);return p.links?p.links():[]}return[]}));return $2(o.flat(1).filter(N2).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function om(a,l,s,o,u,f){let p=(g,m)=>s[m]?g.route.id!==s[m].route.id:!0,v=(g,m)=>s[m].pathname!==g.pathname||s[m].route.path?.endsWith("*")&&s[m].params["*"]!==g.params["*"];return f==="assets"?l.filter((g,m)=>p(g,m)||v(g,m)):f==="data"?l.filter((g,m)=>{let x=o.routes[g.route.id];if(!x||!x.hasLoader)return!1;if(p(g,m)||v(g,m))return!0;if(g.route.shouldRevalidate){let w=g.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function _2(a,l,{includeHydrateFallback:s}={}){return B2(a.map(o=>{let u=l.routes[o.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),s&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function B2(a){return[...new Set(a)]}function L2(a){let l={},s=Object.keys(a).sort();for(let o of s)l[o]=a[o];return l}function $2(a,l){let s=new Set;return new Set(l),a.reduce((o,u)=>{let f=JSON.stringify(L2(u));return s.has(f)||(s.add(f),o.push({key:f,link:u})),o},[])}function T1(){let a=y.useContext(Li);return wf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function U2(){let a=y.useContext(qo);return wf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Ef=y.createContext(void 0);Ef.displayName="FrameworkContext";function z1(){let a=y.useContext(Ef);return wf(a,"You must render this element inside a <HydratedRouter> element"),a}function H2(a,l){let s=y.useContext(Ef),[o,u]=y.useState(!1),[f,p]=y.useState(!1),{onFocus:v,onBlur:g,onMouseEnter:m,onMouseLeave:x,onTouchStart:w}=l,j=y.useRef(null);y.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let _=M=>{M.forEach($=>{p($.isIntersecting)})},U=new IntersectionObserver(_,{threshold:.5});return j.current&&U.observe(j.current),()=>{U.disconnect()}}},[a]),y.useEffect(()=>{if(o){let _=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(_)}}},[o]);let R=()=>{u(!0)},k=()=>{u(!1),p(!1)};return s?a!=="intent"?[f,j,{}]:[f,j,{onFocus:Ll(v,R),onBlur:Ll(g,k),onMouseEnter:Ll(m,R),onMouseLeave:Ll(x,k),onTouchStart:Ll(w,R)}]:[!1,j,{}]}function Ll(a,l){return s=>{a&&a(s),s.defaultPrevented||l(s)}}function G2({page:a,...l}){let{router:s}=T1(),o=y.useMemo(()=>m1(s.routes,a,s.basename),[s.routes,a,s.basename]);return o?y.createElement(q2,{page:a,matches:o,...l}):null}function Y2(a){let{manifest:l,routeModules:s}=z1(),[o,u]=y.useState([]);return y.useEffect(()=>{let f=!1;return D2(a,l,s).then(p=>{f||u(p)}),()=>{f=!0}},[a,l,s]),o}function q2({page:a,matches:l,...s}){let o=dn(),{manifest:u,routeModules:f}=z1(),{basename:p}=T1(),{loaderData:v,matches:g}=U2(),m=y.useMemo(()=>om(a,l,g,u,o,"data"),[a,l,g,u,o]),x=y.useMemo(()=>om(a,l,g,u,o,"assets"),[a,l,g,u,o]),w=y.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let k=new Set,_=!1;if(l.forEach(M=>{let $=u.routes[M.route.id];!$||!$.hasLoader||(!m.some(L=>L.route.id===M.route.id)&&M.route.id in v&&f[M.route.id]?.shouldRevalidate||$.hasClientLoader?_=!0:k.add(M.route.id))}),k.size===0)return[];let U=M2(a,p,"data");return _&&k.size>0&&U.searchParams.set("_routes",l.filter(M=>k.has(M.route.id)).map(M=>M.route.id).join(",")),[U.pathname+U.search]},[p,v,o,u,m,l,a,f]),j=y.useMemo(()=>_2(x,u),[x,u]),R=Y2(x);return y.createElement(y.Fragment,null,w.map(k=>y.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...s})),j.map(k=>y.createElement("link",{key:k,rel:"modulepreload",href:k,...s})),R.map(({key:k,link:_})=>y.createElement("link",{key:k,nonce:s.nonce,..._})))}function X2(...a){return l=>{a.forEach(s=>{typeof s=="function"?s(l):s!=null&&(s.current=l)})}}var R1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R1&&(window.__reactRouterVersion="7.9.4")}catch{}function V2({basename:a,children:l,window:s}){let o=y.useRef();o.current==null&&(o.current=Nb({window:s,v5Compat:!0}));let u=o.current,[f,p]=y.useState({action:u.action,location:u.location}),v=y.useCallback(g=>{y.startTransition(()=>p(g))},[p]);return y.useLayoutEffect(()=>u.listen(v),[u,v]),y.createElement(S2,{basename:a,children:l,location:f.location,navigationType:f.action,navigator:u})}var k1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$i=y.forwardRef(function({onClick:l,discover:s="render",prefetch:o="none",relative:u,reloadDocument:f,replace:p,state:v,target:g,to:m,preventScrollReset:x,viewTransition:w,...j},R){let{basename:k}=y.useContext(fn),_=typeof m=="string"&&k1.test(m),U,M=!1;if(typeof m=="string"&&_&&(U=m,R1))try{let de=new URL(window.location.href),_e=m.startsWith("//")?new URL(de.protocol+m):new URL(m),Ae=Bn(_e.pathname,k);_e.origin===de.origin&&Ae!=null?m=Ae+_e.search+_e.hash:M=!0}catch{un(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=r2(m,{relative:u}),[L,Z,J]=H2(o,j),H=J2(m,{replace:p,state:v,target:g,preventScrollReset:x,relative:u,viewTransition:w});function V(de){l&&l(de),de.defaultPrevented||H(de)}let ne=y.createElement("a",{...j,...J,href:U||$,onClick:M||f?l:V,ref:X2(R,Z),target:g,"data-discover":!_&&s==="render"?"true":void 0});return L&&!_?y.createElement(y.Fragment,null,ne,y.createElement(G2,{page:$})):ne});$i.displayName="Link";var Q2=y.forwardRef(function({"aria-current":l="page",caseSensitive:s=!1,className:o="",end:u=!1,style:f,to:p,viewTransition:v,children:g,...m},x){let w=Zl(p,{relative:m.relative}),j=dn(),R=y.useContext(qo),{navigator:k,basename:_}=y.useContext(fn),U=R!=null&&ex(w)&&v===!0,M=k.encodeLocation?k.encodeLocation(w).pathname:w.pathname,$=j.pathname,L=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;s||($=$.toLowerCase(),L=L?L.toLowerCase():null,M=M.toLowerCase()),L&&_&&(L=Bn(L,_)||L);const Z=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let J=$===M||!u&&$.startsWith(M)&&$.charAt(Z)==="/",H=L!=null&&(L===M||!u&&L.startsWith(M)&&L.charAt(M.length)==="/"),V={isActive:J,isPending:H,isTransitioning:U},ne=J?l:void 0,de;typeof o=="function"?de=o(V):de=[o,J?"active":null,H?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let _e=typeof f=="function"?f(V):f;return y.createElement($i,{...m,"aria-current":ne,className:de,ref:x,style:_e,to:p,viewTransition:v},typeof g=="function"?g(V):g)});Q2.displayName="NavLink";var K2=y.forwardRef(({discover:a="render",fetcherKey:l,navigate:s,reloadDocument:o,replace:u,state:f,method:p=jo,action:v,onSubmit:g,relative:m,preventScrollReset:x,viewTransition:w,...j},R)=>{let k=I2(),_=P2(v,{relative:m}),U=p.toLowerCase()==="get"?"get":"post",M=typeof v=="string"&&k1.test(v),$=L=>{if(g&&g(L),L.defaultPrevented)return;L.preventDefault();let Z=L.nativeEvent.submitter,J=Z?.getAttribute("formmethod")||p;k(Z||L.currentTarget,{fetcherKey:l,method:J,navigate:s,replace:u,state:f,relative:m,preventScrollReset:x,viewTransition:w})};return y.createElement("form",{ref:R,method:U,action:_,onSubmit:o?g:$,...j,"data-discover":!M&&a==="render"?"true":void 0})});K2.displayName="Form";function Z2(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A1(a){let l=y.useContext(Li);return Xe(l,Z2(a)),l}function J2(a,{target:l,replace:s,state:o,preventScrollReset:u,relative:f,viewTransition:p}={}){let v=bf(),g=dn(),m=Zl(a,{relative:f});return y.useCallback(x=>{if(z2(x,l)){x.preventDefault();let w=s!==void 0?s:Yl(g)===Yl(m);v(a,{replace:w,state:o,preventScrollReset:u,relative:f,viewTransition:p})}},[g,v,m,s,o,l,a,u,f,p])}var F2=0,W2=()=>`__${String(++F2)}__`;function I2(){let{router:a}=A1("useSubmit"),{basename:l}=y.useContext(fn),s=y2();return y.useCallback(async(o,u={})=>{let{action:f,method:p,encType:v,formData:g,body:m}=A2(o,l);if(u.navigate===!1){let x=u.fetcherKey||W2();await a.fetch(x,s,u.action||f,{preventScrollReset:u.preventScrollReset,formData:g,body:m,formMethod:u.method||p,formEncType:u.encType||v,flushSync:u.flushSync})}else await a.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:g,body:m,formMethod:u.method||p,formEncType:u.encType||v,replace:u.replace,state:u.state,fromRouteId:s,flushSync:u.flushSync,viewTransition:u.viewTransition})},[a,l,s])}function P2(a,{relative:l}={}){let{basename:s}=y.useContext(fn),o=y.useContext($n);Xe(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),f={...Zl(a||".",{relative:l})},p=dn();if(a==null){f.search=p.search;let v=new URLSearchParams(f.search),g=v.getAll("index");if(g.some(x=>x==="")){v.delete("index"),g.filter(w=>w).forEach(w=>v.append("index",w));let x=v.toString();f.search=x?`?${x}`:""}}return(!a||a===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(f.pathname=f.pathname==="/"?s:Dn([s,f.pathname])),Yl(f)}function ex(a,{relative:l}={}){let s=y.useContext(S1);Xe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=A1("useViewTransitionState"),u=Zl(a,{relative:l});if(!s.isTransitioning)return!1;let f=Bn(s.currentLocation.pathname,o)||s.currentLocation.pathname,p=Bn(s.nextLocation.pathname,o)||s.nextLocation.pathname;return Oo(u.pathname,p)!=null||Oo(u.pathname,f)!=null}var tx=p1();const Ri=Vl(tx);var dt=function(){return dt=Object.assign||function(l){for(var s,o=1,u=arguments.length;o<u;o++){s=arguments[o];for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&(l[f]=s[f])}return l},dt.apply(this,arguments)};function Ai(a,l,s){if(s||arguments.length===2)for(var o=0,u=l.length,f;o<u;o++)(f||!(o in l))&&(f||(f=Array.prototype.slice.call(l,0,o)),f[o]=l[o]);return a.concat(f||Array.prototype.slice.call(l))}var He="-ms-",Gl="-moz-",Ce="-webkit-",M1="comm",Vo="rule",jf="decl",nx="@import",O1="@keyframes",ax="@layer",N1=Math.abs,Cf=String.fromCharCode,nf=Object.assign;function ix(a,l){return at(a,0)^45?(((l<<2^at(a,0))<<2^at(a,1))<<2^at(a,2))<<2^at(a,3):0}function D1(a){return a.trim()}function Mn(a,l){return(a=l.exec(a))?a[0]:a}function pe(a,l,s){return a.replace(l,s)}function To(a,l,s){return a.indexOf(l,s)}function at(a,l){return a.charCodeAt(l)|0}function Mi(a,l,s){return a.slice(l,s)}function cn(a){return a.length}function _1(a){return a.length}function Ul(a,l){return l.push(a),a}function lx(a,l){return a.map(l).join("")}function sm(a,l){return a.filter(function(s){return!Mn(s,l)})}var Qo=1,Oi=1,B1=0,Zt=0,Pe=0,Ui="";function Ko(a,l,s,o,u,f,p,v){return{value:a,root:l,parent:s,type:o,props:u,children:f,line:Qo,column:Oi,length:p,return:"",siblings:v}}function da(a,l){return nf(Ko("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function Ei(a){for(;a.root;)a=da(a.root,{children:[a]});Ul(a,a.siblings)}function rx(){return Pe}function ox(){return Pe=Zt>0?at(Ui,--Zt):0,Oi--,Pe===10&&(Oi=1,Qo--),Pe}function nn(){return Pe=Zt<B1?at(Ui,Zt++):0,Oi++,Pe===10&&(Oi=1,Qo++),Pe}function Ba(){return at(Ui,Zt)}function zo(){return Zt}function Zo(a,l){return Mi(Ui,a,l)}function af(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sx(a){return Qo=Oi=1,B1=cn(Ui=a),Zt=0,[]}function cx(a){return Ui="",a}function Cu(a){return D1(Zo(Zt-1,lf(a===91?a+2:a===40?a+1:a)))}function ux(a){for(;(Pe=Ba())&&Pe<33;)nn();return af(a)>2||af(Pe)>3?"":" "}function fx(a,l){for(;--l&&nn()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return Zo(a,zo()+(l<6&&Ba()==32&&nn()==32))}function lf(a){for(;nn();)switch(Pe){case a:return Zt;case 34:case 39:a!==34&&a!==39&&lf(Pe);break;case 40:a===41&&lf(a);break;case 92:nn();break}return Zt}function dx(a,l){for(;nn()&&a+Pe!==57;)if(a+Pe===84&&Ba()===47)break;return"/*"+Zo(l,Zt-1)+"*"+Cf(a===47?a:nn())}function hx(a){for(;!af(Ba());)nn();return Zo(a,Zt)}function px(a){return cx(Ro("",null,null,null,[""],a=sx(a),0,[0],a))}function Ro(a,l,s,o,u,f,p,v,g){for(var m=0,x=0,w=p,j=0,R=0,k=0,_=1,U=1,M=1,$=0,L="",Z=u,J=f,H=o,V=L;U;)switch(k=$,$=nn()){case 40:if(k!=108&&at(V,w-1)==58){To(V+=pe(Cu($),"&","&\f"),"&\f",N1(m?v[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:V+=Cu($);break;case 9:case 10:case 13:case 32:V+=ux(k);break;case 92:V+=fx(zo()-1,7);continue;case 47:switch(Ba()){case 42:case 47:Ul(mx(dx(nn(),zo()),l,s,g),g);break;default:V+="/"}break;case 123*_:v[m++]=cn(V)*M;case 125*_:case 59:case 0:switch($){case 0:case 125:U=0;case 59+x:M==-1&&(V=pe(V,/\f/g,"")),R>0&&cn(V)-w&&Ul(R>32?um(V+";",o,s,w-1,g):um(pe(V," ","")+";",o,s,w-2,g),g);break;case 59:V+=";";default:if(Ul(H=cm(V,l,s,m,x,u,v,L,Z=[],J=[],w,f),f),$===123)if(x===0)Ro(V,l,H,H,Z,f,w,v,J);else switch(j===99&&at(V,3)===110?100:j){case 100:case 108:case 109:case 115:Ro(a,H,H,o&&Ul(cm(a,H,H,0,0,u,v,L,u,Z=[],w,J),J),u,J,w,v,o?Z:J);break;default:Ro(V,H,H,H,[""],J,0,v,J)}}m=x=R=0,_=M=1,L=V="",w=p;break;case 58:w=1+cn(V),R=k;default:if(_<1){if($==123)--_;else if($==125&&_++==0&&ox()==125)continue}switch(V+=Cf($),$*_){case 38:M=x>0?1:(V+="\f",-1);break;case 44:v[m++]=(cn(V)-1)*M,M=1;break;case 64:Ba()===45&&(V+=Cu(nn())),j=Ba(),x=w=cn(L=V+=hx(zo())),$++;break;case 45:k===45&&cn(V)==2&&(_=0)}}return f}function cm(a,l,s,o,u,f,p,v,g,m,x,w){for(var j=u-1,R=u===0?f:[""],k=_1(R),_=0,U=0,M=0;_<o;++_)for(var $=0,L=Mi(a,j+1,j=N1(U=p[_])),Z=a;$<k;++$)(Z=D1(U>0?R[$]+" "+L:pe(L,/&\f/g,R[$])))&&(g[M++]=Z);return Ko(a,l,s,u===0?Vo:v,g,m,x,w)}function mx(a,l,s,o){return Ko(a,l,s,M1,Cf(rx()),Mi(a,2,-2),0,o)}function um(a,l,s,o,u){return Ko(a,l,s,jf,Mi(a,0,o),Mi(a,o+1,-1),o,u)}function L1(a,l,s){switch(ix(a,l)){case 5103:return Ce+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+a+a;case 4789:return Gl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+a+Gl+a+He+a+a;case 5936:switch(at(a,l+11)){case 114:return Ce+a+He+pe(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Ce+a+He+pe(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Ce+a+He+pe(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Ce+a+He+a+a;case 6165:return Ce+a+He+"flex-"+a+a;case 5187:return Ce+a+pe(a,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+He+"flex-$1$2")+a;case 5443:return Ce+a+He+"flex-item-"+pe(a,/flex-|-self/g,"")+(Mn(a,/flex-|baseline/)?"":He+"grid-row-"+pe(a,/flex-|-self/g,""))+a;case 4675:return Ce+a+He+"flex-line-pack"+pe(a,/align-content|flex-|-self/g,"")+a;case 5548:return Ce+a+He+pe(a,"shrink","negative")+a;case 5292:return Ce+a+He+pe(a,"basis","preferred-size")+a;case 6060:return Ce+"box-"+pe(a,"-grow","")+Ce+a+He+pe(a,"grow","positive")+a;case 4554:return Ce+pe(a,/([^-])(transform)/g,"$1"+Ce+"$2")+a;case 6187:return pe(pe(pe(a,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),a,"")+a;case 5495:case 3959:return pe(a,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return pe(pe(a,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+He+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+a+a;case 4200:if(!Mn(a,/flex-|baseline/))return He+"grid-column-align"+Mi(a,l)+a;break;case 2592:case 3360:return He+pe(a,"template-","")+a;case 4384:case 3616:return s&&s.some(function(o,u){return l=u,Mn(o.props,/grid-\w+-end/)})?~To(a+(s=s[l].value),"span",0)?a:He+pe(a,"-start","")+a+He+"grid-row-span:"+(~To(s,"span",0)?Mn(s,/\d+/):+Mn(s,/\d+/)-+Mn(a,/\d+/))+";":He+pe(a,"-start","")+a;case 4896:case 4128:return s&&s.some(function(o){return Mn(o.props,/grid-\w+-start/)})?a:He+pe(pe(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return pe(a,/(.+)-inline(.+)/,Ce+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(a)-1-l>6)switch(at(a,l+1)){case 109:if(at(a,l+4)!==45)break;case 102:return pe(a,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+Gl+(at(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~To(a,"stretch",0)?L1(pe(a,"stretch","fill-available"),l,s)+a:a}break;case 5152:case 5920:return pe(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,u,f,p,v,g,m){return He+u+":"+f+m+(p?He+u+"-span:"+(v?g:+g-+f)+m:"")+a});case 4949:if(at(a,l+6)===121)return pe(a,":",":"+Ce)+a;break;case 6444:switch(at(a,at(a,14)===45?18:11)){case 120:return pe(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ce+(at(a,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+He+"$2box$3")+a;case 100:return pe(a,":",":"+He)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(a,"scroll-","scroll-snap-")+a}return a}function No(a,l){for(var s="",o=0;o<a.length;o++)s+=l(a[o],o,a,l)||"";return s}function gx(a,l,s,o){switch(a.type){case ax:if(a.children.length)break;case nx:case jf:return a.return=a.return||a.value;case M1:return"";case O1:return a.return=a.value+"{"+No(a.children,o)+"}";case Vo:if(!cn(a.value=a.props.join(",")))return""}return cn(s=No(a.children,o))?a.return=a.value+"{"+s+"}":""}function yx(a){var l=_1(a);return function(s,o,u,f){for(var p="",v=0;v<l;v++)p+=a[v](s,o,u,f)||"";return p}}function vx(a){return function(l){l.root||(l=l.return)&&a(l)}}function bx(a,l,s,o){if(a.length>-1&&!a.return)switch(a.type){case jf:a.return=L1(a.value,a.length,s);return;case O1:return No([da(a,{value:pe(a.value,"@","@"+Ce)})],o);case Vo:if(a.length)return lx(s=a.props,function(u){switch(Mn(u,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ei(da(a,{props:[pe(u,/:(read-\w+)/,":"+Gl+"$1")]})),Ei(da(a,{props:[u]})),nf(a,{props:sm(s,o)});break;case"::placeholder":Ei(da(a,{props:[pe(u,/:(plac\w+)/,":"+Ce+"input-$1")]})),Ei(da(a,{props:[pe(u,/:(plac\w+)/,":"+Gl+"$1")]})),Ei(da(a,{props:[pe(u,/:(plac\w+)/,He+"input-$1")]})),Ei(da(a,{props:[u]})),nf(a,{props:sm(s,o)});break}return""})}}var xx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_t={},Ni=typeof process<"u"&&_t!==void 0&&(_t.REACT_APP_SC_ATTR||_t.SC_ATTR)||"data-styled",$1="active",U1="data-styled-version",Jo="6.1.19",Tf=`/*!sc*/
`,Do=typeof window<"u"&&typeof document<"u",Sx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==""?_t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.SC_DISABLE_SPEEDY!==void 0&&_t.SC_DISABLE_SPEEDY!==""&&_t.SC_DISABLE_SPEEDY!=="false"&&_t.SC_DISABLE_SPEEDY),wx={},Fo=Object.freeze([]),Di=Object.freeze({});function H1(a,l,s){return s===void 0&&(s=Di),a.theme!==s.theme&&a.theme||l||s.theme}var G1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ex=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jx=/(^-|-$)/g;function fm(a){return a.replace(Ex,"-").replace(jx,"")}var Cx=/(a)(d)/gi,mo=52,dm=function(a){return String.fromCharCode(a+(a>25?39:97))};function rf(a){var l,s="";for(l=Math.abs(a);l>mo;l=l/mo|0)s=dm(l%mo)+s;return(dm(l%mo)+s).replace(Cx,"$1-$2")}var Tu,Y1=5381,ki=function(a,l){for(var s=l.length;s;)a=33*a^l.charCodeAt(--s);return a},q1=function(a){return ki(Y1,a)};function zf(a){return rf(q1(a)>>>0)}function Tx(a){return a.displayName||a.name||"Component"}function zu(a){return typeof a=="string"&&!0}var X1=typeof Symbol=="function"&&Symbol.for,V1=X1?Symbol.for("react.memo"):60115,zx=X1?Symbol.for("react.forward_ref"):60112,Rx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Q1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ax=((Tu={})[zx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tu[V1]=Q1,Tu);function hm(a){return("type"in(l=a)&&l.type.$$typeof)===V1?Q1:"$$typeof"in a?Ax[a.$$typeof]:Rx;var l}var Mx=Object.defineProperty,Ox=Object.getOwnPropertyNames,pm=Object.getOwnPropertySymbols,Nx=Object.getOwnPropertyDescriptor,Dx=Object.getPrototypeOf,mm=Object.prototype;function K1(a,l,s){if(typeof l!="string"){if(mm){var o=Dx(l);o&&o!==mm&&K1(a,o,s)}var u=Ox(l);pm&&(u=u.concat(pm(l)));for(var f=hm(a),p=hm(l),v=0;v<u.length;++v){var g=u[v];if(!(g in kx||s&&s[g]||p&&g in p||f&&g in f)){var m=Nx(l,g);try{Mx(a,g,m)}catch{}}}}return a}function _i(a){return typeof a=="function"}function Rf(a){return typeof a=="object"&&"styledComponentId"in a}function _a(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function _o(a,l){if(a.length===0)return"";for(var s=a[0],o=1;o<a.length;o++)s+=a[o];return s}function ql(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function of(a,l,s){if(s===void 0&&(s=!1),!s&&!ql(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var o=0;o<l.length;o++)a[o]=of(a[o],l[o]);else if(ql(l))for(var o in l)a[o]=of(a[o],l[o]);return a}function kf(a,l){Object.defineProperty(a,"toString",{value:l})}function Jl(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var _x=(function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return a.prototype.indexOfGroup=function(l){for(var s=0,o=0;o<l;o++)s+=this.groupSizes[o];return s},a.prototype.insertRules=function(l,s){if(l>=this.groupSizes.length){for(var o=this.groupSizes,u=o.length,f=u;l>=f;)if((f<<=1)<0)throw Jl(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var p=u;p<f;p++)this.groupSizes[p]=0}for(var v=this.indexOfGroup(l+1),g=(p=0,s.length);p<g;p++)this.tag.insertRule(v,s[p])&&(this.groupSizes[l]++,v++)},a.prototype.clearGroup=function(l){if(l<this.length){var s=this.groupSizes[l],o=this.indexOfGroup(l),u=o+s;this.groupSizes[l]=0;for(var f=o;f<u;f++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(l){var s="";if(l>=this.length||this.groupSizes[l]===0)return s;for(var o=this.groupSizes[l],u=this.indexOfGroup(l),f=u+o,p=u;p<f;p++)s+="".concat(this.tag.getRule(p)).concat(Tf);return s},a})(),ko=new Map,Bo=new Map,Ao=1,go=function(a){if(ko.has(a))return ko.get(a);for(;Bo.has(Ao);)Ao++;var l=Ao++;return ko.set(a,l),Bo.set(l,a),l},Bx=function(a,l){Ao=l+1,ko.set(a,l),Bo.set(l,a)},Lx="style[".concat(Ni,"][").concat(U1,'="').concat(Jo,'"]'),$x=new RegExp("^".concat(Ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ux=function(a,l,s){for(var o,u=s.split(","),f=0,p=u.length;f<p;f++)(o=u[f])&&a.registerName(l,o)},Hx=function(a,l){for(var s,o=((s=l.textContent)!==null&&s!==void 0?s:"").split(Tf),u=[],f=0,p=o.length;f<p;f++){var v=o[f].trim();if(v){var g=v.match($x);if(g){var m=0|parseInt(g[1],10),x=g[2];m!==0&&(Bx(x,m),Ux(a,x,g[3]),a.getTag().insertRules(m,u)),u.length=0}else u.push(v)}}},gm=function(a){for(var l=document.querySelectorAll(Lx),s=0,o=l.length;s<o;s++){var u=l[s];u&&u.getAttribute(Ni)!==$1&&(Hx(a,u),u.parentNode&&u.parentNode.removeChild(u))}};function Gx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Z1=function(a){var l=document.head,s=a||l,o=document.createElement("style"),u=(function(v){var g=Array.from(v.querySelectorAll("style[".concat(Ni,"]")));return g[g.length-1]})(s),f=u!==void 0?u.nextSibling:null;o.setAttribute(Ni,$1),o.setAttribute(U1,Jo);var p=Gx();return p&&o.setAttribute("nonce",p),s.insertBefore(o,f),o},Yx=(function(){function a(l){this.element=Z1(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var o=document.styleSheets,u=0,f=o.length;u<f;u++){var p=o[u];if(p.ownerNode===s)return p}throw Jl(17)})(this.element),this.length=0}return a.prototype.insertRule=function(l,s){try{return this.sheet.insertRule(s,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var s=this.sheet.cssRules[l];return s&&s.cssText?s.cssText:""},a})(),qx=(function(){function a(l){this.element=Z1(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,s){if(l<=this.length&&l>=0){var o=document.createTextNode(s);return this.element.insertBefore(o,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a})(),Xx=(function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,s){return l<=this.length&&(this.rules.splice(l,0,s),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a})(),ym=Do,Vx={isServer:!Do,useCSSOMInjection:!Sx},Lo=(function(){function a(l,s,o){l===void 0&&(l=Di),s===void 0&&(s={});var u=this;this.options=dt(dt({},Vx),l),this.gs=s,this.names=new Map(o),this.server=!!l.isServer,!this.server&&Do&&ym&&(ym=!1,gm(this)),kf(this,function(){return(function(f){for(var p=f.getTag(),v=p.length,g="",m=function(w){var j=(function(M){return Bo.get(M)})(w);if(j===void 0)return"continue";var R=f.names.get(j),k=p.getGroup(w);if(R===void 0||!R.size||k.length===0)return"continue";var _="".concat(Ni,".g").concat(w,'[id="').concat(j,'"]'),U="";R!==void 0&&R.forEach(function(M){M.length>0&&(U+="".concat(M,","))}),g+="".concat(k).concat(_,'{content:"').concat(U,'"}').concat(Tf)},x=0;x<v;x++)m(x);return g})(u)})}return a.registerId=function(l){return go(l)},a.prototype.rehydrate=function(){!this.server&&Do&&gm(this)},a.prototype.reconstructWithOptions=function(l,s){return s===void 0&&(s=!0),new a(dt(dt({},this.options),l),this.gs,s&&this.names||void 0)},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(s){var o=s.useCSSOMInjection,u=s.target;return s.isServer?new Xx(u):o?new Yx(u):new qx(u)})(this.options),new _x(l)));var l},a.prototype.hasNameForId=function(l,s){return this.names.has(l)&&this.names.get(l).has(s)},a.prototype.registerName=function(l,s){if(go(l),this.names.has(l))this.names.get(l).add(s);else{var o=new Set;o.add(s),this.names.set(l,o)}},a.prototype.insertRules=function(l,s,o){this.registerName(l,s),this.getTag().insertRules(go(l),o)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(go(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a})(),Qx=/&/g,Kx=/^\s*\/\/.*$/gm;function J1(a,l){return a.map(function(s){return s.type==="rule"&&(s.value="".concat(l," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(l," ")),s.props=s.props.map(function(o){return"".concat(l," ").concat(o)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=J1(s.children,l)),s})}function Zx(a){var l,s,o,u=Di,f=u.options,p=f===void 0?Di:f,v=u.plugins,g=v===void 0?Fo:v,m=function(j,R,k){return k.startsWith(s)&&k.endsWith(s)&&k.replaceAll(s,"").length>0?".".concat(l):j},x=g.slice();x.push(function(j){j.type===Vo&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(Qx,s).replace(o,m))}),p.prefix&&x.push(bx),x.push(gx);var w=function(j,R,k,_){R===void 0&&(R=""),k===void 0&&(k=""),_===void 0&&(_="&"),l=_,s=R,o=new RegExp("\\".concat(s,"\\b"),"g");var U=j.replace(Kx,""),M=px(k||R?"".concat(k," ").concat(R," { ").concat(U," }"):U);p.namespace&&(M=J1(M,p.namespace));var $=[];return No(M,yx(x.concat(vx(function(L){return $.push(L)})))),$};return w.hash=g.length?g.reduce(function(j,R){return R.name||Jl(15),ki(j,R.name)},Y1).toString():"",w}var Jx=new Lo,sf=Zx(),F1=Re.createContext({shouldForwardProp:void 0,styleSheet:Jx,stylis:sf});F1.Consumer;Re.createContext(void 0);function cf(){return y.useContext(F1)}var W1=(function(){function a(l,s){var o=this;this.inject=function(u,f){f===void 0&&(f=sf);var p=o.name+f.hash;u.hasNameForId(o.id,p)||u.insertRules(o.id,p,f(o.rules,p,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=s,kf(this,function(){throw Jl(12,String(o.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=sf),this.name+l.hash},a})(),Fx=function(a){return a>="A"&&a<="Z"};function vm(a){for(var l="",s=0;s<a.length;s++){var o=a[s];if(s===1&&o==="-"&&a[0]==="-")return a;Fx(o)?l+="-"+o.toLowerCase():l+=o}return l.startsWith("ms-")?"-"+l:l}var I1=function(a){return a==null||a===!1||a===""},P1=function(a){var l,s,o=[];for(var u in a){var f=a[u];a.hasOwnProperty(u)&&!I1(f)&&(Array.isArray(f)&&f.isCss||_i(f)?o.push("".concat(vm(u),":"),f,";"):ql(f)?o.push.apply(o,Ai(Ai(["".concat(u," {")],P1(f),!1),["}"],!1)):o.push("".concat(vm(u),": ").concat((l=u,(s=f)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||l in xx||l.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return o};function pa(a,l,s,o){if(I1(a))return[];if(Rf(a))return[".".concat(a.styledComponentId)];if(_i(a)){if(!_i(f=a)||f.prototype&&f.prototype.isReactComponent||!l)return[a];var u=a(l);return pa(u,l,s,o)}var f;return a instanceof W1?s?(a.inject(s,o),[a.getName(o)]):[a]:ql(a)?P1(a):Array.isArray(a)?Array.prototype.concat.apply(Fo,a.map(function(p){return pa(p,l,s,o)})):[a.toString()]}function eg(a){for(var l=0;l<a.length;l+=1){var s=a[l];if(_i(s)&&!Rf(s))return!1}return!0}var Wx=q1(Jo),Ix=(function(){function a(l,s,o){this.rules=l,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&eg(l),this.componentId=s,this.baseHash=ki(Wx,s),this.baseStyle=o,Lo.registerId(s)}return a.prototype.generateAndInjectStyles=function(l,s,o){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,s,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))u=_a(u,this.staticRulesId);else{var f=_o(pa(this.rules,l,s,o)),p=rf(ki(this.baseHash,f)>>>0);if(!s.hasNameForId(this.componentId,p)){var v=o(f,".".concat(p),void 0,this.componentId);s.insertRules(this.componentId,p,v)}u=_a(u,p),this.staticRulesId=p}else{for(var g=ki(this.baseHash,o.hash),m="",x=0;x<this.rules.length;x++){var w=this.rules[x];if(typeof w=="string")m+=w;else if(w){var j=_o(pa(w,l,s,o));g=ki(g,j+x),m+=j}}if(m){var R=rf(g>>>0);s.hasNameForId(this.componentId,R)||s.insertRules(this.componentId,R,o(m,".".concat(R),void 0,this.componentId)),u=_a(u,R)}}return u},a})(),Af=Re.createContext(void 0);Af.Consumer;var Ru={};function Px(a,l,s){var o=Rf(a),u=a,f=!zu(a),p=l.attrs,v=p===void 0?Fo:p,g=l.componentId,m=g===void 0?(function(Z,J){var H=typeof Z!="string"?"sc":fm(Z);Ru[H]=(Ru[H]||0)+1;var V="".concat(H,"-").concat(zf(Jo+H+Ru[H]));return J?"".concat(J,"-").concat(V):V})(l.displayName,l.parentComponentId):g,x=l.displayName,w=x===void 0?(function(Z){return zu(Z)?"styled.".concat(Z):"Styled(".concat(Tx(Z),")")})(a):x,j=l.displayName&&l.componentId?"".concat(fm(l.displayName),"-").concat(l.componentId):l.componentId||m,R=o&&u.attrs?u.attrs.concat(v).filter(Boolean):v,k=l.shouldForwardProp;if(o&&u.shouldForwardProp){var _=u.shouldForwardProp;if(l.shouldForwardProp){var U=l.shouldForwardProp;k=function(Z,J){return _(Z,J)&&U(Z,J)}}else k=_}var M=new Ix(s,j,o?u.componentStyle:void 0);function $(Z,J){return(function(H,V,ne){var de=H.attrs,_e=H.componentStyle,Ae=H.defaultProps,Be=H.foldedComponentIds,P=H.styledComponentId,Q=H.target,re=Re.useContext(Af),N=cf(),K=H.shouldForwardProp||N.shouldForwardProp,I=H1(V,re,Ae)||Di,ee=(function(ie,se,me){for(var qe,Se=dt(dt({},se),{className:void 0,theme:me}),jt=0;jt<ie.length;jt+=1){var Jt=_i(qe=ie[jt])?qe(Se):qe;for(var pt in Jt)Se[pt]=pt==="className"?_a(Se[pt],Jt[pt]):pt==="style"?dt(dt({},Se[pt]),Jt[pt]):Jt[pt]}return se.className&&(Se.className=_a(Se.className,se.className)),Se})(de,V,I),ue=ee.as||Q,C={};for(var G in ee)ee[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&ee.theme===I||(G==="forwardedAs"?C.as=ee.forwardedAs:K&&!K(G,ue)||(C[G]=ee[G]));var F=(function(ie,se){var me=cf(),qe=ie.generateAndInjectStyles(se,me.styleSheet,me.stylis);return qe})(_e,ee),W=_a(Be,P);return F&&(W+=" "+F),ee.className&&(W+=" "+ee.className),C[zu(ue)&&!G1.has(ue)?"class":"className"]=W,ne&&(C.ref=ne),y.createElement(ue,C)})(L,Z,J)}$.displayName=w;var L=Re.forwardRef($);return L.attrs=R,L.componentStyle=M,L.displayName=w,L.shouldForwardProp=k,L.foldedComponentIds=o?_a(u.foldedComponentIds,u.styledComponentId):"",L.styledComponentId=j,L.target=o?u.target:a,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=o?(function(J){for(var H=[],V=1;V<arguments.length;V++)H[V-1]=arguments[V];for(var ne=0,de=H;ne<de.length;ne++)of(J,de[ne],!0);return J})({},u.defaultProps,Z):Z}}),kf(L,function(){return".".concat(L.styledComponentId)}),f&&K1(L,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function bm(a,l){for(var s=[a[0]],o=0,u=l.length;o<u;o+=1)s.push(l[o],a[o+1]);return s}var xm=function(a){return Object.assign(a,{isCss:!0})};function Ln(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];if(_i(a)||ql(a))return xm(pa(bm(Fo,Ai([a],l,!0))));var o=a;return l.length===0&&o.length===1&&typeof o[0]=="string"?pa(o):xm(pa(bm(o,l)))}function uf(a,l,s){if(s===void 0&&(s=Di),!l)throw Jl(1,l);var o=function(u){for(var f=[],p=1;p<arguments.length;p++)f[p-1]=arguments[p];return a(l,s,Ln.apply(void 0,Ai([u],f,!1)))};return o.attrs=function(u){return uf(a,l,dt(dt({},s),{attrs:Array.prototype.concat(s.attrs,u).filter(Boolean)}))},o.withConfig=function(u){return uf(a,l,dt(dt({},s),u))},o}var tg=function(a){return uf(Px,a)},S=tg;G1.forEach(function(a){S[a]=tg(a)});var e5=(function(){function a(l,s){this.rules=l,this.componentId=s,this.isStatic=eg(l),Lo.registerId(this.componentId+1)}return a.prototype.createStyles=function(l,s,o,u){var f=u(_o(pa(this.rules,s,o,u)),""),p=this.componentId+l;o.insertRules(p,p,f)},a.prototype.removeStyles=function(l,s){s.clearRules(this.componentId+l)},a.prototype.renderStyles=function(l,s,o,u){l>2&&Lo.registerId(this.componentId+l),this.removeStyles(l,o),this.createStyles(l,s,o,u)},a})();function ng(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];var o=Ln.apply(void 0,Ai([a],l,!1)),u="sc-global-".concat(zf(JSON.stringify(o))),f=new e5(o,u),p=function(g){var m=cf(),x=Re.useContext(Af),w=Re.useRef(m.styleSheet.allocateGSInstance(u)).current;return m.styleSheet.server&&v(w,g,m.styleSheet,x,m.stylis),Re.useLayoutEffect(function(){if(!m.styleSheet.server)return v(w,g,m.styleSheet,x,m.stylis),function(){return f.removeStyles(w,m.styleSheet)}},[w,g,m.styleSheet,x,m.stylis]),null};function v(g,m,x,w,j){if(f.isStatic)f.renderStyles(g,wx,x,j);else{var R=dt(dt({},m),{theme:H1(m,w,p.defaultProps)});f.renderStyles(g,R,x,j)}}return Re.memo(p)}function Bt(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];var o=_o(Ln.apply(void 0,Ai([a],l,!1))),u=zf(o);return new W1(u,o)}var ag={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sm=Re.createContext&&Re.createContext(ag),t5=["attr","size","title"];function n5(a,l){if(a==null)return{};var s=a5(a,l),o,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(u=0;u<f.length;u++)o=f[u],!(l.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(s[o]=a[o])}return s}function a5(a,l){if(a==null)return{};var s={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}function $o(){return $o=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=s[o])}return a},$o.apply(this,arguments)}function wm(a,l){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);l&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable})),s.push.apply(s,o)}return s}function Uo(a){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?wm(Object(s),!0).forEach(function(o){i5(a,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):wm(Object(s)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(s,o))})}return a}function i5(a,l,s){return l=l5(l),l in a?Object.defineProperty(a,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[l]=s,a}function l5(a){var l=r5(a,"string");return typeof l=="symbol"?l:l+""}function r5(a,l){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var o=s.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function ig(a){return a&&a.map((l,s)=>Re.createElement(l.tag,Uo({key:s},l.attr),ig(l.child)))}function ke(a){return l=>Re.createElement(o5,$o({attr:Uo({},a.attr)},l),ig(a.child))}function o5(a){var l=s=>{var{attr:o,size:u,title:f}=a,p=n5(a,t5),v=u||s.size||"1em",g;return s.className&&(g=s.className),a.className&&(g=(g?g+" ":"")+a.className),Re.createElement("svg",$o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,o,p,{className:g,style:Uo(Uo({color:a.color||s.color},s.style),a.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),f&&Re.createElement("title",null,f),a.children)};return Sm!==void 0?Re.createElement(Sm.Consumer,null,s=>l(s)):l(ag)}function Mf(a){return ke({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function Of(a){return ke({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function Nf(a){return ke({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Df(a){return ke({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function _f(a){return ke({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function lg(a){return ke({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function s5(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function rg(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function c5(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(a)}function u5(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function og(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function f5(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Bf(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function d5(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function sg(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function h5(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(a)}function Em(a){return ke({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const p5="/instalearn/assets/Slide11-BQ1quwNm.mp4",m5="/instalearn/assets/test-BrOnAr5c.png",g5="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",y5="/instalearn/assets/Grade9EnglishPriyaShrama-B1I7qOLW.png",v5="/instalearn/assets/Grade9EnglishVivekSinha-DL6zVjOS.png",b5="/instalearn/assets/Grade9MathMandar-CUG1o1dv.png",x5="/instalearn/assets/Grade9MathNeha-bS5aSjDI.png",S5="/instalearn/assets/Grade9ScienceAlakh-CauSWcYG.png",w5="/instalearn/assets/Grade9ScienceSunil-sNPMcwxT.png",E5="/instalearn/assets/Grade9ScienceSamridhi-6fgWaOqD.png",j5="/instalearn/assets/Grade9SstSiddhart-DdDuTXjs.png",C5="/instalearn/assets/Grade9SstShinu-mH_b-fxc.png",T5="/instalearn/assets/Grade10EnglishAnurag-BIzgEGI3.png",z5="/instalearn/assets/Slide3-B6C07YuO.png",R5="/instalearn/assets/Slide5-BsOulZPi.png",k5="/instalearn/assets/Slide6-8dQDHdn3.png",A5="/instalearn/assets/Slide1-CH0r16yo.png",M5="/instalearn/assets/Slide10-BP0-oJ-v.gif",O5="/instalearn/assets/Slide11-BQ1quwNm.mp4",N5="/instalearn/assets/img1-A0lti5vQ.png",D5="/instalearn/assets/img2-CojCwkXu.png",_5="/instalearn/assets/img3-DDz2J1kA.png",B5="/instalearn/assets/img4-CRoFVeK4.png",L5="/instalearn/assets/img5-B0XXvagz.png",$5="/instalearn/assets/img6-OQwiZs_R.png",yo={},jm={videoClip1:p5},U5={test:m5},Ge={teacherProfilePic:g5,Grade9EnglishPriyaShrama:y5,Grade9EnglishVivekSinha:v5,Grade9MathMandar:b5,Grade9MathNeha:x5,Grade9ScienceAlakh:S5,Grade9ScienceSunil:w5,Grade9ScienceSamridhi:E5,Grade9SstSiddhart:j5,Grade9SstShinu:C5,Grade10EnglishAnurag:T5},fa={Slide3:z5,Slide5:R5,Slide6:k5,Slide7:A5,Slide10:M5,Slide11:O5},ji={img1:N5,img2:D5,img3:_5,img4:B5,img5:L5,img6:$5};function H5(a){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M294 240s-21.51 16-38 16-38-16-38-16"},child:[]}]})(a)}const G5=S.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,Y5=S.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  @media (max-width: 520px) {
    padding: 10px 12px;
  }
`,q5=S.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,X5=S.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,V5=S.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,Q5=S.span`
  font-weight: 600;
  color: #0f172a;
  font-size: 14px;
  @media (max-width: 520px) { font-size: 13px; }
`,K5=S.span`
  font-size: 12px;
  color: #64748b;
`,Z5=S.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: transparent;
  border: none;
  color: #0f172a;
  cursor: pointer;
  &:hover { background: rgba(15, 23, 42, 0.04); }
  @media (max-width: 520px) {
    width: 34px; height: 34px; border-radius: 8px;
  }
`,J5=S.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,F5=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,W5=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 8px 12px;
`,I5=S.div`
  display: flex;
  gap: 10px;
`,vo=S.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: 10px;
  color: #0f172a;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease;
  &:hover { background: rgba(15, 23, 42, 0.05); }
  &:active { transform: scale(0.98); }
  @media (max-width: 520px) {
    width: 36px; height: 36px; border-radius: 8px;
  }
`,P5=S.div`
  padding: 12px;
  display: grid;
  gap: 14px;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  @media (min-width: 520px) {
    padding: 14px 16px;
    gap: 16px;
  }
`,Cm=S.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
  @media (min-width: 520px) { padding: 14px; }
`,Tm=S.h3`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
`,e4=S.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
  li {
    font-size: 13px;
    color: #0f172a;
    line-height: 1.25;
  }
`,sn=S.div`
  height: ${a=>a.h||12}px;
  background: linear-gradient(90deg,#f2f5f9 0%,#eef2f7 50%,#f2f5f9 100%);
  border-radius: 8px;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% { opacity: .8 }
    50% { opacity: .4 }
    100% { opacity: .8 }
  }
`,zm=S.div`
  font-size: 13px;
  color: #b91c1c;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,Rm=S.button`
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`,t4=S.div`
  display: grid;
  gap: 10px;
`,n4=S.p`
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`,a4=S.div`
  display: grid;
  gap: 8px;
`,i4=S.button.withConfig({shouldForwardProp:a=>a!=="$state"})`
  text-align: left;
  font-size: 13px;
  background: ${({$state:a})=>a==="correct"?"rgba(34,197,94,.12)":a==="wrong"?"rgba(239,68,68,.12)":"white"};
  color: #0f172a;
  border: 1px solid rgba(15,23,42,0.12);
  border-color: ${({$state:a})=>a==="correct"?"rgba(34,197,94,.5)":a==="wrong"?"rgba(239,68,68,.5)":"rgba(15,23,42,0.12)"};
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  &:hover { background: ${({$state:a})=>a==="idle"?"rgba(15,23,42,.04)":void 0}; }
  @media (max-width: 520px) { padding: 12px; }
`,Mo=S.small`
  color: #64748b;
  font-size: 12px;
`,l4=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,cg=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,km=S.button`
  background: #0f172a;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
`,ug=S.button`
  background: transparent;
  border: 1px solid rgba(15,23,42,.14);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
`;async function r4(a){const s=await(await fetch(a,{mode:"cors"})).blob(),o=s.type||"image/jpeg",u=await s.arrayBuffer(),f=new Uint8Array(u);let p="";for(let g=0;g<f.byteLength;g++)p+=String.fromCharCode(f[g]);return{base64:btoa(p),mime:o}}function o4({title:a,description:l,username:s}){return`
You are generating STRICTLY SCOPED learning helpers from a single infographic.

Rules (follow EXACTLY):
- Output JSON with shape:
  {
    "bullets": ["...", "...", "...", "...", "..."],
    "mcqs": [
      { "question": "...", "options": ["...","...","...","..."], "correctIndex": 0, "explanation": "..." },
      ...
    ]
  }
- Exactly 5 bullets. Each bullet ≤ 18 words. No fluff. Stay within the infographic.
- Exactly 5 MCQs. Each question ≤ 18 words. Options concise & mutually exclusive (3–5 options).
- Explanations ≤ 18 words.
- If information is not present in the infographic, write "Not present" and avoid inventing facts.

Infographic context:
- Title: "${a}"
- Caption: "${l}"
- Author: "${s}"
`.trim()}async function s4(a){const{title:l,description:s,username:o,imageUrl:u}=a,f="AIzaSyDYGHcNYuuk43rrYSBVBIQGegzOGVtjGrw",{base64:p,mime:v}=await r4(u),m={contents:[{parts:[{text:o4({title:l,description:s,username:o})},{inline_data:{mime_type:v,data:p}}]}],generationConfig:{temperature:.6,topK:32,topP:.9,maxOutputTokens:1200,response_mime_type:"application/json"}},x="https://generativelanguage.googleapis.com/v1beta",w=["gemini-2.5-flash","gemini-2.0-flash"];let j;for(const R of w)try{const k=`${x}/models/${R}:generateContent?key=${encodeURIComponent(f)}`,_=await fetch(k,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!_.ok)throw new Error(`Gemini error (${_.status}): ${await _.text()}`);const M=(await _.json())?.candidates?.[0]?.content?.parts?.[0]?.text;if(!M)throw new Error("Empty response from Gemini");let $;try{$=JSON.parse(M)}catch{const H=String(M).replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/```$/i,"").trim();$=JSON.parse(H)}const L=Array.isArray($.bullets)?$.bullets.slice(0,5):[],Z=Array.isArray($.mcqs)?$.mcqs.slice(0,5):[];if(!L.length||!Z.length)throw new Error("Malformed AI content");const J=Z.map(H=>({question:String(H.question||"").slice(0,140),options:Array.isArray(H.options)&&H.options.length?H.options.slice(0,5):["Not present"],correctIndex:Number.isInteger(H.correctIndex)?H.correctIndex:0,explanation:H.explanation?String(H.explanation).slice(0,140):void 0}));return{bullets:L,mcqs:J}}catch(k){j=k}throw j||new Error("Gemini request failed")}function c4({avatarSrc:a=Ge.teacherProfilePic,title:l,description:s,imgSrc:o,username:u,postUrl:f,onLikeChange:p,onBookmarkChange:v,onShare:g}){const[m,x]=y.useState(!1),[w,j]=y.useState(!1),[R,k]=y.useState(!1),[_,U]=y.useState(!1),[M,$]=y.useState(null),[L,Z]=y.useState(null),[J,H]=y.useState(0);y.useEffect(()=>{const ee=L?.mcqs?.length||0;ee!==0&&H(ue=>Math.max(0,Math.min(ue,ee-1)))},[L?.mcqs?.length]);const V=m?"Unlike":"Like",ne=w?"Remove bookmark":"Bookmark",de=()=>{const ee=!m;x(ee),p&&p(ee)},_e=()=>{const ee=!w;j(ee),v&&v(ee)},Ae=y.useMemo(()=>({title:l,text:`${u} on Infographics — ${l}`,url:f}),[l,u,f]),Be=async()=>{try{navigator.share?await navigator.share(Ae):navigator.clipboard&&Ae.url&&(await navigator.clipboard.writeText(Ae.url),alert("Link copied to clipboard")),g&&g(Ae)}catch(ee){console.error("Share failed:",ee)}},P=async()=>{U(!0),$(null);try{const ee=await s4({title:l,description:s,username:u,imageUrl:o});Z(ee),H(0)}catch(ee){console.error(ee),$(ee?.message||"Failed to generate content")}finally{U(!1)}},Q=()=>{const ee=!R;k(ee),ee&&!L&&!_&&P()},re=L?.mcqs?.length||0,N=re?L.mcqs[J]:null,K=J===re-1,I=()=>H(ee=>Math.min(ee+1,re-1));return d.jsxs(G5,{role:"article","aria-label":`${l} instagram-style post`,children:[d.jsxs(Y5,{children:[d.jsxs(q5,{children:[d.jsx(X5,{src:a,alt:"avatar"}),d.jsxs(V5,{children:[d.jsx(Q5,{children:l}),d.jsx(K5,{children:s})]})]}),d.jsx(Z5,{"aria-label":R?"Close learn mode":"Open learn mode",title:R?"Close learn mode":"Learn more & quiz",onClick:Q,children:d.jsx(H5,{size:18})})]}),R?d.jsxs(P5,{"aria-live":"polite",children:[d.jsxs(Cm,{children:[d.jsx(Tm,{children:"Know more (5 quick points)"}),_?d.jsxs("div",{style:{display:"grid",gap:8},children:[d.jsx(sn,{}),d.jsx(sn,{}),d.jsx(sn,{}),d.jsx(sn,{}),d.jsx(sn,{})]}):M?d.jsxs(zm,{children:[d.jsx("span",{style:{flex:1,minWidth:0},children:M}),d.jsx(Rm,{onClick:P,"aria-label":"Retry generating content",children:"Retry"})]}):d.jsx(e4,{children:L?.bullets?.map((ee,ue)=>d.jsx("li",{children:ee},ue))})]}),d.jsxs(Cm,{children:[d.jsxs(cg,{children:[d.jsx(Tm,{style:{margin:0},children:"Test your knowledge"}),re?d.jsxs(Mo,{children:[J+1," / ",re]}):null]}),_?d.jsxs("div",{style:{display:"grid",gap:10},children:[d.jsx(sn,{h:16}),d.jsx(sn,{h:40}),d.jsx(sn,{h:40}),d.jsx(sn,{h:40}),d.jsx(sn,{h:40})]}):M?d.jsxs(zm,{children:[d.jsx("span",{style:{flex:1,minWidth:0},children:"Can’t load questions."}),d.jsx(Rm,{onClick:P,children:"Retry"})]}):N?d.jsx(u4,{mcq:N,index:J+1,total:re,isLast:K,onNext:K?void 0:I,onFinish:K?()=>k(!1):void 0},J):null,!_&&!M&&N&&!K?d.jsx("div",{style:{marginTop:6},children:d.jsx(Mo,{children:"Tip: You can change your choice before tapping Next."})}):null]}),d.jsxs(l4,{children:[d.jsx(Mo,{children:"AI stays within the infographic; short, clear answers only."}),d.jsx(ug,{onClick:()=>k(!1),"aria-label":"Back to image",title:"Back to image",children:"Back to image"})]})]}):d.jsx(J5,{children:d.jsx(F5,{src:o,alt:l})}),d.jsxs(W5,{children:[d.jsxs(I5,{children:[d.jsx(vo,{onClick:de,"aria-label":V,title:V,children:m?d.jsx(Mf,{size:22}):d.jsx(Of,{size:22})}),d.jsx(vo,{"aria-label":"Comment",title:"Comment",children:d.jsx(_f,{size:20})}),d.jsx(vo,{onClick:Be,"aria-label":"Share",title:"Share",children:d.jsx(Bf,{size:20})})]}),d.jsx(vo,{onClick:_e,"aria-label":ne,title:ne,children:w?d.jsx(Nf,{size:20}):d.jsx(Df,{size:20})})]})]})}function u4({mcq:a,index:l,total:s,isLast:o,onNext:u,onFinish:f}){const[p,v]=y.useState(null),g=m=>p===null?"idle":m===a.correctIndex?"correct":m===p&&p!==a.correctIndex?"wrong":"idle";return d.jsxs(t4,{"aria-label":`Question ${l}`,children:[d.jsxs(n4,{children:[l,". ",a.question]}),d.jsx(a4,{children:a.options.map((m,x)=>d.jsx(i4,{onClick:()=>v(x),$state:g(x),"aria-pressed":p===x,"aria-label":`Option ${x+1}`,children:m},x))}),p!==null&&d.jsxs("div",{style:{display:"grid",gap:8},children:[d.jsxs(Mo,{children:[p===a.correctIndex?"✅ Correct.":"❌ Not quite.",a.explanation?` — ${a.explanation}`:""]}),o?d.jsxs(cg,{children:[d.jsx(km,{onClick:f,"aria-label":"Finish quiz",children:"Finish"}),d.jsx(ug,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to top"})]}):d.jsxs(km,{onClick:u,"aria-label":"Next question",disabled:p===null,children:["Next question (",l+1,"/",s,")"]})]})]})}const f4=S.div``,d4=S.div`
  display: flex;
  overflow-x: auto;
  padding: 24px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,h4=S.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,fg=`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  user-drag: none;
  -webkit-user-drag: none;
  pointer-events: none;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
`,p4=S.img`${fg}`,m4=S.video`${fg}`,g4=S.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.96);
  backdrop-filter: blur(20px);
  display: grid;
  place-items: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`,y4=S.div`
  position: relative;
  width: 96vw;
  max-width: 1400px;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto auto;
  gap: 10px;
  overflow: hidden;
`,v4=S.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 32px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  scroll-behavior: smooth;
`,b4=S.div`
  flex: 0 0 100%;
  height: 100%;
  display: grid;
  place-items: center;
  scroll-snap-align: center;
  background: transparent;
`,dg=`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 15px;
  user-select: none;
  -webkit-user-drag: none;
  cursor: default;
  touch-action: pan-x pan-y;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease;
`,x4=S.img`${dg}`,S4=S.video`${dg}`,w4=S.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  color: white;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover { background: rgba(255, 255, 255, 0.15); transform: scale(1.05); }
  &:active { transform: scale(0.95); }
`,E4=S.div`
  width: 100%;
  padding: 0 16px 8px;
  display: grid;
  align-items: center;
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,j4=S.input.attrs({type:"range"})`
  width: 100%;
  appearance: none;
  background: transparent;
  margin: 0;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9) 0 var(--filled, 0%),
      rgba(255, 255, 255, 0.2) var(--filled, 0%) 100%
    );
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    margin-top: -6px;
    cursor: grab;
    transition: transform 0.2s ease;
  }

  &::-webkit-slider-thumb:hover { transform: scale(1.2); }
  &::-webkit-slider-thumb:active { cursor: grabbing; transform: scale(1.1); }

  &::-moz-range-track {
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9) 0 var(--filled, 0%),
      rgba(255, 255, 255, 0.2) var(--filled, 0%) 100%
    );
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border: none;
    cursor: grab;
  }
`,C4=S.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 0 16px 16px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,hg=S.button`
  position: relative;
  border: 2px solid ${a=>a.$active?"rgba(255, 255, 255, 0.9)":"rgba(255, 255, 255, 0.2)"};
  border-radius: 10px;
  background: transparent;
  padding: 0;
  cursor: pointer;
  flex: 0 0 auto;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover { border-color: rgba(255, 255, 255, 0.6); transform: scale(1.05); }
  &:active { transform: scale(0.95); }

  ${a=>a.$active&&"box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);"}
`,T4=S.img`
  width: 80px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  transition: opacity 0.2s ease;

  ${hg}:hover & { opacity: 0.8; }
`,z4=S.video`
  width: 80px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
`,Am=(a,l,s)=>Math.max(l,Math.min(s,a));function R4(a){const l=(a.type||"img").toLowerCase(),s=a.src||a.imgSrc||a.videoClipSrc,o=a.poster||a.thumb||a.thumbnail,u=a.name||a.title||"";return{type:l,src:s,poster:o,name:u,id:a.id}}class k4 extends Re.Component{state={hasError:!1};static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(l,s){console.error("Carousel error:",l,s)}render(){return this.state.hasError?d.jsx("div",{style:{color:"#fff",padding:16,textAlign:"center"},children:"Something went wrong while rendering the carousel."}):this.props.children}}function A4({items:a=[],className:l}){const s=y.useRef(null),o=y.useRef(!1),u=y.useRef(0),f=y.useRef(0),p=y.useRef(0),[v,g]=y.useState(!1),[m,x]=y.useState(0),[w,j]=y.useState(!0),R=y.useRef(null),k=y.useMemo(()=>(a||[]).map(R4).filter(P=>!!P.src),[a]),_=y.useRef([]);_.current.length!==k.length&&(_.current=k.map((P,Q)=>_.current[Q]??Re.createRef()));const U=typeof window<"u"&&typeof document<"u";y.useEffect(()=>{if(!U)return;const P=document.body.style.overflow;return v&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=P||""}},[v,U]),y.useEffect(()=>{v&&(_.current[m]?.current?.scrollIntoView({block:"nearest",inline:"center",behavior:"auto"}),j(!0))},[v,m]),y.useEffect(()=>{if(!v||!U)return;const P=Q=>{Q.key==="Escape"&&g(!1),Q.key==="ArrowRight"&&L(m+1),Q.key==="ArrowLeft"&&L(m-1),Q.key.toLowerCase()==="h"&&j(re=>!re)};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[v,m,U]);const M=y.useMemo(()=>{if(typeof window>"u"||!R.current)return 0;const P=window.getComputedStyle(R.current),Q=parseFloat(P.gap)||0;return(R.current.clientWidth||0)+Q},[v]),$=()=>{if(!R.current||M===0)return;const{scrollLeft:P}=R.current,Q=Math.round(P/M),re=Am(Q,0,k.length-1);re!==m&&x(re)},L=P=>{const Q=Am(P,0,Math.max(0,k.length-1));if(x(Q),!R.current)return;const re=M*Q;R.current.scrollTo({left:re,behavior:"smooth"})},Z=P=>{const Q=Number(P.target.value);L(Q)},H={"--filled":`${k.length>1?m/(k.length-1)*100:0}%`},V=P=>{if(P.pointerType==="mouse"&&s.current){o.current=!0,p.current=0,u.current=P.clientX,f.current=s.current.scrollLeft||0;try{s.current.setPointerCapture?.(P.pointerId)}catch{console.log("error")}}},ne=P=>{if(P.pointerType!=="mouse"||!o.current||!s.current)return;const Q=P.clientX-u.current;p.current=Math.max(p.current,Math.abs(Q)),s.current.scrollLeft=f.current-Q},de=()=>{o.current=!1},_e=6,Ae=P=>{p.current>_e||(x(P),j(!0),g(!0))},Be=P=>{const Q=P.target,re=Q.tagName&&Q.tagName.toLowerCase(),N=re==="img"||re==="video",K=Q.closest?.('[data-interactive="true"]');N||K||j(I=>!I)};return y.useEffect(()=>{if(!v)return;(R.current?.querySelectorAll("video[data-slide-video='true']")||[]).forEach((Q,re)=>{re===m?(Q.muted=!0,Q.play().catch(()=>{})):(Q.pause(),Q.currentTime=0)})},[v,m]),!k||k.length===0?null:d.jsxs(f4,{className:l,children:[d.jsx(d4,{ref:s,onPointerDown:V,onPointerMove:ne,onPointerUp:de,onPointerLeave:de,children:k.map((P,Q)=>d.jsx(h4,{onClick:()=>Ae(Q),children:P.type==="video"?d.jsx(m4,{src:P.src,poster:P.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":P.name||`Video ${Q+1}`}):d.jsx(p4,{src:P.src,alt:P.name??`Item ${Q+1}`,draggable:!1})},P.id??Q))}),v&&d.jsx(g4,{role:"dialog","aria-modal":"true","aria-label":"Media lightbox",children:d.jsxs(y4,{onClick:Be,children:[d.jsxs(O4,{$show:w,children:[m+1," / ",k.length]}),d.jsx(w4,{$show:w,onClick:()=>g(!1),"aria-label":"Close","data-interactive":"true",children:d.jsx(h5,{})}),d.jsx(v4,{ref:R,onScroll:$,children:k.map((P,Q)=>d.jsx(b4,{ref:_.current[Q],children:P.type==="video"?d.jsx(S4,{"data-slide-video":"true",src:P.src,poster:P.poster,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto","aria-label":P.name??`Video ${Q+1}`}):d.jsx(x4,{src:P.src,alt:P.name??`Image ${Q+1}`})},P.id??Q))}),d.jsx(E4,{$show:w,"data-interactive":"true",children:d.jsx(j4,{min:0,max:Math.max(0,k.length-1),step:1,value:m,onChange:Z,style:H,"aria-label":"Media scrubber"})}),d.jsx(C4,{$show:w,"aria-label":"Thumbnails","data-interactive":"true",children:k.map((P,Q)=>d.jsx(hg,{$active:Q===m,onClick:()=>L(Q),"aria-label":`Go to item ${Q+1}`,children:P.type==="video"?d.jsx(z4,{src:P.src,poster:P.poster,muted:!0,loop:!0,playsInline:!0,preload:"metadata"}):d.jsx(T4,{src:P.src,alt:P.name??`Thumbnail ${Q+1}`})},P.id??Q))})]})})]})}function M4(a){return d.jsx(k4,{children:d.jsx(A4,{...a})})}const O4=S.div`
  position: absolute;
  top: 24px;
  left: 24px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  opacity: ${a=>a.$show?1:0};
  pointer-events: none;
  transition: opacity 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`,N4=ng`
  .carousel .control-dots {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0;
  }
  .carousel .control-dots .dot {
    box-shadow: none;
    background: rgba(255, 255, 255, 0.85);
    opacity: 1;
  }
  .carousel .control-next.control-arrow, .carousel .control-prev.control-arrow {
    display: none;
  }
  .carousel .thumbs-wrapper { display: none; }
`,D4=S.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,_4=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,B4=S.div`
  display: flex;
  gap: 12px;
`,L4=S.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: transparent;
  border: none;
  color: #0f172a;
  cursor: pointer;
  &:hover { background: rgba(15, 23, 42, 0.04); }
`,bo=S.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: #0f172a;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease;
  &:hover { background: rgba(15, 23, 42, 0.06); }
  &:active { transform: scale(0.98); }
`,$4=S.div`
  padding: 12px 14px;
`,U4=S.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,H4=S.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,G4=S.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,Y4=S.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,q4=S.span`
  font-weight: 600;
  color: #0f172a;
`,X4=S.div`
  padding: 0 14px 8px 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,V4=S.span`
  font-size: 12px;
  color: #64748b;
`,Q4=S.button`
  font-size: 12px;
  color: #64748b;
  appearance: none;
  border: none;
  background: transparent;
  color: #334155;
  padding: 0;
  margin-left: 6px;
  cursor: pointer;
  border-radius: 6px;
  font-weight:500;
  &:focus {
    outline: 2px solid rgba(14, 165, 233, 0.35);
    outline-offset: 2px;
  }
`,K4=(a=1)=>({display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",WebkitLineClamp:a});function Z4({expanded:a=!1,lines:l=1,children:s,innerRef:o}){const u={fontSize:"13px",color:"#334155",margin:0,whiteSpace:"pre-wrap",...a?{}:K4(l)};return d.jsx("p",{style:u,ref:o,children:s})}function J4({avatarSrc:a=Ge.teacherProfilePic,data:l,onLikeChange:s,onBookmarkChange:o,onShare:u}){const{title:f="Carousel Title",description:p="",detailedDescription:v="",carouselMetaData:g=[]}=l||{},[m,x]=y.useState(!1),[w,j]=y.useState(!1),[R,k]=y.useState(!1),[_,U]=y.useState(!1),M=y.useRef(null);y.useEffect(()=>{const ne=M.current;if(ne){if(R){U(!0);return}requestAnimationFrame(()=>{if(!ne)return;const de=ne.scrollHeight-ne.clientHeight>1;U(de)})}},[v,R]);const $=m?"Unlike post":"Like post",L=w?"Remove bookmark":"Bookmark",Z=()=>{const ne=!m;x(ne),s&&s(ne)},J=()=>{const ne=!w;j(ne),o&&o(ne)},H=y.useMemo(()=>({title:f,text:`${f}`,url:typeof window<"u"?window.location.href:""}),[f]),V=async()=>{try{navigator.share?await navigator.share(H):navigator.clipboard&&(await navigator.clipboard.writeText(H.url),alert("Link copied to clipboard")),u&&u(H)}catch(ne){console.error("Share failed:",ne)}};return!g||g.length===0?null:d.jsxs(D4,{role:"article","aria-label":`${f} – Instagram multi-image post`,children:[d.jsxs($4,{children:[d.jsxs(U4,{children:[d.jsxs(H4,{children:[d.jsx(G4,{src:a,alt:"avatar"}),d.jsxs(Y4,{children:[d.jsx(q4,{children:f}),d.jsx(V4,{children:p})]})]}),d.jsx(L4,{"aria-label":"Post menu",title:"More",children:d.jsx(lg,{size:18})})]}),v?d.jsxs(X4,{children:[d.jsx(Z4,{expanded:R,lines:1,innerRef:M,children:v}),(_||R)&&d.jsx(Q4,{type:"button","aria-expanded":R,onClick:()=>k(ne=>!ne),children:R?d.jsx(c5,{size:14}):"more"})]}):null]}),d.jsx(N4,{}),d.jsx(M4,{items:g,duration:3e3}),d.jsxs(_4,{children:[d.jsxs(B4,{children:[d.jsx(bo,{onClick:Z,"aria-label":$,title:$,children:m?d.jsx(Mf,{size:22}):d.jsx(Of,{size:22})}),d.jsx(bo,{"aria-label":"Comment",title:"Comment",children:d.jsx(_f,{size:20})}),d.jsx(bo,{onClick:V,"aria-label":"Share",title:"Share",children:d.jsx(Bf,{size:20})})]}),d.jsx(bo,{onClick:J,"aria-label":L,title:L,children:w?d.jsx(Nf,{size:20}):d.jsx(Df,{size:20})})]})]})}const F4=S.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,W4=S.div`
  position: relative;
  padding-top: 100%; /* Default: square for mobile */
  background: #000;

  @media (min-width: 768px) {
    padding-top: 56.25%; /* Switch to 16:9 on larger screens */
  }

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,I4=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,P4=S.div`
  display: flex;
  gap: 12px;
`,xo=S.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: #0f172a;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease;
  &:hover {
    background: rgba(15, 23, 42, 0.06);
  }
  &:active {
    transform: scale(0.98);
  }
`,e3=S.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,t3=S.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,n3=S.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,a3=S.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,i3=S.span`
  font-weight: 600;
  color: #0f172a;
`,l3=S.span`
  font-size: 12px;
  color: #64748b;
`,r3=S.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: transparent;
  border: none;
  color: #0f172a;
  cursor: pointer;
  &:hover {
    background: rgba(15, 23, 42, 0.04);
  }
`;function o3({avatarSrc:a=Ge.teacherProfilePic,data:l,likedDefault:s=!1,savedDefault:o=!1,onLikeChange:u,onBookmarkChange:f,onShare:p}){const v=l?.videoClipSrc||l?.vedioClipSrc,{title:g,description:m,poster:x}=l||{},[w,j]=y.useState(s),[R,k]=y.useState(o),_=w?"Unlike post":"Like post",U=R?"Remove bookmark":"Bookmark",M=y.useRef(null),$=()=>{const J=!w;j(J),u&&u(J)},L=()=>{const J=!R;k(J),f&&f(J)},Z=async()=>{const J={title:g||"Check this video",text:m||"",url:typeof window<"u"&&window.location?.href||(l?.url??"")};try{typeof navigator<"u"&&navigator.share?await navigator.share(J):typeof navigator<"u"&&navigator.clipboard&&J.url&&(await navigator.clipboard.writeText(J.url),alert("Link copied to clipboard")),p&&p(J)}catch(H){console.log(H)}};return y.useEffect(()=>{const J=M.current;if(!J)return;(async()=>{try{await J.play()}catch{}})()},[v]),v?d.jsxs(F4,{"aria-label":"Video post",children:[d.jsxs(e3,{children:[d.jsxs(t3,{children:[d.jsx(n3,{src:a,alt:"Author avatar"}),d.jsxs(a3,{children:[d.jsx(i3,{children:g}),d.jsx(l3,{children:m})]})]}),d.jsx(r3,{"aria-label":"Post menu",title:"More options",children:d.jsx(lg,{size:18})})]}),d.jsx(W4,{children:d.jsx("video",{ref:M,src:v,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:x,"aria-label":g||"Video clip"})}),d.jsxs(I4,{children:[d.jsxs(P4,{children:[d.jsx(xo,{onClick:$,"aria-label":_,title:_,children:w?d.jsx(Mf,{size:22}):d.jsx(Of,{size:22})}),d.jsx(xo,{"aria-label":"Comment",title:"Comment",children:d.jsx(_f,{size:20})}),d.jsx(xo,{onClick:Z,"aria-label":"Share",title:"Share",children:d.jsx(Bf,{size:20})})]}),d.jsx(xo,{onClick:L,"aria-label":U,title:U,children:R?d.jsx(Nf,{size:20}):d.jsx(Df,{size:20})})]})]}):null}const s3=[{id:1,type:"carousel",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",detailedDescription:"Collective identity is the shared sense of belonging among individuals who associate themselves with a larger group or community. It is shaped by shared language, culture, traditions, and values that connect people to a collective purpose. Understanding this helps explain how societies maintain unity and continuity over time.",carouselMetaData:[{id:1,type:"img",src:ji.img1},{id:2,type:"img",src:ji.img2},{id:3,type:"img",src:ji.img3},{id:4,type:"img",src:ji.img4},{id:5,type:"img",src:ji.img5},{id:6,type:"img",src:ji.img6}]},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",detailedDescription:"This section examines how collective identity emerges from shared experiences, beliefs, and cultural narratives. It plays a crucial role in fostering social solidarity, promoting cooperation, and helping individuals find meaning through group affiliation.",carouselMetaData:[{id:1,type:"img",src:fa.Slide3},{id:2,type:"gif",src:fa.Slide10},{id:3,type:"video",src:fa.Slide11},{id:4,type:"img",src:fa.Slide6}]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",detailedDescription:"Symbols such as national flags, anthems, and cultural rituals embody the essence of collective identity. These shared symbols reinforce emotional ties, transmit values, and sustain collective memory.",carouselMetaData:[{id:1,type:"img",src:fa.Slide7},{id:2,type:"gif",src:fa.Slide10},{id:3,type:"video",src:fa.Slide11}]},{id:5,type:"videoClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",detailedDescription:"This video highlights real-world scenarios where collective identity has influenced social and political movements.",videoClipSrc:jm.videoClip1},{id:6,type:"infografic",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities.",imgSrc:fa.Slide5},{id:7,type:"videoClip",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities.",videoClipSrc:jm.videoClip1}],c3=S.div`
  min-height: 100vh;
  place-items: center;
  padding: 15px;
  background: radial-gradient(
      40% 60% at 20% 10%,
      rgba(99, 102, 241, 0.18) 0%,
      transparent 60%
    ),
    radial-gradient(
      40% 60% at 80% 0%,
      rgba(56, 189, 248, 0.18) 0%,
      transparent 60%
    ),
    #f8fafc;
`;function u3(){return y.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),d.jsx(d.Fragment,{children:d.jsx(c3,{children:d.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:s3.map(a=>d.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?d.jsx(c4,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?d.jsx(J4,{data:a}):a.type==="videoClip"?d.jsx(o3,{data:a}):null},a.id))})})})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d3=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,s,o)=>o?o.toUpperCase():s.toLowerCase()),Mm=a=>{const l=d3(a);return l.charAt(0).toUpperCase()+l.slice(1)},pg=(...a)=>a.filter((l,s,o)=>!!l&&l.trim()!==""&&o.indexOf(l)===s).join(" ").trim(),h3=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=y.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:u="",children:f,iconNode:p,...v},g)=>y.createElement("svg",{ref:g,...p3,width:l,height:l,stroke:a,strokeWidth:o?Number(s)*24/Number(l):s,className:pg("lucide",u),...!f&&!h3(v)&&{"aria-hidden":"true"},...v},[...p.map(([m,x])=>y.createElement(m,x)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=(a,l)=>{const s=y.forwardRef(({className:o,...u},f)=>y.createElement(m3,{ref:f,iconNode:l,className:pg(`lucide-${f3(Mm(a))}`,`lucide-${a}`,o),...u}));return s.displayName=Mm(a),s};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],y3=ht("arrow-right",g3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],b3=ht("atom",v3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Lf=ht("book-open",x3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],w3=ht("bookmark",S3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],j3=ht("calculator",E3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],T3=ht("check",C3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],$f=ht("chevron-left",z3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],k3=ht("chevron-right",R3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],M3=ht("code",A3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Om=ht("flask-conical",O3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Nm=ht("globe",N3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],_3=ht("grid-3x3",D3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],L3=ht("languages",B3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ku=ht("lock",$3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],H3=ht("search",U3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Au=ht("x",G3),Y3=S.div`
  padding: 35px;
  text-align: center;
  display: grid;
  gap: 16px;
  animation: fadeUp 0.5s ease;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,q3=S.div`
  height: 88px;
  width: 88px;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  margin: 0 auto;
  border: 1px solid #e5e7eb;
  background: transparent;
  animation: pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  @keyframes pop {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`,X3=S.img`
  height: 70%;
  width: 70%;
  object-fit: cover; /* ensures it fills the circle */
  border-radius: 50%; /* ensures circular clipping */
`,V3=S.div`
  animation: slideIn 0.5s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,Q3=S.h1`
  margin: 0 0 8px 0;
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 900;
  background: #374151;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,K3=S.p`
  margin: 6px 0 0 0;
  color: #6b7280;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
`,Z3=S.button`
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  background: #374151;
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
  animation: fadeUp 0.5s ease;
  animation-delay: 0.15s;
  animation-fill-mode: both;

  &:hover {
    background: #4b5563;
  }

  &:active {
    transform: scale(0.98);
  }
`;function J3({onStart:a}){return d.jsxs(Y3,{children:[d.jsx(q3,{children:d.jsx(X3,{src:"https://th.bing.com/th/id/OIP.uSFDPMfkxTDmRZEJvOe_lAHaHa?w=108&h=108&c=1&bgcl=e66538&r=0&o=7&dpr=1.1&pid=ImgRC&rm=3",alt:"PW Logo"})}),d.jsxs(V3,{children:[d.jsx(Q3,{children:"Welcome to Pi learn"}),d.jsx(K3,{children:"Your personalized learning journey starts here. Connect with expert teachers and unlock your full potential."})]}),d.jsxs(Z3,{onClick:a,"aria-label":"Get started",children:["Get Started ",d.jsx(y3,{size:18})]})]})}const F3=S.div`
padding: 35px;
position: relative;
overflow: visible;
`,W3=S.button`
  position: absolute;
  top: -38px;  /* Moves it outside the card's top padding */
  left: -20px; /* Moves it slightly outside the left edge */
  background: #ffffff;
  border: 2px solid #e2e8f0;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  z-index: 10;

  &:hover {
    background: #f1f5f9;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,I3=S.div`
  text-align: center;
  margin-bottom: 20px;
  animation: slideIn 0.6s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,P3=S.h2`
  margin: 0 0 8px 0;
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 900;
  background: #374151;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,e6=S.p`
  margin: 0;
  color: #64748b;
  font-size: 15px;
  font-weight: 500;
`,t6=S.div`
  display: grid;
  place-items: center;
  margin-bottom: 16px;
  animation: fadeUp 0.6s ease 0.2s both;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,n6=S.div`
  position: relative;
  width: 100%;
  max-width: 460px;
  height: 240px;
  overflow-y: auto;
  background: linear-gradient(to bottom, #f8fafc 0%, #ffffff 50%, #f8fafc 100%);
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  scroll-snap-type: y mandatory;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);

  &::-webkit-scrollbar {
    width: 0;
  }
`,a6=S.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: linear-gradient(to bottom,
    rgba(248, 250, 252, 0.95) 0%,
    transparent 25%,
    transparent 75%,
    rgba(248, 250, 252, 0.95) 100%
  );
`,i6=S.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,l6=S.li`
  height: ${a=>a.$height}px;
  display: grid;
  place-items: center;
  font-weight: 700;
  color: #64748b;
  scroll-snap-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeUp 0.5s ease;
  animation-delay: ${a=>a.$delay};
  animation-fill-mode: both;
  user-select: none;
  font-size: 16px;

  ${a=>a.$isSelected&&`
    color: #323536;
    font-size: 20px;
    font-weight: 900;
    transform: scale(1.05);
  `}

  &:hover {
    color: #2c2f30;
    transform: scale(1.02);
  }
`,Dm=S.li`
  height: ${a=>a.$height};
`;S.div`
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
  padding-top: 8px;
  animation: fadeUp 0.6s ease 0.4s both;
`;const r6=S.button`
  padding: 14px 16px;
  border-radius: 12px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;S(r6)`
  border: 2px solid transparent;
  background: #374151;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover:not(:disabled) {
    background: #4b5563;
  }
`;function o6({options:a,value:l,onChange:s,onNext:o}){const f=Re.useRef(null),p=g=>{const m=a.indexOf(g);if(m===-1)return;const x=f.current.clientHeight/2-48/2;f.current.scrollTo({top:x+m*48,behavior:"smooth"}),s(g),o&&o()},v={height:`calc(50% - ${48/2}px)`};return d.jsx(t6,{children:d.jsxs(n6,{ref:f,children:[d.jsx(a6,{}),d.jsxs(i6,{children:[d.jsx(Dm,{$height:v.height}),a.map((g,m)=>d.jsx(l6,{$height:48,$delay:`${m*.02}s`,$isSelected:g===l,onClick:()=>p(g),children:g},g)),d.jsx(Dm,{$height:v.height})]})]})})}function s6({grades:a,selectedGrade:l,onSelect:s,onBack:o,onNext:u}){const f=Object.keys(a);return Re.useEffect(()=>{!l&&f.length>0&&s(f[0])},[l,f,s]),d.jsxs(F3,{children:[d.jsx(W3,{onClick:o,"aria-label":"Go back",children:d.jsx($f,{size:24})}),d.jsxs(I3,{children:[d.jsx(P3,{children:"Choose your Grade"}),d.jsx(e6,{children:"Swipe or tap to select a grade."})]}),d.jsx(o6,{options:f,value:l||f[0],onChange:s,onNext:u})]})}const c6={English:Lf,Mathematics:j3,Science:Om,Physics:b3,Chemistry:Om,Biology:Nm,"Social Studies":Nm,Hindi:L3,"Computer Science":M3},u6=S.div`
  padding: 3px;
  position: relative;
  overflow: visible;
`,f6=S.button`
  position: absolute;
  top: -38px;
  left: -20px;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  z-index: 10;

  &:hover {
    background: #f1f5f9;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,d6=S.div`
  text-align: center;
  margin-bottom: 12px;
  animation: slideIn 0.5s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,h6=S.h2`
  margin: 0 0 6px 0;
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 900;
  color: #1f2937;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,p6=S.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,m6=S.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
`,g6=S.button`
  text-align: left;
  border-radius: 12px;
  padding: 12px;
  background: ${a=>a.$isSelected?"#f3f4f6":"#ffffff"};
  border: 2px solid ${a=>a.$isSelected?"#4b5563":"#e5e7eb"};
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 10px;
  transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.2s ease;
  animation: fadeUp 0.5s ease;
  animation-delay: ${a=>a.$delay};
  animation-fill-mode: both;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    border-color: ${a=>a.$isSelected?"#4b5563":"#d1d5db"};
    background: ${a=>a.$isSelected?"#f3f4f6":"#f9fafb"};
  }

  &:active {
    transform: scale(0.99);
  }
`,y6=S.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,v6=S.span`
  font-weight: 800;
  letter-spacing: -0.01em;
  font-size: 16px;
  color: #1f2937;
`,b6=S.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #f6f7f9;
  border: 1px solid #e5e7eb;
  display: grid;
  place-items: center;
  color: #374151;
`;function x6({grades:a,selectedGrade:l,selectedSubject:s,onSelectSubject:o,onBack:u,onNext:f}){const p=y.useMemo(()=>l&&a?.[l]?.subjects?Object.keys(a[l].subjects):[],[a,l]);y.useEffect(()=>{!s&&p.includes("English")&&o?.("English")},[s,p,o]);const v=g=>{o?.(g),f?.()};return d.jsxs(u6,{children:[d.jsx(f6,{onClick:u,"aria-label":"Go back",children:d.jsx($f,{size:24})}),d.jsxs(d6,{children:[d.jsx(h6,{children:"Pick a Subject"}),d.jsx(p6,{children:l?`You chose ${l}. Now select a subject.`:"Choose a grade first."})]}),d.jsx(m6,{children:p.map((g,m)=>{const x=c6[g]||Lf,w=s===g||!s&&g==="English";return d.jsxs(g6,{$isSelected:w,$delay:`${m*.03}s`,"aria-pressed":w,onClick:()=>v(g),children:[d.jsxs(y6,{children:[d.jsx(b6,{children:d.jsx(x,{size:18,"aria-hidden":"true"})}),d.jsx(v6,{children:g})]}),d.jsx(k3,{size:18,"aria-hidden":"true"})]},g)})})]})}var S6={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function w6(a){if(typeof a=="number")return{value:a,unit:"px"};var l,s=(a.match(/^[0-9.]*/)||"").toString();s.includes(".")?l=parseFloat(s):l=parseInt(s,10);var o=(a.match(/[^0-9]*$/)||"").toString();return S6[o]?{value:l,unit:o}:(console.warn("React Spinners: ".concat(a," is not a valid css value. Defaulting to ").concat(l,"px.")),{value:l,unit:"px"})}function _m(a){var l=w6(a);return"".concat(l.value).concat(l.unit)}var E6=function(a,l,s){var o="react-spinners-".concat(a,"-").concat(s);if(typeof window>"u"||!window.document)return o;var u=document.createElement("style");document.head.appendChild(u);var f=u.sheet,p=`
    @keyframes `.concat(o,` {
      `).concat(l,`
    }
  `);return f&&f.insertRule(p,0),o},Ho=function(){return Ho=Object.assign||function(a){for(var l,s=1,o=arguments.length;s<o;s++){l=arguments[s];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(a[u]=l[u])}return a},Ho.apply(this,arguments)},j6=function(a,l){var s={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(s[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,o=Object.getOwnPropertySymbols(a);u<o.length;u++)l.indexOf(o[u])<0&&Object.prototype.propertyIsEnumerable.call(a,o[u])&&(s[o[u]]=a[o[u]]);return s},C6=E6("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function T6(a){var l=a.loading,s=l===void 0?!0:l,o=a.color,u=o===void 0?"#000000":o,f=a.speedMultiplier,p=f===void 0?1:f,v=a.cssOverride,g=v===void 0?{}:v,m=a.size,x=m===void 0?35:m,w=j6(a,["loading","color","speedMultiplier","cssOverride","size"]),j=Ho({background:"transparent !important",width:_m(x),height:_m(x),borderRadius:"100%",border:"2px solid",borderTopColor:u,borderBottomColor:"transparent",borderLeftColor:u,borderRightColor:u,display:"inline-block",animation:"".concat(C6," ").concat(.75/p,"s 0s infinite linear"),animationFillMode:"both"},g);return s?y.createElement("span",Ho({style:j},w)):null}const z6=S.div`
  padding: 3px;
  position: relative;
`,R6=S.button`
  position: absolute;
  top: -38px;
  left: -20px;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  z-index: 10;
  &:hover { background: #f1f5f9; transform: scale(1.05); }
  &:active { transform: scale(0.95); }
`,k6=S.div`
  text-align: center;
  margin-bottom: 12px;
  animation: slideIn 0.5s ease;
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
`,A6=S.h2`
  margin: 0 0 6px 0;
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 900;
  color: #1f2937;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,M6=S.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,O6=S.div`
  position: relative;
  margin-bottom: 10px;
`,N6=S(H3)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
`,D6=S.input`
  width: 100%;
  padding: 12px 16px 12px 40px;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  font-size: 15px;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
    border-color: #4b5563;
    box-shadow: 0 0 0 3px rgba(75, 85, 99, 0.1);
  }
  &::placeholder { color: #9ca3af; }
`,_6=S.div`
  display: flex;
  gap: 12px;
  padding: 2px 0 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,B6=Bt`
  0% { opacity: 0; transform: translateY(10px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,L6=S.button`
  min-width: 100%;
  max-width: 184px;
  aspect-ratio: 1 / 1;
  border-radius: 18px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  scroll-snap-align: center;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease, outline-offset 0.18s ease;
  animation: ${B6} 0.35s ease both;
  animation-delay: ${a=>a.$delay||"0s"};
  outline: ${a=>a.$isSelected?"3px solid rgba(0, 0, 0, 0.65)":"0 solid transparent"};
  &:hover { transform: translateY(-4px) scale(1.012); }
  &:active { transform: translateY(-1px) scale(0.99); }
  &:focus-visible { box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.28); }
`,$6=S.div`
  position: absolute;
  inset: 0;
  background: #e5e7eb;
  display: grid;
  place-items: center;
  img {
    width: 100%; height: 100%; object-fit: cover; display: block; background: #f9fafb;
  }
`;function U6({primary:a,fallback:l,alt:s,minDelayMs:o=800}){const[u,f]=y.useState(a||l),[p,v]=y.useState(!1),g=y.useRef(!1),m=y.useRef(Date.now()),x=y.useRef(null);y.useEffect(()=>(m.current=Date.now(),v(!1),()=>{x.current&&clearTimeout(x.current)}),[u]);const w=()=>{const j=Date.now()-m.current,R=Math.max(0,o-j);x.current=setTimeout(()=>v(!0),R)};return d.jsxs(d.Fragment,{children:[!p&&d.jsx(T6,{color:"#6b7280",size:38,speedMultiplier:.8}),d.jsx("img",{src:u,alt:s,loading:"lazy",onLoad:w,onError:()=>{if(!g.current&&l&&u!==l){g.current=!0,f(l);return}w()},style:{opacity:p?1:0,transition:"opacity 300ms ease",position:p?"relative":"absolute"}})]})}function H6({grades:a,selectedGrade:l,selectedSubject:s,selectedTeacher:o,onSelectTeacher:u,onBack:f,onConfirm:p,autoScrollMs:v=2400}){const[g,m]=y.useState(""),w=(l&&s?a?.[l]?.subjects?.[s]??[]:[]).map(M=>typeof M=="string"?{id:M,name:M,img:void 0}:M),j=M=>`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(M)}&backgroundType=gradientLinear&fontFamily=Verdana&bold=true`,R=w.filter(M=>M.name?.toLowerCase().includes(g.toLowerCase())),k=y.useRef(null),_=y.useRef(!1),U=y.useRef(0);return y.useEffect(()=>{const M=k.current;if(!M)return;const $=()=>_.current=!0,L=()=>window.setTimeout(()=>_.current=!1,400);return M.addEventListener("touchstart",$,{passive:!0}),M.addEventListener("mousedown",$),M.addEventListener("touchend",L),M.addEventListener("mouseup",L),M.addEventListener("mouseleave",L),()=>{M.removeEventListener("touchstart",$),M.removeEventListener("mousedown",$),M.removeEventListener("touchend",L),M.removeEventListener("mouseup",L),M.removeEventListener("mouseleave",L)}},[]),y.useEffect(()=>{const M=k.current;if(!M||R.length===0)return;const $=Array.from(M.querySelectorAll("[data-card='teacher']"));if($.length===0)return;const L=setInterval(()=>{if(_.current)return;U.current=(U.current+1)%$.length;const Z=$[U.current];Z&&Z.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},Math.max(1200,v));return()=>clearInterval(L)},[R.length,v]),d.jsxs(z6,{children:[d.jsx(R6,{onClick:f,"aria-label":"Go back",children:d.jsx($f,{size:24})}),d.jsxs(k6,{children:[d.jsx(A6,{children:"Choose Your Teacher"}),d.jsx(M6,{children:s?`${s} • Swipe to explore`:"Pick a subject first."})]}),d.jsxs(O6,{children:[d.jsx(N6,{size:18}),d.jsx(D6,{type:"text",placeholder:"Search teacher name...",value:g,onChange:M=>m(M.target.value),"aria-label":"Search teachers"})]}),d.jsx(_6,{ref:k,children:R.map((M,$)=>{const L=o?.id===M.id;return d.jsx(L6,{"data-card":"teacher",$isSelected:L,$delay:`${$*.05}s`,"aria-pressed":L,"aria-label":`Choose ${M.name}`,onClick:()=>{u(M),setTimeout(()=>p(M),100)},children:d.jsx($6,{children:d.jsx(U6,{primary:M.img,fallback:j(M.name),alt:M.name,minDelayMs:800})})},M.id||M.name||$)})})]})}const So={"Grade 9":{subjects:{English:[{id:"T001",name:"Priya Sharma",img:Ge.Grade9EnglishPriyaShrama},{id:"T002",name:"Vivek Sinha",img:Ge.Grade9EnglishVivekSinha}],Mathematics:[{id:"T003",name:"Mandar Borkar",img:Ge.Grade9MathMandar},{id:"T004",name:"Neha Gupta",img:Ge.Grade9MathNeha}],Science:[{id:"T005",name:"Alakh Pandey",img:Ge.Grade9ScienceAlakh},{id:"T006",name:"Sunil Kumar",img:Ge.Grade9ScienceSunil},{id:"T007",name:"Samridhi",img:Ge.Grade9ScienceSamridhi}],"Social Studies":[{id:"T008",name:"Siddharth Sir",img:Ge.Grade9SstSiddhart},{id:"T009",name:"Shinu Singh",img:Ge.Grade9SstShinu}]}},"Grade 10":{subjects:{English:[{id:"T010",name:"Anurag Tyagi",img:Ge.Grade10EnglishAnurag}],Mathematics:[{id:"T011",name:"Rohan Patel",img:""},{id:"T012",name:"Priyanka Das",img:""},{id:"T013",name:"Sanjay Kulkarni",img:""}],Science:[{id:"T014",name:"Anjali Mehta",img:""},{id:"T015",name:"Amit Chakraborty",img:""},{id:"T016",name:"Meera Nambiar",img:""}],"Social Studies":[{id:"T017",name:"Siddharth Sir",img:Ge.Grade9SstSiddhart},{id:"T018",name:"Nidhi Arora",img:""},{id:"T019",name:"Parth Ghosh",img:""}]}},"Grade 11":{subjects:{English:[{id:"T020",name:"Anurag  Tyagi",img:Ge.Grade10EnglishAnurag},{id:"T021",name:"Karan Malhotra",img:""}],Physics:[{id:"T021",name:"Nitin Agarwal",img:""},{id:"T022",name:"Rachna Bansal",img:""},{id:"T023",name:"Vivek Mishra",img:""}],Chemistry:[{id:"T024",name:"Sneha Kapoor",img:""},{id:"T025",name:"Aditya Mehta",img:""},{id:"T026",name:"Nupur Jain",img:""}],Biology:[{id:"T027",name:"Siddharth Sir",img:""},{id:"T028",name:"Radhika Sen",img:""}],Mathematics:[{id:"T029",name:"Deepak Rao",img:""},{id:"T030",name:"Shreya Iyer",img:""},{id:"T031",name:"Varun Sethi",img:""}]}},"Grade 12":{subjects:{English:[{id:"T032",name:"Sunita Verma",img:""},{id:"T033",name:"Aalok Trivedi",img:""},{id:"T034",name:"Garima Singh",img:""}],Physics:[{id:"T035",name:"Nitin Agarwal",img:""},{id:"T036",name:"Priti Saxena",img:""},{id:"T037",name:"Keshav Reddy",img:""}],Chemistry:[{id:"T038",name:"Sneha Kapoor",img:""},{id:"T039",name:"Rohan Mukherjee",img:""},{id:"T040",name:"Farah Qureshi",img:""}],Biology:[{id:"T041",name:"Sameer Kulkarni",img:""}],Mathematics:[{id:"T042",name:"Yashwant Kumar",img:""}]}}};/*! js-cookie v3.0.5 | MIT */function wo(a){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var o in s)a[o]=s[o]}return a}var G6={read:function(a){return a[0]==='"'&&(a=a.slice(1,-1)),a.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(a){return encodeURIComponent(a).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function ff(a,l){function s(u,f,p){if(!(typeof document>"u")){p=wo({},l,p),typeof p.expires=="number"&&(p.expires=new Date(Date.now()+p.expires*864e5)),p.expires&&(p.expires=p.expires.toUTCString()),u=encodeURIComponent(u).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var v="";for(var g in p)p[g]&&(v+="; "+g,p[g]!==!0&&(v+="="+p[g].split(";")[0]));return document.cookie=u+"="+a.write(f,u)+v}}function o(u){if(!(typeof document>"u"||arguments.length&&!u)){for(var f=document.cookie?document.cookie.split("; "):[],p={},v=0;v<f.length;v++){var g=f[v].split("="),m=g.slice(1).join("=");try{var x=decodeURIComponent(g[0]);if(p[x]=a.read(m,x),u===x)break}catch{}}return u?p[u]:p}}return Object.create({set:s,get:o,remove:function(u,f){s(u,"",wo({},f,{expires:-1}))},withAttributes:function(u){return ff(this.converter,wo({},this.attributes,u))},withConverter:function(u){return ff(wo({},this.converter,u),this.attributes)}},{attributes:{value:Object.freeze(l)},converter:{value:Object.freeze(a)}})}var mg=ff(G6,{path:"/"});const tn={bg:"#ffffff",text:"#0f172a",subtext:"#475569",border:"#e5e7eb",card:"#ffffff",soft:"#f3f4f6",soft2:"#f8fafc",focus:"#d1d5db",btn:"#e5e7eb",btnText:"#0f172a"},Y6=ng`
  * { -webkit-tap-highlight-color: transparent; }
  :root { color-scheme: light; }
  body {
    margin: 0;
    background: ${tn.bg};
    color: ${tn.text};
    font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
  }
`,q6=Bt`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`,X6=Bt`
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: translateX(0); }
`,V6=Bt`
  0% { transform: scale(.96); }
  100% { transform: scale(1); }
`,Q6=S.div`
  min-height: 90svh;
  display: flex;
  align-items: ${({alignTop:a})=>a?"flex-start":"center"};
  justify-content: center;
  padding: ${({alignTop:a})=>a?"32px 16px 16px":"16px"};
  background: ${tn.bg};
  animation: ${q6} 0.42s ease-out both;
`,K6=S.div`
  width: 100%;
  max-width: 720px;
`,Z6=S.div`
  background: ${tn.card};
  border: ${({step:a})=>a===3?"none":`1px solid ${tn.border}`};
  border-radius: 16px;
  padding: 16px;
  box-shadow: ${({step:a})=>a===3?"none":"0 8px 24px rgba(0,0,0,0.05)"};
  transition: transform .12s ease;
  animation: ${V6} .18s ease-out both;
`,J6=S.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 12px;
  animation: ${X6} 0.4s ease-out both;
`,F6=S.div`
  height: 8px;
  width: 12px;
  border-radius: 999px;
  background: ${tn.border};
  transition: width 180ms, background-color 180ms;
  ${({active:a})=>a&&Ln`
      width: 32px;
      background: ${tn.focus};
    `}
`,Uf="instalearn:wizard";function W6(a){try{sessionStorage.setItem(Uf,JSON.stringify(a))}catch{console.error("Failed to save wizard state")}}function I6(){try{const a=sessionStorage.getItem(Uf);return a?JSON.parse(a):null}catch{return null}}function P6(){try{sessionStorage.removeItem(Uf)}catch{console.error("Failed to clear wizard state")}}function eS(){const[a]=performance.getEntriesByType("navigation");return a&&"type"in a?a.type==="reload":performance&&performance.navigation?performance.navigation.type===1:!1}function tS(){const a=bf(),[l,s]=y.useState(0),[o,u]=y.useState(""),[f,p]=y.useState(""),[v,g]=y.useState(null),m=y.useRef(!1);y.useEffect(()=>{if(m.current)return;if(m.current=!0,eS()){P6(),s(0),u(""),p(""),g(null);return}const j=I6();j&&typeof j=="object"?(s(Number(j.step)||0),u(j.selectedGrade||""),p(j.selectedSubject||""),g(j.selectedTeacher||null)):s(0)},[]),y.useEffect(()=>{W6({step:l,selectedGrade:o,selectedSubject:f,selectedTeacher:v})},[l,o,f,v]);const x=()=>v&&typeof v=="object"&&v.id?v:(o&&f&&So[o]?.subjects?.[f]||[])[0]||null,w=j=>{const R=j||x();!o||!f||!R||!R.id||(mg.set("instalearn_teacher_id",R.id,{expires:30,sameSite:"lax"}),a("/instalearn/teacher",{state:{grade:o,subject:f,teacherId:R.id}}))};return d.jsxs(d.Fragment,{children:[d.jsx(Y6,{}),d.jsx(Q6,{alignTop:l===3,children:d.jsx(K6,{children:d.jsxs(Z6,{step:l,children:[d.jsx(J6,{children:[1,2,3].map(j=>d.jsx(F6,{active:l===j},j))}),l===0&&d.jsx(J3,{onStart:()=>s(1),ui:tn}),l===1&&d.jsx(s6,{ui:tn,grades:So,selectedGrade:o,onSelect:j=>{u(j),p(""),g(null)},onBack:()=>s(0),onNext:()=>o&&s(2)}),l===2&&d.jsx(x6,{ui:tn,grades:So,selectedGrade:o,selectedSubject:f,onSelectSubject:j=>{p(j),g(null)},onBack:()=>s(1),onNext:()=>f&&s(3)}),l===3&&d.jsx(H6,{ui:tn,grades:So,selectedGrade:o,selectedSubject:f,selectedTeacher:v,onSelectTeacher:j=>{g(j)},onBack:()=>s(2),onConfirm:w})]})})})]})}function nS(a){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function gg(a){return ke({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function aS(a){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function iS(a){return ke({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function lS(a){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(a)}function Bm(a){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(a)}function Lm(a){return ke({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function rS(a){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const $m="studentProfile",ut={card:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:14,padding:16,boxShadow:"0 6px 16px rgba(0,0,0,.06)"},row:{display:"flex",alignItems:"center",gap:12},button:{display:"inline-flex",alignItems:"center",gap:8,border:"1px solid #e5e7eb",background:"#fff",padding:"10px 12px",borderRadius:10,fontWeight:700,cursor:"pointer"},primary:{background:"#0ea5e9",color:"#fff",border:"1px solid #0ea5e9"},input:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1.5px solid #e5e7eb",fontSize:14}};function Mu(a=""){const[l="",s=""]=a.split(" ");return(l[0]||"").toUpperCase()+(s[0]||"").toUpperCase()}function oS(){const[a,l]=y.useState({name:"Student Name",email:"student@example.com",avatar:"SN",booksRead:24,hoursSpent:156}),[s,o]=y.useState(!1),[u,f]=y.useState(a);y.useEffect(()=>{try{const g=localStorage.getItem($m);if(g){const m=JSON.parse(g);l(x=>({...x,...m})),f(x=>({...x,...m}))}}catch{console.log("error")}},[]);const p=y.useMemo(()=>((s?u.avatar:a.avatar)||Mu(s?u.name:a.name)||Mu(a.name)).slice(0,2).toUpperCase(),[s,u.avatar,u.name,a.avatar,a.name]),v=()=>{const g={...a,name:u.name?.trim()||a.name,email:u.email?.trim()||a.email,avatar:u.avatar?.trim()||Mu(u.name||a.name),booksRead:Number.isFinite(u.booksRead)?u.booksRead:a.booksRead,hoursSpent:Number.isFinite(u.hoursSpent)?u.hoursSpent:a.hoursSpent};l(g),localStorage.setItem($m,JSON.stringify(g)),o(!1)};return d.jsx("div",{style:{minHeight:"100dvh",background:"#f8fafc",padding:16,fontFamily:"Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"},children:d.jsxs("div",{style:{maxWidth:720,margin:"0 auto",display:"grid",gap:16},children:[d.jsx("section",{style:ut.card,children:d.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[d.jsx("div",{"aria-label":"User avatar",style:{width:84,height:84,borderRadius:"50%",background:"linear-gradient(135deg,#0ea5e9,#22c55e)",color:"#fff",display:"grid",placeItems:"center",fontWeight:900,fontSize:28},children:p||d.jsx(rS,{})}),d.jsxs("div",{style:{flex:1},children:[d.jsx("h1",{style:{margin:0,fontSize:22},children:a.name}),d.jsxs("p",{style:{margin:"6px 0 0 0",color:"#64748b"},children:[d.jsx(lS,{style:{marginRight:6}})," ",a.email]})]}),s?d.jsxs("div",{style:{display:"flex",gap:8},children:[d.jsxs("button",{style:{...ut.button,...ut.primary},onClick:v,children:[d.jsx(Bm,{})," Save"]}),d.jsxs("button",{style:ut.button,onClick:()=>{f(a),o(!1)},children:[d.jsx(Lm,{})," Cancel"]})]}):d.jsxs("button",{style:ut.button,onClick:()=>o(!0),children:[d.jsx(iS,{})," Edit"]})]})}),d.jsx("section",{style:{...ut.card,display:"grid",gap:12},children:d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[d.jsx("div",{style:{...ut.card,padding:12},children:d.jsxs("div",{style:ut.row,children:[d.jsx(nS,{}),d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:12,color:"#6b7280"},children:"Books Read"}),d.jsx("div",{style:{fontWeight:800,fontSize:18},children:a.booksRead})]})]})}),d.jsx("div",{style:{...ut.card,padding:12},children:d.jsxs("div",{style:ut.row,children:[d.jsx(aS,{}),d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:12,color:"#6b7280"},children:"Study Hours"}),d.jsx("div",{style:{fontWeight:800,fontSize:18},children:a.hoursSpent})]})]})})]})}),s&&d.jsxs("section",{style:{...ut.card,display:"grid",gap:12},"aria-label":"Edit profile form",children:[d.jsxs("label",{style:{display:"grid",gap:6},children:[d.jsx("span",{style:{fontWeight:700},children:"Name"}),d.jsx("input",{style:ut.input,value:u.name,onChange:g=>f(m=>({...m,name:g.target.value})),placeholder:"Your full name"})]}),d.jsxs("label",{style:{display:"grid",gap:6},children:[d.jsx("span",{style:{fontWeight:700},children:"Email"}),d.jsx("input",{type:"email",style:ut.input,value:u.email,onChange:g=>f(m=>({...m,email:g.target.value})),placeholder:"you@example.com"})]}),d.jsxs("label",{style:{display:"grid",gap:6},children:[d.jsx("span",{style:{fontWeight:700},children:"Avatar Initials"}),d.jsx("input",{style:ut.input,value:u.avatar,onChange:g=>f(m=>({...m,avatar:g.target.value.toUpperCase().slice(0,2)})),placeholder:"e.g., SN"})]}),d.jsxs("div",{style:{display:"flex",gap:8},children:[d.jsxs("button",{style:{...ut.button,...ut.primary},onClick:v,children:[d.jsx(Bm,{})," Save"]}),d.jsxs("button",{style:ut.button,onClick:()=>{f(a),o(!1)},children:[d.jsx(Lm,{})," Cancel"]})]})]})]})})}const sS=Bt`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,cS=Bt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,uS=Bt`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,fS=Bt`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,dS=S.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,hS=S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Ou=S.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${sS} 20s infinite ease-in-out;

  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    width: 200px;
    height: 200px;
    top: 60%;
    right: 15%;
    animation-delay: 3s;
  }

  &:nth-child(3) {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: 20%;
    animation-delay: 6s;
  }
`,pS=S.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${cS} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,mS=S.div`
  margin-bottom: 0px;
  position: relative;
`,gS=S.div`
  font-size: 70px;
  animation: ${uS} 2s infinite;
`,yS=S.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,vS=S.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,bS=S.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,xS=S.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${fS} 3s ease-in-out infinite;
`,SS=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Nu=S.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,Du=S.div`
  font-size:30px;
  margin-bottom: 10px;
`,_u=S.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,wS=S.button`
  margin-top: 30px;
  padding: 15px 40px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: ${a=>a.$notified?"linear-gradient(135deg, #48bb78 0%, #38a169 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: translateY(0);
  }
`;function Um(){const[a,l]=y.useState(!1),s=()=>{l(!0),setTimeout(()=>{l(!1)},2e3)};return d.jsxs(dS,{children:[d.jsxs(hS,{children:[d.jsx(Ou,{}),d.jsx(Ou,{}),d.jsx(Ou,{})]}),d.jsxs(pS,{children:[d.jsx(mS,{children:d.jsx(gS,{children:"🚧"})}),d.jsx(yS,{children:"Building Something Amazing"}),d.jsx(vS,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),d.jsx(bS,{children:d.jsx(xS,{})}),d.jsxs(SS,{children:[d.jsxs(Nu,{children:[d.jsx(Du,{children:"⚡"}),d.jsx(_u,{children:"Lightning Fast"})]}),d.jsxs(Nu,{children:[d.jsx(Du,{children:"🎨"}),d.jsx(_u,{children:"Beautiful Design"})]}),d.jsxs(Nu,{children:[d.jsx(Du,{children:"🔒"}),d.jsx(_u,{children:"Secure & Private"})]})]}),d.jsx(wS,{onClick:s,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var Bu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Hm;function ES(){return Hm||(Hm=1,(function(a){(function(){var l={}.hasOwnProperty;function s(){for(var f="",p=0;p<arguments.length;p++){var v=arguments[p];v&&(f=u(f,o(v)))}return f}function o(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return s.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var p="";for(var v in f)l.call(f,v)&&f[v]&&(p=u(p,v));return p}function u(f,p){return p?f?f+" "+p:f+p:f}a.exports?(s.default=s,a.exports=s):window.classNames=s})()})(Bu)),Bu.exports}var jS=ES();const it=Vl(jS);function df(){return df=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var o in s)({}).hasOwnProperty.call(s,o)&&(a[o]=s[o])}return a},df.apply(null,arguments)}function yg(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)!==-1)continue;s[o]=a[o]}return s}function Gm(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function CS(a){var l=TS(a,"string");return typeof l=="symbol"?l:String(l)}function TS(a,l){if(typeof a!="object"||a===null)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var o=s.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function zS(a,l,s){var o=y.useRef(a!==void 0),u=y.useState(l),f=u[0],p=u[1],v=a!==void 0,g=o.current;return o.current=v,!v&&g&&f!==l&&p(l),[v?a:f,y.useCallback(function(m){for(var x=arguments.length,w=new Array(x>1?x-1:0),j=1;j<x;j++)w[j-1]=arguments[j];s&&s.apply(void 0,[m].concat(w)),p(m)},[s])]}function vg(a,l){return Object.keys(l).reduce(function(s,o){var u,f=s,p=f[Gm(o)],v=f[o],g=yg(f,[Gm(o),o].map(CS)),m=l[o],x=zS(v,p,a[m]),w=x[0],j=x[1];return df({},g,(u={},u[o]=w,u[m]=j,u))},a)}function hf(a,l){return hf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,o){return s.__proto__=o,s},hf(a,l)}function RS(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,hf(a,l)}const kS=["xxl","xl","lg","md","sm","xs"],AS="xs",bg=y.createContext({prefixes:{},breakpoints:kS,minBreakpoint:AS}),{Consumer:kE,Provider:AE}=bg;function Et(a,l){const{prefixes:s}=y.useContext(bg);return a||s[l]||l}function Hf(a){return a&&a.ownerDocument||document}function MS(a){var l=Hf(a);return l&&l.defaultView||window}function OS(a,l){return MS(a).getComputedStyle(a,l)}var NS=/([A-Z])/g;function DS(a){return a.replace(NS,"-$1").toLowerCase()}var _S=/^ms-/;function Eo(a){return DS(a).replace(_S,"-ms-")}var BS=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function LS(a){return!!(a&&BS.test(a))}function _n(a,l){var s="",o="";if(typeof l=="string")return a.style.getPropertyValue(Eo(l))||OS(a).getPropertyValue(Eo(l));Object.keys(l).forEach(function(u){var f=l[u];!f&&f!==0?a.style.removeProperty(Eo(u)):LS(u)?o+=u+"("+f+") ":s+=Eo(u)+": "+f+";"}),o&&(s+="transform: "+o+";"),a.style.cssText+=";"+s}var Lu={exports:{}},$u,Ym;function $S(){if(Ym)return $u;Ym=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return $u=a,$u}var Uu,qm;function US(){if(qm)return Uu;qm=1;var a=$S();function l(){}function s(){}return s.resetWarningCache=l,Uu=function(){function o(p,v,g,m,x,w){if(w!==a){var j=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw j.name="Invariant Violation",j}}o.isRequired=o;function u(){return o}var f={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:u,element:o,elementType:o,instanceOf:u,node:o,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:s,resetWarningCache:l};return f.PropTypes=f,f},Uu}var Xm;function HS(){return Xm||(Xm=1,Lu.exports=US()()),Lu.exports}var GS=HS();const Hu=Vl(GS),Vm={disabled:!1},xg=Re.createContext(null);var YS=function(l){return l.scrollTop},Hl="unmounted",ha="exited",en="entering",On="entered",Xl="exiting",Un=(function(a){RS(l,a);function l(o,u){var f;f=a.call(this,o,u)||this;var p=u,v=p&&!p.isMounting?o.enter:o.appear,g;return f.appearStatus=null,o.in?v?(g=ha,f.appearStatus=en):g=On:o.unmountOnExit||o.mountOnEnter?g=Hl:g=ha,f.state={status:g},f.nextCallback=null,f}l.getDerivedStateFromProps=function(u,f){var p=u.in;return p&&f.status===Hl?{status:ha}:null};var s=l.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(u){var f=null;if(u!==this.props){var p=this.state.status;this.props.in?p!==en&&p!==On&&(f=en):(p===en||p===On)&&(f=Xl)}this.updateStatus(!1,f)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var u=this.props.timeout,f,p,v;return f=p=v=u,u!=null&&typeof u!="number"&&(f=u.exit,p=u.enter,v=u.appear!==void 0?u.appear:p),{exit:f,enter:p,appear:v}},s.updateStatus=function(u,f){if(u===void 0&&(u=!1),f!==null)if(this.cancelNextCallback(),f===en){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Ri.findDOMNode(this);p&&YS(p)}this.performEnter(u)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ha&&this.setState({status:Hl})},s.performEnter=function(u){var f=this,p=this.props.enter,v=this.context?this.context.isMounting:u,g=this.props.nodeRef?[v]:[Ri.findDOMNode(this),v],m=g[0],x=g[1],w=this.getTimeouts(),j=v?w.appear:w.enter;if(!u&&!p||Vm.disabled){this.safeSetState({status:On},function(){f.props.onEntered(m)});return}this.props.onEnter(m,x),this.safeSetState({status:en},function(){f.props.onEntering(m,x),f.onTransitionEnd(j,function(){f.safeSetState({status:On},function(){f.props.onEntered(m,x)})})})},s.performExit=function(){var u=this,f=this.props.exit,p=this.getTimeouts(),v=this.props.nodeRef?void 0:Ri.findDOMNode(this);if(!f||Vm.disabled){this.safeSetState({status:ha},function(){u.props.onExited(v)});return}this.props.onExit(v),this.safeSetState({status:Xl},function(){u.props.onExiting(v),u.onTransitionEnd(p.exit,function(){u.safeSetState({status:ha},function(){u.props.onExited(v)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(u,f){f=this.setNextCallback(f),this.setState(u,f)},s.setNextCallback=function(u){var f=this,p=!0;return this.nextCallback=function(v){p&&(p=!1,f.nextCallback=null,u(v))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},s.onTransitionEnd=function(u,f){this.setNextCallback(f);var p=this.props.nodeRef?this.props.nodeRef.current:Ri.findDOMNode(this),v=u==null&&!this.props.addEndListener;if(!p||v){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var g=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],m=g[0],x=g[1];this.props.addEndListener(m,x)}u!=null&&setTimeout(this.nextCallback,u)},s.render=function(){var u=this.state.status;if(u===Hl)return null;var f=this.props,p=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var v=yg(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Re.createElement(xg.Provider,{value:null},typeof p=="function"?p(u,v):Re.cloneElement(Re.Children.only(p),v))},l})(Re.Component);Un.contextType=xg;Un.propTypes={};function Ci(){}Un.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ci,onEntering:Ci,onEntered:Ci,onExit:Ci,onExiting:Ci,onExited:Ci};Un.UNMOUNTED=Hl;Un.EXITED=ha;Un.ENTERING=en;Un.ENTERED=On;Un.EXITING=Xl;function qS(a){return a.code==="Escape"||a.keyCode===27}function XS(){const a=y.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Hi(a){if(!a||typeof a=="function")return null;const{major:l}=XS();return l>=19?a.props.ref:a.ref}const Wo=!!(typeof window<"u"&&window.document&&window.document.createElement);var pf=!1,mf=!1;try{var Gu={get passive(){return pf=!0},get once(){return mf=pf=!0}};Wo&&(window.addEventListener("test",Gu,Gu),window.removeEventListener("test",Gu,!0))}catch{}function VS(a,l,s,o){if(o&&typeof o!="boolean"&&!mf){var u=o.once,f=o.capture,p=s;!mf&&u&&(p=s.__once||function v(g){this.removeEventListener(l,v,f),s.call(this,g)},s.__once=p),a.addEventListener(l,p,pf?o:f)}a.addEventListener(l,s,o)}function QS(a,l,s,o){var u=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(l,s,u),s.__once&&a.removeEventListener(l,s.__once,u)}function Go(a,l,s,o){return VS(a,l,s,o),function(){QS(a,l,s,o)}}function KS(a,l,s,o){if(o===void 0&&(o=!0),a){var u=document.createEvent("HTMLEvents");u.initEvent(l,s,o),a.dispatchEvent(u)}}function ZS(a){var l=_n(a,"transitionDuration")||"",s=l.indexOf("ms")===-1?1e3:1;return parseFloat(l)*s}function JS(a,l,s){s===void 0&&(s=5);var o=!1,u=setTimeout(function(){o||KS(a,"transitionend",!0)},l+s),f=Go(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(u),f()}}function FS(a,l,s,o){s==null&&(s=ZS(a)||0);var u=JS(a,s,o),f=Go(a,"transitionend",l);return function(){u(),f()}}function Qm(a,l){const s=_n(a,l)||"",o=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*o}function Gf(a,l){const s=Qm(a,"transitionDuration"),o=Qm(a,"transitionDelay"),u=FS(a,f=>{f.target===a&&(u(),l(f))},s+o)}function $l(...a){return a.filter(l=>l!=null).reduce((l,s)=>{if(typeof s!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return l===null?s:function(...u){l.apply(this,u),s.apply(this,u)}},null)}function Sg(a){a.offsetHeight}const Km=a=>!a||typeof a=="function"?a:l=>{a.current=l};function WS(a,l){const s=Km(a),o=Km(l);return u=>{s&&s(u),o&&o(u)}}function IS(a,l){return y.useMemo(()=>WS(a,l),[a,l])}function PS(a){return a&&"setState"in a?Ri.findDOMNode(a):a??null}const Io=Re.forwardRef(({onEnter:a,onEntering:l,onEntered:s,onExit:o,onExiting:u,onExited:f,addEndListener:p,children:v,childRef:g,...m},x)=>{const w=y.useRef(null),j=IS(w,g),R=H=>{j(PS(H))},k=H=>V=>{H&&w.current&&H(w.current,V)},_=y.useCallback(k(a),[a]),U=y.useCallback(k(l),[l]),M=y.useCallback(k(s),[s]),$=y.useCallback(k(o),[o]),L=y.useCallback(k(u),[u]),Z=y.useCallback(k(f),[f]),J=y.useCallback(k(p),[p]);return d.jsx(Un,{ref:x,...m,onEnter:_,onEntered:M,onEntering:U,onExit:$,onExited:Z,onExiting:L,addEndListener:J,nodeRef:w,children:typeof v=="function"?(H,V)=>v(H,{...V,ref:R}):Re.cloneElement(v,{ref:R})})});Io.displayName="TransitionWrapper";const e8={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function t8(a,l){const s=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=l[s],u=e8[a];return o+parseInt(_n(l,u[0]),10)+parseInt(_n(l,u[1]),10)}const n8={[ha]:"collapse",[Xl]:"collapsing",[en]:"collapsing",[On]:"collapse show"},wg=Re.forwardRef(({onEnter:a,onEntering:l,onEntered:s,onExit:o,onExiting:u,className:f,children:p,dimension:v="height",in:g=!1,timeout:m=300,mountOnEnter:x=!1,unmountOnExit:w=!1,appear:j=!1,getDimensionValue:R=t8,...k},_)=>{const U=typeof v=="function"?v():v,M=y.useMemo(()=>$l(H=>{H.style[U]="0"},a),[U,a]),$=y.useMemo(()=>$l(H=>{const V=`scroll${U[0].toUpperCase()}${U.slice(1)}`;H.style[U]=`${H[V]}px`},l),[U,l]),L=y.useMemo(()=>$l(H=>{H.style[U]=null},s),[U,s]),Z=y.useMemo(()=>$l(H=>{H.style[U]=`${R(U,H)}px`,Sg(H)},o),[o,R,U]),J=y.useMemo(()=>$l(H=>{H.style[U]=null},u),[U,u]);return d.jsx(Io,{ref:_,addEndListener:Gf,...k,"aria-expanded":k.role?g:null,onEnter:M,onEntering:$,onEntered:L,onExit:Z,onExiting:J,childRef:Hi(p),in:g,timeout:m,mountOnEnter:x,unmountOnExit:w,appear:j,children:(H,V)=>Re.cloneElement(p,{...V,className:it(f,p.props.className,n8[H],U==="width"&&"collapse-horizontal")})})});wg.displayName="Collapse";function a8(a){const l=y.useRef(a);return y.useEffect(()=>{l.current=a},[a]),l}function Po(a){const l=a8(a);return y.useCallback(function(...s){return l.current&&l.current(...s)},[l])}const i8=(a=>y.forwardRef((l,s)=>d.jsx("div",{...l,ref:s,className:it(l.className,a)})));function l8(a){const l=y.useRef(a);return y.useEffect(()=>{l.current=a},[a]),l}function Nn(a){const l=l8(a);return y.useCallback(function(...s){return l.current&&l.current(...s)},[l])}function r8(){const a=y.useRef(!0),l=y.useRef(()=>a.current);return y.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),l.current}function o8(a){const l=y.useRef(null);return y.useEffect(()=>{l.current=a}),l.current}const s8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",c8=typeof document<"u",Zm=c8||s8?y.useLayoutEffect:y.useEffect,u8=["as","disabled"];function f8(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}function d8(a){return!a||a.trim()==="#"}function Eg({tagName:a,disabled:l,href:s,target:o,rel:u,role:f,onClick:p,tabIndex:v=0,type:g}){a||(s!=null||o!=null||u!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:g||"button",disabled:l},m];const x=j=>{if((l||a==="a"&&d8(s))&&j.preventDefault(),l){j.stopPropagation();return}p?.(j)},w=j=>{j.key===" "&&(j.preventDefault(),x(j))};return a==="a"&&(s||(s="#"),l&&(s=void 0)),[{role:f??"button",disabled:void 0,tabIndex:l?void 0:v,href:s,target:a==="a"?o:void 0,"aria-disabled":l||void 0,rel:a==="a"?u:void 0,onClick:x,onKeyDown:w},m]}const jg=y.forwardRef((a,l)=>{let{as:s,disabled:o}=a,u=f8(a,u8);const[f,{tagName:p}]=Eg(Object.assign({tagName:s,disabled:o},u));return d.jsx(p,Object.assign({},u,f,{ref:l}))});jg.displayName="Button";const h8=["onKeyDown"];function p8(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}function m8(a){return!a||a.trim()==="#"}const Cg=y.forwardRef((a,l)=>{let{onKeyDown:s}=a,o=p8(a,h8);const[u]=Eg(Object.assign({tagName:"a"},o)),f=Nn(p=>{u.onKeyDown(p),s?.(p)});return m8(o.href)||o.role==="button"?d.jsx("a",Object.assign({ref:l},o,u,{onKeyDown:f})):d.jsx("a",Object.assign({ref:l},o,{onKeyDown:s}))});Cg.displayName="Anchor";const g8={[en]:"show",[On]:"show"},Tg=y.forwardRef(({className:a,children:l,transitionClasses:s={},onEnter:o,...u},f)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...u},v=y.useCallback((g,m)=>{Sg(g),o?.(g,m)},[o]);return d.jsx(Io,{ref:f,addEndListener:Gf,...p,onEnter:v,childRef:Hi(l),children:(g,m)=>y.cloneElement(l,{...m,className:it("fade",a,l.props.className,g8[g],s[g])})})});Tg.displayName="Fade";const y8={"aria-label":Hu.string,onClick:Hu.func,variant:Hu.oneOf(["white"])},Yf=y.forwardRef(({className:a,variant:l,"aria-label":s="Close",...o},u)=>d.jsx("button",{ref:u,type:"button",className:it("btn-close",l&&`btn-close-${l}`,a),"aria-label":s,...o}));Yf.displayName="CloseButton";Yf.propTypes=y8;const zg=y.createContext(null);zg.displayName="CardHeaderContext";const Rg=y.forwardRef(({bsPrefix:a,fluid:l=!1,as:s="div",className:o,...u},f)=>{const p=Et(a,"container"),v=typeof l=="string"?`-${l}`:"-fluid";return d.jsx(s,{ref:f,...u,className:it(o,l?`${p}${v}`:p)})});Rg.displayName="Container";var v8=Function.prototype.bind.call(Function.prototype.call,[].slice);function Da(a,l){return v8(a.querySelectorAll(l))}function b8(){const[,a]=y.useReducer(l=>l+1,0);return a}function Jm(a,l){if(a.contains)return a.contains(l);if(a.compareDocumentPosition)return a===l||!!(a.compareDocumentPosition(l)&16)}const Yo=y.createContext(null),qf=(a,l=null)=>a!=null?String(a):l||null,Xf=y.createContext(null);Xf.displayName="NavContext";const x8="data-rr-ui-",S8="rrUi";function es(a){return`${x8}${a}`}function w8(a){return`${S8}${a}`}const kg=y.createContext(Wo?window:void 0);kg.Provider;function Vf(){return y.useContext(kg)}const E8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",j8=typeof document<"u",C8=j8||E8?y.useLayoutEffect:y.useEffect,Gi=y.createContext(null);Gi.displayName="NavbarContext";const Fm=a=>!a||typeof a=="function"?a:l=>{a.current=l};function T8(a,l){const s=Fm(a),o=Fm(l);return u=>{s&&s(u),o&&o(u)}}function ts(a,l){return y.useMemo(()=>T8(a,l),[a,l])}const Ag=y.createContext(null),z8=["as","active","eventKey"];function R8(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}function Mg({key:a,onClick:l,active:s,id:o,role:u,disabled:f}){const p=y.useContext(Yo),v=y.useContext(Xf),g=y.useContext(Ag);let m=s;const x={role:u};if(v){!u&&v.role==="tablist"&&(x.role="tab");const w=v.getControllerId(a??null),j=v.getControlledId(a??null);x[es("event-key")]=a,x.id=w||o,m=s==null&&a!=null?v.activeKey===a:s,(m||!(g!=null&&g.unmountOnExit)&&!(g!=null&&g.mountOnEnter))&&(x["aria-controls"]=j)}return x.role==="tab"&&(x["aria-selected"]=m,m||(x.tabIndex=-1),f&&(x.tabIndex=-1,x["aria-disabled"]=!0)),x.onClick=Nn(w=>{f||(l?.(w),a!=null&&p&&!w.isPropagationStopped()&&p(a,w))}),[x,{isActive:m}]}const Og=y.forwardRef((a,l)=>{let{as:s=jg,active:o,eventKey:u}=a,f=R8(a,z8);const[p,v]=Mg(Object.assign({key:qf(u,f.href),active:o},f));return p[es("active")]=v.isActive,d.jsx(s,Object.assign({},f,p,{ref:l}))});Og.displayName="NavItem";const k8=["as","onSelect","activeKey","role","onKeyDown"];function A8(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}const Wm=()=>{},Im=es("event-key"),Ng=y.forwardRef((a,l)=>{let{as:s="div",onSelect:o,activeKey:u,role:f,onKeyDown:p}=a,v=A8(a,k8);const g=b8(),m=y.useRef(!1),x=y.useContext(Yo),w=y.useContext(Ag);let j,R;w&&(f=f||"tablist",u=w.activeKey,j=w.getControlledId,R=w.getControllerId);const k=y.useRef(null),_=L=>{const Z=k.current;if(!Z)return null;const J=Da(Z,`[${Im}]:not([aria-disabled=true])`),H=Z.querySelector("[aria-selected=true]");if(!H||H!==document.activeElement)return null;const V=J.indexOf(H);if(V===-1)return null;let ne=V+L;return ne>=J.length&&(ne=0),ne<0&&(ne=J.length-1),J[ne]},U=(L,Z)=>{L!=null&&(o?.(L,Z),x?.(L,Z))},M=L=>{if(p?.(L),!w)return;let Z;switch(L.key){case"ArrowLeft":case"ArrowUp":Z=_(-1);break;case"ArrowRight":case"ArrowDown":Z=_(1);break;default:return}Z&&(L.preventDefault(),U(Z.dataset[w8("EventKey")]||null,L),m.current=!0,g())};y.useEffect(()=>{if(k.current&&m.current){const L=k.current.querySelector(`[${Im}][aria-selected=true]`);L?.focus()}m.current=!1});const $=ts(l,k);return d.jsx(Yo.Provider,{value:U,children:d.jsx(Xf.Provider,{value:{role:f,activeKey:qf(u),getControlledId:j||Wm,getControllerId:R||Wm},children:d.jsx(s,Object.assign({},v,{onKeyDown:M,ref:$,role:f}))})})});Ng.displayName="Nav";const M8=Object.assign(Ng,{Item:Og});function Yu(a){a===void 0&&(a=Hf());try{var l=a.activeElement;return!l||!l.nodeName?null:l}catch{return a.body}}function O8(a){const l=y.useRef(a);return l.current=a,l}function N8(a){const l=O8(a);y.useEffect(()=>()=>l.current(),[])}function D8(a=document){const l=a.defaultView;return Math.abs(l.innerWidth-a.documentElement.clientWidth)}const Pm=es("modal-open");class Qf{constructor({ownerDocument:l,handleContainerOverflow:s=!0,isRTL:o=!1}={}){this.handleContainerOverflow=s,this.isRTL=o,this.modals=[],this.ownerDocument=l}getScrollbarWidth(){return D8(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(l){}removeModalAttributes(l){}setContainerStyle(l){const s={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",u=this.getElement();l.style={overflow:u.style.overflow,[o]:u.style[o]},l.scrollBarWidth&&(s[o]=`${parseInt(_n(u,o)||"0",10)+l.scrollBarWidth}px`),u.setAttribute(Pm,""),_n(u,s)}reset(){[...this.modals].forEach(l=>this.remove(l))}removeContainerStyle(l){const s=this.getElement();s.removeAttribute(Pm),Object.assign(s.style,l.style)}add(l){let s=this.modals.indexOf(l);return s!==-1||(s=this.modals.length,this.modals.push(l),this.setModalAttributes(l),s!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),s}remove(l){const s=this.modals.indexOf(l);s!==-1&&(this.modals.splice(s,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(l))}isTopModal(l){return!!this.modals.length&&this.modals[this.modals.length-1]===l}}const qu=(a,l)=>Wo?a==null?(l||Hf()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function _8(a,l){const s=Vf(),[o,u]=y.useState(()=>qu(a,s?.document));if(!o){const f=qu(a);f&&u(f)}return y.useEffect(()=>{},[l,o]),y.useEffect(()=>{const f=qu(a);f!==o&&u(f)},[a,o]),o}function B8({children:a,in:l,onExited:s,mountOnEnter:o,unmountOnExit:u}){const f=y.useRef(null),p=y.useRef(l),v=Nn(s);y.useEffect(()=>{l?p.current=!0:v(f.current)},[l,v]);const g=ts(f,Hi(a)),m=y.cloneElement(a,{ref:g});return l?m:u||!p.current&&o?null:m}const L8=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function $8(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}function U8(a){let{onEnter:l,onEntering:s,onEntered:o,onExit:u,onExiting:f,onExited:p,addEndListener:v,children:g}=a,m=$8(a,L8);const x=y.useRef(null),w=ts(x,Hi(g)),j=Z=>J=>{Z&&x.current&&Z(x.current,J)},R=y.useCallback(j(l),[l]),k=y.useCallback(j(s),[s]),_=y.useCallback(j(o),[o]),U=y.useCallback(j(u),[u]),M=y.useCallback(j(f),[f]),$=y.useCallback(j(p),[p]),L=y.useCallback(j(v),[v]);return Object.assign({},m,{nodeRef:x},l&&{onEnter:R},s&&{onEntering:k},o&&{onEntered:_},u&&{onExit:U},f&&{onExiting:M},p&&{onExited:$},v&&{addEndListener:L},{children:typeof g=="function"?(Z,J)=>g(Z,Object.assign({},J,{ref:w})):y.cloneElement(g,{ref:w})})}const H8=["component"];function G8(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}const Y8=y.forwardRef((a,l)=>{let{component:s}=a,o=G8(a,H8);const u=U8(o);return d.jsx(s,Object.assign({ref:l},u))});function q8({in:a,onTransition:l}){const s=y.useRef(null),o=y.useRef(!0),u=Nn(l);return Zm(()=>{if(!s.current)return;let f=!1;return u({in:a,element:s.current,initial:o.current,isStale:()=>f}),()=>{f=!0}},[a,u]),Zm(()=>(o.current=!1,()=>{o.current=!0}),[]),s}function X8({children:a,in:l,onExited:s,onEntered:o,transition:u}){const[f,p]=y.useState(!l);l&&f&&p(!1);const v=q8({in:!!l,onTransition:m=>{const x=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(p(!0),s?.(m.element)))};Promise.resolve(u(m)).then(x,w=>{throw m.in||p(!0),w})}}),g=ts(v,Hi(a));return f&&!l?null:y.cloneElement(a,{ref:g})}function e1(a,l,s){return a?d.jsx(Y8,Object.assign({},s,{component:a})):l?d.jsx(X8,Object.assign({},s,{transition:l})):d.jsx(B8,Object.assign({},s))}const V8=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Q8(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}let Xu;function K8(a){return Xu||(Xu=new Qf({ownerDocument:a?.document})),Xu}function Z8(a){const l=Vf(),s=a||K8(l),o=y.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>s.add(o.current),remove:()=>s.remove(o.current),isTopModal:()=>s.isTopModal(o.current),setDialogRef:y.useCallback(u=>{o.current.dialog=u},[]),setBackdropRef:y.useCallback(u=>{o.current.backdrop=u},[])})}const Dg=y.forwardRef((a,l)=>{let{show:s=!1,role:o="dialog",className:u,style:f,children:p,backdrop:v=!0,keyboard:g=!0,onBackdropClick:m,onEscapeKeyDown:x,transition:w,runTransition:j,backdropTransition:R,runBackdropTransition:k,autoFocus:_=!0,enforceFocus:U=!0,restoreFocus:M=!0,restoreFocusOptions:$,renderDialog:L,renderBackdrop:Z=Le=>d.jsx("div",Object.assign({},Le)),manager:J,container:H,onShow:V,onHide:ne=()=>{},onExit:de,onExited:_e,onExiting:Ae,onEnter:Be,onEntering:P,onEntered:Q}=a,re=Q8(a,V8);const N=Vf(),K=_8(H),I=Z8(J),ee=r8(),ue=o8(s),[C,G]=y.useState(!s),F=y.useRef(null);y.useImperativeHandle(l,()=>I,[I]),Wo&&!ue&&s&&(F.current=Yu(N?.document)),s&&C&&G(!1);const W=Nn(()=>{if(I.add(),jt.current=Go(document,"keydown",qe),Se.current=Go(document,"focus",()=>setTimeout(se),!0),V&&V(),_){var Le,$a;const Yi=Yu((Le=($a=I.dialog)==null?void 0:$a.ownerDocument)!=null?Le:N?.document);I.dialog&&Yi&&!Jm(I.dialog,Yi)&&(F.current=Yi,I.dialog.focus())}}),ie=Nn(()=>{if(I.remove(),jt.current==null||jt.current(),Se.current==null||Se.current(),M){var Le;(Le=F.current)==null||Le.focus==null||Le.focus($),F.current=null}});y.useEffect(()=>{!s||!K||W()},[s,K,W]),y.useEffect(()=>{C&&ie()},[C,ie]),N8(()=>{ie()});const se=Nn(()=>{if(!U||!ee()||!I.isTopModal())return;const Le=Yu(N?.document);I.dialog&&Le&&!Jm(I.dialog,Le)&&I.dialog.focus()}),me=Nn(Le=>{Le.target===Le.currentTarget&&(m?.(Le),v===!0&&ne())}),qe=Nn(Le=>{g&&qS(Le)&&I.isTopModal()&&(x?.(Le),Le.defaultPrevented||ne())}),Se=y.useRef(),jt=y.useRef(),Jt=(...Le)=>{G(!0),_e?.(...Le)};if(!K)return null;const pt=Object.assign({role:o,ref:I.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},re,{style:f,className:u,tabIndex:-1});let La=L?L(pt):d.jsx("div",Object.assign({},pt,{children:y.cloneElement(p,{role:"document"})}));La=e1(w,j,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!s,onExit:de,onExiting:Ae,onExited:Jt,onEnter:Be,onEntering:P,onEntered:Q,children:La});let Lt=null;return v&&(Lt=Z({ref:I.setBackdropRef,onClick:me}),Lt=e1(R,k,{in:!!s,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Lt})),d.jsx(d.Fragment,{children:Ri.createPortal(d.jsxs(d.Fragment,{children:[Lt,La]}),K)})});Dg.displayName="Modal";const J8=Object.assign(Dg,{Manager:Qf});function F8(a,l){return a.classList?a.classList.contains(l):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+l+" ")!==-1}function W8(a,l){a.classList?a.classList.add(l):F8(a,l)||(typeof a.className=="string"?a.className=a.className+" "+l:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+l))}function t1(a,l){return a.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function I8(a,l){a.classList?a.classList.remove(l):typeof a.className=="string"?a.className=t1(a.className,l):a.setAttribute("class",t1(a.className&&a.className.baseVal||"",l))}const Ti={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class _g extends Qf{adjustAndStore(l,s,o){const u=s.style[l];s.dataset[l]=u,_n(s,{[l]:`${parseFloat(_n(s,l))+o}px`})}restore(l,s){const o=s.dataset[l];o!==void 0&&(delete s.dataset[l],_n(s,{[l]:o}))}setContainerStyle(l){super.setContainerStyle(l);const s=this.getElement();if(W8(s,"modal-open"),!l.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";Da(s,Ti.FIXED_CONTENT).forEach(f=>this.adjustAndStore(o,f,l.scrollBarWidth)),Da(s,Ti.STICKY_CONTENT).forEach(f=>this.adjustAndStore(u,f,-l.scrollBarWidth)),Da(s,Ti.NAVBAR_TOGGLER).forEach(f=>this.adjustAndStore(u,f,l.scrollBarWidth))}removeContainerStyle(l){super.removeContainerStyle(l);const s=this.getElement();I8(s,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";Da(s,Ti.FIXED_CONTENT).forEach(f=>this.restore(o,f)),Da(s,Ti.STICKY_CONTENT).forEach(f=>this.restore(u,f)),Da(s,Ti.NAVBAR_TOGGLER).forEach(f=>this.restore(u,f))}}let Vu;function P8(a){return Vu||(Vu=new _g(a)),Vu}const Bg=y.createContext({onHide(){}}),Lg=y.forwardRef(({closeLabel:a="Close",closeVariant:l,closeButton:s=!1,onHide:o,children:u,...f},p)=>{const v=y.useContext(Bg),g=Po(()=>{v?.onHide(),o?.()});return d.jsxs("div",{ref:p,...f,children:[u,s&&d.jsx(Yf,{"aria-label":a,variant:l,onClick:g})]})});Lg.displayName="AbstractModalHeader";const $g=y.forwardRef(({className:a,bsPrefix:l,as:s="div",...o},u)=>(l=Et(l,"nav-item"),d.jsx(s,{ref:u,className:it(a,l),...o})));$g.displayName="NavItem";const Ug=y.forwardRef(({bsPrefix:a,className:l,as:s=Cg,active:o,eventKey:u,disabled:f=!1,...p},v)=>{a=Et(a,"nav-link");const[g,m]=Mg({key:qf(u,p.href),active:o,disabled:f,...p});return d.jsx(s,{...p,...g,ref:v,disabled:f,className:it(l,a,f&&"disabled",m.isActive&&"active")})});Ug.displayName="NavLink";const Hg=y.forwardRef((a,l)=>{const{as:s="div",bsPrefix:o,variant:u,fill:f=!1,justify:p=!1,navbar:v,navbarScroll:g,className:m,activeKey:x,...w}=vg(a,{activeKey:"onSelect"}),j=Et(o,"nav");let R,k,_=!1;const U=y.useContext(Gi),M=y.useContext(zg);return U?(R=U.bsPrefix,_=v??!0):M&&({cardHeaderBsPrefix:k}=M),d.jsx(M8,{as:s,ref:l,activeKey:x,className:it(m,{[j]:!_,[`${R}-nav`]:_,[`${R}-nav-scroll`]:_&&g,[`${k}-${u}`]:!!k,[`${j}-${u}`]:!!u,[`${j}-fill`]:f,[`${j}-justified`]:p}),...w})});Hg.displayName="Nav";const ew=Object.assign(Hg,{Item:$g,Link:Ug}),Gg=y.forwardRef(({bsPrefix:a,className:l,as:s,...o},u)=>{a=Et(a,"navbar-brand");const f=s||(o.href?"a":"span");return d.jsx(f,{...o,ref:u,className:it(l,a)})});Gg.displayName="NavbarBrand";const Yg=y.forwardRef(({children:a,bsPrefix:l,...s},o)=>{l=Et(l,"navbar-collapse");const u=y.useContext(Gi);return d.jsx(wg,{in:!!(u&&u.expanded),...s,children:d.jsx("div",{ref:o,className:l,children:a})})});Yg.displayName="NavbarCollapse";const qg=y.forwardRef(({bsPrefix:a,className:l,children:s,label:o="Toggle navigation",as:u="button",onClick:f,...p},v)=>{a=Et(a,"navbar-toggler");const{onToggle:g,expanded:m}=y.useContext(Gi)||{},x=Po(w=>{f&&f(w),g&&g()});return u==="button"&&(p.type="button"),d.jsx(u,{...p,ref:v,onClick:x,"aria-label":o,className:it(l,a,!m&&"collapsed"),children:s||d.jsx("span",{className:`${a}-icon`})})});qg.displayName="NavbarToggle";const gf=new WeakMap,n1=(a,l)=>{if(!a||!l)return;const s=gf.get(l)||new Map;gf.set(l,s);let o=s.get(a);return o||(o=l.matchMedia(a),o.refCount=0,s.set(o.media,o)),o};function tw(a,l=typeof window>"u"?void 0:window){const s=n1(a,l),[o,u]=y.useState(()=>s?s.matches:!1);return C8(()=>{let f=n1(a,l);if(!f)return u(!1);let p=gf.get(l);const v=()=>{u(f.matches)};return f.refCount++,f.addListener(v),v(),()=>{f.removeListener(v),f.refCount--,f.refCount<=0&&p?.delete(f.media),f=void 0}},[a]),o}function nw(a){const l=Object.keys(a);function s(v,g){return v===g?g:v?`${v} and ${g}`:g}function o(v){return l[Math.min(l.indexOf(v)+1,l.length-1)]}function u(v){const g=o(v);let m=a[g];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function f(v){let g=a[v];return typeof g=="number"&&(g=`${g}px`),`(min-width: ${g})`}function p(v,g,m){let x;typeof v=="object"?(x=v,m=g,g=!0):(g=g||!0,x={[v]:g});let w=y.useMemo(()=>Object.entries(x).reduce((j,[R,k])=>((k==="up"||k===!0)&&(j=s(j,f(R))),(k==="down"||k===!0)&&(j=s(j,u(R))),j),""),[JSON.stringify(x)]);return tw(w,m)}return p}const aw=nw({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Xg=y.forwardRef(({className:a,bsPrefix:l,as:s="div",...o},u)=>(l=Et(l,"offcanvas-body"),d.jsx(s,{ref:u,className:it(a,l),...o})));Xg.displayName="OffcanvasBody";const iw={[en]:"show",[On]:"show"},Vg=y.forwardRef(({bsPrefix:a,className:l,children:s,in:o=!1,mountOnEnter:u=!1,unmountOnExit:f=!1,appear:p=!1,...v},g)=>(a=Et(a,"offcanvas"),d.jsx(Io,{ref:g,addEndListener:Gf,in:o,mountOnEnter:u,unmountOnExit:f,appear:p,...v,childRef:Hi(s),children:(m,x)=>y.cloneElement(s,{...x,className:it(l,s.props.className,(m===en||m===Xl)&&`${a}-toggling`,iw[m])})})));Vg.displayName="OffcanvasToggling";const Qg=y.forwardRef(({bsPrefix:a,className:l,closeLabel:s="Close",closeButton:o=!1,...u},f)=>(a=Et(a,"offcanvas-header"),d.jsx(Lg,{ref:f,...u,className:it(l,a),closeLabel:s,closeButton:o})));Qg.displayName="OffcanvasHeader";const lw=i8("h5"),Kg=y.forwardRef(({className:a,bsPrefix:l,as:s=lw,...o},u)=>(l=Et(l,"offcanvas-title"),d.jsx(s,{ref:u,className:it(a,l),...o})));Kg.displayName="OffcanvasTitle";function rw(a){return d.jsx(Vg,{...a})}function ow(a){return d.jsx(Tg,{...a})}const Zg=y.forwardRef(({bsPrefix:a,className:l,children:s,"aria-labelledby":o,placement:u="start",responsive:f,show:p=!1,backdrop:v=!0,keyboard:g=!0,scroll:m=!1,onEscapeKeyDown:x,onShow:w,onHide:j,container:R,autoFocus:k=!0,enforceFocus:_=!0,restoreFocus:U=!0,restoreFocusOptions:M,onEntered:$,onExit:L,onExiting:Z,onEnter:J,onEntering:H,onExited:V,backdropClassName:ne,manager:de,renderStaticNode:_e=!1,...Ae},Be)=>{const P=y.useRef();a=Et(a,"offcanvas");const[Q,re]=y.useState(!1),N=Po(j),K=aw(f||"xs","up");y.useEffect(()=>{re(f?p&&!K:p)},[p,f,K]);const I=y.useMemo(()=>({onHide:N}),[N]);function ee(){return de||(m?(P.current||(P.current=new _g({handleContainerOverflow:!1})),P.current):P8())}const ue=(W,...ie)=>{W&&(W.style.visibility="visible"),J?.(W,...ie)},C=(W,...ie)=>{W&&(W.style.visibility=""),V?.(...ie)},G=y.useCallback(W=>d.jsx("div",{...W,className:it(`${a}-backdrop`,ne)}),[ne,a]),F=W=>d.jsx("div",{...W,...Ae,className:it(l,f?`${a}-${f}`:a,`${a}-${u}`),"aria-labelledby":o,children:s});return d.jsxs(d.Fragment,{children:[!Q&&(f||_e)&&F({}),d.jsx(Bg.Provider,{value:I,children:d.jsx(J8,{show:Q,ref:Be,backdrop:v,container:R,keyboard:g,autoFocus:k,enforceFocus:_&&!m,restoreFocus:U,restoreFocusOptions:M,onEscapeKeyDown:x,onShow:w,onHide:N,onEnter:ue,onEntering:H,onEntered:$,onExit:L,onExiting:Z,onExited:C,manager:ee(),transition:rw,backdropTransition:ow,renderBackdrop:G,renderDialog:F})})]})});Zg.displayName="Offcanvas";const sw=Object.assign(Zg,{Body:Xg,Header:Qg,Title:Kg}),Jg=y.forwardRef(({onHide:a,...l},s)=>{const o=y.useContext(Gi),u=Po(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return d.jsx(sw,{ref:s,show:!!(o!=null&&o.expanded),...l,renderStaticNode:!0,onHide:u})});Jg.displayName="NavbarOffcanvas";const Fg=y.forwardRef(({className:a,bsPrefix:l,as:s="span",...o},u)=>(l=Et(l,"navbar-text"),d.jsx(s,{ref:u,className:it(a,l),...o})));Fg.displayName="NavbarText";const Wg=y.forwardRef((a,l)=>{const{bsPrefix:s,expand:o=!0,variant:u="light",bg:f,fixed:p,sticky:v,className:g,as:m="nav",expanded:x,onToggle:w,onSelect:j,collapseOnSelect:R=!1,...k}=vg(a,{expanded:"onToggle"}),_=Et(s,"navbar"),U=y.useCallback((...L)=>{j?.(...L),R&&x&&w?.(!1)},[j,R,x,w]);k.role===void 0&&m!=="nav"&&(k.role="navigation");let M=`${_}-expand`;typeof o=="string"&&(M=`${M}-${o}`);const $=y.useMemo(()=>({onToggle:()=>w?.(!x),bsPrefix:_,expanded:!!x,expand:o}),[_,x,o,w]);return d.jsx(Gi.Provider,{value:$,children:d.jsx(Yo.Provider,{value:U,children:d.jsx(m,{ref:l,...k,className:it(g,_,o&&M,u&&`${_}-${u}`,f&&`bg-${f}`,v&&`sticky-${v}`,p&&`fixed-${p}`)})})})});Wg.displayName="Navbar";const cw=Object.assign(Wg,{Brand:Gg,Collapse:Yg,Offcanvas:Jg,Text:Fg,Toggle:qg});function uw(a){return ke({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}function Ig(a){return ke({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M236,172a40,40,0,0,1-80,0V76H100V200a12,12,0,0,1-24,0V76H72a36,36,0,0,0-36,36,12,12,0,0,1-24,0A60.07,60.07,0,0,1,72,52H224a12,12,0,0,1,0,24H180v96a16,16,0,0,0,32,0,12,12,0,0,1,24,0Z"},child:[]}]})(a)}const fw=S(cw)`
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: saturate(180%) blur(14px);
  padding-top: max(env(safe-area-inset-top), 6px);
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`,dw=S.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,hw=S.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,pw=S.div`
  justify-self: center;
`,mw=S.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,gw=S.button`
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 12px;
  transition: transform 120ms ease, background 120ms ease;
  &:active {
    transform: scale(0.96);
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`,yw=S($i)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px; /* space between icon and text */
`,vw=S(Ig)`
  border-radius: 5px;
  background-color: black;
  width: 35px;
  height: 30px;
  flex: 0 0 28px;
  color: white; /* keep high contrast; adjust to your brand */
  padding: 1px;
`,bw=S.div`
  font-size: 30px;
  font-family: "BBH Sans Hegarty", sans-serif;
  font-weight: 600;
  background: black;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; /* fallback */
  -webkit-text-fill-color: transparent; /* webkit */
  letter-spacing: 0.2px;
  line-height: 1;
`;function xw(){const a=()=>{console.log("Toggled theme")};return d.jsx("div",{className:"topbar-wrapper",children:d.jsx(fw,{className:"shadow-sm d-lg-none",children:d.jsx(Rg,{fluid:!0,className:"px-3",children:d.jsxs(dw,{children:[d.jsx(hw,{children:d.jsxs(yw,{to:"/instalearn/","aria-label":"Go to home",children:[d.jsx("div",{children:d.jsx(vw,{"aria-hidden":"true"})}),d.jsx(bw,{children:"Learn"})]})}),d.jsx(pw,{}),d.jsx(mw,{children:d.jsx(gw,{type:"button",onClick:a,"aria-label":"Toggle",children:d.jsx(uw,{size:20})})})]})})})})}const Sw=Bt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,ww=S.aside`
  width: 245px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #dbdbdb;
  padding: 8px 0 20px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 200ms ease, padding 200ms ease;
`,Ew=S($i)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
  gap: 5px;
`,jw=S(Ig)`
  border-radius: 5px;
  background-color: black;
  width: 35px;
  height: 30px;
  flex: 0 0 28px;
  color: white; /* keep high contrast; adjust to your brand */
  padding: 1px;
`,Cw=S.div`
  font-size: 28px;
  font-family: "BBH Sans Hegarty", sans-serif;
  font-weight: 700;
  color: black;
  letter-spacing: 0.2px;
  line-height: 1;
`,Tw=S.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,zw=Ln`
  color: #00dbe4;
  font-weight: 700;
  transform: translateX(2px) scale(1.02);
  svg {
    stroke-width: 2.5;
  }

  /* Glowing animated bar on the left */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, #00f5ff, #0088ff, #00f5ff);
    background-size: 200% 200%;
    animation: ${Sw} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,Qu=S($i)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 12px 12px 16px;
  margin: 4px 8px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  font-weight: ${a=>a.$active?"700":"400"};
  color: #262626;
  background: transparent;
  transition: background-color 150ms ease, transform 200ms ease,
    color 150ms ease;
  position: relative;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #fafafa;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(0, 245, 255, 0.3);
    border-radius: 10px;
  }

  svg {
    font-size: 26px;
    stroke-width: ${a=>a.$active?"2.5":"2"};
    min-width: 26px;
    margin-left: 8px;
    flex-shrink: 0;
    transition: stroke-width 150ms ease;
  }

  ${a=>a.$active&&zw}
`,Rw=S.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,Ku=S.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,Zu=S.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function kw(){const{pathname:a}=dn(),l=[{to:"/instalearn/",icon:d.jsx(og,{}),label:"Home"},{to:"/instalearn/teacher",icon:d.jsx(gg,{}),label:"Teacher"},{to:"/instalearn/library",icon:d.jsx(rg,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:d.jsx(u5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:d.jsx(sg,{}),label:"Profile"}];return d.jsxs(ww,{children:[d.jsxs(Ew,{to:"/instalearn/",children:[d.jsx("div",{children:d.jsx(jw,{"aria-hidden":"true"})}),d.jsx(Cw,{children:"Learn"})]}),d.jsxs(Tw,{children:[l.slice(0,-1).map(s=>d.jsxs(Qu,{to:s.to,$active:a===s.to,children:[d.jsx(Ku,{children:s.icon}),d.jsx(Zu,{children:s.label}),s.hasNotification]},s.to)),d.jsxs(Qu,{to:l[l.length-1].to,$active:a===l[l.length-1].to,children:[d.jsx(Ku,{children:l[l.length-1].icon}),d.jsx(Zu,{children:l[l.length-1].label})]})]}),d.jsx(Rw,{children:d.jsxs(Qu,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[d.jsx(Ku,{children:d.jsx(f5,{})}),d.jsx(Zu,{children:"More"})]})})]})}const Aw=S.div`
  width: 100%;
  height: 100%;
  padding: 24px 16px;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 200ms ease;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #c0c0c0;
  }
`,Mw=S.div`
  position: relative;
  margin-bottom: 32px;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    border-radius: 20px;
    opacity: 0.15;
    filter: blur(8px);
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 0.25;
  }
`,Pg=S.div`
  position: relative;
  background: white;
  border-radius: 16px;
  padding: ${a=>a.$width<250?"12px":"20px"};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: ${a=>a.$width<250?"8px":"16px"};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`,Ow=S.div`
  position: relative;
  flex-shrink: 0;
`,Nw=S.div`
  width: ${a=>a.$width<250?"40px":a.$width<200?"36px":"56px"};
  height: ${a=>a.$width<250?"40px":a.$width<200?"36px":"56px"};
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${a=>a.$width<250?"16px":a.$width<200?"14px":"24px"};
  font-weight: 600;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
  
  ${Pg}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,Dw=S.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,_w=S.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,Bw=S.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Lw=S.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$w=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Uw=S.div`
  display: flex;
  align-items: center;
  gap: ${a=>a.$width<200?"4px":"8px"};
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  
  svg {
    color: ${a=>a.$iconColor||"#667eea"};
    flex-shrink: 0;
    width: ${a=>a.$width<200?"14px":"16px"};
    height: ${a=>a.$width<200?"14px":"16px"};
  }
  
  span {
    display: ${a=>a.$width<180?"none":"inline"};
  }
`,Hw=S.button`
  background: none;
  border: none;
  color: #667eea;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: ${a=>a.$width<180?"none":"block"};
  
  &:hover {
    background: #f0f0ff;
    color: #5568d3;
  }
`,Gw=S.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,ey=S.div`
  position: relative;
  background: ${a=>a.$gradient?"linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)":"#fafafa"};
  border-radius: ${a=>a.$width<250?"10px":"14px"};
  padding: ${a=>a.$width<250?"10px":"14px"};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #f0f0f0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: ${a=>a.$glowColor||"linear-gradient(135deg, #667eea, #764ba2)"};
    border-radius: ${a=>a.$width<250?"11px":"15px"};
    opacity: 0;
    filter: blur(10px);
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: transparent;
    
    &::before {
      opacity: 0.2;
    }
  }
`,Yw=S.div`
  width: ${a=>a.$width<200?"100%":a.$width<250?"50px":"100%"};
  height: ${a=>a.$width<200?"80px":a.$width<250?"50px":"100px"};
  border-radius: ${a=>a.$width<250?"8px":"10px"};
  background: ${a=>a.$gradient||"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${a=>a.$width>=250||a.$width<200?"12px":"0"};
  margin-right: ${a=>a.$width>=200&&a.$width<250?"12px":"0"};
  flex-shrink: 0;
  transition: transform 0.3s ease;
  
  svg {
    width: ${a=>a.$width<200?"28px":a.$width<250?"24px":"40px"};
    height: ${a=>a.$width<200?"28px":a.$width<250?"24px":"40px"};
    color: white;
  }
  
  ${ey}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,qw=S.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,Xw=S.div`
  flex: 1;
`,Vw=S.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Qw=S.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,Kw=S.span`
  display: ${a=>a.$width<180?"none":"inline-flex"};
  align-items: center;
  gap: 4px;
  padding: ${a=>a.$width<250?"2px 6px":"4px 10px"};
  background: ${a=>a.$bg||"linear-gradient(135deg, #667eea, #764ba2)"};
  color: white;
  font-size: ${a=>a.$width<250?"9px":"10px"};
  font-weight: 600;
  border-radius: 6px;
  margin-bottom: ${a=>a.$width<250?"4px":"8px"};
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
`;S.a`
  display: ${a=>a.$width<180?"none":"inline-flex"};
  align-items: center;
  gap: 6px;
  font-size: ${a=>a.$width<250?"10px":"11px"};
  color: #667eea;
  font-weight: 600;
  margin-top: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  
  svg {
    transition: transform 0.2s ease;
  }
  
  &:hover {
    color: #5568d3;
    
    svg {
      transform: translate(2px, -2px);
    }
  }
`;const Zw=({sidebarWidth:a=360})=>{const l={username:"demo_user",name:"Demo User",initials:"DU"},s=[{icon:Em,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:d5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:s5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return d.jsxs(Aw,{children:[d.jsx(Mw,{children:d.jsxs(Pg,{$width:a,children:[d.jsxs(Ow,{children:[d.jsx(Nw,{$width:a,children:l.initials}),d.jsx(Dw,{$width:a})]}),d.jsxs(_w,{$width:a,children:[d.jsx(Bw,{$width:a,children:l.username}),d.jsx(Lw,{$width:a,children:l.name})]})]})}),d.jsxs($w,{children:[d.jsxs(Uw,{$width:a,$iconColor:"#667eea",children:[d.jsx(Em,{}),d.jsx("span",{children:"Highlights"})]}),d.jsx(Hw,{$width:a,children:"See All"})]}),d.jsx(Gw,{$width:a,children:s.map((o,u)=>{const f=o.icon;return d.jsxs(ey,{$width:a,$glowColor:o.gradient,children:[d.jsx(Kw,{$width:a,$bg:o.badgeBg,children:o.badge}),d.jsxs(qw,{$width:a,children:[d.jsx(Yw,{$width:a,$gradient:o.gradient,children:d.jsx(f,{})}),d.jsxs(Xw,{children:[d.jsx(Vw,{$width:a,children:o.title}),d.jsx(Qw,{$width:a,children:o.description})]})]})]},u)})})]})};function Jw(){const{pathname:a}=dn(),l=[["/instalearn/",d.jsx(og,{})],["/instalearn/teacher",d.jsx(gg,{})],["/instalearn/library",d.jsx(rg,{})],["/instalearn/profile",d.jsx(sg,{})]];return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .bottom-nav {
          border-top: 1px solid rgba(255,255,255,0.1);
          background: rgba(0, 0, 0, 0.85);
          box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(8px);
        }

        .nav-link {
          position: relative;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nav-link.active {
          color: #00F5FF !important;
          transform: scale(1.1);
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 22px;
          height: 3px;
          border-radius: 2px;
          background-color: #00F5FF;
          box-shadow: 0 0 6px #00F5FF;
          animation: shine 4s linear infinite;
          background: linear-gradient(90deg, #00F5FF, #0088FF, #00F5FF);
          background-size: 200% 200%;
        }
      `}),d.jsx(ew,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:l.map(([s,o])=>d.jsx($i,{to:s,className:`nav-link fs-4 text-white ${a===s?"active":""}`,children:o},s))})]})}const Ju=[{id:"T001",username:"Priya Sharma",name:"Priya Sharma",subject:"English Teacher",bio:"Passionate about literature & grammar | Helping Grade 9 students build strong reading & writing skills.",avatar:Ge.Grade9EnglishPriyaShrama,concepts:180,students:"900",learns:12,experience:6,bookList:[]},{id:"T002",username:"Vivek Sinha",name:"Vivek Sinha",subject:"English Teacher",bio:"Making poetry and prose relatable | Focus on comprehension & expression.",avatar:Ge.Grade9EnglishVivekSinha,concepts:165,students:"820",learns:10,experience:5,bookList:[]},{id:"T003",username:"Mandar Borkar",name:"Mandar Borkar",subject:"Mathematics Teacher",bio:"Algebra & geometry made visual | Step-by-step problem solving.",avatar:Ge.Grade9MathMandar,concepts:210,students:"1K",learns:14,experience:7,bookList:[]},{id:"T004",username:"Neha Gupta",name:"Neha Gupta",subject:"Mathematics Teacher",bio:"Speed + accuracy drills | Number sense for life.",avatar:Ge.Grade9MathNeha,concepts:195,students:"950",learns:11,experience:6,bookList:[]},{id:"T005",username:"Alakh Pandey",name:"Alakh Pandey",subject:"Science Teacher",bio:"Concept-first physics & chemistry | Intuition over rote.",avatar:Ge.Grade9ScienceAlakh,concepts:230,students:"1.3K",learns:16,experience:9,bookList:[{bookId:1,thumbnail:"https://png.pngtree.com/background/20230303/original/pngtree-dna-education-biology-picture-image_2083459.jpg",title:"Bio Made Simple"},{bookId:2,thumbnail:"",title:"Diagram Mastery"}],bookMarks:[],helights:[]},{id:"T006",username:"Sunil Kumar",name:"Sunil Kumar",subject:"Science Teacher",bio:"Hands-on experiments & real-life science applications.",avatar:Ge.Grade9ScienceSunil,concepts:200,students:"1.1K",learns:13,experience:7,bookList:[]},{id:"T007",username:"Samridhi",name:"Samridhi",subject:"Science Teacher",bio:"Making biology engaging with visuals & mnemonics.",avatar:Ge.Grade9ScienceSamridhi,concepts:178,students:"860",learns:10,experience:5,bookList:[]},{id:"T008",username:"Siddharth Sir",name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:Ge.Grade9SstSiddhart,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},{id:"T009",username:"Shinu Singh",name:"Shinu Singh",subject:"SST Teacher",bio:"Maps, timelines & case studies for strong SST foundations.",avatar:Ge.Grade9SstShinu,concepts:160,students:"780",learns:9,experience:5,bookList:[{title:"Map Reading Guide"},{title:"Civics in Practice"}]},{id:"T010",username:"Anurag Tyagi",name:"Anurag Tyagi",subject:"English Teacher",bio:"CBSE-focused reading & grammar | Score-boosting strategies.",avatar:Ge.Grade10EnglishAnurag,concepts:185,students:"980",learns:12,experience:6,bookList:[{title:"CBSE English Guide"},{title:"Comprehension Builder"}]},{id:"T011",username:"Rohan Patel",name:"Rohan Patel",subject:"Mathematics Teacher",bio:"Practice-first approach | Arithmetic to algebra with confidence.",avatar:"",concepts:205,students:"1K",learns:13,experience:7,bookList:[{title:"CBSE Maths Drillbook"},{title:"Algebra Applied"}]},{id:"T012",username:"Priyanka Das",name:"Priyanka Das",subject:"Mathematics Teacher",bio:"Clear explanations & curated problem sets for boards.",avatar:"",concepts:190,students:"920",learns:11,experience:6,bookList:[{title:"Board Maths Playbook"},{title:"Trigonometry Basics"}]},{id:"T013",username:"Sanjay Kulkarni",name:"Sanjay Kulkarni",subject:"Mathematics Teacher",bio:"From fundamentals to exam-ready | Daily practice regimen.",avatar:"",concepts:198,students:"950",learns:11,experience:6,bookList:[{title:"Coordinate Geometry Guide"},{title:"Exam Maths 30-Day Plan"}]},{id:"T014",username:"Anjali Mehta",name:"Anjali Mehta",subject:"Science Teacher",bio:"Board exam blueprint + concept clarity for Physics/Chem/Bio.",avatar:"",concepts:215,students:"1.1K",learns:14,experience:7,bookList:[{title:"Science Marathon X"},{title:"Lab Practicals Simplified"}]},{id:"T015",username:"Amit Chakraborty",name:"Amit Chakraborty",subject:"Science Teacher",bio:"Real-world analogies to make science stick.",avatar:"",concepts:188,students:"870",learns:10,experience:5,bookList:[{title:"Everyday Physics"},{title:"Chemistry Quick Notes"}]},{id:"T016",username:"Meera Nambiar",name:"Meera Nambiar",subject:"Science Teacher",bio:"Structured notes + diagrams for last-mile revision.",avatar:"",concepts:175,students:"820",learns:9,experience:5,bookList:[{title:"Revision Notes: Science"},{title:"Diagram Bank"}]},{id:"T017",username:"Siddharth Sir",name:"Siddharth Sir",subject:"SST Teacher",bio:"Case studies, maps & civics in action for Grade 10.",avatar:"",concepts:220,students:"1.1K",learns:14,experience:8,bookList:[{title:"SST MARATHON"},{title:"Civics in Action"}]},{id:"T018",username:"Nidhi Arora",name:"Nidhi Arora",subject:"SST Teacher",bio:"Interactive SST with visuals & quick recall tips.",avatar:"",concepts:170,students:"800",learns:9,experience:5,bookList:[{title:"History Timeline Pack"},{title:"Geography Smart Notes"}]},{id:"T019",username:"Parth Ghosh",name:"Parth Ghosh",subject:"SST Teacher",bio:"Exam-oriented SST prep with crisp notes & PYQs.",avatar:"",concepts:182,students:"860",learns:10,experience:6,bookList:[{title:"SST PYQ Master"},{title:"Civics Quick Guide"}]},{id:"T020",username:"Anurag  Tyagi",name:"Anurag  Tyagi",subject:"English Teacher",bio:"Advanced reading, unseen passages & literary devices for Grade 11.",avatar:"",concepts:160,students:"720",learns:9,experience:6,bookList:[{title:"Literary Devices Lab"},{title:"Unseen Mastery"}]},{id:"T021",username:"Karan Malhotra",name:"Karan Malhotra",subject:"English Teacher",bio:"Critical reading & composition with practical tips.",avatar:"",concepts:155,students:"700",learns:8,experience:5,bookList:[{title:"CBSE English Core 11"},{title:"Writing Skills Pack"}]},{id:"T021",username:"Nitin Agarwal",name:"Nitin Agarwal",subject:"Physics Teacher",bio:"Intuitive physics with derivations, graphs & real-world links.",avatar:"",concepts:240,students:"1.3K",learns:16,experience:10,bookList:[{title:"Mechanics Unlocked"},{title:"Waves & Optics Notes"}]},{id:"T022",username:"Rachna Bansal",name:"Rachna Bansal",subject:"Physics Teacher",bio:"From vectors to EM — problem patterns & shortcuts.",avatar:"",concepts:205,students:"940",learns:12,experience:7,bookList:[{title:"Electromagnetism Playbook"},{title:"Graphing in Physics"}]},{id:"T023",username:"Vivek Mishra",name:"Vivek Mishra",subject:"Physics Teacher",bio:"Exam patterns + conceptual clarity for 11th physics.",avatar:"",concepts:198,students:"900",learns:11,experience:6,bookList:[{title:"Kinematics to SHM"},{title:"Problem Types Handbook"}]},{id:"T024",username:"Sneha Kapoor",name:"Sneha Kapoor",subject:"Chemistry Teacher",bio:"Organic mechanisms + physical chem made simple.",avatar:"",concepts:230,students:"1.2K",learns:15,experience:9,bookList:[{title:"Organic Roadmap"},{title:"Ionic Equilibria Notes"}]},{id:"T025",username:"Aditya Mehta",name:"Aditya Mehta",subject:"Chemistry Teacher",bio:"Targeted practice + concept capsules.",avatar:"",concepts:185,students:"880",learns:10,experience:6,bookList:[{title:"Physical Chemistry Drill"},{title:"P-Block Simplified"}]},{id:"T026",username:"Nupur Jain",name:"Nupur Jain",subject:"Chemistry Teacher",bio:"NCERT-first approach with visualization.",avatar:"",concepts:178,students:"820",learns:9,experience:5,bookList:[{title:"NCERT Chemistry Companion"},{title:"Reaction Mechanisms Map"}]},{id:"T027",username:"Siddharth Sir",name:"Siddharth Sir",subject:"Biology Teacher",bio:"Bio diagrams, flowcharts & memory pegs for Grade 11.",avatar:"",concepts:175,students:"810",learns:9,experience:8,bookList:[{title:"Human Physiology Notes"},{title:"Plant Kingdom Visuals"}]},{id:"T028",username:"Radhika Sen",name:"Radhika Sen",subject:"Biology Teacher",bio:"Concept-first life sciences with crisp notes.",avatar:"",concepts:168,students:"760",learns:8,experience:5,bookList:[{title:"Cell to Systems"},{title:"Taxonomy Toolkit"}]},{id:"T029",username:"Deepak Rao",name:"Deepak Rao",subject:"Mathematics Teacher",bio:"Calculus foundations + vector intro for XI.",avatar:"",concepts:210,students:"1K",learns:12,experience:7,bookList:[{title:"Functions & Limits"},{title:"Vectors Quick Start"}]},{id:"T030",username:"Shreya Iyer",name:"Shreya Iyer",subject:"Mathematics Teacher",bio:"Strong problem sets + doubt clearing sessions.",avatar:"",concepts:190,students:"920",learns:10,experience:6,bookList:[{title:"Permutation & Combination"},{title:"Sequences & Series"}]},{id:"T031",username:"Varun Sethi",name:"Varun Sethi",subject:"Mathematics Teacher",bio:"Graph-first maths to build intuition.",avatar:"",concepts:184,students:"880",learns:9,experience:5,bookList:[{title:"Graphing Toolkit"},{title:"Inequalities in Depth"}]},{id:"T032",username:"Sunita Verma",name:"Sunita Verma",subject:"English Teacher",bio:"Core English for Grade 12: reading, literature & writing.",avatar:"",concepts:175,students:"860",learns:9,experience:7,bookList:[{title:"CBSE English Core 12"},{title:"Poetry & Prose Notes"}]},{id:"T033",username:"Aalok Trivedi",name:"Aalok Trivedi",subject:"English Teacher",bio:"Score-boosting strategies for boards.",avatar:"",concepts:168,students:"780",learns:8,experience:6,bookList:[{title:"Board Writing Skills"},{title:"Reading Speed Builder"}]},{id:"T034",username:"Garima Singh",name:"Garima Singh",subject:"English Teacher",bio:"Unseen passages, note-making & literature analysis.",avatar:"",concepts:170,students:"800",learns:9,experience:6,bookList:[{title:"Lit Analysis Toolkit"},{title:"Unseen Practice Set"}]},{id:"T035",username:"Nitin Agarwal",name:"Nitin Agarwal",subject:"Physics Teacher",bio:"Boards + entrance alignment | Problem solving patterns.",avatar:"",concepts:245,students:"1.4K",learns:17,experience:11,bookList:[{title:"Electrostatics & Current"},{title:"Modern Physics Notes"}]},{id:"T036",username:"Priti Saxena",name:"Priti Saxena",subject:"Physics Teacher",bio:"Graph-based intuition & error-free calculations.",avatar:"",concepts:198,students:"900",learns:11,experience:7,bookList:[{title:"Wave Optics Guide"},{title:"Error Analysis 101"}]},{id:"T037",username:"Keshav Reddy",name:"Keshav Reddy",subject:"Physics Teacher",bio:"Simplifying modern physics with patterns & summaries.",avatar:"",concepts:185,students:"860",learns:10,experience:6,bookList:[{title:"Modern Physics Crunch"},{title:"EM Waves Quick Notes"}]},{id:"T038",username:"Sneha Kapoor",name:"Sneha Kapoor",subject:"Chemistry Teacher",bio:"Stoichiometry to thermodynamics — strong fundamentals.",avatar:"",concepts:235,students:"1.2K",learns:15,experience:9,bookList:[{title:"Thermo & Equilibrium"},{title:"Organic Named Reactions"}]},{id:"T039",username:"Rohan Mukherjee",name:"Rohan Mukherjee",subject:"Chemistry Teacher",bio:"High-yield notes + problem sets for board prep.",avatar:"",concepts:192,students:"880",learns:10,experience:6,bookList:[{title:"Inorganic Capsules"},{title:"Physical Chem Drills"}]},{id:"T040",username:"Farah Qureshi",name:"Farah Qureshi",subject:"Chemistry Teacher",bio:"Concept maps + short tricks for quick retention.",avatar:"",concepts:180,students:"820",learns:9,experience:5,bookList:[{title:"Organic Reaction Flowcharts"},{title:"Electrochem Made Easy"}]},{id:"T041",username:"Sameer Kulkarni",name:"Sameer Kulkarni",subject:"Biology Teacher",bio:"NCERT diagram mastery + memory pegs for boards.",avatar:"",concepts:195,students:"910",learns:10,experience:7,bookList:[{title:"Human Reproduction Notes"},{title:"Biotech in a Page"}]},{id:"T042",username:"Yashwant Kumar",name:"Yashwant Kumar",subject:"Mathematics Teacher",bio:"Vectors, 3D geometry & integration — exam excellence.",avatar:"",concepts:208,students:"990",learns:12,experience:7,bookList:[{title:"Integration Playbook"},{title:"3D Geometry Visuals"}]}];var Fw={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};Ww(Fw);function Ww(a){var l={};for(var s in a)a.hasOwnProperty(s)&&(l[a[s]]=s);return l}var Iw="#4fa94d",a1={"aria-busy":!0,role:"progressbar"},Pw=S.div`
  display: ${a=>a.$visible?"flex":"none"};
`,e9="http://www.w3.org/2000/svg",Pt=242.776657104492,t9=1.6,n9=Bt`
12.5% {
  stroke-dasharray: ${Pt*.14}px, ${Pt}px;
  stroke-dashoffset: -${Pt*.11}px;
}
43.75% {
  stroke-dasharray: ${Pt*.35}px, ${Pt}px;
  stroke-dashoffset: -${Pt*.35}px;
}
100% {
  stroke-dasharray: ${Pt*.01}px, ${Pt}px;
  stroke-dashoffset: -${Pt*.99}px;
}
`;S.path`
  stroke-dasharray: ${Pt*.01}px, ${Pt};
  stroke-dashoffset: 0;
  animation: ${n9} ${t9}s linear infinite;
`;var a9=[0,30,60,90,120,150,180,210,240,270,300,330],i9=Bt`
to {
   transform: rotate(360deg);
 }
`,l9=S.svg`
  animation: ${i9} ${a=>String(a.$animationDuration).endsWith("s")?String(a.$animationDuration):`${a.$animationDuration}s`} steps(12, end) infinite;
`,r9=S.polyline`
  stroke-width: ${a=>`${a.$strokeWidth}px`};
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,o9=({height:a=96,width:l=96,color:s=Iw,strokeWidth:o=5,animationDuration:u=.75,strokeColor:f,visible:p=!0,ariaLabel:v="rotating-lines-loading",wrapperStyle:g,wrapperClass:m})=>{let x=y.useCallback(()=>a9.map(w=>d.jsx(r9,{points:"24,12 24,4",$strokeWidth:o,transform:`rotate(${w}, 24, 24)`},w)),[o]);return p?d.jsx(Pw,{style:g,$visible:p,className:m,"aria-label":v,"data-testid":"rotating-lines-loading",...a1,children:d.jsx(l9,{xmlns:e9,viewBox:"0 0 48 48",width:l,height:a,stroke:f??s,$animationDuration:u,speed:String(u),"aria-label":v,"data-testid":"rotating-lines-svg",...a1,children:x()})}):null},s9=Bt`
to {
   stroke-dashoffset: 136;
 }
`;S.polygon`
  stroke-dasharray: 17;
  animation: ${s9} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;S.svg`
  transform-origin: 50% 65%;
`;const c9=[{id:1,name:"Sense of Collective Identity",img:yo.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[U5.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:yo.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:yo.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:yo.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function u9(a){return ke({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function f9({isOpen:a,activeIndex:l,setActiveIndex:s,total:o,onClose:u,duration:f=3e3}){const p=y.useRef(Date.now()),v=y.useRef(),g=y.useRef(0),m=y.useCallback(()=>{const w=Date.now()-p.current,j=Math.min(1,w/f);g.current=j,j>=1?l<o-1?s(R=>R+1):u():v.current=requestAnimationFrame(m)},[l,o,f,u,s]);return y.useEffect(()=>{if(a)return p.current=Date.now(),v.current=requestAnimationFrame(m),()=>cancelAnimationFrame(v.current)},[a,l,m]),{resetTimer:y.useCallback(()=>{p.current=Date.now()},[]),getProgressValue:()=>g.current}}const d9=S.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(12px) saturate(120%);
  -webkit-backdrop-filter: blur(12px) saturate(120%);

  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.98);
  }
`,h9=S.div`
  --gutter: clamp(16px, 4vw, 32px);
  position: relative;
  width: 100%;
  height: 90vh;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 0 var(--gutter);

  @media (max-width: 768px) {
    height: 100vh;
    max-width: 100%;
    padding: 0;
    --gutter: 0px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 85vh;
    max-width: 450px;
  }
`,p9=S.div`
  position: relative;
  flex: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  max-height: 1000%;
  aspect-ratio: 9 / 16;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 0px;
    border: none;
    box-shadow: none;
    aspect-ratio: auto;
  }

  @media (min-width: 769px) {
    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.01);
    }
  }
`,m9=S.div`
  position: absolute;
  top: 12px;
  left: 0px;
  right: 0px;
  z-index: 20;
  display: flex;
  gap: 4px;

  @media (max-width: 768px) {
    top: 0px;
    left: 5px;
    right: 5px;
    gap: 3px;
  }
`,g9=S.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 2.5px;
  }
`,y9=S.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,v9=S.div`
  position: absolute;
  top: 24px;
  left: 0px;
  right: 0px;
  z-index: 15;
  display: flex;
  align-items: center;
  gap: 12px;

  background: rgba(10, 10, 10, 0.65);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  color: #fff;
  border-radius: 14px;
  padding: 10px 12px;

  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;

  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    top: 0px;
    left: 1px;
    right: 1px;
    padding: 8px 10px;
    gap: 10px;
    border-radius: 12px;
  }

  @media (min-width: 769px) {
    &:hover {
      background: rgba(15, 15, 15, 0.75);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.08) inset;
    }
  }
`,b9=S.img`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    border-width: 1.5px;
  }
`,x9=S.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,S9=S.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,w9=S.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`,E9=S.button`
  margin-left: auto;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  color: #fff;
  font-size: 22px;
  border-radius: 999px;
  border: 0;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    font-size: 20px;
  }
`,j9=S.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${a=>a.$active?1:0};
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -webkit-user-select: none;

  @media (max-width: 768px) {
    object-fit: cover;
  }

  @media (min-width: 769px) {
    object-fit: contain;
  }
`,i1=S.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 10;
  touch-action: manipulation;

  ${a=>a.$side==="left"?Ln`
          left: 0;
          width: 33.3333%;
        `:Ln`
          right: 0;
          width: 66.6666%;
        `};

  /* Visual feedback on desktop */
  @media (min-width: 769px) {
    transition: background 0.2s ease;

    &:active {
      background: ${a=>a.$side==="left"?"linear-gradient(90deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(-90deg, rgba(255,255,255,0.05) 0%, transparent 100%)"};
    }
  }
`;function C9({currentItem:a,isOpen:l,slideIndex:s,setSlideIndex:o,onClose:u,duration:f=3e3}){const p=a?.slides?.length||0,{resetTimer:v,getProgressValue:g}=f9({isOpen:l,activeIndex:s,setActiveIndex:o,total:p,onClose:u,duration:f}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,x]=y.useState(0);y.useEffect(()=>{if(!l||m)return;let k;const _=()=>{x(U=>U+1),k=requestAnimationFrame(_)};return k=requestAnimationFrame(_),()=>cancelAnimationFrame(k)},[l,m]);const w=y.useCallback(()=>{a&&(s<p-1?(o(k=>k+1),v()):u())},[a,s,p,v,u,o]),j=y.useCallback(()=>{a&&(s>0?(o(k=>k-1),v()):u())},[a,s,v,u,o]);y.useEffect(()=>{const k=_=>{l&&(_.key==="Escape"&&u(),_.key==="ArrowRight"&&w(),_.key==="ArrowLeft"&&j())};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[l,w,j,u]),y.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]);const R=k=>k<s?1:k>s?0:g();return!l||!a?null:d.jsx(d9,{onClick:u,"aria-label":"Story overlay",children:d.jsx(h9,{onClick:k=>k.stopPropagation(),children:d.jsxs(p9,{children:[d.jsx(m9,{"aria-label":"Story progress",children:a.slides.map((k,_)=>d.jsx(g9,{"aria-label":`Progress track ${_+1}`,children:d.jsx(y9,{style:{width:`${R(_)*100}%`}})},_))}),d.jsxs(v9,{children:[d.jsx(b9,{src:a.img,alt:a.name}),d.jsxs(x9,{children:[d.jsx(S9,{children:a.name}),d.jsx(w9,{children:"Chapter highlight"})]}),d.jsx(E9,{"aria-label":"Close story",onClick:u,title:"Close",children:d.jsx(u9,{})})]}),a.slides.map((k,_)=>d.jsx(j9,{src:k,alt:`Slide ${_+1}`,$active:_===s,draggable:!1},_)),d.jsx(i1,{$side:"left",onClick:j,"aria-label":"Previous slide"}),d.jsx(i1,{$side:"right",onClick:w,"aria-label":"Next slide"})]})})})}const T9=S.div``,z9=S.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,R9=S.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,k9=S.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,A9=S.div`
  padding: 2px;
  border-radius: 999px;
  ${a=>a.$hasNew?Ln`
          background: linear-gradient(
            45deg,
            #777777 0%,
            #949494 25%,
            #4b4b4b 50%,
            #555555 75%,
            #585758 100%
          );
        `:Ln`
          background: transparent;
        `};
`,M9=S.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,O9=S.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,N9=S.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function D9({items:a,duration:l=3e3,onOpen:s,onClose:o,className:u}){const f=y.useRef(null),p=y.useRef(!1),v=y.useRef(0),g=y.useRef(0),[m,x]=y.useState(a||[]),[w,j]=y.useState(null),[R,k]=y.useState(0),_=m.find(H=>H.id===w)||null,U=!!w,M=H=>{k(0),j(H),x(V=>V.map(ne=>ne.id===H?{...ne,hasNew:!1}:ne)),s&&s(H)},$=()=>{j(null),o&&o()},L=H=>{p.current=!0,v.current=H.clientX,g.current=f.current?.scrollLeft||0,H.target.setPointerCapture?.(H.pointerId)},Z=H=>{if(!p.current||!f.current)return;const V=H.clientX-v.current;f.current.scrollLeft=g.current-V},J=()=>{p.current=!1};return d.jsxs(T9,{className:u,children:[d.jsx(z9,{children:d.jsx(R9,{ref:f,onPointerDown:L,onPointerMove:Z,onPointerUp:J,onPointerLeave:J,"aria-label":"Stories scroller",children:m.map(H=>d.jsxs(k9,{onClick:()=>M(H.id),"aria-label":`Open story ${H.name}`,title:H.name,children:[d.jsx(A9,{$hasNew:H.hasNew,children:d.jsx(M9,{children:d.jsx(O9,{src:H.img,alt:H.name,draggable:!1})})}),d.jsx(N9,{children:H.name})]},H.id))})}),d.jsx(C9,{currentItem:_,isOpen:U,slideIndex:R,setSlideIndex:k,onClose:$,duration:l})]})}const Fu="studentProfile",_9=S.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,B9=S.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 3rem;
  }
`,L9=S.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,$9=S.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,U9=S.div`
  position: relative;
`,H9=S.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e5e7eb;
  @media (min-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
  @media (min-width: 1024px) {
    width: 10rem;
    height: 10rem;
  }
`,G9=S.div`
  position: absolute;
  top: -6px;
  left: -6px;
  background: #111827;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.25rem 0.4rem;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Y9=S.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
`,q9=S.div`
  display: none;
  gap: 2rem;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    display: flex;
  }
`,zi=S.div`
  font-weight: 600;
  font-size: 1.125rem;
  span {
    font-weight: 400;
    margin-left: 0.25rem;
    color: #6b7280;
  }
`,X9=S.div`
  flex: 1;
`,V9=S.div`
  font-weight: 600;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,Q9=S.div`
  font-size: 0.875rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,K9=S.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,Z9=S.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,J9=S.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,F9=S.button`
  flex: 1;
  background: #3b82f6;
  color: #fff;
  font-weight: 600;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    flex: initial;
    padding: 0.5rem 2rem;
    font-size: 1rem;
  }
`,W9=S.button`
  flex: 1;
  border: 1px solid #d1d5db;
  font-weight: 600;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  position: relative;
  @media (min-width: 768px) {
    flex: initial;
    padding: 0.5rem 2rem;
    font-size: 1rem;
  }
  &[data-joined="true"] {
    background: #10b9810f;
    border-color: #10b981;
    color: #065f46;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,I9=S.button`
  border: 1px solid #d1d5db;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
`,P9=S.div`
  position: relative;
  display: inline-block;
`,eE=S.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  min-width: 200px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  z-index: 10;
  overflow: hidden;
`,l1=S.button`
  width: 100%;
  text-align: left;
  padding: 0.625rem 0.75rem;
  background: #fff;
  border: 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #111827;
  &:hover {
    background: #f9fafb;
  }
  &[data-danger="true"] {
    color: #b91c1c;
  }
`,tE=S.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: 1px dashed #d1d5db;
  border-radius: 12px;
  background: #f9fafb;
  color: #111827;
  margin-bottom: 1rem;
`,nE=S.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    flex-shrink: 0;
  }
`,aE=S.button`
  border: 1px solid #111827;
  background: #111827;
  color: #fff;
  border-radius: 10px;
  padding: 0.5rem 0.85rem;
  font-weight: 700;
  font-size: 0.875rem;
`,iE=S.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.75rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`,lE=S.button`
  aspect-ratio: 1/1;
  position: relative;
  border: 0;
  background: #f3f4f6;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  display: grid;
  place-items: center;
  &:focus-visible {
    outline: 2px solid #111827;
    outline-offset: 2px;
  }
`,rE=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,oE=S.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`,sE=S.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 24, 39, 0.45);
  color: #fff;
  font-weight: 800;
  font-size: 0.8rem;
`,cE=S.div`
  padding: 1rem;
  text-align: center;
  color: #6b7280;
`,uE=S.div`
  display: flex;
  border-top: 1px solid #e5e7eb;
`,r1=S.button`
  flex: 1;
  padding: 0.75rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-top: 2px solid
    ${({$active:a})=>a?"#111827":"transparent"};
  color: ${({$active:a})=>a?"#111827":"#9ca3af"};
`,o1=S.div`
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`,s1=S.div`
  width: min(96vw, 720px);
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.18);
  overflow: hidden;
`,c1=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #f3f4f6;
`,u1=S.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
`,f1=S.button`
  border: 1px solid #e5e7eb;
  background: #fff;
  border-radius: 8px;
  padding: 0.25rem;
`,fE=S.div`
  padding: 1rem;
  display: grid;
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,dE=S.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px;
  padding: 1rem;
  text-align: left;
  background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid;
  gap: 0.25rem;
  cursor: pointer;
  &:hover {
    border-color: #2563eb;
  }
  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    color: #111827;
  }
  p {
    margin: 0;
    color: #6b7280;
    font-size: 0.875rem;
  }
  strong {
    font-size: 1.25rem;
  }
`,hE=S.div`
  border-top: 1px solid #f3f4f6;
  padding: 0.75rem 1.25rem;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`,d1=S.button`
  background: #111827;
  color: #fff;
  border-radius: 10px;
  padding: 0.6rem 1rem;
  font-weight: 700;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,h1=S.button`
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 0.6rem 1rem;
  font-weight: 600;
  background: #fff;
`,pE=S.div`
  padding: 1rem 1.25rem;
  display: grid;
  gap: 0.75rem;
`,Wu=S.div`
  display: grid;
  gap: 0.25rem;
`,Iu=S.label`
  font-size: 0.85rem;
  color: #374151;
`,Pu=S.input`
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 0.6rem 0.75rem;
  font-size: 0.95rem;
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`,mE=S.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem 1rem;
`,gE=Bt` to { transform: rotate(360deg); }`,yE=S.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;S.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid #e5e7eb;
  border-top-color: #111827;
  animation: ${gE} 0.8s linear infinite;
  margin-right: 10px;
`;const vE=S.div`
  color: #6b7280;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
`;function bE(){const a=bf(),l=dn(),s=y.useMemo(()=>Array.isArray(Ju)?Ju:[Ju],[]),[o,u]=y.useState(null),[f,p]=y.useState("loading");y.useEffect(()=>{const re=Date.now();(()=>{const K=mg.get("instalearn_teacher_id"),I=l?.state?.teacher&&l.state.teacher.id?l.state.teacher:null;let ee=null;K&&(ee=s.find(F=>F.id===K)||null),!ee&&I?.id&&(ee=s.find(F=>F.id===I.id)||null),!ee&&s.length>0&&(ee=s[0]);const ue=()=>{ee?(u(ee),p("ready")):p("notfound"),window.scrollTo({top:0,left:0,behavior:"auto"})},C=Date.now()-re,G=Math.max(1e3-C,0);setTimeout(ue,G)})()},[l?.state,s]);const[v,g]=y.useState(!1),[m,x]=y.useState("basic"),[w,j]=y.useState(!1),[R,k]=y.useState(!1),[_,U]=y.useState(!1),[M,$]=y.useState(!1),[L,Z]=y.useState({name:"",email:"",avatar:""}),J=3,H=y.useMemo(()=>`joined:${o?.id||o?.name||"teacher"}`,[o]);y.useEffect(()=>{if(!o)return;const Q=localStorage.getItem(H)==="true";k(Q);const re=localStorage.getItem(Fu);if(re)try{const N=JSON.parse(re);Z({name:N.name||"",email:N.email||"",avatar:N.avatar||""})}catch{console.error("Failed to parse profile from storage.")}},[o,H]),y.useEffect(()=>{o&&localStorage.setItem(H,R?"true":"false")},[R,H,o]),y.useEffect(()=>{if(!_)return;const Q=re=>{const N=re.target;N.closest&&(N.closest('[aria-haspopup="menu"]')||N.closest('[role="menu"]'))||U(!1)};return document.addEventListener("click",Q),()=>document.removeEventListener("click",Q)},[_]);const V=Q=>{if(!R&&Q>=J){g(!0);return}Q===0&&a("/instalearn/library")},ne=()=>{R||g(!0)},de=async()=>{j(!0),await new Promise(Q=>setTimeout(Q,1200)),j(!1),g(!1),$(!0)},_e=()=>{const Q={name:L.name?.trim(),email:L.email?.trim(),avatar:L.avatar?.trim(),createdAt:new Date().toISOString(),plan:m,isPro:!0};if(!Q.name||!Q.email){alert("Please fill Name and Email to continue.");return}localStorage.setItem(Fu,JSON.stringify(Q)),k(!0),$(!1)},Ae=()=>{localStorage.removeItem(H),localStorage.removeItem(Fu),k(!1),U(!1)},Be=R;if(f==="loading")return d.jsx(yE,{children:d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[d.jsx(o9,{visible:!0,height:"48",width:"48",strokeColor:"#111827",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"teacher-loading"}),d.jsx(vE,{style:{marginTop:"12px"},children:"Finding your teacher…"})]})});if(f==="notfound"||!o)return d.jsx("div",{style:{minHeight:"60vh",display:"grid",placeItems:"center"},children:d.jsxs("div",{style:{textAlign:"center"},children:[d.jsx("p",{style:{marginBottom:12},children:"We couldn't find that teacher."}),d.jsx("button",{onClick:()=>a("/instalearn/"),style:{padding:"0.6rem 1rem",borderRadius:8,border:"1px solid #e5e7eb",background:"#fff"},children:"Go back"})]})});const P=Array.isArray(o.bookList)?o.bookList:[];return d.jsxs(_9,{children:[d.jsxs(B9,{children:[d.jsxs(L9,{children:[d.jsxs($9,{children:[d.jsxs(U9,{children:[d.jsx(H9,{src:o.avatar,alt:o.name}),!R&&d.jsxs(G9,{"aria-hidden":"true",title:"Pro library locked",children:[d.jsx(ku,{size:12})," LOCKED"]})]}),d.jsxs(Y9,{children:[d.jsxs(zi,{children:[o.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(zi,{children:[o.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(zi,{children:[o.learns," ",d.jsx("span",{children:"learns"})]})]})]}),d.jsxs(X9,{children:[d.jsxs(q9,{children:[d.jsxs(zi,{children:[o.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(zi,{children:[o.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(zi,{children:[o.learns," ",d.jsx("span",{children:"learns"})]})]}),d.jsx(V9,{children:o.name}),d.jsx(Q9,{children:o.subject}),d.jsx(K9,{children:o.bio}),d.jsxs(Z9,{children:["🎓 ",o.experience," years experience"]}),d.jsxs(J9,{children:[d.jsx(F9,{onClick:()=>a("/user/profile"),children:"Follow"}),d.jsx(W9,{onClick:ne,disabled:w,"data-joined":R,"aria-pressed":R,"aria-label":R?"Joined":"Join",title:R?"You're in!":"Join this teacher",children:R?d.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[d.jsx(T3,{size:18})," Joined"]}):w?"Processing…":"Join"}),d.jsxs(P9,{children:[d.jsx(I9,{"aria-haspopup":"menu","aria-expanded":_,"aria-label":"More options",onClick:()=>U(Q=>!Q),title:"More options",children:"▼"}),_&&d.jsxs(eE,{role:"menu",children:[R&&d.jsxs(l1,{role:"menuitem","data-danger":"true",onClick:Ae,title:"Cancel your membership",children:[d.jsx(Au,{size:16})," Cancel membership"]}),d.jsx(l1,{role:"menuitem",onClick:()=>U(!1),children:"Close"})]})]})]}),d.jsxs(tE,{hidden:Be,role:"note","aria-live":"polite",children:[d.jsxs(nE,{children:[d.jsx(ku,{size:18})," Pro library locked — get full access to all concepts & posts."]}),d.jsx(aE,{onClick:()=>g(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),d.jsx(D9,{items:c9,duration:3e3,onOpen:Q=>console.log("opened:",Q),onClose:()=>console.log("closed")}),d.jsxs(uE,{children:[d.jsx(r1,{$active:!0,children:d.jsx(_3,{size:20})}),d.jsx(r1,{children:d.jsx(w3,{size:20})})]}),P.length===0?d.jsx(cE,{children:"No books available"}):d.jsx(iE,{"aria-label":"Teacher books",children:P.map((Q,re)=>{const N=!R&&re>=J,K=Q?.thumbnail||"";return d.jsxs(lE,{onClick:()=>V(re),"aria-disabled":N,title:N?"Join to unlock":`Open ${Q?.title||"Book"}`,children:[K?d.jsx(rE,{src:K,alt:Q?.title||"Book thumbnail"}):d.jsx(oE,{children:d.jsx(Lf,{size:24})}),N&&d.jsxs(sE,{children:[d.jsx(ku,{size:16,style:{marginRight:6}})," Join to view"]})]},Q.bookId??re)})})]}),v&&d.jsx(o1,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:d.jsxs(s1,{children:[d.jsxs(c1,{children:[d.jsx(u1,{id:"pricing-title",children:"Choose your plan"}),d.jsx(f1,{onClick:()=>g(!1),"aria-label":"Close pricing",children:d.jsx(Au,{size:18})})]}),d.jsx(fE,{children:[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}].map(Q=>d.jsxs(dE,{onClick:()=>x(Q.key),$active:m===Q.key,"aria-pressed":m===Q.key,children:[d.jsx("h4",{children:Q.name}),d.jsx("strong",{children:Q.price}),d.jsx("p",{children:Q.desc})]},Q.key))}),d.jsxs(hE,{children:[d.jsx(h1,{onClick:()=>g(!1),children:"Not now"}),d.jsx(d1,{onClick:de,disabled:w,children:w?"Processing payment…":"Demo Pay"})]})]})}),M&&d.jsx(o1,{role:"dialog","aria-modal":"true","aria-labelledby":"profile-form-title",children:d.jsxs(s1,{children:[d.jsxs(c1,{children:[d.jsx(u1,{id:"profile-form-title",children:"Create your student profile"}),d.jsx(f1,{onClick:()=>$(!1),"aria-label":"Close profile form",children:d.jsx(Au,{size:18})})]}),d.jsxs(pE,{children:[d.jsxs(Wu,{children:[d.jsx(Iu,{htmlFor:"pf-name",children:"Full Name"}),d.jsx(Pu,{id:"pf-name",value:L.name,onChange:Q=>Z(re=>({...re,name:Q.target.value})),placeholder:"e.g., Priya Sharma"})]}),d.jsxs(Wu,{children:[d.jsx(Iu,{htmlFor:"pf-email",children:"Email"}),d.jsx(Pu,{id:"pf-email",type:"email",value:L.email,onChange:Q=>Z(re=>({...re,email:Q.target.value})),placeholder:"you@example.com"})]}),d.jsxs(Wu,{children:[d.jsx(Iu,{htmlFor:"pf-avatar",children:"Avatar initials (optional)"}),d.jsx(Pu,{id:"pf-avatar",value:L.avatar,onChange:Q=>Z(re=>({...re,avatar:Q.target.value})),placeholder:"PS"})]})]}),d.jsxs(mE,{children:[d.jsx(h1,{onClick:()=>$(!1),children:"Cancel"}),d.jsx(d1,{onClick:_e,children:"Save & Finish"})]})]})})]})}const xE=S.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,SE=S.aside`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 280px; /* left sidebar true width */
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
  }
`,wE=S.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,EE=S.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,jE=S.aside`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: ${a=>a.$width}px;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    background: #fff;
    z-index: 50;
    box-shadow: -2px 0 8px rgba(0,0,0,0.08);
    /* It's always open; keep transform at 0 to avoid sliding out */
    transform: translateX(0);
    transition: ${a=>a.$isResizing?"none":"width 0.1s ease"};
    will-change: width;
    contain: layout;
  }
`,CE=S.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    left: 0;   /* sits at the inner left edge of the right sidebar */
    top: 0;
    bottom: 0;
    width: 8px;
    cursor: ew-resize;
    z-index: 52;

    &:hover::before,
    &.active::before {
      content: '';
      position: absolute;
      left: 2px;
      top: 0;
      bottom: 0;
      width: 4px;
      background: #0066cc;
      border-radius: 2px;
    }
  }
`,TE=S.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,zE=S.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function RE(){const[a,l]=y.useState(360),[s,o]=y.useState(!1),u=y.useRef(null),f=350,p=600,v=g=>{g.preventDefault(),o(!0),u.current={startX:g.clientX,startWidth:a}};return y.useEffect(()=>{const g=(w,j,R)=>Math.min(Math.max(w,j),R),m=w=>{if(!s||!u.current)return;const{startX:j,startWidth:R}=u.current,k=j-w.clientX,_=g(R+k,f,p);l(_)},x=()=>{s&&(o(!1),u.current=null)};return s&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",x),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",x),document.body.style.cursor="",document.body.style.userSelect=""}},[s]),d.jsxs(xE,{children:[d.jsx(SE,{children:d.jsx(kw,{})}),d.jsxs(wE,{children:[d.jsxs(EE,{$sidebarWidth:a,$isResizing:s,children:[d.jsx(TE,{children:d.jsx(xw,{})}),d.jsxs(w2,{children:[d.jsx(Na,{path:"/instalearn",element:d.jsx(tS,{})}),d.jsx(Na,{path:"/instalearn/teacher",element:d.jsx(bE,{})}),d.jsx(Na,{path:"/instalearn/library",element:d.jsx(u3,{})}),d.jsx(Na,{path:"/instalearn/notifications",element:d.jsx(Um,{})}),d.jsx(Na,{path:"/instalearn/more",element:d.jsx(Um,{})}),d.jsx(Na,{path:"/instalearn/profile",element:d.jsx(oS,{})})]})]}),d.jsxs(jE,{$width:a,$isResizing:s,children:[d.jsx(CE,{className:s?"active":"",onMouseDown:v,"aria-label":"Resize sidebar"}),d.jsx(Zw,{})]})]}),d.jsx(zE,{children:d.jsx(Jw,{})})]})}Ob.createRoot(document.getElementById("root")).render(d.jsx(V2,{children:d.jsx(RE,{})}));
