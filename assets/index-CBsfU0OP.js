(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function u(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=u(c);fetch(c.href,f)}})();function Xi(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var gc={exports:{}},ki={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function my(){if(Yp)return ki;Yp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(o,c,f){var p=null;if(f!==void 0&&(p=""+f),c.key!==void 0&&(p=""+c.key),"key"in c){f={};for(var y in c)y!=="key"&&(f[y]=c[y])}else f=c;return c=f.ref,{$$typeof:a,type:o,key:p,ref:c!==void 0?c:null,props:f}}return ki.Fragment=i,ki.jsx=u,ki.jsxs=u,ki}var qp;function gy(){return qp||(qp=1,gc.exports=my()),gc.exports}var d=gy(),vc={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function vy(){if(Gp)return se;Gp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.iterator;function A(j){return j===null||typeof j!="object"?null:(j=T&&j[T]||j["@@iterator"],typeof j=="function"?j:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,U={};function M(j,Y,J){this.props=j,this.context=Y,this.refs=U,this.updater=J||R}M.prototype.isReactComponent={},M.prototype.setState=function(j,Y){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,Y,"setState")},M.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function $(){}$.prototype=M.prototype;function L(j,Y,J){this.props=j,this.context=Y,this.refs=U,this.updater=J||R}var Z=L.prototype=new $;Z.constructor=L,k(Z,M.prototype),Z.isPureReactComponent=!0;var K=Array.isArray;function q(){}var V={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function W(j,Y,J){var F=J.ref;return{$$typeof:a,type:j,key:Y,ref:F!==void 0?F:null,props:J}}function ce(j,Y){return W(j.type,Y,j.props)}function fe(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function He(j){var Y={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(J){return Y[J]})}var P=/\/+/g;function ae(j,Y){return typeof j=="object"&&j!==null&&j.key!=null?He(""+j.key):Y.toString(36)}function ge(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(q,q):(j.status="pending",j.then(function(Y){j.status==="pending"&&(j.status="fulfilled",j.value=Y)},function(Y){j.status==="pending"&&(j.status="rejected",j.reason=Y)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function D(j,Y,J,F,ie){var ue=typeof j;(ue==="undefined"||ue==="boolean")&&(j=null);var ve=!1;if(j===null)ve=!0;else switch(ue){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(j.$$typeof){case a:case i:ve=!0;break;case b:return ve=j._init,D(ve(j._payload),Y,J,F,ie)}}if(ve)return ie=ie(j),ve=F===""?"."+ae(j,0):F,K(ie)?(J="",ve!=null&&(J=ve.replace(P,"$&/")+"/"),D(ie,Y,J,"",function(jt){return jt})):ie!=null&&(fe(ie)&&(ie=ce(ie,J+(ie.key==null||j&&j.key===ie.key?"":(""+ie.key).replace(P,"$&/")+"/")+ve)),Y.push(ie)),1;ve=0;var qe=F===""?".":F+":";if(K(j))for(var Ee=0;Ee<j.length;Ee++)F=j[Ee],ue=qe+ae(F,Ee),ve+=D(F,Y,J,ue,ie);else if(Ee=A(j),typeof Ee=="function")for(j=Ee.call(j),Ee=0;!(F=j.next()).done;)F=F.value,ue=qe+ae(F,Ee++),ve+=D(F,Y,J,ue,ie);else if(ue==="object"){if(typeof j.then=="function")return D(ge(j),Y,J,F,ie);throw Y=String(j),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Q(j,Y,J){if(j==null)return j;var F=[],ie=0;return D(j,F,"","",function(ue){return Y.call(J,ue,ie++)}),F}function I(j){if(j._status===-1){var Y=j._result;Y=Y(),Y.then(function(J){(j._status===0||j._status===-1)&&(j._status=1,j._result=J)},function(J){(j._status===0||j._status===-1)&&(j._status=2,j._result=J)}),j._status===-1&&(j._status=0,j._result=Y)}if(j._status===1)return j._result.default;throw j._result}var ee=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},pe={map:Q,forEach:function(j,Y,J){Q(j,function(){Y.apply(this,arguments)},J)},count:function(j){var Y=0;return Q(j,function(){Y++}),Y},toArray:function(j){return Q(j,function(Y){return Y})||[]},only:function(j){if(!fe(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return se.Activity=w,se.Children=pe,se.Component=M,se.Fragment=u,se.Profiler=c,se.PureComponent=L,se.StrictMode=o,se.Suspense=g,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,se.__COMPILER_RUNTIME={__proto__:null,c:function(j){return V.H.useMemoCache(j)}},se.cache=function(j){return function(){return j.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(j,Y,J){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var F=k({},j.props),ie=j.key;if(Y!=null)for(ue in Y.key!==void 0&&(ie=""+Y.key),Y)!ne.call(Y,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&Y.ref===void 0||(F[ue]=Y[ue]);var ue=arguments.length-2;if(ue===1)F.children=J;else if(1<ue){for(var ve=Array(ue),qe=0;qe<ue;qe++)ve[qe]=arguments[qe+2];F.children=ve}return W(j.type,ie,F)},se.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:f,_context:j},j},se.createElement=function(j,Y,J){var F,ie={},ue=null;if(Y!=null)for(F in Y.key!==void 0&&(ue=""+Y.key),Y)ne.call(Y,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ie[F]=Y[F]);var ve=arguments.length-2;if(ve===1)ie.children=J;else if(1<ve){for(var qe=Array(ve),Ee=0;Ee<ve;Ee++)qe[Ee]=arguments[Ee+2];ie.children=qe}if(j&&j.defaultProps)for(F in ve=j.defaultProps,ve)ie[F]===void 0&&(ie[F]=ve[F]);return W(j,ue,ie)},se.createRef=function(){return{current:null}},se.forwardRef=function(j){return{$$typeof:y,render:j}},se.isValidElement=fe,se.lazy=function(j){return{$$typeof:b,_payload:{_status:-1,_result:j},_init:I}},se.memo=function(j,Y){return{$$typeof:m,type:j,compare:Y===void 0?null:Y}},se.startTransition=function(j){var Y=V.T,J={};V.T=J;try{var F=j(),ie=V.S;ie!==null&&ie(J,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(q,ee)}catch(ue){ee(ue)}finally{Y!==null&&J.types!==null&&(Y.types=J.types),V.T=Y}},se.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},se.use=function(j){return V.H.use(j)},se.useActionState=function(j,Y,J){return V.H.useActionState(j,Y,J)},se.useCallback=function(j,Y){return V.H.useCallback(j,Y)},se.useContext=function(j){return V.H.useContext(j)},se.useDebugValue=function(){},se.useDeferredValue=function(j,Y){return V.H.useDeferredValue(j,Y)},se.useEffect=function(j,Y){return V.H.useEffect(j,Y)},se.useEffectEvent=function(j){return V.H.useEffectEvent(j)},se.useId=function(){return V.H.useId()},se.useImperativeHandle=function(j,Y,J){return V.H.useImperativeHandle(j,Y,J)},se.useInsertionEffect=function(j,Y){return V.H.useInsertionEffect(j,Y)},se.useLayoutEffect=function(j,Y){return V.H.useLayoutEffect(j,Y)},se.useMemo=function(j,Y){return V.H.useMemo(j,Y)},se.useOptimistic=function(j,Y){return V.H.useOptimistic(j,Y)},se.useReducer=function(j,Y,J){return V.H.useReducer(j,Y,J)},se.useRef=function(j){return V.H.useRef(j)},se.useState=function(j){return V.H.useState(j)},se.useSyncExternalStore=function(j,Y,J){return V.H.useSyncExternalStore(j,Y,J)},se.useTransition=function(){return V.H.useTransition()},se.version="19.2.0",se}var Xp;function hf(){return Xp||(Xp=1,vc.exports=vy()),vc.exports}var x=hf();const Oe=Xi(x);var yc={exports:{}},Di={},xc={exports:{}},bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function yy(){return Vp||(Vp=1,(function(a){function i(D,Q){var I=D.length;D.push(Q);e:for(;0<I;){var ee=I-1>>>1,pe=D[ee];if(0<c(pe,Q))D[ee]=Q,D[I]=pe,I=ee;else break e}}function u(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var Q=D[0],I=D.pop();if(I!==Q){D[0]=I;e:for(var ee=0,pe=D.length,j=pe>>>1;ee<j;){var Y=2*(ee+1)-1,J=D[Y],F=Y+1,ie=D[F];if(0>c(J,I))F<pe&&0>c(ie,J)?(D[ee]=ie,D[F]=I,ee=F):(D[ee]=J,D[Y]=I,ee=Y);else if(F<pe&&0>c(ie,I))D[ee]=ie,D[F]=I,ee=F;else break e}}return Q}function c(D,Q){var I=D.sortIndex-Q.sortIndex;return I!==0?I:D.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var p=Date,y=p.now();a.unstable_now=function(){return p.now()-y}}var g=[],m=[],b=1,w=null,T=3,A=!1,R=!1,k=!1,U=!1,M=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function Z(D){for(var Q=u(m);Q!==null;){if(Q.callback===null)o(m);else if(Q.startTime<=D)o(m),Q.sortIndex=Q.expirationTime,i(g,Q);else break;Q=u(m)}}function K(D){if(k=!1,Z(D),!R)if(u(g)!==null)R=!0,q||(q=!0,He());else{var Q=u(m);Q!==null&&ge(K,Q.startTime-D)}}var q=!1,V=-1,ne=5,W=-1;function ce(){return U?!0:!(a.unstable_now()-W<ne)}function fe(){if(U=!1,q){var D=a.unstable_now();W=D;var Q=!0;try{e:{R=!1,k&&(k=!1,$(V),V=-1),A=!0;var I=T;try{t:{for(Z(D),w=u(g);w!==null&&!(w.expirationTime>D&&ce());){var ee=w.callback;if(typeof ee=="function"){w.callback=null,T=w.priorityLevel;var pe=ee(w.expirationTime<=D);if(D=a.unstable_now(),typeof pe=="function"){w.callback=pe,Z(D),Q=!0;break t}w===u(g)&&o(g),Z(D)}else o(g);w=u(g)}if(w!==null)Q=!0;else{var j=u(m);j!==null&&ge(K,j.startTime-D),Q=!1}}break e}finally{w=null,T=I,A=!1}Q=void 0}}finally{Q?He():q=!1}}}var He;if(typeof L=="function")He=function(){L(fe)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,ae=P.port2;P.port1.onmessage=fe,He=function(){ae.postMessage(null)}}else He=function(){M(fe,0)};function ge(D,Q){V=M(function(){D(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(D){switch(T){case 1:case 2:case 3:var Q=3;break;default:Q=T}var I=T;T=Q;try{return D()}finally{T=I}},a.unstable_requestPaint=function(){U=!0},a.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=T;T=D;try{return Q()}finally{T=I}},a.unstable_scheduleCallback=function(D,Q,I){var ee=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ee+I:ee):I=ee,D){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=I+pe,D={id:b++,callback:Q,priorityLevel:D,startTime:I,expirationTime:pe,sortIndex:-1},I>ee?(D.sortIndex=I,i(m,D),u(g)===null&&D===u(m)&&(k?($(V),V=-1):k=!0,ge(K,I-ee))):(D.sortIndex=pe,i(g,D),R||A||(R=!0,q||(q=!0,He()))),D},a.unstable_shouldYield=ce,a.unstable_wrapCallback=function(D){var Q=T;return function(){var I=T;T=Q;try{return D.apply(this,arguments)}finally{T=I}}}})(bc)),bc}var Qp;function xy(){return Qp||(Qp=1,xc.exports=yy()),xc.exports}var Sc={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function by(){if(Zp)return ct;Zp=1;var a=hf();function i(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)m+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,m,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:w==null?null:""+w,children:g,containerInfo:m,implementation:b}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ct.createPortal=function(g,m){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return f(g,m,null,b)},ct.flushSync=function(g){var m=p.T,b=o.p;try{if(p.T=null,o.p=2,g)return g()}finally{p.T=m,o.p=b,o.d.f()}},ct.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(g,m))},ct.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},ct.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var b=m.as,w=y(b,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;b==="style"?o.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:A}):b==="script"&&o.d.X(g,{crossOrigin:w,integrity:T,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ct.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var b=y(m.as,m.crossOrigin);o.d.M(g,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(g)},ct.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var b=m.as,w=y(b,m.crossOrigin);o.d.L(g,b,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ct.preloadModule=function(g,m){if(typeof g=="string")if(m){var b=y(m.as,m.crossOrigin);o.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(g)},ct.requestFormReset=function(g){o.d.r(g)},ct.unstable_batchedUpdates=function(g,m){return g(m)},ct.useFormState=function(g,m,b){return p.H.useFormState(g,m,b)},ct.useFormStatus=function(){return p.H.useHostTransitionStatus()},ct.version="19.2.0",ct}var Kp;function r1(){if(Kp)return Sc.exports;Kp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Sc.exports=by(),Sc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Sy(){if(Jp)return Di;Jp=1;var a=xy(),i=hf(),u=r1();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return g(r),e;if(s===l)return g(r),t;s=s.sibling}throw Error(o(188))}if(n.return!==l.return)n=r,l=s;else{for(var h=!1,v=r.child;v;){if(v===n){h=!0,n=r,l=s;break}if(v===l){h=!0,l=r,n=s;break}v=v.sibling}if(!h){for(v=s.child;v;){if(v===n){h=!0,n=s,l=r;break}if(v===l){h=!0,l=s,n=r;break}v=v.sibling}if(!h)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function He(e){return e===null||typeof e!="object"?null:(e=fe&&e[fe]||e["@@iterator"],typeof e=="function"?e:null)}var P=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===P?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case M:return"Profiler";case U:return"StrictMode";case K:return"Suspense";case q:return"SuspenseList";case W:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case L:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var ge=Array.isArray,D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ee=[],pe=-1;function j(e){return{current:e}}function Y(e){0>pe||(e.current=ee[pe],ee[pe]=null,pe--)}function J(e,t){pe++,ee[pe]=e.current,e.current=t}var F=j(null),ie=j(null),ue=j(null),ve=j(null);function qe(e,t){switch(J(ue,t),J(ie,e),J(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?cp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=cp(t),e=fp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(F),J(F,e)}function Ee(){Y(F),Y(ie),Y(ue)}function jt(e){e.memoizedState!==null&&J(ve,e);var t=F.current,n=fp(t,e.type);t!==n&&(J(ie,e),J(F,n))}function Kt(e){ie.current===e&&(Y(F),Y(ie)),ve.current===e&&(Y(ve),Oi._currentValue=I)}var ht,La;function Bt(e){if(ht===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ht=t&&t[1]||"",La=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+La}var Be=!1;function $a(e,t){if(!e||Be)return"";Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(B){var _=B}Reflect.construct(e,[],X)}else{try{X.call()}catch(B){_=B}e.call(X.prototype)}}else{try{throw Error()}catch(B){_=B}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(B){if(B&&_&&typeof B.stack=="string")return[B.stack,_.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),h=s[0],v=s[1];if(h&&v){var E=h.split(`
`),N=v.split(`
`);for(r=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;if(l===E.length||r===N.length)for(l=E.length-1,r=N.length-1;1<=l&&0<=r&&E[l]!==N[r];)r--;for(;1<=l&&0<=r;l--,r--)if(E[l]!==N[r]){if(l!==1||r!==1)do if(l--,r--,0>r||E[l]!==N[r]){var H=`
`+E[l].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=l&&0<=r);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Bt(n):""}function Yl(e,t){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return e.child!==t&&t!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return $a(e.type,!1);case 11:return $a(e.type.render,!1);case 1:return $a(e.type,!0);case 31:return Bt("Activity");default:return""}}function Yf(e){try{var t="",n=null;do t+=Yl(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var tu=Object.prototype.hasOwnProperty,nu=a.unstable_scheduleCallback,au=a.unstable_cancelCallback,Zg=a.unstable_shouldYield,Kg=a.unstable_requestPaint,Ct=a.unstable_now,Jg=a.unstable_getCurrentPriorityLevel,qf=a.unstable_ImmediatePriority,Gf=a.unstable_UserBlockingPriority,Ji=a.unstable_NormalPriority,Fg=a.unstable_LowPriority,Xf=a.unstable_IdlePriority,Wg=a.log,Ig=a.unstable_setDisableYieldValue,ql=null,Tt=null;function Hn(e){if(typeof Wg=="function"&&Ig(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(ql,e)}catch{}}var zt=Math.clz32?Math.clz32:tv,Pg=Math.log,ev=Math.LN2;function tv(e){return e>>>=0,e===0?32:31-(Pg(e)/ev|0)|0}var Fi=256,Wi=262144,Ii=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pi(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var r=0,s=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var v=l&134217727;return v!==0?(l=v&~s,l!==0?r=ma(l):(h&=v,h!==0?r=ma(h):n||(n=v&~e,n!==0&&(r=ma(n))))):(v=l&~s,v!==0?r=ma(v):h!==0?r=ma(h):n||(n=l&~e,n!==0&&(r=ma(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Gl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(){var e=Ii;return Ii<<=1,(Ii&62914560)===0&&(Ii=4194304),e}function lu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function av(e,t,n,l,r,s){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,E=e.expirationTimes,N=e.hiddenUpdates;for(n=h&~n;0<n;){var H=31-zt(n),X=1<<H;v[H]=0,E[H]=-1;var _=N[H];if(_!==null)for(N[H]=null,H=0;H<_.length;H++){var B=_[H];B!==null&&(B.lane&=-536870913)}n&=~X}l!==0&&Qf(e,l,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(h&~t))}function Qf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-zt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Zf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-zt(n),r=1<<l;r&t|e[l]&t&&(e[l]|=t),n&=~r}}function Kf(e,t){var n=t&-t;return n=(n&42)!==0?1:iu(n),(n&(e.suspendedLanes|t))!==0?0:n}function iu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ru(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jf(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:kp(e.type))}function Ff(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var Yn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Yn,gt="__reactProps$"+Yn,Ua="__reactContainer$"+Yn,ou="__reactEvents$"+Yn,lv="__reactListeners$"+Yn,iv="__reactHandles$"+Yn,Wf="__reactResources$"+Yn,Vl="__reactMarker$"+Yn;function uu(e){delete e[lt],delete e[gt],delete e[ou],delete e[lv],delete e[iv]}function Ha(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ua]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yp(e);e!==null;){if(n=e[lt])return n;e=yp(e)}return t}e=n,n=e.parentNode}return null}function Ya(e){if(e=e[lt]||e[Ua]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ql(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function qa(e){var t=e[Wf];return t||(t=e[Wf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Vl]=!0}var If=new Set,Pf={};function ga(e,t){Ga(e,t),Ga(e+"Capture",t)}function Ga(e,t){for(Pf[e]=t,e=0;e<t.length;e++)If.add(t[e])}var rv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ed={},td={};function ov(e){return tu.call(td,e)?!0:tu.call(ed,e)?!1:rv.test(e)?td[e]=!0:(ed[e]=!0,!1)}function er(e,t,n){if(ov(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function tr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function cn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uv(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,s=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(h){n=""+h,s.call(this,h)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function su(e){if(!e._valueTracker){var t=nd(e)?"checked":"value";e._valueTracker=uv(e,t,""+e[t])}}function ad(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=nd(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sv=/[\n"\\]/g;function $t(e){return e.replace(sv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function cu(e,t,n,l,r,s,h,v){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?fu(e,h,Lt(t)):n!=null?fu(e,h,Lt(n)):l!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Lt(v):e.removeAttribute("name")}function ld(e,t,n,l,r,s,h,v){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){su(e);return}n=n!=null?""+Lt(n):"",t=t!=null?""+Lt(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=v?e.checked:!!l,e.defaultChecked=!!l,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),su(e)}function fu(e,t,n){t==="number"&&nr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Xa(e,t,n,l){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function id(e,t,n){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Lt(n):""}function rd(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(ge(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Lt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),su(e)}function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function od(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||cv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ud(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&n[r]!==l&&od(e,r,l)}else for(var s in t)t.hasOwnProperty(s)&&od(e,s,t[s])}function du(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ar(e){return dv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function fn(){}var hu=null;function pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,Za=null;function sd(e){var t=Ya(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(cu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+$t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var r=l[gt]||null;if(!r)throw Error(o(90));cu(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&ad(l)}break e;case"textarea":id(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Xa(e,!!n.multiple,t,!1)}}}var mu=!1;function cd(e,t,n){if(mu)return e(t,n);mu=!0;try{var l=e(t);return l}finally{if(mu=!1,(Qa!==null||Za!==null)&&(Xr(),Qa&&(t=Qa,e=Za,Za=Qa=null,sd(t),e)))for(t=0;t<e.length;t++)sd(e[t])}}function Zl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[gt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=!1;if(dn)try{var Kl={};Object.defineProperty(Kl,"passive",{get:function(){gu=!0}}),window.addEventListener("test",Kl,Kl),window.removeEventListener("test",Kl,Kl)}catch{gu=!1}var qn=null,vu=null,lr=null;function fd(){if(lr)return lr;var e,t=vu,n=t.length,l,r="value"in qn?qn.value:qn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var h=n-e;for(l=1;l<=h&&t[n-l]===r[s-l];l++);return lr=r.slice(e,1<l?1-l:void 0)}function ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rr(){return!0}function dd(){return!1}function vt(e){function t(n,l,r,s,h){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=s,this.target=h,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(s):s[v]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rr:dd,this.isPropagationStopped=dd,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},or=vt(va),Jl=w({},va,{view:0,detail:0}),hv=vt(Jl),yu,xu,Fl,ur=w({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fl&&(Fl&&e.type==="mousemove"?(yu=e.screenX-Fl.screenX,xu=e.screenY-Fl.screenY):xu=yu=0,Fl=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:xu}}),hd=vt(ur),pv=w({},ur,{dataTransfer:0}),mv=vt(pv),gv=w({},Jl,{relatedTarget:0}),bu=vt(gv),vv=w({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=vt(vv),xv=w({},va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bv=vt(xv),Sv=w({},va,{data:0}),pd=vt(Sv),wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jv[e])?!!t[e]:!1}function Su(){return Cv}var Tv=w({},Jl,{key:function(e){if(e.key){var t=wv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ev[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(e){return e.type==="keypress"?ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zv=vt(Tv),Rv=w({},ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=vt(Rv),Av=w({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),Ov=vt(Av),Mv=w({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=vt(Mv),_v=w({},ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=vt(_v),Dv=w({},va,{newState:0,oldState:0}),Bv=vt(Dv),Lv=[9,13,27,32],wu=dn&&"CompositionEvent"in window,Wl=null;dn&&"documentMode"in document&&(Wl=document.documentMode);var $v=dn&&"TextEvent"in window&&!Wl,gd=dn&&(!wu||Wl&&8<Wl&&11>=Wl),vd=" ",yd=!1;function xd(e,t){switch(e){case"keyup":return Lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function Uv(e,t){switch(e){case"compositionend":return bd(t);case"keypress":return t.which!==32?null:(yd=!0,vd);case"textInput":return e=t.data,e===vd&&yd?null:e;default:return null}}function Hv(e,t){if(Ka)return e==="compositionend"||!wu&&xd(e,t)?(e=fd(),lr=vu=qn=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gd&&t.locale!=="ko"?null:t.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yv[e.type]:t==="textarea"}function wd(e,t,n,l){Qa?Za?Za.push(l):Za=[l]:Qa=l,t=Wr(t,"onChange"),0<t.length&&(n=new or("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Il=null,Pl=null;function qv(e){lp(e,0)}function sr(e){var t=Ql(e);if(ad(t))return e}function Ed(e,t){if(e==="change")return t}var jd=!1;if(dn){var Eu;if(dn){var ju="oninput"in document;if(!ju){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),ju=typeof Cd.oninput=="function"}Eu=ju}else Eu=!1;jd=Eu&&(!document.documentMode||9<document.documentMode)}function Td(){Il&&(Il.detachEvent("onpropertychange",zd),Pl=Il=null)}function zd(e){if(e.propertyName==="value"&&sr(Pl)){var t=[];wd(t,Pl,e,pu(e)),cd(qv,t)}}function Gv(e,t,n){e==="focusin"?(Td(),Il=t,Pl=n,Il.attachEvent("onpropertychange",zd)):e==="focusout"&&Td()}function Xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sr(Pl)}function Vv(e,t){if(e==="click")return sr(t)}function Qv(e,t){if(e==="input"||e==="change")return sr(t)}function Zv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Zv;function ei(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!tu.call(t,r)||!Rt(e[r],t[r]))return!1}return!0}function Rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ad(e,t){var n=Rd(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rd(n)}}function Od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Md(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=nr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nr(e.document)}return t}function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Kv=dn&&"documentMode"in document&&11>=document.documentMode,Ja=null,Tu=null,ti=null,zu=!1;function Nd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||Ja==null||Ja!==nr(l)||(l=Ja,"selectionStart"in l&&Cu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ti&&ei(ti,l)||(ti=l,l=Wr(Tu,"onSelect"),0<l.length&&(t=new or("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ja)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fa={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},Ru={},_d={};dn&&(_d=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function xa(e){if(Ru[e])return Ru[e];if(!Fa[e])return e;var t=Fa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _d)return Ru[e]=t[n];return e}var kd=xa("animationend"),Dd=xa("animationiteration"),Bd=xa("animationstart"),Jv=xa("transitionrun"),Fv=xa("transitionstart"),Wv=xa("transitioncancel"),Ld=xa("transitionend"),$d=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function Jt(e,t){$d.set(e,t),ga(t,[e])}var cr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],Wa=0,Ou=0;function fr(){for(var e=Wa,t=Ou=Wa=0;t<e;){var n=Ut[t];Ut[t++]=null;var l=Ut[t];Ut[t++]=null;var r=Ut[t];Ut[t++]=null;var s=Ut[t];if(Ut[t++]=null,l!==null&&r!==null){var h=l.pending;h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r}s!==0&&Ud(n,r,s)}}function dr(e,t,n,l){Ut[Wa++]=e,Ut[Wa++]=t,Ut[Wa++]=n,Ut[Wa++]=l,Ou|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Mu(e,t,n,l){return dr(e,t,n,l),hr(e)}function ba(e,t){return dr(e,null,null,t),hr(e)}function Ud(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,l=s.alternate,l!==null&&(l.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-zt(n),e=s.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=n|536870912),s):null}function hr(e){if(50<Ei)throw Ei=0,Hs=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ia={};function Iv(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,l){return new Iv(e,t,n,l)}function Nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pr(e,t,n,l,r,s){var h=0;if(l=e,typeof e=="function")Nu(e)&&(h=1);else if(typeof e=="string")h=ay(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case W:return e=At(31,n,t,r),e.elementType=W,e.lanes=s,e;case k:return Sa(n.children,r,s,t);case U:h=8,r|=24;break;case M:return e=At(12,n,t,r|2),e.elementType=M,e.lanes=s,e;case K:return e=At(13,n,t,r),e.elementType=K,e.lanes=s,e;case q:return e=At(19,n,t,r),e.elementType=q,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:h=10;break e;case $:h=9;break e;case Z:h=11;break e;case V:h=14;break e;case ne:h=16,l=null;break e}h=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=At(h,n,t,r),t.elementType=e,t.type=l,t.lanes=s,t}function Sa(e,t,n,l){return e=At(7,e,l,t),e.lanes=n,e}function _u(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function Yd(e){var t=At(18,null,null,0);return t.stateNode=e,t}function ku(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qd=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var n=qd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Yf(t)},qd.set(e,t),t)}return{value:e,source:t,stack:Yf(t)}}var Pa=[],el=0,mr=null,ni=0,Yt=[],qt=0,Gn=null,tn=1,nn="";function pn(e,t){Pa[el++]=ni,Pa[el++]=mr,mr=e,ni=t}function Gd(e,t,n){Yt[qt++]=tn,Yt[qt++]=nn,Yt[qt++]=Gn,Gn=e;var l=tn;e=nn;var r=32-zt(l)-1;l&=~(1<<r),n+=1;var s=32-zt(t)+r;if(30<s){var h=r-r%5;s=(l&(1<<h)-1).toString(32),l>>=h,r-=h,tn=1<<32-zt(t)+r|n<<r|l,nn=s+e}else tn=1<<s|n<<r|l,nn=e}function Du(e){e.return!==null&&(pn(e,1),Gd(e,1,0))}function Bu(e){for(;e===mr;)mr=Pa[--el],Pa[el]=null,ni=Pa[--el],Pa[el]=null;for(;e===Gn;)Gn=Yt[--qt],Yt[qt]=null,nn=Yt[--qt],Yt[qt]=null,tn=Yt[--qt],Yt[qt]=null}function Xd(e,t){Yt[qt++]=tn,Yt[qt++]=nn,Yt[qt++]=Gn,tn=t.id,nn=t.overflow,Gn=e}var it=null,Le=null,we=!1,Xn=null,Gt=!1,Lu=Error(o(519));function Vn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ai(Ht(t,e)),Lu}function Vd(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[lt]=e,t[gt]=l,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<Ci.length;n++)xe(Ci[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),ld(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),rd(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||up(t.textContent,n)?(l.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),l.onScroll!=null&&xe("scroll",t),l.onScrollEnd!=null&&xe("scrollend",t),l.onClick!=null&&(t.onclick=fn),t=!0):t=!1,t||Vn(e,!0)}function Qd(e){for(it=e.return;it;)switch(it.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:it=it.return}}function tl(e){if(e!==it)return!1;if(!we)return Qd(e),we=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||tc(e.type,e.memoizedProps)),n=!n),n&&Le&&Vn(e),Qd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=vp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=vp(e)}else t===27?(t=Le,ia(e.type)?(e=rc,rc=null,Le=e):Le=t):Le=it?Vt(e.stateNode.nextSibling):null;return!0}function wa(){Le=it=null,we=!1}function $u(){var e=Xn;return e!==null&&(St===null?St=e:St.push.apply(St,e),Xn=null),e}function ai(e){Xn===null?Xn=[e]:Xn.push(e)}var Uu=j(null),Ea=null,mn=null;function Qn(e,t,n){J(Uu,t._currentValue),t._currentValue=n}function gn(e){e._currentValue=Uu.current,Y(Uu)}function Hu(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Yu(e,t,n,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var h=r.child;s=s.firstContext;e:for(;s!==null;){var v=s;s=r;for(var E=0;E<t.length;E++)if(v.context===t[E]){s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),Hu(s.return,n,e),l||(h=null);break e}s=v.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(o(341));h.lanes|=n,s=h.alternate,s!==null&&(s.lanes|=n),Hu(h,n,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function nl(e,t,n,l){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var v=r.type;Rt(r.pendingProps.value,h.value)||(e!==null?e.push(v):e=[v])}}else if(r===ve.current){if(h=r.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Oi):e=[Oi])}r=r.return}e!==null&&Yu(t,e,n,l),t.flags|=262144}function gr(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){Ea=e,mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return Zd(Ea,e)}function vr(e,t){return Ea===null&&ja(e),Zd(e,t)}function Zd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},mn===null){if(e===null)throw Error(o(308));mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else mn=mn.next=t;return n}var Pv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},e2=a.unstable_scheduleCallback,t2=a.unstable_NormalPriority,Ke={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new Pv,data:new Map,refCount:0}}function li(e){e.refCount--,e.refCount===0&&e2(t2,function(){e.controller.abort()})}var ii=null,Gu=0,al=0,ll=null;function n2(e,t){if(ii===null){var n=ii=[];Gu=0,al=Qs(),ll={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Gu++,t.then(Kd,Kd),t}function Kd(){if(--Gu===0&&ii!==null){ll!==null&&(ll.status="fulfilled");var e=ii;ii=null,al=0,ll=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function a2(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),l}var Jd=D.S;D.S=function(e,t){Nh=Ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&n2(e,t),Jd!==null&&Jd(e,t)};var Ca=j(null);function Xu(){var e=Ca.current;return e!==null?e:De.pooledCache}function yr(e,t){t===null?J(Ca,Ca.current):J(Ca,t.pool)}function Fd(){var e=Xu();return e===null?null:{parent:Ke._currentValue,pool:e}}var il=Error(o(460)),Vu=Error(o(474)),xr=Error(o(542)),br={then:function(){}};function Wd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Id(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(fn,fn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e0(e),e;default:if(typeof t.status=="string")t.then(fn,fn);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e0(e),e}throw za=t,il}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(za=n,il):n}}var za=null;function Pd(){if(za===null)throw Error(o(459));var e=za;return za=null,e}function e0(e){if(e===il||e===xr)throw Error(o(483))}var rl=null,ri=0;function Sr(e){var t=ri;return ri+=1,rl===null&&(rl=[]),Id(rl,e,t)}function oi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wr(e,t){throw t.$$typeof===T?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function t0(e){function t(z,C){if(e){var O=z.deletions;O===null?(z.deletions=[C],z.flags|=16):O.push(C)}}function n(z,C){if(!e)return null;for(;C!==null;)t(z,C),C=C.sibling;return null}function l(z){for(var C=new Map;z!==null;)z.key!==null?C.set(z.key,z):C.set(z.index,z),z=z.sibling;return C}function r(z,C){return z=hn(z,C),z.index=0,z.sibling=null,z}function s(z,C,O){return z.index=O,e?(O=z.alternate,O!==null?(O=O.index,O<C?(z.flags|=67108866,C):O):(z.flags|=67108866,C)):(z.flags|=1048576,C)}function h(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function v(z,C,O,G){return C===null||C.tag!==6?(C=_u(O,z.mode,G),C.return=z,C):(C=r(C,O),C.return=z,C)}function E(z,C,O,G){var re=O.type;return re===k?H(z,C,O.props.children,G,O.key):C!==null&&(C.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ne&&Ta(re)===C.type)?(C=r(C,O.props),oi(C,O),C.return=z,C):(C=pr(O.type,O.key,O.props,null,z.mode,G),oi(C,O),C.return=z,C)}function N(z,C,O,G){return C===null||C.tag!==4||C.stateNode.containerInfo!==O.containerInfo||C.stateNode.implementation!==O.implementation?(C=ku(O,z.mode,G),C.return=z,C):(C=r(C,O.children||[]),C.return=z,C)}function H(z,C,O,G,re){return C===null||C.tag!==7?(C=Sa(O,z.mode,G,re),C.return=z,C):(C=r(C,O),C.return=z,C)}function X(z,C,O){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=_u(""+C,z.mode,O),C.return=z,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case A:return O=pr(C.type,C.key,C.props,null,z.mode,O),oi(O,C),O.return=z,O;case R:return C=ku(C,z.mode,O),C.return=z,C;case ne:return C=Ta(C),X(z,C,O)}if(ge(C)||He(C))return C=Sa(C,z.mode,O,null),C.return=z,C;if(typeof C.then=="function")return X(z,Sr(C),O);if(C.$$typeof===L)return X(z,vr(z,C),O);wr(z,C)}return null}function _(z,C,O,G){var re=C!==null?C.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return re!==null?null:v(z,C,""+O,G);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case A:return O.key===re?E(z,C,O,G):null;case R:return O.key===re?N(z,C,O,G):null;case ne:return O=Ta(O),_(z,C,O,G)}if(ge(O)||He(O))return re!==null?null:H(z,C,O,G,null);if(typeof O.then=="function")return _(z,C,Sr(O),G);if(O.$$typeof===L)return _(z,C,vr(z,O),G);wr(z,O)}return null}function B(z,C,O,G,re){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return z=z.get(O)||null,v(C,z,""+G,re);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case A:return z=z.get(G.key===null?O:G.key)||null,E(C,z,G,re);case R:return z=z.get(G.key===null?O:G.key)||null,N(C,z,G,re);case ne:return G=Ta(G),B(z,C,O,G,re)}if(ge(G)||He(G))return z=z.get(O)||null,H(C,z,G,re,null);if(typeof G.then=="function")return B(z,C,O,Sr(G),re);if(G.$$typeof===L)return B(z,C,O,vr(C,G),re);wr(C,G)}return null}function te(z,C,O,G){for(var re=null,je=null,le=C,he=C=0,Se=null;le!==null&&he<O.length;he++){le.index>he?(Se=le,le=null):Se=le.sibling;var Ce=_(z,le,O[he],G);if(Ce===null){le===null&&(le=Se);break}e&&le&&Ce.alternate===null&&t(z,le),C=s(Ce,C,he),je===null?re=Ce:je.sibling=Ce,je=Ce,le=Se}if(he===O.length)return n(z,le),we&&pn(z,he),re;if(le===null){for(;he<O.length;he++)le=X(z,O[he],G),le!==null&&(C=s(le,C,he),je===null?re=le:je.sibling=le,je=le);return we&&pn(z,he),re}for(le=l(le);he<O.length;he++)Se=B(le,z,he,O[he],G),Se!==null&&(e&&Se.alternate!==null&&le.delete(Se.key===null?he:Se.key),C=s(Se,C,he),je===null?re=Se:je.sibling=Se,je=Se);return e&&le.forEach(function(ca){return t(z,ca)}),we&&pn(z,he),re}function oe(z,C,O,G){if(O==null)throw Error(o(151));for(var re=null,je=null,le=C,he=C=0,Se=null,Ce=O.next();le!==null&&!Ce.done;he++,Ce=O.next()){le.index>he?(Se=le,le=null):Se=le.sibling;var ca=_(z,le,Ce.value,G);if(ca===null){le===null&&(le=Se);break}e&&le&&ca.alternate===null&&t(z,le),C=s(ca,C,he),je===null?re=ca:je.sibling=ca,je=ca,le=Se}if(Ce.done)return n(z,le),we&&pn(z,he),re;if(le===null){for(;!Ce.done;he++,Ce=O.next())Ce=X(z,Ce.value,G),Ce!==null&&(C=s(Ce,C,he),je===null?re=Ce:je.sibling=Ce,je=Ce);return we&&pn(z,he),re}for(le=l(le);!Ce.done;he++,Ce=O.next())Ce=B(le,z,he,Ce.value,G),Ce!==null&&(e&&Ce.alternate!==null&&le.delete(Ce.key===null?he:Ce.key),C=s(Ce,C,he),je===null?re=Ce:je.sibling=Ce,je=Ce);return e&&le.forEach(function(py){return t(z,py)}),we&&pn(z,he),re}function ke(z,C,O,G){if(typeof O=="object"&&O!==null&&O.type===k&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case A:e:{for(var re=O.key;C!==null;){if(C.key===re){if(re=O.type,re===k){if(C.tag===7){n(z,C.sibling),G=r(C,O.props.children),G.return=z,z=G;break e}}else if(C.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ne&&Ta(re)===C.type){n(z,C.sibling),G=r(C,O.props),oi(G,O),G.return=z,z=G;break e}n(z,C);break}else t(z,C);C=C.sibling}O.type===k?(G=Sa(O.props.children,z.mode,G,O.key),G.return=z,z=G):(G=pr(O.type,O.key,O.props,null,z.mode,G),oi(G,O),G.return=z,z=G)}return h(z);case R:e:{for(re=O.key;C!==null;){if(C.key===re)if(C.tag===4&&C.stateNode.containerInfo===O.containerInfo&&C.stateNode.implementation===O.implementation){n(z,C.sibling),G=r(C,O.children||[]),G.return=z,z=G;break e}else{n(z,C);break}else t(z,C);C=C.sibling}G=ku(O,z.mode,G),G.return=z,z=G}return h(z);case ne:return O=Ta(O),ke(z,C,O,G)}if(ge(O))return te(z,C,O,G);if(He(O)){if(re=He(O),typeof re!="function")throw Error(o(150));return O=re.call(O),oe(z,C,O,G)}if(typeof O.then=="function")return ke(z,C,Sr(O),G);if(O.$$typeof===L)return ke(z,C,vr(z,O),G);wr(z,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,C!==null&&C.tag===6?(n(z,C.sibling),G=r(C,O),G.return=z,z=G):(n(z,C),G=_u(O,z.mode,G),G.return=z,z=G),h(z)):n(z,C)}return function(z,C,O,G){try{ri=0;var re=ke(z,C,O,G);return rl=null,re}catch(le){if(le===il||le===xr)throw le;var je=At(29,le,null,z.mode);return je.lanes=G,je.return=z,je}finally{}}}var Ra=t0(!0),n0=t0(!1),Zn=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Te&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=hr(e),Ud(e,null,n),t}return dr(e,l,t,n),hr(e)}function ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Zf(e,n)}}function Ku(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=h:s=s.next=h,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ju=!1;function si(){if(Ju){var e=ll;if(e!==null)throw e}}function ci(e,t,n,l){Ju=!1;var r=e.updateQueue;Zn=!1;var s=r.firstBaseUpdate,h=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var E=v,N=E.next;E.next=null,h===null?s=N:h.next=N,h=E;var H=e.alternate;H!==null&&(H=H.updateQueue,v=H.lastBaseUpdate,v!==h&&(v===null?H.firstBaseUpdate=N:v.next=N,H.lastBaseUpdate=E))}if(s!==null){var X=r.baseState;h=0,H=N=E=null,v=s;do{var _=v.lane&-536870913,B=_!==v.lane;if(B?(be&_)===_:(l&_)===_){_!==0&&_===al&&(Ju=!0),H!==null&&(H=H.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var te=e,oe=v;_=t;var ke=n;switch(oe.tag){case 1:if(te=oe.payload,typeof te=="function"){X=te.call(ke,X,_);break e}X=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=oe.payload,_=typeof te=="function"?te.call(ke,X,_):te,_==null)break e;X=w({},X,_);break e;case 2:Zn=!0}}_=v.callback,_!==null&&(e.flags|=64,B&&(e.flags|=8192),B=r.callbacks,B===null?r.callbacks=[_]:B.push(_))}else B={lane:_,tag:v.tag,payload:v.payload,callback:v.callback,next:null},H===null?(N=H=B,E=X):H=H.next=B,h|=_;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;B=v,v=B.next,B.next=null,r.lastBaseUpdate=B,r.shared.pending=null}}while(!0);H===null&&(E=X),r.baseState=E,r.firstBaseUpdate=N,r.lastBaseUpdate=H,s===null&&(r.shared.lanes=0),ea|=h,e.lanes=h,e.memoizedState=X}}function a0(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function l0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)a0(n[e],t)}var ol=j(null),Er=j(0);function i0(e,t){e=Cn,J(Er,e),J(ol,t),Cn=e|t.baseLanes}function Fu(){J(Er,Cn),J(ol,ol.current)}function Wu(){Cn=Er.current,Y(ol),Y(Er)}var Ot=j(null),Xt=null;function Fn(e){var t=e.alternate;J(Qe,Qe.current&1),J(Ot,e),Xt===null&&(t===null||ol.current!==null||t.memoizedState!==null)&&(Xt=e)}function Iu(e){J(Qe,Qe.current),J(Ot,e),Xt===null&&(Xt=e)}function r0(e){e.tag===22?(J(Qe,Qe.current),J(Ot,e),Xt===null&&(Xt=e)):Wn()}function Wn(){J(Qe,Qe.current),J(Ot,Ot.current)}function Mt(e){Y(Ot),Xt===e&&(Xt=null),Y(Qe)}var Qe=j(0);function jr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||lc(n)||ic(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vn=0,de=null,Ne=null,Je=null,Cr=!1,ul=!1,Aa=!1,Tr=0,fi=0,sl=null,l2=0;function Xe(){throw Error(o(321))}function Pu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function es(e,t,n,l,r,s){return vn=s,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?G0:ms,Aa=!1,s=n(l,r),Aa=!1,ul&&(s=u0(t,n,l,r)),o0(e),s}function o0(e){D.H=pi;var t=Ne!==null&&Ne.next!==null;if(vn=0,Je=Ne=de=null,Cr=!1,fi=0,sl=null,t)throw Error(o(300));e===null||Fe||(e=e.dependencies,e!==null&&gr(e)&&(Fe=!0))}function u0(e,t,n,l){de=e;var r=0;do{if(ul&&(sl=null),fi=0,ul=!1,25<=r)throw Error(o(301));if(r+=1,Je=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=X0,s=t(n,l)}while(ul);return s}function i2(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?di(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(de.flags|=1024),t}function ts(){var e=Tr!==0;return Tr=0,e}function ns(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function as(e){if(Cr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Cr=!1}vn=0,Je=Ne=de=null,ul=!1,fi=Tr=0,sl=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?de.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Ne===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Je===null?de.memoizedState:Je.next;if(t!==null)Je=t,Ne=e;else{if(e===null)throw de.alternate===null?Error(o(467)):Error(o(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Je===null?de.memoizedState=Je=e:Je=Je.next=e}return Je}function zr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function di(e){var t=fi;return fi+=1,sl===null&&(sl=[]),e=Id(sl,e,t),t=de,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?G0:ms),e}function Rr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return di(e);if(e.$$typeof===L)return rt(e)}throw Error(o(438,String(e)))}function ls(e){var t=null,n=de.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=de.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zr(),de.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=ce;return t.index++,n}function yn(e,t){return typeof t=="function"?t(e):t}function Ar(e){var t=Ze();return is(t,Ne,e)}function is(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var r=e.baseQueue,s=l.pending;if(s!==null){if(r!==null){var h=r.next;r.next=s.next,s.next=h}t.baseQueue=r=s,l.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var v=h=null,E=null,N=t,H=!1;do{var X=N.lane&-536870913;if(X!==N.lane?(be&X)===X:(vn&X)===X){var _=N.revertLane;if(_===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),X===al&&(H=!0);else if((vn&_)===_){N=N.next,_===al&&(H=!0);continue}else X={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},E===null?(v=E=X,h=s):E=E.next=X,de.lanes|=_,ea|=_;X=N.action,Aa&&n(s,X),s=N.hasEagerState?N.eagerState:n(s,X)}else _={lane:X,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},E===null?(v=E=_,h=s):E=E.next=_,de.lanes|=X,ea|=X;N=N.next}while(N!==null&&N!==t);if(E===null?h=s:E.next=v,!Rt(s,e.memoizedState)&&(Fe=!0,H&&(n=ll,n!==null)))throw n;e.memoizedState=s,e.baseState=h,e.baseQueue=E,l.lastRenderedState=s}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function rs(e){var t=Ze(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var h=r=r.next;do s=e(s,h.action),h=h.next;while(h!==r);Rt(s,t.memoizedState)||(Fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,l]}function s0(e,t,n){var l=de,r=Ze(),s=we;if(s){if(n===void 0)throw Error(o(407));n=n()}else n=t();var h=!Rt((Ne||r).memoizedState,n);if(h&&(r.memoizedState=n,Fe=!0),r=r.queue,ss(d0.bind(null,l,r,e),[e]),r.getSnapshot!==t||h||Je!==null&&Je.memoizedState.tag&1){if(l.flags|=2048,cl(9,{destroy:void 0},f0.bind(null,l,r,n,t),null),De===null)throw Error(o(349));s||(vn&127)!==0||c0(l,t,n)}return n}function c0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t=zr(),de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function f0(e,t,n,l){t.value=n,t.getSnapshot=l,h0(t)&&p0(e)}function d0(e,t,n){return n(function(){h0(t)&&p0(e)})}function h0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function p0(e){var t=ba(e,2);t!==null&&wt(t,e,2)}function os(e){var t=pt();if(typeof e=="function"){var n=e;if(e=n(),Aa){Hn(!0);try{n()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t}function m0(e,t,n,l){return e.baseState=n,is(e,Ne,typeof l=="function"?l:yn)}function r2(e,t,n,l,r){if(Nr(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){s.listeners.push(h)}};D.T!==null?n(!0):s.isTransition=!1,l(s),n=t.pending,n===null?(s.next=t.pending=s,g0(t,s)):(s.next=n.next,t.pending=n.next=s)}}function g0(e,t){var n=t.action,l=t.payload,r=e.state;if(t.isTransition){var s=D.T,h={};D.T=h;try{var v=n(r,l),E=D.S;E!==null&&E(h,v),v0(e,t,v)}catch(N){us(e,t,N)}finally{s!==null&&h.types!==null&&(s.types=h.types),D.T=s}}else try{s=n(r,l),v0(e,t,s)}catch(N){us(e,t,N)}}function v0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){y0(e,t,l)},function(l){return us(e,t,l)}):y0(e,t,n)}function y0(e,t,n){t.status="fulfilled",t.value=n,x0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,g0(e,n)))}function us(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,x0(t),t=t.next;while(t!==l)}e.action=null}function x0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function b0(e,t){return t}function S0(e,t){if(we){var n=De.formState;if(n!==null){e:{var l=de;if(we){if(Le){t:{for(var r=Le,s=Gt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Vt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Le=Vt(r.nextSibling),l=r.data==="F!";break e}}Vn(l)}l=!1}l&&(t=n[0])}}return n=pt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:t},n.queue=l,n=H0.bind(null,de,l),l.dispatch=n,l=os(!1),s=ps.bind(null,de,!1,l.queue),l=pt(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,n=r2.bind(null,de,r,s,n),r.dispatch=n,l.memoizedState=e,[t,n,!1]}function w0(e){var t=Ze();return E0(t,Ne,e)}function E0(e,t,n){if(t=is(e,t,b0)[0],e=Ar(yn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=di(t)}catch(h){throw h===il?xr:h}else l=t;t=Ze();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(de.flags|=2048,cl(9,{destroy:void 0},o2.bind(null,r,n),null)),[l,s,e]}function o2(e,t){e.action=t}function j0(e){var t=Ze(),n=Ne;if(n!==null)return E0(t,n,e);Ze(),t=t.memoizedState,n=Ze();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function cl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=de.updateQueue,t===null&&(t=zr(),de.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function C0(){return Ze().memoizedState}function Or(e,t,n,l){var r=pt();de.flags|=e,r.memoizedState=cl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Mr(e,t,n,l){var r=Ze();l=l===void 0?null:l;var s=r.memoizedState.inst;Ne!==null&&l!==null&&Pu(l,Ne.memoizedState.deps)?r.memoizedState=cl(t,s,n,l):(de.flags|=e,r.memoizedState=cl(1|t,s,n,l))}function T0(e,t){Or(8390656,8,e,t)}function ss(e,t){Mr(2048,8,e,t)}function u2(e){de.flags|=4;var t=de.updateQueue;if(t===null)t=zr(),de.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function z0(e){var t=Ze().memoizedState;return u2({ref:t,nextImpl:e}),function(){if((Te&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function R0(e,t){return Mr(4,2,e,t)}function A0(e,t){return Mr(4,4,e,t)}function O0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function M0(e,t,n){n=n!=null?n.concat([e]):null,Mr(4,4,O0.bind(null,t,e),n)}function cs(){}function N0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Pu(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function _0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Pu(t,l[1]))return l[0];if(l=e(),Aa){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[l,t],l}function fs(e,t,n){return n===void 0||(vn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=kh(),de.lanes|=e,ea|=e,n)}function k0(e,t,n,l){return Rt(n,t)?n:ol.current!==null?(e=fs(e,n,l),Rt(e,t)||(Fe=!0),e):(vn&42)===0||(vn&1073741824)!==0&&(be&261930)===0?(Fe=!0,e.memoizedState=n):(e=kh(),de.lanes|=e,ea|=e,t)}function D0(e,t,n,l,r){var s=Q.p;Q.p=s!==0&&8>s?s:8;var h=D.T,v={};D.T=v,ps(e,!1,t,n);try{var E=r(),N=D.S;if(N!==null&&N(v,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var H=a2(E,l);hi(e,t,H,kt(e))}else hi(e,t,l,kt(e))}catch(X){hi(e,t,{then:function(){},status:"rejected",reason:X},kt())}finally{Q.p=s,h!==null&&v.types!==null&&(h.types=v.types),D.T=h}}function s2(){}function ds(e,t,n,l){if(e.tag!==5)throw Error(o(476));var r=B0(e).queue;D0(e,r,t,I,n===null?s2:function(){return L0(e),n(l)})}function B0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function L0(e){var t=B0(e);t.next===null&&(t=e.alternate.memoizedState),hi(e,t.next.queue,{},kt())}function hs(){return rt(Oi)}function $0(){return Ze().memoizedState}function U0(){return Ze().memoizedState}function c2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kt();e=Kn(n);var l=Jn(t,e,n);l!==null&&(wt(l,t,n),ui(l,t,n)),t={cache:qu()},e.payload=t;return}t=t.return}}function f2(e,t,n){var l=kt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Nr(e)?Y0(t,n):(n=Mu(e,t,n,l),n!==null&&(wt(n,e,l),q0(n,t,l)))}function H0(e,t,n){var l=kt();hi(e,t,n,l)}function hi(e,t,n,l){var r={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nr(e))Y0(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var h=t.lastRenderedState,v=s(h,n);if(r.hasEagerState=!0,r.eagerState=v,Rt(v,h))return dr(e,t,r,0),De===null&&fr(),!1}catch{}finally{}if(n=Mu(e,t,r,l),n!==null)return wt(n,e,l),q0(n,t,l),!0}return!1}function ps(e,t,n,l){if(l={lane:2,revertLane:Qs(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Nr(e)){if(t)throw Error(o(479))}else t=Mu(e,n,l,2),t!==null&&wt(t,e,2)}function Nr(e){var t=e.alternate;return e===de||t!==null&&t===de}function Y0(e,t){ul=Cr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function q0(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Zf(e,n)}}var pi={readContext:rt,use:Rr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};pi.useEffectEvent=Xe;var G0={readContext:rt,use:Rr,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:T0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Or(4194308,4,O0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){Or(4,2,e,t)},useMemo:function(e,t){var n=pt();t=t===void 0?null:t;var l=e();if(Aa){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=pt();if(n!==void 0){var r=n(t);if(Aa){Hn(!0);try{n(t)}finally{Hn(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=f2.bind(null,de,e),[l.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:function(e){e=os(e);var t=e.queue,n=H0.bind(null,de,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:cs,useDeferredValue:function(e,t){var n=pt();return fs(n,e,t)},useTransition:function(){var e=os(!1);return e=D0.bind(null,de,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=de,r=pt();if(we){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),De===null)throw Error(o(349));(be&127)!==0||c0(l,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,T0(d0.bind(null,l,s,e),[e]),l.flags|=2048,cl(9,{destroy:void 0},f0.bind(null,l,s,n,t),null),n},useId:function(){var e=pt(),t=De.identifierPrefix;if(we){var n=nn,l=tn;n=(l&~(1<<32-zt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=l2++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:hs,useFormState:S0,useActionState:S0,useOptimistic:function(e){var t=pt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ps.bind(null,de,!0,n),n.dispatch=t,[e,t]},useMemoCache:ls,useCacheRefresh:function(){return pt().memoizedState=c2.bind(null,de)},useEffectEvent:function(e){var t=pt(),n={impl:e};return t.memoizedState=n,function(){if((Te&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},ms={readContext:rt,use:Rr,useCallback:N0,useContext:rt,useEffect:ss,useImperativeHandle:M0,useInsertionEffect:R0,useLayoutEffect:A0,useMemo:_0,useReducer:Ar,useRef:C0,useState:function(){return Ar(yn)},useDebugValue:cs,useDeferredValue:function(e,t){var n=Ze();return k0(n,Ne.memoizedState,e,t)},useTransition:function(){var e=Ar(yn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:di(e),t]},useSyncExternalStore:s0,useId:$0,useHostTransitionStatus:hs,useFormState:w0,useActionState:w0,useOptimistic:function(e,t){var n=Ze();return m0(n,Ne,e,t)},useMemoCache:ls,useCacheRefresh:U0};ms.useEffectEvent=z0;var X0={readContext:rt,use:Rr,useCallback:N0,useContext:rt,useEffect:ss,useImperativeHandle:M0,useInsertionEffect:R0,useLayoutEffect:A0,useMemo:_0,useReducer:rs,useRef:C0,useState:function(){return rs(yn)},useDebugValue:cs,useDeferredValue:function(e,t){var n=Ze();return Ne===null?fs(n,e,t):k0(n,Ne.memoizedState,e,t)},useTransition:function(){var e=rs(yn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:di(e),t]},useSyncExternalStore:s0,useId:$0,useHostTransitionStatus:hs,useFormState:j0,useActionState:j0,useOptimistic:function(e,t){var n=Ze();return Ne!==null?m0(n,Ne,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ls,useCacheRefresh:U0};X0.useEffectEvent=z0;function gs(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=kt(),r=Kn(l);r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,l),t!==null&&(wt(t,e,l),ui(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=kt(),r=Kn(l);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,l),t!==null&&(wt(t,e,l),ui(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),l=Kn(n);l.tag=2,t!=null&&(l.callback=t),t=Jn(e,l,n),t!==null&&(wt(t,e,n),ui(t,e,n))}};function V0(e,t,n,l,r,s,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,h):t.prototype&&t.prototype.isPureReactComponent?!ei(n,l)||!ei(r,s):!0}function Q0(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function Oa(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Z0(e){cr(e)}function K0(e){console.error(e)}function J0(e){cr(e)}function _r(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function F0(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ys(e,t,n){return n=Kn(n),n.tag=3,n.payload={element:null},n.callback=function(){_r(e,t)},n}function W0(e){return e=Kn(e),e.tag=3,e}function I0(e,t,n,l){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=l.value;e.payload=function(){return r(s)},e.callback=function(){F0(t,n,l)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){F0(t,n,l),typeof r!="function"&&(ta===null?ta=new Set([this]):ta.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function d2(e,t,n,l,r){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&nl(t,n,r,!0),n=Ot.current,n!==null){switch(n.tag){case 31:case 13:return Xt===null?Vr():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===br?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Gs(e,l,r)),!1;case 22:return n.flags|=65536,l===br?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Gs(e,l,r)),!1}throw Error(o(435,n.tag))}return Gs(e,l,r),Vr(),!1}if(we)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==Lu&&(e=Error(o(422),{cause:l}),ai(Ht(e,n)))):(l!==Lu&&(t=Error(o(423),{cause:l}),ai(Ht(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Ht(l,n),r=ys(e.stateNode,l,r),Ku(e,r),Ve!==4&&(Ve=2)),!1;var s=Error(o(520),{cause:l});if(s=Ht(s,n),wi===null?wi=[s]:wi.push(s),Ve!==4&&(Ve=2),t===null)return!0;l=Ht(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ys(n.stateNode,l,e),Ku(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ta===null||!ta.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=W0(r),I0(r,e,n,l),Ku(n,r),!1}n=n.return}while(n!==null);return!1}var xs=Error(o(461)),Fe=!1;function ot(e,t,n,l){t.child=e===null?n0(t,null,n,l):Ra(t,e.child,n,l)}function P0(e,t,n,l,r){n=n.render;var s=t.ref;if("ref"in l){var h={};for(var v in l)v!=="ref"&&(h[v]=l[v])}else h=l;return ja(t),l=es(e,t,n,h,s,r),v=ts(),e!==null&&!Fe?(ns(e,t,r),xn(e,t,r)):(we&&v&&Du(t),t.flags|=1,ot(e,t,l,r),t.child)}function eh(e,t,n,l,r){if(e===null){var s=n.type;return typeof s=="function"&&!Nu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,th(e,t,s,l,r)):(e=pr(n.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!zs(e,r)){var h=s.memoizedProps;if(n=n.compare,n=n!==null?n:ei,n(h,l)&&e.ref===t.ref)return xn(e,t,r)}return t.flags|=1,e=hn(s,l),e.ref=t.ref,e.return=t,t.child=e}function th(e,t,n,l,r){if(e!==null){var s=e.memoizedProps;if(ei(s,l)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=l=s,zs(e,r))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,xn(e,t,r)}return bs(e,t,n,l,r)}function nh(e,t,n,l){var r=l.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~s}else l=0,t.child=null;return ah(e,t,s,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yr(t,s!==null?s.cachePool:null),s!==null?i0(t,s):Fu(),r0(t);else return l=t.lanes=536870912,ah(e,t,s!==null?s.baseLanes|n:n,n,l)}else s!==null?(yr(t,s.cachePool),i0(t,s),Wn(),t.memoizedState=null):(e!==null&&yr(t,null),Fu(),Wn());return ot(e,t,r,n),t.child}function mi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ah(e,t,n,l,r){var s=Xu();return s=s===null?null:{parent:Ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&yr(t,null),Fu(),r0(t),e!==null&&nl(e,t,l,!0),t.childLanes=r,null}function kr(e,t){return t=Br({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lh(e,t,n){return Ra(t,e.child,null,n),e=kr(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function h2(e,t,n){var l=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(we){if(l.mode==="hidden")return e=kr(t,l),t.lanes=536870912,mi(null,e);if(Iu(t),(e=Le)?(e=gp(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=Yd(e),n.return=t,t.child=n,it=t,Le=null)):e=null,e===null)throw Vn(t);return t.lanes=536870912,null}return kr(t,l)}var s=e.memoizedState;if(s!==null){var h=s.dehydrated;if(Iu(t),r)if(t.flags&256)t.flags&=-257,t=lh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Fe||nl(e,t,n,!1),r=(n&e.childLanes)!==0,Fe||r){if(l=De,l!==null&&(h=Kf(l,n),h!==0&&h!==s.retryLane))throw s.retryLane=h,ba(e,h),wt(l,e,h),xs;Vr(),t=lh(e,t,n)}else e=s.treeContext,Le=Vt(h.nextSibling),it=t,we=!0,Xn=null,Gt=!1,e!==null&&Xd(t,e),t=kr(t,l),t.flags|=4096;return t}return e=hn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Dr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function bs(e,t,n,l,r){return ja(t),n=es(e,t,n,l,void 0,r),l=ts(),e!==null&&!Fe?(ns(e,t,r),xn(e,t,r)):(we&&l&&Du(t),t.flags|=1,ot(e,t,n,r),t.child)}function ih(e,t,n,l,r,s){return ja(t),t.updateQueue=null,n=u0(t,l,n,r),o0(e),l=ts(),e!==null&&!Fe?(ns(e,t,s),xn(e,t,s)):(we&&l&&Du(t),t.flags|=1,ot(e,t,n,s),t.child)}function rh(e,t,n,l,r){if(ja(t),t.stateNode===null){var s=Ia,h=n.contextType;typeof h=="object"&&h!==null&&(s=rt(h)),s=new n(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=vs,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},Qu(t),h=n.contextType,s.context=typeof h=="object"&&h!==null?rt(h):Ia,s.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(gs(t,n,h,l),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(h=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),h!==s.state&&vs.enqueueReplaceState(s,s.state,null),ci(t,l,s,r),si(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var v=t.memoizedProps,E=Oa(n,v);s.props=E;var N=s.context,H=n.contextType;h=Ia,typeof H=="object"&&H!==null&&(h=rt(H));var X=n.getDerivedStateFromProps;H=typeof X=="function"||typeof s.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,H||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(v||N!==h)&&Q0(t,s,l,h),Zn=!1;var _=t.memoizedState;s.state=_,ci(t,l,s,r),si(),N=t.memoizedState,v||_!==N||Zn?(typeof X=="function"&&(gs(t,n,X,l),N=t.memoizedState),(E=Zn||V0(t,n,E,l,_,N,h))?(H||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=N),s.props=l,s.state=N,s.context=h,l=E):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,Zu(e,t),h=t.memoizedProps,H=Oa(n,h),s.props=H,X=t.pendingProps,_=s.context,N=n.contextType,E=Ia,typeof N=="object"&&N!==null&&(E=rt(N)),v=n.getDerivedStateFromProps,(N=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h!==X||_!==E)&&Q0(t,s,l,E),Zn=!1,_=t.memoizedState,s.state=_,ci(t,l,s,r),si();var B=t.memoizedState;h!==X||_!==B||Zn||e!==null&&e.dependencies!==null&&gr(e.dependencies)?(typeof v=="function"&&(gs(t,n,v,l),B=t.memoizedState),(H=Zn||V0(t,n,H,l,_,B,E)||e!==null&&e.dependencies!==null&&gr(e.dependencies))?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,B,E),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,B,E)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=B),s.props=l,s.state=B,s.context=E,l=H):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,Dr(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=Ra(t,e.child,null,r),t.child=Ra(t,null,n,r)):ot(e,t,n,r),t.memoizedState=s.state,e=t.child):e=xn(e,t,r),e}function oh(e,t,n,l){return wa(),t.flags|=256,ot(e,t,n,l),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ws(e){return{baseLanes:e,cachePool:Fd()}}function Es(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=_t),e}function uh(e,t,n){var l=t.pendingProps,r=!1,s=(t.flags&128)!==0,h;if((h=s)||(h=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),h&&(r=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(r?Fn(t):Wn(),(e=Le)?(e=gp(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=Yd(e),n.return=t,t.child=n,it=t,Le=null)):e=null,e===null)throw Vn(t);return ic(e)?t.lanes=32:t.lanes=536870912,null}var v=l.children;return l=l.fallback,r?(Wn(),r=t.mode,v=Br({mode:"hidden",children:v},r),l=Sa(l,r,n,null),v.return=t,l.return=t,v.sibling=l,t.child=v,l=t.child,l.memoizedState=ws(n),l.childLanes=Es(e,h,n),t.memoizedState=Ss,mi(null,l)):(Fn(t),js(t,v))}var E=e.memoizedState;if(E!==null&&(v=E.dehydrated,v!==null)){if(s)t.flags&256?(Fn(t),t.flags&=-257,t=Cs(e,t,n)):t.memoizedState!==null?(Wn(),t.child=e.child,t.flags|=128,t=null):(Wn(),v=l.fallback,r=t.mode,l=Br({mode:"visible",children:l.children},r),v=Sa(v,r,n,null),v.flags|=2,l.return=t,v.return=t,l.sibling=v,t.child=l,Ra(t,e.child,null,n),l=t.child,l.memoizedState=ws(n),l.childLanes=Es(e,h,n),t.memoizedState=Ss,t=mi(null,l));else if(Fn(t),ic(v)){if(h=v.nextSibling&&v.nextSibling.dataset,h)var N=h.dgst;h=N,l=Error(o(419)),l.stack="",l.digest=h,ai({value:l,source:null,stack:null}),t=Cs(e,t,n)}else if(Fe||nl(e,t,n,!1),h=(n&e.childLanes)!==0,Fe||h){if(h=De,h!==null&&(l=Kf(h,n),l!==0&&l!==E.retryLane))throw E.retryLane=l,ba(e,l),wt(h,e,l),xs;lc(v)||Vr(),t=Cs(e,t,n)}else lc(v)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Le=Vt(v.nextSibling),it=t,we=!0,Xn=null,Gt=!1,e!==null&&Xd(t,e),t=js(t,l.children),t.flags|=4096);return t}return r?(Wn(),v=l.fallback,r=t.mode,E=e.child,N=E.sibling,l=hn(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,N!==null?v=hn(N,v):(v=Sa(v,r,n,null),v.flags|=2),v.return=t,l.return=t,l.sibling=v,t.child=l,mi(null,l),l=t.child,v=e.child.memoizedState,v===null?v=ws(n):(r=v.cachePool,r!==null?(E=Ke._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=Fd(),v={baseLanes:v.baseLanes|n,cachePool:r}),l.memoizedState=v,l.childLanes=Es(e,h,n),t.memoizedState=Ss,mi(e.child,l)):(Fn(t),n=e.child,e=n.sibling,n=hn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function js(e,t){return t=Br({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Br(e,t){return e=At(22,e,null,t),e.lanes=0,e}function Cs(e,t,n){return Ra(t,e.child,null,n),e=js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sh(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Hu(e.return,t,n)}function Ts(e,t,n,l,r,s){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r,treeForkCount:s}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=n,h.tailMode=r,h.treeForkCount=s)}function ch(e,t,n){var l=t.pendingProps,r=l.revealOrder,s=l.tail;l=l.children;var h=Qe.current,v=(h&2)!==0;if(v?(h=h&1|2,t.flags|=128):h&=1,J(Qe,h),ot(e,t,l,n),l=we?ni:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sh(e,n,t);else if(e.tag===19)sh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&jr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ts(t,!1,r,n,s,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&jr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ts(t,!0,n,null,s,l);break;case"together":Ts(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(nl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&gr(e)))}function p2(e,t,n){switch(t.tag){case 3:qe(t,t.stateNode.containerInfo),Qn(t,Ke,e.memoizedState.cache),wa();break;case 27:case 5:jt(t);break;case 4:qe(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Iu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Fn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?uh(e,t,n):(Fn(t),e=xn(e,t,n),e!==null?e.sibling:null);Fn(t);break;case 19:var r=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(nl(e,t,n,!1),l=(n&t.childLanes)!==0),r){if(l)return ch(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(Qe,Qe.current),l)break;return null;case 22:return t.lanes=0,nh(e,t,n,t.pendingProps);case 24:Qn(t,Ke,e.memoizedState.cache)}return xn(e,t,n)}function fh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!zs(e,n)&&(t.flags&128)===0)return Fe=!1,p2(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,we&&(t.flags&1048576)!==0&&Gd(t,ni,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")Nu(e)?(l=Oa(e,l),t.tag=1,t=rh(null,t,e,l,n)):(t.tag=0,t=bs(null,t,e,l,n));else{if(e!=null){var r=e.$$typeof;if(r===Z){t.tag=11,t=P0(null,t,e,l,n);break e}else if(r===V){t.tag=14,t=eh(null,t,e,l,n);break e}}throw t=ae(e)||e,Error(o(306,t,""))}}return t;case 0:return bs(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,r=Oa(l,t.pendingProps),rh(e,t,l,r,n);case 3:e:{if(qe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var s=t.memoizedState;r=s.element,Zu(e,t),ci(t,l,null,n);var h=t.memoizedState;if(l=h.cache,Qn(t,Ke,l),l!==s.cache&&Yu(t,[Ke],n,!0),si(),l=h.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=oh(e,t,l,n);break e}else if(l!==r){r=Ht(Error(o(424)),t),ai(r),t=oh(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Vt(e.firstChild),it=t,we=!0,Xn=null,Gt=!0,n=n0(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(wa(),l===r){t=xn(e,t,n);break e}ot(e,t,l,n)}t=t.child}return t;case 26:return Dr(e,t),e===null?(n=wp(t.type,null,t.pendingProps,null))?t.memoizedState=n:we||(n=t.type,e=t.pendingProps,l=Ir(ue.current).createElement(n),l[lt]=t,l[gt]=e,ut(l,n,e),et(l),t.stateNode=l):t.memoizedState=wp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return jt(t),e===null&&we&&(l=t.stateNode=xp(t.type,t.pendingProps,ue.current),it=t,Gt=!0,r=Le,ia(t.type)?(rc=r,Le=Vt(l.firstChild)):Le=r),ot(e,t,t.pendingProps.children,n),Dr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((r=l=Le)&&(l=X2(l,t.type,t.pendingProps,Gt),l!==null?(t.stateNode=l,it=t,Le=Vt(l.firstChild),Gt=!1,r=!0):r=!1),r||Vn(t)),jt(t),r=t.type,s=t.pendingProps,h=e!==null?e.memoizedProps:null,l=s.children,tc(r,s)?l=null:h!==null&&tc(r,h)&&(t.flags|=32),t.memoizedState!==null&&(r=es(e,t,i2,null,null,n),Oi._currentValue=r),Dr(e,t),ot(e,t,l,n),t.child;case 6:return e===null&&we&&((e=n=Le)&&(n=V2(n,t.pendingProps,Gt),n!==null?(t.stateNode=n,it=t,Le=null,e=!0):e=!1),e||Vn(t)),null;case 13:return uh(e,t,n);case 4:return qe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ra(t,null,l,n):ot(e,t,l,n),t.child;case 11:return P0(e,t,t.type,t.pendingProps,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Qn(t,t.type,l.value),ot(e,t,l.children,n),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,ja(t),r=rt(r),l=l(r),t.flags|=1,ot(e,t,l,n),t.child;case 14:return eh(e,t,t.type,t.pendingProps,n);case 15:return th(e,t,t.type,t.pendingProps,n);case 19:return ch(e,t,n);case 31:return h2(e,t,n);case 22:return nh(e,t,n,t.pendingProps);case 24:return ja(t),l=rt(Ke),e===null?(r=Xu(),r===null&&(r=De,s=qu(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:l,cache:r},Qu(t),Qn(t,Ke,r)):((e.lanes&n)!==0&&(Zu(e,t),ci(t,null,null,n),si()),r=e.memoizedState,s=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Qn(t,Ke,l)):(l=s.cache,Qn(t,Ke,l),l!==r.cache&&Yu(t,[Ke],n,!0))),ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function bn(e){e.flags|=4}function Rs(e,t,n,l,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if($h())e.flags|=8192;else throw za=br,Vu}else e.flags&=-16777217}function dh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zp(t))if($h())e.flags|=8192;else throw za=br,Vu}function Lr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vf():536870912,e.lanes|=t,pl|=t)}function gi(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function m2(e,t,n){var l=t.pendingProps;switch(Bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return $e(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),gn(Ke),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(tl(t)?bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$u())),$e(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(bn(t),s!==null?($e(t),dh(t,s)):($e(t),Rs(t,r,null,l,n))):s?s!==e.memoizedState?(bn(t),$e(t),dh(t,s)):($e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&bn(t),$e(t),Rs(t,r,e,l,n)),null;case 27:if(Kt(t),n=ue.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return $e(t),null}e=F.current,tl(t)?Vd(t):(e=xp(r,l,n),t.stateNode=e,bn(t))}return $e(t),null;case 5:if(Kt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return $e(t),null}if(s=F.current,tl(t))Vd(t);else{var h=Ir(ue.current);switch(s){case 1:s=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=h.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?h.createElement(r,{is:l.is}):h.createElement(r)}}s[lt]=t,s[gt]=l;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)s.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=s;e:switch(ut(s,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&bn(t)}}return $e(t),Rs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ue.current,tl(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,r=it,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||up(e.nodeValue,n)),e||Vn(t,!0)}else e=Ir(e).createTextNode(l),e[lt]=t,t.stateNode=e}return $e(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=tl(t),n!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[lt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),e=!1}else n=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return $e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=tl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[lt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),r=!1}else r=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==r&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lr(t,t.updateQueue),$e(t),null);case 4:return Ee(),e===null&&Fs(t.stateNode.containerInfo),$e(t),null;case 10:return gn(t.type),$e(t),null;case 19:if(Y(Qe),l=t.memoizedState,l===null)return $e(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)gi(l,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=jr(e),s!==null){for(t.flags|=128,gi(l,!1),e=s.updateQueue,t.updateQueue=e,Lr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hd(n,e),n=n.sibling;return J(Qe,Qe.current&1|2),we&&pn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Ct()>qr&&(t.flags|=128,r=!0,gi(l,!1),t.lanes=4194304)}else{if(!r)if(e=jr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Lr(t,e),gi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!we)return $e(t),null}else 2*Ct()-l.renderingStartTime>qr&&n!==536870912&&(t.flags|=128,r=!0,gi(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ct(),e.sibling=null,n=Qe.current,J(Qe,r?n&1|2:n&1),we&&pn(t,l.treeForkCount),e):($e(t),null);case 22:case 23:return Mt(t),Wu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),n=t.updateQueue,n!==null&&Lr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Y(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),gn(Ke),$e(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function g2(e,t){switch(Bu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(Ke),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kt(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(o(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Qe),null;case 4:return Ee(),null;case 10:return gn(t.type),null;case 22:case 23:return Mt(t),Wu(),e!==null&&Y(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return gn(Ke),null;case 25:return null;default:return null}}function hh(e,t){switch(Bu(t),t.tag){case 3:gn(Ke),Ee();break;case 26:case 27:case 5:Kt(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:Y(Qe);break;case 10:gn(t.type);break;case 22:case 23:Mt(t),Wu(),e!==null&&Y(Ca);break;case 24:gn(Ke)}}function vi(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){l=void 0;var s=n.create,h=n.inst;l=s(),h.destroy=l}n=n.next}while(n!==r)}}catch(v){Ae(t,t.return,v)}}function In(e,t,n){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var s=r.next;l=s;do{if((l.tag&e)===e){var h=l.inst,v=h.destroy;if(v!==void 0){h.destroy=void 0,r=t;var E=n,N=v;try{N()}catch(H){Ae(r,E,H)}}}l=l.next}while(l!==s)}}catch(H){Ae(t,t.return,H)}}function ph(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{l0(t,n)}catch(l){Ae(e,e.return,l)}}}function mh(e,t,n){n.props=Oa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ae(e,t,l)}}function yi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){Ae(e,t,r)}}function an(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(r){Ae(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function gh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(r){Ae(e,e.return,r)}}function As(e,t,n){try{var l=e.stateNode;$2(l,e.type,n,t),l[gt]=t}catch(r){Ae(e,e.return,r)}}function vh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function Os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ms(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fn));else if(l!==4&&(l===27&&ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ms(e,t,n),e=e.sibling;e!==null;)Ms(e,t,n),e=e.sibling}function $r(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($r(e,t,n),e=e.sibling;e!==null;)$r(e,t,n),e=e.sibling}function yh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ut(t,l,n),t[lt]=e,t[gt]=n}catch(s){Ae(e,e.return,s)}}var Sn=!1,We=!1,Ns=!1,xh=typeof WeakSet=="function"?WeakSet:Set,tt=null;function v2(e,t){if(e=e.containerInfo,Ps=io,e=Md(e),Cu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var h=0,v=-1,E=-1,N=0,H=0,X=e,_=null;t:for(;;){for(var B;X!==n||r!==0&&X.nodeType!==3||(v=h+r),X!==s||l!==0&&X.nodeType!==3||(E=h+l),X.nodeType===3&&(h+=X.nodeValue.length),(B=X.firstChild)!==null;)_=X,X=B;for(;;){if(X===e)break t;if(_===n&&++N===r&&(v=h),_===s&&++H===l&&(E=h),(B=X.nextSibling)!==null)break;X=_,_=X.parentNode}X=B}n=v===-1||E===-1?null:{start:v,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(ec={focusedElem:e,selectionRange:n},io=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,l=n.stateNode;try{var te=Oa(n.type,r);e=l.getSnapshotBeforeUpdate(te,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ae(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ac(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ac(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function bh(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),l&4&&vi(5,n);break;case 1:if(En(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){Ae(n,n.return,h)}else{var r=Oa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Ae(n,n.return,h)}}l&64&&ph(n),l&512&&yi(n,n.return);break;case 3:if(En(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{l0(e,t)}catch(h){Ae(n,n.return,h)}}break;case 27:t===null&&l&4&&yh(n);case 26:case 5:En(e,n),t===null&&l&4&&gh(n),l&512&&yi(n,n.return);break;case 12:En(e,n);break;case 31:En(e,n),l&4&&Eh(e,n);break;case 13:En(e,n),l&4&&jh(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=T2.bind(null,n),Q2(e,n))));break;case 22:if(l=n.memoizedState!==null||Sn,!l){t=t!==null&&t.memoizedState!==null||We,r=Sn;var s=We;Sn=l,(We=t)&&!s?jn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),Sn=r,We=s}break;case 30:break;default:En(e,n)}}function Sh(e){var t=e.alternate;t!==null&&(e.alternate=null,Sh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&uu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,yt=!1;function wn(e,t,n){for(n=n.child;n!==null;)wh(e,t,n),n=n.sibling}function wh(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 26:We||an(n,t),wn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||an(n,t);var l=Ye,r=yt;ia(n.type)&&(Ye=n.stateNode,yt=!1),wn(e,t,n),zi(n.stateNode),Ye=l,yt=r;break;case 5:We||an(n,t);case 6:if(l=Ye,r=yt,Ye=null,wn(e,t,n),Ye=l,yt=r,Ye!==null)if(yt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(s){Ae(n,t,s)}else try{Ye.removeChild(n.stateNode)}catch(s){Ae(n,t,s)}break;case 18:Ye!==null&&(yt?(e=Ye,pp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),wl(e)):pp(Ye,n.stateNode));break;case 4:l=Ye,r=yt,Ye=n.stateNode.containerInfo,yt=!0,wn(e,t,n),Ye=l,yt=r;break;case 0:case 11:case 14:case 15:In(2,n,t),We||In(4,n,t),wn(e,t,n);break;case 1:We||(an(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&mh(n,t,l)),wn(e,t,n);break;case 21:wn(e,t,n);break;case 22:We=(l=We)||n.memoizedState!==null,wn(e,t,n),We=l;break;default:wn(e,t,n)}}function Eh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wl(e)}catch(n){Ae(t,t.return,n)}}}function jh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wl(e)}catch(n){Ae(t,t.return,n)}}function y2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xh),t;default:throw Error(o(435,e.tag))}}function Ur(e,t){var n=y2(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var r=z2.bind(null,e,l);l.then(r,r)}})}function xt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l],s=e,h=t,v=h;e:for(;v!==null;){switch(v.tag){case 27:if(ia(v.type)){Ye=v.stateNode,yt=!1;break e}break;case 5:Ye=v.stateNode,yt=!1;break e;case 3:case 4:Ye=v.stateNode.containerInfo,yt=!0;break e}v=v.return}if(Ye===null)throw Error(o(160));wh(s,h,r),Ye=null,yt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ch(t,e),t=t.sibling}var Ft=null;function Ch(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),bt(e),l&4&&(In(3,e,e.return),vi(3,e),In(5,e,e.return));break;case 1:xt(t,e),bt(e),l&512&&(We||n===null||an(n,n.return)),l&64&&Sn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var r=Ft;if(xt(t,e),bt(e),l&512&&(We||n===null||an(n,n.return)),l&4){var s=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Vl]||s[lt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(l),r.head.insertBefore(s,r.querySelector("head > title"))),ut(s,l,n),s[lt]=e,et(s),l=s;break e;case"link":var h=Cp("link","href",r).get(l+(n.href||""));if(h){for(var v=0;v<h.length;v++)if(s=h[v],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(v,1);break t}}s=r.createElement(l),ut(s,l,n),r.head.appendChild(s);break;case"meta":if(h=Cp("meta","content",r).get(l+(n.content||""))){for(v=0;v<h.length;v++)if(s=h[v],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(v,1);break t}}s=r.createElement(l),ut(s,l,n),r.head.appendChild(s);break;default:throw Error(o(468,l))}s[lt]=e,et(s),l=s}e.stateNode=l}else Tp(r,e.type,e.stateNode);else e.stateNode=jp(r,l,e.memoizedProps);else s!==l?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,l===null?Tp(r,e.type,e.stateNode):jp(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&As(e,e.memoizedProps,n.memoizedProps)}break;case 27:xt(t,e),bt(e),l&512&&(We||n===null||an(n,n.return)),n!==null&&l&4&&As(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xt(t,e),bt(e),l&512&&(We||n===null||an(n,n.return)),e.flags&32){r=e.stateNode;try{Va(r,"")}catch(te){Ae(e,e.return,te)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,As(e,r,n!==null?n.memoizedProps:r)),l&1024&&(Ns=!0);break;case 6:if(xt(t,e),bt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(te){Ae(e,e.return,te)}}break;case 3:if(to=null,r=Ft,Ft=Pr(t.containerInfo),xt(t,e),Ft=r,bt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{wl(t.containerInfo)}catch(te){Ae(e,e.return,te)}Ns&&(Ns=!1,Th(e));break;case 4:l=Ft,Ft=Pr(e.stateNode.containerInfo),xt(t,e),bt(e),Ft=l;break;case 12:xt(t,e),bt(e);break;case 31:xt(t,e),bt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ur(e,l)));break;case 13:xt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Yr=Ct()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ur(e,l)));break;case 22:r=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,N=Sn,H=We;if(Sn=N||r,We=H||E,xt(t,e),We=H,Sn=N,bt(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||E||Sn||We||Ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(s=E.stateNode,r)h=s.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{v=E.stateNode;var X=E.memoizedProps.style,_=X!=null&&X.hasOwnProperty("display")?X.display:null;v.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(te){Ae(E,E.return,te)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(te){Ae(E,E.return,te)}}}else if(t.tag===18){if(n===null){E=t;try{var B=E.stateNode;r?mp(B,!0):mp(E.stateNode,!1)}catch(te){Ae(E,E.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Ur(e,n))));break;case 19:xt(t,e),bt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ur(e,l)));break;case 30:break;case 21:break;default:xt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(vh(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,s=Os(e);$r(e,s,r);break;case 5:var h=n.stateNode;n.flags&32&&(Va(h,""),n.flags&=-33);var v=Os(e);$r(e,v,h);break;case 3:case 4:var E=n.stateNode.containerInfo,N=Os(e);Ms(e,N,E);break;default:throw Error(o(161))}}catch(H){Ae(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Th(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Th(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bh(e,t.alternate,t),t=t.sibling}function Ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:In(4,t,t.return),Ma(t);break;case 1:an(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mh(t,t.return,n),Ma(t);break;case 27:zi(t.stateNode);case 26:case 5:an(t,t.return),Ma(t);break;case 22:t.memoizedState===null&&Ma(t);break;case 30:Ma(t);break;default:Ma(t)}e=e.sibling}}function jn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,s=t,h=s.flags;switch(s.tag){case 0:case 11:case 15:jn(r,s,n),vi(4,s);break;case 1:if(jn(r,s,n),l=s,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(N){Ae(l,l.return,N)}if(l=s,r=l.updateQueue,r!==null){var v=l.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)a0(E[r],v)}catch(N){Ae(l,l.return,N)}}n&&h&64&&ph(s),yi(s,s.return);break;case 27:yh(s);case 26:case 5:jn(r,s,n),n&&l===null&&h&4&&gh(s),yi(s,s.return);break;case 12:jn(r,s,n);break;case 31:jn(r,s,n),n&&h&4&&Eh(r,s);break;case 13:jn(r,s,n),n&&h&4&&jh(r,s);break;case 22:s.memoizedState===null&&jn(r,s,n),yi(s,s.return);break;case 30:break;default:jn(r,s,n)}t=t.sibling}}function _s(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&li(n))}function ks(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&li(e))}function Wt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zh(e,t,n,l),t=t.sibling}function zh(e,t,n,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,n,l),r&2048&&vi(9,t);break;case 1:Wt(e,t,n,l);break;case 3:Wt(e,t,n,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&li(e)));break;case 12:if(r&2048){Wt(e,t,n,l),e=t.stateNode;try{var s=t.memoizedProps,h=s.id,v=s.onPostCommit;typeof v=="function"&&v(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Ae(t,t.return,E)}}else Wt(e,t,n,l);break;case 31:Wt(e,t,n,l);break;case 13:Wt(e,t,n,l);break;case 23:break;case 22:s=t.stateNode,h=t.alternate,t.memoizedState!==null?s._visibility&2?Wt(e,t,n,l):xi(e,t):s._visibility&2?Wt(e,t,n,l):(s._visibility|=2,fl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),r&2048&&_s(h,t);break;case 24:Wt(e,t,n,l),r&2048&&ks(t.alternate,t);break;default:Wt(e,t,n,l)}}function fl(e,t,n,l,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,h=t,v=n,E=l,N=h.flags;switch(h.tag){case 0:case 11:case 15:fl(s,h,v,E,r),vi(8,h);break;case 23:break;case 22:var H=h.stateNode;h.memoizedState!==null?H._visibility&2?fl(s,h,v,E,r):xi(s,h):(H._visibility|=2,fl(s,h,v,E,r)),r&&N&2048&&_s(h.alternate,h);break;case 24:fl(s,h,v,E,r),r&&N&2048&&ks(h.alternate,h);break;default:fl(s,h,v,E,r)}t=t.sibling}}function xi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,r=l.flags;switch(l.tag){case 22:xi(n,l),r&2048&&_s(l.alternate,l);break;case 24:xi(n,l),r&2048&&ks(l.alternate,l);break;default:xi(n,l)}t=t.sibling}}var bi=8192;function dl(e,t,n){if(e.subtreeFlags&bi)for(e=e.child;e!==null;)Rh(e,t,n),e=e.sibling}function Rh(e,t,n){switch(e.tag){case 26:dl(e,t,n),e.flags&bi&&e.memoizedState!==null&&ly(n,Ft,e.memoizedState,e.memoizedProps);break;case 5:dl(e,t,n);break;case 3:case 4:var l=Ft;Ft=Pr(e.stateNode.containerInfo),dl(e,t,n),Ft=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=bi,bi=16777216,dl(e,t,n),bi=l):dl(e,t,n));break;default:dl(e,t,n)}}function Ah(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];tt=l,Mh(l,e)}Ah(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Oh(e),e=e.sibling}function Oh(e){switch(e.tag){case 0:case 11:case 15:Si(e),e.flags&2048&&In(9,e,e.return);break;case 3:Si(e);break;case 12:Si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hr(e)):Si(e);break;default:Si(e)}}function Hr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];tt=l,Mh(l,e)}Ah(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),Hr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Hr(t));break;default:Hr(t)}e=e.sibling}}function Mh(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:li(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,tt=l;else e:for(n=e;tt!==null;){l=tt;var r=l.sibling,s=l.return;if(Sh(l),l===n){tt=null;break e}if(r!==null){r.return=s,tt=r;break e}tt=s}}}var x2={getCacheForType:function(e){var t=rt(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Ke).controller.signal}},b2=typeof WeakMap=="function"?WeakMap:Map,Te=0,De=null,ye=null,be=0,Re=0,Nt=null,Pn=!1,hl=!1,Ds=!1,Cn=0,Ve=0,ea=0,Na=0,Bs=0,_t=0,pl=0,wi=null,St=null,Ls=!1,Yr=0,Nh=0,qr=1/0,Gr=null,ta=null,Pe=0,na=null,ml=null,Tn=0,$s=0,Us=null,_h=null,Ei=0,Hs=null;function kt(){return(Te&2)!==0&&be!==0?be&-be:D.T!==null?Qs():Jf()}function kh(){if(_t===0)if((be&536870912)===0||we){var e=Wi;Wi<<=1,(Wi&3932160)===0&&(Wi=262144),_t=e}else _t=536870912;return e=Ot.current,e!==null&&(e.flags|=32),_t}function wt(e,t,n){(e===De&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(gl(e,0),aa(e,be,_t,!1)),Xl(e,n),((Te&2)===0||e!==De)&&(e===De&&((Te&2)===0&&(Na|=n),Ve===4&&aa(e,be,_t,!1)),ln(e))}function Dh(e,t,n){if((Te&6)!==0)throw Error(o(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Gl(e,t),r=l?E2(e,t):qs(e,t,!0),s=l;do{if(r===0){hl&&!l&&aa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!S2(n)){r=qs(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var v=e;r=wi;var E=v.current.memoizedState.isDehydrated;if(E&&(gl(v,h).flags|=256),h=qs(v,h,!1),h!==2){if(Ds&&!E){v.errorRecoveryDisabledLanes|=s,Na|=s,r=4;break e}s=St,St=r,s!==null&&(St===null?St=s:St.push.apply(St,s))}r=h}if(s=!1,r!==2)continue}}if(r===1){gl(e,0),aa(e,t,0,!0);break}e:{switch(l=e,s=r,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:aa(l,t,_t,!Pn);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Yr+300-Ct(),10<r)){if(aa(l,t,_t,!Pn),Pi(l,0,!0)!==0)break e;Tn=t,l.timeoutHandle=dp(Bh.bind(null,l,n,St,Gr,Ls,t,_t,Na,pl,Pn,s,"Throttled",-0,0),r);break e}Bh(l,n,St,Gr,Ls,t,_t,Na,pl,Pn,s,null,-0,0)}}break}while(!0);ln(e)}function Bh(e,t,n,l,r,s,h,v,E,N,H,X,_,B){if(e.timeoutHandle=-1,X=t.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fn},Rh(t,s,X);var te=(s&62914560)===s?Yr-Ct():(s&4194048)===s?Nh-Ct():0;if(te=iy(X,te),te!==null){Tn=s,e.cancelPendingCommit=te(Xh.bind(null,e,t,s,n,l,r,h,v,E,H,X,null,_,B)),aa(e,s,h,!N);return}}Xh(e,t,s,n,l,r,h,v,E)}function S2(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var r=n[l],s=r.getSnapshot;r=r.value;try{if(!Rt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function aa(e,t,n,l){t&=~Bs,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var s=31-zt(r),h=1<<s;l[s]=-1,r&=~h}n!==0&&Qf(e,n,t)}function Xr(){return(Te&6)===0?(ji(0),!1):!0}function Ys(){if(ye!==null){if(Re===0)var e=ye.return;else e=ye,mn=Ea=null,as(e),rl=null,ri=0,e=ye;for(;e!==null;)hh(e.alternate,e),e=e.return;ye=null}}function gl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Y2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Tn=0,Ys(),De=e,ye=n=hn(e.current,null),be=t,Re=0,Nt=null,Pn=!1,hl=Gl(e,t),Ds=!1,pl=_t=Bs=Na=ea=Ve=0,St=wi=null,Ls=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-zt(l),s=1<<r;t|=e[r],l&=~s}return Cn=t,fr(),n}function Lh(e,t){de=null,D.H=pi,t===il||t===xr?(t=Pd(),Re=3):t===Vu?(t=Pd(),Re=4):Re=t===xs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nt=t,ye===null&&(Ve=1,_r(e,Ht(t,e.current)))}function $h(){var e=Ot.current;return e===null?!0:(be&4194048)===be?Xt===null:(be&62914560)===be||(be&536870912)!==0?e===Xt:!1}function Uh(){var e=D.H;return D.H=pi,e===null?pi:e}function Hh(){var e=D.A;return D.A=x2,e}function Vr(){Ve=4,Pn||(be&4194048)!==be&&Ot.current!==null||(hl=!0),(ea&134217727)===0&&(Na&134217727)===0||De===null||aa(De,be,_t,!1)}function qs(e,t,n){var l=Te;Te|=2;var r=Uh(),s=Hh();(De!==e||be!==t)&&(Gr=null,gl(e,t)),t=!1;var h=Ve;e:do try{if(Re!==0&&ye!==null){var v=ye,E=Nt;switch(Re){case 8:Ys(),h=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var N=Re;if(Re=0,Nt=null,vl(e,v,E,N),n&&hl){h=0;break e}break;default:N=Re,Re=0,Nt=null,vl(e,v,E,N)}}w2(),h=Ve;break}catch(H){Lh(e,H)}while(!0);return t&&e.shellSuspendCounter++,mn=Ea=null,Te=l,D.H=r,D.A=s,ye===null&&(De=null,be=0,fr()),h}function w2(){for(;ye!==null;)Yh(ye)}function E2(e,t){var n=Te;Te|=2;var l=Uh(),r=Hh();De!==e||be!==t?(Gr=null,qr=Ct()+500,gl(e,t)):hl=Gl(e,t);e:do try{if(Re!==0&&ye!==null){t=ye;var s=Nt;t:switch(Re){case 1:Re=0,Nt=null,vl(e,t,s,1);break;case 2:case 9:if(Wd(s)){Re=0,Nt=null,qh(t);break}t=function(){Re!==2&&Re!==9||De!==e||(Re=7),ln(e)},s.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Wd(s)?(Re=0,Nt=null,qh(t)):(Re=0,Nt=null,vl(e,t,s,7));break;case 5:var h=null;switch(ye.tag){case 26:h=ye.memoizedState;case 5:case 27:var v=ye;if(h?zp(h):v.stateNode.complete){Re=0,Nt=null;var E=v.sibling;if(E!==null)ye=E;else{var N=v.return;N!==null?(ye=N,Qr(N)):ye=null}break t}}Re=0,Nt=null,vl(e,t,s,5);break;case 6:Re=0,Nt=null,vl(e,t,s,6);break;case 8:Ys(),Ve=6;break e;default:throw Error(o(462))}}j2();break}catch(H){Lh(e,H)}while(!0);return mn=Ea=null,D.H=l,D.A=r,Te=n,ye!==null?0:(De=null,be=0,fr(),Ve)}function j2(){for(;ye!==null&&!Zg();)Yh(ye)}function Yh(e){var t=fh(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,t===null?Qr(e):ye=t}function qh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ih(n,t,t.pendingProps,t.type,void 0,be);break;case 11:t=ih(n,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:as(t);default:hh(n,t),t=ye=Hd(t,Cn),t=fh(n,t,Cn)}e.memoizedProps=e.pendingProps,t===null?Qr(e):ye=t}function vl(e,t,n,l){mn=Ea=null,as(t),rl=null,ri=0;var r=t.return;try{if(d2(e,r,t,n,be)){Ve=1,_r(e,Ht(n,e.current)),ye=null;return}}catch(s){if(r!==null)throw ye=r,s;Ve=1,_r(e,Ht(n,e.current)),ye=null;return}t.flags&32768?(we||l===1?e=!0:hl||(be&536870912)!==0?e=!1:(Pn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ot.current,l!==null&&l.tag===13&&(l.flags|=16384))),Gh(t,e)):Qr(t)}function Qr(e){var t=e;do{if((t.flags&32768)!==0){Gh(t,Pn);return}e=t.return;var n=m2(t.alternate,t,Cn);if(n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Ve===0&&(Ve=5)}function Gh(e,t){do{var n=g2(e.alternate,e);if(n!==null){n.flags&=32767,ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=n}while(e!==null);Ve=6,ye=null}function Xh(e,t,n,l,r,s,h,v,E){e.cancelPendingCommit=null;do Zr();while(Pe!==0);if((Te&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=Ou,av(e,n,s,h,v,E),e===De&&(ye=De=null,be=0),ml=t,na=e,Tn=n,$s=s,Us=r,_h=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,R2(Ji,function(){return Jh(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,r=Q.p,Q.p=2,h=Te,Te|=4;try{v2(e,t,n)}finally{Te=h,Q.p=r,D.T=l}}Pe=1,Vh(),Qh(),Zh()}}function Vh(){if(Pe===1){Pe=0;var e=na,t=ml,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var l=Q.p;Q.p=2;var r=Te;Te|=4;try{Ch(t,e);var s=ec,h=Md(e.containerInfo),v=s.focusedElem,E=s.selectionRange;if(h!==v&&v&&v.ownerDocument&&Od(v.ownerDocument.documentElement,v)){if(E!==null&&Cu(v)){var N=E.start,H=E.end;if(H===void 0&&(H=N),"selectionStart"in v)v.selectionStart=N,v.selectionEnd=Math.min(H,v.value.length);else{var X=v.ownerDocument||document,_=X&&X.defaultView||window;if(_.getSelection){var B=_.getSelection(),te=v.textContent.length,oe=Math.min(E.start,te),ke=E.end===void 0?oe:Math.min(E.end,te);!B.extend&&oe>ke&&(h=ke,ke=oe,oe=h);var z=Ad(v,oe),C=Ad(v,ke);if(z&&C&&(B.rangeCount!==1||B.anchorNode!==z.node||B.anchorOffset!==z.offset||B.focusNode!==C.node||B.focusOffset!==C.offset)){var O=X.createRange();O.setStart(z.node,z.offset),B.removeAllRanges(),oe>ke?(B.addRange(O),B.extend(C.node,C.offset)):(O.setEnd(C.node,C.offset),B.addRange(O))}}}}for(X=[],B=v;B=B.parentNode;)B.nodeType===1&&X.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<X.length;v++){var G=X[v];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}io=!!Ps,ec=Ps=null}finally{Te=r,Q.p=l,D.T=n}}e.current=t,Pe=2}}function Qh(){if(Pe===2){Pe=0;var e=na,t=ml,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var l=Q.p;Q.p=2;var r=Te;Te|=4;try{bh(e,t.alternate,t)}finally{Te=r,Q.p=l,D.T=n}}Pe=3}}function Zh(){if(Pe===4||Pe===3){Pe=0,Kg();var e=na,t=ml,n=Tn,l=_h;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,ml=na=null,Kh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ta=null),ru(n),t=t.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,r=Q.p,Q.p=2,D.T=null;try{for(var s=e.onRecoverableError,h=0;h<l.length;h++){var v=l[h];s(v.value,{componentStack:v.stack})}}finally{D.T=t,Q.p=r}}(Tn&3)!==0&&Zr(),ln(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Hs?Ei++:(Ei=0,Hs=e):Ei=0,ji(0)}}function Kh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,li(t)))}function Zr(){return Vh(),Qh(),Zh(),Jh()}function Jh(){if(Pe!==5)return!1;var e=na,t=$s;$s=0;var n=ru(Tn),l=D.T,r=Q.p;try{Q.p=32>n?32:n,D.T=null,n=Us,Us=null;var s=na,h=Tn;if(Pe=0,ml=na=null,Tn=0,(Te&6)!==0)throw Error(o(331));var v=Te;if(Te|=4,Oh(s.current),zh(s,s.current,h,n),Te=v,ji(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(ql,s)}catch{}return!0}finally{Q.p=r,D.T=l,Kh(e,t)}}function Fh(e,t,n){t=Ht(n,t),t=ys(e.stateNode,t,2),e=Jn(e,t,2),e!==null&&(Xl(e,2),ln(e))}function Ae(e,t,n){if(e.tag===3)Fh(e,e,n);else for(;t!==null;){if(t.tag===3){Fh(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ta===null||!ta.has(l))){e=Ht(n,e),n=W0(2),l=Jn(t,n,2),l!==null&&(I0(n,l,t,e),Xl(l,2),ln(l));break}}t=t.return}}function Gs(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new b2;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(n)||(Ds=!0,r.add(n),e=C2.bind(null,e,t,n),t.then(e,e))}function C2(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(be&n)===n&&(Ve===4||Ve===3&&(be&62914560)===be&&300>Ct()-Yr?(Te&2)===0&&gl(e,0):Bs|=n,pl===be&&(pl=0)),ln(e)}function Wh(e,t){t===0&&(t=Vf()),e=ba(e,t),e!==null&&(Xl(e,t),ln(e))}function T2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wh(e,n)}function z2(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Wh(e,n)}function R2(e,t){return nu(e,t)}var Kr=null,yl=null,Xs=!1,Jr=!1,Vs=!1,la=0;function ln(e){e!==yl&&e.next===null&&(yl===null?Kr=yl=e:yl=yl.next=e),Jr=!0,Xs||(Xs=!0,O2())}function ji(e,t){if(!Vs&&Jr){Vs=!0;do for(var n=!1,l=Kr;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var s=0;else{var h=l.suspendedLanes,v=l.pingedLanes;s=(1<<31-zt(42|e)+1)-1,s&=r&~(h&~v),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,tp(l,s))}else s=be,s=Pi(l,l===De?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||Gl(l,s)||(n=!0,tp(l,s));l=l.next}while(n);Vs=!1}}function A2(){Ih()}function Ih(){Jr=Xs=!1;var e=0;la!==0&&H2()&&(e=la);for(var t=Ct(),n=null,l=Kr;l!==null;){var r=l.next,s=Ph(l,t);s===0?(l.next=null,n===null?Kr=r:n.next=r,r===null&&(yl=n)):(n=l,(e!==0||(s&3)!==0)&&(Jr=!0)),l=r}Pe!==0&&Pe!==5||ji(e),la!==0&&(la=0)}function Ph(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var h=31-zt(s),v=1<<h,E=r[h];E===-1?((v&n)===0||(v&l)!==0)&&(r[h]=nv(v,t)):E<=t&&(e.expiredLanes|=v),s&=~v}if(t=De,n=be,n=Pi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&au(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Gl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&au(l),ru(n)){case 2:case 8:n=Gf;break;case 32:n=Ji;break;case 268435456:n=Xf;break;default:n=Ji}return l=ep.bind(null,e),n=nu(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&au(l),e.callbackPriority=2,e.callbackNode=null,2}function ep(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Zr()&&e.callbackNode!==n)return null;var l=be;return l=Pi(e,e===De?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Dh(e,l,t),Ph(e,Ct()),e.callbackNode!=null&&e.callbackNode===n?ep.bind(null,e):null)}function tp(e,t){if(Zr())return null;Dh(e,t,!0)}function O2(){q2(function(){(Te&6)!==0?nu(qf,A2):Ih()})}function Qs(){if(la===0){var e=al;e===0&&(e=Fi,Fi<<=1,(Fi&261888)===0&&(Fi=256)),la=e}return la}function np(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ar(""+e)}function ap(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function M2(e,t,n,l,r){if(t==="submit"&&n&&n.stateNode===r){var s=np((r[gt]||null).action),h=l.submitter;h&&(t=(t=h[gt]||null)?np(t.formAction):h.getAttribute("formAction"),t!==null&&(s=t,h=null));var v=new or("action","action",null,l,r);e.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(la!==0){var E=h?ap(r,h):new FormData(r);ds(n,{pending:!0,data:E,method:r.method,action:s},null,E)}}else typeof s=="function"&&(v.preventDefault(),E=h?ap(r,h):new FormData(r),ds(n,{pending:!0,data:E,method:r.method,action:s},s,E))},currentTarget:r}]})}}for(var Zs=0;Zs<Au.length;Zs++){var Ks=Au[Zs],N2=Ks.toLowerCase(),_2=Ks[0].toUpperCase()+Ks.slice(1);Jt(N2,"on"+_2)}Jt(kd,"onAnimationEnd"),Jt(Dd,"onAnimationIteration"),Jt(Bd,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(Jv,"onTransitionRun"),Jt(Fv,"onTransitionStart"),Jt(Wv,"onTransitionCancel"),Jt(Ld,"onTransitionEnd"),Ga("onMouseEnter",["mouseout","mouseover"]),Ga("onMouseLeave",["mouseout","mouseover"]),Ga("onPointerEnter",["pointerout","pointerover"]),Ga("onPointerLeave",["pointerout","pointerover"]),ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ci));function lp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var h=l.length-1;0<=h;h--){var v=l[h],E=v.instance,N=v.currentTarget;if(v=v.listener,E!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=N;try{s(r)}catch(H){cr(H)}r.currentTarget=null,s=E}else for(h=0;h<l.length;h++){if(v=l[h],E=v.instance,N=v.currentTarget,v=v.listener,E!==s&&r.isPropagationStopped())break e;s=v,r.currentTarget=N;try{s(r)}catch(H){cr(H)}r.currentTarget=null,s=E}}}}function xe(e,t){var n=t[ou];n===void 0&&(n=t[ou]=new Set);var l=e+"__bubble";n.has(l)||(ip(t,e,2,!1),n.add(l))}function Js(e,t,n){var l=0;t&&(l|=4),ip(n,e,l,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Fs(e){if(!e[Fr]){e[Fr]=!0,If.forEach(function(n){n!=="selectionchange"&&(k2.has(n)||Js(n,!1,e),Js(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,Js("selectionchange",!1,t))}}function ip(e,t,n,l){switch(kp(t)){case 2:var r=uy;break;case 8:r=sy;break;default:r=fc}n=r.bind(null,t,n,e),r=void 0,!gu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Ws(e,t,n,l,r){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var v=l.stateNode.containerInfo;if(v===r)break;if(h===4)for(h=l.return;h!==null;){var E=h.tag;if((E===3||E===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;v!==null;){if(h=Ha(v),h===null)return;if(E=h.tag,E===5||E===6||E===26||E===27){l=s=h;continue e}v=v.parentNode}}l=l.return}cd(function(){var N=s,H=pu(n),X=[];e:{var _=$d.get(e);if(_!==void 0){var B=or,te=e;switch(e){case"keypress":if(ir(n)===0)break e;case"keydown":case"keyup":B=zv;break;case"focusin":te="focus",B=bu;break;case"focusout":te="blur",B=bu;break;case"beforeblur":case"afterblur":B=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Ov;break;case kd:case Dd:case Bd:B=yv;break;case Ld:B=Nv;break;case"scroll":case"scrollend":B=hv;break;case"wheel":B=kv;break;case"copy":case"cut":case"paste":B=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=md;break;case"toggle":case"beforetoggle":B=Bv}var oe=(t&4)!==0,ke=!oe&&(e==="scroll"||e==="scrollend"),z=oe?_!==null?_+"Capture":null:_;oe=[];for(var C=N,O;C!==null;){var G=C;if(O=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||O===null||z===null||(G=Zl(C,z),G!=null&&oe.push(Ti(C,G,O))),ke)break;C=C.return}0<oe.length&&(_=new B(_,te,null,n,H),X.push({event:_,listeners:oe}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",_&&n!==hu&&(te=n.relatedTarget||n.fromElement)&&(Ha(te)||te[Ua]))break e;if((B||_)&&(_=H.window===H?H:(_=H.ownerDocument)?_.defaultView||_.parentWindow:window,B?(te=n.relatedTarget||n.toElement,B=N,te=te?Ha(te):null,te!==null&&(ke=f(te),oe=te.tag,te!==ke||oe!==5&&oe!==27&&oe!==6)&&(te=null)):(B=null,te=N),B!==te)){if(oe=hd,G="onMouseLeave",z="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(oe=md,G="onPointerLeave",z="onPointerEnter",C="pointer"),ke=B==null?_:Ql(B),O=te==null?_:Ql(te),_=new oe(G,C+"leave",B,n,H),_.target=ke,_.relatedTarget=O,G=null,Ha(H)===N&&(oe=new oe(z,C+"enter",te,n,H),oe.target=O,oe.relatedTarget=ke,G=oe),ke=G,B&&te)t:{for(oe=D2,z=B,C=te,O=0,G=z;G;G=oe(G))O++;G=0;for(var re=C;re;re=oe(re))G++;for(;0<O-G;)z=oe(z),O--;for(;0<G-O;)C=oe(C),G--;for(;O--;){if(z===C||C!==null&&z===C.alternate){oe=z;break t}z=oe(z),C=oe(C)}oe=null}else oe=null;B!==null&&rp(X,_,B,oe,!1),te!==null&&ke!==null&&rp(X,ke,te,oe,!0)}}e:{if(_=N?Ql(N):window,B=_.nodeName&&_.nodeName.toLowerCase(),B==="select"||B==="input"&&_.type==="file")var je=Ed;else if(Sd(_))if(jd)je=Qv;else{je=Xv;var le=Gv}else B=_.nodeName,!B||B.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?N&&du(N.elementType)&&(je=Ed):je=Vv;if(je&&(je=je(e,N))){wd(X,je,n,H);break e}le&&le(e,_,N),e==="focusout"&&N&&_.type==="number"&&N.memoizedProps.value!=null&&fu(_,"number",_.value)}switch(le=N?Ql(N):window,e){case"focusin":(Sd(le)||le.contentEditable==="true")&&(Ja=le,Tu=N,ti=null);break;case"focusout":ti=Tu=Ja=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,Nd(X,n,H);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":Nd(X,n,H)}var he;if(wu)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Ka?xd(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&(gd&&n.locale!=="ko"&&(Ka||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ka&&(he=fd()):(qn=H,vu="value"in qn?qn.value:qn.textContent,Ka=!0)),le=Wr(N,Se),0<le.length&&(Se=new pd(Se,e,null,n,H),X.push({event:Se,listeners:le}),he?Se.data=he:(he=bd(n),he!==null&&(Se.data=he)))),(he=$v?Uv(e,n):Hv(e,n))&&(Se=Wr(N,"onBeforeInput"),0<Se.length&&(le=new pd("onBeforeInput","beforeinput",null,n,H),X.push({event:le,listeners:Se}),le.data=he)),M2(X,e,N,n,H)}lp(X,t)})}function Ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",l=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Zl(e,n),r!=null&&l.unshift(Ti(e,r,s)),r=Zl(e,t),r!=null&&l.push(Ti(e,r,s))),e.tag===3)return l;e=e.return}return[]}function D2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rp(e,t,n,l,r){for(var s=t._reactName,h=[];n!==null&&n!==l;){var v=n,E=v.alternate,N=v.stateNode;if(v=v.tag,E!==null&&E===l)break;v!==5&&v!==26&&v!==27||N===null||(E=N,r?(N=Zl(n,s),N!=null&&h.unshift(Ti(n,N,E))):r||(N=Zl(n,s),N!=null&&h.push(Ti(n,N,E)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var B2=/\r\n?/g,L2=/\u0000|\uFFFD/g;function op(e){return(typeof e=="string"?e:""+e).replace(B2,`
`).replace(L2,"")}function up(e,t){return t=op(t),op(e)===t}function _e(e,t,n,l,r,s){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Va(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Va(e,""+l);break;case"className":tr(e,"class",l);break;case"tabIndex":tr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":tr(e,n,l);break;case"style":ud(e,l,s);break;case"data":if(t!=="object"){tr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ar(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&_e(e,t,"name",r.name,r,null),_e(e,t,"formEncType",r.formEncType,r,null),_e(e,t,"formMethod",r.formMethod,r,null),_e(e,t,"formTarget",r.formTarget,r,null)):(_e(e,t,"encType",r.encType,r,null),_e(e,t,"method",r.method,r,null),_e(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ar(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=fn);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ar(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),er(e,"popover",l);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":er(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=fv.get(n)||n,er(e,n,l))}}function Is(e,t,n,l,r,s){switch(n){case"style":ud(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Va(e,l):(typeof l=="number"||typeof l=="bigint")&&Va(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=fn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[gt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof l=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,r);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):er(e,n,l)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var h=n[s];if(h!=null)switch(s){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:_e(e,t,s,h,n,null)}}r&&_e(e,t,"srcSet",n.srcSet,n,null),l&&_e(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var v=s=h=r=null,E=null,N=null;for(l in n)if(n.hasOwnProperty(l)){var H=n[l];if(H!=null)switch(l){case"name":r=H;break;case"type":h=H;break;case"checked":E=H;break;case"defaultChecked":N=H;break;case"value":s=H;break;case"defaultValue":v=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,t));break;default:_e(e,t,l,H,n,null)}}ld(e,s,v,E,N,h,r,!1);return;case"select":xe("invalid",e),l=h=s=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":s=v;break;case"defaultValue":h=v;break;case"multiple":l=v;default:_e(e,t,r,v,n,null)}t=s,n=h,e.multiple=!!l,t!=null?Xa(e,!!l,t,!1):n!=null&&Xa(e,!!l,n,!0);return;case"textarea":xe("invalid",e),s=r=l=null;for(h in n)if(n.hasOwnProperty(h)&&(v=n[h],v!=null))switch(h){case"value":l=v;break;case"defaultValue":r=v;break;case"children":s=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:_e(e,t,h,v,n,null)}rd(e,l,r,s);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(l=n[E],l!=null))switch(E){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:_e(e,t,E,l,n,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<Ci.length;l++)xe(Ci[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(l=n[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:_e(e,t,N,l,n,null)}return;default:if(du(t)){for(H in n)n.hasOwnProperty(H)&&(l=n[H],l!==void 0&&Is(e,t,H,l,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(l=n[v],l!=null&&_e(e,t,v,l,n,null))}function $2(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,h=null,v=null,E=null,N=null,H=null;for(B in n){var X=n[B];if(n.hasOwnProperty(B)&&X!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":E=X;default:l.hasOwnProperty(B)||_e(e,t,B,null,l,X)}}for(var _ in l){var B=l[_];if(X=n[_],l.hasOwnProperty(_)&&(B!=null||X!=null))switch(_){case"type":s=B;break;case"name":r=B;break;case"checked":N=B;break;case"defaultChecked":H=B;break;case"value":h=B;break;case"defaultValue":v=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:B!==X&&_e(e,t,_,B,l,X)}}cu(e,h,v,E,N,H,s,r);return;case"select":B=h=v=_=null;for(s in n)if(E=n[s],n.hasOwnProperty(s)&&E!=null)switch(s){case"value":break;case"multiple":B=E;default:l.hasOwnProperty(s)||_e(e,t,s,null,l,E)}for(r in l)if(s=l[r],E=n[r],l.hasOwnProperty(r)&&(s!=null||E!=null))switch(r){case"value":_=s;break;case"defaultValue":v=s;break;case"multiple":h=s;default:s!==E&&_e(e,t,r,s,l,E)}t=v,n=h,l=B,_!=null?Xa(e,!!n,_,!1):!!l!=!!n&&(t!=null?Xa(e,!!n,t,!0):Xa(e,!!n,n?[]:"",!1));return;case"textarea":B=_=null;for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:_e(e,t,v,null,l,r)}for(h in l)if(r=l[h],s=n[h],l.hasOwnProperty(h)&&(r!=null||s!=null))switch(h){case"value":_=r;break;case"defaultValue":B=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==s&&_e(e,t,h,r,l,s)}id(e,_,B);return;case"option":for(var te in n)if(_=n[te],n.hasOwnProperty(te)&&_!=null&&!l.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:_e(e,t,te,null,l,_)}for(E in l)if(_=l[E],B=n[E],l.hasOwnProperty(E)&&_!==B&&(_!=null||B!=null))switch(E){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:_e(e,t,E,_,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)_=n[oe],n.hasOwnProperty(oe)&&_!=null&&!l.hasOwnProperty(oe)&&_e(e,t,oe,null,l,_);for(N in l)if(_=l[N],B=n[N],l.hasOwnProperty(N)&&_!==B&&(_!=null||B!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,t));break;default:_e(e,t,N,_,l,B)}return;default:if(du(t)){for(var ke in n)_=n[ke],n.hasOwnProperty(ke)&&_!==void 0&&!l.hasOwnProperty(ke)&&Is(e,t,ke,void 0,l,_);for(H in l)_=l[H],B=n[H],!l.hasOwnProperty(H)||_===B||_===void 0&&B===void 0||Is(e,t,H,_,l,B);return}}for(var z in n)_=n[z],n.hasOwnProperty(z)&&_!=null&&!l.hasOwnProperty(z)&&_e(e,t,z,null,l,_);for(X in l)_=l[X],B=n[X],!l.hasOwnProperty(X)||_===B||_==null&&B==null||_e(e,t,X,_,l,B)}function sp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var r=n[l],s=r.transferSize,h=r.initiatorType,v=r.duration;if(s&&v&&sp(h)){for(h=0,v=r.responseEnd,l+=1;l<n.length;l++){var E=n[l],N=E.startTime;if(N>v)break;var H=E.transferSize,X=E.initiatorType;H&&sp(X)&&(E=E.responseEnd,h+=H*(E<v?1:(v-N)/(E-N)))}if(--l,t+=8*(s+h)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ps=null,ec=null;function Ir(e){return e.nodeType===9?e:e.ownerDocument}function cp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nc=null;function H2(){var e=window.event;return e&&e.type==="popstate"?e===nc?!1:(nc=e,!0):(nc=null,!1)}var dp=typeof setTimeout=="function"?setTimeout:void 0,Y2=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,q2=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(e){return hp.resolve(null).then(e).catch(G2)}:dp;function G2(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function pp(e,t){var n=t,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(r),wl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")zi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,zi(n);for(var s=n.firstChild;s;){var h=s.nextSibling,v=s.nodeName;s[Vl]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=h}}else n==="body"&&zi(e.ownerDocument.body);n=r}while(n);wl(t)}function mp(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function ac(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ac(n),uu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function X2(e,t,n,l){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function V2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function gp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function lc(e){return e.data==="$?"||e.data==="$~"}function ic(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Q2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var rc=null;function vp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function yp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function xp(e,t,n){switch(t=Ir(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function zi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);uu(e)}var Qt=new Map,bp=new Set;function Pr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zn=Q.d;Q.d={f:Z2,r:K2,D:J2,C:F2,L:W2,m:I2,X:ey,S:P2,M:ty};function Z2(){var e=zn.f(),t=Xr();return e||t}function K2(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?L0(t):zn.r(e)}var xl=typeof document>"u"?null:document;function Sp(e,t,n){var l=xl;if(l&&typeof t=="string"&&t){var r=$t(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),bp.has(r)||(bp.add(r),e={rel:e,crossOrigin:n,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),ut(t,"link",e),et(t),l.head.appendChild(t)))}}function J2(e){zn.D(e),Sp("dns-prefetch",e,null)}function F2(e,t){zn.C(e,t),Sp("preconnect",e,t)}function W2(e,t,n){zn.L(e,t,n);var l=xl;if(l&&e&&t){var r='link[rel="preload"][as="'+$t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+$t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+$t(n.imageSizes)+'"]')):r+='[href="'+$t(e)+'"]';var s=r;switch(t){case"style":s=bl(e);break;case"script":s=Sl(e)}Qt.has(s)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qt.set(s,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(Ri(s))||t==="script"&&l.querySelector(Ai(s))||(t=l.createElement("link"),ut(t,"link",e),et(t),l.head.appendChild(t)))}}function I2(e,t){zn.m(e,t);var n=xl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+$t(l)+'"][href="'+$t(e)+'"]',s=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Sl(e)}if(!Qt.has(s)&&(e=w({rel:"modulepreload",href:e},t),Qt.set(s,e),n.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ai(s)))return}l=n.createElement("link"),ut(l,"link",e),et(l),n.head.appendChild(l)}}}function P2(e,t,n){zn.S(e,t,n);var l=xl;if(l&&e){var r=qa(l).hoistableStyles,s=bl(e);t=t||"default";var h=r.get(s);if(!h){var v={loading:0,preload:null};if(h=l.querySelector(Ri(s)))v.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qt.get(s))&&oc(e,n);var E=h=l.createElement("link");et(E),ut(E,"link",e),E._p=new Promise(function(N,H){E.onload=N,E.onerror=H}),E.addEventListener("load",function(){v.loading|=1}),E.addEventListener("error",function(){v.loading|=2}),v.loading|=4,eo(h,t,l)}h={type:"stylesheet",instance:h,count:1,state:v},r.set(s,h)}}}function ey(e,t){zn.X(e,t);var n=xl;if(n&&e){var l=qa(n).hoistableScripts,r=Sl(e),s=l.get(r);s||(s=n.querySelector(Ai(r)),s||(e=w({src:e,async:!0},t),(t=Qt.get(r))&&uc(e,t),s=n.createElement("script"),et(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(r,s))}}function ty(e,t){zn.M(e,t);var n=xl;if(n&&e){var l=qa(n).hoistableScripts,r=Sl(e),s=l.get(r);s||(s=n.querySelector(Ai(r)),s||(e=w({src:e,async:!0,type:"module"},t),(t=Qt.get(r))&&uc(e,t),s=n.createElement("script"),et(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(r,s))}}function wp(e,t,n,l){var r=(r=ue.current)?Pr(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=bl(n.href),n=qa(r).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=bl(n.href);var s=qa(r).hoistableStyles,h=s.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,h),(s=r.querySelector(Ri(e)))&&!s._p&&(h.instance=s,h.state.loading=5),Qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qt.set(e,n),s||ny(r,e,n,h.state))),t&&l===null)throw Error(o(528,""));return h}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Sl(n),n=qa(r).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function bl(e){return'href="'+$t(e)+'"'}function Ri(e){return'link[rel="stylesheet"]['+e+"]"}function Ep(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function ny(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ut(t,"link",n),et(t),e.head.appendChild(t))}function Sl(e){return'[src="'+$t(e)+'"]'}function Ai(e){return"script[async]"+e}function jp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+$t(n.href)+'"]');if(l)return t.instance=l,et(l),l;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),et(l),ut(l,"style",r),eo(l,n.precedence,e),t.instance=l;case"stylesheet":r=bl(n.href);var s=e.querySelector(Ri(r));if(s)return t.state.loading|=4,t.instance=s,et(s),s;l=Ep(n),(r=Qt.get(r))&&oc(l,r),s=(e.ownerDocument||e).createElement("link"),et(s);var h=s;return h._p=new Promise(function(v,E){h.onload=v,h.onerror=E}),ut(s,"link",l),t.state.loading|=4,eo(s,n.precedence,e),t.instance=s;case"script":return s=Sl(n.src),(r=e.querySelector(Ai(s)))?(t.instance=r,et(r),r):(l=n,(r=Qt.get(s))&&(l=w({},n),uc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),et(r),ut(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,eo(l,n.precedence,e));return t.instance}function eo(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,s=r,h=0;h<l.length;h++){var v=l[h];if(v.dataset.precedence===t)s=v;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var to=null;function Cp(e,t,n){if(to===null){var l=new Map,r=to=new Map;r.set(n,l)}else r=to,l=r.get(n),l||(l=new Map,r.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Vl]||s[lt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var h=s.getAttribute(t)||"";h=e+h;var v=l.get(h);v?v.push(s):l.set(h,[s])}}return l}function Tp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ay(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ly(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=bl(l.href),s=t.querySelector(Ri(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=no.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,et(s);return}s=t.ownerDocument||t,l=Ep(l),(r=Qt.get(r))&&oc(l,r),s=s.createElement("link"),et(s);var h=s;h._p=new Promise(function(v,E){h.onload=v,h.onerror=E}),ut(s,"link",l),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=no.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var sc=0;function iy(e,t){return e.stylesheets&&e.count===0&&lo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&lo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&sc===0&&(sc=62500*U2());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>sc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function no(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ao=null;function lo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ao=new Map,t.forEach(ry,e),ao=null,no.call(e))}function ry(e,t){if(!(t.state.loading&4)){var n=ao.get(e);if(n)var l=n.get(null);else{n=new Map,ao.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var h=r[s];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),l=h)}l&&n.set(null,l)}r=t.instance,h=r.getAttribute("data-precedence"),s=n.get(h)||l,s===l&&n.set(null,r),n.set(h,r),this.count++,l=no.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Oi={$$typeof:L,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function oy(e,t,n,l,r,s,h,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.hiddenUpdates=lu(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Rp(e,t,n,l,r,s,h,v,E,N,H,X){return e=new oy(e,t,n,h,E,N,H,X,v),t=1,s===!0&&(t|=24),s=At(3,null,null,t),e.current=s,s.stateNode=e,t=qu(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:n,cache:t},Qu(s),e}function Ap(e){return e?(e=Ia,e):Ia}function Op(e,t,n,l,r,s){r=Ap(r),l.context===null?l.context=r:l.pendingContext=r,l=Kn(t),l.payload={element:n},s=s===void 0?null:s,s!==null&&(l.callback=s),n=Jn(e,l,t),n!==null&&(wt(n,e,t),ui(n,e,t))}function Mp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cc(e,t){Mp(e,t),(e=e.alternate)&&Mp(e,t)}function Np(e){if(e.tag===13||e.tag===31){var t=ba(e,67108864);t!==null&&wt(t,e,67108864),cc(e,67108864)}}function _p(e){if(e.tag===13||e.tag===31){var t=kt();t=iu(t);var n=ba(e,t);n!==null&&wt(n,e,t),cc(e,t)}}var io=!0;function uy(e,t,n,l){var r=D.T;D.T=null;var s=Q.p;try{Q.p=2,fc(e,t,n,l)}finally{Q.p=s,D.T=r}}function sy(e,t,n,l){var r=D.T;D.T=null;var s=Q.p;try{Q.p=8,fc(e,t,n,l)}finally{Q.p=s,D.T=r}}function fc(e,t,n,l){if(io){var r=dc(l);if(r===null)Ws(e,t,l,ro,n),Dp(e,l);else if(fy(r,e,t,n,l))l.stopPropagation();else if(Dp(e,l),t&4&&-1<cy.indexOf(e)){for(;r!==null;){var s=Ya(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var h=ma(s.pendingLanes);if(h!==0){var v=s;for(v.pendingLanes|=2,v.entangledLanes|=2;h;){var E=1<<31-zt(h);v.entanglements[1]|=E,h&=~E}ln(s),(Te&6)===0&&(qr=Ct()+500,ji(0))}}break;case 31:case 13:v=ba(s,2),v!==null&&wt(v,s,2),Xr(),cc(s,2)}if(s=dc(l),s===null&&Ws(e,t,l,ro,n),s===r)break;r=s}r!==null&&l.stopPropagation()}else Ws(e,t,l,null,n)}}function dc(e){return e=pu(e),hc(e)}var ro=null;function hc(e){if(ro=null,e=Ha(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ro=e,null}function kp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jg()){case qf:return 2;case Gf:return 8;case Ji:case Fg:return 32;case Xf:return 268435456;default:return 32}default:return 32}}var pc=!1,ra=null,oa=null,ua=null,Mi=new Map,Ni=new Map,sa=[],cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dp(e,t){switch(e){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":Mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function _i(e,t,n,l,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ya(t),t!==null&&Np(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function fy(e,t,n,l,r){switch(t){case"focusin":return ra=_i(ra,e,t,n,l,r),!0;case"dragenter":return oa=_i(oa,e,t,n,l,r),!0;case"mouseover":return ua=_i(ua,e,t,n,l,r),!0;case"pointerover":var s=r.pointerId;return Mi.set(s,_i(Mi.get(s)||null,e,t,n,l,r)),!0;case"gotpointercapture":return s=r.pointerId,Ni.set(s,_i(Ni.get(s)||null,e,t,n,l,r)),!0}return!1}function Bp(e){var t=Ha(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Ff(e.priority,function(){_p(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,Ff(e.priority,function(){_p(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);hu=l,n.target.dispatchEvent(l),hu=null}else return t=Ya(n),t!==null&&Np(t),e.blockedOn=n,!1;t.shift()}return!0}function Lp(e,t,n){oo(e)&&n.delete(t)}function dy(){pc=!1,ra!==null&&oo(ra)&&(ra=null),oa!==null&&oo(oa)&&(oa=null),ua!==null&&oo(ua)&&(ua=null),Mi.forEach(Lp),Ni.forEach(Lp)}function uo(e,t){e.blockedOn===t&&(e.blockedOn=null,pc||(pc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,dy)))}var so=null;function $p(e){so!==e&&(so=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){so===e&&(so=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(hc(l||n)===null)continue;break}var s=Ya(n);s!==null&&(e.splice(t,3),t-=3,ds(s,{pending:!0,data:r,method:n.method,action:l},l,r))}}))}function wl(e){function t(E){return uo(E,e)}ra!==null&&uo(ra,e),oa!==null&&uo(oa,e),ua!==null&&uo(ua,e),Mi.forEach(t),Ni.forEach(t);for(var n=0;n<sa.length;n++){var l=sa[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<sa.length&&(n=sa[0],n.blockedOn===null);)Bp(n),n.blockedOn===null&&sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var r=n[l],s=n[l+1],h=r[gt]||null;if(typeof s=="function")h||$p(n);else if(h){var v=null;if(s&&s.hasAttribute("formAction")){if(r=s,h=s[gt]||null)v=h.formAction;else if(hc(r)!==null)continue}else v=h.action;typeof v=="function"?n[l+1]=v:(n.splice(l,3),l-=3),$p(n)}}}function Up(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(h){return r=h})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function mc(e){this._internalRoot=e}co.prototype.render=mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=kt();Op(n,l,e,t,null,null)},co.prototype.unmount=mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Op(e.current,2,null,e,null,null),Xr(),t[Ua]=null}};function co(e){this._internalRoot=e}co.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sa.length&&t!==0&&t<sa[n].priority;n++);sa.splice(n,0,e),n===0&&Bp(e)}};var Hp=i.version;if(Hp!=="19.2.0")throw Error(o(527,Hp,"19.2.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var hy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{ql=fo.inject(hy),Tt=fo}catch{}}return Di.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,l="",r=Z0,s=K0,h=J0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Rp(e,1,!1,null,null,n,l,null,r,s,h,Up),e[Ua]=t.current,Fs(e),new mc(t)},Di.hydrateRoot=function(e,t,n){if(!c(e))throw Error(o(299));var l=!1,r="",s=Z0,h=K0,v=J0,E=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=Rp(e,1,!0,t,n??null,l,r,E,s,h,v,Up),t.context=Ap(null),n=t.current,l=kt(),l=iu(l),r=Kn(l),r.callback=null,Jn(n,r,l),n=l,t.current.lanes=n,Xl(t,n),ln(t),e[Ua]=t.current,Fs(e),new co(t)},Di.version="19.2.0",Di}var Fp;function wy(){if(Fp)return yc.exports;Fp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),yc.exports=Sy(),yc.exports}var Ey=wy();const jy=Xi(Ey);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Wp="popstate";function Cy(a={}){function i(o,c){let{pathname:f,search:p,hash:y}=o.location;return Wc("",{pathname:f,search:p,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function u(o,c){return typeof c=="string"?c:Yi(c)}return zy(i,u,null,a)}function Ge(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function un(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Ty(){return Math.random().toString(36).substring(2,10)}function Ip(a,i){return{usr:a.state,key:a.key,idx:i}}function Wc(a,i,u=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?Dl(i):i,state:u,key:i&&i.key||o||Ty()}}function Yi({pathname:a="/",search:i="",hash:u=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Dl(a){let i={};if(a){let u=a.indexOf("#");u>=0&&(i.hash=a.substring(u),a=a.substring(0,u));let o=a.indexOf("?");o>=0&&(i.search=a.substring(o),a=a.substring(0,o)),a&&(i.pathname=a)}return i}function zy(a,i,u,o={}){let{window:c=document.defaultView,v5Compat:f=!1}=o,p=c.history,y="POP",g=null,m=b();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function b(){return(p.state||{idx:null}).idx}function w(){y="POP";let U=b(),M=U==null?null:U-m;m=U,g&&g({action:y,location:k.location,delta:M})}function T(U,M){y="PUSH";let $=Wc(k.location,U,M);m=b()+1;let L=Ip($,m),Z=k.createHref($);try{p.pushState(L,"",Z)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;c.location.assign(Z)}f&&g&&g({action:y,location:k.location,delta:1})}function A(U,M){y="REPLACE";let $=Wc(k.location,U,M);m=b();let L=Ip($,m),Z=k.createHref($);p.replaceState(L,"",Z),f&&g&&g({action:y,location:k.location,delta:0})}function R(U){return Ry(U)}let k={get action(){return y},get location(){return a(c,p)},listen(U){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(Wp,w),g=U,()=>{c.removeEventListener(Wp,w),g=null}},createHref(U){return i(c,U)},createURL:R,encodeLocation(U){let M=R(U);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:T,replace:A,go(U){return p.go(U)}};return k}function Ry(a,i=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(u,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Yi(a);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function o1(a,i,u="/"){return Ay(a,i,u,!1)}function Ay(a,i,u,o){let c=typeof i=="string"?Dl(i):i,f=kn(c.pathname||"/",u);if(f==null)return null;let p=u1(a);Oy(p);let y=null;for(let g=0;y==null&&g<p.length;++g){let m=Yy(f);y=Uy(p[g],m,o)}return y}function u1(a,i=[],u=[],o="",c=!1){let f=(p,y,g=c,m)=>{let b={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&g)return;Ge(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let w=Nn([o,b.relativePath]),T=u.concat(b);p.children&&p.children.length>0&&(Ge(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),u1(p.children,i,T,w,g)),!(p.path==null&&!p.index)&&i.push({path:w,score:Ly(w,p.index),routesMeta:T})};return a.forEach((p,y)=>{if(p.path===""||!p.path?.includes("?"))f(p,y);else for(let g of s1(p.path))f(p,y,!0,g)}),i}function s1(a){let i=a.split("/");if(i.length===0)return[];let[u,...o]=i,c=u.endsWith("?"),f=u.replace(/\?$/,"");if(o.length===0)return c?[f,""]:[f];let p=s1(o.join("/")),y=[];return y.push(...p.map(g=>g===""?f:[f,g].join("/"))),c&&y.push(...p),y.map(g=>a.startsWith("/")&&g===""?"/":g)}function Oy(a){a.sort((i,u)=>i.score!==u.score?u.score-i.score:$y(i.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var My=/^:[\w-]+$/,Ny=3,_y=2,ky=1,Dy=10,By=-2,Pp=a=>a==="*";function Ly(a,i){let u=a.split("/"),o=u.length;return u.some(Pp)&&(o+=By),i&&(o+=_y),u.filter(c=>!Pp(c)).reduce((c,f)=>c+(My.test(f)?Ny:f===""?ky:Dy),o)}function $y(a,i){return a.length===i.length&&a.slice(0,-1).every((o,c)=>o===i[c])?a[a.length-1]-i[i.length-1]:0}function Uy(a,i,u=!1){let{routesMeta:o}=a,c={},f="/",p=[];for(let y=0;y<o.length;++y){let g=o[y],m=y===o.length-1,b=f==="/"?i:i.slice(f.length)||"/",w=Mo({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},b),T=g.route;if(!w&&m&&u&&!o[o.length-1].route.index&&(w=Mo({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!w)return null;Object.assign(c,w.params),p.push({params:c,pathname:Nn([f,w.pathname]),pathnameBase:Vy(Nn([f,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(f=Nn([f,w.pathnameBase]))}return p}function Mo(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,o]=Hy(a.path,a.caseSensitive,a.end),c=i.match(u);if(!c)return null;let f=c[0],p=f.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:o.reduce((m,{paramName:b,isOptional:w},T)=>{if(b==="*"){let R=y[T]||"";p=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const A=y[T];return w&&!A?m[b]=void 0:m[b]=(A||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:p,pattern:a}}function Hy(a,i=!1,u=!0){un(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,g)=>(o.push({paramName:y,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),o]}function Yy(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return un(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function kn(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let u=i.endsWith("/")?i.length-1:i.length,o=a.charAt(u);return o&&o!=="/"?null:a.slice(u)||"/"}function qy(a,i="/"){let{pathname:u,search:o="",hash:c=""}=typeof a=="string"?Dl(a):a;return{pathname:u?u.startsWith("/")?u:Gy(u,i):i,search:Qy(o),hash:Zy(c)}}function Gy(a,i){let u=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function wc(a,i,u,o){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xy(a){return a.filter((i,u)=>u===0||i.route.path&&i.route.path.length>0)}function c1(a){let i=Xy(a);return i.map((u,o)=>o===i.length-1?u.pathname:u.pathnameBase)}function f1(a,i,u,o=!1){let c;typeof a=="string"?c=Dl(a):(c={...a},Ge(!c.pathname||!c.pathname.includes("?"),wc("?","pathname","search",c)),Ge(!c.pathname||!c.pathname.includes("#"),wc("#","pathname","hash",c)),Ge(!c.search||!c.search.includes("#"),wc("#","search","hash",c)));let f=a===""||c.pathname==="",p=f?"/":c.pathname,y;if(p==null)y=u;else{let w=i.length-1;if(!o&&p.startsWith("..")){let T=p.split("/");for(;T[0]==="..";)T.shift(),w-=1;c.pathname=T.join("/")}y=w>=0?i[w]:"/"}let g=qy(c,y),m=p&&p!=="/"&&p.endsWith("/"),b=(f||p===".")&&u.endsWith("/");return!g.pathname.endsWith("/")&&(m||b)&&(g.pathname+="/"),g}var Nn=a=>a.join("/").replace(/\/\/+/g,"/"),Vy=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Qy=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Zy=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Ky(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var d1=["POST","PUT","PATCH","DELETE"];new Set(d1);var Jy=["GET",...d1];new Set(Jy);var Bl=x.createContext(null);Bl.displayName="DataRouter";var qo=x.createContext(null);qo.displayName="DataRouterState";x.createContext(!1);var h1=x.createContext({isTransitioning:!1});h1.displayName="ViewTransition";var Fy=x.createContext(new Map);Fy.displayName="Fetchers";var Wy=x.createContext(null);Wy.displayName="Await";var sn=x.createContext(null);sn.displayName="Navigation";var Vi=x.createContext(null);Vi.displayName="Location";var Bn=x.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var pf=x.createContext(null);pf.displayName="RouteError";function Iy(a,{relative:i}={}){Ge(Qi(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=x.useContext(sn),{hash:c,pathname:f,search:p}=Zi(a,{relative:i}),y=f;return u!=="/"&&(y=f==="/"?u:Nn([u,f])),o.createHref({pathname:y,search:p,hash:c})}function Qi(){return x.useContext(Vi)!=null}function Ln(){return Ge(Qi(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Vi).location}var p1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function m1(a){x.useContext(sn).static||x.useLayoutEffect(a)}function mf(){let{isDataRoute:a}=x.useContext(Bn);return a?fx():Py()}function Py(){Ge(Qi(),"useNavigate() may be used only in the context of a <Router> component.");let a=x.useContext(Bl),{basename:i,navigator:u}=x.useContext(sn),{matches:o}=x.useContext(Bn),{pathname:c}=Ln(),f=JSON.stringify(c1(o)),p=x.useRef(!1);return m1(()=>{p.current=!0}),x.useCallback((g,m={})=>{if(un(p.current,p1),!p.current)return;if(typeof g=="number"){u.go(g);return}let b=f1(g,JSON.parse(f),c,m.relative==="path");a==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:Nn([i,b.pathname])),(m.replace?u.replace:u.push)(b,m.state,m)},[i,u,f,c,a])}x.createContext(null);function Zi(a,{relative:i}={}){let{matches:u}=x.useContext(Bn),{pathname:o}=Ln(),c=JSON.stringify(c1(u));return x.useMemo(()=>f1(a,JSON.parse(c),o,i==="path"),[a,c,o,i])}function ex(a,i){return g1(a,i)}function g1(a,i,u,o,c){Ge(Qi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=x.useContext(sn),{matches:p}=x.useContext(Bn),y=p[p.length-1],g=y?y.params:{},m=y?y.pathname:"/",b=y?y.pathnameBase:"/",w=y&&y.route;{let $=w&&w.path||"";v1(m,!w||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let T=Ln(),A;if(i){let $=typeof i=="string"?Dl(i):i;Ge(b==="/"||$.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${$.pathname}" was given in the \`location\` prop.`),A=$}else A=T;let R=A.pathname||"/",k=R;if(b!=="/"){let $=b.replace(/^\//,"").split("/");k="/"+R.replace(/^\//,"").split("/").slice($.length).join("/")}let U=o1(a,{pathname:k});un(w||U!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),un(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=ix(U&&U.map($=>Object.assign({},$,{params:Object.assign({},g,$.params),pathname:Nn([b,f.encodeLocation?f.encodeLocation($.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?b:Nn([b,f.encodeLocation?f.encodeLocation($.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathnameBase])})),p,u,o,c);return i&&M?x.createElement(Vi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},M):M}function tx(){let a=cx(),i=Ky(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:f},"ErrorBoundary")," or"," ",x.createElement("code",{style:f},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},i),u?x.createElement("pre",{style:c},u):null,p)}var nx=x.createElement(tx,null),ax=class extends x.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.unstable_onError?this.props.unstable_onError(a,i):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?x.createElement(Bn.Provider,{value:this.props.routeContext},x.createElement(pf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function lx({routeContext:a,match:i,children:u}){let o=x.useContext(Bl);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),x.createElement(Bn.Provider,{value:a},u)}function ix(a,i=[],u=null,o=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(i.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let f=a,p=u?.errors;if(p!=null){let m=f.findIndex(b=>b.route.id&&p?.[b.route.id]!==void 0);Ge(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let y=!1,g=-1;if(u)for(let m=0;m<f.length;m++){let b=f[m];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=m),b.route.id){let{loaderData:w,errors:T}=u,A=b.route.loader&&!w.hasOwnProperty(b.route.id)&&(!T||T[b.route.id]===void 0);if(b.route.lazy||A){y=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((m,b,w)=>{let T,A=!1,R=null,k=null;u&&(T=p&&b.route.id?p[b.route.id]:void 0,R=b.route.errorElement||nx,y&&(g<0&&w===0?(v1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,k=null):g===w&&(A=!0,k=b.route.hydrateFallbackElement||null)));let U=i.concat(f.slice(0,w+1)),M=()=>{let $;return T?$=R:A?$=k:b.route.Component?$=x.createElement(b.route.Component,null):b.route.element?$=b.route.element:$=m,x.createElement(lx,{match:b,routeContext:{outlet:m,matches:U,isDataRoute:u!=null},children:$})};return u&&(b.route.ErrorBoundary||b.route.errorElement||w===0)?x.createElement(ax,{location:u.location,revalidation:u.revalidation,component:R,error:T,children:M(),routeContext:{outlet:null,matches:U,isDataRoute:!0},unstable_onError:o}):M()},null)}function gf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rx(a){let i=x.useContext(Bl);return Ge(i,gf(a)),i}function ox(a){let i=x.useContext(qo);return Ge(i,gf(a)),i}function ux(a){let i=x.useContext(Bn);return Ge(i,gf(a)),i}function vf(a){let i=ux(a),u=i.matches[i.matches.length-1];return Ge(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function sx(){return vf("useRouteId")}function cx(){let a=x.useContext(pf),i=ox("useRouteError"),u=vf("useRouteError");return a!==void 0?a:i.errors?.[u]}function fx(){let{router:a}=rx("useNavigate"),i=vf("useNavigate"),u=x.useRef(!1);return m1(()=>{u.current=!0}),x.useCallback(async(c,f={})=>{un(u.current,p1),u.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:i,...f}))},[a,i])}var em={};function v1(a,i,u){!i&&!em[a]&&(em[a]=!0,un(!1,u))}x.memo(dx);function dx({routes:a,future:i,state:u,unstable_onError:o}){return g1(a,void 0,u,o,i)}function _a(a){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hx({basename:a="/",children:i=null,location:u,navigationType:o="POP",navigator:c,static:f=!1}){Ge(!Qi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),y=x.useMemo(()=>({basename:p,navigator:c,static:f,future:{}}),[p,c,f]);typeof u=="string"&&(u=Dl(u));let{pathname:g="/",search:m="",hash:b="",state:w=null,key:T="default"}=u,A=x.useMemo(()=>{let R=kn(g,p);return R==null?null:{location:{pathname:R,search:m,hash:b,state:w,key:T},navigationType:o}},[p,g,m,b,w,T,o]);return un(A!=null,`<Router basename="${p}"> is not able to match the URL "${g}${m}${b}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:x.createElement(sn.Provider,{value:y},x.createElement(Vi.Provider,{children:i,value:A}))}function px({children:a,location:i}){return ex(Ic(a),i)}function Ic(a,i=[]){let u=[];return x.Children.forEach(a,(o,c)=>{if(!x.isValidElement(o))return;let f=[...i,c];if(o.type===x.Fragment){u.push.apply(u,Ic(o.props.children,f));return}Ge(o.type===_a,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=Ic(o.props.children,f)),u.push(p)}),u}var Eo="get",jo="application/x-www-form-urlencoded";function Go(a){return a!=null&&typeof a.tagName=="string"}function mx(a){return Go(a)&&a.tagName.toLowerCase()==="button"}function gx(a){return Go(a)&&a.tagName.toLowerCase()==="form"}function vx(a){return Go(a)&&a.tagName.toLowerCase()==="input"}function yx(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function xx(a,i){return a.button===0&&(!i||i==="_self")&&!yx(a)}var ho=null;function bx(){if(ho===null)try{new FormData(document.createElement("form"),0),ho=!1}catch{ho=!0}return ho}var Sx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ec(a){return a!=null&&!Sx.has(a)?(un(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${jo}"`),null):a}function wx(a,i){let u,o,c,f,p;if(gx(a)){let y=a.getAttribute("action");o=y?kn(y,i):null,u=a.getAttribute("method")||Eo,c=Ec(a.getAttribute("enctype"))||jo,f=new FormData(a)}else if(mx(a)||vx(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||y.getAttribute("action");if(o=g?kn(g,i):null,u=a.getAttribute("formmethod")||y.getAttribute("method")||Eo,c=Ec(a.getAttribute("formenctype"))||Ec(y.getAttribute("enctype"))||jo,f=new FormData(y,a),!bx()){let{name:m,type:b,value:w}=a;if(b==="image"){let T=m?`${m}.`:"";f.append(`${T}x`,"0"),f.append(`${T}y`,"0")}else m&&f.append(m,w)}}else{if(Go(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Eo,o=null,c=jo,p=a}return f&&c==="text/plain"&&(p=f,f=void 0),{action:o,method:u.toLowerCase(),encType:c,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function yf(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function Ex(a,i,u){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${u}`:i&&kn(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function jx(a,i){if(a.id in i)return i[a.id];try{let u=await import(a.module);return i[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Cx(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Tx(a,i,u){let o=await Promise.all(a.map(async c=>{let f=i.routes[c.route.id];if(f){let p=await jx(f,u);return p.links?p.links():[]}return[]}));return Ox(o.flat(1).filter(Cx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function tm(a,i,u,o,c,f){let p=(g,m)=>u[m]?g.route.id!==u[m].route.id:!0,y=(g,m)=>u[m].pathname!==g.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==g.params["*"];return f==="assets"?i.filter((g,m)=>p(g,m)||y(g,m)):f==="data"?i.filter((g,m)=>{let b=o.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(p(g,m)||y(g,m))return!0;if(g.route.shouldRevalidate){let w=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function zx(a,i,{includeHydrateFallback:u}={}){return Rx(a.map(o=>{let c=i.routes[o.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function Rx(a){return[...new Set(a)]}function Ax(a){let i={},u=Object.keys(a).sort();for(let o of u)i[o]=a[o];return i}function Ox(a,i){let u=new Set;return new Set(i),a.reduce((o,c)=>{let f=JSON.stringify(Ax(c));return u.has(f)||(u.add(f),o.push({key:f,link:c})),o},[])}function y1(){let a=x.useContext(Bl);return yf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Mx(){let a=x.useContext(qo);return yf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var xf=x.createContext(void 0);xf.displayName="FrameworkContext";function x1(){let a=x.useContext(xf);return yf(a,"You must render this element inside a <HydratedRouter> element"),a}function Nx(a,i){let u=x.useContext(xf),[o,c]=x.useState(!1),[f,p]=x.useState(!1),{onFocus:y,onBlur:g,onMouseEnter:m,onMouseLeave:b,onTouchStart:w}=i,T=x.useRef(null);x.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let k=M=>{M.forEach($=>{p($.isIntersecting)})},U=new IntersectionObserver(k,{threshold:.5});return T.current&&U.observe(T.current),()=>{U.disconnect()}}},[a]),x.useEffect(()=>{if(o){let k=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(k)}}},[o]);let A=()=>{c(!0)},R=()=>{c(!1),p(!1)};return u?a!=="intent"?[f,T,{}]:[f,T,{onFocus:Bi(y,A),onBlur:Bi(g,R),onMouseEnter:Bi(m,A),onMouseLeave:Bi(b,R),onTouchStart:Bi(w,A)}]:[!1,T,{}]}function Bi(a,i){return u=>{a&&a(u),u.defaultPrevented||i(u)}}function _x({page:a,...i}){let{router:u}=y1(),o=x.useMemo(()=>o1(u.routes,a,u.basename),[u.routes,a,u.basename]);return o?x.createElement(Dx,{page:a,matches:o,...i}):null}function kx(a){let{manifest:i,routeModules:u}=x1(),[o,c]=x.useState([]);return x.useEffect(()=>{let f=!1;return Tx(a,i,u).then(p=>{f||c(p)}),()=>{f=!0}},[a,i,u]),o}function Dx({page:a,matches:i,...u}){let o=Ln(),{manifest:c,routeModules:f}=x1(),{basename:p}=y1(),{loaderData:y,matches:g}=Mx(),m=x.useMemo(()=>tm(a,i,g,c,o,"data"),[a,i,g,c,o]),b=x.useMemo(()=>tm(a,i,g,c,o,"assets"),[a,i,g,c,o]),w=x.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let R=new Set,k=!1;if(i.forEach(M=>{let $=c.routes[M.route.id];!$||!$.hasLoader||(!m.some(L=>L.route.id===M.route.id)&&M.route.id in y&&f[M.route.id]?.shouldRevalidate||$.hasClientLoader?k=!0:R.add(M.route.id))}),R.size===0)return[];let U=Ex(a,p,"data");return k&&R.size>0&&U.searchParams.set("_routes",i.filter(M=>R.has(M.route.id)).map(M=>M.route.id).join(",")),[U.pathname+U.search]},[p,y,o,c,m,i,a,f]),T=x.useMemo(()=>zx(b,c),[b,c]),A=kx(b);return x.createElement(x.Fragment,null,w.map(R=>x.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...u})),T.map(R=>x.createElement("link",{key:R,rel:"modulepreload",href:R,...u})),A.map(({key:R,link:k})=>x.createElement("link",{key:R,nonce:u.nonce,...k})))}function Bx(...a){return i=>{a.forEach(u=>{typeof u=="function"?u(i):u!=null&&(u.current=i)})}}var b1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{b1&&(window.__reactRouterVersion="7.9.4")}catch{}function Lx({basename:a,children:i,window:u}){let o=x.useRef();o.current==null&&(o.current=Cy({window:u,v5Compat:!0}));let c=o.current,[f,p]=x.useState({action:c.action,location:c.location}),y=x.useCallback(g=>{x.startTransition(()=>p(g))},[p]);return x.useLayoutEffect(()=>c.listen(y),[c,y]),x.createElement(hx,{basename:a,children:i,location:f.location,navigationType:f.action,navigator:c})}var S1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ll=x.forwardRef(function({onClick:i,discover:u="render",prefetch:o="none",relative:c,reloadDocument:f,replace:p,state:y,target:g,to:m,preventScrollReset:b,viewTransition:w,...T},A){let{basename:R}=x.useContext(sn),k=typeof m=="string"&&S1.test(m),U,M=!1;if(typeof m=="string"&&k&&(U=m,b1))try{let W=new URL(window.location.href),ce=m.startsWith("//")?new URL(W.protocol+m):new URL(m),fe=kn(ce.pathname,R);ce.origin===W.origin&&fe!=null?m=fe+ce.search+ce.hash:M=!0}catch{un(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=Iy(m,{relative:c}),[L,Z,K]=Nx(o,T),q=Yx(m,{replace:p,state:y,target:g,preventScrollReset:b,relative:c,viewTransition:w});function V(W){i&&i(W),W.defaultPrevented||q(W)}let ne=x.createElement("a",{...T,...K,href:U||$,onClick:M||f?i:V,ref:Bx(A,Z),target:g,"data-discover":!k&&u==="render"?"true":void 0});return L&&!k?x.createElement(x.Fragment,null,ne,x.createElement(_x,{page:$})):ne});Ll.displayName="Link";var $x=x.forwardRef(function({"aria-current":i="page",caseSensitive:u=!1,className:o="",end:c=!1,style:f,to:p,viewTransition:y,children:g,...m},b){let w=Zi(p,{relative:m.relative}),T=Ln(),A=x.useContext(qo),{navigator:R,basename:k}=x.useContext(sn),U=A!=null&&Qx(w)&&y===!0,M=R.encodeLocation?R.encodeLocation(w).pathname:w.pathname,$=T.pathname,L=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;u||($=$.toLowerCase(),L=L?L.toLowerCase():null,M=M.toLowerCase()),L&&k&&(L=kn(L,k)||L);const Z=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let K=$===M||!c&&$.startsWith(M)&&$.charAt(Z)==="/",q=L!=null&&(L===M||!c&&L.startsWith(M)&&L.charAt(M.length)==="/"),V={isActive:K,isPending:q,isTransitioning:U},ne=K?i:void 0,W;typeof o=="function"?W=o(V):W=[o,K?"active":null,q?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let ce=typeof f=="function"?f(V):f;return x.createElement(Ll,{...m,"aria-current":ne,className:W,ref:b,style:ce,to:p,viewTransition:y},typeof g=="function"?g(V):g)});$x.displayName="NavLink";var Ux=x.forwardRef(({discover:a="render",fetcherKey:i,navigate:u,reloadDocument:o,replace:c,state:f,method:p=Eo,action:y,onSubmit:g,relative:m,preventScrollReset:b,viewTransition:w,...T},A)=>{let R=Xx(),k=Vx(y,{relative:m}),U=p.toLowerCase()==="get"?"get":"post",M=typeof y=="string"&&S1.test(y),$=L=>{if(g&&g(L),L.defaultPrevented)return;L.preventDefault();let Z=L.nativeEvent.submitter,K=Z?.getAttribute("formmethod")||p;R(Z||L.currentTarget,{fetcherKey:i,method:K,navigate:u,replace:c,state:f,relative:m,preventScrollReset:b,viewTransition:w})};return x.createElement("form",{ref:A,method:U,action:k,onSubmit:o?g:$,...T,"data-discover":!M&&a==="render"?"true":void 0})});Ux.displayName="Form";function Hx(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function w1(a){let i=x.useContext(Bl);return Ge(i,Hx(a)),i}function Yx(a,{target:i,replace:u,state:o,preventScrollReset:c,relative:f,viewTransition:p}={}){let y=mf(),g=Ln(),m=Zi(a,{relative:f});return x.useCallback(b=>{if(xx(b,i)){b.preventDefault();let w=u!==void 0?u:Yi(g)===Yi(m);y(a,{replace:w,state:o,preventScrollReset:c,relative:f,viewTransition:p})}},[g,y,m,u,o,i,a,c,f,p])}var qx=0,Gx=()=>`__${String(++qx)}__`;function Xx(){let{router:a}=w1("useSubmit"),{basename:i}=x.useContext(sn),u=sx();return x.useCallback(async(o,c={})=>{let{action:f,method:p,encType:y,formData:g,body:m}=wx(o,i);if(c.navigate===!1){let b=c.fetcherKey||Gx();await a.fetch(b,u,c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||p,formEncType:c.encType||y,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||p,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:u,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,i,u])}function Vx(a,{relative:i}={}){let{basename:u}=x.useContext(sn),o=x.useContext(Bn);Ge(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),f={...Zi(a||".",{relative:i})},p=Ln();if(a==null){f.search=p.search;let y=new URLSearchParams(f.search),g=y.getAll("index");if(g.some(b=>b==="")){y.delete("index"),g.filter(w=>w).forEach(w=>y.append("index",w));let b=y.toString();f.search=b?`?${b}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:Nn([u,f.pathname])),Yi(f)}function Qx(a,{relative:i}={}){let u=x.useContext(h1);Ge(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=w1("useViewTransitionState"),c=Zi(a,{relative:i});if(!u.isTransitioning)return!1;let f=kn(u.currentLocation.pathname,o)||u.currentLocation.pathname,p=kn(u.nextLocation.pathname,o)||u.nextLocation.pathname;return Mo(c.pathname,p)!=null||Mo(c.pathname,f)!=null}var Zx=r1();const zl=Xi(Zx);var ft=function(){return ft=Object.assign||function(i){for(var u,o=1,c=arguments.length;o<c;o++){u=arguments[o];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(i[f]=u[f])}return i},ft.apply(this,arguments)};function Al(a,i,u){if(u||arguments.length===2)for(var o=0,c=i.length,f;o<c;o++)(f||!(o in i))&&(f||(f=Array.prototype.slice.call(i,0,o)),f[o]=i[o]);return a.concat(f||Array.prototype.slice.call(i))}var Ue="-ms-",Hi="-moz-",ze="-webkit-",E1="comm",Xo="rule",bf="decl",Kx="@import",j1="@keyframes",Jx="@layer",C1=Math.abs,Sf=String.fromCharCode,Pc=Object.assign;function Fx(a,i){return nt(a,0)^45?(((i<<2^nt(a,0))<<2^nt(a,1))<<2^nt(a,2))<<2^nt(a,3):0}function T1(a){return a.trim()}function An(a,i){return(a=i.exec(a))?a[0]:a}function me(a,i,u){return a.replace(i,u)}function Co(a,i,u){return a.indexOf(i,u)}function nt(a,i){return a.charCodeAt(i)|0}function Ol(a,i,u){return a.slice(i,u)}function on(a){return a.length}function z1(a){return a.length}function $i(a,i){return i.push(a),a}function Wx(a,i){return a.map(i).join("")}function nm(a,i){return a.filter(function(u){return!An(u,i)})}var Vo=1,Ml=1,R1=0,Zt=0,Ie=0,$l="";function Qo(a,i,u,o,c,f,p,y){return{value:a,root:i,parent:u,type:o,props:c,children:f,line:Vo,column:Ml,length:p,return:"",siblings:y}}function fa(a,i){return Pc(Qo("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function El(a){for(;a.root;)a=fa(a.root,{children:[a]});$i(a,a.siblings)}function Ix(){return Ie}function Px(){return Ie=Zt>0?nt($l,--Zt):0,Ml--,Ie===10&&(Ml=1,Vo--),Ie}function en(){return Ie=Zt<R1?nt($l,Zt++):0,Ml++,Ie===10&&(Ml=1,Vo++),Ie}function Ba(){return nt($l,Zt)}function To(){return Zt}function Zo(a,i){return Ol($l,a,i)}function ef(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eb(a){return Vo=Ml=1,R1=on($l=a),Zt=0,[]}function tb(a){return $l="",a}function jc(a){return T1(Zo(Zt-1,tf(a===91?a+2:a===40?a+1:a)))}function nb(a){for(;(Ie=Ba())&&Ie<33;)en();return ef(a)>2||ef(Ie)>3?"":" "}function ab(a,i){for(;--i&&en()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Zo(a,To()+(i<6&&Ba()==32&&en()==32))}function tf(a){for(;en();)switch(Ie){case a:return Zt;case 34:case 39:a!==34&&a!==39&&tf(Ie);break;case 40:a===41&&tf(a);break;case 92:en();break}return Zt}function lb(a,i){for(;en()&&a+Ie!==57;)if(a+Ie===84&&Ba()===47)break;return"/*"+Zo(i,Zt-1)+"*"+Sf(a===47?a:en())}function ib(a){for(;!ef(Ba());)en();return Zo(a,Zt)}function rb(a){return tb(zo("",null,null,null,[""],a=eb(a),0,[0],a))}function zo(a,i,u,o,c,f,p,y,g){for(var m=0,b=0,w=p,T=0,A=0,R=0,k=1,U=1,M=1,$=0,L="",Z=c,K=f,q=o,V=L;U;)switch(R=$,$=en()){case 40:if(R!=108&&nt(V,w-1)==58){Co(V+=me(jc($),"&","&\f"),"&\f",C1(m?y[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:V+=jc($);break;case 9:case 10:case 13:case 32:V+=nb(R);break;case 92:V+=ab(To()-1,7);continue;case 47:switch(Ba()){case 42:case 47:$i(ob(lb(en(),To()),i,u,g),g);break;default:V+="/"}break;case 123*k:y[m++]=on(V)*M;case 125*k:case 59:case 0:switch($){case 0:case 125:U=0;case 59+b:M==-1&&(V=me(V,/\f/g,"")),A>0&&on(V)-w&&$i(A>32?lm(V+";",o,u,w-1,g):lm(me(V," ","")+";",o,u,w-2,g),g);break;case 59:V+=";";default:if($i(q=am(V,i,u,m,b,c,y,L,Z=[],K=[],w,f),f),$===123)if(b===0)zo(V,i,q,q,Z,f,w,y,K);else switch(T===99&&nt(V,3)===110?100:T){case 100:case 108:case 109:case 115:zo(a,q,q,o&&$i(am(a,q,q,0,0,c,y,L,c,Z=[],w,K),K),c,K,w,y,o?Z:K);break;default:zo(V,q,q,q,[""],K,0,y,K)}}m=b=A=0,k=M=1,L=V="",w=p;break;case 58:w=1+on(V),A=R;default:if(k<1){if($==123)--k;else if($==125&&k++==0&&Px()==125)continue}switch(V+=Sf($),$*k){case 38:M=b>0?1:(V+="\f",-1);break;case 44:y[m++]=(on(V)-1)*M,M=1;break;case 64:Ba()===45&&(V+=jc(en())),T=Ba(),b=w=on(L=V+=ib(To())),$++;break;case 45:R===45&&on(V)==2&&(k=0)}}return f}function am(a,i,u,o,c,f,p,y,g,m,b,w){for(var T=c-1,A=c===0?f:[""],R=z1(A),k=0,U=0,M=0;k<o;++k)for(var $=0,L=Ol(a,T+1,T=C1(U=p[k])),Z=a;$<R;++$)(Z=T1(U>0?A[$]+" "+L:me(L,/&\f/g,A[$])))&&(g[M++]=Z);return Qo(a,i,u,c===0?Xo:y,g,m,b,w)}function ob(a,i,u,o){return Qo(a,i,u,E1,Sf(Ix()),Ol(a,2,-2),0,o)}function lm(a,i,u,o,c){return Qo(a,i,u,bf,Ol(a,0,o),Ol(a,o+1,-1),o,c)}function A1(a,i,u){switch(Fx(a,i)){case 5103:return ze+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+a+a;case 4789:return Hi+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+a+Hi+a+Ue+a+a;case 5936:switch(nt(a,i+11)){case 114:return ze+a+Ue+me(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return ze+a+Ue+me(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return ze+a+Ue+me(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return ze+a+Ue+a+a;case 6165:return ze+a+Ue+"flex-"+a+a;case 5187:return ze+a+me(a,/(\w+).+(:[^]+)/,ze+"box-$1$2"+Ue+"flex-$1$2")+a;case 5443:return ze+a+Ue+"flex-item-"+me(a,/flex-|-self/g,"")+(An(a,/flex-|baseline/)?"":Ue+"grid-row-"+me(a,/flex-|-self/g,""))+a;case 4675:return ze+a+Ue+"flex-line-pack"+me(a,/align-content|flex-|-self/g,"")+a;case 5548:return ze+a+Ue+me(a,"shrink","negative")+a;case 5292:return ze+a+Ue+me(a,"basis","preferred-size")+a;case 6060:return ze+"box-"+me(a,"-grow","")+ze+a+Ue+me(a,"grow","positive")+a;case 4554:return ze+me(a,/([^-])(transform)/g,"$1"+ze+"$2")+a;case 6187:return me(me(me(a,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),a,"")+a;case 5495:case 3959:return me(a,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return me(me(a,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+a+a;case 4200:if(!An(a,/flex-|baseline/))return Ue+"grid-column-align"+Ol(a,i)+a;break;case 2592:case 3360:return Ue+me(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(o,c){return i=c,An(o.props,/grid-\w+-end/)})?~Co(a+(u=u[i].value),"span",0)?a:Ue+me(a,"-start","")+a+Ue+"grid-row-span:"+(~Co(u,"span",0)?An(u,/\d+/):+An(u,/\d+/)-+An(a,/\d+/))+";":Ue+me(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(o){return An(o.props,/grid-\w+-start/)})?a:Ue+me(me(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return me(a,/(.+)-inline(.+)/,ze+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(a)-1-i>6)switch(nt(a,i+1)){case 109:if(nt(a,i+4)!==45)break;case 102:return me(a,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+Hi+(nt(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~Co(a,"stretch",0)?A1(me(a,"stretch","fill-available"),i,u)+a:a}break;case 5152:case 5920:return me(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,f,p,y,g,m){return Ue+c+":"+f+m+(p?Ue+c+"-span:"+(y?g:+g-+f)+m:"")+a});case 4949:if(nt(a,i+6)===121)return me(a,":",":"+ze)+a;break;case 6444:switch(nt(a,nt(a,14)===45?18:11)){case 120:return me(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(nt(a,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+Ue+"$2box$3")+a;case 100:return me(a,":",":"+Ue)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(a,"scroll-","scroll-snap-")+a}return a}function No(a,i){for(var u="",o=0;o<a.length;o++)u+=i(a[o],o,a,i)||"";return u}function ub(a,i,u,o){switch(a.type){case Jx:if(a.children.length)break;case Kx:case bf:return a.return=a.return||a.value;case E1:return"";case j1:return a.return=a.value+"{"+No(a.children,o)+"}";case Xo:if(!on(a.value=a.props.join(",")))return""}return on(u=No(a.children,o))?a.return=a.value+"{"+u+"}":""}function sb(a){var i=z1(a);return function(u,o,c,f){for(var p="",y=0;y<i;y++)p+=a[y](u,o,c,f)||"";return p}}function cb(a){return function(i){i.root||(i=i.return)&&a(i)}}function fb(a,i,u,o){if(a.length>-1&&!a.return)switch(a.type){case bf:a.return=A1(a.value,a.length,u);return;case j1:return No([fa(a,{value:me(a.value,"@","@"+ze)})],o);case Xo:if(a.length)return Wx(u=a.props,function(c){switch(An(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":El(fa(a,{props:[me(c,/:(read-\w+)/,":"+Hi+"$1")]})),El(fa(a,{props:[c]})),Pc(a,{props:nm(u,o)});break;case"::placeholder":El(fa(a,{props:[me(c,/:(plac\w+)/,":"+ze+"input-$1")]})),El(fa(a,{props:[me(c,/:(plac\w+)/,":"+Hi+"$1")]})),El(fa(a,{props:[me(c,/:(plac\w+)/,Ue+"input-$1")]})),El(fa(a,{props:[c]})),Pc(a,{props:nm(u,o)});break}return""})}}var db={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dt={},Nl=typeof process<"u"&&Dt!==void 0&&(Dt.REACT_APP_SC_ATTR||Dt.SC_ATTR)||"data-styled",O1="active",M1="data-styled-version",Ko="6.1.19",wf=`/*!sc*/
`,_o=typeof window<"u"&&typeof document<"u",hb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Dt!==void 0&&Dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Dt.REACT_APP_SC_DISABLE_SPEEDY!==""?Dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Dt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Dt!==void 0&&Dt.SC_DISABLE_SPEEDY!==void 0&&Dt.SC_DISABLE_SPEEDY!==""&&Dt.SC_DISABLE_SPEEDY!=="false"&&Dt.SC_DISABLE_SPEEDY),pb={},Jo=Object.freeze([]),_l=Object.freeze({});function N1(a,i,u){return u===void 0&&(u=_l),a.theme!==u.theme&&a.theme||i||u.theme}var _1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gb=/(^-|-$)/g;function im(a){return a.replace(mb,"-").replace(gb,"")}var vb=/(a)(d)/gi,po=52,rm=function(a){return String.fromCharCode(a+(a>25?39:97))};function nf(a){var i,u="";for(i=Math.abs(a);i>po;i=i/po|0)u=rm(i%po)+u;return(rm(i%po)+u).replace(vb,"$1-$2")}var Cc,k1=5381,Rl=function(a,i){for(var u=i.length;u;)a=33*a^i.charCodeAt(--u);return a},D1=function(a){return Rl(k1,a)};function Ef(a){return nf(D1(a)>>>0)}function yb(a){return a.displayName||a.name||"Component"}function Tc(a){return typeof a=="string"&&!0}var B1=typeof Symbol=="function"&&Symbol.for,L1=B1?Symbol.for("react.memo"):60115,xb=B1?Symbol.for("react.forward_ref"):60112,bb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wb=((Cc={})[xb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cc[L1]=$1,Cc);function om(a){return("type"in(i=a)&&i.type.$$typeof)===L1?$1:"$$typeof"in a?wb[a.$$typeof]:bb;var i}var Eb=Object.defineProperty,jb=Object.getOwnPropertyNames,um=Object.getOwnPropertySymbols,Cb=Object.getOwnPropertyDescriptor,Tb=Object.getPrototypeOf,sm=Object.prototype;function U1(a,i,u){if(typeof i!="string"){if(sm){var o=Tb(i);o&&o!==sm&&U1(a,o,u)}var c=jb(i);um&&(c=c.concat(um(i)));for(var f=om(a),p=om(i),y=0;y<c.length;++y){var g=c[y];if(!(g in Sb||u&&u[g]||p&&g in p||f&&g in f)){var m=Cb(i,g);try{Eb(a,g,m)}catch{}}}}return a}function kl(a){return typeof a=="function"}function jf(a){return typeof a=="object"&&"styledComponentId"in a}function Da(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function ko(a,i){if(a.length===0)return"";for(var u=a[0],o=1;o<a.length;o++)u+=a[o];return u}function qi(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function af(a,i,u){if(u===void 0&&(u=!1),!u&&!qi(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var o=0;o<i.length;o++)a[o]=af(a[o],i[o]);else if(qi(i))for(var o in i)a[o]=af(a[o],i[o]);return a}function Cf(a,i){Object.defineProperty(a,"toString",{value:i})}function Ki(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var zb=(function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return a.prototype.indexOfGroup=function(i){for(var u=0,o=0;o<i;o++)u+=this.groupSizes[o];return u},a.prototype.insertRules=function(i,u){if(i>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,f=c;i>=f;)if((f<<=1)<0)throw Ki(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var p=c;p<f;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(i+1),g=(p=0,u.length);p<g;p++)this.tag.insertRule(y,u[p])&&(this.groupSizes[i]++,y++)},a.prototype.clearGroup=function(i){if(i<this.length){var u=this.groupSizes[i],o=this.indexOfGroup(i),c=o+u;this.groupSizes[i]=0;for(var f=o;f<c;f++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(i){var u="";if(i>=this.length||this.groupSizes[i]===0)return u;for(var o=this.groupSizes[i],c=this.indexOfGroup(i),f=c+o,p=c;p<f;p++)u+="".concat(this.tag.getRule(p)).concat(wf);return u},a})(),Ro=new Map,Do=new Map,Ao=1,mo=function(a){if(Ro.has(a))return Ro.get(a);for(;Do.has(Ao);)Ao++;var i=Ao++;return Ro.set(a,i),Do.set(i,a),i},Rb=function(a,i){Ao=i+1,Ro.set(a,i),Do.set(i,a)},Ab="style[".concat(Nl,"][").concat(M1,'="').concat(Ko,'"]'),Ob=new RegExp("^".concat(Nl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Mb=function(a,i,u){for(var o,c=u.split(","),f=0,p=c.length;f<p;f++)(o=c[f])&&a.registerName(i,o)},Nb=function(a,i){for(var u,o=((u=i.textContent)!==null&&u!==void 0?u:"").split(wf),c=[],f=0,p=o.length;f<p;f++){var y=o[f].trim();if(y){var g=y.match(Ob);if(g){var m=0|parseInt(g[1],10),b=g[2];m!==0&&(Rb(b,m),Mb(a,b,g[3]),a.getTag().insertRules(m,c)),c.length=0}else c.push(y)}}},cm=function(a){for(var i=document.querySelectorAll(Ab),u=0,o=i.length;u<o;u++){var c=i[u];c&&c.getAttribute(Nl)!==O1&&(Nb(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function _b(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var H1=function(a){var i=document.head,u=a||i,o=document.createElement("style"),c=(function(y){var g=Array.from(y.querySelectorAll("style[".concat(Nl,"]")));return g[g.length-1]})(u),f=c!==void 0?c.nextSibling:null;o.setAttribute(Nl,O1),o.setAttribute(M1,Ko);var p=_b();return p&&o.setAttribute("nonce",p),u.insertBefore(o,f),o},kb=(function(){function a(i){this.element=H1(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,c=0,f=o.length;c<f;c++){var p=o[c];if(p.ownerNode===u)return p}throw Ki(17)})(this.element),this.length=0}return a.prototype.insertRule=function(i,u){try{return this.sheet.insertRule(u,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var u=this.sheet.cssRules[i];return u&&u.cssText?u.cssText:""},a})(),Db=(function(){function a(i){this.element=H1(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,u){if(i<=this.length&&i>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a})(),Bb=(function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,u){return i<=this.length&&(this.rules.splice(i,0,u),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a})(),fm=_o,Lb={isServer:!_o,useCSSOMInjection:!hb},Bo=(function(){function a(i,u,o){i===void 0&&(i=_l),u===void 0&&(u={});var c=this;this.options=ft(ft({},Lb),i),this.gs=u,this.names=new Map(o),this.server=!!i.isServer,!this.server&&_o&&fm&&(fm=!1,cm(this)),Cf(this,function(){return(function(f){for(var p=f.getTag(),y=p.length,g="",m=function(w){var T=(function(M){return Do.get(M)})(w);if(T===void 0)return"continue";var A=f.names.get(T),R=p.getGroup(w);if(A===void 0||!A.size||R.length===0)return"continue";var k="".concat(Nl,".g").concat(w,'[id="').concat(T,'"]'),U="";A!==void 0&&A.forEach(function(M){M.length>0&&(U+="".concat(M,","))}),g+="".concat(R).concat(k,'{content:"').concat(U,'"}').concat(wf)},b=0;b<y;b++)m(b);return g})(c)})}return a.registerId=function(i){return mo(i)},a.prototype.rehydrate=function(){!this.server&&_o&&cm(this)},a.prototype.reconstructWithOptions=function(i,u){return u===void 0&&(u=!0),new a(ft(ft({},this.options),i),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(u){var o=u.useCSSOMInjection,c=u.target;return u.isServer?new Bb(c):o?new kb(c):new Db(c)})(this.options),new zb(i)));var i},a.prototype.hasNameForId=function(i,u){return this.names.has(i)&&this.names.get(i).has(u)},a.prototype.registerName=function(i,u){if(mo(i),this.names.has(i))this.names.get(i).add(u);else{var o=new Set;o.add(u),this.names.set(i,o)}},a.prototype.insertRules=function(i,u,o){this.registerName(i,u),this.getTag().insertRules(mo(i),o)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(mo(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a})(),$b=/&/g,Ub=/^\s*\/\/.*$/gm;function Y1(a,i){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(i," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(i," ")),u.props=u.props.map(function(o){return"".concat(i," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=Y1(u.children,i)),u})}function Hb(a){var i,u,o,c=_l,f=c.options,p=f===void 0?_l:f,y=c.plugins,g=y===void 0?Jo:y,m=function(T,A,R){return R.startsWith(u)&&R.endsWith(u)&&R.replaceAll(u,"").length>0?".".concat(i):T},b=g.slice();b.push(function(T){T.type===Xo&&T.value.includes("&")&&(T.props[0]=T.props[0].replace($b,u).replace(o,m))}),p.prefix&&b.push(fb),b.push(ub);var w=function(T,A,R,k){A===void 0&&(A=""),R===void 0&&(R=""),k===void 0&&(k="&"),i=k,u=A,o=new RegExp("\\".concat(u,"\\b"),"g");var U=T.replace(Ub,""),M=rb(R||A?"".concat(R," ").concat(A," { ").concat(U," }"):U);p.namespace&&(M=Y1(M,p.namespace));var $=[];return No(M,sb(b.concat(cb(function(L){return $.push(L)})))),$};return w.hash=g.length?g.reduce(function(T,A){return A.name||Ki(15),Rl(T,A.name)},k1).toString():"",w}var Yb=new Bo,lf=Hb(),q1=Oe.createContext({shouldForwardProp:void 0,styleSheet:Yb,stylis:lf});q1.Consumer;Oe.createContext(void 0);function rf(){return x.useContext(q1)}var G1=(function(){function a(i,u){var o=this;this.inject=function(c,f){f===void 0&&(f=lf);var p=o.name+f.hash;c.hasNameForId(o.id,p)||c.insertRules(o.id,p,f(o.rules,p,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=u,Cf(this,function(){throw Ki(12,String(o.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=lf),this.name+i.hash},a})(),qb=function(a){return a>="A"&&a<="Z"};function dm(a){for(var i="",u=0;u<a.length;u++){var o=a[u];if(u===1&&o==="-"&&a[0]==="-")return a;qb(o)?i+="-"+o.toLowerCase():i+=o}return i.startsWith("ms-")?"-"+i:i}var X1=function(a){return a==null||a===!1||a===""},V1=function(a){var i,u,o=[];for(var c in a){var f=a[c];a.hasOwnProperty(c)&&!X1(f)&&(Array.isArray(f)&&f.isCss||kl(f)?o.push("".concat(dm(c),":"),f,";"):qi(f)?o.push.apply(o,Al(Al(["".concat(c," {")],V1(f),!1),["}"],!1)):o.push("".concat(dm(c),": ").concat((i=c,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||i in db||i.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function pa(a,i,u,o){if(X1(a))return[];if(jf(a))return[".".concat(a.styledComponentId)];if(kl(a)){if(!kl(f=a)||f.prototype&&f.prototype.isReactComponent||!i)return[a];var c=a(i);return pa(c,i,u,o)}var f;return a instanceof G1?u?(a.inject(u,o),[a.getName(o)]):[a]:qi(a)?V1(a):Array.isArray(a)?Array.prototype.concat.apply(Jo,a.map(function(p){return pa(p,i,u,o)})):[a.toString()]}function Q1(a){for(var i=0;i<a.length;i+=1){var u=a[i];if(kl(u)&&!jf(u))return!1}return!0}var Gb=D1(Ko),Xb=(function(){function a(i,u,o){this.rules=i,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Q1(i),this.componentId=u,this.baseHash=Rl(Gb,u),this.baseStyle=o,Bo.registerId(u)}return a.prototype.generateAndInjectStyles=function(i,u,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=Da(c,this.staticRulesId);else{var f=ko(pa(this.rules,i,u,o)),p=nf(Rl(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,p)){var y=o(f,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,y)}c=Da(c,p),this.staticRulesId=p}else{for(var g=Rl(this.baseHash,o.hash),m="",b=0;b<this.rules.length;b++){var w=this.rules[b];if(typeof w=="string")m+=w;else if(w){var T=ko(pa(w,i,u,o));g=Rl(g,T+b),m+=T}}if(m){var A=nf(g>>>0);u.hasNameForId(this.componentId,A)||u.insertRules(this.componentId,A,o(m,".".concat(A),void 0,this.componentId)),c=Da(c,A)}}return c},a})(),Tf=Oe.createContext(void 0);Tf.Consumer;var zc={};function Vb(a,i,u){var o=jf(a),c=a,f=!Tc(a),p=i.attrs,y=p===void 0?Jo:p,g=i.componentId,m=g===void 0?(function(Z,K){var q=typeof Z!="string"?"sc":im(Z);zc[q]=(zc[q]||0)+1;var V="".concat(q,"-").concat(Ef(Ko+q+zc[q]));return K?"".concat(K,"-").concat(V):V})(i.displayName,i.parentComponentId):g,b=i.displayName,w=b===void 0?(function(Z){return Tc(Z)?"styled.".concat(Z):"Styled(".concat(yb(Z),")")})(a):b,T=i.displayName&&i.componentId?"".concat(im(i.displayName),"-").concat(i.componentId):i.componentId||m,A=o&&c.attrs?c.attrs.concat(y).filter(Boolean):y,R=i.shouldForwardProp;if(o&&c.shouldForwardProp){var k=c.shouldForwardProp;if(i.shouldForwardProp){var U=i.shouldForwardProp;R=function(Z,K){return k(Z,K)&&U(Z,K)}}else R=k}var M=new Xb(u,T,o?c.componentStyle:void 0);function $(Z,K){return(function(q,V,ne){var W=q.attrs,ce=q.componentStyle,fe=q.defaultProps,He=q.foldedComponentIds,P=q.styledComponentId,ae=q.target,ge=Oe.useContext(Tf),D=rf(),Q=q.shouldForwardProp||D.shouldForwardProp,I=N1(V,ge,fe)||_l,ee=(function(ie,ue,ve){for(var qe,Ee=ft(ft({},ue),{className:void 0,theme:ve}),jt=0;jt<ie.length;jt+=1){var Kt=kl(qe=ie[jt])?qe(Ee):qe;for(var ht in Kt)Ee[ht]=ht==="className"?Da(Ee[ht],Kt[ht]):ht==="style"?ft(ft({},Ee[ht]),Kt[ht]):Kt[ht]}return ue.className&&(Ee.className=Da(Ee.className,ue.className)),Ee})(W,V,I),pe=ee.as||ae,j={};for(var Y in ee)ee[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&ee.theme===I||(Y==="forwardedAs"?j.as=ee.forwardedAs:Q&&!Q(Y,pe)||(j[Y]=ee[Y]));var J=(function(ie,ue){var ve=rf(),qe=ie.generateAndInjectStyles(ue,ve.styleSheet,ve.stylis);return qe})(ce,ee),F=Da(He,P);return J&&(F+=" "+J),ee.className&&(F+=" "+ee.className),j[Tc(pe)&&!_1.has(pe)?"class":"className"]=F,ne&&(j.ref=ne),x.createElement(pe,j)})(L,Z,K)}$.displayName=w;var L=Oe.forwardRef($);return L.attrs=A,L.componentStyle=M,L.displayName=w,L.shouldForwardProp=R,L.foldedComponentIds=o?Da(c.foldedComponentIds,c.styledComponentId):"",L.styledComponentId=T,L.target=o?c.target:a,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=o?(function(K){for(var q=[],V=1;V<arguments.length;V++)q[V-1]=arguments[V];for(var ne=0,W=q;ne<W.length;ne++)af(K,W[ne],!0);return K})({},c.defaultProps,Z):Z}}),Cf(L,function(){return".".concat(L.styledComponentId)}),f&&U1(L,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function hm(a,i){for(var u=[a[0]],o=0,c=i.length;o<c;o+=1)u.push(i[o],a[o+1]);return u}var pm=function(a){return Object.assign(a,{isCss:!0})};function Dn(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];if(kl(a)||qi(a))return pm(pa(hm(Jo,Al([a],i,!0))));var o=a;return i.length===0&&o.length===1&&typeof o[0]=="string"?pa(o):pm(pa(hm(o,i)))}function of(a,i,u){if(u===void 0&&(u=_l),!i)throw Ki(1,i);var o=function(c){for(var f=[],p=1;p<arguments.length;p++)f[p-1]=arguments[p];return a(i,u,Dn.apply(void 0,Al([c],f,!1)))};return o.attrs=function(c){return of(a,i,ft(ft({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return of(a,i,ft(ft({},u),c))},o}var Z1=function(a){return of(Vb,a)},S=Z1;_1.forEach(function(a){S[a]=Z1(a)});var Qb=(function(){function a(i,u){this.rules=i,this.componentId=u,this.isStatic=Q1(i),Bo.registerId(this.componentId+1)}return a.prototype.createStyles=function(i,u,o,c){var f=c(ko(pa(this.rules,u,o,c)),""),p=this.componentId+i;o.insertRules(p,p,f)},a.prototype.removeStyles=function(i,u){u.clearRules(this.componentId+i)},a.prototype.renderStyles=function(i,u,o,c){i>2&&Bo.registerId(this.componentId+i),this.removeStyles(i,o),this.createStyles(i,u,o,c)},a})();function K1(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];var o=Dn.apply(void 0,Al([a],i,!1)),c="sc-global-".concat(Ef(JSON.stringify(o))),f=new Qb(o,c),p=function(g){var m=rf(),b=Oe.useContext(Tf),w=Oe.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&y(w,g,m.styleSheet,b,m.stylis),Oe.useLayoutEffect(function(){if(!m.styleSheet.server)return y(w,g,m.styleSheet,b,m.stylis),function(){return f.removeStyles(w,m.styleSheet)}},[w,g,m.styleSheet,b,m.stylis]),null};function y(g,m,b,w,T){if(f.isStatic)f.renderStyles(g,pb,b,T);else{var A=ft(ft({},m),{theme:N1(m,w,p.defaultProps)});f.renderStyles(g,A,b,T)}}return Oe.memo(p)}function $n(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];var o=ko(Dn.apply(void 0,Al([a],i,!1))),c=Ef(o);return new G1(c,o)}var J1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mm=Oe.createContext&&Oe.createContext(J1),Zb=["attr","size","title"];function Kb(a,i){if(a==null)return{};var u=Jb(a,i),o,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)o=f[c],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(u[o]=a[o])}return u}function Jb(a,i){if(a==null)return{};var u={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}function Lo(){return Lo=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Lo.apply(this,arguments)}function gm(a,i){var u=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);i&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),u.push.apply(u,o)}return u}function $o(a){for(var i=1;i<arguments.length;i++){var u=arguments[i]!=null?arguments[i]:{};i%2?gm(Object(u),!0).forEach(function(o){Fb(a,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(u)):gm(Object(u)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(u,o))})}return a}function Fb(a,i,u){return i=Wb(i),i in a?Object.defineProperty(a,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[i]=u,a}function Wb(a){var i=Ib(a,"string");return typeof i=="symbol"?i:i+""}function Ib(a,i){if(typeof a!="object"||!a)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}function F1(a){return a&&a.map((i,u)=>Oe.createElement(i.tag,$o({key:u},i.attr),F1(i.child)))}function Me(a){return i=>Oe.createElement(Pb,Lo({attr:$o({},a.attr)},i),F1(a.child))}function Pb(a){var i=u=>{var{attr:o,size:c,title:f}=a,p=Kb(a,Zb),y=c||u.size||"1em",g;return u.className&&(g=u.className),a.className&&(g=(g?g+" ":"")+a.className),Oe.createElement("svg",Lo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,o,p,{className:g,style:$o($o({color:a.color||u.color},u.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),f&&Oe.createElement("title",null,f),a.children)};return mm!==void 0?Oe.createElement(mm.Consumer,null,u=>i(u)):i(J1)}function zf(a){return Me({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function Rf(a){return Me({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function Af(a){return Me({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Of(a){return Me({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function Mf(a){return Me({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function W1(a){return Me({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function e5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function I1(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function t5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(a)}function n5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function P1(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function a5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Nf(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function l5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function eg(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function i5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(a)}function vm(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const r5="/instalearn/assets/Slide11-BQ1quwNm.mp4",o5="/instalearn/assets/test-BrOnAr5c.png",u5="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",s5="/instalearn/assets/Grade9EnglishPriyaShrama-B1I7qOLW.png",c5="/instalearn/assets/Grade9EnglishVivekSinha-DL6zVjOS.png",f5="/instalearn/assets/Grade9MathMandar-CUG1o1dv.png",d5="/instalearn/assets/Grade9MathNeha-bS5aSjDI.png",h5="/instalearn/assets/Slide1-CH0r16yo.png",p5="/instalearn/assets/Slide3-B6C07YuO.png",m5="/instalearn/assets/Slide5-BsOulZPi.png",g5="/instalearn/assets/Slide6-8dQDHdn3.png",v5="/instalearn/assets/Slide1-CH0r16yo.png",y5="/instalearn/assets/Slide10-BP0-oJ-v.gif",x5="/instalearn/assets/Slide11-BQ1quwNm.mp4",go={},ym={videoClip1:r5},b5={test:o5},ha={teacherProfilePic:u5,Grade9EnglishPriyaShrama:s5,Grade9EnglishVivekSinha:c5,Grade9MathMandar:f5,Grade9MathNeha:d5},Rn={Slide1:h5,Slide3:p5,Slide5:m5,Slide6:g5,Slide7:v5,Slide10:y5,Slide11:x5};function S5(a){return Me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M294 240s-21.51 16-38 16-38-16-38-16"},child:[]}]})(a)}const w5=S.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,E5=S.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  @media (max-width: 520px) {
    padding: 10px 12px;
  }
`,j5=S.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,C5=S.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,T5=S.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,z5=S.span`
  font-weight: 600;
  color: #0f172a;
  font-size: 14px;
  @media (max-width: 520px) { font-size: 13px; }
`,R5=S.span`
  font-size: 12px;
  color: #64748b;
`,A5=S.button`
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
`,O5=S.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,M5=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,N5=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 8px 12px;
`,_5=S.div`
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
`,k5=S.div`
  padding: 12px;
  display: grid;
  gap: 14px;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  @media (min-width: 520px) {
    padding: 14px 16px;
    gap: 16px;
  }
`,xm=S.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
  @media (min-width: 520px) { padding: 14px; }
`,bm=S.h3`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
`,D5=S.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
  li {
    font-size: 13px;
    color: #0f172a;
    line-height: 1.25;
  }
`,rn=S.div`
  height: ${a=>a.h||12}px;
  background: linear-gradient(90deg,#f2f5f9 0%,#eef2f7 50%,#f2f5f9 100%);
  border-radius: 8px;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% { opacity: .8 }
    50% { opacity: .4 }
    100% { opacity: .8 }
  }
`,Sm=S.div`
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
`,wm=S.button`
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`,B5=S.div`
  display: grid;
  gap: 10px;
`,L5=S.p`
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`,$5=S.div`
  display: grid;
  gap: 8px;
`,U5=S.button.withConfig({shouldForwardProp:a=>a!=="$state"})`
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
`,Oo=S.small`
  color: #64748b;
  font-size: 12px;
`,H5=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tg=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,Em=S.button`
  background: #0f172a;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
`,ng=S.button`
  background: transparent;
  border: 1px solid rgba(15,23,42,.14);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
`;async function Y5(a){const u=await(await fetch(a,{mode:"cors"})).blob(),o=u.type||"image/jpeg",c=await u.arrayBuffer(),f=new Uint8Array(c);let p="";for(let g=0;g<f.byteLength;g++)p+=String.fromCharCode(f[g]);return{base64:btoa(p),mime:o}}function q5({title:a,description:i,username:u}){return`
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
- Caption: "${i}"
- Author: "${u}"
`.trim()}async function G5(a){const{title:i,description:u,username:o,imageUrl:c}=a,f="AIzaSyDYGHcNYuuk43rrYSBVBIQGegzOGVtjGrw",{base64:p,mime:y}=await Y5(c),m={contents:[{parts:[{text:q5({title:i,description:u,username:o})},{inline_data:{mime_type:y,data:p}}]}],generationConfig:{temperature:.6,topK:32,topP:.9,maxOutputTokens:1200,response_mime_type:"application/json"}},b="https://generativelanguage.googleapis.com/v1beta",w=["gemini-2.5-flash","gemini-2.0-flash"];let T;for(const A of w)try{const R=`${b}/models/${A}:generateContent?key=${encodeURIComponent(f)}`,k=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!k.ok)throw new Error(`Gemini error (${k.status}): ${await k.text()}`);const M=(await k.json())?.candidates?.[0]?.content?.parts?.[0]?.text;if(!M)throw new Error("Empty response from Gemini");let $;try{$=JSON.parse(M)}catch{const q=String(M).replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/```$/i,"").trim();$=JSON.parse(q)}const L=Array.isArray($.bullets)?$.bullets.slice(0,5):[],Z=Array.isArray($.mcqs)?$.mcqs.slice(0,5):[];if(!L.length||!Z.length)throw new Error("Malformed AI content");const K=Z.map(q=>({question:String(q.question||"").slice(0,140),options:Array.isArray(q.options)&&q.options.length?q.options.slice(0,5):["Not present"],correctIndex:Number.isInteger(q.correctIndex)?q.correctIndex:0,explanation:q.explanation?String(q.explanation).slice(0,140):void 0}));return{bullets:L,mcqs:K}}catch(R){T=R}throw T||new Error("Gemini request failed")}function X5({avatarSrc:a=ha.teacherProfilePic,title:i,description:u,imgSrc:o,username:c,postUrl:f,onLikeChange:p,onBookmarkChange:y,onShare:g}){const[m,b]=x.useState(!1),[w,T]=x.useState(!1),[A,R]=x.useState(!1),[k,U]=x.useState(!1),[M,$]=x.useState(null),[L,Z]=x.useState(null),[K,q]=x.useState(0);x.useEffect(()=>{const ee=L?.mcqs?.length||0;ee!==0&&q(pe=>Math.max(0,Math.min(pe,ee-1)))},[L?.mcqs?.length]);const V=m?"Unlike":"Like",ne=w?"Remove bookmark":"Bookmark",W=()=>{const ee=!m;b(ee),p&&p(ee)},ce=()=>{const ee=!w;T(ee),y&&y(ee)},fe=x.useMemo(()=>({title:i,text:`${c} on Infographics — ${i}`,url:f}),[i,c,f]),He=async()=>{try{navigator.share?await navigator.share(fe):navigator.clipboard&&fe.url&&(await navigator.clipboard.writeText(fe.url),alert("Link copied to clipboard")),g&&g(fe)}catch(ee){console.error("Share failed:",ee)}},P=async()=>{U(!0),$(null);try{const ee=await G5({title:i,description:u,username:c,imageUrl:o});Z(ee),q(0)}catch(ee){console.error(ee),$(ee?.message||"Failed to generate content")}finally{U(!1)}},ae=()=>{const ee=!A;R(ee),ee&&!L&&!k&&P()},ge=L?.mcqs?.length||0,D=ge?L.mcqs[K]:null,Q=K===ge-1,I=()=>q(ee=>Math.min(ee+1,ge-1));return d.jsxs(w5,{role:"article","aria-label":`${i} instagram-style post`,children:[d.jsxs(E5,{children:[d.jsxs(j5,{children:[d.jsx(C5,{src:a,alt:"avatar"}),d.jsxs(T5,{children:[d.jsx(z5,{children:i}),d.jsx(R5,{children:u})]})]}),d.jsx(A5,{"aria-label":A?"Close learn mode":"Open learn mode",title:A?"Close learn mode":"Learn more & quiz",onClick:ae,children:d.jsx(S5,{size:18})})]}),A?d.jsxs(k5,{"aria-live":"polite",children:[d.jsxs(xm,{children:[d.jsx(bm,{children:"Know more (5 quick points)"}),k?d.jsxs("div",{style:{display:"grid",gap:8},children:[d.jsx(rn,{}),d.jsx(rn,{}),d.jsx(rn,{}),d.jsx(rn,{}),d.jsx(rn,{})]}):M?d.jsxs(Sm,{children:[d.jsx("span",{style:{flex:1,minWidth:0},children:M}),d.jsx(wm,{onClick:P,"aria-label":"Retry generating content",children:"Retry"})]}):d.jsx(D5,{children:L?.bullets?.map((ee,pe)=>d.jsx("li",{children:ee},pe))})]}),d.jsxs(xm,{children:[d.jsxs(tg,{children:[d.jsx(bm,{style:{margin:0},children:"Test your knowledge"}),ge?d.jsxs(Oo,{children:[K+1," / ",ge]}):null]}),k?d.jsxs("div",{style:{display:"grid",gap:10},children:[d.jsx(rn,{h:16}),d.jsx(rn,{h:40}),d.jsx(rn,{h:40}),d.jsx(rn,{h:40}),d.jsx(rn,{h:40})]}):M?d.jsxs(Sm,{children:[d.jsx("span",{style:{flex:1,minWidth:0},children:"Can’t load questions."}),d.jsx(wm,{onClick:P,children:"Retry"})]}):D?d.jsx(V5,{mcq:D,index:K+1,total:ge,isLast:Q,onNext:Q?void 0:I,onFinish:Q?()=>R(!1):void 0},K):null,!k&&!M&&D&&!Q?d.jsx("div",{style:{marginTop:6},children:d.jsx(Oo,{children:"Tip: You can change your choice before tapping Next."})}):null]}),d.jsxs(H5,{children:[d.jsx(Oo,{children:"AI stays within the infographic; short, clear answers only."}),d.jsx(ng,{onClick:()=>R(!1),"aria-label":"Back to image",title:"Back to image",children:"Back to image"})]})]}):d.jsx(O5,{children:d.jsx(M5,{src:o,alt:i})}),d.jsxs(N5,{children:[d.jsxs(_5,{children:[d.jsx(vo,{onClick:W,"aria-label":V,title:V,children:m?d.jsx(zf,{size:22}):d.jsx(Rf,{size:22})}),d.jsx(vo,{"aria-label":"Comment",title:"Comment",children:d.jsx(Mf,{size:20})}),d.jsx(vo,{onClick:He,"aria-label":"Share",title:"Share",children:d.jsx(Nf,{size:20})})]}),d.jsx(vo,{onClick:ce,"aria-label":ne,title:ne,children:w?d.jsx(Af,{size:20}):d.jsx(Of,{size:20})})]})]})}function V5({mcq:a,index:i,total:u,isLast:o,onNext:c,onFinish:f}){const[p,y]=x.useState(null),g=m=>p===null?"idle":m===a.correctIndex?"correct":m===p&&p!==a.correctIndex?"wrong":"idle";return d.jsxs(B5,{"aria-label":`Question ${i}`,children:[d.jsxs(L5,{children:[i,". ",a.question]}),d.jsx($5,{children:a.options.map((m,b)=>d.jsx(U5,{onClick:()=>y(b),$state:g(b),"aria-pressed":p===b,"aria-label":`Option ${b+1}`,children:m},b))}),p!==null&&d.jsxs("div",{style:{display:"grid",gap:8},children:[d.jsxs(Oo,{children:[p===a.correctIndex?"✅ Correct.":"❌ Not quite.",a.explanation?` — ${a.explanation}`:""]}),o?d.jsxs(tg,{children:[d.jsx(Em,{onClick:f,"aria-label":"Finish quiz",children:"Finish"}),d.jsx(ng,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to top"})]}):d.jsxs(Em,{onClick:c,"aria-label":"Next question",disabled:p===null,children:["Next question (",i+1,"/",u,")"]})]})]})}const Q5=S.div``,Z5=S.div`
  display: flex;
  overflow-x: auto;
  padding: 24px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,K5=S.button`
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
`,ag=`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  user-drag: none;
  -webkit-user-drag: none;
  pointer-events: none;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
`,J5=S.img`${ag}`,F5=S.video`${ag}`,W5=S.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.96);
  backdrop-filter: blur(20px);
  display: grid;
  place-items: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`,I5=S.div`
  position: relative;
  width: 96vw;
  max-width: 1400px;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto auto;
  gap: 10px;
  overflow: hidden;
`,P5=S.div`
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
`,e4=S.div`
  flex: 0 0 100%;
  height: 100%;
  display: grid;
  place-items: center;
  scroll-snap-align: center;
  background: transparent;
`,lg=`
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
`,t4=S.img`${lg}`,n4=S.video`${lg}`,a4=S.button`
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
`,l4=S.div`
  width: 100%;
  padding: 0 16px 8px;
  display: grid;
  align-items: center;
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,i4=S.input.attrs({type:"range"})`
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
`,r4=S.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 0 16px 16px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,ig=S.button`
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
`,o4=S.img`
  width: 80px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  transition: opacity 0.2s ease;

  ${ig}:hover & { opacity: 0.8; }
`,u4=S.video`
  width: 80px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
`,jm=(a,i,u)=>Math.max(i,Math.min(u,a));function s4(a){const i=(a.type||"img").toLowerCase(),u=a.src||a.imgSrc||a.videoClipSrc,o=a.poster||a.thumb||a.thumbnail,c=a.name||a.title||"";return{type:i,src:u,poster:o,name:c,id:a.id}}class c4 extends Oe.Component{state={hasError:!1};static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(i,u){console.error("Carousel error:",i,u)}render(){return this.state.hasError?d.jsx("div",{style:{color:"#fff",padding:16,textAlign:"center"},children:"Something went wrong while rendering the carousel."}):this.props.children}}function f4({items:a=[],className:i}){const u=x.useRef(null),o=x.useRef(!1),c=x.useRef(0),f=x.useRef(0),p=x.useRef(0),[y,g]=x.useState(!1),[m,b]=x.useState(0),[w,T]=x.useState(!0),A=x.useRef(null),R=x.useMemo(()=>(a||[]).map(s4).filter(P=>!!P.src),[a]),k=x.useRef([]);k.current.length!==R.length&&(k.current=R.map((P,ae)=>k.current[ae]??Oe.createRef()));const U=typeof window<"u"&&typeof document<"u";x.useEffect(()=>{if(!U)return;const P=document.body.style.overflow;return y&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=P||""}},[y,U]),x.useEffect(()=>{y&&(k.current[m]?.current?.scrollIntoView({block:"nearest",inline:"center",behavior:"auto"}),T(!0))},[y,m]),x.useEffect(()=>{if(!y||!U)return;const P=ae=>{ae.key==="Escape"&&g(!1),ae.key==="ArrowRight"&&L(m+1),ae.key==="ArrowLeft"&&L(m-1),ae.key.toLowerCase()==="h"&&T(ge=>!ge)};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[y,m,U]);const M=x.useMemo(()=>{if(typeof window>"u"||!A.current)return 0;const P=window.getComputedStyle(A.current),ae=parseFloat(P.gap)||0;return(A.current.clientWidth||0)+ae},[y]),$=()=>{if(!A.current||M===0)return;const{scrollLeft:P}=A.current,ae=Math.round(P/M),ge=jm(ae,0,R.length-1);ge!==m&&b(ge)},L=P=>{const ae=jm(P,0,Math.max(0,R.length-1));if(b(ae),!A.current)return;const ge=M*ae;A.current.scrollTo({left:ge,behavior:"smooth"})},Z=P=>{const ae=Number(P.target.value);L(ae)},q={"--filled":`${R.length>1?m/(R.length-1)*100:0}%`},V=P=>{if(P.pointerType==="mouse"&&u.current){o.current=!0,p.current=0,c.current=P.clientX,f.current=u.current.scrollLeft||0;try{u.current.setPointerCapture?.(P.pointerId)}catch{console.log("error")}}},ne=P=>{if(P.pointerType!=="mouse"||!o.current||!u.current)return;const ae=P.clientX-c.current;p.current=Math.max(p.current,Math.abs(ae)),u.current.scrollLeft=f.current-ae},W=()=>{o.current=!1},ce=6,fe=P=>{p.current>ce||(b(P),T(!0),g(!0))},He=P=>{const ae=P.target,ge=ae.tagName&&ae.tagName.toLowerCase(),D=ge==="img"||ge==="video",Q=ae.closest?.('[data-interactive="true"]');D||Q||T(I=>!I)};return x.useEffect(()=>{if(!y)return;(A.current?.querySelectorAll("video[data-slide-video='true']")||[]).forEach((ae,ge)=>{ge===m?(ae.muted=!0,ae.play().catch(()=>{})):(ae.pause(),ae.currentTime=0)})},[y,m]),!R||R.length===0?null:d.jsxs(Q5,{className:i,children:[d.jsx(Z5,{ref:u,onPointerDown:V,onPointerMove:ne,onPointerUp:W,onPointerLeave:W,children:R.map((P,ae)=>d.jsx(K5,{onClick:()=>fe(ae),children:P.type==="video"?d.jsx(F5,{src:P.src,poster:P.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":P.name||`Video ${ae+1}`}):d.jsx(J5,{src:P.src,alt:P.name??`Item ${ae+1}`,draggable:!1})},P.id??ae))}),y&&d.jsx(W5,{role:"dialog","aria-modal":"true","aria-label":"Media lightbox",children:d.jsxs(I5,{onClick:He,children:[d.jsxs(h4,{$show:w,children:[m+1," / ",R.length]}),d.jsx(a4,{$show:w,onClick:()=>g(!1),"aria-label":"Close","data-interactive":"true",children:d.jsx(i5,{})}),d.jsx(P5,{ref:A,onScroll:$,children:R.map((P,ae)=>d.jsx(e4,{ref:k.current[ae],children:P.type==="video"?d.jsx(n4,{"data-slide-video":"true",src:P.src,poster:P.poster,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto","aria-label":P.name??`Video ${ae+1}`}):d.jsx(t4,{src:P.src,alt:P.name??`Image ${ae+1}`})},P.id??ae))}),d.jsx(l4,{$show:w,"data-interactive":"true",children:d.jsx(i4,{min:0,max:Math.max(0,R.length-1),step:1,value:m,onChange:Z,style:q,"aria-label":"Media scrubber"})}),d.jsx(r4,{$show:w,"aria-label":"Thumbnails","data-interactive":"true",children:R.map((P,ae)=>d.jsx(ig,{$active:ae===m,onClick:()=>L(ae),"aria-label":`Go to item ${ae+1}`,children:P.type==="video"?d.jsx(u4,{src:P.src,poster:P.poster,muted:!0,loop:!0,playsInline:!0,preload:"metadata"}):d.jsx(o4,{src:P.src,alt:P.name??`Thumbnail ${ae+1}`})},P.id??ae))})]})})]})}function d4(a){return d.jsx(c4,{children:d.jsx(f4,{...a})})}const h4=S.div`
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
`,p4=K1`
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
`,m4=S.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,g4=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,v4=S.div`
  display: flex;
  gap: 12px;
`,y4=S.button`
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
`,yo=S.button`
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
`,x4=S.div`
  padding: 12px 14px;
`,b4=S.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,S4=S.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,w4=S.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,E4=S.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,j4=S.span`
  font-weight: 600;
  color: #0f172a;
`,C4=S.div`
  padding: 0 14px 8px 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,T4=S.span`
  font-size: 12px;
  color: #64748b;
`,z4=S.button`
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
`,R4=(a=1)=>({display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",WebkitLineClamp:a});function A4({expanded:a=!1,lines:i=1,children:u,innerRef:o}){const c={fontSize:"13px",color:"#334155",margin:0,whiteSpace:"pre-wrap",...a?{}:R4(i)};return d.jsx("p",{style:c,ref:o,children:u})}function O4({avatarSrc:a=ha.teacherProfilePic,data:i,onLikeChange:u,onBookmarkChange:o,onShare:c}){const{title:f="Carousel Title",description:p="",detailedDescription:y="",carouselMetaData:g=[]}=i||{},[m,b]=x.useState(!1),[w,T]=x.useState(!1),[A,R]=x.useState(!1),[k,U]=x.useState(!1),M=x.useRef(null);x.useEffect(()=>{const ne=M.current;if(ne){if(A){U(!0);return}requestAnimationFrame(()=>{if(!ne)return;const W=ne.scrollHeight-ne.clientHeight>1;U(W)})}},[y,A]);const $=m?"Unlike post":"Like post",L=w?"Remove bookmark":"Bookmark",Z=()=>{const ne=!m;b(ne),u&&u(ne)},K=()=>{const ne=!w;T(ne),o&&o(ne)},q=x.useMemo(()=>({title:f,text:`${f}`,url:typeof window<"u"?window.location.href:""}),[f]),V=async()=>{try{navigator.share?await navigator.share(q):navigator.clipboard&&(await navigator.clipboard.writeText(q.url),alert("Link copied to clipboard")),c&&c(q)}catch(ne){console.error("Share failed:",ne)}};return!g||g.length===0?null:d.jsxs(m4,{role:"article","aria-label":`${f} – Instagram multi-image post`,children:[d.jsxs(x4,{children:[d.jsxs(b4,{children:[d.jsxs(S4,{children:[d.jsx(w4,{src:a,alt:"avatar"}),d.jsxs(E4,{children:[d.jsx(j4,{children:f}),d.jsx(T4,{children:p})]})]}),d.jsx(y4,{"aria-label":"Post menu",title:"More",children:d.jsx(W1,{size:18})})]}),y?d.jsxs(C4,{children:[d.jsx(A4,{expanded:A,lines:1,innerRef:M,children:y}),(k||A)&&d.jsx(z4,{type:"button","aria-expanded":A,onClick:()=>R(ne=>!ne),children:A?d.jsx(t5,{size:14}):"more"})]}):null]}),d.jsx(p4,{}),d.jsx(d4,{items:g,duration:3e3}),d.jsxs(g4,{children:[d.jsxs(v4,{children:[d.jsx(yo,{onClick:Z,"aria-label":$,title:$,children:m?d.jsx(zf,{size:22}):d.jsx(Rf,{size:22})}),d.jsx(yo,{"aria-label":"Comment",title:"Comment",children:d.jsx(Mf,{size:20})}),d.jsx(yo,{onClick:V,"aria-label":"Share",title:"Share",children:d.jsx(Nf,{size:20})})]}),d.jsx(yo,{onClick:K,"aria-label":L,title:L,children:w?d.jsx(Af,{size:20}):d.jsx(Of,{size:20})})]})]})}const M4=S.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,N4=S.div`
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
`,_4=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,k4=S.div`
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
`,D4=S.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,B4=S.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,L4=S.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,$4=S.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,U4=S.span`
  font-weight: 600;
  color: #0f172a;
`,H4=S.span`
  font-size: 12px;
  color: #64748b;
`,Y4=S.button`
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
`;function q4({avatarSrc:a=ha.teacherProfilePic,data:i,likedDefault:u=!1,savedDefault:o=!1,onLikeChange:c,onBookmarkChange:f,onShare:p}){const y=i?.videoClipSrc||i?.vedioClipSrc,{title:g,description:m,poster:b}=i||{},[w,T]=x.useState(u),[A,R]=x.useState(o),k=w?"Unlike post":"Like post",U=A?"Remove bookmark":"Bookmark",M=x.useRef(null),$=()=>{const K=!w;T(K),c&&c(K)},L=()=>{const K=!A;R(K),f&&f(K)},Z=async()=>{const K={title:g||"Check this video",text:m||"",url:typeof window<"u"&&window.location?.href||(i?.url??"")};try{typeof navigator<"u"&&navigator.share?await navigator.share(K):typeof navigator<"u"&&navigator.clipboard&&K.url&&(await navigator.clipboard.writeText(K.url),alert("Link copied to clipboard")),p&&p(K)}catch(q){console.log(q)}};return x.useEffect(()=>{const K=M.current;if(!K)return;(async()=>{try{await K.play()}catch{}})()},[y]),y?d.jsxs(M4,{"aria-label":"Video post",children:[d.jsxs(D4,{children:[d.jsxs(B4,{children:[d.jsx(L4,{src:a,alt:"Author avatar"}),d.jsxs($4,{children:[d.jsx(U4,{children:g}),d.jsx(H4,{children:m})]})]}),d.jsx(Y4,{"aria-label":"Post menu",title:"More options",children:d.jsx(W1,{size:18})})]}),d.jsx(N4,{children:d.jsx("video",{ref:M,src:y,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:b,"aria-label":g||"Video clip"})}),d.jsxs(_4,{children:[d.jsxs(k4,{children:[d.jsx(xo,{onClick:$,"aria-label":k,title:k,children:w?d.jsx(zf,{size:22}):d.jsx(Rf,{size:22})}),d.jsx(xo,{"aria-label":"Comment",title:"Comment",children:d.jsx(Mf,{size:20})}),d.jsx(xo,{onClick:Z,"aria-label":"Share",title:"Share",children:d.jsx(Nf,{size:20})})]}),d.jsx(xo,{onClick:L,"aria-label":U,title:U,children:A?d.jsx(Af,{size:20}):d.jsx(Of,{size:20})})]})]}):null}const G4=[{id:1,name:"Sense of Collective Identity",img:go.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[b5.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:go.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:go.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:go.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function X4(a){return Me({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function V4({isOpen:a,activeIndex:i,setActiveIndex:u,total:o,onClose:c,duration:f=3e3}){const p=x.useRef(Date.now()),y=x.useRef(),g=x.useRef(0),m=x.useCallback(()=>{const w=Date.now()-p.current,T=Math.min(1,w/f);g.current=T,T>=1?i<o-1?u(A=>A+1):c():y.current=requestAnimationFrame(m)},[i,o,f,c,u]);return x.useEffect(()=>{if(a)return p.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,i,m]),{resetTimer:x.useCallback(()=>{p.current=Date.now()},[]),getProgressValue:()=>g.current}}const Q4=S.div`
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
`,Z4=S.div`
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
`,K4=S.div`
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
`,J4=S.div`
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
`,F4=S.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 2.5px;
  }
`,W4=S.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,I4=S.div`
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
`,P4=S.img`
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
`,e3=S.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,t3=S.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,n3=S.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`,a3=S.button`
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
`,l3=S.img`
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
`,Cm=S.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 10;
  touch-action: manipulation;

  ${a=>a.$side==="left"?Dn`
          left: 0;
          width: 33.3333%;
        `:Dn`
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
`;function i3({currentItem:a,isOpen:i,slideIndex:u,setSlideIndex:o,onClose:c,duration:f=3e3}){const p=a?.slides?.length||0,{resetTimer:y,getProgressValue:g}=V4({isOpen:i,activeIndex:u,setActiveIndex:o,total:p,onClose:c,duration:f}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,b]=x.useState(0);x.useEffect(()=>{if(!i||m)return;let R;const k=()=>{b(U=>U+1),R=requestAnimationFrame(k)};return R=requestAnimationFrame(k),()=>cancelAnimationFrame(R)},[i,m]);const w=x.useCallback(()=>{a&&(u<p-1?(o(R=>R+1),y()):c())},[a,u,p,y,c,o]),T=x.useCallback(()=>{a&&(u>0?(o(R=>R-1),y()):c())},[a,u,y,c,o]);x.useEffect(()=>{const R=k=>{i&&(k.key==="Escape"&&c(),k.key==="ArrowRight"&&w(),k.key==="ArrowLeft"&&T())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[i,w,T,c]),x.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const A=R=>R<u?1:R>u?0:g();return!i||!a?null:d.jsx(Q4,{onClick:c,"aria-label":"Story overlay",children:d.jsx(Z4,{onClick:R=>R.stopPropagation(),children:d.jsxs(K4,{children:[d.jsx(J4,{"aria-label":"Story progress",children:a.slides.map((R,k)=>d.jsx(F4,{"aria-label":`Progress track ${k+1}`,children:d.jsx(W4,{style:{width:`${A(k)*100}%`}})},k))}),d.jsxs(I4,{children:[d.jsx(P4,{src:a.img,alt:a.name}),d.jsxs(e3,{children:[d.jsx(t3,{children:a.name}),d.jsx(n3,{children:"Chapter highlight"})]}),d.jsx(a3,{"aria-label":"Close story",onClick:c,title:"Close",children:d.jsx(X4,{})})]}),a.slides.map((R,k)=>d.jsx(l3,{src:R,alt:`Slide ${k+1}`,$active:k===u,draggable:!1},k)),d.jsx(Cm,{$side:"left",onClick:T,"aria-label":"Previous slide"}),d.jsx(Cm,{$side:"right",onClick:w,"aria-label":"Next slide"})]})})})}const r3=S.div``,o3=S.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,u3=S.div`
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
`,s3=S.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,c3=S.div`
  padding: 2px;
  border-radius: 999px;
  ${a=>a.$hasNew?Dn`
          background: linear-gradient(
            45deg,
            #777777 0%,
            #949494 25%,
            #4b4b4b 50%,
            #555555 75%,
            #585758 100%
          );
        `:Dn`
          background: transparent;
        `};
`,f3=S.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,d3=S.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,h3=S.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function p3({items:a,duration:i=3e3,onOpen:u,onClose:o,className:c}){const f=x.useRef(null),p=x.useRef(!1),y=x.useRef(0),g=x.useRef(0),[m,b]=x.useState(a||[]),[w,T]=x.useState(null),[A,R]=x.useState(0),k=m.find(q=>q.id===w)||null,U=!!w,M=q=>{R(0),T(q),b(V=>V.map(ne=>ne.id===q?{...ne,hasNew:!1}:ne)),u&&u(q)},$=()=>{T(null),o&&o()},L=q=>{p.current=!0,y.current=q.clientX,g.current=f.current?.scrollLeft||0,q.target.setPointerCapture?.(q.pointerId)},Z=q=>{if(!p.current||!f.current)return;const V=q.clientX-y.current;f.current.scrollLeft=g.current-V},K=()=>{p.current=!1};return d.jsxs(r3,{className:c,children:[d.jsx(o3,{children:d.jsx(u3,{ref:f,onPointerDown:L,onPointerMove:Z,onPointerUp:K,onPointerLeave:K,"aria-label":"Stories scroller",children:m.map(q=>d.jsxs(s3,{onClick:()=>M(q.id),"aria-label":`Open story ${q.name}`,title:q.name,children:[d.jsx(c3,{$hasNew:q.hasNew,children:d.jsx(f3,{children:d.jsx(d3,{src:q.img,alt:q.name,draggable:!1})})}),d.jsx(h3,{children:q.name})]},q.id))})}),d.jsx(i3,{currentItem:k,isOpen:U,slideIndex:A,setSlideIndex:R,onClose:$,duration:i})]})}const m3=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",detailedDescription:"Collective identity is the shared sense of belonging among individuals who associate themselves with a larger group or community. It is shaped by shared language, culture, traditions, and values that connect people to a collective purpose. Understanding this helps explain how societies maintain unity and continuity over time.",imgSrc:Rn.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",detailedDescription:"This section examines how collective identity emerges from shared experiences, beliefs, and cultural narratives. It plays a crucial role in fostering social solidarity, promoting cooperation, and helping individuals find meaning through group affiliation.",carouselMetaData:[{id:1,type:"img",src:Rn.Slide3},{id:2,type:"gif",src:Rn.Slide10},{id:3,type:"video",src:Rn.Slide11},{id:4,type:"img",src:Rn.Slide6}]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",detailedDescription:"Symbols such as national flags, anthems, and cultural rituals embody the essence of collective identity. These shared symbols reinforce emotional ties, transmit values, and sustain collective memory.",carouselMetaData:[{id:1,type:"img",src:Rn.Slide7},{id:2,type:"gif",src:Rn.Slide10},{id:3,type:"video",src:Rn.Slide11}]},{id:5,type:"videoClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",detailedDescription:"This video highlights real-world scenarios where collective identity has influenced social and political movements.",videoClipSrc:ym.videoClip1},{id:6,type:"infografic",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities.",imgSrc:Rn.Slide5},{id:7,type:"videoClip",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities.",videoClipSrc:ym.videoClip1}],g3=S.div`
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
`;function v3(){return x.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),d.jsxs(d.Fragment,{children:[d.jsx(p3,{items:G4,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),d.jsx(g3,{children:d.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:m3.map(a=>d.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?d.jsx(X5,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?d.jsx(O4,{data:a}):a.type==="videoClip"?d.jsx(q4,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x3=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,u,o)=>o?o.toUpperCase():u.toLowerCase()),Tm=a=>{const i=x3(a);return i.charAt(0).toUpperCase()+i.slice(1)},rg=(...a)=>a.filter((i,u,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===u).join(" ").trim(),b3=a=>{for(const i in a)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=x.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:c="",children:f,iconNode:p,...y},g)=>x.createElement("svg",{ref:g,...S3,width:i,height:i,stroke:a,strokeWidth:o?Number(u)*24/Number(i):u,className:rg("lucide",c),...!f&&!b3(y)&&{"aria-hidden":"true"},...y},[...p.map(([m,b])=>x.createElement(m,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(a,i)=>{const u=x.forwardRef(({className:o,...c},f)=>x.createElement(w3,{ref:f,iconNode:i,className:rg(`lucide-${y3(Tm(a))}`,`lucide-${a}`,o),...c}));return u.displayName=Tm(a),u};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],j3=dt("arrow-right",E3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],T3=dt("atom",C3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Uo=dt("book-open",z3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],A3=dt("bookmark",R3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],M3=dt("calculator",O3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],og=dt("check",N3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],_f=dt("chevron-left",_3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],D3=dt("chevron-right",k3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],L3=dt("code",B3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],zm=dt("flask-conical",$3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Rm=dt("globe",U3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Y3=dt("grid-3x3",H3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],G3=dt("languages",q3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],bo=dt("lock",X3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Q3=dt("search",V3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Rc=dt("x",Z3),K3=S.div`
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
`,J3=S.div`
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
`,F3=S.img`
  height: 70%;
  width: 70%;
  object-fit: cover; /* ensures it fills the circle */
  border-radius: 50%; /* ensures circular clipping */
`,W3=S.div`
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
`,I3=S.h1`
  margin: 0 0 8px 0;
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 900;
  background: #374151;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,P3=S.p`
  margin: 6px 0 0 0;
  color: #6b7280;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
`,e6=S.button`
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
`;function t6({onStart:a}){return d.jsxs(K3,{children:[d.jsx(J3,{children:d.jsx(F3,{src:"https://th.bing.com/th/id/OIP.uSFDPMfkxTDmRZEJvOe_lAHaHa?w=108&h=108&c=1&bgcl=e66538&r=0&o=7&dpr=1.1&pid=ImgRC&rm=3",alt:"PW Logo"})}),d.jsxs(W3,{children:[d.jsx(I3,{children:"Welcome to Pi learn"}),d.jsx(P3,{children:"Your personalized learning journey starts here. Connect with expert teachers and unlock your full potential."})]}),d.jsxs(e6,{onClick:a,"aria-label":"Get started",children:["Get Started ",d.jsx(j3,{size:18})]})]})}const n6=S.div`
padding: 35px;
position: relative;
overflow: visible;
`,a6=S.button`
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
`,l6=S.div`
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
`,i6=S.h2`
  margin: 0 0 8px 0;
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 900;
  background: #374151;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,r6=S.p`
  margin: 0;
  color: #64748b;
  font-size: 15px;
  font-weight: 500;
`,o6=S.div`
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
`,u6=S.div`
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
`,s6=S.div`
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
`,c6=S.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,f6=S.li`
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
`,Am=S.li`
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
`;const d6=S.button`
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
`;S(d6)`
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
`;function h6({options:a,value:i,onChange:u,onNext:o}){const f=Oe.useRef(null),p=g=>{const m=a.indexOf(g);if(m===-1)return;const b=f.current.clientHeight/2-48/2;f.current.scrollTo({top:b+m*48,behavior:"smooth"}),u(g),o&&o()},y={height:`calc(50% - ${48/2}px)`};return d.jsx(o6,{children:d.jsxs(u6,{ref:f,children:[d.jsx(s6,{}),d.jsxs(c6,{children:[d.jsx(Am,{$height:y.height}),a.map((g,m)=>d.jsx(f6,{$height:48,$delay:`${m*.02}s`,$isSelected:g===i,onClick:()=>p(g),children:g},g)),d.jsx(Am,{$height:y.height})]})]})})}function p6({grades:a,selectedGrade:i,onSelect:u,onBack:o,onNext:c}){const f=Object.keys(a);return Oe.useEffect(()=>{!i&&f.length>0&&u(f[0])},[i,f,u]),d.jsxs(n6,{children:[d.jsx(a6,{onClick:o,"aria-label":"Go back",children:d.jsx(_f,{size:24})}),d.jsxs(l6,{children:[d.jsx(i6,{children:"Choose your Grade"}),d.jsx(r6,{children:"Swipe or tap to select a grade."})]}),d.jsx(h6,{options:f,value:i||f[0],onChange:u,onNext:c})]})}const m6={English:Uo,Mathematics:M3,Science:zm,Physics:T3,Chemistry:zm,Biology:Rm,"Social Studies":Rm,Hindi:G3,"Computer Science":L3},g6=S.div`
  padding: 3px;
  position: relative;
  overflow: visible;
`,v6=S.button`
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
`,y6=S.div`
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
`,x6=S.h2`
  margin: 0 0 6px 0;
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 900;
  color: #1f2937;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,b6=S.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,S6=S.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
`,w6=S.button`
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
`,E6=S.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,j6=S.span`
  font-weight: 800;
  letter-spacing: -0.01em;
  font-size: 16px;
  color: #1f2937;
`,C6=S.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #f6f7f9;
  border: 1px solid #e5e7eb;
  display: grid;
  place-items: center;
  color: #374151;
`;function T6({grades:a,selectedGrade:i,selectedSubject:u,onSelectSubject:o,onBack:c,onNext:f}){const p=x.useMemo(()=>i&&a?.[i]?.subjects?Object.keys(a[i].subjects):[],[a,i]);x.useEffect(()=>{!u&&p.includes("English")&&o?.("English")},[u,p,o]);const y=g=>{o?.(g),f?.()};return d.jsxs(g6,{children:[d.jsx(v6,{onClick:c,"aria-label":"Go back",children:d.jsx(_f,{size:24})}),d.jsxs(y6,{children:[d.jsx(x6,{children:"Pick a Subject"}),d.jsx(b6,{children:i?`You chose ${i}. Now select a subject.`:"Choose a grade first."})]}),d.jsx(S6,{children:p.map((g,m)=>{const b=m6[g]||Uo,w=u===g||!u&&g==="English";return d.jsxs(w6,{$isSelected:w,$delay:`${m*.03}s`,"aria-pressed":w,onClick:()=>y(g),children:[d.jsxs(E6,{children:[d.jsx(C6,{children:d.jsx(b,{size:18,"aria-hidden":"true"})}),d.jsx(j6,{children:g})]}),d.jsx(D3,{size:18,"aria-hidden":"true"})]},g)})})]})}const z6=S.div`
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

  &:hover {
    background: #f1f5f9;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`,A6=S.div`
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
`,O6=S.h2`
  margin: 0 0 6px 0;
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 900;
  color: #1f2937;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto,
    sans-serif;
`,M6=S.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,N6=S.div`
  position: relative;
  margin-bottom: 10px;
`,_6=S(Q3)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
`,k6=S.input`
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
  &::placeholder {
    color: #9ca3af;
  }
`,D6=S.div`
  display: flex;
  gap: 12px;
  padding: 2px 0 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,B6=$n`
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

  &:hover {
    transform: translateY(-4px) scale(1.012);
  }
  &:active {
    transform: translateY(-1px) scale(0.99);
  }
  &:focus-visible {
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.28);
  }
`,$6=S.div`
  position: absolute;
  inset: 0;
  background: #e5e7eb;
  display: grid;
  place-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background: #f9fafb;
  }
`,U6=S.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #10b981;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);
  z-index: 10;
`;function H6({grades:a,selectedGrade:i,selectedSubject:u,selectedTeacher:o,onSelectTeacher:c,onBack:f,onConfirm:p,autoScrollMs:y=2400}){const[g,m]=x.useState(""),w=(i&&u?a?.[i]?.subjects?.[u]??[]:[]).map(M=>typeof M=="string"?{name:M,img:void 0}:M),T=M=>`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(M)}&backgroundType=gradientLinear&fontFamily=Verdana&bold=true`,A=w.filter(M=>M.name?.toLowerCase().includes(g.toLowerCase())),R=x.useRef(null),k=x.useRef(!1),U=x.useRef(0);return x.useEffect(()=>{const M=R.current;if(!M)return;const $=()=>k.current=!0,L=()=>window.setTimeout(()=>k.current=!1,400);return M.addEventListener("touchstart",$,{passive:!0}),M.addEventListener("mousedown",$),M.addEventListener("touchend",L),M.addEventListener("mouseup",L),M.addEventListener("mouseleave",L),()=>{M.removeEventListener("touchstart",$),M.removeEventListener("mousedown",$),M.removeEventListener("touchend",L),M.removeEventListener("mouseup",L),M.removeEventListener("mouseleave",L)}},[]),x.useEffect(()=>{const M=R.current;if(!M||A.length===0)return;const $=Array.from(M.querySelectorAll("[data-card='teacher']"));if($.length===0)return;const L=setInterval(()=>{if(k.current)return;U.current=(U.current+1)%$.length;const Z=$[U.current];Z&&Z.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},Math.max(1200,y));return()=>clearInterval(L)},[A.length,y]),d.jsxs(z6,{children:[d.jsx(R6,{onClick:f,"aria-label":"Go back",children:d.jsx(_f,{size:24})}),d.jsxs(A6,{children:[d.jsx(O6,{children:"Choose Your Teacher"}),d.jsx(M6,{children:u?`${u} • Swipe to explore`:"Pick a subject first."})]}),d.jsxs(N6,{children:[d.jsx(_6,{size:18}),d.jsx(k6,{type:"text",placeholder:"Search teacher name...",value:g,onChange:M=>m(M.target.value),"aria-label":"Search teachers"})]}),d.jsx(D6,{ref:R,children:A.map((M,$)=>{const L=o===M.name,Z=M.img||T(M.name);return d.jsx(L6,{"data-card":"teacher",$isSelected:L,$delay:`${$*.05}s`,"aria-pressed":L,"aria-label":`Choose ${M.name}`,onClick:()=>{c(M.name),setTimeout(()=>p(),100)},children:d.jsxs($6,{children:[d.jsx("img",{src:Z,alt:M.name,loading:"lazy"}),L&&d.jsx(U6,{children:d.jsx(og,{size:14})})]})},M.name)})})]})}const So={"Grade 9":{subjects:{English:[{name:"Priya Sharma",img:ha.Grade9EnglishPriyaShrama},{name:"Vivek Sinha",img:ha.Grade9EnglishVivekSinha}],Mathematics:[{name:"Mandar Borkar",img:ha.Grade9MathMandar},{name:"Neha Gupta",img:ha.Grade9MathNeha}],Science:[{name:"Anjali Mehta",img:"https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop"},{name:"Suresh Iyer",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Pooja Khanna",img:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=300&h=300&fit=crop"}],"Social Studies":[{name:"Siddharth Sir",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop"},{name:"Ananya Bose",img:"https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=300&h=300&fit=crop"},{name:"Harish Nanda",img:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop"}]}},"Grade 10":{subjects:{English:[{name:"Sunita Verma",img:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop"}],Mathematics:[{name:"Rohan Patel",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Priyanka Das",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Sanjay Kulkarni",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}],Science:[{name:"Anjali Mehta",img:"https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop"},{name:"Amit Chakraborty",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Meera Nambiar",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"}],"Social Studies":[{name:"Siddharth Sir",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop"},{name:"Nidhi Arora",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Parth Ghosh",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}],Hindi:[{name:"Kavita Reddy",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Ajay Sharma",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Shalini Tripathi",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"}],"Computer Science":[{name:"Arvind Nair",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Tanvi Kulkarni",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Rohit Menon",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}]}},"Grade 11":{subjects:{English:[{name:"Priya Sharma",img:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop"},{name:"Karan Malhotra",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Physics:[{name:"Nitin Agarwal",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Rachna Bansal",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Vivek Mishra",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Chemistry:[{name:"Sneha Kapoor",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"},{name:"Aditya Mehta",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Nupur Jain",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Biology:[{name:"Siddharth Sir",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop"},{name:"Radhika Sen",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Mathematics:[{name:"Deepak Rao",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Shreya Iyer",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Varun Sethi",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}],"Computer Science":[{name:"Arvind Nair",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}]}},"Grade 12":{subjects:{English:[{name:"Sunita Verma",img:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop"},{name:"Aalok Trivedi",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Garima Singh",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Physics:[{name:"Nitin Agarwal",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Priti Saxena",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Keshav Reddy",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Chemistry:[{name:"Sneha Kapoor",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"},{name:"Rohan Mukherjee",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Farah Qureshi",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Biology:[{name:"Siddharth Sir",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop"},{name:"Neelam Vaidya",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Sameer Kulkarni",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Mathematics:[{name:"Deepak Rao",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Ishita Shah",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Yashwant Kumar",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}],"Computer Science":[{name:"Arvind Nair",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Pallavi Menon",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Siddharth Jain",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}]}}},Pt={bg:"#ffffff",text:"#0f172a",subtext:"#475569",border:"#e5e7eb",card:"#ffffff",soft:"#f3f4f6",soft2:"#f8fafc",focus:"#d1d5db",btn:"#e5e7eb",btnText:"#0f172a"},Y6=K1`
  * { -webkit-tap-highlight-color: transparent; }
  :root {
    color-scheme: light;
  }
  body {
    margin: 0;
    background: ${Pt.bg};
    color: ${Pt.text};
    font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
  }
`,q6=$n`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`,G6=$n`
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: translateX(0); }
`,X6=$n`
  0% { transform: scale(.96); }
  100% { transform: scale(1); }
`,V6=S.div`
  min-height: 90svh;
  display: flex;
  align-items: ${({alignTop:a})=>a?"flex-start":"center"};
  justify-content: center;
  /* a little extra top padding when aligned to top */
  padding: ${({alignTop:a})=>a?"32px 16px 16px":"16px"};
  background: ${Pt.bg};
  animation: ${q6} 0.42s ease-out both;
`,Q6=S.div`
  width: 100%;
  max-width: 720px;
`,Z6=S.div`
  background: ${Pt.card};
  border: ${({step:a})=>a===3?"none":`1px solid ${Pt.border}`};
  border-radius: 16px;
  padding: 16px;
  box-shadow: ${({step:a})=>a===3?"none":"0 8px 24px rgba(0,0,0,0.05)"};
  transition: transform .12s ease;
  animation: ${X6} .18s ease-out both;
`,K6=S.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 12px;
  animation: ${G6} 0.4s ease-out both;
`,J6=S.div`
  height: 8px;
  width: 12px;
  border-radius: 999px;
  background: ${Pt.border};
  transition: width 180ms, background-color 180ms;

  ${({active:a})=>a&&Dn`
      width: 32px;
      background: ${Pt.focus};
    `}
`;function F6(){const a=mf(),[i,u]=x.useState(0),[o,c]=x.useState(""),[f,p]=x.useState(""),[y,g]=x.useState(""),m=b=>{!o||!f||!b||a("/instalearn/teacher",{state:{grade:o,subject:f,teacher:b}})};return d.jsxs(d.Fragment,{children:[d.jsx(Y6,{}),d.jsx(V6,{alignTop:i===3,children:d.jsx(Q6,{children:d.jsxs(Z6,{step:i,children:[d.jsx(K6,{children:[1,2,3].map(b=>d.jsx(J6,{active:i===b},b))}),i===0&&d.jsx(t6,{onStart:()=>u(1),ui:Pt}),i===1&&d.jsx(p6,{ui:Pt,grades:So,selectedGrade:o,onSelect:b=>{c(b),p(""),g("")},onBack:()=>u(0),onNext:()=>o&&u(2)}),i===2&&d.jsx(T6,{ui:Pt,grades:So,selectedGrade:o,selectedSubject:f,onSelectSubject:b=>{p(b),g("")},onBack:()=>u(1),onNext:()=>f&&u(3)}),i===3&&d.jsx(H6,{ui:Pt,grades:So,selectedGrade:o,selectedSubject:f,selectedTeacher:y,onSelectTeacher:g,onBack:()=>u(2),onConfirm:()=>m(y||(o&&f?So[o].subjects[f][0]:""))})]})})})]})}function W6(a){return Me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function ug(a){return Me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function I6(a){return Me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function P6(a){return Me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function e8(a){return Me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(a)}function Om(a){return Me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(a)}function Mm(a){return Me({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function t8(a){return Me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const Nm="studentProfile",st={card:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:14,padding:16,boxShadow:"0 6px 16px rgba(0,0,0,.06)"},row:{display:"flex",alignItems:"center",gap:12},button:{display:"inline-flex",alignItems:"center",gap:8,border:"1px solid #e5e7eb",background:"#fff",padding:"10px 12px",borderRadius:10,fontWeight:700,cursor:"pointer"},primary:{background:"#0ea5e9",color:"#fff",border:"1px solid #0ea5e9"},input:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1.5px solid #e5e7eb",fontSize:14}};function Ac(a=""){const[i="",u=""]=a.split(" ");return(i[0]||"").toUpperCase()+(u[0]||"").toUpperCase()}function n8(){const[a,i]=x.useState({name:"Student Name",email:"student@example.com",avatar:"SN",booksRead:24,hoursSpent:156}),[u,o]=x.useState(!1),[c,f]=x.useState(a);x.useEffect(()=>{try{const g=localStorage.getItem(Nm);if(g){const m=JSON.parse(g);i(b=>({...b,...m})),f(b=>({...b,...m}))}}catch{console.log("error")}},[]);const p=x.useMemo(()=>((u?c.avatar:a.avatar)||Ac(u?c.name:a.name)||Ac(a.name)).slice(0,2).toUpperCase(),[u,c.avatar,c.name,a.avatar,a.name]),y=()=>{const g={...a,name:c.name?.trim()||a.name,email:c.email?.trim()||a.email,avatar:c.avatar?.trim()||Ac(c.name||a.name),booksRead:Number.isFinite(c.booksRead)?c.booksRead:a.booksRead,hoursSpent:Number.isFinite(c.hoursSpent)?c.hoursSpent:a.hoursSpent};i(g),localStorage.setItem(Nm,JSON.stringify(g)),o(!1)};return d.jsx("div",{style:{minHeight:"100dvh",background:"#f8fafc",padding:16,fontFamily:"Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"},children:d.jsxs("div",{style:{maxWidth:720,margin:"0 auto",display:"grid",gap:16},children:[d.jsx("section",{style:st.card,children:d.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[d.jsx("div",{"aria-label":"User avatar",style:{width:84,height:84,borderRadius:"50%",background:"linear-gradient(135deg,#0ea5e9,#22c55e)",color:"#fff",display:"grid",placeItems:"center",fontWeight:900,fontSize:28},children:p||d.jsx(t8,{})}),d.jsxs("div",{style:{flex:1},children:[d.jsx("h1",{style:{margin:0,fontSize:22},children:a.name}),d.jsxs("p",{style:{margin:"6px 0 0 0",color:"#64748b"},children:[d.jsx(e8,{style:{marginRight:6}})," ",a.email]})]}),u?d.jsxs("div",{style:{display:"flex",gap:8},children:[d.jsxs("button",{style:{...st.button,...st.primary},onClick:y,children:[d.jsx(Om,{})," Save"]}),d.jsxs("button",{style:st.button,onClick:()=>{f(a),o(!1)},children:[d.jsx(Mm,{})," Cancel"]})]}):d.jsxs("button",{style:st.button,onClick:()=>o(!0),children:[d.jsx(P6,{})," Edit"]})]})}),d.jsx("section",{style:{...st.card,display:"grid",gap:12},children:d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[d.jsx("div",{style:{...st.card,padding:12},children:d.jsxs("div",{style:st.row,children:[d.jsx(W6,{}),d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:12,color:"#6b7280"},children:"Books Read"}),d.jsx("div",{style:{fontWeight:800,fontSize:18},children:a.booksRead})]})]})}),d.jsx("div",{style:{...st.card,padding:12},children:d.jsxs("div",{style:st.row,children:[d.jsx(I6,{}),d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:12,color:"#6b7280"},children:"Study Hours"}),d.jsx("div",{style:{fontWeight:800,fontSize:18},children:a.hoursSpent})]})]})})]})}),u&&d.jsxs("section",{style:{...st.card,display:"grid",gap:12},"aria-label":"Edit profile form",children:[d.jsxs("label",{style:{display:"grid",gap:6},children:[d.jsx("span",{style:{fontWeight:700},children:"Name"}),d.jsx("input",{style:st.input,value:c.name,onChange:g=>f(m=>({...m,name:g.target.value})),placeholder:"Your full name"})]}),d.jsxs("label",{style:{display:"grid",gap:6},children:[d.jsx("span",{style:{fontWeight:700},children:"Email"}),d.jsx("input",{type:"email",style:st.input,value:c.email,onChange:g=>f(m=>({...m,email:g.target.value})),placeholder:"you@example.com"})]}),d.jsxs("label",{style:{display:"grid",gap:6},children:[d.jsx("span",{style:{fontWeight:700},children:"Avatar Initials"}),d.jsx("input",{style:st.input,value:c.avatar,onChange:g=>f(m=>({...m,avatar:g.target.value.toUpperCase().slice(0,2)})),placeholder:"e.g., SN"})]}),d.jsxs("div",{style:{display:"flex",gap:8},children:[d.jsxs("button",{style:{...st.button,...st.primary},onClick:y,children:[d.jsx(Om,{})," Save"]}),d.jsxs("button",{style:st.button,onClick:()=>{f(a),o(!1)},children:[d.jsx(Mm,{})," Cancel"]})]})]})]})})}const a8=$n`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,l8=$n`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,i8=$n`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,r8=$n`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,o8=S.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,u8=S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Oc=S.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${a8} 20s infinite ease-in-out;

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
`,s8=S.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${l8} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,c8=S.div`
  margin-bottom: 0px;
  position: relative;
`,f8=S.div`
  font-size: 70px;
  animation: ${i8} 2s infinite;
`,d8=S.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,h8=S.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,p8=S.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,m8=S.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${r8} 3s ease-in-out infinite;
`,g8=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Mc=S.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,Nc=S.div`
  font-size:30px;
  margin-bottom: 10px;
`,_c=S.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,v8=S.button`
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
`;function _m(){const[a,i]=x.useState(!1),u=()=>{i(!0),setTimeout(()=>{i(!1)},2e3)};return d.jsxs(o8,{children:[d.jsxs(u8,{children:[d.jsx(Oc,{}),d.jsx(Oc,{}),d.jsx(Oc,{})]}),d.jsxs(s8,{children:[d.jsx(c8,{children:d.jsx(f8,{children:"🚧"})}),d.jsx(d8,{children:"Building Something Amazing"}),d.jsx(h8,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),d.jsx(p8,{children:d.jsx(m8,{})}),d.jsxs(g8,{children:[d.jsxs(Mc,{children:[d.jsx(Nc,{children:"⚡"}),d.jsx(_c,{children:"Lightning Fast"})]}),d.jsxs(Mc,{children:[d.jsx(Nc,{children:"🎨"}),d.jsx(_c,{children:"Beautiful Design"})]}),d.jsxs(Mc,{children:[d.jsx(Nc,{children:"🔒"}),d.jsx(_c,{children:"Secure & Private"})]})]}),d.jsx(v8,{onClick:u,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var kc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var km;function y8(){return km||(km=1,(function(a){(function(){var i={}.hasOwnProperty;function u(){for(var f="",p=0;p<arguments.length;p++){var y=arguments[p];y&&(f=c(f,o(y)))}return f}function o(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return u.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var p="";for(var y in f)i.call(f,y)&&f[y]&&(p=c(p,y));return p}function c(f,p){return p?f?f+" "+p:f+p:f}a.exports?(u.default=u,a.exports=u):window.classNames=u})()})(kc)),kc.exports}var x8=y8();const at=Xi(x8);function uf(){return uf=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},uf.apply(null,arguments)}function sg(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)!==-1)continue;u[o]=a[o]}return u}function Dm(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function b8(a){var i=S8(a,"string");return typeof i=="symbol"?i:String(i)}function S8(a,i){if(typeof a!="object"||a===null)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function w8(a,i,u){var o=x.useRef(a!==void 0),c=x.useState(i),f=c[0],p=c[1],y=a!==void 0,g=o.current;return o.current=y,!y&&g&&f!==i&&p(i),[y?a:f,x.useCallback(function(m){for(var b=arguments.length,w=new Array(b>1?b-1:0),T=1;T<b;T++)w[T-1]=arguments[T];u&&u.apply(void 0,[m].concat(w)),p(m)},[u])]}function cg(a,i){return Object.keys(i).reduce(function(u,o){var c,f=u,p=f[Dm(o)],y=f[o],g=sg(f,[Dm(o),o].map(b8)),m=i[o],b=w8(y,p,a[m]),w=b[0],T=b[1];return uf({},g,(c={},c[o]=w,c[m]=T,c))},a)}function sf(a,i){return sf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,o){return u.__proto__=o,u},sf(a,i)}function E8(a,i){a.prototype=Object.create(i.prototype),a.prototype.constructor=a,sf(a,i)}const j8=["xxl","xl","lg","md","sm","xs"],C8="xs",fg=x.createContext({prefixes:{},breakpoints:j8,minBreakpoint:C8}),{Consumer:q7,Provider:G7}=fg;function Et(a,i){const{prefixes:u}=x.useContext(fg);return a||u[i]||i}function kf(a){return a&&a.ownerDocument||document}function T8(a){var i=kf(a);return i&&i.defaultView||window}function z8(a,i){return T8(a).getComputedStyle(a,i)}var R8=/([A-Z])/g;function A8(a){return a.replace(R8,"-$1").toLowerCase()}var O8=/^ms-/;function wo(a){return A8(a).replace(O8,"-ms-")}var M8=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function N8(a){return!!(a&&M8.test(a))}function _n(a,i){var u="",o="";if(typeof i=="string")return a.style.getPropertyValue(wo(i))||z8(a).getPropertyValue(wo(i));Object.keys(i).forEach(function(c){var f=i[c];!f&&f!==0?a.style.removeProperty(wo(c)):N8(c)?o+=c+"("+f+") ":u+=wo(c)+": "+f+";"}),o&&(u+="transform: "+o+";"),a.style.cssText+=";"+u}var Dc={exports:{}},Bc,Bm;function _8(){if(Bm)return Bc;Bm=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Bc=a,Bc}var Lc,Lm;function k8(){if(Lm)return Lc;Lm=1;var a=_8();function i(){}function u(){}return u.resetWarningCache=i,Lc=function(){function o(p,y,g,m,b,w){if(w!==a){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}o.isRequired=o;function c(){return o}var f={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:c,element:o,elementType:o,instanceOf:c,node:o,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:i};return f.PropTypes=f,f},Lc}var $m;function D8(){return $m||($m=1,Dc.exports=k8()()),Dc.exports}var B8=D8();const $c=Xi(B8),Um={disabled:!1},dg=Oe.createContext(null);var L8=function(i){return i.scrollTop},Ui="unmounted",da="exited",It="entering",On="entered",Gi="exiting",Un=(function(a){E8(i,a);function i(o,c){var f;f=a.call(this,o,c)||this;var p=c,y=p&&!p.isMounting?o.enter:o.appear,g;return f.appearStatus=null,o.in?y?(g=da,f.appearStatus=It):g=On:o.unmountOnExit||o.mountOnEnter?g=Ui:g=da,f.state={status:g},f.nextCallback=null,f}i.getDerivedStateFromProps=function(c,f){var p=c.in;return p&&f.status===Ui?{status:da}:null};var u=i.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(c){var f=null;if(c!==this.props){var p=this.state.status;this.props.in?p!==It&&p!==On&&(f=It):(p===It||p===On)&&(f=Gi)}this.updateStatus(!1,f)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var c=this.props.timeout,f,p,y;return f=p=y=c,c!=null&&typeof c!="number"&&(f=c.exit,p=c.enter,y=c.appear!==void 0?c.appear:p),{exit:f,enter:p,appear:y}},u.updateStatus=function(c,f){if(c===void 0&&(c=!1),f!==null)if(this.cancelNextCallback(),f===It){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:zl.findDOMNode(this);p&&L8(p)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===da&&this.setState({status:Ui})},u.performEnter=function(c){var f=this,p=this.props.enter,y=this.context?this.context.isMounting:c,g=this.props.nodeRef?[y]:[zl.findDOMNode(this),y],m=g[0],b=g[1],w=this.getTimeouts(),T=y?w.appear:w.enter;if(!c&&!p||Um.disabled){this.safeSetState({status:On},function(){f.props.onEntered(m)});return}this.props.onEnter(m,b),this.safeSetState({status:It},function(){f.props.onEntering(m,b),f.onTransitionEnd(T,function(){f.safeSetState({status:On},function(){f.props.onEntered(m,b)})})})},u.performExit=function(){var c=this,f=this.props.exit,p=this.getTimeouts(),y=this.props.nodeRef?void 0:zl.findDOMNode(this);if(!f||Um.disabled){this.safeSetState({status:da},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:Gi},function(){c.props.onExiting(y),c.onTransitionEnd(p.exit,function(){c.safeSetState({status:da},function(){c.props.onExited(y)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(c,f){f=this.setNextCallback(f),this.setState(c,f)},u.setNextCallback=function(c){var f=this,p=!0;return this.nextCallback=function(y){p&&(p=!1,f.nextCallback=null,c(y))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},u.onTransitionEnd=function(c,f){this.setNextCallback(f);var p=this.props.nodeRef?this.props.nodeRef.current:zl.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!p||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var g=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],m=g[0],b=g[1];this.props.addEndListener(m,b)}c!=null&&setTimeout(this.nextCallback,c)},u.render=function(){var c=this.state.status;if(c===Ui)return null;var f=this.props,p=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var y=sg(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Oe.createElement(dg.Provider,{value:null},typeof p=="function"?p(c,y):Oe.cloneElement(Oe.Children.only(p),y))},i})(Oe.Component);Un.contextType=dg;Un.propTypes={};function jl(){}Un.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:jl,onEntering:jl,onEntered:jl,onExit:jl,onExiting:jl,onExited:jl};Un.UNMOUNTED=Ui;Un.EXITED=da;Un.ENTERING=It;Un.ENTERED=On;Un.EXITING=Gi;function $8(a){return a.code==="Escape"||a.keyCode===27}function U8(){const a=x.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Ul(a){if(!a||typeof a=="function")return null;const{major:i}=U8();return i>=19?a.props.ref:a.ref}const Fo=!!(typeof window<"u"&&window.document&&window.document.createElement);var cf=!1,ff=!1;try{var Uc={get passive(){return cf=!0},get once(){return ff=cf=!0}};Fo&&(window.addEventListener("test",Uc,Uc),window.removeEventListener("test",Uc,!0))}catch{}function H8(a,i,u,o){if(o&&typeof o!="boolean"&&!ff){var c=o.once,f=o.capture,p=u;!ff&&c&&(p=u.__once||function y(g){this.removeEventListener(i,y,f),u.call(this,g)},u.__once=p),a.addEventListener(i,p,cf?o:f)}a.addEventListener(i,u,o)}function Y8(a,i,u,o){var c=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(i,u,c),u.__once&&a.removeEventListener(i,u.__once,c)}function Ho(a,i,u,o){return H8(a,i,u,o),function(){Y8(a,i,u,o)}}function q8(a,i,u,o){if(o===void 0&&(o=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(i,u,o),a.dispatchEvent(c)}}function G8(a){var i=_n(a,"transitionDuration")||"",u=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*u}function X8(a,i,u){u===void 0&&(u=5);var o=!1,c=setTimeout(function(){o||q8(a,"transitionend",!0)},i+u),f=Ho(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(c),f()}}function V8(a,i,u,o){u==null&&(u=G8(a)||0);var c=X8(a,u,o),f=Ho(a,"transitionend",i);return function(){c(),f()}}function Hm(a,i){const u=_n(a,i)||"",o=u.indexOf("ms")===-1?1e3:1;return parseFloat(u)*o}function Df(a,i){const u=Hm(a,"transitionDuration"),o=Hm(a,"transitionDelay"),c=V8(a,f=>{f.target===a&&(c(),i(f))},u+o)}function Li(...a){return a.filter(i=>i!=null).reduce((i,u)=>{if(typeof u!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return i===null?u:function(...c){i.apply(this,c),u.apply(this,c)}},null)}function hg(a){a.offsetHeight}const Ym=a=>!a||typeof a=="function"?a:i=>{a.current=i};function Q8(a,i){const u=Ym(a),o=Ym(i);return c=>{u&&u(c),o&&o(c)}}function Z8(a,i){return x.useMemo(()=>Q8(a,i),[a,i])}function K8(a){return a&&"setState"in a?zl.findDOMNode(a):a??null}const Wo=Oe.forwardRef(({onEnter:a,onEntering:i,onEntered:u,onExit:o,onExiting:c,onExited:f,addEndListener:p,children:y,childRef:g,...m},b)=>{const w=x.useRef(null),T=Z8(w,g),A=q=>{T(K8(q))},R=q=>V=>{q&&w.current&&q(w.current,V)},k=x.useCallback(R(a),[a]),U=x.useCallback(R(i),[i]),M=x.useCallback(R(u),[u]),$=x.useCallback(R(o),[o]),L=x.useCallback(R(c),[c]),Z=x.useCallback(R(f),[f]),K=x.useCallback(R(p),[p]);return d.jsx(Un,{ref:b,...m,onEnter:k,onEntered:M,onEntering:U,onExit:$,onExited:Z,onExiting:L,addEndListener:K,nodeRef:w,children:typeof y=="function"?(q,V)=>y(q,{...V,ref:A}):Oe.cloneElement(y,{ref:A})})});Wo.displayName="TransitionWrapper";const J8={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function F8(a,i){const u=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=i[u],c=J8[a];return o+parseInt(_n(i,c[0]),10)+parseInt(_n(i,c[1]),10)}const W8={[da]:"collapse",[Gi]:"collapsing",[It]:"collapsing",[On]:"collapse show"},pg=Oe.forwardRef(({onEnter:a,onEntering:i,onEntered:u,onExit:o,onExiting:c,className:f,children:p,dimension:y="height",in:g=!1,timeout:m=300,mountOnEnter:b=!1,unmountOnExit:w=!1,appear:T=!1,getDimensionValue:A=F8,...R},k)=>{const U=typeof y=="function"?y():y,M=x.useMemo(()=>Li(q=>{q.style[U]="0"},a),[U,a]),$=x.useMemo(()=>Li(q=>{const V=`scroll${U[0].toUpperCase()}${U.slice(1)}`;q.style[U]=`${q[V]}px`},i),[U,i]),L=x.useMemo(()=>Li(q=>{q.style[U]=null},u),[U,u]),Z=x.useMemo(()=>Li(q=>{q.style[U]=`${A(U,q)}px`,hg(q)},o),[o,A,U]),K=x.useMemo(()=>Li(q=>{q.style[U]=null},c),[U,c]);return d.jsx(Wo,{ref:k,addEndListener:Df,...R,"aria-expanded":R.role?g:null,onEnter:M,onEntering:$,onEntered:L,onExit:Z,onExiting:K,childRef:Ul(p),in:g,timeout:m,mountOnEnter:b,unmountOnExit:w,appear:T,children:(q,V)=>Oe.cloneElement(p,{...V,className:at(f,p.props.className,W8[q],U==="width"&&"collapse-horizontal")})})});pg.displayName="Collapse";function I8(a){const i=x.useRef(a);return x.useEffect(()=>{i.current=a},[a]),i}function Io(a){const i=I8(a);return x.useCallback(function(...u){return i.current&&i.current(...u)},[i])}const P8=(a=>x.forwardRef((i,u)=>d.jsx("div",{...i,ref:u,className:at(i.className,a)})));function eS(a){const i=x.useRef(a);return x.useEffect(()=>{i.current=a},[a]),i}function Mn(a){const i=eS(a);return x.useCallback(function(...u){return i.current&&i.current(...u)},[i])}function tS(){const a=x.useRef(!0),i=x.useRef(()=>a.current);return x.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),i.current}function nS(a){const i=x.useRef(null);return x.useEffect(()=>{i.current=a}),i.current}const aS=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",lS=typeof document<"u",qm=lS||aS?x.useLayoutEffect:x.useEffect,iS=["as","disabled"];function rS(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}function oS(a){return!a||a.trim()==="#"}function mg({tagName:a,disabled:i,href:u,target:o,rel:c,role:f,onClick:p,tabIndex:y=0,type:g}){a||(u!=null||o!=null||c!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:g||"button",disabled:i},m];const b=T=>{if((i||a==="a"&&oS(u))&&T.preventDefault(),i){T.stopPropagation();return}p?.(T)},w=T=>{T.key===" "&&(T.preventDefault(),b(T))};return a==="a"&&(u||(u="#"),i&&(u=void 0)),[{role:f??"button",disabled:void 0,tabIndex:i?void 0:y,href:u,target:a==="a"?o:void 0,"aria-disabled":i||void 0,rel:a==="a"?c:void 0,onClick:b,onKeyDown:w},m]}const gg=x.forwardRef((a,i)=>{let{as:u,disabled:o}=a,c=rS(a,iS);const[f,{tagName:p}]=mg(Object.assign({tagName:u,disabled:o},c));return d.jsx(p,Object.assign({},c,f,{ref:i}))});gg.displayName="Button";const uS=["onKeyDown"];function sS(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}function cS(a){return!a||a.trim()==="#"}const vg=x.forwardRef((a,i)=>{let{onKeyDown:u}=a,o=sS(a,uS);const[c]=mg(Object.assign({tagName:"a"},o)),f=Mn(p=>{c.onKeyDown(p),u?.(p)});return cS(o.href)||o.role==="button"?d.jsx("a",Object.assign({ref:i},o,c,{onKeyDown:f})):d.jsx("a",Object.assign({ref:i},o,{onKeyDown:u}))});vg.displayName="Anchor";const fS={[It]:"show",[On]:"show"},yg=x.forwardRef(({className:a,children:i,transitionClasses:u={},onEnter:o,...c},f)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=x.useCallback((g,m)=>{hg(g),o?.(g,m)},[o]);return d.jsx(Wo,{ref:f,addEndListener:Df,...p,onEnter:y,childRef:Ul(i),children:(g,m)=>x.cloneElement(i,{...m,className:at("fade",a,i.props.className,fS[g],u[g])})})});yg.displayName="Fade";const dS={"aria-label":$c.string,onClick:$c.func,variant:$c.oneOf(["white"])},Bf=x.forwardRef(({className:a,variant:i,"aria-label":u="Close",...o},c)=>d.jsx("button",{ref:c,type:"button",className:at("btn-close",i&&`btn-close-${i}`,a),"aria-label":u,...o}));Bf.displayName="CloseButton";Bf.propTypes=dS;const xg=x.createContext(null);xg.displayName="CardHeaderContext";const bg=x.forwardRef(({bsPrefix:a,fluid:i=!1,as:u="div",className:o,...c},f)=>{const p=Et(a,"container"),y=typeof i=="string"?`-${i}`:"-fluid";return d.jsx(u,{ref:f,...c,className:at(o,i?`${p}${y}`:p)})});bg.displayName="Container";var hS=Function.prototype.bind.call(Function.prototype.call,[].slice);function ka(a,i){return hS(a.querySelectorAll(i))}function pS(){const[,a]=x.useReducer(i=>i+1,0);return a}function Gm(a,i){if(a.contains)return a.contains(i);if(a.compareDocumentPosition)return a===i||!!(a.compareDocumentPosition(i)&16)}const Yo=x.createContext(null),Lf=(a,i=null)=>a!=null?String(a):i||null,$f=x.createContext(null);$f.displayName="NavContext";const mS="data-rr-ui-",gS="rrUi";function Po(a){return`${mS}${a}`}function vS(a){return`${gS}${a}`}const Sg=x.createContext(Fo?window:void 0);Sg.Provider;function Uf(){return x.useContext(Sg)}const yS=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",xS=typeof document<"u",bS=xS||yS?x.useLayoutEffect:x.useEffect,Hl=x.createContext(null);Hl.displayName="NavbarContext";const Xm=a=>!a||typeof a=="function"?a:i=>{a.current=i};function SS(a,i){const u=Xm(a),o=Xm(i);return c=>{u&&u(c),o&&o(c)}}function eu(a,i){return x.useMemo(()=>SS(a,i),[a,i])}const wg=x.createContext(null),wS=["as","active","eventKey"];function ES(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}function Eg({key:a,onClick:i,active:u,id:o,role:c,disabled:f}){const p=x.useContext(Yo),y=x.useContext($f),g=x.useContext(wg);let m=u;const b={role:c};if(y){!c&&y.role==="tablist"&&(b.role="tab");const w=y.getControllerId(a??null),T=y.getControlledId(a??null);b[Po("event-key")]=a,b.id=w||o,m=u==null&&a!=null?y.activeKey===a:u,(m||!(g!=null&&g.unmountOnExit)&&!(g!=null&&g.mountOnEnter))&&(b["aria-controls"]=T)}return b.role==="tab"&&(b["aria-selected"]=m,m||(b.tabIndex=-1),f&&(b.tabIndex=-1,b["aria-disabled"]=!0)),b.onClick=Mn(w=>{f||(i?.(w),a!=null&&p&&!w.isPropagationStopped()&&p(a,w))}),[b,{isActive:m}]}const jg=x.forwardRef((a,i)=>{let{as:u=gg,active:o,eventKey:c}=a,f=ES(a,wS);const[p,y]=Eg(Object.assign({key:Lf(c,f.href),active:o},f));return p[Po("active")]=y.isActive,d.jsx(u,Object.assign({},f,p,{ref:i}))});jg.displayName="NavItem";const jS=["as","onSelect","activeKey","role","onKeyDown"];function CS(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}const Vm=()=>{},Qm=Po("event-key"),Cg=x.forwardRef((a,i)=>{let{as:u="div",onSelect:o,activeKey:c,role:f,onKeyDown:p}=a,y=CS(a,jS);const g=pS(),m=x.useRef(!1),b=x.useContext(Yo),w=x.useContext(wg);let T,A;w&&(f=f||"tablist",c=w.activeKey,T=w.getControlledId,A=w.getControllerId);const R=x.useRef(null),k=L=>{const Z=R.current;if(!Z)return null;const K=ka(Z,`[${Qm}]:not([aria-disabled=true])`),q=Z.querySelector("[aria-selected=true]");if(!q||q!==document.activeElement)return null;const V=K.indexOf(q);if(V===-1)return null;let ne=V+L;return ne>=K.length&&(ne=0),ne<0&&(ne=K.length-1),K[ne]},U=(L,Z)=>{L!=null&&(o?.(L,Z),b?.(L,Z))},M=L=>{if(p?.(L),!w)return;let Z;switch(L.key){case"ArrowLeft":case"ArrowUp":Z=k(-1);break;case"ArrowRight":case"ArrowDown":Z=k(1);break;default:return}Z&&(L.preventDefault(),U(Z.dataset[vS("EventKey")]||null,L),m.current=!0,g())};x.useEffect(()=>{if(R.current&&m.current){const L=R.current.querySelector(`[${Qm}][aria-selected=true]`);L?.focus()}m.current=!1});const $=eu(i,R);return d.jsx(Yo.Provider,{value:U,children:d.jsx($f.Provider,{value:{role:f,activeKey:Lf(c),getControlledId:T||Vm,getControllerId:A||Vm},children:d.jsx(u,Object.assign({},y,{onKeyDown:M,ref:$,role:f}))})})});Cg.displayName="Nav";const TS=Object.assign(Cg,{Item:jg});function Hc(a){a===void 0&&(a=kf());try{var i=a.activeElement;return!i||!i.nodeName?null:i}catch{return a.body}}function zS(a){const i=x.useRef(a);return i.current=a,i}function RS(a){const i=zS(a);x.useEffect(()=>()=>i.current(),[])}function AS(a=document){const i=a.defaultView;return Math.abs(i.innerWidth-a.documentElement.clientWidth)}const Zm=Po("modal-open");class Hf{constructor({ownerDocument:i,handleContainerOverflow:u=!0,isRTL:o=!1}={}){this.handleContainerOverflow=u,this.isRTL=o,this.modals=[],this.ownerDocument=i}getScrollbarWidth(){return AS(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(i){}removeModalAttributes(i){}setContainerStyle(i){const u={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();i.style={overflow:c.style.overflow,[o]:c.style[o]},i.scrollBarWidth&&(u[o]=`${parseInt(_n(c,o)||"0",10)+i.scrollBarWidth}px`),c.setAttribute(Zm,""),_n(c,u)}reset(){[...this.modals].forEach(i=>this.remove(i))}removeContainerStyle(i){const u=this.getElement();u.removeAttribute(Zm),Object.assign(u.style,i.style)}add(i){let u=this.modals.indexOf(i);return u!==-1||(u=this.modals.length,this.modals.push(i),this.setModalAttributes(i),u!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),u}remove(i){const u=this.modals.indexOf(i);u!==-1&&(this.modals.splice(u,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(i))}isTopModal(i){return!!this.modals.length&&this.modals[this.modals.length-1]===i}}const Yc=(a,i)=>Fo?a==null?(i||kf()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function OS(a,i){const u=Uf(),[o,c]=x.useState(()=>Yc(a,u?.document));if(!o){const f=Yc(a);f&&c(f)}return x.useEffect(()=>{},[i,o]),x.useEffect(()=>{const f=Yc(a);f!==o&&c(f)},[a,o]),o}function MS({children:a,in:i,onExited:u,mountOnEnter:o,unmountOnExit:c}){const f=x.useRef(null),p=x.useRef(i),y=Mn(u);x.useEffect(()=>{i?p.current=!0:y(f.current)},[i,y]);const g=eu(f,Ul(a)),m=x.cloneElement(a,{ref:g});return i?m:c||!p.current&&o?null:m}const NS=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function _S(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}function kS(a){let{onEnter:i,onEntering:u,onEntered:o,onExit:c,onExiting:f,onExited:p,addEndListener:y,children:g}=a,m=_S(a,NS);const b=x.useRef(null),w=eu(b,Ul(g)),T=Z=>K=>{Z&&b.current&&Z(b.current,K)},A=x.useCallback(T(i),[i]),R=x.useCallback(T(u),[u]),k=x.useCallback(T(o),[o]),U=x.useCallback(T(c),[c]),M=x.useCallback(T(f),[f]),$=x.useCallback(T(p),[p]),L=x.useCallback(T(y),[y]);return Object.assign({},m,{nodeRef:b},i&&{onEnter:A},u&&{onEntering:R},o&&{onEntered:k},c&&{onExit:U},f&&{onExiting:M},p&&{onExited:$},y&&{addEndListener:L},{children:typeof g=="function"?(Z,K)=>g(Z,Object.assign({},K,{ref:w})):x.cloneElement(g,{ref:w})})}const DS=["component"];function BS(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}const LS=x.forwardRef((a,i)=>{let{component:u}=a,o=BS(a,DS);const c=kS(o);return d.jsx(u,Object.assign({ref:i},c))});function $S({in:a,onTransition:i}){const u=x.useRef(null),o=x.useRef(!0),c=Mn(i);return qm(()=>{if(!u.current)return;let f=!1;return c({in:a,element:u.current,initial:o.current,isStale:()=>f}),()=>{f=!0}},[a,c]),qm(()=>(o.current=!1,()=>{o.current=!0}),[]),u}function US({children:a,in:i,onExited:u,onEntered:o,transition:c}){const[f,p]=x.useState(!i);i&&f&&p(!1);const y=$S({in:!!i,onTransition:m=>{const b=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(p(!0),u?.(m.element)))};Promise.resolve(c(m)).then(b,w=>{throw m.in||p(!0),w})}}),g=eu(y,Ul(a));return f&&!i?null:x.cloneElement(a,{ref:g})}function Km(a,i,u){return a?d.jsx(LS,Object.assign({},u,{component:a})):i?d.jsx(US,Object.assign({},u,{transition:i})):d.jsx(MS,Object.assign({},u))}const HS=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function YS(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}let qc;function qS(a){return qc||(qc=new Hf({ownerDocument:a?.document})),qc}function GS(a){const i=Uf(),u=a||qS(i),o=x.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>u.add(o.current),remove:()=>u.remove(o.current),isTopModal:()=>u.isTopModal(o.current),setDialogRef:x.useCallback(c=>{o.current.dialog=c},[]),setBackdropRef:x.useCallback(c=>{o.current.backdrop=c},[])})}const Tg=x.forwardRef((a,i)=>{let{show:u=!1,role:o="dialog",className:c,style:f,children:p,backdrop:y=!0,keyboard:g=!0,onBackdropClick:m,onEscapeKeyDown:b,transition:w,runTransition:T,backdropTransition:A,runBackdropTransition:R,autoFocus:k=!0,enforceFocus:U=!0,restoreFocus:M=!0,restoreFocusOptions:$,renderDialog:L,renderBackdrop:Z=Be=>d.jsx("div",Object.assign({},Be)),manager:K,container:q,onShow:V,onHide:ne=()=>{},onExit:W,onExited:ce,onExiting:fe,onEnter:He,onEntering:P,onEntered:ae}=a,ge=YS(a,HS);const D=Uf(),Q=OS(q),I=GS(K),ee=tS(),pe=nS(u),[j,Y]=x.useState(!u),J=x.useRef(null);x.useImperativeHandle(i,()=>I,[I]),Fo&&!pe&&u&&(J.current=Hc(D?.document)),u&&j&&Y(!1);const F=Mn(()=>{if(I.add(),jt.current=Ho(document,"keydown",qe),Ee.current=Ho(document,"focus",()=>setTimeout(ue),!0),V&&V(),k){var Be,$a;const Yl=Hc((Be=($a=I.dialog)==null?void 0:$a.ownerDocument)!=null?Be:D?.document);I.dialog&&Yl&&!Gm(I.dialog,Yl)&&(J.current=Yl,I.dialog.focus())}}),ie=Mn(()=>{if(I.remove(),jt.current==null||jt.current(),Ee.current==null||Ee.current(),M){var Be;(Be=J.current)==null||Be.focus==null||Be.focus($),J.current=null}});x.useEffect(()=>{!u||!Q||F()},[u,Q,F]),x.useEffect(()=>{j&&ie()},[j,ie]),RS(()=>{ie()});const ue=Mn(()=>{if(!U||!ee()||!I.isTopModal())return;const Be=Hc(D?.document);I.dialog&&Be&&!Gm(I.dialog,Be)&&I.dialog.focus()}),ve=Mn(Be=>{Be.target===Be.currentTarget&&(m?.(Be),y===!0&&ne())}),qe=Mn(Be=>{g&&$8(Be)&&I.isTopModal()&&(b?.(Be),Be.defaultPrevented||ne())}),Ee=x.useRef(),jt=x.useRef(),Kt=(...Be)=>{Y(!0),ce?.(...Be)};if(!Q)return null;const ht=Object.assign({role:o,ref:I.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},ge,{style:f,className:c,tabIndex:-1});let La=L?L(ht):d.jsx("div",Object.assign({},ht,{children:x.cloneElement(p,{role:"document"})}));La=Km(w,T,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!u,onExit:W,onExiting:fe,onExited:Kt,onEnter:He,onEntering:P,onEntered:ae,children:La});let Bt=null;return y&&(Bt=Z({ref:I.setBackdropRef,onClick:ve}),Bt=Km(A,R,{in:!!u,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Bt})),d.jsx(d.Fragment,{children:zl.createPortal(d.jsxs(d.Fragment,{children:[Bt,La]}),Q)})});Tg.displayName="Modal";const XS=Object.assign(Tg,{Manager:Hf});function VS(a,i){return a.classList?a.classList.contains(i):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+i+" ")!==-1}function QS(a,i){a.classList?a.classList.add(i):VS(a,i)||(typeof a.className=="string"?a.className=a.className+" "+i:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+i))}function Jm(a,i){return a.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function ZS(a,i){a.classList?a.classList.remove(i):typeof a.className=="string"?a.className=Jm(a.className,i):a.setAttribute("class",Jm(a.className&&a.className.baseVal||"",i))}const Cl={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class zg extends Hf{adjustAndStore(i,u,o){const c=u.style[i];u.dataset[i]=c,_n(u,{[i]:`${parseFloat(_n(u,i))+o}px`})}restore(i,u){const o=u.dataset[i];o!==void 0&&(delete u.dataset[i],_n(u,{[i]:o}))}setContainerStyle(i){super.setContainerStyle(i);const u=this.getElement();if(QS(u,"modal-open"),!i.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";ka(u,Cl.FIXED_CONTENT).forEach(f=>this.adjustAndStore(o,f,i.scrollBarWidth)),ka(u,Cl.STICKY_CONTENT).forEach(f=>this.adjustAndStore(c,f,-i.scrollBarWidth)),ka(u,Cl.NAVBAR_TOGGLER).forEach(f=>this.adjustAndStore(c,f,i.scrollBarWidth))}removeContainerStyle(i){super.removeContainerStyle(i);const u=this.getElement();ZS(u,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";ka(u,Cl.FIXED_CONTENT).forEach(f=>this.restore(o,f)),ka(u,Cl.STICKY_CONTENT).forEach(f=>this.restore(c,f)),ka(u,Cl.NAVBAR_TOGGLER).forEach(f=>this.restore(c,f))}}let Gc;function KS(a){return Gc||(Gc=new zg(a)),Gc}const Rg=x.createContext({onHide(){}}),Ag=x.forwardRef(({closeLabel:a="Close",closeVariant:i,closeButton:u=!1,onHide:o,children:c,...f},p)=>{const y=x.useContext(Rg),g=Io(()=>{y?.onHide(),o?.()});return d.jsxs("div",{ref:p,...f,children:[c,u&&d.jsx(Bf,{"aria-label":a,variant:i,onClick:g})]})});Ag.displayName="AbstractModalHeader";const Og=x.forwardRef(({className:a,bsPrefix:i,as:u="div",...o},c)=>(i=Et(i,"nav-item"),d.jsx(u,{ref:c,className:at(a,i),...o})));Og.displayName="NavItem";const Mg=x.forwardRef(({bsPrefix:a,className:i,as:u=vg,active:o,eventKey:c,disabled:f=!1,...p},y)=>{a=Et(a,"nav-link");const[g,m]=Eg({key:Lf(c,p.href),active:o,disabled:f,...p});return d.jsx(u,{...p,...g,ref:y,disabled:f,className:at(i,a,f&&"disabled",m.isActive&&"active")})});Mg.displayName="NavLink";const Ng=x.forwardRef((a,i)=>{const{as:u="div",bsPrefix:o,variant:c,fill:f=!1,justify:p=!1,navbar:y,navbarScroll:g,className:m,activeKey:b,...w}=cg(a,{activeKey:"onSelect"}),T=Et(o,"nav");let A,R,k=!1;const U=x.useContext(Hl),M=x.useContext(xg);return U?(A=U.bsPrefix,k=y??!0):M&&({cardHeaderBsPrefix:R}=M),d.jsx(TS,{as:u,ref:i,activeKey:b,className:at(m,{[T]:!k,[`${A}-nav`]:k,[`${A}-nav-scroll`]:k&&g,[`${R}-${c}`]:!!R,[`${T}-${c}`]:!!c,[`${T}-fill`]:f,[`${T}-justified`]:p}),...w})});Ng.displayName="Nav";const JS=Object.assign(Ng,{Item:Og,Link:Mg}),_g=x.forwardRef(({bsPrefix:a,className:i,as:u,...o},c)=>{a=Et(a,"navbar-brand");const f=u||(o.href?"a":"span");return d.jsx(f,{...o,ref:c,className:at(i,a)})});_g.displayName="NavbarBrand";const kg=x.forwardRef(({children:a,bsPrefix:i,...u},o)=>{i=Et(i,"navbar-collapse");const c=x.useContext(Hl);return d.jsx(pg,{in:!!(c&&c.expanded),...u,children:d.jsx("div",{ref:o,className:i,children:a})})});kg.displayName="NavbarCollapse";const Dg=x.forwardRef(({bsPrefix:a,className:i,children:u,label:o="Toggle navigation",as:c="button",onClick:f,...p},y)=>{a=Et(a,"navbar-toggler");const{onToggle:g,expanded:m}=x.useContext(Hl)||{},b=Io(w=>{f&&f(w),g&&g()});return c==="button"&&(p.type="button"),d.jsx(c,{...p,ref:y,onClick:b,"aria-label":o,className:at(i,a,!m&&"collapsed"),children:u||d.jsx("span",{className:`${a}-icon`})})});Dg.displayName="NavbarToggle";const df=new WeakMap,Fm=(a,i)=>{if(!a||!i)return;const u=df.get(i)||new Map;df.set(i,u);let o=u.get(a);return o||(o=i.matchMedia(a),o.refCount=0,u.set(o.media,o)),o};function FS(a,i=typeof window>"u"?void 0:window){const u=Fm(a,i),[o,c]=x.useState(()=>u?u.matches:!1);return bS(()=>{let f=Fm(a,i);if(!f)return c(!1);let p=df.get(i);const y=()=>{c(f.matches)};return f.refCount++,f.addListener(y),y(),()=>{f.removeListener(y),f.refCount--,f.refCount<=0&&p?.delete(f.media),f=void 0}},[a]),o}function WS(a){const i=Object.keys(a);function u(y,g){return y===g?g:y?`${y} and ${g}`:g}function o(y){return i[Math.min(i.indexOf(y)+1,i.length-1)]}function c(y){const g=o(y);let m=a[g];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function f(y){let g=a[y];return typeof g=="number"&&(g=`${g}px`),`(min-width: ${g})`}function p(y,g,m){let b;typeof y=="object"?(b=y,m=g,g=!0):(g=g||!0,b={[y]:g});let w=x.useMemo(()=>Object.entries(b).reduce((T,[A,R])=>((R==="up"||R===!0)&&(T=u(T,f(A))),(R==="down"||R===!0)&&(T=u(T,c(A))),T),""),[JSON.stringify(b)]);return FS(w,m)}return p}const IS=WS({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Bg=x.forwardRef(({className:a,bsPrefix:i,as:u="div",...o},c)=>(i=Et(i,"offcanvas-body"),d.jsx(u,{ref:c,className:at(a,i),...o})));Bg.displayName="OffcanvasBody";const PS={[It]:"show",[On]:"show"},Lg=x.forwardRef(({bsPrefix:a,className:i,children:u,in:o=!1,mountOnEnter:c=!1,unmountOnExit:f=!1,appear:p=!1,...y},g)=>(a=Et(a,"offcanvas"),d.jsx(Wo,{ref:g,addEndListener:Df,in:o,mountOnEnter:c,unmountOnExit:f,appear:p,...y,childRef:Ul(u),children:(m,b)=>x.cloneElement(u,{...b,className:at(i,u.props.className,(m===It||m===Gi)&&`${a}-toggling`,PS[m])})})));Lg.displayName="OffcanvasToggling";const $g=x.forwardRef(({bsPrefix:a,className:i,closeLabel:u="Close",closeButton:o=!1,...c},f)=>(a=Et(a,"offcanvas-header"),d.jsx(Ag,{ref:f,...c,className:at(i,a),closeLabel:u,closeButton:o})));$g.displayName="OffcanvasHeader";const ew=P8("h5"),Ug=x.forwardRef(({className:a,bsPrefix:i,as:u=ew,...o},c)=>(i=Et(i,"offcanvas-title"),d.jsx(u,{ref:c,className:at(a,i),...o})));Ug.displayName="OffcanvasTitle";function tw(a){return d.jsx(Lg,{...a})}function nw(a){return d.jsx(yg,{...a})}const Hg=x.forwardRef(({bsPrefix:a,className:i,children:u,"aria-labelledby":o,placement:c="start",responsive:f,show:p=!1,backdrop:y=!0,keyboard:g=!0,scroll:m=!1,onEscapeKeyDown:b,onShow:w,onHide:T,container:A,autoFocus:R=!0,enforceFocus:k=!0,restoreFocus:U=!0,restoreFocusOptions:M,onEntered:$,onExit:L,onExiting:Z,onEnter:K,onEntering:q,onExited:V,backdropClassName:ne,manager:W,renderStaticNode:ce=!1,...fe},He)=>{const P=x.useRef();a=Et(a,"offcanvas");const[ae,ge]=x.useState(!1),D=Io(T),Q=IS(f||"xs","up");x.useEffect(()=>{ge(f?p&&!Q:p)},[p,f,Q]);const I=x.useMemo(()=>({onHide:D}),[D]);function ee(){return W||(m?(P.current||(P.current=new zg({handleContainerOverflow:!1})),P.current):KS())}const pe=(F,...ie)=>{F&&(F.style.visibility="visible"),K?.(F,...ie)},j=(F,...ie)=>{F&&(F.style.visibility=""),V?.(...ie)},Y=x.useCallback(F=>d.jsx("div",{...F,className:at(`${a}-backdrop`,ne)}),[ne,a]),J=F=>d.jsx("div",{...F,...fe,className:at(i,f?`${a}-${f}`:a,`${a}-${c}`),"aria-labelledby":o,children:u});return d.jsxs(d.Fragment,{children:[!ae&&(f||ce)&&J({}),d.jsx(Rg.Provider,{value:I,children:d.jsx(XS,{show:ae,ref:He,backdrop:y,container:A,keyboard:g,autoFocus:R,enforceFocus:k&&!m,restoreFocus:U,restoreFocusOptions:M,onEscapeKeyDown:b,onShow:w,onHide:D,onEnter:pe,onEntering:q,onEntered:$,onExit:L,onExiting:Z,onExited:j,manager:ee(),transition:tw,backdropTransition:nw,renderBackdrop:Y,renderDialog:J})})]})});Hg.displayName="Offcanvas";const aw=Object.assign(Hg,{Body:Bg,Header:$g,Title:Ug}),Yg=x.forwardRef(({onHide:a,...i},u)=>{const o=x.useContext(Hl),c=Io(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return d.jsx(aw,{ref:u,show:!!(o!=null&&o.expanded),...i,renderStaticNode:!0,onHide:c})});Yg.displayName="NavbarOffcanvas";const qg=x.forwardRef(({className:a,bsPrefix:i,as:u="span",...o},c)=>(i=Et(i,"navbar-text"),d.jsx(u,{ref:c,className:at(a,i),...o})));qg.displayName="NavbarText";const Gg=x.forwardRef((a,i)=>{const{bsPrefix:u,expand:o=!0,variant:c="light",bg:f,fixed:p,sticky:y,className:g,as:m="nav",expanded:b,onToggle:w,onSelect:T,collapseOnSelect:A=!1,...R}=cg(a,{expanded:"onToggle"}),k=Et(u,"navbar"),U=x.useCallback((...L)=>{T?.(...L),A&&b&&w?.(!1)},[T,A,b,w]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let M=`${k}-expand`;typeof o=="string"&&(M=`${M}-${o}`);const $=x.useMemo(()=>({onToggle:()=>w?.(!b),bsPrefix:k,expanded:!!b,expand:o}),[k,b,o,w]);return d.jsx(Hl.Provider,{value:$,children:d.jsx(Yo.Provider,{value:U,children:d.jsx(m,{ref:i,...R,className:at(g,k,o&&M,c&&`${k}-${c}`,f&&`bg-${f}`,y&&`sticky-${y}`,p&&`fixed-${p}`)})})})});Gg.displayName="Navbar";const lw=Object.assign(Gg,{Brand:_g,Collapse:kg,Offcanvas:Yg,Text:qg,Toggle:Dg});function iw(a){return Me({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}function Xg(a){return Me({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M236,172a40,40,0,0,1-80,0V76H100V200a12,12,0,0,1-24,0V76H72a36,36,0,0,0-36,36,12,12,0,0,1-24,0A60.07,60.07,0,0,1,72,52H224a12,12,0,0,1,0,24H180v96a16,16,0,0,0,32,0,12,12,0,0,1,24,0Z"},child:[]}]})(a)}const rw=S(lw)`
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
`,ow=S.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,uw=S.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,sw=S.div`
  justify-self: center;
`,cw=S.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,fw=S.button`
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
`,dw=S(Ll)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px; /* space between icon and text */
`,hw=S(Xg)`
  border-radius: 5px;
  background-color: black;
  width: 35px;
  height: 30px;
  flex: 0 0 28px;
  color: white; /* keep high contrast; adjust to your brand */
  padding: 1px;
`,pw=S.div`
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
`;function mw(){const a=()=>{console.log("Toggled theme")};return d.jsx("div",{className:"topbar-wrapper",children:d.jsx(rw,{className:"shadow-sm d-lg-none",children:d.jsx(bg,{fluid:!0,className:"px-3",children:d.jsxs(ow,{children:[d.jsx(uw,{children:d.jsxs(dw,{to:"/instalearn/","aria-label":"Go to home",children:[d.jsx("div",{children:d.jsx(hw,{"aria-hidden":"true"})}),d.jsx(pw,{children:"Learn"})]})}),d.jsx(sw,{}),d.jsx(cw,{children:d.jsx(fw,{type:"button",onClick:a,"aria-label":"Toggle",children:d.jsx(iw,{size:20})})})]})})})})}const gw=$n`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,vw=S.aside`
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
`,yw=S(Ll)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
  gap: 5px;
`,xw=S(Xg)`
  border-radius: 5px;
  background-color: black;
  width: 35px;
  height: 30px;
  flex: 0 0 28px;
  color: white; /* keep high contrast; adjust to your brand */
  padding: 1px;
`,bw=S.div`
  font-size: 28px;
  font-family: "BBH Sans Hegarty", sans-serif;
  font-weight: 700;
  color: black;
  letter-spacing: 0.2px;
  line-height: 1;
`,Sw=S.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,ww=Dn`
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
    animation: ${gw} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,Xc=S(Ll)`
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

  ${a=>a.$active&&ww}
`,Ew=S.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,Vc=S.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,Qc=S.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function jw(){const{pathname:a}=Ln(),i=[{to:"/instalearn/",icon:d.jsx(P1,{}),label:"Home"},{to:"/instalearn/teacher",icon:d.jsx(ug,{}),label:"Teacher"},{to:"/instalearn/library",icon:d.jsx(I1,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:d.jsx(n5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:d.jsx(eg,{}),label:"Profile"}];return d.jsxs(vw,{children:[d.jsxs(yw,{to:"/instalearn/",children:[d.jsx("div",{children:d.jsx(xw,{"aria-hidden":"true"})}),d.jsx(bw,{children:"Learn"})]}),d.jsxs(Sw,{children:[i.slice(0,-1).map(u=>d.jsxs(Xc,{to:u.to,$active:a===u.to,children:[d.jsx(Vc,{children:u.icon}),d.jsx(Qc,{children:u.label}),u.hasNotification]},u.to)),d.jsxs(Xc,{to:i[i.length-1].to,$active:a===i[i.length-1].to,children:[d.jsx(Vc,{children:i[i.length-1].icon}),d.jsx(Qc,{children:i[i.length-1].label})]})]}),d.jsx(Ew,{children:d.jsxs(Xc,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[d.jsx(Vc,{children:d.jsx(a5,{})}),d.jsx(Qc,{children:"More"})]})})]})}const Cw=S.div`
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
`,Tw=S.div`
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
`,Vg=S.div`
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
`,zw=S.div`
  position: relative;
  flex-shrink: 0;
`,Rw=S.div`
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
  
  ${Vg}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,Aw=S.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,Ow=S.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,Mw=S.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Nw=S.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_w=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,kw=S.div`
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
`,Dw=S.button`
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
`,Bw=S.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,Qg=S.div`
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
`,Lw=S.div`
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
  
  ${Qg}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,$w=S.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,Uw=S.div`
  flex: 1;
`,Hw=S.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Yw=S.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,qw=S.span`
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
`;const Gw=({sidebarWidth:a=360})=>{const i={username:"demo_user",name:"Demo User",initials:"DU"},u=[{icon:vm,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:l5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:e5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return d.jsxs(Cw,{children:[d.jsx(Tw,{children:d.jsxs(Vg,{$width:a,children:[d.jsxs(zw,{children:[d.jsx(Rw,{$width:a,children:i.initials}),d.jsx(Aw,{$width:a})]}),d.jsxs(Ow,{$width:a,children:[d.jsx(Mw,{$width:a,children:i.username}),d.jsx(Nw,{$width:a,children:i.name})]})]})}),d.jsxs(_w,{children:[d.jsxs(kw,{$width:a,$iconColor:"#667eea",children:[d.jsx(vm,{}),d.jsx("span",{children:"Highlights"})]}),d.jsx(Dw,{$width:a,children:"See All"})]}),d.jsx(Bw,{$width:a,children:u.map((o,c)=>{const f=o.icon;return d.jsxs(Qg,{$width:a,$glowColor:o.gradient,children:[d.jsx(qw,{$width:a,$bg:o.badgeBg,children:o.badge}),d.jsxs($w,{$width:a,children:[d.jsx(Lw,{$width:a,$gradient:o.gradient,children:d.jsx(f,{})}),d.jsxs(Uw,{children:[d.jsx(Hw,{$width:a,children:o.title}),d.jsx(Yw,{$width:a,children:o.description})]})]})]},c)})})]})};function Xw(){const{pathname:a}=Ln(),i=[["/instalearn/",d.jsx(P1,{})],["/instalearn/teacher",d.jsx(ug,{})],["/instalearn/library",d.jsx(I1,{})],["/instalearn/profile",d.jsx(eg,{})]];return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
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
      `}),d.jsx(JS,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:i.map(([u,o])=>d.jsx(Ll,{to:u,className:`nav-link fs-4 text-white ${a===u?"active":""}`,children:o},u))})]})}const Vw={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:ha.teacherProfilePic,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},Zc="studentProfile",mt=Vw,Qw=S.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,Zw=S.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`,Kw=S.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`,Jw=S.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`,Fw=S.div` position: relative; `,Ww=S.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`,Iw=S.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`,Pw=S.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`,e7=S.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`,Tl=S.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`,t7=S.div` flex: 1; `,n7=S.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`,a7=S.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,l7=S.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`,i7=S.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,r7=S.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `,o7=S.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`,u7=S.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,s7=S.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`,c7=S.div` position: relative; display: inline-block; `,f7=S.div`
  position: absolute; right: 0; margin-top: 0.5rem; min-width: 200px;
  background: #fff; border: 1px solid #e5e7eb; border-radius: 0.5rem;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08); z-index: 10; overflow: hidden;
`,Wm=S.button`
  width: 100%; text-align: left; padding: 0.625rem 0.75rem; background: #fff; border: 0;
  font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; color: #111827;
  &:hover { background: #f9fafb; }
  &[data-danger="true"] { color: #b91c1c; }
`,d7=S.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`,h7=S.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`,p7=S.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`,m7=S.div` margin-bottom: 1.5rem; `,g7=S.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`,v7=S.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`,y7=S.div`
  position: absolute; inset: 0; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px); pointer-events: none;
`,x7=S.div`
  position: relative;
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked:a})=>a?"grayscale(0.8)":"none"};
  opacity: ${({$locked:a})=>a?.6:1};
`,b7=S.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`,S7=S.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
`,w7=S.div` display: flex; border-top: 1px solid #e5e7eb; `,Im=S.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({$active:a})=>a?"#111827":"transparent"};
  color: ${({$active:a})=>a?"#111827":"#9ca3af"};
`,E7=S.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`,j7=S.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked:a})=>a?"blur(2px)":"none"};
  overflow: hidden;
`,C7=S.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`,T7=S.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden:a})=>a?"none":"block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`,Pm=S.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`,e1=S.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`,t1=S.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`,n1=S.h3` margin: 0; font-size: 1rem; font-weight: 700; color: #111827; `,a1=S.button` border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem; `,z7=S.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`,R7=S.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`,A7=S.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`,l1=S.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,i1=S.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`,O7=S.div` padding: 1rem 1.25rem; display: grid; gap: 0.75rem; `,Kc=S.div` display: grid; gap: 0.25rem; `,Jc=S.label` font-size: 0.85rem; color: #374151; `,Fc=S.input`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 0.75rem; font-size: 0.95rem;
  &:focus{ outline:none; border-color:#2563eb; box-shadow:0 0 0 3px rgba(37,99,235,0.15);}
`,M7=S.div` display:flex; justify-content:flex-end; gap:0.5rem; padding:0.75rem 1.25rem 1rem; `;function N7(){x.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=mf(),[i,u]=x.useState(!1),[o,c]=x.useState("basic"),[f,p]=x.useState(!1),[y,g]=x.useState(!1),[m,b]=x.useState(!1),[w,T]=x.useState(!1),[A,R]=x.useState({name:"",email:"",avatar:""}),k=3,U=3,M=`joined:${mt?.id||mt?.name}`;x.useEffect(()=>{const W=localStorage.getItem(M)==="true";g(W);const ce=localStorage.getItem(Zc);if(ce){const fe=JSON.parse(ce);R({name:fe.name||"",email:fe.email||"",avatar:fe.avatar||""})}},[]),x.useEffect(()=>{localStorage.setItem(M,y?"true":"false")},[y,M]),x.useEffect(()=>{if(!m)return;const W=ce=>{const fe=ce.target;fe.closest&&(fe.closest('[aria-haspopup="menu"]')||fe.closest('[role="menu"]'))||b(!1)};return document.addEventListener("click",W),()=>document.removeEventListener("click",W)},[m]);const $=W=>{if(!y&&W>=k){u(!0);return}W===0&&a("/instalearn/library")},L=()=>{y||u(!0)},Z=async()=>{p(!0),await new Promise(W=>setTimeout(W,1200)),p(!1),u(!1),T(!0)},K=()=>{const W={name:A.name?.trim(),email:A.email?.trim(),avatar:A.avatar?.trim(),createdAt:new Date().toISOString(),plan:o,isPro:!0};if(!W.name||!W.email){alert("Please fill Name and Email to continue.");return}localStorage.setItem(Zc,JSON.stringify(W)),g(!0),T(!1)},q=()=>{localStorage.removeItem(M),localStorage.removeItem(Zc),g(!1),b(!1)},V=[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}],ne=y;return d.jsxs(Qw,{children:[d.jsxs(Zw,{children:[d.jsxs(Kw,{children:[d.jsxs(Jw,{children:[d.jsxs(Fw,{children:[d.jsx(Ww,{src:mt.avatar,alt:mt.name}),!y&&d.jsxs(Iw,{"aria-hidden":"true",title:"Pro library locked",children:[d.jsx(bo,{size:12})," LOCKED"]})]}),d.jsxs(Pw,{children:[d.jsxs(Tl,{children:[mt.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(Tl,{children:[mt.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(Tl,{children:[mt.learns," ",d.jsx("span",{children:"learns"})]})]})]}),d.jsxs(t7,{children:[d.jsxs(e7,{children:[d.jsxs(Tl,{children:[mt.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(Tl,{children:[mt.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(Tl,{children:[mt.learns," ",d.jsx("span",{children:"learns"})]})]}),d.jsx(n7,{children:mt.name}),d.jsx(a7,{children:mt.subject}),d.jsx(l7,{children:mt.bio}),d.jsxs(i7,{children:["🎓 ",mt.experience," years experience"]}),d.jsxs(r7,{children:[d.jsx(o7,{onClick:()=>a("/user/profile"),children:"Follow"}),d.jsx(u7,{onClick:L,disabled:f,"data-joined":y,"aria-pressed":y,"aria-label":y?"Joined":"Join",title:y?"You're in!":"Join this teacher",children:y?d.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[d.jsx(og,{size:18})," Joined"]}):f?"Processing…":"Join"}),d.jsxs(c7,{children:[d.jsx(s7,{"aria-haspopup":"menu","aria-expanded":m,"aria-label":"More options",onClick:()=>b(W=>!W),title:"More options",children:"▼"}),m&&d.jsxs(f7,{role:"menu",children:[y&&d.jsxs(Wm,{role:"menuitem","data-danger":"true",onClick:q,title:"Cancel your membership",children:[d.jsx(Rc,{size:16})," Cancel membership"]}),d.jsx(Wm,{role:"menuitem",onClick:()=>b(!1),children:"Close"})]})]})]}),d.jsxs(d7,{hidden:ne,role:"note","aria-live":"polite",children:[d.jsxs(h7,{children:[d.jsx(bo,{size:18})," Pro library locked — get full access to all concepts & posts."]}),d.jsx(p7,{onClick:()=>u(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),d.jsx(m7,{children:d.jsx(g7,{children:mt.bookList.map((W,ce)=>{const fe=!y&&ce>=k;return d.jsxs(v7,{onClick:()=>$(ce),"aria-disabled":fe,title:fe?"Join to unlock":`Open ${W.title}`,children:[d.jsxs(x7,{$locked:fe,children:[d.jsx(b7,{children:d.jsx(Uo,{size:24})}),!y&&fe&&d.jsxs(y7,{"aria-hidden":"true",children:[d.jsx(bo,{size:14,style:{marginRight:6}})," Locked"]})]}),d.jsx(S7,{children:W.title})]},ce)})})})]}),d.jsxs(w7,{children:[d.jsx(Im,{$active:!0,children:d.jsx(Y3,{size:20})}),d.jsx(Im,{children:d.jsx(A3,{size:20})})]}),d.jsx(E7,{"aria-label":"Teacher posts",children:Array(9).fill(null).map((W,ce)=>{const fe=!y&&ce>=U;return d.jsxs(j7,{$locked:fe,"aria-hidden":!1,children:[d.jsx(Uo,{size:24}),fe&&d.jsxs(C7,{children:[d.jsx(bo,{size:16,style:{marginRight:6}})," Join to view"]})]},ce)})}),d.jsx(T7,{hidden:y,onClick:()=>u(!0),"aria-label":"Unlock all posts",children:"Unlock entire library"}),i&&d.jsx(Pm,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:d.jsxs(e1,{children:[d.jsxs(t1,{children:[d.jsx(n1,{id:"pricing-title",children:"Choose your plan"}),d.jsx(a1,{onClick:()=>u(!1),"aria-label":"Close pricing",children:d.jsx(Rc,{size:18})})]}),d.jsx(z7,{children:V.map(W=>d.jsxs(R7,{onClick:()=>c(W.key),$active:o===W.key,"aria-pressed":o===W.key,children:[d.jsx("h4",{children:W.name}),d.jsx("strong",{children:W.price}),d.jsx("p",{children:W.desc})]},W.key))}),d.jsxs(A7,{children:[d.jsx(i1,{onClick:()=>u(!1),children:"Not now"}),d.jsx(l1,{onClick:Z,disabled:f,children:f?"Processing payment…":"Demo Pay"})]})]})}),w&&d.jsx(Pm,{role:"dialog","aria-modal":"true","aria-labelledby":"profile-form-title",children:d.jsxs(e1,{children:[d.jsxs(t1,{children:[d.jsx(n1,{id:"profile-form-title",children:"Create your student profile"}),d.jsx(a1,{onClick:()=>T(!1),"aria-label":"Close profile form",children:d.jsx(Rc,{size:18})})]}),d.jsxs(O7,{children:[d.jsxs(Kc,{children:[d.jsx(Jc,{htmlFor:"pf-name",children:"Full Name"}),d.jsx(Fc,{id:"pf-name",value:A.name,onChange:W=>R(ce=>({...ce,name:W.target.value})),placeholder:"e.g., Priya Sharma"})]}),d.jsxs(Kc,{children:[d.jsx(Jc,{htmlFor:"pf-email",children:"Email"}),d.jsx(Fc,{id:"pf-email",type:"email",value:A.email,onChange:W=>R(ce=>({...ce,email:W.target.value})),placeholder:"you@example.com"})]}),d.jsxs(Kc,{children:[d.jsx(Jc,{htmlFor:"pf-avatar",children:"Avatar initials (optional)"}),d.jsx(Fc,{id:"pf-avatar",value:A.avatar,onChange:W=>R(ce=>({...ce,avatar:W.target.value})),placeholder:"PS"})]})]}),d.jsxs(M7,{children:[d.jsx(i1,{onClick:()=>T(!1),children:"Cancel"}),d.jsx(l1,{onClick:K,children:"Save & Finish"})]})]})})]})}const _7=S.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,k7=S.aside`
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
`,D7=S.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,B7=S.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,L7=S.aside`
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
`,$7=S.div`
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
`,U7=S.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,H7=S.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function Y7(){const[a,i]=x.useState(360),[u,o]=x.useState(!1),c=x.useRef(null),f=350,p=600,y=g=>{g.preventDefault(),o(!0),c.current={startX:g.clientX,startWidth:a}};return x.useEffect(()=>{const g=(w,T,A)=>Math.min(Math.max(w,T),A),m=w=>{if(!u||!c.current)return;const{startX:T,startWidth:A}=c.current,R=T-w.clientX,k=g(A+R,f,p);i(k)},b=()=>{u&&(o(!1),c.current=null)};return u&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",b),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",b),document.body.style.cursor="",document.body.style.userSelect=""}},[u]),d.jsxs(_7,{children:[d.jsx(k7,{children:d.jsx(jw,{})}),d.jsxs(D7,{children:[d.jsxs(B7,{$sidebarWidth:a,$isResizing:u,children:[d.jsx(U7,{children:d.jsx(mw,{})}),d.jsxs(px,{children:[d.jsx(_a,{path:"/instalearn",element:d.jsx(F6,{})}),d.jsx(_a,{path:"/instalearn/teacher",element:d.jsx(N7,{})}),d.jsx(_a,{path:"/instalearn/library",element:d.jsx(v3,{})}),d.jsx(_a,{path:"/instalearn/notifications",element:d.jsx(_m,{})}),d.jsx(_a,{path:"/instalearn/more",element:d.jsx(_m,{})}),d.jsx(_a,{path:"/instalearn/profile",element:d.jsx(n8,{})})]})]}),d.jsxs(L7,{$width:a,$isResizing:u,children:[d.jsx($7,{className:u?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),d.jsx(Gw,{})]})]}),d.jsx(H7,{children:d.jsx(Xw,{})})]})}jy.createRoot(document.getElementById("root")).render(d.jsx(Lx,{children:d.jsx(Y7,{})}));
