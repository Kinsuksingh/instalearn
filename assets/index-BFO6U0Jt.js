(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(f){if(f.ep)return;f.ep=!0;const d=s(f);fetch(f.href,d)}})();function Ji(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ou={exports:{}},Bi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1;function Py(){if(o1)return Bi;o1=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(o,f,d){var h=null;if(d!==void 0&&(h=""+d),f.key!==void 0&&(h=""+f.key),"key"in f){d={};for(var y in f)y!=="key"&&(d[y]=f[y])}else d=f;return f=d.ref,{$$typeof:a,type:o,key:h,ref:f!==void 0?f:null,props:d}}return Bi.Fragment=i,Bi.jsx=s,Bi.jsxs=s,Bi}var s1;function ev(){return s1||(s1=1,Ou.exports=Py()),Ou.exports}var u=ev(),ku={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1;function tv(){if(c1)return fe;c1=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.iterator;function M(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,$={};function B(E,H,F){this.props=E,this.context=H,this.refs=$,this.updater=F||R}B.prototype.isReactComponent={},B.prototype.setState=function(E,H){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,H,"setState")},B.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function Y(){}Y.prototype=B.prototype;function G(E,H,F){this.props=E,this.context=H,this.refs=$,this.updater=F||R}var K=G.prototype=new Y;K.constructor=G,N(K,B.prototype),K.isPureReactComponent=!0;var Z=Array.isArray;function L(){}var V={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function I(E,H,F){var W=F.ref;return{$$typeof:a,type:E,key:H,ref:W!==void 0?W:null,props:F}}function ce(E,H){return I(E.type,H,E.props)}function de(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function le(E){var H={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(F){return H[F]})}var ie=/\/+/g;function De(E,H){return typeof E=="object"&&E!==null&&E.key!=null?le(""+E.key):H.toString(36)}function Be(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(L,L):(E.status="pending",E.then(function(H){E.status==="pending"&&(E.status="fulfilled",E.value=H)},function(H){E.status==="pending"&&(E.status="rejected",E.reason=H)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function _(E,H,F,W,re){var ue=typeof E;(ue==="undefined"||ue==="boolean")&&(E=null);var xe=!1;if(E===null)xe=!0;else switch(ue){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(E.$$typeof){case a:case i:xe=!0;break;case S:return xe=E._init,_(xe(E._payload),H,F,W,re)}}if(xe)return re=re(E),xe=W===""?"."+De(E,0):W,Z(re)?(F="",xe!=null&&(F=xe.replace(ie,"$&/")+"/"),_(re,H,F,"",function(Et){return Et})):re!=null&&(de(re)&&(re=ce(re,F+(re.key==null||E&&E.key===re.key?"":(""+re.key).replace(ie,"$&/")+"/")+xe)),H.push(re)),1;xe=0;var Ge=W===""?".":W+":";if(Z(E))for(var Ee=0;Ee<E.length;Ee++)W=E[Ee],ue=Ge+De(W,Ee),xe+=_(W,H,F,ue,re);else if(Ee=M(E),typeof Ee=="function")for(E=Ee.call(E),Ee=0;!(W=E.next()).done;)W=W.value,ue=Ge+De(W,Ee++),xe+=_(W,H,F,ue,re);else if(ue==="object"){if(typeof E.then=="function")return _(Be(E),H,F,W,re);throw H=String(E),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return xe}function J(E,H,F){if(E==null)return E;var W=[],re=0;return _(E,W,"","",function(ue){return H.call(F,ue,re++)}),W}function P(E){if(E._status===-1){var H=E._result;H=H(),H.then(function(F){(E._status===0||E._status===-1)&&(E._status=1,E._result=F)},function(F){(E._status===0||E._status===-1)&&(E._status=2,E._result=F)}),E._status===-1&&(E._status=0,E._result=H)}if(E._status===1)return E._result.default;throw E._result}var te=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},me={map:J,forEach:function(E,H,F){J(E,function(){H.apply(this,arguments)},F)},count:function(E){var H=0;return J(E,function(){H++}),H},toArray:function(E){return J(E,function(H){return H})||[]},only:function(E){if(!de(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return fe.Activity=w,fe.Children=me,fe.Component=B,fe.Fragment=s,fe.Profiler=f,fe.PureComponent=G,fe.StrictMode=o,fe.Suspense=g,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,fe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return V.H.useMemoCache(E)}},fe.cache=function(E){return function(){return E.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(E,H,F){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var W=N({},E.props),re=E.key;if(H!=null)for(ue in H.key!==void 0&&(re=""+H.key),H)!Q.call(H,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&H.ref===void 0||(W[ue]=H[ue]);var ue=arguments.length-2;if(ue===1)W.children=F;else if(1<ue){for(var xe=Array(ue),Ge=0;Ge<ue;Ge++)xe[Ge]=arguments[Ge+2];W.children=xe}return I(E.type,re,W)},fe.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},fe.createElement=function(E,H,F){var W,re={},ue=null;if(H!=null)for(W in H.key!==void 0&&(ue=""+H.key),H)Q.call(H,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(re[W]=H[W]);var xe=arguments.length-2;if(xe===1)re.children=F;else if(1<xe){for(var Ge=Array(xe),Ee=0;Ee<xe;Ee++)Ge[Ee]=arguments[Ee+2];re.children=Ge}if(E&&E.defaultProps)for(W in xe=E.defaultProps,xe)re[W]===void 0&&(re[W]=xe[W]);return I(E,ue,re)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(E){return{$$typeof:y,render:E}},fe.isValidElement=de,fe.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:P}},fe.memo=function(E,H){return{$$typeof:m,type:E,compare:H===void 0?null:H}},fe.startTransition=function(E){var H=V.T,F={};V.T=F;try{var W=E(),re=V.S;re!==null&&re(F,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(L,te)}catch(ue){te(ue)}finally{H!==null&&F.types!==null&&(H.types=F.types),V.T=H}},fe.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},fe.use=function(E){return V.H.use(E)},fe.useActionState=function(E,H,F){return V.H.useActionState(E,H,F)},fe.useCallback=function(E,H){return V.H.useCallback(E,H)},fe.useContext=function(E){return V.H.useContext(E)},fe.useDebugValue=function(){},fe.useDeferredValue=function(E,H){return V.H.useDeferredValue(E,H)},fe.useEffect=function(E,H){return V.H.useEffect(E,H)},fe.useEffectEvent=function(E){return V.H.useEffectEvent(E)},fe.useId=function(){return V.H.useId()},fe.useImperativeHandle=function(E,H,F){return V.H.useImperativeHandle(E,H,F)},fe.useInsertionEffect=function(E,H){return V.H.useInsertionEffect(E,H)},fe.useLayoutEffect=function(E,H){return V.H.useLayoutEffect(E,H)},fe.useMemo=function(E,H){return V.H.useMemo(E,H)},fe.useOptimistic=function(E,H){return V.H.useOptimistic(E,H)},fe.useReducer=function(E,H,F){return V.H.useReducer(E,H,F)},fe.useRef=function(E){return V.H.useRef(E)},fe.useState=function(E){return V.H.useState(E)},fe.useSyncExternalStore=function(E,H,F){return V.H.useSyncExternalStore(E,H,F)},fe.useTransition=function(){return V.H.useTransition()},fe.version="19.2.0",fe}var u1;function Df(){return u1||(u1=1,ku.exports=tv()),ku.exports}var v=Df();const Re=Ji(v);var Nu={exports:{}},Li={},_u={exports:{}},Du={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1;function nv(){return f1||(f1=1,(function(a){function i(_,J){var P=_.length;_.push(J);e:for(;0<P;){var te=P-1>>>1,me=_[te];if(0<f(me,J))_[te]=J,_[P]=me,P=te;else break e}}function s(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var J=_[0],P=_.pop();if(P!==J){_[0]=P;e:for(var te=0,me=_.length,E=me>>>1;te<E;){var H=2*(te+1)-1,F=_[H],W=H+1,re=_[W];if(0>f(F,P))W<me&&0>f(re,F)?(_[te]=re,_[W]=P,te=W):(_[te]=F,_[H]=P,te=H);else if(W<me&&0>f(re,P))_[te]=re,_[W]=P,te=W;else break e}}return J}function f(_,J){var P=_.sortIndex-J.sortIndex;return P!==0?P:_.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var h=Date,y=h.now();a.unstable_now=function(){return h.now()-y}}var g=[],m=[],S=1,w=null,T=3,M=!1,R=!1,N=!1,$=!1,B=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function K(_){for(var J=s(m);J!==null;){if(J.callback===null)o(m);else if(J.startTime<=_)o(m),J.sortIndex=J.expirationTime,i(g,J);else break;J=s(m)}}function Z(_){if(N=!1,K(_),!R)if(s(g)!==null)R=!0,L||(L=!0,le());else{var J=s(m);J!==null&&Be(Z,J.startTime-_)}}var L=!1,V=-1,Q=5,I=-1;function ce(){return $?!0:!(a.unstable_now()-I<Q)}function de(){if($=!1,L){var _=a.unstable_now();I=_;var J=!0;try{e:{R=!1,N&&(N=!1,Y(V),V=-1),M=!0;var P=T;try{t:{for(K(_),w=s(g);w!==null&&!(w.expirationTime>_&&ce());){var te=w.callback;if(typeof te=="function"){w.callback=null,T=w.priorityLevel;var me=te(w.expirationTime<=_);if(_=a.unstable_now(),typeof me=="function"){w.callback=me,K(_),J=!0;break t}w===s(g)&&o(g),K(_)}else o(g);w=s(g)}if(w!==null)J=!0;else{var E=s(m);E!==null&&Be(Z,E.startTime-_),J=!1}}break e}finally{w=null,T=P,M=!1}J=void 0}}finally{J?le():L=!1}}}var le;if(typeof G=="function")le=function(){G(de)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,De=ie.port2;ie.port1.onmessage=de,le=function(){De.postMessage(null)}}else le=function(){B(de,0)};function Be(_,J){V=B(function(){_(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(_){switch(T){case 1:case 2:case 3:var J=3;break;default:J=T}var P=T;T=J;try{return _()}finally{T=P}},a.unstable_requestPaint=function(){$=!0},a.unstable_runWithPriority=function(_,J){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var P=T;T=_;try{return J()}finally{T=P}},a.unstable_scheduleCallback=function(_,J,P){var te=a.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?te+P:te):P=te,_){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=P+me,_={id:S++,callback:J,priorityLevel:_,startTime:P,expirationTime:me,sortIndex:-1},P>te?(_.sortIndex=P,i(m,_),s(g)===null&&_===s(m)&&(N?(Y(V),V=-1):N=!0,Be(Z,P-te))):(_.sortIndex=me,i(g,_),R||M||(R=!0,L||(L=!0,le()))),_},a.unstable_shouldYield=ce,a.unstable_wrapCallback=function(_){var J=T;return function(){var P=T;T=J;try{return _.apply(this,arguments)}finally{T=P}}}})(Du)),Du}var d1;function av(){return d1||(d1=1,_u.exports=nv()),_u.exports}var $u={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1;function lv(){if(p1)return ut;p1=1;var a=Df();function i(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(g,m,S){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:g,containerInfo:m,implementation:S}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ut.createPortal=function(g,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return d(g,m,null,S)},ut.flushSync=function(g){var m=h.T,S=o.p;try{if(h.T=null,o.p=2,g)return g()}finally{h.T=m,o.p=S,o.d.f()}},ut.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(g,m))},ut.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},ut.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var S=m.as,w=y(S,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?o.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:M}):S==="script"&&o.d.X(g,{crossOrigin:w,integrity:T,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ut.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=y(m.as,m.crossOrigin);o.d.M(g,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(g)},ut.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,w=y(S,m.crossOrigin);o.d.L(g,S,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ut.preloadModule=function(g,m){if(typeof g=="string")if(m){var S=y(m.as,m.crossOrigin);o.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(g)},ut.requestFormReset=function(g){o.d.r(g)},ut.unstable_batchedUpdates=function(g,m){return g(m)},ut.useFormState=function(g,m,S){return h.H.useFormState(g,m,S)},ut.useFormStatus=function(){return h.H.useHostTransitionStatus()},ut.version="19.2.0",ut}var h1;function Ym(){if(h1)return $u.exports;h1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),$u.exports=lv(),$u.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1;function iv(){if(m1)return Li;m1=1;var a=av(),i=Df(),s=Ym();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return g(r),e;if(c===l)return g(r),t;c=c.sibling}throw Error(o(188))}if(n.return!==l.return)n=r,l=c;else{for(var p=!1,x=r.child;x;){if(x===n){p=!0,n=r,l=c;break}if(x===l){p=!0,l=r,n=c;break}x=x.sibling}if(!p){for(x=c.child;x;){if(x===n){p=!0,n=c,l=r;break}if(x===l){p=!0,l=c,n=r;break}x=x.sibling}if(!p)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,T=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),G=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=de&&e[de]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function De(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case B:return"Profiler";case $:return"StrictMode";case Z:return"Suspense";case L:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case G:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:De(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return De(e(t))}catch{}}return null}var Be=Array.isArray,_=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},te=[],me=-1;function E(e){return{current:e}}function H(e){0>me||(e.current=te[me],te[me]=null,me--)}function F(e,t){me++,te[me]=e.current,e.current=t}var W=E(null),re=E(null),ue=E(null),xe=E(null);function Ge(e,t){switch(F(ue,t),F(re,e),F(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ah(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ah(t),e=Oh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(W),F(W,e)}function Ee(){H(W),H(re),H(ue)}function Et(e){e.memoizedState!==null&&F(xe,e);var t=W.current,n=Oh(t,e.type);t!==n&&(F(re,e),F(W,n))}function Jt(e){re.current===e&&(H(W),H(re)),xe.current===e&&(H(xe),Ni._currentValue=P)}var pt,La;function $t(e){if(pt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pt=t&&t[1]||"",La=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pt+e+La}var Le=!1;function Ua(e,t){if(!e||Le)return"";Le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(D){var k=D}Reflect.construct(e,[],X)}else{try{X.call()}catch(D){k=D}e.call(X.prototype)}}else{try{throw Error()}catch(D){k=D}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(D){if(D&&k&&typeof D.stack=="string")return[D.stack,k.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),p=c[0],x=c[1];if(p&&x){var j=p.split(`
`),O=x.split(`
`);for(r=l=0;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(l===j.length||r===O.length)for(l=j.length-1,r=O.length-1;1<=l&&0<=r&&j[l]!==O[r];)r--;for(;1<=l&&0<=r;l--,r--)if(j[l]!==O[r]){if(l!==1||r!==1)do if(l--,r--,0>r||j[l]!==O[r]){var U=`
`+j[l].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=l&&0<=r);break}}}finally{Le=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?$t(n):""}function Xl(e,t){switch(e.tag){case 26:case 27:case 5:return $t(e.type);case 16:return $t("Lazy");case 13:return e.child!==t&&t!==null?$t("Suspense Fallback"):$t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return Ua(e.type,!1);case 11:return Ua(e.type.render,!1);case 1:return Ua(e.type,!0);case 31:return $t("Activity");default:return""}}function od(e){try{var t="",n=null;do t+=Xl(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var gs=Object.prototype.hasOwnProperty,xs=a.unstable_scheduleCallback,ys=a.unstable_cancelCallback,O2=a.unstable_shouldYield,k2=a.unstable_requestPaint,Ct=a.unstable_now,N2=a.unstable_getCurrentPriorityLevel,sd=a.unstable_ImmediatePriority,cd=a.unstable_UserBlockingPriority,er=a.unstable_NormalPriority,_2=a.unstable_LowPriority,ud=a.unstable_IdlePriority,D2=a.log,$2=a.unstable_setDisableYieldValue,Vl=null,Tt=null;function Hn(e){if(typeof D2=="function"&&$2(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Vl,e)}catch{}}var zt=Math.clz32?Math.clz32:U2,B2=Math.log,L2=Math.LN2;function U2(e){return e>>>=0,e===0?32:31-(B2(e)/L2|0)|0}var tr=256,nr=262144,ar=4194304;function ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function lr(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var x=l&134217727;return x!==0?(l=x&~c,l!==0?r=ga(l):(p&=x,p!==0?r=ga(p):n||(n=x&~e,n!==0&&(r=ga(n))))):(x=l&~c,x!==0?r=ga(x):p!==0?r=ga(p):n||(n=l&~e,n!==0&&(r=ga(n)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:r}function Ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function H2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fd(){var e=ar;return ar<<=1,(ar&62914560)===0&&(ar=4194304),e}function vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Y2(e,t,n,l,r,c){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,j=e.expirationTimes,O=e.hiddenUpdates;for(n=p&~n;0<n;){var U=31-zt(n),X=1<<U;x[U]=0,j[U]=-1;var k=O[U];if(k!==null)for(O[U]=null,U=0;U<k.length;U++){var D=k[U];D!==null&&(D.lane&=-536870913)}n&=~X}l!==0&&dd(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function dd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-zt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function pd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-zt(n),r=1<<l;r&t|e[l]&t&&(e[l]|=t),n&=~r}}function hd(e,t){var n=t&-t;return n=(n&42)!==0?1:bs(n),(n&(e.suspendedLanes|t))!==0?0:n}function bs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ss(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function md(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:e1(e.type))}function gd(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var Yn=Math.random().toString(36).slice(2),it="__reactFiber$"+Yn,gt="__reactProps$"+Yn,Ha="__reactContainer$"+Yn,ws="__reactEvents$"+Yn,q2="__reactListeners$"+Yn,G2="__reactHandles$"+Yn,xd="__reactResources$"+Yn,Zl="__reactMarker$"+Yn;function js(e){delete e[it],delete e[gt],delete e[ws],delete e[q2],delete e[G2]}function Ya(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ha]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lh(e);e!==null;){if(n=e[it])return n;e=Lh(e)}return t}e=n,n=e.parentNode}return null}function qa(e){if(e=e[it]||e[Ha]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Jl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ga(e){var t=e[xd];return t||(t=e[xd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Zl]=!0}var yd=new Set,vd={};function xa(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(vd[e]=t,e=0;e<t.length;e++)yd.add(t[e])}var X2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bd={},Sd={};function V2(e){return gs.call(Sd,e)?!0:gs.call(bd,e)?!1:X2.test(e)?Sd[e]=!0:(bd[e]=!0,!1)}function ir(e,t,n){if(V2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function rr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Q2(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(p){n=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Es(e){if(!e._valueTracker){var t=wd(e)?"checked":"value";e._valueTracker=Q2(e,t,""+e[t])}}function jd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=wd(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var K2=/[\n"\\]/g;function Lt(e){return e.replace(K2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cs(e,t,n,l,r,c,p,x){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Ts(e,p,Bt(t)):n!=null?Ts(e,p,Bt(n)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Bt(x):e.removeAttribute("name")}function Ed(e,t,n,l,r,c,p,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Es(e);return}n=n!=null?""+Bt(n):"",t=t!=null?""+Bt(t):n,x||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=x?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Es(e)}function Ts(e,t,n){t==="number"&&or(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Va(e,t,n,l){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Cd(e,t,n){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bt(n):""}function Td(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(Be(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Bt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Es(e)}function Qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Z2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zd(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Z2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Md(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&n[r]!==l&&zd(e,r,l)}else for(var c in t)t.hasOwnProperty(c)&&zd(e,c,t[c])}function zs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sr(e){return F2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var Ms=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Za=null;function Rd(e){var t=qa(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Lt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var r=l[gt]||null;if(!r)throw Error(o(90));Cs(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&jd(l)}break e;case"textarea":Cd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Va(e,!!n.multiple,t,!1)}}}var As=!1;function Ad(e,t,n){if(As)return e(t,n);As=!0;try{var l=e(t);return l}finally{if(As=!1,(Ka!==null||Za!==null)&&(Jr(),Ka&&(t=Ka,e=Za,Za=Ka=null,Rd(t),e)))for(t=0;t<e.length;t++)Rd(e[t])}}function Fl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[gt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Os=!1;if(pn)try{var Wl={};Object.defineProperty(Wl,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Wl,Wl),window.removeEventListener("test",Wl,Wl)}catch{Os=!1}var qn=null,ks=null,cr=null;function Od(){if(cr)return cr;var e,t=ks,n=t.length,l,r="value"in qn?qn.value:qn.textContent,c=r.length;for(e=0;e<n&&t[e]===r[e];e++);var p=n-e;for(l=1;l<=p&&t[n-l]===r[c-l];l++);return cr=r.slice(e,1<l?1-l:void 0)}function ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function kd(){return!1}function xt(e){function t(n,l,r,c,p){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?fr:kd,this.isPropagationStopped=kd,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),t}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dr=xt(ya),Il=w({},ya,{view:0,detail:0}),W2=xt(Il),Ns,_s,Pl,pr=w({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pl&&(Pl&&e.type==="mousemove"?(Ns=e.screenX-Pl.screenX,_s=e.screenY-Pl.screenY):_s=Ns=0,Pl=e),Ns)},movementY:function(e){return"movementY"in e?e.movementY:_s}}),Nd=xt(pr),I2=w({},pr,{dataTransfer:0}),P2=xt(I2),ex=w({},Il,{relatedTarget:0}),Ds=xt(ex),tx=w({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=xt(tx),ax=w({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lx=xt(ax),ix=w({},ya,{data:0}),_d=xt(ix),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sx[e])?!!t[e]:!1}function $s(){return cx}var ux=w({},Il,{key:function(e){if(e.key){var t=rx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ox[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$s,charCode:function(e){return e.type==="keypress"?ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fx=xt(ux),dx=w({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=xt(dx),px=w({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$s}),hx=xt(px),mx=w({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=xt(mx),xx=w({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=xt(xx),vx=w({},ya,{newState:0,oldState:0}),bx=xt(vx),Sx=[9,13,27,32],Bs=pn&&"CompositionEvent"in window,ei=null;pn&&"documentMode"in document&&(ei=document.documentMode);var wx=pn&&"TextEvent"in window&&!ei,$d=pn&&(!Bs||ei&&8<ei&&11>=ei),Bd=" ",Ld=!1;function Ud(e,t){switch(e){case"keyup":return Sx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function jx(e,t){switch(e){case"compositionend":return Hd(t);case"keypress":return t.which!==32?null:(Ld=!0,Bd);case"textInput":return e=t.data,e===Bd&&Ld?null:e;default:return null}}function Ex(e,t){if(Ja)return e==="compositionend"||!Bs&&Ud(e,t)?(e=Od(),cr=ks=qn=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $d&&t.locale!=="ko"?null:t.data;default:return null}}var Cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cx[e.type]:t==="textarea"}function qd(e,t,n,l){Ka?Za?Za.push(l):Za=[l]:Ka=l,t=no(t,"onChange"),0<t.length&&(n=new dr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ti=null,ni=null;function Tx(e){Eh(e,0)}function hr(e){var t=Jl(e);if(jd(t))return e}function Gd(e,t){if(e==="change")return t}var Xd=!1;if(pn){var Ls;if(pn){var Us="oninput"in document;if(!Us){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Us=typeof Vd.oninput=="function"}Ls=Us}else Ls=!1;Xd=Ls&&(!document.documentMode||9<document.documentMode)}function Qd(){ti&&(ti.detachEvent("onpropertychange",Kd),ni=ti=null)}function Kd(e){if(e.propertyName==="value"&&hr(ni)){var t=[];qd(t,ni,e,Rs(e)),Ad(Tx,t)}}function zx(e,t,n){e==="focusin"?(Qd(),ti=t,ni=n,ti.attachEvent("onpropertychange",Kd)):e==="focusout"&&Qd()}function Mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hr(ni)}function Rx(e,t){if(e==="click")return hr(t)}function Ax(e,t){if(e==="input"||e==="change")return hr(t)}function Ox(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Ox;function ai(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!gs.call(t,r)||!Mt(e[r],t[r]))return!1}return!0}function Zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jd(e,t){var n=Zd(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zd(n)}}function Fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=or(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=or(e.document)}return t}function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kx=pn&&"documentMode"in document&&11>=document.documentMode,Fa=null,Ys=null,li=null,qs=!1;function Id(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qs||Fa==null||Fa!==or(l)||(l=Fa,"selectionStart"in l&&Hs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),li&&ai(li,l)||(li=l,l=no(Ys,"onSelect"),0<l.length&&(t=new dr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Fa)))}function va(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wa={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},Gs={},Pd={};pn&&(Pd=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function ba(e){if(Gs[e])return Gs[e];if(!Wa[e])return e;var t=Wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pd)return Gs[e]=t[n];return e}var e0=ba("animationend"),t0=ba("animationiteration"),n0=ba("animationstart"),Nx=ba("transitionrun"),_x=ba("transitionstart"),Dx=ba("transitioncancel"),a0=ba("transitionend"),l0=new Map,Xs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xs.push("scrollEnd");function Ft(e,t){l0.set(e,t),xa(t,[e])}var mr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],Ia=0,Vs=0;function gr(){for(var e=Ia,t=Vs=Ia=0;t<e;){var n=Ut[t];Ut[t++]=null;var l=Ut[t];Ut[t++]=null;var r=Ut[t];Ut[t++]=null;var c=Ut[t];if(Ut[t++]=null,l!==null&&r!==null){var p=l.pending;p===null?r.next=r:(r.next=p.next,p.next=r),l.pending=r}c!==0&&i0(n,r,c)}}function xr(e,t,n,l){Ut[Ia++]=e,Ut[Ia++]=t,Ut[Ia++]=n,Ut[Ia++]=l,Vs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Qs(e,t,n,l){return xr(e,t,n,l),yr(e)}function Sa(e,t){return xr(e,null,null,t),yr(e)}function i0(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,l=c.alternate,l!==null&&(l.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-zt(n),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=n|536870912),c):null}function yr(e){if(50<Ti)throw Ti=0,tu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pa={};function $x(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,n,l){return new $x(e,t,n,l)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,t){var n=e.alternate;return n===null?(n=Rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function r0(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vr(e,t,n,l,r,c){var p=0;if(l=e,typeof e=="function")Ks(e)&&(p=1);else if(typeof e=="string")p=Yy(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=Rt(31,n,t,r),e.elementType=I,e.lanes=c,e;case N:return wa(n.children,r,c,t);case $:p=8,r|=24;break;case B:return e=Rt(12,n,t,r|2),e.elementType=B,e.lanes=c,e;case Z:return e=Rt(13,n,t,r),e.elementType=Z,e.lanes=c,e;case L:return e=Rt(19,n,t,r),e.elementType=L,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:p=10;break e;case Y:p=9;break e;case K:p=11;break e;case V:p=14;break e;case Q:p=16,l=null;break e}p=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Rt(p,n,t,r),t.elementType=e,t.type=l,t.lanes=c,t}function wa(e,t,n,l){return e=Rt(7,e,l,t),e.lanes=n,e}function Zs(e,t,n){return e=Rt(6,e,null,t),e.lanes=n,e}function o0(e){var t=Rt(18,null,null,0);return t.stateNode=e,t}function Js(e,t,n){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var s0=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var n=s0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:od(t)},s0.set(e,t),t)}return{value:e,source:t,stack:od(t)}}var el=[],tl=0,br=null,ii=0,Yt=[],qt=0,Gn=null,nn=1,an="";function mn(e,t){el[tl++]=ii,el[tl++]=br,br=e,ii=t}function c0(e,t,n){Yt[qt++]=nn,Yt[qt++]=an,Yt[qt++]=Gn,Gn=e;var l=nn;e=an;var r=32-zt(l)-1;l&=~(1<<r),n+=1;var c=32-zt(t)+r;if(30<c){var p=r-r%5;c=(l&(1<<p)-1).toString(32),l>>=p,r-=p,nn=1<<32-zt(t)+r|n<<r|l,an=c+e}else nn=1<<c|n<<r|l,an=e}function Fs(e){e.return!==null&&(mn(e,1),c0(e,1,0))}function Ws(e){for(;e===br;)br=el[--tl],el[tl]=null,ii=el[--tl],el[tl]=null;for(;e===Gn;)Gn=Yt[--qt],Yt[qt]=null,an=Yt[--qt],Yt[qt]=null,nn=Yt[--qt],Yt[qt]=null}function u0(e,t){Yt[qt++]=nn,Yt[qt++]=an,Yt[qt++]=Gn,nn=t.id,an=t.overflow,Gn=e}var rt=null,Ue=null,we=!1,Xn=null,Gt=!1,Is=Error(o(519));function Vn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ri(Ht(t,e)),Is}function f0(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[it]=e,t[gt]=l,n){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(n=0;n<Mi.length;n++)ve(Mi[n],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),Ed(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),Td(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Mh(t.textContent,n)?(l.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),l.onScroll!=null&&ve("scroll",t),l.onScrollEnd!=null&&ve("scrollend",t),l.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Vn(e,!0)}function d0(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:rt=rt.return}}function nl(e){if(e!==rt)return!1;if(!we)return d0(e),we=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||gu(e.type,e.memoizedProps)),n=!n),n&&Ue&&Vn(e),d0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ue=Bh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ue=Bh(e)}else t===27?(t=Ue,ia(e.type)?(e=Su,Su=null,Ue=e):Ue=t):Ue=rt?Vt(e.stateNode.nextSibling):null;return!0}function ja(){Ue=rt=null,we=!1}function Ps(){var e=Xn;return e!==null&&(St===null?St=e:St.push.apply(St,e),Xn=null),e}function ri(e){Xn===null?Xn=[e]:Xn.push(e)}var ec=E(null),Ea=null,gn=null;function Qn(e,t,n){F(ec,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=ec.current,H(ec)}function tc(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function nc(e,t,n,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var x=c;c=r;for(var j=0;j<t.length;j++)if(x.context===t[j]){c.lanes|=n,x=c.alternate,x!==null&&(x.lanes|=n),tc(c.return,n,e),l||(p=null);break e}c=x.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(o(341));p.lanes|=n,c=p.alternate,c!==null&&(c.lanes|=n),tc(p,n,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function al(e,t,n,l){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var x=r.type;Mt(r.pendingProps.value,p.value)||(e!==null?e.push(x):e=[x])}}else if(r===xe.current){if(p=r.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ni):e=[Ni])}r=r.return}e!==null&&nc(t,e,n,l),t.flags|=262144}function Sr(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Ea=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return p0(Ea,e)}function wr(e,t){return Ea===null&&Ca(e),p0(e,t)}function p0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(o(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var Bx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Lx=a.unstable_scheduleCallback,Ux=a.unstable_NormalPriority,Je={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ac(){return{controller:new Bx,data:new Map,refCount:0}}function oi(e){e.refCount--,e.refCount===0&&Lx(Ux,function(){e.controller.abort()})}var si=null,lc=0,ll=0,il=null;function Hx(e,t){if(si===null){var n=si=[];lc=0,ll=ou(),il={status:"pending",value:void 0,then:function(l){n.push(l)}}}return lc++,t.then(h0,h0),t}function h0(){if(--lc===0&&si!==null){il!==null&&(il.status="fulfilled");var e=si;si=null,ll=0,il=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Yx(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),l}var m0=_.S;_.S=function(e,t){Ip=Ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hx(e,t),m0!==null&&m0(e,t)};var Ta=E(null);function ic(){var e=Ta.current;return e!==null?e:$e.pooledCache}function jr(e,t){t===null?F(Ta,Ta.current):F(Ta,t.pool)}function g0(){var e=ic();return e===null?null:{parent:Je._currentValue,pool:e}}var rl=Error(o(460)),rc=Error(o(474)),Er=Error(o(542)),Cr={then:function(){}};function x0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function y0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,b0(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,b0(e),e}throw Ma=t,rl}}function za(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ma=n,rl):n}}var Ma=null;function v0(){if(Ma===null)throw Error(o(459));var e=Ma;return Ma=null,e}function b0(e){if(e===rl||e===Er)throw Error(o(483))}var ol=null,ci=0;function Tr(e){var t=ci;return ci+=1,ol===null&&(ol=[]),y0(ol,e,t)}function ui(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function zr(e,t){throw t.$$typeof===T?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function S0(e){function t(z,C){if(e){var A=z.deletions;A===null?(z.deletions=[C],z.flags|=16):A.push(C)}}function n(z,C){if(!e)return null;for(;C!==null;)t(z,C),C=C.sibling;return null}function l(z){for(var C=new Map;z!==null;)z.key!==null?C.set(z.key,z):C.set(z.index,z),z=z.sibling;return C}function r(z,C){return z=hn(z,C),z.index=0,z.sibling=null,z}function c(z,C,A){return z.index=A,e?(A=z.alternate,A!==null?(A=A.index,A<C?(z.flags|=67108866,C):A):(z.flags|=67108866,C)):(z.flags|=1048576,C)}function p(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function x(z,C,A,q){return C===null||C.tag!==6?(C=Zs(A,z.mode,q),C.return=z,C):(C=r(C,A),C.return=z,C)}function j(z,C,A,q){var oe=A.type;return oe===N?U(z,C,A.props.children,q,A.key):C!==null&&(C.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Q&&za(oe)===C.type)?(C=r(C,A.props),ui(C,A),C.return=z,C):(C=vr(A.type,A.key,A.props,null,z.mode,q),ui(C,A),C.return=z,C)}function O(z,C,A,q){return C===null||C.tag!==4||C.stateNode.containerInfo!==A.containerInfo||C.stateNode.implementation!==A.implementation?(C=Js(A,z.mode,q),C.return=z,C):(C=r(C,A.children||[]),C.return=z,C)}function U(z,C,A,q,oe){return C===null||C.tag!==7?(C=wa(A,z.mode,q,oe),C.return=z,C):(C=r(C,A),C.return=z,C)}function X(z,C,A){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Zs(""+C,z.mode,A),C.return=z,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case M:return A=vr(C.type,C.key,C.props,null,z.mode,A),ui(A,C),A.return=z,A;case R:return C=Js(C,z.mode,A),C.return=z,C;case Q:return C=za(C),X(z,C,A)}if(Be(C)||le(C))return C=wa(C,z.mode,A,null),C.return=z,C;if(typeof C.then=="function")return X(z,Tr(C),A);if(C.$$typeof===G)return X(z,wr(z,C),A);zr(z,C)}return null}function k(z,C,A,q){var oe=C!==null?C.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return oe!==null?null:x(z,C,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case M:return A.key===oe?j(z,C,A,q):null;case R:return A.key===oe?O(z,C,A,q):null;case Q:return A=za(A),k(z,C,A,q)}if(Be(A)||le(A))return oe!==null?null:U(z,C,A,q,null);if(typeof A.then=="function")return k(z,C,Tr(A),q);if(A.$$typeof===G)return k(z,C,wr(z,A),q);zr(z,A)}return null}function D(z,C,A,q,oe){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return z=z.get(A)||null,x(C,z,""+q,oe);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return z=z.get(q.key===null?A:q.key)||null,j(C,z,q,oe);case R:return z=z.get(q.key===null?A:q.key)||null,O(C,z,q,oe);case Q:return q=za(q),D(z,C,A,q,oe)}if(Be(q)||le(q))return z=z.get(A)||null,U(C,z,q,oe,null);if(typeof q.then=="function")return D(z,C,A,Tr(q),oe);if(q.$$typeof===G)return D(z,C,A,wr(C,q),oe);zr(C,q)}return null}function ne(z,C,A,q){for(var oe=null,Ce=null,ae=C,he=C=0,Se=null;ae!==null&&he<A.length;he++){ae.index>he?(Se=ae,ae=null):Se=ae.sibling;var Te=k(z,ae,A[he],q);if(Te===null){ae===null&&(ae=Se);break}e&&ae&&Te.alternate===null&&t(z,ae),C=c(Te,C,he),Ce===null?oe=Te:Ce.sibling=Te,Ce=Te,ae=Se}if(he===A.length)return n(z,ae),we&&mn(z,he),oe;if(ae===null){for(;he<A.length;he++)ae=X(z,A[he],q),ae!==null&&(C=c(ae,C,he),Ce===null?oe=ae:Ce.sibling=ae,Ce=ae);return we&&mn(z,he),oe}for(ae=l(ae);he<A.length;he++)Se=D(ae,z,he,A[he],q),Se!==null&&(e&&Se.alternate!==null&&ae.delete(Se.key===null?he:Se.key),C=c(Se,C,he),Ce===null?oe=Se:Ce.sibling=Se,Ce=Se);return e&&ae.forEach(function(ua){return t(z,ua)}),we&&mn(z,he),oe}function se(z,C,A,q){if(A==null)throw Error(o(151));for(var oe=null,Ce=null,ae=C,he=C=0,Se=null,Te=A.next();ae!==null&&!Te.done;he++,Te=A.next()){ae.index>he?(Se=ae,ae=null):Se=ae.sibling;var ua=k(z,ae,Te.value,q);if(ua===null){ae===null&&(ae=Se);break}e&&ae&&ua.alternate===null&&t(z,ae),C=c(ua,C,he),Ce===null?oe=ua:Ce.sibling=ua,Ce=ua,ae=Se}if(Te.done)return n(z,ae),we&&mn(z,he),oe;if(ae===null){for(;!Te.done;he++,Te=A.next())Te=X(z,Te.value,q),Te!==null&&(C=c(Te,C,he),Ce===null?oe=Te:Ce.sibling=Te,Ce=Te);return we&&mn(z,he),oe}for(ae=l(ae);!Te.done;he++,Te=A.next())Te=D(ae,z,he,Te.value,q),Te!==null&&(e&&Te.alternate!==null&&ae.delete(Te.key===null?he:Te.key),C=c(Te,C,he),Ce===null?oe=Te:Ce.sibling=Te,Ce=Te);return e&&ae.forEach(function(Iy){return t(z,Iy)}),we&&mn(z,he),oe}function _e(z,C,A,q){if(typeof A=="object"&&A!==null&&A.type===N&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case M:e:{for(var oe=A.key;C!==null;){if(C.key===oe){if(oe=A.type,oe===N){if(C.tag===7){n(z,C.sibling),q=r(C,A.props.children),q.return=z,z=q;break e}}else if(C.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Q&&za(oe)===C.type){n(z,C.sibling),q=r(C,A.props),ui(q,A),q.return=z,z=q;break e}n(z,C);break}else t(z,C);C=C.sibling}A.type===N?(q=wa(A.props.children,z.mode,q,A.key),q.return=z,z=q):(q=vr(A.type,A.key,A.props,null,z.mode,q),ui(q,A),q.return=z,z=q)}return p(z);case R:e:{for(oe=A.key;C!==null;){if(C.key===oe)if(C.tag===4&&C.stateNode.containerInfo===A.containerInfo&&C.stateNode.implementation===A.implementation){n(z,C.sibling),q=r(C,A.children||[]),q.return=z,z=q;break e}else{n(z,C);break}else t(z,C);C=C.sibling}q=Js(A,z.mode,q),q.return=z,z=q}return p(z);case Q:return A=za(A),_e(z,C,A,q)}if(Be(A))return ne(z,C,A,q);if(le(A)){if(oe=le(A),typeof oe!="function")throw Error(o(150));return A=oe.call(A),se(z,C,A,q)}if(typeof A.then=="function")return _e(z,C,Tr(A),q);if(A.$$typeof===G)return _e(z,C,wr(z,A),q);zr(z,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,C!==null&&C.tag===6?(n(z,C.sibling),q=r(C,A),q.return=z,z=q):(n(z,C),q=Zs(A,z.mode,q),q.return=z,z=q),p(z)):n(z,C)}return function(z,C,A,q){try{ci=0;var oe=_e(z,C,A,q);return ol=null,oe}catch(ae){if(ae===rl||ae===Er)throw ae;var Ce=Rt(29,ae,null,z.mode);return Ce.lanes=q,Ce.return=z,Ce}finally{}}}var Ra=S0(!0),w0=S0(!1),Kn=!1;function oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ze&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=yr(e),i0(e,null,n),t}return xr(e,l,t,n),yr(e)}function fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,pd(e,n)}}function cc(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?r=c=t:c=c.next=t}else r=c=t;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var uc=!1;function di(){if(uc){var e=il;if(e!==null)throw e}}function pi(e,t,n,l){uc=!1;var r=e.updateQueue;Kn=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,x=r.shared.pending;if(x!==null){r.shared.pending=null;var j=x,O=j.next;j.next=null,p===null?c=O:p.next=O,p=j;var U=e.alternate;U!==null&&(U=U.updateQueue,x=U.lastBaseUpdate,x!==p&&(x===null?U.firstBaseUpdate=O:x.next=O,U.lastBaseUpdate=j))}if(c!==null){var X=r.baseState;p=0,U=O=j=null,x=c;do{var k=x.lane&-536870913,D=k!==x.lane;if(D?(be&k)===k:(l&k)===k){k!==0&&k===ll&&(uc=!0),U!==null&&(U=U.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ne=e,se=x;k=t;var _e=n;switch(se.tag){case 1:if(ne=se.payload,typeof ne=="function"){X=ne.call(_e,X,k);break e}X=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=se.payload,k=typeof ne=="function"?ne.call(_e,X,k):ne,k==null)break e;X=w({},X,k);break e;case 2:Kn=!0}}k=x.callback,k!==null&&(e.flags|=64,D&&(e.flags|=8192),D=r.callbacks,D===null?r.callbacks=[k]:D.push(k))}else D={lane:k,tag:x.tag,payload:x.payload,callback:x.callback,next:null},U===null?(O=U=D,j=X):U=U.next=D,p|=k;if(x=x.next,x===null){if(x=r.shared.pending,x===null)break;D=x,x=D.next,D.next=null,r.lastBaseUpdate=D,r.shared.pending=null}}while(!0);U===null&&(j=X),r.baseState=j,r.firstBaseUpdate=O,r.lastBaseUpdate=U,c===null&&(r.shared.lanes=0),ea|=p,e.lanes=p,e.memoizedState=X}}function j0(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function E0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)j0(n[e],t)}var sl=E(null),Mr=E(0);function C0(e,t){e=Tn,F(Mr,e),F(sl,t),Tn=e|t.baseLanes}function fc(){F(Mr,Tn),F(sl,sl.current)}function dc(){Tn=Mr.current,H(sl),H(Mr)}var At=E(null),Xt=null;function Fn(e){var t=e.alternate;F(Ke,Ke.current&1),F(At,e),Xt===null&&(t===null||sl.current!==null||t.memoizedState!==null)&&(Xt=e)}function pc(e){F(Ke,Ke.current),F(At,e),Xt===null&&(Xt=e)}function T0(e){e.tag===22?(F(Ke,Ke.current),F(At,e),Xt===null&&(Xt=e)):Wn()}function Wn(){F(Ke,Ke.current),F(At,At.current)}function Ot(e){H(At),Xt===e&&(Xt=null),H(Ke)}var Ke=E(0);function Rr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||vu(n)||bu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yn=0,pe=null,ke=null,Fe=null,Ar=!1,cl=!1,Aa=!1,Or=0,hi=0,ul=null,qx=0;function Ve(){throw Error(o(321))}function hc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function mc(e,t,n,l,r,c){return yn=c,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?cp:Ac,Aa=!1,c=n(l,r),Aa=!1,cl&&(c=M0(t,n,l,r)),z0(e),c}function z0(e){_.H=xi;var t=ke!==null&&ke.next!==null;if(yn=0,Fe=ke=pe=null,Ar=!1,hi=0,ul=null,t)throw Error(o(300));e===null||We||(e=e.dependencies,e!==null&&Sr(e)&&(We=!0))}function M0(e,t,n,l){pe=e;var r=0;do{if(cl&&(ul=null),hi=0,cl=!1,25<=r)throw Error(o(301));if(r+=1,Fe=ke=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_.H=up,c=t(n,l)}while(cl);return c}function Gx(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?mi(t):t,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(pe.flags|=1024),t}function gc(){var e=Or!==0;return Or=0,e}function xc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yc(e){if(Ar){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ar=!1}yn=0,Fe=ke=pe=null,cl=!1,hi=Or=0,ul=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?pe.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ze(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Fe===null?pe.memoizedState:Fe.next;if(t!==null)Fe=t,ke=e;else{if(e===null)throw pe.alternate===null?Error(o(467)):Error(o(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Fe===null?pe.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function kr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mi(e){var t=hi;return hi+=1,ul===null&&(ul=[]),e=y0(ul,e,t),t=pe,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?cp:Ac),e}function Nr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mi(e);if(e.$$typeof===G)return ot(e)}throw Error(o(438,String(e)))}function vc(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=pe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=kr(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=ce;return t.index++,n}function vn(e,t){return typeof t=="function"?t(e):t}function _r(e){var t=Ze();return bc(t,ke,e)}function bc(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}t.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var x=p=null,j=null,O=t,U=!1;do{var X=O.lane&-536870913;if(X!==O.lane?(be&X)===X:(yn&X)===X){var k=O.revertLane;if(k===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),X===ll&&(U=!0);else if((yn&k)===k){O=O.next,k===ll&&(U=!0);continue}else X={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},j===null?(x=j=X,p=c):j=j.next=X,pe.lanes|=k,ea|=k;X=O.action,Aa&&n(c,X),c=O.hasEagerState?O.eagerState:n(c,X)}else k={lane:X,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},j===null?(x=j=k,p=c):j=j.next=k,pe.lanes|=X,ea|=X;O=O.next}while(O!==null&&O!==t);if(j===null?p=c:j.next=x,!Mt(c,e.memoizedState)&&(We=!0,U&&(n=il,n!==null)))throw n;e.memoizedState=c,e.baseState=p,e.baseQueue=j,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Sc(e){var t=Ze(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,c=t.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);Mt(c,t.memoizedState)||(We=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,l]}function R0(e,t,n){var l=pe,r=Ze(),c=we;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var p=!Mt((ke||r).memoizedState,n);if(p&&(r.memoizedState=n,We=!0),r=r.queue,Ec(k0.bind(null,l,r,e),[e]),r.getSnapshot!==t||p||Fe!==null&&Fe.memoizedState.tag&1){if(l.flags|=2048,fl(9,{destroy:void 0},O0.bind(null,l,r,n,t),null),$e===null)throw Error(o(349));c||(yn&127)!==0||A0(l,t,n)}return n}function A0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=kr(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function O0(e,t,n,l){t.value=n,t.getSnapshot=l,N0(t)&&_0(e)}function k0(e,t,n){return n(function(){N0(t)&&_0(e)})}function N0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function _0(e){var t=Sa(e,2);t!==null&&wt(t,e,2)}function wc(e){var t=ht();if(typeof e=="function"){var n=e;if(e=n(),Aa){Hn(!0);try{n()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},t}function D0(e,t,n,l){return e.baseState=n,bc(e,ke,typeof l=="function"?l:vn)}function Xx(e,t,n,l,r){if(Br(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};_.T!==null?n(!0):c.isTransition=!1,l(c),n=t.pending,n===null?(c.next=t.pending=c,$0(t,c)):(c.next=n.next,t.pending=n.next=c)}}function $0(e,t){var n=t.action,l=t.payload,r=e.state;if(t.isTransition){var c=_.T,p={};_.T=p;try{var x=n(r,l),j=_.S;j!==null&&j(p,x),B0(e,t,x)}catch(O){jc(e,t,O)}finally{c!==null&&p.types!==null&&(c.types=p.types),_.T=c}}else try{c=n(r,l),B0(e,t,c)}catch(O){jc(e,t,O)}}function B0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){L0(e,t,l)},function(l){return jc(e,t,l)}):L0(e,t,n)}function L0(e,t,n){t.status="fulfilled",t.value=n,U0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$0(e,n)))}function jc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,U0(t),t=t.next;while(t!==l)}e.action=null}function U0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function H0(e,t){return t}function Y0(e,t){if(we){var n=$e.formState;if(n!==null){e:{var l=pe;if(we){if(Ue){t:{for(var r=Ue,c=Gt;r.nodeType!==8;){if(!c){r=null;break t}if(r=Vt(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){Ue=Vt(r.nextSibling),l=r.data==="F!";break e}}Vn(l)}l=!1}l&&(t=n[0])}}return n=ht(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:H0,lastRenderedState:t},n.queue=l,n=rp.bind(null,pe,l),l.dispatch=n,l=wc(!1),c=Rc.bind(null,pe,!1,l.queue),l=ht(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,n=Xx.bind(null,pe,r,c,n),r.dispatch=n,l.memoizedState=e,[t,n,!1]}function q0(e){var t=Ze();return G0(t,ke,e)}function G0(e,t,n){if(t=bc(e,t,H0)[0],e=_r(vn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=mi(t)}catch(p){throw p===rl?Er:p}else l=t;t=Ze();var r=t.queue,c=r.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,fl(9,{destroy:void 0},Vx.bind(null,r,n),null)),[l,c,e]}function Vx(e,t){e.action=t}function X0(e){var t=Ze(),n=ke;if(n!==null)return G0(t,n,e);Ze(),t=t.memoizedState,n=Ze();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function fl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=pe.updateQueue,t===null&&(t=kr(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function V0(){return Ze().memoizedState}function Dr(e,t,n,l){var r=ht();pe.flags|=e,r.memoizedState=fl(1|t,{destroy:void 0},n,l===void 0?null:l)}function $r(e,t,n,l){var r=Ze();l=l===void 0?null:l;var c=r.memoizedState.inst;ke!==null&&l!==null&&hc(l,ke.memoizedState.deps)?r.memoizedState=fl(t,c,n,l):(pe.flags|=e,r.memoizedState=fl(1|t,c,n,l))}function Q0(e,t){Dr(8390656,8,e,t)}function Ec(e,t){$r(2048,8,e,t)}function Qx(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=kr(),pe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function K0(e){var t=Ze().memoizedState;return Qx({ref:t,nextImpl:e}),function(){if((ze&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Z0(e,t){return $r(4,2,e,t)}function J0(e,t){return $r(4,4,e,t)}function F0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function W0(e,t,n){n=n!=null?n.concat([e]):null,$r(4,4,F0.bind(null,t,e),n)}function Cc(){}function I0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&hc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function P0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&hc(t,l[1]))return l[0];if(l=e(),Aa){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[l,t],l}function Tc(e,t,n){return n===void 0||(yn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=eh(),pe.lanes|=e,ea|=e,n)}function ep(e,t,n,l){return Mt(n,t)?n:sl.current!==null?(e=Tc(e,n,l),Mt(e,t)||(We=!0),e):(yn&42)===0||(yn&1073741824)!==0&&(be&261930)===0?(We=!0,e.memoizedState=n):(e=eh(),pe.lanes|=e,ea|=e,t)}function tp(e,t,n,l,r){var c=J.p;J.p=c!==0&&8>c?c:8;var p=_.T,x={};_.T=x,Rc(e,!1,t,n);try{var j=r(),O=_.S;if(O!==null&&O(x,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var U=Yx(j,l);gi(e,t,U,_t(e))}else gi(e,t,l,_t(e))}catch(X){gi(e,t,{then:function(){},status:"rejected",reason:X},_t())}finally{J.p=c,p!==null&&x.types!==null&&(p.types=x.types),_.T=p}}function Kx(){}function zc(e,t,n,l){if(e.tag!==5)throw Error(o(476));var r=np(e).queue;tp(e,r,t,P,n===null?Kx:function(){return ap(e),n(l)})}function np(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ap(e){var t=np(e);t.next===null&&(t=e.alternate.memoizedState),gi(e,t.next.queue,{},_t())}function Mc(){return ot(Ni)}function lp(){return Ze().memoizedState}function ip(){return Ze().memoizedState}function Zx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_t();e=Zn(n);var l=Jn(t,e,n);l!==null&&(wt(l,t,n),fi(l,t,n)),t={cache:ac()},e.payload=t;return}t=t.return}}function Jx(e,t,n){var l=_t();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Br(e)?op(t,n):(n=Qs(e,t,n,l),n!==null&&(wt(n,e,l),sp(n,t,l)))}function rp(e,t,n){var l=_t();gi(e,t,n,l)}function gi(e,t,n,l){var r={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Br(e))op(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,x=c(p,n);if(r.hasEagerState=!0,r.eagerState=x,Mt(x,p))return xr(e,t,r,0),$e===null&&gr(),!1}catch{}finally{}if(n=Qs(e,t,r,l),n!==null)return wt(n,e,l),sp(n,t,l),!0}return!1}function Rc(e,t,n,l){if(l={lane:2,revertLane:ou(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Br(e)){if(t)throw Error(o(479))}else t=Qs(e,n,l,2),t!==null&&wt(t,e,2)}function Br(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function op(e,t){cl=Ar=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sp(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,pd(e,n)}}var xi={readContext:ot,use:Nr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};xi.useEffectEvent=Ve;var cp={readContext:ot,use:Nr,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Q0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Dr(4194308,4,F0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){Dr(4,2,e,t)},useMemo:function(e,t){var n=ht();t=t===void 0?null:t;var l=e();if(Aa){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=ht();if(n!==void 0){var r=n(t);if(Aa){Hn(!0);try{n(t)}finally{Hn(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=Jx.bind(null,pe,e),[l.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=wc(e);var t=e.queue,n=rp.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cc,useDeferredValue:function(e,t){var n=ht();return Tc(n,e,t)},useTransition:function(){var e=wc(!1);return e=tp.bind(null,pe,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=pe,r=ht();if(we){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),$e===null)throw Error(o(349));(be&127)!==0||A0(l,t,n)}r.memoizedState=n;var c={value:n,getSnapshot:t};return r.queue=c,Q0(k0.bind(null,l,c,e),[e]),l.flags|=2048,fl(9,{destroy:void 0},O0.bind(null,l,c,n,t),null),n},useId:function(){var e=ht(),t=$e.identifierPrefix;if(we){var n=an,l=nn;n=(l&~(1<<32-zt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=qx++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Mc,useFormState:Y0,useActionState:Y0,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rc.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:vc,useCacheRefresh:function(){return ht().memoizedState=Zx.bind(null,pe)},useEffectEvent:function(e){var t=ht(),n={impl:e};return t.memoizedState=n,function(){if((ze&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Ac={readContext:ot,use:Nr,useCallback:I0,useContext:ot,useEffect:Ec,useImperativeHandle:W0,useInsertionEffect:Z0,useLayoutEffect:J0,useMemo:P0,useReducer:_r,useRef:V0,useState:function(){return _r(vn)},useDebugValue:Cc,useDeferredValue:function(e,t){var n=Ze();return ep(n,ke.memoizedState,e,t)},useTransition:function(){var e=_r(vn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:mi(e),t]},useSyncExternalStore:R0,useId:lp,useHostTransitionStatus:Mc,useFormState:q0,useActionState:q0,useOptimistic:function(e,t){var n=Ze();return D0(n,ke,e,t)},useMemoCache:vc,useCacheRefresh:ip};Ac.useEffectEvent=K0;var up={readContext:ot,use:Nr,useCallback:I0,useContext:ot,useEffect:Ec,useImperativeHandle:W0,useInsertionEffect:Z0,useLayoutEffect:J0,useMemo:P0,useReducer:Sc,useRef:V0,useState:function(){return Sc(vn)},useDebugValue:Cc,useDeferredValue:function(e,t){var n=Ze();return ke===null?Tc(n,e,t):ep(n,ke.memoizedState,e,t)},useTransition:function(){var e=Sc(vn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:mi(e),t]},useSyncExternalStore:R0,useId:lp,useHostTransitionStatus:Mc,useFormState:X0,useActionState:X0,useOptimistic:function(e,t){var n=Ze();return ke!==null?D0(n,ke,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vc,useCacheRefresh:ip};up.useEffectEvent=K0;function Oc(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kc={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=_t(),r=Zn(l);r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,l),t!==null&&(wt(t,e,l),fi(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=_t(),r=Zn(l);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,l),t!==null&&(wt(t,e,l),fi(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_t(),l=Zn(n);l.tag=2,t!=null&&(l.callback=t),t=Jn(e,l,n),t!==null&&(wt(t,e,n),fi(t,e,n))}};function fp(e,t,n,l,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,p):t.prototype&&t.prototype.isPureReactComponent?!ai(n,l)||!ai(r,c):!0}function dp(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&kc.enqueueReplaceState(t,t.state,null)}function Oa(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function pp(e){mr(e)}function hp(e){console.error(e)}function mp(e){mr(e)}function Lr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function gp(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Nc(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Lr(e,t)},n}function xp(e){return e=Zn(e),e.tag=3,e}function yp(e,t,n,l){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){gp(t,n,l)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){gp(t,n,l),typeof r!="function"&&(ta===null?ta=new Set([this]):ta.add(this));var x=l.stack;this.componentDidCatch(l.value,{componentStack:x!==null?x:""})})}function Fx(e,t,n,l,r){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&al(t,n,r,!0),n=At.current,n!==null){switch(n.tag){case 31:case 13:return Xt===null?Fr():n.alternate===null&&Qe===0&&(Qe=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===Cr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),lu(e,l,r)),!1;case 22:return n.flags|=65536,l===Cr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),lu(e,l,r)),!1}throw Error(o(435,n.tag))}return lu(e,l,r),Fr(),!1}if(we)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==Is&&(e=Error(o(422),{cause:l}),ri(Ht(e,n)))):(l!==Is&&(t=Error(o(423),{cause:l}),ri(Ht(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Ht(l,n),r=Nc(e.stateNode,l,r),cc(e,r),Qe!==4&&(Qe=2)),!1;var c=Error(o(520),{cause:l});if(c=Ht(c,n),Ci===null?Ci=[c]:Ci.push(c),Qe!==4&&(Qe=2),t===null)return!0;l=Ht(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Nc(n.stateNode,l,e),cc(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ta===null||!ta.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=xp(r),yp(r,e,n,l),cc(n,r),!1}n=n.return}while(n!==null);return!1}var _c=Error(o(461)),We=!1;function st(e,t,n,l){t.child=e===null?w0(t,null,n,l):Ra(t,e.child,n,l)}function vp(e,t,n,l,r){n=n.render;var c=t.ref;if("ref"in l){var p={};for(var x in l)x!=="ref"&&(p[x]=l[x])}else p=l;return Ca(t),l=mc(e,t,n,p,c,r),x=gc(),e!==null&&!We?(xc(e,t,r),bn(e,t,r)):(we&&x&&Fs(t),t.flags|=1,st(e,t,l,r),t.child)}function bp(e,t,n,l,r){if(e===null){var c=n.type;return typeof c=="function"&&!Ks(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Sp(e,t,c,l,r)):(e=vr(n.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!qc(e,r)){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:ai,n(p,l)&&e.ref===t.ref)return bn(e,t,r)}return t.flags|=1,e=hn(c,l),e.ref=t.ref,e.return=t,t.child=e}function Sp(e,t,n,l,r){if(e!==null){var c=e.memoizedProps;if(ai(c,l)&&e.ref===t.ref)if(We=!1,t.pendingProps=l=c,qc(e,r))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,bn(e,t,r)}return Dc(e,t,n,l,r)}function wp(e,t,n,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,t.child=null;return jp(e,t,c,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&jr(t,c!==null?c.cachePool:null),c!==null?C0(t,c):fc(),T0(t);else return l=t.lanes=536870912,jp(e,t,c!==null?c.baseLanes|n:n,n,l)}else c!==null?(jr(t,c.cachePool),C0(t,c),Wn(),t.memoizedState=null):(e!==null&&jr(t,null),fc(),Wn());return st(e,t,r,n),t.child}function yi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jp(e,t,n,l,r){var c=ic();return c=c===null?null:{parent:Je._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&jr(t,null),fc(),T0(t),e!==null&&al(e,t,l,!0),t.childLanes=r,null}function Ur(e,t){return t=Yr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ep(e,t,n){return Ra(t,e.child,null,n),e=Ur(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function Wx(e,t,n){var l=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(we){if(l.mode==="hidden")return e=Ur(t,l),t.lanes=536870912,yi(null,e);if(pc(t),(e=Ue)?(e=$h(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=o0(e),n.return=t,t.child=n,rt=t,Ue=null)):e=null,e===null)throw Vn(t);return t.lanes=536870912,null}return Ur(t,l)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(pc(t),r)if(t.flags&256)t.flags&=-257,t=Ep(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(We||al(e,t,n,!1),r=(n&e.childLanes)!==0,We||r){if(l=$e,l!==null&&(p=hd(l,n),p!==0&&p!==c.retryLane))throw c.retryLane=p,Sa(e,p),wt(l,e,p),_c;Fr(),t=Ep(e,t,n)}else e=c.treeContext,Ue=Vt(p.nextSibling),rt=t,we=!0,Xn=null,Gt=!1,e!==null&&u0(t,e),t=Ur(t,l),t.flags|=4096;return t}return e=hn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Dc(e,t,n,l,r){return Ca(t),n=mc(e,t,n,l,void 0,r),l=gc(),e!==null&&!We?(xc(e,t,r),bn(e,t,r)):(we&&l&&Fs(t),t.flags|=1,st(e,t,n,r),t.child)}function Cp(e,t,n,l,r,c){return Ca(t),t.updateQueue=null,n=M0(t,l,n,r),z0(e),l=gc(),e!==null&&!We?(xc(e,t,c),bn(e,t,c)):(we&&l&&Fs(t),t.flags|=1,st(e,t,n,c),t.child)}function Tp(e,t,n,l,r){if(Ca(t),t.stateNode===null){var c=Pa,p=n.contextType;typeof p=="object"&&p!==null&&(c=ot(p)),c=new n(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=kc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},oc(t),p=n.contextType,c.context=typeof p=="object"&&p!==null?ot(p):Pa,c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Oc(t,n,p,l),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&kc.enqueueReplaceState(c,c.state,null),pi(t,l,c,r),di(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var x=t.memoizedProps,j=Oa(n,x);c.props=j;var O=c.context,U=n.contextType;p=Pa,typeof U=="object"&&U!==null&&(p=ot(U));var X=n.getDerivedStateFromProps;U=typeof X=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,U||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||O!==p)&&dp(t,c,l,p),Kn=!1;var k=t.memoizedState;c.state=k,pi(t,l,c,r),di(),O=t.memoizedState,x||k!==O||Kn?(typeof X=="function"&&(Oc(t,n,X,l),O=t.memoizedState),(j=Kn||fp(t,n,j,l,k,O,p))?(U||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=O),c.props=l,c.state=O,c.context=p,l=j):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,sc(e,t),p=t.memoizedProps,U=Oa(n,p),c.props=U,X=t.pendingProps,k=c.context,O=n.contextType,j=Pa,typeof O=="object"&&O!==null&&(j=ot(O)),x=n.getDerivedStateFromProps,(O=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==X||k!==j)&&dp(t,c,l,j),Kn=!1,k=t.memoizedState,c.state=k,pi(t,l,c,r),di();var D=t.memoizedState;p!==X||k!==D||Kn||e!==null&&e.dependencies!==null&&Sr(e.dependencies)?(typeof x=="function"&&(Oc(t,n,x,l),D=t.memoizedState),(U=Kn||fp(t,n,U,l,k,D,j)||e!==null&&e.dependencies!==null&&Sr(e.dependencies))?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,D,j),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,D,j)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=D),c.props=l,c.state=D,c.context=j,l=U):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,Hr(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=Ra(t,e.child,null,r),t.child=Ra(t,null,n,r)):st(e,t,n,r),t.memoizedState=c.state,e=t.child):e=bn(e,t,r),e}function zp(e,t,n,l){return ja(),t.flags|=256,st(e,t,n,l),t.child}var $c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bc(e){return{baseLanes:e,cachePool:g0()}}function Lc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Nt),e}function Mp(e,t,n){var l=t.pendingProps,r=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),p&&(r=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(r?Fn(t):Wn(),(e=Ue)?(e=$h(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=o0(e),n.return=t,t.child=n,rt=t,Ue=null)):e=null,e===null)throw Vn(t);return bu(e)?t.lanes=32:t.lanes=536870912,null}var x=l.children;return l=l.fallback,r?(Wn(),r=t.mode,x=Yr({mode:"hidden",children:x},r),l=wa(l,r,n,null),x.return=t,l.return=t,x.sibling=l,t.child=x,l=t.child,l.memoizedState=Bc(n),l.childLanes=Lc(e,p,n),t.memoizedState=$c,yi(null,l)):(Fn(t),Uc(t,x))}var j=e.memoizedState;if(j!==null&&(x=j.dehydrated,x!==null)){if(c)t.flags&256?(Fn(t),t.flags&=-257,t=Hc(e,t,n)):t.memoizedState!==null?(Wn(),t.child=e.child,t.flags|=128,t=null):(Wn(),x=l.fallback,r=t.mode,l=Yr({mode:"visible",children:l.children},r),x=wa(x,r,n,null),x.flags|=2,l.return=t,x.return=t,l.sibling=x,t.child=l,Ra(t,e.child,null,n),l=t.child,l.memoizedState=Bc(n),l.childLanes=Lc(e,p,n),t.memoizedState=$c,t=yi(null,l));else if(Fn(t),bu(x)){if(p=x.nextSibling&&x.nextSibling.dataset,p)var O=p.dgst;p=O,l=Error(o(419)),l.stack="",l.digest=p,ri({value:l,source:null,stack:null}),t=Hc(e,t,n)}else if(We||al(e,t,n,!1),p=(n&e.childLanes)!==0,We||p){if(p=$e,p!==null&&(l=hd(p,n),l!==0&&l!==j.retryLane))throw j.retryLane=l,Sa(e,l),wt(p,e,l),_c;vu(x)||Fr(),t=Hc(e,t,n)}else vu(x)?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,Ue=Vt(x.nextSibling),rt=t,we=!0,Xn=null,Gt=!1,e!==null&&u0(t,e),t=Uc(t,l.children),t.flags|=4096);return t}return r?(Wn(),x=l.fallback,r=t.mode,j=e.child,O=j.sibling,l=hn(j,{mode:"hidden",children:l.children}),l.subtreeFlags=j.subtreeFlags&65011712,O!==null?x=hn(O,x):(x=wa(x,r,n,null),x.flags|=2),x.return=t,l.return=t,l.sibling=x,t.child=l,yi(null,l),l=t.child,x=e.child.memoizedState,x===null?x=Bc(n):(r=x.cachePool,r!==null?(j=Je._currentValue,r=r.parent!==j?{parent:j,pool:j}:r):r=g0(),x={baseLanes:x.baseLanes|n,cachePool:r}),l.memoizedState=x,l.childLanes=Lc(e,p,n),t.memoizedState=$c,yi(e.child,l)):(Fn(t),n=e.child,e=n.sibling,n=hn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Uc(e,t){return t=Yr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yr(e,t){return e=Rt(22,e,null,t),e.lanes=0,e}function Hc(e,t,n){return Ra(t,e.child,null,n),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rp(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),tc(e.return,t,n)}function Yc(e,t,n,l,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r,treeForkCount:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=n,p.tailMode=r,p.treeForkCount=c)}function Ap(e,t,n){var l=t.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var p=Ke.current,x=(p&2)!==0;if(x?(p=p&1|2,t.flags|=128):p&=1,F(Ke,p),st(e,t,l,n),l=we?ii:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rp(e,n,t);else if(e.tag===19)Rp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Rr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Yc(t,!1,r,n,c,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Rr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Yc(t,!0,n,null,c,l);break;case"together":Yc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(al(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Sr(e)))}function Ix(e,t,n){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),Qn(t,Je,e.memoizedState.cache),ja();break;case 27:case 5:Et(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,pc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Fn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Mp(e,t,n):(Fn(t),e=bn(e,t,n),e!==null?e.sibling:null);Fn(t);break;case 19:var r=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(al(e,t,n,!1),l=(n&t.childLanes)!==0),r){if(l)return Ap(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),F(Ke,Ke.current),l)break;return null;case 22:return t.lanes=0,wp(e,t,n,t.pendingProps);case 24:Qn(t,Je,e.memoizedState.cache)}return bn(e,t,n)}function Op(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!qc(e,n)&&(t.flags&128)===0)return We=!1,Ix(e,t,n);We=(e.flags&131072)!==0}else We=!1,we&&(t.flags&1048576)!==0&&c0(t,ii,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=za(t.elementType),t.type=e,typeof e=="function")Ks(e)?(l=Oa(e,l),t.tag=1,t=Tp(null,t,e,l,n)):(t.tag=0,t=Dc(null,t,e,l,n));else{if(e!=null){var r=e.$$typeof;if(r===K){t.tag=11,t=vp(null,t,e,l,n);break e}else if(r===V){t.tag=14,t=bp(null,t,e,l,n);break e}}throw t=De(e)||e,Error(o(306,t,""))}}return t;case 0:return Dc(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,r=Oa(l,t.pendingProps),Tp(e,t,l,r,n);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var c=t.memoizedState;r=c.element,sc(e,t),pi(t,l,null,n);var p=t.memoizedState;if(l=p.cache,Qn(t,Je,l),l!==c.cache&&nc(t,[Je],n,!0),di(),l=p.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=zp(e,t,l,n);break e}else if(l!==r){r=Ht(Error(o(424)),t),ri(r),t=zp(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Vt(e.firstChild),rt=t,we=!0,Xn=null,Gt=!0,n=w0(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ja(),l===r){t=bn(e,t,n);break e}st(e,t,l,n)}t=t.child}return t;case 26:return Hr(e,t),e===null?(n=qh(t.type,null,t.pendingProps,null))?t.memoizedState=n:we||(n=t.type,e=t.pendingProps,l=ao(ue.current).createElement(n),l[it]=t,l[gt]=e,ct(l,n,e),tt(l),t.stateNode=l):t.memoizedState=qh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Et(t),e===null&&we&&(l=t.stateNode=Uh(t.type,t.pendingProps,ue.current),rt=t,Gt=!0,r=Ue,ia(t.type)?(Su=r,Ue=Vt(l.firstChild)):Ue=r),st(e,t,t.pendingProps.children,n),Hr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((r=l=Ue)&&(l=My(l,t.type,t.pendingProps,Gt),l!==null?(t.stateNode=l,rt=t,Ue=Vt(l.firstChild),Gt=!1,r=!0):r=!1),r||Vn(t)),Et(t),r=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,l=c.children,gu(r,c)?l=null:p!==null&&gu(r,p)&&(t.flags|=32),t.memoizedState!==null&&(r=mc(e,t,Gx,null,null,n),Ni._currentValue=r),Hr(e,t),st(e,t,l,n),t.child;case 6:return e===null&&we&&((e=n=Ue)&&(n=Ry(n,t.pendingProps,Gt),n!==null?(t.stateNode=n,rt=t,Ue=null,e=!0):e=!1),e||Vn(t)),null;case 13:return Mp(e,t,n);case 4:return Ge(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ra(t,null,l,n):st(e,t,l,n),t.child;case 11:return vp(e,t,t.type,t.pendingProps,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Qn(t,t.type,l.value),st(e,t,l.children,n),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,Ca(t),r=ot(r),l=l(r),t.flags|=1,st(e,t,l,n),t.child;case 14:return bp(e,t,t.type,t.pendingProps,n);case 15:return Sp(e,t,t.type,t.pendingProps,n);case 19:return Ap(e,t,n);case 31:return Wx(e,t,n);case 22:return wp(e,t,n,t.pendingProps);case 24:return Ca(t),l=ot(Je),e===null?(r=ic(),r===null&&(r=$e,c=ac(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),t.memoizedState={parent:l,cache:r},oc(t),Qn(t,Je,r)):((e.lanes&n)!==0&&(sc(e,t),pi(t,null,null,n),di()),r=e.memoizedState,c=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Qn(t,Je,l)):(l=c.cache,Qn(t,Je,l),l!==r.cache&&nc(t,[Je],n,!0))),st(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Sn(e){e.flags|=4}function Gc(e,t,n,l,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(lh())e.flags|=8192;else throw Ma=Cr,rc}else e.flags&=-16777217}function kp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Kh(t))if(lh())e.flags|=8192;else throw Ma=Cr,rc}function qr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fd():536870912,e.lanes|=t,ml|=t)}function vi(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Px(e,t,n){var l=t.pendingProps;switch(Ws(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),xn(Je),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(nl(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ps())),He(t),null;case 26:var r=t.type,c=t.memoizedState;return e===null?(Sn(t),c!==null?(He(t),kp(t,c)):(He(t),Gc(t,r,null,l,n))):c?c!==e.memoizedState?(Sn(t),He(t),kp(t,c)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Sn(t),He(t),Gc(t,r,e,l,n)),null;case 27:if(Jt(t),n=ue.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return He(t),null}e=W.current,nl(t)?f0(t):(e=Uh(r,l,n),t.stateNode=e,Sn(t))}return He(t),null;case 5:if(Jt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return He(t),null}if(c=W.current,nl(t))f0(t);else{var p=ao(ue.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?p.createElement("select",{is:l.is}):p.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?p.createElement(r,{is:l.is}):p.createElement(r)}}c[it]=t,c[gt]=l;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=c;e:switch(ct(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Sn(t)}}return He(t),Gc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ue.current,nl(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,r=rt,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Mh(e.nodeValue,n)),e||Vn(t,!0)}else e=ao(e).createTextNode(l),e[it]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=nl(t),n!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[it]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=Ps(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(o(558))}return He(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=nl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[it]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),r=!1}else r=Ps(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),qr(t,t.updateQueue),He(t),null);case 4:return Ee(),e===null&&fu(t.stateNode.containerInfo),He(t),null;case 10:return xn(t.type),He(t),null;case 19:if(H(Ke),l=t.memoizedState,l===null)return He(t),null;if(r=(t.flags&128)!==0,c=l.rendering,c===null)if(r)vi(l,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Rr(e),c!==null){for(t.flags|=128,vi(l,!1),e=c.updateQueue,t.updateQueue=e,qr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)r0(n,e),n=n.sibling;return F(Ke,Ke.current&1|2),we&&mn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Ct()>Kr&&(t.flags|=128,r=!0,vi(l,!1),t.lanes=4194304)}else{if(!r)if(e=Rr(c),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,qr(t,e),vi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!we)return He(t),null}else 2*Ct()-l.renderingStartTime>Kr&&n!==536870912&&(t.flags|=128,r=!0,vi(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(e=l.last,e!==null?e.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ct(),e.sibling=null,n=Ke.current,F(Ke,r?n&1|2:n&1),we&&mn(t,l.treeForkCount),e):(He(t),null);case 22:case 23:return Ot(t),dc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&qr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&H(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(Je),He(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function ey(e,t){switch(Ws(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(Je),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jt(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(o(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Ke),null;case 4:return Ee(),null;case 10:return xn(t.type),null;case 22:case 23:return Ot(t),dc(),e!==null&&H(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(Je),null;case 25:return null;default:return null}}function Np(e,t){switch(Ws(t),t.tag){case 3:xn(Je),Ee();break;case 26:case 27:case 5:Jt(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:H(Ke);break;case 10:xn(t.type);break;case 22:case 23:Ot(t),dc(),e!==null&&H(Ta);break;case 24:xn(Je)}}function bi(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){l=void 0;var c=n.create,p=n.inst;l=c(),p.destroy=l}n=n.next}while(n!==r)}}catch(x){Oe(t,t.return,x)}}function In(e,t,n){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var p=l.inst,x=p.destroy;if(x!==void 0){p.destroy=void 0,r=t;var j=n,O=x;try{O()}catch(U){Oe(r,j,U)}}}l=l.next}while(l!==c)}}catch(U){Oe(t,t.return,U)}}function _p(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{E0(t,n)}catch(l){Oe(e,e.return,l)}}}function Dp(e,t,n){n.props=Oa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Oe(e,t,l)}}function Si(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){Oe(e,t,r)}}function ln(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(r){Oe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function $p(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(r){Oe(e,e.return,r)}}function Xc(e,t,n){try{var l=e.stateNode;wy(l,e.type,n,t),l[gt]=t}catch(r){Oe(e,e.return,r)}}function Bp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(l!==4&&(l===27&&ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function Gr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Gr(e,t,n),e=e.sibling;e!==null;)Gr(e,t,n),e=e.sibling}function Lp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ct(t,l,n),t[it]=e,t[gt]=n}catch(c){Oe(e,e.return,c)}}var wn=!1,Ie=!1,Kc=!1,Up=typeof WeakSet=="function"?WeakSet:Set,nt=null;function ty(e,t){if(e=e.containerInfo,hu=uo,e=Wd(e),Hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,x=-1,j=-1,O=0,U=0,X=e,k=null;t:for(;;){for(var D;X!==n||r!==0&&X.nodeType!==3||(x=p+r),X!==c||l!==0&&X.nodeType!==3||(j=p+l),X.nodeType===3&&(p+=X.nodeValue.length),(D=X.firstChild)!==null;)k=X,X=D;for(;;){if(X===e)break t;if(k===n&&++O===r&&(x=p),k===c&&++U===l&&(j=p),(D=X.nextSibling)!==null)break;X=k,k=X.parentNode}X=D}n=x===-1||j===-1?null:{start:x,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:e,selectionRange:n},uo=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,r=c.memoizedProps,c=c.memoizedState,l=n.stateNode;try{var ne=Oa(n.type,r);e=l.getSnapshotBeforeUpdate(ne,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){Oe(n,n.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)yu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function Hp(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),l&4&&bi(5,n);break;case 1:if(En(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Oe(n,n.return,p)}else{var r=Oa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Oe(n,n.return,p)}}l&64&&_p(n),l&512&&Si(n,n.return);break;case 3:if(En(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{E0(e,t)}catch(p){Oe(n,n.return,p)}}break;case 27:t===null&&l&4&&Lp(n);case 26:case 5:En(e,n),t===null&&l&4&&$p(n),l&512&&Si(n,n.return);break;case 12:En(e,n);break;case 31:En(e,n),l&4&&Gp(e,n);break;case 13:En(e,n),l&4&&Xp(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=uy.bind(null,n),Ay(e,n))));break;case 22:if(l=n.memoizedState!==null||wn,!l){t=t!==null&&t.memoizedState!==null||Ie,r=wn;var c=Ie;wn=l,(Ie=t)&&!c?Cn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),wn=r,Ie=c}break;case 30:break;default:En(e,n)}}function Yp(e){var t=e.alternate;t!==null&&(e.alternate=null,Yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&js(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,yt=!1;function jn(e,t,n){for(n=n.child;n!==null;)qp(e,t,n),n=n.sibling}function qp(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 26:Ie||ln(n,t),jn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ie||ln(n,t);var l=qe,r=yt;ia(n.type)&&(qe=n.stateNode,yt=!1),jn(e,t,n),Ai(n.stateNode),qe=l,yt=r;break;case 5:Ie||ln(n,t);case 6:if(l=qe,r=yt,qe=null,jn(e,t,n),qe=l,yt=r,qe!==null)if(yt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(n.stateNode)}catch(c){Oe(n,t,c)}else try{qe.removeChild(n.stateNode)}catch(c){Oe(n,t,c)}break;case 18:qe!==null&&(yt?(e=qe,_h(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),jl(e)):_h(qe,n.stateNode));break;case 4:l=qe,r=yt,qe=n.stateNode.containerInfo,yt=!0,jn(e,t,n),qe=l,yt=r;break;case 0:case 11:case 14:case 15:In(2,n,t),Ie||In(4,n,t),jn(e,t,n);break;case 1:Ie||(ln(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Dp(n,t,l)),jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:Ie=(l=Ie)||n.memoizedState!==null,jn(e,t,n),Ie=l;break;default:jn(e,t,n)}}function Gp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{jl(e)}catch(n){Oe(t,t.return,n)}}}function Xp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jl(e)}catch(n){Oe(t,t.return,n)}}function ny(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Up),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Up),t;default:throw Error(o(435,e.tag))}}function Xr(e,t){var n=ny(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var r=fy.bind(null,e,l);l.then(r,r)}})}function vt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l],c=e,p=t,x=p;e:for(;x!==null;){switch(x.tag){case 27:if(ia(x.type)){qe=x.stateNode,yt=!1;break e}break;case 5:qe=x.stateNode,yt=!1;break e;case 3:case 4:qe=x.stateNode.containerInfo,yt=!0;break e}x=x.return}if(qe===null)throw Error(o(160));qp(c,p,r),qe=null,yt=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Vp(t,e),t=t.sibling}var Wt=null;function Vp(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),bt(e),l&4&&(In(3,e,e.return),bi(3,e),In(5,e,e.return));break;case 1:vt(t,e),bt(e),l&512&&(Ie||n===null||ln(n,n.return)),l&64&&wn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var r=Wt;if(vt(t,e),bt(e),l&512&&(Ie||n===null||ln(n,n.return)),l&4){var c=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[Zl]||c[it]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),ct(c,l,n),c[it]=e,tt(c),l=c;break e;case"link":var p=Vh("link","href",r).get(l+(n.href||""));if(p){for(var x=0;x<p.length;x++)if(c=p[x],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(x,1);break t}}c=r.createElement(l),ct(c,l,n),r.head.appendChild(c);break;case"meta":if(p=Vh("meta","content",r).get(l+(n.content||""))){for(x=0;x<p.length;x++)if(c=p[x],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(x,1);break t}}c=r.createElement(l),ct(c,l,n),r.head.appendChild(c);break;default:throw Error(o(468,l))}c[it]=e,tt(c),l=c}e.stateNode=l}else Qh(r,e.type,e.stateNode);else e.stateNode=Xh(r,l,e.memoizedProps);else c!==l?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,l===null?Qh(r,e.type,e.stateNode):Xh(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps)}break;case 27:vt(t,e),bt(e),l&512&&(Ie||n===null||ln(n,n.return)),n!==null&&l&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vt(t,e),bt(e),l&512&&(Ie||n===null||ln(n,n.return)),e.flags&32){r=e.stateNode;try{Qa(r,"")}catch(ne){Oe(e,e.return,ne)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Xc(e,r,n!==null?n.memoizedProps:r)),l&1024&&(Kc=!0);break;case 6:if(vt(t,e),bt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ne){Oe(e,e.return,ne)}}break;case 3:if(ro=null,r=Wt,Wt=lo(t.containerInfo),vt(t,e),Wt=r,bt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{jl(t.containerInfo)}catch(ne){Oe(e,e.return,ne)}Kc&&(Kc=!1,Qp(e));break;case 4:l=Wt,Wt=lo(e.stateNode.containerInfo),vt(t,e),bt(e),Wt=l;break;case 12:vt(t,e),bt(e);break;case 31:vt(t,e),bt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xr(e,l)));break;case 13:vt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Qr=Ct()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xr(e,l)));break;case 22:r=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,O=wn,U=Ie;if(wn=O||r,Ie=U||j,vt(t,e),Ie=U,wn=O,bt(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||j||wn||Ie||ka(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(c=j.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{x=j.stateNode;var X=j.memoizedProps.style,k=X!=null&&X.hasOwnProperty("display")?X.display:null;x.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(ne){Oe(j,j.return,ne)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=r?"":j.memoizedProps}catch(ne){Oe(j,j.return,ne)}}}else if(t.tag===18){if(n===null){j=t;try{var D=j.stateNode;r?Dh(D,!0):Dh(j.stateNode,!1)}catch(ne){Oe(j,j.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Xr(e,n))));break;case 19:vt(t,e),bt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xr(e,l)));break;case 30:break;case 21:break;default:vt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Bp(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,c=Vc(e);Gr(e,c,r);break;case 5:var p=n.stateNode;n.flags&32&&(Qa(p,""),n.flags&=-33);var x=Vc(e);Gr(e,x,p);break;case 3:case 4:var j=n.stateNode.containerInfo,O=Vc(e);Qc(e,O,j);break;default:throw Error(o(161))}}catch(U){Oe(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Qp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Hp(e,t.alternate,t),t=t.sibling}function ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:In(4,t,t.return),ka(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Dp(t,t.return,n),ka(t);break;case 27:Ai(t.stateNode);case 26:case 5:ln(t,t.return),ka(t);break;case 22:t.memoizedState===null&&ka(t);break;case 30:ka(t);break;default:ka(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,c=t,p=c.flags;switch(c.tag){case 0:case 11:case 15:Cn(r,c,n),bi(4,c);break;case 1:if(Cn(r,c,n),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){Oe(l,l.return,O)}if(l=c,r=l.updateQueue,r!==null){var x=l.stateNode;try{var j=r.shared.hiddenCallbacks;if(j!==null)for(r.shared.hiddenCallbacks=null,r=0;r<j.length;r++)j0(j[r],x)}catch(O){Oe(l,l.return,O)}}n&&p&64&&_p(c),Si(c,c.return);break;case 27:Lp(c);case 26:case 5:Cn(r,c,n),n&&l===null&&p&4&&$p(c),Si(c,c.return);break;case 12:Cn(r,c,n);break;case 31:Cn(r,c,n),n&&p&4&&Gp(r,c);break;case 13:Cn(r,c,n),n&&p&4&&Xp(r,c);break;case 22:c.memoizedState===null&&Cn(r,c,n),Si(c,c.return);break;case 30:break;default:Cn(r,c,n)}t=t.sibling}}function Zc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&oi(n))}function Jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oi(e))}function It(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kp(e,t,n,l),t=t.sibling}function Kp(e,t,n,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,l),r&2048&&bi(9,t);break;case 1:It(e,t,n,l);break;case 3:It(e,t,n,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oi(e)));break;case 12:if(r&2048){It(e,t,n,l),e=t.stateNode;try{var c=t.memoizedProps,p=c.id,x=c.onPostCommit;typeof x=="function"&&x(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Oe(t,t.return,j)}}else It(e,t,n,l);break;case 31:It(e,t,n,l);break;case 13:It(e,t,n,l);break;case 23:break;case 22:c=t.stateNode,p=t.alternate,t.memoizedState!==null?c._visibility&2?It(e,t,n,l):wi(e,t):c._visibility&2?It(e,t,n,l):(c._visibility|=2,dl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Zc(p,t);break;case 24:It(e,t,n,l),r&2048&&Jc(t.alternate,t);break;default:It(e,t,n,l)}}function dl(e,t,n,l,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,p=t,x=n,j=l,O=p.flags;switch(p.tag){case 0:case 11:case 15:dl(c,p,x,j,r),bi(8,p);break;case 23:break;case 22:var U=p.stateNode;p.memoizedState!==null?U._visibility&2?dl(c,p,x,j,r):wi(c,p):(U._visibility|=2,dl(c,p,x,j,r)),r&&O&2048&&Zc(p.alternate,p);break;case 24:dl(c,p,x,j,r),r&&O&2048&&Jc(p.alternate,p);break;default:dl(c,p,x,j,r)}t=t.sibling}}function wi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,r=l.flags;switch(l.tag){case 22:wi(n,l),r&2048&&Zc(l.alternate,l);break;case 24:wi(n,l),r&2048&&Jc(l.alternate,l);break;default:wi(n,l)}t=t.sibling}}var ji=8192;function pl(e,t,n){if(e.subtreeFlags&ji)for(e=e.child;e!==null;)Zp(e,t,n),e=e.sibling}function Zp(e,t,n){switch(e.tag){case 26:pl(e,t,n),e.flags&ji&&e.memoizedState!==null&&qy(n,Wt,e.memoizedState,e.memoizedProps);break;case 5:pl(e,t,n);break;case 3:case 4:var l=Wt;Wt=lo(e.stateNode.containerInfo),pl(e,t,n),Wt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ji,ji=16777216,pl(e,t,n),ji=l):pl(e,t,n));break;default:pl(e,t,n)}}function Jp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];nt=l,Wp(l,e)}Jp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fp(e),e=e.sibling}function Fp(e){switch(e.tag){case 0:case 11:case 15:Ei(e),e.flags&2048&&In(9,e,e.return);break;case 3:Ei(e);break;case 12:Ei(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vr(e)):Ei(e);break;default:Ei(e)}}function Vr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];nt=l,Wp(l,e)}Jp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),Vr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Vr(t));break;default:Vr(t)}e=e.sibling}}function Wp(e,t){for(;nt!==null;){var n=nt;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:oi(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,nt=l;else e:for(n=e;nt!==null;){l=nt;var r=l.sibling,c=l.return;if(Yp(l),l===n){nt=null;break e}if(r!==null){r.return=c,nt=r;break e}nt=c}}}var ay={getCacheForType:function(e){var t=ot(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ot(Je).controller.signal}},ly=typeof WeakMap=="function"?WeakMap:Map,ze=0,$e=null,ye=null,be=0,Ae=0,kt=null,Pn=!1,hl=!1,Fc=!1,Tn=0,Qe=0,ea=0,Na=0,Wc=0,Nt=0,ml=0,Ci=null,St=null,Ic=!1,Qr=0,Ip=0,Kr=1/0,Zr=null,ta=null,et=0,na=null,gl=null,zn=0,Pc=0,eu=null,Pp=null,Ti=0,tu=null;function _t(){return(ze&2)!==0&&be!==0?be&-be:_.T!==null?ou():md()}function eh(){if(Nt===0)if((be&536870912)===0||we){var e=nr;nr<<=1,(nr&3932160)===0&&(nr=262144),Nt=e}else Nt=536870912;return e=At.current,e!==null&&(e.flags|=32),Nt}function wt(e,t,n){(e===$e&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(xl(e,0),aa(e,be,Nt,!1)),Kl(e,n),((ze&2)===0||e!==$e)&&(e===$e&&((ze&2)===0&&(Na|=n),Qe===4&&aa(e,be,Nt,!1)),rn(e))}function th(e,t,n){if((ze&6)!==0)throw Error(o(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ql(e,t),r=l?oy(e,t):au(e,t,!0),c=l;do{if(r===0){hl&&!l&&aa(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!iy(n)){r=au(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var x=e;r=Ci;var j=x.current.memoizedState.isDehydrated;if(j&&(xl(x,p).flags|=256),p=au(x,p,!1),p!==2){if(Fc&&!j){x.errorRecoveryDisabledLanes|=c,Na|=c,r=4;break e}c=St,St=r,c!==null&&(St===null?St=c:St.push.apply(St,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){xl(e,0),aa(e,t,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:aa(l,t,Nt,!Pn);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Qr+300-Ct(),10<r)){if(aa(l,t,Nt,!Pn),lr(l,0,!0)!==0)break e;zn=t,l.timeoutHandle=kh(nh.bind(null,l,n,St,Zr,Ic,t,Nt,Na,ml,Pn,c,"Throttled",-0,0),r);break e}nh(l,n,St,Zr,Ic,t,Nt,Na,ml,Pn,c,null,-0,0)}}break}while(!0);rn(e)}function nh(e,t,n,l,r,c,p,x,j,O,U,X,k,D){if(e.timeoutHandle=-1,X=t.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Zp(t,c,X);var ne=(c&62914560)===c?Qr-Ct():(c&4194048)===c?Ip-Ct():0;if(ne=Gy(X,ne),ne!==null){zn=c,e.cancelPendingCommit=ne(uh.bind(null,e,t,c,n,l,r,p,x,j,U,X,null,k,D)),aa(e,c,p,!O);return}}uh(e,t,c,n,l,r,p,x,j)}function iy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var r=n[l],c=r.getSnapshot;r=r.value;try{if(!Mt(c(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function aa(e,t,n,l){t&=~Wc,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var c=31-zt(r),p=1<<c;l[c]=-1,r&=~p}n!==0&&dd(e,n,t)}function Jr(){return(ze&6)===0?(zi(0),!1):!0}function nu(){if(ye!==null){if(Ae===0)var e=ye.return;else e=ye,gn=Ea=null,yc(e),ol=null,ci=0,e=ye;for(;e!==null;)Np(e.alternate,e),e=e.return;ye=null}}function xl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Cy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),zn=0,nu(),$e=e,ye=n=hn(e.current,null),be=t,Ae=0,kt=null,Pn=!1,hl=Ql(e,t),Fc=!1,ml=Nt=Wc=Na=ea=Qe=0,St=Ci=null,Ic=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-zt(l),c=1<<r;t|=e[r],l&=~c}return Tn=t,gr(),n}function ah(e,t){pe=null,_.H=xi,t===rl||t===Er?(t=v0(),Ae=3):t===rc?(t=v0(),Ae=4):Ae=t===_c?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,ye===null&&(Qe=1,Lr(e,Ht(t,e.current)))}function lh(){var e=At.current;return e===null?!0:(be&4194048)===be?Xt===null:(be&62914560)===be||(be&536870912)!==0?e===Xt:!1}function ih(){var e=_.H;return _.H=xi,e===null?xi:e}function rh(){var e=_.A;return _.A=ay,e}function Fr(){Qe=4,Pn||(be&4194048)!==be&&At.current!==null||(hl=!0),(ea&134217727)===0&&(Na&134217727)===0||$e===null||aa($e,be,Nt,!1)}function au(e,t,n){var l=ze;ze|=2;var r=ih(),c=rh();($e!==e||be!==t)&&(Zr=null,xl(e,t)),t=!1;var p=Qe;e:do try{if(Ae!==0&&ye!==null){var x=ye,j=kt;switch(Ae){case 8:nu(),p=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var O=Ae;if(Ae=0,kt=null,yl(e,x,j,O),n&&hl){p=0;break e}break;default:O=Ae,Ae=0,kt=null,yl(e,x,j,O)}}ry(),p=Qe;break}catch(U){ah(e,U)}while(!0);return t&&e.shellSuspendCounter++,gn=Ea=null,ze=l,_.H=r,_.A=c,ye===null&&($e=null,be=0,gr()),p}function ry(){for(;ye!==null;)oh(ye)}function oy(e,t){var n=ze;ze|=2;var l=ih(),r=rh();$e!==e||be!==t?(Zr=null,Kr=Ct()+500,xl(e,t)):hl=Ql(e,t);e:do try{if(Ae!==0&&ye!==null){t=ye;var c=kt;t:switch(Ae){case 1:Ae=0,kt=null,yl(e,t,c,1);break;case 2:case 9:if(x0(c)){Ae=0,kt=null,sh(t);break}t=function(){Ae!==2&&Ae!==9||$e!==e||(Ae=7),rn(e)},c.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:x0(c)?(Ae=0,kt=null,sh(t)):(Ae=0,kt=null,yl(e,t,c,7));break;case 5:var p=null;switch(ye.tag){case 26:p=ye.memoizedState;case 5:case 27:var x=ye;if(p?Kh(p):x.stateNode.complete){Ae=0,kt=null;var j=x.sibling;if(j!==null)ye=j;else{var O=x.return;O!==null?(ye=O,Wr(O)):ye=null}break t}}Ae=0,kt=null,yl(e,t,c,5);break;case 6:Ae=0,kt=null,yl(e,t,c,6);break;case 8:nu(),Qe=6;break e;default:throw Error(o(462))}}sy();break}catch(U){ah(e,U)}while(!0);return gn=Ea=null,_.H=l,_.A=r,ze=n,ye!==null?0:($e=null,be=0,gr(),Qe)}function sy(){for(;ye!==null&&!O2();)oh(ye)}function oh(e){var t=Op(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,t===null?Wr(e):ye=t}function sh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Cp(n,t,t.pendingProps,t.type,void 0,be);break;case 11:t=Cp(n,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:yc(t);default:Np(n,t),t=ye=r0(t,Tn),t=Op(n,t,Tn)}e.memoizedProps=e.pendingProps,t===null?Wr(e):ye=t}function yl(e,t,n,l){gn=Ea=null,yc(t),ol=null,ci=0;var r=t.return;try{if(Fx(e,r,t,n,be)){Qe=1,Lr(e,Ht(n,e.current)),ye=null;return}}catch(c){if(r!==null)throw ye=r,c;Qe=1,Lr(e,Ht(n,e.current)),ye=null;return}t.flags&32768?(we||l===1?e=!0:hl||(be&536870912)!==0?e=!1:(Pn=e=!0,(l===2||l===9||l===3||l===6)&&(l=At.current,l!==null&&l.tag===13&&(l.flags|=16384))),ch(t,e)):Wr(t)}function Wr(e){var t=e;do{if((t.flags&32768)!==0){ch(t,Pn);return}e=t.return;var n=Px(t.alternate,t,Tn);if(n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Qe===0&&(Qe=5)}function ch(e,t){do{var n=ey(e.alternate,e);if(n!==null){n.flags&=32767,ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=n}while(e!==null);Qe=6,ye=null}function uh(e,t,n,l,r,c,p,x,j){e.cancelPendingCommit=null;do Ir();while(et!==0);if((ze&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Vs,Y2(e,n,c,p,x,j),e===$e&&(ye=$e=null,be=0),gl=t,na=e,zn=n,Pc=c,eu=r,Pp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dy(er,function(){return mh(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,r=J.p,J.p=2,p=ze,ze|=4;try{ty(e,t,n)}finally{ze=p,J.p=r,_.T=l}}et=1,fh(),dh(),ph()}}function fh(){if(et===1){et=0;var e=na,t=gl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var l=J.p;J.p=2;var r=ze;ze|=4;try{Vp(t,e);var c=mu,p=Wd(e.containerInfo),x=c.focusedElem,j=c.selectionRange;if(p!==x&&x&&x.ownerDocument&&Fd(x.ownerDocument.documentElement,x)){if(j!==null&&Hs(x)){var O=j.start,U=j.end;if(U===void 0&&(U=O),"selectionStart"in x)x.selectionStart=O,x.selectionEnd=Math.min(U,x.value.length);else{var X=x.ownerDocument||document,k=X&&X.defaultView||window;if(k.getSelection){var D=k.getSelection(),ne=x.textContent.length,se=Math.min(j.start,ne),_e=j.end===void 0?se:Math.min(j.end,ne);!D.extend&&se>_e&&(p=_e,_e=se,se=p);var z=Jd(x,se),C=Jd(x,_e);if(z&&C&&(D.rangeCount!==1||D.anchorNode!==z.node||D.anchorOffset!==z.offset||D.focusNode!==C.node||D.focusOffset!==C.offset)){var A=X.createRange();A.setStart(z.node,z.offset),D.removeAllRanges(),se>_e?(D.addRange(A),D.extend(C.node,C.offset)):(A.setEnd(C.node,C.offset),D.addRange(A))}}}}for(X=[],D=x;D=D.parentNode;)D.nodeType===1&&X.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<X.length;x++){var q=X[x];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}uo=!!hu,mu=hu=null}finally{ze=r,J.p=l,_.T=n}}e.current=t,et=2}}function dh(){if(et===2){et=0;var e=na,t=gl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var l=J.p;J.p=2;var r=ze;ze|=4;try{Hp(e,t.alternate,t)}finally{ze=r,J.p=l,_.T=n}}et=3}}function ph(){if(et===4||et===3){et=0,k2();var e=na,t=gl,n=zn,l=Pp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,gl=na=null,hh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ta=null),Ss(n),t=t.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,r=J.p,J.p=2,_.T=null;try{for(var c=e.onRecoverableError,p=0;p<l.length;p++){var x=l[p];c(x.value,{componentStack:x.stack})}}finally{_.T=t,J.p=r}}(zn&3)!==0&&Ir(),rn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===tu?Ti++:(Ti=0,tu=e):Ti=0,zi(0)}}function hh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,oi(t)))}function Ir(){return fh(),dh(),ph(),mh()}function mh(){if(et!==5)return!1;var e=na,t=Pc;Pc=0;var n=Ss(zn),l=_.T,r=J.p;try{J.p=32>n?32:n,_.T=null,n=eu,eu=null;var c=na,p=zn;if(et=0,gl=na=null,zn=0,(ze&6)!==0)throw Error(o(331));var x=ze;if(ze|=4,Fp(c.current),Kp(c,c.current,p,n),ze=x,zi(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Vl,c)}catch{}return!0}finally{J.p=r,_.T=l,hh(e,t)}}function gh(e,t,n){t=Ht(n,t),t=Nc(e.stateNode,t,2),e=Jn(e,t,2),e!==null&&(Kl(e,2),rn(e))}function Oe(e,t,n){if(e.tag===3)gh(e,e,n);else for(;t!==null;){if(t.tag===3){gh(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ta===null||!ta.has(l))){e=Ht(n,e),n=xp(2),l=Jn(t,n,2),l!==null&&(yp(n,l,t,e),Kl(l,2),rn(l));break}}t=t.return}}function lu(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new ly;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(n)||(Fc=!0,r.add(n),e=cy.bind(null,e,t,n),t.then(e,e))}function cy(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,$e===e&&(be&n)===n&&(Qe===4||Qe===3&&(be&62914560)===be&&300>Ct()-Qr?(ze&2)===0&&xl(e,0):Wc|=n,ml===be&&(ml=0)),rn(e)}function xh(e,t){t===0&&(t=fd()),e=Sa(e,t),e!==null&&(Kl(e,t),rn(e))}function uy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xh(e,n)}function fy(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),xh(e,n)}function dy(e,t){return xs(e,t)}var Pr=null,vl=null,iu=!1,eo=!1,ru=!1,la=0;function rn(e){e!==vl&&e.next===null&&(vl===null?Pr=vl=e:vl=vl.next=e),eo=!0,iu||(iu=!0,hy())}function zi(e,t){if(!ru&&eo){ru=!0;do for(var n=!1,l=Pr;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var p=l.suspendedLanes,x=l.pingedLanes;c=(1<<31-zt(42|e)+1)-1,c&=r&~(p&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Sh(l,c))}else c=be,c=lr(l,l===$e?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Ql(l,c)||(n=!0,Sh(l,c));l=l.next}while(n);ru=!1}}function py(){yh()}function yh(){eo=iu=!1;var e=0;la!==0&&Ey()&&(e=la);for(var t=Ct(),n=null,l=Pr;l!==null;){var r=l.next,c=vh(l,t);c===0?(l.next=null,n===null?Pr=r:n.next=r,r===null&&(vl=n)):(n=l,(e!==0||(c&3)!==0)&&(eo=!0)),l=r}et!==0&&et!==5||zi(e),la!==0&&(la=0)}function vh(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-zt(c),x=1<<p,j=r[p];j===-1?((x&n)===0||(x&l)!==0)&&(r[p]=H2(x,t)):j<=t&&(e.expiredLanes|=x),c&=~x}if(t=$e,n=be,n=lr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ys(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ql(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&ys(l),Ss(n)){case 2:case 8:n=cd;break;case 32:n=er;break;case 268435456:n=ud;break;default:n=er}return l=bh.bind(null,e),n=xs(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&ys(l),e.callbackPriority=2,e.callbackNode=null,2}function bh(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var l=be;return l=lr(e,e===$e?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(th(e,l,t),vh(e,Ct()),e.callbackNode!=null&&e.callbackNode===n?bh.bind(null,e):null)}function Sh(e,t){if(Ir())return null;th(e,t,!0)}function hy(){Ty(function(){(ze&6)!==0?xs(sd,py):yh()})}function ou(){if(la===0){var e=ll;e===0&&(e=tr,tr<<=1,(tr&261888)===0&&(tr=256)),la=e}return la}function wh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sr(""+e)}function jh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function my(e,t,n,l,r){if(t==="submit"&&n&&n.stateNode===r){var c=wh((r[gt]||null).action),p=l.submitter;p&&(t=(t=p[gt]||null)?wh(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var x=new dr("action","action",null,l,r);e.push({event:x,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(la!==0){var j=p?jh(r,p):new FormData(r);zc(n,{pending:!0,data:j,method:r.method,action:c},null,j)}}else typeof c=="function"&&(x.preventDefault(),j=p?jh(r,p):new FormData(r),zc(n,{pending:!0,data:j,method:r.method,action:c},c,j))},currentTarget:r}]})}}for(var su=0;su<Xs.length;su++){var cu=Xs[su],gy=cu.toLowerCase(),xy=cu[0].toUpperCase()+cu.slice(1);Ft(gy,"on"+xy)}Ft(e0,"onAnimationEnd"),Ft(t0,"onAnimationIteration"),Ft(n0,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(Nx,"onTransitionRun"),Ft(_x,"onTransitionStart"),Ft(Dx,"onTransitionCancel"),Ft(a0,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mi));function Eh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var p=l.length-1;0<=p;p--){var x=l[p],j=x.instance,O=x.currentTarget;if(x=x.listener,j!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=O;try{c(r)}catch(U){mr(U)}r.currentTarget=null,c=j}else for(p=0;p<l.length;p++){if(x=l[p],j=x.instance,O=x.currentTarget,x=x.listener,j!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=O;try{c(r)}catch(U){mr(U)}r.currentTarget=null,c=j}}}}function ve(e,t){var n=t[ws];n===void 0&&(n=t[ws]=new Set);var l=e+"__bubble";n.has(l)||(Ch(t,e,2,!1),n.add(l))}function uu(e,t,n){var l=0;t&&(l|=4),Ch(n,e,l,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function fu(e){if(!e[to]){e[to]=!0,yd.forEach(function(n){n!=="selectionchange"&&(yy.has(n)||uu(n,!1,e),uu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,uu("selectionchange",!1,t))}}function Ch(e,t,n,l){switch(e1(t)){case 2:var r=Qy;break;case 8:r=Ky;break;default:r=Tu}n=r.bind(null,t,n,e),r=void 0,!Os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function du(e,t,n,l,r){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var x=l.stateNode.containerInfo;if(x===r)break;if(p===4)for(p=l.return;p!==null;){var j=p.tag;if((j===3||j===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;x!==null;){if(p=Ya(x),p===null)return;if(j=p.tag,j===5||j===6||j===26||j===27){l=c=p;continue e}x=x.parentNode}}l=l.return}Ad(function(){var O=c,U=Rs(n),X=[];e:{var k=l0.get(e);if(k!==void 0){var D=dr,ne=e;switch(e){case"keypress":if(ur(n)===0)break e;case"keydown":case"keyup":D=fx;break;case"focusin":ne="focus",D=Ds;break;case"focusout":ne="blur",D=Ds;break;case"beforeblur":case"afterblur":D=Ds;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=P2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=hx;break;case e0:case t0:case n0:D=nx;break;case a0:D=gx;break;case"scroll":case"scrollend":D=W2;break;case"wheel":D=yx;break;case"copy":case"cut":case"paste":D=lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Dd;break;case"toggle":case"beforetoggle":D=bx}var se=(t&4)!==0,_e=!se&&(e==="scroll"||e==="scrollend"),z=se?k!==null?k+"Capture":null:k;se=[];for(var C=O,A;C!==null;){var q=C;if(A=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||A===null||z===null||(q=Fl(C,z),q!=null&&se.push(Ri(C,q,A))),_e)break;C=C.return}0<se.length&&(k=new D(k,ne,null,n,U),X.push({event:k,listeners:se}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",k&&n!==Ms&&(ne=n.relatedTarget||n.fromElement)&&(Ya(ne)||ne[Ha]))break e;if((D||k)&&(k=U.window===U?U:(k=U.ownerDocument)?k.defaultView||k.parentWindow:window,D?(ne=n.relatedTarget||n.toElement,D=O,ne=ne?Ya(ne):null,ne!==null&&(_e=d(ne),se=ne.tag,ne!==_e||se!==5&&se!==27&&se!==6)&&(ne=null)):(D=null,ne=O),D!==ne)){if(se=Nd,q="onMouseLeave",z="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(se=Dd,q="onPointerLeave",z="onPointerEnter",C="pointer"),_e=D==null?k:Jl(D),A=ne==null?k:Jl(ne),k=new se(q,C+"leave",D,n,U),k.target=_e,k.relatedTarget=A,q=null,Ya(U)===O&&(se=new se(z,C+"enter",ne,n,U),se.target=A,se.relatedTarget=_e,q=se),_e=q,D&&ne)t:{for(se=vy,z=D,C=ne,A=0,q=z;q;q=se(q))A++;q=0;for(var oe=C;oe;oe=se(oe))q++;for(;0<A-q;)z=se(z),A--;for(;0<q-A;)C=se(C),q--;for(;A--;){if(z===C||C!==null&&z===C.alternate){se=z;break t}z=se(z),C=se(C)}se=null}else se=null;D!==null&&Th(X,k,D,se,!1),ne!==null&&_e!==null&&Th(X,_e,ne,se,!0)}}e:{if(k=O?Jl(O):window,D=k.nodeName&&k.nodeName.toLowerCase(),D==="select"||D==="input"&&k.type==="file")var Ce=Gd;else if(Yd(k))if(Xd)Ce=Ax;else{Ce=Mx;var ae=zx}else D=k.nodeName,!D||D.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?O&&zs(O.elementType)&&(Ce=Gd):Ce=Rx;if(Ce&&(Ce=Ce(e,O))){qd(X,Ce,n,U);break e}ae&&ae(e,k,O),e==="focusout"&&O&&k.type==="number"&&O.memoizedProps.value!=null&&Ts(k,"number",k.value)}switch(ae=O?Jl(O):window,e){case"focusin":(Yd(ae)||ae.contentEditable==="true")&&(Fa=ae,Ys=O,li=null);break;case"focusout":li=Ys=Fa=null;break;case"mousedown":qs=!0;break;case"contextmenu":case"mouseup":case"dragend":qs=!1,Id(X,n,U);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":Id(X,n,U)}var he;if(Bs)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Ja?Ud(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&($d&&n.locale!=="ko"&&(Ja||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ja&&(he=Od()):(qn=U,ks="value"in qn?qn.value:qn.textContent,Ja=!0)),ae=no(O,Se),0<ae.length&&(Se=new _d(Se,e,null,n,U),X.push({event:Se,listeners:ae}),he?Se.data=he:(he=Hd(n),he!==null&&(Se.data=he)))),(he=wx?jx(e,n):Ex(e,n))&&(Se=no(O,"onBeforeInput"),0<Se.length&&(ae=new _d("onBeforeInput","beforeinput",null,n,U),X.push({event:ae,listeners:Se}),ae.data=he)),my(X,e,O,n,U)}Eh(X,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Fl(e,n),r!=null&&l.unshift(Ri(e,r,c)),r=Fl(e,t),r!=null&&l.push(Ri(e,r,c))),e.tag===3)return l;e=e.return}return[]}function vy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Th(e,t,n,l,r){for(var c=t._reactName,p=[];n!==null&&n!==l;){var x=n,j=x.alternate,O=x.stateNode;if(x=x.tag,j!==null&&j===l)break;x!==5&&x!==26&&x!==27||O===null||(j=O,r?(O=Fl(n,c),O!=null&&p.unshift(Ri(n,O,j))):r||(O=Fl(n,c),O!=null&&p.push(Ri(n,O,j)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var by=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function zh(e){return(typeof e=="string"?e:""+e).replace(by,`
`).replace(Sy,"")}function Mh(e,t){return t=zh(t),zh(e)===t}function Ne(e,t,n,l,r,c){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Qa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Qa(e,""+l);break;case"className":rr(e,"class",l);break;case"tabIndex":rr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":rr(e,n,l);break;case"style":Md(e,l,c);break;case"data":if(t!=="object"){rr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=sr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ne(e,t,"name",r.name,r,null),Ne(e,t,"formEncType",r.formEncType,r,null),Ne(e,t,"formMethod",r.formMethod,r,null),Ne(e,t,"formTarget",r.formTarget,r,null)):(Ne(e,t,"encType",r.encType,r,null),Ne(e,t,"method",r.method,r,null),Ne(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=sr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=dn);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=sr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ve("beforetoggle",e),ve("toggle",e),ir(e,"popover",l);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ir(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=J2.get(n)||n,ir(e,n,l))}}function pu(e,t,n,l,r,c){switch(n){case"style":Md(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Qa(e,l):(typeof l=="number"||typeof l=="bigint")&&Qa(e,""+l);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),c=e[gt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,r);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ir(e,n,l)}}}function ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var l=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var p=n[c];if(p!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,c,p,n,null)}}r&&Ne(e,t,"srcSet",n.srcSet,n,null),l&&Ne(e,t,"src",n.src,n,null);return;case"input":ve("invalid",e);var x=c=p=r=null,j=null,O=null;for(l in n)if(n.hasOwnProperty(l)){var U=n[l];if(U!=null)switch(l){case"name":r=U;break;case"type":p=U;break;case"checked":j=U;break;case"defaultChecked":O=U;break;case"value":c=U;break;case"defaultValue":x=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:Ne(e,t,l,U,n,null)}}Ed(e,c,x,j,O,p,r,!1);return;case"select":ve("invalid",e),l=p=c=null;for(r in n)if(n.hasOwnProperty(r)&&(x=n[r],x!=null))switch(r){case"value":c=x;break;case"defaultValue":p=x;break;case"multiple":l=x;default:Ne(e,t,r,x,n,null)}t=c,n=p,e.multiple=!!l,t!=null?Va(e,!!l,t,!1):n!=null&&Va(e,!!l,n,!0);return;case"textarea":ve("invalid",e),c=r=l=null;for(p in n)if(n.hasOwnProperty(p)&&(x=n[p],x!=null))switch(p){case"value":l=x;break;case"defaultValue":r=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(o(91));break;default:Ne(e,t,p,x,n,null)}Td(e,l,r,c);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(l=n[j],l!=null))switch(j){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ne(e,t,j,l,n,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(l=0;l<Mi.length;l++)ve(Mi[l],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(l=n[O],l!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,O,l,n,null)}return;default:if(zs(t)){for(U in n)n.hasOwnProperty(U)&&(l=n[U],l!==void 0&&pu(e,t,U,l,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(l=n[x],l!=null&&Ne(e,t,x,l,n,null))}function wy(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,x=null,j=null,O=null,U=null;for(D in n){var X=n[D];if(n.hasOwnProperty(D)&&X!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":j=X;default:l.hasOwnProperty(D)||Ne(e,t,D,null,l,X)}}for(var k in l){var D=l[k];if(X=n[k],l.hasOwnProperty(k)&&(D!=null||X!=null))switch(k){case"type":c=D;break;case"name":r=D;break;case"checked":O=D;break;case"defaultChecked":U=D;break;case"value":p=D;break;case"defaultValue":x=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:D!==X&&Ne(e,t,k,D,l,X)}}Cs(e,p,x,j,O,U,c,r);return;case"select":D=p=x=k=null;for(c in n)if(j=n[c],n.hasOwnProperty(c)&&j!=null)switch(c){case"value":break;case"multiple":D=j;default:l.hasOwnProperty(c)||Ne(e,t,c,null,l,j)}for(r in l)if(c=l[r],j=n[r],l.hasOwnProperty(r)&&(c!=null||j!=null))switch(r){case"value":k=c;break;case"defaultValue":x=c;break;case"multiple":p=c;default:c!==j&&Ne(e,t,r,c,l,j)}t=x,n=p,l=D,k!=null?Va(e,!!n,k,!1):!!l!=!!n&&(t!=null?Va(e,!!n,t,!0):Va(e,!!n,n?[]:"",!1));return;case"textarea":D=k=null;for(x in n)if(r=n[x],n.hasOwnProperty(x)&&r!=null&&!l.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Ne(e,t,x,null,l,r)}for(p in l)if(r=l[p],c=n[p],l.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":k=r;break;case"defaultValue":D=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==c&&Ne(e,t,p,r,l,c)}Cd(e,k,D);return;case"option":for(var ne in n)if(k=n[ne],n.hasOwnProperty(ne)&&k!=null&&!l.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Ne(e,t,ne,null,l,k)}for(j in l)if(k=l[j],D=n[j],l.hasOwnProperty(j)&&k!==D&&(k!=null||D!=null))switch(j){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Ne(e,t,j,k,l,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in n)k=n[se],n.hasOwnProperty(se)&&k!=null&&!l.hasOwnProperty(se)&&Ne(e,t,se,null,l,k);for(O in l)if(k=l[O],D=n[O],l.hasOwnProperty(O)&&k!==D&&(k!=null||D!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,t));break;default:Ne(e,t,O,k,l,D)}return;default:if(zs(t)){for(var _e in n)k=n[_e],n.hasOwnProperty(_e)&&k!==void 0&&!l.hasOwnProperty(_e)&&pu(e,t,_e,void 0,l,k);for(U in l)k=l[U],D=n[U],!l.hasOwnProperty(U)||k===D||k===void 0&&D===void 0||pu(e,t,U,k,l,D);return}}for(var z in n)k=n[z],n.hasOwnProperty(z)&&k!=null&&!l.hasOwnProperty(z)&&Ne(e,t,z,null,l,k);for(X in l)k=l[X],D=n[X],!l.hasOwnProperty(X)||k===D||k==null&&D==null||Ne(e,t,X,k,l,D)}function Rh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var r=n[l],c=r.transferSize,p=r.initiatorType,x=r.duration;if(c&&x&&Rh(p)){for(p=0,x=r.responseEnd,l+=1;l<n.length;l++){var j=n[l],O=j.startTime;if(O>x)break;var U=j.transferSize,X=j.initiatorType;U&&Rh(X)&&(j=j.responseEnd,p+=U*(j<x?1:(x-O)/(j-O)))}if(--l,t+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hu=null,mu=null;function ao(e){return e.nodeType===9?e:e.ownerDocument}function Ah(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Oh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xu=null;function Ey(){var e=window.event;return e&&e.type==="popstate"?e===xu?!1:(xu=e,!0):(xu=null,!1)}var kh=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,Nh=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Nh<"u"?function(e){return Nh.resolve(null).then(e).catch(zy)}:kh;function zy(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function _h(e,t){var n=t,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(r),jl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Ai(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ai(n);for(var c=n.firstChild;c;){var p=c.nextSibling,x=c.nodeName;c[Zl]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=p}}else n==="body"&&Ai(e.ownerDocument.body);n=r}while(n);jl(t)}function Dh(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function yu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yu(n),js(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function My(e,t,n,l){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function Ry(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function $h(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function vu(e){return e.data==="$?"||e.data==="$~"}function bu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ay(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Su=null;function Bh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Lh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Uh(e,t,n){switch(t=ao(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ai(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);js(e)}var Qt=new Map,Hh=new Set;function lo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mn=J.d;J.d={f:Oy,r:ky,D:Ny,C:_y,L:Dy,m:$y,X:Ly,S:By,M:Uy};function Oy(){var e=Mn.f(),t=Jr();return e||t}function ky(e){var t=qa(e);t!==null&&t.tag===5&&t.type==="form"?ap(t):Mn.r(e)}var bl=typeof document>"u"?null:document;function Yh(e,t,n){var l=bl;if(l&&typeof t=="string"&&t){var r=Lt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Hh.has(r)||(Hh.add(r),e={rel:e,crossOrigin:n,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),ct(t,"link",e),tt(t),l.head.appendChild(t)))}}function Ny(e){Mn.D(e),Yh("dns-prefetch",e,null)}function _y(e,t){Mn.C(e,t),Yh("preconnect",e,t)}function Dy(e,t,n){Mn.L(e,t,n);var l=bl;if(l&&e&&t){var r='link[rel="preload"][as="'+Lt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Lt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Lt(n.imageSizes)+'"]')):r+='[href="'+Lt(e)+'"]';var c=r;switch(t){case"style":c=Sl(e);break;case"script":c=wl(e)}Qt.has(c)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qt.set(c,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(Oi(c))||t==="script"&&l.querySelector(ki(c))||(t=l.createElement("link"),ct(t,"link",e),tt(t),l.head.appendChild(t)))}}function $y(e,t){Mn.m(e,t);var n=bl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Lt(l)+'"][href="'+Lt(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=wl(e)}if(!Qt.has(c)&&(e=w({rel:"modulepreload",href:e},t),Qt.set(c,e),n.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ki(c)))return}l=n.createElement("link"),ct(l,"link",e),tt(l),n.head.appendChild(l)}}}function By(e,t,n){Mn.S(e,t,n);var l=bl;if(l&&e){var r=Ga(l).hoistableStyles,c=Sl(e);t=t||"default";var p=r.get(c);if(!p){var x={loading:0,preload:null};if(p=l.querySelector(Oi(c)))x.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qt.get(c))&&wu(e,n);var j=p=l.createElement("link");tt(j),ct(j,"link",e),j._p=new Promise(function(O,U){j.onload=O,j.onerror=U}),j.addEventListener("load",function(){x.loading|=1}),j.addEventListener("error",function(){x.loading|=2}),x.loading|=4,io(p,t,l)}p={type:"stylesheet",instance:p,count:1,state:x},r.set(c,p)}}}function Ly(e,t){Mn.X(e,t);var n=bl;if(n&&e){var l=Ga(n).hoistableScripts,r=wl(e),c=l.get(r);c||(c=n.querySelector(ki(r)),c||(e=w({src:e,async:!0},t),(t=Qt.get(r))&&ju(e,t),c=n.createElement("script"),tt(c),ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Uy(e,t){Mn.M(e,t);var n=bl;if(n&&e){var l=Ga(n).hoistableScripts,r=wl(e),c=l.get(r);c||(c=n.querySelector(ki(r)),c||(e=w({src:e,async:!0,type:"module"},t),(t=Qt.get(r))&&ju(e,t),c=n.createElement("script"),tt(c),ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function qh(e,t,n,l){var r=(r=ue.current)?lo(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Sl(n.href),n=Ga(r).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Sl(n.href);var c=Ga(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(Oi(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qt.set(e,n),c||Hy(r,e,n,p.state))),t&&l===null)throw Error(o(528,""));return p}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wl(n),n=Ga(r).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Sl(e){return'href="'+Lt(e)+'"'}function Oi(e){return'link[rel="stylesheet"]['+e+"]"}function Gh(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Hy(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ct(t,"link",n),tt(t),e.head.appendChild(t))}function wl(e){return'[src="'+Lt(e)+'"]'}function ki(e){return"script[async]"+e}function Xh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Lt(n.href)+'"]');if(l)return t.instance=l,tt(l),l;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),tt(l),ct(l,"style",r),io(l,n.precedence,e),t.instance=l;case"stylesheet":r=Sl(n.href);var c=e.querySelector(Oi(r));if(c)return t.state.loading|=4,t.instance=c,tt(c),c;l=Gh(n),(r=Qt.get(r))&&wu(l,r),c=(e.ownerDocument||e).createElement("link"),tt(c);var p=c;return p._p=new Promise(function(x,j){p.onload=x,p.onerror=j}),ct(c,"link",l),t.state.loading|=4,io(c,n.precedence,e),t.instance=c;case"script":return c=wl(n.src),(r=e.querySelector(ki(c)))?(t.instance=r,tt(r),r):(l=n,(r=Qt.get(c))&&(l=w({},n),ju(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),tt(r),ct(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,io(l,n.precedence,e));return t.instance}function io(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,p=0;p<l.length;p++){var x=l[p];if(x.dataset.precedence===t)c=x;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function wu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ju(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ro=null;function Vh(e,t,n){if(ro===null){var l=new Map,r=ro=new Map;r.set(n,l)}else r=ro,l=r.get(n),l||(l=new Map,r.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[Zl]||c[it]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var x=l.get(p);x?x.push(c):l.set(p,[c])}}return l}function Qh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Yy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Kh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qy(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Sl(l.href),c=t.querySelector(Oi(r));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=oo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,tt(c);return}c=t.ownerDocument||t,l=Gh(l),(r=Qt.get(r))&&wu(l,r),c=c.createElement("link"),tt(c);var p=c;p._p=new Promise(function(x,j){p.onload=x,p.onerror=j}),ct(c,"link",l),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=oo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Eu=0;function Gy(e,t){return e.stylesheets&&e.count===0&&co(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&co(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Eu===0&&(Eu=62500*jy());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&co(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Eu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function oo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)co(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var so=null;function co(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,so=new Map,t.forEach(Xy,e),so=null,oo.call(e))}function Xy(e,t){if(!(t.state.loading&4)){var n=so.get(e);if(n)var l=n.get(null);else{n=new Map,so.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),l=p)}l&&n.set(null,l)}r=t.instance,p=r.getAttribute("data-precedence"),c=n.get(p)||l,c===l&&n.set(null,r),n.set(p,r),this.count++,l=oo.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ni={$$typeof:G,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Vy(e,t,n,l,r,c,p,x,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vs(0),this.hiddenUpdates=vs(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Zh(e,t,n,l,r,c,p,x,j,O,U,X){return e=new Vy(e,t,n,p,j,O,U,X,x),t=1,c===!0&&(t|=24),c=Rt(3,null,null,t),e.current=c,c.stateNode=e,t=ac(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:n,cache:t},oc(c),e}function Jh(e){return e?(e=Pa,e):Pa}function Fh(e,t,n,l,r,c){r=Jh(r),l.context===null?l.context=r:l.pendingContext=r,l=Zn(t),l.payload={element:n},c=c===void 0?null:c,c!==null&&(l.callback=c),n=Jn(e,l,t),n!==null&&(wt(n,e,t),fi(n,e,t))}function Wh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cu(e,t){Wh(e,t),(e=e.alternate)&&Wh(e,t)}function Ih(e){if(e.tag===13||e.tag===31){var t=Sa(e,67108864);t!==null&&wt(t,e,67108864),Cu(e,67108864)}}function Ph(e){if(e.tag===13||e.tag===31){var t=_t();t=bs(t);var n=Sa(e,t);n!==null&&wt(n,e,t),Cu(e,t)}}var uo=!0;function Qy(e,t,n,l){var r=_.T;_.T=null;var c=J.p;try{J.p=2,Tu(e,t,n,l)}finally{J.p=c,_.T=r}}function Ky(e,t,n,l){var r=_.T;_.T=null;var c=J.p;try{J.p=8,Tu(e,t,n,l)}finally{J.p=c,_.T=r}}function Tu(e,t,n,l){if(uo){var r=zu(l);if(r===null)du(e,t,l,fo,n),t1(e,l);else if(Jy(r,e,t,n,l))l.stopPropagation();else if(t1(e,l),t&4&&-1<Zy.indexOf(e)){for(;r!==null;){var c=qa(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=ga(c.pendingLanes);if(p!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;p;){var j=1<<31-zt(p);x.entanglements[1]|=j,p&=~j}rn(c),(ze&6)===0&&(Kr=Ct()+500,zi(0))}}break;case 31:case 13:x=Sa(c,2),x!==null&&wt(x,c,2),Jr(),Cu(c,2)}if(c=zu(l),c===null&&du(e,t,l,fo,n),c===r)break;r=c}r!==null&&l.stopPropagation()}else du(e,t,l,null,n)}}function zu(e){return e=Rs(e),Mu(e)}var fo=null;function Mu(e){if(fo=null,e=Ya(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fo=e,null}function e1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(N2()){case sd:return 2;case cd:return 8;case er:case _2:return 32;case ud:return 268435456;default:return 32}default:return 32}}var Ru=!1,ra=null,oa=null,sa=null,_i=new Map,Di=new Map,ca=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t1(e,t){switch(e){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(t.pointerId)}}function $i(e,t,n,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},t!==null&&(t=qa(t),t!==null&&Ih(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Jy(e,t,n,l,r){switch(t){case"focusin":return ra=$i(ra,e,t,n,l,r),!0;case"dragenter":return oa=$i(oa,e,t,n,l,r),!0;case"mouseover":return sa=$i(sa,e,t,n,l,r),!0;case"pointerover":var c=r.pointerId;return _i.set(c,$i(_i.get(c)||null,e,t,n,l,r)),!0;case"gotpointercapture":return c=r.pointerId,Di.set(c,$i(Di.get(c)||null,e,t,n,l,r)),!0}return!1}function n1(e){var t=Ya(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,gd(e.priority,function(){Ph(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,gd(e.priority,function(){Ph(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zu(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Ms=l,n.target.dispatchEvent(l),Ms=null}else return t=qa(n),t!==null&&Ih(t),e.blockedOn=n,!1;t.shift()}return!0}function a1(e,t,n){po(e)&&n.delete(t)}function Fy(){Ru=!1,ra!==null&&po(ra)&&(ra=null),oa!==null&&po(oa)&&(oa=null),sa!==null&&po(sa)&&(sa=null),_i.forEach(a1),Di.forEach(a1)}function ho(e,t){e.blockedOn===t&&(e.blockedOn=null,Ru||(Ru=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Fy)))}var mo=null;function l1(e){mo!==e&&(mo=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){mo===e&&(mo=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(Mu(l||n)===null)continue;break}var c=qa(n);c!==null&&(e.splice(t,3),t-=3,zc(c,{pending:!0,data:r,method:n.method,action:l},l,r))}}))}function jl(e){function t(j){return ho(j,e)}ra!==null&&ho(ra,e),oa!==null&&ho(oa,e),sa!==null&&ho(sa,e),_i.forEach(t),Di.forEach(t);for(var n=0;n<ca.length;n++){var l=ca[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ca.length&&(n=ca[0],n.blockedOn===null);)n1(n),n.blockedOn===null&&ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var r=n[l],c=n[l+1],p=r[gt]||null;if(typeof c=="function")p||l1(n);else if(p){var x=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[gt]||null)x=p.formAction;else if(Mu(r)!==null)continue}else x=p.action;typeof x=="function"?n[l+1]=x:(n.splice(l,3),l-=3),l1(n)}}}function i1(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Au(e){this._internalRoot=e}go.prototype.render=Au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=_t();Fh(n,l,e,t,null,null)},go.prototype.unmount=Au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fh(e.current,2,null,e,null,null),Jr(),t[Ha]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var t=md();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ca.length&&t!==0&&t<ca[n].priority;n++);ca.splice(n,0,e),n===0&&n1(e)}};var r1=i.version;if(r1!=="19.2.0")throw Error(o(527,r1,"19.2.0"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Wy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Vl=xo.inject(Wy),Tt=xo}catch{}}return Li.createRoot=function(e,t){if(!f(e))throw Error(o(299));var n=!1,l="",r=pp,c=hp,p=mp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=Zh(e,1,!1,null,null,n,l,null,r,c,p,i1),e[Ha]=t.current,fu(e),new Au(t)},Li.hydrateRoot=function(e,t,n){if(!f(e))throw Error(o(299));var l=!1,r="",c=pp,p=hp,x=mp,j=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.formState!==void 0&&(j=n.formState)),t=Zh(e,1,!0,t,n??null,l,r,j,c,p,x,i1),t.context=Jh(null),n=t.current,l=_t(),l=bs(l),r=Zn(l),r.callback=null,Jn(n,r,l),n=l,t.current.lanes=n,Kl(t,n),rn(t),e[Ha]=t.current,fu(e),new go(t)},Li.version="19.2.0",Li}var g1;function rv(){if(g1)return Nu.exports;g1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Nu.exports=iv(),Nu.exports}var ov=rv();const sv=Ji(ov);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var x1="popstate";function cv(a={}){function i(o,f){let{pathname:d,search:h,hash:y}=o.location;return bf("",{pathname:d,search:h,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(o,f){return typeof f=="string"?f:Xi(f)}return fv(i,s,null,a)}function Xe(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function cn(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function uv(){return Math.random().toString(36).substring(2,10)}function y1(a,i){return{usr:a.state,key:a.key,idx:i}}function bf(a,i,s=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?Bl(i):i,state:s,key:i&&i.key||o||uv()}}function Xi({pathname:a="/",search:i="",hash:s=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function Bl(a){let i={};if(a){let s=a.indexOf("#");s>=0&&(i.hash=a.substring(s),a=a.substring(0,s));let o=a.indexOf("?");o>=0&&(i.search=a.substring(o),a=a.substring(0,o)),a&&(i.pathname=a)}return i}function fv(a,i,s,o={}){let{window:f=document.defaultView,v5Compat:d=!1}=o,h=f.history,y="POP",g=null,m=S();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function S(){return(h.state||{idx:null}).idx}function w(){y="POP";let $=S(),B=$==null?null:$-m;m=$,g&&g({action:y,location:N.location,delta:B})}function T($,B){y="PUSH";let Y=bf(N.location,$,B);m=S()+1;let G=y1(Y,m),K=N.createHref(Y);try{h.pushState(G,"",K)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;f.location.assign(K)}d&&g&&g({action:y,location:N.location,delta:1})}function M($,B){y="REPLACE";let Y=bf(N.location,$,B);m=S();let G=y1(Y,m),K=N.createHref(Y);h.replaceState(G,"",K),d&&g&&g({action:y,location:N.location,delta:0})}function R($){return dv($)}let N={get action(){return y},get location(){return a(f,h)},listen($){if(g)throw new Error("A history only accepts one active listener");return f.addEventListener(x1,w),g=$,()=>{f.removeEventListener(x1,w),g=null}},createHref($){return i(f,$)},createURL:R,encodeLocation($){let B=R($);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:T,replace:M,go($){return h.go($)}};return N}function dv(a,i=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(s,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Xi(a);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function qm(a,i,s="/"){return pv(a,i,s,!1)}function pv(a,i,s,o){let f=typeof i=="string"?Bl(i):i,d=Dn(f.pathname||"/",s);if(d==null)return null;let h=Gm(a);hv(h);let y=null;for(let g=0;y==null&&g<h.length;++g){let m=Cv(d);y=jv(h[g],m,o)}return y}function Gm(a,i=[],s=[],o="",f=!1){let d=(h,y,g=f,m)=>{let S={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(o)&&g)return;Xe(S.relativePath.startsWith(o),`Absolute route path "${S.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(o.length)}let w=Nn([o,S.relativePath]),T=s.concat(S);h.children&&h.children.length>0&&(Xe(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Gm(h.children,i,T,w,g)),!(h.path==null&&!h.index)&&i.push({path:w,score:Sv(w,h.index),routesMeta:T})};return a.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))d(h,y);else for(let g of Xm(h.path))d(h,y,!0,g)}),i}function Xm(a){let i=a.split("/");if(i.length===0)return[];let[s,...o]=i,f=s.endsWith("?"),d=s.replace(/\?$/,"");if(o.length===0)return f?[d,""]:[d];let h=Xm(o.join("/")),y=[];return y.push(...h.map(g=>g===""?d:[d,g].join("/"))),f&&y.push(...h),y.map(g=>a.startsWith("/")&&g===""?"/":g)}function hv(a){a.sort((i,s)=>i.score!==s.score?s.score-i.score:wv(i.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var mv=/^:[\w-]+$/,gv=3,xv=2,yv=1,vv=10,bv=-2,v1=a=>a==="*";function Sv(a,i){let s=a.split("/"),o=s.length;return s.some(v1)&&(o+=bv),i&&(o+=xv),s.filter(f=>!v1(f)).reduce((f,d)=>f+(mv.test(d)?gv:d===""?yv:vv),o)}function wv(a,i){return a.length===i.length&&a.slice(0,-1).every((o,f)=>o===i[f])?a[a.length-1]-i[i.length-1]:0}function jv(a,i,s=!1){let{routesMeta:o}=a,f={},d="/",h=[];for(let y=0;y<o.length;++y){let g=o[y],m=y===o.length-1,S=d==="/"?i:i.slice(d.length)||"/",w=Xo({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},S),T=g.route;if(!w&&m&&s&&!o[o.length-1].route.index&&(w=Xo({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},S)),!w)return null;Object.assign(f,w.params),h.push({params:f,pathname:Nn([d,w.pathname]),pathnameBase:Rv(Nn([d,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(d=Nn([d,w.pathnameBase]))}return h}function Xo(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[s,o]=Ev(a.path,a.caseSensitive,a.end),f=i.match(s);if(!f)return null;let d=f[0],h=d.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:o.reduce((m,{paramName:S,isOptional:w},T)=>{if(S==="*"){let R=y[T]||"";h=d.slice(0,d.length-R.length).replace(/(.)\/+$/,"$1")}const M=y[T];return w&&!M?m[S]=void 0:m[S]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:h,pattern:a}}function Ev(a,i=!1,s=!0){cn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],f="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,y,g)=>(o.push({paramName:y,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),f+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":a!==""&&a!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,i?void 0:"i"),o]}function Cv(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return cn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function Dn(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let s=i.endsWith("/")?i.length-1:i.length,o=a.charAt(s);return o&&o!=="/"?null:a.slice(s)||"/"}function Tv(a,i="/"){let{pathname:s,search:o="",hash:f=""}=typeof a=="string"?Bl(a):a;return{pathname:s?s.startsWith("/")?s:zv(s,i):i,search:Av(o),hash:Ov(f)}}function zv(a,i){let s=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function Bu(a,i,s,o){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mv(a){return a.filter((i,s)=>s===0||i.route.path&&i.route.path.length>0)}function Vm(a){let i=Mv(a);return i.map((s,o)=>o===i.length-1?s.pathname:s.pathnameBase)}function Qm(a,i,s,o=!1){let f;typeof a=="string"?f=Bl(a):(f={...a},Xe(!f.pathname||!f.pathname.includes("?"),Bu("?","pathname","search",f)),Xe(!f.pathname||!f.pathname.includes("#"),Bu("#","pathname","hash",f)),Xe(!f.search||!f.search.includes("#"),Bu("#","search","hash",f)));let d=a===""||f.pathname==="",h=d?"/":f.pathname,y;if(h==null)y=s;else{let w=i.length-1;if(!o&&h.startsWith("..")){let T=h.split("/");for(;T[0]==="..";)T.shift(),w-=1;f.pathname=T.join("/")}y=w>=0?i[w]:"/"}let g=Tv(f,y),m=h&&h!=="/"&&h.endsWith("/"),S=(d||h===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(m||S)&&(g.pathname+="/"),g}var Nn=a=>a.join("/").replace(/\/\/+/g,"/"),Rv=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Av=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Ov=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function kv(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Km=["POST","PUT","PATCH","DELETE"];new Set(Km);var Nv=["GET",...Km];new Set(Nv);var Ll=v.createContext(null);Ll.displayName="DataRouter";var ts=v.createContext(null);ts.displayName="DataRouterState";v.createContext(!1);var Zm=v.createContext({isTransitioning:!1});Zm.displayName="ViewTransition";var _v=v.createContext(new Map);_v.displayName="Fetchers";var Dv=v.createContext(null);Dv.displayName="Await";var un=v.createContext(null);un.displayName="Navigation";var Fi=v.createContext(null);Fi.displayName="Location";var Bn=v.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var $f=v.createContext(null);$f.displayName="RouteError";function $v(a,{relative:i}={}){Xe(Wi(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=v.useContext(un),{hash:f,pathname:d,search:h}=Ii(a,{relative:i}),y=d;return s!=="/"&&(y=d==="/"?s:Nn([s,d])),o.createHref({pathname:y,search:h,hash:f})}function Wi(){return v.useContext(Fi)!=null}function Ln(){return Xe(Wi(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Fi).location}var Jm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fm(a){v.useContext(un).static||v.useLayoutEffect(a)}function ns(){let{isDataRoute:a}=v.useContext(Bn);return a?Jv():Bv()}function Bv(){Xe(Wi(),"useNavigate() may be used only in the context of a <Router> component.");let a=v.useContext(Ll),{basename:i,navigator:s}=v.useContext(un),{matches:o}=v.useContext(Bn),{pathname:f}=Ln(),d=JSON.stringify(Vm(o)),h=v.useRef(!1);return Fm(()=>{h.current=!0}),v.useCallback((g,m={})=>{if(cn(h.current,Jm),!h.current)return;if(typeof g=="number"){s.go(g);return}let S=Qm(g,JSON.parse(d),f,m.relative==="path");a==null&&i!=="/"&&(S.pathname=S.pathname==="/"?i:Nn([i,S.pathname])),(m.replace?s.replace:s.push)(S,m.state,m)},[i,s,d,f,a])}v.createContext(null);function Ii(a,{relative:i}={}){let{matches:s}=v.useContext(Bn),{pathname:o}=Ln(),f=JSON.stringify(Vm(s));return v.useMemo(()=>Qm(a,JSON.parse(f),o,i==="path"),[a,f,o,i])}function Lv(a,i){return Wm(a,i)}function Wm(a,i,s,o,f){Xe(Wi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(un),{matches:h}=v.useContext(Bn),y=h[h.length-1],g=y?y.params:{},m=y?y.pathname:"/",S=y?y.pathnameBase:"/",w=y&&y.route;{let Y=w&&w.path||"";Im(m,!w||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let T=Ln(),M;if(i){let Y=typeof i=="string"?Bl(i):i;Xe(S==="/"||Y.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),M=Y}else M=T;let R=M.pathname||"/",N=R;if(S!=="/"){let Y=S.replace(/^\//,"").split("/");N="/"+R.replace(/^\//,"").split("/").slice(Y.length).join("/")}let $=qm(a,{pathname:N});cn(w||$!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),cn($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=Gv($&&$.map(Y=>Object.assign({},Y,{params:Object.assign({},g,Y.params),pathname:Nn([S,d.encodeLocation?d.encodeLocation(Y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?S:Nn([S,d.encodeLocation?d.encodeLocation(Y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),h,s,o,f);return i&&B?v.createElement(Fi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},B):B}function Uv(){let a=Zv(),i=kv(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),s=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:d},"ErrorBoundary")," or"," ",v.createElement("code",{style:d},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},i),s?v.createElement("pre",{style:f},s):null,h)}var Hv=v.createElement(Uv,null),Yv=class extends v.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.unstable_onError?this.props.unstable_onError(a,i):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?v.createElement(Bn.Provider,{value:this.props.routeContext},v.createElement($f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function qv({routeContext:a,match:i,children:s}){let o=v.useContext(Ll);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),v.createElement(Bn.Provider,{value:a},s)}function Gv(a,i=[],s=null,o=null,f=null){if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(i.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let d=a,h=s?.errors;if(h!=null){let m=d.findIndex(S=>S.route.id&&h?.[S.route.id]!==void 0);Xe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,m+1))}let y=!1,g=-1;if(s)for(let m=0;m<d.length;m++){let S=d[m];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(g=m),S.route.id){let{loaderData:w,errors:T}=s,M=S.route.loader&&!w.hasOwnProperty(S.route.id)&&(!T||T[S.route.id]===void 0);if(S.route.lazy||M){y=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}return d.reduceRight((m,S,w)=>{let T,M=!1,R=null,N=null;s&&(T=h&&S.route.id?h[S.route.id]:void 0,R=S.route.errorElement||Hv,y&&(g<0&&w===0?(Im("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,N=null):g===w&&(M=!0,N=S.route.hydrateFallbackElement||null)));let $=i.concat(d.slice(0,w+1)),B=()=>{let Y;return T?Y=R:M?Y=N:S.route.Component?Y=v.createElement(S.route.Component,null):S.route.element?Y=S.route.element:Y=m,v.createElement(qv,{match:S,routeContext:{outlet:m,matches:$,isDataRoute:s!=null},children:Y})};return s&&(S.route.ErrorBoundary||S.route.errorElement||w===0)?v.createElement(Yv,{location:s.location,revalidation:s.revalidation,component:R,error:T,children:B(),routeContext:{outlet:null,matches:$,isDataRoute:!0},unstable_onError:o}):B()},null)}function Bf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xv(a){let i=v.useContext(Ll);return Xe(i,Bf(a)),i}function Vv(a){let i=v.useContext(ts);return Xe(i,Bf(a)),i}function Qv(a){let i=v.useContext(Bn);return Xe(i,Bf(a)),i}function Lf(a){let i=Qv(a),s=i.matches[i.matches.length-1];return Xe(s.route.id,`${a} can only be used on routes that contain a unique "id"`),s.route.id}function Kv(){return Lf("useRouteId")}function Zv(){let a=v.useContext($f),i=Vv("useRouteError"),s=Lf("useRouteError");return a!==void 0?a:i.errors?.[s]}function Jv(){let{router:a}=Xv("useNavigate"),i=Lf("useNavigate"),s=v.useRef(!1);return Fm(()=>{s.current=!0}),v.useCallback(async(f,d={})=>{cn(s.current,Jm),s.current&&(typeof f=="number"?a.navigate(f):await a.navigate(f,{fromRouteId:i,...d}))},[a,i])}var b1={};function Im(a,i,s){!i&&!b1[a]&&(b1[a]=!0,cn(!1,s))}v.memo(Fv);function Fv({routes:a,future:i,state:s,unstable_onError:o}){return Wm(a,void 0,s,o,i)}function _a(a){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Wv({basename:a="/",children:i=null,location:s,navigationType:o="POP",navigator:f,static:d=!1}){Xe(!Wi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),y=v.useMemo(()=>({basename:h,navigator:f,static:d,future:{}}),[h,f,d]);typeof s=="string"&&(s=Bl(s));let{pathname:g="/",search:m="",hash:S="",state:w=null,key:T="default"}=s,M=v.useMemo(()=>{let R=Dn(g,h);return R==null?null:{location:{pathname:R,search:m,hash:S,state:w,key:T},navigationType:o}},[h,g,m,S,w,T,o]);return cn(M!=null,`<Router basename="${h}"> is not able to match the URL "${g}${m}${S}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:v.createElement(un.Provider,{value:y},v.createElement(Fi.Provider,{children:i,value:M}))}function Iv({children:a,location:i}){return Lv(Sf(a),i)}function Sf(a,i=[]){let s=[];return v.Children.forEach(a,(o,f)=>{if(!v.isValidElement(o))return;let d=[...i,f];if(o.type===v.Fragment){s.push.apply(s,Sf(o.props.children,d));return}Xe(o.type===_a,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=Sf(o.props.children,d)),s.push(h)}),s}var Do="get",$o="application/x-www-form-urlencoded";function as(a){return a!=null&&typeof a.tagName=="string"}function Pv(a){return as(a)&&a.tagName.toLowerCase()==="button"}function eb(a){return as(a)&&a.tagName.toLowerCase()==="form"}function tb(a){return as(a)&&a.tagName.toLowerCase()==="input"}function nb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function ab(a,i){return a.button===0&&(!i||i==="_self")&&!nb(a)}var yo=null;function lb(){if(yo===null)try{new FormData(document.createElement("form"),0),yo=!1}catch{yo=!0}return yo}var ib=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lu(a){return a!=null&&!ib.has(a)?(cn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$o}"`),null):a}function rb(a,i){let s,o,f,d,h;if(eb(a)){let y=a.getAttribute("action");o=y?Dn(y,i):null,s=a.getAttribute("method")||Do,f=Lu(a.getAttribute("enctype"))||$o,d=new FormData(a)}else if(Pv(a)||tb(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||y.getAttribute("action");if(o=g?Dn(g,i):null,s=a.getAttribute("formmethod")||y.getAttribute("method")||Do,f=Lu(a.getAttribute("formenctype"))||Lu(y.getAttribute("enctype"))||$o,d=new FormData(y,a),!lb()){let{name:m,type:S,value:w}=a;if(S==="image"){let T=m?`${m}.`:"";d.append(`${T}x`,"0"),d.append(`${T}y`,"0")}else m&&d.append(m,w)}}else{if(as(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Do,o=null,f=$o,h=a}return d&&f==="text/plain"&&(h=d,d=void 0),{action:o,method:s.toLowerCase(),encType:f,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uf(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function ob(a,i,s){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${s}`:i&&Dn(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function sb(a,i){if(a.id in i)return i[a.id];try{let s=await import(a.module);return i[a.id]=s,s}catch(s){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function ub(a,i,s){let o=await Promise.all(a.map(async f=>{let d=i.routes[f.route.id];if(d){let h=await sb(d,s);return h.links?h.links():[]}return[]}));return hb(o.flat(1).filter(cb).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function S1(a,i,s,o,f,d){let h=(g,m)=>s[m]?g.route.id!==s[m].route.id:!0,y=(g,m)=>s[m].pathname!==g.pathname||s[m].route.path?.endsWith("*")&&s[m].params["*"]!==g.params["*"];return d==="assets"?i.filter((g,m)=>h(g,m)||y(g,m)):d==="data"?i.filter((g,m)=>{let S=o.routes[g.route.id];if(!S||!S.hasLoader)return!1;if(h(g,m)||y(g,m))return!0;if(g.route.shouldRevalidate){let w=g.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function fb(a,i,{includeHydrateFallback:s}={}){return db(a.map(o=>{let f=i.routes[o.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function db(a){return[...new Set(a)]}function pb(a){let i={},s=Object.keys(a).sort();for(let o of s)i[o]=a[o];return i}function hb(a,i){let s=new Set;return new Set(i),a.reduce((o,f)=>{let d=JSON.stringify(pb(f));return s.has(d)||(s.add(d),o.push({key:d,link:f})),o},[])}function Pm(){let a=v.useContext(Ll);return Uf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function mb(){let a=v.useContext(ts);return Uf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Hf=v.createContext(void 0);Hf.displayName="FrameworkContext";function eg(){let a=v.useContext(Hf);return Uf(a,"You must render this element inside a <HydratedRouter> element"),a}function gb(a,i){let s=v.useContext(Hf),[o,f]=v.useState(!1),[d,h]=v.useState(!1),{onFocus:y,onBlur:g,onMouseEnter:m,onMouseLeave:S,onTouchStart:w}=i,T=v.useRef(null);v.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let N=B=>{B.forEach(Y=>{h(Y.isIntersecting)})},$=new IntersectionObserver(N,{threshold:.5});return T.current&&$.observe(T.current),()=>{$.disconnect()}}},[a]),v.useEffect(()=>{if(o){let N=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(N)}}},[o]);let M=()=>{f(!0)},R=()=>{f(!1),h(!1)};return s?a!=="intent"?[d,T,{}]:[d,T,{onFocus:Ui(y,M),onBlur:Ui(g,R),onMouseEnter:Ui(m,M),onMouseLeave:Ui(S,R),onTouchStart:Ui(w,M)}]:[!1,T,{}]}function Ui(a,i){return s=>{a&&a(s),s.defaultPrevented||i(s)}}function xb({page:a,...i}){let{router:s}=Pm(),o=v.useMemo(()=>qm(s.routes,a,s.basename),[s.routes,a,s.basename]);return o?v.createElement(vb,{page:a,matches:o,...i}):null}function yb(a){let{manifest:i,routeModules:s}=eg(),[o,f]=v.useState([]);return v.useEffect(()=>{let d=!1;return ub(a,i,s).then(h=>{d||f(h)}),()=>{d=!0}},[a,i,s]),o}function vb({page:a,matches:i,...s}){let o=Ln(),{manifest:f,routeModules:d}=eg(),{basename:h}=Pm(),{loaderData:y,matches:g}=mb(),m=v.useMemo(()=>S1(a,i,g,f,o,"data"),[a,i,g,f,o]),S=v.useMemo(()=>S1(a,i,g,f,o,"assets"),[a,i,g,f,o]),w=v.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let R=new Set,N=!1;if(i.forEach(B=>{let Y=f.routes[B.route.id];!Y||!Y.hasLoader||(!m.some(G=>G.route.id===B.route.id)&&B.route.id in y&&d[B.route.id]?.shouldRevalidate||Y.hasClientLoader?N=!0:R.add(B.route.id))}),R.size===0)return[];let $=ob(a,h,"data");return N&&R.size>0&&$.searchParams.set("_routes",i.filter(B=>R.has(B.route.id)).map(B=>B.route.id).join(",")),[$.pathname+$.search]},[h,y,o,f,m,i,a,d]),T=v.useMemo(()=>fb(S,f),[S,f]),M=yb(S);return v.createElement(v.Fragment,null,w.map(R=>v.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...s})),T.map(R=>v.createElement("link",{key:R,rel:"modulepreload",href:R,...s})),M.map(({key:R,link:N})=>v.createElement("link",{key:R,nonce:s.nonce,...N})))}function bb(...a){return i=>{a.forEach(s=>{typeof s=="function"?s(i):s!=null&&(s.current=i)})}}var tg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{tg&&(window.__reactRouterVersion="7.9.4")}catch{}function Sb({basename:a,children:i,window:s}){let o=v.useRef();o.current==null&&(o.current=cv({window:s,v5Compat:!0}));let f=o.current,[d,h]=v.useState({action:f.action,location:f.location}),y=v.useCallback(g=>{v.startTransition(()=>h(g))},[h]);return v.useLayoutEffect(()=>f.listen(y),[f,y]),v.createElement(Wv,{basename:a,children:i,location:d.location,navigationType:d.action,navigator:f})}var ng=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ul=v.forwardRef(function({onClick:i,discover:s="render",prefetch:o="none",relative:f,reloadDocument:d,replace:h,state:y,target:g,to:m,preventScrollReset:S,viewTransition:w,...T},M){let{basename:R}=v.useContext(un),N=typeof m=="string"&&ng.test(m),$,B=!1;if(typeof m=="string"&&N&&($=m,tg))try{let I=new URL(window.location.href),ce=m.startsWith("//")?new URL(I.protocol+m):new URL(m),de=Dn(ce.pathname,R);ce.origin===I.origin&&de!=null?m=de+ce.search+ce.hash:B=!0}catch{cn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=$v(m,{relative:f}),[G,K,Z]=gb(o,T),L=Cb(m,{replace:h,state:y,target:g,preventScrollReset:S,relative:f,viewTransition:w});function V(I){i&&i(I),I.defaultPrevented||L(I)}let Q=v.createElement("a",{...T,...Z,href:$||Y,onClick:B||d?i:V,ref:bb(M,K),target:g,"data-discover":!N&&s==="render"?"true":void 0});return G&&!N?v.createElement(v.Fragment,null,Q,v.createElement(xb,{page:Y})):Q});Ul.displayName="Link";var wb=v.forwardRef(function({"aria-current":i="page",caseSensitive:s=!1,className:o="",end:f=!1,style:d,to:h,viewTransition:y,children:g,...m},S){let w=Ii(h,{relative:m.relative}),T=Ln(),M=v.useContext(ts),{navigator:R,basename:N}=v.useContext(un),$=M!=null&&Ab(w)&&y===!0,B=R.encodeLocation?R.encodeLocation(w).pathname:w.pathname,Y=T.pathname,G=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;s||(Y=Y.toLowerCase(),G=G?G.toLowerCase():null,B=B.toLowerCase()),G&&N&&(G=Dn(G,N)||G);const K=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let Z=Y===B||!f&&Y.startsWith(B)&&Y.charAt(K)==="/",L=G!=null&&(G===B||!f&&G.startsWith(B)&&G.charAt(B.length)==="/"),V={isActive:Z,isPending:L,isTransitioning:$},Q=Z?i:void 0,I;typeof o=="function"?I=o(V):I=[o,Z?"active":null,L?"pending":null,$?"transitioning":null].filter(Boolean).join(" ");let ce=typeof d=="function"?d(V):d;return v.createElement(Ul,{...m,"aria-current":Q,className:I,ref:S,style:ce,to:h,viewTransition:y},typeof g=="function"?g(V):g)});wb.displayName="NavLink";var jb=v.forwardRef(({discover:a="render",fetcherKey:i,navigate:s,reloadDocument:o,replace:f,state:d,method:h=Do,action:y,onSubmit:g,relative:m,preventScrollReset:S,viewTransition:w,...T},M)=>{let R=Mb(),N=Rb(y,{relative:m}),$=h.toLowerCase()==="get"?"get":"post",B=typeof y=="string"&&ng.test(y),Y=G=>{if(g&&g(G),G.defaultPrevented)return;G.preventDefault();let K=G.nativeEvent.submitter,Z=K?.getAttribute("formmethod")||h;R(K||G.currentTarget,{fetcherKey:i,method:Z,navigate:s,replace:f,state:d,relative:m,preventScrollReset:S,viewTransition:w})};return v.createElement("form",{ref:M,method:$,action:N,onSubmit:o?g:Y,...T,"data-discover":!B&&a==="render"?"true":void 0})});jb.displayName="Form";function Eb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ag(a){let i=v.useContext(Ll);return Xe(i,Eb(a)),i}function Cb(a,{target:i,replace:s,state:o,preventScrollReset:f,relative:d,viewTransition:h}={}){let y=ns(),g=Ln(),m=Ii(a,{relative:d});return v.useCallback(S=>{if(ab(S,i)){S.preventDefault();let w=s!==void 0?s:Xi(g)===Xi(m);y(a,{replace:w,state:o,preventScrollReset:f,relative:d,viewTransition:h})}},[g,y,m,s,o,i,a,f,d,h])}var Tb=0,zb=()=>`__${String(++Tb)}__`;function Mb(){let{router:a}=ag("useSubmit"),{basename:i}=v.useContext(un),s=Kv();return v.useCallback(async(o,f={})=>{let{action:d,method:h,encType:y,formData:g,body:m}=rb(o,i);if(f.navigate===!1){let S=f.fetcherKey||zb();await a.fetch(S,s,f.action||d,{preventScrollReset:f.preventScrollReset,formData:g,body:m,formMethod:f.method||h,formEncType:f.encType||y,flushSync:f.flushSync})}else await a.navigate(f.action||d,{preventScrollReset:f.preventScrollReset,formData:g,body:m,formMethod:f.method||h,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:s,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,i,s])}function Rb(a,{relative:i}={}){let{basename:s}=v.useContext(un),o=v.useContext(Bn);Xe(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),d={...Ii(a||".",{relative:i})},h=Ln();if(a==null){d.search=h.search;let y=new URLSearchParams(d.search),g=y.getAll("index");if(g.some(S=>S==="")){y.delete("index"),g.filter(w=>w).forEach(w=>y.append("index",w));let S=y.toString();d.search=S?`?${S}`:""}}return(!a||a===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:Nn([s,d.pathname])),Xi(d)}function Ab(a,{relative:i}={}){let s=v.useContext(Zm);Xe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=ag("useViewTransitionState"),f=Ii(a,{relative:i});if(!s.isTransitioning)return!1;let d=Dn(s.currentLocation.pathname,o)||s.currentLocation.pathname,h=Dn(s.nextLocation.pathname,o)||s.nextLocation.pathname;return Xo(f.pathname,h)!=null||Xo(f.pathname,d)!=null}var Ob=Ym();const Rl=Ji(Ob);var ft=function(){return ft=Object.assign||function(i){for(var s,o=1,f=arguments.length;o<f;o++){s=arguments[o];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(i[d]=s[d])}return i},ft.apply(this,arguments)};function Ol(a,i,s){if(s||arguments.length===2)for(var o=0,f=i.length,d;o<f;o++)(d||!(o in i))&&(d||(d=Array.prototype.slice.call(i,0,o)),d[o]=i[o]);return a.concat(d||Array.prototype.slice.call(i))}var Ye="-ms-",Gi="-moz-",Me="-webkit-",lg="comm",ls="rule",Yf="decl",kb="@import",ig="@keyframes",Nb="@layer",rg=Math.abs,qf=String.fromCharCode,wf=Object.assign;function _b(a,i){return at(a,0)^45?(((i<<2^at(a,0))<<2^at(a,1))<<2^at(a,2))<<2^at(a,3):0}function og(a){return a.trim()}function An(a,i){return(a=i.exec(a))?a[0]:a}function ge(a,i,s){return a.replace(i,s)}function Bo(a,i,s){return a.indexOf(i,s)}function at(a,i){return a.charCodeAt(i)|0}function kl(a,i,s){return a.slice(i,s)}function sn(a){return a.length}function sg(a){return a.length}function Yi(a,i){return i.push(a),a}function Db(a,i){return a.map(i).join("")}function w1(a,i){return a.filter(function(s){return!An(s,i)})}var is=1,Nl=1,cg=0,Kt=0,Pe=0,Hl="";function rs(a,i,s,o,f,d,h,y){return{value:a,root:i,parent:s,type:o,props:f,children:d,line:is,column:Nl,length:h,return:"",siblings:y}}function pa(a,i){return wf(rs("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function El(a){for(;a.root;)a=pa(a.root,{children:[a]});Yi(a,a.siblings)}function $b(){return Pe}function Bb(){return Pe=Kt>0?at(Hl,--Kt):0,Nl--,Pe===10&&(Nl=1,is--),Pe}function tn(){return Pe=Kt<cg?at(Hl,Kt++):0,Nl++,Pe===10&&(Nl=1,is++),Pe}function Ba(){return at(Hl,Kt)}function Lo(){return Kt}function os(a,i){return kl(Hl,a,i)}function jf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lb(a){return is=Nl=1,cg=sn(Hl=a),Kt=0,[]}function Ub(a){return Hl="",a}function Uu(a){return og(os(Kt-1,Ef(a===91?a+2:a===40?a+1:a)))}function Hb(a){for(;(Pe=Ba())&&Pe<33;)tn();return jf(a)>2||jf(Pe)>3?"":" "}function Yb(a,i){for(;--i&&tn()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return os(a,Lo()+(i<6&&Ba()==32&&tn()==32))}function Ef(a){for(;tn();)switch(Pe){case a:return Kt;case 34:case 39:a!==34&&a!==39&&Ef(Pe);break;case 40:a===41&&Ef(a);break;case 92:tn();break}return Kt}function qb(a,i){for(;tn()&&a+Pe!==57;)if(a+Pe===84&&Ba()===47)break;return"/*"+os(i,Kt-1)+"*"+qf(a===47?a:tn())}function Gb(a){for(;!jf(Ba());)tn();return os(a,Kt)}function Xb(a){return Ub(Uo("",null,null,null,[""],a=Lb(a),0,[0],a))}function Uo(a,i,s,o,f,d,h,y,g){for(var m=0,S=0,w=h,T=0,M=0,R=0,N=1,$=1,B=1,Y=0,G="",K=f,Z=d,L=o,V=G;$;)switch(R=Y,Y=tn()){case 40:if(R!=108&&at(V,w-1)==58){Bo(V+=ge(Uu(Y),"&","&\f"),"&\f",rg(m?y[m-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:V+=Uu(Y);break;case 9:case 10:case 13:case 32:V+=Hb(R);break;case 92:V+=Yb(Lo()-1,7);continue;case 47:switch(Ba()){case 42:case 47:Yi(Vb(qb(tn(),Lo()),i,s,g),g);break;default:V+="/"}break;case 123*N:y[m++]=sn(V)*B;case 125*N:case 59:case 0:switch(Y){case 0:case 125:$=0;case 59+S:B==-1&&(V=ge(V,/\f/g,"")),M>0&&sn(V)-w&&Yi(M>32?E1(V+";",o,s,w-1,g):E1(ge(V," ","")+";",o,s,w-2,g),g);break;case 59:V+=";";default:if(Yi(L=j1(V,i,s,m,S,f,y,G,K=[],Z=[],w,d),d),Y===123)if(S===0)Uo(V,i,L,L,K,d,w,y,Z);else switch(T===99&&at(V,3)===110?100:T){case 100:case 108:case 109:case 115:Uo(a,L,L,o&&Yi(j1(a,L,L,0,0,f,y,G,f,K=[],w,Z),Z),f,Z,w,y,o?K:Z);break;default:Uo(V,L,L,L,[""],Z,0,y,Z)}}m=S=M=0,N=B=1,G=V="",w=h;break;case 58:w=1+sn(V),M=R;default:if(N<1){if(Y==123)--N;else if(Y==125&&N++==0&&Bb()==125)continue}switch(V+=qf(Y),Y*N){case 38:B=S>0?1:(V+="\f",-1);break;case 44:y[m++]=(sn(V)-1)*B,B=1;break;case 64:Ba()===45&&(V+=Uu(tn())),T=Ba(),S=w=sn(G=V+=Gb(Lo())),Y++;break;case 45:R===45&&sn(V)==2&&(N=0)}}return d}function j1(a,i,s,o,f,d,h,y,g,m,S,w){for(var T=f-1,M=f===0?d:[""],R=sg(M),N=0,$=0,B=0;N<o;++N)for(var Y=0,G=kl(a,T+1,T=rg($=h[N])),K=a;Y<R;++Y)(K=og($>0?M[Y]+" "+G:ge(G,/&\f/g,M[Y])))&&(g[B++]=K);return rs(a,i,s,f===0?ls:y,g,m,S,w)}function Vb(a,i,s,o){return rs(a,i,s,lg,qf($b()),kl(a,2,-2),0,o)}function E1(a,i,s,o,f){return rs(a,i,s,Yf,kl(a,0,o),kl(a,o+1,-1),o,f)}function ug(a,i,s){switch(_b(a,i)){case 5103:return Me+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+a+a;case 4789:return Gi+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+a+Gi+a+Ye+a+a;case 5936:switch(at(a,i+11)){case 114:return Me+a+Ye+ge(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Me+a+Ye+ge(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Me+a+Ye+ge(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Me+a+Ye+a+a;case 6165:return Me+a+Ye+"flex-"+a+a;case 5187:return Me+a+ge(a,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Ye+"flex-$1$2")+a;case 5443:return Me+a+Ye+"flex-item-"+ge(a,/flex-|-self/g,"")+(An(a,/flex-|baseline/)?"":Ye+"grid-row-"+ge(a,/flex-|-self/g,""))+a;case 4675:return Me+a+Ye+"flex-line-pack"+ge(a,/align-content|flex-|-self/g,"")+a;case 5548:return Me+a+Ye+ge(a,"shrink","negative")+a;case 5292:return Me+a+Ye+ge(a,"basis","preferred-size")+a;case 6060:return Me+"box-"+ge(a,"-grow","")+Me+a+Ye+ge(a,"grow","positive")+a;case 4554:return Me+ge(a,/([^-])(transform)/g,"$1"+Me+"$2")+a;case 6187:return ge(ge(ge(a,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),a,"")+a;case 5495:case 3959:return ge(a,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return ge(ge(a,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+a+a;case 4200:if(!An(a,/flex-|baseline/))return Ye+"grid-column-align"+kl(a,i)+a;break;case 2592:case 3360:return Ye+ge(a,"template-","")+a;case 4384:case 3616:return s&&s.some(function(o,f){return i=f,An(o.props,/grid-\w+-end/)})?~Bo(a+(s=s[i].value),"span",0)?a:Ye+ge(a,"-start","")+a+Ye+"grid-row-span:"+(~Bo(s,"span",0)?An(s,/\d+/):+An(s,/\d+/)-+An(a,/\d+/))+";":Ye+ge(a,"-start","")+a;case 4896:case 4128:return s&&s.some(function(o){return An(o.props,/grid-\w+-start/)})?a:Ye+ge(ge(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ge(a,/(.+)-inline(.+)/,Me+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sn(a)-1-i>6)switch(at(a,i+1)){case 109:if(at(a,i+4)!==45)break;case 102:return ge(a,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Gi+(at(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~Bo(a,"stretch",0)?ug(ge(a,"stretch","fill-available"),i,s)+a:a}break;case 5152:case 5920:return ge(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,f,d,h,y,g,m){return Ye+f+":"+d+m+(h?Ye+f+"-span:"+(y?g:+g-+d)+m:"")+a});case 4949:if(at(a,i+6)===121)return ge(a,":",":"+Me)+a;break;case 6444:switch(at(a,at(a,14)===45?18:11)){case 120:return ge(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(at(a,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Ye+"$2box$3")+a;case 100:return ge(a,":",":"+Ye)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(a,"scroll-","scroll-snap-")+a}return a}function Vo(a,i){for(var s="",o=0;o<a.length;o++)s+=i(a[o],o,a,i)||"";return s}function Qb(a,i,s,o){switch(a.type){case Nb:if(a.children.length)break;case kb:case Yf:return a.return=a.return||a.value;case lg:return"";case ig:return a.return=a.value+"{"+Vo(a.children,o)+"}";case ls:if(!sn(a.value=a.props.join(",")))return""}return sn(s=Vo(a.children,o))?a.return=a.value+"{"+s+"}":""}function Kb(a){var i=sg(a);return function(s,o,f,d){for(var h="",y=0;y<i;y++)h+=a[y](s,o,f,d)||"";return h}}function Zb(a){return function(i){i.root||(i=i.return)&&a(i)}}function Jb(a,i,s,o){if(a.length>-1&&!a.return)switch(a.type){case Yf:a.return=ug(a.value,a.length,s);return;case ig:return Vo([pa(a,{value:ge(a.value,"@","@"+Me)})],o);case ls:if(a.length)return Db(s=a.props,function(f){switch(An(f,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":El(pa(a,{props:[ge(f,/:(read-\w+)/,":"+Gi+"$1")]})),El(pa(a,{props:[f]})),wf(a,{props:w1(s,o)});break;case"::placeholder":El(pa(a,{props:[ge(f,/:(plac\w+)/,":"+Me+"input-$1")]})),El(pa(a,{props:[ge(f,/:(plac\w+)/,":"+Gi+"$1")]})),El(pa(a,{props:[ge(f,/:(plac\w+)/,Ye+"input-$1")]})),El(pa(a,{props:[f]})),wf(a,{props:w1(s,o)});break}return""})}}var Fb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dt={},_l=typeof process<"u"&&Dt!==void 0&&(Dt.REACT_APP_SC_ATTR||Dt.SC_ATTR)||"data-styled",fg="active",dg="data-styled-version",ss="6.1.19",Gf=`/*!sc*/
`,Qo=typeof window<"u"&&typeof document<"u",Wb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Dt!==void 0&&Dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Dt.REACT_APP_SC_DISABLE_SPEEDY!==""?Dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Dt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Dt!==void 0&&Dt.SC_DISABLE_SPEEDY!==void 0&&Dt.SC_DISABLE_SPEEDY!==""&&Dt.SC_DISABLE_SPEEDY!=="false"&&Dt.SC_DISABLE_SPEEDY),Ib={},cs=Object.freeze([]),Dl=Object.freeze({});function pg(a,i,s){return s===void 0&&(s=Dl),a.theme!==s.theme&&a.theme||i||s.theme}var hg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Pb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,e5=/(^-|-$)/g;function C1(a){return a.replace(Pb,"-").replace(e5,"")}var t5=/(a)(d)/gi,vo=52,T1=function(a){return String.fromCharCode(a+(a>25?39:97))};function Cf(a){var i,s="";for(i=Math.abs(a);i>vo;i=i/vo|0)s=T1(i%vo)+s;return(T1(i%vo)+s).replace(t5,"$1-$2")}var Hu,mg=5381,Al=function(a,i){for(var s=i.length;s;)a=33*a^i.charCodeAt(--s);return a},gg=function(a){return Al(mg,a)};function Xf(a){return Cf(gg(a)>>>0)}function n5(a){return a.displayName||a.name||"Component"}function Yu(a){return typeof a=="string"&&!0}var xg=typeof Symbol=="function"&&Symbol.for,yg=xg?Symbol.for("react.memo"):60115,a5=xg?Symbol.for("react.forward_ref"):60112,l5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},r5=((Hu={})[a5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hu[yg]=vg,Hu);function z1(a){return("type"in(i=a)&&i.type.$$typeof)===yg?vg:"$$typeof"in a?r5[a.$$typeof]:l5;var i}var o5=Object.defineProperty,s5=Object.getOwnPropertyNames,M1=Object.getOwnPropertySymbols,c5=Object.getOwnPropertyDescriptor,u5=Object.getPrototypeOf,R1=Object.prototype;function bg(a,i,s){if(typeof i!="string"){if(R1){var o=u5(i);o&&o!==R1&&bg(a,o,s)}var f=s5(i);M1&&(f=f.concat(M1(i)));for(var d=z1(a),h=z1(i),y=0;y<f.length;++y){var g=f[y];if(!(g in i5||s&&s[g]||h&&g in h||d&&g in d)){var m=c5(i,g);try{o5(a,g,m)}catch{}}}}return a}function $l(a){return typeof a=="function"}function Vf(a){return typeof a=="object"&&"styledComponentId"in a}function $a(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function Ko(a,i){if(a.length===0)return"";for(var s=a[0],o=1;o<a.length;o++)s+=a[o];return s}function Vi(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Tf(a,i,s){if(s===void 0&&(s=!1),!s&&!Vi(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var o=0;o<i.length;o++)a[o]=Tf(a[o],i[o]);else if(Vi(i))for(var o in i)a[o]=Tf(a[o],i[o]);return a}function Qf(a,i){Object.defineProperty(a,"toString",{value:i})}function Pi(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var f5=(function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return a.prototype.indexOfGroup=function(i){for(var s=0,o=0;o<i;o++)s+=this.groupSizes[o];return s},a.prototype.insertRules=function(i,s){if(i>=this.groupSizes.length){for(var o=this.groupSizes,f=o.length,d=f;i>=d;)if((d<<=1)<0)throw Pi(16,"".concat(i));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var h=f;h<d;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(i+1),g=(h=0,s.length);h<g;h++)this.tag.insertRule(y,s[h])&&(this.groupSizes[i]++,y++)},a.prototype.clearGroup=function(i){if(i<this.length){var s=this.groupSizes[i],o=this.indexOfGroup(i),f=o+s;this.groupSizes[i]=0;for(var d=o;d<f;d++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(i){var s="";if(i>=this.length||this.groupSizes[i]===0)return s;for(var o=this.groupSizes[i],f=this.indexOfGroup(i),d=f+o,h=f;h<d;h++)s+="".concat(this.tag.getRule(h)).concat(Gf);return s},a})(),Ho=new Map,Zo=new Map,Yo=1,bo=function(a){if(Ho.has(a))return Ho.get(a);for(;Zo.has(Yo);)Yo++;var i=Yo++;return Ho.set(a,i),Zo.set(i,a),i},d5=function(a,i){Yo=i+1,Ho.set(a,i),Zo.set(i,a)},p5="style[".concat(_l,"][").concat(dg,'="').concat(ss,'"]'),h5=new RegExp("^".concat(_l,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),m5=function(a,i,s){for(var o,f=s.split(","),d=0,h=f.length;d<h;d++)(o=f[d])&&a.registerName(i,o)},g5=function(a,i){for(var s,o=((s=i.textContent)!==null&&s!==void 0?s:"").split(Gf),f=[],d=0,h=o.length;d<h;d++){var y=o[d].trim();if(y){var g=y.match(h5);if(g){var m=0|parseInt(g[1],10),S=g[2];m!==0&&(d5(S,m),m5(a,S,g[3]),a.getTag().insertRules(m,f)),f.length=0}else f.push(y)}}},A1=function(a){for(var i=document.querySelectorAll(p5),s=0,o=i.length;s<o;s++){var f=i[s];f&&f.getAttribute(_l)!==fg&&(g5(a,f),f.parentNode&&f.parentNode.removeChild(f))}};function x5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sg=function(a){var i=document.head,s=a||i,o=document.createElement("style"),f=(function(y){var g=Array.from(y.querySelectorAll("style[".concat(_l,"]")));return g[g.length-1]})(s),d=f!==void 0?f.nextSibling:null;o.setAttribute(_l,fg),o.setAttribute(dg,ss);var h=x5();return h&&o.setAttribute("nonce",h),s.insertBefore(o,d),o},y5=(function(){function a(i){this.element=Sg(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var o=document.styleSheets,f=0,d=o.length;f<d;f++){var h=o[f];if(h.ownerNode===s)return h}throw Pi(17)})(this.element),this.length=0}return a.prototype.insertRule=function(i,s){try{return this.sheet.insertRule(s,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var s=this.sheet.cssRules[i];return s&&s.cssText?s.cssText:""},a})(),v5=(function(){function a(i){this.element=Sg(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,s){if(i<=this.length&&i>=0){var o=document.createTextNode(s);return this.element.insertBefore(o,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a})(),b5=(function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,s){return i<=this.length&&(this.rules.splice(i,0,s),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a})(),O1=Qo,S5={isServer:!Qo,useCSSOMInjection:!Wb},Jo=(function(){function a(i,s,o){i===void 0&&(i=Dl),s===void 0&&(s={});var f=this;this.options=ft(ft({},S5),i),this.gs=s,this.names=new Map(o),this.server=!!i.isServer,!this.server&&Qo&&O1&&(O1=!1,A1(this)),Qf(this,function(){return(function(d){for(var h=d.getTag(),y=h.length,g="",m=function(w){var T=(function(B){return Zo.get(B)})(w);if(T===void 0)return"continue";var M=d.names.get(T),R=h.getGroup(w);if(M===void 0||!M.size||R.length===0)return"continue";var N="".concat(_l,".g").concat(w,'[id="').concat(T,'"]'),$="";M!==void 0&&M.forEach(function(B){B.length>0&&($+="".concat(B,","))}),g+="".concat(R).concat(N,'{content:"').concat($,'"}').concat(Gf)},S=0;S<y;S++)m(S);return g})(f)})}return a.registerId=function(i){return bo(i)},a.prototype.rehydrate=function(){!this.server&&Qo&&A1(this)},a.prototype.reconstructWithOptions=function(i,s){return s===void 0&&(s=!0),new a(ft(ft({},this.options),i),this.gs,s&&this.names||void 0)},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(s){var o=s.useCSSOMInjection,f=s.target;return s.isServer?new b5(f):o?new y5(f):new v5(f)})(this.options),new f5(i)));var i},a.prototype.hasNameForId=function(i,s){return this.names.has(i)&&this.names.get(i).has(s)},a.prototype.registerName=function(i,s){if(bo(i),this.names.has(i))this.names.get(i).add(s);else{var o=new Set;o.add(s),this.names.set(i,o)}},a.prototype.insertRules=function(i,s,o){this.registerName(i,s),this.getTag().insertRules(bo(i),o)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(bo(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a})(),w5=/&/g,j5=/^\s*\/\/.*$/gm;function wg(a,i){return a.map(function(s){return s.type==="rule"&&(s.value="".concat(i," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(i," ")),s.props=s.props.map(function(o){return"".concat(i," ").concat(o)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=wg(s.children,i)),s})}function E5(a){var i,s,o,f=Dl,d=f.options,h=d===void 0?Dl:d,y=f.plugins,g=y===void 0?cs:y,m=function(T,M,R){return R.startsWith(s)&&R.endsWith(s)&&R.replaceAll(s,"").length>0?".".concat(i):T},S=g.slice();S.push(function(T){T.type===ls&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(w5,s).replace(o,m))}),h.prefix&&S.push(Jb),S.push(Qb);var w=function(T,M,R,N){M===void 0&&(M=""),R===void 0&&(R=""),N===void 0&&(N="&"),i=N,s=M,o=new RegExp("\\".concat(s,"\\b"),"g");var $=T.replace(j5,""),B=Xb(R||M?"".concat(R," ").concat(M," { ").concat($," }"):$);h.namespace&&(B=wg(B,h.namespace));var Y=[];return Vo(B,Kb(S.concat(Zb(function(G){return Y.push(G)})))),Y};return w.hash=g.length?g.reduce(function(T,M){return M.name||Pi(15),Al(T,M.name)},mg).toString():"",w}var C5=new Jo,zf=E5(),jg=Re.createContext({shouldForwardProp:void 0,styleSheet:C5,stylis:zf});jg.Consumer;Re.createContext(void 0);function Mf(){return v.useContext(jg)}var Eg=(function(){function a(i,s){var o=this;this.inject=function(f,d){d===void 0&&(d=zf);var h=o.name+d.hash;f.hasNameForId(o.id,h)||f.insertRules(o.id,h,d(o.rules,h,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=s,Qf(this,function(){throw Pi(12,String(o.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=zf),this.name+i.hash},a})(),T5=function(a){return a>="A"&&a<="Z"};function k1(a){for(var i="",s=0;s<a.length;s++){var o=a[s];if(s===1&&o==="-"&&a[0]==="-")return a;T5(o)?i+="-"+o.toLowerCase():i+=o}return i.startsWith("ms-")?"-"+i:i}var Cg=function(a){return a==null||a===!1||a===""},Tg=function(a){var i,s,o=[];for(var f in a){var d=a[f];a.hasOwnProperty(f)&&!Cg(d)&&(Array.isArray(d)&&d.isCss||$l(d)?o.push("".concat(k1(f),":"),d,";"):Vi(d)?o.push.apply(o,Ol(Ol(["".concat(f," {")],Tg(d),!1),["}"],!1)):o.push("".concat(k1(f),": ").concat((i=f,(s=d)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||i in Fb||i.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return o};function ma(a,i,s,o){if(Cg(a))return[];if(Vf(a))return[".".concat(a.styledComponentId)];if($l(a)){if(!$l(d=a)||d.prototype&&d.prototype.isReactComponent||!i)return[a];var f=a(i);return ma(f,i,s,o)}var d;return a instanceof Eg?s?(a.inject(s,o),[a.getName(o)]):[a]:Vi(a)?Tg(a):Array.isArray(a)?Array.prototype.concat.apply(cs,a.map(function(h){return ma(h,i,s,o)})):[a.toString()]}function zg(a){for(var i=0;i<a.length;i+=1){var s=a[i];if($l(s)&&!Vf(s))return!1}return!0}var z5=gg(ss),M5=(function(){function a(i,s,o){this.rules=i,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&zg(i),this.componentId=s,this.baseHash=Al(z5,s),this.baseStyle=o,Jo.registerId(s)}return a.prototype.generateAndInjectStyles=function(i,s,o){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,s,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))f=$a(f,this.staticRulesId);else{var d=Ko(ma(this.rules,i,s,o)),h=Cf(Al(this.baseHash,d)>>>0);if(!s.hasNameForId(this.componentId,h)){var y=o(d,".".concat(h),void 0,this.componentId);s.insertRules(this.componentId,h,y)}f=$a(f,h),this.staticRulesId=h}else{for(var g=Al(this.baseHash,o.hash),m="",S=0;S<this.rules.length;S++){var w=this.rules[S];if(typeof w=="string")m+=w;else if(w){var T=Ko(ma(w,i,s,o));g=Al(g,T+S),m+=T}}if(m){var M=Cf(g>>>0);s.hasNameForId(this.componentId,M)||s.insertRules(this.componentId,M,o(m,".".concat(M),void 0,this.componentId)),f=$a(f,M)}}return f},a})(),Kf=Re.createContext(void 0);Kf.Consumer;var qu={};function R5(a,i,s){var o=Vf(a),f=a,d=!Yu(a),h=i.attrs,y=h===void 0?cs:h,g=i.componentId,m=g===void 0?(function(K,Z){var L=typeof K!="string"?"sc":C1(K);qu[L]=(qu[L]||0)+1;var V="".concat(L,"-").concat(Xf(ss+L+qu[L]));return Z?"".concat(Z,"-").concat(V):V})(i.displayName,i.parentComponentId):g,S=i.displayName,w=S===void 0?(function(K){return Yu(K)?"styled.".concat(K):"Styled(".concat(n5(K),")")})(a):S,T=i.displayName&&i.componentId?"".concat(C1(i.displayName),"-").concat(i.componentId):i.componentId||m,M=o&&f.attrs?f.attrs.concat(y).filter(Boolean):y,R=i.shouldForwardProp;if(o&&f.shouldForwardProp){var N=f.shouldForwardProp;if(i.shouldForwardProp){var $=i.shouldForwardProp;R=function(K,Z){return N(K,Z)&&$(K,Z)}}else R=N}var B=new M5(s,T,o?f.componentStyle:void 0);function Y(K,Z){return(function(L,V,Q){var I=L.attrs,ce=L.componentStyle,de=L.defaultProps,le=L.foldedComponentIds,ie=L.styledComponentId,De=L.target,Be=Re.useContext(Kf),_=Mf(),J=L.shouldForwardProp||_.shouldForwardProp,P=pg(V,Be,de)||Dl,te=(function(re,ue,xe){for(var Ge,Ee=ft(ft({},ue),{className:void 0,theme:xe}),Et=0;Et<re.length;Et+=1){var Jt=$l(Ge=re[Et])?Ge(Ee):Ge;for(var pt in Jt)Ee[pt]=pt==="className"?$a(Ee[pt],Jt[pt]):pt==="style"?ft(ft({},Ee[pt]),Jt[pt]):Jt[pt]}return ue.className&&(Ee.className=$a(Ee.className,ue.className)),Ee})(I,V,P),me=te.as||De,E={};for(var H in te)te[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&te.theme===P||(H==="forwardedAs"?E.as=te.forwardedAs:J&&!J(H,me)||(E[H]=te[H]));var F=(function(re,ue){var xe=Mf(),Ge=re.generateAndInjectStyles(ue,xe.styleSheet,xe.stylis);return Ge})(ce,te),W=$a(le,ie);return F&&(W+=" "+F),te.className&&(W+=" "+te.className),E[Yu(me)&&!hg.has(me)?"class":"className"]=W,Q&&(E.ref=Q),v.createElement(me,E)})(G,K,Z)}Y.displayName=w;var G=Re.forwardRef(Y);return G.attrs=M,G.componentStyle=B,G.displayName=w,G.shouldForwardProp=R,G.foldedComponentIds=o?$a(f.foldedComponentIds,f.styledComponentId):"",G.styledComponentId=T,G.target=o?f.target:a,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(K){this._foldedDefaultProps=o?(function(Z){for(var L=[],V=1;V<arguments.length;V++)L[V-1]=arguments[V];for(var Q=0,I=L;Q<I.length;Q++)Tf(Z,I[Q],!0);return Z})({},f.defaultProps,K):K}}),Qf(G,function(){return".".concat(G.styledComponentId)}),d&&bg(G,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function N1(a,i){for(var s=[a[0]],o=0,f=i.length;o<f;o+=1)s.push(i[o],a[o+1]);return s}var _1=function(a){return Object.assign(a,{isCss:!0})};function $n(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];if($l(a)||Vi(a))return _1(ma(N1(cs,Ol([a],i,!0))));var o=a;return i.length===0&&o.length===1&&typeof o[0]=="string"?ma(o):_1(ma(N1(o,i)))}function Rf(a,i,s){if(s===void 0&&(s=Dl),!i)throw Pi(1,i);var o=function(f){for(var d=[],h=1;h<arguments.length;h++)d[h-1]=arguments[h];return a(i,s,$n.apply(void 0,Ol([f],d,!1)))};return o.attrs=function(f){return Rf(a,i,ft(ft({},s),{attrs:Array.prototype.concat(s.attrs,f).filter(Boolean)}))},o.withConfig=function(f){return Rf(a,i,ft(ft({},s),f))},o}var Mg=function(a){return Rf(R5,a)},b=Mg;hg.forEach(function(a){b[a]=Mg(a)});var A5=(function(){function a(i,s){this.rules=i,this.componentId=s,this.isStatic=zg(i),Jo.registerId(this.componentId+1)}return a.prototype.createStyles=function(i,s,o,f){var d=f(Ko(ma(this.rules,s,o,f)),""),h=this.componentId+i;o.insertRules(h,h,d)},a.prototype.removeStyles=function(i,s){s.clearRules(this.componentId+i)},a.prototype.renderStyles=function(i,s,o,f){i>2&&Jo.registerId(this.componentId+i),this.removeStyles(i,o),this.createStyles(i,s,o,f)},a})();function Rg(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];var o=$n.apply(void 0,Ol([a],i,!1)),f="sc-global-".concat(Xf(JSON.stringify(o))),d=new A5(o,f),h=function(g){var m=Mf(),S=Re.useContext(Kf),w=Re.useRef(m.styleSheet.allocateGSInstance(f)).current;return m.styleSheet.server&&y(w,g,m.styleSheet,S,m.stylis),Re.useLayoutEffect(function(){if(!m.styleSheet.server)return y(w,g,m.styleSheet,S,m.stylis),function(){return d.removeStyles(w,m.styleSheet)}},[w,g,m.styleSheet,S,m.stylis]),null};function y(g,m,S,w,T){if(d.isStatic)d.renderStyles(g,Ib,S,T);else{var M=ft(ft({},m),{theme:pg(m,w,h.defaultProps)});d.renderStyles(g,M,S,T)}}return Re.memo(h)}function Zt(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];var o=Ko($n.apply(void 0,Ol([a],i,!1))),f=Xf(o);return new Eg(f,o)}var Ag={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},D1=Re.createContext&&Re.createContext(Ag),O5=["attr","size","title"];function k5(a,i){if(a==null)return{};var s=N5(a,i),o,f;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(f=0;f<d.length;f++)o=d[f],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(s[o]=a[o])}return s}function N5(a,i){if(a==null)return{};var s={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}function Fo(){return Fo=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=s[o])}return a},Fo.apply(this,arguments)}function $1(a,i){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);i&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(a,f).enumerable})),s.push.apply(s,o)}return s}function Wo(a){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?$1(Object(s),!0).forEach(function(o){_5(a,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):$1(Object(s)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(s,o))})}return a}function _5(a,i,s){return i=D5(i),i in a?Object.defineProperty(a,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[i]=s,a}function D5(a){var i=$5(a,"string");return typeof i=="symbol"?i:i+""}function $5(a,i){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var o=s.call(a,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}function Og(a){return a&&a.map((i,s)=>Re.createElement(i.tag,Wo({key:s},i.attr),Og(i.child)))}function je(a){return i=>Re.createElement(B5,Fo({attr:Wo({},a.attr)},i),Og(a.child))}function B5(a){var i=s=>{var{attr:o,size:f,title:d}=a,h=k5(a,O5),y=f||s.size||"1em",g;return s.className&&(g=s.className),a.className&&(g=(g?g+" ":"")+a.className),Re.createElement("svg",Fo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,o,h,{className:g,style:Wo(Wo({color:a.color||s.color},s.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),d&&Re.createElement("title",null,d),a.children)};return D1!==void 0?Re.createElement(D1.Consumer,null,s=>i(s)):i(Ag)}function Zf(a){return je({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function Jf(a){return je({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function Ff(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Wf(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function If(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function kg(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function L5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function Ng(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function U5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(a)}function H5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function _g(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function Y5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Pf(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function q5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function Dg(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function G5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(a)}function B1(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const X5="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",V5="/instalearn/assets/test-BrOnAr5c.png",Q5="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",K5="/instalearn/assets/Slide1-CH0r16yo.png",Z5="/instalearn/assets/Slide3-B6C07YuO.png",J5="/instalearn/assets/Slide4-BbthJNiF.png",F5="/instalearn/assets/Slide5-BsOulZPi.png",W5="/instalearn/assets/Slide6-8dQDHdn3.png",I5="/instalearn/assets/Slide1-CH0r16yo.png",P5="/instalearn/assets/Slide8-2dBFzKRc.png",e4="/instalearn/assets/Slide9-D8lJXVrP.png",So={},L1={videoClip1:X5},t4={test:V5},us={teacherProfilePic:Q5},Rn={Slide1:K5,Slide3:Z5,Slide4:J5,Slide5:F5,Slide6:W5,Slide7:I5,Slide8:P5,Slide9:e4};function n4(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M294 240s-21.51 16-38 16-38-16-38-16"},child:[]}]})(a)}const a4=b.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,l4=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  @media (max-width: 520px) {
    padding: 10px 12px;
  }
`,i4=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,r4=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,o4=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,s4=b.span`
  font-weight: 600;
  color: #0f172a;
  font-size: 14px;
  @media (max-width: 520px) { font-size: 13px; }
`,c4=b.span`
  font-size: 12px;
  color: #64748b;
`,u4=b.button`
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
`,f4=b.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,d4=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,p4=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 8px 12px;
`,h4=b.div`
  display: flex;
  gap: 10px;
`,wo=b.button`
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
`,m4=b.div`
  padding: 12px;
  display: grid;
  gap: 14px;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  @media (min-width: 520px) {
    padding: 14px 16px;
    gap: 16px;
  }
`,U1=b.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
  @media (min-width: 520px) { padding: 14px; }
`,H1=b.h3`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
`,g4=b.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
  li {
    font-size: 13px;
    color: #0f172a;
    line-height: 1.25;
  }
`,on=b.div`
  height: ${a=>a.h||12}px;
  background: linear-gradient(90deg,#f2f5f9 0%,#eef2f7 50%,#f2f5f9 100%);
  border-radius: 8px;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% { opacity: .8 }
    50% { opacity: .4 }
    100% { opacity: .8 }
  }
`,Y1=b.div`
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
`,q1=b.button`
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`,x4=b.div`
  display: grid;
  gap: 10px;
`,y4=b.p`
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`,v4=b.div`
  display: grid;
  gap: 8px;
`,b4=b.button.withConfig({shouldForwardProp:a=>a!=="$state"})`
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
`,qo=b.small`
  color: #64748b;
  font-size: 12px;
`,S4=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,$g=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,G1=b.button`
  background: #0f172a;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
`,Bg=b.button`
  background: transparent;
  border: 1px solid rgba(15,23,42,.14);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
`;async function w4(a){const s=await(await fetch(a,{mode:"cors"})).blob(),o=s.type||"image/jpeg",f=await s.arrayBuffer(),d=new Uint8Array(f);let h="";for(let g=0;g<d.byteLength;g++)h+=String.fromCharCode(d[g]);return{base64:btoa(h),mime:o}}function j4({title:a,description:i,username:s}){return`
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
- Author: "${s}"
`.trim()}async function E4(a){const{title:i,description:s,username:o,imageUrl:f}=a,d="AIzaSyDYGHcNYuuk43rrYSBVBIQGegzOGVtjGrw",{base64:h,mime:y}=await w4(f),m={contents:[{parts:[{text:j4({title:i,description:s,username:o})},{inline_data:{mime_type:y,data:h}}]}],generationConfig:{temperature:.6,topK:32,topP:.9,maxOutputTokens:1200,response_mime_type:"application/json"}},S="https://generativelanguage.googleapis.com/v1beta",w=["gemini-2.5-flash","gemini-2.0-flash"];let T;for(const M of w)try{const R=`${S}/models/${M}:generateContent?key=${encodeURIComponent(d)}`,N=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!N.ok)throw new Error(`Gemini error (${N.status}): ${await N.text()}`);const B=(await N.json())?.candidates?.[0]?.content?.parts?.[0]?.text;if(!B)throw new Error("Empty response from Gemini");let Y;try{Y=JSON.parse(B)}catch{const L=String(B).replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/```$/i,"").trim();Y=JSON.parse(L)}const G=Array.isArray(Y.bullets)?Y.bullets.slice(0,5):[],K=Array.isArray(Y.mcqs)?Y.mcqs.slice(0,5):[];if(!G.length||!K.length)throw new Error("Malformed AI content");const Z=K.map(L=>({question:String(L.question||"").slice(0,140),options:Array.isArray(L.options)&&L.options.length?L.options.slice(0,5):["Not present"],correctIndex:Number.isInteger(L.correctIndex)?L.correctIndex:0,explanation:L.explanation?String(L.explanation).slice(0,140):void 0}));return{bullets:G,mcqs:Z}}catch(R){T=R}throw T||new Error("Gemini request failed")}function C4({avatarSrc:a=us.teacherProfilePic,title:i,description:s,imgSrc:o,username:f,postUrl:d,onLikeChange:h,onBookmarkChange:y,onShare:g}){const[m,S]=v.useState(!1),[w,T]=v.useState(!1),[M,R]=v.useState(!1),[N,$]=v.useState(!1),[B,Y]=v.useState(null),[G,K]=v.useState(null),[Z,L]=v.useState(0);v.useEffect(()=>{const te=G?.mcqs?.length||0;te!==0&&L(me=>Math.max(0,Math.min(me,te-1)))},[G?.mcqs?.length]);const V=m?"Unlike":"Like",Q=w?"Remove bookmark":"Bookmark",I=()=>{const te=!m;S(te),h&&h(te)},ce=()=>{const te=!w;T(te),y&&y(te)},de=v.useMemo(()=>({title:i,text:`${f} on Infographics — ${i}`,url:d}),[i,f,d]),le=async()=>{try{navigator.share?await navigator.share(de):navigator.clipboard&&de.url&&(await navigator.clipboard.writeText(de.url),alert("Link copied to clipboard")),g&&g(de)}catch(te){console.error("Share failed:",te)}},ie=async()=>{$(!0),Y(null);try{const te=await E4({title:i,description:s,username:f,imageUrl:o});K(te),L(0)}catch(te){console.error(te),Y(te?.message||"Failed to generate content")}finally{$(!1)}},De=()=>{const te=!M;R(te),te&&!G&&!N&&ie()},Be=G?.mcqs?.length||0,_=Be?G.mcqs[Z]:null,J=Z===Be-1,P=()=>L(te=>Math.min(te+1,Be-1));return u.jsxs(a4,{role:"article","aria-label":`${i} instagram-style post`,children:[u.jsxs(l4,{children:[u.jsxs(i4,{children:[u.jsx(r4,{src:a,alt:"avatar"}),u.jsxs(o4,{children:[u.jsx(s4,{children:i}),u.jsx(c4,{children:s})]})]}),u.jsx(u4,{"aria-label":M?"Close learn mode":"Open learn mode",title:M?"Close learn mode":"Learn more & quiz",onClick:De,children:u.jsx(n4,{size:18})})]}),M?u.jsxs(m4,{"aria-live":"polite",children:[u.jsxs(U1,{children:[u.jsx(H1,{children:"Know more (5 quick points)"}),N?u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(on,{}),u.jsx(on,{}),u.jsx(on,{}),u.jsx(on,{}),u.jsx(on,{})]}):B?u.jsxs(Y1,{children:[u.jsx("span",{style:{flex:1,minWidth:0},children:B}),u.jsx(q1,{onClick:ie,"aria-label":"Retry generating content",children:"Retry"})]}):u.jsx(g4,{children:G?.bullets?.map((te,me)=>u.jsx("li",{children:te},me))})]}),u.jsxs(U1,{children:[u.jsxs($g,{children:[u.jsx(H1,{style:{margin:0},children:"Test your knowledge"}),Be?u.jsxs(qo,{children:[Z+1," / ",Be]}):null]}),N?u.jsxs("div",{style:{display:"grid",gap:10},children:[u.jsx(on,{h:16}),u.jsx(on,{h:40}),u.jsx(on,{h:40}),u.jsx(on,{h:40}),u.jsx(on,{h:40})]}):B?u.jsxs(Y1,{children:[u.jsx("span",{style:{flex:1,minWidth:0},children:"Can’t load questions."}),u.jsx(q1,{onClick:ie,children:"Retry"})]}):_?u.jsx(T4,{mcq:_,index:Z+1,total:Be,isLast:J,onNext:J?void 0:P,onFinish:J?()=>R(!1):void 0},Z):null,!N&&!B&&_&&!J?u.jsx("div",{style:{marginTop:6},children:u.jsx(qo,{children:"Tip: You can change your choice before tapping Next."})}):null]}),u.jsxs(S4,{children:[u.jsx(qo,{children:"AI stays within the infographic; short, clear answers only."}),u.jsx(Bg,{onClick:()=>R(!1),"aria-label":"Back to image",title:"Back to image",children:"Back to image"})]})]}):u.jsx(f4,{children:u.jsx(d4,{src:o,alt:i})}),u.jsxs(p4,{children:[u.jsxs(h4,{children:[u.jsx(wo,{onClick:I,"aria-label":V,title:V,children:m?u.jsx(Zf,{size:22}):u.jsx(Jf,{size:22})}),u.jsx(wo,{"aria-label":"Comment",title:"Comment",children:u.jsx(If,{size:20})}),u.jsx(wo,{onClick:le,"aria-label":"Share",title:"Share",children:u.jsx(Pf,{size:20})})]}),u.jsx(wo,{onClick:ce,"aria-label":Q,title:Q,children:w?u.jsx(Ff,{size:20}):u.jsx(Wf,{size:20})})]})]})}function T4({mcq:a,index:i,total:s,isLast:o,onNext:f,onFinish:d}){const[h,y]=v.useState(null),g=m=>h===null?"idle":m===a.correctIndex?"correct":m===h&&h!==a.correctIndex?"wrong":"idle";return u.jsxs(x4,{"aria-label":`Question ${i}`,children:[u.jsxs(y4,{children:[i,". ",a.question]}),u.jsx(v4,{children:a.options.map((m,S)=>u.jsx(b4,{onClick:()=>y(S),$state:g(S),"aria-pressed":h===S,"aria-label":`Option ${S+1}`,children:m},S))}),h!==null&&u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsxs(qo,{children:[h===a.correctIndex?"✅ Correct.":"❌ Not quite.",a.explanation?` — ${a.explanation}`:""]}),o?u.jsxs($g,{children:[u.jsx(G1,{onClick:d,"aria-label":"Finish quiz",children:"Finish"}),u.jsx(Bg,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to top"})]}):u.jsxs(G1,{onClick:f,"aria-label":"Next question",disabled:h===null,children:["Next question (",i+1,"/",s,")"]})]})]})}const z4=b.div``,M4=b.div`
  display: flex;
  overflow-x: auto;
  padding: 24px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,R4=b.button`
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
`,A4=b.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  user-drag: none;
  -webkit-user-drag: none;
  pointer-events: none;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
`,O4=b.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.96);
  backdrop-filter: blur(20px);
  display: grid;
  place-items: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`,k4=b.div`
  position: relative;
  width: 96vw;
  max-width: 1400px;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto auto;
  gap: 10px;
  overflow: hidden;
`,N4=b.div`
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
`,_4=b.div`
  flex: 0 0 100%;
  height: 100%;
  display: grid;
  place-items: center;
  scroll-snap-align: center;
  background: transparent;
`,D4=b.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 15px;
  user-select: none;
  -webkit-user-drag: none;
  cursor: default;
  /* Allow native horizontal + vertical panning to move the Rail */
  touch-action: pan-x pan-y;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease;
`,$4=b.button`
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
`,B4=b.div`
  width: 100%;
  padding: 0 16px 8px;
  display: grid;
  align-items: center;
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,L4=b.input.attrs({type:"range"})`
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
`,U4=b.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 0 16px 16px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,Lg=b.button`
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
`,H4=b.img`
  width: 80px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  transition: opacity 0.2s ease;

  ${Lg}:hover & { opacity: 0.8; }
`,Y4=b.div`
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
`,X1=(a,i,s)=>Math.max(i,Math.min(s,a));function q4({items:a=[],className:i}){const s=v.useRef(null),o=v.useRef(!1),f=v.useRef(0),d=v.useRef(0),h=v.useRef(0),[y,g]=v.useState(!1),[m,S]=v.useState(0),[w,T]=v.useState(!0),M=v.useRef(null),R=v.useRef([]);R.current.length!==a.length&&(R.current=a.map((le,ie)=>R.current[ie]??Re.createRef()));const N=typeof window<"u"&&typeof document<"u";v.useEffect(()=>{if(!N)return;const le=document.body.style.overflow;return y&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=le||""}},[y,N]),v.useEffect(()=>{y&&(R.current[m]?.current?.scrollIntoView({block:"nearest",inline:"center",behavior:"auto"}),T(!0))},[y,m]),v.useEffect(()=>{if(!y||!N)return;const le=ie=>{ie.key==="Escape"&&g(!1),ie.key==="ArrowRight"&&Y(m+1),ie.key==="ArrowLeft"&&Y(m-1),ie.key.toLowerCase()==="h"&&T(De=>!De)};return window.addEventListener("keydown",le),()=>window.removeEventListener("keydown",le)},[y,m,N]);const $=v.useMemo(()=>{if(!M.current)return 0;const le=getComputedStyle(M.current),ie=parseFloat(le.gap)||0;return(M.current.clientWidth||0)+ie},[y]),B=()=>{if(!M.current||$===0)return;const{scrollLeft:le}=M.current,ie=Math.round(le/$),De=X1(ie,0,a.length-1);De!==m&&S(De)},Y=le=>{const ie=X1(le,0,Math.max(0,a.length-1));if(S(ie),!M.current)return;const De=$*ie;M.current.scrollTo({left:De,behavior:"smooth"})},G=le=>{const ie=Number(le.target.value);Y(ie)},Z={"--filled":`${a.length>1?m/(a.length-1)*100:0}%`},L=le=>{if(le.pointerType==="mouse"&&s.current){o.current=!0,h.current=0,f.current=le.clientX,d.current=s.current.scrollLeft||0;try{s.current.setPointerCapture?.(le.pointerId)}catch{console.log("error")}}},V=le=>{if(le.pointerType!=="mouse"||!o.current||!s.current)return;const ie=le.clientX-f.current;h.current=Math.max(h.current,Math.abs(ie)),s.current.scrollLeft=d.current-ie},Q=()=>{o.current=!1},I=6,ce=le=>{h.current>I||(S(le),T(!0),g(!0))},de=le=>{const ie=le.target,Be=(ie.tagName&&ie.tagName.toLowerCase())==="img",_=ie.closest?.('[data-interactive="true"]');Be||_||T(J=>!J)};return!a||a.length===0?null:u.jsxs(z4,{className:i,children:[u.jsx(M4,{ref:s,onPointerDown:L,onPointerMove:V,onPointerUp:Q,onPointerLeave:Q,children:a.map((le,ie)=>u.jsx(R4,{onClick:()=>ce(ie),children:u.jsx(A4,{src:le.imgSrc,alt:le.name??`Item ${ie+1}`,draggable:!1})},le.id??ie))}),y&&u.jsx(O4,{role:"dialog","aria-modal":"true","aria-label":"Image lightbox",children:u.jsxs(k4,{onClick:de,children:[u.jsxs(Y4,{$show:w,children:[m+1," / ",a.length]}),u.jsx($4,{$show:w,onClick:()=>g(!1),"aria-label":"Close","data-interactive":"true",children:u.jsx(G5,{})}),u.jsx(N4,{ref:M,onScroll:B,children:a.map((le,ie)=>u.jsx(_4,{ref:R.current[ie],children:u.jsx(D4,{src:le.imgSrc,alt:le.name??`Image ${ie+1}`})},le.id??ie))}),u.jsx(B4,{$show:w,"data-interactive":"true",children:u.jsx(L4,{min:0,max:Math.max(0,a.length-1),step:1,value:m,onChange:G,style:Z,"aria-label":"Image scrubber"})}),u.jsx(U4,{$show:w,"aria-label":"Thumbnails","data-interactive":"true",children:a.map((le,ie)=>u.jsx(Lg,{$active:ie===m,onClick:()=>Y(ie),"aria-label":`Go to image ${ie+1}`,children:u.jsx(H4,{src:le.imgSrc,alt:le.name??`Thumbnail ${ie+1}`})},le.id??ie))})]})})]})}const G4=Rg`
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
`,X4=b.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,V4=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,Q4=b.div`
  display: flex;
  gap: 12px;
`,K4=b.button`
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
`,jo=b.button`
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
`,Z4=b.div`
  padding: 12px 14px;
`,J4=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,F4=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,W4=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,I4=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,P4=b.span`
  font-weight: 600;
  color: #0f172a;
`,e3=b.div`
  padding: 0 14px 8px 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,t3=b.span`
  font-size: 12px;
  color: #64748b;
`,n3=b.button`
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
`,a3=(a=1)=>({display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",WebkitLineClamp:a});function l3({expanded:a=!1,lines:i=1,children:s,innerRef:o}){const f={fontSize:"13px",color:"#334155",margin:0,whiteSpace:"pre-wrap",...a?{}:a3(i)};return u.jsx("p",{style:f,ref:o,children:s})}function i3({avatarSrc:a=us.teacherProfilePic,data:i,onLikeChange:s,onBookmarkChange:o,onShare:f}){const{title:d="Carousel Title",description:h="",detailedDescription:y="",carouselMetaData:g=[]}=i||{},[m,S]=v.useState(!1),[w,T]=v.useState(!1),[M,R]=v.useState(!1),[N,$]=v.useState(!1),B=v.useRef(null);v.useEffect(()=>{const Q=B.current;if(Q){if(M){$(!0);return}requestAnimationFrame(()=>{if(!Q)return;const I=Q.scrollHeight-Q.clientHeight>1;$(I)})}},[y,M]);const Y=m?"Unlike post":"Like post",G=w?"Remove bookmark":"Bookmark",K=()=>{const Q=!m;S(Q),s&&s(Q)},Z=()=>{const Q=!w;T(Q),o&&o(Q)},L=v.useMemo(()=>({title:d,text:`${d}`,url:typeof window<"u"?window.location.href:""}),[d]),V=async()=>{try{navigator.share?await navigator.share(L):navigator.clipboard&&(await navigator.clipboard.writeText(L.url),alert("Link copied to clipboard")),f&&f(L)}catch(Q){console.error("Share failed:",Q)}};return!g||g.length===0?null:u.jsxs(X4,{role:"article","aria-label":`${d} – Instagram multi-image post`,children:[u.jsxs(Z4,{children:[u.jsxs(J4,{children:[u.jsxs(F4,{children:[u.jsx(W4,{src:a,alt:"avatar"}),u.jsxs(I4,{children:[u.jsx(P4,{children:d}),u.jsx(t3,{children:h})]})]}),u.jsx(K4,{"aria-label":"Post menu",title:"More",children:u.jsx(kg,{size:18})})]}),y?u.jsxs(e3,{children:[u.jsx(l3,{expanded:M,lines:1,innerRef:B,children:y}),(N||M)&&u.jsx(n3,{type:"button","aria-expanded":M,onClick:()=>R(Q=>!Q),children:M?u.jsx(U5,{size:14}):"more"})]}):null]}),u.jsx(G4,{}),u.jsx(q4,{items:g,duration:3e3}),u.jsxs(V4,{children:[u.jsxs(Q4,{children:[u.jsx(jo,{onClick:K,"aria-label":Y,title:Y,children:m?u.jsx(Zf,{size:22}):u.jsx(Jf,{size:22})}),u.jsx(jo,{"aria-label":"Comment",title:"Comment",children:u.jsx(If,{size:20})}),u.jsx(jo,{onClick:V,"aria-label":"Share",title:"Share",children:u.jsx(Pf,{size:20})})]}),u.jsx(jo,{onClick:Z,"aria-label":G,title:G,children:w?u.jsx(Ff,{size:20}):u.jsx(Wf,{size:20})})]})]})}const r3=b.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,o3=b.div`
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
`,s3=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,c3=b.div`
  display: flex;
  gap: 12px;
`,Eo=b.button`
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
`,u3=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,f3=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,d3=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,p3=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,h3=b.span`
  font-weight: 600;
  color: #0f172a;
`,m3=b.span`
  font-size: 12px;
  color: #64748b;
`,g3=b.button`
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
`;function x3({avatarSrc:a=us.teacherProfilePic,data:i,likedDefault:s=!1,savedDefault:o=!1,onLikeChange:f,onBookmarkChange:d,onShare:h}){const y=i?.videoClipSrc||i?.vedioClipSrc,{title:g,description:m,poster:S}=i||{},[w,T]=v.useState(s),[M,R]=v.useState(o),N=w?"Unlike post":"Like post",$=M?"Remove bookmark":"Bookmark",B=v.useRef(null),Y=()=>{const Z=!w;T(Z),f&&f(Z)},G=()=>{const Z=!M;R(Z),d&&d(Z)},K=async()=>{const Z={title:g||"Check this video",text:m||"",url:typeof window<"u"&&window.location?.href||(i?.url??"")};try{typeof navigator<"u"&&navigator.share?await navigator.share(Z):typeof navigator<"u"&&navigator.clipboard&&Z.url&&(await navigator.clipboard.writeText(Z.url),alert("Link copied to clipboard")),h&&h(Z)}catch(L){console.log(L)}};return v.useEffect(()=>{const Z=B.current;if(!Z)return;(async()=>{try{await Z.play()}catch{}})()},[y]),y?u.jsxs(r3,{"aria-label":"Video post",children:[u.jsxs(u3,{children:[u.jsxs(f3,{children:[u.jsx(d3,{src:a,alt:"Author avatar"}),u.jsxs(p3,{children:[u.jsx(h3,{children:g}),u.jsx(m3,{children:m})]})]}),u.jsx(g3,{"aria-label":"Post menu",title:"More options",children:u.jsx(kg,{size:18})})]}),u.jsx(o3,{children:u.jsx("video",{ref:B,src:y,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:S,"aria-label":g||"Video clip"})}),u.jsxs(s3,{children:[u.jsxs(c3,{children:[u.jsx(Eo,{onClick:Y,"aria-label":N,title:N,children:w?u.jsx(Zf,{size:22}):u.jsx(Jf,{size:22})}),u.jsx(Eo,{"aria-label":"Comment",title:"Comment",children:u.jsx(If,{size:20})}),u.jsx(Eo,{onClick:K,"aria-label":"Share",title:"Share",children:u.jsx(Pf,{size:20})})]}),u.jsx(Eo,{onClick:G,"aria-label":$,title:$,children:M?u.jsx(Ff,{size:20}):u.jsx(Wf,{size:20})})]})]}):null}const y3=[{id:1,name:"Sense of Collective Identity",img:So.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[t4.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:So.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:So.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:So.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function v3(a){return je({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function b3({isOpen:a,activeIndex:i,setActiveIndex:s,total:o,onClose:f,duration:d=3e3}){const h=v.useRef(Date.now()),y=v.useRef(),g=v.useRef(0),m=v.useCallback(()=>{const w=Date.now()-h.current,T=Math.min(1,w/d);g.current=T,T>=1?i<o-1?s(M=>M+1):f():y.current=requestAnimationFrame(m)},[i,o,d,f,s]);return v.useEffect(()=>{if(a)return h.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,i,m]),{resetTimer:v.useCallback(()=>{h.current=Date.now()},[]),getProgressValue:()=>g.current}}const S3=b.div`
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
`,w3=b.div`
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
`,j3=b.div`
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
`,E3=b.div`
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
`,C3=b.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 2.5px;
  }
`,T3=b.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,z3=b.div`
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
`,M3=b.img`
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
`,R3=b.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,A3=b.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,O3=b.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`,k3=b.button`
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
`,N3=b.img`
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
`,V1=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 10;
  touch-action: manipulation;

  ${a=>a.$side==="left"?$n`
          left: 0;
          width: 33.3333%;
        `:$n`
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
`;function _3({currentItem:a,isOpen:i,slideIndex:s,setSlideIndex:o,onClose:f,duration:d=3e3}){const h=a?.slides?.length||0,{resetTimer:y,getProgressValue:g}=b3({isOpen:i,activeIndex:s,setActiveIndex:o,total:h,onClose:f,duration:d}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,S]=v.useState(0);v.useEffect(()=>{if(!i||m)return;let R;const N=()=>{S($=>$+1),R=requestAnimationFrame(N)};return R=requestAnimationFrame(N),()=>cancelAnimationFrame(R)},[i,m]);const w=v.useCallback(()=>{a&&(s<h-1?(o(R=>R+1),y()):f())},[a,s,h,y,f,o]),T=v.useCallback(()=>{a&&(s>0?(o(R=>R-1),y()):f())},[a,s,y,f,o]);v.useEffect(()=>{const R=N=>{i&&(N.key==="Escape"&&f(),N.key==="ArrowRight"&&w(),N.key==="ArrowLeft"&&T())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[i,w,T,f]),v.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const M=R=>R<s?1:R>s?0:g();return!i||!a?null:u.jsx(S3,{onClick:f,"aria-label":"Story overlay",children:u.jsx(w3,{onClick:R=>R.stopPropagation(),children:u.jsxs(j3,{children:[u.jsx(E3,{"aria-label":"Story progress",children:a.slides.map((R,N)=>u.jsx(C3,{"aria-label":`Progress track ${N+1}`,children:u.jsx(T3,{style:{width:`${M(N)*100}%`}})},N))}),u.jsxs(z3,{children:[u.jsx(M3,{src:a.img,alt:a.name}),u.jsxs(R3,{children:[u.jsx(A3,{children:a.name}),u.jsx(O3,{children:"Chapter highlight"})]}),u.jsx(k3,{"aria-label":"Close story",onClick:f,title:"Close",children:u.jsx(v3,{})})]}),a.slides.map((R,N)=>u.jsx(N3,{src:R,alt:`Slide ${N+1}`,$active:N===s,draggable:!1},N)),u.jsx(V1,{$side:"left",onClick:T,"aria-label":"Previous slide"}),u.jsx(V1,{$side:"right",onClick:w,"aria-label":"Next slide"})]})})})}const D3=b.div``,$3=b.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,B3=b.div`
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
`,L3=b.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,U3=b.div`
  padding: 2px;
  border-radius: 999px;
  ${a=>a.$hasNew?$n`
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
        `:$n`
          background: transparent;
        `};
`,H3=b.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,Y3=b.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,q3=b.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function G3({items:a,duration:i=3e3,onOpen:s,onClose:o,className:f}){const d=v.useRef(null),h=v.useRef(!1),y=v.useRef(0),g=v.useRef(0),[m,S]=v.useState(a||[]),[w,T]=v.useState(null),[M,R]=v.useState(0),N=m.find(L=>L.id===w)||null,$=!!w,B=L=>{R(0),T(L),S(V=>V.map(Q=>Q.id===L?{...Q,hasNew:!1}:Q)),s&&s(L)},Y=()=>{T(null),o&&o()},G=L=>{h.current=!0,y.current=L.clientX,g.current=d.current?.scrollLeft||0,L.target.setPointerCapture?.(L.pointerId)},K=L=>{if(!h.current||!d.current)return;const V=L.clientX-y.current;d.current.scrollLeft=g.current-V},Z=()=>{h.current=!1};return u.jsxs(D3,{className:f,children:[u.jsx($3,{children:u.jsx(B3,{ref:d,onPointerDown:G,onPointerMove:K,onPointerUp:Z,onPointerLeave:Z,"aria-label":"Stories scroller",children:m.map(L=>u.jsxs(L3,{onClick:()=>B(L.id),"aria-label":`Open story ${L.name}`,title:L.name,children:[u.jsx(U3,{$hasNew:L.hasNew,children:u.jsx(H3,{children:u.jsx(Y3,{src:L.img,alt:L.name,draggable:!1})})}),u.jsx(q3,{children:L.name})]},L.id))})}),u.jsx(_3,{currentItem:N,isOpen:$,slideIndex:M,setSlideIndex:R,onClose:Y,duration:i})]})}const X3=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",detailedDescription:"Collective identity is the shared sense of belonging among individuals who associate themselves with a larger group or community. It is shaped by shared language, culture, traditions, and values that connect people to a collective purpose. Understanding this helps explain how societies maintain unity and continuity over time.",imgSrc:Rn.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",detailedDescription:"This section examines how collective identity emerges from shared experiences, beliefs, and cultural narratives. It plays a crucial role in fostering social solidarity, promoting cooperation, and helping individuals find meaning through group affiliation. The concept is central to understanding social movements, nationalism, and cultural preservation.",carouselMetaData:[{Id:1,type:"img",imgSrc:Rn.Slide3},{Id:2,type:"img",imgSrc:Rn.Slide4},{Id:3,type:"img",imgSrc:Rn.Slide5},{Id:4,type:"img",imgSrc:Rn.Slide6}]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",detailedDescription:"Symbols such as national flags, anthems, and cultural rituals embody the essence of collective identity. These shared symbols reinforce emotional ties, transmit values, and sustain collective memory. Festivals and traditions not only celebrate heritage but also help younger generations internalize the sense of belonging to a larger community.",carouselMetaData:[{imgId:1,type:"img",imgSrc:Rn.Slide7},{imgId:2,type:"img",imgSrc:Rn.Slide8},{imgId:3,type:"img",imgSrc:Rn.Slide9}]},{id:5,type:"videoClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",detailedDescription:"This video highlights real-world scenarios where collective identity has influenced social and political movements. From grassroots environmental campaigns to national independence struggles, it shows how shared beliefs and unity can drive change, empower communities, and redefine social narratives.",videoClipSrc:L1.videoClip1},{id:6,type:"infografic",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities. This infographic explores how globalization, migration, and technology continuously reshape how groups define themselves and relate to others in an interconnected world.",imgSrc:Rn.Slide5},{id:7,type:"videoClip",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities. This infographic explores how globalization, migration, and technology continuously reshape how groups define themselves and relate to others in an interconnected world.",videoClipSrc:L1.videoClip1}],V3=b.div`
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
`;function Q3(){return v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),u.jsxs(u.Fragment,{children:[u.jsx(G3,{items:y3,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),u.jsx(V3,{children:u.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:X3.map(a=>u.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?u.jsx(C4,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?u.jsx(i3,{data:a}):a.type==="videoClip"?u.jsx(x3,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z3=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,o)=>o?o.toUpperCase():s.toLowerCase()),Q1=a=>{const i=Z3(a);return i.charAt(0).toUpperCase()+i.slice(1)},Ug=(...a)=>a.filter((i,s,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===s).join(" ").trim(),J3=a=>{for(const i in a)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=v.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:f="",children:d,iconNode:h,...y},g)=>v.createElement("svg",{ref:g,...F3,width:i,height:i,stroke:a,strokeWidth:o?Number(s)*24/Number(i):s,className:Ug("lucide",f),...!d&&!J3(y)&&{"aria-hidden":"true"},...y},[...h.map(([m,S])=>v.createElement(m,S)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(a,i)=>{const s=v.forwardRef(({className:o,...f},d)=>v.createElement(W3,{ref:d,iconNode:i,className:Ug(`lucide-${K3(Q1(a))}`,`lucide-${a}`,o),...f}));return s.displayName=Q1(a),s};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],P3=dt("arrow-right",I3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],t6=dt("atom",e6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Io=dt("book-open",n6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],l6=dt("bookmark",a6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],r6=dt("calculator",i6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],s6=dt("check",o6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Hg=dt("chevron-right",c6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],f6=dt("code",u6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],K1=dt("flask-conical",d6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],h6=dt("graduation-cap",p6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Z1=dt("globe",m6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],x6=dt("grid-3x3",g6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],v6=dt("languages",y6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Co=dt("lock",b6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],w6=dt("user",S6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gu=dt("x",j6),E6=b.div`
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
`,C6=b.div`
  height: 88px;
  width: 88px;
  border-radius: 50%;
  background: #f8f9fa;
  border: 1px solid #e5e7eb;
  display: grid;
  place-items: center;
  margin: 0 auto;
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
`,T6=b.div`
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
`,z6=b.h1`
  margin: 0;
  font-size: clamp(22px, 6vw, 28px);
  font-weight: 500;
  color: #1f2937;
  letter-spacing: -0.02em;
  font-family: "";
`,M6=b.p`
  margin: 6px 0 0 0;
  color: #6b7280;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
`,R6=b.button`
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
`;function A6({onStart:a}){return u.jsxs(E6,{children:[u.jsx(C6,{children:u.jsx(h6,{size:40,color:"#1f2937"})}),u.jsxs(T6,{children:[u.jsx(z6,{children:"Welcome to Instalearn"}),u.jsx(M6,{children:"Your personalized learning journey starts here. Connect with expert teachers and unlock your full potential."})]}),u.jsxs(R6,{onClick:a,"aria-label":"Get started",children:["Get Started ",u.jsx(P3,{size:18})]})]})}const O6=b.div`
padding: 35px;
`,k6=b.div`
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
`,N6=b.h2`
  margin: 0 0 8px 0;
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 900;
  background: #374151;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,_6=b.p`
  margin: 0;
  color: #64748b;
  font-size: 15px;
  font-weight: 500;
`,D6=b.div`
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
`,$6=b.div`
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
`,B6=b.div`
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
`,L6=b.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,U6=b.li`
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
`,J1=b.li`
  height: ${a=>a.$height};
`,H6=b.div`
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
  padding-top: 8px;
  animation: fadeUp 0.6s ease 0.4s both;
`,Yg=b.button`
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
`,Y6=b(Yg)`
  border: 2px solid #e2e8f0;
  background: #ffffff;
  color: #475569;

  &:hover:not(:disabled) {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
`,q6=b(Yg)`
border: 2px solid #e2e8f0;
  background: #ffffff;
  color: #475569;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover:not(:disabled) {
    background: #dfdede;
  }
`;function G6({options:a,value:i,onChange:s}){const f=Re.useRef(null),d=Re.useRef(!1),h=Re.useRef(null),y=()=>{if(!f.current)return;d.current=!0,h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{d.current=!1},150);const S=f.current.clientHeight/2-48/2,w=Math.max(0,f.current.scrollTop-S),T=Math.round(w/48),M=Math.min(a.length-1,Math.max(0,T)),R=a[M];R!==i&&s(R)},g=S=>{if(d.current)return;const w=a.indexOf(S);if(w===-1)return;const T=f.current.clientHeight/2-48/2;f.current.scrollTo({top:T+w*48,behavior:"smooth"}),s(S)},m={height:`calc(50% - ${48/2}px)`};return u.jsx(D6,{children:u.jsxs($6,{ref:f,onScroll:y,role:"listbox","aria-label":"Grade",tabIndex:0,children:[u.jsx(B6,{}),u.jsxs(L6,{children:[u.jsx(J1,{$height:m.height}),a.map((S,w)=>u.jsx(U6,{$height:48,$delay:`${w*.02}s`,$isSelected:S===i,role:"option","aria-selected":S===i,onClick:()=>g(S),children:S},S)),u.jsx(J1,{$height:m.height})]})]})})}function X6({grades:a,selectedGrade:i,onSelect:s,onBack:o,onNext:f}){const d=Object.keys(a);return Re.useEffect(()=>{!i&&d.length>0&&s(d[0])},[i,d,s]),u.jsxs(O6,{children:[u.jsxs(k6,{children:[u.jsx(N6,{children:"Choose your Grade"}),u.jsx(_6,{children:"Swipe or tap to select a grade."})]}),u.jsx(G6,{options:d,value:i||d[0],onChange:s}),u.jsxs(H6,{children:[u.jsx(Y6,{onClick:o,children:"Back"}),u.jsx(q6,{onClick:f,disabled:!i,children:"Continue"})]})]})}const V6={English:Io,Mathematics:r6,Science:K1,Physics:t6,Chemistry:K1,Biology:Z1,"Social Studies":Z1,Hindi:v6,"Computer Science":f6},Q6=b.div``,K6=b.div`
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
`,Z6=b.h2`
  margin: 0 0 6px 0;
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 900;
  color: #1f2937;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,J6=b.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,F6=b.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
`,W6=b.button`
  text-align: left;
  border-radius: 12px;
  padding: 12px;
  background: ${a=>a.$isSelected?"#f3f4f6":"#ffffff"};
  border: 2px solid ${a=>(a.$isSelected,"#e5e7eb")};
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
    border-color: ${a=>(a.$isSelected,"#d1d5db")};
    background: ${a=>a.$isSelected?"#f3f4f6":"#f9fafb"};
  }

  &:active {
    transform: scale(0.99);
  }
`,I6=b.div`
  display: grid;
  gap: 6px;
`,P6=b.span`
  font-weight: 800;
  letter-spacing: -0.01em;
  font-size: 16px;
  color: #1f2937;
`,e8=b.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #f6f7f9;
  border: 1px solid #e5e7eb;
  display: grid;
  place-items: center;
  color: #374151;
`,t8=b.div`
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 12px;
  padding-top: 6px;
`,qg=b.button`
  padding: 12px 14px;
  border-radius: 12px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease;

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,n8=b(qg)`
  border: 2px solid #e5e7eb;
  background: #ffffff;
  color: #1f2937;

  &:hover:not(:disabled) {
    background: #f9fafb;
  }
`,a8=b(qg)`
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
`;function l8({grades:a,selectedGrade:i,selectedSubject:s,onSelectSubject:o,onBack:f,onNext:d}){const h=i?Object.keys(a[i].subjects):[];return u.jsxs(Q6,{children:[u.jsxs(K6,{children:[u.jsx(Z6,{children:"Pick a Subject"}),u.jsx(J6,{children:i?`You chose ${i}. Now select a subject.`:"Choose a grade first."})]}),u.jsx(F6,{children:h.map((y,g)=>{const m=V6[y]||Io,S=s===y;return u.jsxs(W6,{$isSelected:S,$delay:`${g*.03}s`,"aria-pressed":S,onClick:()=>o(y),children:[u.jsx(I6,{children:u.jsx(P6,{children:y})}),u.jsx(e8,{children:u.jsx(m,{size:18})})]},y)})}),u.jsxs(t8,{children:[u.jsx(n8,{onClick:f,children:"Back"}),u.jsxs(a8,{onClick:d,disabled:!s,children:["Continue ",u.jsx(Hg,{size:18})]})]})]})}const i8=b.div``,r8=b.div`
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
`,o8=b.h2`
  margin: 0 0 6px 0;
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 900;
  color: #1f2937;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,s8=b.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,c8=b.div`
  display: grid;
  gap: 10px;
`,u8=b.button`
  text-align: left;
  padding: 12px;
  border-radius: 10px;
  background: ${a=>a.$isSelected?"#f3f4f6":"#ffffff"};
  border: 2px solid ${a=>a.$isSelected?"#4b5563":"#e5e7eb"};
  cursor: pointer;
  font-weight: 700;
  color: #1f2937;
  transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.2s ease, background 0.2s ease;
  animation: fadeUp 0.5s ease;
  animation-delay: ${a=>a.$delay};
  animation-fill-mode: both;
  display: flex;
  align-items: center;
  gap: 10px;

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
`,f8=b.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${a=>a.$isSelected?"#4b5563":"#e5e7eb"};
  display: grid;
  place-items: center;
  color: ${a=>a.$isSelected?"#ffffff":"#6b7280"};
  transition: all 0.2s ease;
`,d8=b.span`
  flex: 1;
`,p8=b.div`
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 12px;
  padding-top: 6px;
`,Gg=b.button`
  padding: 12px 14px;
  border-radius: 12px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease;

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,h8=b(Gg)`
  border: 2px solid #e5e7eb;
  background: #ffffff;
  color: #1f2937;

  &:hover:not(:disabled) {
    background: #f9fafb;
  }
`,m8=b(Gg)`
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
`;function g8({grades:a,selectedGrade:i,selectedSubject:s,selectedTeacher:o,onSelectTeacher:f,onBack:d,onConfirm:h}){const y=i&&s?a[i].subjects[s]:[];return u.jsxs(i8,{children:[u.jsxs(r8,{children:[u.jsx(o8,{children:"Choose a Teacher"}),u.jsx(s8,{children:s?`Subject: ${s}`:"Pick a subject first."})]}),u.jsx(c8,{children:y.map((g,m)=>{const S=o===g;return u.jsxs(u8,{$isSelected:S,$delay:`${m*.03}s`,"aria-pressed":S,onClick:()=>f(g),children:[u.jsx(f8,{$isSelected:S,children:u.jsx(w6,{size:16})}),u.jsx(d8,{children:g})]},g)})}),u.jsxs(p8,{children:[u.jsx(h8,{onClick:d,children:"Back"}),u.jsxs(m8,{onClick:h,disabled:!o,children:["Continue ",u.jsx(Hg,{size:18})]})]})]})}const en={bg:"#ffffff",text:"#0f172a",subtext:"#475569",border:"#e5e7eb",card:"#ffffff",soft:"#f3f4f6",soft2:"#f8fafc",focus:"#d1d5db",btn:"#e5e7eb",btnText:"#0f172a"},x8=Rg`
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
`,y8=Zt`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`,v8=Zt`
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: translateX(0); }
`,b8=Zt`
  0% { transform: scale(.96); }
  100% { transform: scale(1); }
`,S8=b.div`
  min-height: 90svh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: ${en.bg};
  animation: ${y8} 0.42s ease-out both;
`,w8=b.div`
  width: 100%;
  max-width: 720px;
`,j8=b.div`
  background: ${en.card};
  border: 1px solid ${en.border};
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.05);
  transition: transform .12s ease;
  animation: ${b8} .18s ease-out both;
`,E8=b.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 12px;
  animation: ${v8} 0.4s ease-out both;
`,C8=b.div`
  height: 8px;
  width: 12px;
  border-radius: 999px;
  background: ${en.border};
  transition: width 180ms, background-color 180ms;

  ${({active:a})=>a&&$n`
      width: 32px;
      background: ${en.focus};
    `}
`;function T8(){const a=ns(),[i,s]=v.useState(0),[o,f]=v.useState(""),[d,h]=v.useState(""),[y,g]=v.useState(""),m={"Grade 9":{subjects:{English:["Ms. Priya Sharma","Mr. Vivek Sinha","Ms. Ritu Malhotra"],Mathematics:["Mr. Rajesh Kumar","Ms. Neha Gupta","Mr. Ankit Jain"],Science:["Ms. Anjali Mehta","Mr. Suresh Iyer","Ms. Pooja Khanna"],"Social Studies":["Siddharth Sir","Ms. Ananya Bose","Mr. Harish Nanda"],Hindi:["Ms. Kavita Reddy","Mr. Manoj Tiwari","Ms. Pooja Khanna"],"Computer Science":["Mr. Arvind Nair","Ms. Shruti Desai","Mr. Kunal Shah"]}},"Grade 10":{subjects:{English:["Ms. Sunita Verma","Mr. Ashish Bhatia","Ms. Riya Kapoor"],Mathematics:["Mr. Rohan Patel","Ms. Priyanka Das","Mr. Sanjay Kulkarni"],Science:["Ms. Anjali Mehta","Mr. Amit Chakraborty","Ms. Meera Nambiar"],"Social Studies":["Siddharth Sir","Ms. Nidhi Arora","Mr. Parth Ghosh"],Hindi:["Ms. Kavita Reddy","Mr. Ajay Sharma","Ms. Shalini Tripathi"],"Computer Science":["Mr. Arvind Nair","Ms. Tanvi Kulkarni","Mr. Rohit Menon"]}},"Grade 11":{subjects:{English:["Ms. Priya Sharma","Mr. Karan Malhotra","Ms. Deepa Rao"],Physics:["Mr. Nitin Agarwal","Ms. Rachna Bansal","Mr. Vivek Mishra"],Chemistry:["Ms. Sneha Kapoor","Mr. Aditya Mehta","Ms. Nupur Jain"],Biology:["Siddharth Sir","Ms. Radhika Sen","Mr. Mohan Pillai"],Mathematics:["Mr. Deepak Rao","Ms. Shreya Iyer","Mr. Varun Sethi"],"Computer Science":["Mr. Arvind Nair","Ms. Naina Khatri","Mr. Prateek Verma"]}},"Grade 12":{subjects:{English:["Ms. Sunita Verma","Mr. Aalok Trivedi","Ms. Garima Singh"],Physics:["Mr. Nitin Agarwal","Ms. Priti Saxena","Mr. Keshav Reddy"],Chemistry:["Ms. Sneha Kapoor","Mr. Rohan Mukherjee","Ms. Farah Qureshi"],Biology:["Siddharth Sir","Ms. Neelam Vaidya","Mr. Sameer Kulkarni"],Mathematics:["Mr. Deepak Rao","Ms. Ishita Shah","Mr. Yashwant Kumar"],"Computer Science":["Mr. Arvind Nair","Ms. Pallavi Menon","Mr. Siddharth Jain"]}}},S=w=>{!o||!d||!w||a("/instalearn/teacher",{state:{grade:o,subject:d,teacher:w}})};return u.jsxs(u.Fragment,{children:[u.jsx(x8,{}),u.jsx(S8,{children:u.jsx(w8,{children:u.jsxs(j8,{children:[u.jsx(E8,{children:[1,2,3].map(w=>u.jsx(C8,{active:i===w},w))}),i===0&&u.jsx(A6,{onStart:()=>s(1),ui:en}),i===1&&u.jsx(X6,{ui:en,grades:m,selectedGrade:o,onSelect:w=>{f(w),h(""),g("")},onBack:()=>s(0),onNext:()=>o&&s(2)}),i===2&&u.jsx(l8,{ui:en,grades:m,selectedGrade:o,selectedSubject:d,onSelectSubject:w=>{h(w),g("")},onBack:()=>s(1),onNext:()=>d&&s(3)}),i===3&&u.jsx(g8,{ui:en,grades:m,selectedGrade:o,selectedSubject:d,selectedTeacher:y,onSelectTeacher:g,onBack:()=>s(2),onConfirm:()=>S(y||(o&&d?m[o].subjects[d][0]:""))})]})})})]})}function Xu(a){return je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(a)}function Go(a){return je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function Qi(a){return je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function z8(a){return je({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function Xg(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function F1(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(a)}function W1(a){return je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function M8(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(a)}function I1(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function P1(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(a)}function em(a){return je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(a)}function To(a){return je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function zo(a){return je({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function tm(a){return je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const Vg={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:us.teacherProfilePic,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},nm=Vg,am="studentProfile",R8=`joined:${nm?.id||nm?.name}`,Yl=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,A8=Zt`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`,Qg=Zt`from{opacity:0}to{opacity:1}`,O8=Zt`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.98); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`,Kg=Zt`0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}`,ee={bgSecondary:"#FFFFFF",card:"#FFFFFF",text:"#0F172A",subtext:"#64748B",primary:"#0EA5E9",accent:"#06B6D4",accentGreen:"#10B981",border:"#E2E8F0",borderLight:"#CBD5E1",shadow:"0 10px 24px rgba(0,0,0,.06)",overlay:"rgba(15,23,42,.5)"},k8=b.div`
  min-height: 100vh;
  padding: 16px;
  background: ${a=>a.$theme==="dark"?"linear-gradient(135deg, #0f172a 0%, #0b3a2a 50%, #0b3a2a 100%)":"linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%)"};
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -60%;
    left: -60%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle at 20% 50%,
        rgba(14, 165, 233, 0.08) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(16, 185, 129, 0.08) 0%,
        transparent 50%
      );
    animation: ${Yl?"none":Kg} 18s ease-in-out infinite;
    pointer-events: none;
  }

  @media (min-width: 640px) {
    padding: 24px 20px;
  }
`,N8=b.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  animation: ${Yl?"none":A8} 0.6s
    cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 1;
`,Ki=b.div`
  background: ${ee.card};
  border: 1px solid ${ee.border};
  border-radius: 18px;
  box-shadow: ${ee.shadow};
  backdrop-filter: blur(8px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (min-width: 640px) {
    border-radius: 22px;
  }
`,lm=b.div`
  position: fixed;
  inset: 0;
  background: ${ee.overlay};
  backdrop-filter: blur(2px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Yl?"none":Qg} 0.15s ease-out;
`,im=b.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${ee.bgSecondary};
  border-radius: 16px;
  padding: 20px;
  width: 92%;
  max-width: 480px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.18);
  animation: ${Yl?"none":O8} 0.2s
    cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  @media (min-width: 640px) {
    padding: 24px;
    border-radius: 20px;
  }
`,rm=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,om=b.h2`
  font-size: clamp(18px, 2.6vw, 22px);
  font-weight: 800;
  color: ${ee.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`,sm=b.button`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${ee.border};
  background: ${ee.card};
  color: ${ee.subtext};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  &:active {
    transform: scale(0.98);
  }
`,fa=b.div`
  margin-bottom: 14px;
`,da=b.label`
  display: block;
  font-weight: 600;
  color: ${ee.text};
  margin-bottom: 6px;
  font-size: clamp(12px, 2.5vw, 14px);
`,Cl=b.input`
  width: 100%;
  padding: 12px 14px;
  border: 2px solid ${ee.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${ee.text};
  background: ${ee.bgSecondary};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  &:focus {
    outline: none;
    border-color: ${ee.primary};
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.12);
  }
`,cm=b.select`
  width: 100%;
  padding: 12px 14px;
  border: 2px solid ${ee.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${ee.text};
  background: ${ee.bgSecondary};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  &:focus {
    outline: none;
    border-color: ${ee.primary};
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.12);
  }
`,um=b.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`,Mo=b.button`
  flex: 1;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    border-color 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  touch-action: manipulation;

  ${a=>a.primary?`
    background:linear-gradient(135deg, ${ee.primary}, ${ee.accent});
    color:#fff;
    box-shadow:0 4px 10px rgba(14,165,233,.25);
    &:active{ transform: translateY(1px); }
  `:`
    background:${ee.card};
    color:${ee.text};
    border:2px solid ${ee.border};
    &:active{ transform: translateY(1px); }
  `}
`,_8=b(Ki)`
  padding: 16px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, ${ee.bgSecondary} 0%, #f8fafc 100%);
  border: 1px solid ${ee.borderLight};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${ee.primary}, ${ee.accentGreen});
  }

  @media (min-width: 640px) {
    padding: 28px 20px;
    margin-bottom: 20px;
  }
`,D8=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: auto 1fr;
    gap: 24px;
    align-items: start;
  }
`,$8=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,B8=b.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${ee.primary}, ${ee.accentGreen});
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 32px;
  font-weight: 900;
  box-shadow: 0 6px 18px rgba(14, 165, 233, 0.25);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg, ${ee.primary}, ${ee.accentGreen});
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.35;
  }

  @media (min-width: 640px) {
    width: 100px;
    height: 100px;
    font-size: 36px;
  }
`,L8=b.div`
  display: grid;
  gap: 16px;
`,U8=b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  @media (max-width: 639px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`,H8=b.div`
  display: grid;
  gap: 6px;
`,Y8=b.h1`
  font-size: clamp(18px, 5.3vw, 28px);
  font-weight: 800;
  color: ${ee.text};
  margin: 0;
  letter-spacing: -0.3px;
`,q8=b.p`
  color: ${ee.subtext};
  margin: 0;
  font-size: clamp(12px, 3.5vw, 15px);
  font-weight: 500;
  word-break: break-word;
`,G8=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media (min-width: 640px) {
    justify-content: flex-end;
    width: auto;
  }
`,fm=b.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border: 2px solid ${ee.border};
  background: ${ee.bgSecondary};
  color: ${ee.text};
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: background 0.15s ease, border-color 0.15s ease,
    transform 0.1s ease;
  min-height: 40px;
  touch-action: manipulation;
  width: 100%;

  &:active {
    transform: translateY(1px);
  }

  @media (min-width: 640px) {
    width: auto;
  }
`,X8=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
`,Vu=b.div`
  background: linear-gradient(135deg, #fff, #f8fafc);
  border: 2px solid ${ee.border};
  border-radius: 14px;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
`,Qu=b.div`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, ${ee.primary}, ${ee.accentGreen});
  color: #fff;
  font-size: 20px;
  box-shadow: 0 6px 12px rgba(14, 165, 233, 0.22);
`,Ku=b.div`
  display: grid;
  gap: 2px;
  flex: 1;
`,Zu=b.span`
  font-weight: 800;
  font-size: clamp(18px, 5vw, 24px);
  color: ${ee.text};
  line-height: 1;
`,Ju=b.span`
  font-size: clamp(12px, 3.6vw, 13px);
  color: ${ee.subtext};
  font-weight: 500;
`,Fu=b.div`
  color: #f59e0b;
  font-size: 18px;
`,V8=b.div`
  position: sticky;
  top: 0;
  z-index: 5;
  background: transparent;
  padding-top: 4px;
  margin: 12px 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @supports (backdrop-filter: blur(6px)) {
    backdrop-filter: blur(6px);
  }

  @media (min-width: 640px) {
    position: static;
    backdrop-filter: none;
    margin: 16px 0;
    gap: 12px;
  }
`,dm=b.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  border: 2px solid ${a=>a.$active?ee.primary:ee.border};
  background: ${a=>a.$active?`linear-gradient(135deg, ${ee.primary}, ${ee.accent})`:ee.card};
  color: ${a=>a.$active?"#fff":ee.subtext};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.1s ease, border-color 0.15s ease;
  min-height: 42px;
  &:active {
    transform: translateY(1px);
  }
`,pm=b(Ki)`
  padding: 16px;
  animation: ${Yl?"none":Qg} 0.3s ease-out;
`,Q8=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: auto 1fr auto;
    gap: 12px;
    align-items: center;
  }
`,K8=b.div`
  padding: 12px;
  border-radius: 14px;
  border: 2px solid ${ee.border};
  background: ${ee.bgSecondary};
  transition: background 0.15s ease, border-color 0.15s ease,
    transform 0.1s ease;
  cursor: pointer;

  &:active {
    transform: translateY(1px);
  }

  & + & {
    margin-top: 10px;
  }
`,Z8=b.div`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: linear-gradient(135deg, ${ee.primary}, ${ee.accentGreen});
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 22px;
  box-shadow: 0 6px 12px rgba(14, 165, 233, 0.22);
`,J8=b.div`
  display: grid;
  gap: 8px;
`,F8=b.h3`
  margin: 0;
  color: ${ee.text};
  font-size: clamp(15px, 4.6vw, 18px);
  font-weight: 700;
`,W8=b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: ${ee.subtext};
`,Wu=b.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`,I8=b.div`
  width: 100%;
  max-width: 220px;
  height: 8px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid ${ee.border};
`,P8=b.div`
  height: 100%;
  width: ${a=>Math.min(Math.max(a.value,0),100)}%;
  background: linear-gradient(90deg, ${ee.primary}, ${ee.accentGreen});
  border-radius: 999px;
  transition: width 0.3s ease;
`,eS=b(z8)`
  color: ${ee.subtext};
  font-size: 18px;
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`,Ro=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 12px;
  color: ${ee.subtext};
`,Ao=b.div`
  font-size: 60px;
  margin-bottom: 10px;
  opacity: 0.3;
  animation: ${Yl?"none":Kg} 3s ease-in-out infinite;
`,Oo=b.h3`
  color: ${ee.text};
  font-size: clamp(16px, 4.6vw, 20px);
  font-weight: 800;
  margin: 0 0 6px 0;
`,ko=b.p`
  margin: 0;
  font-size: 13px;
  text-align: center;
`,tS=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 12px;
  }
`,nS=b(Ki)`
  padding: 16px;
  display: grid;
  gap: 12px;
  background: ${ee.bgSecondary};
  border: 2px solid ${ee.border};
`,aS=b.div`
  font-weight: 700;
  font-size: clamp(14px, 4.2vw, 16px);
  color: ${ee.text};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  svg {
    color: ${ee.primary};
  }
`,lS=b.div`
  font-size: 12px;
  color: ${ee.subtext};
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
`,iS=b.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`,No=b.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 2px solid ${ee.border};
  background: ${ee.card};
  color: ${ee.text};
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  flex: 1;
  min-height: 40px;
  touch-action: manipulation;
  &:active {
    transform: translateY(1px);
  }
`,rS=v.memo(function({item:i,onKey:s}){return u.jsx(K8,{role:"button",tabIndex:0,onKeyDown:o=>s(o,()=>{}),onClick:()=>{},"aria-label":`Open ${i.title}`,children:u.jsxs(Q8,{children:[u.jsx(Z8,{"aria-hidden":"true",children:i.icon}),u.jsxs(J8,{children:[u.jsx(F8,{children:i.title}),u.jsxs(W8,{children:[u.jsxs(Wu,{children:[u.jsx(Qi,{})," ",i.teacher]}),u.jsxs(Wu,{children:[u.jsx(Xg,{})," ",i.time]}),u.jsxs(Wu,{children:[u.jsx(Go,{})," ",i.progress,"%"]})]}),u.jsx(I8,{"aria-hidden":"true",children:u.jsx(P8,{value:i.progress})})]}),u.jsx(eS,{})]})})});function oS(){const a=ns(),[i,s]=v.useState("history"),[o,f]=v.useState(!1),[d,h]=v.useState(!1),[y,g]=v.useState("light"),[m,S]=v.useState("all"),[w,T]=v.useState(!1),[M,R]=v.useState(null),[N,$]=v.useState(null);v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),v.useEffect(()=>{const Q=localStorage.getItem(R8)==="true";T(Q);const I=localStorage.getItem(am);if(I)try{const ce=JSON.parse(I);R(ce),$(ce)}catch{R(null)}else R(null)},[]);const B=[{id:1,title:"Sense of Collective Identity",teacher:"Mr. Arjun Mehta",time:"2 hours ago",progress:75,icon:u.jsx(Qi,{})},{id:2,title:"Understanding Diversity",teacher:"Ms. Nisha Rao",time:"Yesterday",progress:45,icon:u.jsx(Go,{})},{id:3,title:"Nationalism in India",teacher:"Dr. Kavita Iyer",time:"2 days ago",progress:90,icon:u.jsx(I1,{})},{id:4,title:"Democracy & Rights",teacher:"Prof. R. Menon",time:"1 week ago",progress:100,icon:u.jsx(P1,{})}],Y=[{id:"f1",title:"Globalisation & Indian Economy",by:"Siddharth Sir",reads:12},{id:"f2",title:"Federalism Basics",by:"Anita Ma'am",reads:9},{id:"f3",title:"Judiciary: Structure",by:"R. Sharma",reads:14},{id:"f4",title:"Gender, Religion & Caste",by:"S. Verma",reads:7}],G=()=>{R({...N}),localStorage.setItem(am,JSON.stringify({...N,isPro:w})),f(!1)},K=(Q,I)=>$({...N,[Q]:I}),Z=(Q,I)=>{(Q.key==="Enter"||Q.key===" ")&&(Q.preventDefault(),I())},L=u.jsx(Ki,{style:{padding:16},children:u.jsxs(Ro,{children:[u.jsx(Ao,{children:u.jsx(Xu,{})}),u.jsx(Oo,{children:"You’re not a Pro member yet"}),u.jsx(ko,{children:"Complete Demo Pay on the teacher page to unlock your personalized dashboard."}),u.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginTop:16},children:u.jsx(No,{type:"button",onClick:()=>a("/instalearn/"),children:"Go to Teachers"})})]})}),V=u.jsx(Ki,{style:{padding:16},children:u.jsxs(Ro,{children:[u.jsx(Ao,{children:u.jsx(tm,{})}),u.jsx(Oo,{children:"Complete your profile"}),u.jsx(ko,{children:"We couldn’t find your details. Finish the Demo Pay flow and fill your info to set up your profile."}),u.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginTop:16},children:u.jsx(No,{as:"a",href:"/teacher",children:"Finish Setup"})})]})});return u.jsxs(k8,{$theme:y,children:[u.jsx(N8,{children:w?M?u.jsxs(u.Fragment,{children:[u.jsx(_8,{children:u.jsxs(D8,{children:[u.jsx($8,{children:u.jsx(B8,{"aria-label":"User avatar",children:M.avatar?.trim()||u.jsx(tm,{size:28})})}),u.jsxs(L8,{children:[u.jsxs(U8,{children:[u.jsxs(H8,{children:[u.jsx(Y8,{children:M.name}),u.jsx(q8,{children:M.email})]}),u.jsxs(G8,{children:[u.jsxs(fm,{type:"button","aria-label":"Edit profile",onClick:()=>{$(M),f(!0)},children:[u.jsx(W1,{})," ",u.jsx("span",{children:"Edit"})]}),u.jsxs(fm,{type:"button","aria-label":"Settings",onClick:()=>h(!0),children:[u.jsx(F1,{})," ",u.jsx("span",{children:"Settings"})]})]})]}),u.jsxs(X8,{children:[u.jsxs(Vu,{children:[u.jsx(Qu,{"aria-hidden":"true",children:u.jsx(Go,{})}),u.jsxs(Ku,{children:[u.jsx(Zu,{children:M.booksRead??24}),u.jsx(Ju,{children:"Books Read"})]}),u.jsx(Fu,{title:"Lifetime reads",children:u.jsx(P1,{})})]}),u.jsxs(Vu,{children:[u.jsx(Qu,{"aria-hidden":"true",children:u.jsx(Xg,{})}),u.jsxs(Ku,{children:[u.jsx(Zu,{children:M.hoursSpent??156}),u.jsx(Ju,{children:"Study Hours"})]}),u.jsx(Fu,{title:"Consistent!",children:u.jsx(To,{})})]}),u.jsxs(Vu,{children:[u.jsx(Qu,{"aria-hidden":"true",children:u.jsx(Qi,{})}),u.jsxs(Ku,{children:[u.jsx(Zu,{children:M.favoriteTeacher??"Ms. Sarah"}),u.jsx(Ju,{children:"Favourite Teacher"})]}),u.jsx(Fu,{children:u.jsx(M8,{})})]})]})]})]})}),u.jsxs(V8,{children:[u.jsxs(dm,{$active:i==="history",onClick:()=>s("history"),"aria-pressed":i==="history",children:[u.jsx(I1,{})," History"]}),u.jsxs(dm,{$active:i==="favorites",onClick:()=>s("favorites"),"aria-pressed":i==="favorites",children:[u.jsx(To,{})," Favorites"]})]}),i==="history"?u.jsx(pm,{children:B.length>0?B.map(Q=>u.jsx(rS,{item:Q,onKey:Z},Q.id)):u.jsxs(Ro,{children:[u.jsx(Ao,{children:u.jsx(Xu,{})}),u.jsx(Oo,{children:"No history yet"}),u.jsx(ko,{children:"Start reading to see your progress here."})]})}):u.jsx(pm,{children:Y.length>0?u.jsx(tS,{children:Y.map(Q=>u.jsxs(nS,{children:[u.jsxs(aS,{children:[u.jsx(Xu,{})," ",Q.title]}),u.jsxs(lS,{children:[u.jsxs("span",{children:["By ",Q.by]}),u.jsx("span",{children:"•"}),u.jsxs("span",{children:[Q.reads," reads"]})]}),u.jsxs(iS,{children:[u.jsxs(No,{type:"button",children:[u.jsx(Go,{})," Open"]}),u.jsxs(No,{type:"button",children:[u.jsx(To,{})," Unfavourite"]})]})]},Q.id))}):u.jsxs(Ro,{children:[u.jsx(Ao,{children:u.jsx(To,{})}),u.jsx(Oo,{children:"No favorites yet"}),u.jsx(ko,{children:"Tap the star on a lesson to save it here."})]})})]}):V:L}),o&&M&&u.jsxs(u.Fragment,{children:[u.jsx(lm,{onClick:()=>f(!1)}),u.jsxs(im,{role:"dialog","aria-modal":"true","aria-labelledby":"editProfileTitle",children:[u.jsxs(rm,{children:[u.jsxs(om,{id:"editProfileTitle",children:[u.jsx(W1,{})," Edit Profile"]}),u.jsx(sm,{type:"button",onClick:()=>f(!1),"aria-label":"Close edit profile",children:u.jsx(zo,{})})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"name",children:"Name"}),u.jsx(Cl,{id:"name",value:N?.name||"",onChange:Q=>K("name",Q.target.value)})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"email",children:"Email"}),u.jsx(Cl,{id:"email",type:"email",value:N?.email||"",onChange:Q=>K("email",Q.target.value)})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"avatar",children:"Avatar Initials"}),u.jsx(Cl,{id:"avatar",value:N?.avatar||"",onChange:Q=>K("avatar",Q.target.value)})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"booksRead",children:"Books Read"}),u.jsx(Cl,{id:"booksRead",type:"number",min:0,value:N?.booksRead??24,onChange:Q=>K("booksRead",Number(Q.target.value))})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"hoursSpent",children:"Study Hours"}),u.jsx(Cl,{id:"hoursSpent",type:"number",min:0,value:N?.hoursSpent??156,onChange:Q=>K("hoursSpent",Number(Q.target.value))})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"favTeacher",children:"Favourite Teacher"}),u.jsx(Cl,{id:"favTeacher",value:N?.favoriteTeacher??"Ms. Sarah",onChange:Q=>K("favoriteTeacher",Q.target.value)})]}),u.jsxs(um,{children:[u.jsxs(Mo,{type:"button",onClick:()=>f(!1),children:[u.jsx(zo,{})," Cancel"]}),u.jsxs(Mo,{type:"button",primary:!0,onClick:G,children:[u.jsx(em,{})," Save"]})]})]})]}),d&&u.jsxs(u.Fragment,{children:[u.jsx(lm,{onClick:()=>h(!1)}),u.jsxs(im,{role:"dialog","aria-modal":"true","aria-labelledby":"settingsTitle",children:[u.jsxs(rm,{children:[u.jsxs(om,{id:"settingsTitle",children:[u.jsx(F1,{})," Settings"]}),u.jsx(sm,{type:"button",onClick:()=>h(!1),"aria-label":"Close settings",children:u.jsx(zo,{})})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"theme",children:"Theme"}),u.jsxs(cm,{id:"theme",value:y,onChange:Q=>g(Q.target.value),children:[u.jsx("option",{value:"light",children:"Light"}),u.jsx("option",{value:"dark",children:"Dark"})]})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"notifications",children:"Notifications"}),u.jsxs(cm,{id:"notifications",value:m,onChange:Q=>S(Q.target.value),children:[u.jsx("option",{value:"all",children:"All activity"}),u.jsx("option",{value:"mentions",children:"Mentions only"}),u.jsx("option",{value:"none",children:"None"})]})]}),u.jsxs(um,{children:[u.jsxs(Mo,{type:"button",onClick:()=>h(!1),children:[u.jsx(zo,{})," Close"]}),u.jsxs(Mo,{type:"button",primary:!0,onClick:()=>h(!1),children:[u.jsx(em,{})," Apply"]})]})]})]})]})}const sS=Zt`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,cS=Zt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,uS=Zt`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,fS=Zt`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,dS=b.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,pS=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Iu=b.div`
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
`,hS=b.div`
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
`,mS=b.div`
  margin-bottom: 0px;
  position: relative;
`,gS=b.div`
  font-size: 70px;
  animation: ${uS} 2s infinite;
`,xS=b.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,yS=b.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,vS=b.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,bS=b.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${fS} 3s ease-in-out infinite;
`,SS=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Pu=b.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,ef=b.div`
  font-size:30px;
  margin-bottom: 10px;
`,tf=b.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,wS=b.button`
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
`;function hm(){const[a,i]=v.useState(!1),s=()=>{i(!0),setTimeout(()=>{i(!1)},2e3)};return u.jsxs(dS,{children:[u.jsxs(pS,{children:[u.jsx(Iu,{}),u.jsx(Iu,{}),u.jsx(Iu,{})]}),u.jsxs(hS,{children:[u.jsx(mS,{children:u.jsx(gS,{children:"🚧"})}),u.jsx(xS,{children:"Building Something Amazing"}),u.jsx(yS,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),u.jsx(vS,{children:u.jsx(bS,{})}),u.jsxs(SS,{children:[u.jsxs(Pu,{children:[u.jsx(ef,{children:"⚡"}),u.jsx(tf,{children:"Lightning Fast"})]}),u.jsxs(Pu,{children:[u.jsx(ef,{children:"🎨"}),u.jsx(tf,{children:"Beautiful Design"})]}),u.jsxs(Pu,{children:[u.jsx(ef,{children:"🔒"}),u.jsx(tf,{children:"Secure & Private"})]})]}),u.jsx(wS,{onClick:s,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var nf={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var mm;function jS(){return mm||(mm=1,(function(a){(function(){var i={}.hasOwnProperty;function s(){for(var d="",h=0;h<arguments.length;h++){var y=arguments[h];y&&(d=f(d,o(y)))}return d}function o(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return s.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var h="";for(var y in d)i.call(d,y)&&d[y]&&(h=f(h,y));return h}function f(d,h){return h?d?d+" "+h:d+h:d}a.exports?(s.default=s,a.exports=s):window.classNames=s})()})(nf)),nf.exports}var ES=jS();const lt=Ji(ES);function Af(){return Af=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var o in s)({}).hasOwnProperty.call(s,o)&&(a[o]=s[o])}return a},Af.apply(null,arguments)}function Zg(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)!==-1)continue;s[o]=a[o]}return s}function gm(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function CS(a){var i=TS(a,"string");return typeof i=="symbol"?i:String(i)}function TS(a,i){if(typeof a!="object"||a===null)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var o=s.call(a,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function zS(a,i,s){var o=v.useRef(a!==void 0),f=v.useState(i),d=f[0],h=f[1],y=a!==void 0,g=o.current;return o.current=y,!y&&g&&d!==i&&h(i),[y?a:d,v.useCallback(function(m){for(var S=arguments.length,w=new Array(S>1?S-1:0),T=1;T<S;T++)w[T-1]=arguments[T];s&&s.apply(void 0,[m].concat(w)),h(m)},[s])]}function Jg(a,i){return Object.keys(i).reduce(function(s,o){var f,d=s,h=d[gm(o)],y=d[o],g=Zg(d,[gm(o),o].map(CS)),m=i[o],S=zS(y,h,a[m]),w=S[0],T=S[1];return Af({},g,(f={},f[o]=w,f[m]=T,f))},a)}function Of(a,i){return Of=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,o){return s.__proto__=o,s},Of(a,i)}function MS(a,i){a.prototype=Object.create(i.prototype),a.prototype.constructor=a,Of(a,i)}const RS=["xxl","xl","lg","md","sm","xs"],AS="xs",Fg=v.createContext({prefixes:{},breakpoints:RS,minBreakpoint:AS}),{Consumer:Q9,Provider:K9}=Fg;function jt(a,i){const{prefixes:s}=v.useContext(Fg);return a||s[i]||i}function ed(a){return a&&a.ownerDocument||document}function OS(a){var i=ed(a);return i&&i.defaultView||window}function kS(a,i){return OS(a).getComputedStyle(a,i)}var NS=/([A-Z])/g;function _S(a){return a.replace(NS,"-$1").toLowerCase()}var DS=/^ms-/;function _o(a){return _S(a).replace(DS,"-ms-")}var $S=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function BS(a){return!!(a&&$S.test(a))}function _n(a,i){var s="",o="";if(typeof i=="string")return a.style.getPropertyValue(_o(i))||kS(a).getPropertyValue(_o(i));Object.keys(i).forEach(function(f){var d=i[f];!d&&d!==0?a.style.removeProperty(_o(f)):BS(f)?o+=f+"("+d+") ":s+=_o(f)+": "+d+";"}),o&&(s+="transform: "+o+";"),a.style.cssText+=";"+s}var af={exports:{}},lf,xm;function LS(){if(xm)return lf;xm=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return lf=a,lf}var rf,ym;function US(){if(ym)return rf;ym=1;var a=LS();function i(){}function s(){}return s.resetWarningCache=i,rf=function(){function o(h,y,g,m,S,w){if(w!==a){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}o.isRequired=o;function f(){return o}var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:f,element:o,elementType:o,instanceOf:f,node:o,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:s,resetWarningCache:i};return d.PropTypes=d,d},rf}var vm;function HS(){return vm||(vm=1,af.exports=US()()),af.exports}var YS=HS();const of=Ji(YS),bm={disabled:!1},Wg=Re.createContext(null);var qS=function(i){return i.scrollTop},qi="unmounted",ha="exited",Pt="entering",On="entered",Zi="exiting",Un=(function(a){MS(i,a);function i(o,f){var d;d=a.call(this,o,f)||this;var h=f,y=h&&!h.isMounting?o.enter:o.appear,g;return d.appearStatus=null,o.in?y?(g=ha,d.appearStatus=Pt):g=On:o.unmountOnExit||o.mountOnEnter?g=qi:g=ha,d.state={status:g},d.nextCallback=null,d}i.getDerivedStateFromProps=function(f,d){var h=f.in;return h&&d.status===qi?{status:ha}:null};var s=i.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(f){var d=null;if(f!==this.props){var h=this.state.status;this.props.in?h!==Pt&&h!==On&&(d=Pt):(h===Pt||h===On)&&(d=Zi)}this.updateStatus(!1,d)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var f=this.props.timeout,d,h,y;return d=h=y=f,f!=null&&typeof f!="number"&&(d=f.exit,h=f.enter,y=f.appear!==void 0?f.appear:h),{exit:d,enter:h,appear:y}},s.updateStatus=function(f,d){if(f===void 0&&(f=!1),d!==null)if(this.cancelNextCallback(),d===Pt){if(this.props.unmountOnExit||this.props.mountOnEnter){var h=this.props.nodeRef?this.props.nodeRef.current:Rl.findDOMNode(this);h&&qS(h)}this.performEnter(f)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ha&&this.setState({status:qi})},s.performEnter=function(f){var d=this,h=this.props.enter,y=this.context?this.context.isMounting:f,g=this.props.nodeRef?[y]:[Rl.findDOMNode(this),y],m=g[0],S=g[1],w=this.getTimeouts(),T=y?w.appear:w.enter;if(!f&&!h||bm.disabled){this.safeSetState({status:On},function(){d.props.onEntered(m)});return}this.props.onEnter(m,S),this.safeSetState({status:Pt},function(){d.props.onEntering(m,S),d.onTransitionEnd(T,function(){d.safeSetState({status:On},function(){d.props.onEntered(m,S)})})})},s.performExit=function(){var f=this,d=this.props.exit,h=this.getTimeouts(),y=this.props.nodeRef?void 0:Rl.findDOMNode(this);if(!d||bm.disabled){this.safeSetState({status:ha},function(){f.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:Zi},function(){f.props.onExiting(y),f.onTransitionEnd(h.exit,function(){f.safeSetState({status:ha},function(){f.props.onExited(y)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(f,d){d=this.setNextCallback(d),this.setState(f,d)},s.setNextCallback=function(f){var d=this,h=!0;return this.nextCallback=function(y){h&&(h=!1,d.nextCallback=null,f(y))},this.nextCallback.cancel=function(){h=!1},this.nextCallback},s.onTransitionEnd=function(f,d){this.setNextCallback(d);var h=this.props.nodeRef?this.props.nodeRef.current:Rl.findDOMNode(this),y=f==null&&!this.props.addEndListener;if(!h||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var g=this.props.nodeRef?[this.nextCallback]:[h,this.nextCallback],m=g[0],S=g[1];this.props.addEndListener(m,S)}f!=null&&setTimeout(this.nextCallback,f)},s.render=function(){var f=this.state.status;if(f===qi)return null;var d=this.props,h=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var y=Zg(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Re.createElement(Wg.Provider,{value:null},typeof h=="function"?h(f,y):Re.cloneElement(Re.Children.only(h),y))},i})(Re.Component);Un.contextType=Wg;Un.propTypes={};function Tl(){}Un.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Tl,onEntering:Tl,onEntered:Tl,onExit:Tl,onExiting:Tl,onExited:Tl};Un.UNMOUNTED=qi;Un.EXITED=ha;Un.ENTERING=Pt;Un.ENTERED=On;Un.EXITING=Zi;function GS(a){return a.code==="Escape"||a.keyCode===27}function XS(){const a=v.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function ql(a){if(!a||typeof a=="function")return null;const{major:i}=XS();return i>=19?a.props.ref:a.ref}const fs=!!(typeof window<"u"&&window.document&&window.document.createElement);var kf=!1,Nf=!1;try{var sf={get passive(){return kf=!0},get once(){return Nf=kf=!0}};fs&&(window.addEventListener("test",sf,sf),window.removeEventListener("test",sf,!0))}catch{}function VS(a,i,s,o){if(o&&typeof o!="boolean"&&!Nf){var f=o.once,d=o.capture,h=s;!Nf&&f&&(h=s.__once||function y(g){this.removeEventListener(i,y,d),s.call(this,g)},s.__once=h),a.addEventListener(i,h,kf?o:d)}a.addEventListener(i,s,o)}function QS(a,i,s,o){var f=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(i,s,f),s.__once&&a.removeEventListener(i,s.__once,f)}function Po(a,i,s,o){return VS(a,i,s,o),function(){QS(a,i,s,o)}}function KS(a,i,s,o){if(o===void 0&&(o=!0),a){var f=document.createEvent("HTMLEvents");f.initEvent(i,s,o),a.dispatchEvent(f)}}function ZS(a){var i=_n(a,"transitionDuration")||"",s=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*s}function JS(a,i,s){s===void 0&&(s=5);var o=!1,f=setTimeout(function(){o||KS(a,"transitionend",!0)},i+s),d=Po(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(f),d()}}function FS(a,i,s,o){s==null&&(s=ZS(a)||0);var f=JS(a,s,o),d=Po(a,"transitionend",i);return function(){f(),d()}}function Sm(a,i){const s=_n(a,i)||"",o=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*o}function td(a,i){const s=Sm(a,"transitionDuration"),o=Sm(a,"transitionDelay"),f=FS(a,d=>{d.target===a&&(f(),i(d))},s+o)}function Hi(...a){return a.filter(i=>i!=null).reduce((i,s)=>{if(typeof s!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return i===null?s:function(...f){i.apply(this,f),s.apply(this,f)}},null)}function Ig(a){a.offsetHeight}const wm=a=>!a||typeof a=="function"?a:i=>{a.current=i};function WS(a,i){const s=wm(a),o=wm(i);return f=>{s&&s(f),o&&o(f)}}function IS(a,i){return v.useMemo(()=>WS(a,i),[a,i])}function PS(a){return a&&"setState"in a?Rl.findDOMNode(a):a??null}const ds=Re.forwardRef(({onEnter:a,onEntering:i,onEntered:s,onExit:o,onExiting:f,onExited:d,addEndListener:h,children:y,childRef:g,...m},S)=>{const w=v.useRef(null),T=IS(w,g),M=L=>{T(PS(L))},R=L=>V=>{L&&w.current&&L(w.current,V)},N=v.useCallback(R(a),[a]),$=v.useCallback(R(i),[i]),B=v.useCallback(R(s),[s]),Y=v.useCallback(R(o),[o]),G=v.useCallback(R(f),[f]),K=v.useCallback(R(d),[d]),Z=v.useCallback(R(h),[h]);return u.jsx(Un,{ref:S,...m,onEnter:N,onEntered:B,onEntering:$,onExit:Y,onExited:K,onExiting:G,addEndListener:Z,nodeRef:w,children:typeof y=="function"?(L,V)=>y(L,{...V,ref:M}):Re.cloneElement(y,{ref:M})})});ds.displayName="TransitionWrapper";const e7={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function t7(a,i){const s=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=i[s],f=e7[a];return o+parseInt(_n(i,f[0]),10)+parseInt(_n(i,f[1]),10)}const n7={[ha]:"collapse",[Zi]:"collapsing",[Pt]:"collapsing",[On]:"collapse show"},Pg=Re.forwardRef(({onEnter:a,onEntering:i,onEntered:s,onExit:o,onExiting:f,className:d,children:h,dimension:y="height",in:g=!1,timeout:m=300,mountOnEnter:S=!1,unmountOnExit:w=!1,appear:T=!1,getDimensionValue:M=t7,...R},N)=>{const $=typeof y=="function"?y():y,B=v.useMemo(()=>Hi(L=>{L.style[$]="0"},a),[$,a]),Y=v.useMemo(()=>Hi(L=>{const V=`scroll${$[0].toUpperCase()}${$.slice(1)}`;L.style[$]=`${L[V]}px`},i),[$,i]),G=v.useMemo(()=>Hi(L=>{L.style[$]=null},s),[$,s]),K=v.useMemo(()=>Hi(L=>{L.style[$]=`${M($,L)}px`,Ig(L)},o),[o,M,$]),Z=v.useMemo(()=>Hi(L=>{L.style[$]=null},f),[$,f]);return u.jsx(ds,{ref:N,addEndListener:td,...R,"aria-expanded":R.role?g:null,onEnter:B,onEntering:Y,onEntered:G,onExit:K,onExiting:Z,childRef:ql(h),in:g,timeout:m,mountOnEnter:S,unmountOnExit:w,appear:T,children:(L,V)=>Re.cloneElement(h,{...V,className:lt(d,h.props.className,n7[L],$==="width"&&"collapse-horizontal")})})});Pg.displayName="Collapse";function a7(a){const i=v.useRef(a);return v.useEffect(()=>{i.current=a},[a]),i}function ps(a){const i=a7(a);return v.useCallback(function(...s){return i.current&&i.current(...s)},[i])}const l7=(a=>v.forwardRef((i,s)=>u.jsx("div",{...i,ref:s,className:lt(i.className,a)})));function i7(a){const i=v.useRef(a);return v.useEffect(()=>{i.current=a},[a]),i}function kn(a){const i=i7(a);return v.useCallback(function(...s){return i.current&&i.current(...s)},[i])}function r7(){const a=v.useRef(!0),i=v.useRef(()=>a.current);return v.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),i.current}function o7(a){const i=v.useRef(null);return v.useEffect(()=>{i.current=a}),i.current}const s7=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",c7=typeof document<"u",jm=c7||s7?v.useLayoutEffect:v.useEffect,u7=["as","disabled"];function f7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}function d7(a){return!a||a.trim()==="#"}function e2({tagName:a,disabled:i,href:s,target:o,rel:f,role:d,onClick:h,tabIndex:y=0,type:g}){a||(s!=null||o!=null||f!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:g||"button",disabled:i},m];const S=T=>{if((i||a==="a"&&d7(s))&&T.preventDefault(),i){T.stopPropagation();return}h?.(T)},w=T=>{T.key===" "&&(T.preventDefault(),S(T))};return a==="a"&&(s||(s="#"),i&&(s=void 0)),[{role:d??"button",disabled:void 0,tabIndex:i?void 0:y,href:s,target:a==="a"?o:void 0,"aria-disabled":i||void 0,rel:a==="a"?f:void 0,onClick:S,onKeyDown:w},m]}const t2=v.forwardRef((a,i)=>{let{as:s,disabled:o}=a,f=f7(a,u7);const[d,{tagName:h}]=e2(Object.assign({tagName:s,disabled:o},f));return u.jsx(h,Object.assign({},f,d,{ref:i}))});t2.displayName="Button";const p7=["onKeyDown"];function h7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}function m7(a){return!a||a.trim()==="#"}const n2=v.forwardRef((a,i)=>{let{onKeyDown:s}=a,o=h7(a,p7);const[f]=e2(Object.assign({tagName:"a"},o)),d=kn(h=>{f.onKeyDown(h),s?.(h)});return m7(o.href)||o.role==="button"?u.jsx("a",Object.assign({ref:i},o,f,{onKeyDown:d})):u.jsx("a",Object.assign({ref:i},o,{onKeyDown:s}))});n2.displayName="Anchor";const g7={[Pt]:"show",[On]:"show"},a2=v.forwardRef(({className:a,children:i,transitionClasses:s={},onEnter:o,...f},d)=>{const h={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...f},y=v.useCallback((g,m)=>{Ig(g),o?.(g,m)},[o]);return u.jsx(ds,{ref:d,addEndListener:td,...h,onEnter:y,childRef:ql(i),children:(g,m)=>v.cloneElement(i,{...m,className:lt("fade",a,i.props.className,g7[g],s[g])})})});a2.displayName="Fade";const x7={"aria-label":of.string,onClick:of.func,variant:of.oneOf(["white"])},nd=v.forwardRef(({className:a,variant:i,"aria-label":s="Close",...o},f)=>u.jsx("button",{ref:f,type:"button",className:lt("btn-close",i&&`btn-close-${i}`,a),"aria-label":s,...o}));nd.displayName="CloseButton";nd.propTypes=x7;const l2=v.createContext(null);l2.displayName="CardHeaderContext";const i2=v.forwardRef(({bsPrefix:a,fluid:i=!1,as:s="div",className:o,...f},d)=>{const h=jt(a,"container"),y=typeof i=="string"?`-${i}`:"-fluid";return u.jsx(s,{ref:d,...f,className:lt(o,i?`${h}${y}`:h)})});i2.displayName="Container";var y7=Function.prototype.bind.call(Function.prototype.call,[].slice);function Da(a,i){return y7(a.querySelectorAll(i))}function v7(){const[,a]=v.useReducer(i=>i+1,0);return a}function Em(a,i){if(a.contains)return a.contains(i);if(a.compareDocumentPosition)return a===i||!!(a.compareDocumentPosition(i)&16)}const es=v.createContext(null),ad=(a,i=null)=>a!=null?String(a):i||null,ld=v.createContext(null);ld.displayName="NavContext";const b7="data-rr-ui-",S7="rrUi";function hs(a){return`${b7}${a}`}function w7(a){return`${S7}${a}`}const r2=v.createContext(fs?window:void 0);r2.Provider;function id(){return v.useContext(r2)}const j7=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",E7=typeof document<"u",C7=E7||j7?v.useLayoutEffect:v.useEffect,Gl=v.createContext(null);Gl.displayName="NavbarContext";const Cm=a=>!a||typeof a=="function"?a:i=>{a.current=i};function T7(a,i){const s=Cm(a),o=Cm(i);return f=>{s&&s(f),o&&o(f)}}function ms(a,i){return v.useMemo(()=>T7(a,i),[a,i])}const o2=v.createContext(null),z7=["as","active","eventKey"];function M7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}function s2({key:a,onClick:i,active:s,id:o,role:f,disabled:d}){const h=v.useContext(es),y=v.useContext(ld),g=v.useContext(o2);let m=s;const S={role:f};if(y){!f&&y.role==="tablist"&&(S.role="tab");const w=y.getControllerId(a??null),T=y.getControlledId(a??null);S[hs("event-key")]=a,S.id=w||o,m=s==null&&a!=null?y.activeKey===a:s,(m||!(g!=null&&g.unmountOnExit)&&!(g!=null&&g.mountOnEnter))&&(S["aria-controls"]=T)}return S.role==="tab"&&(S["aria-selected"]=m,m||(S.tabIndex=-1),d&&(S.tabIndex=-1,S["aria-disabled"]=!0)),S.onClick=kn(w=>{d||(i?.(w),a!=null&&h&&!w.isPropagationStopped()&&h(a,w))}),[S,{isActive:m}]}const c2=v.forwardRef((a,i)=>{let{as:s=t2,active:o,eventKey:f}=a,d=M7(a,z7);const[h,y]=s2(Object.assign({key:ad(f,d.href),active:o},d));return h[hs("active")]=y.isActive,u.jsx(s,Object.assign({},d,h,{ref:i}))});c2.displayName="NavItem";const R7=["as","onSelect","activeKey","role","onKeyDown"];function A7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}const Tm=()=>{},zm=hs("event-key"),u2=v.forwardRef((a,i)=>{let{as:s="div",onSelect:o,activeKey:f,role:d,onKeyDown:h}=a,y=A7(a,R7);const g=v7(),m=v.useRef(!1),S=v.useContext(es),w=v.useContext(o2);let T,M;w&&(d=d||"tablist",f=w.activeKey,T=w.getControlledId,M=w.getControllerId);const R=v.useRef(null),N=G=>{const K=R.current;if(!K)return null;const Z=Da(K,`[${zm}]:not([aria-disabled=true])`),L=K.querySelector("[aria-selected=true]");if(!L||L!==document.activeElement)return null;const V=Z.indexOf(L);if(V===-1)return null;let Q=V+G;return Q>=Z.length&&(Q=0),Q<0&&(Q=Z.length-1),Z[Q]},$=(G,K)=>{G!=null&&(o?.(G,K),S?.(G,K))},B=G=>{if(h?.(G),!w)return;let K;switch(G.key){case"ArrowLeft":case"ArrowUp":K=N(-1);break;case"ArrowRight":case"ArrowDown":K=N(1);break;default:return}K&&(G.preventDefault(),$(K.dataset[w7("EventKey")]||null,G),m.current=!0,g())};v.useEffect(()=>{if(R.current&&m.current){const G=R.current.querySelector(`[${zm}][aria-selected=true]`);G?.focus()}m.current=!1});const Y=ms(i,R);return u.jsx(es.Provider,{value:$,children:u.jsx(ld.Provider,{value:{role:d,activeKey:ad(f),getControlledId:T||Tm,getControllerId:M||Tm},children:u.jsx(s,Object.assign({},y,{onKeyDown:B,ref:Y,role:d}))})})});u2.displayName="Nav";const O7=Object.assign(u2,{Item:c2});function cf(a){a===void 0&&(a=ed());try{var i=a.activeElement;return!i||!i.nodeName?null:i}catch{return a.body}}function k7(a){const i=v.useRef(a);return i.current=a,i}function N7(a){const i=k7(a);v.useEffect(()=>()=>i.current(),[])}function _7(a=document){const i=a.defaultView;return Math.abs(i.innerWidth-a.documentElement.clientWidth)}const Mm=hs("modal-open");class rd{constructor({ownerDocument:i,handleContainerOverflow:s=!0,isRTL:o=!1}={}){this.handleContainerOverflow=s,this.isRTL=o,this.modals=[],this.ownerDocument=i}getScrollbarWidth(){return _7(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(i){}removeModalAttributes(i){}setContainerStyle(i){const s={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",f=this.getElement();i.style={overflow:f.style.overflow,[o]:f.style[o]},i.scrollBarWidth&&(s[o]=`${parseInt(_n(f,o)||"0",10)+i.scrollBarWidth}px`),f.setAttribute(Mm,""),_n(f,s)}reset(){[...this.modals].forEach(i=>this.remove(i))}removeContainerStyle(i){const s=this.getElement();s.removeAttribute(Mm),Object.assign(s.style,i.style)}add(i){let s=this.modals.indexOf(i);return s!==-1||(s=this.modals.length,this.modals.push(i),this.setModalAttributes(i),s!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),s}remove(i){const s=this.modals.indexOf(i);s!==-1&&(this.modals.splice(s,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(i))}isTopModal(i){return!!this.modals.length&&this.modals[this.modals.length-1]===i}}const uf=(a,i)=>fs?a==null?(i||ed()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function D7(a,i){const s=id(),[o,f]=v.useState(()=>uf(a,s?.document));if(!o){const d=uf(a);d&&f(d)}return v.useEffect(()=>{},[i,o]),v.useEffect(()=>{const d=uf(a);d!==o&&f(d)},[a,o]),o}function $7({children:a,in:i,onExited:s,mountOnEnter:o,unmountOnExit:f}){const d=v.useRef(null),h=v.useRef(i),y=kn(s);v.useEffect(()=>{i?h.current=!0:y(d.current)},[i,y]);const g=ms(d,ql(a)),m=v.cloneElement(a,{ref:g});return i?m:f||!h.current&&o?null:m}const B7=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function L7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}function U7(a){let{onEnter:i,onEntering:s,onEntered:o,onExit:f,onExiting:d,onExited:h,addEndListener:y,children:g}=a,m=L7(a,B7);const S=v.useRef(null),w=ms(S,ql(g)),T=K=>Z=>{K&&S.current&&K(S.current,Z)},M=v.useCallback(T(i),[i]),R=v.useCallback(T(s),[s]),N=v.useCallback(T(o),[o]),$=v.useCallback(T(f),[f]),B=v.useCallback(T(d),[d]),Y=v.useCallback(T(h),[h]),G=v.useCallback(T(y),[y]);return Object.assign({},m,{nodeRef:S},i&&{onEnter:M},s&&{onEntering:R},o&&{onEntered:N},f&&{onExit:$},d&&{onExiting:B},h&&{onExited:Y},y&&{addEndListener:G},{children:typeof g=="function"?(K,Z)=>g(K,Object.assign({},Z,{ref:w})):v.cloneElement(g,{ref:w})})}const H7=["component"];function Y7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}const q7=v.forwardRef((a,i)=>{let{component:s}=a,o=Y7(a,H7);const f=U7(o);return u.jsx(s,Object.assign({ref:i},f))});function G7({in:a,onTransition:i}){const s=v.useRef(null),o=v.useRef(!0),f=kn(i);return jm(()=>{if(!s.current)return;let d=!1;return f({in:a,element:s.current,initial:o.current,isStale:()=>d}),()=>{d=!0}},[a,f]),jm(()=>(o.current=!1,()=>{o.current=!0}),[]),s}function X7({children:a,in:i,onExited:s,onEntered:o,transition:f}){const[d,h]=v.useState(!i);i&&d&&h(!1);const y=G7({in:!!i,onTransition:m=>{const S=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(h(!0),s?.(m.element)))};Promise.resolve(f(m)).then(S,w=>{throw m.in||h(!0),w})}}),g=ms(y,ql(a));return d&&!i?null:v.cloneElement(a,{ref:g})}function Rm(a,i,s){return a?u.jsx(q7,Object.assign({},s,{component:a})):i?u.jsx(X7,Object.assign({},s,{transition:i})):u.jsx($7,Object.assign({},s))}const V7=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Q7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}let ff;function K7(a){return ff||(ff=new rd({ownerDocument:a?.document})),ff}function Z7(a){const i=id(),s=a||K7(i),o=v.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>s.add(o.current),remove:()=>s.remove(o.current),isTopModal:()=>s.isTopModal(o.current),setDialogRef:v.useCallback(f=>{o.current.dialog=f},[]),setBackdropRef:v.useCallback(f=>{o.current.backdrop=f},[])})}const f2=v.forwardRef((a,i)=>{let{show:s=!1,role:o="dialog",className:f,style:d,children:h,backdrop:y=!0,keyboard:g=!0,onBackdropClick:m,onEscapeKeyDown:S,transition:w,runTransition:T,backdropTransition:M,runBackdropTransition:R,autoFocus:N=!0,enforceFocus:$=!0,restoreFocus:B=!0,restoreFocusOptions:Y,renderDialog:G,renderBackdrop:K=Le=>u.jsx("div",Object.assign({},Le)),manager:Z,container:L,onShow:V,onHide:Q=()=>{},onExit:I,onExited:ce,onExiting:de,onEnter:le,onEntering:ie,onEntered:De}=a,Be=Q7(a,V7);const _=id(),J=D7(L),P=Z7(Z),te=r7(),me=o7(s),[E,H]=v.useState(!s),F=v.useRef(null);v.useImperativeHandle(i,()=>P,[P]),fs&&!me&&s&&(F.current=cf(_?.document)),s&&E&&H(!1);const W=kn(()=>{if(P.add(),Et.current=Po(document,"keydown",Ge),Ee.current=Po(document,"focus",()=>setTimeout(ue),!0),V&&V(),N){var Le,Ua;const Xl=cf((Le=(Ua=P.dialog)==null?void 0:Ua.ownerDocument)!=null?Le:_?.document);P.dialog&&Xl&&!Em(P.dialog,Xl)&&(F.current=Xl,P.dialog.focus())}}),re=kn(()=>{if(P.remove(),Et.current==null||Et.current(),Ee.current==null||Ee.current(),B){var Le;(Le=F.current)==null||Le.focus==null||Le.focus(Y),F.current=null}});v.useEffect(()=>{!s||!J||W()},[s,J,W]),v.useEffect(()=>{E&&re()},[E,re]),N7(()=>{re()});const ue=kn(()=>{if(!$||!te()||!P.isTopModal())return;const Le=cf(_?.document);P.dialog&&Le&&!Em(P.dialog,Le)&&P.dialog.focus()}),xe=kn(Le=>{Le.target===Le.currentTarget&&(m?.(Le),y===!0&&Q())}),Ge=kn(Le=>{g&&GS(Le)&&P.isTopModal()&&(S?.(Le),Le.defaultPrevented||Q())}),Ee=v.useRef(),Et=v.useRef(),Jt=(...Le)=>{H(!0),ce?.(...Le)};if(!J)return null;const pt=Object.assign({role:o,ref:P.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},Be,{style:d,className:f,tabIndex:-1});let La=G?G(pt):u.jsx("div",Object.assign({},pt,{children:v.cloneElement(h,{role:"document"})}));La=Rm(w,T,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!s,onExit:I,onExiting:de,onExited:Jt,onEnter:le,onEntering:ie,onEntered:De,children:La});let $t=null;return y&&($t=K({ref:P.setBackdropRef,onClick:xe}),$t=Rm(M,R,{in:!!s,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:$t})),u.jsx(u.Fragment,{children:Rl.createPortal(u.jsxs(u.Fragment,{children:[$t,La]}),J)})});f2.displayName="Modal";const J7=Object.assign(f2,{Manager:rd});function F7(a,i){return a.classList?a.classList.contains(i):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+i+" ")!==-1}function W7(a,i){a.classList?a.classList.add(i):F7(a,i)||(typeof a.className=="string"?a.className=a.className+" "+i:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+i))}function Am(a,i){return a.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function I7(a,i){a.classList?a.classList.remove(i):typeof a.className=="string"?a.className=Am(a.className,i):a.setAttribute("class",Am(a.className&&a.className.baseVal||"",i))}const zl={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class d2 extends rd{adjustAndStore(i,s,o){const f=s.style[i];s.dataset[i]=f,_n(s,{[i]:`${parseFloat(_n(s,i))+o}px`})}restore(i,s){const o=s.dataset[i];o!==void 0&&(delete s.dataset[i],_n(s,{[i]:o}))}setContainerStyle(i){super.setContainerStyle(i);const s=this.getElement();if(W7(s,"modal-open"),!i.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";Da(s,zl.FIXED_CONTENT).forEach(d=>this.adjustAndStore(o,d,i.scrollBarWidth)),Da(s,zl.STICKY_CONTENT).forEach(d=>this.adjustAndStore(f,d,-i.scrollBarWidth)),Da(s,zl.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(f,d,i.scrollBarWidth))}removeContainerStyle(i){super.removeContainerStyle(i);const s=this.getElement();I7(s,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";Da(s,zl.FIXED_CONTENT).forEach(d=>this.restore(o,d)),Da(s,zl.STICKY_CONTENT).forEach(d=>this.restore(f,d)),Da(s,zl.NAVBAR_TOGGLER).forEach(d=>this.restore(f,d))}}let df;function P7(a){return df||(df=new d2(a)),df}const p2=v.createContext({onHide(){}}),h2=v.forwardRef(({closeLabel:a="Close",closeVariant:i,closeButton:s=!1,onHide:o,children:f,...d},h)=>{const y=v.useContext(p2),g=ps(()=>{y?.onHide(),o?.()});return u.jsxs("div",{ref:h,...d,children:[f,s&&u.jsx(nd,{"aria-label":a,variant:i,onClick:g})]})});h2.displayName="AbstractModalHeader";const m2=v.forwardRef(({className:a,bsPrefix:i,as:s="div",...o},f)=>(i=jt(i,"nav-item"),u.jsx(s,{ref:f,className:lt(a,i),...o})));m2.displayName="NavItem";const g2=v.forwardRef(({bsPrefix:a,className:i,as:s=n2,active:o,eventKey:f,disabled:d=!1,...h},y)=>{a=jt(a,"nav-link");const[g,m]=s2({key:ad(f,h.href),active:o,disabled:d,...h});return u.jsx(s,{...h,...g,ref:y,disabled:d,className:lt(i,a,d&&"disabled",m.isActive&&"active")})});g2.displayName="NavLink";const x2=v.forwardRef((a,i)=>{const{as:s="div",bsPrefix:o,variant:f,fill:d=!1,justify:h=!1,navbar:y,navbarScroll:g,className:m,activeKey:S,...w}=Jg(a,{activeKey:"onSelect"}),T=jt(o,"nav");let M,R,N=!1;const $=v.useContext(Gl),B=v.useContext(l2);return $?(M=$.bsPrefix,N=y??!0):B&&({cardHeaderBsPrefix:R}=B),u.jsx(O7,{as:s,ref:i,activeKey:S,className:lt(m,{[T]:!N,[`${M}-nav`]:N,[`${M}-nav-scroll`]:N&&g,[`${R}-${f}`]:!!R,[`${T}-${f}`]:!!f,[`${T}-fill`]:d,[`${T}-justified`]:h}),...w})});x2.displayName="Nav";const ew=Object.assign(x2,{Item:m2,Link:g2}),y2=v.forwardRef(({bsPrefix:a,className:i,as:s,...o},f)=>{a=jt(a,"navbar-brand");const d=s||(o.href?"a":"span");return u.jsx(d,{...o,ref:f,className:lt(i,a)})});y2.displayName="NavbarBrand";const v2=v.forwardRef(({children:a,bsPrefix:i,...s},o)=>{i=jt(i,"navbar-collapse");const f=v.useContext(Gl);return u.jsx(Pg,{in:!!(f&&f.expanded),...s,children:u.jsx("div",{ref:o,className:i,children:a})})});v2.displayName="NavbarCollapse";const b2=v.forwardRef(({bsPrefix:a,className:i,children:s,label:o="Toggle navigation",as:f="button",onClick:d,...h},y)=>{a=jt(a,"navbar-toggler");const{onToggle:g,expanded:m}=v.useContext(Gl)||{},S=ps(w=>{d&&d(w),g&&g()});return f==="button"&&(h.type="button"),u.jsx(f,{...h,ref:y,onClick:S,"aria-label":o,className:lt(i,a,!m&&"collapsed"),children:s||u.jsx("span",{className:`${a}-icon`})})});b2.displayName="NavbarToggle";const _f=new WeakMap,Om=(a,i)=>{if(!a||!i)return;const s=_f.get(i)||new Map;_f.set(i,s);let o=s.get(a);return o||(o=i.matchMedia(a),o.refCount=0,s.set(o.media,o)),o};function tw(a,i=typeof window>"u"?void 0:window){const s=Om(a,i),[o,f]=v.useState(()=>s?s.matches:!1);return C7(()=>{let d=Om(a,i);if(!d)return f(!1);let h=_f.get(i);const y=()=>{f(d.matches)};return d.refCount++,d.addListener(y),y(),()=>{d.removeListener(y),d.refCount--,d.refCount<=0&&h?.delete(d.media),d=void 0}},[a]),o}function nw(a){const i=Object.keys(a);function s(y,g){return y===g?g:y?`${y} and ${g}`:g}function o(y){return i[Math.min(i.indexOf(y)+1,i.length-1)]}function f(y){const g=o(y);let m=a[g];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function d(y){let g=a[y];return typeof g=="number"&&(g=`${g}px`),`(min-width: ${g})`}function h(y,g,m){let S;typeof y=="object"?(S=y,m=g,g=!0):(g=g||!0,S={[y]:g});let w=v.useMemo(()=>Object.entries(S).reduce((T,[M,R])=>((R==="up"||R===!0)&&(T=s(T,d(M))),(R==="down"||R===!0)&&(T=s(T,f(M))),T),""),[JSON.stringify(S)]);return tw(w,m)}return h}const aw=nw({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),S2=v.forwardRef(({className:a,bsPrefix:i,as:s="div",...o},f)=>(i=jt(i,"offcanvas-body"),u.jsx(s,{ref:f,className:lt(a,i),...o})));S2.displayName="OffcanvasBody";const lw={[Pt]:"show",[On]:"show"},w2=v.forwardRef(({bsPrefix:a,className:i,children:s,in:o=!1,mountOnEnter:f=!1,unmountOnExit:d=!1,appear:h=!1,...y},g)=>(a=jt(a,"offcanvas"),u.jsx(ds,{ref:g,addEndListener:td,in:o,mountOnEnter:f,unmountOnExit:d,appear:h,...y,childRef:ql(s),children:(m,S)=>v.cloneElement(s,{...S,className:lt(i,s.props.className,(m===Pt||m===Zi)&&`${a}-toggling`,lw[m])})})));w2.displayName="OffcanvasToggling";const j2=v.forwardRef(({bsPrefix:a,className:i,closeLabel:s="Close",closeButton:o=!1,...f},d)=>(a=jt(a,"offcanvas-header"),u.jsx(h2,{ref:d,...f,className:lt(i,a),closeLabel:s,closeButton:o})));j2.displayName="OffcanvasHeader";const iw=l7("h5"),E2=v.forwardRef(({className:a,bsPrefix:i,as:s=iw,...o},f)=>(i=jt(i,"offcanvas-title"),u.jsx(s,{ref:f,className:lt(a,i),...o})));E2.displayName="OffcanvasTitle";function rw(a){return u.jsx(w2,{...a})}function ow(a){return u.jsx(a2,{...a})}const C2=v.forwardRef(({bsPrefix:a,className:i,children:s,"aria-labelledby":o,placement:f="start",responsive:d,show:h=!1,backdrop:y=!0,keyboard:g=!0,scroll:m=!1,onEscapeKeyDown:S,onShow:w,onHide:T,container:M,autoFocus:R=!0,enforceFocus:N=!0,restoreFocus:$=!0,restoreFocusOptions:B,onEntered:Y,onExit:G,onExiting:K,onEnter:Z,onEntering:L,onExited:V,backdropClassName:Q,manager:I,renderStaticNode:ce=!1,...de},le)=>{const ie=v.useRef();a=jt(a,"offcanvas");const[De,Be]=v.useState(!1),_=ps(T),J=aw(d||"xs","up");v.useEffect(()=>{Be(d?h&&!J:h)},[h,d,J]);const P=v.useMemo(()=>({onHide:_}),[_]);function te(){return I||(m?(ie.current||(ie.current=new d2({handleContainerOverflow:!1})),ie.current):P7())}const me=(W,...re)=>{W&&(W.style.visibility="visible"),Z?.(W,...re)},E=(W,...re)=>{W&&(W.style.visibility=""),V?.(...re)},H=v.useCallback(W=>u.jsx("div",{...W,className:lt(`${a}-backdrop`,Q)}),[Q,a]),F=W=>u.jsx("div",{...W,...de,className:lt(i,d?`${a}-${d}`:a,`${a}-${f}`),"aria-labelledby":o,children:s});return u.jsxs(u.Fragment,{children:[!De&&(d||ce)&&F({}),u.jsx(p2.Provider,{value:P,children:u.jsx(J7,{show:De,ref:le,backdrop:y,container:M,keyboard:g,autoFocus:R,enforceFocus:N&&!m,restoreFocus:$,restoreFocusOptions:B,onEscapeKeyDown:S,onShow:w,onHide:_,onEnter:me,onEntering:L,onEntered:Y,onExit:G,onExiting:K,onExited:E,manager:te(),transition:rw,backdropTransition:ow,renderBackdrop:H,renderDialog:F})})]})});C2.displayName="Offcanvas";const sw=Object.assign(C2,{Body:S2,Header:j2,Title:E2}),T2=v.forwardRef(({onHide:a,...i},s)=>{const o=v.useContext(Gl),f=ps(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return u.jsx(sw,{ref:s,show:!!(o!=null&&o.expanded),...i,renderStaticNode:!0,onHide:f})});T2.displayName="NavbarOffcanvas";const z2=v.forwardRef(({className:a,bsPrefix:i,as:s="span",...o},f)=>(i=jt(i,"navbar-text"),u.jsx(s,{ref:f,className:lt(a,i),...o})));z2.displayName="NavbarText";const M2=v.forwardRef((a,i)=>{const{bsPrefix:s,expand:o=!0,variant:f="light",bg:d,fixed:h,sticky:y,className:g,as:m="nav",expanded:S,onToggle:w,onSelect:T,collapseOnSelect:M=!1,...R}=Jg(a,{expanded:"onToggle"}),N=jt(s,"navbar"),$=v.useCallback((...G)=>{T?.(...G),M&&S&&w?.(!1)},[T,M,S,w]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let B=`${N}-expand`;typeof o=="string"&&(B=`${B}-${o}`);const Y=v.useMemo(()=>({onToggle:()=>w?.(!S),bsPrefix:N,expanded:!!S,expand:o}),[N,S,o,w]);return u.jsx(Gl.Provider,{value:Y,children:u.jsx(es.Provider,{value:$,children:u.jsx(m,{ref:i,...R,className:lt(g,N,o&&B,f&&`${N}-${f}`,d&&`bg-${d}`,y&&`sticky-${y}`,h&&`fixed-${h}`)})})})});M2.displayName="Navbar";const cw=Object.assign(M2,{Brand:y2,Collapse:v2,Offcanvas:T2,Text:z2,Toggle:b2});function uw(a){return je({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}function fw(a){return je({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M236,172a40,40,0,0,1-80,0V76H100V200a12,12,0,0,1-24,0V76H72a36,36,0,0,0-36,36,12,12,0,0,1-24,0A60.07,60.07,0,0,1,72,52H224a12,12,0,0,1,0,24H180v96a16,16,0,0,0,32,0,12,12,0,0,1,24,0Z"},child:[]}]})(a)}const dw=b(cw)`
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
`,pw=b.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,hw=b.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,mw=b.div`
  justify-self: center;
`,gw=b.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,xw=b.button`
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
`,yw=b(Ul)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,vw=b(fw)`
  width: 28px;
  height: 28px; 
  flex: 0 0 28px;
  color: #f0703c; /* keep high contrast; adjust to your brand */
`,bw=b.div`
  font-size: 28px;
  font-family: Roboto;
  font-weight: 800;
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; /* fallback */
  -webkit-text-fill-color: transparent; /* webkit */
  letter-spacing: 0.2px;
  line-height: 1;
`;function Sw(){const a=()=>{console.log("Toggled theme")};return u.jsx("div",{className:"topbar-wrapper",children:u.jsx(dw,{className:"shadow-sm d-lg-none",children:u.jsx(i2,{fluid:!0,className:"px-3",children:u.jsxs(pw,{children:[u.jsx(hw,{children:u.jsxs(yw,{to:"/instalearn/","aria-label":"Go to home",children:[u.jsx(vw,{"aria-hidden":"true"}),u.jsx(bw,{children:"Learn"})]})}),u.jsx(mw,{}),u.jsx(gw,{children:u.jsx(xw,{type:"button",onClick:a,"aria-label":"Toggle",children:u.jsx(uw,{size:20})})})]})})})})}const ww=Zt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,jw=b.aside`
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
`,Ew=b(Ul)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,Cw=b.div`
  font-size: 28px;
  font-family: "BBH Sans Hegarty", sans-serif;
  font-weight: 700; /* bold */
  background: linear-gradient(
    45deg,
    #f58529, /* orange */
    #dd2a7b, /* pink */
    #8134af, /* purple */
    #515bd4  /* blue */
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.2px;
  line-height: 1;
`,Tw=b.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,zw=$n`
  color: #00dbe4;
  font-weight: 700;
  transform: translateX(2px) scale(1.02);
  svg { stroke-width: 2.5; }

  /* Glowing animated bar on the left */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, #00F5FF, #0088FF, #00F5FF);
    background-size: 200% 200%;
    animation: ${ww} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,pf=b(Ul)`
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
  transition: background-color 150ms ease, transform 200ms ease, color 150ms ease;
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
`,Mw=b.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,hf=b.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,mf=b.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function Rw(){const{pathname:a}=Ln(),i=[{to:"/instalearn/",icon:u.jsx(_g,{}),label:"Home"},{to:"/instalearn/teacher",icon:u.jsx(Qi,{}),label:"Teacher"},{to:"/instalearn/library",icon:u.jsx(Ng,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:u.jsx(H5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:u.jsx(Dg,{}),label:"Profile"}];return u.jsxs(jw,{children:[u.jsx(Ew,{to:"/instalearn/",children:u.jsx(Cw,{children:"InstaLearn"})}),u.jsxs(Tw,{children:[i.slice(0,-1).map(s=>u.jsxs(pf,{to:s.to,$active:a===s.to,children:[u.jsx(hf,{children:s.icon}),u.jsx(mf,{children:s.label}),s.hasNotification]},s.to)),u.jsxs(pf,{to:i[i.length-1].to,$active:a===i[i.length-1].to,children:[u.jsx(hf,{children:i[i.length-1].icon}),u.jsx(mf,{children:i[i.length-1].label})]})]}),u.jsx(Mw,{children:u.jsxs(pf,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[u.jsx(hf,{children:u.jsx(Y5,{})}),u.jsx(mf,{children:"More"})]})})]})}const Aw=b.div`
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
`,Ow=b.div`
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
`,R2=b.div`
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
`,kw=b.div`
  position: relative;
  flex-shrink: 0;
`,Nw=b.div`
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
  
  ${R2}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,_w=b.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,Dw=b.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,$w=b.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Bw=b.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Lw=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Uw=b.div`
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
`,Hw=b.button`
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
`,Yw=b.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,A2=b.div`
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
`,qw=b.div`
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
  
  ${A2}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,Gw=b.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,Xw=b.div`
  flex: 1;
`,Vw=b.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Qw=b.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,Kw=b.span`
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
`;b.a`
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
`;const Zw=({sidebarWidth:a=360})=>{const i={username:"demo_user",name:"Demo User",initials:"DU"},s=[{icon:B1,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:q5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:L5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return u.jsxs(Aw,{children:[u.jsx(Ow,{children:u.jsxs(R2,{$width:a,children:[u.jsxs(kw,{children:[u.jsx(Nw,{$width:a,children:i.initials}),u.jsx(_w,{$width:a})]}),u.jsxs(Dw,{$width:a,children:[u.jsx($w,{$width:a,children:i.username}),u.jsx(Bw,{$width:a,children:i.name})]})]})}),u.jsxs(Lw,{children:[u.jsxs(Uw,{$width:a,$iconColor:"#667eea",children:[u.jsx(B1,{}),u.jsx("span",{children:"Highlights"})]}),u.jsx(Hw,{$width:a,children:"See All"})]}),u.jsx(Yw,{$width:a,children:s.map((o,f)=>{const d=o.icon;return u.jsxs(A2,{$width:a,$glowColor:o.gradient,children:[u.jsx(Kw,{$width:a,$bg:o.badgeBg,children:o.badge}),u.jsxs(Gw,{$width:a,children:[u.jsx(qw,{$width:a,$gradient:o.gradient,children:u.jsx(d,{})}),u.jsxs(Xw,{children:[u.jsx(Vw,{$width:a,children:o.title}),u.jsx(Qw,{$width:a,children:o.description})]})]})]},f)})})]})};function Jw(){const{pathname:a}=Ln(),i=[["/instalearn/",u.jsx(_g,{})],["/instalearn/teacher",u.jsx(Qi,{})],["/instalearn/library",u.jsx(Ng,{})],["/instalearn/profile",u.jsx(Dg,{})]];return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsx(ew,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:i.map(([s,o])=>u.jsx(Ul,{to:s,className:`nav-link fs-4 text-white ${a===s?"active":""}`,children:o},s))})]})}const gf="studentProfile",mt=Vg,Fw=b.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,Ww=b.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`,Iw=b.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`,Pw=b.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`,e9=b.div` position: relative; `,t9=b.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`,n9=b.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`,a9=b.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`,l9=b.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`,Ml=b.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`,i9=b.div` flex: 1; `,r9=b.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`,o9=b.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,s9=b.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`,c9=b.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,u9=b.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `,f9=b.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`,d9=b.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,p9=b.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`,h9=b.div` position: relative; display: inline-block; `,m9=b.div`
  position: absolute; right: 0; margin-top: 0.5rem; min-width: 200px;
  background: #fff; border: 1px solid #e5e7eb; border-radius: 0.5rem;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08); z-index: 10; overflow: hidden;
`,km=b.button`
  width: 100%; text-align: left; padding: 0.625rem 0.75rem; background: #fff; border: 0;
  font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; color: #111827;
  &:hover { background: #f9fafb; }
  &[data-danger="true"] { color: #b91c1c; }
`,g9=b.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`,x9=b.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`,y9=b.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`,v9=b.div` margin-bottom: 1.5rem; `,b9=b.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`,S9=b.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`,w9=b.div`
  position: absolute; inset: 0; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px); pointer-events: none;
`,j9=b.div`
  position: relative;
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked:a})=>a?"grayscale(0.8)":"none"};
  opacity: ${({$locked:a})=>a?.6:1};
`,E9=b.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`,C9=b.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
`,T9=b.div` display: flex; border-top: 1px solid #e5e7eb; `,Nm=b.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({$active:a})=>a?"#111827":"transparent"};
  color: ${({$active:a})=>a?"#111827":"#9ca3af"};
`,z9=b.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`,M9=b.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked:a})=>a?"blur(2px)":"none"};
  overflow: hidden;
`,R9=b.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`,A9=b.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden:a})=>a?"none":"block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`,_m=b.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`,Dm=b.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`,$m=b.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`,Bm=b.h3` margin: 0; font-size: 1rem; font-weight: 700; color: #111827; `,Lm=b.button` border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem; `,O9=b.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`,k9=b.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`,N9=b.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`,Um=b.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,Hm=b.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`,_9=b.div` padding: 1rem 1.25rem; display: grid; gap: 0.75rem; `,xf=b.div` display: grid; gap: 0.25rem; `,yf=b.label` font-size: 0.85rem; color: #374151; `,vf=b.input`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 0.75rem; font-size: 0.95rem;
  &:focus{ outline:none; border-color:#2563eb; box-shadow:0 0 0 3px rgba(37,99,235,0.15);}
`,D9=b.div` display:flex; justify-content:flex-end; gap:0.5rem; padding:0.75rem 1.25rem 1rem; `;function $9(){v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=ns(),[i,s]=v.useState(!1),[o,f]=v.useState("basic"),[d,h]=v.useState(!1),[y,g]=v.useState(!1),[m,S]=v.useState(!1),[w,T]=v.useState(!1),[M,R]=v.useState({name:"",email:"",avatar:""}),N=3,$=3,B=`joined:${mt?.id||mt?.name}`;v.useEffect(()=>{const I=localStorage.getItem(B)==="true";g(I);const ce=localStorage.getItem(gf);if(ce){const de=JSON.parse(ce);R({name:de.name||"",email:de.email||"",avatar:de.avatar||""})}},[]),v.useEffect(()=>{localStorage.setItem(B,y?"true":"false")},[y,B]),v.useEffect(()=>{if(!m)return;const I=ce=>{const de=ce.target;de.closest&&(de.closest('[aria-haspopup="menu"]')||de.closest('[role="menu"]'))||S(!1)};return document.addEventListener("click",I),()=>document.removeEventListener("click",I)},[m]);const Y=I=>{if(!y&&I>=N){s(!0);return}I===0&&a("/instalearn/library")},G=()=>{y||s(!0)},K=async()=>{h(!0),await new Promise(I=>setTimeout(I,1200)),h(!1),s(!1),T(!0)},Z=()=>{const I={name:M.name?.trim(),email:M.email?.trim(),avatar:M.avatar?.trim(),createdAt:new Date().toISOString(),plan:o,isPro:!0};if(!I.name||!I.email){alert("Please fill Name and Email to continue.");return}localStorage.setItem(gf,JSON.stringify(I)),g(!0),T(!1)},L=()=>{localStorage.removeItem(B),localStorage.removeItem(gf),g(!1),S(!1)},V=[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}],Q=y;return u.jsxs(Fw,{children:[u.jsxs(Ww,{children:[u.jsxs(Iw,{children:[u.jsxs(Pw,{children:[u.jsxs(e9,{children:[u.jsx(t9,{src:mt.avatar,alt:mt.name}),!y&&u.jsxs(n9,{"aria-hidden":"true",title:"Pro library locked",children:[u.jsx(Co,{size:12})," LOCKED"]})]}),u.jsxs(a9,{children:[u.jsxs(Ml,{children:[mt.concepts," ",u.jsx("span",{children:"concepts"})]}),u.jsxs(Ml,{children:[mt.students," ",u.jsx("span",{children:"students"})]}),u.jsxs(Ml,{children:[mt.learns," ",u.jsx("span",{children:"learns"})]})]})]}),u.jsxs(i9,{children:[u.jsxs(l9,{children:[u.jsxs(Ml,{children:[mt.concepts," ",u.jsx("span",{children:"concepts"})]}),u.jsxs(Ml,{children:[mt.students," ",u.jsx("span",{children:"students"})]}),u.jsxs(Ml,{children:[mt.learns," ",u.jsx("span",{children:"learns"})]})]}),u.jsx(r9,{children:mt.name}),u.jsx(o9,{children:mt.subject}),u.jsx(s9,{children:mt.bio}),u.jsxs(c9,{children:["🎓 ",mt.experience," years experience"]}),u.jsxs(u9,{children:[u.jsx(f9,{onClick:()=>a("/user/profile"),children:"My Profile"}),u.jsx(d9,{onClick:G,disabled:d,"data-joined":y,"aria-pressed":y,"aria-label":y?"Joined":"Join",title:y?"You're in!":"Join this teacher",children:y?u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[u.jsx(s6,{size:18})," Joined"]}):d?"Processing…":"Join"}),u.jsxs(h9,{children:[u.jsx(p9,{"aria-haspopup":"menu","aria-expanded":m,"aria-label":"More options",onClick:()=>S(I=>!I),title:"More options",children:"▼"}),m&&u.jsxs(m9,{role:"menu",children:[y&&u.jsxs(km,{role:"menuitem","data-danger":"true",onClick:L,title:"Cancel your membership",children:[u.jsx(Gu,{size:16})," Cancel membership"]}),u.jsx(km,{role:"menuitem",onClick:()=>S(!1),children:"Close"})]})]})]}),u.jsxs(g9,{hidden:Q,role:"note","aria-live":"polite",children:[u.jsxs(x9,{children:[u.jsx(Co,{size:18})," Pro library locked — get full access to all concepts & posts."]}),u.jsx(y9,{onClick:()=>s(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),u.jsx(v9,{children:u.jsx(b9,{children:mt.bookList.map((I,ce)=>{const de=!y&&ce>=N;return u.jsxs(S9,{onClick:()=>Y(ce),"aria-disabled":de,title:de?"Join to unlock":`Open ${I.title}`,children:[u.jsxs(j9,{$locked:de,children:[u.jsx(E9,{children:u.jsx(Io,{size:24})}),!y&&de&&u.jsxs(w9,{"aria-hidden":"true",children:[u.jsx(Co,{size:14,style:{marginRight:6}})," Locked"]})]}),u.jsx(C9,{children:I.title})]},ce)})})})]}),u.jsxs(T9,{children:[u.jsx(Nm,{$active:!0,children:u.jsx(x6,{size:20})}),u.jsx(Nm,{children:u.jsx(l6,{size:20})})]}),u.jsx(z9,{"aria-label":"Teacher posts",children:Array(9).fill(null).map((I,ce)=>{const de=!y&&ce>=$;return u.jsxs(M9,{$locked:de,"aria-hidden":!1,children:[u.jsx(Io,{size:24}),de&&u.jsxs(R9,{children:[u.jsx(Co,{size:16,style:{marginRight:6}})," Join to view"]})]},ce)})}),u.jsx(A9,{hidden:y,onClick:()=>s(!0),"aria-label":"Unlock all posts",children:"Unlock entire library"}),i&&u.jsx(_m,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:u.jsxs(Dm,{children:[u.jsxs($m,{children:[u.jsx(Bm,{id:"pricing-title",children:"Choose your plan"}),u.jsx(Lm,{onClick:()=>s(!1),"aria-label":"Close pricing",children:u.jsx(Gu,{size:18})})]}),u.jsx(O9,{children:V.map(I=>u.jsxs(k9,{onClick:()=>f(I.key),$active:o===I.key,"aria-pressed":o===I.key,children:[u.jsx("h4",{children:I.name}),u.jsx("strong",{children:I.price}),u.jsx("p",{children:I.desc})]},I.key))}),u.jsxs(N9,{children:[u.jsx(Hm,{onClick:()=>s(!1),children:"Not now"}),u.jsx(Um,{onClick:K,disabled:d,children:d?"Processing payment…":"Demo Pay"})]})]})}),w&&u.jsx(_m,{role:"dialog","aria-modal":"true","aria-labelledby":"profile-form-title",children:u.jsxs(Dm,{children:[u.jsxs($m,{children:[u.jsx(Bm,{id:"profile-form-title",children:"Create your student profile"}),u.jsx(Lm,{onClick:()=>T(!1),"aria-label":"Close profile form",children:u.jsx(Gu,{size:18})})]}),u.jsxs(_9,{children:[u.jsxs(xf,{children:[u.jsx(yf,{htmlFor:"pf-name",children:"Full Name"}),u.jsx(vf,{id:"pf-name",value:M.name,onChange:I=>R(ce=>({...ce,name:I.target.value})),placeholder:"e.g., Priya Sharma"})]}),u.jsxs(xf,{children:[u.jsx(yf,{htmlFor:"pf-email",children:"Email"}),u.jsx(vf,{id:"pf-email",type:"email",value:M.email,onChange:I=>R(ce=>({...ce,email:I.target.value})),placeholder:"you@example.com"})]}),u.jsxs(xf,{children:[u.jsx(yf,{htmlFor:"pf-avatar",children:"Avatar initials (optional)"}),u.jsx(vf,{id:"pf-avatar",value:M.avatar,onChange:I=>R(ce=>({...ce,avatar:I.target.value})),placeholder:"PS"})]})]}),u.jsxs(D9,{children:[u.jsx(Hm,{onClick:()=>T(!1),children:"Cancel"}),u.jsx(Um,{onClick:Z,children:"Save & Finish"})]})]})})]})}const B9=b.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,L9=b.aside`
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
`,U9=b.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,H9=b.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,Y9=b.aside`
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
`,q9=b.div`
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
`,G9=b.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,X9=b.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function V9(){const[a,i]=v.useState(360),[s,o]=v.useState(!1),f=v.useRef(null),d=350,h=600,y=g=>{g.preventDefault(),o(!0),f.current={startX:g.clientX,startWidth:a}};return v.useEffect(()=>{const g=(w,T,M)=>Math.min(Math.max(w,T),M),m=w=>{if(!s||!f.current)return;const{startX:T,startWidth:M}=f.current,R=T-w.clientX,N=g(M+R,d,h);i(N)},S=()=>{s&&(o(!1),f.current=null)};return s&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",S),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",S),document.body.style.cursor="",document.body.style.userSelect=""}},[s]),u.jsxs(B9,{children:[u.jsx(L9,{children:u.jsx(Rw,{})}),u.jsxs(U9,{children:[u.jsxs(H9,{$sidebarWidth:a,$isResizing:s,children:[u.jsx(G9,{children:u.jsx(Sw,{})}),u.jsxs(Iv,{children:[u.jsx(_a,{path:"/instalearn",element:u.jsx(T8,{})}),u.jsx(_a,{path:"/instalearn/teacher",element:u.jsx($9,{})}),u.jsx(_a,{path:"/instalearn/library",element:u.jsx(Q3,{})}),u.jsx(_a,{path:"/instalearn/notifications",element:u.jsx(hm,{})}),u.jsx(_a,{path:"/instalearn/more",element:u.jsx(hm,{})}),u.jsx(_a,{path:"/instalearn/profile",element:u.jsx(oS,{})})]})]}),u.jsxs(Y9,{$width:a,$isResizing:s,children:[u.jsx(q9,{className:s?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),u.jsx(Zw,{})]})]}),u.jsx(X9,{children:u.jsx(Jw,{})})]})}sv.createRoot(document.getElementById("root")).render(u.jsx(Sb,{children:u.jsx(V9,{})}));
