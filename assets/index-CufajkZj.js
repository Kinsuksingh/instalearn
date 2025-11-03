(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function s(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(f){if(f.ep)return;f.ep=!0;const d=s(f);fetch(f.href,d)}})();function Ii(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Nu={exports:{}},Hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function tv(){if(s1)return Hi;s1=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(o,f,d){var p=null;if(d!==void 0&&(p=""+d),f.key!==void 0&&(p=""+f.key),"key"in f){d={};for(var v in f)v!=="key"&&(d[v]=f[v])}else d=f;return f=d.ref,{$$typeof:a,type:o,key:p,ref:f!==void 0?f:null,props:d}}return Hi.Fragment=i,Hi.jsx=s,Hi.jsxs=s,Hi}var u1;function nv(){return u1||(u1=1,Nu.exports=tv()),Nu.exports}var u=nv(),_u={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1;function av(){if(f1)return fe;f1=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),z=Symbol.iterator;function M(E){return E===null||typeof E!="object"?null:(E=z&&E[z]||E["@@iterator"],typeof E=="function"?E:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,B={};function L(E,Y,W){this.props=E,this.context=Y,this.refs=B,this.updater=W||R}L.prototype.isReactComponent={},L.prototype.setState=function(E,Y){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,Y,"setState")},L.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function H(){}H.prototype=L.prototype;function G(E,Y,W){this.props=E,this.context=Y,this.refs=B,this.updater=W||R}var q=G.prototype=new H;q.constructor=G,N(q,L.prototype),q.isPureReactComponent=!0;var K=Array.isArray;function D(){}var V={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function F(E,Y,W){var I=W.ref;return{$$typeof:a,type:E,key:Y,ref:I!==void 0?I:null,props:W}}function ce(E,Y){return F(E.type,Y,E.props)}function de(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function le(E){var Y={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(W){return Y[W]})}var ie=/\/+/g;function _e(E,Y){return typeof E=="object"&&E!==null&&E.key!=null?le(""+E.key):Y.toString(36)}function De(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(D,D):(E.status="pending",E.then(function(Y){E.status==="pending"&&(E.status="fulfilled",E.value=Y)},function(Y){E.status==="pending"&&(E.status="rejected",E.reason=Y)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function _(E,Y,W,I,re){var ue=typeof E;(ue==="undefined"||ue==="boolean")&&(E=null);var xe=!1;if(E===null)xe=!0;else switch(ue){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(E.$$typeof){case a:case i:xe=!0;break;case S:return xe=E._init,_(xe(E._payload),Y,W,I,re)}}if(xe)return re=re(E),xe=I===""?"."+_e(E,0):I,K(re)?(W="",xe!=null&&(W=xe.replace(ie,"$&/")+"/"),_(re,Y,W,"",function(zt){return zt})):re!=null&&(de(re)&&(re=ce(re,W+(re.key==null||E&&E.key===re.key?"":(""+re.key).replace(ie,"$&/")+"/")+xe)),Y.push(re)),1;xe=0;var qe=I===""?".":I+":";if(K(E))for(var Ee=0;Ee<E.length;Ee++)I=E[Ee],ue=qe+_e(I,Ee),xe+=_(I,Y,W,ue,re);else if(Ee=M(E),typeof Ee=="function")for(E=Ee.call(E),Ee=0;!(I=E.next()).done;)I=I.value,ue=qe+_e(I,Ee++),xe+=_(I,Y,W,ue,re);else if(ue==="object"){if(typeof E.then=="function")return _(De(E),Y,W,I,re);throw Y=String(E),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return xe}function J(E,Y,W){if(E==null)return E;var I=[],re=0;return _(E,I,"","",function(ue){return Y.call(W,ue,re++)}),I}function P(E){if(E._status===-1){var Y=E._result;Y=Y(),Y.then(function(W){(E._status===0||E._status===-1)&&(E._status=1,E._result=W)},function(W){(E._status===0||E._status===-1)&&(E._status=2,E._result=W)}),E._status===-1&&(E._status=0,E._result=Y)}if(E._status===1)return E._result.default;throw E._result}var te=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},me={map:J,forEach:function(E,Y,W){J(E,function(){Y.apply(this,arguments)},W)},count:function(E){var Y=0;return J(E,function(){Y++}),Y},toArray:function(E){return J(E,function(Y){return Y})||[]},only:function(E){if(!de(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return fe.Activity=w,fe.Children=me,fe.Component=L,fe.Fragment=s,fe.Profiler=f,fe.PureComponent=G,fe.StrictMode=o,fe.Suspense=x,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,fe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return V.H.useMemoCache(E)}},fe.cache=function(E){return function(){return E.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(E,Y,W){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var I=N({},E.props),re=E.key;if(Y!=null)for(ue in Y.key!==void 0&&(re=""+Y.key),Y)!Z.call(Y,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&Y.ref===void 0||(I[ue]=Y[ue]);var ue=arguments.length-2;if(ue===1)I.children=W;else if(1<ue){for(var xe=Array(ue),qe=0;qe<ue;qe++)xe[qe]=arguments[qe+2];I.children=xe}return F(E.type,re,I)},fe.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},fe.createElement=function(E,Y,W){var I,re={},ue=null;if(Y!=null)for(I in Y.key!==void 0&&(ue=""+Y.key),Y)Z.call(Y,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(re[I]=Y[I]);var xe=arguments.length-2;if(xe===1)re.children=W;else if(1<xe){for(var qe=Array(xe),Ee=0;Ee<xe;Ee++)qe[Ee]=arguments[Ee+2];re.children=qe}if(E&&E.defaultProps)for(I in xe=E.defaultProps,xe)re[I]===void 0&&(re[I]=xe[I]);return F(E,ue,re)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(E){return{$$typeof:v,render:E}},fe.isValidElement=de,fe.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:P}},fe.memo=function(E,Y){return{$$typeof:m,type:E,compare:Y===void 0?null:Y}},fe.startTransition=function(E){var Y=V.T,W={};V.T=W;try{var I=E(),re=V.S;re!==null&&re(W,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(D,te)}catch(ue){te(ue)}finally{Y!==null&&W.types!==null&&(Y.types=W.types),V.T=Y}},fe.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},fe.use=function(E){return V.H.use(E)},fe.useActionState=function(E,Y,W){return V.H.useActionState(E,Y,W)},fe.useCallback=function(E,Y){return V.H.useCallback(E,Y)},fe.useContext=function(E){return V.H.useContext(E)},fe.useDebugValue=function(){},fe.useDeferredValue=function(E,Y){return V.H.useDeferredValue(E,Y)},fe.useEffect=function(E,Y){return V.H.useEffect(E,Y)},fe.useEffectEvent=function(E){return V.H.useEffectEvent(E)},fe.useId=function(){return V.H.useId()},fe.useImperativeHandle=function(E,Y,W){return V.H.useImperativeHandle(E,Y,W)},fe.useInsertionEffect=function(E,Y){return V.H.useInsertionEffect(E,Y)},fe.useLayoutEffect=function(E,Y){return V.H.useLayoutEffect(E,Y)},fe.useMemo=function(E,Y){return V.H.useMemo(E,Y)},fe.useOptimistic=function(E,Y){return V.H.useOptimistic(E,Y)},fe.useReducer=function(E,Y,W){return V.H.useReducer(E,Y,W)},fe.useRef=function(E){return V.H.useRef(E)},fe.useState=function(E){return V.H.useState(E)},fe.useSyncExternalStore=function(E,Y,W){return V.H.useSyncExternalStore(E,Y,W)},fe.useTransition=function(){return V.H.useTransition()},fe.version="19.2.0",fe}var d1;function Bf(){return d1||(d1=1,_u.exports=av()),_u.exports}var y=Bf();const Be=Ii(y);var $u={exports:{}},Yi={},Du={exports:{}},Bu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1;function lv(){return h1||(h1=1,(function(a){function i(_,J){var P=_.length;_.push(J);e:for(;0<P;){var te=P-1>>>1,me=_[te];if(0<f(me,J))_[te]=J,_[P]=me,P=te;else break e}}function s(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var J=_[0],P=_.pop();if(P!==J){_[0]=P;e:for(var te=0,me=_.length,E=me>>>1;te<E;){var Y=2*(te+1)-1,W=_[Y],I=Y+1,re=_[I];if(0>f(W,P))I<me&&0>f(re,W)?(_[te]=re,_[I]=P,te=I):(_[te]=W,_[Y]=P,te=Y);else if(I<me&&0>f(re,P))_[te]=re,_[I]=P,te=I;else break e}}return J}function f(_,J){var P=_.sortIndex-J.sortIndex;return P!==0?P:_.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var p=Date,v=p.now();a.unstable_now=function(){return p.now()-v}}var x=[],m=[],S=1,w=null,z=3,M=!1,R=!1,N=!1,B=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function q(_){for(var J=s(m);J!==null;){if(J.callback===null)o(m);else if(J.startTime<=_)o(m),J.sortIndex=J.expirationTime,i(x,J);else break;J=s(m)}}function K(_){if(N=!1,q(_),!R)if(s(x)!==null)R=!0,D||(D=!0,le());else{var J=s(m);J!==null&&De(K,J.startTime-_)}}var D=!1,V=-1,Z=5,F=-1;function ce(){return B?!0:!(a.unstable_now()-F<Z)}function de(){if(B=!1,D){var _=a.unstable_now();F=_;var J=!0;try{e:{R=!1,N&&(N=!1,H(V),V=-1),M=!0;var P=z;try{t:{for(q(_),w=s(x);w!==null&&!(w.expirationTime>_&&ce());){var te=w.callback;if(typeof te=="function"){w.callback=null,z=w.priorityLevel;var me=te(w.expirationTime<=_);if(_=a.unstable_now(),typeof me=="function"){w.callback=me,q(_),J=!0;break t}w===s(x)&&o(x),q(_)}else o(x);w=s(x)}if(w!==null)J=!0;else{var E=s(m);E!==null&&De(K,E.startTime-_),J=!1}}break e}finally{w=null,z=P,M=!1}J=void 0}}finally{J?le():D=!1}}}var le;if(typeof G=="function")le=function(){G(de)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,_e=ie.port2;ie.port1.onmessage=de,le=function(){_e.postMessage(null)}}else le=function(){L(de,0)};function De(_,J){V=L(function(){_(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return z},a.unstable_next=function(_){switch(z){case 1:case 2:case 3:var J=3;break;default:J=z}var P=z;z=J;try{return _()}finally{z=P}},a.unstable_requestPaint=function(){B=!0},a.unstable_runWithPriority=function(_,J){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var P=z;z=_;try{return J()}finally{z=P}},a.unstable_scheduleCallback=function(_,J,P){var te=a.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?te+P:te):P=te,_){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=P+me,_={id:S++,callback:J,priorityLevel:_,startTime:P,expirationTime:me,sortIndex:-1},P>te?(_.sortIndex=P,i(m,_),s(x)===null&&_===s(m)&&(N?(H(V),V=-1):N=!0,De(K,P-te))):(_.sortIndex=me,i(x,_),R||M||(R=!0,D||(D=!0,le()))),_},a.unstable_shouldYield=ce,a.unstable_wrapCallback=function(_){var J=z;return function(){var P=z;z=J;try{return _.apply(this,arguments)}finally{z=P}}}})(Bu)),Bu}var p1;function iv(){return p1||(p1=1,Du.exports=lv()),Du.exports}var Lu={exports:{}},dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1;function rv(){if(m1)return dt;m1=1;var a=Bf();function i(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(x,m,S){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:x,containerInfo:m,implementation:S}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,dt.createPortal=function(x,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return d(x,m,null,S)},dt.flushSync=function(x){var m=p.T,S=o.p;try{if(p.T=null,o.p=2,x)return x()}finally{p.T=m,o.p=S,o.d.f()}},dt.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(x,m))},dt.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},dt.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var S=m.as,w=v(S,m.crossOrigin),z=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?o.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:z,fetchPriority:M}):S==="script"&&o.d.X(x,{crossOrigin:w,integrity:z,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},dt.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=v(m.as,m.crossOrigin);o.d.M(x,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(x)},dt.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,w=v(S,m.crossOrigin);o.d.L(x,S,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},dt.preloadModule=function(x,m){if(typeof x=="string")if(m){var S=v(m.as,m.crossOrigin);o.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(x)},dt.requestFormReset=function(x){o.d.r(x)},dt.unstable_batchedUpdates=function(x,m){return x(m)},dt.useFormState=function(x,m,S){return p.H.useFormState(x,m,S)},dt.useFormStatus=function(){return p.H.useHostTransitionStatus()},dt.version="19.2.0",dt}var g1;function Km(){if(g1)return Lu.exports;g1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Lu.exports=rv(),Lu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x1;function ov(){if(x1)return Yi;x1=1;var a=iv(),i=Bf(),s=Km();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(d(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return x(r),e;if(c===l)return x(r),t;c=c.sibling}throw Error(o(188))}if(n.return!==l.return)n=r,l=c;else{for(var h=!1,g=r.child;g;){if(g===n){h=!0,n=r,l=c;break}if(g===l){h=!0,l=r,n=c;break}g=g.sibling}if(!h){for(g=c.child;g;){if(g===n){h=!0,n=c,l=r;break}if(g===l){h=!0,l=c,n=r;break}g=g.sibling}if(!h)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,z=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),G=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=de&&e[de]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function _e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case L:return"Profiler";case B:return"StrictMode";case K:return"Suspense";case D:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case G:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:_e(e.type)||"Memo";case Z:t=e._payload,e=e._init;try{return _e(e(t))}catch{}}return null}var De=Array.isArray,_=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},te=[],me=-1;function E(e){return{current:e}}function Y(e){0>me||(e.current=te[me],te[me]=null,me--)}function W(e,t){me++,te[me]=e.current,e.current=t}var I=E(null),re=E(null),ue=E(null),xe=E(null);function qe(e,t){switch(W(ue,t),W(re,e),W(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?kp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=kp(t),e=Np(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(I),W(I,e)}function Ee(){Y(I),Y(re),Y(ue)}function zt(e){e.memoizedState!==null&&W(xe,e);var t=I.current,n=Np(t,e.type);t!==n&&(W(re,e),W(I,n))}function Ft(e){re.current===e&&(Y(I),Y(re)),xe.current===e&&(Y(xe),Di._currentValue=P)}var pt,Ha;function Lt(e){if(pt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pt=t&&t[1]||"",Ha=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pt+e+Ha}var Le=!1;function Ya(e,t){if(!e||Le)return"";Le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch($){var k=$}Reflect.construct(e,[],Q)}else{try{Q.call()}catch($){k=$}e.call(Q.prototype)}}else{try{throw Error()}catch($){k=$}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch($){if($&&k&&typeof $.stack=="string")return[$.stack,k.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),h=c[0],g=c[1];if(h&&g){var j=h.split(`
`),O=g.split(`
`);for(r=l=0;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(l===j.length||r===O.length)for(l=j.length-1,r=O.length-1;1<=l&&0<=r&&j[l]!==O[r];)r--;for(;1<=l&&0<=r;l--,r--)if(j[l]!==O[r]){if(l!==1||r!==1)do if(l--,r--,0>r||j[l]!==O[r]){var U=`
`+j[l].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=l&&0<=r);break}}}finally{Le=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Lt(n):""}function Kl(e,t){switch(e.tag){case 26:case 27:case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return e.child!==t&&t!==null?Lt("Suspense Fallback"):Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return Ya(e.type,!1);case 11:return Ya(e.type.render,!1);case 1:return Ya(e.type,!0);case 31:return Lt("Activity");default:return""}}function sd(e){try{var t="",n=null;do t+=Kl(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var yc=Object.prototype.hasOwnProperty,vc=a.unstable_scheduleCallback,bc=a.unstable_cancelCallback,N2=a.unstable_shouldYield,_2=a.unstable_requestPaint,Tt=a.unstable_now,$2=a.unstable_getCurrentPriorityLevel,ud=a.unstable_ImmediatePriority,fd=a.unstable_UserBlockingPriority,ar=a.unstable_NormalPriority,D2=a.unstable_LowPriority,dd=a.unstable_IdlePriority,B2=a.log,L2=a.unstable_setDisableYieldValue,Zl=null,Mt=null;function Un(e){if(typeof B2=="function"&&L2(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(Zl,e)}catch{}}var Rt=Math.clz32?Math.clz32:Y2,U2=Math.log,H2=Math.LN2;function Y2(e){return e>>>=0,e===0?32:31-(U2(e)/H2|0)|0}var lr=256,ir=262144,rr=4194304;function ya(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function or(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~c,l!==0?r=ya(l):(h&=g,h!==0?r=ya(h):n||(n=g&~e,n!==0&&(r=ya(n))))):(g=l&~c,g!==0?r=ya(g):h!==0?r=ya(h):n||(n=l&~e,n!==0&&(r=ya(n)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:r}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function G2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hd(){var e=rr;return rr<<=1,(rr&62914560)===0&&(rr=4194304),e}function Sc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function q2(e,t,n,l,r,c){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,j=e.expirationTimes,O=e.hiddenUpdates;for(n=h&~n;0<n;){var U=31-Rt(n),Q=1<<U;g[U]=0,j[U]=-1;var k=O[U];if(k!==null)for(O[U]=null,U=0;U<k.length;U++){var $=k[U];$!==null&&($.lane&=-536870913)}n&=~Q}l!==0&&pd(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(h&~t))}function pd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Rt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function md(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Rt(n),r=1<<l;r&t|e[l]&t&&(e[l]|=t),n&=~r}}function gd(e,t){var n=t&-t;return n=(n&42)!==0?1:wc(n),(n&(e.suspendedLanes|t))!==0?0:n}function wc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xd(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:n1(e.type))}function yd(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var Hn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Hn,xt="__reactProps$"+Hn,Ga="__reactContainer$"+Hn,Ec="__reactEvents$"+Hn,X2="__reactListeners$"+Hn,V2="__reactHandles$"+Hn,vd="__reactResources$"+Hn,Wl="__reactMarker$"+Hn;function Cc(e){delete e[ot],delete e[xt],delete e[Ec],delete e[X2],delete e[V2]}function qa(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ga]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hp(e);e!==null;){if(n=e[ot])return n;e=Hp(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){if(e=e[ot]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Il(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Va(e){var t=e[vd];return t||(t=e[vd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function at(e){e[Wl]=!0}var bd=new Set,Sd={};function va(e,t){Qa(e,t),Qa(e+"Capture",t)}function Qa(e,t){for(Sd[e]=t,e=0;e<t.length;e++)bd.add(t[e])}var Q2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wd={},jd={};function K2(e){return yc.call(jd,e)?!0:yc.call(wd,e)?!1:Q2.test(e)?jd[e]=!0:(wd[e]=!0,!1)}function cr(e,t,n){if(K2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function sr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Z2(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(h){n=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zc(e){if(!e._valueTracker){var t=Ed(e)?"checked":"value";e._valueTracker=Z2(e,t,""+e[t])}}function Cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Ed(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var J2=/[\n"\\]/g;function Ht(e){return e.replace(J2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Tc(e,t,n,l,r,c,h,g){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?Mc(e,h,Ut(t)):n!=null?Mc(e,h,Ut(n)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Ut(g):e.removeAttribute("name")}function zd(e,t,n,l,r,c,h,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){zc(e);return}n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),zc(e)}function Mc(e,t,n){t==="number"&&ur(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ka(e,t,n,l){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Td(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function Md(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(De(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),zc(e)}function Za(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var F2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rd(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||F2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ad(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&n[r]!==l&&Rd(e,r,l)}else for(var c in t)t.hasOwnProperty(c)&&Rd(e,c,t[c])}function Rc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fr(e){return I2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var Ac=null;function Oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Fa=null;function Od(e){var t=Xa(e);if(t&&(e=t.stateNode)){var n=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Tc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var r=l[xt]||null;if(!r)throw Error(o(90));Tc(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Cd(l)}break e;case"textarea":Td(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ka(e,!!n.multiple,t,!1)}}}var kc=!1;function kd(e,t,n){if(kc)return e(t,n);kc=!0;try{var l=e(t);return l}finally{if(kc=!1,(Ja!==null||Fa!==null)&&(Ir(),Ja&&(t=Ja,e=Fa,Fa=Ja=null,Od(t),e)))for(t=0;t<e.length;t++)Od(e[t])}}function Pl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[xt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nc=!1;if(hn)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{Nc=!1}var Yn=null,_c=null,dr=null;function Nd(){if(dr)return dr;var e,t=_c,n=t.length,l,r="value"in Yn?Yn.value:Yn.textContent,c=r.length;for(e=0;e<n&&t[e]===r[e];e++);var h=n-e;for(l=1;l<=h&&t[n-l]===r[c-l];l++);return dr=r.slice(e,1<l?1-l:void 0)}function hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pr(){return!0}function _d(){return!1}function yt(e){function t(n,l,r,c,h){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?pr:_d,this.isPropagationStopped=_d,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mr=yt(ba),ti=w({},ba,{view:0,detail:0}),P2=yt(ti),$c,Dc,ni,gr=w({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?($c=e.screenX-ni.screenX,Dc=e.screenY-ni.screenY):Dc=$c=0,ni=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:Dc}}),$d=yt(gr),ex=w({},gr,{dataTransfer:0}),tx=yt(ex),nx=w({},ti,{relatedTarget:0}),Bc=yt(nx),ax=w({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),lx=yt(ax),ix=w({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rx=yt(ix),ox=w({},ba,{data:0}),Dd=yt(ox),cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ux[e])?!!t[e]:!1}function Lc(){return fx}var dx=w({},ti,{key:function(e){if(e.key){var t=cx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(e){return e.type==="keypress"?hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hx=yt(dx),px=w({},gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=yt(px),mx=w({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),gx=yt(mx),xx=w({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),yx=yt(xx),vx=w({},gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=yt(vx),Sx=w({},ba,{newState:0,oldState:0}),wx=yt(Sx),jx=[9,13,27,32],Uc=hn&&"CompositionEvent"in window,ai=null;hn&&"documentMode"in document&&(ai=document.documentMode);var Ex=hn&&"TextEvent"in window&&!ai,Ld=hn&&(!Uc||ai&&8<ai&&11>=ai),Ud=" ",Hd=!1;function Yd(e,t){switch(e){case"keyup":return jx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function Cx(e,t){switch(e){case"compositionend":return Gd(t);case"keypress":return t.which!==32?null:(Hd=!0,Ud);case"textInput":return e=t.data,e===Ud&&Hd?null:e;default:return null}}function zx(e,t){if(Wa)return e==="compositionend"||!Uc&&Yd(e,t)?(e=Nd(),dr=_c=Yn=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ld&&t.locale!=="ko"?null:t.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tx[e.type]:t==="textarea"}function Xd(e,t,n,l){Ja?Fa?Fa.push(l):Fa=[l]:Ja=l,t=io(t,"onChange"),0<t.length&&(n=new mr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var li=null,ii=null;function Mx(e){zp(e,0)}function xr(e){var t=Il(e);if(Cd(t))return e}function Vd(e,t){if(e==="change")return t}var Qd=!1;if(hn){var Hc;if(hn){var Yc="oninput"in document;if(!Yc){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),Yc=typeof Kd.oninput=="function"}Hc=Yc}else Hc=!1;Qd=Hc&&(!document.documentMode||9<document.documentMode)}function Zd(){li&&(li.detachEvent("onpropertychange",Jd),ii=li=null)}function Jd(e){if(e.propertyName==="value"&&xr(ii)){var t=[];Xd(t,ii,e,Oc(e)),kd(Mx,t)}}function Rx(e,t,n){e==="focusin"?(Zd(),li=t,ii=n,li.attachEvent("onpropertychange",Jd)):e==="focusout"&&Zd()}function Ax(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xr(ii)}function Ox(e,t){if(e==="click")return xr(t)}function kx(e,t){if(e==="input"||e==="change")return xr(t)}function Nx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Nx;function ri(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!yc.call(t,r)||!At(e[r],t[r]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wd(e,t){var n=Fd(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fd(n)}}function Id(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Id(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ur(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ur(e.document)}return t}function Gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _x=hn&&"documentMode"in document&&11>=document.documentMode,Ia=null,qc=null,oi=null,Xc=!1;function e0(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xc||Ia==null||Ia!==ur(l)||(l=Ia,"selectionStart"in l&&Gc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oi&&ri(oi,l)||(oi=l,l=io(qc,"onSelect"),0<l.length&&(t=new mr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ia)))}function Sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pa={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},Vc={},t0={};hn&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function wa(e){if(Vc[e])return Vc[e];if(!Pa[e])return e;var t=Pa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in t0)return Vc[e]=t[n];return e}var n0=wa("animationend"),a0=wa("animationiteration"),l0=wa("animationstart"),$x=wa("transitionrun"),Dx=wa("transitionstart"),Bx=wa("transitioncancel"),i0=wa("transitionend"),r0=new Map,Qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qc.push("scrollEnd");function Wt(e,t){r0.set(e,t),va(t,[e])}var yr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Yt=[],el=0,Kc=0;function vr(){for(var e=el,t=Kc=el=0;t<e;){var n=Yt[t];Yt[t++]=null;var l=Yt[t];Yt[t++]=null;var r=Yt[t];Yt[t++]=null;var c=Yt[t];if(Yt[t++]=null,l!==null&&r!==null){var h=l.pending;h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r}c!==0&&o0(n,r,c)}}function br(e,t,n,l){Yt[el++]=e,Yt[el++]=t,Yt[el++]=n,Yt[el++]=l,Kc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Zc(e,t,n,l){return br(e,t,n,l),Sr(e)}function ja(e,t){return br(e,null,null,t),Sr(e)}function o0(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,l=c.alternate,l!==null&&(l.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-Rt(n),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=n|536870912),c):null}function Sr(e){if(50<Ri)throw Ri=0,au=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tl={};function Lx(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,l){return new Lx(e,t,n,l)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function c0(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wr(e,t,n,l,r,c){var h=0;if(l=e,typeof e=="function")Jc(e)&&(h=1);else if(typeof e=="string")h=qy(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=Ot(31,n,t,r),e.elementType=F,e.lanes=c,e;case N:return Ea(n.children,r,c,t);case B:h=8,r|=24;break;case L:return e=Ot(12,n,t,r|2),e.elementType=L,e.lanes=c,e;case K:return e=Ot(13,n,t,r),e.elementType=K,e.lanes=c,e;case D:return e=Ot(19,n,t,r),e.elementType=D,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:h=10;break e;case H:h=9;break e;case q:h=11;break e;case V:h=14;break e;case Z:h=16,l=null;break e}h=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Ot(h,n,t,r),t.elementType=e,t.type=l,t.lanes=c,t}function Ea(e,t,n,l){return e=Ot(7,e,l,t),e.lanes=n,e}function Fc(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function s0(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Wc(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var u0=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var n=u0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:sd(t)},u0.set(e,t),t)}return{value:e,source:t,stack:sd(t)}}var nl=[],al=0,jr=null,ci=0,qt=[],Xt=0,Gn=null,nn=1,an="";function mn(e,t){nl[al++]=ci,nl[al++]=jr,jr=e,ci=t}function f0(e,t,n){qt[Xt++]=nn,qt[Xt++]=an,qt[Xt++]=Gn,Gn=e;var l=nn;e=an;var r=32-Rt(l)-1;l&=~(1<<r),n+=1;var c=32-Rt(t)+r;if(30<c){var h=r-r%5;c=(l&(1<<h)-1).toString(32),l>>=h,r-=h,nn=1<<32-Rt(t)+r|n<<r|l,an=c+e}else nn=1<<c|n<<r|l,an=e}function Ic(e){e.return!==null&&(mn(e,1),f0(e,1,0))}function Pc(e){for(;e===jr;)jr=nl[--al],nl[al]=null,ci=nl[--al],nl[al]=null;for(;e===Gn;)Gn=qt[--Xt],qt[Xt]=null,an=qt[--Xt],qt[Xt]=null,nn=qt[--Xt],qt[Xt]=null}function d0(e,t){qt[Xt++]=nn,qt[Xt++]=an,qt[Xt++]=Gn,nn=t.id,an=t.overflow,Gn=e}var ct=null,Ue=null,we=!1,qn=null,Vt=!1,es=Error(o(519));function Xn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw si(Gt(t,e)),es}function h0(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ot]=e,t[xt]=l,n){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(n=0;n<Oi.length;n++)ve(Oi[n],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),zd(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),Md(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Ap(t.textContent,n)?(l.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),l.onScroll!=null&&ve("scroll",t),l.onScrollEnd!=null&&ve("scrollend",t),l.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Xn(e,!0)}function p0(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:ct=ct.return}}function ll(e){if(e!==ct)return!1;if(!we)return p0(e),we=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||yu(e.type,e.memoizedProps)),n=!n),n&&Ue&&Xn(e),p0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ue=Up(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ue=Up(e)}else t===27?(t=Ue,la(e.type)?(e=ju,ju=null,Ue=e):Ue=t):Ue=ct?Kt(e.stateNode.nextSibling):null;return!0}function Ca(){Ue=ct=null,we=!1}function ts(){var e=qn;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),qn=null),e}function si(e){qn===null?qn=[e]:qn.push(e)}var ns=E(null),za=null,gn=null;function Vn(e,t,n){W(ns,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=ns.current,Y(ns)}function as(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function ls(e,t,n,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var h=r.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=r;for(var j=0;j<t.length;j++)if(g.context===t[j]){c.lanes|=n,g=c.alternate,g!==null&&(g.lanes|=n),as(c.return,n,e),l||(h=null);break e}c=g.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(o(341));h.lanes|=n,c=h.alternate,c!==null&&(c.lanes|=n),as(h,n,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function il(e,t,n,l){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var g=r.type;At(r.pendingProps.value,h.value)||(e!==null?e.push(g):e=[g])}}else if(r===xe.current){if(h=r.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Di):e=[Di])}r=r.return}e!==null&&ls(t,e,n,l),t.flags|=262144}function Er(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ta(e){za=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return m0(za,e)}function Cr(e,t){return za===null&&Ta(e),m0(e,t)}function m0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(o(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var Ux=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Hx=a.unstable_scheduleCallback,Yx=a.unstable_NormalPriority,Fe={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function is(){return{controller:new Ux,data:new Map,refCount:0}}function ui(e){e.refCount--,e.refCount===0&&Hx(Yx,function(){e.controller.abort()})}var fi=null,rs=0,rl=0,ol=null;function Gx(e,t){if(fi===null){var n=fi=[];rs=0,rl=su(),ol={status:"pending",value:void 0,then:function(l){n.push(l)}}}return rs++,t.then(g0,g0),t}function g0(){if(--rs===0&&fi!==null){ol!==null&&(ol.status="fulfilled");var e=fi;fi=null,rl=0,ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qx(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),l}var x0=_.S;_.S=function(e,t){ep=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gx(e,t),x0!==null&&x0(e,t)};var Ma=E(null);function os(){var e=Ma.current;return e!==null?e:$e.pooledCache}function zr(e,t){t===null?W(Ma,Ma.current):W(Ma,t.pool)}function y0(){var e=os();return e===null?null:{parent:Fe._currentValue,pool:e}}var cl=Error(o(460)),cs=Error(o(474)),Tr=Error(o(542)),Mr={then:function(){}};function v0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function b0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,w0(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,w0(e),e}throw Aa=t,cl}}function Ra(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Aa=n,cl):n}}var Aa=null;function S0(){if(Aa===null)throw Error(o(459));var e=Aa;return Aa=null,e}function w0(e){if(e===cl||e===Tr)throw Error(o(483))}var sl=null,di=0;function Rr(e){var t=di;return di+=1,sl===null&&(sl=[]),b0(sl,e,t)}function hi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ar(e,t){throw t.$$typeof===z?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function j0(e){function t(T,C){if(e){var A=T.deletions;A===null?(T.deletions=[C],T.flags|=16):A.push(C)}}function n(T,C){if(!e)return null;for(;C!==null;)t(T,C),C=C.sibling;return null}function l(T){for(var C=new Map;T!==null;)T.key!==null?C.set(T.key,T):C.set(T.index,T),T=T.sibling;return C}function r(T,C){return T=pn(T,C),T.index=0,T.sibling=null,T}function c(T,C,A){return T.index=A,e?(A=T.alternate,A!==null?(A=A.index,A<C?(T.flags|=67108866,C):A):(T.flags|=67108866,C)):(T.flags|=1048576,C)}function h(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function g(T,C,A,X){return C===null||C.tag!==6?(C=Fc(A,T.mode,X),C.return=T,C):(C=r(C,A),C.return=T,C)}function j(T,C,A,X){var oe=A.type;return oe===N?U(T,C,A.props.children,X,A.key):C!==null&&(C.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Z&&Ra(oe)===C.type)?(C=r(C,A.props),hi(C,A),C.return=T,C):(C=wr(A.type,A.key,A.props,null,T.mode,X),hi(C,A),C.return=T,C)}function O(T,C,A,X){return C===null||C.tag!==4||C.stateNode.containerInfo!==A.containerInfo||C.stateNode.implementation!==A.implementation?(C=Wc(A,T.mode,X),C.return=T,C):(C=r(C,A.children||[]),C.return=T,C)}function U(T,C,A,X,oe){return C===null||C.tag!==7?(C=Ea(A,T.mode,X,oe),C.return=T,C):(C=r(C,A),C.return=T,C)}function Q(T,C,A){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Fc(""+C,T.mode,A),C.return=T,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case M:return A=wr(C.type,C.key,C.props,null,T.mode,A),hi(A,C),A.return=T,A;case R:return C=Wc(C,T.mode,A),C.return=T,C;case Z:return C=Ra(C),Q(T,C,A)}if(De(C)||le(C))return C=Ea(C,T.mode,A,null),C.return=T,C;if(typeof C.then=="function")return Q(T,Rr(C),A);if(C.$$typeof===G)return Q(T,Cr(T,C),A);Ar(T,C)}return null}function k(T,C,A,X){var oe=C!==null?C.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return oe!==null?null:g(T,C,""+A,X);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case M:return A.key===oe?j(T,C,A,X):null;case R:return A.key===oe?O(T,C,A,X):null;case Z:return A=Ra(A),k(T,C,A,X)}if(De(A)||le(A))return oe!==null?null:U(T,C,A,X,null);if(typeof A.then=="function")return k(T,C,Rr(A),X);if(A.$$typeof===G)return k(T,C,Cr(T,A),X);Ar(T,A)}return null}function $(T,C,A,X,oe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return T=T.get(A)||null,g(C,T,""+X,oe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return T=T.get(X.key===null?A:X.key)||null,j(C,T,X,oe);case R:return T=T.get(X.key===null?A:X.key)||null,O(C,T,X,oe);case Z:return X=Ra(X),$(T,C,A,X,oe)}if(De(X)||le(X))return T=T.get(A)||null,U(C,T,X,oe,null);if(typeof X.then=="function")return $(T,C,A,Rr(X),oe);if(X.$$typeof===G)return $(T,C,A,Cr(C,X),oe);Ar(C,X)}return null}function ne(T,C,A,X){for(var oe=null,Ce=null,ae=C,pe=C=0,Se=null;ae!==null&&pe<A.length;pe++){ae.index>pe?(Se=ae,ae=null):Se=ae.sibling;var ze=k(T,ae,A[pe],X);if(ze===null){ae===null&&(ae=Se);break}e&&ae&&ze.alternate===null&&t(T,ae),C=c(ze,C,pe),Ce===null?oe=ze:Ce.sibling=ze,Ce=ze,ae=Se}if(pe===A.length)return n(T,ae),we&&mn(T,pe),oe;if(ae===null){for(;pe<A.length;pe++)ae=Q(T,A[pe],X),ae!==null&&(C=c(ae,C,pe),Ce===null?oe=ae:Ce.sibling=ae,Ce=ae);return we&&mn(T,pe),oe}for(ae=l(ae);pe<A.length;pe++)Se=$(ae,T,pe,A[pe],X),Se!==null&&(e&&Se.alternate!==null&&ae.delete(Se.key===null?pe:Se.key),C=c(Se,C,pe),Ce===null?oe=Se:Ce.sibling=Se,Ce=Se);return e&&ae.forEach(function(sa){return t(T,sa)}),we&&mn(T,pe),oe}function se(T,C,A,X){if(A==null)throw Error(o(151));for(var oe=null,Ce=null,ae=C,pe=C=0,Se=null,ze=A.next();ae!==null&&!ze.done;pe++,ze=A.next()){ae.index>pe?(Se=ae,ae=null):Se=ae.sibling;var sa=k(T,ae,ze.value,X);if(sa===null){ae===null&&(ae=Se);break}e&&ae&&sa.alternate===null&&t(T,ae),C=c(sa,C,pe),Ce===null?oe=sa:Ce.sibling=sa,Ce=sa,ae=Se}if(ze.done)return n(T,ae),we&&mn(T,pe),oe;if(ae===null){for(;!ze.done;pe++,ze=A.next())ze=Q(T,ze.value,X),ze!==null&&(C=c(ze,C,pe),Ce===null?oe=ze:Ce.sibling=ze,Ce=ze);return we&&mn(T,pe),oe}for(ae=l(ae);!ze.done;pe++,ze=A.next())ze=$(ae,T,pe,ze.value,X),ze!==null&&(e&&ze.alternate!==null&&ae.delete(ze.key===null?pe:ze.key),C=c(ze,C,pe),Ce===null?oe=ze:Ce.sibling=ze,Ce=ze);return e&&ae.forEach(function(ev){return t(T,ev)}),we&&mn(T,pe),oe}function Ne(T,C,A,X){if(typeof A=="object"&&A!==null&&A.type===N&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case M:e:{for(var oe=A.key;C!==null;){if(C.key===oe){if(oe=A.type,oe===N){if(C.tag===7){n(T,C.sibling),X=r(C,A.props.children),X.return=T,T=X;break e}}else if(C.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Z&&Ra(oe)===C.type){n(T,C.sibling),X=r(C,A.props),hi(X,A),X.return=T,T=X;break e}n(T,C);break}else t(T,C);C=C.sibling}A.type===N?(X=Ea(A.props.children,T.mode,X,A.key),X.return=T,T=X):(X=wr(A.type,A.key,A.props,null,T.mode,X),hi(X,A),X.return=T,T=X)}return h(T);case R:e:{for(oe=A.key;C!==null;){if(C.key===oe)if(C.tag===4&&C.stateNode.containerInfo===A.containerInfo&&C.stateNode.implementation===A.implementation){n(T,C.sibling),X=r(C,A.children||[]),X.return=T,T=X;break e}else{n(T,C);break}else t(T,C);C=C.sibling}X=Wc(A,T.mode,X),X.return=T,T=X}return h(T);case Z:return A=Ra(A),Ne(T,C,A,X)}if(De(A))return ne(T,C,A,X);if(le(A)){if(oe=le(A),typeof oe!="function")throw Error(o(150));return A=oe.call(A),se(T,C,A,X)}if(typeof A.then=="function")return Ne(T,C,Rr(A),X);if(A.$$typeof===G)return Ne(T,C,Cr(T,A),X);Ar(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,C!==null&&C.tag===6?(n(T,C.sibling),X=r(C,A),X.return=T,T=X):(n(T,C),X=Fc(A,T.mode,X),X.return=T,T=X),h(T)):n(T,C)}return function(T,C,A,X){try{di=0;var oe=Ne(T,C,A,X);return sl=null,oe}catch(ae){if(ae===cl||ae===Tr)throw ae;var Ce=Ot(29,ae,null,T.mode);return Ce.lanes=X,Ce.return=T,Ce}finally{}}}var Oa=j0(!0),E0=j0(!1),Qn=!1;function ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Te&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=Sr(e),o0(e,null,n),t}return br(e,l,t,n),Sr(e)}function pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,md(e,n)}}function fs(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=h:c=c.next=h,n=n.next}while(n!==null);c===null?r=c=t:c=c.next=t}else r=c=t;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ds=!1;function mi(){if(ds){var e=ol;if(e!==null)throw e}}function gi(e,t,n,l){ds=!1;var r=e.updateQueue;Qn=!1;var c=r.firstBaseUpdate,h=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var j=g,O=j.next;j.next=null,h===null?c=O:h.next=O,h=j;var U=e.alternate;U!==null&&(U=U.updateQueue,g=U.lastBaseUpdate,g!==h&&(g===null?U.firstBaseUpdate=O:g.next=O,U.lastBaseUpdate=j))}if(c!==null){var Q=r.baseState;h=0,U=O=j=null,g=c;do{var k=g.lane&-536870913,$=k!==g.lane;if($?(be&k)===k:(l&k)===k){k!==0&&k===rl&&(ds=!0),U!==null&&(U=U.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ne=e,se=g;k=t;var Ne=n;switch(se.tag){case 1:if(ne=se.payload,typeof ne=="function"){Q=ne.call(Ne,Q,k);break e}Q=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=se.payload,k=typeof ne=="function"?ne.call(Ne,Q,k):ne,k==null)break e;Q=w({},Q,k);break e;case 2:Qn=!0}}k=g.callback,k!==null&&(e.flags|=64,$&&(e.flags|=8192),$=r.callbacks,$===null?r.callbacks=[k]:$.push(k))}else $={lane:k,tag:g.tag,payload:g.payload,callback:g.callback,next:null},U===null?(O=U=$,j=Q):U=U.next=$,h|=k;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;$=g,g=$.next,$.next=null,r.lastBaseUpdate=$,r.shared.pending=null}}while(!0);U===null&&(j=Q),r.baseState=j,r.firstBaseUpdate=O,r.lastBaseUpdate=U,c===null&&(r.shared.lanes=0),Pn|=h,e.lanes=h,e.memoizedState=Q}}function C0(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function z0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)C0(n[e],t)}var ul=E(null),Or=E(0);function T0(e,t){e=zn,W(Or,e),W(ul,t),zn=e|t.baseLanes}function hs(){W(Or,zn),W(ul,ul.current)}function ps(){zn=Or.current,Y(ul),Y(Or)}var kt=E(null),Qt=null;function Jn(e){var t=e.alternate;W(Ze,Ze.current&1),W(kt,e),Qt===null&&(t===null||ul.current!==null||t.memoizedState!==null)&&(Qt=e)}function ms(e){W(Ze,Ze.current),W(kt,e),Qt===null&&(Qt=e)}function M0(e){e.tag===22?(W(Ze,Ze.current),W(kt,e),Qt===null&&(Qt=e)):Fn()}function Fn(){W(Ze,Ze.current),W(kt,kt.current)}function Nt(e){Y(kt),Qt===e&&(Qt=null),Y(Ze)}var Ze=E(0);function kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Su(n)||wu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yn=0,he=null,Oe=null,We=null,Nr=!1,fl=!1,ka=!1,_r=0,xi=0,dl=null,Xx=0;function Ve(){throw Error(o(321))}function gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function xs(e,t,n,l,r,c){return yn=c,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?fh:ks,ka=!1,c=n(l,r),ka=!1,fl&&(c=A0(t,n,l,r)),R0(e),c}function R0(e){_.H=bi;var t=Oe!==null&&Oe.next!==null;if(yn=0,We=Oe=he=null,Nr=!1,xi=0,dl=null,t)throw Error(o(300));e===null||Ie||(e=e.dependencies,e!==null&&Er(e)&&(Ie=!0))}function A0(e,t,n,l){he=e;var r=0;do{if(fl&&(dl=null),xi=0,fl=!1,25<=r)throw Error(o(301));if(r+=1,We=Oe=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_.H=dh,c=t(n,l)}while(fl);return c}function Vx(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?yi(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(he.flags|=1024),t}function ys(){var e=_r!==0;return _r=0,e}function vs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bs(e){if(Nr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Nr=!1}yn=0,We=Oe=he=null,fl=!1,xi=_r=0,dl=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?he.memoizedState=We=e:We=We.next=e,We}function Je(){if(Oe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=We===null?he.memoizedState:We.next;if(t!==null)We=t,Oe=e;else{if(e===null)throw he.alternate===null?Error(o(467)):Error(o(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},We===null?he.memoizedState=We=e:We=We.next=e}return We}function $r(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yi(e){var t=xi;return xi+=1,dl===null&&(dl=[]),e=b0(dl,e,t),t=he,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?fh:ks),e}function Dr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yi(e);if(e.$$typeof===G)return st(e)}throw Error(o(438,String(e)))}function Ss(e){var t=null,n=he.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=he.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=$r(),he.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=ce;return t.index++,n}function vn(e,t){return typeof t=="function"?t(e):t}function Br(e){var t=Je();return ws(t,Oe,e)}function ws(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var h=r.next;r.next=c.next,c.next=h}t.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var g=h=null,j=null,O=t,U=!1;do{var Q=O.lane&-536870913;if(Q!==O.lane?(be&Q)===Q:(yn&Q)===Q){var k=O.revertLane;if(k===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),Q===rl&&(U=!0);else if((yn&k)===k){O=O.next,k===rl&&(U=!0);continue}else Q={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},j===null?(g=j=Q,h=c):j=j.next=Q,he.lanes|=k,Pn|=k;Q=O.action,ka&&n(c,Q),c=O.hasEagerState?O.eagerState:n(c,Q)}else k={lane:Q,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},j===null?(g=j=k,h=c):j=j.next=k,he.lanes|=Q,Pn|=Q;O=O.next}while(O!==null&&O!==t);if(j===null?h=c:j.next=g,!At(c,e.memoizedState)&&(Ie=!0,U&&(n=ol,n!==null)))throw n;e.memoizedState=c,e.baseState=h,e.baseQueue=j,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function js(e){var t=Je(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,c=t.memoizedState;if(r!==null){n.pending=null;var h=r=r.next;do c=e(c,h.action),h=h.next;while(h!==r);At(c,t.memoizedState)||(Ie=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,l]}function O0(e,t,n){var l=he,r=Je(),c=we;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var h=!At((Oe||r).memoizedState,n);if(h&&(r.memoizedState=n,Ie=!0),r=r.queue,zs(_0.bind(null,l,r,e),[e]),r.getSnapshot!==t||h||We!==null&&We.memoizedState.tag&1){if(l.flags|=2048,hl(9,{destroy:void 0},N0.bind(null,l,r,n,t),null),$e===null)throw Error(o(349));c||(yn&127)!==0||k0(l,t,n)}return n}function k0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t=$r(),he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function N0(e,t,n,l){t.value=n,t.getSnapshot=l,$0(t)&&D0(e)}function _0(e,t,n){return n(function(){$0(t)&&D0(e)})}function $0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function D0(e){var t=ja(e,2);t!==null&&jt(t,e,2)}function Es(e){var t=mt();if(typeof e=="function"){var n=e;if(e=n(),ka){Un(!0);try{n()}finally{Un(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},t}function B0(e,t,n,l){return e.baseState=n,ws(e,Oe,typeof l=="function"?l:vn)}function Qx(e,t,n,l,r){if(Hr(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};_.T!==null?n(!0):c.isTransition=!1,l(c),n=t.pending,n===null?(c.next=t.pending=c,L0(t,c)):(c.next=n.next,t.pending=n.next=c)}}function L0(e,t){var n=t.action,l=t.payload,r=e.state;if(t.isTransition){var c=_.T,h={};_.T=h;try{var g=n(r,l),j=_.S;j!==null&&j(h,g),U0(e,t,g)}catch(O){Cs(e,t,O)}finally{c!==null&&h.types!==null&&(c.types=h.types),_.T=c}}else try{c=n(r,l),U0(e,t,c)}catch(O){Cs(e,t,O)}}function U0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){H0(e,t,l)},function(l){return Cs(e,t,l)}):H0(e,t,n)}function H0(e,t,n){t.status="fulfilled",t.value=n,Y0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,L0(e,n)))}function Cs(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Y0(t),t=t.next;while(t!==l)}e.action=null}function Y0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function G0(e,t){return t}function q0(e,t){if(we){var n=$e.formState;if(n!==null){e:{var l=he;if(we){if(Ue){t:{for(var r=Ue,c=Vt;r.nodeType!==8;){if(!c){r=null;break t}if(r=Kt(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){Ue=Kt(r.nextSibling),l=r.data==="F!";break e}}Xn(l)}l=!1}l&&(t=n[0])}}return n=mt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:G0,lastRenderedState:t},n.queue=l,n=ch.bind(null,he,l),l.dispatch=n,l=Es(!1),c=Os.bind(null,he,!1,l.queue),l=mt(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,n=Qx.bind(null,he,r,c,n),r.dispatch=n,l.memoizedState=e,[t,n,!1]}function X0(e){var t=Je();return V0(t,Oe,e)}function V0(e,t,n){if(t=ws(e,t,G0)[0],e=Br(vn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=yi(t)}catch(h){throw h===cl?Tr:h}else l=t;t=Je();var r=t.queue,c=r.dispatch;return n!==t.memoizedState&&(he.flags|=2048,hl(9,{destroy:void 0},Kx.bind(null,r,n),null)),[l,c,e]}function Kx(e,t){e.action=t}function Q0(e){var t=Je(),n=Oe;if(n!==null)return V0(t,n,e);Je(),t=t.memoizedState,n=Je();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function hl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=he.updateQueue,t===null&&(t=$r(),he.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function K0(){return Je().memoizedState}function Lr(e,t,n,l){var r=mt();he.flags|=e,r.memoizedState=hl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Ur(e,t,n,l){var r=Je();l=l===void 0?null:l;var c=r.memoizedState.inst;Oe!==null&&l!==null&&gs(l,Oe.memoizedState.deps)?r.memoizedState=hl(t,c,n,l):(he.flags|=e,r.memoizedState=hl(1|t,c,n,l))}function Z0(e,t){Lr(8390656,8,e,t)}function zs(e,t){Ur(2048,8,e,t)}function Zx(e){he.flags|=4;var t=he.updateQueue;if(t===null)t=$r(),he.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function J0(e){var t=Je().memoizedState;return Zx({ref:t,nextImpl:e}),function(){if((Te&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function F0(e,t){return Ur(4,2,e,t)}function W0(e,t){return Ur(4,4,e,t)}function I0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function P0(e,t,n){n=n!=null?n.concat([e]):null,Ur(4,4,I0.bind(null,t,e),n)}function Ts(){}function eh(e,t){var n=Je();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&gs(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function th(e,t){var n=Je();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&gs(t,l[1]))return l[0];if(l=e(),ka){Un(!0);try{e()}finally{Un(!1)}}return n.memoizedState=[l,t],l}function Ms(e,t,n){return n===void 0||(yn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=np(),he.lanes|=e,Pn|=e,n)}function nh(e,t,n,l){return At(n,t)?n:ul.current!==null?(e=Ms(e,n,l),At(e,t)||(Ie=!0),e):(yn&42)===0||(yn&1073741824)!==0&&(be&261930)===0?(Ie=!0,e.memoizedState=n):(e=np(),he.lanes|=e,Pn|=e,t)}function ah(e,t,n,l,r){var c=J.p;J.p=c!==0&&8>c?c:8;var h=_.T,g={};_.T=g,Os(e,!1,t,n);try{var j=r(),O=_.S;if(O!==null&&O(g,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var U=qx(j,l);vi(e,t,U,Dt(e))}else vi(e,t,l,Dt(e))}catch(Q){vi(e,t,{then:function(){},status:"rejected",reason:Q},Dt())}finally{J.p=c,h!==null&&g.types!==null&&(h.types=g.types),_.T=h}}function Jx(){}function Rs(e,t,n,l){if(e.tag!==5)throw Error(o(476));var r=lh(e).queue;ah(e,r,t,P,n===null?Jx:function(){return ih(e),n(l)})}function lh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ih(e){var t=lh(e);t.next===null&&(t=e.alternate.memoizedState),vi(e,t.next.queue,{},Dt())}function As(){return st(Di)}function rh(){return Je().memoizedState}function oh(){return Je().memoizedState}function Fx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Dt();e=Kn(n);var l=Zn(t,e,n);l!==null&&(jt(l,t,n),pi(l,t,n)),t={cache:is()},e.payload=t;return}t=t.return}}function Wx(e,t,n){var l=Dt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hr(e)?sh(t,n):(n=Zc(e,t,n,l),n!==null&&(jt(n,e,l),uh(n,t,l)))}function ch(e,t,n){var l=Dt();vi(e,t,n,l)}function vi(e,t,n,l){var r={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hr(e))sh(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,g=c(h,n);if(r.hasEagerState=!0,r.eagerState=g,At(g,h))return br(e,t,r,0),$e===null&&vr(),!1}catch{}finally{}if(n=Zc(e,t,r,l),n!==null)return jt(n,e,l),uh(n,t,l),!0}return!1}function Os(e,t,n,l){if(l={lane:2,revertLane:su(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hr(e)){if(t)throw Error(o(479))}else t=Zc(e,n,l,2),t!==null&&jt(t,e,2)}function Hr(e){var t=e.alternate;return e===he||t!==null&&t===he}function sh(e,t){fl=Nr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uh(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,md(e,n)}}var bi={readContext:st,use:Dr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};bi.useEffectEvent=Ve;var fh={readContext:st,use:Dr,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Z0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Lr(4194308,4,I0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){Lr(4,2,e,t)},useMemo:function(e,t){var n=mt();t=t===void 0?null:t;var l=e();if(ka){Un(!0);try{e()}finally{Un(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=mt();if(n!==void 0){var r=n(t);if(ka){Un(!0);try{n(t)}finally{Un(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=Wx.bind(null,he,e),[l.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=Es(e);var t=e.queue,n=ch.bind(null,he,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ts,useDeferredValue:function(e,t){var n=mt();return Ms(n,e,t)},useTransition:function(){var e=Es(!1);return e=ah.bind(null,he,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=he,r=mt();if(we){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),$e===null)throw Error(o(349));(be&127)!==0||k0(l,t,n)}r.memoizedState=n;var c={value:n,getSnapshot:t};return r.queue=c,Z0(_0.bind(null,l,c,e),[e]),l.flags|=2048,hl(9,{destroy:void 0},N0.bind(null,l,c,n,t),null),n},useId:function(){var e=mt(),t=$e.identifierPrefix;if(we){var n=an,l=nn;n=(l&~(1<<32-Rt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Xx++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:As,useFormState:q0,useActionState:q0,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Os.bind(null,he,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ss,useCacheRefresh:function(){return mt().memoizedState=Fx.bind(null,he)},useEffectEvent:function(e){var t=mt(),n={impl:e};return t.memoizedState=n,function(){if((Te&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},ks={readContext:st,use:Dr,useCallback:eh,useContext:st,useEffect:zs,useImperativeHandle:P0,useInsertionEffect:F0,useLayoutEffect:W0,useMemo:th,useReducer:Br,useRef:K0,useState:function(){return Br(vn)},useDebugValue:Ts,useDeferredValue:function(e,t){var n=Je();return nh(n,Oe.memoizedState,e,t)},useTransition:function(){var e=Br(vn)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:yi(e),t]},useSyncExternalStore:O0,useId:rh,useHostTransitionStatus:As,useFormState:X0,useActionState:X0,useOptimistic:function(e,t){var n=Je();return B0(n,Oe,e,t)},useMemoCache:Ss,useCacheRefresh:oh};ks.useEffectEvent=J0;var dh={readContext:st,use:Dr,useCallback:eh,useContext:st,useEffect:zs,useImperativeHandle:P0,useInsertionEffect:F0,useLayoutEffect:W0,useMemo:th,useReducer:js,useRef:K0,useState:function(){return js(vn)},useDebugValue:Ts,useDeferredValue:function(e,t){var n=Je();return Oe===null?Ms(n,e,t):nh(n,Oe.memoizedState,e,t)},useTransition:function(){var e=js(vn)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:yi(e),t]},useSyncExternalStore:O0,useId:rh,useHostTransitionStatus:As,useFormState:Q0,useActionState:Q0,useOptimistic:function(e,t){var n=Je();return Oe!==null?B0(n,Oe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ss,useCacheRefresh:oh};dh.useEffectEvent=J0;function Ns(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _s={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Dt(),r=Kn(l);r.payload=t,n!=null&&(r.callback=n),t=Zn(e,r,l),t!==null&&(jt(t,e,l),pi(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Dt(),r=Kn(l);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Zn(e,r,l),t!==null&&(jt(t,e,l),pi(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),l=Kn(n);l.tag=2,t!=null&&(l.callback=t),t=Zn(e,l,n),t!==null&&(jt(t,e,n),pi(t,e,n))}};function hh(e,t,n,l,r,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,h):t.prototype&&t.prototype.isPureReactComponent?!ri(n,l)||!ri(r,c):!0}function ph(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&_s.enqueueReplaceState(t,t.state,null)}function Na(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function mh(e){yr(e)}function gh(e){console.error(e)}function xh(e){yr(e)}function Yr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function yh(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function $s(e,t,n){return n=Kn(n),n.tag=3,n.payload={element:null},n.callback=function(){Yr(e,t)},n}function vh(e){return e=Kn(e),e.tag=3,e}function bh(e,t,n,l){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){yh(t,n,l)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){yh(t,n,l),typeof r!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function Ix(e,t,n,l,r){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&il(t,n,r,!0),n=kt.current,n!==null){switch(n.tag){case 31:case 13:return Qt===null?Pr():n.alternate===null&&Qe===0&&(Qe=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===Mr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),ru(e,l,r)),!1;case 22:return n.flags|=65536,l===Mr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),ru(e,l,r)),!1}throw Error(o(435,n.tag))}return ru(e,l,r),Pr(),!1}if(we)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==es&&(e=Error(o(422),{cause:l}),si(Gt(e,n)))):(l!==es&&(t=Error(o(423),{cause:l}),si(Gt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Gt(l,n),r=$s(e.stateNode,l,r),fs(e,r),Qe!==4&&(Qe=2)),!1;var c=Error(o(520),{cause:l});if(c=Gt(c,n),Mi===null?Mi=[c]:Mi.push(c),Qe!==4&&(Qe=2),t===null)return!0;l=Gt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=$s(n.stateNode,l,e),fs(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ea===null||!ea.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=vh(r),bh(r,e,n,l),fs(n,r),!1}n=n.return}while(n!==null);return!1}var Ds=Error(o(461)),Ie=!1;function ut(e,t,n,l){t.child=e===null?E0(t,null,n,l):Oa(t,e.child,n,l)}function Sh(e,t,n,l,r){n=n.render;var c=t.ref;if("ref"in l){var h={};for(var g in l)g!=="ref"&&(h[g]=l[g])}else h=l;return Ta(t),l=xs(e,t,n,h,c,r),g=ys(),e!==null&&!Ie?(vs(e,t,r),bn(e,t,r)):(we&&g&&Ic(t),t.flags|=1,ut(e,t,l,r),t.child)}function wh(e,t,n,l,r){if(e===null){var c=n.type;return typeof c=="function"&&!Jc(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,jh(e,t,c,l,r)):(e=wr(n.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Xs(e,r)){var h=c.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(h,l)&&e.ref===t.ref)return bn(e,t,r)}return t.flags|=1,e=pn(c,l),e.ref=t.ref,e.return=t,t.child=e}function jh(e,t,n,l,r){if(e!==null){var c=e.memoizedProps;if(ri(c,l)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=l=c,Xs(e,r))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,bn(e,t,r)}return Bs(e,t,n,l,r)}function Eh(e,t,n,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,t.child=null;return Ch(e,t,c,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zr(t,c!==null?c.cachePool:null),c!==null?T0(t,c):hs(),M0(t);else return l=t.lanes=536870912,Ch(e,t,c!==null?c.baseLanes|n:n,n,l)}else c!==null?(zr(t,c.cachePool),T0(t,c),Fn(),t.memoizedState=null):(e!==null&&zr(t,null),hs(),Fn());return ut(e,t,r,n),t.child}function Si(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ch(e,t,n,l,r){var c=os();return c=c===null?null:{parent:Fe._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&zr(t,null),hs(),M0(t),e!==null&&il(e,t,l,!0),t.childLanes=r,null}function Gr(e,t){return t=Xr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zh(e,t,n){return Oa(t,e.child,null,n),e=Gr(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function Px(e,t,n){var l=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(we){if(l.mode==="hidden")return e=Gr(t,l),t.lanes=536870912,Si(null,e);if(ms(t),(e=Ue)?(e=Lp(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=s0(e),n.return=t,t.child=n,ct=t,Ue=null)):e=null,e===null)throw Xn(t);return t.lanes=536870912,null}return Gr(t,l)}var c=e.memoizedState;if(c!==null){var h=c.dehydrated;if(ms(t),r)if(t.flags&256)t.flags&=-257,t=zh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ie||il(e,t,n,!1),r=(n&e.childLanes)!==0,Ie||r){if(l=$e,l!==null&&(h=gd(l,n),h!==0&&h!==c.retryLane))throw c.retryLane=h,ja(e,h),jt(l,e,h),Ds;Pr(),t=zh(e,t,n)}else e=c.treeContext,Ue=Kt(h.nextSibling),ct=t,we=!0,qn=null,Vt=!1,e!==null&&d0(t,e),t=Gr(t,l),t.flags|=4096;return t}return e=pn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Bs(e,t,n,l,r){return Ta(t),n=xs(e,t,n,l,void 0,r),l=ys(),e!==null&&!Ie?(vs(e,t,r),bn(e,t,r)):(we&&l&&Ic(t),t.flags|=1,ut(e,t,n,r),t.child)}function Th(e,t,n,l,r,c){return Ta(t),t.updateQueue=null,n=A0(t,l,n,r),R0(e),l=ys(),e!==null&&!Ie?(vs(e,t,c),bn(e,t,c)):(we&&l&&Ic(t),t.flags|=1,ut(e,t,n,c),t.child)}function Mh(e,t,n,l,r){if(Ta(t),t.stateNode===null){var c=tl,h=n.contextType;typeof h=="object"&&h!==null&&(c=st(h)),c=new n(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=_s,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},ss(t),h=n.contextType,c.context=typeof h=="object"&&h!==null?st(h):tl,c.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Ns(t,n,h,l),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&_s.enqueueReplaceState(c,c.state,null),gi(t,l,c,r),mi(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var g=t.memoizedProps,j=Na(n,g);c.props=j;var O=c.context,U=n.contextType;h=tl,typeof U=="object"&&U!==null&&(h=st(U));var Q=n.getDerivedStateFromProps;U=typeof Q=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,U||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||O!==h)&&ph(t,c,l,h),Qn=!1;var k=t.memoizedState;c.state=k,gi(t,l,c,r),mi(),O=t.memoizedState,g||k!==O||Qn?(typeof Q=="function"&&(Ns(t,n,Q,l),O=t.memoizedState),(j=Qn||hh(t,n,j,l,k,O,h))?(U||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=O),c.props=l,c.state=O,c.context=h,l=j):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,us(e,t),h=t.memoizedProps,U=Na(n,h),c.props=U,Q=t.pendingProps,k=c.context,O=n.contextType,j=tl,typeof O=="object"&&O!==null&&(j=st(O)),g=n.getDerivedStateFromProps,(O=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==Q||k!==j)&&ph(t,c,l,j),Qn=!1,k=t.memoizedState,c.state=k,gi(t,l,c,r),mi();var $=t.memoizedState;h!==Q||k!==$||Qn||e!==null&&e.dependencies!==null&&Er(e.dependencies)?(typeof g=="function"&&(Ns(t,n,g,l),$=t.memoizedState),(U=Qn||hh(t,n,U,l,k,$,j)||e!==null&&e.dependencies!==null&&Er(e.dependencies))?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,$,j),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,$,j)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=$),c.props=l,c.state=$,c.context=j,l=U):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,qr(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=Oa(t,e.child,null,r),t.child=Oa(t,null,n,r)):ut(e,t,n,r),t.memoizedState=c.state,e=t.child):e=bn(e,t,r),e}function Rh(e,t,n,l){return Ca(),t.flags|=256,ut(e,t,n,l),t.child}var Ls={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Us(e){return{baseLanes:e,cachePool:y0()}}function Hs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=$t),e}function Ah(e,t,n){var l=t.pendingProps,r=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),h&&(r=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(r?Jn(t):Fn(),(e=Ue)?(e=Lp(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=s0(e),n.return=t,t.child=n,ct=t,Ue=null)):e=null,e===null)throw Xn(t);return wu(e)?t.lanes=32:t.lanes=536870912,null}var g=l.children;return l=l.fallback,r?(Fn(),r=t.mode,g=Xr({mode:"hidden",children:g},r),l=Ea(l,r,n,null),g.return=t,l.return=t,g.sibling=l,t.child=g,l=t.child,l.memoizedState=Us(n),l.childLanes=Hs(e,h,n),t.memoizedState=Ls,Si(null,l)):(Jn(t),Ys(t,g))}var j=e.memoizedState;if(j!==null&&(g=j.dehydrated,g!==null)){if(c)t.flags&256?(Jn(t),t.flags&=-257,t=Gs(e,t,n)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),g=l.fallback,r=t.mode,l=Xr({mode:"visible",children:l.children},r),g=Ea(g,r,n,null),g.flags|=2,l.return=t,g.return=t,l.sibling=g,t.child=l,Oa(t,e.child,null,n),l=t.child,l.memoizedState=Us(n),l.childLanes=Hs(e,h,n),t.memoizedState=Ls,t=Si(null,l));else if(Jn(t),wu(g)){if(h=g.nextSibling&&g.nextSibling.dataset,h)var O=h.dgst;h=O,l=Error(o(419)),l.stack="",l.digest=h,si({value:l,source:null,stack:null}),t=Gs(e,t,n)}else if(Ie||il(e,t,n,!1),h=(n&e.childLanes)!==0,Ie||h){if(h=$e,h!==null&&(l=gd(h,n),l!==0&&l!==j.retryLane))throw j.retryLane=l,ja(e,l),jt(h,e,l),Ds;Su(g)||Pr(),t=Gs(e,t,n)}else Su(g)?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,Ue=Kt(g.nextSibling),ct=t,we=!0,qn=null,Vt=!1,e!==null&&d0(t,e),t=Ys(t,l.children),t.flags|=4096);return t}return r?(Fn(),g=l.fallback,r=t.mode,j=e.child,O=j.sibling,l=pn(j,{mode:"hidden",children:l.children}),l.subtreeFlags=j.subtreeFlags&65011712,O!==null?g=pn(O,g):(g=Ea(g,r,n,null),g.flags|=2),g.return=t,l.return=t,l.sibling=g,t.child=l,Si(null,l),l=t.child,g=e.child.memoizedState,g===null?g=Us(n):(r=g.cachePool,r!==null?(j=Fe._currentValue,r=r.parent!==j?{parent:j,pool:j}:r):r=y0(),g={baseLanes:g.baseLanes|n,cachePool:r}),l.memoizedState=g,l.childLanes=Hs(e,h,n),t.memoizedState=Ls,Si(e.child,l)):(Jn(t),n=e.child,e=n.sibling,n=pn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function Ys(e,t){return t=Xr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Xr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Gs(e,t,n){return Oa(t,e.child,null,n),e=Ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oh(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),as(e.return,t,n)}function qs(e,t,n,l,r,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r,treeForkCount:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=n,h.tailMode=r,h.treeForkCount=c)}function kh(e,t,n){var l=t.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var h=Ze.current,g=(h&2)!==0;if(g?(h=h&1|2,t.flags|=128):h&=1,W(Ze,h),ut(e,t,l,n),l=we?ci:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oh(e,n,t);else if(e.tag===19)Oh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&kr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),qs(t,!1,r,n,c,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&kr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}qs(t,!0,n,null,c,l);break;case"together":qs(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(il(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Er(e)))}function ey(e,t,n){switch(t.tag){case 3:qe(t,t.stateNode.containerInfo),Vn(t,Fe,e.memoizedState.cache),Ca();break;case 27:case 5:zt(t);break;case 4:qe(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ms(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ah(e,t,n):(Jn(t),e=bn(e,t,n),e!==null?e.sibling:null);Jn(t);break;case 19:var r=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(il(e,t,n,!1),l=(n&t.childLanes)!==0),r){if(l)return kh(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),W(Ze,Ze.current),l)break;return null;case 22:return t.lanes=0,Eh(e,t,n,t.pendingProps);case 24:Vn(t,Fe,e.memoizedState.cache)}return bn(e,t,n)}function Nh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Xs(e,n)&&(t.flags&128)===0)return Ie=!1,ey(e,t,n);Ie=(e.flags&131072)!==0}else Ie=!1,we&&(t.flags&1048576)!==0&&f0(t,ci,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ra(t.elementType),t.type=e,typeof e=="function")Jc(e)?(l=Na(e,l),t.tag=1,t=Mh(null,t,e,l,n)):(t.tag=0,t=Bs(null,t,e,l,n));else{if(e!=null){var r=e.$$typeof;if(r===q){t.tag=11,t=Sh(null,t,e,l,n);break e}else if(r===V){t.tag=14,t=wh(null,t,e,l,n);break e}}throw t=_e(e)||e,Error(o(306,t,""))}}return t;case 0:return Bs(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,r=Na(l,t.pendingProps),Mh(e,t,l,r,n);case 3:e:{if(qe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var c=t.memoizedState;r=c.element,us(e,t),gi(t,l,null,n);var h=t.memoizedState;if(l=h.cache,Vn(t,Fe,l),l!==c.cache&&ls(t,[Fe],n,!0),mi(),l=h.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Rh(e,t,l,n);break e}else if(l!==r){r=Gt(Error(o(424)),t),si(r),t=Rh(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Kt(e.firstChild),ct=t,we=!0,qn=null,Vt=!0,n=E0(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ca(),l===r){t=bn(e,t,n);break e}ut(e,t,l,n)}t=t.child}return t;case 26:return qr(e,t),e===null?(n=Xp(t.type,null,t.pendingProps,null))?t.memoizedState=n:we||(n=t.type,e=t.pendingProps,l=ro(ue.current).createElement(n),l[ot]=t,l[xt]=e,ft(l,n,e),at(l),t.stateNode=l):t.memoizedState=Xp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zt(t),e===null&&we&&(l=t.stateNode=Yp(t.type,t.pendingProps,ue.current),ct=t,Vt=!0,r=Ue,la(t.type)?(ju=r,Ue=Kt(l.firstChild)):Ue=r),ut(e,t,t.pendingProps.children,n),qr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((r=l=Ue)&&(l=Ay(l,t.type,t.pendingProps,Vt),l!==null?(t.stateNode=l,ct=t,Ue=Kt(l.firstChild),Vt=!1,r=!0):r=!1),r||Xn(t)),zt(t),r=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,l=c.children,yu(r,c)?l=null:h!==null&&yu(r,h)&&(t.flags|=32),t.memoizedState!==null&&(r=xs(e,t,Vx,null,null,n),Di._currentValue=r),qr(e,t),ut(e,t,l,n),t.child;case 6:return e===null&&we&&((e=n=Ue)&&(n=Oy(n,t.pendingProps,Vt),n!==null?(t.stateNode=n,ct=t,Ue=null,e=!0):e=!1),e||Xn(t)),null;case 13:return Ah(e,t,n);case 4:return qe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Oa(t,null,l,n):ut(e,t,l,n),t.child;case 11:return Sh(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Vn(t,t.type,l.value),ut(e,t,l.children,n),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,Ta(t),r=st(r),l=l(r),t.flags|=1,ut(e,t,l,n),t.child;case 14:return wh(e,t,t.type,t.pendingProps,n);case 15:return jh(e,t,t.type,t.pendingProps,n);case 19:return kh(e,t,n);case 31:return Px(e,t,n);case 22:return Eh(e,t,n,t.pendingProps);case 24:return Ta(t),l=st(Fe),e===null?(r=os(),r===null&&(r=$e,c=is(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),t.memoizedState={parent:l,cache:r},ss(t),Vn(t,Fe,r)):((e.lanes&n)!==0&&(us(e,t),gi(t,null,null,n),mi()),r=e.memoizedState,c=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Vn(t,Fe,l)):(l=c.cache,Vn(t,Fe,l),l!==r.cache&&ls(t,[Fe],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Sn(e){e.flags|=4}function Vs(e,t,n,l,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(rp())e.flags|=8192;else throw Aa=Mr,cs}else e.flags&=-16777217}function _h(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jp(t))if(rp())e.flags|=8192;else throw Aa=Mr,cs}function Vr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?hd():536870912,e.lanes|=t,xl|=t)}function wi(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function ty(e,t,n){var l=t.pendingProps;switch(Pc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),xn(Fe),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ll(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ts())),He(t),null;case 26:var r=t.type,c=t.memoizedState;return e===null?(Sn(t),c!==null?(He(t),_h(t,c)):(He(t),Vs(t,r,null,l,n))):c?c!==e.memoizedState?(Sn(t),He(t),_h(t,c)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Sn(t),He(t),Vs(t,r,e,l,n)),null;case 27:if(Ft(t),n=ue.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return He(t),null}e=I.current,ll(t)?h0(t):(e=Yp(r,l,n),t.stateNode=e,Sn(t))}return He(t),null;case 5:if(Ft(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return He(t),null}if(c=I.current,ll(t))h0(t);else{var h=ro(ue.current);switch(c){case 1:c=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?h.createElement(r,{is:l.is}):h.createElement(r)}}c[ot]=t,c[xt]=l;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=c;e:switch(ft(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Sn(t)}}return He(t),Vs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Sn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ue.current,ll(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,r=ct,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Ap(e.nodeValue,n)),e||Xn(t,!0)}else e=ro(e).createTextNode(l),e[ot]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=ll(t),n!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[ot]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return He(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ll(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[ot]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),r=!1}else r=ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vr(t,t.updateQueue),He(t),null);case 4:return Ee(),e===null&&hu(t.stateNode.containerInfo),He(t),null;case 10:return xn(t.type),He(t),null;case 19:if(Y(Ze),l=t.memoizedState,l===null)return He(t),null;if(r=(t.flags&128)!==0,c=l.rendering,c===null)if(r)wi(l,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=kr(e),c!==null){for(t.flags|=128,wi(l,!1),e=c.updateQueue,t.updateQueue=e,Vr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)c0(n,e),n=n.sibling;return W(Ze,Ze.current&1|2),we&&mn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Tt()>Fr&&(t.flags|=128,r=!0,wi(l,!1),t.lanes=4194304)}else{if(!r)if(e=kr(c),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Vr(t,e),wi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!we)return He(t),null}else 2*Tt()-l.renderingStartTime>Fr&&n!==536870912&&(t.flags|=128,r=!0,wi(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(e=l.last,e!==null?e.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Tt(),e.sibling=null,n=Ze.current,W(Ze,r?n&1|2:n&1),we&&mn(t,l.treeForkCount),e):(He(t),null);case 22:case 23:return Nt(t),ps(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&Vr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Y(Ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(Fe),He(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function ny(e,t){switch(Pc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(Fe),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ft(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(o(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Ze),null;case 4:return Ee(),null;case 10:return xn(t.type),null;case 22:case 23:return Nt(t),ps(),e!==null&&Y(Ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(Fe),null;case 25:return null;default:return null}}function $h(e,t){switch(Pc(t),t.tag){case 3:xn(Fe),Ee();break;case 26:case 27:case 5:Ft(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:Y(Ze);break;case 10:xn(t.type);break;case 22:case 23:Nt(t),ps(),e!==null&&Y(Ma);break;case 24:xn(Fe)}}function ji(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){l=void 0;var c=n.create,h=n.inst;l=c(),h.destroy=l}n=n.next}while(n!==r)}}catch(g){Ae(t,t.return,g)}}function Wn(e,t,n){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var h=l.inst,g=h.destroy;if(g!==void 0){h.destroy=void 0,r=t;var j=n,O=g;try{O()}catch(U){Ae(r,j,U)}}}l=l.next}while(l!==c)}}catch(U){Ae(t,t.return,U)}}function Dh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{z0(t,n)}catch(l){Ae(e,e.return,l)}}}function Bh(e,t,n){n.props=Na(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ae(e,t,l)}}function Ei(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){Ae(e,t,r)}}function ln(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(r){Ae(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function Lh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(r){Ae(e,e.return,r)}}function Qs(e,t,n){try{var l=e.stateNode;Ey(l,e.type,n,t),l[xt]=t}catch(r){Ae(e,e.return,r)}}function Uh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&la(e.type)||e.tag===4}function Ks(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&la(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zs(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(l!==4&&(l===27&&la(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zs(e,t,n),e=e.sibling;e!==null;)Zs(e,t,n),e=e.sibling}function Qr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&la(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qr(e,t,n),e=e.sibling;e!==null;)Qr(e,t,n),e=e.sibling}function Hh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ft(t,l,n),t[ot]=e,t[xt]=n}catch(c){Ae(e,e.return,c)}}var wn=!1,Pe=!1,Js=!1,Yh=typeof WeakSet=="function"?WeakSet:Set,lt=null;function ay(e,t){if(e=e.containerInfo,gu=po,e=Pd(e),Gc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var h=0,g=-1,j=-1,O=0,U=0,Q=e,k=null;t:for(;;){for(var $;Q!==n||r!==0&&Q.nodeType!==3||(g=h+r),Q!==c||l!==0&&Q.nodeType!==3||(j=h+l),Q.nodeType===3&&(h+=Q.nodeValue.length),($=Q.firstChild)!==null;)k=Q,Q=$;for(;;){if(Q===e)break t;if(k===n&&++O===r&&(g=h),k===c&&++U===l&&(j=h),($=Q.nextSibling)!==null)break;Q=k,k=Q.parentNode}Q=$}n=g===-1||j===-1?null:{start:g,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(xu={focusedElem:e,selectionRange:n},po=!1,lt=t;lt!==null;)if(t=lt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,lt=e;else for(;lt!==null;){switch(t=lt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,r=c.memoizedProps,c=c.memoizedState,l=n.stateNode;try{var ne=Na(n.type,r);e=l.getSnapshotBeforeUpdate(ne,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ae(n,n.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)bu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,lt=e;break}lt=t.return}}function Gh(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),l&4&&ji(5,n);break;case 1:if(En(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){Ae(n,n.return,h)}else{var r=Na(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Ae(n,n.return,h)}}l&64&&Dh(n),l&512&&Ei(n,n.return);break;case 3:if(En(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{z0(e,t)}catch(h){Ae(n,n.return,h)}}break;case 27:t===null&&l&4&&Hh(n);case 26:case 5:En(e,n),t===null&&l&4&&Lh(n),l&512&&Ei(n,n.return);break;case 12:En(e,n);break;case 31:En(e,n),l&4&&Vh(e,n);break;case 13:En(e,n),l&4&&Qh(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=dy.bind(null,n),ky(e,n))));break;case 22:if(l=n.memoizedState!==null||wn,!l){t=t!==null&&t.memoizedState!==null||Pe,r=wn;var c=Pe;wn=l,(Pe=t)&&!c?Cn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),wn=r,Pe=c}break;case 30:break;default:En(e,n)}}function qh(e){var t=e.alternate;t!==null&&(e.alternate=null,qh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Cc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,vt=!1;function jn(e,t,n){for(n=n.child;n!==null;)Xh(e,t,n),n=n.sibling}function Xh(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 26:Pe||ln(n,t),jn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||ln(n,t);var l=Ge,r=vt;la(n.type)&&(Ge=n.stateNode,vt=!1),jn(e,t,n),Ni(n.stateNode),Ge=l,vt=r;break;case 5:Pe||ln(n,t);case 6:if(l=Ge,r=vt,Ge=null,jn(e,t,n),Ge=l,vt=r,Ge!==null)if(vt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(n.stateNode)}catch(c){Ae(n,t,c)}else try{Ge.removeChild(n.stateNode)}catch(c){Ae(n,t,c)}break;case 18:Ge!==null&&(vt?(e=Ge,Dp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Cl(e)):Dp(Ge,n.stateNode));break;case 4:l=Ge,r=vt,Ge=n.stateNode.containerInfo,vt=!0,jn(e,t,n),Ge=l,vt=r;break;case 0:case 11:case 14:case 15:Wn(2,n,t),Pe||Wn(4,n,t),jn(e,t,n);break;case 1:Pe||(ln(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Bh(n,t,l)),jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:Pe=(l=Pe)||n.memoizedState!==null,jn(e,t,n),Pe=l;break;default:jn(e,t,n)}}function Vh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(n){Ae(t,t.return,n)}}}function Qh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(n){Ae(t,t.return,n)}}function ly(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Yh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Yh),t;default:throw Error(o(435,e.tag))}}function Kr(e,t){var n=ly(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var r=hy.bind(null,e,l);l.then(r,r)}})}function bt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l],c=e,h=t,g=h;e:for(;g!==null;){switch(g.tag){case 27:if(la(g.type)){Ge=g.stateNode,vt=!1;break e}break;case 5:Ge=g.stateNode,vt=!1;break e;case 3:case 4:Ge=g.stateNode.containerInfo,vt=!0;break e}g=g.return}if(Ge===null)throw Error(o(160));Xh(c,h,r),Ge=null,vt=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kh(t,e),t=t.sibling}var It=null;function Kh(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),St(e),l&4&&(Wn(3,e,e.return),ji(3,e),Wn(5,e,e.return));break;case 1:bt(t,e),St(e),l&512&&(Pe||n===null||ln(n,n.return)),l&64&&wn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var r=It;if(bt(t,e),St(e),l&512&&(Pe||n===null||ln(n,n.return)),l&4){var c=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[Wl]||c[ot]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),ft(c,l,n),c[ot]=e,at(c),l=c;break e;case"link":var h=Kp("link","href",r).get(l+(n.href||""));if(h){for(var g=0;g<h.length;g++)if(c=h[g],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(g,1);break t}}c=r.createElement(l),ft(c,l,n),r.head.appendChild(c);break;case"meta":if(h=Kp("meta","content",r).get(l+(n.content||""))){for(g=0;g<h.length;g++)if(c=h[g],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(g,1);break t}}c=r.createElement(l),ft(c,l,n),r.head.appendChild(c);break;default:throw Error(o(468,l))}c[ot]=e,at(c),l=c}e.stateNode=l}else Zp(r,e.type,e.stateNode);else e.stateNode=Qp(r,l,e.memoizedProps);else c!==l?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,l===null?Zp(r,e.type,e.stateNode):Qp(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Qs(e,e.memoizedProps,n.memoizedProps)}break;case 27:bt(t,e),St(e),l&512&&(Pe||n===null||ln(n,n.return)),n!==null&&l&4&&Qs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bt(t,e),St(e),l&512&&(Pe||n===null||ln(n,n.return)),e.flags&32){r=e.stateNode;try{Za(r,"")}catch(ne){Ae(e,e.return,ne)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Qs(e,r,n!==null?n.memoizedProps:r)),l&1024&&(Js=!0);break;case 6:if(bt(t,e),St(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ne){Ae(e,e.return,ne)}}break;case 3:if(so=null,r=It,It=oo(t.containerInfo),bt(t,e),It=r,St(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(ne){Ae(e,e.return,ne)}Js&&(Js=!1,Zh(e));break;case 4:l=It,It=oo(e.stateNode.containerInfo),bt(t,e),St(e),It=l;break;case 12:bt(t,e),St(e);break;case 31:bt(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Kr(e,l)));break;case 13:bt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Jr=Tt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Kr(e,l)));break;case 22:r=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,O=wn,U=Pe;if(wn=O||r,Pe=U||j,bt(t,e),Pe=U,wn=O,St(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||j||wn||Pe||_a(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(c=j.stateNode,r)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{g=j.stateNode;var Q=j.memoizedProps.style,k=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;g.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(ne){Ae(j,j.return,ne)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=r?"":j.memoizedProps}catch(ne){Ae(j,j.return,ne)}}}else if(t.tag===18){if(n===null){j=t;try{var $=j.stateNode;r?Bp($,!0):Bp(j.stateNode,!1)}catch(ne){Ae(j,j.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Kr(e,n))));break;case 19:bt(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Kr(e,l)));break;case 30:break;case 21:break;default:bt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Uh(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,c=Ks(e);Qr(e,c,r);break;case 5:var h=n.stateNode;n.flags&32&&(Za(h,""),n.flags&=-33);var g=Ks(e);Qr(e,g,h);break;case 3:case 4:var j=n.stateNode.containerInfo,O=Ks(e);Zs(e,O,j);break;default:throw Error(o(161))}}catch(U){Ae(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Gh(e,t.alternate,t),t=t.sibling}function _a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),_a(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Bh(t,t.return,n),_a(t);break;case 27:Ni(t.stateNode);case 26:case 5:ln(t,t.return),_a(t);break;case 22:t.memoizedState===null&&_a(t);break;case 30:_a(t);break;default:_a(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:Cn(r,c,n),ji(4,c);break;case 1:if(Cn(r,c,n),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){Ae(l,l.return,O)}if(l=c,r=l.updateQueue,r!==null){var g=l.stateNode;try{var j=r.shared.hiddenCallbacks;if(j!==null)for(r.shared.hiddenCallbacks=null,r=0;r<j.length;r++)C0(j[r],g)}catch(O){Ae(l,l.return,O)}}n&&h&64&&Dh(c),Ei(c,c.return);break;case 27:Hh(c);case 26:case 5:Cn(r,c,n),n&&l===null&&h&4&&Lh(c),Ei(c,c.return);break;case 12:Cn(r,c,n);break;case 31:Cn(r,c,n),n&&h&4&&Vh(r,c);break;case 13:Cn(r,c,n),n&&h&4&&Qh(r,c);break;case 22:c.memoizedState===null&&Cn(r,c,n),Ei(c,c.return);break;case 30:break;default:Cn(r,c,n)}t=t.sibling}}function Fs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ui(n))}function Ws(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ui(e))}function Pt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jh(e,t,n,l),t=t.sibling}function Jh(e,t,n,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,n,l),r&2048&&ji(9,t);break;case 1:Pt(e,t,n,l);break;case 3:Pt(e,t,n,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ui(e)));break;case 12:if(r&2048){Pt(e,t,n,l),e=t.stateNode;try{var c=t.memoizedProps,h=c.id,g=c.onPostCommit;typeof g=="function"&&g(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Ae(t,t.return,j)}}else Pt(e,t,n,l);break;case 31:Pt(e,t,n,l);break;case 13:Pt(e,t,n,l);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?Pt(e,t,n,l):Ci(e,t):c._visibility&2?Pt(e,t,n,l):(c._visibility|=2,pl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Fs(h,t);break;case 24:Pt(e,t,n,l),r&2048&&Ws(t.alternate,t);break;default:Pt(e,t,n,l)}}function pl(e,t,n,l,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,h=t,g=n,j=l,O=h.flags;switch(h.tag){case 0:case 11:case 15:pl(c,h,g,j,r),ji(8,h);break;case 23:break;case 22:var U=h.stateNode;h.memoizedState!==null?U._visibility&2?pl(c,h,g,j,r):Ci(c,h):(U._visibility|=2,pl(c,h,g,j,r)),r&&O&2048&&Fs(h.alternate,h);break;case 24:pl(c,h,g,j,r),r&&O&2048&&Ws(h.alternate,h);break;default:pl(c,h,g,j,r)}t=t.sibling}}function Ci(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,r=l.flags;switch(l.tag){case 22:Ci(n,l),r&2048&&Fs(l.alternate,l);break;case 24:Ci(n,l),r&2048&&Ws(l.alternate,l);break;default:Ci(n,l)}t=t.sibling}}var zi=8192;function ml(e,t,n){if(e.subtreeFlags&zi)for(e=e.child;e!==null;)Fh(e,t,n),e=e.sibling}function Fh(e,t,n){switch(e.tag){case 26:ml(e,t,n),e.flags&zi&&e.memoizedState!==null&&Xy(n,It,e.memoizedState,e.memoizedProps);break;case 5:ml(e,t,n);break;case 3:case 4:var l=It;It=oo(e.stateNode.containerInfo),ml(e,t,n),It=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=zi,zi=16777216,ml(e,t,n),zi=l):ml(e,t,n));break;default:ml(e,t,n)}}function Wh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];lt=l,Ph(l,e)}Wh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ih(e),e=e.sibling}function Ih(e){switch(e.tag){case 0:case 11:case 15:Ti(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:Ti(e);break;case 12:Ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zr(e)):Ti(e);break;default:Ti(e)}}function Zr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];lt=l,Ph(l,e)}Wh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),Zr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Zr(t));break;default:Zr(t)}e=e.sibling}}function Ph(e,t){for(;lt!==null;){var n=lt;switch(n.tag){case 0:case 11:case 15:Wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ui(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,lt=l;else e:for(n=e;lt!==null;){l=lt;var r=l.sibling,c=l.return;if(qh(l),l===n){lt=null;break e}if(r!==null){r.return=c,lt=r;break e}lt=c}}}var iy={getCacheForType:function(e){var t=st(Fe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return st(Fe).controller.signal}},ry=typeof WeakMap=="function"?WeakMap:Map,Te=0,$e=null,ye=null,be=0,Re=0,_t=null,In=!1,gl=!1,Is=!1,zn=0,Qe=0,Pn=0,$a=0,Ps=0,$t=0,xl=0,Mi=null,wt=null,eu=!1,Jr=0,ep=0,Fr=1/0,Wr=null,ea=null,nt=0,ta=null,yl=null,Tn=0,tu=0,nu=null,tp=null,Ri=0,au=null;function Dt(){return(Te&2)!==0&&be!==0?be&-be:_.T!==null?su():xd()}function np(){if($t===0)if((be&536870912)===0||we){var e=ir;ir<<=1,(ir&3932160)===0&&(ir=262144),$t=e}else $t=536870912;return e=kt.current,e!==null&&(e.flags|=32),$t}function jt(e,t,n){(e===$e&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(vl(e,0),na(e,be,$t,!1)),Fl(e,n),((Te&2)===0||e!==$e)&&(e===$e&&((Te&2)===0&&($a|=n),Qe===4&&na(e,be,$t,!1)),rn(e))}function ap(e,t,n){if((Te&6)!==0)throw Error(o(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Jl(e,t),r=l?sy(e,t):iu(e,t,!0),c=l;do{if(r===0){gl&&!l&&na(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!oy(n)){r=iu(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var g=e;r=Mi;var j=g.current.memoizedState.isDehydrated;if(j&&(vl(g,h).flags|=256),h=iu(g,h,!1),h!==2){if(Is&&!j){g.errorRecoveryDisabledLanes|=c,$a|=c,r=4;break e}c=wt,wt=r,c!==null&&(wt===null?wt=c:wt.push.apply(wt,c))}r=h}if(c=!1,r!==2)continue}}if(r===1){vl(e,0),na(e,t,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:na(l,t,$t,!In);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Jr+300-Tt(),10<r)){if(na(l,t,$t,!In),or(l,0,!0)!==0)break e;Tn=t,l.timeoutHandle=_p(lp.bind(null,l,n,wt,Wr,eu,t,$t,$a,xl,In,c,"Throttled",-0,0),r);break e}lp(l,n,wt,Wr,eu,t,$t,$a,xl,In,c,null,-0,0)}}break}while(!0);rn(e)}function lp(e,t,n,l,r,c,h,g,j,O,U,Q,k,$){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Fh(t,c,Q);var ne=(c&62914560)===c?Jr-Tt():(c&4194048)===c?ep-Tt():0;if(ne=Vy(Q,ne),ne!==null){Tn=c,e.cancelPendingCommit=ne(dp.bind(null,e,t,c,n,l,r,h,g,j,U,Q,null,k,$)),na(e,c,h,!O);return}}dp(e,t,c,n,l,r,h,g,j)}function oy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var r=n[l],c=r.getSnapshot;r=r.value;try{if(!At(c(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,l){t&=~Ps,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var c=31-Rt(r),h=1<<c;l[c]=-1,r&=~h}n!==0&&pd(e,n,t)}function Ir(){return(Te&6)===0?(Ai(0),!1):!0}function lu(){if(ye!==null){if(Re===0)var e=ye.return;else e=ye,gn=za=null,bs(e),sl=null,di=0,e=ye;for(;e!==null;)$h(e.alternate,e),e=e.return;ye=null}}function vl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ty(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Tn=0,lu(),$e=e,ye=n=pn(e.current,null),be=t,Re=0,_t=null,In=!1,gl=Jl(e,t),Is=!1,xl=$t=Ps=$a=Pn=Qe=0,wt=Mi=null,eu=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-Rt(l),c=1<<r;t|=e[r],l&=~c}return zn=t,vr(),n}function ip(e,t){he=null,_.H=bi,t===cl||t===Tr?(t=S0(),Re=3):t===cs?(t=S0(),Re=4):Re=t===Ds?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,ye===null&&(Qe=1,Yr(e,Gt(t,e.current)))}function rp(){var e=kt.current;return e===null?!0:(be&4194048)===be?Qt===null:(be&62914560)===be||(be&536870912)!==0?e===Qt:!1}function op(){var e=_.H;return _.H=bi,e===null?bi:e}function cp(){var e=_.A;return _.A=iy,e}function Pr(){Qe=4,In||(be&4194048)!==be&&kt.current!==null||(gl=!0),(Pn&134217727)===0&&($a&134217727)===0||$e===null||na($e,be,$t,!1)}function iu(e,t,n){var l=Te;Te|=2;var r=op(),c=cp();($e!==e||be!==t)&&(Wr=null,vl(e,t)),t=!1;var h=Qe;e:do try{if(Re!==0&&ye!==null){var g=ye,j=_t;switch(Re){case 8:lu(),h=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var O=Re;if(Re=0,_t=null,bl(e,g,j,O),n&&gl){h=0;break e}break;default:O=Re,Re=0,_t=null,bl(e,g,j,O)}}cy(),h=Qe;break}catch(U){ip(e,U)}while(!0);return t&&e.shellSuspendCounter++,gn=za=null,Te=l,_.H=r,_.A=c,ye===null&&($e=null,be=0,vr()),h}function cy(){for(;ye!==null;)sp(ye)}function sy(e,t){var n=Te;Te|=2;var l=op(),r=cp();$e!==e||be!==t?(Wr=null,Fr=Tt()+500,vl(e,t)):gl=Jl(e,t);e:do try{if(Re!==0&&ye!==null){t=ye;var c=_t;t:switch(Re){case 1:Re=0,_t=null,bl(e,t,c,1);break;case 2:case 9:if(v0(c)){Re=0,_t=null,up(t);break}t=function(){Re!==2&&Re!==9||$e!==e||(Re=7),rn(e)},c.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:v0(c)?(Re=0,_t=null,up(t)):(Re=0,_t=null,bl(e,t,c,7));break;case 5:var h=null;switch(ye.tag){case 26:h=ye.memoizedState;case 5:case 27:var g=ye;if(h?Jp(h):g.stateNode.complete){Re=0,_t=null;var j=g.sibling;if(j!==null)ye=j;else{var O=g.return;O!==null?(ye=O,eo(O)):ye=null}break t}}Re=0,_t=null,bl(e,t,c,5);break;case 6:Re=0,_t=null,bl(e,t,c,6);break;case 8:lu(),Qe=6;break e;default:throw Error(o(462))}}uy();break}catch(U){ip(e,U)}while(!0);return gn=za=null,_.H=l,_.A=r,Te=n,ye!==null?0:($e=null,be=0,vr(),Qe)}function uy(){for(;ye!==null&&!N2();)sp(ye)}function sp(e){var t=Nh(e.alternate,e,zn);e.memoizedProps=e.pendingProps,t===null?eo(e):ye=t}function up(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Th(n,t,t.pendingProps,t.type,void 0,be);break;case 11:t=Th(n,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:bs(t);default:$h(n,t),t=ye=c0(t,zn),t=Nh(n,t,zn)}e.memoizedProps=e.pendingProps,t===null?eo(e):ye=t}function bl(e,t,n,l){gn=za=null,bs(t),sl=null,di=0;var r=t.return;try{if(Ix(e,r,t,n,be)){Qe=1,Yr(e,Gt(n,e.current)),ye=null;return}}catch(c){if(r!==null)throw ye=r,c;Qe=1,Yr(e,Gt(n,e.current)),ye=null;return}t.flags&32768?(we||l===1?e=!0:gl||(be&536870912)!==0?e=!1:(In=e=!0,(l===2||l===9||l===3||l===6)&&(l=kt.current,l!==null&&l.tag===13&&(l.flags|=16384))),fp(t,e)):eo(t)}function eo(e){var t=e;do{if((t.flags&32768)!==0){fp(t,In);return}e=t.return;var n=ty(t.alternate,t,zn);if(n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Qe===0&&(Qe=5)}function fp(e,t){do{var n=ny(e.alternate,e);if(n!==null){n.flags&=32767,ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=n}while(e!==null);Qe=6,ye=null}function dp(e,t,n,l,r,c,h,g,j){e.cancelPendingCommit=null;do to();while(nt!==0);if((Te&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Kc,q2(e,n,c,h,g,j),e===$e&&(ye=$e=null,be=0),yl=t,ta=e,Tn=n,tu=c,nu=r,tp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,py(ar,function(){return xp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,r=J.p,J.p=2,h=Te,Te|=4;try{ay(e,t,n)}finally{Te=h,J.p=r,_.T=l}}nt=1,hp(),pp(),mp()}}function hp(){if(nt===1){nt=0;var e=ta,t=yl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var l=J.p;J.p=2;var r=Te;Te|=4;try{Kh(t,e);var c=xu,h=Pd(e.containerInfo),g=c.focusedElem,j=c.selectionRange;if(h!==g&&g&&g.ownerDocument&&Id(g.ownerDocument.documentElement,g)){if(j!==null&&Gc(g)){var O=j.start,U=j.end;if(U===void 0&&(U=O),"selectionStart"in g)g.selectionStart=O,g.selectionEnd=Math.min(U,g.value.length);else{var Q=g.ownerDocument||document,k=Q&&Q.defaultView||window;if(k.getSelection){var $=k.getSelection(),ne=g.textContent.length,se=Math.min(j.start,ne),Ne=j.end===void 0?se:Math.min(j.end,ne);!$.extend&&se>Ne&&(h=Ne,Ne=se,se=h);var T=Wd(g,se),C=Wd(g,Ne);if(T&&C&&($.rangeCount!==1||$.anchorNode!==T.node||$.anchorOffset!==T.offset||$.focusNode!==C.node||$.focusOffset!==C.offset)){var A=Q.createRange();A.setStart(T.node,T.offset),$.removeAllRanges(),se>Ne?($.addRange(A),$.extend(C.node,C.offset)):(A.setEnd(C.node,C.offset),$.addRange(A))}}}}for(Q=[],$=g;$=$.parentNode;)$.nodeType===1&&Q.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<Q.length;g++){var X=Q[g];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}po=!!gu,xu=gu=null}finally{Te=r,J.p=l,_.T=n}}e.current=t,nt=2}}function pp(){if(nt===2){nt=0;var e=ta,t=yl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var l=J.p;J.p=2;var r=Te;Te|=4;try{Gh(e,t.alternate,t)}finally{Te=r,J.p=l,_.T=n}}nt=3}}function mp(){if(nt===4||nt===3){nt=0,_2();var e=ta,t=yl,n=Tn,l=tp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?nt=5:(nt=0,yl=ta=null,gp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ea=null),jc(n),t=t.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,r=J.p,J.p=2,_.T=null;try{for(var c=e.onRecoverableError,h=0;h<l.length;h++){var g=l[h];c(g.value,{componentStack:g.stack})}}finally{_.T=t,J.p=r}}(Tn&3)!==0&&to(),rn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===au?Ri++:(Ri=0,au=e):Ri=0,Ai(0)}}function gp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ui(t)))}function to(){return hp(),pp(),mp(),xp()}function xp(){if(nt!==5)return!1;var e=ta,t=tu;tu=0;var n=jc(Tn),l=_.T,r=J.p;try{J.p=32>n?32:n,_.T=null,n=nu,nu=null;var c=ta,h=Tn;if(nt=0,yl=ta=null,Tn=0,(Te&6)!==0)throw Error(o(331));var g=Te;if(Te|=4,Ih(c.current),Jh(c,c.current,h,n),Te=g,Ai(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Zl,c)}catch{}return!0}finally{J.p=r,_.T=l,gp(e,t)}}function yp(e,t,n){t=Gt(n,t),t=$s(e.stateNode,t,2),e=Zn(e,t,2),e!==null&&(Fl(e,2),rn(e))}function Ae(e,t,n){if(e.tag===3)yp(e,e,n);else for(;t!==null;){if(t.tag===3){yp(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ea===null||!ea.has(l))){e=Gt(n,e),n=vh(2),l=Zn(t,n,2),l!==null&&(bh(n,l,t,e),Fl(l,2),rn(l));break}}t=t.return}}function ru(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new ry;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(n)||(Is=!0,r.add(n),e=fy.bind(null,e,t,n),t.then(e,e))}function fy(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,$e===e&&(be&n)===n&&(Qe===4||Qe===3&&(be&62914560)===be&&300>Tt()-Jr?(Te&2)===0&&vl(e,0):Ps|=n,xl===be&&(xl=0)),rn(e)}function vp(e,t){t===0&&(t=hd()),e=ja(e,t),e!==null&&(Fl(e,t),rn(e))}function dy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vp(e,n)}function hy(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),vp(e,n)}function py(e,t){return vc(e,t)}var no=null,Sl=null,ou=!1,ao=!1,cu=!1,aa=0;function rn(e){e!==Sl&&e.next===null&&(Sl===null?no=Sl=e:Sl=Sl.next=e),ao=!0,ou||(ou=!0,gy())}function Ai(e,t){if(!cu&&ao){cu=!0;do for(var n=!1,l=no;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var h=l.suspendedLanes,g=l.pingedLanes;c=(1<<31-Rt(42|e)+1)-1,c&=r&~(h&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,jp(l,c))}else c=be,c=or(l,l===$e?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Jl(l,c)||(n=!0,jp(l,c));l=l.next}while(n);cu=!1}}function my(){bp()}function bp(){ao=ou=!1;var e=0;aa!==0&&zy()&&(e=aa);for(var t=Tt(),n=null,l=no;l!==null;){var r=l.next,c=Sp(l,t);c===0?(l.next=null,n===null?no=r:n.next=r,r===null&&(Sl=n)):(n=l,(e!==0||(c&3)!==0)&&(ao=!0)),l=r}nt!==0&&nt!==5||Ai(e),aa!==0&&(aa=0)}function Sp(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var h=31-Rt(c),g=1<<h,j=r[h];j===-1?((g&n)===0||(g&l)!==0)&&(r[h]=G2(g,t)):j<=t&&(e.expiredLanes|=g),c&=~g}if(t=$e,n=be,n=or(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&bc(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Jl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&bc(l),jc(n)){case 2:case 8:n=fd;break;case 32:n=ar;break;case 268435456:n=dd;break;default:n=ar}return l=wp.bind(null,e),n=vc(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&bc(l),e.callbackPriority=2,e.callbackNode=null,2}function wp(e,t){if(nt!==0&&nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(to()&&e.callbackNode!==n)return null;var l=be;return l=or(e,e===$e?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ap(e,l,t),Sp(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?wp.bind(null,e):null)}function jp(e,t){if(to())return null;ap(e,t,!0)}function gy(){My(function(){(Te&6)!==0?vc(ud,my):bp()})}function su(){if(aa===0){var e=rl;e===0&&(e=lr,lr<<=1,(lr&261888)===0&&(lr=256)),aa=e}return aa}function Ep(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fr(""+e)}function Cp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function xy(e,t,n,l,r){if(t==="submit"&&n&&n.stateNode===r){var c=Ep((r[xt]||null).action),h=l.submitter;h&&(t=(t=h[xt]||null)?Ep(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var g=new mr("action","action",null,l,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(aa!==0){var j=h?Cp(r,h):new FormData(r);Rs(n,{pending:!0,data:j,method:r.method,action:c},null,j)}}else typeof c=="function"&&(g.preventDefault(),j=h?Cp(r,h):new FormData(r),Rs(n,{pending:!0,data:j,method:r.method,action:c},c,j))},currentTarget:r}]})}}for(var uu=0;uu<Qc.length;uu++){var fu=Qc[uu],yy=fu.toLowerCase(),vy=fu[0].toUpperCase()+fu.slice(1);Wt(yy,"on"+vy)}Wt(n0,"onAnimationEnd"),Wt(a0,"onAnimationIteration"),Wt(l0,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt($x,"onTransitionRun"),Wt(Dx,"onTransitionStart"),Wt(Bx,"onTransitionCancel"),Wt(i0,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),va("onBeforeInput",["compositionend","keypress","textInput","paste"]),va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oi));function zp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var h=l.length-1;0<=h;h--){var g=l[h],j=g.instance,O=g.currentTarget;if(g=g.listener,j!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=O;try{c(r)}catch(U){yr(U)}r.currentTarget=null,c=j}else for(h=0;h<l.length;h++){if(g=l[h],j=g.instance,O=g.currentTarget,g=g.listener,j!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=O;try{c(r)}catch(U){yr(U)}r.currentTarget=null,c=j}}}}function ve(e,t){var n=t[Ec];n===void 0&&(n=t[Ec]=new Set);var l=e+"__bubble";n.has(l)||(Tp(t,e,2,!1),n.add(l))}function du(e,t,n){var l=0;t&&(l|=4),Tp(n,e,l,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function hu(e){if(!e[lo]){e[lo]=!0,bd.forEach(function(n){n!=="selectionchange"&&(by.has(n)||du(n,!1,e),du(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,du("selectionchange",!1,t))}}function Tp(e,t,n,l){switch(n1(t)){case 2:var r=Zy;break;case 8:r=Jy;break;default:r=Mu}n=r.bind(null,t,n,e),r=void 0,!Nc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function pu(e,t,n,l,r){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var g=l.stateNode.containerInfo;if(g===r)break;if(h===4)for(h=l.return;h!==null;){var j=h.tag;if((j===3||j===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;g!==null;){if(h=qa(g),h===null)return;if(j=h.tag,j===5||j===6||j===26||j===27){l=c=h;continue e}g=g.parentNode}}l=l.return}kd(function(){var O=c,U=Oc(n),Q=[];e:{var k=r0.get(e);if(k!==void 0){var $=mr,ne=e;switch(e){case"keypress":if(hr(n)===0)break e;case"keydown":case"keyup":$=hx;break;case"focusin":ne="focus",$=Bc;break;case"focusout":ne="blur",$=Bc;break;case"beforeblur":case"afterblur":$=Bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=gx;break;case n0:case a0:case l0:$=lx;break;case i0:$=yx;break;case"scroll":case"scrollend":$=P2;break;case"wheel":$=bx;break;case"copy":case"cut":case"paste":$=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Bd;break;case"toggle":case"beforetoggle":$=wx}var se=(t&4)!==0,Ne=!se&&(e==="scroll"||e==="scrollend"),T=se?k!==null?k+"Capture":null:k;se=[];for(var C=O,A;C!==null;){var X=C;if(A=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||A===null||T===null||(X=Pl(C,T),X!=null&&se.push(ki(C,X,A))),Ne)break;C=C.return}0<se.length&&(k=new $(k,ne,null,n,U),Q.push({event:k,listeners:se}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",k&&n!==Ac&&(ne=n.relatedTarget||n.fromElement)&&(qa(ne)||ne[Ga]))break e;if(($||k)&&(k=U.window===U?U:(k=U.ownerDocument)?k.defaultView||k.parentWindow:window,$?(ne=n.relatedTarget||n.toElement,$=O,ne=ne?qa(ne):null,ne!==null&&(Ne=d(ne),se=ne.tag,ne!==Ne||se!==5&&se!==27&&se!==6)&&(ne=null)):($=null,ne=O),$!==ne)){if(se=$d,X="onMouseLeave",T="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(se=Bd,X="onPointerLeave",T="onPointerEnter",C="pointer"),Ne=$==null?k:Il($),A=ne==null?k:Il(ne),k=new se(X,C+"leave",$,n,U),k.target=Ne,k.relatedTarget=A,X=null,qa(U)===O&&(se=new se(T,C+"enter",ne,n,U),se.target=A,se.relatedTarget=Ne,X=se),Ne=X,$&&ne)t:{for(se=Sy,T=$,C=ne,A=0,X=T;X;X=se(X))A++;X=0;for(var oe=C;oe;oe=se(oe))X++;for(;0<A-X;)T=se(T),A--;for(;0<X-A;)C=se(C),X--;for(;A--;){if(T===C||C!==null&&T===C.alternate){se=T;break t}T=se(T),C=se(C)}se=null}else se=null;$!==null&&Mp(Q,k,$,se,!1),ne!==null&&Ne!==null&&Mp(Q,Ne,ne,se,!0)}}e:{if(k=O?Il(O):window,$=k.nodeName&&k.nodeName.toLowerCase(),$==="select"||$==="input"&&k.type==="file")var Ce=Vd;else if(qd(k))if(Qd)Ce=kx;else{Ce=Ax;var ae=Rx}else $=k.nodeName,!$||$.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?O&&Rc(O.elementType)&&(Ce=Vd):Ce=Ox;if(Ce&&(Ce=Ce(e,O))){Xd(Q,Ce,n,U);break e}ae&&ae(e,k,O),e==="focusout"&&O&&k.type==="number"&&O.memoizedProps.value!=null&&Mc(k,"number",k.value)}switch(ae=O?Il(O):window,e){case"focusin":(qd(ae)||ae.contentEditable==="true")&&(Ia=ae,qc=O,oi=null);break;case"focusout":oi=qc=Ia=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,e0(Q,n,U);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":e0(Q,n,U)}var pe;if(Uc)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Wa?Yd(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&(Ld&&n.locale!=="ko"&&(Wa||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Wa&&(pe=Nd()):(Yn=U,_c="value"in Yn?Yn.value:Yn.textContent,Wa=!0)),ae=io(O,Se),0<ae.length&&(Se=new Dd(Se,e,null,n,U),Q.push({event:Se,listeners:ae}),pe?Se.data=pe:(pe=Gd(n),pe!==null&&(Se.data=pe)))),(pe=Ex?Cx(e,n):zx(e,n))&&(Se=io(O,"onBeforeInput"),0<Se.length&&(ae=new Dd("onBeforeInput","beforeinput",null,n,U),Q.push({event:ae,listeners:Se}),ae.data=pe)),xy(Q,e,O,n,U)}zp(Q,t)})}function ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function io(e,t){for(var n=t+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Pl(e,n),r!=null&&l.unshift(ki(e,r,c)),r=Pl(e,t),r!=null&&l.push(ki(e,r,c))),e.tag===3)return l;e=e.return}return[]}function Sy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mp(e,t,n,l,r){for(var c=t._reactName,h=[];n!==null&&n!==l;){var g=n,j=g.alternate,O=g.stateNode;if(g=g.tag,j!==null&&j===l)break;g!==5&&g!==26&&g!==27||O===null||(j=O,r?(O=Pl(n,c),O!=null&&h.unshift(ki(n,O,j))):r||(O=Pl(n,c),O!=null&&h.push(ki(n,O,j)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var wy=/\r\n?/g,jy=/\u0000|\uFFFD/g;function Rp(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(jy,"")}function Ap(e,t){return t=Rp(t),Rp(e)===t}function ke(e,t,n,l,r,c){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Za(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Za(e,""+l);break;case"className":sr(e,"class",l);break;case"tabIndex":sr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":sr(e,n,l);break;case"style":Ad(e,l,c);break;case"data":if(t!=="object"){sr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=fr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&ke(e,t,"name",r.name,r,null),ke(e,t,"formEncType",r.formEncType,r,null),ke(e,t,"formMethod",r.formMethod,r,null),ke(e,t,"formTarget",r.formTarget,r,null)):(ke(e,t,"encType",r.encType,r,null),ke(e,t,"method",r.method,r,null),ke(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=fr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=dn);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=fr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ve("beforetoggle",e),ve("toggle",e),cr(e,"popover",l);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":cr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=W2.get(n)||n,cr(e,n,l))}}function mu(e,t,n,l,r,c){switch(n){case"style":Ad(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Za(e,l):(typeof l=="number"||typeof l=="bigint")&&Za(e,""+l);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),c=e[xt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,r);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):cr(e,n,l)}}}function ft(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var l=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var h=n[c];if(h!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ke(e,t,c,h,n,null)}}r&&ke(e,t,"srcSet",n.srcSet,n,null),l&&ke(e,t,"src",n.src,n,null);return;case"input":ve("invalid",e);var g=c=h=r=null,j=null,O=null;for(l in n)if(n.hasOwnProperty(l)){var U=n[l];if(U!=null)switch(l){case"name":r=U;break;case"type":h=U;break;case"checked":j=U;break;case"defaultChecked":O=U;break;case"value":c=U;break;case"defaultValue":g=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:ke(e,t,l,U,n,null)}}zd(e,c,g,j,O,h,r,!1);return;case"select":ve("invalid",e),l=h=c=null;for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){case"value":c=g;break;case"defaultValue":h=g;break;case"multiple":l=g;default:ke(e,t,r,g,n,null)}t=c,n=h,e.multiple=!!l,t!=null?Ka(e,!!l,t,!1):n!=null&&Ka(e,!!l,n,!0);return;case"textarea":ve("invalid",e),c=r=l=null;for(h in n)if(n.hasOwnProperty(h)&&(g=n[h],g!=null))switch(h){case"value":l=g;break;case"defaultValue":r=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:ke(e,t,h,g,n,null)}Md(e,l,r,c);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(l=n[j],l!=null))switch(j){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ke(e,t,j,l,n,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(l=0;l<Oi.length;l++)ve(Oi[l],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(l=n[O],l!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ke(e,t,O,l,n,null)}return;default:if(Rc(t)){for(U in n)n.hasOwnProperty(U)&&(l=n[U],l!==void 0&&mu(e,t,U,l,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(l=n[g],l!=null&&ke(e,t,g,l,n,null))}function Ey(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,h=null,g=null,j=null,O=null,U=null;for($ in n){var Q=n[$];if(n.hasOwnProperty($)&&Q!=null)switch($){case"checked":break;case"value":break;case"defaultValue":j=Q;default:l.hasOwnProperty($)||ke(e,t,$,null,l,Q)}}for(var k in l){var $=l[k];if(Q=n[k],l.hasOwnProperty(k)&&($!=null||Q!=null))switch(k){case"type":c=$;break;case"name":r=$;break;case"checked":O=$;break;case"defaultChecked":U=$;break;case"value":h=$;break;case"defaultValue":g=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(o(137,t));break;default:$!==Q&&ke(e,t,k,$,l,Q)}}Tc(e,h,g,j,O,U,c,r);return;case"select":$=h=g=k=null;for(c in n)if(j=n[c],n.hasOwnProperty(c)&&j!=null)switch(c){case"value":break;case"multiple":$=j;default:l.hasOwnProperty(c)||ke(e,t,c,null,l,j)}for(r in l)if(c=l[r],j=n[r],l.hasOwnProperty(r)&&(c!=null||j!=null))switch(r){case"value":k=c;break;case"defaultValue":g=c;break;case"multiple":h=c;default:c!==j&&ke(e,t,r,c,l,j)}t=g,n=h,l=$,k!=null?Ka(e,!!n,k,!1):!!l!=!!n&&(t!=null?Ka(e,!!n,t,!0):Ka(e,!!n,n?[]:"",!1));return;case"textarea":$=k=null;for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ke(e,t,g,null,l,r)}for(h in l)if(r=l[h],c=n[h],l.hasOwnProperty(h)&&(r!=null||c!=null))switch(h){case"value":k=r;break;case"defaultValue":$=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==c&&ke(e,t,h,r,l,c)}Td(e,k,$);return;case"option":for(var ne in n)if(k=n[ne],n.hasOwnProperty(ne)&&k!=null&&!l.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:ke(e,t,ne,null,l,k)}for(j in l)if(k=l[j],$=n[j],l.hasOwnProperty(j)&&k!==$&&(k!=null||$!=null))switch(j){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:ke(e,t,j,k,l,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in n)k=n[se],n.hasOwnProperty(se)&&k!=null&&!l.hasOwnProperty(se)&&ke(e,t,se,null,l,k);for(O in l)if(k=l[O],$=n[O],l.hasOwnProperty(O)&&k!==$&&(k!=null||$!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,t));break;default:ke(e,t,O,k,l,$)}return;default:if(Rc(t)){for(var Ne in n)k=n[Ne],n.hasOwnProperty(Ne)&&k!==void 0&&!l.hasOwnProperty(Ne)&&mu(e,t,Ne,void 0,l,k);for(U in l)k=l[U],$=n[U],!l.hasOwnProperty(U)||k===$||k===void 0&&$===void 0||mu(e,t,U,k,l,$);return}}for(var T in n)k=n[T],n.hasOwnProperty(T)&&k!=null&&!l.hasOwnProperty(T)&&ke(e,t,T,null,l,k);for(Q in l)k=l[Q],$=n[Q],!l.hasOwnProperty(Q)||k===$||k==null&&$==null||ke(e,t,Q,k,l,$)}function Op(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var r=n[l],c=r.transferSize,h=r.initiatorType,g=r.duration;if(c&&g&&Op(h)){for(h=0,g=r.responseEnd,l+=1;l<n.length;l++){var j=n[l],O=j.startTime;if(O>g)break;var U=j.transferSize,Q=j.initiatorType;U&&Op(Q)&&(j=j.responseEnd,h+=U*(j<g?1:(g-O)/(j-O)))}if(--l,t+=8*(c+h)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gu=null,xu=null;function ro(e){return e.nodeType===9?e:e.ownerDocument}function kp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Np(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vu=null;function zy(){var e=window.event;return e&&e.type==="popstate"?e===vu?!1:(vu=e,!0):(vu=null,!1)}var _p=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,My=typeof queueMicrotask=="function"?queueMicrotask:typeof $p<"u"?function(e){return $p.resolve(null).then(e).catch(Ry)}:_p;function Ry(e){setTimeout(function(){throw e})}function la(e){return e==="head"}function Dp(e,t){var n=t,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(r),Cl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Ni(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ni(n);for(var c=n.firstChild;c;){var h=c.nextSibling,g=c.nodeName;c[Wl]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=h}}else n==="body"&&Ni(e.ownerDocument.body);n=r}while(n);Cl(t)}function Bp(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function bu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":bu(n),Cc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ay(e,t,n,l){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function Oy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Kt(e.nextSibling),e===null))return null;return e}function Lp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kt(e.nextSibling),e===null))return null;return e}function Su(e){return e.data==="$?"||e.data==="$~"}function wu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ky(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ju=null;function Up(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Kt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Hp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Yp(e,t,n){switch(t=ro(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ni(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Cc(e)}var Zt=new Map,Gp=new Set;function oo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mn=J.d;J.d={f:Ny,r:_y,D:$y,C:Dy,L:By,m:Ly,X:Hy,S:Uy,M:Yy};function Ny(){var e=Mn.f(),t=Ir();return e||t}function _y(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?ih(t):Mn.r(e)}var wl=typeof document>"u"?null:document;function qp(e,t,n){var l=wl;if(l&&typeof t=="string"&&t){var r=Ht(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Gp.has(r)||(Gp.add(r),e={rel:e,crossOrigin:n,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),ft(t,"link",e),at(t),l.head.appendChild(t)))}}function $y(e){Mn.D(e),qp("dns-prefetch",e,null)}function Dy(e,t){Mn.C(e,t),qp("preconnect",e,t)}function By(e,t,n){Mn.L(e,t,n);var l=wl;if(l&&e&&t){var r='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ht(n.imageSizes)+'"]')):r+='[href="'+Ht(e)+'"]';var c=r;switch(t){case"style":c=jl(e);break;case"script":c=El(e)}Zt.has(c)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zt.set(c,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(_i(c))||t==="script"&&l.querySelector($i(c))||(t=l.createElement("link"),ft(t,"link",e),at(t),l.head.appendChild(t)))}}function Ly(e,t){Mn.m(e,t);var n=wl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ht(l)+'"][href="'+Ht(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=El(e)}if(!Zt.has(c)&&(e=w({rel:"modulepreload",href:e},t),Zt.set(c,e),n.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector($i(c)))return}l=n.createElement("link"),ft(l,"link",e),at(l),n.head.appendChild(l)}}}function Uy(e,t,n){Mn.S(e,t,n);var l=wl;if(l&&e){var r=Va(l).hoistableStyles,c=jl(e);t=t||"default";var h=r.get(c);if(!h){var g={loading:0,preload:null};if(h=l.querySelector(_i(c)))g.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zt.get(c))&&Eu(e,n);var j=h=l.createElement("link");at(j),ft(j,"link",e),j._p=new Promise(function(O,U){j.onload=O,j.onerror=U}),j.addEventListener("load",function(){g.loading|=1}),j.addEventListener("error",function(){g.loading|=2}),g.loading|=4,co(h,t,l)}h={type:"stylesheet",instance:h,count:1,state:g},r.set(c,h)}}}function Hy(e,t){Mn.X(e,t);var n=wl;if(n&&e){var l=Va(n).hoistableScripts,r=El(e),c=l.get(r);c||(c=n.querySelector($i(r)),c||(e=w({src:e,async:!0},t),(t=Zt.get(r))&&Cu(e,t),c=n.createElement("script"),at(c),ft(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Yy(e,t){Mn.M(e,t);var n=wl;if(n&&e){var l=Va(n).hoistableScripts,r=El(e),c=l.get(r);c||(c=n.querySelector($i(r)),c||(e=w({src:e,async:!0,type:"module"},t),(t=Zt.get(r))&&Cu(e,t),c=n.createElement("script"),at(c),ft(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Xp(e,t,n,l){var r=(r=ue.current)?oo(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=jl(n.href),n=Va(r).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=jl(n.href);var c=Va(r).hoistableStyles,h=c.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=r.querySelector(_i(e)))&&!c._p&&(h.instance=c,h.state.loading=5),Zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zt.set(e,n),c||Gy(r,e,n,h.state))),t&&l===null)throw Error(o(528,""));return h}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=El(n),n=Va(r).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function jl(e){return'href="'+Ht(e)+'"'}function _i(e){return'link[rel="stylesheet"]['+e+"]"}function Vp(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Gy(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ft(t,"link",n),at(t),e.head.appendChild(t))}function El(e){return'[src="'+Ht(e)+'"]'}function $i(e){return"script[async]"+e}function Qp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(l)return t.instance=l,at(l),l;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),at(l),ft(l,"style",r),co(l,n.precedence,e),t.instance=l;case"stylesheet":r=jl(n.href);var c=e.querySelector(_i(r));if(c)return t.state.loading|=4,t.instance=c,at(c),c;l=Vp(n),(r=Zt.get(r))&&Eu(l,r),c=(e.ownerDocument||e).createElement("link"),at(c);var h=c;return h._p=new Promise(function(g,j){h.onload=g,h.onerror=j}),ft(c,"link",l),t.state.loading|=4,co(c,n.precedence,e),t.instance=c;case"script":return c=El(n.src),(r=e.querySelector($i(c)))?(t.instance=r,at(r),r):(l=n,(r=Zt.get(c))&&(l=w({},n),Cu(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),at(r),ft(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,co(l,n.precedence,e));return t.instance}function co(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,h=0;h<l.length;h++){var g=l[h];if(g.dataset.precedence===t)c=g;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Cu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var so=null;function Kp(e,t,n){if(so===null){var l=new Map,r=so=new Map;r.set(n,l)}else r=so,l=r.get(n),l||(l=new Map,r.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[Wl]||c[ot]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=e+h;var g=l.get(h);g?g.push(c):l.set(h,[c])}}return l}function Zp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function qy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Jp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xy(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=jl(l.href),c=t.querySelector(_i(r));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=uo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,at(c);return}c=t.ownerDocument||t,l=Vp(l),(r=Zt.get(r))&&Eu(l,r),c=c.createElement("link"),at(c);var h=c;h._p=new Promise(function(g,j){h.onload=g,h.onerror=j}),ft(c,"link",l),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=uo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var zu=0;function Vy(e,t){return e.stylesheets&&e.count===0&&ho(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&ho(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&zu===0&&(zu=62500*Cy());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ho(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>zu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function uo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ho(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fo=null;function ho(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fo=new Map,t.forEach(Qy,e),fo=null,uo.call(e))}function Qy(e,t){if(!(t.state.loading&4)){var n=fo.get(e);if(n)var l=n.get(null);else{n=new Map,fo.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var h=r[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),l=h)}l&&n.set(null,l)}r=t.instance,h=r.getAttribute("data-precedence"),c=n.get(h)||l,c===l&&n.set(null,r),n.set(h,r),this.count++,l=uo.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Di={$$typeof:G,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Ky(e,t,n,l,r,c,h,g,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.hiddenUpdates=Sc(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Fp(e,t,n,l,r,c,h,g,j,O,U,Q){return e=new Ky(e,t,n,h,j,O,U,Q,g),t=1,c===!0&&(t|=24),c=Ot(3,null,null,t),e.current=c,c.stateNode=e,t=is(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:n,cache:t},ss(c),e}function Wp(e){return e?(e=tl,e):tl}function Ip(e,t,n,l,r,c){r=Wp(r),l.context===null?l.context=r:l.pendingContext=r,l=Kn(t),l.payload={element:n},c=c===void 0?null:c,c!==null&&(l.callback=c),n=Zn(e,l,t),n!==null&&(jt(n,e,t),pi(n,e,t))}function Pp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tu(e,t){Pp(e,t),(e=e.alternate)&&Pp(e,t)}function e1(e){if(e.tag===13||e.tag===31){var t=ja(e,67108864);t!==null&&jt(t,e,67108864),Tu(e,67108864)}}function t1(e){if(e.tag===13||e.tag===31){var t=Dt();t=wc(t);var n=ja(e,t);n!==null&&jt(n,e,t),Tu(e,t)}}var po=!0;function Zy(e,t,n,l){var r=_.T;_.T=null;var c=J.p;try{J.p=2,Mu(e,t,n,l)}finally{J.p=c,_.T=r}}function Jy(e,t,n,l){var r=_.T;_.T=null;var c=J.p;try{J.p=8,Mu(e,t,n,l)}finally{J.p=c,_.T=r}}function Mu(e,t,n,l){if(po){var r=Ru(l);if(r===null)pu(e,t,l,mo,n),a1(e,l);else if(Wy(r,e,t,n,l))l.stopPropagation();else if(a1(e,l),t&4&&-1<Fy.indexOf(e)){for(;r!==null;){var c=Xa(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=ya(c.pendingLanes);if(h!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;h;){var j=1<<31-Rt(h);g.entanglements[1]|=j,h&=~j}rn(c),(Te&6)===0&&(Fr=Tt()+500,Ai(0))}}break;case 31:case 13:g=ja(c,2),g!==null&&jt(g,c,2),Ir(),Tu(c,2)}if(c=Ru(l),c===null&&pu(e,t,l,mo,n),c===r)break;r=c}r!==null&&l.stopPropagation()}else pu(e,t,l,null,n)}}function Ru(e){return e=Oc(e),Au(e)}var mo=null;function Au(e){if(mo=null,e=qa(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mo=e,null}function n1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($2()){case ud:return 2;case fd:return 8;case ar:case D2:return 32;case dd:return 268435456;default:return 32}default:return 32}}var Ou=!1,ia=null,ra=null,oa=null,Bi=new Map,Li=new Map,ca=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a1(e,t){switch(e){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":Bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(t.pointerId)}}function Ui(e,t,n,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},t!==null&&(t=Xa(t),t!==null&&e1(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Wy(e,t,n,l,r){switch(t){case"focusin":return ia=Ui(ia,e,t,n,l,r),!0;case"dragenter":return ra=Ui(ra,e,t,n,l,r),!0;case"mouseover":return oa=Ui(oa,e,t,n,l,r),!0;case"pointerover":var c=r.pointerId;return Bi.set(c,Ui(Bi.get(c)||null,e,t,n,l,r)),!0;case"gotpointercapture":return c=r.pointerId,Li.set(c,Ui(Li.get(c)||null,e,t,n,l,r)),!0}return!1}function l1(e){var t=qa(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,yd(e.priority,function(){t1(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,yd(e.priority,function(){t1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ru(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Ac=l,n.target.dispatchEvent(l),Ac=null}else return t=Xa(n),t!==null&&e1(t),e.blockedOn=n,!1;t.shift()}return!0}function i1(e,t,n){go(e)&&n.delete(t)}function Iy(){Ou=!1,ia!==null&&go(ia)&&(ia=null),ra!==null&&go(ra)&&(ra=null),oa!==null&&go(oa)&&(oa=null),Bi.forEach(i1),Li.forEach(i1)}function xo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ou||(Ou=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Iy)))}var yo=null;function r1(e){yo!==e&&(yo=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){yo===e&&(yo=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(Au(l||n)===null)continue;break}var c=Xa(n);c!==null&&(e.splice(t,3),t-=3,Rs(c,{pending:!0,data:r,method:n.method,action:l},l,r))}}))}function Cl(e){function t(j){return xo(j,e)}ia!==null&&xo(ia,e),ra!==null&&xo(ra,e),oa!==null&&xo(oa,e),Bi.forEach(t),Li.forEach(t);for(var n=0;n<ca.length;n++){var l=ca[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ca.length&&(n=ca[0],n.blockedOn===null);)l1(n),n.blockedOn===null&&ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var r=n[l],c=n[l+1],h=r[xt]||null;if(typeof c=="function")h||r1(n);else if(h){var g=null;if(c&&c.hasAttribute("formAction")){if(r=c,h=c[xt]||null)g=h.formAction;else if(Au(r)!==null)continue}else g=h.action;typeof g=="function"?n[l+1]=g:(n.splice(l,3),l-=3),r1(n)}}}function o1(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(h){return r=h})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function ku(e){this._internalRoot=e}vo.prototype.render=ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=Dt();Ip(n,l,e,t,null,null)},vo.prototype.unmount=ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ip(e.current,2,null,e,null,null),Ir(),t[Ga]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=xd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ca.length&&t!==0&&t<ca[n].priority;n++);ca.splice(n,0,e),n===0&&l1(e)}};var c1=i.version;if(c1!=="19.2.0")throw Error(o(527,c1,"19.2.0"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Py={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{Zl=bo.inject(Py),Mt=bo}catch{}}return Yi.createRoot=function(e,t){if(!f(e))throw Error(o(299));var n=!1,l="",r=mh,c=gh,h=xh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Fp(e,1,!1,null,null,n,l,null,r,c,h,o1),e[Ga]=t.current,hu(e),new ku(t)},Yi.hydrateRoot=function(e,t,n){if(!f(e))throw Error(o(299));var l=!1,r="",c=mh,h=gh,g=xh,j=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(j=n.formState)),t=Fp(e,1,!0,t,n??null,l,r,j,c,h,g,o1),t.context=Wp(null),n=t.current,l=Dt(),l=wc(l),r=Kn(l),r.callback=null,Zn(n,r,l),n=l,t.current.lanes=n,Fl(t,n),rn(t),e[Ga]=t.current,hu(e),new vo(t)},Yi.version="19.2.0",Yi}var y1;function cv(){if(y1)return $u.exports;y1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),$u.exports=ov(),$u.exports}var sv=cv();const uv=Ii(sv);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var v1="popstate";function fv(a={}){function i(o,f){let{pathname:d,search:p,hash:v}=o.location;return wf("",{pathname:d,search:p,hash:v},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(o,f){return typeof f=="string"?f:Ki(f)}return hv(i,s,null,a)}function Xe(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function sn(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function dv(){return Math.random().toString(36).substring(2,10)}function b1(a,i){return{usr:a.state,key:a.key,idx:i}}function wf(a,i,s=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?Hl(i):i,state:s,key:i&&i.key||o||dv()}}function Ki({pathname:a="/",search:i="",hash:s=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function Hl(a){let i={};if(a){let s=a.indexOf("#");s>=0&&(i.hash=a.substring(s),a=a.substring(0,s));let o=a.indexOf("?");o>=0&&(i.search=a.substring(o),a=a.substring(0,o)),a&&(i.pathname=a)}return i}function hv(a,i,s,o={}){let{window:f=document.defaultView,v5Compat:d=!1}=o,p=f.history,v="POP",x=null,m=S();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function S(){return(p.state||{idx:null}).idx}function w(){v="POP";let B=S(),L=B==null?null:B-m;m=B,x&&x({action:v,location:N.location,delta:L})}function z(B,L){v="PUSH";let H=wf(N.location,B,L);m=S()+1;let G=b1(H,m),q=N.createHref(H);try{p.pushState(G,"",q)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;f.location.assign(q)}d&&x&&x({action:v,location:N.location,delta:1})}function M(B,L){v="REPLACE";let H=wf(N.location,B,L);m=S();let G=b1(H,m),q=N.createHref(H);p.replaceState(G,"",q),d&&x&&x({action:v,location:N.location,delta:0})}function R(B){return pv(B)}let N={get action(){return v},get location(){return a(f,p)},listen(B){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(v1,w),x=B,()=>{f.removeEventListener(v1,w),x=null}},createHref(B){return i(f,B)},createURL:R,encodeLocation(B){let L=R(B);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:z,replace:M,go(B){return p.go(B)}};return N}function pv(a,i=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(s,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Ki(a);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function Zm(a,i,s="/"){return mv(a,i,s,!1)}function mv(a,i,s,o){let f=typeof i=="string"?Hl(i):i,d=$n(f.pathname||"/",s);if(d==null)return null;let p=Jm(a);gv(p);let v=null;for(let x=0;v==null&&x<p.length;++x){let m=Tv(d);v=Cv(p[x],m,o)}return v}function Jm(a,i=[],s=[],o="",f=!1){let d=(p,v,x=f,m)=>{let S={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:v,route:p};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(o)&&x)return;Xe(S.relativePath.startsWith(o),`Absolute route path "${S.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(o.length)}let w=Nn([o,S.relativePath]),z=s.concat(S);p.children&&p.children.length>0&&(Xe(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Jm(p.children,i,z,w,x)),!(p.path==null&&!p.index)&&i.push({path:w,score:jv(w,p.index),routesMeta:z})};return a.forEach((p,v)=>{if(p.path===""||!p.path?.includes("?"))d(p,v);else for(let x of Fm(p.path))d(p,v,!0,x)}),i}function Fm(a){let i=a.split("/");if(i.length===0)return[];let[s,...o]=i,f=s.endsWith("?"),d=s.replace(/\?$/,"");if(o.length===0)return f?[d,""]:[d];let p=Fm(o.join("/")),v=[];return v.push(...p.map(x=>x===""?d:[d,x].join("/"))),f&&v.push(...p),v.map(x=>a.startsWith("/")&&x===""?"/":x)}function gv(a){a.sort((i,s)=>i.score!==s.score?s.score-i.score:Ev(i.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var xv=/^:[\w-]+$/,yv=3,vv=2,bv=1,Sv=10,wv=-2,S1=a=>a==="*";function jv(a,i){let s=a.split("/"),o=s.length;return s.some(S1)&&(o+=wv),i&&(o+=vv),s.filter(f=>!S1(f)).reduce((f,d)=>f+(xv.test(d)?yv:d===""?bv:Sv),o)}function Ev(a,i){return a.length===i.length&&a.slice(0,-1).every((o,f)=>o===i[f])?a[a.length-1]-i[i.length-1]:0}function Cv(a,i,s=!1){let{routesMeta:o}=a,f={},d="/",p=[];for(let v=0;v<o.length;++v){let x=o[v],m=v===o.length-1,S=d==="/"?i:i.slice(d.length)||"/",w=Ko({path:x.relativePath,caseSensitive:x.caseSensitive,end:m},S),z=x.route;if(!w&&m&&s&&!o[o.length-1].route.index&&(w=Ko({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},S)),!w)return null;Object.assign(f,w.params),p.push({params:f,pathname:Nn([d,w.pathname]),pathnameBase:Ov(Nn([d,w.pathnameBase])),route:z}),w.pathnameBase!=="/"&&(d=Nn([d,w.pathnameBase]))}return p}function Ko(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[s,o]=zv(a.path,a.caseSensitive,a.end),f=i.match(s);if(!f)return null;let d=f[0],p=d.replace(/(.)\/+$/,"$1"),v=f.slice(1);return{params:o.reduce((m,{paramName:S,isOptional:w},z)=>{if(S==="*"){let R=v[z]||"";p=d.slice(0,d.length-R.length).replace(/(.)\/+$/,"$1")}const M=v[z];return w&&!M?m[S]=void 0:m[S]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:p,pattern:a}}function zv(a,i=!1,s=!0){sn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],f="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,x)=>(o.push({paramName:v,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),f+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":a!==""&&a!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,i?void 0:"i"),o]}function Tv(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return sn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function $n(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let s=i.endsWith("/")?i.length-1:i.length,o=a.charAt(s);return o&&o!=="/"?null:a.slice(s)||"/"}function Mv(a,i="/"){let{pathname:s,search:o="",hash:f=""}=typeof a=="string"?Hl(a):a;return{pathname:s?s.startsWith("/")?s:Rv(s,i):i,search:kv(o),hash:Nv(f)}}function Rv(a,i){let s=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function Uu(a,i,s,o){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Av(a){return a.filter((i,s)=>s===0||i.route.path&&i.route.path.length>0)}function Wm(a){let i=Av(a);return i.map((s,o)=>o===i.length-1?s.pathname:s.pathnameBase)}function Im(a,i,s,o=!1){let f;typeof a=="string"?f=Hl(a):(f={...a},Xe(!f.pathname||!f.pathname.includes("?"),Uu("?","pathname","search",f)),Xe(!f.pathname||!f.pathname.includes("#"),Uu("#","pathname","hash",f)),Xe(!f.search||!f.search.includes("#"),Uu("#","search","hash",f)));let d=a===""||f.pathname==="",p=d?"/":f.pathname,v;if(p==null)v=s;else{let w=i.length-1;if(!o&&p.startsWith("..")){let z=p.split("/");for(;z[0]==="..";)z.shift(),w-=1;f.pathname=z.join("/")}v=w>=0?i[w]:"/"}let x=Mv(f,v),m=p&&p!=="/"&&p.endsWith("/"),S=(d||p===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(m||S)&&(x.pathname+="/"),x}var Nn=a=>a.join("/").replace(/\/\/+/g,"/"),Ov=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),kv=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Nv=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function _v(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Pm=["POST","PUT","PATCH","DELETE"];new Set(Pm);var $v=["GET",...Pm];new Set($v);var Yl=y.createContext(null);Yl.displayName="DataRouter";var ac=y.createContext(null);ac.displayName="DataRouterState";y.createContext(!1);var eg=y.createContext({isTransitioning:!1});eg.displayName="ViewTransition";var Dv=y.createContext(new Map);Dv.displayName="Fetchers";var Bv=y.createContext(null);Bv.displayName="Await";var un=y.createContext(null);un.displayName="Navigation";var Pi=y.createContext(null);Pi.displayName="Location";var Dn=y.createContext({outlet:null,matches:[],isDataRoute:!1});Dn.displayName="Route";var Lf=y.createContext(null);Lf.displayName="RouteError";function Lv(a,{relative:i}={}){Xe(er(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=y.useContext(un),{hash:f,pathname:d,search:p}=tr(a,{relative:i}),v=d;return s!=="/"&&(v=d==="/"?s:Nn([s,d])),o.createHref({pathname:v,search:p,hash:f})}function er(){return y.useContext(Pi)!=null}function Bn(){return Xe(er(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Pi).location}var tg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ng(a){y.useContext(un).static||y.useLayoutEffect(a)}function lc(){let{isDataRoute:a}=y.useContext(Dn);return a?Wv():Uv()}function Uv(){Xe(er(),"useNavigate() may be used only in the context of a <Router> component.");let a=y.useContext(Yl),{basename:i,navigator:s}=y.useContext(un),{matches:o}=y.useContext(Dn),{pathname:f}=Bn(),d=JSON.stringify(Wm(o)),p=y.useRef(!1);return ng(()=>{p.current=!0}),y.useCallback((x,m={})=>{if(sn(p.current,tg),!p.current)return;if(typeof x=="number"){s.go(x);return}let S=Im(x,JSON.parse(d),f,m.relative==="path");a==null&&i!=="/"&&(S.pathname=S.pathname==="/"?i:Nn([i,S.pathname])),(m.replace?s.replace:s.push)(S,m.state,m)},[i,s,d,f,a])}y.createContext(null);function tr(a,{relative:i}={}){let{matches:s}=y.useContext(Dn),{pathname:o}=Bn(),f=JSON.stringify(Wm(s));return y.useMemo(()=>Im(a,JSON.parse(f),o,i==="path"),[a,f,o,i])}function Hv(a,i){return ag(a,i)}function ag(a,i,s,o,f){Xe(er(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=y.useContext(un),{matches:p}=y.useContext(Dn),v=p[p.length-1],x=v?v.params:{},m=v?v.pathname:"/",S=v?v.pathnameBase:"/",w=v&&v.route;{let H=w&&w.path||"";lg(m,!w||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let z=Bn(),M;if(i){let H=typeof i=="string"?Hl(i):i;Xe(S==="/"||H.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${H.pathname}" was given in the \`location\` prop.`),M=H}else M=z;let R=M.pathname||"/",N=R;if(S!=="/"){let H=S.replace(/^\//,"").split("/");N="/"+R.replace(/^\//,"").split("/").slice(H.length).join("/")}let B=Zm(a,{pathname:N});sn(w||B!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),sn(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=Vv(B&&B.map(H=>Object.assign({},H,{params:Object.assign({},x,H.params),pathname:Nn([S,d.encodeLocation?d.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?S:Nn([S,d.encodeLocation?d.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),p,s,o,f);return i&&L?y.createElement(Pi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},L):L}function Yv(){let a=Fv(),i=_v(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),s=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:d},"ErrorBoundary")," or"," ",y.createElement("code",{style:d},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},i),s?y.createElement("pre",{style:f},s):null,p)}var Gv=y.createElement(Yv,null),qv=class extends y.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.unstable_onError?this.props.unstable_onError(a,i):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?y.createElement(Dn.Provider,{value:this.props.routeContext},y.createElement(Lf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Xv({routeContext:a,match:i,children:s}){let o=y.useContext(Yl);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),y.createElement(Dn.Provider,{value:a},s)}function Vv(a,i=[],s=null,o=null,f=null){if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(i.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let d=a,p=s?.errors;if(p!=null){let m=d.findIndex(S=>S.route.id&&p?.[S.route.id]!==void 0);Xe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,m+1))}let v=!1,x=-1;if(s)for(let m=0;m<d.length;m++){let S=d[m];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(x=m),S.route.id){let{loaderData:w,errors:z}=s,M=S.route.loader&&!w.hasOwnProperty(S.route.id)&&(!z||z[S.route.id]===void 0);if(S.route.lazy||M){v=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}return d.reduceRight((m,S,w)=>{let z,M=!1,R=null,N=null;s&&(z=p&&S.route.id?p[S.route.id]:void 0,R=S.route.errorElement||Gv,v&&(x<0&&w===0?(lg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,N=null):x===w&&(M=!0,N=S.route.hydrateFallbackElement||null)));let B=i.concat(d.slice(0,w+1)),L=()=>{let H;return z?H=R:M?H=N:S.route.Component?H=y.createElement(S.route.Component,null):S.route.element?H=S.route.element:H=m,y.createElement(Xv,{match:S,routeContext:{outlet:m,matches:B,isDataRoute:s!=null},children:H})};return s&&(S.route.ErrorBoundary||S.route.errorElement||w===0)?y.createElement(qv,{location:s.location,revalidation:s.revalidation,component:R,error:z,children:L(),routeContext:{outlet:null,matches:B,isDataRoute:!0},unstable_onError:o}):L()},null)}function Uf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qv(a){let i=y.useContext(Yl);return Xe(i,Uf(a)),i}function Kv(a){let i=y.useContext(ac);return Xe(i,Uf(a)),i}function Zv(a){let i=y.useContext(Dn);return Xe(i,Uf(a)),i}function Hf(a){let i=Zv(a),s=i.matches[i.matches.length-1];return Xe(s.route.id,`${a} can only be used on routes that contain a unique "id"`),s.route.id}function Jv(){return Hf("useRouteId")}function Fv(){let a=y.useContext(Lf),i=Kv("useRouteError"),s=Hf("useRouteError");return a!==void 0?a:i.errors?.[s]}function Wv(){let{router:a}=Qv("useNavigate"),i=Hf("useNavigate"),s=y.useRef(!1);return ng(()=>{s.current=!0}),y.useCallback(async(f,d={})=>{sn(s.current,tg),s.current&&(typeof f=="number"?a.navigate(f):await a.navigate(f,{fromRouteId:i,...d}))},[a,i])}var w1={};function lg(a,i,s){!i&&!w1[a]&&(w1[a]=!0,sn(!1,s))}y.memo(Iv);function Iv({routes:a,future:i,state:s,unstable_onError:o}){return ag(a,void 0,s,o,i)}function Da(a){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Pv({basename:a="/",children:i=null,location:s,navigationType:o="POP",navigator:f,static:d=!1}){Xe(!er(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),v=y.useMemo(()=>({basename:p,navigator:f,static:d,future:{}}),[p,f,d]);typeof s=="string"&&(s=Hl(s));let{pathname:x="/",search:m="",hash:S="",state:w=null,key:z="default"}=s,M=y.useMemo(()=>{let R=$n(x,p);return R==null?null:{location:{pathname:R,search:m,hash:S,state:w,key:z},navigationType:o}},[p,x,m,S,w,z,o]);return sn(M!=null,`<Router basename="${p}"> is not able to match the URL "${x}${m}${S}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:y.createElement(un.Provider,{value:v},y.createElement(Pi.Provider,{children:i,value:M}))}function eb({children:a,location:i}){return Hv(jf(a),i)}function jf(a,i=[]){let s=[];return y.Children.forEach(a,(o,f)=>{if(!y.isValidElement(o))return;let d=[...i,f];if(o.type===y.Fragment){s.push.apply(s,jf(o.props.children,d));return}Xe(o.type===Da,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=jf(o.props.children,d)),s.push(p)}),s}var Lo="get",Uo="application/x-www-form-urlencoded";function ic(a){return a!=null&&typeof a.tagName=="string"}function tb(a){return ic(a)&&a.tagName.toLowerCase()==="button"}function nb(a){return ic(a)&&a.tagName.toLowerCase()==="form"}function ab(a){return ic(a)&&a.tagName.toLowerCase()==="input"}function lb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function ib(a,i){return a.button===0&&(!i||i==="_self")&&!lb(a)}var So=null;function rb(){if(So===null)try{new FormData(document.createElement("form"),0),So=!1}catch{So=!0}return So}var ob=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hu(a){return a!=null&&!ob.has(a)?(sn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uo}"`),null):a}function cb(a,i){let s,o,f,d,p;if(nb(a)){let v=a.getAttribute("action");o=v?$n(v,i):null,s=a.getAttribute("method")||Lo,f=Hu(a.getAttribute("enctype"))||Uo,d=new FormData(a)}else if(tb(a)||ab(a)&&(a.type==="submit"||a.type==="image")){let v=a.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=a.getAttribute("formaction")||v.getAttribute("action");if(o=x?$n(x,i):null,s=a.getAttribute("formmethod")||v.getAttribute("method")||Lo,f=Hu(a.getAttribute("formenctype"))||Hu(v.getAttribute("enctype"))||Uo,d=new FormData(v,a),!rb()){let{name:m,type:S,value:w}=a;if(S==="image"){let z=m?`${m}.`:"";d.append(`${z}x`,"0"),d.append(`${z}y`,"0")}else m&&d.append(m,w)}}else{if(ic(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Lo,o=null,f=Uo,p=a}return d&&f==="text/plain"&&(p=d,d=void 0),{action:o,method:s.toLowerCase(),encType:f,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Yf(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function sb(a,i,s){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname=`_root.${s}`:i&&$n(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function ub(a,i){if(a.id in i)return i[a.id];try{let s=await import(a.module);return i[a.id]=s,s}catch(s){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function db(a,i,s){let o=await Promise.all(a.map(async f=>{let d=i.routes[f.route.id];if(d){let p=await ub(d,s);return p.links?p.links():[]}return[]}));return gb(o.flat(1).filter(fb).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function j1(a,i,s,o,f,d){let p=(x,m)=>s[m]?x.route.id!==s[m].route.id:!0,v=(x,m)=>s[m].pathname!==x.pathname||s[m].route.path?.endsWith("*")&&s[m].params["*"]!==x.params["*"];return d==="assets"?i.filter((x,m)=>p(x,m)||v(x,m)):d==="data"?i.filter((x,m)=>{let S=o.routes[x.route.id];if(!S||!S.hasLoader)return!1;if(p(x,m)||v(x,m))return!0;if(x.route.shouldRevalidate){let w=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function hb(a,i,{includeHydrateFallback:s}={}){return pb(a.map(o=>{let f=i.routes[o.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function pb(a){return[...new Set(a)]}function mb(a){let i={},s=Object.keys(a).sort();for(let o of s)i[o]=a[o];return i}function gb(a,i){let s=new Set;return new Set(i),a.reduce((o,f)=>{let d=JSON.stringify(mb(f));return s.has(d)||(s.add(d),o.push({key:d,link:f})),o},[])}function ig(){let a=y.useContext(Yl);return Yf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function xb(){let a=y.useContext(ac);return Yf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Gf=y.createContext(void 0);Gf.displayName="FrameworkContext";function rg(){let a=y.useContext(Gf);return Yf(a,"You must render this element inside a <HydratedRouter> element"),a}function yb(a,i){let s=y.useContext(Gf),[o,f]=y.useState(!1),[d,p]=y.useState(!1),{onFocus:v,onBlur:x,onMouseEnter:m,onMouseLeave:S,onTouchStart:w}=i,z=y.useRef(null);y.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let N=L=>{L.forEach(H=>{p(H.isIntersecting)})},B=new IntersectionObserver(N,{threshold:.5});return z.current&&B.observe(z.current),()=>{B.disconnect()}}},[a]),y.useEffect(()=>{if(o){let N=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(N)}}},[o]);let M=()=>{f(!0)},R=()=>{f(!1),p(!1)};return s?a!=="intent"?[d,z,{}]:[d,z,{onFocus:Gi(v,M),onBlur:Gi(x,R),onMouseEnter:Gi(m,M),onMouseLeave:Gi(S,R),onTouchStart:Gi(w,M)}]:[!1,z,{}]}function Gi(a,i){return s=>{a&&a(s),s.defaultPrevented||i(s)}}function vb({page:a,...i}){let{router:s}=ig(),o=y.useMemo(()=>Zm(s.routes,a,s.basename),[s.routes,a,s.basename]);return o?y.createElement(Sb,{page:a,matches:o,...i}):null}function bb(a){let{manifest:i,routeModules:s}=rg(),[o,f]=y.useState([]);return y.useEffect(()=>{let d=!1;return db(a,i,s).then(p=>{d||f(p)}),()=>{d=!0}},[a,i,s]),o}function Sb({page:a,matches:i,...s}){let o=Bn(),{manifest:f,routeModules:d}=rg(),{basename:p}=ig(),{loaderData:v,matches:x}=xb(),m=y.useMemo(()=>j1(a,i,x,f,o,"data"),[a,i,x,f,o]),S=y.useMemo(()=>j1(a,i,x,f,o,"assets"),[a,i,x,f,o]),w=y.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let R=new Set,N=!1;if(i.forEach(L=>{let H=f.routes[L.route.id];!H||!H.hasLoader||(!m.some(G=>G.route.id===L.route.id)&&L.route.id in v&&d[L.route.id]?.shouldRevalidate||H.hasClientLoader?N=!0:R.add(L.route.id))}),R.size===0)return[];let B=sb(a,p,"data");return N&&R.size>0&&B.searchParams.set("_routes",i.filter(L=>R.has(L.route.id)).map(L=>L.route.id).join(",")),[B.pathname+B.search]},[p,v,o,f,m,i,a,d]),z=y.useMemo(()=>hb(S,f),[S,f]),M=bb(S);return y.createElement(y.Fragment,null,w.map(R=>y.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...s})),z.map(R=>y.createElement("link",{key:R,rel:"modulepreload",href:R,...s})),M.map(({key:R,link:N})=>y.createElement("link",{key:R,nonce:s.nonce,...N})))}function wb(...a){return i=>{a.forEach(s=>{typeof s=="function"?s(i):s!=null&&(s.current=i)})}}var og=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{og&&(window.__reactRouterVersion="7.9.4")}catch{}function jb({basename:a,children:i,window:s}){let o=y.useRef();o.current==null&&(o.current=fv({window:s,v5Compat:!0}));let f=o.current,[d,p]=y.useState({action:f.action,location:f.location}),v=y.useCallback(x=>{y.startTransition(()=>p(x))},[p]);return y.useLayoutEffect(()=>f.listen(v),[f,v]),y.createElement(Pv,{basename:a,children:i,location:d.location,navigationType:d.action,navigator:f})}var cg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gl=y.forwardRef(function({onClick:i,discover:s="render",prefetch:o="none",relative:f,reloadDocument:d,replace:p,state:v,target:x,to:m,preventScrollReset:S,viewTransition:w,...z},M){let{basename:R}=y.useContext(un),N=typeof m=="string"&&cg.test(m),B,L=!1;if(typeof m=="string"&&N&&(B=m,og))try{let F=new URL(window.location.href),ce=m.startsWith("//")?new URL(F.protocol+m):new URL(m),de=$n(ce.pathname,R);ce.origin===F.origin&&de!=null?m=de+ce.search+ce.hash:L=!0}catch{sn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=Lv(m,{relative:f}),[G,q,K]=yb(o,z),D=Tb(m,{replace:p,state:v,target:x,preventScrollReset:S,relative:f,viewTransition:w});function V(F){i&&i(F),F.defaultPrevented||D(F)}let Z=y.createElement("a",{...z,...K,href:B||H,onClick:L||d?i:V,ref:wb(M,q),target:x,"data-discover":!N&&s==="render"?"true":void 0});return G&&!N?y.createElement(y.Fragment,null,Z,y.createElement(vb,{page:H})):Z});Gl.displayName="Link";var Eb=y.forwardRef(function({"aria-current":i="page",caseSensitive:s=!1,className:o="",end:f=!1,style:d,to:p,viewTransition:v,children:x,...m},S){let w=tr(p,{relative:m.relative}),z=Bn(),M=y.useContext(ac),{navigator:R,basename:N}=y.useContext(un),B=M!=null&&kb(w)&&v===!0,L=R.encodeLocation?R.encodeLocation(w).pathname:w.pathname,H=z.pathname,G=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;s||(H=H.toLowerCase(),G=G?G.toLowerCase():null,L=L.toLowerCase()),G&&N&&(G=$n(G,N)||G);const q=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let K=H===L||!f&&H.startsWith(L)&&H.charAt(q)==="/",D=G!=null&&(G===L||!f&&G.startsWith(L)&&G.charAt(L.length)==="/"),V={isActive:K,isPending:D,isTransitioning:B},Z=K?i:void 0,F;typeof o=="function"?F=o(V):F=[o,K?"active":null,D?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let ce=typeof d=="function"?d(V):d;return y.createElement(Gl,{...m,"aria-current":Z,className:F,ref:S,style:ce,to:p,viewTransition:v},typeof x=="function"?x(V):x)});Eb.displayName="NavLink";var Cb=y.forwardRef(({discover:a="render",fetcherKey:i,navigate:s,reloadDocument:o,replace:f,state:d,method:p=Lo,action:v,onSubmit:x,relative:m,preventScrollReset:S,viewTransition:w,...z},M)=>{let R=Ab(),N=Ob(v,{relative:m}),B=p.toLowerCase()==="get"?"get":"post",L=typeof v=="string"&&cg.test(v),H=G=>{if(x&&x(G),G.defaultPrevented)return;G.preventDefault();let q=G.nativeEvent.submitter,K=q?.getAttribute("formmethod")||p;R(q||G.currentTarget,{fetcherKey:i,method:K,navigate:s,replace:f,state:d,relative:m,preventScrollReset:S,viewTransition:w})};return y.createElement("form",{ref:M,method:B,action:N,onSubmit:o?x:H,...z,"data-discover":!L&&a==="render"?"true":void 0})});Cb.displayName="Form";function zb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sg(a){let i=y.useContext(Yl);return Xe(i,zb(a)),i}function Tb(a,{target:i,replace:s,state:o,preventScrollReset:f,relative:d,viewTransition:p}={}){let v=lc(),x=Bn(),m=tr(a,{relative:d});return y.useCallback(S=>{if(ib(S,i)){S.preventDefault();let w=s!==void 0?s:Ki(x)===Ki(m);v(a,{replace:w,state:o,preventScrollReset:f,relative:d,viewTransition:p})}},[x,v,m,s,o,i,a,f,d,p])}var Mb=0,Rb=()=>`__${String(++Mb)}__`;function Ab(){let{router:a}=sg("useSubmit"),{basename:i}=y.useContext(un),s=Jv();return y.useCallback(async(o,f={})=>{let{action:d,method:p,encType:v,formData:x,body:m}=cb(o,i);if(f.navigate===!1){let S=f.fetcherKey||Rb();await a.fetch(S,s,f.action||d,{preventScrollReset:f.preventScrollReset,formData:x,body:m,formMethod:f.method||p,formEncType:f.encType||v,flushSync:f.flushSync})}else await a.navigate(f.action||d,{preventScrollReset:f.preventScrollReset,formData:x,body:m,formMethod:f.method||p,formEncType:f.encType||v,replace:f.replace,state:f.state,fromRouteId:s,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,i,s])}function Ob(a,{relative:i}={}){let{basename:s}=y.useContext(un),o=y.useContext(Dn);Xe(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),d={...tr(a||".",{relative:i})},p=Bn();if(a==null){d.search=p.search;let v=new URLSearchParams(d.search),x=v.getAll("index");if(x.some(S=>S==="")){v.delete("index"),x.filter(w=>w).forEach(w=>v.append("index",w));let S=v.toString();d.search=S?`?${S}`:""}}return(!a||a===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:Nn([s,d.pathname])),Ki(d)}function kb(a,{relative:i}={}){let s=y.useContext(eg);Xe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=sg("useViewTransitionState"),f=tr(a,{relative:i});if(!s.isTransitioning)return!1;let d=$n(s.currentLocation.pathname,o)||s.currentLocation.pathname,p=$n(s.nextLocation.pathname,o)||s.nextLocation.pathname;return Ko(f.pathname,p)!=null||Ko(f.pathname,d)!=null}var Nb=Km();const Ol=Ii(Nb);var ht=function(){return ht=Object.assign||function(i){for(var s,o=1,f=arguments.length;o<f;o++){s=arguments[o];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(i[d]=s[d])}return i},ht.apply(this,arguments)};function _l(a,i,s){if(s||arguments.length===2)for(var o=0,f=i.length,d;o<f;o++)(d||!(o in i))&&(d||(d=Array.prototype.slice.call(i,0,o)),d[o]=i[o]);return a.concat(d||Array.prototype.slice.call(i))}var Ye="-ms-",Qi="-moz-",Me="-webkit-",ug="comm",rc="rule",qf="decl",_b="@import",fg="@keyframes",$b="@layer",dg=Math.abs,Xf=String.fromCharCode,Ef=Object.assign;function Db(a,i){return it(a,0)^45?(((i<<2^it(a,0))<<2^it(a,1))<<2^it(a,2))<<2^it(a,3):0}function hg(a){return a.trim()}function An(a,i){return(a=i.exec(a))?a[0]:a}function ge(a,i,s){return a.replace(i,s)}function Ho(a,i,s){return a.indexOf(i,s)}function it(a,i){return a.charCodeAt(i)|0}function $l(a,i,s){return a.slice(i,s)}function cn(a){return a.length}function pg(a){return a.length}function Xi(a,i){return i.push(a),a}function Bb(a,i){return a.map(i).join("")}function E1(a,i){return a.filter(function(s){return!An(s,i)})}var oc=1,Dl=1,mg=0,Jt=0,et=0,ql="";function cc(a,i,s,o,f,d,p,v){return{value:a,root:i,parent:s,type:o,props:f,children:d,line:oc,column:Dl,length:p,return:"",siblings:v}}function pa(a,i){return Ef(cc("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function zl(a){for(;a.root;)a=pa(a.root,{children:[a]});Xi(a,a.siblings)}function Lb(){return et}function Ub(){return et=Jt>0?it(ql,--Jt):0,Dl--,et===10&&(Dl=1,oc--),et}function tn(){return et=Jt<mg?it(ql,Jt++):0,Dl++,et===10&&(Dl=1,oc++),et}function Ua(){return it(ql,Jt)}function Yo(){return Jt}function sc(a,i){return $l(ql,a,i)}function Cf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hb(a){return oc=Dl=1,mg=cn(ql=a),Jt=0,[]}function Yb(a){return ql="",a}function Yu(a){return hg(sc(Jt-1,zf(a===91?a+2:a===40?a+1:a)))}function Gb(a){for(;(et=Ua())&&et<33;)tn();return Cf(a)>2||Cf(et)>3?"":" "}function qb(a,i){for(;--i&&tn()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return sc(a,Yo()+(i<6&&Ua()==32&&tn()==32))}function zf(a){for(;tn();)switch(et){case a:return Jt;case 34:case 39:a!==34&&a!==39&&zf(et);break;case 40:a===41&&zf(a);break;case 92:tn();break}return Jt}function Xb(a,i){for(;tn()&&a+et!==57;)if(a+et===84&&Ua()===47)break;return"/*"+sc(i,Jt-1)+"*"+Xf(a===47?a:tn())}function Vb(a){for(;!Cf(Ua());)tn();return sc(a,Jt)}function Qb(a){return Yb(Go("",null,null,null,[""],a=Hb(a),0,[0],a))}function Go(a,i,s,o,f,d,p,v,x){for(var m=0,S=0,w=p,z=0,M=0,R=0,N=1,B=1,L=1,H=0,G="",q=f,K=d,D=o,V=G;B;)switch(R=H,H=tn()){case 40:if(R!=108&&it(V,w-1)==58){Ho(V+=ge(Yu(H),"&","&\f"),"&\f",dg(m?v[m-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:V+=Yu(H);break;case 9:case 10:case 13:case 32:V+=Gb(R);break;case 92:V+=qb(Yo()-1,7);continue;case 47:switch(Ua()){case 42:case 47:Xi(Kb(Xb(tn(),Yo()),i,s,x),x);break;default:V+="/"}break;case 123*N:v[m++]=cn(V)*L;case 125*N:case 59:case 0:switch(H){case 0:case 125:B=0;case 59+S:L==-1&&(V=ge(V,/\f/g,"")),M>0&&cn(V)-w&&Xi(M>32?z1(V+";",o,s,w-1,x):z1(ge(V," ","")+";",o,s,w-2,x),x);break;case 59:V+=";";default:if(Xi(D=C1(V,i,s,m,S,f,v,G,q=[],K=[],w,d),d),H===123)if(S===0)Go(V,i,D,D,q,d,w,v,K);else switch(z===99&&it(V,3)===110?100:z){case 100:case 108:case 109:case 115:Go(a,D,D,o&&Xi(C1(a,D,D,0,0,f,v,G,f,q=[],w,K),K),f,K,w,v,o?q:K);break;default:Go(V,D,D,D,[""],K,0,v,K)}}m=S=M=0,N=L=1,G=V="",w=p;break;case 58:w=1+cn(V),M=R;default:if(N<1){if(H==123)--N;else if(H==125&&N++==0&&Ub()==125)continue}switch(V+=Xf(H),H*N){case 38:L=S>0?1:(V+="\f",-1);break;case 44:v[m++]=(cn(V)-1)*L,L=1;break;case 64:Ua()===45&&(V+=Yu(tn())),z=Ua(),S=w=cn(G=V+=Vb(Yo())),H++;break;case 45:R===45&&cn(V)==2&&(N=0)}}return d}function C1(a,i,s,o,f,d,p,v,x,m,S,w){for(var z=f-1,M=f===0?d:[""],R=pg(M),N=0,B=0,L=0;N<o;++N)for(var H=0,G=$l(a,z+1,z=dg(B=p[N])),q=a;H<R;++H)(q=hg(B>0?M[H]+" "+G:ge(G,/&\f/g,M[H])))&&(x[L++]=q);return cc(a,i,s,f===0?rc:v,x,m,S,w)}function Kb(a,i,s,o){return cc(a,i,s,ug,Xf(Lb()),$l(a,2,-2),0,o)}function z1(a,i,s,o,f){return cc(a,i,s,qf,$l(a,0,o),$l(a,o+1,-1),o,f)}function gg(a,i,s){switch(Db(a,i)){case 5103:return Me+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+a+a;case 4789:return Qi+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+a+Qi+a+Ye+a+a;case 5936:switch(it(a,i+11)){case 114:return Me+a+Ye+ge(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Me+a+Ye+ge(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Me+a+Ye+ge(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Me+a+Ye+a+a;case 6165:return Me+a+Ye+"flex-"+a+a;case 5187:return Me+a+ge(a,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Ye+"flex-$1$2")+a;case 5443:return Me+a+Ye+"flex-item-"+ge(a,/flex-|-self/g,"")+(An(a,/flex-|baseline/)?"":Ye+"grid-row-"+ge(a,/flex-|-self/g,""))+a;case 4675:return Me+a+Ye+"flex-line-pack"+ge(a,/align-content|flex-|-self/g,"")+a;case 5548:return Me+a+Ye+ge(a,"shrink","negative")+a;case 5292:return Me+a+Ye+ge(a,"basis","preferred-size")+a;case 6060:return Me+"box-"+ge(a,"-grow","")+Me+a+Ye+ge(a,"grow","positive")+a;case 4554:return Me+ge(a,/([^-])(transform)/g,"$1"+Me+"$2")+a;case 6187:return ge(ge(ge(a,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),a,"")+a;case 5495:case 3959:return ge(a,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return ge(ge(a,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+a+a;case 4200:if(!An(a,/flex-|baseline/))return Ye+"grid-column-align"+$l(a,i)+a;break;case 2592:case 3360:return Ye+ge(a,"template-","")+a;case 4384:case 3616:return s&&s.some(function(o,f){return i=f,An(o.props,/grid-\w+-end/)})?~Ho(a+(s=s[i].value),"span",0)?a:Ye+ge(a,"-start","")+a+Ye+"grid-row-span:"+(~Ho(s,"span",0)?An(s,/\d+/):+An(s,/\d+/)-+An(a,/\d+/))+";":Ye+ge(a,"-start","")+a;case 4896:case 4128:return s&&s.some(function(o){return An(o.props,/grid-\w+-start/)})?a:Ye+ge(ge(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ge(a,/(.+)-inline(.+)/,Me+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(a)-1-i>6)switch(it(a,i+1)){case 109:if(it(a,i+4)!==45)break;case 102:return ge(a,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Qi+(it(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~Ho(a,"stretch",0)?gg(ge(a,"stretch","fill-available"),i,s)+a:a}break;case 5152:case 5920:return ge(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,f,d,p,v,x,m){return Ye+f+":"+d+m+(p?Ye+f+"-span:"+(v?x:+x-+d)+m:"")+a});case 4949:if(it(a,i+6)===121)return ge(a,":",":"+Me)+a;break;case 6444:switch(it(a,it(a,14)===45?18:11)){case 120:return ge(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(it(a,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Ye+"$2box$3")+a;case 100:return ge(a,":",":"+Ye)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(a,"scroll-","scroll-snap-")+a}return a}function Zo(a,i){for(var s="",o=0;o<a.length;o++)s+=i(a[o],o,a,i)||"";return s}function Zb(a,i,s,o){switch(a.type){case $b:if(a.children.length)break;case _b:case qf:return a.return=a.return||a.value;case ug:return"";case fg:return a.return=a.value+"{"+Zo(a.children,o)+"}";case rc:if(!cn(a.value=a.props.join(",")))return""}return cn(s=Zo(a.children,o))?a.return=a.value+"{"+s+"}":""}function Jb(a){var i=pg(a);return function(s,o,f,d){for(var p="",v=0;v<i;v++)p+=a[v](s,o,f,d)||"";return p}}function Fb(a){return function(i){i.root||(i=i.return)&&a(i)}}function Wb(a,i,s,o){if(a.length>-1&&!a.return)switch(a.type){case qf:a.return=gg(a.value,a.length,s);return;case fg:return Zo([pa(a,{value:ge(a.value,"@","@"+Me)})],o);case rc:if(a.length)return Bb(s=a.props,function(f){switch(An(f,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zl(pa(a,{props:[ge(f,/:(read-\w+)/,":"+Qi+"$1")]})),zl(pa(a,{props:[f]})),Ef(a,{props:E1(s,o)});break;case"::placeholder":zl(pa(a,{props:[ge(f,/:(plac\w+)/,":"+Me+"input-$1")]})),zl(pa(a,{props:[ge(f,/:(plac\w+)/,":"+Qi+"$1")]})),zl(pa(a,{props:[ge(f,/:(plac\w+)/,Ye+"input-$1")]})),zl(pa(a,{props:[f]})),Ef(a,{props:E1(s,o)});break}return""})}}var Ib={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bt={},Bl=typeof process<"u"&&Bt!==void 0&&(Bt.REACT_APP_SC_ATTR||Bt.SC_ATTR)||"data-styled",xg="active",yg="data-styled-version",uc="6.1.19",Vf=`/*!sc*/
`,Jo=typeof window<"u"&&typeof document<"u",Pb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==""?Bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.SC_DISABLE_SPEEDY!==void 0&&Bt.SC_DISABLE_SPEEDY!==""&&Bt.SC_DISABLE_SPEEDY!=="false"&&Bt.SC_DISABLE_SPEEDY),e5={},fc=Object.freeze([]),Ll=Object.freeze({});function vg(a,i,s){return s===void 0&&(s=Ll),a.theme!==s.theme&&a.theme||i||s.theme}var bg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),t5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,n5=/(^-|-$)/g;function T1(a){return a.replace(t5,"-").replace(n5,"")}var a5=/(a)(d)/gi,wo=52,M1=function(a){return String.fromCharCode(a+(a>25?39:97))};function Tf(a){var i,s="";for(i=Math.abs(a);i>wo;i=i/wo|0)s=M1(i%wo)+s;return(M1(i%wo)+s).replace(a5,"$1-$2")}var Gu,Sg=5381,kl=function(a,i){for(var s=i.length;s;)a=33*a^i.charCodeAt(--s);return a},wg=function(a){return kl(Sg,a)};function Qf(a){return Tf(wg(a)>>>0)}function l5(a){return a.displayName||a.name||"Component"}function qu(a){return typeof a=="string"&&!0}var jg=typeof Symbol=="function"&&Symbol.for,Eg=jg?Symbol.for("react.memo"):60115,i5=jg?Symbol.for("react.forward_ref"):60112,r5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c5=((Gu={})[i5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gu[Eg]=Cg,Gu);function R1(a){return("type"in(i=a)&&i.type.$$typeof)===Eg?Cg:"$$typeof"in a?c5[a.$$typeof]:r5;var i}var s5=Object.defineProperty,u5=Object.getOwnPropertyNames,A1=Object.getOwnPropertySymbols,f5=Object.getOwnPropertyDescriptor,d5=Object.getPrototypeOf,O1=Object.prototype;function zg(a,i,s){if(typeof i!="string"){if(O1){var o=d5(i);o&&o!==O1&&zg(a,o,s)}var f=u5(i);A1&&(f=f.concat(A1(i)));for(var d=R1(a),p=R1(i),v=0;v<f.length;++v){var x=f[v];if(!(x in o5||s&&s[x]||p&&x in p||d&&x in d)){var m=f5(i,x);try{s5(a,x,m)}catch{}}}}return a}function Ul(a){return typeof a=="function"}function Kf(a){return typeof a=="object"&&"styledComponentId"in a}function La(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function Fo(a,i){if(a.length===0)return"";for(var s=a[0],o=1;o<a.length;o++)s+=a[o];return s}function Zi(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Mf(a,i,s){if(s===void 0&&(s=!1),!s&&!Zi(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var o=0;o<i.length;o++)a[o]=Mf(a[o],i[o]);else if(Zi(i))for(var o in i)a[o]=Mf(a[o],i[o]);return a}function Zf(a,i){Object.defineProperty(a,"toString",{value:i})}function nr(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var h5=(function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return a.prototype.indexOfGroup=function(i){for(var s=0,o=0;o<i;o++)s+=this.groupSizes[o];return s},a.prototype.insertRules=function(i,s){if(i>=this.groupSizes.length){for(var o=this.groupSizes,f=o.length,d=f;i>=d;)if((d<<=1)<0)throw nr(16,"".concat(i));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var p=f;p<d;p++)this.groupSizes[p]=0}for(var v=this.indexOfGroup(i+1),x=(p=0,s.length);p<x;p++)this.tag.insertRule(v,s[p])&&(this.groupSizes[i]++,v++)},a.prototype.clearGroup=function(i){if(i<this.length){var s=this.groupSizes[i],o=this.indexOfGroup(i),f=o+s;this.groupSizes[i]=0;for(var d=o;d<f;d++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(i){var s="";if(i>=this.length||this.groupSizes[i]===0)return s;for(var o=this.groupSizes[i],f=this.indexOfGroup(i),d=f+o,p=f;p<d;p++)s+="".concat(this.tag.getRule(p)).concat(Vf);return s},a})(),qo=new Map,Wo=new Map,Xo=1,jo=function(a){if(qo.has(a))return qo.get(a);for(;Wo.has(Xo);)Xo++;var i=Xo++;return qo.set(a,i),Wo.set(i,a),i},p5=function(a,i){Xo=i+1,qo.set(a,i),Wo.set(i,a)},m5="style[".concat(Bl,"][").concat(yg,'="').concat(uc,'"]'),g5=new RegExp("^".concat(Bl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),x5=function(a,i,s){for(var o,f=s.split(","),d=0,p=f.length;d<p;d++)(o=f[d])&&a.registerName(i,o)},y5=function(a,i){for(var s,o=((s=i.textContent)!==null&&s!==void 0?s:"").split(Vf),f=[],d=0,p=o.length;d<p;d++){var v=o[d].trim();if(v){var x=v.match(g5);if(x){var m=0|parseInt(x[1],10),S=x[2];m!==0&&(p5(S,m),x5(a,S,x[3]),a.getTag().insertRules(m,f)),f.length=0}else f.push(v)}}},k1=function(a){for(var i=document.querySelectorAll(m5),s=0,o=i.length;s<o;s++){var f=i[s];f&&f.getAttribute(Bl)!==xg&&(y5(a,f),f.parentNode&&f.parentNode.removeChild(f))}};function v5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tg=function(a){var i=document.head,s=a||i,o=document.createElement("style"),f=(function(v){var x=Array.from(v.querySelectorAll("style[".concat(Bl,"]")));return x[x.length-1]})(s),d=f!==void 0?f.nextSibling:null;o.setAttribute(Bl,xg),o.setAttribute(yg,uc);var p=v5();return p&&o.setAttribute("nonce",p),s.insertBefore(o,d),o},b5=(function(){function a(i){this.element=Tg(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var o=document.styleSheets,f=0,d=o.length;f<d;f++){var p=o[f];if(p.ownerNode===s)return p}throw nr(17)})(this.element),this.length=0}return a.prototype.insertRule=function(i,s){try{return this.sheet.insertRule(s,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var s=this.sheet.cssRules[i];return s&&s.cssText?s.cssText:""},a})(),S5=(function(){function a(i){this.element=Tg(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,s){if(i<=this.length&&i>=0){var o=document.createTextNode(s);return this.element.insertBefore(o,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a})(),w5=(function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,s){return i<=this.length&&(this.rules.splice(i,0,s),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a})(),N1=Jo,j5={isServer:!Jo,useCSSOMInjection:!Pb},Io=(function(){function a(i,s,o){i===void 0&&(i=Ll),s===void 0&&(s={});var f=this;this.options=ht(ht({},j5),i),this.gs=s,this.names=new Map(o),this.server=!!i.isServer,!this.server&&Jo&&N1&&(N1=!1,k1(this)),Zf(this,function(){return(function(d){for(var p=d.getTag(),v=p.length,x="",m=function(w){var z=(function(L){return Wo.get(L)})(w);if(z===void 0)return"continue";var M=d.names.get(z),R=p.getGroup(w);if(M===void 0||!M.size||R.length===0)return"continue";var N="".concat(Bl,".g").concat(w,'[id="').concat(z,'"]'),B="";M!==void 0&&M.forEach(function(L){L.length>0&&(B+="".concat(L,","))}),x+="".concat(R).concat(N,'{content:"').concat(B,'"}').concat(Vf)},S=0;S<v;S++)m(S);return x})(f)})}return a.registerId=function(i){return jo(i)},a.prototype.rehydrate=function(){!this.server&&Jo&&k1(this)},a.prototype.reconstructWithOptions=function(i,s){return s===void 0&&(s=!0),new a(ht(ht({},this.options),i),this.gs,s&&this.names||void 0)},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(s){var o=s.useCSSOMInjection,f=s.target;return s.isServer?new w5(f):o?new b5(f):new S5(f)})(this.options),new h5(i)));var i},a.prototype.hasNameForId=function(i,s){return this.names.has(i)&&this.names.get(i).has(s)},a.prototype.registerName=function(i,s){if(jo(i),this.names.has(i))this.names.get(i).add(s);else{var o=new Set;o.add(s),this.names.set(i,o)}},a.prototype.insertRules=function(i,s,o){this.registerName(i,s),this.getTag().insertRules(jo(i),o)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(jo(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a})(),E5=/&/g,C5=/^\s*\/\/.*$/gm;function Mg(a,i){return a.map(function(s){return s.type==="rule"&&(s.value="".concat(i," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(i," ")),s.props=s.props.map(function(o){return"".concat(i," ").concat(o)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=Mg(s.children,i)),s})}function z5(a){var i,s,o,f=Ll,d=f.options,p=d===void 0?Ll:d,v=f.plugins,x=v===void 0?fc:v,m=function(z,M,R){return R.startsWith(s)&&R.endsWith(s)&&R.replaceAll(s,"").length>0?".".concat(i):z},S=x.slice();S.push(function(z){z.type===rc&&z.value.includes("&")&&(z.props[0]=z.props[0].replace(E5,s).replace(o,m))}),p.prefix&&S.push(Wb),S.push(Zb);var w=function(z,M,R,N){M===void 0&&(M=""),R===void 0&&(R=""),N===void 0&&(N="&"),i=N,s=M,o=new RegExp("\\".concat(s,"\\b"),"g");var B=z.replace(C5,""),L=Qb(R||M?"".concat(R," ").concat(M," { ").concat(B," }"):B);p.namespace&&(L=Mg(L,p.namespace));var H=[];return Zo(L,Jb(S.concat(Fb(function(G){return H.push(G)})))),H};return w.hash=x.length?x.reduce(function(z,M){return M.name||nr(15),kl(z,M.name)},Sg).toString():"",w}var T5=new Io,Rf=z5(),Rg=Be.createContext({shouldForwardProp:void 0,styleSheet:T5,stylis:Rf});Rg.Consumer;Be.createContext(void 0);function Af(){return y.useContext(Rg)}var Ag=(function(){function a(i,s){var o=this;this.inject=function(f,d){d===void 0&&(d=Rf);var p=o.name+d.hash;f.hasNameForId(o.id,p)||f.insertRules(o.id,p,d(o.rules,p,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=s,Zf(this,function(){throw nr(12,String(o.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=Rf),this.name+i.hash},a})(),M5=function(a){return a>="A"&&a<="Z"};function _1(a){for(var i="",s=0;s<a.length;s++){var o=a[s];if(s===1&&o==="-"&&a[0]==="-")return a;M5(o)?i+="-"+o.toLowerCase():i+=o}return i.startsWith("ms-")?"-"+i:i}var Og=function(a){return a==null||a===!1||a===""},kg=function(a){var i,s,o=[];for(var f in a){var d=a[f];a.hasOwnProperty(f)&&!Og(d)&&(Array.isArray(d)&&d.isCss||Ul(d)?o.push("".concat(_1(f),":"),d,";"):Zi(d)?o.push.apply(o,_l(_l(["".concat(f," {")],kg(d),!1),["}"],!1)):o.push("".concat(_1(f),": ").concat((i=f,(s=d)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||i in Ib||i.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return o};function ga(a,i,s,o){if(Og(a))return[];if(Kf(a))return[".".concat(a.styledComponentId)];if(Ul(a)){if(!Ul(d=a)||d.prototype&&d.prototype.isReactComponent||!i)return[a];var f=a(i);return ga(f,i,s,o)}var d;return a instanceof Ag?s?(a.inject(s,o),[a.getName(o)]):[a]:Zi(a)?kg(a):Array.isArray(a)?Array.prototype.concat.apply(fc,a.map(function(p){return ga(p,i,s,o)})):[a.toString()]}function Ng(a){for(var i=0;i<a.length;i+=1){var s=a[i];if(Ul(s)&&!Kf(s))return!1}return!0}var R5=wg(uc),A5=(function(){function a(i,s,o){this.rules=i,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Ng(i),this.componentId=s,this.baseHash=kl(R5,s),this.baseStyle=o,Io.registerId(s)}return a.prototype.generateAndInjectStyles=function(i,s,o){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,s,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))f=La(f,this.staticRulesId);else{var d=Fo(ga(this.rules,i,s,o)),p=Tf(kl(this.baseHash,d)>>>0);if(!s.hasNameForId(this.componentId,p)){var v=o(d,".".concat(p),void 0,this.componentId);s.insertRules(this.componentId,p,v)}f=La(f,p),this.staticRulesId=p}else{for(var x=kl(this.baseHash,o.hash),m="",S=0;S<this.rules.length;S++){var w=this.rules[S];if(typeof w=="string")m+=w;else if(w){var z=Fo(ga(w,i,s,o));x=kl(x,z+S),m+=z}}if(m){var M=Tf(x>>>0);s.hasNameForId(this.componentId,M)||s.insertRules(this.componentId,M,o(m,".".concat(M),void 0,this.componentId)),f=La(f,M)}}return f},a})(),Jf=Be.createContext(void 0);Jf.Consumer;var Xu={};function O5(a,i,s){var o=Kf(a),f=a,d=!qu(a),p=i.attrs,v=p===void 0?fc:p,x=i.componentId,m=x===void 0?(function(q,K){var D=typeof q!="string"?"sc":T1(q);Xu[D]=(Xu[D]||0)+1;var V="".concat(D,"-").concat(Qf(uc+D+Xu[D]));return K?"".concat(K,"-").concat(V):V})(i.displayName,i.parentComponentId):x,S=i.displayName,w=S===void 0?(function(q){return qu(q)?"styled.".concat(q):"Styled(".concat(l5(q),")")})(a):S,z=i.displayName&&i.componentId?"".concat(T1(i.displayName),"-").concat(i.componentId):i.componentId||m,M=o&&f.attrs?f.attrs.concat(v).filter(Boolean):v,R=i.shouldForwardProp;if(o&&f.shouldForwardProp){var N=f.shouldForwardProp;if(i.shouldForwardProp){var B=i.shouldForwardProp;R=function(q,K){return N(q,K)&&B(q,K)}}else R=N}var L=new A5(s,z,o?f.componentStyle:void 0);function H(q,K){return(function(D,V,Z){var F=D.attrs,ce=D.componentStyle,de=D.defaultProps,le=D.foldedComponentIds,ie=D.styledComponentId,_e=D.target,De=Be.useContext(Jf),_=Af(),J=D.shouldForwardProp||_.shouldForwardProp,P=vg(V,De,de)||Ll,te=(function(re,ue,xe){for(var qe,Ee=ht(ht({},ue),{className:void 0,theme:xe}),zt=0;zt<re.length;zt+=1){var Ft=Ul(qe=re[zt])?qe(Ee):qe;for(var pt in Ft)Ee[pt]=pt==="className"?La(Ee[pt],Ft[pt]):pt==="style"?ht(ht({},Ee[pt]),Ft[pt]):Ft[pt]}return ue.className&&(Ee.className=La(Ee.className,ue.className)),Ee})(F,V,P),me=te.as||_e,E={};for(var Y in te)te[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&te.theme===P||(Y==="forwardedAs"?E.as=te.forwardedAs:J&&!J(Y,me)||(E[Y]=te[Y]));var W=(function(re,ue){var xe=Af(),qe=re.generateAndInjectStyles(ue,xe.styleSheet,xe.stylis);return qe})(ce,te),I=La(le,ie);return W&&(I+=" "+W),te.className&&(I+=" "+te.className),E[qu(me)&&!bg.has(me)?"class":"className"]=I,Z&&(E.ref=Z),y.createElement(me,E)})(G,q,K)}H.displayName=w;var G=Be.forwardRef(H);return G.attrs=M,G.componentStyle=L,G.displayName=w,G.shouldForwardProp=R,G.foldedComponentIds=o?La(f.foldedComponentIds,f.styledComponentId):"",G.styledComponentId=z,G.target=o?f.target:a,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=o?(function(K){for(var D=[],V=1;V<arguments.length;V++)D[V-1]=arguments[V];for(var Z=0,F=D;Z<F.length;Z++)Mf(K,F[Z],!0);return K})({},f.defaultProps,q):q}}),Zf(G,function(){return".".concat(G.styledComponentId)}),d&&zg(G,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function $1(a,i){for(var s=[a[0]],o=0,f=i.length;o<f;o+=1)s.push(i[o],a[o+1]);return s}var D1=function(a){return Object.assign(a,{isCss:!0})};function xa(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];if(Ul(a)||Zi(a))return D1(ga($1(fc,_l([a],i,!0))));var o=a;return i.length===0&&o.length===1&&typeof o[0]=="string"?ga(o):D1(ga($1(o,i)))}function Of(a,i,s){if(s===void 0&&(s=Ll),!i)throw nr(1,i);var o=function(f){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return a(i,s,xa.apply(void 0,_l([f],d,!1)))};return o.attrs=function(f){return Of(a,i,ht(ht({},s),{attrs:Array.prototype.concat(s.attrs,f).filter(Boolean)}))},o.withConfig=function(f){return Of(a,i,ht(ht({},s),f))},o}var _g=function(a){return Of(O5,a)},b=_g;bg.forEach(function(a){b[a]=_g(a)});var k5=(function(){function a(i,s){this.rules=i,this.componentId=s,this.isStatic=Ng(i),Io.registerId(this.componentId+1)}return a.prototype.createStyles=function(i,s,o,f){var d=f(Fo(ga(this.rules,s,o,f)),""),p=this.componentId+i;o.insertRules(p,p,d)},a.prototype.removeStyles=function(i,s){s.clearRules(this.componentId+i)},a.prototype.renderStyles=function(i,s,o,f){i>2&&Io.registerId(this.componentId+i),this.removeStyles(i,o),this.createStyles(i,s,o,f)},a})();function N5(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];var o=xa.apply(void 0,_l([a],i,!1)),f="sc-global-".concat(Qf(JSON.stringify(o))),d=new k5(o,f),p=function(x){var m=Af(),S=Be.useContext(Jf),w=Be.useRef(m.styleSheet.allocateGSInstance(f)).current;return m.styleSheet.server&&v(w,x,m.styleSheet,S,m.stylis),Be.useLayoutEffect(function(){if(!m.styleSheet.server)return v(w,x,m.styleSheet,S,m.stylis),function(){return d.removeStyles(w,m.styleSheet)}},[w,x,m.styleSheet,S,m.stylis]),null};function v(x,m,S,w,z){if(d.isStatic)d.renderStyles(x,e5,S,z);else{var M=ht(ht({},m),{theme:vg(m,w,p.defaultProps)});d.renderStyles(x,M,S,z)}}return Be.memo(p)}function Et(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];var o=Fo(xa.apply(void 0,_l([a],i,!1))),f=Qf(o);return new Ag(f,o)}var $g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},B1=Be.createContext&&Be.createContext($g),_5=["attr","size","title"];function $5(a,i){if(a==null)return{};var s=D5(a,i),o,f;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(f=0;f<d.length;f++)o=d[f],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(s[o]=a[o])}return s}function D5(a,i){if(a==null)return{};var s={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}function Po(){return Po=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=s[o])}return a},Po.apply(this,arguments)}function L1(a,i){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);i&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(a,f).enumerable})),s.push.apply(s,o)}return s}function ec(a){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?L1(Object(s),!0).forEach(function(o){B5(a,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):L1(Object(s)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(s,o))})}return a}function B5(a,i,s){return i=L5(i),i in a?Object.defineProperty(a,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[i]=s,a}function L5(a){var i=U5(a,"string");return typeof i=="symbol"?i:i+""}function U5(a,i){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var o=s.call(a,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}function Dg(a){return a&&a.map((i,s)=>Be.createElement(i.tag,ec({key:s},i.attr),Dg(i.child)))}function je(a){return i=>Be.createElement(H5,Po({attr:ec({},a.attr)},i),Dg(a.child))}function H5(a){var i=s=>{var{attr:o,size:f,title:d}=a,p=$5(a,_5),v=f||s.size||"1em",x;return s.className&&(x=s.className),a.className&&(x=(x?x+" ":"")+a.className),Be.createElement("svg",Po({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,o,p,{className:x,style:ec(ec({color:a.color||s.color},s.style),a.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),d&&Be.createElement("title",null,d),a.children)};return B1!==void 0?Be.createElement(B1.Consumer,null,s=>i(s)):i($g)}function Ff(a){return je({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(a)}function Wf(a){return je({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(a)}function If(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"},child:[]}]})(a)}function Pf(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"},child:[]}]})(a)}function ed(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"},child:[]}]})(a)}function Bg(a){return je({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(a)}function Y5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(a)}function Lg(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function G5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(a)}function q5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Ug(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(a)}function X5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(a)}function td(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function V5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function Hg(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(a)}function Q5(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(a)}function U1(a){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const K5="/instalearn/assets/vedioClip1-BQ1quwNm.mp4",Z5="/instalearn/assets/test-BrOnAr5c.png",J5="/instalearn/assets/teacherProfilePic-DPrjIuTX.png",F5="/instalearn/assets/Slide1-CH0r16yo.png",W5="/instalearn/assets/Slide3-B6C07YuO.png",I5="/instalearn/assets/Slide4-BbthJNiF.png",P5="/instalearn/assets/Slide5-BsOulZPi.png",e3="/instalearn/assets/Slide6-8dQDHdn3.png",t3="/instalearn/assets/Slide1-CH0r16yo.png",n3="/instalearn/assets/Slide8-2dBFzKRc.png",a3="/instalearn/assets/Slide9-D8lJXVrP.png",Eo={},H1={videoClip1:K5},l3={test:Z5},dc={teacherProfilePic:J5},Rn={Slide1:F5,Slide3:W5,Slide4:I5,Slide5:P5,Slide6:e3,Slide7:t3,Slide8:n3,Slide9:a3};function i3(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M294 240s-21.51 16-38 16-38-16-38-16"},child:[]}]})(a)}const r3=b.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,o3=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  @media (max-width: 520px) {
    padding: 10px 12px;
  }
`,c3=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,s3=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,u3=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,f3=b.span`
  font-weight: 600;
  color: #0f172a;
  font-size: 14px;
  @media (max-width: 520px) { font-size: 13px; }
`,d3=b.span`
  font-size: 12px;
  color: #64748b;
`,h3=b.button`
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
`,p3=b.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`,m3=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,g3=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 8px 12px;
`,x3=b.div`
  display: flex;
  gap: 10px;
`,Co=b.button`
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
`,y3=b.div`
  padding: 12px;
  display: grid;
  gap: 14px;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  @media (min-width: 520px) {
    padding: 14px 16px;
    gap: 16px;
  }
`,Y1=b.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
  @media (min-width: 520px) { padding: 14px; }
`,G1=b.h3`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
`,v3=b.ul`
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
`,q1=b.div`
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
`,X1=b.button`
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`,b3=b.div`
  display: grid;
  gap: 10px;
`,S3=b.p`
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`,w3=b.div`
  display: grid;
  gap: 8px;
`,j3=b.button.withConfig({shouldForwardProp:a=>a!=="$state"})`
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
`,Vo=b.small`
  color: #64748b;
  font-size: 12px;
`,E3=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Yg=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,V1=b.button`
  background: #0f172a;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
`,Gg=b.button`
  background: transparent;
  border: 1px solid rgba(15,23,42,.14);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
`;async function C3(a){const s=await(await fetch(a,{mode:"cors"})).blob(),o=s.type||"image/jpeg",f=await s.arrayBuffer(),d=new Uint8Array(f);let p="";for(let x=0;x<d.byteLength;x++)p+=String.fromCharCode(d[x]);return{base64:btoa(p),mime:o}}function z3({title:a,description:i,username:s}){return`
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
`.trim()}async function T3(a){const{title:i,description:s,username:o,imageUrl:f}=a,d="AIzaSyDYGHcNYuuk43rrYSBVBIQGegzOGVtjGrw",{base64:p,mime:v}=await C3(f),m={contents:[{parts:[{text:z3({title:i,description:s,username:o})},{inline_data:{mime_type:v,data:p}}]}],generationConfig:{temperature:.6,topK:32,topP:.9,maxOutputTokens:1200,response_mime_type:"application/json"}},S="https://generativelanguage.googleapis.com/v1beta",w=["gemini-2.5-flash","gemini-2.0-flash"];let z;for(const M of w)try{const R=`${S}/models/${M}:generateContent?key=${encodeURIComponent(d)}`,N=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!N.ok)throw new Error(`Gemini error (${N.status}): ${await N.text()}`);const L=(await N.json())?.candidates?.[0]?.content?.parts?.[0]?.text;if(!L)throw new Error("Empty response from Gemini");let H;try{H=JSON.parse(L)}catch{const D=String(L).replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/```$/i,"").trim();H=JSON.parse(D)}const G=Array.isArray(H.bullets)?H.bullets.slice(0,5):[],q=Array.isArray(H.mcqs)?H.mcqs.slice(0,5):[];if(!G.length||!q.length)throw new Error("Malformed AI content");const K=q.map(D=>({question:String(D.question||"").slice(0,140),options:Array.isArray(D.options)&&D.options.length?D.options.slice(0,5):["Not present"],correctIndex:Number.isInteger(D.correctIndex)?D.correctIndex:0,explanation:D.explanation?String(D.explanation).slice(0,140):void 0}));return{bullets:G,mcqs:K}}catch(R){z=R}throw z||new Error("Gemini request failed")}function M3({avatarSrc:a=dc.teacherProfilePic,title:i,description:s,imgSrc:o,username:f,postUrl:d,onLikeChange:p,onBookmarkChange:v,onShare:x}){const[m,S]=y.useState(!1),[w,z]=y.useState(!1),[M,R]=y.useState(!1),[N,B]=y.useState(!1),[L,H]=y.useState(null),[G,q]=y.useState(null),[K,D]=y.useState(0);y.useEffect(()=>{const te=G?.mcqs?.length||0;te!==0&&D(me=>Math.max(0,Math.min(me,te-1)))},[G?.mcqs?.length]);const V=m?"Unlike":"Like",Z=w?"Remove bookmark":"Bookmark",F=()=>{const te=!m;S(te),p&&p(te)},ce=()=>{const te=!w;z(te),v&&v(te)},de=y.useMemo(()=>({title:i,text:`${f} on Infographics — ${i}`,url:d}),[i,f,d]),le=async()=>{try{navigator.share?await navigator.share(de):navigator.clipboard&&de.url&&(await navigator.clipboard.writeText(de.url),alert("Link copied to clipboard")),x&&x(de)}catch(te){console.error("Share failed:",te)}},ie=async()=>{B(!0),H(null);try{const te=await T3({title:i,description:s,username:f,imageUrl:o});q(te),D(0)}catch(te){console.error(te),H(te?.message||"Failed to generate content")}finally{B(!1)}},_e=()=>{const te=!M;R(te),te&&!G&&!N&&ie()},De=G?.mcqs?.length||0,_=De?G.mcqs[K]:null,J=K===De-1,P=()=>D(te=>Math.min(te+1,De-1));return u.jsxs(r3,{role:"article","aria-label":`${i} instagram-style post`,children:[u.jsxs(o3,{children:[u.jsxs(c3,{children:[u.jsx(s3,{src:a,alt:"avatar"}),u.jsxs(u3,{children:[u.jsx(f3,{children:i}),u.jsx(d3,{children:s})]})]}),u.jsx(h3,{"aria-label":M?"Close learn mode":"Open learn mode",title:M?"Close learn mode":"Learn more & quiz",onClick:_e,children:u.jsx(i3,{size:18})})]}),M?u.jsxs(y3,{"aria-live":"polite",children:[u.jsxs(Y1,{children:[u.jsx(G1,{children:"Know more (5 quick points)"}),N?u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(on,{}),u.jsx(on,{}),u.jsx(on,{}),u.jsx(on,{}),u.jsx(on,{})]}):L?u.jsxs(q1,{children:[u.jsx("span",{style:{flex:1,minWidth:0},children:L}),u.jsx(X1,{onClick:ie,"aria-label":"Retry generating content",children:"Retry"})]}):u.jsx(v3,{children:G?.bullets?.map((te,me)=>u.jsx("li",{children:te},me))})]}),u.jsxs(Y1,{children:[u.jsxs(Yg,{children:[u.jsx(G1,{style:{margin:0},children:"Test your knowledge"}),De?u.jsxs(Vo,{children:[K+1," / ",De]}):null]}),N?u.jsxs("div",{style:{display:"grid",gap:10},children:[u.jsx(on,{h:16}),u.jsx(on,{h:40}),u.jsx(on,{h:40}),u.jsx(on,{h:40}),u.jsx(on,{h:40})]}):L?u.jsxs(q1,{children:[u.jsx("span",{style:{flex:1,minWidth:0},children:"Can’t load questions."}),u.jsx(X1,{onClick:ie,children:"Retry"})]}):_?u.jsx(R3,{mcq:_,index:K+1,total:De,isLast:J,onNext:J?void 0:P,onFinish:J?()=>R(!1):void 0},K):null,!N&&!L&&_&&!J?u.jsx("div",{style:{marginTop:6},children:u.jsx(Vo,{children:"Tip: You can change your choice before tapping Next."})}):null]}),u.jsxs(E3,{children:[u.jsx(Vo,{children:"AI stays within the infographic; short, clear answers only."}),u.jsx(Gg,{onClick:()=>R(!1),"aria-label":"Back to image",title:"Back to image",children:"Back to image"})]})]}):u.jsx(p3,{children:u.jsx(m3,{src:o,alt:i})}),u.jsxs(g3,{children:[u.jsxs(x3,{children:[u.jsx(Co,{onClick:F,"aria-label":V,title:V,children:m?u.jsx(Ff,{size:22}):u.jsx(Wf,{size:22})}),u.jsx(Co,{"aria-label":"Comment",title:"Comment",children:u.jsx(ed,{size:20})}),u.jsx(Co,{onClick:le,"aria-label":"Share",title:"Share",children:u.jsx(td,{size:20})})]}),u.jsx(Co,{onClick:ce,"aria-label":Z,title:Z,children:w?u.jsx(If,{size:20}):u.jsx(Pf,{size:20})})]})]})}function R3({mcq:a,index:i,total:s,isLast:o,onNext:f,onFinish:d}){const[p,v]=y.useState(null),x=m=>p===null?"idle":m===a.correctIndex?"correct":m===p&&p!==a.correctIndex?"wrong":"idle";return u.jsxs(b3,{"aria-label":`Question ${i}`,children:[u.jsxs(S3,{children:[i,". ",a.question]}),u.jsx(w3,{children:a.options.map((m,S)=>u.jsx(j3,{onClick:()=>v(S),$state:x(S),"aria-pressed":p===S,"aria-label":`Option ${S+1}`,children:m},S))}),p!==null&&u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsxs(Vo,{children:[p===a.correctIndex?"✅ Correct.":"❌ Not quite.",a.explanation?` — ${a.explanation}`:""]}),o?u.jsxs(Yg,{children:[u.jsx(V1,{onClick:d,"aria-label":"Finish quiz",children:"Finish"}),u.jsx(Gg,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to top"})]}):u.jsxs(V1,{onClick:f,"aria-label":"Next question",disabled:p===null,children:["Next question (",i+1,"/",s,")"]})]})]})}const A3=b.div``,O3=b.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 24px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,k3=b.button`
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

  &:hover { transform: scale(1.02); }

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 16px;
    padding: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before { opacity: 1; }
`,N3=b.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  user-drag: none;
  -webkit-user-drag: none;
  pointer-events: none;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
`,_3=b.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.96);
  backdrop-filter: blur(20px);
  display: grid;
  place-items: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`,$3=b.div`
  position: relative;
  width: 96vw;
  max-width: 1400px;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto auto;
  gap: 10px;
  overflow: hidden;
`,D3=b.div`
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
`,B3=b.div`
  flex: 0 0 100%;
  height: 100%;
  display: grid;
  place-items: center;
  scroll-snap-align: center;
  background: transparent;
`,L3=b.img`
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
`,U3=b.button`
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
`,H3=b.div`
  width: 100%;
  padding: 0 16px 8px;
  display: grid;
  align-items: center;
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,Y3=b.input.attrs({type:"range"})`
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
`,G3=b.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 0 16px 16px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  opacity: ${a=>a.$show?1:0};
  pointer-events: ${a=>a.$show?"auto":"none"};
  transition: opacity 0.3s ease;
`,qg=b.button`
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
`,q3=b.img`
  width: 80px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  transition: opacity 0.2s ease;

  ${qg}:hover & { opacity: 0.8; }
`,X3=b.div`
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
`,Q1=(a,i,s)=>Math.max(i,Math.min(s,a));function V3({items:a=[],className:i}){const s=y.useRef(null),o=y.useRef(!1),f=y.useRef(0),d=y.useRef(0),p=y.useRef(0),[v,x]=y.useState(!1),[m,S]=y.useState(0),[w,z]=y.useState(!0),M=y.useRef(null),R=y.useRef([]);R.current.length!==a.length&&(R.current=a.map((le,ie)=>R.current[ie]??Be.createRef()));const N=typeof window<"u"&&typeof document<"u";y.useEffect(()=>{if(!N)return;const le=document.body.style.overflow;return v&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=le||""}},[v,N]),y.useEffect(()=>{v&&(R.current[m]?.current?.scrollIntoView({block:"nearest",inline:"center",behavior:"auto"}),z(!0))},[v,m]),y.useEffect(()=>{if(!v||!N)return;const le=ie=>{ie.key==="Escape"&&x(!1),ie.key==="ArrowRight"&&H(m+1),ie.key==="ArrowLeft"&&H(m-1),ie.key.toLowerCase()==="h"&&z(_e=>!_e)};return window.addEventListener("keydown",le),()=>window.removeEventListener("keydown",le)},[v,m,N]);const B=y.useMemo(()=>{if(!M.current)return 0;const le=getComputedStyle(M.current),ie=parseFloat(le.gap)||0;return(M.current.clientWidth||0)+ie},[v]),L=()=>{if(!M.current||B===0)return;const{scrollLeft:le}=M.current,ie=Math.round(le/B),_e=Q1(ie,0,a.length-1);_e!==m&&S(_e)},H=le=>{const ie=Q1(le,0,Math.max(0,a.length-1));if(S(ie),!M.current)return;const _e=B*ie;M.current.scrollTo({left:_e,behavior:"smooth"})},G=le=>{const ie=Number(le.target.value);H(ie)},K={"--filled":`${a.length>1?m/(a.length-1)*100:0}%`},D=le=>{if(le.pointerType==="mouse"&&s.current){o.current=!0,p.current=0,f.current=le.clientX,d.current=s.current.scrollLeft||0;try{s.current.setPointerCapture?.(le.pointerId)}catch{console.log("error")}}},V=le=>{if(le.pointerType!=="mouse"||!o.current||!s.current)return;const ie=le.clientX-f.current;p.current=Math.max(p.current,Math.abs(ie)),s.current.scrollLeft=d.current-ie},Z=()=>{o.current=!1},F=6,ce=le=>{p.current>F||(S(le),z(!0),x(!0))},de=le=>{const ie=le.target,De=(ie.tagName&&ie.tagName.toLowerCase())==="img",_=ie.closest?.('[data-interactive="true"]');De||_||z(J=>!J)};return!a||a.length===0?null:u.jsxs(A3,{className:i,children:[u.jsx(O3,{ref:s,onPointerDown:D,onPointerMove:V,onPointerUp:Z,onPointerLeave:Z,children:a.map((le,ie)=>u.jsx(k3,{onClick:()=>ce(ie),children:u.jsx(N3,{src:le.imgSrc,alt:le.name??`Item ${ie+1}`,draggable:!1})},le.id??ie))}),v&&u.jsx(_3,{role:"dialog","aria-modal":"true","aria-label":"Image lightbox",children:u.jsxs($3,{onClick:de,children:[u.jsxs(X3,{$show:w,children:[m+1," / ",a.length]}),u.jsx(U3,{$show:w,onClick:()=>x(!1),"aria-label":"Close","data-interactive":"true",children:u.jsx(Q5,{})}),u.jsx(D3,{ref:M,onScroll:L,children:a.map((le,ie)=>u.jsx(B3,{ref:R.current[ie],children:u.jsx(L3,{src:le.imgSrc,alt:le.name??`Image ${ie+1}`})},le.id??ie))}),u.jsx(H3,{$show:w,"data-interactive":"true",children:u.jsx(Y3,{min:0,max:Math.max(0,a.length-1),step:1,value:m,onChange:G,style:K,"aria-label":"Image scrubber"})}),u.jsx(G3,{$show:w,"aria-label":"Thumbnails","data-interactive":"true",children:a.map((le,ie)=>u.jsx(qg,{$active:ie===m,onClick:()=>H(ie),"aria-label":`Go to image ${ie+1}`,children:u.jsx(q3,{src:le.imgSrc,alt:le.name??`Thumbnail ${ie+1}`})},le.id??ie))})]})})]})}const Q3=N5`
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
`,K3=b.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`,Z3=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,J3=b.div`
  display: flex;
  gap: 12px;
`,F3=b.button`
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
`,zo=b.button`
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
`,W3=b.div`
  padding: 12px 14px;
`,I3=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,P3=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,e4=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,t4=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,n4=b.span`
  font-weight: 600;
  color: #0f172a;
`,a4=b.div`
  padding: 0 14px 8px 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,l4=b.span`
  font-size: 12px;
  color: #64748b;
`,i4=b.button`
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
`,r4=(a=1)=>({display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",WebkitLineClamp:a});function o4({expanded:a=!1,lines:i=1,children:s,innerRef:o}){const f={fontSize:"13px",color:"#334155",margin:0,whiteSpace:"pre-wrap",...a?{}:r4(i)};return u.jsx("p",{style:f,ref:o,children:s})}function c4({avatarSrc:a=dc.teacherProfilePic,data:i,onLikeChange:s,onBookmarkChange:o,onShare:f}){const{title:d="Carousel Title",description:p="",detailedDescription:v="",carouselMetaData:x=[]}=i||{},[m,S]=y.useState(!1),[w,z]=y.useState(!1),[M,R]=y.useState(!1),[N,B]=y.useState(!1),L=y.useRef(null);y.useEffect(()=>{const Z=L.current;if(Z){if(M){B(!0);return}requestAnimationFrame(()=>{if(!Z)return;const F=Z.scrollHeight-Z.clientHeight>1;B(F)})}},[v,M]);const H=m?"Unlike post":"Like post",G=w?"Remove bookmark":"Bookmark",q=()=>{const Z=!m;S(Z),s&&s(Z)},K=()=>{const Z=!w;z(Z),o&&o(Z)},D=y.useMemo(()=>({title:d,text:`${d}`,url:typeof window<"u"?window.location.href:""}),[d]),V=async()=>{try{navigator.share?await navigator.share(D):navigator.clipboard&&(await navigator.clipboard.writeText(D.url),alert("Link copied to clipboard")),f&&f(D)}catch(Z){console.error("Share failed:",Z)}};return!x||x.length===0?null:u.jsxs(K3,{role:"article","aria-label":`${d} – Instagram multi-image post`,children:[u.jsxs(W3,{children:[u.jsxs(I3,{children:[u.jsxs(P3,{children:[u.jsx(e4,{src:a,alt:"avatar"}),u.jsxs(t4,{children:[u.jsx(n4,{children:d}),u.jsx(l4,{children:p})]})]}),u.jsx(F3,{"aria-label":"Post menu",title:"More",children:u.jsx(Bg,{size:18})})]}),v?u.jsxs(a4,{children:[u.jsx(o4,{expanded:M,lines:1,innerRef:L,children:v}),(N||M)&&u.jsx(i4,{type:"button","aria-expanded":M,onClick:()=>R(Z=>!Z),children:M?u.jsx(G5,{size:14}):"more"})]}):null]}),u.jsx(Q3,{}),u.jsx(V3,{items:x,duration:3e3}),u.jsxs(Z3,{children:[u.jsxs(J3,{children:[u.jsx(zo,{onClick:q,"aria-label":H,title:H,children:m?u.jsx(Ff,{size:22}):u.jsx(Wf,{size:22})}),u.jsx(zo,{"aria-label":"Comment",title:"Comment",children:u.jsx(ed,{size:20})}),u.jsx(zo,{onClick:V,"aria-label":"Share",title:"Share",children:u.jsx(td,{size:20})})]}),u.jsx(zo,{onClick:K,"aria-label":G,title:G,children:w?u.jsx(If,{size:20}):u.jsx(Pf,{size:20})})]})]})}const s4=b.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`,u4=b.div`
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
`,f4=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`,d4=b.div`
  display: flex;
  gap: 12px;
`,To=b.button`
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
`,h4=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`,p4=b.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`,m4=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`,g4=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`,x4=b.span`
  font-weight: 600;
  color: #0f172a;
`,y4=b.span`
  font-size: 12px;
  color: #64748b;
`,v4=b.button`
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
`;function b4({avatarSrc:a=dc.teacherProfilePic,data:i,likedDefault:s=!1,savedDefault:o=!1,onLikeChange:f,onBookmarkChange:d,onShare:p}){const v=i?.videoClipSrc||i?.vedioClipSrc,{title:x,description:m,poster:S}=i||{},[w,z]=y.useState(s),[M,R]=y.useState(o),N=w?"Unlike post":"Like post",B=M?"Remove bookmark":"Bookmark",L=y.useRef(null),H=()=>{const K=!w;z(K),f&&f(K)},G=()=>{const K=!M;R(K),d&&d(K)},q=async()=>{const K={title:x||"Check this video",text:m||"",url:typeof window<"u"&&window.location?.href||(i?.url??"")};try{typeof navigator<"u"&&navigator.share?await navigator.share(K):typeof navigator<"u"&&navigator.clipboard&&K.url&&(await navigator.clipboard.writeText(K.url),alert("Link copied to clipboard")),p&&p(K)}catch(D){console.log(D)}};return y.useEffect(()=>{const K=L.current;if(!K)return;(async()=>{try{await K.play()}catch{}})()},[v]),v?u.jsxs(s4,{"aria-label":"Video post",children:[u.jsxs(h4,{children:[u.jsxs(p4,{children:[u.jsx(m4,{src:a,alt:"Author avatar"}),u.jsxs(g4,{children:[u.jsx(x4,{children:x}),u.jsx(y4,{children:m})]})]}),u.jsx(v4,{"aria-label":"Post menu",title:"More options",children:u.jsx(Bg,{size:18})})]}),u.jsx(u4,{children:u.jsx("video",{ref:L,src:v,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:S,"aria-label":x||"Video clip"})}),u.jsxs(f4,{children:[u.jsxs(d4,{children:[u.jsx(To,{onClick:H,"aria-label":N,title:N,children:w?u.jsx(Ff,{size:22}):u.jsx(Wf,{size:22})}),u.jsx(To,{"aria-label":"Comment",title:"Comment",children:u.jsx(ed,{size:20})}),u.jsx(To,{onClick:q,"aria-label":"Share",title:"Share",children:u.jsx(td,{size:20})})]}),u.jsx(To,{onClick:G,"aria-label":B,title:B,children:M?u.jsx(If,{size:20}):u.jsx(Pf,{size:20})})]})]}):null}const S4=[{id:1,name:"Sense of Collective Identity",img:Eo.CollectiveIdentity||"https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",hasNew:!0,slides:[l3.test,"https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop"]},{id:2,name:"Understanding Diversity",img:Eo.Diversity||"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop"]},{id:3,name:"Nationalism in India",img:Eo.Nationalism||"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop"]},{id:4,name:"Globalisation and the Indian Economy",img:Eo.Globalisation||"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",hasNew:!0,slides:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop","https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop"]}];function w4(a){return je({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z"},child:[]}]})(a)}function j4({isOpen:a,activeIndex:i,setActiveIndex:s,total:o,onClose:f,duration:d=3e3}){const p=y.useRef(Date.now()),v=y.useRef(),x=y.useRef(0),m=y.useCallback(()=>{const w=Date.now()-p.current,z=Math.min(1,w/d);x.current=z,z>=1?i<o-1?s(M=>M+1):f():v.current=requestAnimationFrame(m)},[i,o,d,f,s]);return y.useEffect(()=>{if(a)return p.current=Date.now(),v.current=requestAnimationFrame(m),()=>cancelAnimationFrame(v.current)},[a,i,m]),{resetTimer:y.useCallback(()=>{p.current=Date.now()},[]),getProgressValue:()=>x.current}}const E4=b.div`
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
`,C4=b.div`
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
`,z4=b.div`
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
`,T4=b.div`
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
`,M4=b.div`
  height: 3px;
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 2.5px;
  }
`,R4=b.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.95) 100%);
  transition: width 100ms linear;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`,A4=b.div`
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
`,O4=b.img`
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
`,k4=b.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,N4=b.div`
  font-weight: 700;
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,_4=b.div`
  font-size: clamp(11px, 1.8vw, 13px);
  opacity: 0.85;
  line-height: 1.2;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`,$4=b.button`
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
`,D4=b.img`
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
`,K1=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 10;
  touch-action: manipulation;

  ${a=>a.$side==="left"?xa`
          left: 0;
          width: 33.3333%;
        `:xa`
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
`;function B4({currentItem:a,isOpen:i,slideIndex:s,setSlideIndex:o,onClose:f,duration:d=3e3}){const p=a?.slides?.length||0,{resetTimer:v,getProgressValue:x}=j4({isOpen:i,activeIndex:s,setActiveIndex:o,total:p,onClose:f,duration:d}),m=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[,S]=y.useState(0);y.useEffect(()=>{if(!i||m)return;let R;const N=()=>{S(B=>B+1),R=requestAnimationFrame(N)};return R=requestAnimationFrame(N),()=>cancelAnimationFrame(R)},[i,m]);const w=y.useCallback(()=>{a&&(s<p-1?(o(R=>R+1),v()):f())},[a,s,p,v,f,o]),z=y.useCallback(()=>{a&&(s>0?(o(R=>R-1),v()):f())},[a,s,v,f,o]);y.useEffect(()=>{const R=N=>{i&&(N.key==="Escape"&&f(),N.key==="ArrowRight"&&w(),N.key==="ArrowLeft"&&z())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[i,w,z,f]),y.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const M=R=>R<s?1:R>s?0:x();return!i||!a?null:u.jsx(E4,{onClick:f,"aria-label":"Story overlay",children:u.jsx(C4,{onClick:R=>R.stopPropagation(),children:u.jsxs(z4,{children:[u.jsx(T4,{"aria-label":"Story progress",children:a.slides.map((R,N)=>u.jsx(M4,{"aria-label":`Progress track ${N+1}`,children:u.jsx(R4,{style:{width:`${M(N)*100}%`}})},N))}),u.jsxs(A4,{children:[u.jsx(O4,{src:a.img,alt:a.name}),u.jsxs(k4,{children:[u.jsx(N4,{children:a.name}),u.jsx(_4,{children:"Chapter highlight"})]}),u.jsx($4,{"aria-label":"Close story",onClick:f,title:"Close",children:u.jsx(w4,{})})]}),a.slides.map((R,N)=>u.jsx(D4,{src:R,alt:`Slide ${N+1}`,$active:N===s,draggable:!1},N)),u.jsx(K1,{$side:"left",onClick:z,"aria-label":"Previous slide"}),u.jsx(K1,{$side:"right",onClick:w,"aria-label":"Next slide"})]})})})}const L4=b.div``,U4=b.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,H4=b.div`
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
`,Y4=b.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`,G4=b.div`
  padding: 2px;
  border-radius: 999px;
  ${a=>a.$hasNew?xa`
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
        `:xa`
          background: transparent;
        `};
`,q4=b.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`,X4=b.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`,V4=b.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Q4({items:a,duration:i=3e3,onOpen:s,onClose:o,className:f}){const d=y.useRef(null),p=y.useRef(!1),v=y.useRef(0),x=y.useRef(0),[m,S]=y.useState(a||[]),[w,z]=y.useState(null),[M,R]=y.useState(0),N=m.find(D=>D.id===w)||null,B=!!w,L=D=>{R(0),z(D),S(V=>V.map(Z=>Z.id===D?{...Z,hasNew:!1}:Z)),s&&s(D)},H=()=>{z(null),o&&o()},G=D=>{p.current=!0,v.current=D.clientX,x.current=d.current?.scrollLeft||0,D.target.setPointerCapture?.(D.pointerId)},q=D=>{if(!p.current||!d.current)return;const V=D.clientX-v.current;d.current.scrollLeft=x.current-V},K=()=>{p.current=!1};return u.jsxs(L4,{className:f,children:[u.jsx(U4,{children:u.jsx(H4,{ref:d,onPointerDown:G,onPointerMove:q,onPointerUp:K,onPointerLeave:K,"aria-label":"Stories scroller",children:m.map(D=>u.jsxs(Y4,{onClick:()=>L(D.id),"aria-label":`Open story ${D.name}`,title:D.name,children:[u.jsx(G4,{$hasNew:D.hasNew,children:u.jsx(q4,{children:u.jsx(X4,{src:D.img,alt:D.name,draggable:!1})})}),u.jsx(V4,{children:D.name})]},D.id))})}),u.jsx(B4,{currentItem:N,isOpen:B,slideIndex:M,setSlideIndex:R,onClose:H,duration:i})]})}const K4=[{id:1,type:"infografic",title:"Sense of Collective Identity - Overview",description:"An overview of how shared history, culture, and values shape collective identity in society.",detailedDescription:"Collective identity is the shared sense of belonging among individuals who associate themselves with a larger group or community. It is shaped by shared language, culture, traditions, and values that connect people to a collective purpose. Understanding this helps explain how societies maintain unity and continuity over time.",imgSrc:Rn.Slide1},{id:2,type:"carousel",title:"Understanding Collective Identity",description:"Exploring the roots and importance of collective identity in social cohesion.",detailedDescription:"This section examines how collective identity emerges from shared experiences, beliefs, and cultural narratives. It plays a crucial role in fostering social solidarity, promoting cooperation, and helping individuals find meaning through group affiliation. The concept is central to understanding social movements, nationalism, and cultural preservation.",carouselMetaData:[{Id:1,type:"img",imgSrc:Rn.Slide3},{Id:2,type:"img",imgSrc:Rn.Slide4},{Id:3,type:"img",imgSrc:Rn.Slide5},{Id:4,type:"img",imgSrc:Rn.Slide6}]},{id:3,type:"carousel",title:"Symbols and Shared Culture",description:"How flags, festivals, and traditions represent unity and belonging.",detailedDescription:"Symbols such as national flags, anthems, and cultural rituals embody the essence of collective identity. These shared symbols reinforce emotional ties, transmit values, and sustain collective memory. Festivals and traditions not only celebrate heritage but also help younger generations internalize the sense of belonging to a larger community.",carouselMetaData:[{imgId:1,type:"img",imgSrc:Rn.Slide7},{imgId:2,type:"img",imgSrc:Rn.Slide8},{imgId:3,type:"img",imgSrc:Rn.Slide9}]},{id:5,type:"videoClip",title:"Collective Identity in Action",description:"A short video summarizing real-world examples of collective identity shaping societies.",detailedDescription:"This video highlights real-world scenarios where collective identity has influenced social and political movements. From grassroots environmental campaigns to national independence struggles, it shows how shared beliefs and unity can drive change, empower communities, and redefine social narratives.",videoClipSrc:H1.videoClip1},{id:6,type:"infografic",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities. This infographic explores how globalization, migration, and technology continuously reshape how groups define themselves and relate to others in an interconnected world.",imgSrc:Rn.Slide5},{id:7,type:"videoClip",title:"Evolution of Collective Identity",description:"Tracing the historical development of group identity across civilizations.",detailedDescription:"Collective identity has evolved alongside human societies — from tribal affiliations and religious communities to modern national and digital identities. This infographic explores how globalization, migration, and technology continuously reshape how groups define themselves and relate to others in an interconnected world.",videoClipSrc:H1.videoClip1}],Z4=b.div`
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
`;function J4(){return y.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),u.jsxs(u.Fragment,{children:[u.jsx(Q4,{items:S4,duration:3e3,onOpen:a=>console.log("opened:",a),onClose:()=>console.log("closed")}),u.jsx(Z4,{children:u.jsx("div",{className:"d-flex gap-3 flex-column align-items-center mt-3",children:K4.map(a=>u.jsx("div",{style:{width:"100%"},children:a.type==="infografic"?u.jsx(M3,{title:a.title,description:a.description,imgSrc:a.imgSrc,badge:a.badge}):a.type==="carousel"?u.jsx(c4,{data:a}):a.type==="videoClip"?u.jsx(b4,{data:a}):null},a.id))})})]})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),W4=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,o)=>o?o.toUpperCase():s.toLowerCase()),Z1=a=>{const i=W4(a);return i.charAt(0).toUpperCase()+i.slice(1)},Xg=(...a)=>a.filter((i,s,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===s).join(" ").trim(),I4=a=>{for(const i in a)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=y.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:f="",children:d,iconNode:p,...v},x)=>y.createElement("svg",{ref:x,...P4,width:i,height:i,stroke:a,strokeWidth:o?Number(s)*24/Number(i):s,className:Xg("lucide",f),...!d&&!I4(v)&&{"aria-hidden":"true"},...v},[...p.map(([m,S])=>y.createElement(m,S)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(a,i)=>{const s=y.forwardRef(({className:o,...f},d)=>y.createElement(e6,{ref:d,iconNode:i,className:Xg(`lucide-${F4(Z1(a))}`,`lucide-${a}`,o),...f}));return s.displayName=Z1(a),s};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],n6=tt("atom",t6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Nl=tt("book-open",a6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],i6=tt("bookmark",l6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],o6=tt("calculator",r6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],s6=tt("check",c6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],f6=tt("chevron-right",u6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],h6=tt("circle-check-big",d6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],m6=tt("code",p6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],J1=tt("flask-conical",g6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],y6=tt("graduation-cap",x6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],F1=tt("globe",v6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],S6=tt("grid-3x3",b6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],j6=tt("languages",w6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],C6=tt("lightbulb",E6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Mo=tt("lock",z6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],M6=tt("sparkles",T6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],A6=tt("star",R6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],k6=tt("target",O6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],_6=tt("trophy",N6);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Vu=tt("x",$6),Ke={bgGrad:"linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%)",glass:"rgba(255,255,255,0.95)",border:"rgba(255,255,255,0.9)",text:"#0f172a",subtext:"#64748b",primary:"#0EA5E9",success:"#22c55e",shadow:"0 20px 60px rgba(0,0,0,0.08)",ring:"rgba(14,165,233,0.12)"},D6=Et`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`,B6=Et`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`,L6=Et`0%,100%{opacity:.15}50%{opacity:.3}`,U6=Et`0%,49%{opacity:1}50%,100%{opacity:0}`;Et`
  to { stroke-dashoffset: 0; }
`;const H6=b.div`
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${Ke.bgGrad};
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  padding: 1rem;
`,W1=b.div`
  position: absolute;
  border-radius: 50%;
  background: ${({$color:a})=>a};
  width: ${({$size:a})=>a}px;
  height: ${({$size:a})=>a}px;
  top: ${({$top:a})=>a};
  left: ${({$left:a})=>a};
  bottom: ${({$bottom:a})=>a};
  right: ${({$right:a})=>a};
  filter: blur(2px);
  animation: ${L6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`,ua=b.div`
  position: absolute;
  opacity: ${({$opacity:a})=>a||.15};
  animation: ${B6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  z-index: 1;
`,fa=b.svg`
  width: ${({$size:a})=>a}px;
  height: ${({$size:a})=>a}px;
  stroke: rgba(15, 23, 42, 0.25);
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
`,Y6=b.div`
  position: absolute;
  opacity: 0.12;
  animation: ${D6} ${({$duration:a})=>a}s infinite ease-in-out;
  animation-delay: ${({$delay:a})=>a}s;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`,G6=b.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`,q6=b.div`
  width: 100%;
  max-width: 1080px;
`,Vg=b.div`
  background: ${Ke.glass};
  backdrop-filter: blur(20px);
  border: 1.5px solid ${Ke.border};
  box-shadow: ${Ke.shadow};
  border-radius: 1.5rem;
  padding: 1.5rem;
  @media (min-width: 768px) {
    border-radius: 1.75rem;
    padding: 2.5rem;
  }
`,X6=b(Vg)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,V6=b.div`
  text-align: center;
  margin-bottom: 1.5rem;
  display: grid;
  gap: 1rem;
  justify-items: center;
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
    gap: 1.25rem;
  }
`,Q6=b.h1`
  font-size: clamp(1.6rem, 5.5vw, 2.8rem);
  font-weight: 900;
  line-height: 1.1;
  color: ${Ke.text};
  margin: 0;
  letter-spacing: -0.02em;
`,K6=b.span`
  background: linear-gradient(135deg, ${Ke.primary} 0%, ${Ke.success} 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2px;
`,Z6=b.span`
  &::after {
    content: "|";
    animation: ${U6} 1s infinite;
    margin-left: 4px;
  }
`,J6=b.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: ${Ke.subtext};
  margin: 0;
  font-weight: 500;
  max-width: 600px;
`,I1=b.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,P1=b.div`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, ${Ke.primary} 0%, ${Ke.success} 100%);
  display: grid;
  place-items: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.3);
`,em=b.div`
  display: grid;
  gap: 0.15rem;
  h2 {
    margin: 0;
    font-size: 1.25rem;
    color: #0f172a;
    font-weight: 800;
    letter-spacing: -0.01em;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${Ke.subtext};
    font-weight: 500;
  }
`,F6=b.div`
  position: relative;
`,W6=b.select`
  width: 100%;
  padding: 1.1rem 3rem 1.1rem 1.25rem;
  border-radius: 1rem;
  border: 2px solid #e2e8f0;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${Ke.text};
  background: white;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  
  &:focus {
    outline: none;
    border-color: ${Ke.primary};
    box-shadow: 0 0 0 6px ${Ke.ring}, 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  &:hover {
    border-color: #cbd5e1;
  }
`,tm=b.div`
  display: grid;
  gap: 1.25rem;
`,I6=b.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,P6=b.div`
  border-radius: 1.25rem;
  padding: 1.25rem;
  background: #fff;
  border: 2px solid #e2e8f0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 0.75rem;
  align-content: start;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${Ke.primary}, ${Ke.success});
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${Ke.primary};
    box-shadow: 0 12px 32px rgba(14, 165, 233, 0.2);
    
    &::before {
      transform: scaleX(1);
    }
  }

  ${({$selected:a})=>a&&`
    background: linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%);
    color: #000;
    border-color: rgba(0,0,0,0.15);
    box-shadow: 0 16px 40px rgba(139, 227, 245, 0.4);
    transform: translateY(-2px);
    
    &::before {
      transform: scaleX(1);
      background: rgba(0, 0, 0, 0.2);
    }
  `}
`,e8=b.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.75rem;
  
  span {
    font-weight: 800;
    letter-spacing: -0.01em;
    font-size: 1.05rem;
  }
  
  .icon {
    opacity: 0.85;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 0.75rem;
    background: ${({$selected:a})=>a?"rgba(255,255,255,0.5)":"rgba(14, 165, 233, 0.08)"};
    transition: all 0.2s ease;
  }
`,t8=b.div`
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  border-top: 2px dashed rgba(0, 0, 0, 0.1);
  ${({$selected:a})=>a&&"border-top-color: rgba(0,0,0,.25);"}
`,n8=b.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
`,a8=b.button`
  border: 0;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.6rem 0.9rem;
  border-radius: 0.75rem;
  background: ${({$inSelected:a})=>a?"rgba(255,255,255,.95)":"#f1f5f9"};
  color: ${({$inSelected:a})=>a?"#0f172a":Ke.text};
  box-shadow: ${({$inSelected:a})=>a?"0 4px 12px rgba(0,0,0,.15)":"0 2px 4px rgba(0,0,0,.04)"};
  border: 1.5px solid
    ${({$inSelected:a})=>a?"rgba(0,0,0,.15)":"#e2e8f0"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
    border-color: ${Ke.primary};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus-visible {
    outline: 3px solid ${Ke.ring};
    outline-offset: 2px;
  }
`,l8=b(Vg)`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-style: dashed;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  gap: 1rem;
  border-color: #cbd5e1;
  
  .icon-wrap {
    width: 4rem;
    height: 4rem;
    border-radius: 1.25rem;
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  p {
    color: ${Ke.subtext};
    font-weight: 600;
    margin: 0;
    font-size: 1.05rem;
  }
`;function i8(){const a=lc(),[i,s]=y.useState(""),[o,f]=y.useState(""),[d,p]=y.useState(""),[v,x]=y.useState(0),[m,S]=y.useState(!1),[w,z]=y.useState(0),M=["Achieve Excellence","Master Every Subject","Unlock Your Potential"];y.useEffect(()=>{const q=m?40:80,K=2e3,D=setTimeout(()=>{const V=M[v];if(!m&&w===V.length){setTimeout(()=>S(!0),K);return}if(m&&w===0){S(!1),x(Z=>(Z+1)%M.length);return}z(Z=>Z+(m?-1:1)),p(V.substring(0,w+(m?-1:1)))},q);return()=>clearTimeout(D)});const R={"Grade 9":{subjects:{English:["Ms. Priya Sharma","Mr. Vivek Sinha","Ms. Ritu Malhotra"],Mathematics:["Mr. Rajesh Kumar","Ms. Neha Gupta","Mr. Ankit Jain"],Science:["Ms. Anjali Mehta","Mr. Suresh Iyer","Ms. Pooja Khanna"],"Social Studies":["Siddharth Sir","Ms. Ananya Bose","Mr. Harish Nanda"],Hindi:["Ms. Kavita Reddy","Mr. Manoj Tiwari","Ms. Poonam Joshi"],"Computer Science":["Mr. Arvind Nair","Ms. Shruti Desai","Mr. Kunal Shah"]}},"Grade 10":{subjects:{English:["Ms. Sunita Verma","Mr. Ashish Bhatia","Ms. Riya Kapoor"],Mathematics:["Mr. Rohan Patel","Ms. Priyanka Das","Mr. Sanjay Kulkarni"],Science:["Ms. Anjali Mehta","Mr. Amit Chakraborty","Ms. Meera Nambiar"],"Social Studies":["Siddharth Sir","Ms. Nidhi Arora","Mr. Parth Ghosh"],Hindi:["Ms. Kavita Reddy","Mr. Ajay Sharma","Ms. Shalini Tripathi"],"Computer Science":["Mr. Arvind Nair","Ms. Tanvi Kulkarni","Mr. Rohit Menon"]}},"Grade 11":{subjects:{English:["Ms. Priya Sharma","Mr. Karan Malhotra","Ms. Deepa Rao"],Physics:["Mr. Nitin Agarwal","Ms. Rachna Bansal","Mr. Vivek Mishra"],Chemistry:["Ms. Sneha Kapoor","Mr. Aditya Mehta","Ms. Nupur Jain"],Biology:["Siddharth Sir","Ms. Radhika Sen","Mr. Mohan Pillai"],Mathematics:["Mr. Deepak Rao","Ms. Shreya Iyer","Mr. Varun Sethi"],"Computer Science":["Mr. Arvind Nair","Ms. Naina Khatri","Mr. Prateek Verma"]}},"Grade 12":{subjects:{English:["Ms. Sunita Verma","Mr. Aalok Trivedi","Ms. Garima Singh"],Physics:["Mr. Nitin Agarwal","Ms. Priti Saxena","Mr. Keshav Reddy"],Chemistry:["Ms. Sneha Kapoor","Mr. Rohan Mukherjee","Ms. Farah Qureshi"],Biology:["Siddharth Sir","Ms. Neelam Vaidya","Mr. Sameer Kulkarni"],Mathematics:["Mr. Deepak Rao","Ms. Ishita Shah","Mr. Yashwant Kumar"],"Computer Science":["Mr. Arvind Nair","Ms. Pallavi Menon","Mr. Siddharth Jain"]}}},N={English:Nl,Mathematics:o6,Science:J1,Physics:n6,Chemistry:J1,Biology:F1,"Social Studies":F1,Hindi:j6,"Computer Science":m6},B=i?Object.keys(R[i].subjects):[],L=q=>f(q),H=(q,K)=>{(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),L(K))},G=q=>{!i||!o||a("/instalearn/teacher",{state:{grade:i,subject:o,teacher:q}})};return u.jsxs(H6,{children:[u.jsx(W1,{$color:"rgba(255,255,255,0.16)",$size:520,$top:"-12%",$right:"-6%",$duration:8,$delay:0}),u.jsx(W1,{$color:"rgba(255,255,255,0.1)",$size:640,$bottom:"-16%",$left:"-8%",$duration:10,$delay:3}),u.jsx(ua,{style:{top:"8%",left:"5%"},$duration:8,$delay:0,$opacity:.3,children:u.jsx(fa,{$size:100,children:u.jsx("path",{d:"M15 50 L50 25 L85 50 L50 75 Z M50 25 L50 8 M43 8 L57 8"})})}),u.jsx(ua,{style:{top:"12%",right:"8%"},$duration:9,$delay:1,$opacity:.28,children:u.jsxs(fa,{$size:90,children:[u.jsx("circle",{cx:"45",cy:"45",r:"30"}),u.jsx("path",{d:"M45 15 L45 45 L65 65"})]})}),u.jsx(ua,{style:{bottom:"15%",left:"8%"},$duration:10,$delay:2,$opacity:.26,children:u.jsxs(fa,{$size:110,children:[u.jsx("rect",{x:"15",y:"20",width:"80",height:"60",rx:"6"}),u.jsx("path",{d:"M25 35 L50 35 M25 48 L75 48 M25 61 L65 61"})]})}),u.jsx(ua,{style:{bottom:"20%",right:"10%"},$duration:7,$delay:1.5,$opacity:.3,children:u.jsxs(fa,{$size:95,children:[u.jsx("path",{d:"M20 75 L20 28 Q20 15 33 15 L77 15 Q90 15 90 28 L90 75"}),u.jsx("path",{d:"M30 38 L45 38 M30 51 L65 51 M30 64 L58 64"})]})}),u.jsx(ua,{style:{top:"45%",left:"2%"},$duration:11,$delay:3,$opacity:.24,children:u.jsxs(fa,{$size:85,children:[u.jsx("circle",{cx:"42",cy:"42",r:"28"}),u.jsx("path",{d:"M42 14 L42 42 M42 42 L60 42"})]})}),u.jsx(ua,{style:{top:"55%",right:"4%"},$duration:9,$delay:2.5,$opacity:.27,children:u.jsx(fa,{$size:105,children:u.jsx("path",{d:"M25 38 L52 12 L80 38 M38 38 L38 75 L67 75 L67 38"})})}),u.jsx(ua,{style:{top:"30%",right:"18%"},$duration:10,$delay:1.8,$opacity:.25,children:u.jsx(fa,{$size:80,children:u.jsx("path",{d:"M15 40 L40 15 L65 40 L40 65 L15 40 M40 15 L40 35 M35 30 L45 30"})})}),u.jsx(ua,{style:{bottom:"35%",left:"15%"},$duration:8,$delay:2.2,$opacity:.22,children:u.jsxs(fa,{$size:75,children:[u.jsx("circle",{cx:"37",cy:"37",r:"25"}),u.jsx("path",{d:"M37 37 L50 24 M37 37 L50 37"}),u.jsx("circle",{cx:"37",cy:"37",r:"4",fill:"rgba(15, 23, 42, 0.25)"})]})}),[A6,C6,_6,k6,M6].map((q,K)=>u.jsx(Y6,{$duration:9+K*1.5,$delay:K*.8,style:{left:`${8+K*18}%`,top:`${20+K%2*35}%`},children:u.jsx(q,{size:28,color:"rgba(255,255,255,0.5)"})},K)),u.jsx(G6,{children:u.jsxs(q6,{children:[u.jsxs(V6,{children:[u.jsx(Q6,{children:u.jsx(K6,{children:u.jsx(Z6,{children:d})})}),u.jsx(J6,{children:"Your personalized learning journey starts here"})]}),u.jsxs(X6,{children:[u.jsxs(tm,{children:[u.jsxs(I1,{children:[u.jsx(P1,{children:u.jsx(y6,{size:20})}),u.jsxs(em,{children:[u.jsx("h2",{children:"Select Your Grade"}),u.jsx("p",{children:"Choose your class to explore subjects"})]})]}),u.jsxs(F6,{children:[u.jsxs(W6,{value:i,onChange:q=>{s(q.target.value),f("")},children:[u.jsx("option",{value:"",disabled:!0,children:"Select Grade"}),Object.keys(R).map(q=>u.jsx("option",{value:q,children:q},q))]}),i&&u.jsx(h6,{size:22,style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",color:Ke.success}})]})]}),u.jsxs(tm,{children:[u.jsxs(I1,{children:[u.jsx(P1,{children:u.jsx(Nl,{size:20})}),u.jsxs(em,{children:[u.jsx("h2",{children:"Choose a Subject"}),u.jsx("p",{children:"Click a teacher to view their profile"})]})]}),B.length?u.jsx(I6,{children:B.map(q=>{const K=N[q]||Nl,D=o===q,V=R[i].subjects[q],Z=Array.isArray(V)?V:[V];return u.jsxs(P6,{role:"button",tabIndex:0,"aria-pressed":D,$selected:D,onClick:()=>L(q),onKeyDown:F=>H(F,q),"aria-label":`Open ${q}`,children:[u.jsxs(e8,{$selected:D,children:[u.jsx("span",{children:q}),u.jsx("div",{className:"icon",children:u.jsx(K,{size:20})})]}),u.jsx(t8,{$selected:D,children:D?u.jsx(n8,{children:Z.map(F=>u.jsx(a8,{$inSelected:!0,onClick:ce=>{ce.stopPropagation(),G(F)},onKeyDown:ce=>{(ce.key==="Enter"||ce.key===" ")&&(ce.preventDefault(),ce.stopPropagation(),G(F))},children:F},F))}):u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,color:"#475569",fontWeight:700,fontSize:".9rem"},children:[u.jsx("span",{children:"View teachers"}),u.jsx(f6,{size:16})]})})]},q)})}):u.jsxs(l8,{children:[u.jsx("div",{className:"icon-wrap",children:u.jsx(Nl,{size:32,color:"#64748b"})}),u.jsx("p",{children:"Please select a grade to view subjects"})]})]})]})]})})]})}function Qu(a){return je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(a)}function Qo(a){return je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function Ji(a){return je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(a)}function r8(a){return je({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function Qg(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function nm(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(a)}function am(a){return je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(a)}function o8(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(a)}function lm(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(a)}function im(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(a)}function rm(a){return je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(a)}function Ro(a){return je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function Ao(a){return je({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function om(a){return je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(a)}const Kg={name:"Siddharth Sir",subject:"SST Teacher",bio:"Exploring history, geography & civics 🌍 | Making SST engaging for Classes 6–12 | CBSE Expert",avatar:dc.teacherProfilePic,concepts:247,students:"1.2K",learns:15,experience:8,bookList:[{title:"SST MARATHON"},{title:"World Geography Simplified"},{title:"Understanding Civics"},{title:"Economics Made Easy"},{title:"Political Science Basics"},{title:"Environment & Society"}]},cm=Kg,sm="studentProfile",c8=`joined:${cm?.id||cm?.name}`,Xl=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,s8=Et`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`,Zg=Et`from{opacity:0}to{opacity:1}`,u8=Et`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.98); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`,Jg=Et`0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}`,ee={bgSecondary:"#FFFFFF",card:"#FFFFFF",text:"#0F172A",subtext:"#64748B",primary:"#0EA5E9",accent:"#06B6D4",accentGreen:"#10B981",border:"#E2E8F0",borderLight:"#CBD5E1",shadow:"0 10px 24px rgba(0,0,0,.06)",overlay:"rgba(15,23,42,.5)"},f8=b.div`
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
    animation: ${Xl?"none":Jg} 18s ease-in-out infinite;
    pointer-events: none;
  }

  @media (min-width: 640px) {
    padding: 24px 20px;
  }
`,d8=b.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  animation: ${Xl?"none":s8} 0.6s
    cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 1;
`,Fi=b.div`
  background: ${ee.card};
  border: 1px solid ${ee.border};
  border-radius: 18px;
  box-shadow: ${ee.shadow};
  backdrop-filter: blur(8px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (min-width: 640px) {
    border-radius: 22px;
  }
`,um=b.div`
  position: fixed;
  inset: 0;
  background: ${ee.overlay};
  backdrop-filter: blur(2px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Xl?"none":Zg} 0.15s ease-out;
`,fm=b.div`
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
  animation: ${Xl?"none":u8} 0.2s
    cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  @media (min-width: 640px) {
    padding: 24px;
    border-radius: 20px;
  }
`,dm=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,hm=b.h2`
  font-size: clamp(18px, 2.6vw, 22px);
  font-weight: 800;
  color: ${ee.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`,pm=b.button`
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
`,da=b.div`
  margin-bottom: 14px;
`,ha=b.label`
  display: block;
  font-weight: 600;
  color: ${ee.text};
  margin-bottom: 6px;
  font-size: clamp(12px, 2.5vw, 14px);
`,Tl=b.input`
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
`,mm=b.select`
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
`,gm=b.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`,Oo=b.button`
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
`,h8=b(Fi)`
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
`,p8=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: auto 1fr;
    gap: 24px;
    align-items: start;
  }
`,m8=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,g8=b.div`
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
`,x8=b.div`
  display: grid;
  gap: 16px;
`,y8=b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  @media (max-width: 639px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`,v8=b.div`
  display: grid;
  gap: 6px;
`,b8=b.h1`
  font-size: clamp(18px, 5.3vw, 28px);
  font-weight: 800;
  color: ${ee.text};
  margin: 0;
  letter-spacing: -0.3px;
`,S8=b.p`
  color: ${ee.subtext};
  margin: 0;
  font-size: clamp(12px, 3.5vw, 15px);
  font-weight: 500;
  word-break: break-word;
`,w8=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media (min-width: 640px) {
    justify-content: flex-end;
    width: auto;
  }
`,xm=b.button`
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
`,j8=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
`,Ku=b.div`
  background: linear-gradient(135deg, #fff, #f8fafc);
  border: 2px solid ${ee.border};
  border-radius: 14px;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
`,Zu=b.div`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, ${ee.primary}, ${ee.accentGreen});
  color: #fff;
  font-size: 20px;
  box-shadow: 0 6px 12px rgba(14, 165, 233, 0.22);
`,Ju=b.div`
  display: grid;
  gap: 2px;
  flex: 1;
`,Fu=b.span`
  font-weight: 800;
  font-size: clamp(18px, 5vw, 24px);
  color: ${ee.text};
  line-height: 1;
`,Wu=b.span`
  font-size: clamp(12px, 3.6vw, 13px);
  color: ${ee.subtext};
  font-weight: 500;
`,Iu=b.div`
  color: #f59e0b;
  font-size: 18px;
`,E8=b.div`
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
`,ym=b.button`
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
`,vm=b(Fi)`
  padding: 16px;
  animation: ${Xl?"none":Zg} 0.3s ease-out;
`,C8=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: auto 1fr auto;
    gap: 12px;
    align-items: center;
  }
`,z8=b.div`
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
`,T8=b.div`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: linear-gradient(135deg, ${ee.primary}, ${ee.accentGreen});
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 22px;
  box-shadow: 0 6px 12px rgba(14, 165, 233, 0.22);
`,M8=b.div`
  display: grid;
  gap: 8px;
`,R8=b.h3`
  margin: 0;
  color: ${ee.text};
  font-size: clamp(15px, 4.6vw, 18px);
  font-weight: 700;
`,A8=b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: ${ee.subtext};
`,Pu=b.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`,O8=b.div`
  width: 100%;
  max-width: 220px;
  height: 8px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid ${ee.border};
`,k8=b.div`
  height: 100%;
  width: ${a=>Math.min(Math.max(a.value,0),100)}%;
  background: linear-gradient(90deg, ${ee.primary}, ${ee.accentGreen});
  border-radius: 999px;
  transition: width 0.3s ease;
`,N8=b(r8)`
  color: ${ee.subtext};
  font-size: 18px;
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`,ko=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 12px;
  color: ${ee.subtext};
`,No=b.div`
  font-size: 60px;
  margin-bottom: 10px;
  opacity: 0.3;
  animation: ${Xl?"none":Jg} 3s ease-in-out infinite;
`,_o=b.h3`
  color: ${ee.text};
  font-size: clamp(16px, 4.6vw, 20px);
  font-weight: 800;
  margin: 0 0 6px 0;
`,$o=b.p`
  margin: 0;
  font-size: 13px;
  text-align: center;
`,_8=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 12px;
  }
`,$8=b(Fi)`
  padding: 16px;
  display: grid;
  gap: 12px;
  background: ${ee.bgSecondary};
  border: 2px solid ${ee.border};
`,D8=b.div`
  font-weight: 700;
  font-size: clamp(14px, 4.2vw, 16px);
  color: ${ee.text};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  svg {
    color: ${ee.primary};
  }
`,B8=b.div`
  font-size: 12px;
  color: ${ee.subtext};
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
`,L8=b.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`,Do=b.button`
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
`,U8=y.memo(function({item:i,onKey:s}){return u.jsx(z8,{role:"button",tabIndex:0,onKeyDown:o=>s(o,()=>{}),onClick:()=>{},"aria-label":`Open ${i.title}`,children:u.jsxs(C8,{children:[u.jsx(T8,{"aria-hidden":"true",children:i.icon}),u.jsxs(M8,{children:[u.jsx(R8,{children:i.title}),u.jsxs(A8,{children:[u.jsxs(Pu,{children:[u.jsx(Ji,{})," ",i.teacher]}),u.jsxs(Pu,{children:[u.jsx(Qg,{})," ",i.time]}),u.jsxs(Pu,{children:[u.jsx(Qo,{})," ",i.progress,"%"]})]}),u.jsx(O8,{"aria-hidden":"true",children:u.jsx(k8,{value:i.progress})})]}),u.jsx(N8,{})]})})});function H8(){const a=lc(),[i,s]=y.useState("history"),[o,f]=y.useState(!1),[d,p]=y.useState(!1),[v,x]=y.useState("light"),[m,S]=y.useState("all"),[w,z]=y.useState(!1),[M,R]=y.useState(null),[N,B]=y.useState(null);y.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]),y.useEffect(()=>{const Z=localStorage.getItem(c8)==="true";z(Z);const F=localStorage.getItem(sm);if(F)try{const ce=JSON.parse(F);R(ce),B(ce)}catch{R(null)}else R(null)},[]);const L=[{id:1,title:"Sense of Collective Identity",teacher:"Mr. Arjun Mehta",time:"2 hours ago",progress:75,icon:u.jsx(Ji,{})},{id:2,title:"Understanding Diversity",teacher:"Ms. Nisha Rao",time:"Yesterday",progress:45,icon:u.jsx(Qo,{})},{id:3,title:"Nationalism in India",teacher:"Dr. Kavita Iyer",time:"2 days ago",progress:90,icon:u.jsx(lm,{})},{id:4,title:"Democracy & Rights",teacher:"Prof. R. Menon",time:"1 week ago",progress:100,icon:u.jsx(im,{})}],H=[{id:"f1",title:"Globalisation & Indian Economy",by:"Siddharth Sir",reads:12},{id:"f2",title:"Federalism Basics",by:"Anita Ma'am",reads:9},{id:"f3",title:"Judiciary: Structure",by:"R. Sharma",reads:14},{id:"f4",title:"Gender, Religion & Caste",by:"S. Verma",reads:7}],G=()=>{R({...N}),localStorage.setItem(sm,JSON.stringify({...N,isPro:w})),f(!1)},q=(Z,F)=>B({...N,[Z]:F}),K=(Z,F)=>{(Z.key==="Enter"||Z.key===" ")&&(Z.preventDefault(),F())},D=u.jsx(Fi,{style:{padding:16},children:u.jsxs(ko,{children:[u.jsx(No,{children:u.jsx(Qu,{})}),u.jsx(_o,{children:"You’re not a Pro member yet"}),u.jsx($o,{children:"Complete Demo Pay on the teacher page to unlock your personalized dashboard."}),u.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginTop:16},children:u.jsx(Do,{type:"button",onClick:()=>a("/instalearn/"),children:"Go to Teachers"})})]})}),V=u.jsx(Fi,{style:{padding:16},children:u.jsxs(ko,{children:[u.jsx(No,{children:u.jsx(om,{})}),u.jsx(_o,{children:"Complete your profile"}),u.jsx($o,{children:"We couldn’t find your details. Finish the Demo Pay flow and fill your info to set up your profile."}),u.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginTop:16},children:u.jsx(Do,{as:"a",href:"/teacher",children:"Finish Setup"})})]})});return u.jsxs(f8,{$theme:v,children:[u.jsx(d8,{children:w?M?u.jsxs(u.Fragment,{children:[u.jsx(h8,{children:u.jsxs(p8,{children:[u.jsx(m8,{children:u.jsx(g8,{"aria-label":"User avatar",children:M.avatar?.trim()||u.jsx(om,{size:28})})}),u.jsxs(x8,{children:[u.jsxs(y8,{children:[u.jsxs(v8,{children:[u.jsx(b8,{children:M.name}),u.jsx(S8,{children:M.email})]}),u.jsxs(w8,{children:[u.jsxs(xm,{type:"button","aria-label":"Edit profile",onClick:()=>{B(M),f(!0)},children:[u.jsx(am,{})," ",u.jsx("span",{children:"Edit"})]}),u.jsxs(xm,{type:"button","aria-label":"Settings",onClick:()=>p(!0),children:[u.jsx(nm,{})," ",u.jsx("span",{children:"Settings"})]})]})]}),u.jsxs(j8,{children:[u.jsxs(Ku,{children:[u.jsx(Zu,{"aria-hidden":"true",children:u.jsx(Qo,{})}),u.jsxs(Ju,{children:[u.jsx(Fu,{children:M.booksRead??24}),u.jsx(Wu,{children:"Books Read"})]}),u.jsx(Iu,{title:"Lifetime reads",children:u.jsx(im,{})})]}),u.jsxs(Ku,{children:[u.jsx(Zu,{"aria-hidden":"true",children:u.jsx(Qg,{})}),u.jsxs(Ju,{children:[u.jsx(Fu,{children:M.hoursSpent??156}),u.jsx(Wu,{children:"Study Hours"})]}),u.jsx(Iu,{title:"Consistent!",children:u.jsx(Ro,{})})]}),u.jsxs(Ku,{children:[u.jsx(Zu,{"aria-hidden":"true",children:u.jsx(Ji,{})}),u.jsxs(Ju,{children:[u.jsx(Fu,{children:M.favoriteTeacher??"Ms. Sarah"}),u.jsx(Wu,{children:"Favourite Teacher"})]}),u.jsx(Iu,{children:u.jsx(o8,{})})]})]})]})]})}),u.jsxs(E8,{children:[u.jsxs(ym,{$active:i==="history",onClick:()=>s("history"),"aria-pressed":i==="history",children:[u.jsx(lm,{})," History"]}),u.jsxs(ym,{$active:i==="favorites",onClick:()=>s("favorites"),"aria-pressed":i==="favorites",children:[u.jsx(Ro,{})," Favorites"]})]}),i==="history"?u.jsx(vm,{children:L.length>0?L.map(Z=>u.jsx(U8,{item:Z,onKey:K},Z.id)):u.jsxs(ko,{children:[u.jsx(No,{children:u.jsx(Qu,{})}),u.jsx(_o,{children:"No history yet"}),u.jsx($o,{children:"Start reading to see your progress here."})]})}):u.jsx(vm,{children:H.length>0?u.jsx(_8,{children:H.map(Z=>u.jsxs($8,{children:[u.jsxs(D8,{children:[u.jsx(Qu,{})," ",Z.title]}),u.jsxs(B8,{children:[u.jsxs("span",{children:["By ",Z.by]}),u.jsx("span",{children:"•"}),u.jsxs("span",{children:[Z.reads," reads"]})]}),u.jsxs(L8,{children:[u.jsxs(Do,{type:"button",children:[u.jsx(Qo,{})," Open"]}),u.jsxs(Do,{type:"button",children:[u.jsx(Ro,{})," Unfavourite"]})]})]},Z.id))}):u.jsxs(ko,{children:[u.jsx(No,{children:u.jsx(Ro,{})}),u.jsx(_o,{children:"No favorites yet"}),u.jsx($o,{children:"Tap the star on a lesson to save it here."})]})})]}):V:D}),o&&M&&u.jsxs(u.Fragment,{children:[u.jsx(um,{onClick:()=>f(!1)}),u.jsxs(fm,{role:"dialog","aria-modal":"true","aria-labelledby":"editProfileTitle",children:[u.jsxs(dm,{children:[u.jsxs(hm,{id:"editProfileTitle",children:[u.jsx(am,{})," Edit Profile"]}),u.jsx(pm,{type:"button",onClick:()=>f(!1),"aria-label":"Close edit profile",children:u.jsx(Ao,{})})]}),u.jsxs(da,{children:[u.jsx(ha,{htmlFor:"name",children:"Name"}),u.jsx(Tl,{id:"name",value:N?.name||"",onChange:Z=>q("name",Z.target.value)})]}),u.jsxs(da,{children:[u.jsx(ha,{htmlFor:"email",children:"Email"}),u.jsx(Tl,{id:"email",type:"email",value:N?.email||"",onChange:Z=>q("email",Z.target.value)})]}),u.jsxs(da,{children:[u.jsx(ha,{htmlFor:"avatar",children:"Avatar Initials"}),u.jsx(Tl,{id:"avatar",value:N?.avatar||"",onChange:Z=>q("avatar",Z.target.value)})]}),u.jsxs(da,{children:[u.jsx(ha,{htmlFor:"booksRead",children:"Books Read"}),u.jsx(Tl,{id:"booksRead",type:"number",min:0,value:N?.booksRead??24,onChange:Z=>q("booksRead",Number(Z.target.value))})]}),u.jsxs(da,{children:[u.jsx(ha,{htmlFor:"hoursSpent",children:"Study Hours"}),u.jsx(Tl,{id:"hoursSpent",type:"number",min:0,value:N?.hoursSpent??156,onChange:Z=>q("hoursSpent",Number(Z.target.value))})]}),u.jsxs(da,{children:[u.jsx(ha,{htmlFor:"favTeacher",children:"Favourite Teacher"}),u.jsx(Tl,{id:"favTeacher",value:N?.favoriteTeacher??"Ms. Sarah",onChange:Z=>q("favoriteTeacher",Z.target.value)})]}),u.jsxs(gm,{children:[u.jsxs(Oo,{type:"button",onClick:()=>f(!1),children:[u.jsx(Ao,{})," Cancel"]}),u.jsxs(Oo,{type:"button",primary:!0,onClick:G,children:[u.jsx(rm,{})," Save"]})]})]})]}),d&&u.jsxs(u.Fragment,{children:[u.jsx(um,{onClick:()=>p(!1)}),u.jsxs(fm,{role:"dialog","aria-modal":"true","aria-labelledby":"settingsTitle",children:[u.jsxs(dm,{children:[u.jsxs(hm,{id:"settingsTitle",children:[u.jsx(nm,{})," Settings"]}),u.jsx(pm,{type:"button",onClick:()=>p(!1),"aria-label":"Close settings",children:u.jsx(Ao,{})})]}),u.jsxs(da,{children:[u.jsx(ha,{htmlFor:"theme",children:"Theme"}),u.jsxs(mm,{id:"theme",value:v,onChange:Z=>x(Z.target.value),children:[u.jsx("option",{value:"light",children:"Light"}),u.jsx("option",{value:"dark",children:"Dark"})]})]}),u.jsxs(da,{children:[u.jsx(ha,{htmlFor:"notifications",children:"Notifications"}),u.jsxs(mm,{id:"notifications",value:m,onChange:Z=>S(Z.target.value),children:[u.jsx("option",{value:"all",children:"All activity"}),u.jsx("option",{value:"mentions",children:"Mentions only"}),u.jsx("option",{value:"none",children:"None"})]})]}),u.jsxs(gm,{children:[u.jsxs(Oo,{type:"button",onClick:()=>p(!1),children:[u.jsx(Ao,{})," Close"]}),u.jsxs(Oo,{type:"button",primary:!0,onClick:()=>p(!1),children:[u.jsx(rm,{})," Apply"]})]})]})]})]})}const Y8=Et`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,G8=Et`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,q8=Et`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,X8=Et`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`,V8=b.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,Q8=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,ef=b.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${Y8} 20s infinite ease-in-out;

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
`,K8=b.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${G8} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 20px 20px;
  }
`,Z8=b.div`
  margin-bottom: 0px;
  position: relative;
`,J8=b.div`
  font-size: 70px;
  animation: ${q8} 2s infinite;
`,F8=b.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`,W8=b.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 25px;
  line-height: 1.6;
`,I8=b.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`,P8=b.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  animation: ${X8} 3s ease-in-out infinite;
`,eS=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,tf=b.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`,nf=b.div`
  font-size:30px;
  margin-bottom: 10px;
`,af=b.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 600;
`,tS=b.button`
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
`;function bm(){const[a,i]=y.useState(!1),s=()=>{i(!0),setTimeout(()=>{i(!1)},2e3)};return u.jsxs(V8,{children:[u.jsxs(Q8,{children:[u.jsx(ef,{}),u.jsx(ef,{}),u.jsx(ef,{})]}),u.jsxs(K8,{children:[u.jsx(Z8,{children:u.jsx(J8,{children:"🚧"})}),u.jsx(F8,{children:"Building Something Amazing"}),u.jsx(W8,{children:"We're working hard to bring you an incredible new feature. Stay tuned!"}),u.jsx(I8,{children:u.jsx(P8,{})}),u.jsxs(eS,{children:[u.jsxs(tf,{children:[u.jsx(nf,{children:"⚡"}),u.jsx(af,{children:"Lightning Fast"})]}),u.jsxs(tf,{children:[u.jsx(nf,{children:"🎨"}),u.jsx(af,{children:"Beautiful Design"})]}),u.jsxs(tf,{children:[u.jsx(nf,{children:"🔒"}),u.jsx(af,{children:"Secure & Private"})]})]}),u.jsx(tS,{onClick:s,$notified:a,children:a?"✓ You'll be notified!":"Notify Me When Ready"})]})]})}var lf={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Sm;function nS(){return Sm||(Sm=1,(function(a){(function(){var i={}.hasOwnProperty;function s(){for(var d="",p=0;p<arguments.length;p++){var v=arguments[p];v&&(d=f(d,o(v)))}return d}function o(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return s.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var p="";for(var v in d)i.call(d,v)&&d[v]&&(p=f(p,v));return p}function f(d,p){return p?d?d+" "+p:d+p:d}a.exports?(s.default=s,a.exports=s):window.classNames=s})()})(lf)),lf.exports}var aS=nS();const rt=Ii(aS);function kf(){return kf=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var o in s)({}).hasOwnProperty.call(s,o)&&(a[o]=s[o])}return a},kf.apply(null,arguments)}function Fg(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)!==-1)continue;s[o]=a[o]}return s}function wm(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function lS(a){var i=iS(a,"string");return typeof i=="symbol"?i:String(i)}function iS(a,i){if(typeof a!="object"||a===null)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var o=s.call(a,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function rS(a,i,s){var o=y.useRef(a!==void 0),f=y.useState(i),d=f[0],p=f[1],v=a!==void 0,x=o.current;return o.current=v,!v&&x&&d!==i&&p(i),[v?a:d,y.useCallback(function(m){for(var S=arguments.length,w=new Array(S>1?S-1:0),z=1;z<S;z++)w[z-1]=arguments[z];s&&s.apply(void 0,[m].concat(w)),p(m)},[s])]}function Wg(a,i){return Object.keys(i).reduce(function(s,o){var f,d=s,p=d[wm(o)],v=d[o],x=Fg(d,[wm(o),o].map(lS)),m=i[o],S=rS(v,p,a[m]),w=S[0],z=S[1];return kf({},x,(f={},f[o]=w,f[m]=z,f))},a)}function Nf(a,i){return Nf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,o){return s.__proto__=o,s},Nf(a,i)}function oS(a,i){a.prototype=Object.create(i.prototype),a.prototype.constructor=a,Nf(a,i)}const cS=["xxl","xl","lg","md","sm","xs"],sS="xs",Ig=y.createContext({prefixes:{},breakpoints:cS,minBreakpoint:sS}),{Consumer:Cw,Provider:zw}=Ig;function Ct(a,i){const{prefixes:s}=y.useContext(Ig);return a||s[i]||i}function nd(a){return a&&a.ownerDocument||document}function uS(a){var i=nd(a);return i&&i.defaultView||window}function fS(a,i){return uS(a).getComputedStyle(a,i)}var dS=/([A-Z])/g;function hS(a){return a.replace(dS,"-$1").toLowerCase()}var pS=/^ms-/;function Bo(a){return hS(a).replace(pS,"-ms-")}var mS=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function gS(a){return!!(a&&mS.test(a))}function _n(a,i){var s="",o="";if(typeof i=="string")return a.style.getPropertyValue(Bo(i))||fS(a).getPropertyValue(Bo(i));Object.keys(i).forEach(function(f){var d=i[f];!d&&d!==0?a.style.removeProperty(Bo(f)):gS(f)?o+=f+"("+d+") ":s+=Bo(f)+": "+d+";"}),o&&(s+="transform: "+o+";"),a.style.cssText+=";"+s}var rf={exports:{}},of,jm;function xS(){if(jm)return of;jm=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return of=a,of}var cf,Em;function yS(){if(Em)return cf;Em=1;var a=xS();function i(){}function s(){}return s.resetWarningCache=i,cf=function(){function o(p,v,x,m,S,w){if(w!==a){var z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw z.name="Invariant Violation",z}}o.isRequired=o;function f(){return o}var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:f,element:o,elementType:o,instanceOf:f,node:o,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:s,resetWarningCache:i};return d.PropTypes=d,d},cf}var Cm;function vS(){return Cm||(Cm=1,rf.exports=yS()()),rf.exports}var bS=vS();const sf=Ii(bS),zm={disabled:!1},Pg=Be.createContext(null);var SS=function(i){return i.scrollTop},Vi="unmounted",ma="exited",en="entering",On="entered",Wi="exiting",Ln=(function(a){oS(i,a);function i(o,f){var d;d=a.call(this,o,f)||this;var p=f,v=p&&!p.isMounting?o.enter:o.appear,x;return d.appearStatus=null,o.in?v?(x=ma,d.appearStatus=en):x=On:o.unmountOnExit||o.mountOnEnter?x=Vi:x=ma,d.state={status:x},d.nextCallback=null,d}i.getDerivedStateFromProps=function(f,d){var p=f.in;return p&&d.status===Vi?{status:ma}:null};var s=i.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(f){var d=null;if(f!==this.props){var p=this.state.status;this.props.in?p!==en&&p!==On&&(d=en):(p===en||p===On)&&(d=Wi)}this.updateStatus(!1,d)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var f=this.props.timeout,d,p,v;return d=p=v=f,f!=null&&typeof f!="number"&&(d=f.exit,p=f.enter,v=f.appear!==void 0?f.appear:p),{exit:d,enter:p,appear:v}},s.updateStatus=function(f,d){if(f===void 0&&(f=!1),d!==null)if(this.cancelNextCallback(),d===en){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Ol.findDOMNode(this);p&&SS(p)}this.performEnter(f)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ma&&this.setState({status:Vi})},s.performEnter=function(f){var d=this,p=this.props.enter,v=this.context?this.context.isMounting:f,x=this.props.nodeRef?[v]:[Ol.findDOMNode(this),v],m=x[0],S=x[1],w=this.getTimeouts(),z=v?w.appear:w.enter;if(!f&&!p||zm.disabled){this.safeSetState({status:On},function(){d.props.onEntered(m)});return}this.props.onEnter(m,S),this.safeSetState({status:en},function(){d.props.onEntering(m,S),d.onTransitionEnd(z,function(){d.safeSetState({status:On},function(){d.props.onEntered(m,S)})})})},s.performExit=function(){var f=this,d=this.props.exit,p=this.getTimeouts(),v=this.props.nodeRef?void 0:Ol.findDOMNode(this);if(!d||zm.disabled){this.safeSetState({status:ma},function(){f.props.onExited(v)});return}this.props.onExit(v),this.safeSetState({status:Wi},function(){f.props.onExiting(v),f.onTransitionEnd(p.exit,function(){f.safeSetState({status:ma},function(){f.props.onExited(v)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(f,d){d=this.setNextCallback(d),this.setState(f,d)},s.setNextCallback=function(f){var d=this,p=!0;return this.nextCallback=function(v){p&&(p=!1,d.nextCallback=null,f(v))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},s.onTransitionEnd=function(f,d){this.setNextCallback(d);var p=this.props.nodeRef?this.props.nodeRef.current:Ol.findDOMNode(this),v=f==null&&!this.props.addEndListener;if(!p||v){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var x=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],m=x[0],S=x[1];this.props.addEndListener(m,S)}f!=null&&setTimeout(this.nextCallback,f)},s.render=function(){var f=this.state.status;if(f===Vi)return null;var d=this.props,p=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var v=Fg(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Be.createElement(Pg.Provider,{value:null},typeof p=="function"?p(f,v):Be.cloneElement(Be.Children.only(p),v))},i})(Be.Component);Ln.contextType=Pg;Ln.propTypes={};function Ml(){}Ln.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ml,onEntering:Ml,onEntered:Ml,onExit:Ml,onExiting:Ml,onExited:Ml};Ln.UNMOUNTED=Vi;Ln.EXITED=ma;Ln.ENTERING=en;Ln.ENTERED=On;Ln.EXITING=Wi;function wS(a){return a.code==="Escape"||a.keyCode===27}function jS(){const a=y.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Vl(a){if(!a||typeof a=="function")return null;const{major:i}=jS();return i>=19?a.props.ref:a.ref}const hc=!!(typeof window<"u"&&window.document&&window.document.createElement);var _f=!1,$f=!1;try{var uf={get passive(){return _f=!0},get once(){return $f=_f=!0}};hc&&(window.addEventListener("test",uf,uf),window.removeEventListener("test",uf,!0))}catch{}function ES(a,i,s,o){if(o&&typeof o!="boolean"&&!$f){var f=o.once,d=o.capture,p=s;!$f&&f&&(p=s.__once||function v(x){this.removeEventListener(i,v,d),s.call(this,x)},s.__once=p),a.addEventListener(i,p,_f?o:d)}a.addEventListener(i,s,o)}function CS(a,i,s,o){var f=o&&typeof o!="boolean"?o.capture:o;a.removeEventListener(i,s,f),s.__once&&a.removeEventListener(i,s.__once,f)}function tc(a,i,s,o){return ES(a,i,s,o),function(){CS(a,i,s,o)}}function zS(a,i,s,o){if(o===void 0&&(o=!0),a){var f=document.createEvent("HTMLEvents");f.initEvent(i,s,o),a.dispatchEvent(f)}}function TS(a){var i=_n(a,"transitionDuration")||"",s=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*s}function MS(a,i,s){s===void 0&&(s=5);var o=!1,f=setTimeout(function(){o||zS(a,"transitionend",!0)},i+s),d=tc(a,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(f),d()}}function RS(a,i,s,o){s==null&&(s=TS(a)||0);var f=MS(a,s,o),d=tc(a,"transitionend",i);return function(){f(),d()}}function Tm(a,i){const s=_n(a,i)||"",o=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*o}function ad(a,i){const s=Tm(a,"transitionDuration"),o=Tm(a,"transitionDelay"),f=RS(a,d=>{d.target===a&&(f(),i(d))},s+o)}function qi(...a){return a.filter(i=>i!=null).reduce((i,s)=>{if(typeof s!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return i===null?s:function(...f){i.apply(this,f),s.apply(this,f)}},null)}function e2(a){a.offsetHeight}const Mm=a=>!a||typeof a=="function"?a:i=>{a.current=i};function AS(a,i){const s=Mm(a),o=Mm(i);return f=>{s&&s(f),o&&o(f)}}function OS(a,i){return y.useMemo(()=>AS(a,i),[a,i])}function kS(a){return a&&"setState"in a?Ol.findDOMNode(a):a??null}const pc=Be.forwardRef(({onEnter:a,onEntering:i,onEntered:s,onExit:o,onExiting:f,onExited:d,addEndListener:p,children:v,childRef:x,...m},S)=>{const w=y.useRef(null),z=OS(w,x),M=D=>{z(kS(D))},R=D=>V=>{D&&w.current&&D(w.current,V)},N=y.useCallback(R(a),[a]),B=y.useCallback(R(i),[i]),L=y.useCallback(R(s),[s]),H=y.useCallback(R(o),[o]),G=y.useCallback(R(f),[f]),q=y.useCallback(R(d),[d]),K=y.useCallback(R(p),[p]);return u.jsx(Ln,{ref:S,...m,onEnter:N,onEntered:L,onEntering:B,onExit:H,onExited:q,onExiting:G,addEndListener:K,nodeRef:w,children:typeof v=="function"?(D,V)=>v(D,{...V,ref:M}):Be.cloneElement(v,{ref:M})})});pc.displayName="TransitionWrapper";const NS={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function _S(a,i){const s=`offset${a[0].toUpperCase()}${a.slice(1)}`,o=i[s],f=NS[a];return o+parseInt(_n(i,f[0]),10)+parseInt(_n(i,f[1]),10)}const $S={[ma]:"collapse",[Wi]:"collapsing",[en]:"collapsing",[On]:"collapse show"},t2=Be.forwardRef(({onEnter:a,onEntering:i,onEntered:s,onExit:o,onExiting:f,className:d,children:p,dimension:v="height",in:x=!1,timeout:m=300,mountOnEnter:S=!1,unmountOnExit:w=!1,appear:z=!1,getDimensionValue:M=_S,...R},N)=>{const B=typeof v=="function"?v():v,L=y.useMemo(()=>qi(D=>{D.style[B]="0"},a),[B,a]),H=y.useMemo(()=>qi(D=>{const V=`scroll${B[0].toUpperCase()}${B.slice(1)}`;D.style[B]=`${D[V]}px`},i),[B,i]),G=y.useMemo(()=>qi(D=>{D.style[B]=null},s),[B,s]),q=y.useMemo(()=>qi(D=>{D.style[B]=`${M(B,D)}px`,e2(D)},o),[o,M,B]),K=y.useMemo(()=>qi(D=>{D.style[B]=null},f),[B,f]);return u.jsx(pc,{ref:N,addEndListener:ad,...R,"aria-expanded":R.role?x:null,onEnter:L,onEntering:H,onEntered:G,onExit:q,onExiting:K,childRef:Vl(p),in:x,timeout:m,mountOnEnter:S,unmountOnExit:w,appear:z,children:(D,V)=>Be.cloneElement(p,{...V,className:rt(d,p.props.className,$S[D],B==="width"&&"collapse-horizontal")})})});t2.displayName="Collapse";function DS(a){const i=y.useRef(a);return y.useEffect(()=>{i.current=a},[a]),i}function mc(a){const i=DS(a);return y.useCallback(function(...s){return i.current&&i.current(...s)},[i])}const BS=(a=>y.forwardRef((i,s)=>u.jsx("div",{...i,ref:s,className:rt(i.className,a)})));function LS(a){const i=y.useRef(a);return y.useEffect(()=>{i.current=a},[a]),i}function kn(a){const i=LS(a);return y.useCallback(function(...s){return i.current&&i.current(...s)},[i])}function US(){const a=y.useRef(!0),i=y.useRef(()=>a.current);return y.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),i.current}function HS(a){const i=y.useRef(null);return y.useEffect(()=>{i.current=a}),i.current}const YS=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",GS=typeof document<"u",Rm=GS||YS?y.useLayoutEffect:y.useEffect,qS=["as","disabled"];function XS(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}function VS(a){return!a||a.trim()==="#"}function n2({tagName:a,disabled:i,href:s,target:o,rel:f,role:d,onClick:p,tabIndex:v=0,type:x}){a||(s!=null||o!=null||f!=null?a="a":a="button");const m={tagName:a};if(a==="button")return[{type:x||"button",disabled:i},m];const S=z=>{if((i||a==="a"&&VS(s))&&z.preventDefault(),i){z.stopPropagation();return}p?.(z)},w=z=>{z.key===" "&&(z.preventDefault(),S(z))};return a==="a"&&(s||(s="#"),i&&(s=void 0)),[{role:d??"button",disabled:void 0,tabIndex:i?void 0:v,href:s,target:a==="a"?o:void 0,"aria-disabled":i||void 0,rel:a==="a"?f:void 0,onClick:S,onKeyDown:w},m]}const a2=y.forwardRef((a,i)=>{let{as:s,disabled:o}=a,f=XS(a,qS);const[d,{tagName:p}]=n2(Object.assign({tagName:s,disabled:o},f));return u.jsx(p,Object.assign({},f,d,{ref:i}))});a2.displayName="Button";const QS=["onKeyDown"];function KS(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}function ZS(a){return!a||a.trim()==="#"}const l2=y.forwardRef((a,i)=>{let{onKeyDown:s}=a,o=KS(a,QS);const[f]=n2(Object.assign({tagName:"a"},o)),d=kn(p=>{f.onKeyDown(p),s?.(p)});return ZS(o.href)||o.role==="button"?u.jsx("a",Object.assign({ref:i},o,f,{onKeyDown:d})):u.jsx("a",Object.assign({ref:i},o,{onKeyDown:s}))});l2.displayName="Anchor";const JS={[en]:"show",[On]:"show"},i2=y.forwardRef(({className:a,children:i,transitionClasses:s={},onEnter:o,...f},d)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...f},v=y.useCallback((x,m)=>{e2(x),o?.(x,m)},[o]);return u.jsx(pc,{ref:d,addEndListener:ad,...p,onEnter:v,childRef:Vl(i),children:(x,m)=>y.cloneElement(i,{...m,className:rt("fade",a,i.props.className,JS[x],s[x])})})});i2.displayName="Fade";const FS={"aria-label":sf.string,onClick:sf.func,variant:sf.oneOf(["white"])},ld=y.forwardRef(({className:a,variant:i,"aria-label":s="Close",...o},f)=>u.jsx("button",{ref:f,type:"button",className:rt("btn-close",i&&`btn-close-${i}`,a),"aria-label":s,...o}));ld.displayName="CloseButton";ld.propTypes=FS;const r2=y.createContext(null);r2.displayName="CardHeaderContext";const o2=y.forwardRef(({bsPrefix:a,fluid:i=!1,as:s="div",className:o,...f},d)=>{const p=Ct(a,"container"),v=typeof i=="string"?`-${i}`:"-fluid";return u.jsx(s,{ref:d,...f,className:rt(o,i?`${p}${v}`:p)})});o2.displayName="Container";var WS=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ba(a,i){return WS(a.querySelectorAll(i))}function IS(){const[,a]=y.useReducer(i=>i+1,0);return a}function Am(a,i){if(a.contains)return a.contains(i);if(a.compareDocumentPosition)return a===i||!!(a.compareDocumentPosition(i)&16)}const nc=y.createContext(null),id=(a,i=null)=>a!=null?String(a):i||null,rd=y.createContext(null);rd.displayName="NavContext";const PS="data-rr-ui-",e7="rrUi";function gc(a){return`${PS}${a}`}function t7(a){return`${e7}${a}`}const c2=y.createContext(hc?window:void 0);c2.Provider;function od(){return y.useContext(c2)}const n7=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",a7=typeof document<"u",l7=a7||n7?y.useLayoutEffect:y.useEffect,Ql=y.createContext(null);Ql.displayName="NavbarContext";const Om=a=>!a||typeof a=="function"?a:i=>{a.current=i};function i7(a,i){const s=Om(a),o=Om(i);return f=>{s&&s(f),o&&o(f)}}function xc(a,i){return y.useMemo(()=>i7(a,i),[a,i])}const s2=y.createContext(null),r7=["as","active","eventKey"];function o7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}function u2({key:a,onClick:i,active:s,id:o,role:f,disabled:d}){const p=y.useContext(nc),v=y.useContext(rd),x=y.useContext(s2);let m=s;const S={role:f};if(v){!f&&v.role==="tablist"&&(S.role="tab");const w=v.getControllerId(a??null),z=v.getControlledId(a??null);S[gc("event-key")]=a,S.id=w||o,m=s==null&&a!=null?v.activeKey===a:s,(m||!(x!=null&&x.unmountOnExit)&&!(x!=null&&x.mountOnEnter))&&(S["aria-controls"]=z)}return S.role==="tab"&&(S["aria-selected"]=m,m||(S.tabIndex=-1),d&&(S.tabIndex=-1,S["aria-disabled"]=!0)),S.onClick=kn(w=>{d||(i?.(w),a!=null&&p&&!w.isPropagationStopped()&&p(a,w))}),[S,{isActive:m}]}const f2=y.forwardRef((a,i)=>{let{as:s=a2,active:o,eventKey:f}=a,d=o7(a,r7);const[p,v]=u2(Object.assign({key:id(f,d.href),active:o},d));return p[gc("active")]=v.isActive,u.jsx(s,Object.assign({},d,p,{ref:i}))});f2.displayName="NavItem";const c7=["as","onSelect","activeKey","role","onKeyDown"];function s7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}const km=()=>{},Nm=gc("event-key"),d2=y.forwardRef((a,i)=>{let{as:s="div",onSelect:o,activeKey:f,role:d,onKeyDown:p}=a,v=s7(a,c7);const x=IS(),m=y.useRef(!1),S=y.useContext(nc),w=y.useContext(s2);let z,M;w&&(d=d||"tablist",f=w.activeKey,z=w.getControlledId,M=w.getControllerId);const R=y.useRef(null),N=G=>{const q=R.current;if(!q)return null;const K=Ba(q,`[${Nm}]:not([aria-disabled=true])`),D=q.querySelector("[aria-selected=true]");if(!D||D!==document.activeElement)return null;const V=K.indexOf(D);if(V===-1)return null;let Z=V+G;return Z>=K.length&&(Z=0),Z<0&&(Z=K.length-1),K[Z]},B=(G,q)=>{G!=null&&(o?.(G,q),S?.(G,q))},L=G=>{if(p?.(G),!w)return;let q;switch(G.key){case"ArrowLeft":case"ArrowUp":q=N(-1);break;case"ArrowRight":case"ArrowDown":q=N(1);break;default:return}q&&(G.preventDefault(),B(q.dataset[t7("EventKey")]||null,G),m.current=!0,x())};y.useEffect(()=>{if(R.current&&m.current){const G=R.current.querySelector(`[${Nm}][aria-selected=true]`);G?.focus()}m.current=!1});const H=xc(i,R);return u.jsx(nc.Provider,{value:B,children:u.jsx(rd.Provider,{value:{role:d,activeKey:id(f),getControlledId:z||km,getControllerId:M||km},children:u.jsx(s,Object.assign({},v,{onKeyDown:L,ref:H,role:d}))})})});d2.displayName="Nav";const u7=Object.assign(d2,{Item:f2});function ff(a){a===void 0&&(a=nd());try{var i=a.activeElement;return!i||!i.nodeName?null:i}catch{return a.body}}function f7(a){const i=y.useRef(a);return i.current=a,i}function d7(a){const i=f7(a);y.useEffect(()=>()=>i.current(),[])}function h7(a=document){const i=a.defaultView;return Math.abs(i.innerWidth-a.documentElement.clientWidth)}const _m=gc("modal-open");class cd{constructor({ownerDocument:i,handleContainerOverflow:s=!0,isRTL:o=!1}={}){this.handleContainerOverflow=s,this.isRTL=o,this.modals=[],this.ownerDocument=i}getScrollbarWidth(){return h7(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(i){}removeModalAttributes(i){}setContainerStyle(i){const s={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",f=this.getElement();i.style={overflow:f.style.overflow,[o]:f.style[o]},i.scrollBarWidth&&(s[o]=`${parseInt(_n(f,o)||"0",10)+i.scrollBarWidth}px`),f.setAttribute(_m,""),_n(f,s)}reset(){[...this.modals].forEach(i=>this.remove(i))}removeContainerStyle(i){const s=this.getElement();s.removeAttribute(_m),Object.assign(s.style,i.style)}add(i){let s=this.modals.indexOf(i);return s!==-1||(s=this.modals.length,this.modals.push(i),this.setModalAttributes(i),s!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),s}remove(i){const s=this.modals.indexOf(i);s!==-1&&(this.modals.splice(s,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(i))}isTopModal(i){return!!this.modals.length&&this.modals[this.modals.length-1]===i}}const df=(a,i)=>hc?a==null?(i||nd()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function p7(a,i){const s=od(),[o,f]=y.useState(()=>df(a,s?.document));if(!o){const d=df(a);d&&f(d)}return y.useEffect(()=>{},[i,o]),y.useEffect(()=>{const d=df(a);d!==o&&f(d)},[a,o]),o}function m7({children:a,in:i,onExited:s,mountOnEnter:o,unmountOnExit:f}){const d=y.useRef(null),p=y.useRef(i),v=kn(s);y.useEffect(()=>{i?p.current=!0:v(d.current)},[i,v]);const x=xc(d,Vl(a)),m=y.cloneElement(a,{ref:x});return i?m:f||!p.current&&o?null:m}const g7=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function x7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}function y7(a){let{onEnter:i,onEntering:s,onEntered:o,onExit:f,onExiting:d,onExited:p,addEndListener:v,children:x}=a,m=x7(a,g7);const S=y.useRef(null),w=xc(S,Vl(x)),z=q=>K=>{q&&S.current&&q(S.current,K)},M=y.useCallback(z(i),[i]),R=y.useCallback(z(s),[s]),N=y.useCallback(z(o),[o]),B=y.useCallback(z(f),[f]),L=y.useCallback(z(d),[d]),H=y.useCallback(z(p),[p]),G=y.useCallback(z(v),[v]);return Object.assign({},m,{nodeRef:S},i&&{onEnter:M},s&&{onEntering:R},o&&{onEntered:N},f&&{onExit:B},d&&{onExiting:L},p&&{onExited:H},v&&{addEndListener:G},{children:typeof x=="function"?(q,K)=>x(q,Object.assign({},K,{ref:w})):y.cloneElement(x,{ref:w})})}const v7=["component"];function b7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}const S7=y.forwardRef((a,i)=>{let{component:s}=a,o=b7(a,v7);const f=y7(o);return u.jsx(s,Object.assign({ref:i},f))});function w7({in:a,onTransition:i}){const s=y.useRef(null),o=y.useRef(!0),f=kn(i);return Rm(()=>{if(!s.current)return;let d=!1;return f({in:a,element:s.current,initial:o.current,isStale:()=>d}),()=>{d=!0}},[a,f]),Rm(()=>(o.current=!1,()=>{o.current=!0}),[]),s}function j7({children:a,in:i,onExited:s,onEntered:o,transition:f}){const[d,p]=y.useState(!i);i&&d&&p(!1);const v=w7({in:!!i,onTransition:m=>{const S=()=>{m.isStale()||(m.in?o?.(m.element,m.initial):(p(!0),s?.(m.element)))};Promise.resolve(f(m)).then(S,w=>{throw m.in||p(!0),w})}}),x=xc(v,Vl(a));return d&&!i?null:y.cloneElement(a,{ref:x})}function $m(a,i,s){return a?u.jsx(S7,Object.assign({},s,{component:a})):i?u.jsx(j7,Object.assign({},s,{transition:i})):u.jsx(m7,Object.assign({},s))}const E7=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function C7(a,i){if(a==null)return{};var s={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;s[o]=a[o]}return s}let hf;function z7(a){return hf||(hf=new cd({ownerDocument:a?.document})),hf}function T7(a){const i=od(),s=a||z7(i),o=y.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>s.add(o.current),remove:()=>s.remove(o.current),isTopModal:()=>s.isTopModal(o.current),setDialogRef:y.useCallback(f=>{o.current.dialog=f},[]),setBackdropRef:y.useCallback(f=>{o.current.backdrop=f},[])})}const h2=y.forwardRef((a,i)=>{let{show:s=!1,role:o="dialog",className:f,style:d,children:p,backdrop:v=!0,keyboard:x=!0,onBackdropClick:m,onEscapeKeyDown:S,transition:w,runTransition:z,backdropTransition:M,runBackdropTransition:R,autoFocus:N=!0,enforceFocus:B=!0,restoreFocus:L=!0,restoreFocusOptions:H,renderDialog:G,renderBackdrop:q=Le=>u.jsx("div",Object.assign({},Le)),manager:K,container:D,onShow:V,onHide:Z=()=>{},onExit:F,onExited:ce,onExiting:de,onEnter:le,onEntering:ie,onEntered:_e}=a,De=C7(a,E7);const _=od(),J=p7(D),P=T7(K),te=US(),me=HS(s),[E,Y]=y.useState(!s),W=y.useRef(null);y.useImperativeHandle(i,()=>P,[P]),hc&&!me&&s&&(W.current=ff(_?.document)),s&&E&&Y(!1);const I=kn(()=>{if(P.add(),zt.current=tc(document,"keydown",qe),Ee.current=tc(document,"focus",()=>setTimeout(ue),!0),V&&V(),N){var Le,Ya;const Kl=ff((Le=(Ya=P.dialog)==null?void 0:Ya.ownerDocument)!=null?Le:_?.document);P.dialog&&Kl&&!Am(P.dialog,Kl)&&(W.current=Kl,P.dialog.focus())}}),re=kn(()=>{if(P.remove(),zt.current==null||zt.current(),Ee.current==null||Ee.current(),L){var Le;(Le=W.current)==null||Le.focus==null||Le.focus(H),W.current=null}});y.useEffect(()=>{!s||!J||I()},[s,J,I]),y.useEffect(()=>{E&&re()},[E,re]),d7(()=>{re()});const ue=kn(()=>{if(!B||!te()||!P.isTopModal())return;const Le=ff(_?.document);P.dialog&&Le&&!Am(P.dialog,Le)&&P.dialog.focus()}),xe=kn(Le=>{Le.target===Le.currentTarget&&(m?.(Le),v===!0&&Z())}),qe=kn(Le=>{x&&wS(Le)&&P.isTopModal()&&(S?.(Le),Le.defaultPrevented||Z())}),Ee=y.useRef(),zt=y.useRef(),Ft=(...Le)=>{Y(!0),ce?.(...Le)};if(!J)return null;const pt=Object.assign({role:o,ref:P.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},De,{style:d,className:f,tabIndex:-1});let Ha=G?G(pt):u.jsx("div",Object.assign({},pt,{children:y.cloneElement(p,{role:"document"})}));Ha=$m(w,z,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!s,onExit:F,onExiting:de,onExited:Ft,onEnter:le,onEntering:ie,onEntered:_e,children:Ha});let Lt=null;return v&&(Lt=q({ref:P.setBackdropRef,onClick:xe}),Lt=$m(M,R,{in:!!s,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Lt})),u.jsx(u.Fragment,{children:Ol.createPortal(u.jsxs(u.Fragment,{children:[Lt,Ha]}),J)})});h2.displayName="Modal";const M7=Object.assign(h2,{Manager:cd});function R7(a,i){return a.classList?a.classList.contains(i):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+i+" ")!==-1}function A7(a,i){a.classList?a.classList.add(i):R7(a,i)||(typeof a.className=="string"?a.className=a.className+" "+i:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+i))}function Dm(a,i){return a.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function O7(a,i){a.classList?a.classList.remove(i):typeof a.className=="string"?a.className=Dm(a.className,i):a.setAttribute("class",Dm(a.className&&a.className.baseVal||"",i))}const Rl={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class p2 extends cd{adjustAndStore(i,s,o){const f=s.style[i];s.dataset[i]=f,_n(s,{[i]:`${parseFloat(_n(s,i))+o}px`})}restore(i,s){const o=s.dataset[i];o!==void 0&&(delete s.dataset[i],_n(s,{[i]:o}))}setContainerStyle(i){super.setContainerStyle(i);const s=this.getElement();if(A7(s,"modal-open"),!i.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";Ba(s,Rl.FIXED_CONTENT).forEach(d=>this.adjustAndStore(o,d,i.scrollBarWidth)),Ba(s,Rl.STICKY_CONTENT).forEach(d=>this.adjustAndStore(f,d,-i.scrollBarWidth)),Ba(s,Rl.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(f,d,i.scrollBarWidth))}removeContainerStyle(i){super.removeContainerStyle(i);const s=this.getElement();O7(s,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",f=this.isRTL?"marginLeft":"marginRight";Ba(s,Rl.FIXED_CONTENT).forEach(d=>this.restore(o,d)),Ba(s,Rl.STICKY_CONTENT).forEach(d=>this.restore(f,d)),Ba(s,Rl.NAVBAR_TOGGLER).forEach(d=>this.restore(f,d))}}let pf;function k7(a){return pf||(pf=new p2(a)),pf}const m2=y.createContext({onHide(){}}),g2=y.forwardRef(({closeLabel:a="Close",closeVariant:i,closeButton:s=!1,onHide:o,children:f,...d},p)=>{const v=y.useContext(m2),x=mc(()=>{v?.onHide(),o?.()});return u.jsxs("div",{ref:p,...d,children:[f,s&&u.jsx(ld,{"aria-label":a,variant:i,onClick:x})]})});g2.displayName="AbstractModalHeader";const x2=y.forwardRef(({className:a,bsPrefix:i,as:s="div",...o},f)=>(i=Ct(i,"nav-item"),u.jsx(s,{ref:f,className:rt(a,i),...o})));x2.displayName="NavItem";const y2=y.forwardRef(({bsPrefix:a,className:i,as:s=l2,active:o,eventKey:f,disabled:d=!1,...p},v)=>{a=Ct(a,"nav-link");const[x,m]=u2({key:id(f,p.href),active:o,disabled:d,...p});return u.jsx(s,{...p,...x,ref:v,disabled:d,className:rt(i,a,d&&"disabled",m.isActive&&"active")})});y2.displayName="NavLink";const v2=y.forwardRef((a,i)=>{const{as:s="div",bsPrefix:o,variant:f,fill:d=!1,justify:p=!1,navbar:v,navbarScroll:x,className:m,activeKey:S,...w}=Wg(a,{activeKey:"onSelect"}),z=Ct(o,"nav");let M,R,N=!1;const B=y.useContext(Ql),L=y.useContext(r2);return B?(M=B.bsPrefix,N=v??!0):L&&({cardHeaderBsPrefix:R}=L),u.jsx(u7,{as:s,ref:i,activeKey:S,className:rt(m,{[z]:!N,[`${M}-nav`]:N,[`${M}-nav-scroll`]:N&&x,[`${R}-${f}`]:!!R,[`${z}-${f}`]:!!f,[`${z}-fill`]:d,[`${z}-justified`]:p}),...w})});v2.displayName="Nav";const N7=Object.assign(v2,{Item:x2,Link:y2}),b2=y.forwardRef(({bsPrefix:a,className:i,as:s,...o},f)=>{a=Ct(a,"navbar-brand");const d=s||(o.href?"a":"span");return u.jsx(d,{...o,ref:f,className:rt(i,a)})});b2.displayName="NavbarBrand";const S2=y.forwardRef(({children:a,bsPrefix:i,...s},o)=>{i=Ct(i,"navbar-collapse");const f=y.useContext(Ql);return u.jsx(t2,{in:!!(f&&f.expanded),...s,children:u.jsx("div",{ref:o,className:i,children:a})})});S2.displayName="NavbarCollapse";const w2=y.forwardRef(({bsPrefix:a,className:i,children:s,label:o="Toggle navigation",as:f="button",onClick:d,...p},v)=>{a=Ct(a,"navbar-toggler");const{onToggle:x,expanded:m}=y.useContext(Ql)||{},S=mc(w=>{d&&d(w),x&&x()});return f==="button"&&(p.type="button"),u.jsx(f,{...p,ref:v,onClick:S,"aria-label":o,className:rt(i,a,!m&&"collapsed"),children:s||u.jsx("span",{className:`${a}-icon`})})});w2.displayName="NavbarToggle";const Df=new WeakMap,Bm=(a,i)=>{if(!a||!i)return;const s=Df.get(i)||new Map;Df.set(i,s);let o=s.get(a);return o||(o=i.matchMedia(a),o.refCount=0,s.set(o.media,o)),o};function _7(a,i=typeof window>"u"?void 0:window){const s=Bm(a,i),[o,f]=y.useState(()=>s?s.matches:!1);return l7(()=>{let d=Bm(a,i);if(!d)return f(!1);let p=Df.get(i);const v=()=>{f(d.matches)};return d.refCount++,d.addListener(v),v(),()=>{d.removeListener(v),d.refCount--,d.refCount<=0&&p?.delete(d.media),d=void 0}},[a]),o}function $7(a){const i=Object.keys(a);function s(v,x){return v===x?x:v?`${v} and ${x}`:x}function o(v){return i[Math.min(i.indexOf(v)+1,i.length-1)]}function f(v){const x=o(v);let m=a[x];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function d(v){let x=a[v];return typeof x=="number"&&(x=`${x}px`),`(min-width: ${x})`}function p(v,x,m){let S;typeof v=="object"?(S=v,m=x,x=!0):(x=x||!0,S={[v]:x});let w=y.useMemo(()=>Object.entries(S).reduce((z,[M,R])=>((R==="up"||R===!0)&&(z=s(z,d(M))),(R==="down"||R===!0)&&(z=s(z,f(M))),z),""),[JSON.stringify(S)]);return _7(w,m)}return p}const D7=$7({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),j2=y.forwardRef(({className:a,bsPrefix:i,as:s="div",...o},f)=>(i=Ct(i,"offcanvas-body"),u.jsx(s,{ref:f,className:rt(a,i),...o})));j2.displayName="OffcanvasBody";const B7={[en]:"show",[On]:"show"},E2=y.forwardRef(({bsPrefix:a,className:i,children:s,in:o=!1,mountOnEnter:f=!1,unmountOnExit:d=!1,appear:p=!1,...v},x)=>(a=Ct(a,"offcanvas"),u.jsx(pc,{ref:x,addEndListener:ad,in:o,mountOnEnter:f,unmountOnExit:d,appear:p,...v,childRef:Vl(s),children:(m,S)=>y.cloneElement(s,{...S,className:rt(i,s.props.className,(m===en||m===Wi)&&`${a}-toggling`,B7[m])})})));E2.displayName="OffcanvasToggling";const C2=y.forwardRef(({bsPrefix:a,className:i,closeLabel:s="Close",closeButton:o=!1,...f},d)=>(a=Ct(a,"offcanvas-header"),u.jsx(g2,{ref:d,...f,className:rt(i,a),closeLabel:s,closeButton:o})));C2.displayName="OffcanvasHeader";const L7=BS("h5"),z2=y.forwardRef(({className:a,bsPrefix:i,as:s=L7,...o},f)=>(i=Ct(i,"offcanvas-title"),u.jsx(s,{ref:f,className:rt(a,i),...o})));z2.displayName="OffcanvasTitle";function U7(a){return u.jsx(E2,{...a})}function H7(a){return u.jsx(i2,{...a})}const T2=y.forwardRef(({bsPrefix:a,className:i,children:s,"aria-labelledby":o,placement:f="start",responsive:d,show:p=!1,backdrop:v=!0,keyboard:x=!0,scroll:m=!1,onEscapeKeyDown:S,onShow:w,onHide:z,container:M,autoFocus:R=!0,enforceFocus:N=!0,restoreFocus:B=!0,restoreFocusOptions:L,onEntered:H,onExit:G,onExiting:q,onEnter:K,onEntering:D,onExited:V,backdropClassName:Z,manager:F,renderStaticNode:ce=!1,...de},le)=>{const ie=y.useRef();a=Ct(a,"offcanvas");const[_e,De]=y.useState(!1),_=mc(z),J=D7(d||"xs","up");y.useEffect(()=>{De(d?p&&!J:p)},[p,d,J]);const P=y.useMemo(()=>({onHide:_}),[_]);function te(){return F||(m?(ie.current||(ie.current=new p2({handleContainerOverflow:!1})),ie.current):k7())}const me=(I,...re)=>{I&&(I.style.visibility="visible"),K?.(I,...re)},E=(I,...re)=>{I&&(I.style.visibility=""),V?.(...re)},Y=y.useCallback(I=>u.jsx("div",{...I,className:rt(`${a}-backdrop`,Z)}),[Z,a]),W=I=>u.jsx("div",{...I,...de,className:rt(i,d?`${a}-${d}`:a,`${a}-${f}`),"aria-labelledby":o,children:s});return u.jsxs(u.Fragment,{children:[!_e&&(d||ce)&&W({}),u.jsx(m2.Provider,{value:P,children:u.jsx(M7,{show:_e,ref:le,backdrop:v,container:M,keyboard:x,autoFocus:R,enforceFocus:N&&!m,restoreFocus:B,restoreFocusOptions:L,onEscapeKeyDown:S,onShow:w,onHide:_,onEnter:me,onEntering:D,onEntered:H,onExit:G,onExiting:q,onExited:E,manager:te(),transition:U7,backdropTransition:H7,renderBackdrop:Y,renderDialog:W})})]})});T2.displayName="Offcanvas";const Y7=Object.assign(T2,{Body:j2,Header:C2,Title:z2}),M2=y.forwardRef(({onHide:a,...i},s)=>{const o=y.useContext(Ql),f=mc(()=>{o==null||o.onToggle==null||o.onToggle(),a?.()});return u.jsx(Y7,{ref:s,show:!!(o!=null&&o.expanded),...i,renderStaticNode:!0,onHide:f})});M2.displayName="NavbarOffcanvas";const R2=y.forwardRef(({className:a,bsPrefix:i,as:s="span",...o},f)=>(i=Ct(i,"navbar-text"),u.jsx(s,{ref:f,className:rt(a,i),...o})));R2.displayName="NavbarText";const A2=y.forwardRef((a,i)=>{const{bsPrefix:s,expand:o=!0,variant:f="light",bg:d,fixed:p,sticky:v,className:x,as:m="nav",expanded:S,onToggle:w,onSelect:z,collapseOnSelect:M=!1,...R}=Wg(a,{expanded:"onToggle"}),N=Ct(s,"navbar"),B=y.useCallback((...G)=>{z?.(...G),M&&S&&w?.(!1)},[z,M,S,w]);R.role===void 0&&m!=="nav"&&(R.role="navigation");let L=`${N}-expand`;typeof o=="string"&&(L=`${L}-${o}`);const H=y.useMemo(()=>({onToggle:()=>w?.(!S),bsPrefix:N,expanded:!!S,expand:o}),[N,S,o,w]);return u.jsx(Ql.Provider,{value:H,children:u.jsx(nc.Provider,{value:B,children:u.jsx(m,{ref:i,...R,className:rt(x,N,o&&L,f&&`${N}-${f}`,d&&`bg-${d}`,v&&`sticky-${v}`,p&&`fixed-${p}`)})})})});A2.displayName="Navbar";const G7=Object.assign(A2,{Brand:b2,Collapse:S2,Offcanvas:M2,Text:R2,Toggle:w2});function q7(a){return je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"},child:[]}]})(a)}function X7(a){return je({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(a)}const V7=b(G7)`
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
`,Q7=b.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`,K7=b.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Z7=b.div`
  justify-self: center;
`,J7=b.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`,F7=b.button`
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
`,W7=b(Gl)`
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px; /* space between icon and text */
`,I7=b(q7)`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  color: #f0703c /* keep high contrast; adjust to your brand */
`,P7=b.div`
  font-size: 28px;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  font-weight: 700;
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; /* fallback */
  -webkit-text-fill-color: transparent; /* webkit */
  letter-spacing: 0.2px;
  line-height: 1;
`;function e9(){const a=()=>{console.log("Toggled theme")};return u.jsx("div",{className:"topbar-wrapper",children:u.jsx(V7,{className:"shadow-sm d-lg-none",children:u.jsx(o2,{fluid:!0,className:"px-3",children:u.jsxs(Q7,{children:[u.jsx(K7,{children:u.jsxs(W7,{to:"/instalearn/","aria-label":"Go to home",children:[u.jsx(I7,{"aria-hidden":"true"}),u.jsx(P7,{children:"InstaLearn"})]})}),u.jsx(Z7,{}),u.jsx(J7,{children:u.jsx(F7,{type:"button",onClick:a,"aria-label":"Toggle",children:u.jsx(X7,{size:20})})})]})})})})}const t9=Et`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,n9=b.aside`
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
`,a9=b(Gl)`
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
  margin-left: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: padding 200ms ease, margin 200ms ease;
`,l9=b.div`
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
`,i9=b.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,r9=xa`
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
    animation: ${t9} 4s linear infinite;
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }
`,mf=b(Gl)`
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

  ${a=>a.$active&&r9}
`,o9=b.div`
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #dbdbdb;
`,gf=b.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,xf=b.span`
  white-space: nowrap;
  transition: opacity 120ms ease, width 200ms ease;
`;function c9(){const{pathname:a}=Bn(),i=[{to:"/instalearn/",icon:u.jsx(Ug,{}),label:"Home"},{to:"/instalearn/teacher",icon:u.jsx(Ji,{}),label:"Teacher"},{to:"/instalearn/library",icon:u.jsx(Lg,{}),label:"Library",hasNotification:!0},{to:"/instalearn/notifications",icon:u.jsx(q5,{}),label:"Notifications"},{to:"/instalearn/profile",icon:u.jsx(Hg,{}),label:"Profile"}];return u.jsxs(n9,{children:[u.jsx(a9,{to:"/instalearn/",children:u.jsx(l9,{children:"InstaLearn"})}),u.jsxs(i9,{children:[i.slice(0,-1).map(s=>u.jsxs(mf,{to:s.to,$active:a===s.to,children:[u.jsx(gf,{children:s.icon}),u.jsx(xf,{children:s.label}),s.hasNotification]},s.to)),u.jsxs(mf,{to:i[i.length-1].to,$active:a===i[i.length-1].to,children:[u.jsx(gf,{children:i[i.length-1].icon}),u.jsx(xf,{children:i[i.length-1].label})]})]}),u.jsx(o9,{children:u.jsxs(mf,{to:"/instalearn/more",$active:a==="/instalearn/more",children:[u.jsx(gf,{children:u.jsx(X5,{})}),u.jsx(xf,{children:"More"})]})})]})}const s9=b.div`
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
`,u9=b.div`
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
`,O2=b.div`
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
`,f9=b.div`
  position: relative;
  flex-shrink: 0;
`,d9=b.div`
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
  
  ${O2}:hover & {
    transform: scale(1.05);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,h9=b.div`
  position: absolute;
  bottom: ${a=>a.$width<250?"2px":"4px"};
  right: ${a=>a.$width<250?"0":"2px"};
  width: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  height: ${a=>a.$width<250?"10px":a.$width<200?"8px":"14px"};
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
`,p9=b.div`
  flex: 1;
  min-width: 0;
  display: ${a=>a.$width<180?"none":"block"};
`,m9=b.div`
  font-size: ${a=>a.$width<250?"13px":"14px"};
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,g9=b.div`
  font-size: ${a=>a.$width<250?"11px":"13px"};
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,x9=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,y9=b.div`
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
`,v9=b.button`
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
`,b9=b.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.$width<250?"8px":"12px"};
  margin-bottom: 32px;
`,k2=b.div`
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
`,S9=b.div`
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
  
  ${k2}:hover & {
    transform: scale(1.05) rotate(5deg);
  }
`,w9=b.div`
  display: flex;
  flex-direction: ${a=>a.$width<200?"column":a.$width<250?"row":"column"};
  align-items: ${a=>a.$width>=200&&a.$width<250?"center":"stretch"};
  flex: 1;
`,j9=b.div`
  flex: 1;
`,E9=b.h4`
  font-size: ${a=>a.$width<250?"12px":"13px"};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 ${a=>a.$width<250?"2px":"4px"} 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,C9=b.p`
  font-size: ${a=>a.$width<250?"10px":"12px"};
  color: #6b7280;
  margin: 0;
  display: ${a=>a.$width<180?"none":"-webkit-box"};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,z9=b.span`
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
`;const T9=({sidebarWidth:a=360})=>{const i={username:"demo_user",name:"Demo User",initials:"DU"},s=[{icon:U1,gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",title:"New Feature: Dark Mode",description:"Enable dark mode for a better night-time experience.",badge:"New",badgeBg:"linear-gradient(135deg, #667eea, #764ba2)"},{icon:V5,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",title:"Product Tip: Quick Search",description:"Use the search bar to find items faster.",badge:"Tip",badgeBg:"linear-gradient(135deg, #f093fb, #f5576c)"},{icon:Y5,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",title:"Update: Version 2.0",description:"Check out the latest improvements and bug fixes.",badge:"Update",badgeBg:"linear-gradient(135deg, #4facfe, #00f2fe)"}];return u.jsxs(s9,{children:[u.jsx(u9,{children:u.jsxs(O2,{$width:a,children:[u.jsxs(f9,{children:[u.jsx(d9,{$width:a,children:i.initials}),u.jsx(h9,{$width:a})]}),u.jsxs(p9,{$width:a,children:[u.jsx(m9,{$width:a,children:i.username}),u.jsx(g9,{$width:a,children:i.name})]})]})}),u.jsxs(x9,{children:[u.jsxs(y9,{$width:a,$iconColor:"#667eea",children:[u.jsx(U1,{}),u.jsx("span",{children:"Highlights"})]}),u.jsx(v9,{$width:a,children:"See All"})]}),u.jsx(b9,{$width:a,children:s.map((o,f)=>{const d=o.icon;return u.jsxs(k2,{$width:a,$glowColor:o.gradient,children:[u.jsx(z9,{$width:a,$bg:o.badgeBg,children:o.badge}),u.jsxs(w9,{$width:a,children:[u.jsx(S9,{$width:a,$gradient:o.gradient,children:u.jsx(d,{})}),u.jsxs(j9,{children:[u.jsx(E9,{$width:a,children:o.title}),u.jsx(C9,{$width:a,children:o.description})]})]})]},f)})})]})};function M9(){const{pathname:a}=Bn(),i=[["/instalearn/",u.jsx(Ug,{})],["/instalearn/teacher",u.jsx(Ji,{})],["/instalearn/library",u.jsx(Lg,{})],["/instalearn/profile",u.jsx(Hg,{})]];return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsx(N7,{className:"bottom-nav fixed-bottom d-flex justify-content-around py-2 d-lg-none",children:i.map(([s,o])=>u.jsx(Gl,{to:s,className:`nav-link fs-4 text-white ${a===s?"active":""}`,children:o},s))})]})}const yf="studentProfile",gt=Kg,R9=b.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`,A9=b.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`,O9=b.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`,k9=b.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`,N9=b.div` position: relative; `,_9=b.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`,$9=b.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`,D9=b.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`,B9=b.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`,Al=b.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`,L9=b.div` flex: 1; `,U9=b.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`,H9=b.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,Y9=b.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`,G9=b.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`,q9=b.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `,X9=b.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`,V9=b.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,Q9=b.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`,K9=b.div` position: relative; display: inline-block; `,Z9=b.div`
  position: absolute; right: 0; margin-top: 0.5rem; min-width: 200px;
  background: #fff; border: 1px solid #e5e7eb; border-radius: 0.5rem;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08); z-index: 10; overflow: hidden;
`,Lm=b.button`
  width: 100%; text-align: left; padding: 0.625rem 0.75rem; background: #fff; border: 0;
  font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; color: #111827;
  &:hover { background: #f9fafb; }
  &[data-danger="true"] { color: #b91c1c; }
`,J9=b.div`
  display: ${({hidden:a})=>a?"none":"flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`,F9=b.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`,W9=b.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`,I9=b.div` margin-bottom: 1.5rem; `,P9=b.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`,ew=b.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`,tw=b.div`
  position: absolute; inset: 0; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px); pointer-events: none;
`,nw=b.div`
  position: relative;
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked:a})=>a?"grayscale(0.8)":"none"};
  opacity: ${({$locked:a})=>a?.6:1};
`,aw=b.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`,lw=b.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
`,iw=b.div` display: flex; border-top: 1px solid #e5e7eb; `,Um=b.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({$active:a})=>a?"#111827":"transparent"};
  color: ${({$active:a})=>a?"#111827":"#9ca3af"};
`,rw=b.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`,ow=b.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked:a})=>a?"blur(2px)":"none"};
  overflow: hidden;
`,cw=b.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`,sw=b.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden:a})=>a?"none":"block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`,Hm=b.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`,Ym=b.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`,Gm=b.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`,qm=b.h3` margin: 0; font-size: 1rem; font-weight: 700; color: #111827; `,Xm=b.button` border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem; `,uw=b.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`,fw=b.button`
  border: 1px solid ${({$active:a})=>a?"#2563eb":"#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active:a})=>a?"#eff6ff":"#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`,dw=b.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`,Vm=b.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,Qm=b.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`,hw=b.div` padding: 1rem 1.25rem; display: grid; gap: 0.75rem; `,vf=b.div` display: grid; gap: 0.25rem; `,bf=b.label` font-size: 0.85rem; color: #374151; `,Sf=b.input`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 0.75rem; font-size: 0.95rem;
  &:focus{ outline:none; border-color:#2563eb; box-shadow:0 0 0 3px rgba(37,99,235,0.15);}
`,pw=b.div` display:flex; justify-content:flex-end; gap:0.5rem; padding:0.75rem 1.25rem 1rem; `;function mw(){y.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[]);const a=lc(),[i,s]=y.useState(!1),[o,f]=y.useState("basic"),[d,p]=y.useState(!1),[v,x]=y.useState(!1),[m,S]=y.useState(!1),[w,z]=y.useState(!1),[M,R]=y.useState({name:"",email:"",avatar:""}),N=3,B=3,L=`joined:${gt?.id||gt?.name}`;y.useEffect(()=>{const F=localStorage.getItem(L)==="true";x(F);const ce=localStorage.getItem(yf);if(ce){const de=JSON.parse(ce);R({name:de.name||"",email:de.email||"",avatar:de.avatar||""})}},[]),y.useEffect(()=>{localStorage.setItem(L,v?"true":"false")},[v,L]),y.useEffect(()=>{if(!m)return;const F=ce=>{const de=ce.target;de.closest&&(de.closest('[aria-haspopup="menu"]')||de.closest('[role="menu"]'))||S(!1)};return document.addEventListener("click",F),()=>document.removeEventListener("click",F)},[m]);const H=F=>{if(!v&&F>=N){s(!0);return}F===0&&a("/instalearn/library")},G=()=>{v||s(!0)},q=async()=>{p(!0),await new Promise(F=>setTimeout(F,1200)),p(!1),s(!1),z(!0)},K=()=>{const F={name:M.name?.trim(),email:M.email?.trim(),avatar:M.avatar?.trim(),createdAt:new Date().toISOString(),plan:o,isPro:!0};if(!F.name||!F.email){alert("Please fill Name and Email to continue.");return}localStorage.setItem(yf,JSON.stringify(F)),x(!0),z(!1)},D=()=>{localStorage.removeItem(L),localStorage.removeItem(yf),x(!1),S(!1)},V=[{key:"basic",name:"Basic",price:"₹0",desc:"Demo access: 3 lessons"},{key:"pro",name:"Pro",price:"₹99",desc:"Monthly: full library"},{key:"team",name:"Team",price:"₹1,99",desc:"Up to 10 students"}],Z=v;return u.jsxs(R9,{children:[u.jsxs(A9,{children:[u.jsxs(O9,{children:[u.jsxs(k9,{children:[u.jsxs(N9,{children:[u.jsx(_9,{src:gt.avatar,alt:gt.name}),!v&&u.jsxs($9,{"aria-hidden":"true",title:"Pro library locked",children:[u.jsx(Mo,{size:12})," LOCKED"]})]}),u.jsxs(D9,{children:[u.jsxs(Al,{children:[gt.concepts," ",u.jsx("span",{children:"concepts"})]}),u.jsxs(Al,{children:[gt.students," ",u.jsx("span",{children:"students"})]}),u.jsxs(Al,{children:[gt.learns," ",u.jsx("span",{children:"learns"})]})]})]}),u.jsxs(L9,{children:[u.jsxs(B9,{children:[u.jsxs(Al,{children:[gt.concepts," ",u.jsx("span",{children:"concepts"})]}),u.jsxs(Al,{children:[gt.students," ",u.jsx("span",{children:"students"})]}),u.jsxs(Al,{children:[gt.learns," ",u.jsx("span",{children:"learns"})]})]}),u.jsx(U9,{children:gt.name}),u.jsx(H9,{children:gt.subject}),u.jsx(Y9,{children:gt.bio}),u.jsxs(G9,{children:["🎓 ",gt.experience," years experience"]}),u.jsxs(q9,{children:[u.jsx(X9,{onClick:()=>a("/user/profile"),children:"My Profile"}),u.jsx(V9,{onClick:G,disabled:d,"data-joined":v,"aria-pressed":v,"aria-label":v?"Joined":"Join",title:v?"You're in!":"Join this teacher",children:v?u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[u.jsx(s6,{size:18})," Joined"]}):d?"Processing…":"Join"}),u.jsxs(K9,{children:[u.jsx(Q9,{"aria-haspopup":"menu","aria-expanded":m,"aria-label":"More options",onClick:()=>S(F=>!F),title:"More options",children:"▼"}),m&&u.jsxs(Z9,{role:"menu",children:[v&&u.jsxs(Lm,{role:"menuitem","data-danger":"true",onClick:D,title:"Cancel your membership",children:[u.jsx(Vu,{size:16})," Cancel membership"]}),u.jsx(Lm,{role:"menuitem",onClick:()=>S(!1),children:"Close"})]})]})]}),u.jsxs(J9,{hidden:Z,role:"note","aria-live":"polite",children:[u.jsxs(F9,{children:[u.jsx(Mo,{size:18})," Pro library locked — get full access to all concepts & posts."]}),u.jsx(W9,{onClick:()=>s(!0),"aria-label":"Unlock full library",children:"Unlock"})]})]})]}),u.jsx(I9,{children:u.jsx(P9,{children:gt.bookList.map((F,ce)=>{const de=!v&&ce>=N;return u.jsxs(ew,{onClick:()=>H(ce),"aria-disabled":de,title:de?"Join to unlock":`Open ${F.title}`,children:[u.jsxs(nw,{$locked:de,children:[u.jsx(aw,{children:u.jsx(Nl,{size:24})}),!v&&de&&u.jsxs(tw,{"aria-hidden":"true",children:[u.jsx(Mo,{size:14,style:{marginRight:6}})," Locked"]})]}),u.jsx(lw,{children:F.title})]},ce)})})})]}),u.jsxs(iw,{children:[u.jsx(Um,{$active:!0,children:u.jsx(S6,{size:20})}),u.jsx(Um,{children:u.jsx(i6,{size:20})})]}),u.jsx(rw,{"aria-label":"Teacher posts",children:Array(9).fill(null).map((F,ce)=>{const de=!v&&ce>=B;return u.jsxs(ow,{$locked:de,"aria-hidden":!1,children:[u.jsx(Nl,{size:24}),de&&u.jsxs(cw,{children:[u.jsx(Mo,{size:16,style:{marginRight:6}})," Join to view"]})]},ce)})}),u.jsx(sw,{hidden:v,onClick:()=>s(!0),"aria-label":"Unlock all posts",children:"Unlock entire library"}),i&&u.jsx(Hm,{role:"dialog","aria-modal":"true","aria-labelledby":"pricing-title",children:u.jsxs(Ym,{children:[u.jsxs(Gm,{children:[u.jsx(qm,{id:"pricing-title",children:"Choose your plan"}),u.jsx(Xm,{onClick:()=>s(!1),"aria-label":"Close pricing",children:u.jsx(Vu,{size:18})})]}),u.jsx(uw,{children:V.map(F=>u.jsxs(fw,{onClick:()=>f(F.key),$active:o===F.key,"aria-pressed":o===F.key,children:[u.jsx("h4",{children:F.name}),u.jsx("strong",{children:F.price}),u.jsx("p",{children:F.desc})]},F.key))}),u.jsxs(dw,{children:[u.jsx(Qm,{onClick:()=>s(!1),children:"Not now"}),u.jsx(Vm,{onClick:q,disabled:d,children:d?"Processing payment…":"Demo Pay"})]})]})}),w&&u.jsx(Hm,{role:"dialog","aria-modal":"true","aria-labelledby":"profile-form-title",children:u.jsxs(Ym,{children:[u.jsxs(Gm,{children:[u.jsx(qm,{id:"profile-form-title",children:"Create your student profile"}),u.jsx(Xm,{onClick:()=>z(!1),"aria-label":"Close profile form",children:u.jsx(Vu,{size:18})})]}),u.jsxs(hw,{children:[u.jsxs(vf,{children:[u.jsx(bf,{htmlFor:"pf-name",children:"Full Name"}),u.jsx(Sf,{id:"pf-name",value:M.name,onChange:F=>R(ce=>({...ce,name:F.target.value})),placeholder:"e.g., Priya Sharma"})]}),u.jsxs(vf,{children:[u.jsx(bf,{htmlFor:"pf-email",children:"Email"}),u.jsx(Sf,{id:"pf-email",type:"email",value:M.email,onChange:F=>R(ce=>({...ce,email:F.target.value})),placeholder:"you@example.com"})]}),u.jsxs(vf,{children:[u.jsx(bf,{htmlFor:"pf-avatar",children:"Avatar initials (optional)"}),u.jsx(Sf,{id:"pf-avatar",value:M.avatar,onChange:F=>R(ce=>({...ce,avatar:F.target.value})),placeholder:"PS"})]})]}),u.jsxs(pw,{children:[u.jsx(Qm,{onClick:()=>z(!1),children:"Cancel"}),u.jsx(Vm,{onClick:K,children:"Save & Finish"})]})]})})]})}const gw=b.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-light, #f5f5f5);
`,xw=b.aside`
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
`,yw=b.div`
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    /* match LeftSidebar width exactly to avoid layout jump */
    margin-left: 246px;
  }
`,vw=b.main`
  flex: 1;
  width: 100%;
  padding-bottom: 60px;
  transition: ${a=>a.$isResizing?"none":"margin-right 0.2s ease"};
  will-change: margin-right;

  @media (min-width: 1024px) {
    padding-bottom: 0;
    margin-right: ${a=>`${a.$sidebarWidth}px`};
  }
`,bw=b.aside`
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
`,Sw=b.div`
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
`,ww=b.div`
  display: block;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    display: none;
  }
`,jw=b.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;function Ew(){const[a,i]=y.useState(360),[s,o]=y.useState(!1),f=y.useRef(null),d=350,p=600,v=x=>{x.preventDefault(),o(!0),f.current={startX:x.clientX,startWidth:a}};return y.useEffect(()=>{const x=(w,z,M)=>Math.min(Math.max(w,z),M),m=w=>{if(!s||!f.current)return;const{startX:z,startWidth:M}=f.current,R=z-w.clientX,N=x(M+R,d,p);i(N)},S=()=>{s&&(o(!1),f.current=null)};return s&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",S),document.body.style.cursor="ew-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",S),document.body.style.cursor="",document.body.style.userSelect=""}},[s]),u.jsxs(gw,{children:[u.jsx(xw,{children:u.jsx(c9,{})}),u.jsxs(yw,{children:[u.jsxs(vw,{$sidebarWidth:a,$isResizing:s,children:[u.jsx(ww,{children:u.jsx(e9,{})}),u.jsxs(eb,{children:[u.jsx(Da,{path:"/instalearn",element:u.jsx(i8,{})}),u.jsx(Da,{path:"/instalearn/teacher",element:u.jsx(mw,{})}),u.jsx(Da,{path:"/instalearn/library",element:u.jsx(J4,{})}),u.jsx(Da,{path:"/instalearn/notifications",element:u.jsx(bm,{})}),u.jsx(Da,{path:"/instalearn/more",element:u.jsx(bm,{})}),u.jsx(Da,{path:"/instalearn/profile",element:u.jsx(H8,{})})]})]}),u.jsxs(bw,{$width:a,$isResizing:s,children:[u.jsx(Sw,{className:s?"active":"",onMouseDown:v,"aria-label":"Resize sidebar"}),u.jsx(T9,{})]})]}),u.jsx(jw,{children:u.jsx(M9,{})})]})}uv.createRoot(document.getElementById("root")).render(u.jsx(jb,{children:u.jsx(Ew,{})}));
