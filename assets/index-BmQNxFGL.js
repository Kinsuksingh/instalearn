(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(f){if(f.ep)return;f.ep=!0;const d=s(f);fetch(f.href,d)}})();function Zl(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Mu={exports:{}},$l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1;function Zy(){if(a1)return $l;a1=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function s(o,f,d){var h=null;if(d!==void 0&&(h=""+d),f.key!==void 0&&(h=""+f.key),"key"in f){d={};for(var y in f)y!=="key"&&(d[y]=f[y])}else d=f;return f=d.ref,{$$typeof:a,type:o,key:h,ref:f!==void 0?f:null,props:d}}return $l.Fragment=l,$l.jsx=s,$l.jsxs=s,$l}var i1;function Ky(){return i1||(i1=1,Mu.exports=Zy()),Mu.exports}var u=Ky(),Ou={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1;function Jy(){if(l1)return fe;l1=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.iterator;function z(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,$={};function B(E,H,F){this.props=E,this.context=H,this.refs=$,this.updater=F||A}B.prototype.isReactComponent={},B.prototype.setState=function(E,H){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,H,"setState")},B.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function q(){}q.prototype=B.prototype;function Y(E,H,F){this.props=E,this.context=H,this.refs=$,this.updater=F||A}var Z=Y.prototype=new q;Z.constructor=Y,k(Z,B.prototype),Z.isPureReactComponent=!0;var J=Array.isArray;function L(){}var V={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function W(E,H,F){var I=F.ref;return{$$typeof:a,type:E,key:H,ref:I!==void 0?I:null,props:F}}function ce(E,H){return W(E.type,H,E.props)}function de(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function Ye(E){var H={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(F){return H[F]})}var ee=/\/+/g;function ae(E,H){return typeof E=="object"&&E!==null&&E.key!=null?Ye(""+E.key):H.toString(36)}function xe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(L,L):(E.status="pending",E.then(function(H){E.status==="pending"&&(E.status="fulfilled",E.value=H)},function(H){E.status==="pending"&&(E.status="rejected",E.reason=H)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function _(E,H,F,I,re){var ue=typeof E;(ue==="undefined"||ue==="boolean")&&(E=null);var ye=!1;if(E===null)ye=!0;else switch(ue){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(E.$$typeof){case a:case l:ye=!0;break;case S:return ye=E._init,_(ye(E._payload),H,F,I,re)}}if(ye)return re=re(E),ye=I===""?"."+ae(E,0):I,J(re)?(F="",ye!=null&&(F=ye.replace(ee,"$&/")+"/"),_(re,H,F,"",function(Et){return Et})):re!=null&&(de(re)&&(re=ce(re,F+(re.key==null||E&&E.key===re.key?"":(""+re.key).replace(ee,"$&/")+"/")+ye)),H.push(re)),1;ye=0;var Ge=I===""?".":I+":";if(J(E))for(var Ce=0;Ce<E.length;Ce++)I=E[Ce],ue=Ge+ae(I,Ce),ye+=_(I,H,F,ue,re);else if(Ce=z(E),typeof Ce=="function")for(E=Ce.call(E),Ce=0;!(I=E.next()).done;)I=I.value,ue=Ge+ae(I,Ce++),ye+=_(I,H,F,ue,re);else if(ue==="object"){if(typeof E.then=="function")return _(xe(E),H,F,I,re);throw H=String(E),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ye}function K(E,H,F){if(E==null)return E;var I=[],re=0;return _(E,I,"","",function(ue){return H.call(F,ue,re++)}),I}function P(E){if(E._status===-1){var H=E._result;H=H(),H.then(function(F){(E._status===0||E._status===-1)&&(E._status=1,E._result=F)},function(F){(E._status===0||E._status===-1)&&(E._status=2,E._result=F)}),E._status===-1&&(E._status=0,E._result=H)}if(E._status===1)return E._result.default;throw E._result}var te=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},me={map:K,forEach:function(E,H,F){K(E,function(){H.apply(this,arguments)},F)},count:function(E){var H=0;return K(E,function(){H++}),H},toArray:function(E){return K(E,function(H){return H})||[]},only:function(E){if(!de(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return fe.Activity=w,fe.Children=me,fe.Component=B,fe.Fragment=s,fe.Profiler=f,fe.PureComponent=Y,fe.StrictMode=o,fe.Suspense=g,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,fe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return V.H.useMemoCache(E)}},fe.cache=function(E){return function(){return E.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(E,H,F){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var I=k({},E.props),re=E.key;if(H!=null)for(ue in H.key!==void 0&&(re=""+H.key),H)!Q.call(H,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&H.ref===void 0||(I[ue]=H[ue]);var ue=arguments.length-2;if(ue===1)I.children=F;else if(1<ue){for(var ye=Array(ue),Ge=0;Ge<ue;Ge++)ye[Ge]=arguments[Ge+2];I.children=ye}return W(E.type,re,I)},fe.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},fe.createElement=function(E,H,F){var I,re={},ue=null;if(H!=null)for(I in H.key!==void 0&&(ue=""+H.key),H)Q.call(H,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(re[I]=H[I]);var ye=arguments.length-2;if(ye===1)re.children=F;else if(1<ye){for(var Ge=Array(ye),Ce=0;Ce<ye;Ce++)Ge[Ce]=arguments[Ce+2];re.children=Ge}if(E&&E.defaultProps)for(I in ye=E.defaultProps,ye)re[I]===void 0&&(re[I]=ye[I]);return W(E,ue,re)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(E){return{$$typeof:y,render:E}},fe.isValidElement=de,fe.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:P}},fe.memo=function(E,H){return{$$typeof:m,type:E,compare:H===void 0?null:H}},fe.startTransition=function(E){var H=V.T,F={};V.T=F;try{var I=E(),re=V.S;re!==null&&re(F,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(L,te)}catch(ue){te(ue)}finally{H!==null&&F.types!==null&&(H.types=F.types),V.T=H}},fe.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},fe.use=function(E){return V.H.use(E)},fe.useActionState=function(E,H,F){return V.H.useActionState(E,H,F)},fe.useCallback=function(E,H){return V.H.useCallback(E,H)},fe.useContext=function(E){return V.H.useContext(E)},fe.useDebugValue=function(){},fe.useDeferredValue=function(E,H){return V.H.useDeferredValue(E,H)},fe.useEffect=function(E,H){return V.H.useEffect(E,H)},fe.useEffectEvent=function(E){return V.H.useEffectEvent(E)},fe.useId=function(){return V.H.useId()},fe.useImperativeHandle=function(E,H,F){return V.H.useImperativeHandle(E,H,F)},fe.useInsertionEffect=function(E,H){return V.H.useInsertionEffect(E,H)},fe.useLayoutEffect=function(E,H){return V.H.useLayoutEffect(E,H)},fe.useMemo=function(E,H){return V.H.useMemo(E,H)},fe.useOptimistic=function(E,H){return V.H.useOptimistic(E,H)},fe.useReducer=function(E,H,F){return V.H.useReducer(E,H,F)},fe.useRef=function(E){return V.H.useRef(E)},fe.useState=function(E){return V.H.useState(E)},fe.useSyncExternalStore=function(E,H,F){return V.H.useSyncExternalStore(E,H,F)},fe.useTransition=function(){return V.H.useTransition()},fe.version="19.2.0",fe}var r1;function Mf(){return r1||(r1=1,Ou.exports=Jy()),Ou.exports}var v=Mf();const ke=Zl(v);var ku={exports:{}},Bl={},Nu={exports:{}},_u={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1;function Fy(){return o1||(o1=1,(function(a){function l(_,K){var P=_.length;_.push(K);e:for(;0<P;){var te=P-1>>>1,me=_[te];if(0<f(me,K))_[te]=K,_[P]=me,P=te;else break e}}function s(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var K=_[0],P=_.pop();if(P!==K){_[0]=P;e:for(var te=0,me=_.length,E=me>>>1;te<E;){var H=2*(te+1)-1,F=_[H],I=H+1,re=_[I];if(0>f(F,P))I<me&&0>f(re,F)?(_[te]=re,_[I]=P,te=I):(_[te]=F,_[H]=P,te=H);else if(I<me&&0>f(re,P))_[te]=re,_[I]=P,te=I;else break e}}return K}function f(_,K){var P=_.sortIndex-K.sortIndex;return P!==0?P:_.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var h=Date,y=h.now();a.unstable_now=function(){return h.now()-y}}var g=[],m=[],S=1,w=null,T=3,z=!1,A=!1,k=!1,$=!1,B=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function Z(_){for(var K=s(m);K!==null;){if(K.callback===null)o(m);else if(K.startTime<=_)o(m),K.sortIndex=K.expirationTime,l(g,K);else break;K=s(m)}}function J(_){if(k=!1,Z(_),!A)if(s(g)!==null)A=!0,L||(L=!0,Ye());else{var K=s(m);K!==null&&xe(J,K.startTime-_)}}var L=!1,V=-1,Q=5,W=-1;function ce(){return $?!0:!(a.unstable_now()-W<Q)}function de(){if($=!1,L){var _=a.unstable_now();W=_;var K=!0;try{e:{A=!1,k&&(k=!1,q(V),V=-1),z=!0;var P=T;try{t:{for(Z(_),w=s(g);w!==null&&!(w.expirationTime>_&&ce());){var te=w.callback;if(typeof te=="function"){w.callback=null,T=w.priorityLevel;var me=te(w.expirationTime<=_);if(_=a.unstable_now(),typeof me=="function"){w.callback=me,Z(_),K=!0;break t}w===s(g)&&o(g),Z(_)}else o(g);w=s(g)}if(w!==null)K=!0;else{var E=s(m);E!==null&&xe(J,E.startTime-_),K=!1}}break e}finally{w=null,T=P,z=!1}K=void 0}}finally{K?Ye():L=!1}}}var Ye;if(typeof Y=="function")Ye=function(){Y(de)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ae=ee.port2;ee.port1.onmessage=de,Ye=function(){ae.postMessage(null)}}else Ye=function(){B(de,0)};function xe(_,K){V=B(function(){_(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(_){switch(T){case 1:case 2:case 3:var K=3;break;default:K=T}var P=T;T=K;try{return _()}finally{T=P}},a.unstable_requestPaint=function(){$=!0},a.unstable_runWithPriority=function(_,K){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var P=T;T=_;try{return K()}finally{T=P}},a.unstable_scheduleCallback=function(_,K,P){var te=a.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?te+P:te):P=te,_){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=P+me,_={id:S++,callback:K,priorityLevel:_,startTime:P,expirationTime:me,sortIndex:-1},P>te?(_.sortIndex=P,l(m,_),s(g)===null&&_===s(m)&&(k?(q(V),V=-1):k=!0,xe(J,P-te))):(_.sortIndex=me,l(g,_),A||z||(A=!0,L||(L=!0,Ye()))),_},a.unstable_shouldYield=ce,a.unstable_wrapCallback=function(_){var K=T;return function(){var P=T;T=K;try{return _.apply(this,arguments)}finally{T=P}}}})(_u)),_u}var s1;function Wy(){return s1||(s1=1,Nu.exports=Fy()),Nu.exports}var Du={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1;function Iy(){if(c1)return ut;c1=1;var a=Mf();function l(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(l(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(g,m,S){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:g,containerInfo:m,implementation:S}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ut.createPortal=function(g,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return d(g,m,null,S)},ut.flushSync=function(g){var m=h.T,S=o.p;try{if(h.T=null,o.p=2,g)return g()}finally{h.T=m,o.p=S,o.d.f()}},ut.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(g,m))},ut.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},ut.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var S=m.as,w=y(S,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,z=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?o.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:z}):S==="script"&&o.d.X(g,{crossOrigin:w,integrity:T,fetchPriority:z,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ut.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=y(m.as,m.crossOrigin);o.d.M(g,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(g)},ut.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,w=y(S,m.crossOrigin);o.d.L(g,S,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ut.preloadModule=function(g,m){if(typeof g=="string")if(m){var S=y(m.as,m.crossOrigin);o.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(g)},ut.requestFormReset=function(g){o.d.r(g)},ut.unstable_batchedUpdates=function(g,m){return g(m)},ut.useFormState=function(g,m,S){return h.H.useFormState(g,m,S)},ut.useFormStatus=function(){return h.H.useHostTransitionStatus()},ut.version="19.2.0",ut}var u1;function $m(){if(u1)return Du.exports;u1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Du.exports=Iy(),Du.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1;function Py(){if(f1)return Bl;f1=1;var a=Wy(),l=Mf(),s=$m();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return g(r),e;if(c===i)return g(r),t;c=c.sibling}throw Error(o(188))}if(n.return!==i.return)n=r,i=c;else{for(var p=!1,x=r.child;x;){if(x===n){p=!0,n=r,i=c;break}if(x===i){p=!0,i=r,n=c;break}x=x.sibling}if(!p){for(x=c.child;x;){if(x===n){p=!0,n=c,i=r;break}if(x===i){p=!0,i=c,n=r;break}x=x.sibling}if(!p)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,T=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=de&&e[de]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case B:return"Profiler";case $:return"StrictMode";case J:return"Suspense";case L:return"SuspenseList";case W:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case Y:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var xe=Array.isArray,_=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},te=[],me=-1;function E(e){return{current:e}}function H(e){0>me||(e.current=te[me],te[me]=null,me--)}function F(e,t){me++,te[me]=e.current,e.current=t}var I=E(null),re=E(null),ue=E(null),ye=E(null);function Ge(e,t){switch(F(ue,t),F(re,e),F(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Th(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Th(t),e=zh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(I),F(I,e)}function Ce(){H(I),H(re),H(ue)}function Et(e){e.memoizedState!==null&&F(ye,e);var t=I.current,n=zh(t,e.type);t!==n&&(F(re,e),F(I,n))}function Jt(e){re.current===e&&(H(I),H(re)),ye.current===e&&(H(ye),kl._currentValue=P)}var dt,La;function Bt(e){if(dt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dt=t&&t[1]||"",La=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+e+La}var Be=!1;function Ua(e,t){if(!e||Be)return"";Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(D){var N=D}Reflect.construct(e,[],X)}else{try{X.call()}catch(D){N=D}e.call(X.prototype)}}else{try{throw Error()}catch(D){N=D}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(D){if(D&&N&&typeof D.stack=="string")return[D.stack,N.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),p=c[0],x=c[1];if(p&&x){var j=p.split(`
`),O=x.split(`
`);for(r=i=0;i<j.length&&!j[i].includes("DetermineComponentFrameRoot");)i++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(i===j.length||r===O.length)for(i=j.length-1,r=O.length-1;1<=i&&0<=r&&j[i]!==O[r];)r--;for(;1<=i&&0<=r;i--,r--)if(j[i]!==O[r]){if(i!==1||r!==1)do if(i--,r--,0>r||j[i]!==O[r]){var U=`
`+j[i].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=i&&0<=r);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Bt(n):""}function Gi(e,t){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return e.child!==t&&t!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Ua(e.type,!1);case 11:return Ua(e.type.render,!1);case 1:return Ua(e.type,!0);case 31:return Bt("Activity");default:return""}}function ad(e){try{var t="",n=null;do t+=Gi(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ms=Object.prototype.hasOwnProperty,gs=a.unstable_scheduleCallback,xs=a.unstable_cancelCallback,C2=a.unstable_shouldYield,T2=a.unstable_requestPaint,Ct=a.unstable_now,z2=a.unstable_getCurrentPriorityLevel,id=a.unstable_ImmediatePriority,ld=a.unstable_UserBlockingPriority,er=a.unstable_NormalPriority,R2=a.unstable_LowPriority,rd=a.unstable_IdlePriority,A2=a.log,M2=a.unstable_setDisableYieldValue,Xi=null,Tt=null;function Hn(e){if(typeof A2=="function"&&M2(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Xi,e)}catch{}}var zt=Math.clz32?Math.clz32:N2,O2=Math.log,k2=Math.LN2;function N2(e){return e>>>=0,e===0?32:31-(O2(e)/k2|0)|0}var tr=256,nr=262144,ar=4194304;function ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ir(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var x=i&134217727;return x!==0?(i=x&~c,i!==0?r=ga(i):(p&=x,p!==0?r=ga(p):n||(n=x&~e,n!==0&&(r=ga(n))))):(x=i&~c,x!==0?r=ga(x):p!==0?r=ga(p):n||(n=i&~e,n!==0&&(r=ga(n)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:r}function Vi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function od(){var e=ar;return ar<<=1,(ar&62914560)===0&&(ar=4194304),e}function ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function D2(e,t,n,i,r,c){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,j=e.expirationTimes,O=e.hiddenUpdates;for(n=p&~n;0<n;){var U=31-zt(n),X=1<<U;x[U]=0,j[U]=-1;var N=O[U];if(N!==null)for(O[U]=null,U=0;U<N.length;U++){var D=N[U];D!==null&&(D.lane&=-536870913)}n&=~X}i!==0&&sd(e,i,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function sd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-zt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function cd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-zt(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function ud(e,t){var n=t&-t;return n=(n&42)!==0?1:vs(n),(n&(e.suspendedLanes|t))!==0?0:n}function vs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fd(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Fh(e.type))}function dd(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Yn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Yn,gt="__reactProps$"+Yn,Ha="__reactContainer$"+Yn,Ss="__reactEvents$"+Yn,$2="__reactListeners$"+Yn,B2="__reactHandles$"+Yn,pd="__reactResources$"+Yn,Zi="__reactMarker$"+Yn;function ws(e){delete e[lt],delete e[gt],delete e[Ss],delete e[$2],delete e[B2]}function Ya(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ha]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_h(e);e!==null;){if(n=e[lt])return n;e=_h(e)}return t}e=n,n=e.parentNode}return null}function qa(e){if(e=e[lt]||e[Ha]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ki(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ga(e){var t=e[pd];return t||(t=e[pd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Zi]=!0}var hd=new Set,md={};function xa(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(md[e]=t,e=0;e<t.length;e++)hd.add(t[e])}var L2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gd={},xd={};function U2(e){return ms.call(xd,e)?!0:ms.call(gd,e)?!1:L2.test(e)?xd[e]=!0:(gd[e]=!0,!1)}function lr(e,t,n){if(U2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function rr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H2(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(p){n=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function js(e){if(!e._valueTracker){var t=yd(e)?"checked":"value";e._valueTracker=H2(e,t,""+e[t])}}function vd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=yd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Y2=/[\n"\\]/g;function Ut(e){return e.replace(Y2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Es(e,t,n,i,r,c,p,x){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Cs(e,p,Lt(t)):n!=null?Cs(e,p,Lt(n)):i!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Lt(x):e.removeAttribute("name")}function bd(e,t,n,i,r,c,p,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){js(e);return}n=n!=null?""+Lt(n):"",t=t!=null?""+Lt(t):n,x||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=x?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),js(e)}function Cs(e,t,n){t==="number"&&or(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Va(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Sd(e,t,n){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Lt(n):""}function wd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(xe(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Lt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),js(e)}function Qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var q2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||q2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ed(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&jd(e,r,i)}else for(var c in t)t.hasOwnProperty(c)&&jd(e,c,t[c])}function Ts(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),X2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sr(e){return X2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var zs=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ka=null;function Cd(e){var t=qa(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Es(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[gt]||null;if(!r)throw Error(o(90));Es(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&vd(i)}break e;case"textarea":Sd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Va(e,!!n.multiple,t,!1)}}}var As=!1;function Td(e,t,n){if(As)return e(t,n);As=!0;try{var i=e(t);return i}finally{if(As=!1,(Za!==null||Ka!==null)&&(Jr(),Za&&(t=Za,e=Ka,Ka=Za=null,Cd(t),e)))for(t=0;t<e.length;t++)Cd(e[t])}}function Ji(e,t){var n=e.stateNode;if(n===null)return null;var i=n[gt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=!1;if(pn)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{Ms=!1}var qn=null,Os=null,cr=null;function zd(){if(cr)return cr;var e,t=Os,n=t.length,i,r="value"in qn?qn.value:qn.textContent,c=r.length;for(e=0;e<n&&t[e]===r[e];e++);var p=n-e;for(i=1;i<=p&&t[n-i]===r[c-i];i++);return cr=r.slice(e,1<i?1-i:void 0)}function ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function Rd(){return!1}function xt(e){function t(n,i,r,c,p){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?fr:Rd,this.isPropagationStopped=Rd,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),t}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dr=xt(ya),Wi=w({},ya,{view:0,detail:0}),V2=xt(Wi),ks,Ns,Ii,pr=w({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(ks=e.screenX-Ii.screenX,Ns=e.screenY-Ii.screenY):Ns=ks=0,Ii=e),ks)},movementY:function(e){return"movementY"in e?e.movementY:Ns}}),Ad=xt(pr),Q2=w({},pr,{dataTransfer:0}),Z2=xt(Q2),K2=w({},Wi,{relatedTarget:0}),_s=xt(K2),J2=w({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),F2=xt(J2),W2=w({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I2=xt(W2),P2=w({},ya,{data:0}),Md=xt(P2),ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nx[e])?!!t[e]:!1}function Ds(){return ax}var ix=w({},Wi,{key:function(e){if(e.key){var t=ex[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(e){return e.type==="keypress"?ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lx=xt(ix),rx=w({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=xt(rx),ox=w({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),sx=xt(ox),cx=w({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=xt(cx),fx=w({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dx=xt(fx),px=w({},ya,{newState:0,oldState:0}),hx=xt(px),mx=[9,13,27,32],$s=pn&&"CompositionEvent"in window,Pi=null;pn&&"documentMode"in document&&(Pi=document.documentMode);var gx=pn&&"TextEvent"in window&&!Pi,kd=pn&&(!$s||Pi&&8<Pi&&11>=Pi),Nd=" ",_d=!1;function Dd(e,t){switch(e){case"keyup":return mx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function xx(e,t){switch(e){case"compositionend":return $d(t);case"keypress":return t.which!==32?null:(_d=!0,Nd);case"textInput":return e=t.data,e===Nd&&_d?null:e;default:return null}}function yx(e,t){if(Ja)return e==="compositionend"||!$s&&Dd(e,t)?(e=zd(),cr=Os=qn=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kd&&t.locale!=="ko"?null:t.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vx[e.type]:t==="textarea"}function Ld(e,t,n,i){Za?Ka?Ka.push(i):Ka=[i]:Za=i,t=no(t,"onChange"),0<t.length&&(n=new dr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var el=null,tl=null;function bx(e){bh(e,0)}function hr(e){var t=Ki(e);if(vd(t))return e}function Ud(e,t){if(e==="change")return t}var Hd=!1;if(pn){var Bs;if(pn){var Ls="oninput"in document;if(!Ls){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),Ls=typeof Yd.oninput=="function"}Bs=Ls}else Bs=!1;Hd=Bs&&(!document.documentMode||9<document.documentMode)}function qd(){el&&(el.detachEvent("onpropertychange",Gd),tl=el=null)}function Gd(e){if(e.propertyName==="value"&&hr(tl)){var t=[];Ld(t,tl,e,Rs(e)),Td(bx,t)}}function Sx(e,t,n){e==="focusin"?(qd(),el=t,tl=n,el.attachEvent("onpropertychange",Gd)):e==="focusout"&&qd()}function wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hr(tl)}function jx(e,t){if(e==="click")return hr(t)}function Ex(e,t){if(e==="input"||e==="change")return hr(t)}function Cx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Cx;function nl(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ms.call(t,r)||!Rt(e[r],t[r]))return!1}return!0}function Xd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,t){var n=Xd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xd(n)}}function Qd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=or(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=or(e.document)}return t}function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Tx=pn&&"documentMode"in document&&11>=document.documentMode,Fa=null,Hs=null,al=null,Ys=!1;function Kd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ys||Fa==null||Fa!==or(i)||(i=Fa,"selectionStart"in i&&Us(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),al&&nl(al,i)||(al=i,i=no(Hs,"onSelect"),0<i.length&&(t=new dr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Fa)))}function va(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wa={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},qs={},Jd={};pn&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function ba(e){if(qs[e])return qs[e];if(!Wa[e])return e;var t=Wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jd)return qs[e]=t[n];return e}var Fd=ba("animationend"),Wd=ba("animationiteration"),Id=ba("animationstart"),zx=ba("transitionrun"),Rx=ba("transitionstart"),Ax=ba("transitioncancel"),Pd=ba("transitionend"),e0=new Map,Gs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gs.push("scrollEnd");function Ft(e,t){e0.set(e,t),xa(t,[e])}var mr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],Ia=0,Xs=0;function gr(){for(var e=Ia,t=Xs=Ia=0;t<e;){var n=Ht[t];Ht[t++]=null;var i=Ht[t];Ht[t++]=null;var r=Ht[t];Ht[t++]=null;var c=Ht[t];if(Ht[t++]=null,i!==null&&r!==null){var p=i.pending;p===null?r.next=r:(r.next=p.next,p.next=r),i.pending=r}c!==0&&t0(n,r,c)}}function xr(e,t,n,i){Ht[Ia++]=e,Ht[Ia++]=t,Ht[Ia++]=n,Ht[Ia++]=i,Xs|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Vs(e,t,n,i){return xr(e,t,n,i),yr(e)}function Sa(e,t){return xr(e,null,null,t),yr(e)}function t0(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-zt(n),e=c.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),c):null}function yr(e){if(50<Cl)throw Cl=0,eu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pa={};function Mx(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,i){return new Mx(e,t,n,i)}function Qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function n0(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vr(e,t,n,i,r,c){var p=0;if(i=e,typeof e=="function")Qs(e)&&(p=1);else if(typeof e=="string")p=Dy(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case W:return e=At(31,n,t,r),e.elementType=W,e.lanes=c,e;case k:return wa(n.children,r,c,t);case $:p=8,r|=24;break;case B:return e=At(12,n,t,r|2),e.elementType=B,e.lanes=c,e;case J:return e=At(13,n,t,r),e.elementType=J,e.lanes=c,e;case L:return e=At(19,n,t,r),e.elementType=L,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:p=10;break e;case q:p=9;break e;case Z:p=11;break e;case V:p=14;break e;case Q:p=16,i=null;break e}p=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=At(p,n,t,r),t.elementType=e,t.type=i,t.lanes=c,t}function wa(e,t,n,i){return e=At(7,e,i,t),e.lanes=n,e}function Zs(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function a0(e){var t=At(18,null,null,0);return t.stateNode=e,t}function Ks(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var i0=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var n=i0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ad(t)},i0.set(e,t),t)}return{value:e,source:t,stack:ad(t)}}var ei=[],ti=0,br=null,il=0,qt=[],Gt=0,Gn=null,nn=1,an="";function mn(e,t){ei[ti++]=il,ei[ti++]=br,br=e,il=t}function l0(e,t,n){qt[Gt++]=nn,qt[Gt++]=an,qt[Gt++]=Gn,Gn=e;var i=nn;e=an;var r=32-zt(i)-1;i&=~(1<<r),n+=1;var c=32-zt(t)+r;if(30<c){var p=r-r%5;c=(i&(1<<p)-1).toString(32),i>>=p,r-=p,nn=1<<32-zt(t)+r|n<<r|i,an=c+e}else nn=1<<c|n<<r|i,an=e}function Js(e){e.return!==null&&(mn(e,1),l0(e,1,0))}function Fs(e){for(;e===br;)br=ei[--ti],ei[ti]=null,il=ei[--ti],ei[ti]=null;for(;e===Gn;)Gn=qt[--Gt],qt[Gt]=null,an=qt[--Gt],qt[Gt]=null,nn=qt[--Gt],qt[Gt]=null}function r0(e,t){qt[Gt++]=nn,qt[Gt++]=an,qt[Gt++]=Gn,nn=t.id,an=t.overflow,Gn=e}var rt=null,Le=null,je=!1,Xn=null,Xt=!1,Ws=Error(o(519));function Vn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(Yt(t,e)),Ws}function o0(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[lt]=e,t[gt]=i,n){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(n=0;n<zl.length;n++)be(zl[n],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),bd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),wd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Eh(t.textContent,n)?(i.popover!=null&&(be("beforetoggle",t),be("toggle",t)),i.onScroll!=null&&be("scroll",t),i.onScrollEnd!=null&&be("scrollend",t),i.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Vn(e,!0)}function s0(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:rt=rt.return}}function ni(e){if(e!==rt)return!1;if(!je)return s0(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||mu(e.type,e.memoizedProps)),n=!n),n&&Le&&Vn(e),s0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=Nh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=Nh(e)}else t===27?(t=Le,la(e.type)?(e=bu,bu=null,Le=e):Le=t):Le=rt?Qt(e.stateNode.nextSibling):null;return!0}function ja(){Le=rt=null,je=!1}function Is(){var e=Xn;return e!==null&&(St===null?St=e:St.push.apply(St,e),Xn=null),e}function ll(e){Xn===null?Xn=[e]:Xn.push(e)}var Ps=E(null),Ea=null,gn=null;function Qn(e,t,n){F(Ps,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=Ps.current,H(Ps)}function ec(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function tc(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var x=c;c=r;for(var j=0;j<t.length;j++)if(x.context===t[j]){c.lanes|=n,x=c.alternate,x!==null&&(x.lanes|=n),ec(c.return,n,e),i||(p=null);break e}c=x.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(o(341));p.lanes|=n,c=p.alternate,c!==null&&(c.lanes|=n),ec(p,n,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function ai(e,t,n,i){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var x=r.type;Rt(r.pendingProps.value,p.value)||(e!==null?e.push(x):e=[x])}}else if(r===ye.current){if(p=r.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(kl):e=[kl])}r=r.return}e!==null&&tc(t,e,n,i),t.flags|=262144}function Sr(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Ea=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return c0(Ea,e)}function wr(e,t){return Ea===null&&Ca(e),c0(e,t)}function c0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(o(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var Ox=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},kx=a.unstable_scheduleCallback,Nx=a.unstable_NormalPriority,Je={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nc(){return{controller:new Ox,data:new Map,refCount:0}}function rl(e){e.refCount--,e.refCount===0&&kx(Nx,function(){e.controller.abort()})}var ol=null,ac=0,ii=0,li=null;function _x(e,t){if(ol===null){var n=ol=[];ac=0,ii=ru(),li={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ac++,t.then(u0,u0),t}function u0(){if(--ac===0&&ol!==null){li!==null&&(li.status="fulfilled");var e=ol;ol=null,ii=0,li=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Dx(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var f0=_.S;_.S=function(e,t){Kp=Ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_x(e,t),f0!==null&&f0(e,t)};var Ta=E(null);function ic(){var e=Ta.current;return e!==null?e:$e.pooledCache}function jr(e,t){t===null?F(Ta,Ta.current):F(Ta,t.pool)}function d0(){var e=ic();return e===null?null:{parent:Je._currentValue,pool:e}}var ri=Error(o(460)),lc=Error(o(474)),Er=Error(o(542)),Cr={then:function(){}};function p0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function h0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,g0(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,g0(e),e}throw Ra=t,ri}}function za(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ra=n,ri):n}}var Ra=null;function m0(){if(Ra===null)throw Error(o(459));var e=Ra;return Ra=null,e}function g0(e){if(e===ri||e===Er)throw Error(o(483))}var oi=null,sl=0;function Tr(e){var t=sl;return sl+=1,oi===null&&(oi=[]),h0(oi,e,t)}function cl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function zr(e,t){throw t.$$typeof===T?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function x0(e){function t(R,C){if(e){var M=R.deletions;M===null?(R.deletions=[C],R.flags|=16):M.push(C)}}function n(R,C){if(!e)return null;for(;C!==null;)t(R,C),C=C.sibling;return null}function i(R){for(var C=new Map;R!==null;)R.key!==null?C.set(R.key,R):C.set(R.index,R),R=R.sibling;return C}function r(R,C){return R=hn(R,C),R.index=0,R.sibling=null,R}function c(R,C,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<C?(R.flags|=67108866,C):M):(R.flags|=67108866,C)):(R.flags|=1048576,C)}function p(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function x(R,C,M,G){return C===null||C.tag!==6?(C=Zs(M,R.mode,G),C.return=R,C):(C=r(C,M),C.return=R,C)}function j(R,C,M,G){var oe=M.type;return oe===k?U(R,C,M.props.children,G,M.key):C!==null&&(C.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Q&&za(oe)===C.type)?(C=r(C,M.props),cl(C,M),C.return=R,C):(C=vr(M.type,M.key,M.props,null,R.mode,G),cl(C,M),C.return=R,C)}function O(R,C,M,G){return C===null||C.tag!==4||C.stateNode.containerInfo!==M.containerInfo||C.stateNode.implementation!==M.implementation?(C=Ks(M,R.mode,G),C.return=R,C):(C=r(C,M.children||[]),C.return=R,C)}function U(R,C,M,G,oe){return C===null||C.tag!==7?(C=wa(M,R.mode,G,oe),C.return=R,C):(C=r(C,M),C.return=R,C)}function X(R,C,M){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Zs(""+C,R.mode,M),C.return=R,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case z:return M=vr(C.type,C.key,C.props,null,R.mode,M),cl(M,C),M.return=R,M;case A:return C=Ks(C,R.mode,M),C.return=R,C;case Q:return C=za(C),X(R,C,M)}if(xe(C)||Ye(C))return C=wa(C,R.mode,M,null),C.return=R,C;if(typeof C.then=="function")return X(R,Tr(C),M);if(C.$$typeof===Y)return X(R,wr(R,C),M);zr(R,C)}return null}function N(R,C,M,G){var oe=C!==null?C.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return oe!==null?null:x(R,C,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case z:return M.key===oe?j(R,C,M,G):null;case A:return M.key===oe?O(R,C,M,G):null;case Q:return M=za(M),N(R,C,M,G)}if(xe(M)||Ye(M))return oe!==null?null:U(R,C,M,G,null);if(typeof M.then=="function")return N(R,C,Tr(M),G);if(M.$$typeof===Y)return N(R,C,wr(R,M),G);zr(R,M)}return null}function D(R,C,M,G,oe){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return R=R.get(M)||null,x(C,R,""+G,oe);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case z:return R=R.get(G.key===null?M:G.key)||null,j(C,R,G,oe);case A:return R=R.get(G.key===null?M:G.key)||null,O(C,R,G,oe);case Q:return G=za(G),D(R,C,M,G,oe)}if(xe(G)||Ye(G))return R=R.get(M)||null,U(C,R,G,oe,null);if(typeof G.then=="function")return D(R,C,M,Tr(G),oe);if(G.$$typeof===Y)return D(R,C,M,wr(C,G),oe);zr(C,G)}return null}function ne(R,C,M,G){for(var oe=null,Te=null,ie=C,he=C=0,we=null;ie!==null&&he<M.length;he++){ie.index>he?(we=ie,ie=null):we=ie.sibling;var ze=N(R,ie,M[he],G);if(ze===null){ie===null&&(ie=we);break}e&&ie&&ze.alternate===null&&t(R,ie),C=c(ze,C,he),Te===null?oe=ze:Te.sibling=ze,Te=ze,ie=we}if(he===M.length)return n(R,ie),je&&mn(R,he),oe;if(ie===null){for(;he<M.length;he++)ie=X(R,M[he],G),ie!==null&&(C=c(ie,C,he),Te===null?oe=ie:Te.sibling=ie,Te=ie);return je&&mn(R,he),oe}for(ie=i(ie);he<M.length;he++)we=D(ie,R,he,M[he],G),we!==null&&(e&&we.alternate!==null&&ie.delete(we.key===null?he:we.key),C=c(we,C,he),Te===null?oe=we:Te.sibling=we,Te=we);return e&&ie.forEach(function(ua){return t(R,ua)}),je&&mn(R,he),oe}function se(R,C,M,G){if(M==null)throw Error(o(151));for(var oe=null,Te=null,ie=C,he=C=0,we=null,ze=M.next();ie!==null&&!ze.done;he++,ze=M.next()){ie.index>he?(we=ie,ie=null):we=ie.sibling;var ua=N(R,ie,ze.value,G);if(ua===null){ie===null&&(ie=we);break}e&&ie&&ua.alternate===null&&t(R,ie),C=c(ua,C,he),Te===null?oe=ua:Te.sibling=ua,Te=ua,ie=we}if(ze.done)return n(R,ie),je&&mn(R,he),oe;if(ie===null){for(;!ze.done;he++,ze=M.next())ze=X(R,ze.value,G),ze!==null&&(C=c(ze,C,he),Te===null?oe=ze:Te.sibling=ze,Te=ze);return je&&mn(R,he),oe}for(ie=i(ie);!ze.done;he++,ze=M.next())ze=D(ie,R,he,ze.value,G),ze!==null&&(e&&ze.alternate!==null&&ie.delete(ze.key===null?he:ze.key),C=c(ze,C,he),Te===null?oe=ze:Te.sibling=ze,Te=ze);return e&&ie.forEach(function(Qy){return t(R,Qy)}),je&&mn(R,he),oe}function De(R,C,M,G){if(typeof M=="object"&&M!==null&&M.type===k&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case z:e:{for(var oe=M.key;C!==null;){if(C.key===oe){if(oe=M.type,oe===k){if(C.tag===7){n(R,C.sibling),G=r(C,M.props.children),G.return=R,R=G;break e}}else if(C.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Q&&za(oe)===C.type){n(R,C.sibling),G=r(C,M.props),cl(G,M),G.return=R,R=G;break e}n(R,C);break}else t(R,C);C=C.sibling}M.type===k?(G=wa(M.props.children,R.mode,G,M.key),G.return=R,R=G):(G=vr(M.type,M.key,M.props,null,R.mode,G),cl(G,M),G.return=R,R=G)}return p(R);case A:e:{for(oe=M.key;C!==null;){if(C.key===oe)if(C.tag===4&&C.stateNode.containerInfo===M.containerInfo&&C.stateNode.implementation===M.implementation){n(R,C.sibling),G=r(C,M.children||[]),G.return=R,R=G;break e}else{n(R,C);break}else t(R,C);C=C.sibling}G=Ks(M,R.mode,G),G.return=R,R=G}return p(R);case Q:return M=za(M),De(R,C,M,G)}if(xe(M))return ne(R,C,M,G);if(Ye(M)){if(oe=Ye(M),typeof oe!="function")throw Error(o(150));return M=oe.call(M),se(R,C,M,G)}if(typeof M.then=="function")return De(R,C,Tr(M),G);if(M.$$typeof===Y)return De(R,C,wr(R,M),G);zr(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,C!==null&&C.tag===6?(n(R,C.sibling),G=r(C,M),G.return=R,R=G):(n(R,C),G=Zs(M,R.mode,G),G.return=R,R=G),p(R)):n(R,C)}return function(R,C,M,G){try{sl=0;var oe=De(R,C,M,G);return oi=null,oe}catch(ie){if(ie===ri||ie===Er)throw ie;var Te=At(29,ie,null,R.mode);return Te.lanes=G,Te.return=R,Te}finally{}}}var Aa=x0(!0),y0=x0(!1),Zn=!1;function rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Re&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=yr(e),t0(e,null,n),t}return xr(e,i,t,n),yr(e)}function ul(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,cd(e,n)}}function sc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?r=c=t:c=c.next=t}else r=c=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var cc=!1;function fl(){if(cc){var e=li;if(e!==null)throw e}}function dl(e,t,n,i){cc=!1;var r=e.updateQueue;Zn=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,x=r.shared.pending;if(x!==null){r.shared.pending=null;var j=x,O=j.next;j.next=null,p===null?c=O:p.next=O,p=j;var U=e.alternate;U!==null&&(U=U.updateQueue,x=U.lastBaseUpdate,x!==p&&(x===null?U.firstBaseUpdate=O:x.next=O,U.lastBaseUpdate=j))}if(c!==null){var X=r.baseState;p=0,U=O=j=null,x=c;do{var N=x.lane&-536870913,D=N!==x.lane;if(D?(Se&N)===N:(i&N)===N){N!==0&&N===ii&&(cc=!0),U!==null&&(U=U.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ne=e,se=x;N=t;var De=n;switch(se.tag){case 1:if(ne=se.payload,typeof ne=="function"){X=ne.call(De,X,N);break e}X=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=se.payload,N=typeof ne=="function"?ne.call(De,X,N):ne,N==null)break e;X=w({},X,N);break e;case 2:Zn=!0}}N=x.callback,N!==null&&(e.flags|=64,D&&(e.flags|=8192),D=r.callbacks,D===null?r.callbacks=[N]:D.push(N))}else D={lane:N,tag:x.tag,payload:x.payload,callback:x.callback,next:null},U===null?(O=U=D,j=X):U=U.next=D,p|=N;if(x=x.next,x===null){if(x=r.shared.pending,x===null)break;D=x,x=D.next,D.next=null,r.lastBaseUpdate=D,r.shared.pending=null}}while(!0);U===null&&(j=X),r.baseState=j,r.firstBaseUpdate=O,r.lastBaseUpdate=U,c===null&&(r.shared.lanes=0),ea|=p,e.lanes=p,e.memoizedState=X}}function v0(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function b0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)v0(n[e],t)}var si=E(null),Rr=E(0);function S0(e,t){e=Tn,F(Rr,e),F(si,t),Tn=e|t.baseLanes}function uc(){F(Rr,Tn),F(si,si.current)}function fc(){Tn=Rr.current,H(si),H(Rr)}var Mt=E(null),Vt=null;function Fn(e){var t=e.alternate;F(Ze,Ze.current&1),F(Mt,e),Vt===null&&(t===null||si.current!==null||t.memoizedState!==null)&&(Vt=e)}function dc(e){F(Ze,Ze.current),F(Mt,e),Vt===null&&(Vt=e)}function w0(e){e.tag===22?(F(Ze,Ze.current),F(Mt,e),Vt===null&&(Vt=e)):Wn()}function Wn(){F(Ze,Ze.current),F(Mt,Mt.current)}function Ot(e){H(Mt),Vt===e&&(Vt=null),H(Ze)}var Ze=E(0);function Ar(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||yu(n)||vu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yn=0,pe=null,Ne=null,Fe=null,Mr=!1,ci=!1,Ma=!1,Or=0,pl=0,ui=null,$x=0;function Ve(){throw Error(o(321))}function pc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function hc(e,t,n,i,r,c){return yn=c,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?lp:Ac,Ma=!1,c=n(i,r),Ma=!1,ci&&(c=E0(t,n,i,r)),j0(e),c}function j0(e){_.H=gl;var t=Ne!==null&&Ne.next!==null;if(yn=0,Fe=Ne=pe=null,Mr=!1,pl=0,ui=null,t)throw Error(o(300));e===null||We||(e=e.dependencies,e!==null&&Sr(e)&&(We=!0))}function E0(e,t,n,i){pe=e;var r=0;do{if(ci&&(ui=null),pl=0,ci=!1,25<=r)throw Error(o(301));if(r+=1,Fe=Ne=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_.H=rp,c=t(n,i)}while(ci);return c}function Bx(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?hl(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(pe.flags|=1024),t}function mc(){var e=Or!==0;return Or=0,e}function gc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xc(e){if(Mr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Mr=!1}yn=0,Fe=Ne=pe=null,ci=!1,pl=Or=0,ui=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?pe.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ke(){if(Ne===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Fe===null?pe.memoizedState:Fe.next;if(t!==null)Fe=t,Ne=e;else{if(e===null)throw pe.alternate===null?Error(o(467)):Error(o(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Fe===null?pe.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function kr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(e){var t=pl;return pl+=1,ui===null&&(ui=[]),e=h0(ui,e,t),t=pe,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?lp:Ac),e}function Nr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hl(e);if(e.$$typeof===Y)return ot(e)}throw Error(o(438,String(e)))}function yc(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=pe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=kr(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ce;return t.index++,n}function vn(e,t){return typeof t=="function"?t(e):t}function _r(e){var t=Ke();return vc(t,Ne,e)}function vc(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var r=e.baseQueue,c=i.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}t.baseQueue=r=c,i.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var x=p=null,j=null,O=t,U=!1;do{var X=O.lane&-536870913;if(X!==O.lane?(Se&X)===X:(yn&X)===X){var N=O.revertLane;if(N===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),X===ii&&(U=!0);else if((yn&N)===N){O=O.next,N===ii&&(U=!0);continue}else X={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},j===null?(x=j=X,p=c):j=j.next=X,pe.lanes|=N,ea|=N;X=O.action,Ma&&n(c,X),c=O.hasEagerState?O.eagerState:n(c,X)}else N={lane:X,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},j===null?(x=j=N,p=c):j=j.next=N,pe.lanes|=X,ea|=X;O=O.next}while(O!==null&&O!==t);if(j===null?p=c:j.next=x,!Rt(c,e.memoizedState)&&(We=!0,U&&(n=li,n!==null)))throw n;e.memoizedState=c,e.baseState=p,e.baseQueue=j,i.lastRenderedState=c}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function bc(e){var t=Ke(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,c=t.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);Rt(c,t.memoizedState)||(We=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,i]}function C0(e,t,n){var i=pe,r=Ke(),c=je;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var p=!Rt((Ne||r).memoizedState,n);if(p&&(r.memoizedState=n,We=!0),r=r.queue,jc(R0.bind(null,i,r,e),[e]),r.getSnapshot!==t||p||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,fi(9,{destroy:void 0},z0.bind(null,i,r,n,t),null),$e===null)throw Error(o(349));c||(yn&127)!==0||T0(i,t,n)}return n}function T0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=kr(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function z0(e,t,n,i){t.value=n,t.getSnapshot=i,A0(t)&&M0(e)}function R0(e,t,n){return n(function(){A0(t)&&M0(e)})}function A0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function M0(e){var t=Sa(e,2);t!==null&&wt(t,e,2)}function Sc(e){var t=pt();if(typeof e=="function"){var n=e;if(e=n(),Ma){Hn(!0);try{n()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},t}function O0(e,t,n,i){return e.baseState=n,vc(e,Ne,typeof i=="function"?i:vn)}function Lx(e,t,n,i,r){if(Br(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};_.T!==null?n(!0):c.isTransition=!1,i(c),n=t.pending,n===null?(c.next=t.pending=c,k0(t,c)):(c.next=n.next,t.pending=n.next=c)}}function k0(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var c=_.T,p={};_.T=p;try{var x=n(r,i),j=_.S;j!==null&&j(p,x),N0(e,t,x)}catch(O){wc(e,t,O)}finally{c!==null&&p.types!==null&&(c.types=p.types),_.T=c}}else try{c=n(r,i),N0(e,t,c)}catch(O){wc(e,t,O)}}function N0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){_0(e,t,i)},function(i){return wc(e,t,i)}):_0(e,t,n)}function _0(e,t,n){t.status="fulfilled",t.value=n,D0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,k0(e,n)))}function wc(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,D0(t),t=t.next;while(t!==i)}e.action=null}function D0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $0(e,t){return t}function B0(e,t){if(je){var n=$e.formState;if(n!==null){e:{var i=pe;if(je){if(Le){t:{for(var r=Le,c=Xt;r.nodeType!==8;){if(!c){r=null;break t}if(r=Qt(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){Le=Qt(r.nextSibling),i=r.data==="F!";break e}}Vn(i)}i=!1}i&&(t=n[0])}}return n=pt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$0,lastRenderedState:t},n.queue=i,n=np.bind(null,pe,i),i.dispatch=n,i=Sc(!1),c=Rc.bind(null,pe,!1,i.queue),i=pt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=Lx.bind(null,pe,r,c,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function L0(e){var t=Ke();return U0(t,Ne,e)}function U0(e,t,n){if(t=vc(e,t,$0)[0],e=_r(vn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=hl(t)}catch(p){throw p===ri?Er:p}else i=t;t=Ke();var r=t.queue,c=r.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,fi(9,{destroy:void 0},Ux.bind(null,r,n),null)),[i,c,e]}function Ux(e,t){e.action=t}function H0(e){var t=Ke(),n=Ne;if(n!==null)return U0(t,n,e);Ke(),t=t.memoizedState,n=Ke();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function fi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=pe.updateQueue,t===null&&(t=kr(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Y0(){return Ke().memoizedState}function Dr(e,t,n,i){var r=pt();pe.flags|=e,r.memoizedState=fi(1|t,{destroy:void 0},n,i===void 0?null:i)}function $r(e,t,n,i){var r=Ke();i=i===void 0?null:i;var c=r.memoizedState.inst;Ne!==null&&i!==null&&pc(i,Ne.memoizedState.deps)?r.memoizedState=fi(t,c,n,i):(pe.flags|=e,r.memoizedState=fi(1|t,c,n,i))}function q0(e,t){Dr(8390656,8,e,t)}function jc(e,t){$r(2048,8,e,t)}function Hx(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=kr(),pe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function G0(e){var t=Ke().memoizedState;return Hx({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function X0(e,t){return $r(4,2,e,t)}function V0(e,t){return $r(4,4,e,t)}function Q0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Z0(e,t,n){n=n!=null?n.concat([e]):null,$r(4,4,Q0.bind(null,t,e),n)}function Ec(){}function K0(e,t){var n=Ke();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&pc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function J0(e,t){var n=Ke();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&pc(t,i[1]))return i[0];if(i=e(),Ma){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[i,t],i}function Cc(e,t,n){return n===void 0||(yn&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Fp(),pe.lanes|=e,ea|=e,n)}function F0(e,t,n,i){return Rt(n,t)?n:si.current!==null?(e=Cc(e,n,i),Rt(e,t)||(We=!0),e):(yn&42)===0||(yn&1073741824)!==0&&(Se&261930)===0?(We=!0,e.memoizedState=n):(e=Fp(),pe.lanes|=e,ea|=e,t)}function W0(e,t,n,i,r){var c=K.p;K.p=c!==0&&8>c?c:8;var p=_.T,x={};_.T=x,Rc(e,!1,t,n);try{var j=r(),O=_.S;if(O!==null&&O(x,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var U=Dx(j,i);ml(e,t,U,_t(e))}else ml(e,t,i,_t(e))}catch(X){ml(e,t,{then:function(){},status:"rejected",reason:X},_t())}finally{K.p=c,p!==null&&x.types!==null&&(p.types=x.types),_.T=p}}function Yx(){}function Tc(e,t,n,i){if(e.tag!==5)throw Error(o(476));var r=I0(e).queue;W0(e,r,t,P,n===null?Yx:function(){return P0(e),n(i)})}function I0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function P0(e){var t=I0(e);t.next===null&&(t=e.alternate.memoizedState),ml(e,t.next.queue,{},_t())}function zc(){return ot(kl)}function ep(){return Ke().memoizedState}function tp(){return Ke().memoizedState}function qx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_t();e=Kn(n);var i=Jn(t,e,n);i!==null&&(wt(i,t,n),ul(i,t,n)),t={cache:nc()},e.payload=t;return}t=t.return}}function Gx(e,t,n){var i=_t();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Br(e)?ap(t,n):(n=Vs(e,t,n,i),n!==null&&(wt(n,e,i),ip(n,t,i)))}function np(e,t,n){var i=_t();ml(e,t,n,i)}function ml(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Br(e))ap(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,x=c(p,n);if(r.hasEagerState=!0,r.eagerState=x,Rt(x,p))return xr(e,t,r,0),$e===null&&gr(),!1}catch{}finally{}if(n=Vs(e,t,r,i),n!==null)return wt(n,e,i),ip(n,t,i),!0}return!1}function Rc(e,t,n,i){if(i={lane:2,revertLane:ru(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Br(e)){if(t)throw Error(o(479))}else t=Vs(e,n,i,2),t!==null&&wt(t,e,2)}function Br(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function ap(e,t){ci=Mr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ip(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,cd(e,n)}}var gl={readContext:ot,use:Nr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};gl.useEffectEvent=Ve;var lp={readContext:ot,use:Nr,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:q0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Dr(4194308,4,Q0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){Dr(4,2,e,t)},useMemo:function(e,t){var n=pt();t=t===void 0?null:t;var i=e();if(Ma){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=pt();if(n!==void 0){var r=n(t);if(Ma){Hn(!0);try{n(t)}finally{Hn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Gx.bind(null,pe,e),[i.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:function(e){e=Sc(e);var t=e.queue,n=np.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ec,useDeferredValue:function(e,t){var n=pt();return Cc(n,e,t)},useTransition:function(){var e=Sc(!1);return e=W0.bind(null,pe,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=pe,r=pt();if(je){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),$e===null)throw Error(o(349));(Se&127)!==0||T0(i,t,n)}r.memoizedState=n;var c={value:n,getSnapshot:t};return r.queue=c,q0(R0.bind(null,i,c,e),[e]),i.flags|=2048,fi(9,{destroy:void 0},z0.bind(null,i,c,n,t),null),n},useId:function(){var e=pt(),t=$e.identifierPrefix;if(je){var n=an,i=nn;n=(i&~(1<<32-zt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=$x++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zc,useFormState:B0,useActionState:B0,useOptimistic:function(e){var t=pt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rc.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:yc,useCacheRefresh:function(){return pt().memoizedState=qx.bind(null,pe)},useEffectEvent:function(e){var t=pt(),n={impl:e};return t.memoizedState=n,function(){if((Re&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Ac={readContext:ot,use:Nr,useCallback:K0,useContext:ot,useEffect:jc,useImperativeHandle:Z0,useInsertionEffect:X0,useLayoutEffect:V0,useMemo:J0,useReducer:_r,useRef:Y0,useState:function(){return _r(vn)},useDebugValue:Ec,useDeferredValue:function(e,t){var n=Ke();return F0(n,Ne.memoizedState,e,t)},useTransition:function(){var e=_r(vn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:C0,useId:ep,useHostTransitionStatus:zc,useFormState:L0,useActionState:L0,useOptimistic:function(e,t){var n=Ke();return O0(n,Ne,e,t)},useMemoCache:yc,useCacheRefresh:tp};Ac.useEffectEvent=G0;var rp={readContext:ot,use:Nr,useCallback:K0,useContext:ot,useEffect:jc,useImperativeHandle:Z0,useInsertionEffect:X0,useLayoutEffect:V0,useMemo:J0,useReducer:bc,useRef:Y0,useState:function(){return bc(vn)},useDebugValue:Ec,useDeferredValue:function(e,t){var n=Ke();return Ne===null?Cc(n,e,t):F0(n,Ne.memoizedState,e,t)},useTransition:function(){var e=bc(vn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:C0,useId:ep,useHostTransitionStatus:zc,useFormState:H0,useActionState:H0,useOptimistic:function(e,t){var n=Ke();return Ne!==null?O0(n,Ne,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:yc,useCacheRefresh:tp};rp.useEffectEvent=G0;function Mc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oc={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=_t(),r=Kn(i);r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,i),t!==null&&(wt(t,e,i),ul(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=_t(),r=Kn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,i),t!==null&&(wt(t,e,i),ul(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_t(),i=Kn(n);i.tag=2,t!=null&&(i.callback=t),t=Jn(e,i,n),t!==null&&(wt(t,e,n),ul(t,e,n))}};function op(e,t,n,i,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,p):t.prototype&&t.prototype.isPureReactComponent?!nl(n,i)||!nl(r,c):!0}function sp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Oc.enqueueReplaceState(t,t.state,null)}function Oa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function cp(e){mr(e)}function up(e){console.error(e)}function fp(e){mr(e)}function Lr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function dp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function kc(e,t,n){return n=Kn(n),n.tag=3,n.payload={element:null},n.callback=function(){Lr(e,t)},n}function pp(e){return e=Kn(e),e.tag=3,e}function hp(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=i.value;e.payload=function(){return r(c)},e.callback=function(){dp(t,n,i)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){dp(t,n,i),typeof r!="function"&&(ta===null?ta=new Set([this]):ta.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})})}function Xx(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ai(t,n,r,!0),n=Mt.current,n!==null){switch(n.tag){case 31:case 13:return Vt===null?Fr():n.alternate===null&&Qe===0&&(Qe=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Cr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),au(e,i,r)),!1;case 22:return n.flags|=65536,i===Cr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),au(e,i,r)),!1}throw Error(o(435,n.tag))}return au(e,i,r),Fr(),!1}if(je)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==Ws&&(e=Error(o(422),{cause:i}),ll(Yt(e,n)))):(i!==Ws&&(t=Error(o(423),{cause:i}),ll(Yt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Yt(i,n),r=kc(e.stateNode,i,r),sc(e,r),Qe!==4&&(Qe=2)),!1;var c=Error(o(520),{cause:i});if(c=Yt(c,n),El===null?El=[c]:El.push(c),Qe!==4&&(Qe=2),t===null)return!0;i=Yt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=kc(n.stateNode,i,e),sc(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ta===null||!ta.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=pp(r),hp(r,e,n,i),sc(n,r),!1}n=n.return}while(n!==null);return!1}var Nc=Error(o(461)),We=!1;function st(e,t,n,i){t.child=e===null?y0(t,null,n,i):Aa(t,e.child,n,i)}function mp(e,t,n,i,r){n=n.render;var c=t.ref;if("ref"in i){var p={};for(var x in i)x!=="ref"&&(p[x]=i[x])}else p=i;return Ca(t),i=hc(e,t,n,p,c,r),x=mc(),e!==null&&!We?(gc(e,t,r),bn(e,t,r)):(je&&x&&Js(t),t.flags|=1,st(e,t,i,r),t.child)}function gp(e,t,n,i,r){if(e===null){var c=n.type;return typeof c=="function"&&!Qs(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,xp(e,t,c,i,r)):(e=vr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Yc(e,r)){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:nl,n(p,i)&&e.ref===t.ref)return bn(e,t,r)}return t.flags|=1,e=hn(c,i),e.ref=t.ref,e.return=t,t.child=e}function xp(e,t,n,i,r){if(e!==null){var c=e.memoizedProps;if(nl(c,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=c,Yc(e,r))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,bn(e,t,r)}return _c(e,t,n,i,r)}function yp(e,t,n,i){var r=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~c}else i=0,t.child=null;return vp(e,t,c,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&jr(t,c!==null?c.cachePool:null),c!==null?S0(t,c):uc(),w0(t);else return i=t.lanes=536870912,vp(e,t,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(jr(t,c.cachePool),S0(t,c),Wn(),t.memoizedState=null):(e!==null&&jr(t,null),uc(),Wn());return st(e,t,r,n),t.child}function xl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vp(e,t,n,i,r){var c=ic();return c=c===null?null:{parent:Je._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&jr(t,null),uc(),w0(t),e!==null&&ai(e,t,i,!0),t.childLanes=r,null}function Ur(e,t){return t=Yr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function bp(e,t,n){return Aa(t,e.child,null,n),e=Ur(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function Vx(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(je){if(i.mode==="hidden")return e=Ur(t,i),t.lanes=536870912,xl(null,e);if(dc(t),(e=Le)?(e=kh(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=a0(e),n.return=t,t.child=n,rt=t,Le=null)):e=null,e===null)throw Vn(t);return t.lanes=536870912,null}return Ur(t,i)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(dc(t),r)if(t.flags&256)t.flags&=-257,t=bp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(We||ai(e,t,n,!1),r=(n&e.childLanes)!==0,We||r){if(i=$e,i!==null&&(p=ud(i,n),p!==0&&p!==c.retryLane))throw c.retryLane=p,Sa(e,p),wt(i,e,p),Nc;Fr(),t=bp(e,t,n)}else e=c.treeContext,Le=Qt(p.nextSibling),rt=t,je=!0,Xn=null,Xt=!1,e!==null&&r0(t,e),t=Ur(t,i),t.flags|=4096;return t}return e=hn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,i,r){return Ca(t),n=hc(e,t,n,i,void 0,r),i=mc(),e!==null&&!We?(gc(e,t,r),bn(e,t,r)):(je&&i&&Js(t),t.flags|=1,st(e,t,n,r),t.child)}function Sp(e,t,n,i,r,c){return Ca(t),t.updateQueue=null,n=E0(t,i,n,r),j0(e),i=mc(),e!==null&&!We?(gc(e,t,c),bn(e,t,c)):(je&&i&&Js(t),t.flags|=1,st(e,t,n,c),t.child)}function wp(e,t,n,i,r){if(Ca(t),t.stateNode===null){var c=Pa,p=n.contextType;typeof p=="object"&&p!==null&&(c=ot(p)),c=new n(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Oc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},rc(t),p=n.contextType,c.context=typeof p=="object"&&p!==null?ot(p):Pa,c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Mc(t,n,p,i),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Oc.enqueueReplaceState(c,c.state,null),dl(t,i,c,r),fl(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var x=t.memoizedProps,j=Oa(n,x);c.props=j;var O=c.context,U=n.contextType;p=Pa,typeof U=="object"&&U!==null&&(p=ot(U));var X=n.getDerivedStateFromProps;U=typeof X=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,U||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||O!==p)&&sp(t,c,i,p),Zn=!1;var N=t.memoizedState;c.state=N,dl(t,i,c,r),fl(),O=t.memoizedState,x||N!==O||Zn?(typeof X=="function"&&(Mc(t,n,X,i),O=t.memoizedState),(j=Zn||op(t,n,j,i,N,O,p))?(U||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=O),c.props=i,c.state=O,c.context=p,i=j):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,oc(e,t),p=t.memoizedProps,U=Oa(n,p),c.props=U,X=t.pendingProps,N=c.context,O=n.contextType,j=Pa,typeof O=="object"&&O!==null&&(j=ot(O)),x=n.getDerivedStateFromProps,(O=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==X||N!==j)&&sp(t,c,i,j),Zn=!1,N=t.memoizedState,c.state=N,dl(t,i,c,r),fl();var D=t.memoizedState;p!==X||N!==D||Zn||e!==null&&e.dependencies!==null&&Sr(e.dependencies)?(typeof x=="function"&&(Mc(t,n,x,i),D=t.memoizedState),(U=Zn||op(t,n,U,i,N,D,j)||e!==null&&e.dependencies!==null&&Sr(e.dependencies))?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,D,j),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,D,j)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=D),c.props=i,c.state=D,c.context=j,i=U):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,Hr(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=Aa(t,e.child,null,r),t.child=Aa(t,null,n,r)):st(e,t,n,r),t.memoizedState=c.state,e=t.child):e=bn(e,t,r),e}function jp(e,t,n,i){return ja(),t.flags|=256,st(e,t,n,i),t.child}var Dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:d0()}}function Bc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Nt),e}function Ep(e,t,n){var i=t.pendingProps,r=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),p&&(r=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(r?Fn(t):Wn(),(e=Le)?(e=kh(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=a0(e),n.return=t,t.child=n,rt=t,Le=null)):e=null,e===null)throw Vn(t);return vu(e)?t.lanes=32:t.lanes=536870912,null}var x=i.children;return i=i.fallback,r?(Wn(),r=t.mode,x=Yr({mode:"hidden",children:x},r),i=wa(i,r,n,null),x.return=t,i.return=t,x.sibling=i,t.child=x,i=t.child,i.memoizedState=$c(n),i.childLanes=Bc(e,p,n),t.memoizedState=Dc,xl(null,i)):(Fn(t),Lc(t,x))}var j=e.memoizedState;if(j!==null&&(x=j.dehydrated,x!==null)){if(c)t.flags&256?(Fn(t),t.flags&=-257,t=Uc(e,t,n)):t.memoizedState!==null?(Wn(),t.child=e.child,t.flags|=128,t=null):(Wn(),x=i.fallback,r=t.mode,i=Yr({mode:"visible",children:i.children},r),x=wa(x,r,n,null),x.flags|=2,i.return=t,x.return=t,i.sibling=x,t.child=i,Aa(t,e.child,null,n),i=t.child,i.memoizedState=$c(n),i.childLanes=Bc(e,p,n),t.memoizedState=Dc,t=xl(null,i));else if(Fn(t),vu(x)){if(p=x.nextSibling&&x.nextSibling.dataset,p)var O=p.dgst;p=O,i=Error(o(419)),i.stack="",i.digest=p,ll({value:i,source:null,stack:null}),t=Uc(e,t,n)}else if(We||ai(e,t,n,!1),p=(n&e.childLanes)!==0,We||p){if(p=$e,p!==null&&(i=ud(p,n),i!==0&&i!==j.retryLane))throw j.retryLane=i,Sa(e,i),wt(p,e,i),Nc;yu(x)||Fr(),t=Uc(e,t,n)}else yu(x)?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,Le=Qt(x.nextSibling),rt=t,je=!0,Xn=null,Xt=!1,e!==null&&r0(t,e),t=Lc(t,i.children),t.flags|=4096);return t}return r?(Wn(),x=i.fallback,r=t.mode,j=e.child,O=j.sibling,i=hn(j,{mode:"hidden",children:i.children}),i.subtreeFlags=j.subtreeFlags&65011712,O!==null?x=hn(O,x):(x=wa(x,r,n,null),x.flags|=2),x.return=t,i.return=t,i.sibling=x,t.child=i,xl(null,i),i=t.child,x=e.child.memoizedState,x===null?x=$c(n):(r=x.cachePool,r!==null?(j=Je._currentValue,r=r.parent!==j?{parent:j,pool:j}:r):r=d0(),x={baseLanes:x.baseLanes|n,cachePool:r}),i.memoizedState=x,i.childLanes=Bc(e,p,n),t.memoizedState=Dc,xl(e.child,i)):(Fn(t),n=e.child,e=n.sibling,n=hn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Lc(e,t){return t=Yr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yr(e,t){return e=At(22,e,null,t),e.lanes=0,e}function Uc(e,t,n){return Aa(t,e.child,null,n),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ec(e.return,t,n)}function Hc(e,t,n,i,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=n,p.tailMode=r,p.treeForkCount=c)}function Tp(e,t,n){var i=t.pendingProps,r=i.revealOrder,c=i.tail;i=i.children;var p=Ze.current,x=(p&2)!==0;if(x?(p=p&1|2,t.flags|=128):p&=1,F(Ze,p),st(e,t,i,n),i=je?il:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cp(e,n,t);else if(e.tag===19)Cp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Ar(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Hc(t,!1,r,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Ar(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Hc(t,!0,n,null,c,i);break;case"together":Hc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ai(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Sr(e)))}function Qx(e,t,n){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),Qn(t,Je,e.memoizedState.cache),ja();break;case 27:case 5:Et(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,dc(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Fn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ep(e,t,n):(Fn(t),e=bn(e,t,n),e!==null?e.sibling:null);Fn(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ai(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return Tp(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),F(Ze,Ze.current),i)break;return null;case 22:return t.lanes=0,yp(e,t,n,t.pendingProps);case 24:Qn(t,Je,e.memoizedState.cache)}return bn(e,t,n)}function zp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Yc(e,n)&&(t.flags&128)===0)return We=!1,Qx(e,t,n);We=(e.flags&131072)!==0}else We=!1,je&&(t.flags&1048576)!==0&&l0(t,il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=za(t.elementType),t.type=e,typeof e=="function")Qs(e)?(i=Oa(e,i),t.tag=1,t=wp(null,t,e,i,n)):(t.tag=0,t=_c(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===Z){t.tag=11,t=mp(null,t,e,i,n);break e}else if(r===V){t.tag=14,t=gp(null,t,e,i,n);break e}}throw t=ae(e)||e,Error(o(306,t,""))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Oa(i,t.pendingProps),wp(e,t,i,r,n);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var c=t.memoizedState;r=c.element,oc(e,t),dl(t,i,null,n);var p=t.memoizedState;if(i=p.cache,Qn(t,Je,i),i!==c.cache&&tc(t,[Je],n,!0),fl(),i=p.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=jp(e,t,i,n);break e}else if(i!==r){r=Yt(Error(o(424)),t),ll(r),t=jp(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Qt(e.firstChild),rt=t,je=!0,Xn=null,Xt=!0,n=y0(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ja(),i===r){t=bn(e,t,n);break e}st(e,t,i,n)}t=t.child}return t;case 26:return Hr(e,t),e===null?(n=Lh(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(n=t.type,e=t.pendingProps,i=ao(ue.current).createElement(n),i[lt]=t,i[gt]=e,ct(i,n,e),tt(i),t.stateNode=i):t.memoizedState=Lh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Et(t),e===null&&je&&(i=t.stateNode=Dh(t.type,t.pendingProps,ue.current),rt=t,Xt=!0,r=Le,la(t.type)?(bu=r,Le=Qt(i.firstChild)):Le=r),st(e,t,t.pendingProps.children,n),Hr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((r=i=Le)&&(i=wy(i,t.type,t.pendingProps,Xt),i!==null?(t.stateNode=i,rt=t,Le=Qt(i.firstChild),Xt=!1,r=!0):r=!1),r||Vn(t)),Et(t),r=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,i=c.children,mu(r,c)?i=null:p!==null&&mu(r,p)&&(t.flags|=32),t.memoizedState!==null&&(r=hc(e,t,Bx,null,null,n),kl._currentValue=r),Hr(e,t),st(e,t,i,n),t.child;case 6:return e===null&&je&&((e=n=Le)&&(n=jy(n,t.pendingProps,Xt),n!==null?(t.stateNode=n,rt=t,Le=null,e=!0):e=!1),e||Vn(t)),null;case 13:return Ep(e,t,n);case 4:return Ge(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Aa(t,null,i,n):st(e,t,i,n),t.child;case 11:return mp(e,t,t.type,t.pendingProps,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Qn(t,t.type,i.value),st(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Ca(t),r=ot(r),i=i(r),t.flags|=1,st(e,t,i,n),t.child;case 14:return gp(e,t,t.type,t.pendingProps,n);case 15:return xp(e,t,t.type,t.pendingProps,n);case 19:return Tp(e,t,n);case 31:return Vx(e,t,n);case 22:return yp(e,t,n,t.pendingProps);case 24:return Ca(t),i=ot(Je),e===null?(r=ic(),r===null&&(r=$e,c=nc(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),t.memoizedState={parent:i,cache:r},rc(t),Qn(t,Je,r)):((e.lanes&n)!==0&&(oc(e,t),dl(t,null,null,n),fl()),r=e.memoizedState,c=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Qn(t,Je,i)):(i=c.cache,Qn(t,Je,i),i!==r.cache&&tc(t,[Je],n,!0))),st(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Sn(e){e.flags|=4}function qc(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(eh())e.flags|=8192;else throw Ra=Cr,lc}else e.flags&=-16777217}function Rp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gh(t))if(eh())e.flags|=8192;else throw Ra=Cr,lc}function qr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?od():536870912,e.lanes|=t,mi|=t)}function yl(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Zx(e,t,n){var i=t.pendingProps;switch(Fs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),xn(Je),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ni(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Is())),Ue(t),null;case 26:var r=t.type,c=t.memoizedState;return e===null?(Sn(t),c!==null?(Ue(t),Rp(t,c)):(Ue(t),qc(t,r,null,i,n))):c?c!==e.memoizedState?(Sn(t),Ue(t),Rp(t,c)):(Ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Sn(t),Ue(t),qc(t,r,e,i,n)),null;case 27:if(Jt(t),n=ue.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ue(t),null}e=I.current,ni(t)?o0(t):(e=Dh(r,i,n),t.stateNode=e,Sn(t))}return Ue(t),null;case 5:if(Jt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ue(t),null}if(c=I.current,ni(t))o0(t);else{var p=ao(ue.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?p.createElement(r,{is:i.is}):p.createElement(r)}}c[lt]=t,c[gt]=i;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=c;e:switch(ct(c,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Sn(t)}}return Ue(t),qc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ue.current,ni(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=rt,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Eh(e.nodeValue,n)),e||Vn(t,!0)}else e=ao(e).createTextNode(i),e[lt]=t,t.stateNode=e}return Ue(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ni(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[lt]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),e=!1}else n=Is(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ue(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ni(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[lt]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),r=!1}else r=Is(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),qr(t,t.updateQueue),Ue(t),null);case 4:return Ce(),e===null&&uu(t.stateNode.containerInfo),Ue(t),null;case 10:return xn(t.type),Ue(t),null;case 19:if(H(Ze),i=t.memoizedState,i===null)return Ue(t),null;if(r=(t.flags&128)!==0,c=i.rendering,c===null)if(r)yl(i,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Ar(e),c!==null){for(t.flags|=128,yl(i,!1),e=c.updateQueue,t.updateQueue=e,qr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)n0(n,e),n=n.sibling;return F(Ze,Ze.current&1|2),je&&mn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ct()>Zr&&(t.flags|=128,r=!0,yl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ar(c),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,qr(t,e),yl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!je)return Ue(t),null}else 2*Ct()-i.renderingStartTime>Zr&&n!==536870912&&(t.flags|=128,r=!0,yl(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ct(),e.sibling=null,n=Ze.current,F(Ze,r?n&1|2:n&1),je&&mn(t,i.treeForkCount),e):(Ue(t),null);case 22:case 23:return Ot(t),fc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&qr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&H(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(Je),Ue(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Kx(e,t){switch(Fs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(Je),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jt(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(o(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Ze),null;case 4:return Ce(),null;case 10:return xn(t.type),null;case 22:case 23:return Ot(t),fc(),e!==null&&H(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(Je),null;case 25:return null;default:return null}}function Ap(e,t){switch(Fs(t),t.tag){case 3:xn(Je),Ce();break;case 26:case 27:case 5:Jt(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:H(Ze);break;case 10:xn(t.type);break;case 22:case 23:Ot(t),fc(),e!==null&&H(Ta);break;case 24:xn(Je)}}function vl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var c=n.create,p=n.inst;i=c(),p.destroy=i}n=n.next}while(n!==r)}}catch(x){Oe(t,t.return,x)}}function In(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var c=r.next;i=c;do{if((i.tag&e)===e){var p=i.inst,x=p.destroy;if(x!==void 0){p.destroy=void 0,r=t;var j=n,O=x;try{O()}catch(U){Oe(r,j,U)}}}i=i.next}while(i!==c)}}catch(U){Oe(t,t.return,U)}}function Mp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{b0(t,n)}catch(i){Oe(e,e.return,i)}}}function Op(e,t,n){n.props=Oa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Oe(e,t,i)}}function bl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){Oe(e,t,r)}}function ln(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){Oe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function kp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){Oe(e,e.return,r)}}function Gc(e,t,n){try{var i=e.stateNode;gy(i,e.type,n,t),i[gt]=t}catch(r){Oe(e,e.return,r)}}function Np(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&la(e.type)||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Np(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&la(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(i!==4&&(i===27&&la(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vc(e,t,n),e=e.sibling;e!==null;)Vc(e,t,n),e=e.sibling}function Gr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&la(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Gr(e,t,n),e=e.sibling;e!==null;)Gr(e,t,n),e=e.sibling}function _p(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ct(t,i,n),t[lt]=e,t[gt]=n}catch(c){Oe(e,e.return,c)}}var wn=!1,Ie=!1,Qc=!1,Dp=typeof WeakSet=="function"?WeakSet:Set,nt=null;function Jx(e,t){if(e=e.containerInfo,pu=uo,e=Zd(e),Us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,x=-1,j=-1,O=0,U=0,X=e,N=null;t:for(;;){for(var D;X!==n||r!==0&&X.nodeType!==3||(x=p+r),X!==c||i!==0&&X.nodeType!==3||(j=p+i),X.nodeType===3&&(p+=X.nodeValue.length),(D=X.firstChild)!==null;)N=X,X=D;for(;;){if(X===e)break t;if(N===n&&++O===r&&(x=p),N===c&&++U===i&&(j=p),(D=X.nextSibling)!==null)break;X=N,N=X.parentNode}X=D}n=x===-1||j===-1?null:{start:x,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(hu={focusedElem:e,selectionRange:n},uo=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,r=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var ne=Oa(n.type,r);e=i.getSnapshotBeforeUpdate(ne,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(se){Oe(n,n.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)xu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function $p(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),i&4&&vl(5,n);break;case 1:if(En(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Oe(n,n.return,p)}else{var r=Oa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Oe(n,n.return,p)}}i&64&&Mp(n),i&512&&bl(n,n.return);break;case 3:if(En(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{b0(e,t)}catch(p){Oe(n,n.return,p)}}break;case 27:t===null&&i&4&&_p(n);case 26:case 5:En(e,n),t===null&&i&4&&kp(n),i&512&&bl(n,n.return);break;case 12:En(e,n);break;case 31:En(e,n),i&4&&Up(e,n);break;case 13:En(e,n),i&4&&Hp(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=iy.bind(null,n),Ey(e,n))));break;case 22:if(i=n.memoizedState!==null||wn,!i){t=t!==null&&t.memoizedState!==null||Ie,r=wn;var c=Ie;wn=i,(Ie=t)&&!c?Cn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),wn=r,Ie=c}break;case 30:break;default:En(e,n)}}function Bp(e){var t=e.alternate;t!==null&&(e.alternate=null,Bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ws(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,yt=!1;function jn(e,t,n){for(n=n.child;n!==null;)Lp(e,t,n),n=n.sibling}function Lp(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Xi,n)}catch{}switch(n.tag){case 26:Ie||ln(n,t),jn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ie||ln(n,t);var i=qe,r=yt;la(n.type)&&(qe=n.stateNode,yt=!1),jn(e,t,n),Al(n.stateNode),qe=i,yt=r;break;case 5:Ie||ln(n,t);case 6:if(i=qe,r=yt,qe=null,jn(e,t,n),qe=i,yt=r,qe!==null)if(yt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(n.stateNode)}catch(c){Oe(n,t,c)}else try{qe.removeChild(n.stateNode)}catch(c){Oe(n,t,c)}break;case 18:qe!==null&&(yt?(e=qe,Mh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ji(e)):Mh(qe,n.stateNode));break;case 4:i=qe,r=yt,qe=n.stateNode.containerInfo,yt=!0,jn(e,t,n),qe=i,yt=r;break;case 0:case 11:case 14:case 15:In(2,n,t),Ie||In(4,n,t),jn(e,t,n);break;case 1:Ie||(ln(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Op(n,t,i)),jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:Ie=(i=Ie)||n.memoizedState!==null,jn(e,t,n),Ie=i;break;default:jn(e,t,n)}}function Up(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ji(e)}catch(n){Oe(t,t.return,n)}}}function Hp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ji(e)}catch(n){Oe(t,t.return,n)}}function Fx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Dp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Dp),t;default:throw Error(o(435,e.tag))}}function Xr(e,t){var n=Fx(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=ly.bind(null,e,i);i.then(r,r)}})}function vt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],c=e,p=t,x=p;e:for(;x!==null;){switch(x.tag){case 27:if(la(x.type)){qe=x.stateNode,yt=!1;break e}break;case 5:qe=x.stateNode,yt=!1;break e;case 3:case 4:qe=x.stateNode.containerInfo,yt=!0;break e}x=x.return}if(qe===null)throw Error(o(160));Lp(c,p,r),qe=null,yt=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Yp(t,e),t=t.sibling}var Wt=null;function Yp(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),bt(e),i&4&&(In(3,e,e.return),vl(3,e),In(5,e,e.return));break;case 1:vt(t,e),bt(e),i&512&&(Ie||n===null||ln(n,n.return)),i&64&&wn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Wt;if(vt(t,e),bt(e),i&512&&(Ie||n===null||ln(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":c=r.getElementsByTagName("title")[0],(!c||c[Zi]||c[lt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(i),r.head.insertBefore(c,r.querySelector("head > title"))),ct(c,i,n),c[lt]=e,tt(c),i=c;break e;case"link":var p=Yh("link","href",r).get(i+(n.href||""));if(p){for(var x=0;x<p.length;x++)if(c=p[x],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(x,1);break t}}c=r.createElement(i),ct(c,i,n),r.head.appendChild(c);break;case"meta":if(p=Yh("meta","content",r).get(i+(n.content||""))){for(x=0;x<p.length;x++)if(c=p[x],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(x,1);break t}}c=r.createElement(i),ct(c,i,n),r.head.appendChild(c);break;default:throw Error(o(468,i))}c[lt]=e,tt(c),i=c}e.stateNode=i}else qh(r,e.type,e.stateNode);else e.stateNode=Hh(r,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?qh(r,e.type,e.stateNode):Hh(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Gc(e,e.memoizedProps,n.memoizedProps)}break;case 27:vt(t,e),bt(e),i&512&&(Ie||n===null||ln(n,n.return)),n!==null&&i&4&&Gc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vt(t,e),bt(e),i&512&&(Ie||n===null||ln(n,n.return)),e.flags&32){r=e.stateNode;try{Qa(r,"")}catch(ne){Oe(e,e.return,ne)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Gc(e,r,n!==null?n.memoizedProps:r)),i&1024&&(Qc=!0);break;case 6:if(vt(t,e),bt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ne){Oe(e,e.return,ne)}}break;case 3:if(ro=null,r=Wt,Wt=io(t.containerInfo),vt(t,e),Wt=r,bt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ji(t.containerInfo)}catch(ne){Oe(e,e.return,ne)}Qc&&(Qc=!1,qp(e));break;case 4:i=Wt,Wt=io(e.stateNode.containerInfo),vt(t,e),bt(e),Wt=i;break;case 12:vt(t,e),bt(e);break;case 31:vt(t,e),bt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xr(e,i)));break;case 13:vt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Qr=Ct()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xr(e,i)));break;case 22:r=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,O=wn,U=Ie;if(wn=O||r,Ie=U||j,vt(t,e),Ie=U,wn=O,bt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||j||wn||Ie||ka(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(c=j.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{x=j.stateNode;var X=j.memoizedProps.style,N=X!=null&&X.hasOwnProperty("display")?X.display:null;x.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(ne){Oe(j,j.return,ne)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=r?"":j.memoizedProps}catch(ne){Oe(j,j.return,ne)}}}else if(t.tag===18){if(n===null){j=t;try{var D=j.stateNode;r?Oh(D,!0):Oh(j.stateNode,!1)}catch(ne){Oe(j,j.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Xr(e,n))));break;case 19:vt(t,e),bt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xr(e,i)));break;case 30:break;case 21:break;default:vt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Np(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,c=Xc(e);Gr(e,c,r);break;case 5:var p=n.stateNode;n.flags&32&&(Qa(p,""),n.flags&=-33);var x=Xc(e);Gr(e,x,p);break;case 3:case 4:var j=n.stateNode.containerInfo,O=Xc(e);Vc(e,O,j);break;default:throw Error(o(161))}}catch(U){Oe(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;qp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$p(e,t.alternate,t),t=t.sibling}function ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:In(4,t,t.return),ka(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Op(t,t.return,n),ka(t);break;case 27:Al(t.stateNode);case 26:case 5:ln(t,t.return),ka(t);break;case 22:t.memoizedState===null&&ka(t);break;case 30:ka(t);break;default:ka(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,c=t,p=c.flags;switch(c.tag){case 0:case 11:case 15:Cn(r,c,n),vl(4,c);break;case 1:if(Cn(r,c,n),i=c,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){Oe(i,i.return,O)}if(i=c,r=i.updateQueue,r!==null){var x=i.stateNode;try{var j=r.shared.hiddenCallbacks;if(j!==null)for(r.shared.hiddenCallbacks=null,r=0;r<j.length;r++)v0(j[r],x)}catch(O){Oe(i,i.return,O)}}n&&p&64&&Mp(c),bl(c,c.return);break;case 27:_p(c);case 26:case 5:Cn(r,c,n),n&&i===null&&p&4&&kp(c),bl(c,c.return);break;case 12:Cn(r,c,n);break;case 31:Cn(r,c,n),n&&p&4&&Up(r,c);break;case 13:Cn(r,c,n),n&&p&4&&Hp(r,c);break;case 22:c.memoizedState===null&&Cn(r,c,n),bl(c,c.return);break;case 30:break;default:Cn(r,c,n)}t=t.sibling}}function Zc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&rl(n))}function Kc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e))}function It(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gp(e,t,n,i),t=t.sibling}function Gp(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,i),r&2048&&vl(9,t);break;case 1:It(e,t,n,i);break;case 3:It(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e)));break;case 12:if(r&2048){It(e,t,n,i),e=t.stateNode;try{var c=t.memoizedProps,p=c.id,x=c.onPostCommit;typeof x=="function"&&x(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Oe(t,t.return,j)}}else It(e,t,n,i);break;case 31:It(e,t,n,i);break;case 13:It(e,t,n,i);break;case 23:break;case 22:c=t.stateNode,p=t.alternate,t.memoizedState!==null?c._visibility&2?It(e,t,n,i):Sl(e,t):c._visibility&2?It(e,t,n,i):(c._visibility|=2,di(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Zc(p,t);break;case 24:It(e,t,n,i),r&2048&&Kc(t.alternate,t);break;default:It(e,t,n,i)}}function di(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,p=t,x=n,j=i,O=p.flags;switch(p.tag){case 0:case 11:case 15:di(c,p,x,j,r),vl(8,p);break;case 23:break;case 22:var U=p.stateNode;p.memoizedState!==null?U._visibility&2?di(c,p,x,j,r):Sl(c,p):(U._visibility|=2,di(c,p,x,j,r)),r&&O&2048&&Zc(p.alternate,p);break;case 24:di(c,p,x,j,r),r&&O&2048&&Kc(p.alternate,p);break;default:di(c,p,x,j,r)}t=t.sibling}}function Sl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:Sl(n,i),r&2048&&Zc(i.alternate,i);break;case 24:Sl(n,i),r&2048&&Kc(i.alternate,i);break;default:Sl(n,i)}t=t.sibling}}var wl=8192;function pi(e,t,n){if(e.subtreeFlags&wl)for(e=e.child;e!==null;)Xp(e,t,n),e=e.sibling}function Xp(e,t,n){switch(e.tag){case 26:pi(e,t,n),e.flags&wl&&e.memoizedState!==null&&$y(n,Wt,e.memoizedState,e.memoizedProps);break;case 5:pi(e,t,n);break;case 3:case 4:var i=Wt;Wt=io(e.stateNode.containerInfo),pi(e,t,n),Wt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=wl,wl=16777216,pi(e,t,n),wl=i):pi(e,t,n));break;default:pi(e,t,n)}}function Vp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,Zp(i,e)}Vp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qp(e),e=e.sibling}function Qp(e){switch(e.tag){case 0:case 11:case 15:jl(e),e.flags&2048&&In(9,e,e.return);break;case 3:jl(e);break;case 12:jl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vr(e)):jl(e);break;default:jl(e)}}function Vr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,Zp(i,e)}Vp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),Vr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Vr(t));break;default:Vr(t)}e=e.sibling}}function Zp(e,t){for(;nt!==null;){var n=nt;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:rl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,nt=i;else e:for(n=e;nt!==null;){i=nt;var r=i.sibling,c=i.return;if(Bp(i),i===n){nt=null;break e}if(r!==null){r.return=c,nt=r;break e}nt=c}}}var Wx={getCacheForType:function(e){var t=ot(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ot(Je).controller.signal}},Ix=typeof WeakMap=="function"?WeakMap:Map,Re=0,$e=null,ve=null,Se=0,Me=0,kt=null,Pn=!1,hi=!1,Jc=!1,Tn=0,Qe=0,ea=0,Na=0,Fc=0,Nt=0,mi=0,El=null,St=null,Wc=!1,Qr=0,Kp=0,Zr=1/0,Kr=null,ta=null,et=0,na=null,gi=null,zn=0,Ic=0,Pc=null,Jp=null,Cl=0,eu=null;function _t(){return(Re&2)!==0&&Se!==0?Se&-Se:_.T!==null?ru():fd()}function Fp(){if(Nt===0)if((Se&536870912)===0||je){var e=nr;nr<<=1,(nr&3932160)===0&&(nr=262144),Nt=e}else Nt=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Nt}function wt(e,t,n){(e===$e&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(xi(e,0),aa(e,Se,Nt,!1)),Qi(e,n),((Re&2)===0||e!==$e)&&(e===$e&&((Re&2)===0&&(Na|=n),Qe===4&&aa(e,Se,Nt,!1)),rn(e))}function Wp(e,t,n){if((Re&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Vi(e,t),r=i?ty(e,t):nu(e,t,!0),c=i;do{if(r===0){hi&&!i&&aa(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!Px(n)){r=nu(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var x=e;r=El;var j=x.current.memoizedState.isDehydrated;if(j&&(xi(x,p).flags|=256),p=nu(x,p,!1),p!==2){if(Jc&&!j){x.errorRecoveryDisabledLanes|=c,Na|=c,r=4;break e}c=St,St=r,c!==null&&(St===null?St=c:St.push.apply(St,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){xi(e,0),aa(e,t,0,!0);break}e:{switch(i=e,c=r,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:aa(i,t,Nt,!Pn);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Qr+300-Ct(),10<r)){if(aa(i,t,Nt,!Pn),ir(i,0,!0)!==0)break e;zn=t,i.timeoutHandle=Rh(Ip.bind(null,i,n,St,Kr,Wc,t,Nt,Na,mi,Pn,c,"Throttled",-0,0),r);break e}Ip(i,n,St,Kr,Wc,t,Nt,Na,mi,Pn,c,null,-0,0)}}break}while(!0);rn(e)}function Ip(e,t,n,i,r,c,p,x,j,O,U,X,N,D){if(e.timeoutHandle=-1,X=t.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Xp(t,c,X);var ne=(c&62914560)===c?Qr-Ct():(c&4194048)===c?Kp-Ct():0;if(ne=By(X,ne),ne!==null){zn=c,e.cancelPendingCommit=ne(rh.bind(null,e,t,c,n,i,r,p,x,j,U,X,null,N,D)),aa(e,c,p,!O);return}}rh(e,t,c,n,i,r,p,x,j)}function Px(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],c=r.getSnapshot;r=r.value;try{if(!Rt(c(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function aa(e,t,n,i){t&=~Fc,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var c=31-zt(r),p=1<<c;i[c]=-1,r&=~p}n!==0&&sd(e,n,t)}function Jr(){return(Re&6)===0?(Tl(0),!1):!0}function tu(){if(ve!==null){if(Me===0)var e=ve.return;else e=ve,gn=Ea=null,xc(e),oi=null,sl=0,e=ve;for(;e!==null;)Ap(e.alternate,e),e=e.return;ve=null}}function xi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,vy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),zn=0,tu(),$e=e,ve=n=hn(e.current,null),Se=t,Me=0,kt=null,Pn=!1,hi=Vi(e,t),Jc=!1,mi=Nt=Fc=Na=ea=Qe=0,St=El=null,Wc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-zt(i),c=1<<r;t|=e[r],i&=~c}return Tn=t,gr(),n}function Pp(e,t){pe=null,_.H=gl,t===ri||t===Er?(t=m0(),Me=3):t===lc?(t=m0(),Me=4):Me=t===Nc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,ve===null&&(Qe=1,Lr(e,Yt(t,e.current)))}function eh(){var e=Mt.current;return e===null?!0:(Se&4194048)===Se?Vt===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Vt:!1}function th(){var e=_.H;return _.H=gl,e===null?gl:e}function nh(){var e=_.A;return _.A=Wx,e}function Fr(){Qe=4,Pn||(Se&4194048)!==Se&&Mt.current!==null||(hi=!0),(ea&134217727)===0&&(Na&134217727)===0||$e===null||aa($e,Se,Nt,!1)}function nu(e,t,n){var i=Re;Re|=2;var r=th(),c=nh();($e!==e||Se!==t)&&(Kr=null,xi(e,t)),t=!1;var p=Qe;e:do try{if(Me!==0&&ve!==null){var x=ve,j=kt;switch(Me){case 8:tu(),p=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var O=Me;if(Me=0,kt=null,yi(e,x,j,O),n&&hi){p=0;break e}break;default:O=Me,Me=0,kt=null,yi(e,x,j,O)}}ey(),p=Qe;break}catch(U){Pp(e,U)}while(!0);return t&&e.shellSuspendCounter++,gn=Ea=null,Re=i,_.H=r,_.A=c,ve===null&&($e=null,Se=0,gr()),p}function ey(){for(;ve!==null;)ah(ve)}function ty(e,t){var n=Re;Re|=2;var i=th(),r=nh();$e!==e||Se!==t?(Kr=null,Zr=Ct()+500,xi(e,t)):hi=Vi(e,t);e:do try{if(Me!==0&&ve!==null){t=ve;var c=kt;t:switch(Me){case 1:Me=0,kt=null,yi(e,t,c,1);break;case 2:case 9:if(p0(c)){Me=0,kt=null,ih(t);break}t=function(){Me!==2&&Me!==9||$e!==e||(Me=7),rn(e)},c.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:p0(c)?(Me=0,kt=null,ih(t)):(Me=0,kt=null,yi(e,t,c,7));break;case 5:var p=null;switch(ve.tag){case 26:p=ve.memoizedState;case 5:case 27:var x=ve;if(p?Gh(p):x.stateNode.complete){Me=0,kt=null;var j=x.sibling;if(j!==null)ve=j;else{var O=x.return;O!==null?(ve=O,Wr(O)):ve=null}break t}}Me=0,kt=null,yi(e,t,c,5);break;case 6:Me=0,kt=null,yi(e,t,c,6);break;case 8:tu(),Qe=6;break e;default:throw Error(o(462))}}ny();break}catch(U){Pp(e,U)}while(!0);return gn=Ea=null,_.H=i,_.A=r,Re=n,ve!==null?0:($e=null,Se=0,gr(),Qe)}function ny(){for(;ve!==null&&!C2();)ah(ve)}function ah(e){var t=zp(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,t===null?Wr(e):ve=t}function ih(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Sp(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=Sp(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:xc(t);default:Ap(n,t),t=ve=n0(t,Tn),t=zp(n,t,Tn)}e.memoizedProps=e.pendingProps,t===null?Wr(e):ve=t}function yi(e,t,n,i){gn=Ea=null,xc(t),oi=null,sl=0;var r=t.return;try{if(Xx(e,r,t,n,Se)){Qe=1,Lr(e,Yt(n,e.current)),ve=null;return}}catch(c){if(r!==null)throw ve=r,c;Qe=1,Lr(e,Yt(n,e.current)),ve=null;return}t.flags&32768?(je||i===1?e=!0:hi||(Se&536870912)!==0?e=!1:(Pn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Mt.current,i!==null&&i.tag===13&&(i.flags|=16384))),lh(t,e)):Wr(t)}function Wr(e){var t=e;do{if((t.flags&32768)!==0){lh(t,Pn);return}e=t.return;var n=Zx(t.alternate,t,Tn);if(n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Qe===0&&(Qe=5)}function lh(e,t){do{var n=Kx(e.alternate,e);if(n!==null){n.flags&=32767,ve=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=n}while(e!==null);Qe=6,ve=null}function rh(e,t,n,i,r,c,p,x,j){e.cancelPendingCommit=null;do Ir();while(et!==0);if((Re&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Xs,D2(e,n,c,p,x,j),e===$e&&(ve=$e=null,Se=0),gi=t,na=e,zn=n,Ic=c,Pc=r,Jp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ry(er,function(){return fh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=_.T,_.T=null,r=K.p,K.p=2,p=Re,Re|=4;try{Jx(e,t,n)}finally{Re=p,K.p=r,_.T=i}}et=1,oh(),sh(),ch()}}function oh(){if(et===1){et=0;var e=na,t=gi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var i=K.p;K.p=2;var r=Re;Re|=4;try{Yp(t,e);var c=hu,p=Zd(e.containerInfo),x=c.focusedElem,j=c.selectionRange;if(p!==x&&x&&x.ownerDocument&&Qd(x.ownerDocument.documentElement,x)){if(j!==null&&Us(x)){var O=j.start,U=j.end;if(U===void 0&&(U=O),"selectionStart"in x)x.selectionStart=O,x.selectionEnd=Math.min(U,x.value.length);else{var X=x.ownerDocument||document,N=X&&X.defaultView||window;if(N.getSelection){var D=N.getSelection(),ne=x.textContent.length,se=Math.min(j.start,ne),De=j.end===void 0?se:Math.min(j.end,ne);!D.extend&&se>De&&(p=De,De=se,se=p);var R=Vd(x,se),C=Vd(x,De);if(R&&C&&(D.rangeCount!==1||D.anchorNode!==R.node||D.anchorOffset!==R.offset||D.focusNode!==C.node||D.focusOffset!==C.offset)){var M=X.createRange();M.setStart(R.node,R.offset),D.removeAllRanges(),se>De?(D.addRange(M),D.extend(C.node,C.offset)):(M.setEnd(C.node,C.offset),D.addRange(M))}}}}for(X=[],D=x;D=D.parentNode;)D.nodeType===1&&X.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<X.length;x++){var G=X[x];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}uo=!!pu,hu=pu=null}finally{Re=r,K.p=i,_.T=n}}e.current=t,et=2}}function sh(){if(et===2){et=0;var e=na,t=gi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var i=K.p;K.p=2;var r=Re;Re|=4;try{$p(e,t.alternate,t)}finally{Re=r,K.p=i,_.T=n}}et=3}}function ch(){if(et===4||et===3){et=0,T2();var e=na,t=gi,n=zn,i=Jp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,gi=na=null,uh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ta=null),bs(n),t=t.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Xi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=_.T,r=K.p,K.p=2,_.T=null;try{for(var c=e.onRecoverableError,p=0;p<i.length;p++){var x=i[p];c(x.value,{componentStack:x.stack})}}finally{_.T=t,K.p=r}}(zn&3)!==0&&Ir(),rn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===eu?Cl++:(Cl=0,eu=e):Cl=0,Tl(0)}}function uh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rl(t)))}function Ir(){return oh(),sh(),ch(),fh()}function fh(){if(et!==5)return!1;var e=na,t=Ic;Ic=0;var n=bs(zn),i=_.T,r=K.p;try{K.p=32>n?32:n,_.T=null,n=Pc,Pc=null;var c=na,p=zn;if(et=0,gi=na=null,zn=0,(Re&6)!==0)throw Error(o(331));var x=Re;if(Re|=4,Qp(c.current),Gp(c,c.current,p,n),Re=x,Tl(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Xi,c)}catch{}return!0}finally{K.p=r,_.T=i,uh(e,t)}}function dh(e,t,n){t=Yt(n,t),t=kc(e.stateNode,t,2),e=Jn(e,t,2),e!==null&&(Qi(e,2),rn(e))}function Oe(e,t,n){if(e.tag===3)dh(e,e,n);else for(;t!==null;){if(t.tag===3){dh(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ta===null||!ta.has(i))){e=Yt(n,e),n=pp(2),i=Jn(t,n,2),i!==null&&(hp(n,i,t,e),Qi(i,2),rn(i));break}}t=t.return}}function au(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Ix;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Jc=!0,r.add(n),e=ay.bind(null,e,t,n),t.then(e,e))}function ay(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,$e===e&&(Se&n)===n&&(Qe===4||Qe===3&&(Se&62914560)===Se&&300>Ct()-Qr?(Re&2)===0&&xi(e,0):Fc|=n,mi===Se&&(mi=0)),rn(e)}function ph(e,t){t===0&&(t=od()),e=Sa(e,t),e!==null&&(Qi(e,t),rn(e))}function iy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ph(e,n)}function ly(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),ph(e,n)}function ry(e,t){return gs(e,t)}var Pr=null,vi=null,iu=!1,eo=!1,lu=!1,ia=0;function rn(e){e!==vi&&e.next===null&&(vi===null?Pr=vi=e:vi=vi.next=e),eo=!0,iu||(iu=!0,sy())}function Tl(e,t){if(!lu&&eo){lu=!0;do for(var n=!1,i=Pr;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var c=0;else{var p=i.suspendedLanes,x=i.pingedLanes;c=(1<<31-zt(42|e)+1)-1,c&=r&~(p&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,xh(i,c))}else c=Se,c=ir(i,i===$e?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||Vi(i,c)||(n=!0,xh(i,c));i=i.next}while(n);lu=!1}}function oy(){hh()}function hh(){eo=iu=!1;var e=0;ia!==0&&yy()&&(e=ia);for(var t=Ct(),n=null,i=Pr;i!==null;){var r=i.next,c=mh(i,t);c===0?(i.next=null,n===null?Pr=r:n.next=r,r===null&&(vi=n)):(n=i,(e!==0||(c&3)!==0)&&(eo=!0)),i=r}et!==0&&et!==5||Tl(e),ia!==0&&(ia=0)}function mh(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-zt(c),x=1<<p,j=r[p];j===-1?((x&n)===0||(x&i)!==0)&&(r[p]=_2(x,t)):j<=t&&(e.expiredLanes|=x),c&=~x}if(t=$e,n=Se,n=ir(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&xs(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Vi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&xs(i),bs(n)){case 2:case 8:n=ld;break;case 32:n=er;break;case 268435456:n=rd;break;default:n=er}return i=gh.bind(null,e),n=gs(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&xs(i),e.callbackPriority=2,e.callbackNode=null,2}function gh(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var i=Se;return i=ir(e,e===$e?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Wp(e,i,t),mh(e,Ct()),e.callbackNode!=null&&e.callbackNode===n?gh.bind(null,e):null)}function xh(e,t){if(Ir())return null;Wp(e,t,!0)}function sy(){by(function(){(Re&6)!==0?gs(id,oy):hh()})}function ru(){if(ia===0){var e=ii;e===0&&(e=tr,tr<<=1,(tr&261888)===0&&(tr=256)),ia=e}return ia}function yh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sr(""+e)}function vh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function cy(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var c=yh((r[gt]||null).action),p=i.submitter;p&&(t=(t=p[gt]||null)?yh(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var x=new dr("action","action",null,i,r);e.push({event:x,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ia!==0){var j=p?vh(r,p):new FormData(r);Tc(n,{pending:!0,data:j,method:r.method,action:c},null,j)}}else typeof c=="function"&&(x.preventDefault(),j=p?vh(r,p):new FormData(r),Tc(n,{pending:!0,data:j,method:r.method,action:c},c,j))},currentTarget:r}]})}}for(var ou=0;ou<Gs.length;ou++){var su=Gs[ou],uy=su.toLowerCase(),fy=su[0].toUpperCase()+su.slice(1);Ft(uy,"on"+fy)}Ft(Fd,"onAnimationEnd"),Ft(Wd,"onAnimationIteration"),Ft(Id,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(zx,"onTransitionRun"),Ft(Rx,"onTransitionStart"),Ft(Ax,"onTransitionCancel"),Ft(Pd,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zl));function bh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var p=i.length-1;0<=p;p--){var x=i[p],j=x.instance,O=x.currentTarget;if(x=x.listener,j!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=O;try{c(r)}catch(U){mr(U)}r.currentTarget=null,c=j}else for(p=0;p<i.length;p++){if(x=i[p],j=x.instance,O=x.currentTarget,x=x.listener,j!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=O;try{c(r)}catch(U){mr(U)}r.currentTarget=null,c=j}}}}function be(e,t){var n=t[Ss];n===void 0&&(n=t[Ss]=new Set);var i=e+"__bubble";n.has(i)||(Sh(t,e,2,!1),n.add(i))}function cu(e,t,n){var i=0;t&&(i|=4),Sh(n,e,i,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function uu(e){if(!e[to]){e[to]=!0,hd.forEach(function(n){n!=="selectionchange"&&(dy.has(n)||cu(n,!1,e),cu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,cu("selectionchange",!1,t))}}function Sh(e,t,n,i){switch(Fh(t)){case 2:var r=Hy;break;case 8:r=Yy;break;default:r=Cu}n=r.bind(null,t,n,e),r=void 0,!Ms||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function fu(e,t,n,i,r){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var x=i.stateNode.containerInfo;if(x===r)break;if(p===4)for(p=i.return;p!==null;){var j=p.tag;if((j===3||j===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;x!==null;){if(p=Ya(x),p===null)return;if(j=p.tag,j===5||j===6||j===26||j===27){i=c=p;continue e}x=x.parentNode}}i=i.return}Td(function(){var O=c,U=Rs(n),X=[];e:{var N=e0.get(e);if(N!==void 0){var D=dr,ne=e;switch(e){case"keypress":if(ur(n)===0)break e;case"keydown":case"keyup":D=lx;break;case"focusin":ne="focus",D=_s;break;case"focusout":ne="blur",D=_s;break;case"beforeblur":case"afterblur":D=_s;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Z2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=sx;break;case Fd:case Wd:case Id:D=F2;break;case Pd:D=ux;break;case"scroll":case"scrollend":D=V2;break;case"wheel":D=dx;break;case"copy":case"cut":case"paste":D=I2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Od;break;case"toggle":case"beforetoggle":D=hx}var se=(t&4)!==0,De=!se&&(e==="scroll"||e==="scrollend"),R=se?N!==null?N+"Capture":null:N;se=[];for(var C=O,M;C!==null;){var G=C;if(M=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||M===null||R===null||(G=Ji(C,R),G!=null&&se.push(Rl(C,G,M))),De)break;C=C.return}0<se.length&&(N=new D(N,ne,null,n,U),X.push({event:N,listeners:se}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",N&&n!==zs&&(ne=n.relatedTarget||n.fromElement)&&(Ya(ne)||ne[Ha]))break e;if((D||N)&&(N=U.window===U?U:(N=U.ownerDocument)?N.defaultView||N.parentWindow:window,D?(ne=n.relatedTarget||n.toElement,D=O,ne=ne?Ya(ne):null,ne!==null&&(De=d(ne),se=ne.tag,ne!==De||se!==5&&se!==27&&se!==6)&&(ne=null)):(D=null,ne=O),D!==ne)){if(se=Ad,G="onMouseLeave",R="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(se=Od,G="onPointerLeave",R="onPointerEnter",C="pointer"),De=D==null?N:Ki(D),M=ne==null?N:Ki(ne),N=new se(G,C+"leave",D,n,U),N.target=De,N.relatedTarget=M,G=null,Ya(U)===O&&(se=new se(R,C+"enter",ne,n,U),se.target=M,se.relatedTarget=De,G=se),De=G,D&&ne)t:{for(se=py,R=D,C=ne,M=0,G=R;G;G=se(G))M++;G=0;for(var oe=C;oe;oe=se(oe))G++;for(;0<M-G;)R=se(R),M--;for(;0<G-M;)C=se(C),G--;for(;M--;){if(R===C||C!==null&&R===C.alternate){se=R;break t}R=se(R),C=se(C)}se=null}else se=null;D!==null&&wh(X,N,D,se,!1),ne!==null&&De!==null&&wh(X,De,ne,se,!0)}}e:{if(N=O?Ki(O):window,D=N.nodeName&&N.nodeName.toLowerCase(),D==="select"||D==="input"&&N.type==="file")var Te=Ud;else if(Bd(N))if(Hd)Te=Ex;else{Te=wx;var ie=Sx}else D=N.nodeName,!D||D.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?O&&Ts(O.elementType)&&(Te=Ud):Te=jx;if(Te&&(Te=Te(e,O))){Ld(X,Te,n,U);break e}ie&&ie(e,N,O),e==="focusout"&&O&&N.type==="number"&&O.memoizedProps.value!=null&&Cs(N,"number",N.value)}switch(ie=O?Ki(O):window,e){case"focusin":(Bd(ie)||ie.contentEditable==="true")&&(Fa=ie,Hs=O,al=null);break;case"focusout":al=Hs=Fa=null;break;case"mousedown":Ys=!0;break;case"contextmenu":case"mouseup":case"dragend":Ys=!1,Kd(X,n,U);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":Kd(X,n,U)}var he;if($s)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ja?Dd(e,n)&&(we="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(we="onCompositionStart");we&&(kd&&n.locale!=="ko"&&(Ja||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ja&&(he=zd()):(qn=U,Os="value"in qn?qn.value:qn.textContent,Ja=!0)),ie=no(O,we),0<ie.length&&(we=new Md(we,e,null,n,U),X.push({event:we,listeners:ie}),he?we.data=he:(he=$d(n),he!==null&&(we.data=he)))),(he=gx?xx(e,n):yx(e,n))&&(we=no(O,"onBeforeInput"),0<we.length&&(ie=new Md("onBeforeInput","beforeinput",null,n,U),X.push({event:ie,listeners:we}),ie.data=he)),cy(X,e,O,n,U)}bh(X,t)})}function Rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Ji(e,n),r!=null&&i.unshift(Rl(e,r,c)),r=Ji(e,t),r!=null&&i.push(Rl(e,r,c))),e.tag===3)return i;e=e.return}return[]}function py(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wh(e,t,n,i,r){for(var c=t._reactName,p=[];n!==null&&n!==i;){var x=n,j=x.alternate,O=x.stateNode;if(x=x.tag,j!==null&&j===i)break;x!==5&&x!==26&&x!==27||O===null||(j=O,r?(O=Ji(n,c),O!=null&&p.unshift(Rl(n,O,j))):r||(O=Ji(n,c),O!=null&&p.push(Rl(n,O,j)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var hy=/\r\n?/g,my=/\u0000|\uFFFD/g;function jh(e){return(typeof e=="string"?e:""+e).replace(hy,`
`).replace(my,"")}function Eh(e,t){return t=jh(t),jh(e)===t}function _e(e,t,n,i,r,c){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Qa(e,""+i);break;case"className":rr(e,"class",i);break;case"tabIndex":rr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":rr(e,n,i);break;case"style":Ed(e,i,c);break;case"data":if(t!=="object"){rr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=sr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&_e(e,t,"name",r.name,r,null),_e(e,t,"formEncType",r.formEncType,r,null),_e(e,t,"formMethod",r.formMethod,r,null),_e(e,t,"formTarget",r.formTarget,r,null)):(_e(e,t,"encType",r.encType,r,null),_e(e,t,"method",r.method,r,null),_e(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=sr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=dn);break;case"onScroll":i!=null&&be("scroll",e);break;case"onScrollEnd":i!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=sr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":be("beforetoggle",e),be("toggle",e),lr(e,"popover",i);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":lr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=G2.get(n)||n,lr(e,n,i))}}function du(e,t,n,i,r,c){switch(n){case"style":Ed(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&Qa(e,""+i);break;case"onScroll":i!=null&&be("scroll",e);break;case"onScrollEnd":i!=null&&be("scrollend",e);break;case"onClick":i!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!md.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),c=e[gt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):lr(e,n,i)}}}function ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var i=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var p=n[c];if(p!=null)switch(c){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:_e(e,t,c,p,n,null)}}r&&_e(e,t,"srcSet",n.srcSet,n,null),i&&_e(e,t,"src",n.src,n,null);return;case"input":be("invalid",e);var x=c=p=r=null,j=null,O=null;for(i in n)if(n.hasOwnProperty(i)){var U=n[i];if(U!=null)switch(i){case"name":r=U;break;case"type":p=U;break;case"checked":j=U;break;case"defaultChecked":O=U;break;case"value":c=U;break;case"defaultValue":x=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:_e(e,t,i,U,n,null)}}bd(e,c,x,j,O,p,r,!1);return;case"select":be("invalid",e),i=p=c=null;for(r in n)if(n.hasOwnProperty(r)&&(x=n[r],x!=null))switch(r){case"value":c=x;break;case"defaultValue":p=x;break;case"multiple":i=x;default:_e(e,t,r,x,n,null)}t=c,n=p,e.multiple=!!i,t!=null?Va(e,!!i,t,!1):n!=null&&Va(e,!!i,n,!0);return;case"textarea":be("invalid",e),c=r=i=null;for(p in n)if(n.hasOwnProperty(p)&&(x=n[p],x!=null))switch(p){case"value":i=x;break;case"defaultValue":r=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(o(91));break;default:_e(e,t,p,x,n,null)}wd(e,i,r,c);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(i=n[j],i!=null))switch(j){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:_e(e,t,j,i,n,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(i=0;i<zl.length;i++)be(zl[i],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(i=n[O],i!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:_e(e,t,O,i,n,null)}return;default:if(Ts(t)){for(U in n)n.hasOwnProperty(U)&&(i=n[U],i!==void 0&&du(e,t,U,i,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(i=n[x],i!=null&&_e(e,t,x,i,n,null))}function gy(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,x=null,j=null,O=null,U=null;for(D in n){var X=n[D];if(n.hasOwnProperty(D)&&X!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":j=X;default:i.hasOwnProperty(D)||_e(e,t,D,null,i,X)}}for(var N in i){var D=i[N];if(X=n[N],i.hasOwnProperty(N)&&(D!=null||X!=null))switch(N){case"type":c=D;break;case"name":r=D;break;case"checked":O=D;break;case"defaultChecked":U=D;break;case"value":p=D;break;case"defaultValue":x=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:D!==X&&_e(e,t,N,D,i,X)}}Es(e,p,x,j,O,U,c,r);return;case"select":D=p=x=N=null;for(c in n)if(j=n[c],n.hasOwnProperty(c)&&j!=null)switch(c){case"value":break;case"multiple":D=j;default:i.hasOwnProperty(c)||_e(e,t,c,null,i,j)}for(r in i)if(c=i[r],j=n[r],i.hasOwnProperty(r)&&(c!=null||j!=null))switch(r){case"value":N=c;break;case"defaultValue":x=c;break;case"multiple":p=c;default:c!==j&&_e(e,t,r,c,i,j)}t=x,n=p,i=D,N!=null?Va(e,!!n,N,!1):!!i!=!!n&&(t!=null?Va(e,!!n,t,!0):Va(e,!!n,n?[]:"",!1));return;case"textarea":D=N=null;for(x in n)if(r=n[x],n.hasOwnProperty(x)&&r!=null&&!i.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:_e(e,t,x,null,i,r)}for(p in i)if(r=i[p],c=n[p],i.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":N=r;break;case"defaultValue":D=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==c&&_e(e,t,p,r,i,c)}Sd(e,N,D);return;case"option":for(var ne in n)if(N=n[ne],n.hasOwnProperty(ne)&&N!=null&&!i.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:_e(e,t,ne,null,i,N)}for(j in i)if(N=i[j],D=n[j],i.hasOwnProperty(j)&&N!==D&&(N!=null||D!=null))switch(j){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:_e(e,t,j,N,i,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in n)N=n[se],n.hasOwnProperty(se)&&N!=null&&!i.hasOwnProperty(se)&&_e(e,t,se,null,i,N);for(O in i)if(N=i[O],D=n[O],i.hasOwnProperty(O)&&N!==D&&(N!=null||D!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:_e(e,t,O,N,i,D)}return;default:if(Ts(t)){for(var De in n)N=n[De],n.hasOwnProperty(De)&&N!==void 0&&!i.hasOwnProperty(De)&&du(e,t,De,void 0,i,N);for(U in i)N=i[U],D=n[U],!i.hasOwnProperty(U)||N===D||N===void 0&&D===void 0||du(e,t,U,N,i,D);return}}for(var R in n)N=n[R],n.hasOwnProperty(R)&&N!=null&&!i.hasOwnProperty(R)&&_e(e,t,R,null,i,N);for(X in i)N=i[X],D=n[X],!i.hasOwnProperty(X)||N===D||N==null&&D==null||_e(e,t,X,N,i,D)}function Ch(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],c=r.transferSize,p=r.initiatorType,x=r.duration;if(c&&x&&Ch(p)){for(p=0,x=r.responseEnd,i+=1;i<n.length;i++){var j=n[i],O=j.startTime;if(O>x)break;var U=j.transferSize,X=j.initiatorType;U&&Ch(X)&&(j=j.responseEnd,p+=U*(j<x?1:(x-O)/(j-O)))}if(--i,t+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pu=null,hu=null;function ao(e){return e.nodeType===9?e:e.ownerDocument}function Th(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function mu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gu=null;function yy(){var e=window.event;return e&&e.type==="popstate"?e===gu?!1:(gu=e,!0):(gu=null,!1)}var Rh=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(e){return Ah.resolve(null).then(e).catch(Sy)}:Rh;function Sy(e){setTimeout(function(){throw e})}function la(e){return e==="head"}function Mh(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),ji(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Al(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Al(n);for(var c=n.firstChild;c;){var p=c.nextSibling,x=c.nodeName;c[Zi]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=p}}else n==="body"&&Al(e.ownerDocument.body);n=r}while(n);ji(t)}function Oh(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function xu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":xu(n),ws(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function wy(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Zi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function jy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qt(e.nextSibling),e===null))return null;return e}function kh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function yu(e){return e.data==="$?"||e.data==="$~"}function vu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ey(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var bu=null;function Nh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Qt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function _h(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Dh(e,t,n){switch(t=ao(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Al(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ws(e)}var Zt=new Map,$h=new Set;function io(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rn=K.d;K.d={f:Cy,r:Ty,D:zy,C:Ry,L:Ay,m:My,X:ky,S:Oy,M:Ny};function Cy(){var e=Rn.f(),t=Jr();return e||t}function Ty(e){var t=qa(e);t!==null&&t.tag===5&&t.type==="form"?P0(t):Rn.r(e)}var bi=typeof document>"u"?null:document;function Bh(e,t,n){var i=bi;if(i&&typeof t=="string"&&t){var r=Ut(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),$h.has(r)||($h.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),ct(t,"link",e),tt(t),i.head.appendChild(t)))}}function zy(e){Rn.D(e),Bh("dns-prefetch",e,null)}function Ry(e,t){Rn.C(e,t),Bh("preconnect",e,t)}function Ay(e,t,n){Rn.L(e,t,n);var i=bi;if(i&&e&&t){var r='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ut(n.imageSizes)+'"]')):r+='[href="'+Ut(e)+'"]';var c=r;switch(t){case"style":c=Si(e);break;case"script":c=wi(e)}Zt.has(c)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zt.set(c,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(Ml(c))||t==="script"&&i.querySelector(Ol(c))||(t=i.createElement("link"),ct(t,"link",e),tt(t),i.head.appendChild(t)))}}function My(e,t){Rn.m(e,t);var n=bi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ut(i)+'"][href="'+Ut(e)+'"]',c=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=wi(e)}if(!Zt.has(c)&&(e=w({rel:"modulepreload",href:e},t),Zt.set(c,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ol(c)))return}i=n.createElement("link"),ct(i,"link",e),tt(i),n.head.appendChild(i)}}}function Oy(e,t,n){Rn.S(e,t,n);var i=bi;if(i&&e){var r=Ga(i).hoistableStyles,c=Si(e);t=t||"default";var p=r.get(c);if(!p){var x={loading:0,preload:null};if(p=i.querySelector(Ml(c)))x.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zt.get(c))&&Su(e,n);var j=p=i.createElement("link");tt(j),ct(j,"link",e),j._p=new Promise(function(O,U){j.onload=O,j.onerror=U}),j.addEventListener("load",function(){x.loading|=1}),j.addEventListener("error",function(){x.loading|=2}),x.loading|=4,lo(p,t,i)}p={type:"stylesheet",instance:p,count:1,state:x},r.set(c,p)}}}function ky(e,t){Rn.X(e,t);var n=bi;if(n&&e){var i=Ga(n).hoistableScripts,r=wi(e),c=i.get(r);c||(c=n.querySelector(Ol(r)),c||(e=w({src:e,async:!0},t),(t=Zt.get(r))&&wu(e,t),c=n.createElement("script"),tt(c),ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Ny(e,t){Rn.M(e,t);var n=bi;if(n&&e){var i=Ga(n).hoistableScripts,r=wi(e),c=i.get(r);c||(c=n.querySelector(Ol(r)),c||(e=w({src:e,async:!0,type:"module"},t),(t=Zt.get(r))&&wu(e,t),c=n.createElement("script"),tt(c),ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Lh(e,t,n,i){var r=(r=ue.current)?io(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Si(n.href),n=Ga(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Si(n.href);var c=Ga(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(Ml(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zt.set(e,n),c||_y(r,e,n,p.state))),t&&i===null)throw Error(o(528,""));return p}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wi(n),n=Ga(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Si(e){return'href="'+Ut(e)+'"'}function Ml(e){return'link[rel="stylesheet"]['+e+"]"}function Uh(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function _y(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ct(t,"link",n),tt(t),e.head.appendChild(t))}function wi(e){return'[src="'+Ut(e)+'"]'}function Ol(e){return"script[async]"+e}function Hh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(i)return t.instance=i,tt(i),i;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tt(i),ct(i,"style",r),lo(i,n.precedence,e),t.instance=i;case"stylesheet":r=Si(n.href);var c=e.querySelector(Ml(r));if(c)return t.state.loading|=4,t.instance=c,tt(c),c;i=Uh(n),(r=Zt.get(r))&&Su(i,r),c=(e.ownerDocument||e).createElement("link"),tt(c);var p=c;return p._p=new Promise(function(x,j){p.onload=x,p.onerror=j}),ct(c,"link",i),t.state.loading|=4,lo(c,n.precedence,e),t.instance=c;case"script":return c=wi(n.src),(r=e.querySelector(Ol(c)))?(t.instance=r,tt(r),r):(i=n,(r=Zt.get(c))&&(i=w({},n),wu(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),tt(r),ct(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,lo(i,n.precedence,e));return t.instance}function lo(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,c=r,p=0;p<i.length;p++){var x=i[p];if(x.dataset.precedence===t)c=x;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Su(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ro=null;function Yh(e,t,n){if(ro===null){var i=new Map,r=ro=new Map;r.set(n,i)}else r=ro,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[Zi]||c[lt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var x=i.get(p);x?x.push(c):i.set(p,[c])}}return i}function qh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Dy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $y(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Si(i.href),c=t.querySelector(Ml(r));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=oo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,tt(c);return}c=t.ownerDocument||t,i=Uh(i),(r=Zt.get(r))&&Su(i,r),c=c.createElement("link"),tt(c);var p=c;p._p=new Promise(function(x,j){p.onload=x,p.onerror=j}),ct(c,"link",i),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=oo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ju=0;function By(e,t){return e.stylesheets&&e.count===0&&co(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&co(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&ju===0&&(ju=62500*xy());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&co(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>ju?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function oo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)co(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var so=null;function co(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,so=new Map,t.forEach(Ly,e),so=null,oo.call(e))}function Ly(e,t){if(!(t.state.loading&4)){var n=so.get(e);if(n)var i=n.get(null);else{n=new Map,so.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),i=p)}i&&n.set(null,i)}r=t.instance,p=r.getAttribute("data-precedence"),c=n.get(p)||i,c===i&&n.set(null,r),n.set(p,r),this.count++,i=oo.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var kl={$$typeof:Y,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Uy(e,t,n,i,r,c,p,x,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.hiddenUpdates=ys(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Xh(e,t,n,i,r,c,p,x,j,O,U,X){return e=new Uy(e,t,n,p,j,O,U,X,x),t=1,c===!0&&(t|=24),c=At(3,null,null,t),e.current=c,c.stateNode=e,t=nc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:t},rc(c),e}function Vh(e){return e?(e=Pa,e):Pa}function Qh(e,t,n,i,r,c){r=Vh(r),i.context===null?i.context=r:i.pendingContext=r,i=Kn(t),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Jn(e,i,t),n!==null&&(wt(n,e,t),ul(n,e,t))}function Zh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eu(e,t){Zh(e,t),(e=e.alternate)&&Zh(e,t)}function Kh(e){if(e.tag===13||e.tag===31){var t=Sa(e,67108864);t!==null&&wt(t,e,67108864),Eu(e,67108864)}}function Jh(e){if(e.tag===13||e.tag===31){var t=_t();t=vs(t);var n=Sa(e,t);n!==null&&wt(n,e,t),Eu(e,t)}}var uo=!0;function Hy(e,t,n,i){var r=_.T;_.T=null;var c=K.p;try{K.p=2,Cu(e,t,n,i)}finally{K.p=c,_.T=r}}function Yy(e,t,n,i){var r=_.T;_.T=null;var c=K.p;try{K.p=8,Cu(e,t,n,i)}finally{K.p=c,_.T=r}}function Cu(e,t,n,i){if(uo){var r=Tu(i);if(r===null)fu(e,t,i,fo,n),Wh(e,i);else if(Gy(r,e,t,n,i))i.stopPropagation();else if(Wh(e,i),t&4&&-1<qy.indexOf(e)){for(;r!==null;){var c=qa(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=ga(c.pendingLanes);if(p!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;p;){var j=1<<31-zt(p);x.entanglements[1]|=j,p&=~j}rn(c),(Re&6)===0&&(Zr=Ct()+500,Tl(0))}}break;case 31:case 13:x=Sa(c,2),x!==null&&wt(x,c,2),Jr(),Eu(c,2)}if(c=Tu(i),c===null&&fu(e,t,i,fo,n),c===r)break;r=c}r!==null&&i.stopPropagation()}else fu(e,t,i,null,n)}}function Tu(e){return e=Rs(e),zu(e)}var fo=null;function zu(e){if(fo=null,e=Ya(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fo=e,null}function Fh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z2()){case id:return 2;case ld:return 8;case er:case R2:return 32;case rd:return 268435456;default:return 32}default:return 32}}var Ru=!1,ra=null,oa=null,sa=null,Nl=new Map,_l=new Map,ca=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wh(e,t){switch(e){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":Nl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(t.pointerId)}}function Dl(e,t,n,i,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[r]},t!==null&&(t=qa(t),t!==null&&Kh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Gy(e,t,n,i,r){switch(t){case"focusin":return ra=Dl(ra,e,t,n,i,r),!0;case"dragenter":return oa=Dl(oa,e,t,n,i,r),!0;case"mouseover":return sa=Dl(sa,e,t,n,i,r),!0;case"pointerover":var c=r.pointerId;return Nl.set(c,Dl(Nl.get(c)||null,e,t,n,i,r)),!0;case"gotpointercapture":return c=r.pointerId,_l.set(c,Dl(_l.get(c)||null,e,t,n,i,r)),!0}return!1}function Ih(e){var t=Ya(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,dd(e.priority,function(){Jh(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,dd(e.priority,function(){Jh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);zs=i,n.target.dispatchEvent(i),zs=null}else return t=qa(n),t!==null&&Kh(t),e.blockedOn=n,!1;t.shift()}return!0}function Ph(e,t,n){po(e)&&n.delete(t)}function Xy(){Ru=!1,ra!==null&&po(ra)&&(ra=null),oa!==null&&po(oa)&&(oa=null),sa!==null&&po(sa)&&(sa=null),Nl.forEach(Ph),_l.forEach(Ph)}function ho(e,t){e.blockedOn===t&&(e.blockedOn=null,Ru||(Ru=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Xy)))}var mo=null;function e1(e){mo!==e&&(mo=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){mo===e&&(mo=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(zu(i||n)===null)continue;break}var c=qa(n);c!==null&&(e.splice(t,3),t-=3,Tc(c,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function ji(e){function t(j){return ho(j,e)}ra!==null&&ho(ra,e),oa!==null&&ho(oa,e),sa!==null&&ho(sa,e),Nl.forEach(t),_l.forEach(t);for(var n=0;n<ca.length;n++){var i=ca[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ca.length&&(n=ca[0],n.blockedOn===null);)Ih(n),n.blockedOn===null&&ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],c=n[i+1],p=r[gt]||null;if(typeof c=="function")p||e1(n);else if(p){var x=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[gt]||null)x=p.formAction;else if(zu(r)!==null)continue}else x=p.action;typeof x=="function"?n[i+1]=x:(n.splice(i,3),i-=3),e1(n)}}}function t1(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Au(e){this._internalRoot=e}go.prototype.render=Au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=_t();Qh(n,i,e,t,null,null)},go.prototype.unmount=Au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qh(e.current,2,null,e,null,null),Jr(),t[Ha]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var t=fd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ca.length&&t!==0&&t<ca[n].priority;n++);ca.splice(n,0,e),n===0&&Ih(e)}};var n1=l.version;if(n1!=="19.2.0")throw Error(o(527,n1,"19.2.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Vy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Xi=xo.inject(Vy),Tt=xo}catch{}}return Bl.createRoot=function(e,t){if(!f(e))throw Error(o(299));var n=!1,i="",r=cp,c=up,p=fp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=Xh(e,1,!1,null,null,n,i,null,r,c,p,t1),e[Ha]=t.current,uu(e),new Au(t)},Bl.hydrateRoot=function(e,t,n){if(!f(e))throw Error(o(299));var i=!1,r="",c=cp,p=up,x=fp,j=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.formState!==void 0&&(j=n.formState)),t=Xh(e,1,!0,t,n??null,i,r,j,c,p,x,t1),t.context=Vh(null),n=t.current,i=_t(),i=vs(i),r=Kn(i),r.callback=null,Jn(n,r,i),n=i,t.current.lanes=n,Qi(t,n),rn(t),e[Ha]=t.current,uu(e),new go(t)},Bl.version="19.2.0",Bl}var d1;function ev(){if(d1)return ku.exports;d1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),ku.exports=Py(),ku.exports}var tv=ev();const nv=Zl(tv);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var p1="popstate";function av(a={}){function l(o,f){let{pathname:d,search:h,hash:y}=o.location;return hf("",{pathname:d,search:h,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(o,f){return typeof f=="string"?f:Gl(f)}return lv(l,s,null,a)}function Xe(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function cn(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function iv(){return Math.random().toString(36).substring(2,10)}function h1(a,l){return{usr:a.state,key:a.key,idx:l}}function hf(a,l,s=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Bi(l):l,state:s,key:l&&l.key||o||iv()}}function Gl({pathname:a="/",search:l="",hash:s=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function Bi(a){let l={};if(a){let s=a.indexOf("#");s>=0&&(l.hash=a.substring(s),a=a.substring(0,s));let o=a.indexOf("?");o>=0&&(l.search=a.substring(o),a=a.substring(0,o)),a&&(l.pathname=a)}return l}function lv(a,l,s,o={}){let{window:f=document.defaultView,v5Compat:d=!1}=o,h=f.history,y="POP",g=null,m=S();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function S(){return(h.state||{idx:null}).idx}function w(){y="POP";let $=S(),B=$==null?null:$-m;m=$,g&&g({action:y,location:k.location,delta:B})}function T($,B){y="PUSH";let q=hf(k.location,$,B);m=S()+1;let Y=h1(q,m),Z=k.createHref(q);try{h.pushState(Y,"",Z)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;f.location.assign(Z)}d&&g&&g({action:y,location:k.location,delta:1})}function z($,B){y="REPLACE";let q=hf(k.location,$,B);m=S();let Y=h1(q,m),Z=k.createHref(q);h.replaceState(Y,"",Z),d&&g&&g({action:y,location:k.location,delta:0})}function A($){return rv($)}let k={get action(){return y},get location(){return a(f,h)},listen($){if(g)throw new Error("A history only accepts one active listener");return f.addEventListener(p1,w),g=$,()=>{f.removeEventListener(p1,w),g=null}},createHref($){return l(f,$)},createURL:A,encodeLocation($){let B=A($);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:T,replace:z,go($){return h.go($)}};return k}function rv(a,l=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(s,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Gl(a);return o=o.replace(/ $/,"%20"),!l&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function Bm(a,l,s="/"){return ov(a,l,s,!1)}function ov(a,l,s,o){let f=typeof l=="string"?Bi(l):l,d=Dn(f.pathname||"/",s);if(d==null)return null;let h=Lm(a);sv(h);let y=null;for(let g=0;y==null&&g<h.length;++g){let m=vv(d);y=xv(h[g],m,o)}return y}function Lm(a,l=[],s=[],o="",f=!1){let d=(h,y,g=f,m)=>{let S={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(o)&&g)return;Xe(S.relativePath.startsWith(o),`Absolute route path "${S.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(o.length)}let w=Nn([o,S.relativePath]),T=s.concat(S);h.children&&h.children.length>0&&(Xe(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Lm(h.children,l,T,w,g)),!(h.path==null&&!h.index)&&l.push({path:w,score:mv(w,h.index),routesMeta:T})};return a.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))d(h,y);else for(let g of Um(h.path))d(h,y,!0,g)}),l}function Um(a){let l=a.split("/");if(l.length===0)return[];let[s,...o]=l,f=s.endsWith("?"),d=s.replace(/\?$/,"");if(o.length===0)return f?[d,""]:[d];let h=Um(o.join("/")),y=[];return y.push(...h.map(g=>g===""?d:[d,g].join("/"))),f&&y.push(...h),y.map(g=>a.startsWith("/")&&g===""?"/":g)}function sv(a){a.sort((l,s)=>l.score!==s.score?s.score-l.score:gv(l.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var cv=/^:[\w-]+$/,uv=3,fv=2,dv=1,pv=10,hv=-2,m1=a=>a==="*";function mv(a,l){let s=a.split("/"),o=s.length;return s.some(m1)&&(o+=hv),l&&(o+=fv),s.filter(f=>!m1(f)).reduce((f,d)=>f+(cv.test(d)?uv:d===""?dv:pv),o)}function gv(a,l){return a.length===l.length&&a.slice(0,-1).every((o,f)=>o===l[f])?a[a.length-1]-l[l.length-1]:0}function xv(a,l,s=!1){let{routesMeta:o}=a,f={},d="/",h=[];for(let y=0;y<o.length;++y){let g=o[y],m=y===o.length-1,S=d==="/"?l:l.slice(d.length)||"/",w=Go({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},S),T=g.route;if(!w&&m&&s&&!o[o.length-1].route.index&&(w=Go({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},S)),!w)return null;Object.assign(f,w.params),h.push({params:f,pathname:Nn([d,w.pathname]),pathnameBase:jv(Nn([d,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(d=Nn([d,w.pathnameBase]))}return h}function Go(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[s,o]=yv(a.path,a.caseSensitive,a.end),f=l.match(s);if(!f)return null;let d=f[0],h=d.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:o.reduce((m,{paramName:S,isOptional:w},T)=>{if(S==="*"){let A=y[T]||"";h=d.slice(0,d.length-A.length).replace(/(.)\/+$/,"$1")}const z=y[T];return w&&!z?m[S]=void 0:m[S]=(z||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:h,pattern:a}}function yv(a,l=!1,s=!0){cn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],f="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,y,g)=>(o.push({paramName:y,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),f+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":a!==""&&a!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,l?void 0:"i"),o]}function vv(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return cn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function Dn(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let s=l.endsWith("/")?l.length-1:l.length,o=a.charAt(s);return o&&o!=="/"?null:a.slice(s)||"/"}function bv(a,l="/"){let{pathname:s,search:o="",hash:f=""}=typeof a=="string"?Bi(a):a;return{pathname:s?s.startsWith("/")?s:Sv(s,l):l,search:Ev(o),hash:Cv(f)}}function Sv(a,l){let s=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function $u(a,l,s,o){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wv(a){return a.filter((l,s)=>s===0||l.route.path&&l.route.path.length>0)}function Hm(a){let l=wv(a);return l.map((s,o)=>o===l.length-1?s.pathname:s.pathnameBase)}function Ym(a,l,s,o=!1){let f;typeof a=="string"?f=Bi(a):(f={...a},Xe(!f.pathname||!f.pathname.includes("?"),$u("?","pathname","search",f)),Xe(!f.pathname||!f.pathname.includes("#"),$u("#","pathname","hash",f)),Xe(!f.search||!f.search.includes("#"),$u("#","search","hash",f)));let d=a===""||f.pathname==="",h=d?"/":f.pathname,y;if(h==null)y=s;else{let w=l.length-1;if(!o&&h.startsWith("..")){let T=h.split("/");for(;T[0]==="..";)T.shift(),w-=1;f.pathname=T.join("/")}y=w>=0?l[w]:"/"}let g=bv(f,y),m=h&&h!=="/"&&h.endsWith("/"),S=(d||h===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(m||S)&&(g.pathname+="/"),g}var Nn=a=>a.join("/").replace(/\/\/+/g,"/"),jv=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Ev=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Cv=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Tv(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var qm=["POST","PUT","PATCH","DELETE"];new Set(qm);var zv=["GET",...qm];new Set(zv);var Li=v.createContext(null);Li.displayName="DataRouter";var es=v.createContext(null);es.displayName="DataRouterState";v.createContext(!1);var Gm=v.createContext({isTransitioning:!1});Gm.displayName="ViewTransition";var Rv=v.createContext(new Map);Rv.displayName="Fetchers";var Av=v.createContext(null);Av.displayName="Await";var un=v.createContext(null);un.displayName="Navigation";var Kl=v.createContext(null);Kl.displayName="Location";var Bn=v.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var Of=v.createContext(null);Of.displayName="RouteError";function Mv(a,{relative:l}={}){Xe(Jl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=v.useContext(un),{hash:f,pathname:d,search:h}=Fl(a,{relative:l}),y=d;return s!=="/"&&(y=d==="/"?s:Nn([s,d])),o.createHref({pathname:y,search:h,hash:f})}function Jl(){return v.useContext(Kl)!=null}function Ln(){return Xe(Jl(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Kl).location}var Xm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vm(a){v.useContext(un).static||v.useLayoutEffect(a)}function ts(){let{isDataRoute:a}=v.useContext(Bn);return a?Gv():Ov()}function Ov(){Xe(Jl(),"useNavigate() may be used only in the context of a <Router> component.");let a=v.useContext(Li),{basename:l,navigator:s}=v.useContext(un),{matches:o}=v.useContext(Bn),{pathname:f}=Ln(),d=JSON.stringify(Hm(o)),h=v.useRef(!1);return Vm(()=>{h.current=!0}),v.useCallback((g,m={})=>{if(cn(h.current,Xm),!h.current)return;if(typeof g=="number"){s.go(g);return}let S=Ym(g,JSON.parse(d),f,m.relative==="path");a==null&&l!=="/"&&(S.pathname=S.pathname==="/"?l:Nn([l,S.pathname])),(m.replace?s.replace:s.push)(S,m.state,m)},[l,s,d,f,a])}v.createContext(null);function Fl(a,{relative:l}={}){let{matches:s}=v.useContext(Bn),{pathname:o}=Ln(),f=JSON.stringify(Hm(s));return v.useMemo(()=>Ym(a,JSON.parse(f),o,l==="path"),[a,f,o,l])}function kv(a,l){return Qm(a,l)}function Qm(a,l,s,o,f){Xe(Jl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(un),{matches:h}=v.useContext(Bn),y=h[h.length-1],g=y?y.params:{},m=y?y.pathname:"/",S=y?y.pathnameBase:"/",w=y&&y.route;{let q=w&&w.path||"";Zm(m,!w||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let T=Ln(),z;if(l){let q=typeof l=="string"?Bi(l):l;Xe(S==="/"||q.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${q.pathname}" was given in the \`location\` prop.`),z=q}else z=T;let A=z.pathname||"/",k=A;if(S!=="/"){let q=S.replace(/^\//,"").split("/");k="/"+A.replace(/^\//,"").split("/").slice(q.length).join("/")}let $=Bm(a,{pathname:k});cn(w||$!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),cn($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=Bv($&&$.map(q=>Object.assign({},q,{params:Object.assign({},g,q.params),pathname:Nn([S,d.encodeLocation?d.encodeLocation(q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?S:Nn([S,d.encodeLocation?d.encodeLocation(q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),h,s,o,f);return l&&B?v.createElement(Kl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...z},navigationType:"POP"}},B):B}function Nv(){let a=qv(),l=Tv(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),s=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:d},"ErrorBoundary")," or"," ",v.createElement("code",{style:d},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},l),s?v.createElement("pre",{style:f},s):null,h)}var _v=v.createElement(Nv,null),Dv=class extends v.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.unstable_onError?this.props.unstable_onError(a,l):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?v.createElement(Bn.Provider,{value:this.props.routeContext},v.createElement(Of.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $v({routeContext:a,match:l,children:s}){let o=v.useContext(Li);return o&&o.static&&o.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=l.route.id),v.createElement(Bn.Provider,{value:a},s)}function Bv(a,l=[],s=null,o=null,f=null){if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(l.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let d=a,h=s?.errors;if(h!=null){let m=d.findIndex(S=>S.route.id&&h?.[S.route.id]!==void 0);Xe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,m+1))}let y=!1,g=-1;if(s)for(let m=0;m<d.length;m++){let S=d[m];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(g=m),S.route.id){let{loaderData:w,errors:T}=s,z=S.route.loader&&!w.hasOwnProperty(S.route.id)&&(!T||T[S.route.id]===void 0);if(S.route.lazy||z){y=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}return d.reduceRight((m,S,w)=>{let T,z=!1,A=null,k=null;s&&(T=h&&S.route.id?h[S.route.id]:void 0,A=S.route.errorElement||_v,y&&(g<0&&w===0?(Zm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,k=null):g===w&&(z=!0,k=S.route.hydrateFallbackElement||null)));let $=l.concat(d.slice(0,w+1)),B=()=>{let q;return T?q=A:z?q=k:S.route.Component?q=v.createElement(S.route.Component,null):S.route.element?q=S.route.element:q=m,v.createElement($v,{match:S,routeContext:{outlet:m,matches:$,isDataRoute:s!=null},children:q})};return s&&(S.route.ErrorBoundary||S.route.errorElement||w===0)?v.createElement(Dv,{location:s.location,revalidation:s.revalidation,component:A,error:T,children:B(),routeContext:{outlet:null,matches:$,isDataRoute:!0},unstable_onError:o}):B()},null)}function kf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lv(a){let l=v.useContext(Li);return Xe(l,kf(a)),l}function Uv(a){let l=v.useContext(es);return Xe(l,kf(a)),l}function Hv(a){let l=v.useContext(Bn);return Xe(l,kf(a)),l}function Nf(a){let l=Hv(a),s=l.matches[l.matches.length-1];return Xe(s.route.id,`${a} can only be used on routes that contain a unique "id"`),s.route.id}function Yv(){return Nf("useRouteId")}function qv(){let a=v.useContext(Of),l=Uv("useRouteError"),s=Nf("useRouteError");return a!==void 0?a:l.errors?.[s]}function Gv(){let{router:a}=Lv("useNavigate"),l=Nf("useNavigate"),s=v.useRef(!1);return Vm(()=>{s.current=!0}),v.useCallback(async(f,d={})=>{cn(s.current,Xm),s.current&&(typeof f=="number"?a.navigate(f):await a.navigate(f,{fromRouteId:l,...d}))},[a,l])}var g1={};function Zm(a,l,s){!l&&!g1[a]&&(g1[a]=!0,cn(!1,s))}v.memo(Xv);function Xv({routes:a,future:l,state:s,unstable_onError:o}){return Qm(a,void 0,s,o,l)}function _a(a){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vv({basename:a="/",children:l=null,location:s,navigationType:o="POP",navigator:f,static:d=!1}){Xe(!Jl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),y=v.useMemo(()=>({basename:h,navigator:f,static:d,future:{}}),[h,f,d]);typeof s=="string"&&(s=Bi(s));let{pathname:g="/",search:m="",hash:S="",state:w=null,key:T="default"}=s,z=v.useMemo(()=>{let A=Dn(g,h);return A==null?null:{location:{pathname:A,search:m,hash:S,state:w,key:T},navigationType:o}},[h,g,m,S,w,T,o]);return cn(z!=null,`<Router basename="${h}"> is not able to match the URL "${g}${m}${S}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:v.createElement(un.Provider,{value:y},v.createElement(Kl.Provider,{children:l,value:z}))}function Qv({children:a,location:l}){return kv(mf(a),l)}function mf(a,l=[]){let s=[];return v.Children.forEach(a,(o,f)=>{if(!v.isValidElement(o))return;let d=[...l,f];if(o.type===v.Fragment){s.push.apply(s,mf(o.props.children,d));return}Xe(o.type===_a,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=mf(o.props.children,d)),s.push(h)}),s}var Do="get",$o="application/x-www-form-urlencoded";function ns(a){return a!=null&&typeof a.tagName=="string"}function Zv(a){return ns(a)&&a.tagName.toLowerCase()==="button"}function Kv(a){return ns(a)&&a.tagName.toLowerCase()==="form"}function Jv(a){return ns(a)&&a.tagName.toLowerCase()==="input"}function Fv(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Wv(a,l){return a.button===0&&(!l||l==="_self")&&!Fv(a)}var yo=null;function Iv(){if(yo===null)try{new FormData(document.createElement("form"),0),yo=!1}catch{yo=!0}return yo}var Pv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bu(a){return a!=null&&!Pv.has(a)?(cn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$o}"`),null):a}function eb(a,l){let s,o,f,d,h;if(Kv(a)){let y=a.getAttribute("action");o=y?Dn(y,l):null,s=a.getAttribute("method")||Do,f=Bu(a.getAttribute("enctype"))||$o,d=new FormData(a)}else if(Zv(a)||Jv(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||y.getAttribute("action");if(o=g?Dn(g,l):null,s=a.getAttribute("formmethod")||y.getAttribute("method")||Do,f=Bu(a.getAttribute("formenctype"))||Bu(y.getAttribute("enctype"))||$o,d=new FormData(y,a),!Iv()){let{name:m,type:S,value:w}=a;if(S==="image"){let T=m?`${m}.`:"";d.append(`${T}x`,"0"),d.append(`${T}y`,"0")}else m&&d.append(m,w)}}else{if(ns(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Do,o=null,f=$o,h=a}return d&&f==="text/plain"&&(h=d,d=void 0),{action:o,method:s.toLowerCase(),encType:f,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _f(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function tb(a,l,s){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${s}`:l&&Dn(o.pathname,l)==="/"?o.pathname=`${l.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function nb(a,l){if(a.id in l)return l[a.id];try{let s=await import(a.module);return l[a.id]=s,s}catch(s){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ab(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function ib(a,l,s){let o=await Promise.all(a.map(async f=>{let d=l.routes[f.route.id];if(d){let h=await nb(d,s);return h.links?h.links():[]}return[]}));return sb(o.flat(1).filter(ab).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function x1(a,l,s,o,f,d){let h=(g,m)=>s[m]?g.route.id!==s[m].route.id:!0,y=(g,m)=>s[m].pathname!==g.pathname||s[m].route.path?.endsWith("*")&&s[m].params["*"]!==g.params["*"];return d==="assets"?l.filter((g,m)=>h(g,m)||y(g,m)):d==="data"?l.filter((g,m)=>{let S=o.routes[g.route.id];if(!S||!S.hasLoader)return!1;if(h(g,m)||y(g,m))return!0;if(g.route.shouldRevalidate){let w=g.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function lb(a,l,{includeHydrateFallback:s}={}){return rb(a.map(o=>{let f=l.routes[o.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function rb(a){return[...new Set(a)]}function ob(a){let l={},s=Object.keys(a).sort();for(let o of s)l[o]=a[o];return l}function sb(a,l){let s=new Set;return new Set(l),a.reduce((o,f)=>{let d=JSON.stringify(ob(f));return s.has(d)||(s.add(d),o.push({key:d,link:f})),o},[])}function Km(){let a=v.useContext(Li);return _f(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function cb(){let a=v.useContext(es);return _f(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Df=v.createContext(void 0);Df.displayName="FrameworkContext";function Jm(){let a=v.useContext(Df);return _f(a,"You must render this element inside a <HydratedRouter> element"),a}function ub(a,l){let s=v.useContext(Df),[o,f]=v.useState(!1),[d,h]=v.useState(!1),{onFocus:y,onBlur:g,onMouseEnter:m,onMouseLeave:S,onTouchStart:w}=l,T=v.useRef(null);v.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let k=B=>{B.forEach(q=>{h(q.isIntersecting)})},$=new IntersectionObserver(k,{threshold:.5});return T.current&&$.observe(T.current),()=>{$.disconnect()}}},[a]),v.useEffect(()=>{if(o){let k=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(k)}}},[o]);let z=()=>{f(!0)},A=()=>{f(!1),h(!1)};return s?a!=="intent"?[d,T,{}]:[d,T,{onFocus:Ll(y,z),onBlur:Ll(g,A),onMouseEnter:Ll(m,z),onMouseLeave:Ll(S,A),onTouchStart:Ll(w,z)}]:[!1,T,{}]}function Ll(a,l){return s=>{a&&a(s),s.defaultPrevented||l(s)}}function fb({page:a,...l}){let{router:s}=Km(),o=v.useMemo(()=>Bm(s.routes,a,s.basename),[s.routes,a,s.basename]);return o?v.createElement(pb,{page:a,matches:o,...l}):null}function db(a){let{manifest:l,routeModules:s}=Jm(),[o,f]=v.useState([]);return v.useEffect(()=>{let d=!1;return ib(a,l,s).then(h=>{d||f(h)}),()=>{d=!0}},[a,l,s]),o}function pb({page:a,matches:l,...s}){let o=Ln(),{manifest:f,routeModules:d}=Jm(),{basename:h}=Km(),{loaderData:y,matches:g}=cb(),m=v.useMemo(()=>x1(a,l,g,f,o,"data"),[a,l,g,f,o]),S=v.useMemo(()=>x1(a,l,g,f,o,"assets"),[a,l,g,f,o]),w=v.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let A=new Set,k=!1;if(l.forEach(B=>{let q=f.routes[B.route.id];!q||!q.hasLoader||(!m.some(Y=>Y.route.id===B.route.id)&&B.route.id in y&&d[B.route.id]?.shouldRevalidate||q.hasClientLoader?k=!0:A.add(B.route.id))}),A.size===0)return[];let $=tb(a,h,"data");return k&&A.size>0&&$.searchParams.set("_routes",l.filter(B=>A.has(B.route.id)).map(B=>B.route.id).join(",")),[$.pathname+$.search]},[h,y,o,f,m,l,a,d]),T=v.useMemo(()=>lb(S,f),[S,f]),z=db(S);return v.createElement(v.Fragment,null,w.map(A=>v.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...s})),T.map(A=>v.createElement("link",{key:A,rel:"modulepreload",href:A,...s})),z.map(({key:A,link:k})=>v.createElement("link",{key:A,nonce:s.nonce,...k})))}function hb(...a){return l=>{a.forEach(s=>{typeof s=="function"?s(l):s!=null&&(s.current=l)})}}var Fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fm&&(window.__reactRouterVersion="7.9.4")}catch{}function mb({basename:a,children:l,window:s}){let o=v.useRef();o.current==null&&(o.current=av({window:s,v5Compat:!0}));let f=o.current,[d,h]=v.useState({action:f.action,location:f.location}),y=v.useCallback(g=>{v.startTransition(()=>h(g))},[h]);return v.useLayoutEffect(()=>f.listen(y),[f,y]),v.createElement(Vv,{basename:a,children:l,location:d.location,navigationType:d.action,navigator:f})}var Wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ui=v.forwardRef(function({onClick:l,discover:s="render",prefetch:o="none",relative:f,reloadDocument:d,replace:h,state:y,target:g,to:m,preventScrollReset:S,viewTransition:w,...T},z){let{basename:A}=v.useContext(un),k=typeof m=="string"&&Wm.test(m),$,B=!1;if(typeof m=="string"&&k&&($=m,Fm))try{let W=new URL(window.location.href),ce=m.startsWith("//")?new URL(W.protocol+m):new URL(m),de=Dn(ce.pathname,A);ce.origin===W.origin&&de!=null?m=de+ce.search+ce.hash:B=!0}catch{cn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=Mv(m,{relative:f}),[Y,Z,J]=ub(o,T),L=vb(m,{replace:h,state:y,target:g,preventScrollReset:S,relative:f,viewTransition:w});function V(W){l&&l(W),W.defaultPrevented||L(W)}let Q=v.createElement("a",{...T,...J,href:$||q,onClick:B||d?l:V,ref:hb(z,Z),target:g,"data-discover":!k&&s==="render"?"true":void 0});return Y&&!k?v.createElement(v.Fragment,null,Q,v.createElement(fb,{page:q})):Q});Ui.displayName="Link";var gb=v.forwardRef(function({"aria-current":l="page",caseSensitive:s=!1,className:o="",end:f=!1,style:d,to:h,viewTransition:y,children:g,...m},S){let w=Fl(h,{relative:m.relative}),T=Ln(),z=v.useContext(es),{navigator:A,basename:k}=v.useContext(un),$=z!=null&&Eb(w)&&y===!0,B=A.encodeLocation?A.encodeLocation(w).pathname:w.pathname,q=T.pathname,Y=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;s||(q=q.toLowerCase(),Y=Y?Y.toLowerCase():null,B=B.toLowerCase()),Y&&k&&(Y=Dn(Y,k)||Y);const Z=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let J=q===B||!f&&q.startsWith(B)&&q.charAt(Z)==="/",L=Y!=null&&(Y===B||!f&&Y.startsWith(B)&&Y.charAt(B.length)==="/"),V={isActive:J,isPending:L,isTransitioning:$},Q=J?l:void 0,W;typeof o=="function"?W=o(V):W=[o,J?"active":null,L?"pending":null,$?"transitioning":null].filter(Boolean).join(" ");let ce=typeof d=="function"?d(V):d;return v.createElement(Ui,{...m,"aria-current":Q,className:W,ref:S,style:ce,to:h,viewTransition:y},typeof g=="function"?g(V):g)});gb.displayName="NavLink";var xb=v.forwardRef(({discover:a="render",fetcherKey:l,navigate:s,reloadDocument:o,replace:f,state:d,method:h=Do,action:y,onSubmit:g,relative:m,preventScrollReset:S,viewTransition:w,...T},z)=>{let A=wb(),k=jb(y,{relative:m}),$=h.toLowerCase()==="get"?"get":"post",B=typeof y=="string"&&Wm.test(y),q=Y=>{if(g&&g(Y),Y.defaultPrevented)return;Y.preventDefault();let Z=Y.nativeEvent.submitter,J=Z?.getAttribute("formmethod")||h;A(Z||Y.currentTarget,{fetcherKey:l,method:J,navigate:s,replace:f,state:d,relative:m,preventScrollReset:S,viewTransition:w})};return v.createElement("form",{ref:z,method:$,action:k,onSubmit:o?g:q,...T,"data-discover":!B&&a==="render"?"true":void 0})});xb.displayName="Form";function yb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Im(a){let l=v.useContext(Li);return Xe(l,yb(a)),l}function vb(a,{target:l,replace:s,state:o,preventScrollReset:f,relative:d,viewTransition:h}={}){let y=ts(),g=Ln(),m=Fl(a,{relative:d});return v.useCallback(S=>{if(Wv(S,l)){S.preventDefault();let w=s!==void 0?s:Gl(g)===Gl(m);y(a,{replace:w,state:o,preventScrollReset:f,relative:d,viewTransition:h})}},[g,y,m,s,o,l,a,f,d,h])}var bb=0,Sb=()=>`__${String(++bb)}__`;function wb(){let{router:a}=Im("useSubmit"),{basename:l}=v.useContext(un),s=Yv();return v.useCallback(async(o,f={})=>{let{action:d,method:h,encType:y,formData:g,body:m}=eb(o,l);if(f.navigate===!1){let S=f.fetcherKey||Sb();await a.fetch(S,s,f.action||d,{preventScrollReset:f.preventScrollReset,formData:g,body:m,formMethod:f.method||h,formEncType:f.encType||y,flushSync:f.flushSync})}else await a.navigate(f.action||d,{preventScrollReset:f.preventScrollReset,formData:g,body:m,formMethod:f.method||h,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:s,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,l,s])}function jb(a,{relative:l}={}){let{basename:s}=v.useContext(un),o=v.useContext(Bn);Xe(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),d={...Fl(a||".",{relative:l})},h=Ln();if(a==null){d.search=h.search;let y=new URLSearchParams(d.search),g=y.getAll("index");if(g.some(S=>S==="")){y.delete("index"),g.filter(w=>w).forEach(w=>y.append("index",w));let S=y.toString();d.search=S?`?${S}`:""}}return(!a||a===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:Nn([s,d.pathname])),Gl(d)}function Eb(a,{relative:l}={}){let s=v.useContext(Gm);Xe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Im("useViewTransitionState"),f=Fl(a,{relative:l});if(!s.isTransitioning)return!1;let d=Dn(s.currentLocation.pathname,o)||s.currentLocation.pathname,h=Dn(s.nextLocation.pathname,o)||s.nextLocation.pathname;return Go(f.pathname,h)!=null||Go(f.pathname,d)!=null}var Cb=$m();const Ai=Zl(Cb);var ft=function(){return ft=Object.assign||function(l){for(var s,o=1,f=arguments.length;o<f;o++){s=arguments[o];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(l[d]=s[d])}return l},ft.apply(this,arguments)};function Oi(a,l,s){if(s||arguments.length===2)for(var o=0,f=l.length,d;o<f;o++)(d||!(o in l))&&(d||(d=Array.prototype.slice.call(l,0,o)),d[o]=l[o]);return a.concat(d||Array.prototype.slice.call(l))}var He="-ms-",ql="-moz-",Ae="-webkit-",Pm="comm",as="rule",$f="decl",Tb="@import",eg="@keyframes",zb="@layer",tg=Math.abs,Bf=String.fromCharCode,gf=Object.assign;function Rb(a,l){return at(a,0)^45?(((l<<2^at(a,0))<<2^at(a,1))<<2^at(a,2))<<2^at(a,3):0}function ng(a){return a.trim()}function Mn(a,l){return(a=l.exec(a))?a[0]:a}function ge(a,l,s){return a.replace(l,s)}function Bo(a,l,s){return a.indexOf(l,s)}function at(a,l){return a.charCodeAt(l)|0}function ki(a,l,s){return a.slice(l,s)}function sn(a){return a.length}function ag(a){return a.length}function Hl(a,l){return l.push(a),a}function Ab(a,l){return a.map(l).join("")}function y1(a,l){return a.filter(function(s){return!Mn(s,l)})}var is=1,Ni=1,ig=0,Kt=0,Pe=0,Hi="";function ls(a,l,s,o,f,d,h,y){return{value:a,root:l,parent:s,type:o,props:f,children:d,line:is,column:Ni,length:h,return:"",siblings:y}}function pa(a,l){return gf(ls("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function Ei(a){for(;a.root;)a=pa(a.root,{children:[a]});Hl(a,a.siblings)}function Mb(){return Pe}function Ob(){return Pe=Kt>0?at(Hi,--Kt):0,Ni--,Pe===10&&(Ni=1,is--),Pe}function tn(){return Pe=Kt<ig?at(Hi,Kt++):0,Ni++,Pe===10&&(Ni=1,is++),Pe}function Ba(){return at(Hi,Kt)}function Lo(){return Kt}function rs(a,l){return ki(Hi,a,l)}function xf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kb(a){return is=Ni=1,ig=sn(Hi=a),Kt=0,[]}function Nb(a){return Hi="",a}function Lu(a){return ng(rs(Kt-1,yf(a===91?a+2:a===40?a+1:a)))}function _b(a){for(;(Pe=Ba())&&Pe<33;)tn();return xf(a)>2||xf(Pe)>3?"":" "}function Db(a,l){for(;--l&&tn()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return rs(a,Lo()+(l<6&&Ba()==32&&tn()==32))}function yf(a){for(;tn();)switch(Pe){case a:return Kt;case 34:case 39:a!==34&&a!==39&&yf(Pe);break;case 40:a===41&&yf(a);break;case 92:tn();break}return Kt}function $b(a,l){for(;tn()&&a+Pe!==57;)if(a+Pe===84&&Ba()===47)break;return"/*"+rs(l,Kt-1)+"*"+Bf(a===47?a:tn())}function Bb(a){for(;!xf(Ba());)tn();return rs(a,Kt)}function Lb(a){return Nb(Uo("",null,null,null,[""],a=kb(a),0,[0],a))}function Uo(a,l,s,o,f,d,h,y,g){for(var m=0,S=0,w=h,T=0,z=0,A=0,k=1,$=1,B=1,q=0,Y="",Z=f,J=d,L=o,V=Y;$;)switch(A=q,q=tn()){case 40:if(A!=108&&at(V,w-1)==58){Bo(V+=ge(Lu(q),"&","&\f"),"&\f",tg(m?y[m-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:V+=Lu(q);break;case 9:case 10:case 13:case 32:V+=_b(A);break;case 92:V+=Db(Lo()-1,7);continue;case 47:switch(Ba()){case 42:case 47:Hl(Ub($b(tn(),Lo()),l,s,g),g);break;default:V+="/"}break;case 123*k:y[m++]=sn(V)*B;case 125*k:case 59:case 0:switch(q){case 0:case 125:$=0;case 59+S:B==-1&&(V=ge(V,/\f/g,"")),z>0&&sn(V)-w&&Hl(z>32?b1(V+";",o,s,w-1,g):b1(ge(V," ","")+";",o,s,w-2,g),g);break;case 59:V+=";";default:if(Hl(L=v1(V,l,s,m,S,f,y,Y,Z=[],J=[],w,d),d),q===123)if(S===0)Uo(V,l,L,L,Z,d,w,y,J);else switch(T===99&&at(V,3)===110?100:T){case 100:case 108:case 109:case 115:Uo(a,L,L,o&&Hl(v1(a,L,L,0,0,f,y,Y,f,Z=[],w,J),J),f,J,w,y,o?Z:J);break;default:Uo(V,L,L,L,[""],J,0,y,J)}}m=S=z=0,k=B=1,Y=V="",w=h;break;case 58:w=1+sn(V),z=A;default:if(k<1){if(q==123)--k;else if(q==125&&k++==0&&Ob()==125)continue}switch(V+=Bf(q),q*k){case 38:B=S>0?1:(V+="\f",-1);break;case 44:y[m++]=(sn(V)-1)*B,B=1;break;case 64:Ba()===45&&(V+=Lu(tn())),T=Ba(),S=w=sn(Y=V+=Bb(Lo())),q++;break;case 45:A===45&&sn(V)==2&&(k=0)}}return d}function v1(a,l,s,o,f,d,h,y,g,m,S,w){for(var T=f-1,z=f===0?d:[""],A=ag(z),k=0,$=0,B=0;k<o;++k)for(var q=0,Y=ki(a,T+1,T=tg($=h[k])),Z=a;q<A;++q)(Z=ng($>0?z[q]+" "+Y:ge(Y,/&\f/g,z[q])))&&(g[B++]=Z);return ls(a,l,s,f===0?as:y,g,m,S,w)}function Ub(a,l,s,o){return ls(a,l,s,Pm,Bf(Mb()),ki(a,2,-2),0,o)}function b1(a,l,s,o,f){return ls(a,l,s,$f,ki(a,0,o),ki(a,o+1,-1),o,f)}function lg(a,l,s){switch(Rb(a,l)){case 5103:return Ae+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+a+a;case 4789:return ql+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+a+ql+a+He+a+a;case 5936:switch(at(a,l+11)){case 114:return Ae+a+He+ge(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Ae+a+He+ge(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Ae+a+He+ge(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Ae+a+He+a+a;case 6165:return Ae+a+He+"flex-"+a+a;case 5187:return Ae+a+ge(a,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+He+"flex-$1$2")+a;case 5443:return Ae+a+He+"flex-item-"+ge(a,/flex-|-self/g,"")+(Mn(a,/flex-|baseline/)?"":He+"grid-row-"+ge(a,/flex-|-self/g,""))+a;case 4675:return Ae+a+He+"flex-line-pack"+ge(a,/align-content|flex-|-self/g,"")+a;case 5548:return Ae+a+He+ge(a,"shrink","negative")+a;case 5292:return Ae+a+He+ge(a,"basis","preferred-size")+a;case 6060:return Ae+"box-"+ge(a,"-grow","")+Ae+a+He+ge(a,"grow","positive")+a;case 4554:return Ae+ge(a,/([^-])(transform)/g,"$1"+Ae+"$2")+a;case 6187:return ge(ge(ge(a,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),a,"")+a;case 5495:case 3959:return ge(a,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return ge(ge(a,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+He+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+a+a;case 4200:if(!Mn(a,/flex-|baseline/))return He+"grid-column-align"+ki(a,l)+a;break;case 2592:case 3360:return He+ge(a,"template-","")+a;case 4384:case 3616:return s&&s.some(function(o,f){return l=f,Mn(o.props,/grid-\w+-end/)})?~Bo(a+(s=s[l].value),"span",0)?a:He+ge(a,"-start","")+a+He+"grid-row-span:"+(~Bo(s,"span",0)?Mn(s,/\d+/):+Mn(s,/\d+/)-+Mn(a,/\d+/))+";":He+ge(a,"-start","")+a;case 4896:case 4128:return s&&s.some(function(o){return Mn(o.props,/grid-\w+-start/)})?a:He+ge(ge(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ge(a,/(.+)-inline(.+)/,Ae+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sn(a)-1-l>6)switch(at(a,l+1)){case 109:if(at(a,l+4)!==45)break;case 102:return ge(a,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+ql+(at(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~Bo(a,"stretch",0)?lg(ge(a,"stretch","fill-available"),l,s)+a:a}break;case 5152:case 5920:return ge(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,f,d,h,y,g,m){return He+f+":"+d+m+(h?He+f+"-span:"+(y?g:+g-+d)+m:"")+a});case 4949:if(at(a,l+6)===121)return ge(a,":",":"+Ae)+a;break;case 6444:switch(at(a,at(a,14)===45?18:11)){case 120:return ge(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(at(a,14)===45?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+He+"$2box$3")+a;case 100:return ge(a,":",":"+He)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(a,"scroll-","scroll-snap-")+a}return a}function Xo(a,l){for(var s="",o=0;o<a.length;o++)s+=l(a[o],o,a,l)||"";return s}function Hb(a,l,s,o){switch(a.type){case zb:if(a.children.length)break;case Tb:case $f:return a.return=a.return||a.value;case Pm:return"";case eg:return a.return=a.value+"{"+Xo(a.children,o)+"}";case as:if(!sn(a.value=a.props.join(",")))return""}return sn(s=Xo(a.children,o))?a.return=a.value+"{"+s+"}":""}function Yb(a){var l=ag(a);return function(s,o,f,d){for(var h="",y=0;y<l;y++)h+=a[y](s,o,f,d)||"";return h}}function qb(a){return function(l){l.root||(l=l.return)&&a(l)}}function Gb(a,l,s,o){if(a.length>-1&&!a.return)switch(a.type){case $f:a.return=lg(a.value,a.length,s);return;case eg:return Xo([pa(a,{value:ge(a.value,"@","@"+Ae)})],o);case as:if(a.length)return Ab(s=a.props,function(f){switch(Mn(f,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ei(pa(a,{props:[ge(f,/:(read-\w+)/,":"+ql+"$1")]})),Ei(pa(a,{props:[f]})),gf(a,{props:y1(s,o)});break;case"::placeholder":Ei(pa(a,{props:[ge(f,/:(plac\w+)/,":"+Ae+"input-$1")]})),Ei(pa(a,{props:[ge(f,/:(plac\w+)/,":"+ql+"$1")]})),Ei(pa(a,{props:[ge(f,/:(plac\w+)/,He+"input-$1")]})),Ei(pa(a,{props:[f]})),gf(a,{props:y1(s,o)});break}return""})}}var Xb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dt={},_i=typeof process<"u"&&Dt!==void 0&&(Dt.REACT_APP_SC_ATTR||Dt.SC_ATTR)||"data-styled",rg="active",og="data-styled-version",os="6.1.19",Lf=`/*!sc*/
`,Vo=typeof window<"u"&&typeof document<"u",Vb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Dt!==void 0&&Dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Dt.REACT_APP_SC_DISABLE_SPEEDY!==""?Dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Dt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Dt!==void 0&&Dt.SC_DISABLE_SPEEDY!==void 0&&Dt.SC_DISABLE_SPEEDY!==""&&Dt.SC_DISABLE_SPEEDY!=="false"&&Dt.SC_DISABLE_SPEEDY),Qb={},ss=Object.freeze([]),Di=Object.freeze({});function sg(a,l,s){return s===void 0&&(s=Di),a.theme!==s.theme&&a.theme||l||s.theme}var cg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Zb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kb=/(^-|-$)/g;function S1(a){return a.replace(Zb,"-").replace(Kb,"")}var Jb=/(a)(d)/gi,vo=52,w1=function(a){return String.fromCharCode(a+(a>25?39:97))};function vf(a){var l,s="";for(l=Math.abs(a);l>vo;l=l/vo|0)s=w1(l%vo)+s;return(w1(l%vo)+s).replace(Jb,"$1-$2")}var Uu,ug=5381,Mi=function(a,l){for(var s=l.length;s;)a=33*a^l.charCodeAt(--s);return a},fg=function(a){return Mi(ug,a)};function Uf(a){return vf(fg(a)>>>0)}function Fb(a){return a.displayName||a.name||"Component"}function Hu(a){return typeof a=="string"&&!0}var dg=typeof Symbol=="function"&&Symbol.for,pg=dg?Symbol.for("react.memo"):60115,Wb=dg?Symbol.for("react.forward_ref"):60112,Ib={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Pb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},e5=((Uu={})[Wb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Uu[pg]=hg,Uu);function j1(a){return("type"in(l=a)&&l.type.$$typeof)===pg?hg:"$$typeof"in a?e5[a.$$typeof]:Ib;var l}var t5=Object.defineProperty,n5=Object.getOwnPropertyNames,E1=Object.getOwnPropertySymbols,a5=Object.getOwnPropertyDescriptor,i5=Object.getPrototypeOf,C1=Object.prototype;function mg(a,l,s){if(typeof l!="string"){if(C1){var o=i5(l);o&&o!==C1&&mg(a,o,s)}var f=n5(l);E1&&(f=f.concat(E1(l)));for(var d=j1(a),h=j1(l),y=0;y<f.length;++y){var g=f[y];if(!(g in Pb||s&&s[g]||h&&g in h||d&&g in d)){var m=a5(l,g);try{t5(a,g,m)}catch{}}}}return a}function $i(a){return typeof a=="function"}function Hf(a){return typeof a=="object"&&"styledComponentId"in a}function $a(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function Qo(a,l){if(a.length===0)return"";for(var s=a[0],o=1;o<a.length;o++)s+=a[o];return s}function Xl(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function bf(a,l,s){if(s===void 0&&(s=!1),!s&&!Xl(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var o=0;o<l.length;o++)a[o]=bf(a[o],l[o]);else if(Xl(l))for(var o in l)a[o]=bf(a[o],l[o]);return a}function Yf(a,l){Object.defineProperty(a,"toString",{value:l})}function Wl(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var l5=(function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return a.prototype.indexOfGroup=function(l){for(var s=0,o=0;o<l;o++)s+=this.groupSizes[o];return s},a.prototype.insertRules=function(l,s){if(l>=this.groupSizes.length){for(var o=this.groupSizes,f=o.length,d=f;l>=d;)if((d<<=1)<0)throw Wl(16,"".concat(l));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var h=f;h<d;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(l+1),g=(h=0,s.length);h<g;h++)this.tag.insertRule(y,s[h])&&(this.groupSizes[l]++,y++)},a.prototype.clearGroup=function(l){if(l<this.length){var s=this.groupSizes[l],o=this.indexOfGroup(l),f=o+s;this.groupSizes[l]=0;for(var d=o;d<f;d++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(l){var s="";if(l>=this.length||this.groupSizes[l]===0)return s;for(var o=this.groupSizes[l],f=this.indexOfGroup(l),d=f+o,h=f;h<d;h++)s+="".concat(this.tag.getRule(h)).concat(Lf);return s},a})(),Ho=new Map,Zo=new Map,Yo=1,bo=function(a){if(Ho.has(a))return Ho.get(a);for(;Zo.has(Yo);)Yo++;var l=Yo++;return Ho.set(a,l),Zo.set(l,a),l},r5=function(a,l){Yo=l+1,Ho.set(a,l),Zo.set(l,a)},o5="style[".concat(_i,"][").concat(og,'="').concat(os,'"]'),s5=new RegExp("^".concat(_i,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),c5=function(a,l,s){for(var o,f=s.split(","),d=0,h=f.length;d<h;d++)(o=f[d])&&a.registerName(l,o)},u5=function(a,l){for(var s,o=((s=l.textContent)!==null&&s!==void 0?s:"").split(Lf),f=[],d=0,h=o.length;d<h;d++){var y=o[d].trim();if(y){var g=y.match(s5);if(g){var m=0|parseInt(g[1],10),S=g[2];m!==0&&(r5(S,m),c5(a,S,g[3]),a.getTag().insertRules(m,f)),f.length=0}else f.push(y)}}},T1=function(a){for(var l=document.querySelectorAll(o5),s=0,o=l.length;s<o;s++){var f=l[s];f&&f.getAttribute(_i)!==rg&&(u5(a,f),f.parentNode&&f.parentNode.removeChild(f))}};function f5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gg=function(a){var l=document.head,s=a||l,o=document.createElement("style"),f=(function(y){var g=Array.from(y.querySelectorAll("style[".concat(_i,"]")));return g[g.length-1]})(s),d=f!==void 0?f.nextSibling:null;o.setAttribute(_i,rg),o.setAttribute(og,os);var h=f5();return h&&o.setAttribute("nonce",h),s.insertBefore(o,d),o},d5=(function(){function a(l){this.element=gg(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var o=document.styleSheets,f=0,d=o.length;f<d;f++){var h=o[f];if(h.ownerNode===s)return h}throw Wl(17)})(this.element),this.length=0}return a.prototype.insertRule=function(l,s){try{return this.sheet.insertRule(s,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var s=this.sheet.cssRules[l];return s&&s.cssText?s.cssText:""},a})(),p5=(function(){function a(l){this.element=gg(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,s){if(l<=this.length&&l>=0){var o=document.createTextNode(s);return this.element.insertBefore(o,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a})(),h5=(function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,s){return l<=this.length&&(this.rules.splice(l,0,s),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a})(),z1=Vo,m5={isServer:!Vo,useCSSOMInjection:!Vb},Ko=(function(){function a(l,s,o){l===void 0&&(l=Di),s===void 0&&(s={});var f=this;this.options=ft(ft({},m5),l),this.gs=s,this.names=new Map(o),this.server=!!l.isServer,!this.server&&Vo&&z1&&(z1=!1,T1(this)),Yf(this,function(){return(function(d){for(var h=d.getTag(),y=h.length,g="",m=function(w){var T=(function(B){return Zo.get(B)})(w);if(T===void 0)return"continue";var z=d.names.get(T),A=h.getGroup(w);if(z===void 0||!z.size||A.length===0)return"continue";var k="".concat(_i,".g").concat(w,'[id="').concat(T,'"]'),$="";z!==void 0&&z.forEach(function(B){B.length>0&&($+="".concat(B,","))}),g+="".concat(A).concat(k,'{content:"').concat($,'"}').concat(Lf)},S=0;S<y;S++)m(S);return g})(f)})}return a.registerId=function(l){return bo(l)},a.prototype.rehydrate=function(){!this.server&&Vo&&T1(this)},a.prototype.reconstructWithOptions=function(l,s){return s===void 0&&(s=!0),new a(ft(ft({},this.options),l),this.gs,s&&this.names||void 0)},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(s){var o=s.useCSSOMInjection,f=s.target;return s.isServer?new h5(f):o?new d5(f):new p5(f)})(this.options),new l5(l)));var l},a.prototype.hasNameForId=function(l,s){return this.names.has(l)&&this.names.get(l).has(s)},a.prototype.registerName=function(l,s){if(bo(l),this.names.has(l))this.names.get(l).add(s);else{var o=new Set;o.add(s),this.names.set(l,o)}},a.prototype.insertRules=function(l,s,o){this.registerName(l,s),this.getTag().insertRules(bo(l),o)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(bo(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a})(),g5=/&/g,x5=/^\s*\/\/.*$/gm;function xg(a,l){return a.map(function(s){return s.type==="rule"&&(s.value="".concat(l," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(l," ")),s.props=s.props.map(function(o){return"".concat(l," ").concat(o)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=xg(s.children,l)),s})}function y5(a){var l,s,o,f=Di,d=f.options,h=d===void 0?Di:d,y=f.plugins,g=y===void 0?ss:y,m=function(T,z,A){return A.startsWith(s)&&A.endsWith(s)&&A.replaceAll(s,"").length>0?".".concat(l):T},S=g.slice();S.push(function(T){T.type===as&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(g5,s).replace(o,m))}),h.prefix&&S.push(Gb),S.push(Hb);var w=function(T,z,A,k){z===void 0&&(z=""),A===void 0&&(A=""),k===void 0&&(k="&"),l=k,s=z,o=new RegExp("\\".concat(s,"\\b"),"g");var $=T.replace(x5,""),B=Lb(A||z?"".concat(A," ").concat(z," { ").concat($," }"):$);h.namespace&&(B=xg(B,h.namespace));var q=[];return Xo(B,Yb(S.concat(qb(function(Y){return q.push(Y)})))),q};return w.hash=g.length?g.reduce(function(T,z){return z.name||Wl(15),Mi(T,z.name)},ug).toString():"",w}var v5=new Ko,Sf=y5(),yg=ke.createContext({shouldForwardProp:void 0,styleSheet:v5,stylis:Sf});yg.Consumer;ke.createContext(void 0);function wf(){return v.useContext(yg)}var vg=(function(){function a(l,s){var o=this;this.inject=function(f,d){d===void 0&&(d=Sf);var h=o.name+d.hash;f.hasNameForId(o.id,h)||f.insertRules(o.id,h,d(o.rules,h,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=s,Yf(this,function(){throw Wl(12,String(o.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=Sf),this.name+l.hash},a})(),b5=function(a){return a>="A"&&a<="Z"};function R1(a){for(var l="",s=0;s<a.length;s++){var o=a[s];if(s===1&&o==="-"&&a[0]==="-")return a;b5(o)?l+="-"+o.toLowerCase():l+=o}return l.startsWith("ms-")?"-"+l:l}var bg=function(a){return a==null||a===!1||a===""},Sg=function(a){var l,s,o=[];for(var f in a){var d=a[f];a.hasOwnProperty(f)&&!bg(d)&&(Array.isArray(d)&&d.isCss||$i(d)?o.push("".concat(R1(f),":"),d,";"):Xl(d)?o.push.apply(o,Oi(Oi(["".concat(f," {")],Sg(d),!1),["}"],!1)):o.push("".concat(R1(f),": ").concat((l=f,(s=d)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||l in Xb||l.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return o};function ma(a,l,s,o){if(bg(a))return[];if(Hf(a))return[".".concat(a.styledComponentId)];if($i(a)){if(!$i(d=a)||d.prototype&&d.prototype.isReactComponent||!l)return[a];var f=a(l);return ma(f,l,s,o)}var d;return a instanceof vg?s?(a.inject(s,o),[a.getName(o)]):[a]:Xl(a)?Sg(a):Array.isArray(a)?Array.prototype.concat.apply(ss,a.map(function(h){return ma(h,l,s,o)})):[a.toString()]}function wg(a){for(var l=0;l<a.length;l+=1){var s=a[l];if($i(s)&&!Hf(s))return!1}return!0}var S5=fg(os),w5=(function(){function a(l,s,o){this.rules=l,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&wg(l),this.componentId=s,this.baseHash=Mi(S5,s),this.baseStyle=o,Ko.registerId(s)}return a.prototype.generateAndInjectStyles=function(l,s,o){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,s,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))f=$a(f,this.staticRulesId);else{var d=Qo(ma(this.rules,l,s,o)),h=vf(Mi(this.baseHash,d)>>>0);if(!s.hasNameForId(this.componentId,h)){var y=o(d,".".concat(h),void 0,this.componentId);s.insertRules(this.componentId,h,y)}f=$a(f,h),this.staticRulesId=h}else{for(var g=Mi(this.baseHash,o.hash),m="",S=0;S<this.rules.length;S++){var w=this.rules[S];if(typeof w=="string")m+=w;else if(w){var T=Qo(ma(w,l,s,o));g=Mi(g,T+S),m+=T}}if(m){var z=vf(g>>>0);s.hasNameForId(this.componentId,z)||s.insertRules(this.componentId,z,o(m,".".concat(z),void 0,this.componentId)),f=$a(f,z)}}return f},a})(),qf=ke.createContext(void 0);qf.Consumer;var Yu={};function j5(a,l,s){var o=Hf(a),f=a,d=!Hu(a),h=l.attrs,y=h===void 0?ss:h,g=l.componentId,m=g===void 0?(function(Z,J){var L=typeof Z!="string"?"sc":S1(Z);Yu[L]=(Yu[L]||0)+1;var V="".concat(L,"-").concat(Uf(os+L+Yu[L]));return J?"".concat(J,"-").concat(V):V})(l.displayName,l.parentComponentId):g,S=l.displayName,w=S===void 0?(function(Z){return Hu(Z)?"styled.".concat(Z):"Styled(".concat(Fb(Z),")")})(a):S,T=l.displayName&&l.componentId?"".concat(S1(l.displayName),"-").concat(l.componentId):l.componentId||m,z=o&&f.attrs?f.attrs.concat(y).filter(Boolean):y,A=l.shouldForwardProp;if(o&&f.shouldForwardProp){var k=f.shouldForwardProp;if(l.shouldForwardProp){var $=l.shouldForwardProp;A=function(Z,J){return k(Z,J)&&$(Z,J)}}else A=k}var B=new w5(s,T,o?f.componentStyle:void 0);function q(Z,J){return(function(L,V,Q){var W=L.attrs,ce=L.componentStyle,de=L.defaultProps,Ye=L.foldedComponentIds,ee=L.styledComponentId,ae=L.target,xe=ke.useContext(qf),_=wf(),K=L.shouldForwardProp||_.shouldForwardProp,P=sg(V,xe,de)||Di,te=(function(re,ue,ye){for(var Ge,Ce=ft(ft({},ue),{className:void 0,theme:ye}),Et=0;Et<re.length;Et+=1){var Jt=$i(Ge=re[Et])?Ge(Ce):Ge;for(var dt in Jt)Ce[dt]=dt==="className"?$a(Ce[dt],Jt[dt]):dt==="style"?ft(ft({},Ce[dt]),Jt[dt]):Jt[dt]}return ue.className&&(Ce.className=$a(Ce.className,ue.className)),Ce})(W,V,P),me=te.as||ae,E={};for(var H in te)te[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&te.theme===P||(H==="forwardedAs"?E.as=te.forwardedAs:K&&!K(H,me)||(E[H]=te[H]));var F=(function(re,ue){var ye=wf(),Ge=re.generateAndInjectStyles(ue,ye.styleSheet,ye.stylis);return Ge})(ce,te),I=$a(Ye,ee);return F&&(I+=" "+F),te.className&&(I+=" "+te.className),E[Hu(me)&&!cg.has(me)?"class":"className"]=I,Q&&(E.ref=Q),v.createElement(me,E)})(Y,Z,J)}q.displayName=w;var Y=ke.forwardRef(q);return Y.attrs=z,Y.componentStyle=B,Y.displayName=w,Y.shouldForwardProp=A,Y.foldedComponentIds=o?$a(f.foldedComponentIds,f.styledComponentId):"",Y.styledComponentId=T,Y.target=o?f.target:a,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=o?(function(J){for(var L=[],V=1;V<arguments.length;V++)L[V-1]=arguments[V];for(var Q=0,W=L;Q<W.length;Q++)bf(J,W[Q],!0);return J})({},f.defaultProps,Z):Z}}),Yf(Y,function(){return".".concat(Y.styledComponentId)}),d&&mg(Y,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function A1(a,l){for(var s=[a[0]],o=0,f=l.length;o<f;o+=1)s.push(l[o],a[o+1]);return s}var M1=function(a){return Object.assign(a,{isCss:!0})};function $n(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];if($i(a)||Xl(a))return M1(ma(A1(ss,Oi([a],l,!0))));var o=a;return l.length===0&&o.length===1&&typeof o[0]=="string"?ma(o):M1(ma(A1(o,l)))}function jf(a,l,s){if(s===void 0&&(s=Di),!l)throw Wl(1,l);var o=function(f){for(var d=[],h=1;h<arguments.length;h++)d[h-1]=arguments[h];return a(l,s,$n.apply(void 0,Oi([f],d,!1)))};return o.attrs=function(f){return jf(a,l,ft(ft({},s),{attrs:Array.prototype.concat(s.attrs,f).filter(Boolean)}))},o.withConfig=function(f){return jf(a,l,ft(ft({},s),f))},o}var jg=function(a){return jf(j5,a)},b=jg;cg.forEach(function(a){b[a]=jg(a)});var E5=(function(){function a(l,s){this.rules=l,this.componentId=s,this.isStatic=wg(l),Ko.registerId(this.componentId+1)}return a.prototype.createStyles=function(l,s,o,f){var d=f(Qo(ma(this.rules,s,o,f)),""),h=this.componentId+l;o.insertRules(h,h,d)},a.prototype.removeStyles=function(l,s){s.clearRules(this.componentId+l)},a.prototype.renderStyles=function(l,s,o,f){l>2&&Ko.registerId(this.componentId+l),this.removeStyles(l,o),this.createStyles(l,s,o,f)},a})();function Eg(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];var o=$n.apply(void 0,Oi([a],l,!1)),f="sc-global-".concat(Uf(JSON.stringify(o))),d=new E5(o,f),h=function(g){var m=wf(),S=ke.useContext(qf),w=ke.useRef(m.styleSheet.allocateGSInstance(f)).current;return m.styleSheet.server&&y(w,g,m.styleSheet,S,m.stylis),ke.useLayoutEffect(function(){if(!m.styleSheet.server)return y(w,g,m.styleSheet,S,m.stylis),function(){return d.removeStyles(w,m.styleSheet)}},[w,g,m.styleSheet,S,m.stylis]),null};function y(g,m,S,w,T){if(d.isStatic)d.renderStyles(g,Qb,S,T);else{var z=ft(ft({},m),{theme:sg(m,w,h.defaultProps)});d.renderStyles(g,z,S,T)}}return ke.memo(h)}function $t(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];var o=Qo($n.apply(void 0,Oi([a],l,!1))),f=Uf(o);return new vg(f,o)}var Cg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},O1=ke.createContext&&ke.createContext(Cg),C5=["attr","size","title"];function T5(a,l){if(a==null)return{};var s=z5(a,l),o,f;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(f=0;f<d.length;f++)o=d[f],!(l.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(s[o]=a[o])}return s}function z5(a,l){if(a==null)return{};var s={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}function Jo(){return Jo=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=s[o])}return a},Jo.apply(this,arguments)}function k1(a,l){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);l&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(a,f).enumerable})),s.push.apply(s,o)}return s}function Fo(a){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?k1(Object(s),!0).forEach(function(o){R5(a,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):k1(Object(s)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(s,o))})}return a}function R5(a,l,s){return l=A5(l),l in a?Object.defineProperty(a,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[l]=s,a}function A5(a){var l=M5(a,"string");return typeof l=="symbol"?l:l+""}function M5(a,l){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var o=s.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function Tg(a){return a&&a.map((l,s)=>ke.createElement(l.tag,Fo({key:s},l.attr),Tg(l.child)))}function Ee(a){return l=>ke.createElement(O5,Jo({attr:Fo({},a.attr)},l),Tg(a.child))}function O5(a){var l=s=>{var{attr:o,size:f,title:d}=a,h=T5(a,C5),y=f||s.size||"1em",g;return s.className&&(g=s.className),a.className&&(g=(g?g+" ":"")+a.className),ke.createElement("svg",Jo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,o,h,{className:g,style:Fo(Fo({color:a.color||s.color},s.style),a.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),d&&ke.createElement("title",null,d),a.children)};return O1!==void 0?ke.createElement(O1.Consumer,null,s=>l(s)):l(Cg)}function Gf(a){return Ee({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function Xf(a){return Ee({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function Vf(a){return Ee({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Qf(a){return Ee({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function Zf(a){return Ee({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function zg(a){return Ee({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function k5(a){return Ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function Rg(a){return Ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function N5(a){return Ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(a)}function _5(a){return Ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Ag(a){return Ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function D5(a){return Ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function Kf(a){return Ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function $5(a){return Ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function Mg(a){return Ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function B5(a){return Ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(a)}function N1(a){return Ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const L5="/instalearn/assets/Slide11-BQ1quwNm.mp4",U5="/instalearn/assets/test-BrOnAr5c.png",H5="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",Y5="/instalearn/assets/Slide1-CH0r16yo.png",q5="/instalearn/assets/Slide3-B6C07YuO.png",G5="/instalearn/assets/Slide5-BsOulZPi.png",X5="/instalearn/assets/Slide6-8dQDHdn3.png",V5="/instalearn/assets/Slide1-CH0r16yo.png",Q5="/instalearn/assets/Slide10-BP0-oJ-v.gif",Z5="/instalearn/assets/Slide11-BQ1quwNm.mp4",So={},_1={videoClip1:L5},K5={test:U5},Il={teacherProfilePic:H5},An={Slide1:Y5,Slide3:q5,Slide5:G5,Slide6:X5,Slide7:V5,Slide10:Q5,Slide11:Z5};function J5(a){return Ee({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M294 240s-21.51 16-38 16-38-16-38-16"},child:[]}]})(a)}const F5=b.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,W5=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  @media (max-width: 520px) {
    padding: 10px 12px;
  }
`,I5=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,P5=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,e4=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,t4=b.span`
  font-weight: 600;
  color: #0f172a;
  font-size: 14px;
  @media (max-width: 520px) { font-size: 13px; }
`,n4=b.span`
  font-size: 12px;
  color: #64748b;
`,a4=b.button`
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
`,i4=b.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,l4=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,r4=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 8px 12px;
`,o4=b.div`
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
`,s4=b.div`
  padding: 12px;
  display: grid;
  gap: 14px;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  @media (min-width: 520px) {
    padding: 14px 16px;
    gap: 16px;
  }
`,D1=b.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
  @media (min-width: 520px) { padding: 14px; }
`,$1=b.h3`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
`,c4=b.ul`
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
`,B1=b.div`
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
`,L1=b.button`
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`,u4=b.div`
  display: grid;
  gap: 10px;
`,f4=b.p`
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`,d4=b.div`
  display: grid;
  gap: 8px;
`,p4=b.button.withConfig({shouldForwardProp:a=>a!=="$state"})`
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
`,h4=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Og=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,U1=b.button`
  background: #0f172a;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
`,kg=b.button`
  background: transparent;
  border: 1px solid rgba(15,23,42,.14);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
`;async function m4(a){const s=await(await fetch(a,{mode:"cors"})).blob(),o=s.type||"image/jpeg",f=await s.arrayBuffer(),d=new Uint8Array(f);let h="";for(let g=0;g<d.byteLength;g++)h+=String.fromCharCode(d[g]);return{base64:btoa(h),mime:o}}function g4({title:a,description:l,username:s}){return`
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
`.trim()}async function x4(a){const{title:l,description:s,username:o,imageUrl:f}=a,d="AIzaSyDYGHcNYuuk43rrYSBVBIQGegzOGVtjGrw",{base64:h,mime:y}=await m4(f),m={contents:[{parts:[{text:g4({title:l,description:s,username:o})},{inline_data:{mime_type:y,data:h}}]}],generationConfig:{temperature:.6,topK:32,topP:.9,maxOutputTokens:1200,response_mime_type:"application/json"}},S="https://generativelanguage.googleapis.com/v1beta",w=["gemini-2.5-flash","gemini-2.0-flash"];let T;for(const z of w)try{const A=`${S}/models/${z}:generateContent?key=${encodeURIComponent(d)}`,k=await fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!k.ok)throw new Error(`Gemini error (${k.status}): ${await k.text()}`);const B=(await k.json())?.candidates?.[0]?.content?.parts?.[0]?.text;if(!B)throw new Error("Empty response from Gemini");let q;try{q=JSON.parse(B)}catch{const L=String(B).replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/```$/i,"").trim();q=JSON.parse(L)}const Y=Array.isArray(q.bullets)?q.bullets.slice(0,5):[],Z=Array.isArray(q.mcqs)?q.mcqs.slice(0,5):[];if(!Y.length||!Z.length)throw new Error("Malformed AI content");const J=Z.map(L=>({question:String(L.question||"").slice(0,140),options:Array.isArray(L.options)&&L.options.length?L.options.slice(0,5):["Not present"],correctIndex:Number.isInteger(L.correctIndex)?L.correctIndex:0,explanation:L.explanation?String(L.explanation).slice(0,140):void 0}));return{bullets:Y,mcqs:J}}catch(A){T=A}throw T||new Error("Gemini request failed")}function y4({avatarSrc:a=Il.teacherProfilePic,title:l,description:s,imgSrc:o,username:f,postUrl:d,onLikeChange:h,onBookmarkChange:y,onShare:g}){const[m,S]=v.useState(!1),[w,T]=v.useState(!1),[z,A]=v.useState(!1),[k,$]=v.useState(!1),[B,q]=v.useState(null),[Y,Z]=v.useState(null),[J,L]=v.useState(0);v.useEffect(()=>{const te=Y?.mcqs?.length||0;te!==0&&L(me=>Math.max(0,Math.min(me,te-1)))},[Y?.mcqs?.length]);const V=m?"Unlike":"Like",Q=w?"Remove bookmark":"Bookmark",W=()=>{const te=!m;S(te),h&&h(te)},ce=()=>{const te=!w;T(te),y&&y(te)},de=v.useMemo(()=>({title:l,text:`${f} on Infographics — ${l}`,url:d}),[l,f,d]),Ye=async()=>{try{navigator.share?await navigator.share(de):navigator.clipboard&&de.url&&(await navigator.clipboard.writeText(de.url),alert("Link copied to clipboard")),g&&g(de)}catch(te){console.error("Share failed:",te)}},ee=async()=>{$(!0),q(null);try{const te=await x4({title:l,description:s,username:f,imageUrl:o});Z(te),L(0)}catch(te){console.error(te),q(te?.message||"Failed to generate content")}finally{$(!1)}},ae=()=>{const te=!z;A(te),te&&!Y&&!k&&ee()},xe=Y?.mcqs?.length||0,_=xe?Y.mcqs[J]:null,K=J===xe-1,P=()=>L(te=>Math.min(te+1,xe-1));return u.jsxs(F5,{role:"article","aria-label":`${l} instagram-style post`,children:[u.jsxs(W5,{children:[u.jsxs(I5,{children:[u.jsx(P5,{src:a,alt:"avatar"}),u.jsxs(e4,{children:[u.jsx(t4,{children:l}),u.jsx(n4,{children:s})]})]}),u.jsx(a4,{"aria-label":z?"Close learn mode":"Open learn mode",title:z?"Close learn mode":"Learn more & quiz",onClick:ae,children:u.jsx(J5,{size:18})})]}),z?u.jsxs(s4,{"aria-live":"polite",children:[u.jsxs(D1,{children:[u.jsx($1,{children:"Know more (5 quick points)"}),k?u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(on,{}),u.jsx(on,{}),u.jsx(on,{}),u.jsx(on,{}),u.jsx(on,{})]}):B?u.jsxs(B1,{children:[u.jsx("span",{style:{flex:1,minWidth:0},children:B}),u.jsx(L1,{onClick:ee,"aria-label":"Retry generating content",children:"Retry"})]}):u.jsx(c4,{children:Y?.bullets?.map((te,me)=>u.jsx("li",{children:te},me))})]}),u.jsxs(D1,{children:[u.jsxs(Og,{children:[u.jsx($1,{style:{margin:0},children:"Test your knowledge"}),xe?u.jsxs(qo,{children:[J+1," / ",xe]}):null]}),k?u.jsxs("div",{style:{display:"grid",gap:10},children:[u.jsx(on,{h:16}),u.jsx(on,{h:40}),u.jsx(on,{h:40}),u.jsx(on,{h:40}),u.jsx(on,{h:40})]}):B?u.jsxs(B1,{children:[u.jsx("span",{style:{flex:1,minWidth:0},children:"Can’t load questions."}),u.jsx(L1,{onClick:ee,children:"Retry"})]}):_?u.jsx(v4,{mcq:_,index:J+1,total:xe,isLast:K,onNext:K?void 0:P,onFinish:K?()=>A(!1):void 0},J):null,!k&&!B&&_&&!K?u.jsx("div",{style:{marginTop:6},children:u.jsx(qo,{children:"Tip: You can change your choice before tapping Next."})}):null]}),u.jsxs(h4,{children:[u.jsx(qo,{children:"AI stays within the infographic; short, clear answers only."}),u.jsx(kg,{onClick:()=>A(!1),"aria-label":"Back to image",title:"Back to image",children:"Back to image"})]})]}):u.jsx(i4,{children:u.jsx(l4,{src:o,alt:l})}),u.jsxs(r4,{children:[u.jsxs(o4,{children:[u.jsx(wo,{onClick:W,"aria-label":V,title:V,children:m?u.jsx(Gf,{size:22}):u.jsx(Xf,{size:22})}),u.jsx(wo,{"aria-label":"Comment",title:"Comment",children:u.jsx(Zf,{size:20})}),u.jsx(wo,{onClick:Ye,"aria-label":"Share",title:"Share",children:u.jsx(Kf,{size:20})})]}),u.jsx(wo,{onClick:ce,"aria-label":Q,title:Q,children:w?u.jsx(Vf,{size:20}):u.jsx(Qf,{size:20})})]})]})}function v4({mcq:a,index:l,total:s,isLast:o,onNext:f,onFinish:d}){const[h,y]=v.useState(null),g=m=>h===null?"idle":m===a.correctIndex?"correct":m===h&&h!==a.correctIndex?"wrong":"idle";return u.jsxs(u4,{"aria-label":`Question ${l}`,children:[u.jsxs(f4,{children:[l,". ",a.question]}),u.jsx(d4,{children:a.options.map((m,S)=>u.jsx(p4,{onClick:()=>y(S),$state:g(S),"aria-pressed":h===S,"aria-label":`Option ${S+1}`,children:m},S))}),h!==null&&u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsxs(qo,{children:[h===a.correctIndex?"✅ Correct.":"❌ Not quite.",a.explanation?` — ${a.explanation}`:""]}),o?u.jsxs(Og,{children:[u.jsx(U1,{onClick:d,"aria-label":"Finish quiz",children:"Finish"}),u.jsx(kg,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to top"})]}):u.jsxs(U1,{onClick:f,"aria-label":"Next question",disabled:h===null,children:["Next question (",l+1,"/",s,")"]})]})]})}const b4=b.div``,S4=b.div`
  display: flex;
  overflow-x: auto;
  padding: 24px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,w4=b.button`
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
`,Ng=`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  user-drag: none;
  -webkit-user-drag: none;
  pointer-events: none;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
`,j4=b.img`${Ng}`,E4=b.video`${Ng}`,C4=b.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.96);
  backdrop-filter: blur(20px);
  display: grid;
  place-items: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`,T4=b.div`
  position: relative;
  width: 96vw;
  max-width: 1400px;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto auto;
  gap: 10px;
  overflow: hidden;
`,z4=b.div`
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
`,R4=b.div`
  flex: 0 0 100%;
  height: 100%;
  display: grid;
  place-items: center;
  scroll-snap-align: center;
  background: transparent;
`,_g=`
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
`,A4=b.img`${_g}`,M4=b.video`${_g}`,O4=b.button`
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
`,k4=b.div`
  width: 100%;
  padding: 0 16px 8px;
  display: grid;
  align-items: center;
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,N4=b.input.attrs({type:"range"})`
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
`,_4=b.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 0 16px 16px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,Dg=b.button`
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
`,D4=b.img`
  width: 80px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  transition: opacity 0.2s ease;

  ${Dg}:hover & { opacity: 0.8; }
`,$4=b.video`
  width: 80px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
`,H1=(a,l,s)=>Math.max(l,Math.min(s,a));function B4(a){const l=(a.type||"img").toLowerCase(),s=a.src||a.imgSrc||a.videoClipSrc,o=a.poster||a.thumb||a.thumbnail,f=a.name||a.title||"";return{type:l,src:s,poster:o,name:f,id:a.id}}class L4 extends ke.Component{state={hasError:!1};static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(l,s){console.error("Carousel error:",l,s)}render(){return this.state.hasError?u.jsx("div",{style:{color:"#fff",padding:16,textAlign:"center"},children:"Something went wrong while rendering the carousel."}):this.props.children}}function U4({items:a=[],className:l}){const s=v.useRef(null),o=v.useRef(!1),f=v.useRef(0),d=v.useRef(0),h=v.useRef(0),[y,g]=v.useState(!1),[m,S]=v.useState(0),[w,T]=v.useState(!0),z=v.useRef(null),A=v.useMemo(()=>(a||[]).map(B4).filter(ee=>!!ee.src),[a]),k=v.useRef([]);k.current.length!==A.length&&(k.current=A.map((ee,ae)=>k.current[ae]??ke.createRef()));const $=typeof window<"u"&&typeof document<"u";v.useEffect(()=>{if(!$)return;const ee=document.body.style.overflow;return y&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=ee||""}},[y,$]),v.useEffect(()=>{y&&(k.current[m]?.current?.scrollIntoView({block:"nearest",inline:"center",behavior:"auto"}),T(!0))},[y,m]),v.useEffect(()=>{if(!y||!$)return;const ee=ae=>{ae.key==="Escape"&&g(!1),ae.key==="ArrowRight"&&Y(m+1),ae.key==="ArrowLeft"&&Y(m-1),ae.key.toLowerCase()==="h"&&T(xe=>!xe)};return window.addEventListener("keydown",ee),()=>window.removeEventListener("keydown",ee)},[y,m,$]);const B=v.useMemo(()=>{if(typeof window>"u"||!z.current)return 0;const ee=window.getComputedStyle(z.current),ae=parseFloat(ee.gap)||0;return(z.current.clientWidth||0)+ae},[y]),q=()=>{if(!z.current||B===0)return;const{scrollLeft:ee}=z.current,ae=Math.round(ee/B),xe=H1(ae,0,A.length-1);xe!==m&&S(xe)},Y=ee=>{const ae=H1(ee,0,Math.max(0,A.length-1));if(S(ae),!z.current)return;const xe=B*ae;z.current.scrollTo({left:xe,behavior:"smooth"})},Z=ee=>{const ae=Number(ee.target.value);Y(ae)},L={"--filled":`${A.length>1?m/(A.length-1)*100:0}%`},V=ee=>{if(ee.pointerType==="mouse"&&s.current){o.current=!0,h.current=0,f.current=ee.clientX,d.current=s.current.scrollLeft||0;try{s.current.setPointerCapture?.(ee.pointerId)}catch{console.log("error")}}},Q=ee=>{if(ee.pointerType!=="mouse"||!o.current||!s.current)return;const ae=ee.clientX-f.current;h.current=Math.max(h.current,Math.abs(ae)),s.current.scrollLeft=d.current-ae},W=()=>{o.current=!1},ce=6,de=ee=>{h.current>ce||(S(ee),T(!0),g(!0))},Ye=ee=>{const ae=ee.target,xe=ae.tagName&&ae.tagName.toLowerCase(),_=xe==="img"||xe==="video",K=ae.closest?.('[data-interactive="true"]');_||K||T(P=>!P)};return v.useEffect(()=>{if(!y)return;(z.current?.querySelectorAll("video[data-slide-video='true']")||[]).forEach((ae,xe)=>{xe===m?(ae.muted=!0,ae.play().catch(()=>{})):(ae.pause(),ae.currentTime=0)})},[y,m]),!A||A.length===0?null:u.jsxs(b4,{className:l,children:[u.jsx(S4,{ref:s,onPointerDown:V,onPointerMove:Q,onPointerUp:W,onPointerLeave:W,children:A.map((ee,ae)=>u.jsx(w4,{onClick:()=>de(ae),children:ee.type==="video"?u.jsx(E4,{src:ee.src,poster:ee.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":ee.name||`Video ${ae+1}`}):u.jsx(j4,{src:ee.src,alt:ee.name??`Item ${ae+1}`,draggable:!1})},ee.id??ae))}),y&&u.jsx(C4,{role:"dialog","aria-modal":"true","aria-label":"Media lightbox",children:u.jsxs(T4,{onClick:Ye,children:[u.jsxs(Y4,{$show:w,children:[m+1," / ",A.length]}),u.jsx(O4,{$show:w,onClick:()=>g(!1),"aria-label":"Close","data-interactive":"true",children:u.jsx(B5,{})}),u.jsx(z4,{ref:z,onScroll:q,children:A.map((ee,ae)=>u.jsx(R4,{ref:k.current[ae],children:ee.type==="video"?u.jsx(M4,{"data-slide-video":"true",src:ee.src,poster:ee.poster,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto","aria-label":ee.name??`Video ${ae+1}`}):u.jsx(A4,{src:ee.src,alt:ee.name??`Image ${ae+1}`})},ee.id??ae))}),u.jsx(k4,{$show:w,"data-interactive":"true",children:u.jsx(N4,{min:0,max:Math.max(0,A.length-1),step:1,value:m,onChange:Z,style:L,"aria-label":"Media scrubber"})}),u.jsx(_4,{$show:w,"aria-label":"Thumbnails","data-interactive":"true",children:A.map((ee,ae)=>u.jsx(Dg,{$active:ae===m,onClick:()=>Y(ae),"aria-label":`Go to item ${ae+1}`,children:ee.type==="video"?u.jsx($4,{src:ee.src,poster:ee.poster,muted:!0,loop:!0,playsInline:!0,preload:"metadata"}):u.jsx(D4,{src:ee.src,alt:ee.name??`Thumbnail ${ae+1}`})},ee.id??ae))})]})})]})}function H4(a){return u.jsx(L4,{children:u.jsx(U4,{...a})})}const Y4=b.div`
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
`,q4=Eg`
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
`,G4=b.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,X4=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,V4=b.div`
  display: flex;
  gap: 12px;
`,Q4=b.button`
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
`,K4=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,J4=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,F4=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,W4=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,I4=b.span`
  font-weight: 600;
  color: #0f172a;
`,P4=b.div`
  padding: 0 14px 8px 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,e3=b.span`
  font-size: 12px;
  color: #64748b;
`,t3=b.button`
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
`,n3=(a=1)=>({display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",WebkitLineClamp:a});function a3({expanded:a=!1,lines:l=1,children:s,innerRef:o}){const f={fontSize:"13px",color:"#334155",margin:0,whiteSpace:"pre-wrap",...a?{}:n3(l)};return u.jsx("p",{style:f,ref:o,children:s})}function i3({avatarSrc:a=Il.teacherProfilePic,data:l,onLikeChange:s,onBookmarkChange:o,onShare:f}){const{title:d="Carousel Title",description:h="",detailedDescription:y="",carouselMetaData:g=[]}=l||{},[m,S]=v.useState(!1),[w,T]=v.useState(!1),[z,A]=v.useState(!1),[k,$]=v.useState(!1),B=v.useRef(null);v.useEffect(()=>{const Q=B.current;if(Q){if(z){$(!0);return}requestAnimationFrame(()=>{if(!Q)return;const W=Q.scrollHeight-Q.clientHeight>1;$(W)})}},[y,z]);const q=m?"Unlike post":"Like post",Y=w?"Remove bookmark":"Bookmark",Z=()=>{const Q=!m;S(Q),s&&s(Q)},J=()=>{const Q=!w;T(Q),o&&o(Q)},L=v.useMemo(()=>({title:d,text:`${d}`,url:typeof window<"u"?window.location.href:""}),[d]),V=async()=>{try{navigator.share?await navigator.share(L):navigator.clipboard&&(await navigator.clipboard.writeText(L.url),alert("Link copied to clipboard")),f&&f(L)}catch(Q){console.error("Share failed:",Q)}};return!g||g.length===0?null:u.jsxs(G4,{role:"article","aria-label":`${d} – Instagram multi-image post`,children:[u.jsxs(Z4,{children:[u.jsxs(K4,{children:[u.jsxs(J4,{children:[u.jsx(F4,{src:a,alt:"avatar"}),u.jsxs(W4,{children:[u.jsx(I4,{children:d}),u.jsx(e3,{children:h})]})]}),u.jsx(Q4,{"aria-label":"Post menu",title:"More",children:u.jsx(zg,{size:18})})]}),y?u.jsxs(P4,{children:[u.jsx(a3,{expanded:z,lines:1,innerRef:B,children:y}),(k||z)&&u.jsx(t3,{type:"button","aria-expanded":z,onClick:()=>A(Q=>!Q),children:z?u.jsx(N5,{size:14}):"more"})]}):null]}),u.jsx(q4,{}),u.jsx(H4,{items:g,duration:3e3}),u.jsxs(X4,{children:[u.jsxs(V4,{children:[u.jsx(jo,{onClick:Z,"aria-label":q,title:q,children:m?u.jsx(Gf,{size:22}):u.jsx(Xf,{size:22})}),u.jsx(jo,{"aria-label":"Comment",title:"Comment",children:u.jsx(Zf,{size:20})}),u.jsx(jo,{onClick:V,"aria-label":"Share",title:"Share",children:u.jsx(Kf,{size:20})})]}),u.jsx(jo,{onClick:J,"aria-label":Y,title:Y,children:w?u.jsx(Vf,{size:20}):u.jsx(Qf,{size:20})})]})]})}const l3=b.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,r3=b.div`
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
`,o3=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,s3=b.div`
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
`,c3=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,u3=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,f3=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,d3=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,p3=b.span`
  font-weight: 600;
  color: #0f172a;
`,h3=b.span`
  font-size: 12px;
  color: #64748b;
`,m3=b.button`
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
`;function g3({avatarSrc:a=Il.teacherProfilePic,data:l,likedDefault:s=!1,savedDefault:o=!1,onLikeChange:f,onBookmarkChange:d,onShare:h}){const y=l?.videoClipSrc||l?.vedioClipSrc,{title:g,description:m,poster:S}=l||{},[w,T]=v.useState(s),[z,A]=v.useState(o),k=w?"Unlike post":"Like post",$=z?"Remove bookmark":"Bookmark",B=v.useRef(null),q=()=>{const J=!w;T(J),f&&f(J)},Y=()=>{const J=!z;A(J),d&&d(J)},Z=async()=>{const J={title:g||"Check this video",text:m||"",url:typeof window<"u"&&window.location?.href||(l?.url??"")};try{typeof navigator<"u"&&navigator.share?await navigator.share(J):typeof navigator<"u"&&navigator.clipboard&&J.url&&(await navigator.clipboard.writeText(J.url),alert("Link copied to clipboard")),h&&h(J)}catch(L){console.log(L)}};return v.useEffect(()=>{const J=B.current;if(!J)return;(async()=>{try{await J.play()}catch{}})()},[y]),y?u.jsxs(l3,{"aria-label":"Video post",children:[u.jsxs(c3,{children:[u.jsxs(u3,{children:[u.jsx(f3,{src:a,alt:"Author avatar"}),u.jsxs(d3,{children:[u.jsx(p3,{children:g}),u.jsx(h3,{children:m})]})]}),u.jsx(m3,{"aria-label":"Post menu",title:"More options",children:u.jsx(zg,{size:18})})]}),u.jsx(r3,{children:u.jsx("video",{ref:B,src:y,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:S,"aria-label":g||"Video clip"})}),u.jsxs(o3,{children:[u.jsxs(s3,{children:[u.jsx(Eo,{onClick:q,"aria-label":k,title:k,children:w?u.jsx(Gf,{size:22}):u.jsx(Xf,{size:22})}),u.jsx(Eo,{"aria-label":"Comment",title:"Comment",children:u.jsx(Zf,{size:20})}),u.jsx(Eo,{onClick:Z,"aria-label":"Share",title:"Share",children:u.jsx(Kf,{size:20})})]}),u.jsx(Eo,{onClick:Y,"aria-label":$,title:$,children:z?u.jsx(Vf,{size:20}):u.jsx(Qf,{size:20})})]})]}):null}const x3=[{id:1,name:"Sense of Collective Identity",img:So.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[K5.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:So.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:So.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:So.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function y3(a){return Ee({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function v3({isOpen:a,activeIndex:l,setActiveIndex:s,total:o,onClose:f,duration:d=3e3}){const h=v.useRef(Date.now()),y=v.useRef(),g=v.useRef(0),m=v.useCallback(()=>{const w=Date.now()-h.current,T=Math.min(1,w/d);g.current=T,T>=1?l<o-1?s(z=>z+1):f():y.current=requestAnimationFrame(m)},[l,o,d,f,s]);return v.useEffect(()=>{if(a)return h.current=Date.now(),y.current=requestAnimationFrame(m),()=>cancelAnimationFrame(y.current)},[a,l,m]),{resetTimer:v.useCallback(()=>{h.current=Date.now()},[]),getProgressValue:()=>g.current}}const b3=b.div`
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
`,S3=b.div`
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
`,w3=b.div`
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
`,j3=b.div`
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
`,E3=b.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 2.5px;
  }
`,C3=b.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,T3=b.div`
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
`,z3=b.img`
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
`,M3=b.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`,O3=b.button`
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
`,k3=b.img`
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
`,Y1=b.div`
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
`;function N3({currentItem:a,isOpen:l,slideIndex:s,setSlideIndex:o,onClose:f,duration:d=3e3}){const h=a?.slides?.length||0,{resetTimer:y,getProgressValue:g}=v3({isOpen:l,activeIndex:s,setActiveIndex:o,total:h,onClose:f,duration:d}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,S]=v.useState(0);v.useEffect(()=>{if(!l||m)return;let A;const k=()=>{S($=>$+1),A=requestAnimationFrame(k)};return A=requestAnimationFrame(k),()=>cancelAnimationFrame(A)},[l,m]);const w=v.useCallback(()=>{a&&(s<h-1?(o(A=>A+1),y()):f())},[a,s,h,y,f,o]),T=v.useCallback(()=>{a&&(s>0?(o(A=>A-1),y()):f())},[a,s,y,f,o]);v.useEffect(()=>{const A=k=>{l&&(k.key==="Escape"&&f(),k.key==="ArrowRight"&&w(),k.key==="ArrowLeft"&&T())};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[l,w,T,f]),v.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]);const z=A=>A<s?1:A>s?0:g();return!l||!a?null:u.jsx(b3,{onClick:f,"aria-label":"Story overlay",children:u.jsx(S3,{onClick:A=>A.stopPropagation(),children:u.jsxs(w3,{children:[u.jsx(j3,{"aria-label":"Story progress",children:a.slides.map((A,k)=>u.jsx(E3,{"aria-label":`Progress track ${k+1}`,children:u.jsx(C3,{style:{width:`${z(k)*100}%`}})},k))}),u.jsxs(T3,{children:[u.jsx(z3,{src:a.img,alt:a.name}),u.jsxs(R3,{children:[u.jsx(A3,{children:a.name}),u.jsx(M3,{children:"Chapter highlight"})]}),u.jsx(O3,{"aria-label":"Close story",onClick:f,title:"Close",children:u.jsx(y3,{})})]}),a.slides.map((A,k)=>u.jsx(k3,{src:A,alt:`Slide ${k+1}`,$active:k===s,draggable:!1},k)),u.jsx(Y1,{$side:"left",onClick:T,"aria-label":"Previous slide"}),u.jsx(Y1,{$side:"right",onClick:w,"aria-label":"Next slide"})]})})})}const _3=b.div``,D3=b.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,$3=b.div`
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
`,B3=b.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,L3=b.div`
  padding: 2px;
  border-radius: 999px;
  ${a=>a.$hasNew?$n`
          background: linear-gradient(
            45deg,
            #777777 0%,
            #949494 25%,
            #4b4b4b 50%,
            #555555 75%,
            #585758 100%
          );
        `:$n`
          background: transparent;
        `};
`,U3=b.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,H3=b.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,Y3=b.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function q3({items:a,duration:l=3e3,onOpen:s,onClose:o,className:f}){const d=v.useRef(null),h=v.useRef(!1),y=v.useRef(0),g=v.useRef(0),[m,S]=v.useState(a||[]),[w,T]=v.useState(null),[z,A]=v.useState(0),k=m.find(L=>L.id===w)||null,$=!!w,B=L=>{A(0),T(L),S(V=>V.map(Q=>Q.id===L?{...Q,hasNew:!1}:Q)),s&&s(L)},q=()=>{T(null),o&&o()},Y=L=>{h.current=!0,y.current=L.clientX,g.current=d.current?.scrollLeft||0,L.target.setPointerCapture?.(L.pointerId)},Z=L=>{if(!h.current||!d.current)return;const V=L.clientX-y.current;d.current.scrollLeft=g.current-V},J=()=>{h.current=!1};return u.jsxs(_3,{className:f,children:[u.jsx(D3,{children:u.jsx($3,{ref:d,onPointerDown:Y,onPointerMove:Z,onPointerUp:J,onPointerLeave:J,"aria-label":"Stories scroller",children:m.map(L=>u.jsxs(B3,{onClick:()=>B(L.id),"aria-label":`Open story ${L.name}`,title:L.name,children:[u.jsx(L3,{$hasNew:L.hasNew,children:u.jsx(U3,{children:u.jsx(H3,{src:L.img,alt:L.name,draggable:!1})})}),u.jsx(Y3,{children:L.name})]},L.id))})}),u.jsx(N3,{currentItem:k,isOpen:$,slideIndex:z,setSlideIndex:A,onClose:q,duration:l})]})}const G3=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",detailedDescription:"Collective identity is the shared sense of belonging among individuals who associate themselves with a larger group or community. It is shaped by shared language, culture, traditions, and values that connect people to a collective purpose. Understanding this helps explain how societies maintain unity and continuity over time.",imgSrc:An.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",detailedDescription:"This section examines how collective identity emerges from shared experiences, beliefs, and cultural narratives. It plays a crucial role in fostering social solidarity, promoting cooperation, and helping individuals find meaning through group affiliation.",carouselMetaData:[{id:1,type:"img",src:An.Slide3},{id:2,type:"gif",src:An.Slide10},{id:3,type:"video",src:An.Slide11},{id:4,type:"img",src:An.Slide6}]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",detailedDescription:"Symbols such as national flags, anthems, and cultural rituals embody the essence of collective identity. These shared symbols reinforce emotional ties, transmit values, and sustain collective memory.",carouselMetaData:[{id:1,type:"img",src:An.Slide7},{id:2,type:"gif",src:An.Slide10},{id:3,type:"video",src:An.Slide11}]},{id:5,type:"videoClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",detailedDescription:"This video highlights real-world scenarios where collective identity has influenced social and political movements.",videoClipSrc:_1.videoClip1},{id:6,type:"infografic",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities.",imgSrc:An.Slide5},{id:7,type:"videoClip",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities.",videoClipSrc:_1.videoClip1}],X3=b.div`
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
`;function V3(){return v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),u.jsxs(u.Fragment,{children:[u.jsx(q3,{items:x3,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),u.jsx(X3,{children:u.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:G3.map(a=>u.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?u.jsx(y4,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?u.jsx(i3,{data:a}):a.type==="videoClip"?u.jsx(g3,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z3=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,s,o)=>o?o.toUpperCase():s.toLowerCase()),q1=a=>{const l=Z3(a);return l.charAt(0).toUpperCase()+l.slice(1)},$g=(...a)=>a.filter((l,s,o)=>!!l&&l.trim()!==""&&o.indexOf(l)===s).join(" ").trim(),K3=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=v.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:f="",children:d,iconNode:h,...y},g)=>v.createElement("svg",{ref:g,...J3,width:l,height:l,stroke:a,strokeWidth:o?Number(s)*24/Number(l):s,className:$g("lucide",f),...!d&&!K3(y)&&{"aria-hidden":"true"},...y},[...h.map(([m,S])=>v.createElement(m,S)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=(a,l)=>{const s=v.forwardRef(({className:o,...f},d)=>v.createElement(F3,{ref:d,iconNode:l,className:$g(`lucide-${Q3(q1(a))}`,`lucide-${a}`,o),...f}));return s.displayName=q1(a),s};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],I3=mt("arrow-right",W3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],e6=mt("atom",P3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Wo=mt("book-open",t6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],a6=mt("bookmark",n6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],l6=mt("calculator",i6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Bg=mt("check",r6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Jf=mt("chevron-left",o6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Lg=mt("chevron-right",s6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],u6=mt("code",c6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],G1=mt("flask-conical",f6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],X1=mt("globe",d6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],h6=mt("grid-3x3",p6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],g6=mt("languages",m6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Co=mt("lock",x6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qu=mt("x",y6),v6=b.div`
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
`,b6=b.div`
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
`,S6=b.img`
  height: 70%;
  width: 70%;
  object-fit: cover; /* ensures it fills the circle */
  border-radius: 50%; /* ensures circular clipping */
`,w6=b.div`
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
`,j6=b.h1`
  margin: 0 0 8px 0;
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 900;
  background: #374151;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,E6=b.p`
  margin: 6px 0 0 0;
  color: #6b7280;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
`,C6=b.button`
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
`;function T6({onStart:a}){return u.jsxs(v6,{children:[u.jsx(b6,{children:u.jsx(S6,{src:"https://th.bing.com/th/id/OIP.uSFDPMfkxTDmRZEJvOe_lAHaHa?w=108&h=108&c=1&bgcl=e66538&r=0&o=7&dpr=1.1&pid=ImgRC&rm=3",alt:"PW Logo"})}),u.jsxs(w6,{children:[u.jsx(j6,{children:"Welcome to Pi learn"}),u.jsx(E6,{children:"Your personalized learning journey starts here. Connect with expert teachers and unlock your full potential."})]}),u.jsxs(C6,{onClick:a,"aria-label":"Get started",children:["Get Started ",u.jsx(I3,{size:18})]})]})}const z6=b.div`
padding: 35px;
position: relative;
overflow: visible;
`,R6=b.button`
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
`,A6=b.div`
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
`,M6=b.h2`
  margin: 0 0 8px 0;
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 900;
  background: #374151;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,O6=b.p`
  margin: 0;
  color: #64748b;
  font-size: 15px;
  font-weight: 500;
`,k6=b.div`
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
`,N6=b.div`
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
`,_6=b.div`
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
`,D6=b.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,$6=b.li`
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
`,V1=b.li`
  height: ${a=>a.$height};
`;b.div`
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
  padding-top: 8px;
  animation: fadeUp 0.6s ease 0.4s both;
`;const B6=b.button`
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
`;b(B6)`
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
`;function L6({options:a,value:l,onChange:s,onNext:o}){const d=ke.useRef(null),h=g=>{const m=a.indexOf(g);if(m===-1)return;const S=d.current.clientHeight/2-48/2;d.current.scrollTo({top:S+m*48,behavior:"smooth"}),s(g),o&&o()},y={height:`calc(50% - ${48/2}px)`};return u.jsx(k6,{children:u.jsxs(N6,{ref:d,children:[u.jsx(_6,{}),u.jsxs(D6,{children:[u.jsx(V1,{$height:y.height}),a.map((g,m)=>u.jsx($6,{$height:48,$delay:`${m*.02}s`,$isSelected:g===l,onClick:()=>h(g),children:g},g)),u.jsx(V1,{$height:y.height})]})]})})}function U6({grades:a,selectedGrade:l,onSelect:s,onBack:o,onNext:f}){const d=Object.keys(a);return ke.useEffect(()=>{!l&&d.length>0&&s(d[0])},[l,d,s]),u.jsxs(z6,{children:[u.jsx(R6,{onClick:o,"aria-label":"Go back",children:u.jsx(Jf,{size:24})}),u.jsxs(A6,{children:[u.jsx(M6,{children:"Choose your Grade"}),u.jsx(O6,{children:"Swipe or tap to select a grade."})]}),u.jsx(L6,{options:d,value:l||d[0],onChange:s,onNext:f})]})}const H6={English:Wo,Mathematics:l6,Science:G1,Physics:e6,Chemistry:G1,Biology:X1,"Social Studies":X1,Hindi:g6,"Computer Science":u6},Y6=b.div`
  padding: 3px;
  position: relative;
  overflow: visible;
`,q6=b.button`
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
`,G6=b.div`
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
`,X6=b.h2`
  margin: 0 0 6px 0;
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 900;
  color: #1f2937;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto, sans-serif;
`,V6=b.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,Q6=b.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
`,Z6=b.button`
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
`,K6=b.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,J6=b.span`
  font-weight: 800;
  letter-spacing: -0.01em;
  font-size: 16px;
  color: #1f2937;
`,F6=b.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #f6f7f9;
  border: 1px solid #e5e7eb;
  display: grid;
  place-items: center;
  color: #374151;
`;function W6({grades:a,selectedGrade:l,selectedSubject:s,onSelectSubject:o,onBack:f,onNext:d}){const h=v.useMemo(()=>l&&a?.[l]?.subjects?Object.keys(a[l].subjects):[],[a,l]),y=g=>{o?.(g),d?.()};return u.jsxs(Y6,{children:[u.jsx(q6,{onClick:f,"aria-label":"Go back",children:u.jsx(Jf,{size:24})}),u.jsxs(G6,{children:[u.jsx(X6,{children:"Pick a Subject"}),u.jsx(V6,{children:l?`You chose ${l}. Now select a subject.`:"Choose a grade first."})]}),u.jsx(Q6,{children:h.map((g,m)=>{const S=H6[g]||Wo,w=s===g;return u.jsxs(Z6,{$isSelected:w,$delay:`${m*.03}s`,"aria-pressed":w,onClick:()=>y(g),children:[u.jsxs(K6,{children:[u.jsx(F6,{children:u.jsx(S,{size:18,"aria-hidden":"true"})}),u.jsx(J6,{children:g})]}),u.jsx(Lg,{size:18,"aria-hidden":"true"})]},g)})})]})}const I6=b.div`
  padding: 3px;
  position: relative;
  overflow: visible;
`,P6=b.button`
  position: absolute;
  top: -38px; /* Moves it outside the card's top padding */
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
`,e8=b.div`
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
`,t8=b.h2`
  margin: 0 0 6px 0;
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 900;
  color: #1f2937;
  font-family: Roboto, system-ui, -apple-system, Segoe UI, Inter, Roboto,
    sans-serif;
`,n8=b.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,a8=b.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  font-size: 15px;
  margin-bottom: 16px;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
    border-color: #4b5563;
    box-shadow: 0 0 0 3px rgba(75, 85, 99, 0.1);
  }
  &::placeholder {
    color: #9ca3af;
  }
`,i8=b.div`
  display: flex;
  gap: 12px;
  padding: 2px 0 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,l8=$t`
0% { opacity: 0; transform: translateY(10px) scale(0.98); }
100% { opacity: 1; transform: translateY(0) scale(1); }
`,r8=b.button`
  min-width: 156px;              /* tweak for your row density */
  max-width: 184px;
  aspect-ratio: 3 / 4;           /* ← vertical rectangle */
  border-radius: 18px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  scroll-snap-align: center;
  cursor: pointer;
  background: transparent;
  border: none;

  box-shadow: ${a=>a.$isSelected?"0 18px 48px rgba(99,102,241,.25), 0 8px 16px rgba(0,0,0,.10)":"0 10px 28px rgba(17,24,39,.12)"};

  transform: translateZ(0);
  transition: transform .18s ease, box-shadow .18s ease, outline-offset .18s ease;
  animation: ${l8} .35s ease both;
  animation-delay: ${a=>a.$delay||"0s"};

  /* selected ring */
  outline: ${a=>a.$isSelected?"3px solid rgba(99,102,241,.65)":"0 solid transparent"};
  outline-offset: 0;

  &:hover { transform: translateY(-4px) scale(1.012); }
  &:active { transform: translateY(-1px) scale(.99); }
  &:focus-visible { box-shadow: 0 0 0 4px rgba(99,102,241,.28); }
`,o8=b.div`
  position: absolute;
  inset: 0;
  background: #e5e7eb;
  display: grid;
  place-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;      /* full-bleed portrait */
    display: block;
    background: #f9fafb;
  }

  /* bottom gradient for legible text */
  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: 0;
    height: 42%;
    background: linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,0));
    opacity: ${a=>a.$isSelected?1:.9};
    transition: opacity .2s ease;
    pointer-events: none;
  }
`,s8=b.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 12px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.3));
  color: #fff;
  font-family: 'Poppins', 'Inter', 'Segoe UI', Roboto, sans-serif; /* clean & readable font */
  font-weight: 700;
  font-size: 15px;
  line-height: 1.25;
  letter-spacing: 1px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.65);
  display: -webkit-box;
  -webkit-line-clamp: 2;       /* supports long names neatly */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  pointer-events: none;
`,c8=b.div`
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
`,u8=b.button`
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
`,f8=b(u8)`
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
  width: 100%;
`;function d8({grades:a,selectedGrade:l,selectedSubject:s,selectedTeacher:o,onSelectTeacher:f,onBack:d,onConfirm:h}){const[y,g]=v.useState(""),S=(l&&s?a?.[l]?.subjects?.[s]??[]:[]).map(z=>typeof z=="string"?{name:z,img:void 0}:z),w=z=>`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(z)}&backgroundType=gradientLinear&fontFamily=Verdana&bold=true`,T=S.filter(z=>z.name?.toLowerCase().includes(y.toLowerCase()));return u.jsxs(I6,{children:[u.jsx(P6,{onClick:d,"aria-label":"Go back",children:u.jsx(Jf,{size:24})}),u.jsxs(e8,{children:[u.jsx(t8,{children:"Choose Your Teacher"}),u.jsx(n8,{children:s?`${s} • Swipe to explore`:"Pick a subject first."})]}),u.jsx(a8,{type:"text",placeholder:"🔍 Search teacher name...",value:y,onChange:z=>g(z.target.value),"aria-label":"Search teachers"}),u.jsx(i8,{children:T.map((z,A)=>{const k=o===z.name,$=z.img||w(z.name);return u.jsx(r8,{$isSelected:k,$delay:`${A*.05}s`,"aria-pressed":k,"aria-label":`Choose ${z.name}`,onClick:()=>f(z.name),children:u.jsxs(o8,{$isSelected:k,children:[u.jsx("img",{src:$,alt:z.name,loading:"lazy"}),k&&u.jsx(c8,{children:u.jsx(Bg,{size:14})}),u.jsx(s8,{children:z.name})]})},z.name)})}),u.jsxs(f8,{onClick:h,disabled:!o,children:["Continue ",u.jsx(Lg,{size:18})]})]})}const To={"Grade 9":{subjects:{English:[{name:"Priya Sharma",img:Il.teacherProfilePic},{name:"Vivek Sinha",img:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop"},{name:"Ritu Malhotra",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"}],Mathematics:[{name:"Rajesh Kumar",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Neha Gupta",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Science:[{name:"Anjali Mehta",img:"https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop"},{name:"Suresh Iyer",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Pooja Khanna",img:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=300&h=300&fit=crop"}],"Social Studies":[{name:"Siddharth Sir",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop"},{name:"Ananya Bose",img:"https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=300&h=300&fit=crop"},{name:"Harish Nanda",img:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop"}],Hindi:[{name:"Kavita Reddy",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Manoj Tiwari",img:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop"}],"Computer Science":[{name:"Arvind Nair",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Shruti Desai",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"}]}},"Grade 10":{subjects:{English:[{name:"Sunita Verma",img:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop"}],Mathematics:[{name:"Rohan Patel",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Priyanka Das",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Sanjay Kulkarni",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}],Science:[{name:"Anjali Mehta",img:"https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop"},{name:"Amit Chakraborty",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Meera Nambiar",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"}],"Social Studies":[{name:"Siddharth Sir",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop"},{name:"Nidhi Arora",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Parth Ghosh",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}],Hindi:[{name:"Kavita Reddy",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Ajay Sharma",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Shalini Tripathi",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"}],"Computer Science":[{name:"Arvind Nair",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Tanvi Kulkarni",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Rohit Menon",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}]}},"Grade 11":{subjects:{English:[{name:"Priya Sharma",img:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop"},{name:"Karan Malhotra",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Physics:[{name:"Nitin Agarwal",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Rachna Bansal",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Vivek Mishra",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Chemistry:[{name:"Sneha Kapoor",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"},{name:"Aditya Mehta",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Nupur Jain",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Biology:[{name:"Siddharth Sir",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop"},{name:"Radhika Sen",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Mathematics:[{name:"Deepak Rao",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Shreya Iyer",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Varun Sethi",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}],"Computer Science":[{name:"Arvind Nair",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}]}},"Grade 12":{subjects:{English:[{name:"Sunita Verma",img:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop"},{name:"Aalok Trivedi",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Garima Singh",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Physics:[{name:"Nitin Agarwal",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Priti Saxena",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Keshav Reddy",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Chemistry:[{name:"Sneha Kapoor",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop"},{name:"Rohan Mukherjee",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"},{name:"Farah Qureshi",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"}],Biology:[{name:"Siddharth Sir",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop"},{name:"Neelam Vaidya",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Sameer Kulkarni",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"}],Mathematics:[{name:"Deepak Rao",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Ishita Shah",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Yashwant Kumar",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}],"Computer Science":[{name:"Arvind Nair",img:"https://images.unsplash.com/photo-1603415526960-f7e0328b1e5a?w=300&h=300&fit=crop"},{name:"Pallavi Menon",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop"},{name:"Siddharth Jain",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"}]}}},en={bg:"#ffffff",text:"#0f172a",subtext:"#475569",border:"#e5e7eb",card:"#ffffff",soft:"#f3f4f6",soft2:"#f8fafc",focus:"#d1d5db",btn:"#e5e7eb",btnText:"#0f172a"},p8=Eg`
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
`,h8=$t`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`,m8=$t`
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: translateX(0); }
`,g8=$t`
  0% { transform: scale(.96); }
  100% { transform: scale(1); }
`,x8=b.div`
  min-height: 90svh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: ${en.bg};
  animation: ${h8} 0.42s ease-out both;
`,y8=b.div`
  width: 100%;
  max-width: 720px;
`,v8=b.div`
  background: ${en.card};
  border: 1px solid ${en.border};
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.05);
  transition: transform .12s ease;
  animation: ${g8} .18s ease-out both;
`,b8=b.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 12px;
  animation: ${m8} 0.4s ease-out both;
`,S8=b.div`
  height: 8px;
  width: 12px;
  border-radius: 999px;
  background: ${en.border};
  transition: width 180ms, background-color 180ms;

  ${({active:a})=>a&&$n`
      width: 32px;
      background: ${en.focus};
    `}
`;function w8(){const a=ts(),[l,s]=v.useState(0),[o,f]=v.useState(""),[d,h]=v.useState(""),[y,g]=v.useState(""),m=S=>{!o||!d||!S||a("/instalearn/teacher",{state:{grade:o,subject:d,teacher:S}})};return u.jsxs(u.Fragment,{children:[u.jsx(p8,{}),u.jsx(x8,{children:u.jsx(y8,{children:u.jsxs(v8,{children:[u.jsx(b8,{children:[1,2,3].map(S=>u.jsx(S8,{active:l===S},S))}),l===0&&u.jsx(T6,{onStart:()=>s(1),ui:en}),l===1&&u.jsx(U6,{ui:en,grades:To,selectedGrade:o,onSelect:S=>{f(S),h(""),g("")},onBack:()=>s(0),onNext:()=>o&&s(2)}),l===2&&u.jsx(W6,{ui:en,grades:To,selectedGrade:o,selectedSubject:d,onSelectSubject:S=>{h(S),g("")},onBack:()=>s(1),onNext:()=>d&&s(3)}),l===3&&u.jsx(d8,{ui:en,grades:To,selectedGrade:o,selectedSubject:d,selectedTeacher:y,onSelectTeacher:g,onBack:()=>s(2),onConfirm:()=>m(y||(o&&d?To[o].subjects[d][0]:""))})]})})})]})}function Gu(a){return Ee({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(a)}function Ef(a){return Ee({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function cs(a){return Ee({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function j8(a){return Ee({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function E8(a){return Ee({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function Q1(a){return Ee({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(a)}function Z1(a){return Ee({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function K1(a){return Ee({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function C8(a){return Ee({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(a)}function J1(a){return Ee({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(a)}function Xu(a){return Ee({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function zo(a){return Ee({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function F1(a){return Ee({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const Ug={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:Il.teacherProfilePic,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},W1=Ug,I1="studentProfile",T8=`joined:${W1?.id||W1?.name}`,Pl=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,z8=$t`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`,Hg=$t`from{opacity:0}to{opacity:1}`,R8=$t`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.98); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`,A8=$t`0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}`,le={bgSecondary:"#FFFFFF",card:"#FFFFFF",text:"#0F172A",subtext:"#64748B",primary:"#88898a",accent:"#656768",accentGreen:"#666867",border:"#E2E8F0",borderLight:"#CBD5E1",overlay:"rgba(15,23,42,.5)"},M8=b.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background: #fdfdfd; /* plain white background */
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto; /* ✅ allows vertical scrolling if content overflows */

  &::before {
    content: none; /* ✅ remove animated gradients */
  }

  @media (min-width: 640px) {
    padding: 24px 20px;
  }
`,O8=b.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  animation: ${Pl?"none":z8} 0.6s
    cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 1;
`,Vl=b.div`
  border-radius: 18px;
  backdrop-filter: blur(8px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  @media (min-width: 640px) {
    border-radius: 22px;
  }
`,P1=b.div`
  position: fixed;
  inset: 0;
  background: ${le.overlay};
  backdrop-filter: blur(2px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Pl?"none":Hg} 0.15s ease-out;
`,em=b.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${le.bgSecondary};
  border-radius: 16px;
  padding: 20px;
  width: 92%;
  max-width: 480px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.18);
  animation: ${Pl?"none":R8} 0.2s
    cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  @media (min-width: 640px) {
    padding: 24px;
    border-radius: 20px;
  }
`,tm=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,nm=b.h2`
  font-size: clamp(18px, 2.6vw, 22px);
  font-weight: 800;
  color: ${le.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`,am=b.button`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${le.border};
  background: ${le.card};
  color: ${le.subtext};
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
  color: ${le.text};
  margin-bottom: 6px;
  font-size: clamp(12px, 2.5vw, 14px);
`,Ci=b.input`
  width: 100%;
  padding: 12px 14px;
  border: 2px solid ${le.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${le.text};
  background: ${le.bgSecondary};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  &:focus {
    outline: none;
    border-color: ${le.primary};
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.12);
  }
`,im=b.select`
  width: 100%;
  padding: 12px 14px;
  border: 2px solid ${le.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${le.text};
  background: ${le.bgSecondary};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  &:focus {
    outline: none;
    border-color: ${le.primary};
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.12);
  }
`,lm=b.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`,Ro=b.button`
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
    background:linear-gradient(135deg, ${le.primary}, ${le.accent});
    color:#fff;
    box-shadow:0 4px 10px rgba(14,165,233,.25);
    &:active{ transform: translateY(1px); }
  `:`
    background:${le.card};
    color:${le.text};
    border:2px solid ${le.border};
    &:active{ transform: translateY(1px); }
  `}
`,k8=b(Vl)`
  padding: 16px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, ${le.bgSecondary} 0%, #f8fafc 100%);
  border: 1px solid ${le.borderLight};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${le.primary}, ${le.accentGreen});
  }

  @media (min-width: 640px) {
    padding: 28px 20px;
    margin-bottom: 20px;
  }
`,N8=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: auto 1fr;
    gap: 24px;
    align-items: start;
  }
`,_8=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,D8=b.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${le.primary}, ${le.accentGreen});
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
    background: linear-gradient(135deg, ${le.primary}, ${le.accentGreen});
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
`,$8=b.div`
  display: grid;
  gap: 16px;
`,B8=b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  @media (max-width: 639px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`,L8=b.div`
  display: grid;
  gap: 6px;
`,U8=b.h1`
  font-size: clamp(18px, 5.3vw, 28px);
  font-weight: 800;
  color: ${le.text};
  margin: 0;
  letter-spacing: -0.3px;
`,H8=b.p`
  color: ${le.subtext};
  margin: 0;
  font-size: clamp(12px, 3.5vw, 15px);
  font-weight: 500;
  word-break: break-word;
`,Y8=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media (min-width: 640px) {
    justify-content: flex-end;
    width: auto;
  }
`,rm=b.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border: 2px solid ${le.border};
  background: ${le.bgSecondary};
  color: ${le.text};
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
`,q8=b.div`
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
`,om=b.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  border: 2px solid ${a=>a.$active?le.primary:le.border};
  background: ${a=>a.$active?`linear-gradient(135deg, ${le.primary}, ${le.accent})`:le.card};
  color: ${a=>a.$active?"#fff":le.subtext};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.1s ease, border-color 0.15s ease;
  min-height: 42px;
  &:active {
    transform: translateY(1px);
  }
`,sm=b(Vl)`
  padding: 16px;
  animation: ${Pl?"none":Hg} 0.3s ease-out;
`,G8=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: auto 1fr auto;
    gap: 12px;
    align-items: center;
  }
`,X8=b.div`
  padding: 12px;
  border-radius: 14px;
  border: 2px solid ${le.border};
  background: ${le.bgSecondary};
  transition: background 0.15s ease, border-color 0.15s ease,
    transform 0.1s ease;
  cursor: pointer;

  &:active {
    transform: translateY(1px);
  }

  & + & {
    margin-top: 10px;
  }
`,V8=b.div`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: linear-gradient(135deg, ${le.primary}, ${le.accentGreen});
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 22px;
  box-shadow: 0 6px 12px rgba(14, 165, 233, 0.22);
`,Q8=b.div`
  display: grid;
  gap: 8px;
`,Z8=b.h3`
  margin: 0;
  color: ${le.text};
  font-size: clamp(15px, 4.6vw, 18px);
  font-weight: 700;
`,K8=b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: ${le.subtext};
`,Vu=b.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`,J8=b.div`
  width: 100%;
  max-width: 220px;
  height: 8px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid ${le.border};
`,F8=b.div`
  height: 100%;
  width: ${a=>Math.min(Math.max(a.value,0),100)}%;
  background: linear-gradient(90deg, ${le.primary}, ${le.accentGreen});
  border-radius: 999px;
  transition: width 0.3s ease;
`,W8=b(j8)`
  color: ${le.subtext};
  font-size: 18px;
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`,Ao=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 12px;
  color: ${le.subtext};
`,Mo=b.div`
  font-size: 60px;
  margin-bottom: 10px;
  opacity: 0.3;
  animation: ${Pl?"none":A8} 3s ease-in-out infinite;
`,Oo=b.h3`
  color: ${le.text};
  font-size: clamp(16px, 4.6vw, 20px);
  font-weight: 800;
  margin: 0 0 6px 0;
`,ko=b.p`
  margin: 0;
  font-size: 13px;
  text-align: center;
`,I8=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 12px;
  }
`,P8=b(Vl)`
  padding: 16px;
  display: grid;
  gap: 12px;
  background: ${le.bgSecondary};
  border: 2px solid ${le.border};
`,eS=b.div`
  font-weight: 700;
  font-size: clamp(14px, 4.2vw, 16px);
  color: ${le.text};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  svg {
    color: ${le.primary};
  }
`,tS=b.div`
  font-size: 12px;
  color: ${le.subtext};
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
`,nS=b.div`
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
  border: 2px solid ${le.border};
  background: ${le.card};
  color: ${le.text};
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  flex: 1;
  min-height: 40px;
  touch-action: manipulation;
  &:active {
    transform: translateY(1px);
  }
`,aS=v.memo(function({item:l,onKey:s}){return u.jsx(X8,{role:"button",tabIndex:0,onKeyDown:o=>s(o,()=>{}),onClick:()=>{},"aria-label":`Open ${l.title}`,children:u.jsxs(G8,{children:[u.jsx(V8,{"aria-hidden":"true",children:l.icon}),u.jsxs(Q8,{children:[u.jsx(Z8,{children:l.title}),u.jsxs(K8,{children:[u.jsxs(Vu,{children:[u.jsx(cs,{})," ",l.teacher]}),u.jsxs(Vu,{children:[u.jsx(E8,{})," ",l.time]}),u.jsxs(Vu,{children:[u.jsx(Ef,{})," ",l.progress,"%"]})]}),u.jsx(J8,{"aria-hidden":"true",children:u.jsx(F8,{value:l.progress})})]}),u.jsx(W8,{})]})})});function iS(){const a=ts(),[l,s]=v.useState("history"),[o,f]=v.useState(!1),[d,h]=v.useState(!1),[y,g]=v.useState("light"),[m,S]=v.useState("all"),[w,T]=v.useState(!1),[z,A]=v.useState(null),[k,$]=v.useState(null);v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),v.useEffect(()=>{const Q=localStorage.getItem(T8)==="true";T(Q);const W=localStorage.getItem(I1);if(W)try{const ce=JSON.parse(W);A(ce),$(ce)}catch{A(null)}else A(null)},[]);const B=[{id:1,title:"Sense of Collective Identity",teacher:"Mr. Arjun Mehta",time:"2 hours ago",progress:75,icon:u.jsx(cs,{})},{id:2,title:"Understanding Diversity",teacher:"Ms. Nisha Rao",time:"Yesterday",progress:45,icon:u.jsx(Ef,{})},{id:3,title:"Nationalism in India",teacher:"Dr. Kavita Iyer",time:"2 days ago",progress:90,icon:u.jsx(K1,{})},{id:4,title:"Democracy & Rights",teacher:"Prof. R. Menon",time:"1 week ago",progress:100,icon:u.jsx(C8,{})}],q=[{id:"f1",title:"Globalisation & Indian Economy",by:"Siddharth Sir",reads:12},{id:"f2",title:"Federalism Basics",by:"Anita Ma'am",reads:9},{id:"f3",title:"Judiciary: Structure",by:"R. Sharma",reads:14},{id:"f4",title:"Gender, Religion & Caste",by:"S. Verma",reads:7}],Y=()=>{A({...k}),localStorage.setItem(I1,JSON.stringify({...k,isPro:w})),f(!1)},Z=(Q,W)=>$({...k,[Q]:W}),J=(Q,W)=>{(Q.key==="Enter"||Q.key===" ")&&(Q.preventDefault(),W())},L=u.jsx(Vl,{style:{padding:16},children:u.jsxs(Ao,{children:[u.jsx(Mo,{children:u.jsx(Gu,{})}),u.jsx(Oo,{children:"You’re not a Pro member yet"}),u.jsx(ko,{children:"Complete Demo Pay on the teacher page to unlock your personalized dashboard."}),u.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginTop:16},children:u.jsx(No,{type:"button",onClick:()=>a("/instalearn/"),children:"Go to Teachers"})})]})}),V=u.jsx(Vl,{style:{padding:16},children:u.jsxs(Ao,{children:[u.jsx(Mo,{children:u.jsx(F1,{})}),u.jsx(Oo,{children:"Complete your profile"}),u.jsx(ko,{children:"We couldn’t find your details. Finish the Demo Pay flow and fill your info to set up your profile."}),u.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginTop:16},children:u.jsx(No,{as:"a",href:"/teacher",children:"Finish Setup"})})]})});return u.jsxs(M8,{$theme:y,children:[u.jsx(O8,{children:w?z?u.jsxs(u.Fragment,{children:[u.jsx(k8,{children:u.jsxs(N8,{children:[u.jsx(_8,{children:u.jsx(D8,{"aria-label":"User avatar",children:z.avatar?.trim()||u.jsx(F1,{size:28})})}),u.jsx($8,{children:u.jsxs(B8,{children:[u.jsxs(L8,{children:[u.jsx(U8,{children:z.name}),u.jsx(H8,{children:z.email})]}),u.jsxs(Y8,{children:[u.jsxs(rm,{type:"button","aria-label":"Edit profile",onClick:()=>{$(z),f(!0)},children:[u.jsx(Z1,{})," ",u.jsx("span",{children:"Edit"})]}),u.jsxs(rm,{type:"button","aria-label":"Settings",onClick:()=>h(!0),children:[u.jsx(Q1,{})," ",u.jsx("span",{children:"Settings"})]})]})]})})]})}),u.jsxs(q8,{children:[u.jsxs(om,{$active:l==="history",onClick:()=>s("history"),"aria-pressed":l==="history",children:[u.jsx(K1,{})," History"]}),u.jsxs(om,{$active:l==="favorites",onClick:()=>s("favorites"),"aria-pressed":l==="favorites",children:[u.jsx(Xu,{})," Favorites"]})]}),l==="history"?u.jsx(sm,{children:B.length>0?B.map(Q=>u.jsx(aS,{item:Q,onKey:J},Q.id)):u.jsxs(Ao,{children:[u.jsx(Mo,{children:u.jsx(Gu,{})}),u.jsx(Oo,{children:"No history yet"}),u.jsx(ko,{children:"Start reading to see your progress here."})]})}):u.jsx(sm,{children:q.length>0?u.jsx(I8,{children:q.map(Q=>u.jsxs(P8,{children:[u.jsxs(eS,{children:[u.jsx(Gu,{})," ",Q.title]}),u.jsxs(tS,{children:[u.jsxs("span",{children:["By ",Q.by]}),u.jsx("span",{children:"•"}),u.jsxs("span",{children:[Q.reads," reads"]})]}),u.jsxs(nS,{children:[u.jsxs(No,{type:"button",children:[u.jsx(Ef,{})," Open"]}),u.jsxs(No,{type:"button",children:[u.jsx(Xu,{})," Unfavourite"]})]})]},Q.id))}):u.jsxs(Ao,{children:[u.jsx(Mo,{children:u.jsx(Xu,{})}),u.jsx(Oo,{children:"No favorites yet"}),u.jsx(ko,{children:"Tap the star on a lesson to save it here."})]})})]}):V:L}),o&&z&&u.jsxs(u.Fragment,{children:[u.jsx(P1,{onClick:()=>f(!1)}),u.jsxs(em,{role:"dialog","aria-modal":"true","aria-labelledby":"editProfileTitle",children:[u.jsxs(tm,{children:[u.jsxs(nm,{id:"editProfileTitle",children:[u.jsx(Z1,{})," Edit Profile"]}),u.jsx(am,{type:"button",onClick:()=>f(!1),"aria-label":"Close edit profile",children:u.jsx(zo,{})})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"name",children:"Name"}),u.jsx(Ci,{id:"name",value:k?.name||"",onChange:Q=>Z("name",Q.target.value)})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"email",children:"Email"}),u.jsx(Ci,{id:"email",type:"email",value:k?.email||"",onChange:Q=>Z("email",Q.target.value)})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"avatar",children:"Avatar Initials"}),u.jsx(Ci,{id:"avatar",value:k?.avatar||"",onChange:Q=>Z("avatar",Q.target.value)})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"booksRead",children:"Books Read"}),u.jsx(Ci,{id:"booksRead",type:"number",min:0,value:k?.booksRead??24,onChange:Q=>Z("booksRead",Number(Q.target.value))})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"hoursSpent",children:"Study Hours"}),u.jsx(Ci,{id:"hoursSpent",type:"number",min:0,value:k?.hoursSpent??156,onChange:Q=>Z("hoursSpent",Number(Q.target.value))})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"favTeacher",children:"Favourite Teacher"}),u.jsx(Ci,{id:"favTeacher",value:k?.favoriteTeacher??"Ms. Sarah",onChange:Q=>Z("favoriteTeacher",Q.target.value)})]}),u.jsxs(lm,{children:[u.jsxs(Ro,{type:"button",onClick:()=>f(!1),children:[u.jsx(zo,{})," Cancel"]}),u.jsxs(Ro,{type:"button",primary:!0,onClick:Y,children:[u.jsx(J1,{})," Save"]})]})]})]}),d&&u.jsxs(u.Fragment,{children:[u.jsx(P1,{onClick:()=>h(!1)}),u.jsxs(em,{role:"dialog","aria-modal":"true","aria-labelledby":"settingsTitle",children:[u.jsxs(tm,{children:[u.jsxs(nm,{id:"settingsTitle",children:[u.jsx(Q1,{})," Settings"]}),u.jsx(am,{type:"button",onClick:()=>h(!1),"aria-label":"Close settings",children:u.jsx(zo,{})})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"theme",children:"Theme"}),u.jsxs(im,{id:"theme",value:y,onChange:Q=>g(Q.target.value),children:[u.jsx("option",{value:"light",children:"Light"}),u.jsx("option",{value:"dark",children:"Dark"})]})]}),u.jsxs(fa,{children:[u.jsx(da,{htmlFor:"notifications",children:"Notifications"}),u.jsxs(im,{id:"notifications",value:m,onChange:Q=>S(Q.target.value),children:[u.jsx("option",{value:"all",children:"All activity"}),u.jsx("option",{value:"mentions",children:"Mentions only"}),u.jsx("option",{value:"none",children:"None"})]})]}),u.jsxs(lm,{children:[u.jsxs(Ro,{type:"button",onClick:()=>h(!1),children:[u.jsx(zo,{})," Close"]}),u.jsxs(Ro,{type:"button",primary:!0,onClick:()=>h(!1),children:[u.jsx(J1,{})," Apply"]})]})]})]})]})}const lS=$t`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,rS=$t`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,oS=$t`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,sS=$t`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,cS=b.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,uS=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Qu=b.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${lS} 20s infinite ease-in-out;

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
`,fS=b.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${rS} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,dS=b.div`
  margin-bottom: 0px;
  position: relative;
`,pS=b.div`
  font-size: 70px;
  animation: ${oS} 2s infinite;
`,hS=b.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,mS=b.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,gS=b.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,xS=b.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${sS} 3s ease-in-out infinite;
`,yS=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Zu=b.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,Ku=b.div`
  font-size:30px;
  margin-bottom: 10px;
`,Ju=b.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,vS=b.button`
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
`;function cm(){const[a,l]=v.useState(!1),s=()=>{l(!0),setTimeout(()=>{l(!1)},2e3)};return u.jsxs(cS,{children:[u.jsxs(uS,{children:[u.jsx(Qu,{}),u.jsx(Qu,{}),u.jsx(Qu,{})]}),u.jsxs(fS,{children:[u.jsx(dS,{children:u.jsx(pS,{children:"🚧"})}),u.jsx(hS,{children:"Building Something Amazing"}),u.jsx(mS,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),u.jsx(gS,{children:u.jsx(xS,{})}),u.jsxs(yS,{children:[u.jsxs(Zu,{children:[u.jsx(Ku,{children:"⚡"}),u.jsx(Ju,{children:"Lightning Fast"})]}),u.jsxs(Zu,{children:[u.jsx(Ku,{children:"🎨"}),u.jsx(Ju,{children:"Beautiful Design"})]}),u.jsxs(Zu,{children:[u.jsx(Ku,{children:"🔒"}),u.jsx(Ju,{children:"Secure & Private"})]})]}),u.jsx(vS,{onClick:s,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var Fu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var um;function bS(){return um||(um=1,(function(a){(function(){var l={}.hasOwnProperty;function s(){for(var d="",h=0;h<arguments.length;h++){var y=arguments[h];y&&(d=f(d,o(y)))}return d}function o(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return s.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var h="";for(var y in d)l.call(d,y)&&d[y]&&(h=f(h,y));return h}function f(d,h){return h?d?d+" "+h:d+h:d}a.exports?(s.default=s,a.exports=s):window.classNames=s})()})(Fu)),Fu.exports}var SS=bS();const it=Zl(SS);function Cf(){return Cf=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var o in s)({}).hasOwnProperty.call(s,o)&&(a[o]=s[o])}return a},Cf.apply(null,arguments)}function Yg(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)!==-1)continue;s[o]=a[o]}return s}function fm(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function wS(a){var l=jS(a,"string");return typeof l=="symbol"?l:String(l)}function jS(a,l){if(typeof a!="object"||a===null)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var o=s.call(a,l);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function ES(a,l,s){var o=v.useRef(a!==void 0),f=v.useState(l),d=f[0],h=f[1],y=a!==void 0,g=o.current;return o.current=y,!y&&g&&d!==l&&h(l),[y?a:d,v.useCallback(function(m){for(var S=arguments.length,w=new Array(S>1?S-1:0),T=1;T<S;T++)w[T-1]=arguments[T];s&&s.apply(void 0,[m].concat(w)),h(m)},[s])]}function qg(a,l){return Object.keys(l).reduce(function(s,o){var f,d=s,h=d[fm(o)],y=d[o],g=Yg(d,[fm(o),o].map(wS)),m=l[o],S=ES(y,h,a[m]),w=S[0],T=S[1];return Cf({},g,(f={},f[o]=w,f[m]=T,f))},a)}function Tf(a,l){return Tf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,o){return s.__proto__=o,s},Tf(a,l)}function CS(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,Tf(a,l)}const TS=["xxl","xl","lg","md","sm","xs"],zS="xs",Gg=v.createContext({prefixes:{},breakpoints:TS,minBreakpoint:zS}),{Consumer:G9,Provider:X9}=Gg;function jt(a,l){const{prefixes:s}=v.useContext(Gg);return a||s[l]||l}function Ff(a){return a&&a.ownerDocument||document}function RS(a){var l=Ff(a);return l&&l.defaultView||window}function AS(a,l){return RS(a).getComputedStyle(a,l)}var MS=/([A-Z])/g;function OS(a){return a.replace(MS,"-$1").toLowerCase()}var kS=/^ms-/;function _o(a){return OS(a).replace(kS,"-ms-")}var NS=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function _S(a){return!!(a&&NS.test(a))}function _n(a,l){var s="",o="";if(typeof l=="string")return a.style.getPropertyValue(_o(l))||AS(a).getPropertyValue(_o(l));Object.keys(l).forEach(function(f){var d=l[f];!d&&d!==0?a.style.removeProperty(_o(f)):_S(f)?o+=f+"("+d+") ":s+=_o(f)+": "+d+";"}),o&&(s+="transform: "+o+";"),a.style.cssText+=";"+s}var Wu={exports:{}},Iu,dm;function DS(){if(dm)return Iu;dm=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Iu=a,Iu}var Pu,pm;function $S(){if(pm)return Pu;pm=1;var a=DS();function l(){}function s(){}return s.resetWarningCache=l,Pu=function(){function o(h,y,g,m,S,w){if(w!==a){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}o.isRequired=o;function f(){return o}var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:f,element:o,elementType:o,instanceOf:f,node:o,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:s,resetWarningCache:l};return d.PropTypes=d,d},Pu}var hm;function BS(){return hm||(hm=1,Wu.exports=$S()()),Wu.exports}var LS=BS();const ef=Zl(LS),mm={disabled:!1},Xg=ke.createContext(null);var US=function(l){return l.scrollTop},Yl="unmounted",ha="exited",Pt="entering",On="entered",Ql="exiting",Un=(function(a){CS(l,a);function l(o,f){var d;d=a.call(this,o,f)||this;var h=f,y=h&&!h.isMounting?o.enter:o.appear,g;return d.appearStatus=null,o.in?y?(g=ha,d.appearStatus=Pt):g=On:o.unmountOnExit||o.mountOnEnter?g=Yl:g=ha,d.state={status:g},d.nextCallback=null,d}l.getDerivedStateFromProps=function(f,d){var h=f.in;return h&&d.status===Yl?{status:ha}:null};var s=l.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(f){var d=null;if(f!==this.props){var h=this.state.status;this.props.in?h!==Pt&&h!==On&&(d=Pt):(h===Pt||h===On)&&(d=Ql)}this.updateStatus(!1,d)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var f=this.props.timeout,d,h,y;return d=h=y=f,f!=null&&typeof f!="number"&&(d=f.exit,h=f.enter,y=f.appear!==void 0?f.appear:h),{exit:d,enter:h,appear:y}},s.updateStatus=function(f,d){if(f===void 0&&(f=!1),d!==null)if(this.cancelNextCallback(),d===Pt){if(this.props.unmountOnExit||this.props.mountOnEnter){var h=this.props.nodeRef?this.props.nodeRef.current:Ai.findDOMNode(this);h&&US(h)}this.performEnter(f)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ha&&this.setState({status:Yl})},s.performEnter=function(f){var d=this,h=this.props.enter,y=this.context?this.context.isMounting:f,g=this.props.nodeRef?[y]:[Ai.findDOMNode(this),y],m=g[0],S=g[1],w=this.getTimeouts(),T=y?w.appear:w.enter;if(!f&&!h||mm.disabled){this.safeSetState({status:On},function(){d.props.onEntered(m)});return}this.props.onEnter(m,S),this.safeSetState({status:Pt},function(){d.props.onEntering(m,S),d.onTransitionEnd(T,function(){d.safeSetState({status:On},function(){d.props.onEntered(m,S)})})})},s.performExit=function(){var f=this,d=this.props.exit,h=this.getTimeouts(),y=this.props.nodeRef?void 0:Ai.findDOMNode(this);if(!d||mm.disabled){this.safeSetState({status:ha},function(){f.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:Ql},function(){f.props.onExiting(y),f.onTransitionEnd(h.exit,function(){f.safeSetState({status:ha},function(){f.props.onExited(y)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(f,d){d=this.setNextCallback(d),this.setState(f,d)},s.setNextCallback=function(f){var d=this,h=!0;return this.nextCallback=function(y){h&&(h=!1,d.nextCallback=null,f(y))},this.nextCallback.cancel=function(){h=!1},this.nextCallback},s.onTransitionEnd=function(f,d){this.setNextCallback(d);var h=this.props.nodeRef?this.props.nodeRef.current:Ai.findDOMNode(this),y=f==null&&!this.props.addEndListener;if(!h||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var g=this.props.nodeRef?[this.nextCallback]:[h,this.nextCallback],m=g[0],S=g[1];this.props.addEndListener(m,S)}f!=null&&setTimeout(this.nextCallback,f)},s.render=function(){var f=this.state.status;if(f===Yl)return null;var d=this.props,h=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var y=Yg(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ke.createElement(Xg.Provider,{value:null},typeof h=="function"?h(f,y):ke.cloneElement(ke.Children.only(h),y))},l})(ke.Component);Un.contextType=Xg;Un.propTypes={};function Ti(){}Un.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ti,onEntering:Ti,onEntered:Ti,onExit:Ti,onExiting:Ti,onExited:Ti};Un.UNMOUNTED=Yl;Un.EXITED=ha;Un.ENTERING=Pt;Un.ENTERED=On;Un.EXITING=Ql;function HS(a){return a.code==="Escape"||a.keyCode===27}function YS(){const a=v.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Yi(a){if(!a||typeof a=="function")return null;const{major:l}=YS();return l>=19?a.props.ref:a.ref}const us=!!(typeof window<"u"&&window.document&&window.document.createElement);var zf=!1,Rf=!1;try{var tf={get passive(){return zf=!0},get once(){return Rf=zf=!0}};us&&(window.addEventListener("test",tf,tf),window.removeEventListener("test",tf,!0))}catch{}function qS(a,l,s,o){if(o&&typeof o!="boolean"&&!Rf){var f=o.once,d=o.capture,h=s;!Rf&&f&&(h=s.__once||function y(g){this.removeEventListener(l,y,d),s.call(this,g)},s.__once=h),a.addEventListener(l,h,zf?o:d)}a.addEventListener(l,s,o)}function GS(a,l,s,o){var f=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(l,s,f),s.__once&&a.removeEventListener(l,s.__once,f)}function Io(a,l,s,o){return qS(a,l,s,o),function(){GS(a,l,s,o)}}function XS(a,l,s,o){if(o===void 0&&(o=!0),a){var f=document.createEvent("HTMLEvents");f.initEvent(l,s,o),a.dispatchEvent(f)}}function VS(a){var l=_n(a,"transitionDuration")||"",s=l.indexOf("ms")===-1?1e3:1;return parseFloat(l)*s}function QS(a,l,s){s===void 0&&(s=5);var o=!1,f=setTimeout(function(){o||XS(a,"transitionend",!0)},l+s),d=Io(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(f),d()}}function ZS(a,l,s,o){s==null&&(s=VS(a)||0);var f=QS(a,s,o),d=Io(a,"transitionend",l);return function(){f(),d()}}function gm(a,l){const s=_n(a,l)||"",o=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*o}function Wf(a,l){const s=gm(a,"transitionDuration"),o=gm(a,"transitionDelay"),f=ZS(a,d=>{d.target===a&&(f(),l(d))},s+o)}function Ul(...a){return a.filter(l=>l!=null).reduce((l,s)=>{if(typeof s!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return l===null?s:function(...f){l.apply(this,f),s.apply(this,f)}},null)}function Vg(a){a.offsetHeight}const xm=a=>!a||typeof a=="function"?a:l=>{a.current=l};function KS(a,l){const s=xm(a),o=xm(l);return f=>{s&&s(f),o&&o(f)}}function JS(a,l){return v.useMemo(()=>KS(a,l),[a,l])}function FS(a){return a&&"setState"in a?Ai.findDOMNode(a):a??null}const fs=ke.forwardRef(({onEnter:a,onEntering:l,onEntered:s,onExit:o,onExiting:f,onExited:d,addEndListener:h,children:y,childRef:g,...m},S)=>{const w=v.useRef(null),T=JS(w,g),z=L=>{T(FS(L))},A=L=>V=>{L&&w.current&&L(w.current,V)},k=v.useCallback(A(a),[a]),$=v.useCallback(A(l),[l]),B=v.useCallback(A(s),[s]),q=v.useCallback(A(o),[o]),Y=v.useCallback(A(f),[f]),Z=v.useCallback(A(d),[d]),J=v.useCallback(A(h),[h]);return u.jsx(Un,{ref:S,...m,onEnter:k,onEntered:B,onEntering:$,onExit:q,onExited:Z,onExiting:Y,addEndListener:J,nodeRef:w,children:typeof y=="function"?(L,V)=>y(L,{...V,ref:z}):ke.cloneElement(y,{ref:z})})});fs.displayName="TransitionWrapper";const WS={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function IS(a,l){const s=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=l[s],f=WS[a];return o+parseInt(_n(l,f[0]),10)+parseInt(_n(l,f[1]),10)}const PS={[ha]:"collapse",[Ql]:"collapsing",[Pt]:"collapsing",[On]:"collapse show"},Qg=ke.forwardRef(({onEnter:a,onEntering:l,onEntered:s,onExit:o,onExiting:f,className:d,children:h,dimension:y="height",in:g=!1,timeout:m=300,mountOnEnter:S=!1,unmountOnExit:w=!1,appear:T=!1,getDimensionValue:z=IS,...A},k)=>{const $=typeof y=="function"?y():y,B=v.useMemo(()=>Ul(L=>{L.style[$]="0"},a),[$,a]),q=v.useMemo(()=>Ul(L=>{const V=`scroll${$[0].toUpperCase()}${$.slice(1)}`;L.style[$]=`${L[V]}px`},l),[$,l]),Y=v.useMemo(()=>Ul(L=>{L.style[$]=null},s),[$,s]),Z=v.useMemo(()=>Ul(L=>{L.style[$]=`${z($,L)}px`,Vg(L)},o),[o,z,$]),J=v.useMemo(()=>Ul(L=>{L.style[$]=null},f),[$,f]);return u.jsx(fs,{ref:k,addEndListener:Wf,...A,"aria-expanded":A.role?g:null,onEnter:B,onEntering:q,onEntered:Y,onExit:Z,onExiting:J,childRef:Yi(h),in:g,timeout:m,mountOnEnter:S,unmountOnExit:w,appear:T,children:(L,V)=>ke.cloneElement(h,{...V,className:it(d,h.props.className,PS[L],$==="width"&&"collapse-horizontal")})})});Qg.displayName="Collapse";function ew(a){const l=v.useRef(a);return v.useEffect(()=>{l.current=a},[a]),l}function ds(a){const l=ew(a);return v.useCallback(function(...s){return l.current&&l.current(...s)},[l])}const tw=(a=>v.forwardRef((l,s)=>u.jsx("div",{...l,ref:s,className:it(l.className,a)})));function nw(a){const l=v.useRef(a);return v.useEffect(()=>{l.current=a},[a]),l}function kn(a){const l=nw(a);return v.useCallback(function(...s){return l.current&&l.current(...s)},[l])}function aw(){const a=v.useRef(!0),l=v.useRef(()=>a.current);return v.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),l.current}function iw(a){const l=v.useRef(null);return v.useEffect(()=>{l.current=a}),l.current}const lw=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",rw=typeof document<"u",ym=rw||lw?v.useLayoutEffect:v.useEffect,ow=["as","disabled"];function sw(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}function cw(a){return!a||a.trim()==="#"}function Zg({tagName:a,disabled:l,href:s,target:o,rel:f,role:d,onClick:h,tabIndex:y=0,type:g}){a||(s!=null||o!=null||f!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:g||"button",disabled:l},m];const S=T=>{if((l||a==="a"&&cw(s))&&T.preventDefault(),l){T.stopPropagation();return}h?.(T)},w=T=>{T.key===" "&&(T.preventDefault(),S(T))};return a==="a"&&(s||(s="#"),l&&(s=void 0)),[{role:d??"button",disabled:void 0,tabIndex:l?void 0:y,href:s,target:a==="a"?o:void 0,"aria-disabled":l||void 0,rel:a==="a"?f:void 0,onClick:S,onKeyDown:w},m]}const Kg=v.forwardRef((a,l)=>{let{as:s,disabled:o}=a,f=sw(a,ow);const[d,{tagName:h}]=Zg(Object.assign({tagName:s,disabled:o},f));return u.jsx(h,Object.assign({},f,d,{ref:l}))});Kg.displayName="Button";const uw=["onKeyDown"];function fw(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}function dw(a){return!a||a.trim()==="#"}const Jg=v.forwardRef((a,l)=>{let{onKeyDown:s}=a,o=fw(a,uw);const[f]=Zg(Object.assign({tagName:"a"},o)),d=kn(h=>{f.onKeyDown(h),s?.(h)});return dw(o.href)||o.role==="button"?u.jsx("a",Object.assign({ref:l},o,f,{onKeyDown:d})):u.jsx("a",Object.assign({ref:l},o,{onKeyDown:s}))});Jg.displayName="Anchor";const pw={[Pt]:"show",[On]:"show"},Fg=v.forwardRef(({className:a,children:l,transitionClasses:s={},onEnter:o,...f},d)=>{const h={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...f},y=v.useCallback((g,m)=>{Vg(g),o?.(g,m)},[o]);return u.jsx(fs,{ref:d,addEndListener:Wf,...h,onEnter:y,childRef:Yi(l),children:(g,m)=>v.cloneElement(l,{...m,className:it("fade",a,l.props.className,pw[g],s[g])})})});Fg.displayName="Fade";const hw={"aria-label":ef.string,onClick:ef.func,variant:ef.oneOf(["white"])},If=v.forwardRef(({className:a,variant:l,"aria-label":s="Close",...o},f)=>u.jsx("button",{ref:f,type:"button",className:it("btn-close",l&&`btn-close-${l}`,a),"aria-label":s,...o}));If.displayName="CloseButton";If.propTypes=hw;const Wg=v.createContext(null);Wg.displayName="CardHeaderContext";const Ig=v.forwardRef(({bsPrefix:a,fluid:l=!1,as:s="div",className:o,...f},d)=>{const h=jt(a,"container"),y=typeof l=="string"?`-${l}`:"-fluid";return u.jsx(s,{ref:d,...f,className:it(o,l?`${h}${y}`:h)})});Ig.displayName="Container";var mw=Function.prototype.bind.call(Function.prototype.call,[].slice);function Da(a,l){return mw(a.querySelectorAll(l))}function gw(){const[,a]=v.useReducer(l=>l+1,0);return a}function vm(a,l){if(a.contains)return a.contains(l);if(a.compareDocumentPosition)return a===l||!!(a.compareDocumentPosition(l)&16)}const Po=v.createContext(null),Pf=(a,l=null)=>a!=null?String(a):l||null,ed=v.createContext(null);ed.displayName="NavContext";const xw="data-rr-ui-",yw="rrUi";function ps(a){return`${xw}${a}`}function vw(a){return`${yw}${a}`}const Pg=v.createContext(us?window:void 0);Pg.Provider;function td(){return v.useContext(Pg)}const bw=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Sw=typeof document<"u",ww=Sw||bw?v.useLayoutEffect:v.useEffect,qi=v.createContext(null);qi.displayName="NavbarContext";const bm=a=>!a||typeof a=="function"?a:l=>{a.current=l};function jw(a,l){const s=bm(a),o=bm(l);return f=>{s&&s(f),o&&o(f)}}function hs(a,l){return v.useMemo(()=>jw(a,l),[a,l])}const e2=v.createContext(null),Ew=["as","active","eventKey"];function Cw(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}function t2({key:a,onClick:l,active:s,id:o,role:f,disabled:d}){const h=v.useContext(Po),y=v.useContext(ed),g=v.useContext(e2);let m=s;const S={role:f};if(y){!f&&y.role==="tablist"&&(S.role="tab");const w=y.getControllerId(a??null),T=y.getControlledId(a??null);S[ps("event-key")]=a,S.id=w||o,m=s==null&&a!=null?y.activeKey===a:s,(m||!(g!=null&&g.unmountOnExit)&&!(g!=null&&g.mountOnEnter))&&(S["aria-controls"]=T)}return S.role==="tab"&&(S["aria-selected"]=m,m||(S.tabIndex=-1),d&&(S.tabIndex=-1,S["aria-disabled"]=!0)),S.onClick=kn(w=>{d||(l?.(w),a!=null&&h&&!w.isPropagationStopped()&&h(a,w))}),[S,{isActive:m}]}const n2=v.forwardRef((a,l)=>{let{as:s=Kg,active:o,eventKey:f}=a,d=Cw(a,Ew);const[h,y]=t2(Object.assign({key:Pf(f,d.href),active:o},d));return h[ps("active")]=y.isActive,u.jsx(s,Object.assign({},d,h,{ref:l}))});n2.displayName="NavItem";const Tw=["as","onSelect","activeKey","role","onKeyDown"];function zw(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}const Sm=()=>{},wm=ps("event-key"),a2=v.forwardRef((a,l)=>{let{as:s="div",onSelect:o,activeKey:f,role:d,onKeyDown:h}=a,y=zw(a,Tw);const g=gw(),m=v.useRef(!1),S=v.useContext(Po),w=v.useContext(e2);let T,z;w&&(d=d||"tablist",f=w.activeKey,T=w.getControlledId,z=w.getControllerId);const A=v.useRef(null),k=Y=>{const Z=A.current;if(!Z)return null;const J=Da(Z,`[${wm}]:not([aria-disabled=true])`),L=Z.querySelector("[aria-selected=true]");if(!L||L!==document.activeElement)return null;const V=J.indexOf(L);if(V===-1)return null;let Q=V+Y;return Q>=J.length&&(Q=0),Q<0&&(Q=J.length-1),J[Q]},$=(Y,Z)=>{Y!=null&&(o?.(Y,Z),S?.(Y,Z))},B=Y=>{if(h?.(Y),!w)return;let Z;switch(Y.key){case"ArrowLeft":case"ArrowUp":Z=k(-1);break;case"ArrowRight":case"ArrowDown":Z=k(1);break;default:return}Z&&(Y.preventDefault(),$(Z.dataset[vw("EventKey")]||null,Y),m.current=!0,g())};v.useEffect(()=>{if(A.current&&m.current){const Y=A.current.querySelector(`[${wm}][aria-selected=true]`);Y?.focus()}m.current=!1});const q=hs(l,A);return u.jsx(Po.Provider,{value:$,children:u.jsx(ed.Provider,{value:{role:d,activeKey:Pf(f),getControlledId:T||Sm,getControllerId:z||Sm},children:u.jsx(s,Object.assign({},y,{onKeyDown:B,ref:q,role:d}))})})});a2.displayName="Nav";const Rw=Object.assign(a2,{Item:n2});function nf(a){a===void 0&&(a=Ff());try{var l=a.activeElement;return!l||!l.nodeName?null:l}catch{return a.body}}function Aw(a){const l=v.useRef(a);return l.current=a,l}function Mw(a){const l=Aw(a);v.useEffect(()=>()=>l.current(),[])}function Ow(a=document){const l=a.defaultView;return Math.abs(l.innerWidth-a.documentElement.clientWidth)}const jm=ps("modal-open");class nd{constructor({ownerDocument:l,handleContainerOverflow:s=!0,isRTL:o=!1}={}){this.handleContainerOverflow=s,this.isRTL=o,this.modals=[],this.ownerDocument=l}getScrollbarWidth(){return Ow(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(l){}removeModalAttributes(l){}setContainerStyle(l){const s={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",f=this.getElement();l.style={overflow:f.style.overflow,[o]:f.style[o]},l.scrollBarWidth&&(s[o]=`${parseInt(_n(f,o)||"0",10)+l.scrollBarWidth}px`),f.setAttribute(jm,""),_n(f,s)}reset(){[...this.modals].forEach(l=>this.remove(l))}removeContainerStyle(l){const s=this.getElement();s.removeAttribute(jm),Object.assign(s.style,l.style)}add(l){let s=this.modals.indexOf(l);return s!==-1||(s=this.modals.length,this.modals.push(l),this.setModalAttributes(l),s!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),s}remove(l){const s=this.modals.indexOf(l);s!==-1&&(this.modals.splice(s,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(l))}isTopModal(l){return!!this.modals.length&&this.modals[this.modals.length-1]===l}}const af=(a,l)=>us?a==null?(l||Ff()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function kw(a,l){const s=td(),[o,f]=v.useState(()=>af(a,s?.document));if(!o){const d=af(a);d&&f(d)}return v.useEffect(()=>{},[l,o]),v.useEffect(()=>{const d=af(a);d!==o&&f(d)},[a,o]),o}function Nw({children:a,in:l,onExited:s,mountOnEnter:o,unmountOnExit:f}){const d=v.useRef(null),h=v.useRef(l),y=kn(s);v.useEffect(()=>{l?h.current=!0:y(d.current)},[l,y]);const g=hs(d,Yi(a)),m=v.cloneElement(a,{ref:g});return l?m:f||!h.current&&o?null:m}const _w=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Dw(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}function $w(a){let{onEnter:l,onEntering:s,onEntered:o,onExit:f,onExiting:d,onExited:h,addEndListener:y,children:g}=a,m=Dw(a,_w);const S=v.useRef(null),w=hs(S,Yi(g)),T=Z=>J=>{Z&&S.current&&Z(S.current,J)},z=v.useCallback(T(l),[l]),A=v.useCallback(T(s),[s]),k=v.useCallback(T(o),[o]),$=v.useCallback(T(f),[f]),B=v.useCallback(T(d),[d]),q=v.useCallback(T(h),[h]),Y=v.useCallback(T(y),[y]);return Object.assign({},m,{nodeRef:S},l&&{onEnter:z},s&&{onEntering:A},o&&{onEntered:k},f&&{onExit:$},d&&{onExiting:B},h&&{onExited:q},y&&{addEndListener:Y},{children:typeof g=="function"?(Z,J)=>g(Z,Object.assign({},J,{ref:w})):v.cloneElement(g,{ref:w})})}const Bw=["component"];function Lw(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}const Uw=v.forwardRef((a,l)=>{let{component:s}=a,o=Lw(a,Bw);const f=$w(o);return u.jsx(s,Object.assign({ref:l},f))});function Hw({in:a,onTransition:l}){const s=v.useRef(null),o=v.useRef(!0),f=kn(l);return ym(()=>{if(!s.current)return;let d=!1;return f({in:a,element:s.current,initial:o.current,isStale:()=>d}),()=>{d=!0}},[a,f]),ym(()=>(o.current=!1,()=>{o.current=!0}),[]),s}function Yw({children:a,in:l,onExited:s,onEntered:o,transition:f}){const[d,h]=v.useState(!l);l&&d&&h(!1);const y=Hw({in:!!l,onTransition:m=>{const S=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(h(!0),s?.(m.element)))};Promise.resolve(f(m)).then(S,w=>{throw m.in||h(!0),w})}}),g=hs(y,Yi(a));return d&&!l?null:v.cloneElement(a,{ref:g})}function Em(a,l,s){return a?u.jsx(Uw,Object.assign({},s,{component:a})):l?u.jsx(Yw,Object.assign({},s,{transition:l})):u.jsx(Nw,Object.assign({},s))}const qw=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Gw(a,l){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(l.indexOf(o)>=0)continue;s[o]=a[o]}return s}let lf;function Xw(a){return lf||(lf=new nd({ownerDocument:a?.document})),lf}function Vw(a){const l=td(),s=a||Xw(l),o=v.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>s.add(o.current),remove:()=>s.remove(o.current),isTopModal:()=>s.isTopModal(o.current),setDialogRef:v.useCallback(f=>{o.current.dialog=f},[]),setBackdropRef:v.useCallback(f=>{o.current.backdrop=f},[])})}const i2=v.forwardRef((a,l)=>{let{show:s=!1,role:o="dialog",className:f,style:d,children:h,backdrop:y=!0,keyboard:g=!0,onBackdropClick:m,onEscapeKeyDown:S,transition:w,runTransition:T,backdropTransition:z,runBackdropTransition:A,autoFocus:k=!0,enforceFocus:$=!0,restoreFocus:B=!0,restoreFocusOptions:q,renderDialog:Y,renderBackdrop:Z=Be=>u.jsx("div",Object.assign({},Be)),manager:J,container:L,onShow:V,onHide:Q=()=>{},onExit:W,onExited:ce,onExiting:de,onEnter:Ye,onEntering:ee,onEntered:ae}=a,xe=Gw(a,qw);const _=td(),K=kw(L),P=Vw(J),te=aw(),me=iw(s),[E,H]=v.useState(!s),F=v.useRef(null);v.useImperativeHandle(l,()=>P,[P]),us&&!me&&s&&(F.current=nf(_?.document)),s&&E&&H(!1);const I=kn(()=>{if(P.add(),Et.current=Io(document,"keydown",Ge),Ce.current=Io(document,"focus",()=>setTimeout(ue),!0),V&&V(),k){var Be,Ua;const Gi=nf((Be=(Ua=P.dialog)==null?void 0:Ua.ownerDocument)!=null?Be:_?.document);P.dialog&&Gi&&!vm(P.dialog,Gi)&&(F.current=Gi,P.dialog.focus())}}),re=kn(()=>{if(P.remove(),Et.current==null||Et.current(),Ce.current==null||Ce.current(),B){var Be;(Be=F.current)==null||Be.focus==null||Be.focus(q),F.current=null}});v.useEffect(()=>{!s||!K||I()},[s,K,I]),v.useEffect(()=>{E&&re()},[E,re]),Mw(()=>{re()});const ue=kn(()=>{if(!$||!te()||!P.isTopModal())return;const Be=nf(_?.document);P.dialog&&Be&&!vm(P.dialog,Be)&&P.dialog.focus()}),ye=kn(Be=>{Be.target===Be.currentTarget&&(m?.(Be),y===!0&&Q())}),Ge=kn(Be=>{g&&HS(Be)&&P.isTopModal()&&(S?.(Be),Be.defaultPrevented||Q())}),Ce=v.useRef(),Et=v.useRef(),Jt=(...Be)=>{H(!0),ce?.(...Be)};if(!K)return null;const dt=Object.assign({role:o,ref:P.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},xe,{style:d,className:f,tabIndex:-1});let La=Y?Y(dt):u.jsx("div",Object.assign({},dt,{children:v.cloneElement(h,{role:"document"})}));La=Em(w,T,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!s,onExit:W,onExiting:de,onExited:Jt,onEnter:Ye,onEntering:ee,onEntered:ae,children:La});let Bt=null;return y&&(Bt=Z({ref:P.setBackdropRef,onClick:ye}),Bt=Em(z,A,{in:!!s,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Bt})),u.jsx(u.Fragment,{children:Ai.createPortal(u.jsxs(u.Fragment,{children:[Bt,La]}),K)})});i2.displayName="Modal";const Qw=Object.assign(i2,{Manager:nd});function Zw(a,l){return a.classList?a.classList.contains(l):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+l+" ")!==-1}function Kw(a,l){a.classList?a.classList.add(l):Zw(a,l)||(typeof a.className=="string"?a.className=a.className+" "+l:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+l))}function Cm(a,l){return a.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Jw(a,l){a.classList?a.classList.remove(l):typeof a.className=="string"?a.className=Cm(a.className,l):a.setAttribute("class",Cm(a.className&&a.className.baseVal||"",l))}const zi={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class l2 extends nd{adjustAndStore(l,s,o){const f=s.style[l];s.dataset[l]=f,_n(s,{[l]:`${parseFloat(_n(s,l))+o}px`})}restore(l,s){const o=s.dataset[l];o!==void 0&&(delete s.dataset[l],_n(s,{[l]:o}))}setContainerStyle(l){super.setContainerStyle(l);const s=this.getElement();if(Kw(s,"modal-open"),!l.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";Da(s,zi.FIXED_CONTENT).forEach(d=>this.adjustAndStore(o,d,l.scrollBarWidth)),Da(s,zi.STICKY_CONTENT).forEach(d=>this.adjustAndStore(f,d,-l.scrollBarWidth)),Da(s,zi.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(f,d,l.scrollBarWidth))}removeContainerStyle(l){super.removeContainerStyle(l);const s=this.getElement();Jw(s,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";Da(s,zi.FIXED_CONTENT).forEach(d=>this.restore(o,d)),Da(s,zi.STICKY_CONTENT).forEach(d=>this.restore(f,d)),Da(s,zi.NAVBAR_TOGGLER).forEach(d=>this.restore(f,d))}}let rf;function Fw(a){return rf||(rf=new l2(a)),rf}const r2=v.createContext({onHide(){}}),o2=v.forwardRef(({closeLabel:a="Close",closeVariant:l,closeButton:s=!1,onHide:o,children:f,...d},h)=>{const y=v.useContext(r2),g=ds(()=>{y?.onHide(),o?.()});return u.jsxs("div",{ref:h,...d,children:[f,s&&u.jsx(If,{"aria-label":a,variant:l,onClick:g})]})});o2.displayName="AbstractModalHeader";const s2=v.forwardRef(({className:a,bsPrefix:l,as:s="div",...o},f)=>(l=jt(l,"nav-item"),u.jsx(s,{ref:f,className:it(a,l),...o})));s2.displayName="NavItem";const c2=v.forwardRef(({bsPrefix:a,className:l,as:s=Jg,active:o,eventKey:f,disabled:d=!1,...h},y)=>{a=jt(a,"nav-link");const[g,m]=t2({key:Pf(f,h.href),active:o,disabled:d,...h});return u.jsx(s,{...h,...g,ref:y,disabled:d,className:it(l,a,d&&"disabled",m.isActive&&"active")})});c2.displayName="NavLink";const u2=v.forwardRef((a,l)=>{const{as:s="div",bsPrefix:o,variant:f,fill:d=!1,justify:h=!1,navbar:y,navbarScroll:g,className:m,activeKey:S,...w}=qg(a,{activeKey:"onSelect"}),T=jt(o,"nav");let z,A,k=!1;const $=v.useContext(qi),B=v.useContext(Wg);return $?(z=$.bsPrefix,k=y??!0):B&&({cardHeaderBsPrefix:A}=B),u.jsx(Rw,{as:s,ref:l,activeKey:S,className:it(m,{[T]:!k,[`${z}-nav`]:k,[`${z}-nav-scroll`]:k&&g,[`${A}-${f}`]:!!A,[`${T}-${f}`]:!!f,[`${T}-fill`]:d,[`${T}-justified`]:h}),...w})});u2.displayName="Nav";const Ww=Object.assign(u2,{Item:s2,Link:c2}),f2=v.forwardRef(({bsPrefix:a,className:l,as:s,...o},f)=>{a=jt(a,"navbar-brand");const d=s||(o.href?"a":"span");return u.jsx(d,{...o,ref:f,className:it(l,a)})});f2.displayName="NavbarBrand";const d2=v.forwardRef(({children:a,bsPrefix:l,...s},o)=>{l=jt(l,"navbar-collapse");const f=v.useContext(qi);return u.jsx(Qg,{in:!!(f&&f.expanded),...s,children:u.jsx("div",{ref:o,className:l,children:a})})});d2.displayName="NavbarCollapse";const p2=v.forwardRef(({bsPrefix:a,className:l,children:s,label:o="Toggle navigation",as:f="button",onClick:d,...h},y)=>{a=jt(a,"navbar-toggler");const{onToggle:g,expanded:m}=v.useContext(qi)||{},S=ds(w=>{d&&d(w),g&&g()});return f==="button"&&(h.type="button"),u.jsx(f,{...h,ref:y,onClick:S,"aria-label":o,className:it(l,a,!m&&"collapsed"),children:s||u.jsx("span",{className:`${a}-icon`})})});p2.displayName="NavbarToggle";const Af=new WeakMap,Tm=(a,l)=>{if(!a||!l)return;const s=Af.get(l)||new Map;Af.set(l,s);let o=s.get(a);return o||(o=l.matchMedia(a),o.refCount=0,s.set(o.media,o)),o};function Iw(a,l=typeof window>"u"?void 0:window){const s=Tm(a,l),[o,f]=v.useState(()=>s?s.matches:!1);return ww(()=>{let d=Tm(a,l);if(!d)return f(!1);let h=Af.get(l);const y=()=>{f(d.matches)};return d.refCount++,d.addListener(y),y(),()=>{d.removeListener(y),d.refCount--,d.refCount<=0&&h?.delete(d.media),d=void 0}},[a]),o}function Pw(a){const l=Object.keys(a);function s(y,g){return y===g?g:y?`${y} and ${g}`:g}function o(y){return l[Math.min(l.indexOf(y)+1,l.length-1)]}function f(y){const g=o(y);let m=a[g];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function d(y){let g=a[y];return typeof g=="number"&&(g=`${g}px`),`(min-width: ${g})`}function h(y,g,m){let S;typeof y=="object"?(S=y,m=g,g=!0):(g=g||!0,S={[y]:g});let w=v.useMemo(()=>Object.entries(S).reduce((T,[z,A])=>((A==="up"||A===!0)&&(T=s(T,d(z))),(A==="down"||A===!0)&&(T=s(T,f(z))),T),""),[JSON.stringify(S)]);return Iw(w,m)}return h}const e7=Pw({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),h2=v.forwardRef(({className:a,bsPrefix:l,as:s="div",...o},f)=>(l=jt(l,"offcanvas-body"),u.jsx(s,{ref:f,className:it(a,l),...o})));h2.displayName="OffcanvasBody";const t7={[Pt]:"show",[On]:"show"},m2=v.forwardRef(({bsPrefix:a,className:l,children:s,in:o=!1,mountOnEnter:f=!1,unmountOnExit:d=!1,appear:h=!1,...y},g)=>(a=jt(a,"offcanvas"),u.jsx(fs,{ref:g,addEndListener:Wf,in:o,mountOnEnter:f,unmountOnExit:d,appear:h,...y,childRef:Yi(s),children:(m,S)=>v.cloneElement(s,{...S,className:it(l,s.props.className,(m===Pt||m===Ql)&&`${a}-toggling`,t7[m])})})));m2.displayName="OffcanvasToggling";const g2=v.forwardRef(({bsPrefix:a,className:l,closeLabel:s="Close",closeButton:o=!1,...f},d)=>(a=jt(a,"offcanvas-header"),u.jsx(o2,{ref:d,...f,className:it(l,a),closeLabel:s,closeButton:o})));g2.displayName="OffcanvasHeader";const n7=tw("h5"),x2=v.forwardRef(({className:a,bsPrefix:l,as:s=n7,...o},f)=>(l=jt(l,"offcanvas-title"),u.jsx(s,{ref:f,className:it(a,l),...o})));x2.displayName="OffcanvasTitle";function a7(a){return u.jsx(m2,{...a})}function i7(a){return u.jsx(Fg,{...a})}const y2=v.forwardRef(({bsPrefix:a,className:l,children:s,"aria-labelledby":o,placement:f="start",responsive:d,show:h=!1,backdrop:y=!0,keyboard:g=!0,scroll:m=!1,onEscapeKeyDown:S,onShow:w,onHide:T,container:z,autoFocus:A=!0,enforceFocus:k=!0,restoreFocus:$=!0,restoreFocusOptions:B,onEntered:q,onExit:Y,onExiting:Z,onEnter:J,onEntering:L,onExited:V,backdropClassName:Q,manager:W,renderStaticNode:ce=!1,...de},Ye)=>{const ee=v.useRef();a=jt(a,"offcanvas");const[ae,xe]=v.useState(!1),_=ds(T),K=e7(d||"xs","up");v.useEffect(()=>{xe(d?h&&!K:h)},[h,d,K]);const P=v.useMemo(()=>({onHide:_}),[_]);function te(){return W||(m?(ee.current||(ee.current=new l2({handleContainerOverflow:!1})),ee.current):Fw())}const me=(I,...re)=>{I&&(I.style.visibility="visible"),J?.(I,...re)},E=(I,...re)=>{I&&(I.style.visibility=""),V?.(...re)},H=v.useCallback(I=>u.jsx("div",{...I,className:it(`${a}-backdrop`,Q)}),[Q,a]),F=I=>u.jsx("div",{...I,...de,className:it(l,d?`${a}-${d}`:a,`${a}-${f}`),"aria-labelledby":o,children:s});return u.jsxs(u.Fragment,{children:[!ae&&(d||ce)&&F({}),u.jsx(r2.Provider,{value:P,children:u.jsx(Qw,{show:ae,ref:Ye,backdrop:y,container:z,keyboard:g,autoFocus:A,enforceFocus:k&&!m,restoreFocus:$,restoreFocusOptions:B,onEscapeKeyDown:S,onShow:w,onHide:_,onEnter:me,onEntering:L,onEntered:q,onExit:Y,onExiting:Z,onExited:E,manager:te(),transition:a7,backdropTransition:i7,renderBackdrop:H,renderDialog:F})})]})});y2.displayName="Offcanvas";const l7=Object.assign(y2,{Body:h2,Header:g2,Title:x2}),v2=v.forwardRef(({onHide:a,...l},s)=>{const o=v.useContext(qi),f=ds(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return u.jsx(l7,{ref:s,show:!!(o!=null&&o.expanded),...l,renderStaticNode:!0,onHide:f})});v2.displayName="NavbarOffcanvas";const b2=v.forwardRef(({className:a,bsPrefix:l,as:s="span",...o},f)=>(l=jt(l,"navbar-text"),u.jsx(s,{ref:f,className:it(a,l),...o})));b2.displayName="NavbarText";const S2=v.forwardRef((a,l)=>{const{bsPrefix:s,expand:o=!0,variant:f="light",bg:d,fixed:h,sticky:y,className:g,as:m="nav",expanded:S,onToggle:w,onSelect:T,collapseOnSelect:z=!1,...A}=qg(a,{expanded:"onToggle"}),k=jt(s,"navbar"),$=v.useCallback((...Y)=>{T?.(...Y),z&&S&&w?.(!1)},[T,z,S,w]);A.role===void 0&&m!=="nav"&&(A.role="navigation");let B=`${k}-expand`;typeof o=="string"&&(B=`${B}-${o}`);const q=v.useMemo(()=>({onToggle:()=>w?.(!S),bsPrefix:k,expanded:!!S,expand:o}),[k,S,o,w]);return u.jsx(qi.Provider,{value:q,children:u.jsx(Po.Provider,{value:$,children:u.jsx(m,{ref:l,...A,className:it(g,k,o&&B,f&&`${k}-${f}`,d&&`bg-${d}`,y&&`sticky-${y}`,h&&`fixed-${h}`)})})})});S2.displayName="Navbar";const r7=Object.assign(S2,{Brand:f2,Collapse:d2,Offcanvas:v2,Text:b2,Toggle:p2});function o7(a){return Ee({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}function w2(a){return Ee({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M236,172a40,40,0,0,1-80,0V76H100V200a12,12,0,0,1-24,0V76H72a36,36,0,0,0-36,36,12,12,0,0,1-24,0A60.07,60.07,0,0,1,72,52H224a12,12,0,0,1,0,24H180v96a16,16,0,0,0,32,0,12,12,0,0,1,24,0Z"},child:[]}]})(a)}const s7=b(r7)`
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
`,c7=b.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,u7=b.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,f7=b.div`
  justify-self: center;
`,d7=b.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,p7=b.button`
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
`,h7=b(Ui)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px; /* space between icon and text */
`,m7=b(w2)`
  border-radius: 5px;
  background-color: black;
  width: 35px;
  height: 30px;
  flex: 0 0 28px;
  color: white; /* keep high contrast; adjust to your brand */
  padding: 1px;
`,g7=b.div`
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
`;function x7(){const a=()=>{console.log("Toggled theme")};return u.jsx("div",{className:"topbar-wrapper",children:u.jsx(s7,{className:"shadow-sm d-lg-none",children:u.jsx(Ig,{fluid:!0,className:"px-3",children:u.jsxs(c7,{children:[u.jsx(u7,{children:u.jsxs(h7,{to:"/instalearn/","aria-label":"Go to home",children:[u.jsx("div",{children:u.jsx(m7,{"aria-hidden":"true"})}),u.jsx(g7,{children:"Learn"})]})}),u.jsx(f7,{}),u.jsx(d7,{children:u.jsx(p7,{type:"button",onClick:a,"aria-label":"Toggle",children:u.jsx(o7,{size:20})})})]})})})})}const y7=$t`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,v7=b.aside`
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
`,b7=b(Ui)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
  gap: 5px;
`,S7=b(w2)`
  border-radius: 5px;
  background-color: black;
  width: 35px;
  height: 30px;
  flex: 0 0 28px;
  color: white; /* keep high contrast; adjust to your brand */
  padding: 1px;
`,w7=b.div`
  font-size: 28px;
  font-family: "BBH Sans Hegarty", sans-serif;
  font-weight: 700;
  color: black;
  letter-spacing: 0.2px;
  line-height: 1;
`,j7=b.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,E7=$n`
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
    animation: ${y7} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,of=b(Ui)`
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

  ${a=>a.$active&&E7}
`,C7=b.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,sf=b.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,cf=b.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function T7(){const{pathname:a}=Ln(),l=[{to:"/instalearn/",icon:u.jsx(Ag,{}),label:"Home"},{to:"/instalearn/teacher",icon:u.jsx(cs,{}),label:"Teacher"},{to:"/instalearn/library",icon:u.jsx(Rg,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:u.jsx(_5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:u.jsx(Mg,{}),label:"Profile"}];return u.jsxs(v7,{children:[u.jsxs(b7,{to:"/instalearn/",children:[u.jsx("div",{children:u.jsx(S7,{"aria-hidden":"true"})}),u.jsx(w7,{children:"Learn"})]}),u.jsxs(j7,{children:[l.slice(0,-1).map(s=>u.jsxs(of,{to:s.to,$active:a===s.to,children:[u.jsx(sf,{children:s.icon}),u.jsx(cf,{children:s.label}),s.hasNotification]},s.to)),u.jsxs(of,{to:l[l.length-1].to,$active:a===l[l.length-1].to,children:[u.jsx(sf,{children:l[l.length-1].icon}),u.jsx(cf,{children:l[l.length-1].label})]})]}),u.jsx(C7,{children:u.jsxs(of,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[u.jsx(sf,{children:u.jsx(D5,{})}),u.jsx(cf,{children:"More"})]})})]})}const z7=b.div`
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
`,R7=b.div`
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
`,j2=b.div`
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
`,A7=b.div`
  position: relative;
  flex-shrink: 0;
`,M7=b.div`
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
  
  ${j2}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,O7=b.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,k7=b.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,N7=b.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_7=b.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,D7=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,$7=b.div`
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
`,B7=b.button`
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
`,L7=b.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,E2=b.div`
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
`,U7=b.div`
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
  
  ${E2}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,H7=b.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,Y7=b.div`
  flex: 1;
`,q7=b.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,G7=b.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,X7=b.span`
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
`;const V7=({sidebarWidth:a=360})=>{const l={username:"demo_user",name:"Demo User",initials:"DU"},s=[{icon:N1,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:$5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:k5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return u.jsxs(z7,{children:[u.jsx(R7,{children:u.jsxs(j2,{$width:a,children:[u.jsxs(A7,{children:[u.jsx(M7,{$width:a,children:l.initials}),u.jsx(O7,{$width:a})]}),u.jsxs(k7,{$width:a,children:[u.jsx(N7,{$width:a,children:l.username}),u.jsx(_7,{$width:a,children:l.name})]})]})}),u.jsxs(D7,{children:[u.jsxs($7,{$width:a,$iconColor:"#667eea",children:[u.jsx(N1,{}),u.jsx("span",{children:"Highlights"})]}),u.jsx(B7,{$width:a,children:"See All"})]}),u.jsx(L7,{$width:a,children:s.map((o,f)=>{const d=o.icon;return u.jsxs(E2,{$width:a,$glowColor:o.gradient,children:[u.jsx(X7,{$width:a,$bg:o.badgeBg,children:o.badge}),u.jsxs(H7,{$width:a,children:[u.jsx(U7,{$width:a,$gradient:o.gradient,children:u.jsx(d,{})}),u.jsxs(Y7,{children:[u.jsx(q7,{$width:a,children:o.title}),u.jsx(G7,{$width:a,children:o.description})]})]})]},f)})})]})};function Q7(){const{pathname:a}=Ln(),l=[["/instalearn/",u.jsx(Ag,{})],["/instalearn/teacher",u.jsx(cs,{})],["/instalearn/library",u.jsx(Rg,{})],["/instalearn/profile",u.jsx(Mg,{})]];return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsx(Ww,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:l.map(([s,o])=>u.jsx(Ui,{to:s,className:`nav-link fs-4 text-white ${a===s?"active":""}`,children:o},s))})]})}const uf="studentProfile",ht=Ug,Z7=b.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,K7=b.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`,J7=b.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`,F7=b.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`,W7=b.div` position: relative; `,I7=b.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`,P7=b.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`,e9=b.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`,t9=b.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`,Ri=b.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`,n9=b.div` flex: 1; `,a9=b.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`,i9=b.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,l9=b.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`,r9=b.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,o9=b.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `,s9=b.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`,c9=b.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,u9=b.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`,f9=b.div` position: relative; display: inline-block; `,d9=b.div`
  position: absolute; right: 0; margin-top: 0.5rem; min-width: 200px;
  background: #fff; border: 1px solid #e5e7eb; border-radius: 0.5rem;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08); z-index: 10; overflow: hidden;
`,zm=b.button`
  width: 100%; text-align: left; padding: 0.625rem 0.75rem; background: #fff; border: 0;
  font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; color: #111827;
  &:hover { background: #f9fafb; }
  &[data-danger="true"] { color: #b91c1c; }
`,p9=b.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`,h9=b.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`,m9=b.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`,g9=b.div` margin-bottom: 1.5rem; `,x9=b.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`,y9=b.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`,v9=b.div`
  position: absolute; inset: 0; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px); pointer-events: none;
`,b9=b.div`
  position: relative;
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked:a})=>a?"grayscale(0.8)":"none"};
  opacity: ${({$locked:a})=>a?.6:1};
`,S9=b.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`,w9=b.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
`,j9=b.div` display: flex; border-top: 1px solid #e5e7eb; `,Rm=b.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({$active:a})=>a?"#111827":"transparent"};
  color: ${({$active:a})=>a?"#111827":"#9ca3af"};
`,E9=b.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`,C9=b.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked:a})=>a?"blur(2px)":"none"};
  overflow: hidden;
`,T9=b.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`,z9=b.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden:a})=>a?"none":"block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`,Am=b.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`,Mm=b.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`,Om=b.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`,km=b.h3` margin: 0; font-size: 1rem; font-weight: 700; color: #111827; `,Nm=b.button` border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem; `,R9=b.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`,A9=b.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`,M9=b.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`,_m=b.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,Dm=b.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`,O9=b.div` padding: 1rem 1.25rem; display: grid; gap: 0.75rem; `,ff=b.div` display: grid; gap: 0.25rem; `,df=b.label` font-size: 0.85rem; color: #374151; `,pf=b.input`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 0.75rem; font-size: 0.95rem;
  &:focus{ outline:none; border-color:#2563eb; box-shadow:0 0 0 3px rgba(37,99,235,0.15);}
`,k9=b.div` display:flex; justify-content:flex-end; gap:0.5rem; padding:0.75rem 1.25rem 1rem; `;function N9(){v.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=ts(),[l,s]=v.useState(!1),[o,f]=v.useState("basic"),[d,h]=v.useState(!1),[y,g]=v.useState(!1),[m,S]=v.useState(!1),[w,T]=v.useState(!1),[z,A]=v.useState({name:"",email:"",avatar:""}),k=3,$=3,B=`joined:${ht?.id||ht?.name}`;v.useEffect(()=>{const W=localStorage.getItem(B)==="true";g(W);const ce=localStorage.getItem(uf);if(ce){const de=JSON.parse(ce);A({name:de.name||"",email:de.email||"",avatar:de.avatar||""})}},[]),v.useEffect(()=>{localStorage.setItem(B,y?"true":"false")},[y,B]),v.useEffect(()=>{if(!m)return;const W=ce=>{const de=ce.target;de.closest&&(de.closest('[aria-haspopup="menu"]')||de.closest('[role="menu"]'))||S(!1)};return document.addEventListener("click",W),()=>document.removeEventListener("click",W)},[m]);const q=W=>{if(!y&&W>=k){s(!0);return}W===0&&a("/instalearn/library")},Y=()=>{y||s(!0)},Z=async()=>{h(!0),await new Promise(W=>setTimeout(W,1200)),h(!1),s(!1),T(!0)},J=()=>{const W={name:z.name?.trim(),email:z.email?.trim(),avatar:z.avatar?.trim(),createdAt:new Date().toISOString(),plan:o,isPro:!0};if(!W.name||!W.email){alert("Please fill Name and Email to continue.");return}localStorage.setItem(uf,JSON.stringify(W)),g(!0),T(!1)},L=()=>{localStorage.removeItem(B),localStorage.removeItem(uf),g(!1),S(!1)},V=[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}],Q=y;return u.jsxs(Z7,{children:[u.jsxs(K7,{children:[u.jsxs(J7,{children:[u.jsxs(F7,{children:[u.jsxs(W7,{children:[u.jsx(I7,{src:ht.avatar,alt:ht.name}),!y&&u.jsxs(P7,{"aria-hidden":"true",title:"Pro library locked",children:[u.jsx(Co,{size:12})," LOCKED"]})]}),u.jsxs(e9,{children:[u.jsxs(Ri,{children:[ht.concepts," ",u.jsx("span",{children:"concepts"})]}),u.jsxs(Ri,{children:[ht.students," ",u.jsx("span",{children:"students"})]}),u.jsxs(Ri,{children:[ht.learns," ",u.jsx("span",{children:"learns"})]})]})]}),u.jsxs(n9,{children:[u.jsxs(t9,{children:[u.jsxs(Ri,{children:[ht.concepts," ",u.jsx("span",{children:"concepts"})]}),u.jsxs(Ri,{children:[ht.students," ",u.jsx("span",{children:"students"})]}),u.jsxs(Ri,{children:[ht.learns," ",u.jsx("span",{children:"learns"})]})]}),u.jsx(a9,{children:ht.name}),u.jsx(i9,{children:ht.subject}),u.jsx(l9,{children:ht.bio}),u.jsxs(r9,{children:["🎓 ",ht.experience," years experience"]}),u.jsxs(o9,{children:[u.jsx(s9,{onClick:()=>a("/user/profile"),children:"Follow"}),u.jsx(c9,{onClick:Y,disabled:d,"data-joined":y,"aria-pressed":y,"aria-label":y?"Joined":"Join",title:y?"You're in!":"Join this teacher",children:y?u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[u.jsx(Bg,{size:18})," Joined"]}):d?"Processing…":"Join"}),u.jsxs(f9,{children:[u.jsx(u9,{"aria-haspopup":"menu","aria-expanded":m,"aria-label":"More options",onClick:()=>S(W=>!W),title:"More options",children:"▼"}),m&&u.jsxs(d9,{role:"menu",children:[y&&u.jsxs(zm,{role:"menuitem","data-danger":"true",onClick:L,title:"Cancel your membership",children:[u.jsx(qu,{size:16})," Cancel membership"]}),u.jsx(zm,{role:"menuitem",onClick:()=>S(!1),children:"Close"})]})]})]}),u.jsxs(p9,{hidden:Q,role:"note","aria-live":"polite",children:[u.jsxs(h9,{children:[u.jsx(Co,{size:18})," Pro library locked — get full access to all concepts & posts."]}),u.jsx(m9,{onClick:()=>s(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),u.jsx(g9,{children:u.jsx(x9,{children:ht.bookList.map((W,ce)=>{const de=!y&&ce>=k;return u.jsxs(y9,{onClick:()=>q(ce),"aria-disabled":de,title:de?"Join to unlock":`Open ${W.title}`,children:[u.jsxs(b9,{$locked:de,children:[u.jsx(S9,{children:u.jsx(Wo,{size:24})}),!y&&de&&u.jsxs(v9,{"aria-hidden":"true",children:[u.jsx(Co,{size:14,style:{marginRight:6}})," Locked"]})]}),u.jsx(w9,{children:W.title})]},ce)})})})]}),u.jsxs(j9,{children:[u.jsx(Rm,{$active:!0,children:u.jsx(h6,{size:20})}),u.jsx(Rm,{children:u.jsx(a6,{size:20})})]}),u.jsx(E9,{"aria-label":"Teacher posts",children:Array(9).fill(null).map((W,ce)=>{const de=!y&&ce>=$;return u.jsxs(C9,{$locked:de,"aria-hidden":!1,children:[u.jsx(Wo,{size:24}),de&&u.jsxs(T9,{children:[u.jsx(Co,{size:16,style:{marginRight:6}})," Join to view"]})]},ce)})}),u.jsx(z9,{hidden:y,onClick:()=>s(!0),"aria-label":"Unlock all posts",children:"Unlock entire library"}),l&&u.jsx(Am,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:u.jsxs(Mm,{children:[u.jsxs(Om,{children:[u.jsx(km,{id:"pricing-title",children:"Choose your plan"}),u.jsx(Nm,{onClick:()=>s(!1),"aria-label":"Close pricing",children:u.jsx(qu,{size:18})})]}),u.jsx(R9,{children:V.map(W=>u.jsxs(A9,{onClick:()=>f(W.key),$active:o===W.key,"aria-pressed":o===W.key,children:[u.jsx("h4",{children:W.name}),u.jsx("strong",{children:W.price}),u.jsx("p",{children:W.desc})]},W.key))}),u.jsxs(M9,{children:[u.jsx(Dm,{onClick:()=>s(!1),children:"Not now"}),u.jsx(_m,{onClick:Z,disabled:d,children:d?"Processing payment…":"Demo Pay"})]})]})}),w&&u.jsx(Am,{role:"dialog","aria-modal":"true","aria-labelledby":"profile-form-title",children:u.jsxs(Mm,{children:[u.jsxs(Om,{children:[u.jsx(km,{id:"profile-form-title",children:"Create your student profile"}),u.jsx(Nm,{onClick:()=>T(!1),"aria-label":"Close profile form",children:u.jsx(qu,{size:18})})]}),u.jsxs(O9,{children:[u.jsxs(ff,{children:[u.jsx(df,{htmlFor:"pf-name",children:"Full Name"}),u.jsx(pf,{id:"pf-name",value:z.name,onChange:W=>A(ce=>({...ce,name:W.target.value})),placeholder:"e.g., Priya Sharma"})]}),u.jsxs(ff,{children:[u.jsx(df,{htmlFor:"pf-email",children:"Email"}),u.jsx(pf,{id:"pf-email",type:"email",value:z.email,onChange:W=>A(ce=>({...ce,email:W.target.value})),placeholder:"you@example.com"})]}),u.jsxs(ff,{children:[u.jsx(df,{htmlFor:"pf-avatar",children:"Avatar initials (optional)"}),u.jsx(pf,{id:"pf-avatar",value:z.avatar,onChange:W=>A(ce=>({...ce,avatar:W.target.value})),placeholder:"PS"})]})]}),u.jsxs(k9,{children:[u.jsx(Dm,{onClick:()=>T(!1),children:"Cancel"}),u.jsx(_m,{onClick:J,children:"Save & Finish"})]})]})})]})}const _9=b.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,D9=b.aside`
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
`,$9=b.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,B9=b.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,L9=b.aside`
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
`,U9=b.div`
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
`,H9=b.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,Y9=b.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function q9(){const[a,l]=v.useState(360),[s,o]=v.useState(!1),f=v.useRef(null),d=350,h=600,y=g=>{g.preventDefault(),o(!0),f.current={startX:g.clientX,startWidth:a}};return v.useEffect(()=>{const g=(w,T,z)=>Math.min(Math.max(w,T),z),m=w=>{if(!s||!f.current)return;const{startX:T,startWidth:z}=f.current,A=T-w.clientX,k=g(z+A,d,h);l(k)},S=()=>{s&&(o(!1),f.current=null)};return s&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",S),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",S),document.body.style.cursor="",document.body.style.userSelect=""}},[s]),u.jsxs(_9,{children:[u.jsx(D9,{children:u.jsx(T7,{})}),u.jsxs($9,{children:[u.jsxs(B9,{$sidebarWidth:a,$isResizing:s,children:[u.jsx(H9,{children:u.jsx(x7,{})}),u.jsxs(Qv,{children:[u.jsx(_a,{path:"/instalearn",element:u.jsx(w8,{})}),u.jsx(_a,{path:"/instalearn/teacher",element:u.jsx(N9,{})}),u.jsx(_a,{path:"/instalearn/library",element:u.jsx(V3,{})}),u.jsx(_a,{path:"/instalearn/notifications",element:u.jsx(cm,{})}),u.jsx(_a,{path:"/instalearn/more",element:u.jsx(cm,{})}),u.jsx(_a,{path:"/instalearn/profile",element:u.jsx(iS,{})})]})]}),u.jsxs(L9,{$width:a,$isResizing:s,children:[u.jsx(U9,{className:s?"active":"",onMouseDown:y,"aria-label":"Resize sidebar"}),u.jsx(V7,{})]})]}),u.jsx(Y9,{children:u.jsx(Q7,{})})]})}nv.createRoot(document.getElementById("root")).render(u.jsx(mb,{children:u.jsx(q9,{})}));
