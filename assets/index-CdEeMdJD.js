(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function u(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=u(c);fetch(c.href,f)}})();function Xi(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var vc={exports:{}},ki={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function v2(){if(Gp)return ki;Gp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(o,c,f){var p=null;if(f!==void 0&&(p=""+f),c.key!==void 0&&(p=""+c.key),"key"in c){f={};for(var v in c)v!=="key"&&(f[v]=c[v])}else f=c;return c=f.ref,{$$typeof:a,type:o,key:p,ref:c!==void 0?c:null,props:f}}return ki.Fragment=i,ki.jsx=u,ki.jsxs=u,ki}var qp;function y2(){return qp||(qp=1,vc.exports=v2()),vc.exports}var d=y2(),yc={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function x2(){if(Xp)return se;Xp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.iterator;function A(j){return j===null||typeof j!="object"?null:(j=T&&j[T]||j["@@iterator"],typeof j=="function"?j:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,U={};function M(j,Y,J){this.props=j,this.context=Y,this.refs=U,this.updater=J||R}M.prototype.isReactComponent={},M.prototype.setState=function(j,Y){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,Y,"setState")},M.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function $(){}$.prototype=M.prototype;function L(j,Y,J){this.props=j,this.context=Y,this.refs=U,this.updater=J||R}var Z=L.prototype=new $;Z.constructor=L,k(Z,M.prototype),Z.isPureReactComponent=!0;var K=Array.isArray;function G(){}var V={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function W(j,Y,J){var F=J.ref;return{$$typeof:a,type:j,key:Y,ref:F!==void 0?F:null,props:J}}function ce(j,Y){return W(j.type,Y,j.props)}function fe(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function He(j){var Y={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(J){return Y[J]})}var P=/\/+/g;function ae(j,Y){return typeof j=="object"&&j!==null&&j.key!=null?He(""+j.key):Y.toString(36)}function ge(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(G,G):(j.status="pending",j.then(function(Y){j.status==="pending"&&(j.status="fulfilled",j.value=Y)},function(Y){j.status==="pending"&&(j.status="rejected",j.reason=Y)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function D(j,Y,J,F,ie){var ue=typeof j;(ue==="undefined"||ue==="boolean")&&(j=null);var ve=!1;if(j===null)ve=!0;else switch(ue){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(j.$$typeof){case a:case i:ve=!0;break;case b:return ve=j._init,D(ve(j._payload),Y,J,F,ie)}}if(ve)return ie=ie(j),ve=F===""?"."+ae(j,0):F,K(ie)?(J="",ve!=null&&(J=ve.replace(P,"$&/")+"/"),D(ie,Y,J,"",function(Ct){return Ct})):ie!=null&&(fe(ie)&&(ie=ce(ie,J+(ie.key==null||j&&j.key===ie.key?"":(""+ie.key).replace(P,"$&/")+"/")+ve)),Y.push(ie)),1;ve=0;var Ge=F===""?".":F+":";if(K(j))for(var Ee=0;Ee<j.length;Ee++)F=j[Ee],ue=Ge+ae(F,Ee),ve+=D(F,Y,J,ue,ie);else if(Ee=A(j),typeof Ee=="function")for(j=Ee.call(j),Ee=0;!(F=j.next()).done;)F=F.value,ue=Ge+ae(F,Ee++),ve+=D(F,Y,J,ue,ie);else if(ue==="object"){if(typeof j.then=="function")return D(ge(j),Y,J,F,ie);throw Y=String(j),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Q(j,Y,J){if(j==null)return j;var F=[],ie=0;return D(j,F,"","",function(ue){return Y.call(J,ue,ie++)}),F}function I(j){if(j._status===-1){var Y=j._result;Y=Y(),Y.then(function(J){(j._status===0||j._status===-1)&&(j._status=1,j._result=J)},function(J){(j._status===0||j._status===-1)&&(j._status=2,j._result=J)}),j._status===-1&&(j._status=0,j._result=Y)}if(j._status===1)return j._result.default;throw j._result}var ee=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},pe={map:Q,forEach:function(j,Y,J){Q(j,function(){Y.apply(this,arguments)},J)},count:function(j){var Y=0;return Q(j,function(){Y++}),Y},toArray:function(j){return Q(j,function(Y){return Y})||[]},only:function(j){if(!fe(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return se.Activity=w,se.Children=pe,se.Component=M,se.Fragment=u,se.Profiler=c,se.PureComponent=L,se.StrictMode=o,se.Suspense=g,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,se.__COMPILER_RUNTIME={__proto__:null,c:function(j){return V.H.useMemoCache(j)}},se.cache=function(j){return function(){return j.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(j,Y,J){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var F=k({},j.props),ie=j.key;if(Y!=null)for(ue in Y.key!==void 0&&(ie=""+Y.key),Y)!ne.call(Y,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&Y.ref===void 0||(F[ue]=Y[ue]);var ue=arguments.length-2;if(ue===1)F.children=J;else if(1<ue){for(var ve=Array(ue),Ge=0;Ge<ue;Ge++)ve[Ge]=arguments[Ge+2];F.children=ve}return W(j.type,ie,F)},se.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:f,_context:j},j},se.createElement=function(j,Y,J){var F,ie={},ue=null;if(Y!=null)for(F in Y.key!==void 0&&(ue=""+Y.key),Y)ne.call(Y,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ie[F]=Y[F]);var ve=arguments.length-2;if(ve===1)ie.children=J;else if(1<ve){for(var Ge=Array(ve),Ee=0;Ee<ve;Ee++)Ge[Ee]=arguments[Ee+2];ie.children=Ge}if(j&&j.defaultProps)for(F in ve=j.defaultProps,ve)ie[F]===void 0&&(ie[F]=ve[F]);return W(j,ue,ie)},se.createRef=function(){return{current:null}},se.forwardRef=function(j){return{$$typeof:v,render:j}},se.isValidElement=fe,se.lazy=function(j){return{$$typeof:b,_payload:{_status:-1,_result:j},_init:I}},se.memo=function(j,Y){return{$$typeof:m,type:j,compare:Y===void 0?null:Y}},se.startTransition=function(j){var Y=V.T,J={};V.T=J;try{var F=j(),ie=V.S;ie!==null&&ie(J,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(G,ee)}catch(ue){ee(ue)}finally{Y!==null&&J.types!==null&&(Y.types=J.types),V.T=Y}},se.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},se.use=function(j){return V.H.use(j)},se.useActionState=function(j,Y,J){return V.H.useActionState(j,Y,J)},se.useCallback=function(j,Y){return V.H.useCallback(j,Y)},se.useContext=function(j){return V.H.useContext(j)},se.useDebugValue=function(){},se.useDeferredValue=function(j,Y){return V.H.useDeferredValue(j,Y)},se.useEffect=function(j,Y){return V.H.useEffect(j,Y)},se.useEffectEvent=function(j){return V.H.useEffectEvent(j)},se.useId=function(){return V.H.useId()},se.useImperativeHandle=function(j,Y,J){return V.H.useImperativeHandle(j,Y,J)},se.useInsertionEffect=function(j,Y){return V.H.useInsertionEffect(j,Y)},se.useLayoutEffect=function(j,Y){return V.H.useLayoutEffect(j,Y)},se.useMemo=function(j,Y){return V.H.useMemo(j,Y)},se.useOptimistic=function(j,Y){return V.H.useOptimistic(j,Y)},se.useReducer=function(j,Y,J){return V.H.useReducer(j,Y,J)},se.useRef=function(j){return V.H.useRef(j)},se.useState=function(j){return V.H.useState(j)},se.useSyncExternalStore=function(j,Y,J){return V.H.useSyncExternalStore(j,Y,J)},se.useTransition=function(){return V.H.useTransition()},se.version="19.2.0",se}var Vp;function pf(){return Vp||(Vp=1,yc.exports=x2()),yc.exports}var x=pf();const Oe=Xi(x);var xc={exports:{}},Di={},bc={exports:{}},Sc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function b2(){return Qp||(Qp=1,(function(a){function i(D,Q){var I=D.length;D.push(Q);e:for(;0<I;){var ee=I-1>>>1,pe=D[ee];if(0<c(pe,Q))D[ee]=Q,D[I]=pe,I=ee;else break e}}function u(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var Q=D[0],I=D.pop();if(I!==Q){D[0]=I;e:for(var ee=0,pe=D.length,j=pe>>>1;ee<j;){var Y=2*(ee+1)-1,J=D[Y],F=Y+1,ie=D[F];if(0>c(J,I))F<pe&&0>c(ie,J)?(D[ee]=ie,D[F]=I,ee=F):(D[ee]=J,D[Y]=I,ee=Y);else if(F<pe&&0>c(ie,I))D[ee]=ie,D[F]=I,ee=F;else break e}}return Q}function c(D,Q){var I=D.sortIndex-Q.sortIndex;return I!==0?I:D.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var p=Date,v=p.now();a.unstable_now=function(){return p.now()-v}}var g=[],m=[],b=1,w=null,T=3,A=!1,R=!1,k=!1,U=!1,M=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function Z(D){for(var Q=u(m);Q!==null;){if(Q.callback===null)o(m);else if(Q.startTime<=D)o(m),Q.sortIndex=Q.expirationTime,i(g,Q);else break;Q=u(m)}}function K(D){if(k=!1,Z(D),!R)if(u(g)!==null)R=!0,G||(G=!0,He());else{var Q=u(m);Q!==null&&ge(K,Q.startTime-D)}}var G=!1,V=-1,ne=5,W=-1;function ce(){return U?!0:!(a.unstable_now()-W<ne)}function fe(){if(U=!1,G){var D=a.unstable_now();W=D;var Q=!0;try{e:{R=!1,k&&(k=!1,$(V),V=-1),A=!0;var I=T;try{t:{for(Z(D),w=u(g);w!==null&&!(w.expirationTime>D&&ce());){var ee=w.callback;if(typeof ee=="function"){w.callback=null,T=w.priorityLevel;var pe=ee(w.expirationTime<=D);if(D=a.unstable_now(),typeof pe=="function"){w.callback=pe,Z(D),Q=!0;break t}w===u(g)&&o(g),Z(D)}else o(g);w=u(g)}if(w!==null)Q=!0;else{var j=u(m);j!==null&&ge(K,j.startTime-D),Q=!1}}break e}finally{w=null,T=I,A=!1}Q=void 0}}finally{Q?He():G=!1}}}var He;if(typeof L=="function")He=function(){L(fe)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,ae=P.port2;P.port1.onmessage=fe,He=function(){ae.postMessage(null)}}else He=function(){M(fe,0)};function ge(D,Q){V=M(function(){D(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(D){switch(T){case 1:case 2:case 3:var Q=3;break;default:Q=T}var I=T;T=Q;try{return D()}finally{T=I}},a.unstable_requestPaint=function(){U=!0},a.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=T;T=D;try{return Q()}finally{T=I}},a.unstable_scheduleCallback=function(D,Q,I){var ee=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ee+I:ee):I=ee,D){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=I+pe,D={id:b++,callback:Q,priorityLevel:D,startTime:I,expirationTime:pe,sortIndex:-1},I>ee?(D.sortIndex=I,i(m,D),u(g)===null&&D===u(m)&&(k?($(V),V=-1):k=!0,ge(K,I-ee))):(D.sortIndex=pe,i(g,D),R||A||(R=!0,G||(G=!0,He()))),D},a.unstable_shouldYield=ce,a.unstable_wrapCallback=function(D){var Q=T;return function(){var I=T;T=Q;try{return D.apply(this,arguments)}finally{T=I}}}})(Sc)),Sc}var Zp;function S2(){return Zp||(Zp=1,bc.exports=b2()),bc.exports}var wc={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function w2(){if(Kp)return ct;Kp=1;var a=pf();function i(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)m+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,m,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:w==null?null:""+w,children:g,containerInfo:m,implementation:b}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ct.createPortal=function(g,m){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return f(g,m,null,b)},ct.flushSync=function(g){var m=p.T,b=o.p;try{if(p.T=null,o.p=2,g)return g()}finally{p.T=m,o.p=b,o.d.f()}},ct.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(g,m))},ct.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},ct.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var b=m.as,w=v(b,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;b==="style"?o.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:A}):b==="script"&&o.d.X(g,{crossOrigin:w,integrity:T,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ct.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var b=v(m.as,m.crossOrigin);o.d.M(g,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(g)},ct.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var b=m.as,w=v(b,m.crossOrigin);o.d.L(g,b,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ct.preloadModule=function(g,m){if(typeof g=="string")if(m){var b=v(m.as,m.crossOrigin);o.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(g)},ct.requestFormReset=function(g){o.d.r(g)},ct.unstable_batchedUpdates=function(g,m){return g(m)},ct.useFormState=function(g,m,b){return p.H.useFormState(g,m,b)},ct.useFormStatus=function(){return p.H.useHostTransitionStatus()},ct.version="19.2.0",ct}var Jp;function u1(){if(Jp)return wc.exports;Jp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),wc.exports=w2(),wc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function E2(){if(Fp)return Di;Fp=1;var a=S2(),i=pf(),u=u1();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return g(r),e;if(s===l)return g(r),t;s=s.sibling}throw Error(o(188))}if(n.return!==l.return)n=r,l=s;else{for(var h=!1,y=r.child;y;){if(y===n){h=!0,n=r,l=s;break}if(y===l){h=!0,l=r,n=s;break}y=y.sibling}if(!h){for(y=s.child;y;){if(y===n){h=!0,n=s,l=r;break}if(y===l){h=!0,l=s,n=r;break}y=y.sibling}if(!h)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function He(e){return e===null||typeof e!="object"?null:(e=fe&&e[fe]||e["@@iterator"],typeof e=="function"?e:null)}var P=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===P?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case M:return"Profiler";case U:return"StrictMode";case K:return"Suspense";case G:return"SuspenseList";case W:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case L:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var ge=Array.isArray,D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ee=[],pe=-1;function j(e){return{current:e}}function Y(e){0>pe||(e.current=ee[pe],ee[pe]=null,pe--)}function J(e,t){pe++,ee[pe]=e.current,e.current=t}var F=j(null),ie=j(null),ue=j(null),ve=j(null);function Ge(e,t){switch(J(ue,t),J(ie,e),J(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fp(t),e=dp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(F),J(F,e)}function Ee(){Y(F),Y(ie),Y(ue)}function Ct(e){e.memoizedState!==null&&J(ve,e);var t=F.current,n=dp(t,e.type);t!==n&&(J(ie,e),J(F,n))}function Jt(e){ie.current===e&&(Y(F),Y(ie)),ve.current===e&&(Y(ve),Oi._currentValue=I)}var ht,La;function Lt(e){if(ht===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ht=t&&t[1]||"",La=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+La}var Be=!1;function $a(e,t){if(!e||Be)return"";Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(B){var _=B}Reflect.construct(e,[],X)}else{try{X.call()}catch(B){_=B}e.call(X.prototype)}}else{try{throw Error()}catch(B){_=B}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(B){if(B&&_&&typeof B.stack=="string")return[B.stack,_.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),h=s[0],y=s[1];if(h&&y){var E=h.split(`
`),N=y.split(`
`);for(r=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;if(l===E.length||r===N.length)for(l=E.length-1,r=N.length-1;1<=l&&0<=r&&E[l]!==N[r];)r--;for(;1<=l&&0<=r;l--,r--)if(E[l]!==N[r]){if(l!==1||r!==1)do if(l--,r--,0>r||E[l]!==N[r]){var H=`
`+E[l].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=l&&0<=r);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Lt(n):""}function Yl(e,t){switch(e.tag){case 26:case 27:case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return e.child!==t&&t!==null?Lt("Suspense Fallback"):Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return $a(e.type,!1);case 11:return $a(e.type.render,!1);case 1:return $a(e.type,!0);case 31:return Lt("Activity");default:return""}}function Gf(e){try{var t="",n=null;do t+=Yl(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var nu=Object.prototype.hasOwnProperty,au=a.unstable_scheduleCallback,lu=a.unstable_cancelCallback,Jg=a.unstable_shouldYield,Fg=a.unstable_requestPaint,Tt=a.unstable_now,Wg=a.unstable_getCurrentPriorityLevel,qf=a.unstable_ImmediatePriority,Xf=a.unstable_UserBlockingPriority,Ji=a.unstable_NormalPriority,Ig=a.unstable_LowPriority,Vf=a.unstable_IdlePriority,Pg=a.log,ev=a.unstable_setDisableYieldValue,Gl=null,zt=null;function Yn(e){if(typeof Pg=="function"&&ev(e),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(Gl,e)}catch{}}var Rt=Math.clz32?Math.clz32:av,tv=Math.log,nv=Math.LN2;function av(e){return e>>>=0,e===0?32:31-(tv(e)/nv|0)|0}var Fi=256,Wi=262144,Ii=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pi(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var r=0,s=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var y=l&134217727;return y!==0?(l=y&~s,l!==0?r=ma(l):(h&=y,h!==0?r=ma(h):n||(n=y&~e,n!==0&&(r=ma(n))))):(y=l&~s,y!==0?r=ma(y):h!==0?r=ma(h):n||(n=l&~e,n!==0&&(r=ma(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qf(){var e=Ii;return Ii<<=1,(Ii&62914560)===0&&(Ii=4194304),e}function iu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function iv(e,t,n,l,r,s){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,E=e.expirationTimes,N=e.hiddenUpdates;for(n=h&~n;0<n;){var H=31-Rt(n),X=1<<H;y[H]=0,E[H]=-1;var _=N[H];if(_!==null)for(N[H]=null,H=0;H<_.length;H++){var B=_[H];B!==null&&(B.lane&=-536870913)}n&=~X}l!==0&&Zf(e,l,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(h&~t))}function Zf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Rt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Kf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Rt(n),r=1<<l;r&t|e[l]&t&&(e[l]|=t),n&=~r}}function Jf(e,t){var n=t&-t;return n=(n&42)!==0?1:ru(n),(n&(e.suspendedLanes|t))!==0?0:n}function ru(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ou(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ff(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Dp(e.type))}function Wf(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var Gn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Gn,gt="__reactProps$"+Gn,Ua="__reactContainer$"+Gn,uu="__reactEvents$"+Gn,rv="__reactListeners$"+Gn,ov="__reactHandles$"+Gn,If="__reactResources$"+Gn,Vl="__reactMarker$"+Gn;function su(e){delete e[lt],delete e[gt],delete e[uu],delete e[rv],delete e[ov]}function Ha(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ua]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xp(e);e!==null;){if(n=e[lt])return n;e=xp(e)}return t}e=n,n=e.parentNode}return null}function Ya(e){if(e=e[lt]||e[Ua]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ql(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ga(e){var t=e[If];return t||(t=e[If]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Vl]=!0}var Pf=new Set,ed={};function ga(e,t){qa(e,t),qa(e+"Capture",t)}function qa(e,t){for(ed[e]=t,e=0;e<t.length;e++)Pf.add(t[e])}var uv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),td={},nd={};function sv(e){return nu.call(nd,e)?!0:nu.call(td,e)?!1:uv.test(e)?nd[e]=!0:(td[e]=!0,!1)}function er(e,t,n){if(sv(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function tr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ad(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cv(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,s=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(h){n=""+h,s.call(this,h)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cu(e){if(!e._valueTracker){var t=ad(e)?"checked":"value";e._valueTracker=cv(e,t,""+e[t])}}function ld(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=ad(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fv=/[\n"\\]/g;function Ut(e){return e.replace(fv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fu(e,t,n,l,r,s,h,y){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$t(t)):e.value!==""+$t(t)&&(e.value=""+$t(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?du(e,h,$t(t)):n!=null?du(e,h,$t(n)):l!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+$t(y):e.removeAttribute("name")}function id(e,t,n,l,r,s,h,y){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){cu(e);return}n=n!=null?""+$t(n):"",t=t!=null?""+$t(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=y?e.checked:!!l,e.defaultChecked=!!l,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),cu(e)}function du(e,t,n){t==="number"&&nr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Xa(e,t,n,l){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function rd(e,t,n){if(t!=null&&(t=""+$t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$t(n):""}function od(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(ge(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=$t(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),cu(e)}function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ud(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||dv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function sd(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&n[r]!==l&&ud(e,r,l)}else for(var s in t)t.hasOwnProperty(s)&&ud(e,s,t[s])}function hu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ar(e){return pv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var pu=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,Za=null;function cd(e){var t=Ya(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(fu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var r=l[gt]||null;if(!r)throw Error(o(90));fu(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&ld(l)}break e;case"textarea":rd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Xa(e,!!n.multiple,t,!1)}}}var gu=!1;function fd(e,t,n){if(gu)return e(t,n);gu=!0;try{var l=e(t);return l}finally{if(gu=!1,(Qa!==null||Za!==null)&&(Xr(),Qa&&(t=Qa,e=Za,Za=Qa=null,cd(t),e)))for(t=0;t<e.length;t++)cd(e[t])}}function Zl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[gt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=!1;if(hn)try{var Kl={};Object.defineProperty(Kl,"passive",{get:function(){vu=!0}}),window.addEventListener("test",Kl,Kl),window.removeEventListener("test",Kl,Kl)}catch{vu=!1}var qn=null,yu=null,lr=null;function dd(){if(lr)return lr;var e,t=yu,n=t.length,l,r="value"in qn?qn.value:qn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var h=n-e;for(l=1;l<=h&&t[n-l]===r[s-l];l++);return lr=r.slice(e,1<l?1-l:void 0)}function ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rr(){return!0}function hd(){return!1}function vt(e){function t(n,l,r,s,h){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=s,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(s):s[y]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rr:hd,this.isPropagationStopped=hd,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},or=vt(va),Jl=w({},va,{view:0,detail:0}),mv=vt(Jl),xu,bu,Fl,ur=w({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fl&&(Fl&&e.type==="mousemove"?(xu=e.screenX-Fl.screenX,bu=e.screenY-Fl.screenY):bu=xu=0,Fl=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),pd=vt(ur),gv=w({},ur,{dataTransfer:0}),vv=vt(gv),yv=w({},Jl,{relatedTarget:0}),Su=vt(yv),xv=w({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=vt(xv),Sv=w({},va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wv=vt(Sv),Ev=w({},va,{data:0}),md=vt(Ev),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tv[e])?!!t[e]:!1}function wu(){return zv}var Rv=w({},Jl,{key:function(e){if(e.key){var t=jv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Av=vt(Rv),Ov=w({},ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=vt(Ov),Mv=w({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Nv=vt(Mv),_v=w({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),kv=vt(_v),Dv=w({},ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=vt(Dv),Lv=w({},va,{newState:0,oldState:0}),$v=vt(Lv),Uv=[9,13,27,32],Eu=hn&&"CompositionEvent"in window,Wl=null;hn&&"documentMode"in document&&(Wl=document.documentMode);var Hv=hn&&"TextEvent"in window&&!Wl,vd=hn&&(!Eu||Wl&&8<Wl&&11>=Wl),yd=" ",xd=!1;function bd(e,t){switch(e){case"keyup":return Uv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function Yv(e,t){switch(e){case"compositionend":return Sd(t);case"keypress":return t.which!==32?null:(xd=!0,yd);case"textInput":return e=t.data,e===yd&&xd?null:e;default:return null}}function Gv(e,t){if(Ka)return e==="compositionend"||!Eu&&bd(e,t)?(e=dd(),lr=yu=qn=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vd&&t.locale!=="ko"?null:t.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qv[e.type]:t==="textarea"}function Ed(e,t,n,l){Qa?Za?Za.push(l):Za=[l]:Qa=l,t=Wr(t,"onChange"),0<t.length&&(n=new or("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Il=null,Pl=null;function Xv(e){ip(e,0)}function sr(e){var t=Ql(e);if(ld(t))return e}function jd(e,t){if(e==="change")return t}var Cd=!1;if(hn){var ju;if(hn){var Cu="oninput"in document;if(!Cu){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),Cu=typeof Td.oninput=="function"}ju=Cu}else ju=!1;Cd=ju&&(!document.documentMode||9<document.documentMode)}function zd(){Il&&(Il.detachEvent("onpropertychange",Rd),Pl=Il=null)}function Rd(e){if(e.propertyName==="value"&&sr(Pl)){var t=[];Ed(t,Pl,e,mu(e)),fd(Xv,t)}}function Vv(e,t,n){e==="focusin"?(zd(),Il=t,Pl=n,Il.attachEvent("onpropertychange",Rd)):e==="focusout"&&zd()}function Qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sr(Pl)}function Zv(e,t){if(e==="click")return sr(t)}function Kv(e,t){if(e==="input"||e==="change")return sr(t)}function Jv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Jv;function ei(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!nu.call(t,r)||!At(e[r],t[r]))return!1}return!0}function Ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Od(e,t){var n=Ad(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ad(n)}}function Md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=nr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nr(e.document)}return t}function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Fv=hn&&"documentMode"in document&&11>=document.documentMode,Ja=null,zu=null,ti=null,Ru=!1;function _d(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ru||Ja==null||Ja!==nr(l)||(l=Ja,"selectionStart"in l&&Tu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ti&&ei(ti,l)||(ti=l,l=Wr(zu,"onSelect"),0<l.length&&(t=new or("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ja)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fa={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},Au={},kd={};hn&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function xa(e){if(Au[e])return Au[e];if(!Fa[e])return e;var t=Fa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kd)return Au[e]=t[n];return e}var Dd=xa("animationend"),Bd=xa("animationiteration"),Ld=xa("animationstart"),Wv=xa("transitionrun"),Iv=xa("transitionstart"),Pv=xa("transitioncancel"),$d=xa("transitionend"),Ud=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Ft(e,t){Ud.set(e,t),ga(t,[e])}var cr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],Wa=0,Mu=0;function fr(){for(var e=Wa,t=Mu=Wa=0;t<e;){var n=Ht[t];Ht[t++]=null;var l=Ht[t];Ht[t++]=null;var r=Ht[t];Ht[t++]=null;var s=Ht[t];if(Ht[t++]=null,l!==null&&r!==null){var h=l.pending;h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r}s!==0&&Hd(n,r,s)}}function dr(e,t,n,l){Ht[Wa++]=e,Ht[Wa++]=t,Ht[Wa++]=n,Ht[Wa++]=l,Mu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Nu(e,t,n,l){return dr(e,t,n,l),hr(e)}function ba(e,t){return dr(e,null,null,t),hr(e)}function Hd(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,l=s.alternate,l!==null&&(l.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Rt(n),e=s.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=n|536870912),s):null}function hr(e){if(50<Ei)throw Ei=0,Ys=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ia={};function ey(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,l){return new ey(e,t,n,l)}function _u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Yd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pr(e,t,n,l,r,s){var h=0;if(l=e,typeof e=="function")_u(e)&&(h=1);else if(typeof e=="string")h=i2(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case W:return e=Ot(31,n,t,r),e.elementType=W,e.lanes=s,e;case k:return Sa(n.children,r,s,t);case U:h=8,r|=24;break;case M:return e=Ot(12,n,t,r|2),e.elementType=M,e.lanes=s,e;case K:return e=Ot(13,n,t,r),e.elementType=K,e.lanes=s,e;case G:return e=Ot(19,n,t,r),e.elementType=G,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:h=10;break e;case $:h=9;break e;case Z:h=11;break e;case V:h=14;break e;case ne:h=16,l=null;break e}h=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Ot(h,n,t,r),t.elementType=e,t.type=l,t.lanes=s,t}function Sa(e,t,n,l){return e=Ot(7,e,l,t),e.lanes=n,e}function ku(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Gd(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Du(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qd=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var n=qd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Gf(t)},qd.set(e,t),t)}return{value:e,source:t,stack:Gf(t)}}var Pa=[],el=0,mr=null,ni=0,Gt=[],qt=0,Xn=null,nn=1,an="";function mn(e,t){Pa[el++]=ni,Pa[el++]=mr,mr=e,ni=t}function Xd(e,t,n){Gt[qt++]=nn,Gt[qt++]=an,Gt[qt++]=Xn,Xn=e;var l=nn;e=an;var r=32-Rt(l)-1;l&=~(1<<r),n+=1;var s=32-Rt(t)+r;if(30<s){var h=r-r%5;s=(l&(1<<h)-1).toString(32),l>>=h,r-=h,nn=1<<32-Rt(t)+r|n<<r|l,an=s+e}else nn=1<<s|n<<r|l,an=e}function Bu(e){e.return!==null&&(mn(e,1),Xd(e,1,0))}function Lu(e){for(;e===mr;)mr=Pa[--el],Pa[el]=null,ni=Pa[--el],Pa[el]=null;for(;e===Xn;)Xn=Gt[--qt],Gt[qt]=null,an=Gt[--qt],Gt[qt]=null,nn=Gt[--qt],Gt[qt]=null}function Vd(e,t){Gt[qt++]=nn,Gt[qt++]=an,Gt[qt++]=Xn,nn=t.id,an=t.overflow,Xn=e}var it=null,Le=null,we=!1,Vn=null,Xt=!1,$u=Error(o(519));function Qn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ai(Yt(t,e)),$u}function Qd(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[lt]=e,t[gt]=l,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<Ci.length;n++)xe(Ci[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),id(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),od(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||sp(t.textContent,n)?(l.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),l.onScroll!=null&&xe("scroll",t),l.onScrollEnd!=null&&xe("scrollend",t),l.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Qn(e,!0)}function Zd(e){for(it=e.return;it;)switch(it.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:it=it.return}}function tl(e){if(e!==it)return!1;if(!we)return Zd(e),we=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||nc(e.type,e.memoizedProps)),n=!n),n&&Le&&Qn(e),Zd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=yp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=yp(e)}else t===27?(t=Le,ra(e.type)?(e=oc,oc=null,Le=e):Le=t):Le=it?Qt(e.stateNode.nextSibling):null;return!0}function wa(){Le=it=null,we=!1}function Uu(){var e=Vn;return e!==null&&(St===null?St=e:St.push.apply(St,e),Vn=null),e}function ai(e){Vn===null?Vn=[e]:Vn.push(e)}var Hu=j(null),Ea=null,gn=null;function Zn(e,t,n){J(Hu,t._currentValue),t._currentValue=n}function vn(e){e._currentValue=Hu.current,Y(Hu)}function Yu(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Gu(e,t,n,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var h=r.child;s=s.firstContext;e:for(;s!==null;){var y=s;s=r;for(var E=0;E<t.length;E++)if(y.context===t[E]){s.lanes|=n,y=s.alternate,y!==null&&(y.lanes|=n),Yu(s.return,n,e),l||(h=null);break e}s=y.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(o(341));h.lanes|=n,s=h.alternate,s!==null&&(s.lanes|=n),Yu(h,n,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function nl(e,t,n,l){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var y=r.type;At(r.pendingProps.value,h.value)||(e!==null?e.push(y):e=[y])}}else if(r===ve.current){if(h=r.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Oi):e=[Oi])}r=r.return}e!==null&&Gu(t,e,n,l),t.flags|=262144}function gr(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){Ea=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return Kd(Ea,e)}function vr(e,t){return Ea===null&&ja(e),Kd(e,t)}function Kd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(o(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var ty=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ny=a.unstable_scheduleCallback,ay=a.unstable_NormalPriority,Ke={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new ty,data:new Map,refCount:0}}function li(e){e.refCount--,e.refCount===0&&ny(ay,function(){e.controller.abort()})}var ii=null,Xu=0,al=0,ll=null;function ly(e,t){if(ii===null){var n=ii=[];Xu=0,al=Zs(),ll={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Xu++,t.then(Jd,Jd),t}function Jd(){if(--Xu===0&&ii!==null){ll!==null&&(ll.status="fulfilled");var e=ii;ii=null,al=0,ll=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function iy(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),l}var Fd=D.S;D.S=function(e,t){_h=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ly(e,t),Fd!==null&&Fd(e,t)};var Ca=j(null);function Vu(){var e=Ca.current;return e!==null?e:De.pooledCache}function yr(e,t){t===null?J(Ca,Ca.current):J(Ca,t.pool)}function Wd(){var e=Vu();return e===null?null:{parent:Ke._currentValue,pool:e}}var il=Error(o(460)),Qu=Error(o(474)),xr=Error(o(542)),br={then:function(){}};function Id(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,t0(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,t0(e),e}throw za=t,il}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(za=n,il):n}}var za=null;function e0(){if(za===null)throw Error(o(459));var e=za;return za=null,e}function t0(e){if(e===il||e===xr)throw Error(o(483))}var rl=null,ri=0;function Sr(e){var t=ri;return ri+=1,rl===null&&(rl=[]),Pd(rl,e,t)}function oi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wr(e,t){throw t.$$typeof===T?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function n0(e){function t(z,C){if(e){var O=z.deletions;O===null?(z.deletions=[C],z.flags|=16):O.push(C)}}function n(z,C){if(!e)return null;for(;C!==null;)t(z,C),C=C.sibling;return null}function l(z){for(var C=new Map;z!==null;)z.key!==null?C.set(z.key,z):C.set(z.index,z),z=z.sibling;return C}function r(z,C){return z=pn(z,C),z.index=0,z.sibling=null,z}function s(z,C,O){return z.index=O,e?(O=z.alternate,O!==null?(O=O.index,O<C?(z.flags|=67108866,C):O):(z.flags|=67108866,C)):(z.flags|=1048576,C)}function h(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function y(z,C,O,q){return C===null||C.tag!==6?(C=ku(O,z.mode,q),C.return=z,C):(C=r(C,O),C.return=z,C)}function E(z,C,O,q){var re=O.type;return re===k?H(z,C,O.props.children,q,O.key):C!==null&&(C.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ne&&Ta(re)===C.type)?(C=r(C,O.props),oi(C,O),C.return=z,C):(C=pr(O.type,O.key,O.props,null,z.mode,q),oi(C,O),C.return=z,C)}function N(z,C,O,q){return C===null||C.tag!==4||C.stateNode.containerInfo!==O.containerInfo||C.stateNode.implementation!==O.implementation?(C=Du(O,z.mode,q),C.return=z,C):(C=r(C,O.children||[]),C.return=z,C)}function H(z,C,O,q,re){return C===null||C.tag!==7?(C=Sa(O,z.mode,q,re),C.return=z,C):(C=r(C,O),C.return=z,C)}function X(z,C,O){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=ku(""+C,z.mode,O),C.return=z,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case A:return O=pr(C.type,C.key,C.props,null,z.mode,O),oi(O,C),O.return=z,O;case R:return C=Du(C,z.mode,O),C.return=z,C;case ne:return C=Ta(C),X(z,C,O)}if(ge(C)||He(C))return C=Sa(C,z.mode,O,null),C.return=z,C;if(typeof C.then=="function")return X(z,Sr(C),O);if(C.$$typeof===L)return X(z,vr(z,C),O);wr(z,C)}return null}function _(z,C,O,q){var re=C!==null?C.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return re!==null?null:y(z,C,""+O,q);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case A:return O.key===re?E(z,C,O,q):null;case R:return O.key===re?N(z,C,O,q):null;case ne:return O=Ta(O),_(z,C,O,q)}if(ge(O)||He(O))return re!==null?null:H(z,C,O,q,null);if(typeof O.then=="function")return _(z,C,Sr(O),q);if(O.$$typeof===L)return _(z,C,vr(z,O),q);wr(z,O)}return null}function B(z,C,O,q,re){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return z=z.get(O)||null,y(C,z,""+q,re);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case A:return z=z.get(q.key===null?O:q.key)||null,E(C,z,q,re);case R:return z=z.get(q.key===null?O:q.key)||null,N(C,z,q,re);case ne:return q=Ta(q),B(z,C,O,q,re)}if(ge(q)||He(q))return z=z.get(O)||null,H(C,z,q,re,null);if(typeof q.then=="function")return B(z,C,O,Sr(q),re);if(q.$$typeof===L)return B(z,C,O,vr(C,q),re);wr(C,q)}return null}function te(z,C,O,q){for(var re=null,je=null,le=C,he=C=0,Se=null;le!==null&&he<O.length;he++){le.index>he?(Se=le,le=null):Se=le.sibling;var Ce=_(z,le,O[he],q);if(Ce===null){le===null&&(le=Se);break}e&&le&&Ce.alternate===null&&t(z,le),C=s(Ce,C,he),je===null?re=Ce:je.sibling=Ce,je=Ce,le=Se}if(he===O.length)return n(z,le),we&&mn(z,he),re;if(le===null){for(;he<O.length;he++)le=X(z,O[he],q),le!==null&&(C=s(le,C,he),je===null?re=le:je.sibling=le,je=le);return we&&mn(z,he),re}for(le=l(le);he<O.length;he++)Se=B(le,z,he,O[he],q),Se!==null&&(e&&Se.alternate!==null&&le.delete(Se.key===null?he:Se.key),C=s(Se,C,he),je===null?re=Se:je.sibling=Se,je=Se);return e&&le.forEach(function(fa){return t(z,fa)}),we&&mn(z,he),re}function oe(z,C,O,q){if(O==null)throw Error(o(151));for(var re=null,je=null,le=C,he=C=0,Se=null,Ce=O.next();le!==null&&!Ce.done;he++,Ce=O.next()){le.index>he?(Se=le,le=null):Se=le.sibling;var fa=_(z,le,Ce.value,q);if(fa===null){le===null&&(le=Se);break}e&&le&&fa.alternate===null&&t(z,le),C=s(fa,C,he),je===null?re=fa:je.sibling=fa,je=fa,le=Se}if(Ce.done)return n(z,le),we&&mn(z,he),re;if(le===null){for(;!Ce.done;he++,Ce=O.next())Ce=X(z,Ce.value,q),Ce!==null&&(C=s(Ce,C,he),je===null?re=Ce:je.sibling=Ce,je=Ce);return we&&mn(z,he),re}for(le=l(le);!Ce.done;he++,Ce=O.next())Ce=B(le,z,he,Ce.value,q),Ce!==null&&(e&&Ce.alternate!==null&&le.delete(Ce.key===null?he:Ce.key),C=s(Ce,C,he),je===null?re=Ce:je.sibling=Ce,je=Ce);return e&&le.forEach(function(g2){return t(z,g2)}),we&&mn(z,he),re}function ke(z,C,O,q){if(typeof O=="object"&&O!==null&&O.type===k&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case A:e:{for(var re=O.key;C!==null;){if(C.key===re){if(re=O.type,re===k){if(C.tag===7){n(z,C.sibling),q=r(C,O.props.children),q.return=z,z=q;break e}}else if(C.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ne&&Ta(re)===C.type){n(z,C.sibling),q=r(C,O.props),oi(q,O),q.return=z,z=q;break e}n(z,C);break}else t(z,C);C=C.sibling}O.type===k?(q=Sa(O.props.children,z.mode,q,O.key),q.return=z,z=q):(q=pr(O.type,O.key,O.props,null,z.mode,q),oi(q,O),q.return=z,z=q)}return h(z);case R:e:{for(re=O.key;C!==null;){if(C.key===re)if(C.tag===4&&C.stateNode.containerInfo===O.containerInfo&&C.stateNode.implementation===O.implementation){n(z,C.sibling),q=r(C,O.children||[]),q.return=z,z=q;break e}else{n(z,C);break}else t(z,C);C=C.sibling}q=Du(O,z.mode,q),q.return=z,z=q}return h(z);case ne:return O=Ta(O),ke(z,C,O,q)}if(ge(O))return te(z,C,O,q);if(He(O)){if(re=He(O),typeof re!="function")throw Error(o(150));return O=re.call(O),oe(z,C,O,q)}if(typeof O.then=="function")return ke(z,C,Sr(O),q);if(O.$$typeof===L)return ke(z,C,vr(z,O),q);wr(z,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,C!==null&&C.tag===6?(n(z,C.sibling),q=r(C,O),q.return=z,z=q):(n(z,C),q=ku(O,z.mode,q),q.return=z,z=q),h(z)):n(z,C)}return function(z,C,O,q){try{ri=0;var re=ke(z,C,O,q);return rl=null,re}catch(le){if(le===il||le===xr)throw le;var je=Ot(29,le,null,z.mode);return je.lanes=q,je.return=z,je}finally{}}}var Ra=n0(!0),a0=n0(!1),Kn=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Jn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Te&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=hr(e),Hd(e,null,n),t}return dr(e,l,t,n),hr(e)}function ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Kf(e,n)}}function Ju(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=h:s=s.next=h,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Fu=!1;function si(){if(Fu){var e=ll;if(e!==null)throw e}}function ci(e,t,n,l){Fu=!1;var r=e.updateQueue;Kn=!1;var s=r.firstBaseUpdate,h=r.lastBaseUpdate,y=r.shared.pending;if(y!==null){r.shared.pending=null;var E=y,N=E.next;E.next=null,h===null?s=N:h.next=N,h=E;var H=e.alternate;H!==null&&(H=H.updateQueue,y=H.lastBaseUpdate,y!==h&&(y===null?H.firstBaseUpdate=N:y.next=N,H.lastBaseUpdate=E))}if(s!==null){var X=r.baseState;h=0,H=N=E=null,y=s;do{var _=y.lane&-536870913,B=_!==y.lane;if(B?(be&_)===_:(l&_)===_){_!==0&&_===al&&(Fu=!0),H!==null&&(H=H.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var te=e,oe=y;_=t;var ke=n;switch(oe.tag){case 1:if(te=oe.payload,typeof te=="function"){X=te.call(ke,X,_);break e}X=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=oe.payload,_=typeof te=="function"?te.call(ke,X,_):te,_==null)break e;X=w({},X,_);break e;case 2:Kn=!0}}_=y.callback,_!==null&&(e.flags|=64,B&&(e.flags|=8192),B=r.callbacks,B===null?r.callbacks=[_]:B.push(_))}else B={lane:_,tag:y.tag,payload:y.payload,callback:y.callback,next:null},H===null?(N=H=B,E=X):H=H.next=B,h|=_;if(y=y.next,y===null){if(y=r.shared.pending,y===null)break;B=y,y=B.next,B.next=null,r.lastBaseUpdate=B,r.shared.pending=null}}while(!0);H===null&&(E=X),r.baseState=E,r.firstBaseUpdate=N,r.lastBaseUpdate=H,s===null&&(r.shared.lanes=0),ta|=h,e.lanes=h,e.memoizedState=X}}function l0(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function i0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)l0(n[e],t)}var ol=j(null),Er=j(0);function r0(e,t){e=Tn,J(Er,e),J(ol,t),Tn=e|t.baseLanes}function Wu(){J(Er,Tn),J(ol,ol.current)}function Iu(){Tn=Er.current,Y(ol),Y(Er)}var Mt=j(null),Vt=null;function Wn(e){var t=e.alternate;J(Qe,Qe.current&1),J(Mt,e),Vt===null&&(t===null||ol.current!==null||t.memoizedState!==null)&&(Vt=e)}function Pu(e){J(Qe,Qe.current),J(Mt,e),Vt===null&&(Vt=e)}function o0(e){e.tag===22?(J(Qe,Qe.current),J(Mt,e),Vt===null&&(Vt=e)):In()}function In(){J(Qe,Qe.current),J(Mt,Mt.current)}function Nt(e){Y(Mt),Vt===e&&(Vt=null),Y(Qe)}var Qe=j(0);function jr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ic(n)||rc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yn=0,de=null,Ne=null,Je=null,Cr=!1,ul=!1,Aa=!1,Tr=0,fi=0,sl=null,ry=0;function Xe(){throw Error(o(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function ts(e,t,n,l,r,s){return yn=s,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?X0:gs,Aa=!1,s=n(l,r),Aa=!1,ul&&(s=s0(t,n,l,r)),u0(e),s}function u0(e){D.H=pi;var t=Ne!==null&&Ne.next!==null;if(yn=0,Je=Ne=de=null,Cr=!1,fi=0,sl=null,t)throw Error(o(300));e===null||Fe||(e=e.dependencies,e!==null&&gr(e)&&(Fe=!0))}function s0(e,t,n,l){de=e;var r=0;do{if(ul&&(sl=null),fi=0,ul=!1,25<=r)throw Error(o(301));if(r+=1,Je=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=V0,s=t(n,l)}while(ul);return s}function oy(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?di(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(de.flags|=1024),t}function ns(){var e=Tr!==0;return Tr=0,e}function as(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ls(e){if(Cr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Cr=!1}yn=0,Je=Ne=de=null,ul=!1,fi=Tr=0,sl=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?de.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Ne===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Je===null?de.memoizedState:Je.next;if(t!==null)Je=t,Ne=e;else{if(e===null)throw de.alternate===null?Error(o(467)):Error(o(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Je===null?de.memoizedState=Je=e:Je=Je.next=e}return Je}function zr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function di(e){var t=fi;return fi+=1,sl===null&&(sl=[]),e=Pd(sl,e,t),t=de,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?X0:gs),e}function Rr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return di(e);if(e.$$typeof===L)return rt(e)}throw Error(o(438,String(e)))}function is(e){var t=null,n=de.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=de.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zr(),de.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=ce;return t.index++,n}function xn(e,t){return typeof t=="function"?t(e):t}function Ar(e){var t=Ze();return rs(t,Ne,e)}function rs(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var r=e.baseQueue,s=l.pending;if(s!==null){if(r!==null){var h=r.next;r.next=s.next,s.next=h}t.baseQueue=r=s,l.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var y=h=null,E=null,N=t,H=!1;do{var X=N.lane&-536870913;if(X!==N.lane?(be&X)===X:(yn&X)===X){var _=N.revertLane;if(_===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),X===al&&(H=!0);else if((yn&_)===_){N=N.next,_===al&&(H=!0);continue}else X={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},E===null?(y=E=X,h=s):E=E.next=X,de.lanes|=_,ta|=_;X=N.action,Aa&&n(s,X),s=N.hasEagerState?N.eagerState:n(s,X)}else _={lane:X,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},E===null?(y=E=_,h=s):E=E.next=_,de.lanes|=X,ta|=X;N=N.next}while(N!==null&&N!==t);if(E===null?h=s:E.next=y,!At(s,e.memoizedState)&&(Fe=!0,H&&(n=ll,n!==null)))throw n;e.memoizedState=s,e.baseState=h,e.baseQueue=E,l.lastRenderedState=s}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function os(e){var t=Ze(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var h=r=r.next;do s=e(s,h.action),h=h.next;while(h!==r);At(s,t.memoizedState)||(Fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,l]}function c0(e,t,n){var l=de,r=Ze(),s=we;if(s){if(n===void 0)throw Error(o(407));n=n()}else n=t();var h=!At((Ne||r).memoizedState,n);if(h&&(r.memoizedState=n,Fe=!0),r=r.queue,cs(h0.bind(null,l,r,e),[e]),r.getSnapshot!==t||h||Je!==null&&Je.memoizedState.tag&1){if(l.flags|=2048,cl(9,{destroy:void 0},d0.bind(null,l,r,n,t),null),De===null)throw Error(o(349));s||(yn&127)!==0||f0(l,t,n)}return n}function f0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t=zr(),de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function d0(e,t,n,l){t.value=n,t.getSnapshot=l,p0(t)&&m0(e)}function h0(e,t,n){return n(function(){p0(t)&&m0(e)})}function p0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function m0(e){var t=ba(e,2);t!==null&&wt(t,e,2)}function us(e){var t=pt();if(typeof e=="function"){var n=e;if(e=n(),Aa){Yn(!0);try{n()}finally{Yn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:e},t}function g0(e,t,n,l){return e.baseState=n,rs(e,Ne,typeof l=="function"?l:xn)}function uy(e,t,n,l,r){if(Nr(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){s.listeners.push(h)}};D.T!==null?n(!0):s.isTransition=!1,l(s),n=t.pending,n===null?(s.next=t.pending=s,v0(t,s)):(s.next=n.next,t.pending=n.next=s)}}function v0(e,t){var n=t.action,l=t.payload,r=e.state;if(t.isTransition){var s=D.T,h={};D.T=h;try{var y=n(r,l),E=D.S;E!==null&&E(h,y),y0(e,t,y)}catch(N){ss(e,t,N)}finally{s!==null&&h.types!==null&&(s.types=h.types),D.T=s}}else try{s=n(r,l),y0(e,t,s)}catch(N){ss(e,t,N)}}function y0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){x0(e,t,l)},function(l){return ss(e,t,l)}):x0(e,t,n)}function x0(e,t,n){t.status="fulfilled",t.value=n,b0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,v0(e,n)))}function ss(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,b0(t),t=t.next;while(t!==l)}e.action=null}function b0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function S0(e,t){return t}function w0(e,t){if(we){var n=De.formState;if(n!==null){e:{var l=de;if(we){if(Le){t:{for(var r=Le,s=Xt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Qt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Le=Qt(r.nextSibling),l=r.data==="F!";break e}}Qn(l)}l=!1}l&&(t=n[0])}}return n=pt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:S0,lastRenderedState:t},n.queue=l,n=Y0.bind(null,de,l),l.dispatch=n,l=us(!1),s=ms.bind(null,de,!1,l.queue),l=pt(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,n=uy.bind(null,de,r,s,n),r.dispatch=n,l.memoizedState=e,[t,n,!1]}function E0(e){var t=Ze();return j0(t,Ne,e)}function j0(e,t,n){if(t=rs(e,t,S0)[0],e=Ar(xn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=di(t)}catch(h){throw h===il?xr:h}else l=t;t=Ze();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(de.flags|=2048,cl(9,{destroy:void 0},sy.bind(null,r,n),null)),[l,s,e]}function sy(e,t){e.action=t}function C0(e){var t=Ze(),n=Ne;if(n!==null)return j0(t,n,e);Ze(),t=t.memoizedState,n=Ze();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function cl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=de.updateQueue,t===null&&(t=zr(),de.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function T0(){return Ze().memoizedState}function Or(e,t,n,l){var r=pt();de.flags|=e,r.memoizedState=cl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Mr(e,t,n,l){var r=Ze();l=l===void 0?null:l;var s=r.memoizedState.inst;Ne!==null&&l!==null&&es(l,Ne.memoizedState.deps)?r.memoizedState=cl(t,s,n,l):(de.flags|=e,r.memoizedState=cl(1|t,s,n,l))}function z0(e,t){Or(8390656,8,e,t)}function cs(e,t){Mr(2048,8,e,t)}function cy(e){de.flags|=4;var t=de.updateQueue;if(t===null)t=zr(),de.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function R0(e){var t=Ze().memoizedState;return cy({ref:t,nextImpl:e}),function(){if((Te&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function A0(e,t){return Mr(4,2,e,t)}function O0(e,t){return Mr(4,4,e,t)}function M0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function N0(e,t,n){n=n!=null?n.concat([e]):null,Mr(4,4,M0.bind(null,t,e),n)}function fs(){}function _0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&es(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function k0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&es(t,l[1]))return l[0];if(l=e(),Aa){Yn(!0);try{e()}finally{Yn(!1)}}return n.memoizedState=[l,t],l}function ds(e,t,n){return n===void 0||(yn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Dh(),de.lanes|=e,ta|=e,n)}function D0(e,t,n,l){return At(n,t)?n:ol.current!==null?(e=ds(e,n,l),At(e,t)||(Fe=!0),e):(yn&42)===0||(yn&1073741824)!==0&&(be&261930)===0?(Fe=!0,e.memoizedState=n):(e=Dh(),de.lanes|=e,ta|=e,t)}function B0(e,t,n,l,r){var s=Q.p;Q.p=s!==0&&8>s?s:8;var h=D.T,y={};D.T=y,ms(e,!1,t,n);try{var E=r(),N=D.S;if(N!==null&&N(y,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var H=iy(E,l);hi(e,t,H,Dt(e))}else hi(e,t,l,Dt(e))}catch(X){hi(e,t,{then:function(){},status:"rejected",reason:X},Dt())}finally{Q.p=s,h!==null&&y.types!==null&&(h.types=y.types),D.T=h}}function fy(){}function hs(e,t,n,l){if(e.tag!==5)throw Error(o(476));var r=L0(e).queue;B0(e,r,t,I,n===null?fy:function(){return $0(e),n(l)})}function L0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $0(e){var t=L0(e);t.next===null&&(t=e.alternate.memoizedState),hi(e,t.next.queue,{},Dt())}function ps(){return rt(Oi)}function U0(){return Ze().memoizedState}function H0(){return Ze().memoizedState}function dy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Dt();e=Jn(n);var l=Fn(t,e,n);l!==null&&(wt(l,t,n),ui(l,t,n)),t={cache:qu()},e.payload=t;return}t=t.return}}function hy(e,t,n){var l=Dt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Nr(e)?G0(t,n):(n=Nu(e,t,n,l),n!==null&&(wt(n,e,l),q0(n,t,l)))}function Y0(e,t,n){var l=Dt();hi(e,t,n,l)}function hi(e,t,n,l){var r={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nr(e))G0(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var h=t.lastRenderedState,y=s(h,n);if(r.hasEagerState=!0,r.eagerState=y,At(y,h))return dr(e,t,r,0),De===null&&fr(),!1}catch{}finally{}if(n=Nu(e,t,r,l),n!==null)return wt(n,e,l),q0(n,t,l),!0}return!1}function ms(e,t,n,l){if(l={lane:2,revertLane:Zs(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Nr(e)){if(t)throw Error(o(479))}else t=Nu(e,n,l,2),t!==null&&wt(t,e,2)}function Nr(e){var t=e.alternate;return e===de||t!==null&&t===de}function G0(e,t){ul=Cr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function q0(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Kf(e,n)}}var pi={readContext:rt,use:Rr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};pi.useEffectEvent=Xe;var X0={readContext:rt,use:Rr,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:z0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Or(4194308,4,M0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){Or(4,2,e,t)},useMemo:function(e,t){var n=pt();t=t===void 0?null:t;var l=e();if(Aa){Yn(!0);try{e()}finally{Yn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=pt();if(n!==void 0){var r=n(t);if(Aa){Yn(!0);try{n(t)}finally{Yn(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=hy.bind(null,de,e),[l.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:function(e){e=us(e);var t=e.queue,n=Y0.bind(null,de,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:fs,useDeferredValue:function(e,t){var n=pt();return ds(n,e,t)},useTransition:function(){var e=us(!1);return e=B0.bind(null,de,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=de,r=pt();if(we){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),De===null)throw Error(o(349));(be&127)!==0||f0(l,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,z0(h0.bind(null,l,s,e),[e]),l.flags|=2048,cl(9,{destroy:void 0},d0.bind(null,l,s,n,t),null),n},useId:function(){var e=pt(),t=De.identifierPrefix;if(we){var n=an,l=nn;n=(l&~(1<<32-Rt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ry++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ps,useFormState:w0,useActionState:w0,useOptimistic:function(e){var t=pt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ms.bind(null,de,!0,n),n.dispatch=t,[e,t]},useMemoCache:is,useCacheRefresh:function(){return pt().memoizedState=dy.bind(null,de)},useEffectEvent:function(e){var t=pt(),n={impl:e};return t.memoizedState=n,function(){if((Te&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},gs={readContext:rt,use:Rr,useCallback:_0,useContext:rt,useEffect:cs,useImperativeHandle:N0,useInsertionEffect:A0,useLayoutEffect:O0,useMemo:k0,useReducer:Ar,useRef:T0,useState:function(){return Ar(xn)},useDebugValue:fs,useDeferredValue:function(e,t){var n=Ze();return D0(n,Ne.memoizedState,e,t)},useTransition:function(){var e=Ar(xn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:di(e),t]},useSyncExternalStore:c0,useId:U0,useHostTransitionStatus:ps,useFormState:E0,useActionState:E0,useOptimistic:function(e,t){var n=Ze();return g0(n,Ne,e,t)},useMemoCache:is,useCacheRefresh:H0};gs.useEffectEvent=R0;var V0={readContext:rt,use:Rr,useCallback:_0,useContext:rt,useEffect:cs,useImperativeHandle:N0,useInsertionEffect:A0,useLayoutEffect:O0,useMemo:k0,useReducer:os,useRef:T0,useState:function(){return os(xn)},useDebugValue:fs,useDeferredValue:function(e,t){var n=Ze();return Ne===null?ds(n,e,t):D0(n,Ne.memoizedState,e,t)},useTransition:function(){var e=os(xn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:di(e),t]},useSyncExternalStore:c0,useId:U0,useHostTransitionStatus:ps,useFormState:C0,useActionState:C0,useOptimistic:function(e,t){var n=Ze();return Ne!==null?g0(n,Ne,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:is,useCacheRefresh:H0};V0.useEffectEvent=R0;function vs(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Dt(),r=Jn(l);r.payload=t,n!=null&&(r.callback=n),t=Fn(e,r,l),t!==null&&(wt(t,e,l),ui(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Dt(),r=Jn(l);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Fn(e,r,l),t!==null&&(wt(t,e,l),ui(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),l=Jn(n);l.tag=2,t!=null&&(l.callback=t),t=Fn(e,l,n),t!==null&&(wt(t,e,n),ui(t,e,n))}};function Q0(e,t,n,l,r,s,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,h):t.prototype&&t.prototype.isPureReactComponent?!ei(n,l)||!ei(r,s):!0}function Z0(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function Oa(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function K0(e){cr(e)}function J0(e){console.error(e)}function F0(e){cr(e)}function _r(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function W0(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function xs(e,t,n){return n=Jn(n),n.tag=3,n.payload={element:null},n.callback=function(){_r(e,t)},n}function I0(e){return e=Jn(e),e.tag=3,e}function P0(e,t,n,l){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=l.value;e.payload=function(){return r(s)},e.callback=function(){W0(t,n,l)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){W0(t,n,l),typeof r!="function"&&(na===null?na=new Set([this]):na.add(this));var y=l.stack;this.componentDidCatch(l.value,{componentStack:y!==null?y:""})})}function py(e,t,n,l,r){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&nl(t,n,r,!0),n=Mt.current,n!==null){switch(n.tag){case 31:case 13:return Vt===null?Vr():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===br?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Xs(e,l,r)),!1;case 22:return n.flags|=65536,l===br?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Xs(e,l,r)),!1}throw Error(o(435,n.tag))}return Xs(e,l,r),Vr(),!1}if(we)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==$u&&(e=Error(o(422),{cause:l}),ai(Yt(e,n)))):(l!==$u&&(t=Error(o(423),{cause:l}),ai(Yt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Yt(l,n),r=xs(e.stateNode,l,r),Ju(e,r),Ve!==4&&(Ve=2)),!1;var s=Error(o(520),{cause:l});if(s=Yt(s,n),wi===null?wi=[s]:wi.push(s),Ve!==4&&(Ve=2),t===null)return!0;l=Yt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=xs(n.stateNode,l,e),Ju(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(na===null||!na.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=I0(r),P0(r,e,n,l),Ju(n,r),!1}n=n.return}while(n!==null);return!1}var bs=Error(o(461)),Fe=!1;function ot(e,t,n,l){t.child=e===null?a0(t,null,n,l):Ra(t,e.child,n,l)}function eh(e,t,n,l,r){n=n.render;var s=t.ref;if("ref"in l){var h={};for(var y in l)y!=="ref"&&(h[y]=l[y])}else h=l;return ja(t),l=ts(e,t,n,h,s,r),y=ns(),e!==null&&!Fe?(as(e,t,r),bn(e,t,r)):(we&&y&&Bu(t),t.flags|=1,ot(e,t,l,r),t.child)}function th(e,t,n,l,r){if(e===null){var s=n.type;return typeof s=="function"&&!_u(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,nh(e,t,s,l,r)):(e=pr(n.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Rs(e,r)){var h=s.memoizedProps;if(n=n.compare,n=n!==null?n:ei,n(h,l)&&e.ref===t.ref)return bn(e,t,r)}return t.flags|=1,e=pn(s,l),e.ref=t.ref,e.return=t,t.child=e}function nh(e,t,n,l,r){if(e!==null){var s=e.memoizedProps;if(ei(s,l)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=l=s,Rs(e,r))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,bn(e,t,r)}return Ss(e,t,n,l,r)}function ah(e,t,n,l){var r=l.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~s}else l=0,t.child=null;return lh(e,t,s,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yr(t,s!==null?s.cachePool:null),s!==null?r0(t,s):Wu(),o0(t);else return l=t.lanes=536870912,lh(e,t,s!==null?s.baseLanes|n:n,n,l)}else s!==null?(yr(t,s.cachePool),r0(t,s),In(),t.memoizedState=null):(e!==null&&yr(t,null),Wu(),In());return ot(e,t,r,n),t.child}function mi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lh(e,t,n,l,r){var s=Vu();return s=s===null?null:{parent:Ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&yr(t,null),Wu(),o0(t),e!==null&&nl(e,t,l,!0),t.childLanes=r,null}function kr(e,t){return t=Br({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ih(e,t,n){return Ra(t,e.child,null,n),e=kr(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function my(e,t,n){var l=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(we){if(l.mode==="hidden")return e=kr(t,l),t.lanes=536870912,mi(null,e);if(Pu(t),(e=Le)?(e=vp(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Gd(e),n.return=t,t.child=n,it=t,Le=null)):e=null,e===null)throw Qn(t);return t.lanes=536870912,null}return kr(t,l)}var s=e.memoizedState;if(s!==null){var h=s.dehydrated;if(Pu(t),r)if(t.flags&256)t.flags&=-257,t=ih(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Fe||nl(e,t,n,!1),r=(n&e.childLanes)!==0,Fe||r){if(l=De,l!==null&&(h=Jf(l,n),h!==0&&h!==s.retryLane))throw s.retryLane=h,ba(e,h),wt(l,e,h),bs;Vr(),t=ih(e,t,n)}else e=s.treeContext,Le=Qt(h.nextSibling),it=t,we=!0,Vn=null,Xt=!1,e!==null&&Vd(t,e),t=kr(t,l),t.flags|=4096;return t}return e=pn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Dr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ss(e,t,n,l,r){return ja(t),n=ts(e,t,n,l,void 0,r),l=ns(),e!==null&&!Fe?(as(e,t,r),bn(e,t,r)):(we&&l&&Bu(t),t.flags|=1,ot(e,t,n,r),t.child)}function rh(e,t,n,l,r,s){return ja(t),t.updateQueue=null,n=s0(t,l,n,r),u0(e),l=ns(),e!==null&&!Fe?(as(e,t,s),bn(e,t,s)):(we&&l&&Bu(t),t.flags|=1,ot(e,t,n,s),t.child)}function oh(e,t,n,l,r){if(ja(t),t.stateNode===null){var s=Ia,h=n.contextType;typeof h=="object"&&h!==null&&(s=rt(h)),s=new n(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ys,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},Zu(t),h=n.contextType,s.context=typeof h=="object"&&h!==null?rt(h):Ia,s.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(vs(t,n,h,l),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(h=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),h!==s.state&&ys.enqueueReplaceState(s,s.state,null),ci(t,l,s,r),si(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var y=t.memoizedProps,E=Oa(n,y);s.props=E;var N=s.context,H=n.contextType;h=Ia,typeof H=="object"&&H!==null&&(h=rt(H));var X=n.getDerivedStateFromProps;H=typeof X=="function"||typeof s.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,H||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(y||N!==h)&&Z0(t,s,l,h),Kn=!1;var _=t.memoizedState;s.state=_,ci(t,l,s,r),si(),N=t.memoizedState,y||_!==N||Kn?(typeof X=="function"&&(vs(t,n,X,l),N=t.memoizedState),(E=Kn||Q0(t,n,E,l,_,N,h))?(H||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=N),s.props=l,s.state=N,s.context=h,l=E):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,Ku(e,t),h=t.memoizedProps,H=Oa(n,h),s.props=H,X=t.pendingProps,_=s.context,N=n.contextType,E=Ia,typeof N=="object"&&N!==null&&(E=rt(N)),y=n.getDerivedStateFromProps,(N=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h!==X||_!==E)&&Z0(t,s,l,E),Kn=!1,_=t.memoizedState,s.state=_,ci(t,l,s,r),si();var B=t.memoizedState;h!==X||_!==B||Kn||e!==null&&e.dependencies!==null&&gr(e.dependencies)?(typeof y=="function"&&(vs(t,n,y,l),B=t.memoizedState),(H=Kn||Q0(t,n,H,l,_,B,E)||e!==null&&e.dependencies!==null&&gr(e.dependencies))?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,B,E),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,B,E)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=B),s.props=l,s.state=B,s.context=E,l=H):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,Dr(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=Ra(t,e.child,null,r),t.child=Ra(t,null,n,r)):ot(e,t,n,r),t.memoizedState=s.state,e=t.child):e=bn(e,t,r),e}function uh(e,t,n,l){return wa(),t.flags|=256,ot(e,t,n,l),t.child}var ws={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Es(e){return{baseLanes:e,cachePool:Wd()}}function js(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=kt),e}function sh(e,t,n){var l=t.pendingProps,r=!1,s=(t.flags&128)!==0,h;if((h=s)||(h=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),h&&(r=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(r?Wn(t):In(),(e=Le)?(e=vp(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Gd(e),n.return=t,t.child=n,it=t,Le=null)):e=null,e===null)throw Qn(t);return rc(e)?t.lanes=32:t.lanes=536870912,null}var y=l.children;return l=l.fallback,r?(In(),r=t.mode,y=Br({mode:"hidden",children:y},r),l=Sa(l,r,n,null),y.return=t,l.return=t,y.sibling=l,t.child=y,l=t.child,l.memoizedState=Es(n),l.childLanes=js(e,h,n),t.memoizedState=ws,mi(null,l)):(Wn(t),Cs(t,y))}var E=e.memoizedState;if(E!==null&&(y=E.dehydrated,y!==null)){if(s)t.flags&256?(Wn(t),t.flags&=-257,t=Ts(e,t,n)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,t=null):(In(),y=l.fallback,r=t.mode,l=Br({mode:"visible",children:l.children},r),y=Sa(y,r,n,null),y.flags|=2,l.return=t,y.return=t,l.sibling=y,t.child=l,Ra(t,e.child,null,n),l=t.child,l.memoizedState=Es(n),l.childLanes=js(e,h,n),t.memoizedState=ws,t=mi(null,l));else if(Wn(t),rc(y)){if(h=y.nextSibling&&y.nextSibling.dataset,h)var N=h.dgst;h=N,l=Error(o(419)),l.stack="",l.digest=h,ai({value:l,source:null,stack:null}),t=Ts(e,t,n)}else if(Fe||nl(e,t,n,!1),h=(n&e.childLanes)!==0,Fe||h){if(h=De,h!==null&&(l=Jf(h,n),l!==0&&l!==E.retryLane))throw E.retryLane=l,ba(e,l),wt(h,e,l),bs;ic(y)||Vr(),t=Ts(e,t,n)}else ic(y)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Le=Qt(y.nextSibling),it=t,we=!0,Vn=null,Xt=!1,e!==null&&Vd(t,e),t=Cs(t,l.children),t.flags|=4096);return t}return r?(In(),y=l.fallback,r=t.mode,E=e.child,N=E.sibling,l=pn(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,N!==null?y=pn(N,y):(y=Sa(y,r,n,null),y.flags|=2),y.return=t,l.return=t,l.sibling=y,t.child=l,mi(null,l),l=t.child,y=e.child.memoizedState,y===null?y=Es(n):(r=y.cachePool,r!==null?(E=Ke._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=Wd(),y={baseLanes:y.baseLanes|n,cachePool:r}),l.memoizedState=y,l.childLanes=js(e,h,n),t.memoizedState=ws,mi(e.child,l)):(Wn(t),n=e.child,e=n.sibling,n=pn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function Cs(e,t){return t=Br({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Br(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Ts(e,t,n){return Ra(t,e.child,null,n),e=Cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ch(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Yu(e.return,t,n)}function zs(e,t,n,l,r,s){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r,treeForkCount:s}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=n,h.tailMode=r,h.treeForkCount=s)}function fh(e,t,n){var l=t.pendingProps,r=l.revealOrder,s=l.tail;l=l.children;var h=Qe.current,y=(h&2)!==0;if(y?(h=h&1|2,t.flags|=128):h&=1,J(Qe,h),ot(e,t,l,n),l=we?ni:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ch(e,n,t);else if(e.tag===19)ch(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&jr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),zs(t,!1,r,n,s,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&jr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}zs(t,!0,n,null,s,l);break;case"together":zs(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ta|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(nl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&gr(e)))}function gy(e,t,n){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),Zn(t,Ke,e.memoizedState.cache),wa();break;case 27:case 5:Ct(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:Zn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Pu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?sh(e,t,n):(Wn(t),e=bn(e,t,n),e!==null?e.sibling:null);Wn(t);break;case 19:var r=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(nl(e,t,n,!1),l=(n&t.childLanes)!==0),r){if(l)return fh(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(Qe,Qe.current),l)break;return null;case 22:return t.lanes=0,ah(e,t,n,t.pendingProps);case 24:Zn(t,Ke,e.memoizedState.cache)}return bn(e,t,n)}function dh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!Rs(e,n)&&(t.flags&128)===0)return Fe=!1,gy(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,we&&(t.flags&1048576)!==0&&Xd(t,ni,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")_u(e)?(l=Oa(e,l),t.tag=1,t=oh(null,t,e,l,n)):(t.tag=0,t=Ss(null,t,e,l,n));else{if(e!=null){var r=e.$$typeof;if(r===Z){t.tag=11,t=eh(null,t,e,l,n);break e}else if(r===V){t.tag=14,t=th(null,t,e,l,n);break e}}throw t=ae(e)||e,Error(o(306,t,""))}}return t;case 0:return Ss(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,r=Oa(l,t.pendingProps),oh(e,t,l,r,n);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var s=t.memoizedState;r=s.element,Ku(e,t),ci(t,l,null,n);var h=t.memoizedState;if(l=h.cache,Zn(t,Ke,l),l!==s.cache&&Gu(t,[Ke],n,!0),si(),l=h.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=uh(e,t,l,n);break e}else if(l!==r){r=Yt(Error(o(424)),t),ai(r),t=uh(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Qt(e.firstChild),it=t,we=!0,Vn=null,Xt=!0,n=a0(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(wa(),l===r){t=bn(e,t,n);break e}ot(e,t,l,n)}t=t.child}return t;case 26:return Dr(e,t),e===null?(n=Ep(t.type,null,t.pendingProps,null))?t.memoizedState=n:we||(n=t.type,e=t.pendingProps,l=Ir(ue.current).createElement(n),l[lt]=t,l[gt]=e,ut(l,n,e),et(l),t.stateNode=l):t.memoizedState=Ep(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ct(t),e===null&&we&&(l=t.stateNode=bp(t.type,t.pendingProps,ue.current),it=t,Xt=!0,r=Le,ra(t.type)?(oc=r,Le=Qt(l.firstChild)):Le=r),ot(e,t,t.pendingProps.children,n),Dr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((r=l=Le)&&(l=Qy(l,t.type,t.pendingProps,Xt),l!==null?(t.stateNode=l,it=t,Le=Qt(l.firstChild),Xt=!1,r=!0):r=!1),r||Qn(t)),Ct(t),r=t.type,s=t.pendingProps,h=e!==null?e.memoizedProps:null,l=s.children,nc(r,s)?l=null:h!==null&&nc(r,h)&&(t.flags|=32),t.memoizedState!==null&&(r=ts(e,t,oy,null,null,n),Oi._currentValue=r),Dr(e,t),ot(e,t,l,n),t.child;case 6:return e===null&&we&&((e=n=Le)&&(n=Zy(n,t.pendingProps,Xt),n!==null?(t.stateNode=n,it=t,Le=null,e=!0):e=!1),e||Qn(t)),null;case 13:return sh(e,t,n);case 4:return Ge(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ra(t,null,l,n):ot(e,t,l,n),t.child;case 11:return eh(e,t,t.type,t.pendingProps,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Zn(t,t.type,l.value),ot(e,t,l.children,n),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,ja(t),r=rt(r),l=l(r),t.flags|=1,ot(e,t,l,n),t.child;case 14:return th(e,t,t.type,t.pendingProps,n);case 15:return nh(e,t,t.type,t.pendingProps,n);case 19:return fh(e,t,n);case 31:return my(e,t,n);case 22:return ah(e,t,n,t.pendingProps);case 24:return ja(t),l=rt(Ke),e===null?(r=Vu(),r===null&&(r=De,s=qu(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:l,cache:r},Zu(t),Zn(t,Ke,r)):((e.lanes&n)!==0&&(Ku(e,t),ci(t,null,null,n),si()),r=e.memoizedState,s=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Zn(t,Ke,l)):(l=s.cache,Zn(t,Ke,l),l!==r.cache&&Gu(t,[Ke],n,!0))),ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Sn(e){e.flags|=4}function As(e,t,n,l,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Uh())e.flags|=8192;else throw za=br,Qu}else e.flags&=-16777217}function hh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rp(t))if(Uh())e.flags|=8192;else throw za=br,Qu}function Lr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Qf():536870912,e.lanes|=t,pl|=t)}function gi(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function vy(e,t,n){var l=t.pendingProps;switch(Lu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return $e(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),vn(Ke),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(tl(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Uu())),$e(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Sn(t),s!==null?($e(t),hh(t,s)):($e(t),As(t,r,null,l,n))):s?s!==e.memoizedState?(Sn(t),$e(t),hh(t,s)):($e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Sn(t),$e(t),As(t,r,e,l,n)),null;case 27:if(Jt(t),n=ue.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return $e(t),null}e=F.current,tl(t)?Qd(t):(e=bp(r,l,n),t.stateNode=e,Sn(t))}return $e(t),null;case 5:if(Jt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return $e(t),null}if(s=F.current,tl(t))Qd(t);else{var h=Ir(ue.current);switch(s){case 1:s=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=h.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?h.createElement(r,{is:l.is}):h.createElement(r)}}s[lt]=t,s[gt]=l;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)s.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=s;e:switch(ut(s,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Sn(t)}}return $e(t),As(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ue.current,tl(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,r=it,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||sp(e.nodeValue,n)),e||Qn(t,!0)}else e=Ir(e).createTextNode(l),e[lt]=t,t.stateNode=e}return $e(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=tl(t),n!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[lt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),e=!1}else n=Uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return $e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=tl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[lt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),r=!1}else r=Uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==r&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lr(t,t.updateQueue),$e(t),null);case 4:return Ee(),e===null&&Ws(t.stateNode.containerInfo),$e(t),null;case 10:return vn(t.type),$e(t),null;case 19:if(Y(Qe),l=t.memoizedState,l===null)return $e(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)gi(l,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=jr(e),s!==null){for(t.flags|=128,gi(l,!1),e=s.updateQueue,t.updateQueue=e,Lr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Yd(n,e),n=n.sibling;return J(Qe,Qe.current&1|2),we&&mn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Tt()>Gr&&(t.flags|=128,r=!0,gi(l,!1),t.lanes=4194304)}else{if(!r)if(e=jr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Lr(t,e),gi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!we)return $e(t),null}else 2*Tt()-l.renderingStartTime>Gr&&n!==536870912&&(t.flags|=128,r=!0,gi(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Tt(),e.sibling=null,n=Qe.current,J(Qe,r?n&1|2:n&1),we&&mn(t,l.treeForkCount),e):($e(t),null);case 22:case 23:return Nt(t),Iu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),n=t.updateQueue,n!==null&&Lr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Y(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vn(Ke),$e(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function yy(e,t){switch(Lu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(Ke),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jt(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(o(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Qe),null;case 4:return Ee(),null;case 10:return vn(t.type),null;case 22:case 23:return Nt(t),Iu(),e!==null&&Y(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vn(Ke),null;case 25:return null;default:return null}}function ph(e,t){switch(Lu(t),t.tag){case 3:vn(Ke),Ee();break;case 26:case 27:case 5:Jt(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:Y(Qe);break;case 10:vn(t.type);break;case 22:case 23:Nt(t),Iu(),e!==null&&Y(Ca);break;case 24:vn(Ke)}}function vi(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){l=void 0;var s=n.create,h=n.inst;l=s(),h.destroy=l}n=n.next}while(n!==r)}}catch(y){Ae(t,t.return,y)}}function Pn(e,t,n){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var s=r.next;l=s;do{if((l.tag&e)===e){var h=l.inst,y=h.destroy;if(y!==void 0){h.destroy=void 0,r=t;var E=n,N=y;try{N()}catch(H){Ae(r,E,H)}}}l=l.next}while(l!==s)}}catch(H){Ae(t,t.return,H)}}function mh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{i0(t,n)}catch(l){Ae(e,e.return,l)}}}function gh(e,t,n){n.props=Oa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ae(e,t,l)}}function yi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){Ae(e,t,r)}}function ln(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(r){Ae(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function vh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(r){Ae(e,e.return,r)}}function Os(e,t,n){try{var l=e.stateNode;Hy(l,e.type,n,t),l[gt]=t}catch(r){Ae(e,e.return,r)}}function yh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ra(e.type)||e.tag===4}function Ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ns(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(l!==4&&(l===27&&ra(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ns(e,t,n),e=e.sibling;e!==null;)Ns(e,t,n),e=e.sibling}function $r(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&ra(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($r(e,t,n),e=e.sibling;e!==null;)$r(e,t,n),e=e.sibling}function xh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ut(t,l,n),t[lt]=e,t[gt]=n}catch(s){Ae(e,e.return,s)}}var wn=!1,We=!1,_s=!1,bh=typeof WeakSet=="function"?WeakSet:Set,tt=null;function xy(e,t){if(e=e.containerInfo,ec=io,e=Nd(e),Tu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var h=0,y=-1,E=-1,N=0,H=0,X=e,_=null;t:for(;;){for(var B;X!==n||r!==0&&X.nodeType!==3||(y=h+r),X!==s||l!==0&&X.nodeType!==3||(E=h+l),X.nodeType===3&&(h+=X.nodeValue.length),(B=X.firstChild)!==null;)_=X,X=B;for(;;){if(X===e)break t;if(_===n&&++N===r&&(y=h),_===s&&++H===l&&(E=h),(B=X.nextSibling)!==null)break;X=_,_=X.parentNode}X=B}n=y===-1||E===-1?null:{start:y,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(tc={focusedElem:e,selectionRange:n},io=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,l=n.stateNode;try{var te=Oa(n.type,r);e=l.getSnapshotBeforeUpdate(te,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ae(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)lc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function Sh(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:jn(e,n),l&4&&vi(5,n);break;case 1:if(jn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){Ae(n,n.return,h)}else{var r=Oa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Ae(n,n.return,h)}}l&64&&mh(n),l&512&&yi(n,n.return);break;case 3:if(jn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{i0(e,t)}catch(h){Ae(n,n.return,h)}}break;case 27:t===null&&l&4&&xh(n);case 26:case 5:jn(e,n),t===null&&l&4&&vh(n),l&512&&yi(n,n.return);break;case 12:jn(e,n);break;case 31:jn(e,n),l&4&&jh(e,n);break;case 13:jn(e,n),l&4&&Ch(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ry.bind(null,n),Ky(e,n))));break;case 22:if(l=n.memoizedState!==null||wn,!l){t=t!==null&&t.memoizedState!==null||We,r=wn;var s=We;wn=l,(We=t)&&!s?Cn(e,n,(n.subtreeFlags&8772)!==0):jn(e,n),wn=r,We=s}break;case 30:break;default:jn(e,n)}}function wh(e){var t=e.alternate;t!==null&&(e.alternate=null,wh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&su(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,yt=!1;function En(e,t,n){for(n=n.child;n!==null;)Eh(e,t,n),n=n.sibling}function Eh(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 26:We||ln(n,t),En(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||ln(n,t);var l=Ye,r=yt;ra(n.type)&&(Ye=n.stateNode,yt=!1),En(e,t,n),zi(n.stateNode),Ye=l,yt=r;break;case 5:We||ln(n,t);case 6:if(l=Ye,r=yt,Ye=null,En(e,t,n),Ye=l,yt=r,Ye!==null)if(yt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(s){Ae(n,t,s)}else try{Ye.removeChild(n.stateNode)}catch(s){Ae(n,t,s)}break;case 18:Ye!==null&&(yt?(e=Ye,mp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),wl(e)):mp(Ye,n.stateNode));break;case 4:l=Ye,r=yt,Ye=n.stateNode.containerInfo,yt=!0,En(e,t,n),Ye=l,yt=r;break;case 0:case 11:case 14:case 15:Pn(2,n,t),We||Pn(4,n,t),En(e,t,n);break;case 1:We||(ln(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&gh(n,t,l)),En(e,t,n);break;case 21:En(e,t,n);break;case 22:We=(l=We)||n.memoizedState!==null,En(e,t,n),We=l;break;default:En(e,t,n)}}function jh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wl(e)}catch(n){Ae(t,t.return,n)}}}function Ch(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wl(e)}catch(n){Ae(t,t.return,n)}}function by(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new bh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new bh),t;default:throw Error(o(435,e.tag))}}function Ur(e,t){var n=by(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var r=Ay.bind(null,e,l);l.then(r,r)}})}function xt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l],s=e,h=t,y=h;e:for(;y!==null;){switch(y.tag){case 27:if(ra(y.type)){Ye=y.stateNode,yt=!1;break e}break;case 5:Ye=y.stateNode,yt=!1;break e;case 3:case 4:Ye=y.stateNode.containerInfo,yt=!0;break e}y=y.return}if(Ye===null)throw Error(o(160));Eh(s,h,r),Ye=null,yt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Th(t,e),t=t.sibling}var Wt=null;function Th(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),bt(e),l&4&&(Pn(3,e,e.return),vi(3,e),Pn(5,e,e.return));break;case 1:xt(t,e),bt(e),l&512&&(We||n===null||ln(n,n.return)),l&64&&wn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var r=Wt;if(xt(t,e),bt(e),l&512&&(We||n===null||ln(n,n.return)),l&4){var s=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Vl]||s[lt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(l),r.head.insertBefore(s,r.querySelector("head > title"))),ut(s,l,n),s[lt]=e,et(s),l=s;break e;case"link":var h=Tp("link","href",r).get(l+(n.href||""));if(h){for(var y=0;y<h.length;y++)if(s=h[y],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(y,1);break t}}s=r.createElement(l),ut(s,l,n),r.head.appendChild(s);break;case"meta":if(h=Tp("meta","content",r).get(l+(n.content||""))){for(y=0;y<h.length;y++)if(s=h[y],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(y,1);break t}}s=r.createElement(l),ut(s,l,n),r.head.appendChild(s);break;default:throw Error(o(468,l))}s[lt]=e,et(s),l=s}e.stateNode=l}else zp(r,e.type,e.stateNode);else e.stateNode=Cp(r,l,e.memoizedProps);else s!==l?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,l===null?zp(r,e.type,e.stateNode):Cp(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Os(e,e.memoizedProps,n.memoizedProps)}break;case 27:xt(t,e),bt(e),l&512&&(We||n===null||ln(n,n.return)),n!==null&&l&4&&Os(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xt(t,e),bt(e),l&512&&(We||n===null||ln(n,n.return)),e.flags&32){r=e.stateNode;try{Va(r,"")}catch(te){Ae(e,e.return,te)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Os(e,r,n!==null?n.memoizedProps:r)),l&1024&&(_s=!0);break;case 6:if(xt(t,e),bt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(te){Ae(e,e.return,te)}}break;case 3:if(to=null,r=Wt,Wt=Pr(t.containerInfo),xt(t,e),Wt=r,bt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{wl(t.containerInfo)}catch(te){Ae(e,e.return,te)}_s&&(_s=!1,zh(e));break;case 4:l=Wt,Wt=Pr(e.stateNode.containerInfo),xt(t,e),bt(e),Wt=l;break;case 12:xt(t,e),bt(e);break;case 31:xt(t,e),bt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ur(e,l)));break;case 13:xt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Yr=Tt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ur(e,l)));break;case 22:r=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,N=wn,H=We;if(wn=N||r,We=H||E,xt(t,e),We=H,wn=N,bt(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||E||wn||We||Ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(s=E.stateNode,r)h=s.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{y=E.stateNode;var X=E.memoizedProps.style,_=X!=null&&X.hasOwnProperty("display")?X.display:null;y.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(te){Ae(E,E.return,te)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(te){Ae(E,E.return,te)}}}else if(t.tag===18){if(n===null){E=t;try{var B=E.stateNode;r?gp(B,!0):gp(E.stateNode,!1)}catch(te){Ae(E,E.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Ur(e,n))));break;case 19:xt(t,e),bt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ur(e,l)));break;case 30:break;case 21:break;default:xt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(yh(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,s=Ms(e);$r(e,s,r);break;case 5:var h=n.stateNode;n.flags&32&&(Va(h,""),n.flags&=-33);var y=Ms(e);$r(e,y,h);break;case 3:case 4:var E=n.stateNode.containerInfo,N=Ms(e);Ns(e,N,E);break;default:throw Error(o(161))}}catch(H){Ae(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Sh(e,t.alternate,t),t=t.sibling}function Ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pn(4,t,t.return),Ma(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&gh(t,t.return,n),Ma(t);break;case 27:zi(t.stateNode);case 26:case 5:ln(t,t.return),Ma(t);break;case 22:t.memoizedState===null&&Ma(t);break;case 30:Ma(t);break;default:Ma(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,s=t,h=s.flags;switch(s.tag){case 0:case 11:case 15:Cn(r,s,n),vi(4,s);break;case 1:if(Cn(r,s,n),l=s,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(N){Ae(l,l.return,N)}if(l=s,r=l.updateQueue,r!==null){var y=l.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)l0(E[r],y)}catch(N){Ae(l,l.return,N)}}n&&h&64&&mh(s),yi(s,s.return);break;case 27:xh(s);case 26:case 5:Cn(r,s,n),n&&l===null&&h&4&&vh(s),yi(s,s.return);break;case 12:Cn(r,s,n);break;case 31:Cn(r,s,n),n&&h&4&&jh(r,s);break;case 13:Cn(r,s,n),n&&h&4&&Ch(r,s);break;case 22:s.memoizedState===null&&Cn(r,s,n),yi(s,s.return);break;case 30:break;default:Cn(r,s,n)}t=t.sibling}}function ks(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&li(n))}function Ds(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&li(e))}function It(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rh(e,t,n,l),t=t.sibling}function Rh(e,t,n,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,l),r&2048&&vi(9,t);break;case 1:It(e,t,n,l);break;case 3:It(e,t,n,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&li(e)));break;case 12:if(r&2048){It(e,t,n,l),e=t.stateNode;try{var s=t.memoizedProps,h=s.id,y=s.onPostCommit;typeof y=="function"&&y(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Ae(t,t.return,E)}}else It(e,t,n,l);break;case 31:It(e,t,n,l);break;case 13:It(e,t,n,l);break;case 23:break;case 22:s=t.stateNode,h=t.alternate,t.memoizedState!==null?s._visibility&2?It(e,t,n,l):xi(e,t):s._visibility&2?It(e,t,n,l):(s._visibility|=2,fl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),r&2048&&ks(h,t);break;case 24:It(e,t,n,l),r&2048&&Ds(t.alternate,t);break;default:It(e,t,n,l)}}function fl(e,t,n,l,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,h=t,y=n,E=l,N=h.flags;switch(h.tag){case 0:case 11:case 15:fl(s,h,y,E,r),vi(8,h);break;case 23:break;case 22:var H=h.stateNode;h.memoizedState!==null?H._visibility&2?fl(s,h,y,E,r):xi(s,h):(H._visibility|=2,fl(s,h,y,E,r)),r&&N&2048&&ks(h.alternate,h);break;case 24:fl(s,h,y,E,r),r&&N&2048&&Ds(h.alternate,h);break;default:fl(s,h,y,E,r)}t=t.sibling}}function xi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,r=l.flags;switch(l.tag){case 22:xi(n,l),r&2048&&ks(l.alternate,l);break;case 24:xi(n,l),r&2048&&Ds(l.alternate,l);break;default:xi(n,l)}t=t.sibling}}var bi=8192;function dl(e,t,n){if(e.subtreeFlags&bi)for(e=e.child;e!==null;)Ah(e,t,n),e=e.sibling}function Ah(e,t,n){switch(e.tag){case 26:dl(e,t,n),e.flags&bi&&e.memoizedState!==null&&r2(n,Wt,e.memoizedState,e.memoizedProps);break;case 5:dl(e,t,n);break;case 3:case 4:var l=Wt;Wt=Pr(e.stateNode.containerInfo),dl(e,t,n),Wt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=bi,bi=16777216,dl(e,t,n),bi=l):dl(e,t,n));break;default:dl(e,t,n)}}function Oh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];tt=l,Nh(l,e)}Oh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mh(e),e=e.sibling}function Mh(e){switch(e.tag){case 0:case 11:case 15:Si(e),e.flags&2048&&Pn(9,e,e.return);break;case 3:Si(e);break;case 12:Si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hr(e)):Si(e);break;default:Si(e)}}function Hr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];tt=l,Nh(l,e)}Oh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pn(8,t,t.return),Hr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Hr(t));break;default:Hr(t)}e=e.sibling}}function Nh(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:Pn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:li(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,tt=l;else e:for(n=e;tt!==null;){l=tt;var r=l.sibling,s=l.return;if(wh(l),l===n){tt=null;break e}if(r!==null){r.return=s,tt=r;break e}tt=s}}}var Sy={getCacheForType:function(e){var t=rt(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Ke).controller.signal}},wy=typeof WeakMap=="function"?WeakMap:Map,Te=0,De=null,ye=null,be=0,Re=0,_t=null,ea=!1,hl=!1,Bs=!1,Tn=0,Ve=0,ta=0,Na=0,Ls=0,kt=0,pl=0,wi=null,St=null,$s=!1,Yr=0,_h=0,Gr=1/0,qr=null,na=null,Pe=0,aa=null,ml=null,zn=0,Us=0,Hs=null,kh=null,Ei=0,Ys=null;function Dt(){return(Te&2)!==0&&be!==0?be&-be:D.T!==null?Zs():Ff()}function Dh(){if(kt===0)if((be&536870912)===0||we){var e=Wi;Wi<<=1,(Wi&3932160)===0&&(Wi=262144),kt=e}else kt=536870912;return e=Mt.current,e!==null&&(e.flags|=32),kt}function wt(e,t,n){(e===De&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(gl(e,0),la(e,be,kt,!1)),Xl(e,n),((Te&2)===0||e!==De)&&(e===De&&((Te&2)===0&&(Na|=n),Ve===4&&la(e,be,kt,!1)),rn(e))}function Bh(e,t,n){if((Te&6)!==0)throw Error(o(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ql(e,t),r=l?Cy(e,t):qs(e,t,!0),s=l;do{if(r===0){hl&&!l&&la(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Ey(n)){r=qs(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var y=e;r=wi;var E=y.current.memoizedState.isDehydrated;if(E&&(gl(y,h).flags|=256),h=qs(y,h,!1),h!==2){if(Bs&&!E){y.errorRecoveryDisabledLanes|=s,Na|=s,r=4;break e}s=St,St=r,s!==null&&(St===null?St=s:St.push.apply(St,s))}r=h}if(s=!1,r!==2)continue}}if(r===1){gl(e,0),la(e,t,0,!0);break}e:{switch(l=e,s=r,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:la(l,t,kt,!ea);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Yr+300-Tt(),10<r)){if(la(l,t,kt,!ea),Pi(l,0,!0)!==0)break e;zn=t,l.timeoutHandle=hp(Lh.bind(null,l,n,St,qr,$s,t,kt,Na,pl,ea,s,"Throttled",-0,0),r);break e}Lh(l,n,St,qr,$s,t,kt,Na,pl,ea,s,null,-0,0)}}break}while(!0);rn(e)}function Lh(e,t,n,l,r,s,h,y,E,N,H,X,_,B){if(e.timeoutHandle=-1,X=t.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Ah(t,s,X);var te=(s&62914560)===s?Yr-Tt():(s&4194048)===s?_h-Tt():0;if(te=o2(X,te),te!==null){zn=s,e.cancelPendingCommit=te(Vh.bind(null,e,t,s,n,l,r,h,y,E,H,X,null,_,B)),la(e,s,h,!N);return}}Vh(e,t,s,n,l,r,h,y,E)}function Ey(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var r=n[l],s=r.getSnapshot;r=r.value;try{if(!At(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function la(e,t,n,l){t&=~Ls,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var s=31-Rt(r),h=1<<s;l[s]=-1,r&=~h}n!==0&&Zf(e,n,t)}function Xr(){return(Te&6)===0?(ji(0),!1):!0}function Gs(){if(ye!==null){if(Re===0)var e=ye.return;else e=ye,gn=Ea=null,ls(e),rl=null,ri=0,e=ye;for(;e!==null;)ph(e.alternate,e),e=e.return;ye=null}}function gl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),zn=0,Gs(),De=e,ye=n=pn(e.current,null),be=t,Re=0,_t=null,ea=!1,hl=ql(e,t),Bs=!1,pl=kt=Ls=Na=ta=Ve=0,St=wi=null,$s=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-Rt(l),s=1<<r;t|=e[r],l&=~s}return Tn=t,fr(),n}function $h(e,t){de=null,D.H=pi,t===il||t===xr?(t=e0(),Re=3):t===Qu?(t=e0(),Re=4):Re=t===bs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,ye===null&&(Ve=1,_r(e,Yt(t,e.current)))}function Uh(){var e=Mt.current;return e===null?!0:(be&4194048)===be?Vt===null:(be&62914560)===be||(be&536870912)!==0?e===Vt:!1}function Hh(){var e=D.H;return D.H=pi,e===null?pi:e}function Yh(){var e=D.A;return D.A=Sy,e}function Vr(){Ve=4,ea||(be&4194048)!==be&&Mt.current!==null||(hl=!0),(ta&134217727)===0&&(Na&134217727)===0||De===null||la(De,be,kt,!1)}function qs(e,t,n){var l=Te;Te|=2;var r=Hh(),s=Yh();(De!==e||be!==t)&&(qr=null,gl(e,t)),t=!1;var h=Ve;e:do try{if(Re!==0&&ye!==null){var y=ye,E=_t;switch(Re){case 8:Gs(),h=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var N=Re;if(Re=0,_t=null,vl(e,y,E,N),n&&hl){h=0;break e}break;default:N=Re,Re=0,_t=null,vl(e,y,E,N)}}jy(),h=Ve;break}catch(H){$h(e,H)}while(!0);return t&&e.shellSuspendCounter++,gn=Ea=null,Te=l,D.H=r,D.A=s,ye===null&&(De=null,be=0,fr()),h}function jy(){for(;ye!==null;)Gh(ye)}function Cy(e,t){var n=Te;Te|=2;var l=Hh(),r=Yh();De!==e||be!==t?(qr=null,Gr=Tt()+500,gl(e,t)):hl=ql(e,t);e:do try{if(Re!==0&&ye!==null){t=ye;var s=_t;t:switch(Re){case 1:Re=0,_t=null,vl(e,t,s,1);break;case 2:case 9:if(Id(s)){Re=0,_t=null,qh(t);break}t=function(){Re!==2&&Re!==9||De!==e||(Re=7),rn(e)},s.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Id(s)?(Re=0,_t=null,qh(t)):(Re=0,_t=null,vl(e,t,s,7));break;case 5:var h=null;switch(ye.tag){case 26:h=ye.memoizedState;case 5:case 27:var y=ye;if(h?Rp(h):y.stateNode.complete){Re=0,_t=null;var E=y.sibling;if(E!==null)ye=E;else{var N=y.return;N!==null?(ye=N,Qr(N)):ye=null}break t}}Re=0,_t=null,vl(e,t,s,5);break;case 6:Re=0,_t=null,vl(e,t,s,6);break;case 8:Gs(),Ve=6;break e;default:throw Error(o(462))}}Ty();break}catch(H){$h(e,H)}while(!0);return gn=Ea=null,D.H=l,D.A=r,Te=n,ye!==null?0:(De=null,be=0,fr(),Ve)}function Ty(){for(;ye!==null&&!Jg();)Gh(ye)}function Gh(e){var t=dh(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,t===null?Qr(e):ye=t}function qh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=rh(n,t,t.pendingProps,t.type,void 0,be);break;case 11:t=rh(n,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:ls(t);default:ph(n,t),t=ye=Yd(t,Tn),t=dh(n,t,Tn)}e.memoizedProps=e.pendingProps,t===null?Qr(e):ye=t}function vl(e,t,n,l){gn=Ea=null,ls(t),rl=null,ri=0;var r=t.return;try{if(py(e,r,t,n,be)){Ve=1,_r(e,Yt(n,e.current)),ye=null;return}}catch(s){if(r!==null)throw ye=r,s;Ve=1,_r(e,Yt(n,e.current)),ye=null;return}t.flags&32768?(we||l===1?e=!0:hl||(be&536870912)!==0?e=!1:(ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=Mt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Xh(t,e)):Qr(t)}function Qr(e){var t=e;do{if((t.flags&32768)!==0){Xh(t,ea);return}e=t.return;var n=vy(t.alternate,t,Tn);if(n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Ve===0&&(Ve=5)}function Xh(e,t){do{var n=yy(e.alternate,e);if(n!==null){n.flags&=32767,ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=n}while(e!==null);Ve=6,ye=null}function Vh(e,t,n,l,r,s,h,y,E){e.cancelPendingCommit=null;do Zr();while(Pe!==0);if((Te&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=Mu,iv(e,n,s,h,y,E),e===De&&(ye=De=null,be=0),ml=t,aa=e,zn=n,Us=s,Hs=r,kh=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Oy(Ji,function(){return Fh(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,r=Q.p,Q.p=2,h=Te,Te|=4;try{xy(e,t,n)}finally{Te=h,Q.p=r,D.T=l}}Pe=1,Qh(),Zh(),Kh()}}function Qh(){if(Pe===1){Pe=0;var e=aa,t=ml,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var l=Q.p;Q.p=2;var r=Te;Te|=4;try{Th(t,e);var s=tc,h=Nd(e.containerInfo),y=s.focusedElem,E=s.selectionRange;if(h!==y&&y&&y.ownerDocument&&Md(y.ownerDocument.documentElement,y)){if(E!==null&&Tu(y)){var N=E.start,H=E.end;if(H===void 0&&(H=N),"selectionStart"in y)y.selectionStart=N,y.selectionEnd=Math.min(H,y.value.length);else{var X=y.ownerDocument||document,_=X&&X.defaultView||window;if(_.getSelection){var B=_.getSelection(),te=y.textContent.length,oe=Math.min(E.start,te),ke=E.end===void 0?oe:Math.min(E.end,te);!B.extend&&oe>ke&&(h=ke,ke=oe,oe=h);var z=Od(y,oe),C=Od(y,ke);if(z&&C&&(B.rangeCount!==1||B.anchorNode!==z.node||B.anchorOffset!==z.offset||B.focusNode!==C.node||B.focusOffset!==C.offset)){var O=X.createRange();O.setStart(z.node,z.offset),B.removeAllRanges(),oe>ke?(B.addRange(O),B.extend(C.node,C.offset)):(O.setEnd(C.node,C.offset),B.addRange(O))}}}}for(X=[],B=y;B=B.parentNode;)B.nodeType===1&&X.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<X.length;y++){var q=X[y];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}io=!!ec,tc=ec=null}finally{Te=r,Q.p=l,D.T=n}}e.current=t,Pe=2}}function Zh(){if(Pe===2){Pe=0;var e=aa,t=ml,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var l=Q.p;Q.p=2;var r=Te;Te|=4;try{Sh(e,t.alternate,t)}finally{Te=r,Q.p=l,D.T=n}}Pe=3}}function Kh(){if(Pe===4||Pe===3){Pe=0,Fg();var e=aa,t=ml,n=zn,l=kh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,ml=aa=null,Jh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(na=null),ou(n),t=t.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,r=Q.p,Q.p=2,D.T=null;try{for(var s=e.onRecoverableError,h=0;h<l.length;h++){var y=l[h];s(y.value,{componentStack:y.stack})}}finally{D.T=t,Q.p=r}}(zn&3)!==0&&Zr(),rn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Ys?Ei++:(Ei=0,Ys=e):Ei=0,ji(0)}}function Jh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,li(t)))}function Zr(){return Qh(),Zh(),Kh(),Fh()}function Fh(){if(Pe!==5)return!1;var e=aa,t=Us;Us=0;var n=ou(zn),l=D.T,r=Q.p;try{Q.p=32>n?32:n,D.T=null,n=Hs,Hs=null;var s=aa,h=zn;if(Pe=0,ml=aa=null,zn=0,(Te&6)!==0)throw Error(o(331));var y=Te;if(Te|=4,Mh(s.current),Rh(s,s.current,h,n),Te=y,ji(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Gl,s)}catch{}return!0}finally{Q.p=r,D.T=l,Jh(e,t)}}function Wh(e,t,n){t=Yt(n,t),t=xs(e.stateNode,t,2),e=Fn(e,t,2),e!==null&&(Xl(e,2),rn(e))}function Ae(e,t,n){if(e.tag===3)Wh(e,e,n);else for(;t!==null;){if(t.tag===3){Wh(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(na===null||!na.has(l))){e=Yt(n,e),n=I0(2),l=Fn(t,n,2),l!==null&&(P0(n,l,t,e),Xl(l,2),rn(l));break}}t=t.return}}function Xs(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new wy;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(n)||(Bs=!0,r.add(n),e=zy.bind(null,e,t,n),t.then(e,e))}function zy(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(be&n)===n&&(Ve===4||Ve===3&&(be&62914560)===be&&300>Tt()-Yr?(Te&2)===0&&gl(e,0):Ls|=n,pl===be&&(pl=0)),rn(e)}function Ih(e,t){t===0&&(t=Qf()),e=ba(e,t),e!==null&&(Xl(e,t),rn(e))}function Ry(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ih(e,n)}function Ay(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Ih(e,n)}function Oy(e,t){return au(e,t)}var Kr=null,yl=null,Vs=!1,Jr=!1,Qs=!1,ia=0;function rn(e){e!==yl&&e.next===null&&(yl===null?Kr=yl=e:yl=yl.next=e),Jr=!0,Vs||(Vs=!0,Ny())}function ji(e,t){if(!Qs&&Jr){Qs=!0;do for(var n=!1,l=Kr;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var s=0;else{var h=l.suspendedLanes,y=l.pingedLanes;s=(1<<31-Rt(42|e)+1)-1,s&=r&~(h&~y),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,np(l,s))}else s=be,s=Pi(l,l===De?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||ql(l,s)||(n=!0,np(l,s));l=l.next}while(n);Qs=!1}}function My(){Ph()}function Ph(){Jr=Vs=!1;var e=0;ia!==0&&Gy()&&(e=ia);for(var t=Tt(),n=null,l=Kr;l!==null;){var r=l.next,s=ep(l,t);s===0?(l.next=null,n===null?Kr=r:n.next=r,r===null&&(yl=n)):(n=l,(e!==0||(s&3)!==0)&&(Jr=!0)),l=r}Pe!==0&&Pe!==5||ji(e),ia!==0&&(ia=0)}function ep(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var h=31-Rt(s),y=1<<h,E=r[h];E===-1?((y&n)===0||(y&l)!==0)&&(r[h]=lv(y,t)):E<=t&&(e.expiredLanes|=y),s&=~y}if(t=De,n=be,n=Pi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&lu(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ql(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&lu(l),ou(n)){case 2:case 8:n=Xf;break;case 32:n=Ji;break;case 268435456:n=Vf;break;default:n=Ji}return l=tp.bind(null,e),n=au(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&lu(l),e.callbackPriority=2,e.callbackNode=null,2}function tp(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Zr()&&e.callbackNode!==n)return null;var l=be;return l=Pi(e,e===De?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Bh(e,l,t),ep(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?tp.bind(null,e):null)}function np(e,t){if(Zr())return null;Bh(e,t,!0)}function Ny(){Xy(function(){(Te&6)!==0?au(qf,My):Ph()})}function Zs(){if(ia===0){var e=al;e===0&&(e=Fi,Fi<<=1,(Fi&261888)===0&&(Fi=256)),ia=e}return ia}function ap(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ar(""+e)}function lp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function _y(e,t,n,l,r){if(t==="submit"&&n&&n.stateNode===r){var s=ap((r[gt]||null).action),h=l.submitter;h&&(t=(t=h[gt]||null)?ap(t.formAction):h.getAttribute("formAction"),t!==null&&(s=t,h=null));var y=new or("action","action",null,l,r);e.push({event:y,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ia!==0){var E=h?lp(r,h):new FormData(r);hs(n,{pending:!0,data:E,method:r.method,action:s},null,E)}}else typeof s=="function"&&(y.preventDefault(),E=h?lp(r,h):new FormData(r),hs(n,{pending:!0,data:E,method:r.method,action:s},s,E))},currentTarget:r}]})}}for(var Ks=0;Ks<Ou.length;Ks++){var Js=Ou[Ks],ky=Js.toLowerCase(),Dy=Js[0].toUpperCase()+Js.slice(1);Ft(ky,"on"+Dy)}Ft(Dd,"onAnimationEnd"),Ft(Bd,"onAnimationIteration"),Ft(Ld,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(Wv,"onTransitionRun"),Ft(Iv,"onTransitionStart"),Ft(Pv,"onTransitionCancel"),Ft($d,"onTransitionEnd"),qa("onMouseEnter",["mouseout","mouseover"]),qa("onMouseLeave",["mouseout","mouseover"]),qa("onPointerEnter",["pointerout","pointerover"]),qa("onPointerLeave",["pointerout","pointerover"]),ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ci));function ip(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var h=l.length-1;0<=h;h--){var y=l[h],E=y.instance,N=y.currentTarget;if(y=y.listener,E!==s&&r.isPropagationStopped())break e;s=y,r.currentTarget=N;try{s(r)}catch(H){cr(H)}r.currentTarget=null,s=E}else for(h=0;h<l.length;h++){if(y=l[h],E=y.instance,N=y.currentTarget,y=y.listener,E!==s&&r.isPropagationStopped())break e;s=y,r.currentTarget=N;try{s(r)}catch(H){cr(H)}r.currentTarget=null,s=E}}}}function xe(e,t){var n=t[uu];n===void 0&&(n=t[uu]=new Set);var l=e+"__bubble";n.has(l)||(rp(t,e,2,!1),n.add(l))}function Fs(e,t,n){var l=0;t&&(l|=4),rp(n,e,l,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Ws(e){if(!e[Fr]){e[Fr]=!0,Pf.forEach(function(n){n!=="selectionchange"&&(By.has(n)||Fs(n,!1,e),Fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,Fs("selectionchange",!1,t))}}function rp(e,t,n,l){switch(Dp(t)){case 2:var r=c2;break;case 8:r=f2;break;default:r=dc}n=r.bind(null,t,n,e),r=void 0,!vu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Is(e,t,n,l,r){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var y=l.stateNode.containerInfo;if(y===r)break;if(h===4)for(h=l.return;h!==null;){var E=h.tag;if((E===3||E===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;y!==null;){if(h=Ha(y),h===null)return;if(E=h.tag,E===5||E===6||E===26||E===27){l=s=h;continue e}y=y.parentNode}}l=l.return}fd(function(){var N=s,H=mu(n),X=[];e:{var _=Ud.get(e);if(_!==void 0){var B=or,te=e;switch(e){case"keypress":if(ir(n)===0)break e;case"keydown":case"keyup":B=Av;break;case"focusin":te="focus",B=Su;break;case"focusout":te="blur",B=Su;break;case"beforeblur":case"afterblur":B=Su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Nv;break;case Dd:case Bd:case Ld:B=bv;break;case $d:B=kv;break;case"scroll":case"scrollend":B=mv;break;case"wheel":B=Bv;break;case"copy":case"cut":case"paste":B=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=gd;break;case"toggle":case"beforetoggle":B=$v}var oe=(t&4)!==0,ke=!oe&&(e==="scroll"||e==="scrollend"),z=oe?_!==null?_+"Capture":null:_;oe=[];for(var C=N,O;C!==null;){var q=C;if(O=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||O===null||z===null||(q=Zl(C,z),q!=null&&oe.push(Ti(C,q,O))),ke)break;C=C.return}0<oe.length&&(_=new B(_,te,null,n,H),X.push({event:_,listeners:oe}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",_&&n!==pu&&(te=n.relatedTarget||n.fromElement)&&(Ha(te)||te[Ua]))break e;if((B||_)&&(_=H.window===H?H:(_=H.ownerDocument)?_.defaultView||_.parentWindow:window,B?(te=n.relatedTarget||n.toElement,B=N,te=te?Ha(te):null,te!==null&&(ke=f(te),oe=te.tag,te!==ke||oe!==5&&oe!==27&&oe!==6)&&(te=null)):(B=null,te=N),B!==te)){if(oe=pd,q="onMouseLeave",z="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(oe=gd,q="onPointerLeave",z="onPointerEnter",C="pointer"),ke=B==null?_:Ql(B),O=te==null?_:Ql(te),_=new oe(q,C+"leave",B,n,H),_.target=ke,_.relatedTarget=O,q=null,Ha(H)===N&&(oe=new oe(z,C+"enter",te,n,H),oe.target=O,oe.relatedTarget=ke,q=oe),ke=q,B&&te)t:{for(oe=Ly,z=B,C=te,O=0,q=z;q;q=oe(q))O++;q=0;for(var re=C;re;re=oe(re))q++;for(;0<O-q;)z=oe(z),O--;for(;0<q-O;)C=oe(C),q--;for(;O--;){if(z===C||C!==null&&z===C.alternate){oe=z;break t}z=oe(z),C=oe(C)}oe=null}else oe=null;B!==null&&op(X,_,B,oe,!1),te!==null&&ke!==null&&op(X,ke,te,oe,!0)}}e:{if(_=N?Ql(N):window,B=_.nodeName&&_.nodeName.toLowerCase(),B==="select"||B==="input"&&_.type==="file")var je=jd;else if(wd(_))if(Cd)je=Kv;else{je=Qv;var le=Vv}else B=_.nodeName,!B||B.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?N&&hu(N.elementType)&&(je=jd):je=Zv;if(je&&(je=je(e,N))){Ed(X,je,n,H);break e}le&&le(e,_,N),e==="focusout"&&N&&_.type==="number"&&N.memoizedProps.value!=null&&du(_,"number",_.value)}switch(le=N?Ql(N):window,e){case"focusin":(wd(le)||le.contentEditable==="true")&&(Ja=le,zu=N,ti=null);break;case"focusout":ti=zu=Ja=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,_d(X,n,H);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":_d(X,n,H)}var he;if(Eu)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Ka?bd(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&(vd&&n.locale!=="ko"&&(Ka||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ka&&(he=dd()):(qn=H,yu="value"in qn?qn.value:qn.textContent,Ka=!0)),le=Wr(N,Se),0<le.length&&(Se=new md(Se,e,null,n,H),X.push({event:Se,listeners:le}),he?Se.data=he:(he=Sd(n),he!==null&&(Se.data=he)))),(he=Hv?Yv(e,n):Gv(e,n))&&(Se=Wr(N,"onBeforeInput"),0<Se.length&&(le=new md("onBeforeInput","beforeinput",null,n,H),X.push({event:le,listeners:Se}),le.data=he)),_y(X,e,N,n,H)}ip(X,t)})}function Ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",l=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Zl(e,n),r!=null&&l.unshift(Ti(e,r,s)),r=Zl(e,t),r!=null&&l.push(Ti(e,r,s))),e.tag===3)return l;e=e.return}return[]}function Ly(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function op(e,t,n,l,r){for(var s=t._reactName,h=[];n!==null&&n!==l;){var y=n,E=y.alternate,N=y.stateNode;if(y=y.tag,E!==null&&E===l)break;y!==5&&y!==26&&y!==27||N===null||(E=N,r?(N=Zl(n,s),N!=null&&h.unshift(Ti(n,N,E))):r||(N=Zl(n,s),N!=null&&h.push(Ti(n,N,E)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var $y=/\r\n?/g,Uy=/\u0000|\uFFFD/g;function up(e){return(typeof e=="string"?e:""+e).replace($y,`
`).replace(Uy,"")}function sp(e,t){return t=up(t),up(e)===t}function _e(e,t,n,l,r,s){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Va(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Va(e,""+l);break;case"className":tr(e,"class",l);break;case"tabIndex":tr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":tr(e,n,l);break;case"style":sd(e,l,s);break;case"data":if(t!=="object"){tr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ar(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&_e(e,t,"name",r.name,r,null),_e(e,t,"formEncType",r.formEncType,r,null),_e(e,t,"formMethod",r.formMethod,r,null),_e(e,t,"formTarget",r.formTarget,r,null)):(_e(e,t,"encType",r.encType,r,null),_e(e,t,"method",r.method,r,null),_e(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ar(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=dn);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ar(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),er(e,"popover",l);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":er(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=hv.get(n)||n,er(e,n,l))}}function Ps(e,t,n,l,r,s){switch(n){case"style":sd(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Va(e,l):(typeof l=="number"||typeof l=="bigint")&&Va(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ed.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[gt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof l=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,r);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):er(e,n,l)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var h=n[s];if(h!=null)switch(s){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:_e(e,t,s,h,n,null)}}r&&_e(e,t,"srcSet",n.srcSet,n,null),l&&_e(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var y=s=h=r=null,E=null,N=null;for(l in n)if(n.hasOwnProperty(l)){var H=n[l];if(H!=null)switch(l){case"name":r=H;break;case"type":h=H;break;case"checked":E=H;break;case"defaultChecked":N=H;break;case"value":s=H;break;case"defaultValue":y=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,t));break;default:_e(e,t,l,H,n,null)}}id(e,s,y,E,N,h,r,!1);return;case"select":xe("invalid",e),l=h=s=null;for(r in n)if(n.hasOwnProperty(r)&&(y=n[r],y!=null))switch(r){case"value":s=y;break;case"defaultValue":h=y;break;case"multiple":l=y;default:_e(e,t,r,y,n,null)}t=s,n=h,e.multiple=!!l,t!=null?Xa(e,!!l,t,!1):n!=null&&Xa(e,!!l,n,!0);return;case"textarea":xe("invalid",e),s=r=l=null;for(h in n)if(n.hasOwnProperty(h)&&(y=n[h],y!=null))switch(h){case"value":l=y;break;case"defaultValue":r=y;break;case"children":s=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:_e(e,t,h,y,n,null)}od(e,l,r,s);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(l=n[E],l!=null))switch(E){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:_e(e,t,E,l,n,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<Ci.length;l++)xe(Ci[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(l=n[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:_e(e,t,N,l,n,null)}return;default:if(hu(t)){for(H in n)n.hasOwnProperty(H)&&(l=n[H],l!==void 0&&Ps(e,t,H,l,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(l=n[y],l!=null&&_e(e,t,y,l,n,null))}function Hy(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,h=null,y=null,E=null,N=null,H=null;for(B in n){var X=n[B];if(n.hasOwnProperty(B)&&X!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":E=X;default:l.hasOwnProperty(B)||_e(e,t,B,null,l,X)}}for(var _ in l){var B=l[_];if(X=n[_],l.hasOwnProperty(_)&&(B!=null||X!=null))switch(_){case"type":s=B;break;case"name":r=B;break;case"checked":N=B;break;case"defaultChecked":H=B;break;case"value":h=B;break;case"defaultValue":y=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:B!==X&&_e(e,t,_,B,l,X)}}fu(e,h,y,E,N,H,s,r);return;case"select":B=h=y=_=null;for(s in n)if(E=n[s],n.hasOwnProperty(s)&&E!=null)switch(s){case"value":break;case"multiple":B=E;default:l.hasOwnProperty(s)||_e(e,t,s,null,l,E)}for(r in l)if(s=l[r],E=n[r],l.hasOwnProperty(r)&&(s!=null||E!=null))switch(r){case"value":_=s;break;case"defaultValue":y=s;break;case"multiple":h=s;default:s!==E&&_e(e,t,r,s,l,E)}t=y,n=h,l=B,_!=null?Xa(e,!!n,_,!1):!!l!=!!n&&(t!=null?Xa(e,!!n,t,!0):Xa(e,!!n,n?[]:"",!1));return;case"textarea":B=_=null;for(y in n)if(r=n[y],n.hasOwnProperty(y)&&r!=null&&!l.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:_e(e,t,y,null,l,r)}for(h in l)if(r=l[h],s=n[h],l.hasOwnProperty(h)&&(r!=null||s!=null))switch(h){case"value":_=r;break;case"defaultValue":B=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==s&&_e(e,t,h,r,l,s)}rd(e,_,B);return;case"option":for(var te in n)if(_=n[te],n.hasOwnProperty(te)&&_!=null&&!l.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:_e(e,t,te,null,l,_)}for(E in l)if(_=l[E],B=n[E],l.hasOwnProperty(E)&&_!==B&&(_!=null||B!=null))switch(E){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:_e(e,t,E,_,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)_=n[oe],n.hasOwnProperty(oe)&&_!=null&&!l.hasOwnProperty(oe)&&_e(e,t,oe,null,l,_);for(N in l)if(_=l[N],B=n[N],l.hasOwnProperty(N)&&_!==B&&(_!=null||B!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,t));break;default:_e(e,t,N,_,l,B)}return;default:if(hu(t)){for(var ke in n)_=n[ke],n.hasOwnProperty(ke)&&_!==void 0&&!l.hasOwnProperty(ke)&&Ps(e,t,ke,void 0,l,_);for(H in l)_=l[H],B=n[H],!l.hasOwnProperty(H)||_===B||_===void 0&&B===void 0||Ps(e,t,H,_,l,B);return}}for(var z in n)_=n[z],n.hasOwnProperty(z)&&_!=null&&!l.hasOwnProperty(z)&&_e(e,t,z,null,l,_);for(X in l)_=l[X],B=n[X],!l.hasOwnProperty(X)||_===B||_==null&&B==null||_e(e,t,X,_,l,B)}function cp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var r=n[l],s=r.transferSize,h=r.initiatorType,y=r.duration;if(s&&y&&cp(h)){for(h=0,y=r.responseEnd,l+=1;l<n.length;l++){var E=n[l],N=E.startTime;if(N>y)break;var H=E.transferSize,X=E.initiatorType;H&&cp(X)&&(E=E.responseEnd,h+=H*(E<y?1:(y-N)/(E-N)))}if(--l,t+=8*(s+h)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ec=null,tc=null;function Ir(e){return e.nodeType===9?e:e.ownerDocument}function fp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function nc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ac=null;function Gy(){var e=window.event;return e&&e.type==="popstate"?e===ac?!1:(ac=e,!0):(ac=null,!1)}var hp=typeof setTimeout=="function"?setTimeout:void 0,qy=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(e){return pp.resolve(null).then(e).catch(Vy)}:hp;function Vy(e){setTimeout(function(){throw e})}function ra(e){return e==="head"}function mp(e,t){var n=t,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(r),wl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")zi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,zi(n);for(var s=n.firstChild;s;){var h=s.nextSibling,y=s.nodeName;s[Vl]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=h}}else n==="body"&&zi(e.ownerDocument.body);n=r}while(n);wl(t)}function gp(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function lc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":lc(n),su(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Qy(e,t,n,l){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function Zy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qt(e.nextSibling),e===null))return null;return e}function vp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function ic(e){return e.data==="$?"||e.data==="$~"}function rc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ky(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var oc=null;function yp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Qt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function xp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function bp(e,t,n){switch(t=Ir(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function zi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);su(e)}var Zt=new Map,Sp=new Set;function Pr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rn=Q.d;Q.d={f:Jy,r:Fy,D:Wy,C:Iy,L:Py,m:e2,X:n2,S:t2,M:a2};function Jy(){var e=Rn.f(),t=Xr();return e||t}function Fy(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?$0(t):Rn.r(e)}var xl=typeof document>"u"?null:document;function wp(e,t,n){var l=xl;if(l&&typeof t=="string"&&t){var r=Ut(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Sp.has(r)||(Sp.add(r),e={rel:e,crossOrigin:n,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),ut(t,"link",e),et(t),l.head.appendChild(t)))}}function Wy(e){Rn.D(e),wp("dns-prefetch",e,null)}function Iy(e,t){Rn.C(e,t),wp("preconnect",e,t)}function Py(e,t,n){Rn.L(e,t,n);var l=xl;if(l&&e&&t){var r='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ut(n.imageSizes)+'"]')):r+='[href="'+Ut(e)+'"]';var s=r;switch(t){case"style":s=bl(e);break;case"script":s=Sl(e)}Zt.has(s)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zt.set(s,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(Ri(s))||t==="script"&&l.querySelector(Ai(s))||(t=l.createElement("link"),ut(t,"link",e),et(t),l.head.appendChild(t)))}}function e2(e,t){Rn.m(e,t);var n=xl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ut(l)+'"][href="'+Ut(e)+'"]',s=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Sl(e)}if(!Zt.has(s)&&(e=w({rel:"modulepreload",href:e},t),Zt.set(s,e),n.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ai(s)))return}l=n.createElement("link"),ut(l,"link",e),et(l),n.head.appendChild(l)}}}function t2(e,t,n){Rn.S(e,t,n);var l=xl;if(l&&e){var r=Ga(l).hoistableStyles,s=bl(e);t=t||"default";var h=r.get(s);if(!h){var y={loading:0,preload:null};if(h=l.querySelector(Ri(s)))y.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zt.get(s))&&uc(e,n);var E=h=l.createElement("link");et(E),ut(E,"link",e),E._p=new Promise(function(N,H){E.onload=N,E.onerror=H}),E.addEventListener("load",function(){y.loading|=1}),E.addEventListener("error",function(){y.loading|=2}),y.loading|=4,eo(h,t,l)}h={type:"stylesheet",instance:h,count:1,state:y},r.set(s,h)}}}function n2(e,t){Rn.X(e,t);var n=xl;if(n&&e){var l=Ga(n).hoistableScripts,r=Sl(e),s=l.get(r);s||(s=n.querySelector(Ai(r)),s||(e=w({src:e,async:!0},t),(t=Zt.get(r))&&sc(e,t),s=n.createElement("script"),et(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(r,s))}}function a2(e,t){Rn.M(e,t);var n=xl;if(n&&e){var l=Ga(n).hoistableScripts,r=Sl(e),s=l.get(r);s||(s=n.querySelector(Ai(r)),s||(e=w({src:e,async:!0,type:"module"},t),(t=Zt.get(r))&&sc(e,t),s=n.createElement("script"),et(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(r,s))}}function Ep(e,t,n,l){var r=(r=ue.current)?Pr(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=bl(n.href),n=Ga(r).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=bl(n.href);var s=Ga(r).hoistableStyles,h=s.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,h),(s=r.querySelector(Ri(e)))&&!s._p&&(h.instance=s,h.state.loading=5),Zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zt.set(e,n),s||l2(r,e,n,h.state))),t&&l===null)throw Error(o(528,""));return h}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Sl(n),n=Ga(r).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function bl(e){return'href="'+Ut(e)+'"'}function Ri(e){return'link[rel="stylesheet"]['+e+"]"}function jp(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function l2(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ut(t,"link",n),et(t),e.head.appendChild(t))}function Sl(e){return'[src="'+Ut(e)+'"]'}function Ai(e){return"script[async]"+e}function Cp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(l)return t.instance=l,et(l),l;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),et(l),ut(l,"style",r),eo(l,n.precedence,e),t.instance=l;case"stylesheet":r=bl(n.href);var s=e.querySelector(Ri(r));if(s)return t.state.loading|=4,t.instance=s,et(s),s;l=jp(n),(r=Zt.get(r))&&uc(l,r),s=(e.ownerDocument||e).createElement("link"),et(s);var h=s;return h._p=new Promise(function(y,E){h.onload=y,h.onerror=E}),ut(s,"link",l),t.state.loading|=4,eo(s,n.precedence,e),t.instance=s;case"script":return s=Sl(n.src),(r=e.querySelector(Ai(s)))?(t.instance=r,et(r),r):(l=n,(r=Zt.get(s))&&(l=w({},n),sc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),et(r),ut(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,eo(l,n.precedence,e));return t.instance}function eo(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,s=r,h=0;h<l.length;h++){var y=l[h];if(y.dataset.precedence===t)s=y;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var to=null;function Tp(e,t,n){if(to===null){var l=new Map,r=to=new Map;r.set(n,l)}else r=to,l=r.get(n),l||(l=new Map,r.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Vl]||s[lt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var h=s.getAttribute(t)||"";h=e+h;var y=l.get(h);y?y.push(s):l.set(h,[s])}}return l}function zp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function i2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function r2(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=bl(l.href),s=t.querySelector(Ri(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=no.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,et(s);return}s=t.ownerDocument||t,l=jp(l),(r=Zt.get(r))&&uc(l,r),s=s.createElement("link"),et(s);var h=s;h._p=new Promise(function(y,E){h.onload=y,h.onerror=E}),ut(s,"link",l),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=no.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var cc=0;function o2(e,t){return e.stylesheets&&e.count===0&&lo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&lo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&cc===0&&(cc=62500*Yy());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>cc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function no(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ao=null;function lo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ao=new Map,t.forEach(u2,e),ao=null,no.call(e))}function u2(e,t){if(!(t.state.loading&4)){var n=ao.get(e);if(n)var l=n.get(null);else{n=new Map,ao.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var h=r[s];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),l=h)}l&&n.set(null,l)}r=t.instance,h=r.getAttribute("data-precedence"),s=n.get(h)||l,s===l&&n.set(null,r),n.set(h,r),this.count++,l=no.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Oi={$$typeof:L,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function s2(e,t,n,l,r,s,h,y,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=iu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.hiddenUpdates=iu(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Ap(e,t,n,l,r,s,h,y,E,N,H,X){return e=new s2(e,t,n,h,E,N,H,X,y),t=1,s===!0&&(t|=24),s=Ot(3,null,null,t),e.current=s,s.stateNode=e,t=qu(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:n,cache:t},Zu(s),e}function Op(e){return e?(e=Ia,e):Ia}function Mp(e,t,n,l,r,s){r=Op(r),l.context===null?l.context=r:l.pendingContext=r,l=Jn(t),l.payload={element:n},s=s===void 0?null:s,s!==null&&(l.callback=s),n=Fn(e,l,t),n!==null&&(wt(n,e,t),ui(n,e,t))}function Np(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fc(e,t){Np(e,t),(e=e.alternate)&&Np(e,t)}function _p(e){if(e.tag===13||e.tag===31){var t=ba(e,67108864);t!==null&&wt(t,e,67108864),fc(e,67108864)}}function kp(e){if(e.tag===13||e.tag===31){var t=Dt();t=ru(t);var n=ba(e,t);n!==null&&wt(n,e,t),fc(e,t)}}var io=!0;function c2(e,t,n,l){var r=D.T;D.T=null;var s=Q.p;try{Q.p=2,dc(e,t,n,l)}finally{Q.p=s,D.T=r}}function f2(e,t,n,l){var r=D.T;D.T=null;var s=Q.p;try{Q.p=8,dc(e,t,n,l)}finally{Q.p=s,D.T=r}}function dc(e,t,n,l){if(io){var r=hc(l);if(r===null)Is(e,t,l,ro,n),Bp(e,l);else if(h2(r,e,t,n,l))l.stopPropagation();else if(Bp(e,l),t&4&&-1<d2.indexOf(e)){for(;r!==null;){var s=Ya(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var h=ma(s.pendingLanes);if(h!==0){var y=s;for(y.pendingLanes|=2,y.entangledLanes|=2;h;){var E=1<<31-Rt(h);y.entanglements[1]|=E,h&=~E}rn(s),(Te&6)===0&&(Gr=Tt()+500,ji(0))}}break;case 31:case 13:y=ba(s,2),y!==null&&wt(y,s,2),Xr(),fc(s,2)}if(s=hc(l),s===null&&Is(e,t,l,ro,n),s===r)break;r=s}r!==null&&l.stopPropagation()}else Is(e,t,l,null,n)}}function hc(e){return e=mu(e),pc(e)}var ro=null;function pc(e){if(ro=null,e=Ha(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ro=e,null}function Dp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wg()){case qf:return 2;case Xf:return 8;case Ji:case Ig:return 32;case Vf:return 268435456;default:return 32}default:return 32}}var mc=!1,oa=null,ua=null,sa=null,Mi=new Map,Ni=new Map,ca=[],d2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bp(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":Mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function _i(e,t,n,l,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ya(t),t!==null&&_p(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function h2(e,t,n,l,r){switch(t){case"focusin":return oa=_i(oa,e,t,n,l,r),!0;case"dragenter":return ua=_i(ua,e,t,n,l,r),!0;case"mouseover":return sa=_i(sa,e,t,n,l,r),!0;case"pointerover":var s=r.pointerId;return Mi.set(s,_i(Mi.get(s)||null,e,t,n,l,r)),!0;case"gotpointercapture":return s=r.pointerId,Ni.set(s,_i(Ni.get(s)||null,e,t,n,l,r)),!0}return!1}function Lp(e){var t=Ha(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Wf(e.priority,function(){kp(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,Wf(e.priority,function(){kp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);pu=l,n.target.dispatchEvent(l),pu=null}else return t=Ya(n),t!==null&&_p(t),e.blockedOn=n,!1;t.shift()}return!0}function $p(e,t,n){oo(e)&&n.delete(t)}function p2(){mc=!1,oa!==null&&oo(oa)&&(oa=null),ua!==null&&oo(ua)&&(ua=null),sa!==null&&oo(sa)&&(sa=null),Mi.forEach($p),Ni.forEach($p)}function uo(e,t){e.blockedOn===t&&(e.blockedOn=null,mc||(mc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,p2)))}var so=null;function Up(e){so!==e&&(so=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){so===e&&(so=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(pc(l||n)===null)continue;break}var s=Ya(n);s!==null&&(e.splice(t,3),t-=3,hs(s,{pending:!0,data:r,method:n.method,action:l},l,r))}}))}function wl(e){function t(E){return uo(E,e)}oa!==null&&uo(oa,e),ua!==null&&uo(ua,e),sa!==null&&uo(sa,e),Mi.forEach(t),Ni.forEach(t);for(var n=0;n<ca.length;n++){var l=ca[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ca.length&&(n=ca[0],n.blockedOn===null);)Lp(n),n.blockedOn===null&&ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var r=n[l],s=n[l+1],h=r[gt]||null;if(typeof s=="function")h||Up(n);else if(h){var y=null;if(s&&s.hasAttribute("formAction")){if(r=s,h=s[gt]||null)y=h.formAction;else if(pc(r)!==null)continue}else y=h.action;typeof y=="function"?n[l+1]=y:(n.splice(l,3),l-=3),Up(n)}}}function Hp(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(h){return r=h})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function gc(e){this._internalRoot=e}co.prototype.render=gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=Dt();Mp(n,l,e,t,null,null)},co.prototype.unmount=gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mp(e.current,2,null,e,null,null),Xr(),t[Ua]=null}};function co(e){this._internalRoot=e}co.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ff();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ca.length&&t!==0&&t<ca[n].priority;n++);ca.splice(n,0,e),n===0&&Lp(e)}};var Yp=i.version;if(Yp!=="19.2.0")throw Error(o(527,Yp,"19.2.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var m2={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Gl=fo.inject(m2),zt=fo}catch{}}return Di.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,l="",r=K0,s=J0,h=F0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Ap(e,1,!1,null,null,n,l,null,r,s,h,Hp),e[Ua]=t.current,Ws(e),new gc(t)},Di.hydrateRoot=function(e,t,n){if(!c(e))throw Error(o(299));var l=!1,r="",s=K0,h=J0,y=F0,E=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=Ap(e,1,!0,t,n??null,l,r,E,s,h,y,Hp),t.context=Op(null),n=t.current,l=Dt(),l=ru(l),r=Jn(l),r.callback=null,Fn(n,r,l),n=l,t.current.lanes=n,Xl(t,n),rn(t),e[Ua]=t.current,Ws(e),new co(t)},Di.version="19.2.0",Di}var Wp;function j2(){if(Wp)return xc.exports;Wp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),xc.exports=E2(),xc.exports}var C2=j2();const T2=Xi(C2);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ip="popstate";function z2(a={}){function i(o,c){let{pathname:f,search:p,hash:v}=o.location;return Ic("",{pathname:f,search:p,hash:v},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function u(o,c){return typeof c=="string"?c:Yi(c)}return A2(i,u,null,a)}function qe(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function sn(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function R2(){return Math.random().toString(36).substring(2,10)}function Pp(a,i){return{usr:a.state,key:a.key,idx:i}}function Ic(a,i,u=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?Dl(i):i,state:u,key:i&&i.key||o||R2()}}function Yi({pathname:a="/",search:i="",hash:u=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Dl(a){let i={};if(a){let u=a.indexOf("#");u>=0&&(i.hash=a.substring(u),a=a.substring(0,u));let o=a.indexOf("?");o>=0&&(i.search=a.substring(o),a=a.substring(0,o)),a&&(i.pathname=a)}return i}function A2(a,i,u,o={}){let{window:c=document.defaultView,v5Compat:f=!1}=o,p=c.history,v="POP",g=null,m=b();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function b(){return(p.state||{idx:null}).idx}function w(){v="POP";let U=b(),M=U==null?null:U-m;m=U,g&&g({action:v,location:k.location,delta:M})}function T(U,M){v="PUSH";let $=Ic(k.location,U,M);m=b()+1;let L=Pp($,m),Z=k.createHref($);try{p.pushState(L,"",Z)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;c.location.assign(Z)}f&&g&&g({action:v,location:k.location,delta:1})}function A(U,M){v="REPLACE";let $=Ic(k.location,U,M);m=b();let L=Pp($,m),Z=k.createHref($);p.replaceState(L,"",Z),f&&g&&g({action:v,location:k.location,delta:0})}function R(U){return O2(U)}let k={get action(){return v},get location(){return a(c,p)},listen(U){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(Ip,w),g=U,()=>{c.removeEventListener(Ip,w),g=null}},createHref(U){return i(c,U)},createURL:R,encodeLocation(U){let M=R(U);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:T,replace:A,go(U){return p.go(U)}};return k}function O2(a,i=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),qe(u,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Yi(a);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function s1(a,i,u="/"){return M2(a,i,u,!1)}function M2(a,i,u,o){let c=typeof i=="string"?Dl(i):i,f=Dn(c.pathname||"/",u);if(f==null)return null;let p=c1(a);N2(p);let v=null;for(let g=0;v==null&&g<p.length;++g){let m=q2(f);v=Y2(p[g],m,o)}return v}function c1(a,i=[],u=[],o="",c=!1){let f=(p,v,g=c,m)=>{let b={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:v,route:p};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&g)return;qe(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let w=_n([o,b.relativePath]),T=u.concat(b);p.children&&p.children.length>0&&(qe(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),c1(p.children,i,T,w,g)),!(p.path==null&&!p.index)&&i.push({path:w,score:U2(w,p.index),routesMeta:T})};return a.forEach((p,v)=>{if(p.path===""||!p.path?.includes("?"))f(p,v);else for(let g of f1(p.path))f(p,v,!0,g)}),i}function f1(a){let i=a.split("/");if(i.length===0)return[];let[u,...o]=i,c=u.endsWith("?"),f=u.replace(/\?$/,"");if(o.length===0)return c?[f,""]:[f];let p=f1(o.join("/")),v=[];return v.push(...p.map(g=>g===""?f:[f,g].join("/"))),c&&v.push(...p),v.map(g=>a.startsWith("/")&&g===""?"/":g)}function N2(a){a.sort((i,u)=>i.score!==u.score?u.score-i.score:H2(i.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var _2=/^:[\w-]+$/,k2=3,D2=2,B2=1,L2=10,$2=-2,em=a=>a==="*";function U2(a,i){let u=a.split("/"),o=u.length;return u.some(em)&&(o+=$2),i&&(o+=D2),u.filter(c=>!em(c)).reduce((c,f)=>c+(_2.test(f)?k2:f===""?B2:L2),o)}function H2(a,i){return a.length===i.length&&a.slice(0,-1).every((o,c)=>o===i[c])?a[a.length-1]-i[i.length-1]:0}function Y2(a,i,u=!1){let{routesMeta:o}=a,c={},f="/",p=[];for(let v=0;v<o.length;++v){let g=o[v],m=v===o.length-1,b=f==="/"?i:i.slice(f.length)||"/",w=Mo({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},b),T=g.route;if(!w&&m&&u&&!o[o.length-1].route.index&&(w=Mo({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!w)return null;Object.assign(c,w.params),p.push({params:c,pathname:_n([f,w.pathname]),pathnameBase:Z2(_n([f,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(f=_n([f,w.pathnameBase]))}return p}function Mo(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,o]=G2(a.path,a.caseSensitive,a.end),c=i.match(u);if(!c)return null;let f=c[0],p=f.replace(/(.)\/+$/,"$1"),v=c.slice(1);return{params:o.reduce((m,{paramName:b,isOptional:w},T)=>{if(b==="*"){let R=v[T]||"";p=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const A=v[T];return w&&!A?m[b]=void 0:m[b]=(A||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:p,pattern:a}}function G2(a,i=!1,u=!0){sn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,g)=>(o.push({paramName:v,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),o]}function q2(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return sn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function Dn(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let u=i.endsWith("/")?i.length-1:i.length,o=a.charAt(u);return o&&o!=="/"?null:a.slice(u)||"/"}function X2(a,i="/"){let{pathname:u,search:o="",hash:c=""}=typeof a=="string"?Dl(a):a;return{pathname:u?u.startsWith("/")?u:V2(u,i):i,search:K2(o),hash:J2(c)}}function V2(a,i){let u=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function Ec(a,i,u,o){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Q2(a){return a.filter((i,u)=>u===0||i.route.path&&i.route.path.length>0)}function d1(a){let i=Q2(a);return i.map((u,o)=>o===i.length-1?u.pathname:u.pathnameBase)}function h1(a,i,u,o=!1){let c;typeof a=="string"?c=Dl(a):(c={...a},qe(!c.pathname||!c.pathname.includes("?"),Ec("?","pathname","search",c)),qe(!c.pathname||!c.pathname.includes("#"),Ec("#","pathname","hash",c)),qe(!c.search||!c.search.includes("#"),Ec("#","search","hash",c)));let f=a===""||c.pathname==="",p=f?"/":c.pathname,v;if(p==null)v=u;else{let w=i.length-1;if(!o&&p.startsWith("..")){let T=p.split("/");for(;T[0]==="..";)T.shift(),w-=1;c.pathname=T.join("/")}v=w>=0?i[w]:"/"}let g=X2(c,v),m=p&&p!=="/"&&p.endsWith("/"),b=(f||p===".")&&u.endsWith("/");return!g.pathname.endsWith("/")&&(m||b)&&(g.pathname+="/"),g}var _n=a=>a.join("/").replace(/\/\/+/g,"/"),Z2=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),K2=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,J2=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function F2(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var p1=["POST","PUT","PATCH","DELETE"];new Set(p1);var W2=["GET",...p1];new Set(W2);var Bl=x.createContext(null);Bl.displayName="DataRouter";var qo=x.createContext(null);qo.displayName="DataRouterState";x.createContext(!1);var m1=x.createContext({isTransitioning:!1});m1.displayName="ViewTransition";var I2=x.createContext(new Map);I2.displayName="Fetchers";var P2=x.createContext(null);P2.displayName="Await";var cn=x.createContext(null);cn.displayName="Navigation";var Vi=x.createContext(null);Vi.displayName="Location";var Ln=x.createContext({outlet:null,matches:[],isDataRoute:!1});Ln.displayName="Route";var mf=x.createContext(null);mf.displayName="RouteError";function ex(a,{relative:i}={}){qe(Qi(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=x.useContext(cn),{hash:c,pathname:f,search:p}=Zi(a,{relative:i}),v=f;return u!=="/"&&(v=f==="/"?u:_n([u,f])),o.createHref({pathname:v,search:p,hash:c})}function Qi(){return x.useContext(Vi)!=null}function $n(){return qe(Qi(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Vi).location}var g1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function v1(a){x.useContext(cn).static||x.useLayoutEffect(a)}function gf(){let{isDataRoute:a}=x.useContext(Ln);return a?hx():tx()}function tx(){qe(Qi(),"useNavigate() may be used only in the context of a <Router> component.");let a=x.useContext(Bl),{basename:i,navigator:u}=x.useContext(cn),{matches:o}=x.useContext(Ln),{pathname:c}=$n(),f=JSON.stringify(d1(o)),p=x.useRef(!1);return v1(()=>{p.current=!0}),x.useCallback((g,m={})=>{if(sn(p.current,g1),!p.current)return;if(typeof g=="number"){u.go(g);return}let b=h1(g,JSON.parse(f),c,m.relative==="path");a==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:_n([i,b.pathname])),(m.replace?u.replace:u.push)(b,m.state,m)},[i,u,f,c,a])}x.createContext(null);function Zi(a,{relative:i}={}){let{matches:u}=x.useContext(Ln),{pathname:o}=$n(),c=JSON.stringify(d1(u));return x.useMemo(()=>h1(a,JSON.parse(c),o,i==="path"),[a,c,o,i])}function nx(a,i){return y1(a,i)}function y1(a,i,u,o,c){qe(Qi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=x.useContext(cn),{matches:p}=x.useContext(Ln),v=p[p.length-1],g=v?v.params:{},m=v?v.pathname:"/",b=v?v.pathnameBase:"/",w=v&&v.route;{let $=w&&w.path||"";x1(m,!w||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let T=$n(),A;if(i){let $=typeof i=="string"?Dl(i):i;qe(b==="/"||$.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${$.pathname}" was given in the \`location\` prop.`),A=$}else A=T;let R=A.pathname||"/",k=R;if(b!=="/"){let $=b.replace(/^\//,"").split("/");k="/"+R.replace(/^\//,"").split("/").slice($.length).join("/")}let U=s1(a,{pathname:k});sn(w||U!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),sn(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=ox(U&&U.map($=>Object.assign({},$,{params:Object.assign({},g,$.params),pathname:_n([b,f.encodeLocation?f.encodeLocation($.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?b:_n([b,f.encodeLocation?f.encodeLocation($.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathnameBase])})),p,u,o,c);return i&&M?x.createElement(Vi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},M):M}function ax(){let a=dx(),i=F2(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:f},"ErrorBoundary")," or"," ",x.createElement("code",{style:f},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},i),u?x.createElement("pre",{style:c},u):null,p)}var lx=x.createElement(ax,null),ix=class extends x.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.unstable_onError?this.props.unstable_onError(a,i):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?x.createElement(Ln.Provider,{value:this.props.routeContext},x.createElement(mf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function rx({routeContext:a,match:i,children:u}){let o=x.useContext(Bl);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),x.createElement(Ln.Provider,{value:a},u)}function ox(a,i=[],u=null,o=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(i.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let f=a,p=u?.errors;if(p!=null){let m=f.findIndex(b=>b.route.id&&p?.[b.route.id]!==void 0);qe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let v=!1,g=-1;if(u)for(let m=0;m<f.length;m++){let b=f[m];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=m),b.route.id){let{loaderData:w,errors:T}=u,A=b.route.loader&&!w.hasOwnProperty(b.route.id)&&(!T||T[b.route.id]===void 0);if(b.route.lazy||A){v=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((m,b,w)=>{let T,A=!1,R=null,k=null;u&&(T=p&&b.route.id?p[b.route.id]:void 0,R=b.route.errorElement||lx,v&&(g<0&&w===0?(x1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,k=null):g===w&&(A=!0,k=b.route.hydrateFallbackElement||null)));let U=i.concat(f.slice(0,w+1)),M=()=>{let $;return T?$=R:A?$=k:b.route.Component?$=x.createElement(b.route.Component,null):b.route.element?$=b.route.element:$=m,x.createElement(rx,{match:b,routeContext:{outlet:m,matches:U,isDataRoute:u!=null},children:$})};return u&&(b.route.ErrorBoundary||b.route.errorElement||w===0)?x.createElement(ix,{location:u.location,revalidation:u.revalidation,component:R,error:T,children:M(),routeContext:{outlet:null,matches:U,isDataRoute:!0},unstable_onError:o}):M()},null)}function vf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ux(a){let i=x.useContext(Bl);return qe(i,vf(a)),i}function sx(a){let i=x.useContext(qo);return qe(i,vf(a)),i}function cx(a){let i=x.useContext(Ln);return qe(i,vf(a)),i}function yf(a){let i=cx(a),u=i.matches[i.matches.length-1];return qe(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function fx(){return yf("useRouteId")}function dx(){let a=x.useContext(mf),i=sx("useRouteError"),u=yf("useRouteError");return a!==void 0?a:i.errors?.[u]}function hx(){let{router:a}=ux("useNavigate"),i=yf("useNavigate"),u=x.useRef(!1);return v1(()=>{u.current=!0}),x.useCallback(async(c,f={})=>{sn(u.current,g1),u.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:i,...f}))},[a,i])}var tm={};function x1(a,i,u){!i&&!tm[a]&&(tm[a]=!0,sn(!1,u))}x.memo(px);function px({routes:a,future:i,state:u,unstable_onError:o}){return y1(a,void 0,u,o,i)}function _a(a){qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mx({basename:a="/",children:i=null,location:u,navigationType:o="POP",navigator:c,static:f=!1}){qe(!Qi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),v=x.useMemo(()=>({basename:p,navigator:c,static:f,future:{}}),[p,c,f]);typeof u=="string"&&(u=Dl(u));let{pathname:g="/",search:m="",hash:b="",state:w=null,key:T="default"}=u,A=x.useMemo(()=>{let R=Dn(g,p);return R==null?null:{location:{pathname:R,search:m,hash:b,state:w,key:T},navigationType:o}},[p,g,m,b,w,T,o]);return sn(A!=null,`<Router basename="${p}"> is not able to match the URL "${g}${m}${b}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:x.createElement(cn.Provider,{value:v},x.createElement(Vi.Provider,{children:i,value:A}))}function gx({children:a,location:i}){return nx(Pc(a),i)}function Pc(a,i=[]){let u=[];return x.Children.forEach(a,(o,c)=>{if(!x.isValidElement(o))return;let f=[...i,c];if(o.type===x.Fragment){u.push.apply(u,Pc(o.props.children,f));return}qe(o.type===_a,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=Pc(o.props.children,f)),u.push(p)}),u}var Eo="get",jo="application/x-www-form-urlencoded";function Xo(a){return a!=null&&typeof a.tagName=="string"}function vx(a){return Xo(a)&&a.tagName.toLowerCase()==="button"}function yx(a){return Xo(a)&&a.tagName.toLowerCase()==="form"}function xx(a){return Xo(a)&&a.tagName.toLowerCase()==="input"}function bx(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Sx(a,i){return a.button===0&&(!i||i==="_self")&&!bx(a)}var ho=null;function wx(){if(ho===null)try{new FormData(document.createElement("form"),0),ho=!1}catch{ho=!0}return ho}var Ex=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jc(a){return a!=null&&!Ex.has(a)?(sn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${jo}"`),null):a}function jx(a,i){let u,o,c,f,p;if(yx(a)){let v=a.getAttribute("action");o=v?Dn(v,i):null,u=a.getAttribute("method")||Eo,c=jc(a.getAttribute("enctype"))||jo,f=new FormData(a)}else if(vx(a)||xx(a)&&(a.type==="submit"||a.type==="image")){let v=a.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||v.getAttribute("action");if(o=g?Dn(g,i):null,u=a.getAttribute("formmethod")||v.getAttribute("method")||Eo,c=jc(a.getAttribute("formenctype"))||jc(v.getAttribute("enctype"))||jo,f=new FormData(v,a),!wx()){let{name:m,type:b,value:w}=a;if(b==="image"){let T=m?`${m}.`:"";f.append(`${T}x`,"0"),f.append(`${T}y`,"0")}else m&&f.append(m,w)}}else{if(Xo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Eo,o=null,c=jo,p=a}return f&&c==="text/plain"&&(p=f,f=void 0),{action:o,method:u.toLowerCase(),encType:c,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function xf(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function Cx(a,i,u){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${u}`:i&&Dn(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function Tx(a,i){if(a.id in i)return i[a.id];try{let u=await import(a.module);return i[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zx(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Rx(a,i,u){let o=await Promise.all(a.map(async c=>{let f=i.routes[c.route.id];if(f){let p=await Tx(f,u);return p.links?p.links():[]}return[]}));return Nx(o.flat(1).filter(zx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function nm(a,i,u,o,c,f){let p=(g,m)=>u[m]?g.route.id!==u[m].route.id:!0,v=(g,m)=>u[m].pathname!==g.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==g.params["*"];return f==="assets"?i.filter((g,m)=>p(g,m)||v(g,m)):f==="data"?i.filter((g,m)=>{let b=o.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(p(g,m)||v(g,m))return!0;if(g.route.shouldRevalidate){let w=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Ax(a,i,{includeHydrateFallback:u}={}){return Ox(a.map(o=>{let c=i.routes[o.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function Ox(a){return[...new Set(a)]}function Mx(a){let i={},u=Object.keys(a).sort();for(let o of u)i[o]=a[o];return i}function Nx(a,i){let u=new Set;return new Set(i),a.reduce((o,c)=>{let f=JSON.stringify(Mx(c));return u.has(f)||(u.add(f),o.push({key:f,link:c})),o},[])}function b1(){let a=x.useContext(Bl);return xf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function _x(){let a=x.useContext(qo);return xf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var bf=x.createContext(void 0);bf.displayName="FrameworkContext";function S1(){let a=x.useContext(bf);return xf(a,"You must render this element inside a <HydratedRouter> element"),a}function kx(a,i){let u=x.useContext(bf),[o,c]=x.useState(!1),[f,p]=x.useState(!1),{onFocus:v,onBlur:g,onMouseEnter:m,onMouseLeave:b,onTouchStart:w}=i,T=x.useRef(null);x.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let k=M=>{M.forEach($=>{p($.isIntersecting)})},U=new IntersectionObserver(k,{threshold:.5});return T.current&&U.observe(T.current),()=>{U.disconnect()}}},[a]),x.useEffect(()=>{if(o){let k=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(k)}}},[o]);let A=()=>{c(!0)},R=()=>{c(!1),p(!1)};return u?a!=="intent"?[f,T,{}]:[f,T,{onFocus:Bi(v,A),onBlur:Bi(g,R),onMouseEnter:Bi(m,A),onMouseLeave:Bi(b,R),onTouchStart:Bi(w,A)}]:[!1,T,{}]}function Bi(a,i){return u=>{a&&a(u),u.defaultPrevented||i(u)}}function Dx({page:a,...i}){let{router:u}=b1(),o=x.useMemo(()=>s1(u.routes,a,u.basename),[u.routes,a,u.basename]);return o?x.createElement(Lx,{page:a,matches:o,...i}):null}function Bx(a){let{manifest:i,routeModules:u}=S1(),[o,c]=x.useState([]);return x.useEffect(()=>{let f=!1;return Rx(a,i,u).then(p=>{f||c(p)}),()=>{f=!0}},[a,i,u]),o}function Lx({page:a,matches:i,...u}){let o=$n(),{manifest:c,routeModules:f}=S1(),{basename:p}=b1(),{loaderData:v,matches:g}=_x(),m=x.useMemo(()=>nm(a,i,g,c,o,"data"),[a,i,g,c,o]),b=x.useMemo(()=>nm(a,i,g,c,o,"assets"),[a,i,g,c,o]),w=x.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let R=new Set,k=!1;if(i.forEach(M=>{let $=c.routes[M.route.id];!$||!$.hasLoader||(!m.some(L=>L.route.id===M.route.id)&&M.route.id in v&&f[M.route.id]?.shouldRevalidate||$.hasClientLoader?k=!0:R.add(M.route.id))}),R.size===0)return[];let U=Cx(a,p,"data");return k&&R.size>0&&U.searchParams.set("_routes",i.filter(M=>R.has(M.route.id)).map(M=>M.route.id).join(",")),[U.pathname+U.search]},[p,v,o,c,m,i,a,f]),T=x.useMemo(()=>Ax(b,c),[b,c]),A=Bx(b);return x.createElement(x.Fragment,null,w.map(R=>x.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...u})),T.map(R=>x.createElement("link",{key:R,rel:"modulepreload",href:R,...u})),A.map(({key:R,link:k})=>x.createElement("link",{key:R,nonce:u.nonce,...k})))}function $x(...a){return i=>{a.forEach(u=>{typeof u=="function"?u(i):u!=null&&(u.current=i)})}}var w1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w1&&(window.__reactRouterVersion="7.9.4")}catch{}function Ux({basename:a,children:i,window:u}){let o=x.useRef();o.current==null&&(o.current=z2({window:u,v5Compat:!0}));let c=o.current,[f,p]=x.useState({action:c.action,location:c.location}),v=x.useCallback(g=>{x.startTransition(()=>p(g))},[p]);return x.useLayoutEffect(()=>c.listen(v),[c,v]),x.createElement(mx,{basename:a,children:i,location:f.location,navigationType:f.action,navigator:c})}var E1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ll=x.forwardRef(function({onClick:i,discover:u="render",prefetch:o="none",relative:c,reloadDocument:f,replace:p,state:v,target:g,to:m,preventScrollReset:b,viewTransition:w,...T},A){let{basename:R}=x.useContext(cn),k=typeof m=="string"&&E1.test(m),U,M=!1;if(typeof m=="string"&&k&&(U=m,w1))try{let W=new URL(window.location.href),ce=m.startsWith("//")?new URL(W.protocol+m):new URL(m),fe=Dn(ce.pathname,R);ce.origin===W.origin&&fe!=null?m=fe+ce.search+ce.hash:M=!0}catch{sn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=ex(m,{relative:c}),[L,Z,K]=kx(o,T),G=qx(m,{replace:p,state:v,target:g,preventScrollReset:b,relative:c,viewTransition:w});function V(W){i&&i(W),W.defaultPrevented||G(W)}let ne=x.createElement("a",{...T,...K,href:U||$,onClick:M||f?i:V,ref:$x(A,Z),target:g,"data-discover":!k&&u==="render"?"true":void 0});return L&&!k?x.createElement(x.Fragment,null,ne,x.createElement(Dx,{page:$})):ne});Ll.displayName="Link";var Hx=x.forwardRef(function({"aria-current":i="page",caseSensitive:u=!1,className:o="",end:c=!1,style:f,to:p,viewTransition:v,children:g,...m},b){let w=Zi(p,{relative:m.relative}),T=$n(),A=x.useContext(qo),{navigator:R,basename:k}=x.useContext(cn),U=A!=null&&Kx(w)&&v===!0,M=R.encodeLocation?R.encodeLocation(w).pathname:w.pathname,$=T.pathname,L=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;u||($=$.toLowerCase(),L=L?L.toLowerCase():null,M=M.toLowerCase()),L&&k&&(L=Dn(L,k)||L);const Z=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let K=$===M||!c&&$.startsWith(M)&&$.charAt(Z)==="/",G=L!=null&&(L===M||!c&&L.startsWith(M)&&L.charAt(M.length)==="/"),V={isActive:K,isPending:G,isTransitioning:U},ne=K?i:void 0,W;typeof o=="function"?W=o(V):W=[o,K?"active":null,G?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let ce=typeof f=="function"?f(V):f;return x.createElement(Ll,{...m,"aria-current":ne,className:W,ref:b,style:ce,to:p,viewTransition:v},typeof g=="function"?g(V):g)});Hx.displayName="NavLink";var Yx=x.forwardRef(({discover:a="render",fetcherKey:i,navigate:u,reloadDocument:o,replace:c,state:f,method:p=Eo,action:v,onSubmit:g,relative:m,preventScrollReset:b,viewTransition:w,...T},A)=>{let R=Qx(),k=Zx(v,{relative:m}),U=p.toLowerCase()==="get"?"get":"post",M=typeof v=="string"&&E1.test(v),$=L=>{if(g&&g(L),L.defaultPrevented)return;L.preventDefault();let Z=L.nativeEvent.submitter,K=Z?.getAttribute("formmethod")||p;R(Z||L.currentTarget,{fetcherKey:i,method:K,navigate:u,replace:c,state:f,relative:m,preventScrollReset:b,viewTransition:w})};return x.createElement("form",{ref:A,method:U,action:k,onSubmit:o?g:$,...T,"data-discover":!M&&a==="render"?"true":void 0})});Yx.displayName="Form";function Gx(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j1(a){let i=x.useContext(Bl);return qe(i,Gx(a)),i}function qx(a,{target:i,replace:u,state:o,preventScrollReset:c,relative:f,viewTransition:p}={}){let v=gf(),g=$n(),m=Zi(a,{relative:f});return x.useCallback(b=>{if(Sx(b,i)){b.preventDefault();let w=u!==void 0?u:Yi(g)===Yi(m);v(a,{replace:w,state:o,preventScrollReset:c,relative:f,viewTransition:p})}},[g,v,m,u,o,i,a,c,f,p])}var Xx=0,Vx=()=>`__${String(++Xx)}__`;function Qx(){let{router:a}=j1("useSubmit"),{basename:i}=x.useContext(cn),u=fx();return x.useCallback(async(o,c={})=>{let{action:f,method:p,encType:v,formData:g,body:m}=jx(o,i);if(c.navigate===!1){let b=c.fetcherKey||Vx();await a.fetch(b,u,c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||p,formEncType:c.encType||v,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:g,body:m,formMethod:c.method||p,formEncType:c.encType||v,replace:c.replace,state:c.state,fromRouteId:u,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,i,u])}function Zx(a,{relative:i}={}){let{basename:u}=x.useContext(cn),o=x.useContext(Ln);qe(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),f={...Zi(a||".",{relative:i})},p=$n();if(a==null){f.search=p.search;let v=new URLSearchParams(f.search),g=v.getAll("index");if(g.some(b=>b==="")){v.delete("index"),g.filter(w=>w).forEach(w=>v.append("index",w));let b=v.toString();f.search=b?`?${b}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:_n([u,f.pathname])),Yi(f)}function Kx(a,{relative:i}={}){let u=x.useContext(m1);qe(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=j1("useViewTransitionState"),c=Zi(a,{relative:i});if(!u.isTransitioning)return!1;let f=Dn(u.currentLocation.pathname,o)||u.currentLocation.pathname,p=Dn(u.nextLocation.pathname,o)||u.nextLocation.pathname;return Mo(c.pathname,p)!=null||Mo(c.pathname,f)!=null}var Jx=u1();const zl=Xi(Jx);var ft=function(){return ft=Object.assign||function(i){for(var u,o=1,c=arguments.length;o<c;o++){u=arguments[o];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(i[f]=u[f])}return i},ft.apply(this,arguments)};function Al(a,i,u){if(u||arguments.length===2)for(var o=0,c=i.length,f;o<c;o++)(f||!(o in i))&&(f||(f=Array.prototype.slice.call(i,0,o)),f[o]=i[o]);return a.concat(f||Array.prototype.slice.call(i))}var Ue="-ms-",Hi="-moz-",ze="-webkit-",C1="comm",Vo="rule",Sf="decl",Fx="@import",T1="@keyframes",Wx="@layer",z1=Math.abs,wf=String.fromCharCode,ef=Object.assign;function Ix(a,i){return nt(a,0)^45?(((i<<2^nt(a,0))<<2^nt(a,1))<<2^nt(a,2))<<2^nt(a,3):0}function R1(a){return a.trim()}function On(a,i){return(a=i.exec(a))?a[0]:a}function me(a,i,u){return a.replace(i,u)}function Co(a,i,u){return a.indexOf(i,u)}function nt(a,i){return a.charCodeAt(i)|0}function Ol(a,i,u){return a.slice(i,u)}function un(a){return a.length}function A1(a){return a.length}function $i(a,i){return i.push(a),a}function Px(a,i){return a.map(i).join("")}function am(a,i){return a.filter(function(u){return!On(u,i)})}var Qo=1,Ml=1,O1=0,Kt=0,Ie=0,$l="";function Zo(a,i,u,o,c,f,p,v){return{value:a,root:i,parent:u,type:o,props:c,children:f,line:Qo,column:Ml,length:p,return:"",siblings:v}}function da(a,i){return ef(Zo("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function El(a){for(;a.root;)a=da(a.root,{children:[a]});$i(a,a.siblings)}function eb(){return Ie}function tb(){return Ie=Kt>0?nt($l,--Kt):0,Ml--,Ie===10&&(Ml=1,Qo--),Ie}function tn(){return Ie=Kt<O1?nt($l,Kt++):0,Ml++,Ie===10&&(Ml=1,Qo++),Ie}function Ba(){return nt($l,Kt)}function To(){return Kt}function Ko(a,i){return Ol($l,a,i)}function tf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nb(a){return Qo=Ml=1,O1=un($l=a),Kt=0,[]}function ab(a){return $l="",a}function Cc(a){return R1(Ko(Kt-1,nf(a===91?a+2:a===40?a+1:a)))}function lb(a){for(;(Ie=Ba())&&Ie<33;)tn();return tf(a)>2||tf(Ie)>3?"":" "}function ib(a,i){for(;--i&&tn()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Ko(a,To()+(i<6&&Ba()==32&&tn()==32))}function nf(a){for(;tn();)switch(Ie){case a:return Kt;case 34:case 39:a!==34&&a!==39&&nf(Ie);break;case 40:a===41&&nf(a);break;case 92:tn();break}return Kt}function rb(a,i){for(;tn()&&a+Ie!==57;)if(a+Ie===84&&Ba()===47)break;return"/*"+Ko(i,Kt-1)+"*"+wf(a===47?a:tn())}function ob(a){for(;!tf(Ba());)tn();return Ko(a,Kt)}function ub(a){return ab(zo("",null,null,null,[""],a=nb(a),0,[0],a))}function zo(a,i,u,o,c,f,p,v,g){for(var m=0,b=0,w=p,T=0,A=0,R=0,k=1,U=1,M=1,$=0,L="",Z=c,K=f,G=o,V=L;U;)switch(R=$,$=tn()){case 40:if(R!=108&&nt(V,w-1)==58){Co(V+=me(Cc($),"&","&\f"),"&\f",z1(m?v[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:V+=Cc($);break;case 9:case 10:case 13:case 32:V+=lb(R);break;case 92:V+=ib(To()-1,7);continue;case 47:switch(Ba()){case 42:case 47:$i(sb(rb(tn(),To()),i,u,g),g);break;default:V+="/"}break;case 123*k:v[m++]=un(V)*M;case 125*k:case 59:case 0:switch($){case 0:case 125:U=0;case 59+b:M==-1&&(V=me(V,/\f/g,"")),A>0&&un(V)-w&&$i(A>32?im(V+";",o,u,w-1,g):im(me(V," ","")+";",o,u,w-2,g),g);break;case 59:V+=";";default:if($i(G=lm(V,i,u,m,b,c,v,L,Z=[],K=[],w,f),f),$===123)if(b===0)zo(V,i,G,G,Z,f,w,v,K);else switch(T===99&&nt(V,3)===110?100:T){case 100:case 108:case 109:case 115:zo(a,G,G,o&&$i(lm(a,G,G,0,0,c,v,L,c,Z=[],w,K),K),c,K,w,v,o?Z:K);break;default:zo(V,G,G,G,[""],K,0,v,K)}}m=b=A=0,k=M=1,L=V="",w=p;break;case 58:w=1+un(V),A=R;default:if(k<1){if($==123)--k;else if($==125&&k++==0&&tb()==125)continue}switch(V+=wf($),$*k){case 38:M=b>0?1:(V+="\f",-1);break;case 44:v[m++]=(un(V)-1)*M,M=1;break;case 64:Ba()===45&&(V+=Cc(tn())),T=Ba(),b=w=un(L=V+=ob(To())),$++;break;case 45:R===45&&un(V)==2&&(k=0)}}return f}function lm(a,i,u,o,c,f,p,v,g,m,b,w){for(var T=c-1,A=c===0?f:[""],R=A1(A),k=0,U=0,M=0;k<o;++k)for(var $=0,L=Ol(a,T+1,T=z1(U=p[k])),Z=a;$<R;++$)(Z=R1(U>0?A[$]+" "+L:me(L,/&\f/g,A[$])))&&(g[M++]=Z);return Zo(a,i,u,c===0?Vo:v,g,m,b,w)}function sb(a,i,u,o){return Zo(a,i,u,C1,wf(eb()),Ol(a,2,-2),0,o)}function im(a,i,u,o,c){return Zo(a,i,u,Sf,Ol(a,0,o),Ol(a,o+1,-1),o,c)}function M1(a,i,u){switch(Ix(a,i)){case 5103:return ze+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+a+a;case 4789:return Hi+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+a+Hi+a+Ue+a+a;case 5936:switch(nt(a,i+11)){case 114:return ze+a+Ue+me(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return ze+a+Ue+me(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return ze+a+Ue+me(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return ze+a+Ue+a+a;case 6165:return ze+a+Ue+"flex-"+a+a;case 5187:return ze+a+me(a,/(\w+).+(:[^]+)/,ze+"box-$1$2"+Ue+"flex-$1$2")+a;case 5443:return ze+a+Ue+"flex-item-"+me(a,/flex-|-self/g,"")+(On(a,/flex-|baseline/)?"":Ue+"grid-row-"+me(a,/flex-|-self/g,""))+a;case 4675:return ze+a+Ue+"flex-line-pack"+me(a,/align-content|flex-|-self/g,"")+a;case 5548:return ze+a+Ue+me(a,"shrink","negative")+a;case 5292:return ze+a+Ue+me(a,"basis","preferred-size")+a;case 6060:return ze+"box-"+me(a,"-grow","")+ze+a+Ue+me(a,"grow","positive")+a;case 4554:return ze+me(a,/([^-])(transform)/g,"$1"+ze+"$2")+a;case 6187:return me(me(me(a,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),a,"")+a;case 5495:case 3959:return me(a,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return me(me(a,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+a+a;case 4200:if(!On(a,/flex-|baseline/))return Ue+"grid-column-align"+Ol(a,i)+a;break;case 2592:case 3360:return Ue+me(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(o,c){return i=c,On(o.props,/grid-\w+-end/)})?~Co(a+(u=u[i].value),"span",0)?a:Ue+me(a,"-start","")+a+Ue+"grid-row-span:"+(~Co(u,"span",0)?On(u,/\d+/):+On(u,/\d+/)-+On(a,/\d+/))+";":Ue+me(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(o){return On(o.props,/grid-\w+-start/)})?a:Ue+me(me(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return me(a,/(.+)-inline(.+)/,ze+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(a)-1-i>6)switch(nt(a,i+1)){case 109:if(nt(a,i+4)!==45)break;case 102:return me(a,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+Hi+(nt(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~Co(a,"stretch",0)?M1(me(a,"stretch","fill-available"),i,u)+a:a}break;case 5152:case 5920:return me(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,f,p,v,g,m){return Ue+c+":"+f+m+(p?Ue+c+"-span:"+(v?g:+g-+f)+m:"")+a});case 4949:if(nt(a,i+6)===121)return me(a,":",":"+ze)+a;break;case 6444:switch(nt(a,nt(a,14)===45?18:11)){case 120:return me(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(nt(a,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+Ue+"$2box$3")+a;case 100:return me(a,":",":"+Ue)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(a,"scroll-","scroll-snap-")+a}return a}function No(a,i){for(var u="",o=0;o<a.length;o++)u+=i(a[o],o,a,i)||"";return u}function cb(a,i,u,o){switch(a.type){case Wx:if(a.children.length)break;case Fx:case Sf:return a.return=a.return||a.value;case C1:return"";case T1:return a.return=a.value+"{"+No(a.children,o)+"}";case Vo:if(!un(a.value=a.props.join(",")))return""}return un(u=No(a.children,o))?a.return=a.value+"{"+u+"}":""}function fb(a){var i=A1(a);return function(u,o,c,f){for(var p="",v=0;v<i;v++)p+=a[v](u,o,c,f)||"";return p}}function db(a){return function(i){i.root||(i=i.return)&&a(i)}}function hb(a,i,u,o){if(a.length>-1&&!a.return)switch(a.type){case Sf:a.return=M1(a.value,a.length,u);return;case T1:return No([da(a,{value:me(a.value,"@","@"+ze)})],o);case Vo:if(a.length)return Px(u=a.props,function(c){switch(On(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":El(da(a,{props:[me(c,/:(read-\w+)/,":"+Hi+"$1")]})),El(da(a,{props:[c]})),ef(a,{props:am(u,o)});break;case"::placeholder":El(da(a,{props:[me(c,/:(plac\w+)/,":"+ze+"input-$1")]})),El(da(a,{props:[me(c,/:(plac\w+)/,":"+Hi+"$1")]})),El(da(a,{props:[me(c,/:(plac\w+)/,Ue+"input-$1")]})),El(da(a,{props:[c]})),ef(a,{props:am(u,o)});break}return""})}}var pb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bt={},Nl=typeof process<"u"&&Bt!==void 0&&(Bt.REACT_APP_SC_ATTR||Bt.SC_ATTR)||"data-styled",N1="active",_1="data-styled-version",Jo="6.1.19",Ef=`/*!sc*/
`,_o=typeof window<"u"&&typeof document<"u",mb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==""?Bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.SC_DISABLE_SPEEDY!==void 0&&Bt.SC_DISABLE_SPEEDY!==""&&Bt.SC_DISABLE_SPEEDY!=="false"&&Bt.SC_DISABLE_SPEEDY),gb={},Fo=Object.freeze([]),_l=Object.freeze({});function k1(a,i,u){return u===void 0&&(u=_l),a.theme!==u.theme&&a.theme||i||u.theme}var D1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yb=/(^-|-$)/g;function rm(a){return a.replace(vb,"-").replace(yb,"")}var xb=/(a)(d)/gi,po=52,om=function(a){return String.fromCharCode(a+(a>25?39:97))};function af(a){var i,u="";for(i=Math.abs(a);i>po;i=i/po|0)u=om(i%po)+u;return(om(i%po)+u).replace(xb,"$1-$2")}var Tc,B1=5381,Rl=function(a,i){for(var u=i.length;u;)a=33*a^i.charCodeAt(--u);return a},L1=function(a){return Rl(B1,a)};function jf(a){return af(L1(a)>>>0)}function bb(a){return a.displayName||a.name||"Component"}function zc(a){return typeof a=="string"&&!0}var $1=typeof Symbol=="function"&&Symbol.for,U1=$1?Symbol.for("react.memo"):60115,Sb=$1?Symbol.for("react.forward_ref"):60112,wb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Eb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},H1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jb=((Tc={})[Sb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tc[U1]=H1,Tc);function um(a){return("type"in(i=a)&&i.type.$$typeof)===U1?H1:"$$typeof"in a?jb[a.$$typeof]:wb;var i}var Cb=Object.defineProperty,Tb=Object.getOwnPropertyNames,sm=Object.getOwnPropertySymbols,zb=Object.getOwnPropertyDescriptor,Rb=Object.getPrototypeOf,cm=Object.prototype;function Y1(a,i,u){if(typeof i!="string"){if(cm){var o=Rb(i);o&&o!==cm&&Y1(a,o,u)}var c=Tb(i);sm&&(c=c.concat(sm(i)));for(var f=um(a),p=um(i),v=0;v<c.length;++v){var g=c[v];if(!(g in Eb||u&&u[g]||p&&g in p||f&&g in f)){var m=zb(i,g);try{Cb(a,g,m)}catch{}}}}return a}function kl(a){return typeof a=="function"}function Cf(a){return typeof a=="object"&&"styledComponentId"in a}function Da(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function ko(a,i){if(a.length===0)return"";for(var u=a[0],o=1;o<a.length;o++)u+=a[o];return u}function Gi(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function lf(a,i,u){if(u===void 0&&(u=!1),!u&&!Gi(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var o=0;o<i.length;o++)a[o]=lf(a[o],i[o]);else if(Gi(i))for(var o in i)a[o]=lf(a[o],i[o]);return a}function Tf(a,i){Object.defineProperty(a,"toString",{value:i})}function Ki(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var Ab=(function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return a.prototype.indexOfGroup=function(i){for(var u=0,o=0;o<i;o++)u+=this.groupSizes[o];return u},a.prototype.insertRules=function(i,u){if(i>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,f=c;i>=f;)if((f<<=1)<0)throw Ki(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var p=c;p<f;p++)this.groupSizes[p]=0}for(var v=this.indexOfGroup(i+1),g=(p=0,u.length);p<g;p++)this.tag.insertRule(v,u[p])&&(this.groupSizes[i]++,v++)},a.prototype.clearGroup=function(i){if(i<this.length){var u=this.groupSizes[i],o=this.indexOfGroup(i),c=o+u;this.groupSizes[i]=0;for(var f=o;f<c;f++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(i){var u="";if(i>=this.length||this.groupSizes[i]===0)return u;for(var o=this.groupSizes[i],c=this.indexOfGroup(i),f=c+o,p=c;p<f;p++)u+="".concat(this.tag.getRule(p)).concat(Ef);return u},a})(),Ro=new Map,Do=new Map,Ao=1,mo=function(a){if(Ro.has(a))return Ro.get(a);for(;Do.has(Ao);)Ao++;var i=Ao++;return Ro.set(a,i),Do.set(i,a),i},Ob=function(a,i){Ao=i+1,Ro.set(a,i),Do.set(i,a)},Mb="style[".concat(Nl,"][").concat(_1,'="').concat(Jo,'"]'),Nb=new RegExp("^".concat(Nl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_b=function(a,i,u){for(var o,c=u.split(","),f=0,p=c.length;f<p;f++)(o=c[f])&&a.registerName(i,o)},kb=function(a,i){for(var u,o=((u=i.textContent)!==null&&u!==void 0?u:"").split(Ef),c=[],f=0,p=o.length;f<p;f++){var v=o[f].trim();if(v){var g=v.match(Nb);if(g){var m=0|parseInt(g[1],10),b=g[2];m!==0&&(Ob(b,m),_b(a,b,g[3]),a.getTag().insertRules(m,c)),c.length=0}else c.push(v)}}},fm=function(a){for(var i=document.querySelectorAll(Mb),u=0,o=i.length;u<o;u++){var c=i[u];c&&c.getAttribute(Nl)!==N1&&(kb(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function Db(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var G1=function(a){var i=document.head,u=a||i,o=document.createElement("style"),c=(function(v){var g=Array.from(v.querySelectorAll("style[".concat(Nl,"]")));return g[g.length-1]})(u),f=c!==void 0?c.nextSibling:null;o.setAttribute(Nl,N1),o.setAttribute(_1,Jo);var p=Db();return p&&o.setAttribute("nonce",p),u.insertBefore(o,f),o},Bb=(function(){function a(i){this.element=G1(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,c=0,f=o.length;c<f;c++){var p=o[c];if(p.ownerNode===u)return p}throw Ki(17)})(this.element),this.length=0}return a.prototype.insertRule=function(i,u){try{return this.sheet.insertRule(u,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var u=this.sheet.cssRules[i];return u&&u.cssText?u.cssText:""},a})(),Lb=(function(){function a(i){this.element=G1(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,u){if(i<=this.length&&i>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a})(),$b=(function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,u){return i<=this.length&&(this.rules.splice(i,0,u),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a})(),dm=_o,Ub={isServer:!_o,useCSSOMInjection:!mb},Bo=(function(){function a(i,u,o){i===void 0&&(i=_l),u===void 0&&(u={});var c=this;this.options=ft(ft({},Ub),i),this.gs=u,this.names=new Map(o),this.server=!!i.isServer,!this.server&&_o&&dm&&(dm=!1,fm(this)),Tf(this,function(){return(function(f){for(var p=f.getTag(),v=p.length,g="",m=function(w){var T=(function(M){return Do.get(M)})(w);if(T===void 0)return"continue";var A=f.names.get(T),R=p.getGroup(w);if(A===void 0||!A.size||R.length===0)return"continue";var k="".concat(Nl,".g").concat(w,'[id="').concat(T,'"]'),U="";A!==void 0&&A.forEach(function(M){M.length>0&&(U+="".concat(M,","))}),g+="".concat(R).concat(k,'{content:"').concat(U,'"}').concat(Ef)},b=0;b<v;b++)m(b);return g})(c)})}return a.registerId=function(i){return mo(i)},a.prototype.rehydrate=function(){!this.server&&_o&&fm(this)},a.prototype.reconstructWithOptions=function(i,u){return u===void 0&&(u=!0),new a(ft(ft({},this.options),i),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(u){var o=u.useCSSOMInjection,c=u.target;return u.isServer?new $b(c):o?new Bb(c):new Lb(c)})(this.options),new Ab(i)));var i},a.prototype.hasNameForId=function(i,u){return this.names.has(i)&&this.names.get(i).has(u)},a.prototype.registerName=function(i,u){if(mo(i),this.names.has(i))this.names.get(i).add(u);else{var o=new Set;o.add(u),this.names.set(i,o)}},a.prototype.insertRules=function(i,u,o){this.registerName(i,u),this.getTag().insertRules(mo(i),o)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(mo(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a})(),Hb=/&/g,Yb=/^\s*\/\/.*$/gm;function q1(a,i){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(i," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(i," ")),u.props=u.props.map(function(o){return"".concat(i," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=q1(u.children,i)),u})}function Gb(a){var i,u,o,c=_l,f=c.options,p=f===void 0?_l:f,v=c.plugins,g=v===void 0?Fo:v,m=function(T,A,R){return R.startsWith(u)&&R.endsWith(u)&&R.replaceAll(u,"").length>0?".".concat(i):T},b=g.slice();b.push(function(T){T.type===Vo&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(Hb,u).replace(o,m))}),p.prefix&&b.push(hb),b.push(cb);var w=function(T,A,R,k){A===void 0&&(A=""),R===void 0&&(R=""),k===void 0&&(k="&"),i=k,u=A,o=new RegExp("\\".concat(u,"\\b"),"g");var U=T.replace(Yb,""),M=ub(R||A?"".concat(R," ").concat(A," { ").concat(U," }"):U);p.namespace&&(M=q1(M,p.namespace));var $=[];return No(M,fb(b.concat(db(function(L){return $.push(L)})))),$};return w.hash=g.length?g.reduce(function(T,A){return A.name||Ki(15),Rl(T,A.name)},B1).toString():"",w}var qb=new Bo,rf=Gb(),X1=Oe.createContext({shouldForwardProp:void 0,styleSheet:qb,stylis:rf});X1.Consumer;Oe.createContext(void 0);function of(){return x.useContext(X1)}var V1=(function(){function a(i,u){var o=this;this.inject=function(c,f){f===void 0&&(f=rf);var p=o.name+f.hash;c.hasNameForId(o.id,p)||c.insertRules(o.id,p,f(o.rules,p,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=u,Tf(this,function(){throw Ki(12,String(o.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=rf),this.name+i.hash},a})(),Xb=function(a){return a>="A"&&a<="Z"};function hm(a){for(var i="",u=0;u<a.length;u++){var o=a[u];if(u===1&&o==="-"&&a[0]==="-")return a;Xb(o)?i+="-"+o.toLowerCase():i+=o}return i.startsWith("ms-")?"-"+i:i}var Q1=function(a){return a==null||a===!1||a===""},Z1=function(a){var i,u,o=[];for(var c in a){var f=a[c];a.hasOwnProperty(c)&&!Q1(f)&&(Array.isArray(f)&&f.isCss||kl(f)?o.push("".concat(hm(c),":"),f,";"):Gi(f)?o.push.apply(o,Al(Al(["".concat(c," {")],Z1(f),!1),["}"],!1)):o.push("".concat(hm(c),": ").concat((i=c,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||i in pb||i.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function pa(a,i,u,o){if(Q1(a))return[];if(Cf(a))return[".".concat(a.styledComponentId)];if(kl(a)){if(!kl(f=a)||f.prototype&&f.prototype.isReactComponent||!i)return[a];var c=a(i);return pa(c,i,u,o)}var f;return a instanceof V1?u?(a.inject(u,o),[a.getName(o)]):[a]:Gi(a)?Z1(a):Array.isArray(a)?Array.prototype.concat.apply(Fo,a.map(function(p){return pa(p,i,u,o)})):[a.toString()]}function K1(a){for(var i=0;i<a.length;i+=1){var u=a[i];if(kl(u)&&!Cf(u))return!1}return!0}var Vb=L1(Jo),Qb=(function(){function a(i,u,o){this.rules=i,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&K1(i),this.componentId=u,this.baseHash=Rl(Vb,u),this.baseStyle=o,Bo.registerId(u)}return a.prototype.generateAndInjectStyles=function(i,u,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=Da(c,this.staticRulesId);else{var f=ko(pa(this.rules,i,u,o)),p=af(Rl(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,p)){var v=o(f,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,v)}c=Da(c,p),this.staticRulesId=p}else{for(var g=Rl(this.baseHash,o.hash),m="",b=0;b<this.rules.length;b++){var w=this.rules[b];if(typeof w=="string")m+=w;else if(w){var T=ko(pa(w,i,u,o));g=Rl(g,T+b),m+=T}}if(m){var A=af(g>>>0);u.hasNameForId(this.componentId,A)||u.insertRules(this.componentId,A,o(m,".".concat(A),void 0,this.componentId)),c=Da(c,A)}}return c},a})(),zf=Oe.createContext(void 0);zf.Consumer;var Rc={};function Zb(a,i,u){var o=Cf(a),c=a,f=!zc(a),p=i.attrs,v=p===void 0?Fo:p,g=i.componentId,m=g===void 0?(function(Z,K){var G=typeof Z!="string"?"sc":rm(Z);Rc[G]=(Rc[G]||0)+1;var V="".concat(G,"-").concat(jf(Jo+G+Rc[G]));return K?"".concat(K,"-").concat(V):V})(i.displayName,i.parentComponentId):g,b=i.displayName,w=b===void 0?(function(Z){return zc(Z)?"styled.".concat(Z):"Styled(".concat(bb(Z),")")})(a):b,T=i.displayName&&i.componentId?"".concat(rm(i.displayName),"-").concat(i.componentId):i.componentId||m,A=o&&c.attrs?c.attrs.concat(v).filter(Boolean):v,R=i.shouldForwardProp;if(o&&c.shouldForwardProp){var k=c.shouldForwardProp;if(i.shouldForwardProp){var U=i.shouldForwardProp;R=function(Z,K){return k(Z,K)&&U(Z,K)}}else R=k}var M=new Qb(u,T,o?c.componentStyle:void 0);function $(Z,K){return(function(G,V,ne){var W=G.attrs,ce=G.componentStyle,fe=G.defaultProps,He=G.foldedComponentIds,P=G.styledComponentId,ae=G.target,ge=Oe.useContext(zf),D=of(),Q=G.shouldForwardProp||D.shouldForwardProp,I=k1(V,ge,fe)||_l,ee=(function(ie,ue,ve){for(var Ge,Ee=ft(ft({},ue),{className:void 0,theme:ve}),Ct=0;Ct<ie.length;Ct+=1){var Jt=kl(Ge=ie[Ct])?Ge(Ee):Ge;for(var ht in Jt)Ee[ht]=ht==="className"?Da(Ee[ht],Jt[ht]):ht==="style"?ft(ft({},Ee[ht]),Jt[ht]):Jt[ht]}return ue.className&&(Ee.className=Da(Ee.className,ue.className)),Ee})(W,V,I),pe=ee.as||ae,j={};for(var Y in ee)ee[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&ee.theme===I||(Y==="forwardedAs"?j.as=ee.forwardedAs:Q&&!Q(Y,pe)||(j[Y]=ee[Y]));var J=(function(ie,ue){var ve=of(),Ge=ie.generateAndInjectStyles(ue,ve.styleSheet,ve.stylis);return Ge})(ce,ee),F=Da(He,P);return J&&(F+=" "+J),ee.className&&(F+=" "+ee.className),j[zc(pe)&&!D1.has(pe)?"class":"className"]=F,ne&&(j.ref=ne),x.createElement(pe,j)})(L,Z,K)}$.displayName=w;var L=Oe.forwardRef($);return L.attrs=A,L.componentStyle=M,L.displayName=w,L.shouldForwardProp=R,L.foldedComponentIds=o?Da(c.foldedComponentIds,c.styledComponentId):"",L.styledComponentId=T,L.target=o?c.target:a,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=o?(function(K){for(var G=[],V=1;V<arguments.length;V++)G[V-1]=arguments[V];for(var ne=0,W=G;ne<W.length;ne++)lf(K,W[ne],!0);return K})({},c.defaultProps,Z):Z}}),Tf(L,function(){return".".concat(L.styledComponentId)}),f&&Y1(L,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function pm(a,i){for(var u=[a[0]],o=0,c=i.length;o<c;o+=1)u.push(i[o],a[o+1]);return u}var mm=function(a){return Object.assign(a,{isCss:!0})};function Bn(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];if(kl(a)||Gi(a))return mm(pa(pm(Fo,Al([a],i,!0))));var o=a;return i.length===0&&o.length===1&&typeof o[0]=="string"?pa(o):mm(pa(pm(o,i)))}function uf(a,i,u){if(u===void 0&&(u=_l),!i)throw Ki(1,i);var o=function(c){for(var f=[],p=1;p<arguments.length;p++)f[p-1]=arguments[p];return a(i,u,Bn.apply(void 0,Al([c],f,!1)))};return o.attrs=function(c){return uf(a,i,ft(ft({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return uf(a,i,ft(ft({},u),c))},o}var J1=function(a){return uf(Zb,a)},S=J1;D1.forEach(function(a){S[a]=J1(a)});var Kb=(function(){function a(i,u){this.rules=i,this.componentId=u,this.isStatic=K1(i),Bo.registerId(this.componentId+1)}return a.prototype.createStyles=function(i,u,o,c){var f=c(ko(pa(this.rules,u,o,c)),""),p=this.componentId+i;o.insertRules(p,p,f)},a.prototype.removeStyles=function(i,u){u.clearRules(this.componentId+i)},a.prototype.renderStyles=function(i,u,o,c){i>2&&Bo.registerId(this.componentId+i),this.removeStyles(i,o),this.createStyles(i,u,o,c)},a})();function F1(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];var o=Bn.apply(void 0,Al([a],i,!1)),c="sc-global-".concat(jf(JSON.stringify(o))),f=new Kb(o,c),p=function(g){var m=of(),b=Oe.useContext(zf),w=Oe.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&v(w,g,m.styleSheet,b,m.stylis),Oe.useLayoutEffect(function(){if(!m.styleSheet.server)return v(w,g,m.styleSheet,b,m.stylis),function(){return f.removeStyles(w,m.styleSheet)}},[w,g,m.styleSheet,b,m.stylis]),null};function v(g,m,b,w,T){if(f.isStatic)f.renderStyles(g,gb,b,T);else{var A=ft(ft({},m),{theme:k1(m,w,p.defaultProps)});f.renderStyles(g,A,b,T)}}return Oe.memo(p)}function Un(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];var o=ko(Bn.apply(void 0,Al([a],i,!1))),c=jf(o);return new V1(c,o)}var W1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gm=Oe.createContext&&Oe.createContext(W1),Jb=["attr","size","title"];function Fb(a,i){if(a==null)return{};var u=Wb(a,i),o,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)o=f[c],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(u[o]=a[o])}return u}function Wb(a,i){if(a==null)return{};var u={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}function Lo(){return Lo=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Lo.apply(this,arguments)}function vm(a,i){var u=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);i&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),u.push.apply(u,o)}return u}function $o(a){for(var i=1;i<arguments.length;i++){var u=arguments[i]!=null?arguments[i]:{};i%2?vm(Object(u),!0).forEach(function(o){Ib(a,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(u)):vm(Object(u)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(u,o))})}return a}function Ib(a,i,u){return i=Pb(i),i in a?Object.defineProperty(a,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[i]=u,a}function Pb(a){var i=e5(a,"string");return typeof i=="symbol"?i:i+""}function e5(a,i){if(typeof a!="object"||!a)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}function I1(a){return a&&a.map((i,u)=>Oe.createElement(i.tag,$o({key:u},i.attr),I1(i.child)))}function Me(a){return i=>Oe.createElement(t5,Lo({attr:$o({},a.attr)},i),I1(a.child))}function t5(a){var i=u=>{var{attr:o,size:c,title:f}=a,p=Fb(a,Jb),v=c||u.size||"1em",g;return u.className&&(g=u.className),a.className&&(g=(g?g+" ":"")+a.className),Oe.createElement("svg",Lo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,o,p,{className:g,style:$o($o({color:a.color||u.color},u.style),a.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),f&&Oe.createElement("title",null,f),a.children)};return gm!==void 0?Oe.createElement(gm.Consumer,null,u=>i(u)):i(W1)}function Rf(a){return Me({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function Af(a){return Me({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function Of(a){return Me({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Mf(a){return Me({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function Nf(a){return Me({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function P1(a){return Me({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function n5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function eg(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function a5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(a)}function l5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function tg(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function i5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function _f(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function r5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function ng(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function o5(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(a)}function ym(a){return Me({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const u5="/instalearn/assets/Slide11-BQ1quwNm.mp4",s5="/instalearn/assets/test-BrOnAr5c.png",c5="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",f5="/instalearn/assets/Grade9EnglishPriyaShrama-B1I7qOLW.png",d5="/instalearn/assets/Grade9EnglishVivekSinha-DL6zVjOS.png",h5="/instalearn/assets/Grade9MathMandar-CUG1o1dv.png",p5="/instalearn/assets/Grade9MathNeha-bS5aSjDI.png",m5="/instalearn/assets/Grade9ScienceAlakh-CauSWcYG.png",g5="/instalearn/assets/Grade9ScienceSunil-sNPMcwxT.png",v5="/instalearn/assets/Grade9ScienceSamridhi-6fgWaOqD.png",y5="/instalearn/assets/Grade9SstSiddhart-DdDuTXjs.png",x5="/instalearn/assets/Grade9SstShinu-mH_b-fxc.png",b5="/instalearn/assets/Grade10EnglishAnurag-BIzgEGI3.png",S5="/instalearn/assets/Slide1-CH0r16yo.png",w5="/instalearn/assets/Slide3-B6C07YuO.png",E5="/instalearn/assets/Slide5-BsOulZPi.png",j5="/instalearn/assets/Slide6-8dQDHdn3.png",C5="/instalearn/assets/Slide1-CH0r16yo.png",T5="/instalearn/assets/Slide10-BP0-oJ-v.gif",z5="/instalearn/assets/Slide11-BQ1quwNm.mp4",go={},xm={videoClip1:u5},R5={test:s5},Et={teacherProfilePic:c5,Grade9EnglishPriyaShrama:f5,Grade9EnglishVivekSinha:d5,Grade9MathMandar:h5,Grade9MathNeha:p5,Grade9ScienceAlakh:m5,Grade9ScienceSunil:g5,Grade9ScienceSamridhi:v5,Grade9SstSiddhart:y5,Grade9SstShinu:x5,Grade10EnglishAnurag:b5},An={Slide1:S5,Slide3:w5,Slide5:E5,Slide6:j5,Slide7:C5,Slide10:T5,Slide11:z5};function A5(a){return Me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M294 240s-21.51 16-38 16-38-16-38-16"},child:[]}]})(a)}const O5=S.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,M5=S.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  @media (max-width: 520px) {
    padding: 10px 12px;
  }
`,N5=S.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,_5=S.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,k5=S.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,D5=S.span`
  font-weight: 600;
  color: #0f172a;
  font-size: 14px;
  @media (max-width: 520px) { font-size: 13px; }
`,B5=S.span`
  font-size: 12px;
  color: #64748b;
`,L5=S.button`
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
`,$5=S.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,U5=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,H5=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 8px 12px;
`,Y5=S.div`
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
`,G5=S.div`
  padding: 12px;
  display: grid;
  gap: 14px;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  @media (min-width: 520px) {
    padding: 14px 16px;
    gap: 16px;
  }
`,bm=S.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
  @media (min-width: 520px) { padding: 14px; }
`,Sm=S.h3`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
`,q5=S.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
  li {
    font-size: 13px;
    color: #0f172a;
    line-height: 1.25;
  }
`,on=S.div`
  height: ${a=>a.h||12}px;
  background: linear-gradient(90deg,#f2f5f9 0%,#eef2f7 50%,#f2f5f9 100%);
  border-radius: 8px;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% { opacity: .8 }
    50% { opacity: .4 }
    100% { opacity: .8 }
  }
`,wm=S.div`
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
`,Em=S.button`
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`,X5=S.div`
  display: grid;
  gap: 10px;
`,V5=S.p`
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`,Q5=S.div`
  display: grid;
  gap: 8px;
`,Z5=S.button.withConfig({shouldForwardProp:a=>a!=="$state"})`
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
`,K5=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ag=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,jm=S.button`
  background: #0f172a;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
`,lg=S.button`
  background: transparent;
  border: 1px solid rgba(15,23,42,.14);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
`;async function J5(a){const u=await(await fetch(a,{mode:"cors"})).blob(),o=u.type||"image/jpeg",c=await u.arrayBuffer(),f=new Uint8Array(c);let p="";for(let g=0;g<f.byteLength;g++)p+=String.fromCharCode(f[g]);return{base64:btoa(p),mime:o}}function F5({title:a,description:i,username:u}){return`
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
`.trim()}async function W5(a){const{title:i,description:u,username:o,imageUrl:c}=a,f="AIzaSyDYGHcNYuuk43rrYSBVBIQGegzOGVtjGrw",{base64:p,mime:v}=await J5(c),m={contents:[{parts:[{text:F5({title:i,description:u,username:o})},{inline_data:{mime_type:v,data:p}}]}],generationConfig:{temperature:.6,topK:32,topP:.9,maxOutputTokens:1200,response_mime_type:"application/json"}},b="https://generativelanguage.googleapis.com/v1beta",w=["gemini-2.5-flash","gemini-2.0-flash"];let T;for(const A of w)try{const R=`${b}/models/${A}:generateContent?key=${encodeURIComponent(f)}`,k=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!k.ok)throw new Error(`Gemini error (${k.status}): ${await k.text()}`);const M=(await k.json())?.candidates?.[0]?.content?.parts?.[0]?.text;if(!M)throw new Error("Empty response from Gemini");let $;try{$=JSON.parse(M)}catch{const G=String(M).replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/```$/i,"").trim();$=JSON.parse(G)}const L=Array.isArray($.bullets)?$.bullets.slice(0,5):[],Z=Array.isArray($.mcqs)?$.mcqs.slice(0,5):[];if(!L.length||!Z.length)throw new Error("Malformed AI content");const K=Z.map(G=>({question:String(G.question||"").slice(0,140),options:Array.isArray(G.options)&&G.options.length?G.options.slice(0,5):["Not present"],correctIndex:Number.isInteger(G.correctIndex)?G.correctIndex:0,explanation:G.explanation?String(G.explanation).slice(0,140):void 0}));return{bullets:L,mcqs:K}}catch(R){T=R}throw T||new Error("Gemini request failed")}function I5({avatarSrc:a=Et.teacherProfilePic,title:i,description:u,imgSrc:o,username:c,postUrl:f,onLikeChange:p,onBookmarkChange:v,onShare:g}){const[m,b]=x.useState(!1),[w,T]=x.useState(!1),[A,R]=x.useState(!1),[k,U]=x.useState(!1),[M,$]=x.useState(null),[L,Z]=x.useState(null),[K,G]=x.useState(0);x.useEffect(()=>{const ee=L?.mcqs?.length||0;ee!==0&&G(pe=>Math.max(0,Math.min(pe,ee-1)))},[L?.mcqs?.length]);const V=m?"Unlike":"Like",ne=w?"Remove bookmark":"Bookmark",W=()=>{const ee=!m;b(ee),p&&p(ee)},ce=()=>{const ee=!w;T(ee),v&&v(ee)},fe=x.useMemo(()=>({title:i,text:`${c} on Infographics — ${i}`,url:f}),[i,c,f]),He=async()=>{try{navigator.share?await navigator.share(fe):navigator.clipboard&&fe.url&&(await navigator.clipboard.writeText(fe.url),alert("Link copied to clipboard")),g&&g(fe)}catch(ee){console.error("Share failed:",ee)}},P=async()=>{U(!0),$(null);try{const ee=await W5({title:i,description:u,username:c,imageUrl:o});Z(ee),G(0)}catch(ee){console.error(ee),$(ee?.message||"Failed to generate content")}finally{U(!1)}},ae=()=>{const ee=!A;R(ee),ee&&!L&&!k&&P()},ge=L?.mcqs?.length||0,D=ge?L.mcqs[K]:null,Q=K===ge-1,I=()=>G(ee=>Math.min(ee+1,ge-1));return d.jsxs(O5,{role:"article","aria-label":`${i} instagram-style post`,children:[d.jsxs(M5,{children:[d.jsxs(N5,{children:[d.jsx(_5,{src:a,alt:"avatar"}),d.jsxs(k5,{children:[d.jsx(D5,{children:i}),d.jsx(B5,{children:u})]})]}),d.jsx(L5,{"aria-label":A?"Close learn mode":"Open learn mode",title:A?"Close learn mode":"Learn more & quiz",onClick:ae,children:d.jsx(A5,{size:18})})]}),A?d.jsxs(G5,{"aria-live":"polite",children:[d.jsxs(bm,{children:[d.jsx(Sm,{children:"Know more (5 quick points)"}),k?d.jsxs("div",{style:{display:"grid",gap:8},children:[d.jsx(on,{}),d.jsx(on,{}),d.jsx(on,{}),d.jsx(on,{}),d.jsx(on,{})]}):M?d.jsxs(wm,{children:[d.jsx("span",{style:{flex:1,minWidth:0},children:M}),d.jsx(Em,{onClick:P,"aria-label":"Retry generating content",children:"Retry"})]}):d.jsx(q5,{children:L?.bullets?.map((ee,pe)=>d.jsx("li",{children:ee},pe))})]}),d.jsxs(bm,{children:[d.jsxs(ag,{children:[d.jsx(Sm,{style:{margin:0},children:"Test your knowledge"}),ge?d.jsxs(Oo,{children:[K+1," / ",ge]}):null]}),k?d.jsxs("div",{style:{display:"grid",gap:10},children:[d.jsx(on,{h:16}),d.jsx(on,{h:40}),d.jsx(on,{h:40}),d.jsx(on,{h:40}),d.jsx(on,{h:40})]}):M?d.jsxs(wm,{children:[d.jsx("span",{style:{flex:1,minWidth:0},children:"Can’t load questions."}),d.jsx(Em,{onClick:P,children:"Retry"})]}):D?d.jsx(P5,{mcq:D,index:K+1,total:ge,isLast:Q,onNext:Q?void 0:I,onFinish:Q?()=>R(!1):void 0},K):null,!k&&!M&&D&&!Q?d.jsx("div",{style:{marginTop:6},children:d.jsx(Oo,{children:"Tip: You can change your choice before tapping Next."})}):null]}),d.jsxs(K5,{children:[d.jsx(Oo,{children:"AI stays within the infographic; short, clear answers only."}),d.jsx(lg,{onClick:()=>R(!1),"aria-label":"Back to image",title:"Back to image",children:"Back to image"})]})]}):d.jsx($5,{children:d.jsx(U5,{src:o,alt:i})}),d.jsxs(H5,{children:[d.jsxs(Y5,{children:[d.jsx(vo,{onClick:W,"aria-label":V,title:V,children:m?d.jsx(Rf,{size:22}):d.jsx(Af,{size:22})}),d.jsx(vo,{"aria-label":"Comment",title:"Comment",children:d.jsx(Nf,{size:20})}),d.jsx(vo,{onClick:He,"aria-label":"Share",title:"Share",children:d.jsx(_f,{size:20})})]}),d.jsx(vo,{onClick:ce,"aria-label":ne,title:ne,children:w?d.jsx(Of,{size:20}):d.jsx(Mf,{size:20})})]})]})}function P5({mcq:a,index:i,total:u,isLast:o,onNext:c,onFinish:f}){const[p,v]=x.useState(null),g=m=>p===null?"idle":m===a.correctIndex?"correct":m===p&&p!==a.correctIndex?"wrong":"idle";return d.jsxs(X5,{"aria-label":`Question ${i}`,children:[d.jsxs(V5,{children:[i,". ",a.question]}),d.jsx(Q5,{children:a.options.map((m,b)=>d.jsx(Z5,{onClick:()=>v(b),$state:g(b),"aria-pressed":p===b,"aria-label":`Option ${b+1}`,children:m},b))}),p!==null&&d.jsxs("div",{style:{display:"grid",gap:8},children:[d.jsxs(Oo,{children:[p===a.correctIndex?"✅ Correct.":"❌ Not quite.",a.explanation?` — ${a.explanation}`:""]}),o?d.jsxs(ag,{children:[d.jsx(jm,{onClick:f,"aria-label":"Finish quiz",children:"Finish"}),d.jsx(lg,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to top"})]}):d.jsxs(jm,{onClick:c,"aria-label":"Next question",disabled:p===null,children:["Next question (",i+1,"/",u,")"]})]})]})}const e4=S.div``,t4=S.div`
  display: flex;
  overflow-x: auto;
  padding: 24px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,n4=S.button`
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
`,ig=`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  user-drag: none;
  -webkit-user-drag: none;
  pointer-events: none;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
`,a4=S.img`${ig}`,l4=S.video`${ig}`,i4=S.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.96);
  backdrop-filter: blur(20px);
  display: grid;
  place-items: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`,r4=S.div`
  position: relative;
  width: 96vw;
  max-width: 1400px;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto auto;
  gap: 10px;
  overflow: hidden;
`,o4=S.div`
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
`,u4=S.div`
  flex: 0 0 100%;
  height: 100%;
  display: grid;
  place-items: center;
  scroll-snap-align: center;
  background: transparent;
`,rg=`
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
`,s4=S.img`${rg}`,c4=S.video`${rg}`,f4=S.button`
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
`,d4=S.div`
  width: 100%;
  padding: 0 16px 8px;
  display: grid;
  align-items: center;
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,h4=S.input.attrs({type:"range"})`
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
`,p4=S.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 0 16px 16px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,og=S.button`
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
`,m4=S.img`
  width: 80px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  transition: opacity 0.2s ease;

  ${og}:hover & { opacity: 0.8; }
`,g4=S.video`
  width: 80px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
`,Cm=(a,i,u)=>Math.max(i,Math.min(u,a));function v4(a){const i=(a.type||"img").toLowerCase(),u=a.src||a.imgSrc||a.videoClipSrc,o=a.poster||a.thumb||a.thumbnail,c=a.name||a.title||"";return{type:i,src:u,poster:o,name:c,id:a.id}}class y4 extends Oe.Component{state={hasError:!1};static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(i,u){console.error("Carousel error:",i,u)}render(){return this.state.hasError?d.jsx("div",{style:{color:"#fff",padding:16,textAlign:"center"},children:"Something went wrong while rendering the carousel."}):this.props.children}}function x4({items:a=[],className:i}){const u=x.useRef(null),o=x.useRef(!1),c=x.useRef(0),f=x.useRef(0),p=x.useRef(0),[v,g]=x.useState(!1),[m,b]=x.useState(0),[w,T]=x.useState(!0),A=x.useRef(null),R=x.useMemo(()=>(a||[]).map(v4).filter(P=>!!P.src),[a]),k=x.useRef([]);k.current.length!==R.length&&(k.current=R.map((P,ae)=>k.current[ae]??Oe.createRef()));const U=typeof window<"u"&&typeof document<"u";x.useEffect(()=>{if(!U)return;const P=document.body.style.overflow;return v&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=P||""}},[v,U]),x.useEffect(()=>{v&&(k.current[m]?.current?.scrollIntoView({block:"nearest",inline:"center",behavior:"auto"}),T(!0))},[v,m]),x.useEffect(()=>{if(!v||!U)return;const P=ae=>{ae.key==="Escape"&&g(!1),ae.key==="ArrowRight"&&L(m+1),ae.key==="ArrowLeft"&&L(m-1),ae.key.toLowerCase()==="h"&&T(ge=>!ge)};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[v,m,U]);const M=x.useMemo(()=>{if(typeof window>"u"||!A.current)return 0;const P=window.getComputedStyle(A.current),ae=parseFloat(P.gap)||0;return(A.current.clientWidth||0)+ae},[v]),$=()=>{if(!A.current||M===0)return;const{scrollLeft:P}=A.current,ae=Math.round(P/M),ge=Cm(ae,0,R.length-1);ge!==m&&b(ge)},L=P=>{const ae=Cm(P,0,Math.max(0,R.length-1));if(b(ae),!A.current)return;const ge=M*ae;A.current.scrollTo({left:ge,behavior:"smooth"})},Z=P=>{const ae=Number(P.target.value);L(ae)},G={"--filled":`${R.length>1?m/(R.length-1)*100:0}%`},V=P=>{if(P.pointerType==="mouse"&&u.current){o.current=!0,p.current=0,c.current=P.clientX,f.current=u.current.scrollLeft||0;try{u.current.setPointerCapture?.(P.pointerId)}catch{console.log("error")}}},ne=P=>{if(P.pointerType!=="mouse"||!o.current||!u.current)return;const ae=P.clientX-c.current;p.current=Math.max(p.current,Math.abs(ae)),u.current.scrollLeft=f.current-ae},W=()=>{o.current=!1},ce=6,fe=P=>{p.current>ce||(b(P),T(!0),g(!0))},He=P=>{const ae=P.target,ge=ae.tagName&&ae.tagName.toLowerCase(),D=ge==="img"||ge==="video",Q=ae.closest?.('[data-interactive="true"]');D||Q||T(I=>!I)};return x.useEffect(()=>{if(!v)return;(A.current?.querySelectorAll("video[data-slide-video='true']")||[]).forEach((ae,ge)=>{ge===m?(ae.muted=!0,ae.play().catch(()=>{})):(ae.pause(),ae.currentTime=0)})},[v,m]),!R||R.length===0?null:d.jsxs(e4,{className:i,children:[d.jsx(t4,{ref:u,onPointerDown:V,onPointerMove:ne,onPointerUp:W,onPointerLeave:W,children:R.map((P,ae)=>d.jsx(n4,{onClick:()=>fe(ae),children:P.type==="video"?d.jsx(l4,{src:P.src,poster:P.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":P.name||`Video ${ae+1}`}):d.jsx(a4,{src:P.src,alt:P.name??`Item ${ae+1}`,draggable:!1})},P.id??ae))}),v&&d.jsx(i4,{role:"dialog","aria-modal":"true","aria-label":"Media lightbox",children:d.jsxs(r4,{onClick:He,children:[d.jsxs(S4,{$show:w,children:[m+1," / ",R.length]}),d.jsx(f4,{$show:w,onClick:()=>g(!1),"aria-label":"Close","data-interactive":"true",children:d.jsx(o5,{})}),d.jsx(o4,{ref:A,onScroll:$,children:R.map((P,ae)=>d.jsx(u4,{ref:k.current[ae],children:P.type==="video"?d.jsx(c4,{"data-slide-video":"true",src:P.src,poster:P.poster,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto","aria-label":P.name??`Video ${ae+1}`}):d.jsx(s4,{src:P.src,alt:P.name??`Image ${ae+1}`})},P.id??ae))}),d.jsx(d4,{$show:w,"data-interactive":"true",children:d.jsx(h4,{min:0,max:Math.max(0,R.length-1),step:1,value:m,onChange:Z,style:G,"aria-label":"Media scrubber"})}),d.jsx(p4,{$show:w,"aria-label":"Thumbnails","data-interactive":"true",children:R.map((P,ae)=>d.jsx(og,{$active:ae===m,onClick:()=>L(ae),"aria-label":`Go to item ${ae+1}`,children:P.type==="video"?d.jsx(g4,{src:P.src,poster:P.poster,muted:!0,loop:!0,playsInline:!0,preload:"metadata"}):d.jsx(m4,{src:P.src,alt:P.name??`Thumbnail ${ae+1}`})},P.id??ae))})]})})]})}function b4(a){return d.jsx(y4,{children:d.jsx(x4,{...a})})}const S4=S.div`
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
`,w4=F1`
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
`,E4=S.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,j4=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,C4=S.div`
  display: flex;
  gap: 12px;
`,T4=S.button`
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
`,z4=S.div`
  padding: 12px 14px;
`,R4=S.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,A4=S.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,O4=S.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,M4=S.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,N4=S.span`
  font-weight: 600;
  color: #0f172a;
`,_4=S.div`
  padding: 0 14px 8px 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,k4=S.span`
  font-size: 12px;
  color: #64748b;
`,D4=S.button`
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
`,B4=(a=1)=>({display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",WebkitLineClamp:a});function L4({expanded:a=!1,lines:i=1,children:u,innerRef:o}){const c={fontSize:"13px",color:"#334155",margin:0,whiteSpace:"pre-wrap",...a?{}:B4(i)};return d.jsx("p",{style:c,ref:o,children:u})}function $4({avatarSrc:a=Et.teacherProfilePic,data:i,onLikeChange:u,onBookmarkChange:o,onShare:c}){const{title:f="Carousel Title",description:p="",detailedDescription:v="",carouselMetaData:g=[]}=i||{},[m,b]=x.useState(!1),[w,T]=x.useState(!1),[A,R]=x.useState(!1),[k,U]=x.useState(!1),M=x.useRef(null);x.useEffect(()=>{const ne=M.current;if(ne){if(A){U(!0);return}requestAnimationFrame(()=>{if(!ne)return;const W=ne.scrollHeight-ne.clientHeight>1;U(W)})}},[v,A]);const $=m?"Unlike post":"Like post",L=w?"Remove bookmark":"Bookmark",Z=()=>{const ne=!m;b(ne),u&&u(ne)},K=()=>{const ne=!w;T(ne),o&&o(ne)},G=x.useMemo(()=>({title:f,text:`${f}`,url:typeof window<"u"?window.location.href:""}),[f]),V=async()=>{try{navigator.share?await navigator.share(G):navigator.clipboard&&(await navigator.clipboard.writeText(G.url),alert("Link copied to clipboard")),c&&c(G)}catch(ne){console.error("Share failed:",ne)}};return!g||g.length===0?null:d.jsxs(E4,{role:"article","aria-label":`${f} – Instagram multi-image post`,children:[d.jsxs(z4,{children:[d.jsxs(R4,{children:[d.jsxs(A4,{children:[d.jsx(O4,{src:a,alt:"avatar"}),d.jsxs(M4,{children:[d.jsx(N4,{children:f}),d.jsx(k4,{children:p})]})]}),d.jsx(T4,{"aria-label":"Post menu",title:"More",children:d.jsx(P1,{size:18})})]}),v?d.jsxs(_4,{children:[d.jsx(L4,{expanded:A,lines:1,innerRef:M,children:v}),(k||A)&&d.jsx(D4,{type:"button","aria-expanded":A,onClick:()=>R(ne=>!ne),children:A?d.jsx(a5,{size:14}):"more"})]}):null]}),d.jsx(w4,{}),d.jsx(b4,{items:g,duration:3e3}),d.jsxs(j4,{children:[d.jsxs(C4,{children:[d.jsx(yo,{onClick:Z,"aria-label":$,title:$,children:m?d.jsx(Rf,{size:22}):d.jsx(Af,{size:22})}),d.jsx(yo,{"aria-label":"Comment",title:"Comment",children:d.jsx(Nf,{size:20})}),d.jsx(yo,{onClick:V,"aria-label":"Share",title:"Share",children:d.jsx(_f,{size:20})})]}),d.jsx(yo,{onClick:K,"aria-label":L,title:L,children:w?d.jsx(Of,{size:20}):d.jsx(Mf,{size:20})})]})]})}const U4=S.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,H4=S.div`
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
`,Y4=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,G4=S.div`
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
`,q4=S.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,X4=S.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,V4=S.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,Q4=S.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,Z4=S.span`
  font-weight: 600;
  color: #0f172a;
`,K4=S.span`
  font-size: 12px;
  color: #64748b;
`,J4=S.button`
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
`;function F4({avatarSrc:a=Et.teacherProfilePic,data:i,likedDefault:u=!1,savedDefault:o=!1,onLikeChange:c,onBookmarkChange:f,onShare:p}){const v=i?.videoClipSrc||i?.vedioClipSrc,{title:g,description:m,poster:b}=i||{},[w,T]=x.useState(u),[A,R]=x.useState(o),k=w?"Unlike post":"Like post",U=A?"Remove bookmark":"Bookmark",M=x.useRef(null),$=()=>{const K=!w;T(K),c&&c(K)},L=()=>{const K=!A;R(K),f&&f(K)},Z=async()=>{const K={title:g||"Check this video",text:m||"",url:typeof window<"u"&&window.location?.href||(i?.url??"")};try{typeof navigator<"u"&&navigator.share?await navigator.share(K):typeof navigator<"u"&&navigator.clipboard&&K.url&&(await navigator.clipboard.writeText(K.url),alert("Link copied to clipboard")),p&&p(K)}catch(G){console.log(G)}};return x.useEffect(()=>{const K=M.current;if(!K)return;(async()=>{try{await K.play()}catch{}})()},[v]),v?d.jsxs(U4,{"aria-label":"Video post",children:[d.jsxs(q4,{children:[d.jsxs(X4,{children:[d.jsx(V4,{src:a,alt:"Author avatar"}),d.jsxs(Q4,{children:[d.jsx(Z4,{children:g}),d.jsx(K4,{children:m})]})]}),d.jsx(J4,{"aria-label":"Post menu",title:"More options",children:d.jsx(P1,{size:18})})]}),d.jsx(H4,{children:d.jsx("video",{ref:M,src:v,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:b,"aria-label":g||"Video clip"})}),d.jsxs(Y4,{children:[d.jsxs(G4,{children:[d.jsx(xo,{onClick:$,"aria-label":k,title:k,children:w?d.jsx(Rf,{size:22}):d.jsx(Af,{size:22})}),d.jsx(xo,{"aria-label":"Comment",title:"Comment",children:d.jsx(Nf,{size:20})}),d.jsx(xo,{onClick:Z,"aria-label":"Share",title:"Share",children:d.jsx(_f,{size:20})})]}),d.jsx(xo,{onClick:L,"aria-label":U,title:U,children:A?d.jsx(Of,{size:20}):d.jsx(Mf,{size:20})})]})]}):null}const W4=[{id:1,name:"Sense of Collective Identity",img:go.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[R5.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:go.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:go.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:go.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function I4(a){return Me({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function P4({isOpen:a,activeIndex:i,setActiveIndex:u,total:o,onClose:c,duration:f=3e3}){const p=x.useRef(Date.now()),v=x.useRef(),g=x.useRef(0),m=x.useCallback(()=>{const w=Date.now()-p.current,T=Math.min(1,w/f);g.current=T,T>=1?i<o-1?u(A=>A+1):c():v.current=requestAnimationFrame(m)},[i,o,f,c,u]);return x.useEffect(()=>{if(a)return p.current=Date.now(),v.current=requestAnimationFrame(m),()=>cancelAnimationFrame(v.current)},[a,i,m]),{resetTimer:x.useCallback(()=>{p.current=Date.now()},[]),getProgressValue:()=>g.current}}const e3=S.div`
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
`,t3=S.div`
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
`,n3=S.div`
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
`,a3=S.div`
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
`,l3=S.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 2.5px;
  }
`,i3=S.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,r3=S.div`
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
`,o3=S.img`
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
`,u3=S.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,s3=S.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,c3=S.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`,f3=S.button`
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
`,d3=S.img`
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
`,Tm=S.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 10;
  touch-action: manipulation;

  ${a=>a.$side==="left"?Bn`
          left: 0;
          width: 33.3333%;
        `:Bn`
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
`;function h3({currentItem:a,isOpen:i,slideIndex:u,setSlideIndex:o,onClose:c,duration:f=3e3}){const p=a?.slides?.length||0,{resetTimer:v,getProgressValue:g}=P4({isOpen:i,activeIndex:u,setActiveIndex:o,total:p,onClose:c,duration:f}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,b]=x.useState(0);x.useEffect(()=>{if(!i||m)return;let R;const k=()=>{b(U=>U+1),R=requestAnimationFrame(k)};return R=requestAnimationFrame(k),()=>cancelAnimationFrame(R)},[i,m]);const w=x.useCallback(()=>{a&&(u<p-1?(o(R=>R+1),v()):c())},[a,u,p,v,c,o]),T=x.useCallback(()=>{a&&(u>0?(o(R=>R-1),v()):c())},[a,u,v,c,o]);x.useEffect(()=>{const R=k=>{i&&(k.key==="Escape"&&c(),k.key==="ArrowRight"&&w(),k.key==="ArrowLeft"&&T())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[i,w,T,c]),x.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const A=R=>R<u?1:R>u?0:g();return!i||!a?null:d.jsx(e3,{onClick:c,"aria-label":"Story overlay",children:d.jsx(t3,{onClick:R=>R.stopPropagation(),children:d.jsxs(n3,{children:[d.jsx(a3,{"aria-label":"Story progress",children:a.slides.map((R,k)=>d.jsx(l3,{"aria-label":`Progress track ${k+1}`,children:d.jsx(i3,{style:{width:`${A(k)*100}%`}})},k))}),d.jsxs(r3,{children:[d.jsx(o3,{src:a.img,alt:a.name}),d.jsxs(u3,{children:[d.jsx(s3,{children:a.name}),d.jsx(c3,{children:"Chapter highlight"})]}),d.jsx(f3,{"aria-label":"Close story",onClick:c,title:"Close",children:d.jsx(I4,{})})]}),a.slides.map((R,k)=>d.jsx(d3,{src:R,alt:`Slide ${k+1}`,$active:k===u,draggable:!1},k)),d.jsx(Tm,{$side:"left",onClick:T,"aria-label":"Previous slide"}),d.jsx(Tm,{$side:"right",onClick:w,"aria-label":"Next slide"})]})})})}const p3=S.div``,m3=S.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,g3=S.div`
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
`,v3=S.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,y3=S.div`
  padding: 2px;
  border-radius: 999px;
  ${a=>a.$hasNew?Bn`
          background: linear-gradient(
            45deg,
            #777777 0%,
            #949494 25%,
            #4b4b4b 50%,
            #555555 75%,
            #585758 100%
          );
        `:Bn`
          background: transparent;
        `};
`,x3=S.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,b3=S.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,S3=S.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function w3({items:a,duration:i=3e3,onOpen:u,onClose:o,className:c}){const f=x.useRef(null),p=x.useRef(!1),v=x.useRef(0),g=x.useRef(0),[m,b]=x.useState(a||[]),[w,T]=x.useState(null),[A,R]=x.useState(0),k=m.find(G=>G.id===w)||null,U=!!w,M=G=>{R(0),T(G),b(V=>V.map(ne=>ne.id===G?{...ne,hasNew:!1}:ne)),u&&u(G)},$=()=>{T(null),o&&o()},L=G=>{p.current=!0,v.current=G.clientX,g.current=f.current?.scrollLeft||0,G.target.setPointerCapture?.(G.pointerId)},Z=G=>{if(!p.current||!f.current)return;const V=G.clientX-v.current;f.current.scrollLeft=g.current-V},K=()=>{p.current=!1};return d.jsxs(p3,{className:c,children:[d.jsx(m3,{children:d.jsx(g3,{ref:f,onPointerDown:L,onPointerMove:Z,onPointerUp:K,onPointerLeave:K,"aria-label":"Stories scroller",children:m.map(G=>d.jsxs(v3,{onClick:()=>M(G.id),"aria-label":`Open story ${G.name}`,title:G.name,children:[d.jsx(y3,{$hasNew:G.hasNew,children:d.jsx(x3,{children:d.jsx(b3,{src:G.img,alt:G.name,draggable:!1})})}),d.jsx(S3,{children:G.name})]},G.id))})}),d.jsx(h3,{currentItem:k,isOpen:U,slideIndex:A,setSlideIndex:R,onClose:$,duration:i})]})}const E3=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",detailedDescription:"Collective identity is the shared sense of belonging among individuals who associate themselves with a larger group or community. It is shaped by shared language, culture, traditions, and values that connect people to a collective purpose. Understanding this helps explain how societies maintain unity and continuity over time.",imgSrc:An.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",detailedDescription:"This section examines how collective identity emerges from shared experiences, beliefs, and cultural narratives. It plays a crucial role in fostering social solidarity, promoting cooperation, and helping individuals find meaning through group affiliation.",carouselMetaData:[{id:1,type:"img",src:An.Slide3},{id:2,type:"gif",src:An.Slide10},{id:3,type:"video",src:An.Slide11},{id:4,type:"img",src:An.Slide6}]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",detailedDescription:"Symbols such as national flags, anthems, and cultural rituals embody the essence of collective identity. These shared symbols reinforce emotional ties, transmit values, and sustain collective memory.",carouselMetaData:[{id:1,type:"img",src:An.Slide7},{id:2,type:"gif",src:An.Slide10},{id:3,type:"video",src:An.Slide11}]},{id:5,type:"videoClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",detailedDescription:"This video highlights real-world scenarios where collective identity has influenced social and political movements.",videoClipSrc:xm.videoClip1},{id:6,type:"infografic",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities.",imgSrc:An.Slide5},{id:7,type:"videoClip",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities.",videoClipSrc:xm.videoClip1}],j3=S.div`
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
`;function C3(){return x.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),d.jsxs(d.Fragment,{children:[d.jsx(w3,{items:W4,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),d.jsx(j3,{children:d.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:E3.map(a=>d.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?d.jsx(I5,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?d.jsx($4,{data:a}):a.type==="videoClip"?d.jsx(F4,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),z3=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,u,o)=>o?o.toUpperCase():u.toLowerCase()),zm=a=>{const i=z3(a);return i.charAt(0).toUpperCase()+i.slice(1)},ug=(...a)=>a.filter((i,u,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===u).join(" ").trim(),R3=a=>{for(const i in a)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=x.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:c="",children:f,iconNode:p,...v},g)=>x.createElement("svg",{ref:g,...A3,width:i,height:i,stroke:a,strokeWidth:o?Number(u)*24/Number(i):u,className:ug("lucide",c),...!f&&!R3(v)&&{"aria-hidden":"true"},...v},[...p.map(([m,b])=>x.createElement(m,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(a,i)=>{const u=x.forwardRef(({className:o,...c},f)=>x.createElement(O3,{ref:f,iconNode:i,className:ug(`lucide-${T3(zm(a))}`,`lucide-${a}`,o),...c}));return u.displayName=zm(a),u};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],N3=dt("arrow-right",M3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],k3=dt("atom",_3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Uo=dt("book-open",D3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],L3=dt("bookmark",B3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],U3=dt("calculator",$3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],sg=dt("check",H3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],kf=dt("chevron-left",Y3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],q3=dt("chevron-right",G3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],V3=dt("code",X3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Rm=dt("flask-conical",Q3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Am=dt("globe",Z3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],J3=dt("grid-3x3",K3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],W3=dt("languages",F3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],bo=dt("lock",I3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],e6=dt("search",P3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ac=dt("x",t6),n6=S.div`
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
`,a6=S.div`
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
`,l6=S.img`
  height: 70%;
  width: 70%;
  object-fit: cover; /* ensures it fills the circle */
  border-radius: 50%; /* ensures circular clipping */
`,i6=S.div`
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
`,r6=S.h1`
  margin: 0 0 8px 0;
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 900;
  background: #374151;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,o6=S.p`
  margin: 6px 0 0 0;
  color: #6b7280;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
`,u6=S.button`
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
`;function s6({onStart:a}){return d.jsxs(n6,{children:[d.jsx(a6,{children:d.jsx(l6,{src:"https://th.bing.com/th/id/OIP.uSFDPMfkxTDmRZEJvOe_lAHaHa?w=108&h=108&c=1&bgcl=e66538&r=0&o=7&dpr=1.1&pid=ImgRC&rm=3",alt:"PW Logo"})}),d.jsxs(i6,{children:[d.jsx(r6,{children:"Welcome to Pi learn"}),d.jsx(o6,{children:"Your personalized learning journey starts here. Connect with expert teachers and unlock your full potential."})]}),d.jsxs(u6,{onClick:a,"aria-label":"Get started",children:["Get Started ",d.jsx(N3,{size:18})]})]})}const c6=S.div`
padding: 35px;
position: relative;
overflow: visible;
`,f6=S.button`
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
`,d6=S.div`
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
`,h6=S.h2`
  margin: 0 0 8px 0;
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 900;
  background: #374151;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,p6=S.p`
  margin: 0;
  color: #64748b;
  font-size: 15px;
  font-weight: 500;
`,m6=S.div`
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
`,g6=S.div`
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
`,v6=S.div`
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
`,y6=S.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,x6=S.li`
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
`,Om=S.li`
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
`;const b6=S.button`
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
`;S(b6)`
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
`;function S6({options:a,value:i,onChange:u,onNext:o}){const f=Oe.useRef(null),p=g=>{const m=a.indexOf(g);if(m===-1)return;const b=f.current.clientHeight/2-48/2;f.current.scrollTo({top:b+m*48,behavior:"smooth"}),u(g),o&&o()},v={height:`calc(50% - ${48/2}px)`};return d.jsx(m6,{children:d.jsxs(g6,{ref:f,children:[d.jsx(v6,{}),d.jsxs(y6,{children:[d.jsx(Om,{$height:v.height}),a.map((g,m)=>d.jsx(x6,{$height:48,$delay:`${m*.02}s`,$isSelected:g===i,onClick:()=>p(g),children:g},g)),d.jsx(Om,{$height:v.height})]})]})})}function w6({grades:a,selectedGrade:i,onSelect:u,onBack:o,onNext:c}){const f=Object.keys(a);return Oe.useEffect(()=>{!i&&f.length>0&&u(f[0])},[i,f,u]),d.jsxs(c6,{children:[d.jsx(f6,{onClick:o,"aria-label":"Go back",children:d.jsx(kf,{size:24})}),d.jsxs(d6,{children:[d.jsx(h6,{children:"Choose your Grade"}),d.jsx(p6,{children:"Swipe or tap to select a grade."})]}),d.jsx(S6,{options:f,value:i||f[0],onChange:u,onNext:c})]})}const E6={English:Uo,Mathematics:U3,Science:Rm,Physics:k3,Chemistry:Rm,Biology:Am,"Social Studies":Am,Hindi:W3,"Computer Science":V3},j6=S.div`
  padding: 3px;
  position: relative;
  overflow: visible;
`,C6=S.button`
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
`,T6=S.div`
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
`,z6=S.h2`
  margin: 0 0 6px 0;
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 900;
  color: #1f2937;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,R6=S.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,A6=S.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
`,O6=S.button`
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
`,M6=S.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,N6=S.span`
  font-weight: 800;
  letter-spacing: -0.01em;
  font-size: 16px;
  color: #1f2937;
`,_6=S.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #f6f7f9;
  border: 1px solid #e5e7eb;
  display: grid;
  place-items: center;
  color: #374151;
`;function k6({grades:a,selectedGrade:i,selectedSubject:u,onSelectSubject:o,onBack:c,onNext:f}){const p=x.useMemo(()=>i&&a?.[i]?.subjects?Object.keys(a[i].subjects):[],[a,i]);x.useEffect(()=>{!u&&p.includes("English")&&o?.("English")},[u,p,o]);const v=g=>{o?.(g),f?.()};return d.jsxs(j6,{children:[d.jsx(C6,{onClick:c,"aria-label":"Go back",children:d.jsx(kf,{size:24})}),d.jsxs(T6,{children:[d.jsx(z6,{children:"Pick a Subject"}),d.jsx(R6,{children:i?`You chose ${i}. Now select a subject.`:"Choose a grade first."})]}),d.jsx(A6,{children:p.map((g,m)=>{const b=E6[g]||Uo,w=u===g||!u&&g==="English";return d.jsxs(O6,{$isSelected:w,$delay:`${m*.03}s`,"aria-pressed":w,onClick:()=>v(g),children:[d.jsxs(M6,{children:[d.jsx(_6,{children:d.jsx(b,{size:18,"aria-hidden":"true"})}),d.jsx(N6,{children:g})]}),d.jsx(q3,{size:18,"aria-hidden":"true"})]},g)})})]})}var D6={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function B6(a){if(typeof a=="number")return{value:a,unit:"px"};var i,u=(a.match(/^[0-9.]*/)||"").toString();u.includes(".")?i=parseFloat(u):i=parseInt(u,10);var o=(a.match(/[^0-9]*$/)||"").toString();return D6[o]?{value:i,unit:o}:(console.warn("React Spinners: ".concat(a," is not a valid css value. Defaulting to ").concat(i,"px.")),{value:i,unit:"px"})}function Mm(a){var i=B6(a);return"".concat(i.value).concat(i.unit)}var L6=function(a,i,u){var o="react-spinners-".concat(a,"-").concat(u);if(typeof window>"u"||!window.document)return o;var c=document.createElement("style");document.head.appendChild(c);var f=c.sheet,p=`
    @keyframes `.concat(o,` {
      `).concat(i,`
    }
  `);return f&&f.insertRule(p,0),o},Ho=function(){return Ho=Object.assign||function(a){for(var i,u=1,o=arguments.length;u<o;u++){i=arguments[u];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(a[c]=i[c])}return a},Ho.apply(this,arguments)},$6=function(a,i){var u={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&i.indexOf(o)<0&&(u[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,o=Object.getOwnPropertySymbols(a);c<o.length;c++)i.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(a,o[c])&&(u[o[c]]=a[o[c]]);return u},U6=L6("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function H6(a){var i=a.loading,u=i===void 0?!0:i,o=a.color,c=o===void 0?"#000000":o,f=a.speedMultiplier,p=f===void 0?1:f,v=a.cssOverride,g=v===void 0?{}:v,m=a.size,b=m===void 0?35:m,w=$6(a,["loading","color","speedMultiplier","cssOverride","size"]),T=Ho({background:"transparent !important",width:Mm(b),height:Mm(b),borderRadius:"100%",border:"2px solid",borderTopColor:c,borderBottomColor:"transparent",borderLeftColor:c,borderRightColor:c,display:"inline-block",animation:"".concat(U6," ").concat(.75/p,"s 0s infinite linear"),animationFillMode:"both"},g);return u?x.createElement("span",Ho({style:T},w)):null}const Y6=S.div`
  padding: 3px;
  position: relative;
`,G6=S.button`
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
`,q6=S.div`
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
`,X6=S.h2`
  margin: 0 0 6px 0;
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 900;
  color: #1f2937;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto,
    sans-serif;
`,V6=S.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,Q6=S.div`
  position: relative;
  margin-bottom: 10px;
`,Z6=S(e6)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
`,K6=S.input`
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
`,J6=S.div`
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
`,F6=Un`
  0% { opacity: 0; transform: translateY(10px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,W6=S.button`
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
  animation: ${F6} 0.35s ease both;
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
`,I6=S.div`
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
`,P6=S.div`
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
`;function eS({primary:a,fallback:i,alt:u,minDelayMs:o=2e3}){const[c,f]=x.useState(a||i),[p,v]=x.useState(!1),g=x.useRef(!1),m=x.useRef(Date.now()),b=x.useRef(null);x.useEffect(()=>(m.current=Date.now(),v(!1),()=>{b.current&&clearTimeout(b.current)}),[c]);const w=()=>{const T=Date.now()-m.current,A=Math.max(0,o-T);b.current=setTimeout(()=>v(!0),A)};return d.jsxs(d.Fragment,{children:[!p&&d.jsx(H6,{color:"#6b7280",size:38,speedMultiplier:.8}),d.jsx("img",{src:c,alt:u,loading:"lazy",onLoad:w,onError:()=>{if(!g.current&&i&&c!==i){g.current=!0,f(i);return}w()},style:{opacity:p?1:0,transition:"opacity 300ms ease",position:p?"relative":"absolute"}})]})}function tS({grades:a,selectedGrade:i,selectedSubject:u,selectedTeacher:o,onSelectTeacher:c,onBack:f,onConfirm:p,autoScrollMs:v=2400}){const[g,m]=x.useState(""),w=(i&&u?a?.[i]?.subjects?.[u]??[]:[]).map(M=>typeof M=="string"?{name:M,img:void 0}:M),T=M=>`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(M)}&backgroundType=gradientLinear&fontFamily=Verdana&bold=true`,A=w.filter(M=>M.name?.toLowerCase().includes(g.toLowerCase())),R=x.useRef(null),k=x.useRef(!1),U=x.useRef(0);return x.useEffect(()=>{const M=R.current;if(!M)return;const $=()=>k.current=!0,L=()=>window.setTimeout(()=>k.current=!1,400);return M.addEventListener("touchstart",$,{passive:!0}),M.addEventListener("mousedown",$),M.addEventListener("touchend",L),M.addEventListener("mouseup",L),M.addEventListener("mouseleave",L),()=>{M.removeEventListener("touchstart",$),M.removeEventListener("mousedown",$),M.removeEventListener("touchend",L),M.removeEventListener("mouseup",L),M.removeEventListener("mouseleave",L)}},[]),x.useEffect(()=>{const M=R.current;if(!M||A.length===0)return;const $=Array.from(M.querySelectorAll("[data-card='teacher']"));if($.length===0)return;const L=setInterval(()=>{if(k.current)return;U.current=(U.current+1)%$.length;const Z=$[U.current];Z&&Z.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},Math.max(1200,v));return()=>clearInterval(L)},[A.length,v]),d.jsxs(Y6,{children:[d.jsx(G6,{onClick:f,"aria-label":"Go back",children:d.jsx(kf,{size:24})}),d.jsxs(q6,{children:[d.jsx(X6,{children:"Choose Your Teacher"}),d.jsx(V6,{children:u?`${u} • Swipe to explore`:"Pick a subject first."})]}),d.jsxs(Q6,{children:[d.jsx(Z6,{size:18}),d.jsx(K6,{type:"text",placeholder:"Search teacher name...",value:g,onChange:M=>m(M.target.value),"aria-label":"Search teachers"})]}),d.jsx(J6,{ref:R,children:A.map((M,$)=>{const L=o===M.name;return d.jsx(W6,{"data-card":"teacher",$isSelected:L,$delay:`${$*.05}s`,"aria-pressed":L,"aria-label":`Choose ${M.name}`,onClick:()=>{c(M.name),setTimeout(()=>p(),100)},children:d.jsxs(I6,{children:[d.jsx(eS,{primary:M.img,fallback:T(M.name),alt:M.name,minDelayMs:800}),L&&d.jsx(P6,{children:d.jsx(sg,{size:14})})]})},M.name)})})]})}const So={"Grade 9":{subjects:{English:[{name:"Priya Sharma",img:Et.Grade9EnglishPriyaShrama},{name:"Vivek Sinha",img:Et.Grade9EnglishVivekSinha}],Mathematics:[{name:"Mandar Borkar",img:Et.Grade9MathMandar},{name:"Neha Gupta",img:Et.Grade9MathNeha}],Science:[{name:"Alakh Pandey",img:Et.Grade9ScienceAlakh},{name:"Sunil Kumar",img:Et.Grade9ScienceSunil},{name:"Samridhi",img:Et.Grade9ScienceSamridhi}],"Social Studies":[{name:"Siddharth Sir",img:Et.Grade9SstSiddhart},{name:"Shinu Singh",img:Et.Grade9SstShinu}]}},"Grade 10":{subjects:{English:[{name:"Anurag Tyagi",img:Et.Grade10EnglishAnurag}],Mathematics:[{name:"Rohan Patel",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Priyanka Das",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Sanjay Kulkarni",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}],Science:[{name:"Anjali Mehta",img:"https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop"},{name:"Amit Chakraborty",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Meera Nambiar",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"}],"Social Studies":[{name:"Siddharth Sir",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop"},{name:"Nidhi Arora",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Parth Ghosh",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}]}},"Grade 11":{subjects:{English:[{name:"Anurag  Tyagi",img:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop"},{name:"Karan Malhotra",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Physics:[{name:"Nitin Agarwal",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Rachna Bansal",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Vivek Mishra",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Chemistry:[{name:"Sneha Kapoor",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"},{name:"Aditya Mehta",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Nupur Jain",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Biology:[{name:"Siddharth Sir",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop"},{name:"Radhika Sen",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Mathematics:[{name:"Deepak Rao",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Shreya Iyer",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Varun Sethi",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}],"Computer Science":[{name:"Arvind Nair",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}]}},"Grade 12":{subjects:{English:[{name:"Sunita Verma",img:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop"},{name:"Aalok Trivedi",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Garima Singh",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Physics:[{name:"Nitin Agarwal",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Priti Saxena",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Keshav Reddy",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Chemistry:[{name:"Sneha Kapoor",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"},{name:"Rohan Mukherjee",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Farah Qureshi",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Biology:[{name:"Siddharth Sir",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop"},{name:"Neelam Vaidya",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Sameer Kulkarni",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Mathematics:[{name:"Deepak Rao",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Ishita Shah",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Yashwant Kumar",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}],"Computer Science":[{name:"Arvind Nair",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Pallavi Menon",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Siddharth Jain",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}]}}},en={bg:"#ffffff",text:"#0f172a",subtext:"#475569",border:"#e5e7eb",card:"#ffffff",soft:"#f3f4f6",soft2:"#f8fafc",focus:"#d1d5db",btn:"#e5e7eb",btnText:"#0f172a"},nS=F1`
  * { -webkit-tap-highlight-color: transparent; }
  :root {
    color-scheme: light;
  }
  body {
    margin: 0;
    background: ${en.bg};
    color: ${en.text};
    font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
  }
`,aS=Un`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`,lS=Un`
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: translateX(0); }
`,iS=Un`
  0% { transform: scale(.96); }
  100% { transform: scale(1); }
`,rS=S.div`
  min-height: 90svh;
  display: flex;
  align-items: ${({alignTop:a})=>a?"flex-start":"center"};
  justify-content: center;
  /* a little extra top padding when aligned to top */
  padding: ${({alignTop:a})=>a?"32px 16px 16px":"16px"};
  background: ${en.bg};
  animation: ${aS} 0.42s ease-out both;
`,oS=S.div`
  width: 100%;
  max-width: 720px;
`,uS=S.div`
  background: ${en.card};
  border: ${({step:a})=>a===3?"none":`1px solid ${en.border}`};
  border-radius: 16px;
  padding: 16px;
  box-shadow: ${({step:a})=>a===3?"none":"0 8px 24px rgba(0,0,0,0.05)"};
  transition: transform .12s ease;
  animation: ${iS} .18s ease-out both;
`,sS=S.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 12px;
  animation: ${lS} 0.4s ease-out both;
`,cS=S.div`
  height: 8px;
  width: 12px;
  border-radius: 999px;
  background: ${en.border};
  transition: width 180ms, background-color 180ms;

  ${({active:a})=>a&&Bn`
      width: 32px;
      background: ${en.focus};
    `}
`;function fS(){const a=gf(),[i,u]=x.useState(0),[o,c]=x.useState(""),[f,p]=x.useState(""),[v,g]=x.useState(""),m=b=>{!o||!f||!b||a("/instalearn/teacher",{state:{grade:o,subject:f,teacher:b}})};return d.jsxs(d.Fragment,{children:[d.jsx(nS,{}),d.jsx(rS,{alignTop:i===3,children:d.jsx(oS,{children:d.jsxs(uS,{step:i,children:[d.jsx(sS,{children:[1,2,3].map(b=>d.jsx(cS,{active:i===b},b))}),i===0&&d.jsx(s6,{onStart:()=>u(1),ui:en}),i===1&&d.jsx(w6,{ui:en,grades:So,selectedGrade:o,onSelect:b=>{c(b),p(""),g("")},onBack:()=>u(0),onNext:()=>o&&u(2)}),i===2&&d.jsx(k6,{ui:en,grades:So,selectedGrade:o,selectedSubject:f,onSelectSubject:b=>{p(b),g("")},onBack:()=>u(1),onNext:()=>f&&u(3)}),i===3&&d.jsx(tS,{ui:en,grades:So,selectedGrade:o,selectedSubject:f,selectedTeacher:v,onSelectTeacher:g,onBack:()=>u(2),onConfirm:()=>m(v||(o&&f?So[o].subjects[f][0]:""))})]})})})]})}function dS(a){return Me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function cg(a){return Me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function hS(a){return Me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function pS(a){return Me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function mS(a){return Me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(a)}function Nm(a){return Me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(a)}function _m(a){return Me({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function gS(a){return Me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const km="studentProfile",st={card:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:14,padding:16,boxShadow:"0 6px 16px rgba(0,0,0,.06)"},row:{display:"flex",alignItems:"center",gap:12},button:{display:"inline-flex",alignItems:"center",gap:8,border:"1px solid #e5e7eb",background:"#fff",padding:"10px 12px",borderRadius:10,fontWeight:700,cursor:"pointer"},primary:{background:"#0ea5e9",color:"#fff",border:"1px solid #0ea5e9"},input:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1.5px solid #e5e7eb",fontSize:14}};function Oc(a=""){const[i="",u=""]=a.split(" ");return(i[0]||"").toUpperCase()+(u[0]||"").toUpperCase()}function vS(){const[a,i]=x.useState({name:"Student Name",email:"student@example.com",avatar:"SN",booksRead:24,hoursSpent:156}),[u,o]=x.useState(!1),[c,f]=x.useState(a);x.useEffect(()=>{try{const g=localStorage.getItem(km);if(g){const m=JSON.parse(g);i(b=>({...b,...m})),f(b=>({...b,...m}))}}catch{console.log("error")}},[]);const p=x.useMemo(()=>((u?c.avatar:a.avatar)||Oc(u?c.name:a.name)||Oc(a.name)).slice(0,2).toUpperCase(),[u,c.avatar,c.name,a.avatar,a.name]),v=()=>{const g={...a,name:c.name?.trim()||a.name,email:c.email?.trim()||a.email,avatar:c.avatar?.trim()||Oc(c.name||a.name),booksRead:Number.isFinite(c.booksRead)?c.booksRead:a.booksRead,hoursSpent:Number.isFinite(c.hoursSpent)?c.hoursSpent:a.hoursSpent};i(g),localStorage.setItem(km,JSON.stringify(g)),o(!1)};return d.jsx("div",{style:{minHeight:"100dvh",background:"#f8fafc",padding:16,fontFamily:"Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"},children:d.jsxs("div",{style:{maxWidth:720,margin:"0 auto",display:"grid",gap:16},children:[d.jsx("section",{style:st.card,children:d.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[d.jsx("div",{"aria-label":"User avatar",style:{width:84,height:84,borderRadius:"50%",background:"linear-gradient(135deg,#0ea5e9,#22c55e)",color:"#fff",display:"grid",placeItems:"center",fontWeight:900,fontSize:28},children:p||d.jsx(gS,{})}),d.jsxs("div",{style:{flex:1},children:[d.jsx("h1",{style:{margin:0,fontSize:22},children:a.name}),d.jsxs("p",{style:{margin:"6px 0 0 0",color:"#64748b"},children:[d.jsx(mS,{style:{marginRight:6}})," ",a.email]})]}),u?d.jsxs("div",{style:{display:"flex",gap:8},children:[d.jsxs("button",{style:{...st.button,...st.primary},onClick:v,children:[d.jsx(Nm,{})," Save"]}),d.jsxs("button",{style:st.button,onClick:()=>{f(a),o(!1)},children:[d.jsx(_m,{})," Cancel"]})]}):d.jsxs("button",{style:st.button,onClick:()=>o(!0),children:[d.jsx(pS,{})," Edit"]})]})}),d.jsx("section",{style:{...st.card,display:"grid",gap:12},children:d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[d.jsx("div",{style:{...st.card,padding:12},children:d.jsxs("div",{style:st.row,children:[d.jsx(dS,{}),d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:12,color:"#6b7280"},children:"Books Read"}),d.jsx("div",{style:{fontWeight:800,fontSize:18},children:a.booksRead})]})]})}),d.jsx("div",{style:{...st.card,padding:12},children:d.jsxs("div",{style:st.row,children:[d.jsx(hS,{}),d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:12,color:"#6b7280"},children:"Study Hours"}),d.jsx("div",{style:{fontWeight:800,fontSize:18},children:a.hoursSpent})]})]})})]})}),u&&d.jsxs("section",{style:{...st.card,display:"grid",gap:12},"aria-label":"Edit profile form",children:[d.jsxs("label",{style:{display:"grid",gap:6},children:[d.jsx("span",{style:{fontWeight:700},children:"Name"}),d.jsx("input",{style:st.input,value:c.name,onChange:g=>f(m=>({...m,name:g.target.value})),placeholder:"Your full name"})]}),d.jsxs("label",{style:{display:"grid",gap:6},children:[d.jsx("span",{style:{fontWeight:700},children:"Email"}),d.jsx("input",{type:"email",style:st.input,value:c.email,onChange:g=>f(m=>({...m,email:g.target.value})),placeholder:"you@example.com"})]}),d.jsxs("label",{style:{display:"grid",gap:6},children:[d.jsx("span",{style:{fontWeight:700},children:"Avatar Initials"}),d.jsx("input",{style:st.input,value:c.avatar,onChange:g=>f(m=>({...m,avatar:g.target.value.toUpperCase().slice(0,2)})),placeholder:"e.g., SN"})]}),d.jsxs("div",{style:{display:"flex",gap:8},children:[d.jsxs("button",{style:{...st.button,...st.primary},onClick:v,children:[d.jsx(Nm,{})," Save"]}),d.jsxs("button",{style:st.button,onClick:()=>{f(a),o(!1)},children:[d.jsx(_m,{})," Cancel"]})]})]})]})})}const yS=Un`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,xS=Un`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,bS=Un`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,SS=Un`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,wS=S.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,ES=S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Mc=S.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${yS} 20s infinite ease-in-out;

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
`,jS=S.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${xS} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,CS=S.div`
  margin-bottom: 0px;
  position: relative;
`,TS=S.div`
  font-size: 70px;
  animation: ${bS} 2s infinite;
`,zS=S.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,RS=S.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,AS=S.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,OS=S.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${SS} 3s ease-in-out infinite;
`,MS=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Nc=S.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,_c=S.div`
  font-size:30px;
  margin-bottom: 10px;
`,kc=S.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,NS=S.button`
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
`;function Dm(){const[a,i]=x.useState(!1),u=()=>{i(!0),setTimeout(()=>{i(!1)},2e3)};return d.jsxs(wS,{children:[d.jsxs(ES,{children:[d.jsx(Mc,{}),d.jsx(Mc,{}),d.jsx(Mc,{})]}),d.jsxs(jS,{children:[d.jsx(CS,{children:d.jsx(TS,{children:"🚧"})}),d.jsx(zS,{children:"Building Something Amazing"}),d.jsx(RS,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),d.jsx(AS,{children:d.jsx(OS,{})}),d.jsxs(MS,{children:[d.jsxs(Nc,{children:[d.jsx(_c,{children:"⚡"}),d.jsx(kc,{children:"Lightning Fast"})]}),d.jsxs(Nc,{children:[d.jsx(_c,{children:"🎨"}),d.jsx(kc,{children:"Beautiful Design"})]}),d.jsxs(Nc,{children:[d.jsx(_c,{children:"🔒"}),d.jsx(kc,{children:"Secure & Private"})]})]}),d.jsx(NS,{onClick:u,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var Dc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Bm;function _S(){return Bm||(Bm=1,(function(a){(function(){var i={}.hasOwnProperty;function u(){for(var f="",p=0;p<arguments.length;p++){var v=arguments[p];v&&(f=c(f,o(v)))}return f}function o(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return u.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var p="";for(var v in f)i.call(f,v)&&f[v]&&(p=c(p,v));return p}function c(f,p){return p?f?f+" "+p:f+p:f}a.exports?(u.default=u,a.exports=u):window.classNames=u})()})(Dc)),Dc.exports}var kS=_S();const at=Xi(kS);function sf(){return sf=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},sf.apply(null,arguments)}function fg(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)!==-1)continue;u[o]=a[o]}return u}function Lm(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function DS(a){var i=BS(a,"string");return typeof i=="symbol"?i:String(i)}function BS(a,i){if(typeof a!="object"||a===null)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var o=u.call(a,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function LS(a,i,u){var o=x.useRef(a!==void 0),c=x.useState(i),f=c[0],p=c[1],v=a!==void 0,g=o.current;return o.current=v,!v&&g&&f!==i&&p(i),[v?a:f,x.useCallback(function(m){for(var b=arguments.length,w=new Array(b>1?b-1:0),T=1;T<b;T++)w[T-1]=arguments[T];u&&u.apply(void 0,[m].concat(w)),p(m)},[u])]}function dg(a,i){return Object.keys(i).reduce(function(u,o){var c,f=u,p=f[Lm(o)],v=f[o],g=fg(f,[Lm(o),o].map(DS)),m=i[o],b=LS(v,p,a[m]),w=b[0],T=b[1];return sf({},g,(c={},c[o]=w,c[m]=T,c))},a)}function cf(a,i){return cf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,o){return u.__proto__=o,u},cf(a,i)}function $S(a,i){a.prototype=Object.create(i.prototype),a.prototype.constructor=a,cf(a,i)}const US=["xxl","xl","lg","md","sm","xs"],HS="xs",hg=x.createContext({prefixes:{},breakpoints:US,minBreakpoint:HS}),{Consumer:a9,Provider:l9}=hg;function jt(a,i){const{prefixes:u}=x.useContext(hg);return a||u[i]||i}function Df(a){return a&&a.ownerDocument||document}function YS(a){var i=Df(a);return i&&i.defaultView||window}function GS(a,i){return YS(a).getComputedStyle(a,i)}var qS=/([A-Z])/g;function XS(a){return a.replace(qS,"-$1").toLowerCase()}var VS=/^ms-/;function wo(a){return XS(a).replace(VS,"-ms-")}var QS=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function ZS(a){return!!(a&&QS.test(a))}function kn(a,i){var u="",o="";if(typeof i=="string")return a.style.getPropertyValue(wo(i))||GS(a).getPropertyValue(wo(i));Object.keys(i).forEach(function(c){var f=i[c];!f&&f!==0?a.style.removeProperty(wo(c)):ZS(c)?o+=c+"("+f+") ":u+=wo(c)+": "+f+";"}),o&&(u+="transform: "+o+";"),a.style.cssText+=";"+u}var Bc={exports:{}},Lc,$m;function KS(){if($m)return Lc;$m=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Lc=a,Lc}var $c,Um;function JS(){if(Um)return $c;Um=1;var a=KS();function i(){}function u(){}return u.resetWarningCache=i,$c=function(){function o(p,v,g,m,b,w){if(w!==a){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}o.isRequired=o;function c(){return o}var f={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:c,element:o,elementType:o,instanceOf:c,node:o,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:i};return f.PropTypes=f,f},$c}var Hm;function FS(){return Hm||(Hm=1,Bc.exports=JS()()),Bc.exports}var WS=FS();const Uc=Xi(WS),Ym={disabled:!1},pg=Oe.createContext(null);var IS=function(i){return i.scrollTop},Ui="unmounted",ha="exited",Pt="entering",Mn="entered",qi="exiting",Hn=(function(a){$S(i,a);function i(o,c){var f;f=a.call(this,o,c)||this;var p=c,v=p&&!p.isMounting?o.enter:o.appear,g;return f.appearStatus=null,o.in?v?(g=ha,f.appearStatus=Pt):g=Mn:o.unmountOnExit||o.mountOnEnter?g=Ui:g=ha,f.state={status:g},f.nextCallback=null,f}i.getDerivedStateFromProps=function(c,f){var p=c.in;return p&&f.status===Ui?{status:ha}:null};var u=i.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(c){var f=null;if(c!==this.props){var p=this.state.status;this.props.in?p!==Pt&&p!==Mn&&(f=Pt):(p===Pt||p===Mn)&&(f=qi)}this.updateStatus(!1,f)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var c=this.props.timeout,f,p,v;return f=p=v=c,c!=null&&typeof c!="number"&&(f=c.exit,p=c.enter,v=c.appear!==void 0?c.appear:p),{exit:f,enter:p,appear:v}},u.updateStatus=function(c,f){if(c===void 0&&(c=!1),f!==null)if(this.cancelNextCallback(),f===Pt){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:zl.findDOMNode(this);p&&IS(p)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ha&&this.setState({status:Ui})},u.performEnter=function(c){var f=this,p=this.props.enter,v=this.context?this.context.isMounting:c,g=this.props.nodeRef?[v]:[zl.findDOMNode(this),v],m=g[0],b=g[1],w=this.getTimeouts(),T=v?w.appear:w.enter;if(!c&&!p||Ym.disabled){this.safeSetState({status:Mn},function(){f.props.onEntered(m)});return}this.props.onEnter(m,b),this.safeSetState({status:Pt},function(){f.props.onEntering(m,b),f.onTransitionEnd(T,function(){f.safeSetState({status:Mn},function(){f.props.onEntered(m,b)})})})},u.performExit=function(){var c=this,f=this.props.exit,p=this.getTimeouts(),v=this.props.nodeRef?void 0:zl.findDOMNode(this);if(!f||Ym.disabled){this.safeSetState({status:ha},function(){c.props.onExited(v)});return}this.props.onExit(v),this.safeSetState({status:qi},function(){c.props.onExiting(v),c.onTransitionEnd(p.exit,function(){c.safeSetState({status:ha},function(){c.props.onExited(v)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(c,f){f=this.setNextCallback(f),this.setState(c,f)},u.setNextCallback=function(c){var f=this,p=!0;return this.nextCallback=function(v){p&&(p=!1,f.nextCallback=null,c(v))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},u.onTransitionEnd=function(c,f){this.setNextCallback(f);var p=this.props.nodeRef?this.props.nodeRef.current:zl.findDOMNode(this),v=c==null&&!this.props.addEndListener;if(!p||v){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var g=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],m=g[0],b=g[1];this.props.addEndListener(m,b)}c!=null&&setTimeout(this.nextCallback,c)},u.render=function(){var c=this.state.status;if(c===Ui)return null;var f=this.props,p=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var v=fg(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Oe.createElement(pg.Provider,{value:null},typeof p=="function"?p(c,v):Oe.cloneElement(Oe.Children.only(p),v))},i})(Oe.Component);Hn.contextType=pg;Hn.propTypes={};function jl(){}Hn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:jl,onEntering:jl,onEntered:jl,onExit:jl,onExiting:jl,onExited:jl};Hn.UNMOUNTED=Ui;Hn.EXITED=ha;Hn.ENTERING=Pt;Hn.ENTERED=Mn;Hn.EXITING=qi;function PS(a){return a.code==="Escape"||a.keyCode===27}function e8(){const a=x.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Ul(a){if(!a||typeof a=="function")return null;const{major:i}=e8();return i>=19?a.props.ref:a.ref}const Wo=!!(typeof window<"u"&&window.document&&window.document.createElement);var ff=!1,df=!1;try{var Hc={get passive(){return ff=!0},get once(){return df=ff=!0}};Wo&&(window.addEventListener("test",Hc,Hc),window.removeEventListener("test",Hc,!0))}catch{}function t8(a,i,u,o){if(o&&typeof o!="boolean"&&!df){var c=o.once,f=o.capture,p=u;!df&&c&&(p=u.__once||function v(g){this.removeEventListener(i,v,f),u.call(this,g)},u.__once=p),a.addEventListener(i,p,ff?o:f)}a.addEventListener(i,u,o)}function n8(a,i,u,o){var c=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(i,u,c),u.__once&&a.removeEventListener(i,u.__once,c)}function Yo(a,i,u,o){return t8(a,i,u,o),function(){n8(a,i,u,o)}}function a8(a,i,u,o){if(o===void 0&&(o=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(i,u,o),a.dispatchEvent(c)}}function l8(a){var i=kn(a,"transitionDuration")||"",u=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*u}function i8(a,i,u){u===void 0&&(u=5);var o=!1,c=setTimeout(function(){o||a8(a,"transitionend",!0)},i+u),f=Yo(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(c),f()}}function r8(a,i,u,o){u==null&&(u=l8(a)||0);var c=i8(a,u,o),f=Yo(a,"transitionend",i);return function(){c(),f()}}function Gm(a,i){const u=kn(a,i)||"",o=u.indexOf("ms")===-1?1e3:1;return parseFloat(u)*o}function Bf(a,i){const u=Gm(a,"transitionDuration"),o=Gm(a,"transitionDelay"),c=r8(a,f=>{f.target===a&&(c(),i(f))},u+o)}function Li(...a){return a.filter(i=>i!=null).reduce((i,u)=>{if(typeof u!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return i===null?u:function(...c){i.apply(this,c),u.apply(this,c)}},null)}function mg(a){a.offsetHeight}const qm=a=>!a||typeof a=="function"?a:i=>{a.current=i};function o8(a,i){const u=qm(a),o=qm(i);return c=>{u&&u(c),o&&o(c)}}function u8(a,i){return x.useMemo(()=>o8(a,i),[a,i])}function s8(a){return a&&"setState"in a?zl.findDOMNode(a):a??null}const Io=Oe.forwardRef(({onEnter:a,onEntering:i,onEntered:u,onExit:o,onExiting:c,onExited:f,addEndListener:p,children:v,childRef:g,...m},b)=>{const w=x.useRef(null),T=u8(w,g),A=G=>{T(s8(G))},R=G=>V=>{G&&w.current&&G(w.current,V)},k=x.useCallback(R(a),[a]),U=x.useCallback(R(i),[i]),M=x.useCallback(R(u),[u]),$=x.useCallback(R(o),[o]),L=x.useCallback(R(c),[c]),Z=x.useCallback(R(f),[f]),K=x.useCallback(R(p),[p]);return d.jsx(Hn,{ref:b,...m,onEnter:k,onEntered:M,onEntering:U,onExit:$,onExited:Z,onExiting:L,addEndListener:K,nodeRef:w,children:typeof v=="function"?(G,V)=>v(G,{...V,ref:A}):Oe.cloneElement(v,{ref:A})})});Io.displayName="TransitionWrapper";const c8={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function f8(a,i){const u=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=i[u],c=c8[a];return o+parseInt(kn(i,c[0]),10)+parseInt(kn(i,c[1]),10)}const d8={[ha]:"collapse",[qi]:"collapsing",[Pt]:"collapsing",[Mn]:"collapse show"},gg=Oe.forwardRef(({onEnter:a,onEntering:i,onEntered:u,onExit:o,onExiting:c,className:f,children:p,dimension:v="height",in:g=!1,timeout:m=300,mountOnEnter:b=!1,unmountOnExit:w=!1,appear:T=!1,getDimensionValue:A=f8,...R},k)=>{const U=typeof v=="function"?v():v,M=x.useMemo(()=>Li(G=>{G.style[U]="0"},a),[U,a]),$=x.useMemo(()=>Li(G=>{const V=`scroll${U[0].toUpperCase()}${U.slice(1)}`;G.style[U]=`${G[V]}px`},i),[U,i]),L=x.useMemo(()=>Li(G=>{G.style[U]=null},u),[U,u]),Z=x.useMemo(()=>Li(G=>{G.style[U]=`${A(U,G)}px`,mg(G)},o),[o,A,U]),K=x.useMemo(()=>Li(G=>{G.style[U]=null},c),[U,c]);return d.jsx(Io,{ref:k,addEndListener:Bf,...R,"aria-expanded":R.role?g:null,onEnter:M,onEntering:$,onEntered:L,onExit:Z,onExiting:K,childRef:Ul(p),in:g,timeout:m,mountOnEnter:b,unmountOnExit:w,appear:T,children:(G,V)=>Oe.cloneElement(p,{...V,className:at(f,p.props.className,d8[G],U==="width"&&"collapse-horizontal")})})});gg.displayName="Collapse";function h8(a){const i=x.useRef(a);return x.useEffect(()=>{i.current=a},[a]),i}function Po(a){const i=h8(a);return x.useCallback(function(...u){return i.current&&i.current(...u)},[i])}const p8=(a=>x.forwardRef((i,u)=>d.jsx("div",{...i,ref:u,className:at(i.className,a)})));function m8(a){const i=x.useRef(a);return x.useEffect(()=>{i.current=a},[a]),i}function Nn(a){const i=m8(a);return x.useCallback(function(...u){return i.current&&i.current(...u)},[i])}function g8(){const a=x.useRef(!0),i=x.useRef(()=>a.current);return x.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),i.current}function v8(a){const i=x.useRef(null);return x.useEffect(()=>{i.current=a}),i.current}const y8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",x8=typeof document<"u",Xm=x8||y8?x.useLayoutEffect:x.useEffect,b8=["as","disabled"];function S8(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}function w8(a){return!a||a.trim()==="#"}function vg({tagName:a,disabled:i,href:u,target:o,rel:c,role:f,onClick:p,tabIndex:v=0,type:g}){a||(u!=null||o!=null||c!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:g||"button",disabled:i},m];const b=T=>{if((i||a==="a"&&w8(u))&&T.preventDefault(),i){T.stopPropagation();return}p?.(T)},w=T=>{T.key===" "&&(T.preventDefault(),b(T))};return a==="a"&&(u||(u="#"),i&&(u=void 0)),[{role:f??"button",disabled:void 0,tabIndex:i?void 0:v,href:u,target:a==="a"?o:void 0,"aria-disabled":i||void 0,rel:a==="a"?c:void 0,onClick:b,onKeyDown:w},m]}const yg=x.forwardRef((a,i)=>{let{as:u,disabled:o}=a,c=S8(a,b8);const[f,{tagName:p}]=vg(Object.assign({tagName:u,disabled:o},c));return d.jsx(p,Object.assign({},c,f,{ref:i}))});yg.displayName="Button";const E8=["onKeyDown"];function j8(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}function C8(a){return!a||a.trim()==="#"}const xg=x.forwardRef((a,i)=>{let{onKeyDown:u}=a,o=j8(a,E8);const[c]=vg(Object.assign({tagName:"a"},o)),f=Nn(p=>{c.onKeyDown(p),u?.(p)});return C8(o.href)||o.role==="button"?d.jsx("a",Object.assign({ref:i},o,c,{onKeyDown:f})):d.jsx("a",Object.assign({ref:i},o,{onKeyDown:u}))});xg.displayName="Anchor";const T8={[Pt]:"show",[Mn]:"show"},bg=x.forwardRef(({className:a,children:i,transitionClasses:u={},onEnter:o,...c},f)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},v=x.useCallback((g,m)=>{mg(g),o?.(g,m)},[o]);return d.jsx(Io,{ref:f,addEndListener:Bf,...p,onEnter:v,childRef:Ul(i),children:(g,m)=>x.cloneElement(i,{...m,className:at("fade",a,i.props.className,T8[g],u[g])})})});bg.displayName="Fade";const z8={"aria-label":Uc.string,onClick:Uc.func,variant:Uc.oneOf(["white"])},Lf=x.forwardRef(({className:a,variant:i,"aria-label":u="Close",...o},c)=>d.jsx("button",{ref:c,type:"button",className:at("btn-close",i&&`btn-close-${i}`,a),"aria-label":u,...o}));Lf.displayName="CloseButton";Lf.propTypes=z8;const Sg=x.createContext(null);Sg.displayName="CardHeaderContext";const wg=x.forwardRef(({bsPrefix:a,fluid:i=!1,as:u="div",className:o,...c},f)=>{const p=jt(a,"container"),v=typeof i=="string"?`-${i}`:"-fluid";return d.jsx(u,{ref:f,...c,className:at(o,i?`${p}${v}`:p)})});wg.displayName="Container";var R8=Function.prototype.bind.call(Function.prototype.call,[].slice);function ka(a,i){return R8(a.querySelectorAll(i))}function A8(){const[,a]=x.useReducer(i=>i+1,0);return a}function Vm(a,i){if(a.contains)return a.contains(i);if(a.compareDocumentPosition)return a===i||!!(a.compareDocumentPosition(i)&16)}const Go=x.createContext(null),$f=(a,i=null)=>a!=null?String(a):i||null,Uf=x.createContext(null);Uf.displayName="NavContext";const O8="data-rr-ui-",M8="rrUi";function eu(a){return`${O8}${a}`}function N8(a){return`${M8}${a}`}const Eg=x.createContext(Wo?window:void 0);Eg.Provider;function Hf(){return x.useContext(Eg)}const _8=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",k8=typeof document<"u",D8=k8||_8?x.useLayoutEffect:x.useEffect,Hl=x.createContext(null);Hl.displayName="NavbarContext";const Qm=a=>!a||typeof a=="function"?a:i=>{a.current=i};function B8(a,i){const u=Qm(a),o=Qm(i);return c=>{u&&u(c),o&&o(c)}}function tu(a,i){return x.useMemo(()=>B8(a,i),[a,i])}const jg=x.createContext(null),L8=["as","active","eventKey"];function $8(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}function Cg({key:a,onClick:i,active:u,id:o,role:c,disabled:f}){const p=x.useContext(Go),v=x.useContext(Uf),g=x.useContext(jg);let m=u;const b={role:c};if(v){!c&&v.role==="tablist"&&(b.role="tab");const w=v.getControllerId(a??null),T=v.getControlledId(a??null);b[eu("event-key")]=a,b.id=w||o,m=u==null&&a!=null?v.activeKey===a:u,(m||!(g!=null&&g.unmountOnExit)&&!(g!=null&&g.mountOnEnter))&&(b["aria-controls"]=T)}return b.role==="tab"&&(b["aria-selected"]=m,m||(b.tabIndex=-1),f&&(b.tabIndex=-1,b["aria-disabled"]=!0)),b.onClick=Nn(w=>{f||(i?.(w),a!=null&&p&&!w.isPropagationStopped()&&p(a,w))}),[b,{isActive:m}]}const Tg=x.forwardRef((a,i)=>{let{as:u=yg,active:o,eventKey:c}=a,f=$8(a,L8);const[p,v]=Cg(Object.assign({key:$f(c,f.href),active:o},f));return p[eu("active")]=v.isActive,d.jsx(u,Object.assign({},f,p,{ref:i}))});Tg.displayName="NavItem";const U8=["as","onSelect","activeKey","role","onKeyDown"];function H8(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}const Zm=()=>{},Km=eu("event-key"),zg=x.forwardRef((a,i)=>{let{as:u="div",onSelect:o,activeKey:c,role:f,onKeyDown:p}=a,v=H8(a,U8);const g=A8(),m=x.useRef(!1),b=x.useContext(Go),w=x.useContext(jg);let T,A;w&&(f=f||"tablist",c=w.activeKey,T=w.getControlledId,A=w.getControllerId);const R=x.useRef(null),k=L=>{const Z=R.current;if(!Z)return null;const K=ka(Z,`[${Km}]:not([aria-disabled=true])`),G=Z.querySelector("[aria-selected=true]");if(!G||G!==document.activeElement)return null;const V=K.indexOf(G);if(V===-1)return null;let ne=V+L;return ne>=K.length&&(ne=0),ne<0&&(ne=K.length-1),K[ne]},U=(L,Z)=>{L!=null&&(o?.(L,Z),b?.(L,Z))},M=L=>{if(p?.(L),!w)return;let Z;switch(L.key){case"ArrowLeft":case"ArrowUp":Z=k(-1);break;case"ArrowRight":case"ArrowDown":Z=k(1);break;default:return}Z&&(L.preventDefault(),U(Z.dataset[N8("EventKey")]||null,L),m.current=!0,g())};x.useEffect(()=>{if(R.current&&m.current){const L=R.current.querySelector(`[${Km}][aria-selected=true]`);L?.focus()}m.current=!1});const $=tu(i,R);return d.jsx(Go.Provider,{value:U,children:d.jsx(Uf.Provider,{value:{role:f,activeKey:$f(c),getControlledId:T||Zm,getControllerId:A||Zm},children:d.jsx(u,Object.assign({},v,{onKeyDown:M,ref:$,role:f}))})})});zg.displayName="Nav";const Y8=Object.assign(zg,{Item:Tg});function Yc(a){a===void 0&&(a=Df());try{var i=a.activeElement;return!i||!i.nodeName?null:i}catch{return a.body}}function G8(a){const i=x.useRef(a);return i.current=a,i}function q8(a){const i=G8(a);x.useEffect(()=>()=>i.current(),[])}function X8(a=document){const i=a.defaultView;return Math.abs(i.innerWidth-a.documentElement.clientWidth)}const Jm=eu("modal-open");class Yf{constructor({ownerDocument:i,handleContainerOverflow:u=!0,isRTL:o=!1}={}){this.handleContainerOverflow=u,this.isRTL=o,this.modals=[],this.ownerDocument=i}getScrollbarWidth(){return X8(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(i){}removeModalAttributes(i){}setContainerStyle(i){const u={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();i.style={overflow:c.style.overflow,[o]:c.style[o]},i.scrollBarWidth&&(u[o]=`${parseInt(kn(c,o)||"0",10)+i.scrollBarWidth}px`),c.setAttribute(Jm,""),kn(c,u)}reset(){[...this.modals].forEach(i=>this.remove(i))}removeContainerStyle(i){const u=this.getElement();u.removeAttribute(Jm),Object.assign(u.style,i.style)}add(i){let u=this.modals.indexOf(i);return u!==-1||(u=this.modals.length,this.modals.push(i),this.setModalAttributes(i),u!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),u}remove(i){const u=this.modals.indexOf(i);u!==-1&&(this.modals.splice(u,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(i))}isTopModal(i){return!!this.modals.length&&this.modals[this.modals.length-1]===i}}const Gc=(a,i)=>Wo?a==null?(i||Df()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function V8(a,i){const u=Hf(),[o,c]=x.useState(()=>Gc(a,u?.document));if(!o){const f=Gc(a);f&&c(f)}return x.useEffect(()=>{},[i,o]),x.useEffect(()=>{const f=Gc(a);f!==o&&c(f)},[a,o]),o}function Q8({children:a,in:i,onExited:u,mountOnEnter:o,unmountOnExit:c}){const f=x.useRef(null),p=x.useRef(i),v=Nn(u);x.useEffect(()=>{i?p.current=!0:v(f.current)},[i,v]);const g=tu(f,Ul(a)),m=x.cloneElement(a,{ref:g});return i?m:c||!p.current&&o?null:m}const Z8=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function K8(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}function J8(a){let{onEnter:i,onEntering:u,onEntered:o,onExit:c,onExiting:f,onExited:p,addEndListener:v,children:g}=a,m=K8(a,Z8);const b=x.useRef(null),w=tu(b,Ul(g)),T=Z=>K=>{Z&&b.current&&Z(b.current,K)},A=x.useCallback(T(i),[i]),R=x.useCallback(T(u),[u]),k=x.useCallback(T(o),[o]),U=x.useCallback(T(c),[c]),M=x.useCallback(T(f),[f]),$=x.useCallback(T(p),[p]),L=x.useCallback(T(v),[v]);return Object.assign({},m,{nodeRef:b},i&&{onEnter:A},u&&{onEntering:R},o&&{onEntered:k},c&&{onExit:U},f&&{onExiting:M},p&&{onExited:$},v&&{addEndListener:L},{children:typeof g=="function"?(Z,K)=>g(Z,Object.assign({},K,{ref:w})):x.cloneElement(g,{ref:w})})}const F8=["component"];function W8(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}const I8=x.forwardRef((a,i)=>{let{component:u}=a,o=W8(a,F8);const c=J8(o);return d.jsx(u,Object.assign({ref:i},c))});function P8({in:a,onTransition:i}){const u=x.useRef(null),o=x.useRef(!0),c=Nn(i);return Xm(()=>{if(!u.current)return;let f=!1;return c({in:a,element:u.current,initial:o.current,isStale:()=>f}),()=>{f=!0}},[a,c]),Xm(()=>(o.current=!1,()=>{o.current=!0}),[]),u}function ew({children:a,in:i,onExited:u,onEntered:o,transition:c}){const[f,p]=x.useState(!i);i&&f&&p(!1);const v=P8({in:!!i,onTransition:m=>{const b=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(p(!0),u?.(m.element)))};Promise.resolve(c(m)).then(b,w=>{throw m.in||p(!0),w})}}),g=tu(v,Ul(a));return f&&!i?null:x.cloneElement(a,{ref:g})}function Fm(a,i,u){return a?d.jsx(I8,Object.assign({},u,{component:a})):i?d.jsx(ew,Object.assign({},u,{transition:i})):d.jsx(Q8,Object.assign({},u))}const tw=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function nw(a,i){if(a==null)return{};var u={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;u[o]=a[o]}return u}let qc;function aw(a){return qc||(qc=new Yf({ownerDocument:a?.document})),qc}function lw(a){const i=Hf(),u=a||aw(i),o=x.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>u.add(o.current),remove:()=>u.remove(o.current),isTopModal:()=>u.isTopModal(o.current),setDialogRef:x.useCallback(c=>{o.current.dialog=c},[]),setBackdropRef:x.useCallback(c=>{o.current.backdrop=c},[])})}const Rg=x.forwardRef((a,i)=>{let{show:u=!1,role:o="dialog",className:c,style:f,children:p,backdrop:v=!0,keyboard:g=!0,onBackdropClick:m,onEscapeKeyDown:b,transition:w,runTransition:T,backdropTransition:A,runBackdropTransition:R,autoFocus:k=!0,enforceFocus:U=!0,restoreFocus:M=!0,restoreFocusOptions:$,renderDialog:L,renderBackdrop:Z=Be=>d.jsx("div",Object.assign({},Be)),manager:K,container:G,onShow:V,onHide:ne=()=>{},onExit:W,onExited:ce,onExiting:fe,onEnter:He,onEntering:P,onEntered:ae}=a,ge=nw(a,tw);const D=Hf(),Q=V8(G),I=lw(K),ee=g8(),pe=v8(u),[j,Y]=x.useState(!u),J=x.useRef(null);x.useImperativeHandle(i,()=>I,[I]),Wo&&!pe&&u&&(J.current=Yc(D?.document)),u&&j&&Y(!1);const F=Nn(()=>{if(I.add(),Ct.current=Yo(document,"keydown",Ge),Ee.current=Yo(document,"focus",()=>setTimeout(ue),!0),V&&V(),k){var Be,$a;const Yl=Yc((Be=($a=I.dialog)==null?void 0:$a.ownerDocument)!=null?Be:D?.document);I.dialog&&Yl&&!Vm(I.dialog,Yl)&&(J.current=Yl,I.dialog.focus())}}),ie=Nn(()=>{if(I.remove(),Ct.current==null||Ct.current(),Ee.current==null||Ee.current(),M){var Be;(Be=J.current)==null||Be.focus==null||Be.focus($),J.current=null}});x.useEffect(()=>{!u||!Q||F()},[u,Q,F]),x.useEffect(()=>{j&&ie()},[j,ie]),q8(()=>{ie()});const ue=Nn(()=>{if(!U||!ee()||!I.isTopModal())return;const Be=Yc(D?.document);I.dialog&&Be&&!Vm(I.dialog,Be)&&I.dialog.focus()}),ve=Nn(Be=>{Be.target===Be.currentTarget&&(m?.(Be),v===!0&&ne())}),Ge=Nn(Be=>{g&&PS(Be)&&I.isTopModal()&&(b?.(Be),Be.defaultPrevented||ne())}),Ee=x.useRef(),Ct=x.useRef(),Jt=(...Be)=>{Y(!0),ce?.(...Be)};if(!Q)return null;const ht=Object.assign({role:o,ref:I.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},ge,{style:f,className:c,tabIndex:-1});let La=L?L(ht):d.jsx("div",Object.assign({},ht,{children:x.cloneElement(p,{role:"document"})}));La=Fm(w,T,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!u,onExit:W,onExiting:fe,onExited:Jt,onEnter:He,onEntering:P,onEntered:ae,children:La});let Lt=null;return v&&(Lt=Z({ref:I.setBackdropRef,onClick:ve}),Lt=Fm(A,R,{in:!!u,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Lt})),d.jsx(d.Fragment,{children:zl.createPortal(d.jsxs(d.Fragment,{children:[Lt,La]}),Q)})});Rg.displayName="Modal";const iw=Object.assign(Rg,{Manager:Yf});function rw(a,i){return a.classList?a.classList.contains(i):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+i+" ")!==-1}function ow(a,i){a.classList?a.classList.add(i):rw(a,i)||(typeof a.className=="string"?a.className=a.className+" "+i:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+i))}function Wm(a,i){return a.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function uw(a,i){a.classList?a.classList.remove(i):typeof a.className=="string"?a.className=Wm(a.className,i):a.setAttribute("class",Wm(a.className&&a.className.baseVal||"",i))}const Cl={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Ag extends Yf{adjustAndStore(i,u,o){const c=u.style[i];u.dataset[i]=c,kn(u,{[i]:`${parseFloat(kn(u,i))+o}px`})}restore(i,u){const o=u.dataset[i];o!==void 0&&(delete u.dataset[i],kn(u,{[i]:o}))}setContainerStyle(i){super.setContainerStyle(i);const u=this.getElement();if(ow(u,"modal-open"),!i.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";ka(u,Cl.FIXED_CONTENT).forEach(f=>this.adjustAndStore(o,f,i.scrollBarWidth)),ka(u,Cl.STICKY_CONTENT).forEach(f=>this.adjustAndStore(c,f,-i.scrollBarWidth)),ka(u,Cl.NAVBAR_TOGGLER).forEach(f=>this.adjustAndStore(c,f,i.scrollBarWidth))}removeContainerStyle(i){super.removeContainerStyle(i);const u=this.getElement();uw(u,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";ka(u,Cl.FIXED_CONTENT).forEach(f=>this.restore(o,f)),ka(u,Cl.STICKY_CONTENT).forEach(f=>this.restore(c,f)),ka(u,Cl.NAVBAR_TOGGLER).forEach(f=>this.restore(c,f))}}let Xc;function sw(a){return Xc||(Xc=new Ag(a)),Xc}const Og=x.createContext({onHide(){}}),Mg=x.forwardRef(({closeLabel:a="Close",closeVariant:i,closeButton:u=!1,onHide:o,children:c,...f},p)=>{const v=x.useContext(Og),g=Po(()=>{v?.onHide(),o?.()});return d.jsxs("div",{ref:p,...f,children:[c,u&&d.jsx(Lf,{"aria-label":a,variant:i,onClick:g})]})});Mg.displayName="AbstractModalHeader";const Ng=x.forwardRef(({className:a,bsPrefix:i,as:u="div",...o},c)=>(i=jt(i,"nav-item"),d.jsx(u,{ref:c,className:at(a,i),...o})));Ng.displayName="NavItem";const _g=x.forwardRef(({bsPrefix:a,className:i,as:u=xg,active:o,eventKey:c,disabled:f=!1,...p},v)=>{a=jt(a,"nav-link");const[g,m]=Cg({key:$f(c,p.href),active:o,disabled:f,...p});return d.jsx(u,{...p,...g,ref:v,disabled:f,className:at(i,a,f&&"disabled",m.isActive&&"active")})});_g.displayName="NavLink";const kg=x.forwardRef((a,i)=>{const{as:u="div",bsPrefix:o,variant:c,fill:f=!1,justify:p=!1,navbar:v,navbarScroll:g,className:m,activeKey:b,...w}=dg(a,{activeKey:"onSelect"}),T=jt(o,"nav");let A,R,k=!1;const U=x.useContext(Hl),M=x.useContext(Sg);return U?(A=U.bsPrefix,k=v??!0):M&&({cardHeaderBsPrefix:R}=M),d.jsx(Y8,{as:u,ref:i,activeKey:b,className:at(m,{[T]:!k,[`${A}-nav`]:k,[`${A}-nav-scroll`]:k&&g,[`${R}-${c}`]:!!R,[`${T}-${c}`]:!!c,[`${T}-fill`]:f,[`${T}-justified`]:p}),...w})});kg.displayName="Nav";const cw=Object.assign(kg,{Item:Ng,Link:_g}),Dg=x.forwardRef(({bsPrefix:a,className:i,as:u,...o},c)=>{a=jt(a,"navbar-brand");const f=u||(o.href?"a":"span");return d.jsx(f,{...o,ref:c,className:at(i,a)})});Dg.displayName="NavbarBrand";const Bg=x.forwardRef(({children:a,bsPrefix:i,...u},o)=>{i=jt(i,"navbar-collapse");const c=x.useContext(Hl);return d.jsx(gg,{in:!!(c&&c.expanded),...u,children:d.jsx("div",{ref:o,className:i,children:a})})});Bg.displayName="NavbarCollapse";const Lg=x.forwardRef(({bsPrefix:a,className:i,children:u,label:o="Toggle navigation",as:c="button",onClick:f,...p},v)=>{a=jt(a,"navbar-toggler");const{onToggle:g,expanded:m}=x.useContext(Hl)||{},b=Po(w=>{f&&f(w),g&&g()});return c==="button"&&(p.type="button"),d.jsx(c,{...p,ref:v,onClick:b,"aria-label":o,className:at(i,a,!m&&"collapsed"),children:u||d.jsx("span",{className:`${a}-icon`})})});Lg.displayName="NavbarToggle";const hf=new WeakMap,Im=(a,i)=>{if(!a||!i)return;const u=hf.get(i)||new Map;hf.set(i,u);let o=u.get(a);return o||(o=i.matchMedia(a),o.refCount=0,u.set(o.media,o)),o};function fw(a,i=typeof window>"u"?void 0:window){const u=Im(a,i),[o,c]=x.useState(()=>u?u.matches:!1);return D8(()=>{let f=Im(a,i);if(!f)return c(!1);let p=hf.get(i);const v=()=>{c(f.matches)};return f.refCount++,f.addListener(v),v(),()=>{f.removeListener(v),f.refCount--,f.refCount<=0&&p?.delete(f.media),f=void 0}},[a]),o}function dw(a){const i=Object.keys(a);function u(v,g){return v===g?g:v?`${v} and ${g}`:g}function o(v){return i[Math.min(i.indexOf(v)+1,i.length-1)]}function c(v){const g=o(v);let m=a[g];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function f(v){let g=a[v];return typeof g=="number"&&(g=`${g}px`),`(min-width: ${g})`}function p(v,g,m){let b;typeof v=="object"?(b=v,m=g,g=!0):(g=g||!0,b={[v]:g});let w=x.useMemo(()=>Object.entries(b).reduce((T,[A,R])=>((R==="up"||R===!0)&&(T=u(T,f(A))),(R==="down"||R===!0)&&(T=u(T,c(A))),T),""),[JSON.stringify(b)]);return fw(w,m)}return p}const hw=dw({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),$g=x.forwardRef(({className:a,bsPrefix:i,as:u="div",...o},c)=>(i=jt(i,"offcanvas-body"),d.jsx(u,{ref:c,className:at(a,i),...o})));$g.displayName="OffcanvasBody";const pw={[Pt]:"show",[Mn]:"show"},Ug=x.forwardRef(({bsPrefix:a,className:i,children:u,in:o=!1,mountOnEnter:c=!1,unmountOnExit:f=!1,appear:p=!1,...v},g)=>(a=jt(a,"offcanvas"),d.jsx(Io,{ref:g,addEndListener:Bf,in:o,mountOnEnter:c,unmountOnExit:f,appear:p,...v,childRef:Ul(u),children:(m,b)=>x.cloneElement(u,{...b,className:at(i,u.props.className,(m===Pt||m===qi)&&`${a}-toggling`,pw[m])})})));Ug.displayName="OffcanvasToggling";const Hg=x.forwardRef(({bsPrefix:a,className:i,closeLabel:u="Close",closeButton:o=!1,...c},f)=>(a=jt(a,"offcanvas-header"),d.jsx(Mg,{ref:f,...c,className:at(i,a),closeLabel:u,closeButton:o})));Hg.displayName="OffcanvasHeader";const mw=p8("h5"),Yg=x.forwardRef(({className:a,bsPrefix:i,as:u=mw,...o},c)=>(i=jt(i,"offcanvas-title"),d.jsx(u,{ref:c,className:at(a,i),...o})));Yg.displayName="OffcanvasTitle";function gw(a){return d.jsx(Ug,{...a})}function vw(a){return d.jsx(bg,{...a})}const Gg=x.forwardRef(({bsPrefix:a,className:i,children:u,"aria-labelledby":o,placement:c="start",responsive:f,show:p=!1,backdrop:v=!0,keyboard:g=!0,scroll:m=!1,onEscapeKeyDown:b,onShow:w,onHide:T,container:A,autoFocus:R=!0,enforceFocus:k=!0,restoreFocus:U=!0,restoreFocusOptions:M,onEntered:$,onExit:L,onExiting:Z,onEnter:K,onEntering:G,onExited:V,backdropClassName:ne,manager:W,renderStaticNode:ce=!1,...fe},He)=>{const P=x.useRef();a=jt(a,"offcanvas");const[ae,ge]=x.useState(!1),D=Po(T),Q=hw(f||"xs","up");x.useEffect(()=>{ge(f?p&&!Q:p)},[p,f,Q]);const I=x.useMemo(()=>({onHide:D}),[D]);function ee(){return W||(m?(P.current||(P.current=new Ag({handleContainerOverflow:!1})),P.current):sw())}const pe=(F,...ie)=>{F&&(F.style.visibility="visible"),K?.(F,...ie)},j=(F,...ie)=>{F&&(F.style.visibility=""),V?.(...ie)},Y=x.useCallback(F=>d.jsx("div",{...F,className:at(`${a}-backdrop`,ne)}),[ne,a]),J=F=>d.jsx("div",{...F,...fe,className:at(i,f?`${a}-${f}`:a,`${a}-${c}`),"aria-labelledby":o,children:u});return d.jsxs(d.Fragment,{children:[!ae&&(f||ce)&&J({}),d.jsx(Og.Provider,{value:I,children:d.jsx(iw,{show:ae,ref:He,backdrop:v,container:A,keyboard:g,autoFocus:R,enforceFocus:k&&!m,restoreFocus:U,restoreFocusOptions:M,onEscapeKeyDown:b,onShow:w,onHide:D,onEnter:pe,onEntering:G,onEntered:$,onExit:L,onExiting:Z,onExited:j,manager:ee(),transition:gw,backdropTransition:vw,renderBackdrop:Y,renderDialog:J})})]})});Gg.displayName="Offcanvas";const yw=Object.assign(Gg,{Body:$g,Header:Hg,Title:Yg}),qg=x.forwardRef(({onHide:a,...i},u)=>{const o=x.useContext(Hl),c=Po(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return d.jsx(yw,{ref:u,show:!!(o!=null&&o.expanded),...i,renderStaticNode:!0,onHide:c})});qg.displayName="NavbarOffcanvas";const Xg=x.forwardRef(({className:a,bsPrefix:i,as:u="span",...o},c)=>(i=jt(i,"navbar-text"),d.jsx(u,{ref:c,className:at(a,i),...o})));Xg.displayName="NavbarText";const Vg=x.forwardRef((a,i)=>{const{bsPrefix:u,expand:o=!0,variant:c="light",bg:f,fixed:p,sticky:v,className:g,as:m="nav",expanded:b,onToggle:w,onSelect:T,collapseOnSelect:A=!1,...R}=dg(a,{expanded:"onToggle"}),k=jt(u,"navbar"),U=x.useCallback((...L)=>{T?.(...L),A&&b&&w?.(!1)},[T,A,b,w]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let M=`${k}-expand`;typeof o=="string"&&(M=`${M}-${o}`);const $=x.useMemo(()=>({onToggle:()=>w?.(!b),bsPrefix:k,expanded:!!b,expand:o}),[k,b,o,w]);return d.jsx(Hl.Provider,{value:$,children:d.jsx(Go.Provider,{value:U,children:d.jsx(m,{ref:i,...R,className:at(g,k,o&&M,c&&`${k}-${c}`,f&&`bg-${f}`,v&&`sticky-${v}`,p&&`fixed-${p}`)})})})});Vg.displayName="Navbar";const xw=Object.assign(Vg,{Brand:Dg,Collapse:Bg,Offcanvas:qg,Text:Xg,Toggle:Lg});function bw(a){return Me({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}function Qg(a){return Me({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M236,172a40,40,0,0,1-80,0V76H100V200a12,12,0,0,1-24,0V76H72a36,36,0,0,0-36,36,12,12,0,0,1-24,0A60.07,60.07,0,0,1,72,52H224a12,12,0,0,1,0,24H180v96a16,16,0,0,0,32,0,12,12,0,0,1,24,0Z"},child:[]}]})(a)}const Sw=S(xw)`
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
`,ww=S.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,Ew=S.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,jw=S.div`
  justify-self: center;
`,Cw=S.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,Tw=S.button`
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
`,zw=S(Ll)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px; /* space between icon and text */
`,Rw=S(Qg)`
  border-radius: 5px;
  background-color: black;
  width: 35px;
  height: 30px;
  flex: 0 0 28px;
  color: white; /* keep high contrast; adjust to your brand */
  padding: 1px;
`,Aw=S.div`
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
`;function Ow(){const a=()=>{console.log("Toggled theme")};return d.jsx("div",{className:"topbar-wrapper",children:d.jsx(Sw,{className:"shadow-sm d-lg-none",children:d.jsx(wg,{fluid:!0,className:"px-3",children:d.jsxs(ww,{children:[d.jsx(Ew,{children:d.jsxs(zw,{to:"/instalearn/","aria-label":"Go to home",children:[d.jsx("div",{children:d.jsx(Rw,{"aria-hidden":"true"})}),d.jsx(Aw,{children:"Learn"})]})}),d.jsx(jw,{}),d.jsx(Cw,{children:d.jsx(Tw,{type:"button",onClick:a,"aria-label":"Toggle",children:d.jsx(bw,{size:20})})})]})})})})}const Mw=Un`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Nw=S.aside`
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
`,_w=S(Ll)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
  gap: 5px;
`,kw=S(Qg)`
  border-radius: 5px;
  background-color: black;
  width: 35px;
  height: 30px;
  flex: 0 0 28px;
  color: white; /* keep high contrast; adjust to your brand */
  padding: 1px;
`,Dw=S.div`
  font-size: 28px;
  font-family: "BBH Sans Hegarty", sans-serif;
  font-weight: 700;
  color: black;
  letter-spacing: 0.2px;
  line-height: 1;
`,Bw=S.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Lw=Bn`
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
    animation: ${Mw} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,Vc=S(Ll)`
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

  ${a=>a.$active&&Lw}
`,$w=S.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,Qc=S.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,Zc=S.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function Uw(){const{pathname:a}=$n(),i=[{to:"/instalearn/",icon:d.jsx(tg,{}),label:"Home"},{to:"/instalearn/teacher",icon:d.jsx(cg,{}),label:"Teacher"},{to:"/instalearn/library",icon:d.jsx(eg,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:d.jsx(l5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:d.jsx(ng,{}),label:"Profile"}];return d.jsxs(Nw,{children:[d.jsxs(_w,{to:"/instalearn/",children:[d.jsx("div",{children:d.jsx(kw,{"aria-hidden":"true"})}),d.jsx(Dw,{children:"Learn"})]}),d.jsxs(Bw,{children:[i.slice(0,-1).map(u=>d.jsxs(Vc,{to:u.to,$active:a===u.to,children:[d.jsx(Qc,{children:u.icon}),d.jsx(Zc,{children:u.label}),u.hasNotification]},u.to)),d.jsxs(Vc,{to:i[i.length-1].to,$active:a===i[i.length-1].to,children:[d.jsx(Qc,{children:i[i.length-1].icon}),d.jsx(Zc,{children:i[i.length-1].label})]})]}),d.jsx($w,{children:d.jsxs(Vc,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[d.jsx(Qc,{children:d.jsx(i5,{})}),d.jsx(Zc,{children:"More"})]})})]})}const Hw=S.div`
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
`,Yw=S.div`
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
`,Zg=S.div`
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
`,Gw=S.div`
  position: relative;
  flex-shrink: 0;
`,qw=S.div`
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
  
  ${Zg}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,Xw=S.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,Vw=S.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,Qw=S.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Zw=S.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Kw=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Jw=S.div`
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
`,Fw=S.button`
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
`,Ww=S.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,Kg=S.div`
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
`,Iw=S.div`
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
  
  ${Kg}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,Pw=S.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,e7=S.div`
  flex: 1;
`,t7=S.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,n7=S.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,a7=S.span`
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
`;const l7=({sidebarWidth:a=360})=>{const i={username:"demo_user",name:"Demo User",initials:"DU"},u=[{icon:ym,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:r5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:n5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return d.jsxs(Hw,{children:[d.jsx(Yw,{children:d.jsxs(Zg,{$width:a,children:[d.jsxs(Gw,{children:[d.jsx(qw,{$width:a,children:i.initials}),d.jsx(Xw,{$width:a})]}),d.jsxs(Vw,{$width:a,children:[d.jsx(Qw,{$width:a,children:i.username}),d.jsx(Zw,{$width:a,children:i.name})]})]})}),d.jsxs(Kw,{children:[d.jsxs(Jw,{$width:a,$iconColor:"#667eea",children:[d.jsx(ym,{}),d.jsx("span",{children:"Highlights"})]}),d.jsx(Fw,{$width:a,children:"See All"})]}),d.jsx(Ww,{$width:a,children:u.map((o,c)=>{const f=o.icon;return d.jsxs(Kg,{$width:a,$glowColor:o.gradient,children:[d.jsx(a7,{$width:a,$bg:o.badgeBg,children:o.badge}),d.jsxs(Pw,{$width:a,children:[d.jsx(Iw,{$width:a,$gradient:o.gradient,children:d.jsx(f,{})}),d.jsxs(e7,{children:[d.jsx(t7,{$width:a,children:o.title}),d.jsx(n7,{$width:a,children:o.description})]})]})]},c)})})]})};function i7(){const{pathname:a}=$n(),i=[["/instalearn/",d.jsx(tg,{})],["/instalearn/teacher",d.jsx(cg,{})],["/instalearn/library",d.jsx(eg,{})],["/instalearn/profile",d.jsx(ng,{})]];return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
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
      `}),d.jsx(cw,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:i.map(([u,o])=>d.jsx(Ll,{to:u,className:`nav-link fs-4 text-white ${a===u?"active":""}`,children:o},u))})]})}const r7={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:Et.teacherProfilePic,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},Kc="studentProfile",mt=r7,o7=S.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,u7=S.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`,s7=S.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`,c7=S.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`,f7=S.div` position: relative; `,d7=S.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`,h7=S.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`,p7=S.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`,m7=S.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`,Tl=S.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`,g7=S.div` flex: 1; `,v7=S.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`,y7=S.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,x7=S.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`,b7=S.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,S7=S.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `,w7=S.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`,E7=S.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,j7=S.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`,C7=S.div` position: relative; display: inline-block; `,T7=S.div`
  position: absolute; right: 0; margin-top: 0.5rem; min-width: 200px;
  background: #fff; border: 1px solid #e5e7eb; border-radius: 0.5rem;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08); z-index: 10; overflow: hidden;
`,Pm=S.button`
  width: 100%; text-align: left; padding: 0.625rem 0.75rem; background: #fff; border: 0;
  font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; color: #111827;
  &:hover { background: #f9fafb; }
  &[data-danger="true"] { color: #b91c1c; }
`,z7=S.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`,R7=S.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`,A7=S.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`,O7=S.div` margin-bottom: 1.5rem; `,M7=S.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`,N7=S.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`,_7=S.div`
  position: absolute; inset: 0; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px); pointer-events: none;
`,k7=S.div`
  position: relative;
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked:a})=>a?"grayscale(0.8)":"none"};
  opacity: ${({$locked:a})=>a?.6:1};
`,D7=S.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`,B7=S.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
`,L7=S.div` display: flex; border-top: 1px solid #e5e7eb; `,e1=S.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({$active:a})=>a?"#111827":"transparent"};
  color: ${({$active:a})=>a?"#111827":"#9ca3af"};
`,$7=S.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`,U7=S.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked:a})=>a?"blur(2px)":"none"};
  overflow: hidden;
`,H7=S.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`,Y7=S.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden:a})=>a?"none":"block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`,t1=S.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`,n1=S.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`,a1=S.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`,l1=S.h3` margin: 0; font-size: 1rem; font-weight: 700; color: #111827; `,i1=S.button` border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem; `,G7=S.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`,q7=S.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`,X7=S.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`,r1=S.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,o1=S.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`,V7=S.div` padding: 1rem 1.25rem; display: grid; gap: 0.75rem; `,Jc=S.div` display: grid; gap: 0.25rem; `,Fc=S.label` font-size: 0.85rem; color: #374151; `,Wc=S.input`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 0.75rem; font-size: 0.95rem;
  &:focus{ outline:none; border-color:#2563eb; box-shadow:0 0 0 3px rgba(37,99,235,0.15);}
`,Q7=S.div` display:flex; justify-content:flex-end; gap:0.5rem; padding:0.75rem 1.25rem 1rem; `;function Z7(){x.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=gf(),[i,u]=x.useState(!1),[o,c]=x.useState("basic"),[f,p]=x.useState(!1),[v,g]=x.useState(!1),[m,b]=x.useState(!1),[w,T]=x.useState(!1),[A,R]=x.useState({name:"",email:"",avatar:""}),k=3,U=3,M=`joined:${mt?.id||mt?.name}`;x.useEffect(()=>{const W=localStorage.getItem(M)==="true";g(W);const ce=localStorage.getItem(Kc);if(ce){const fe=JSON.parse(ce);R({name:fe.name||"",email:fe.email||"",avatar:fe.avatar||""})}},[]),x.useEffect(()=>{localStorage.setItem(M,v?"true":"false")},[v,M]),x.useEffect(()=>{if(!m)return;const W=ce=>{const fe=ce.target;fe.closest&&(fe.closest('[aria-haspopup="menu"]')||fe.closest('[role="menu"]'))||b(!1)};return document.addEventListener("click",W),()=>document.removeEventListener("click",W)},[m]);const $=W=>{if(!v&&W>=k){u(!0);return}W===0&&a("/instalearn/library")},L=()=>{v||u(!0)},Z=async()=>{p(!0),await new Promise(W=>setTimeout(W,1200)),p(!1),u(!1),T(!0)},K=()=>{const W={name:A.name?.trim(),email:A.email?.trim(),avatar:A.avatar?.trim(),createdAt:new Date().toISOString(),plan:o,isPro:!0};if(!W.name||!W.email){alert("Please fill Name and Email to continue.");return}localStorage.setItem(Kc,JSON.stringify(W)),g(!0),T(!1)},G=()=>{localStorage.removeItem(M),localStorage.removeItem(Kc),g(!1),b(!1)},V=[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}],ne=v;return d.jsxs(o7,{children:[d.jsxs(u7,{children:[d.jsxs(s7,{children:[d.jsxs(c7,{children:[d.jsxs(f7,{children:[d.jsx(d7,{src:mt.avatar,alt:mt.name}),!v&&d.jsxs(h7,{"aria-hidden":"true",title:"Pro library locked",children:[d.jsx(bo,{size:12})," LOCKED"]})]}),d.jsxs(p7,{children:[d.jsxs(Tl,{children:[mt.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(Tl,{children:[mt.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(Tl,{children:[mt.learns," ",d.jsx("span",{children:"learns"})]})]})]}),d.jsxs(g7,{children:[d.jsxs(m7,{children:[d.jsxs(Tl,{children:[mt.concepts," ",d.jsx("span",{children:"concepts"})]}),d.jsxs(Tl,{children:[mt.students," ",d.jsx("span",{children:"students"})]}),d.jsxs(Tl,{children:[mt.learns," ",d.jsx("span",{children:"learns"})]})]}),d.jsx(v7,{children:mt.name}),d.jsx(y7,{children:mt.subject}),d.jsx(x7,{children:mt.bio}),d.jsxs(b7,{children:["🎓 ",mt.experience," years experience"]}),d.jsxs(S7,{children:[d.jsx(w7,{onClick:()=>a("/user/profile"),children:"Follow"}),d.jsx(E7,{onClick:L,disabled:f,"data-joined":v,"aria-pressed":v,"aria-label":v?"Joined":"Join",title:v?"You're in!":"Join this teacher",children:v?d.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[d.jsx(sg,{size:18})," Joined"]}):f?"Processing…":"Join"}),d.jsxs(C7,{children:[d.jsx(j7,{"aria-haspopup":"menu","aria-expanded":m,"aria-label":"More options",onClick:()=>b(W=>!W),title:"More options",children:"▼"}),m&&d.jsxs(T7,{role:"menu",children:[v&&d.jsxs(Pm,{role:"menuitem","data-danger":"true",onClick:G,title:"Cancel your membership",children:[d.jsx(Ac,{size:16})," Cancel membership"]}),d.jsx(Pm,{role:"menuitem",onClick:()=>b(!1),children:"Close"})]})]})]}),d.jsxs(z7,{hidden:ne,role:"note","aria-live":"polite",children:[d.jsxs(R7,{children:[d.jsx(bo,{size:18})," Pro library locked — get full access to all concepts & posts."]}),d.jsx(A7,{onClick:()=>u(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),d.jsx(O7,{children:d.jsx(M7,{children:mt.bookList.map((W,ce)=>{const fe=!v&&ce>=k;return d.jsxs(N7,{onClick:()=>$(ce),"aria-disabled":fe,title:fe?"Join to unlock":`Open ${W.title}`,children:[d.jsxs(k7,{$locked:fe,children:[d.jsx(D7,{children:d.jsx(Uo,{size:24})}),!v&&fe&&d.jsxs(_7,{"aria-hidden":"true",children:[d.jsx(bo,{size:14,style:{marginRight:6}})," Locked"]})]}),d.jsx(B7,{children:W.title})]},ce)})})})]}),d.jsxs(L7,{children:[d.jsx(e1,{$active:!0,children:d.jsx(J3,{size:20})}),d.jsx(e1,{children:d.jsx(L3,{size:20})})]}),d.jsx($7,{"aria-label":"Teacher posts",children:Array(9).fill(null).map((W,ce)=>{const fe=!v&&ce>=U;return d.jsxs(U7,{$locked:fe,"aria-hidden":!1,children:[d.jsx(Uo,{size:24}),fe&&d.jsxs(H7,{children:[d.jsx(bo,{size:16,style:{marginRight:6}})," Join to view"]})]},ce)})}),d.jsx(Y7,{hidden:v,onClick:()=>u(!0),"aria-label":"Unlock all posts",children:"Unlock entire library"}),i&&d.jsx(t1,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:d.jsxs(n1,{children:[d.jsxs(a1,{children:[d.jsx(l1,{id:"pricing-title",children:"Choose your plan"}),d.jsx(i1,{onClick:()=>u(!1),"aria-label":"Close pricing",children:d.jsx(Ac,{size:18})})]}),d.jsx(G7,{children:V.map(W=>d.jsxs(q7,{onClick:()=>c(W.key),$active:o===W.key,"aria-pressed":o===W.key,children:[d.jsx("h4",{children:W.name}),d.jsx("strong",{children:W.price}),d.jsx("p",{children:W.desc})]},W.key))}),d.jsxs(X7,{children:[d.jsx(o1,{onClick:()=>u(!1),children:"Not now"}),d.jsx(r1,{onClick:Z,disabled:f,children:f?"Processing payment…":"Demo Pay"})]})]})}),w&&d.jsx(t1,{role:"dialog","aria-modal":"true","aria-labelledby":"profile-form-title",children:d.jsxs(n1,{children:[d.jsxs(a1,{children:[d.jsx(l1,{id:"profile-form-title",children:"Create your student profile"}),d.jsx(i1,{onClick:()=>T(!1),"aria-label":"Close profile form",children:d.jsx(Ac,{size:18})})]}),d.jsxs(V7,{children:[d.jsxs(Jc,{children:[d.jsx(Fc,{htmlFor:"pf-name",children:"Full Name"}),d.jsx(Wc,{id:"pf-name",value:A.name,onChange:W=>R(ce=>({...ce,name:W.target.value})),placeholder:"e.g., Priya Sharma"})]}),d.jsxs(Jc,{children:[d.jsx(Fc,{htmlFor:"pf-email",children:"Email"}),d.jsx(Wc,{id:"pf-email",type:"email",value:A.email,onChange:W=>R(ce=>({...ce,email:W.target.value})),placeholder:"you@example.com"})]}),d.jsxs(Jc,{children:[d.jsx(Fc,{htmlFor:"pf-avatar",children:"Avatar initials (optional)"}),d.jsx(Wc,{id:"pf-avatar",value:A.avatar,onChange:W=>R(ce=>({...ce,avatar:W.target.value})),placeholder:"PS"})]})]}),d.jsxs(Q7,{children:[d.jsx(o1,{onClick:()=>T(!1),children:"Cancel"}),d.jsx(r1,{onClick:K,children:"Save & Finish"})]})]})})]})}const K7=S.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,J7=S.aside`
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
`,F7=S.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,W7=S.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,I7=S.aside`
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
`,P7=S.div`
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
`,e9=S.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,t9=S.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function n9(){const[a,i]=x.useState(360),[u,o]=x.useState(!1),c=x.useRef(null),f=350,p=600,v=g=>{g.preventDefault(),o(!0),c.current={startX:g.clientX,startWidth:a}};return x.useEffect(()=>{const g=(w,T,A)=>Math.min(Math.max(w,T),A),m=w=>{if(!u||!c.current)return;const{startX:T,startWidth:A}=c.current,R=T-w.clientX,k=g(A+R,f,p);i(k)},b=()=>{u&&(o(!1),c.current=null)};return u&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",b),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",b),document.body.style.cursor="",document.body.style.userSelect=""}},[u]),d.jsxs(K7,{children:[d.jsx(J7,{children:d.jsx(Uw,{})}),d.jsxs(F7,{children:[d.jsxs(W7,{$sidebarWidth:a,$isResizing:u,children:[d.jsx(e9,{children:d.jsx(Ow,{})}),d.jsxs(gx,{children:[d.jsx(_a,{path:"/instalearn",element:d.jsx(fS,{})}),d.jsx(_a,{path:"/instalearn/teacher",element:d.jsx(Z7,{})}),d.jsx(_a,{path:"/instalearn/library",element:d.jsx(C3,{})}),d.jsx(_a,{path:"/instalearn/notifications",element:d.jsx(Dm,{})}),d.jsx(_a,{path:"/instalearn/more",element:d.jsx(Dm,{})}),d.jsx(_a,{path:"/instalearn/profile",element:d.jsx(vS,{})})]})]}),d.jsxs(I7,{$width:a,$isResizing:u,children:[d.jsx(P7,{className:u?"active":"",onMouseDown:v,"aria-label":"Resize sidebar"}),d.jsx(l7,{})]})]}),d.jsx(t9,{children:d.jsx(i7,{})})]})}T2.createRoot(document.getElementById("root")).render(d.jsx(Ux,{children:d.jsx(n9,{})}));
