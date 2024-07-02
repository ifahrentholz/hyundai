import{u as $e,f as Le,i as Ee,s as G}from"../__chunks__/lit-element.Bbziht_u.js";import{T as R,w as C,x as J}from"../__chunks__/lit-html.7EXFFo54.js";const Se="modulepreload",xe=function(e){return"/"+e},q={},ee=function(t,s,n){let o=Promise.resolve();return s&&s.length>0&&(document.getElementsByTagName("link"),o=Promise.all(s.map(r=>{if(r=xe(r),r in q)return;q[r]=!0;const i=r.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Se,i||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),i)return new Promise((h,u)=>{l.addEventListener("load",h),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))),o.then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:Le},_e=(e=Ce,t,s)=>{const{kind:n,metadata:o}=s;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(s.name,e),n==="accessor"){const{name:i}=s;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,l,e)},init(a){return a!==void 0&&this.P(i,void 0,e),a}}}if(n==="setter"){const{name:i}=s;return function(a){const l=this[i];t.call(this,a),this.requestUpdate(i,l,e)}}throw Error("Unsupported decorator location: "+n)};function ke(e){return(t,s)=>typeof s=="object"?_e(e,t,s):((n,o,r)=>{const i=o.hasOwnProperty(r);return o.constructor.createProperty(r,i?{...n,wrapped:!0}:n),i?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ne=e=>(...t)=>({_$litDirective$:e,values:t});let oe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _=class extends oe{constructor(t){if(super(t),this.it=R,t.type!==se.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||t==null)return this._t=void 0,this.it=t;if(t===C)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};_.directiveName="unsafeHTML",_.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let k=class extends _{};k.directiveName="unsafeSVG",k.resultType=2;const Ae=ne(k);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=e=>e===null||typeof e!="object"&&typeof e!="function",Me=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=(e,t)=>{var n;const s=e._$AN;if(s===void 0)return!1;for(const o of s)(n=o._$AO)==null||n.call(o,t,!1),w(o,t);return!0},v=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},re=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Ne(t)}};function ze(e){this._$AN!==void 0?(v(this),this._$AM=e,re(this)):this._$AM=e}function je(e,t=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)w(n[r],!1),v(n[r]);else n!=null&&(w(n,!1),v(n));else w(this,e)}const Ne=e=>{e.type==se.CHILD&&(e._$AP??(e._$AP=je),e._$AQ??(e._$AQ=ze))};let Oe=class extends oe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),re(this),this.isConnected=t._$AU}_$AO(t,s=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),s&&(w(this,t),v(this))}setValue(t){if(Me(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let De=class{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}},Re=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=e=>!Te(e)&&typeof e.then=="function",B=1073741823;let qe=class extends Oe{constructor(){super(...arguments),this._$Cwt=B,this._$Cbt=[],this._$CK=new De(this),this._$CX=new Re}render(...t){return t.find(s=>!I(s))??C}update(t,s){const n=this._$Cbt;let o=n.length;this._$Cbt=s;const r=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<s.length&&!(a>this._$Cwt);a++){const l=s[a];if(!I(l))return this._$Cwt=a,l;a<o&&l===n[a]||(this._$Cwt=B,o=0,Promise.resolve(l).then(async h=>{for(;i.get();)await i.get();const u=r.deref();if(u!==void 0){const y=u._$Cbt.indexOf(l);y>-1&&y<u._$Cwt&&(u._$Cwt=y,u.setValue(h))}}))}return C}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Ie=ne(qe);var A={},ie;function ae(e){return function(...t){return function(s,n,o){return Object.assign(Object.assign({},o),{value:e(o.value,...t)})}}}Object.defineProperty(A,"__esModule",{value:!0});const Be=ae(function(e,t=0){let s=-1;const n=function(...o){clearTimeout(s),s=window.setTimeout(()=>{e.call(this,...o)},t)};return n.cancel=function(){clearTimeout(s)},n}),Ue=ae(function(e,t=0){let s,n=[];const o=function(...r){n=r,s===void 0&&(s=window.setTimeout(()=>{s=void 0,e.call(this,...n)},t))};return o.cancel=function(){clearTimeout(s),s=void 0},o});A.debounce=Be,ie=A.throttle=Ue;var d={},le,T;Object.defineProperty(d,"__esModule",{value:!0});const ce=(e,t)=>e===null?[]:e instanceof Document||e.shadowRoot===null||e.shadowRoot===void 0?Array.from(e.querySelectorAll(t)):Array.from(e.shadowRoot.querySelectorAll(t)),U=(e,...t)=>{if(e!==void 0&&t.length!==0&&e!==null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const s of e)s.classList.remove(...t)}},E=(e,...t)=>{if(e!==void 0&&t.length!==0&&e!==null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const s of e)s.classList.add(...t)}},H=(e,t)=>e.classList.contains(t);function b(e){return Symbol.iterator in e}function de(e){return"length"in e?e.length>0:!e[Symbol.iterator]().next().done}const ue=(e,t,s,n,o)=>{if(e==null||b(e)&&!de(e))return;if(b(e)&&!(e instanceof HTMLElement)){for(const i of e)ue(i,t,s,n,o);return}let r;r=typeof t=="string"?t.trim().split(" "):t,r.forEach(i=>{const a=he(e,i,s,n);if(!n.eventBindingMap[a]){const l=s.bind(n);return n.eventBindingMap[a]=l,e.addEventListener(i.trim(),l,o)}})};function he(e,t,s,n){return`${S(e,n)}#
          ${t.trim()}#
          ${S(s,n)}#
          ${S(n,n)}`.replace(/\n/gm,"").replace(/\s/g,"")}function S(e,t){let s;if(t.eventIdMap.has(e))s=t.eventIdMap.get(e);else{const n="xxxxxxxx".replace(/x/g,He).toLowerCase();t.eventIdMap.set(e,n),s=n}return s}function He(){return(100*Math.random()%36|0).toString(36)}const fe=(e,t,s,n,o)=>{if(e==null||b(e)&&!de(e))return;if(b(e)&&!(e instanceof HTMLElement)){for(const i of e)fe(i,t,s,n,o);return}let r;r=typeof t=="string"?t.trim().split(" "):t,r.forEach(i=>{const a=he(e,i,s,n),l=n.eventBindingMap[a];l&&(delete n.eventBindingMap[a],e.removeEventListener(i,l,o))})},Q=(e,t)=>{ce(e,t).forEach(s=>e.removeChild(s))},F=(e,t,s)=>new Promise(n=>{s!==void 0&&setTimeout(()=>n(),s),e.addEventListener(t,()=>n())});d.addClass=E,d.find=(e,t)=>e===null?null:e instanceof Document||e.shadowRoot===null||e.shadowRoot===void 0?e.querySelector(t):e.shadowRoot.querySelector(t),d.findAll=ce,d.forEachNode=(e,t,s=window)=>{for(let n=0;n<e.length;n++)t.call(s,e[n],n,e)},T=d.getCurrentMQ=e=>{let t="";return e.forEach(s=>{!t.length&&window.matchMedia(s.query).matches&&(t=s.name)}),t},d.getInnerText=e=>e.innerText||e.textContent||"",d.getParent=(e,t)=>e.closest(t),d.getUniqueID=()=>Math.random().toString(36).substr(2,9),d.hasChild=(e,t)=>e.shadowRoot!==null&&e.shadowRoot!==void 0?e.shadowRoot.querySelector(t)!==null:e.querySelector(t)!==null,d.hasClass=H,d.inViewport=(e,t)=>{const s=e.getBoundingClientRect();let n={top:0,right:window.innerWidth||document.documentElement.clientWidth,bottom:window.innerHeight||document.documentElement.clientHeight,left:0};return t!==void 0&&(n=t.getBoundingClientRect()),s.top>=n.top&&s.right<=n.right&&s.bottom<=n.bottom&&s.left>=n.left},d.isNodeList=e=>!(e instanceof HTMLElement||e instanceof Window),le=d.onEvent=ue,d.removeChildren=Q,d.removeChilds=Q,d.removeClass=U,d.removeEvent=fe,d.toggleClass=(e,t,s)=>{if(e!=null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const n of e)s===!0?E(n,t):H(n,t)||s===!1?U(n,t):E(n,t)}},d.waitFor=e=>new Promise(t=>{setTimeout(()=>t(),e)}),d.waitForAnimationEnd=function(e,t){return new Promise((s,n)=>{e.addEventListener("animationend",function o(r){r.target===e&&(t&&r.animationName!==t||(e.removeEventListener("animationend",o),s(r)))})})},d.waitForEvent=F,d.waitForInitialization=e=>{var t;return((t=e.state)===null||t===void 0?void 0:t.initialized)===!0?Promise.resolve():F(e,"kl-component-initialized",3e3)},d.waitForTransitionEnd=function(e,t){return new Promise((s,n)=>{e.addEventListener("transitionend",function o(r){r.target===e&&(t&&r.propertyName!==t||(e.removeEventListener("transitionend",o),s(r)))})})};var me={};Object.defineProperty(me,"__esModule",{value:!0});me.fetchJSON=(e,t)=>new Promise((s,n)=>{fetch(e,t).then(o=>{o.ok?s(o.json()):n(o)}).catch(o=>n(o))});var m={};Object.defineProperty(m,"__esModule",{value:!0});const x=e=>typeof e=="object"&&e!==null?JSON.stringify(e):String(e);m.getValue=(e={},t="")=>{const s=t.split(".");let n=0,o=e;for(;o&&n<s.length;)o=o[s[n]],n++;return o},m.isEqual=(e,t)=>typeof e==typeof t&&(typeof e=="object"?x(e).localeCompare(x(t))===0:e===t),m.isFilledObject=function(e){return typeof e=="object"&&e!==null&&Object.keys(e).length>0},m.naiveClone=function e(t){return typeof t!="object"?t:t===null?null:Array.isArray(t)?t.map(s=>e(s)):Object.entries(t).reduce((s,[n,o])=>(s[n]=e(o),s),{})},m.toArray=e=>Array.isArray(e)?e:[e],m.toString=x;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */class f{constructor(){this.eventIdMap=new WeakMap,this.eventBindingMap={},this.lastMQ=T(f.mediaQuerys),le(window,"resize",this.handleMQChange,this)}static getInstance(t){return f.instance===void 0&&(f.mediaQuerys=t,f.instance=new f),f.instance}handleMQChange(){const t=T(f.mediaQuerys);t!==this.lastMQ&&(window.dispatchEvent(new CustomEvent("kl-mq-change",{detail:{newMQ:t,oldMQ:this.lastMQ}})),this.lastMQ=t)}}(function(e,t,s,n){var o,r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,s):n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,s,i):o(t,s))||i);r>3&&i&&Object.defineProperty(t,s,i)})([ie(100)],f.prototype,"handleMQChange",null);var Qe=new class{constructor(){this.urlSearchParams=new URLSearchParams(window.location.search)}get(e){return this.urlSearchParams.get(e)}getAll(e){return this.urlSearchParams.getAll(e)}getAllKeys(){return Array.from(this.urlSearchParams.keys())}set(e,t){this.urlSearchParams.set(e,t),this.updateUrl()}delete(e){this.urlSearchParams.delete(e),this.updateUrl()}getString(){return this.urlSearchParams.toString()}get curUrl(){return`${window.location.protocol}//${window.location.host}${window.location.pathname}`}updateUrl(){const e=this.getString(),t=this.curUrl,s=window.location.hash,n=e!==""?`${t}?${e}`:t;window.history.replaceState({path:n},"",n),s!==""&&(window.location.hash=s)}},p=new Proxy(console,{get:(e,t)=>Qe.get("js-debug")!==null?e[t]:()=>{}});new class{constructor(){this.componentMap=new WeakMap,this.intersectionObserver=new IntersectionObserver(e=>this.handleIntersectionChange(e),{rootMargin:"500px 0px"})}subscribe(e,t){this.componentMap.set(e,t),this.intersectionObserver.observe(e)}unsubscribe(e){this.intersectionObserver.unobserve(e),this.componentMap.delete(e)}handleIntersectionChange(e){e.forEach(t=>{const s=t.target;if(!t.isIntersecting||!this.componentMap.has(s))return;const n=this.componentMap.get(s);this.unsubscribe(s),n()})}};const V="/public/icons";var Fe=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,pe=(e,t,s,n)=>{for(var o=n>1?void 0:n?Ve(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,s,o):i(o))||o);return n&&o&&Fe(t,s,o),o};const Z=Object.assign({"/public/icons/rocket-lunch.svg":()=>ee(()=>import("../__chunks__/rocket-lunch.C6eRDqkd.js"),__vite__mapDeps([])).then(e=>e.default)});let P=class extends G{constructor(){super(...arguments),this.name=""}async getSvg(e){const s=Z[`${V}/${e}.svg`]??Z[`${V}/cross.svg`];try{const n=await s();return Ae(n)}catch(n){p.error(`Icon Component: SVG icon: ${n.message}`,n);return}}render(){const e=this.getSvg(this.name);return J`${Ie(e)}`}};P.styles=Ee`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;pe([ke({type:String})],P.prototype,"name",2);P=pe([te("icon-component")],P);const N=()=>{const e=document.querySelector("#main");return e?window.location.href==="about:srcdoc"&&e.classList.contains("sidekick-library"):!1};function L(e){return e.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}const K=(e,t)=>{t.split(",").forEach(s=>{e.classList.add(L(s.trim()))})};function M(e,t=document){const s=e&&e.includes(":")?"property":"name",o=[...t.head.querySelectorAll(`meta[${s}="${e}"]`)].map(r=>r.content).join(", ");return o.length?o:""}function Ze(){const e=M("template");e&&K(document.body,e);const t=M("theme");t&&K(document.body,t)}function Ke(e){e.querySelectorAll("a").forEach(t=>{if(t.title=t.title||t.textContent,t.href!==t.textContent){const s=t.parentElement,n=t.parentElement.parentElement;t.querySelector("img")||(s.childNodes.length===1&&(s.tagName==="P"||s.tagName==="DIV")&&(t.className="button",s.classList.add("button-container")),s.childNodes.length===1&&s.tagName==="STRONG"&&n.childNodes.length===1&&n.tagName==="P"&&(t.className="button primary",n.classList.add("button-container")),s.childNodes.length===1&&s.tagName==="EM"&&n.childNodes.length===1&&n.tagName==="P"&&(t.className="button secondary",n.classList.add("button-container")))}})}function Xe(e){return e.trim()===""?void 0:e}function We(){const e=M("language");document.documentElement.lang=Xe(e)||"en"}function Ye(){return N()?window.parent.location:window.location}function Ge(){return N()?window.parent.location.origin:window.location.origin}const ye=e=>{try{const t=Ge(),s=new URL(window.hlx.codeBasePath,t);return new URL(e,s)}catch(t){throw new Error(`Failed to build Url for endpoint: ${t}`)}};function $(e){return new Promise((t,s)=>{const{href:n}=ye(e);if(document.querySelector(`head > link[href="${n}"]`))t();else{const o=document.createElement("link");o.rel="stylesheet",o.href=n,o.onload=()=>t(),o.onerror=s,document.head.append(o)}})}const O={mainTsPath:"./src/main.ts",mainScssPath:"./src/styles/sass/main.scss",iconsDirPath:"./public/icons",iconsTypesPath:"./src/types/icons.types.ts",lazyStylesScssPath:"./src/styles/sass/lazy-styles.scss",lazyStylesCssPath:"./dist/lazyStyles/lazyStyles.css",sidekickLibraryStylesScssPath:"./src/styles/sass/sidekick-library-styles.scss",sidekickLibraryStylesCssPath:"./dist/sidekickLibraryStyles/sidekickLibraryStyles.css",lcpBlocks:["teaser-video"]};async function X(){const{fontsCssPath:e}=O;if(e){await $(e);try{Ye().hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch(t){p.error("loadFonts: Error setting fonts-loaded in session storage",t)}}}function c(e,t={}){c.defer=c.defer||[];const s=n=>{c[n]=c[n]||((...o)=>c.defer.push({fnname:n,args:o}))};c.drain=c.drain||((n,o)=>{c[n]=o,c.defer.filter(({fnname:r})=>n===r).forEach(({fnname:r,args:i})=>c[r](...i))}),c.always=c.always||[],c.always.on=(n,o)=>{c.always[n]=o},c.on=(n,o)=>{c.cases[n]=o},s("observe"),s("cwv");try{if(window.hlx=window.hlx||{},!window.hlx.rum){const a=new URLSearchParams(window.location.search).get("rum")==="on"?1:100,l=Array.from({length:75},(D,Pe)=>String.fromCharCode(48+Pe)).filter(D=>/\d|[A-Z]/i.test(D)).filter(()=>Math.random()*75>70).join(""),h=Math.random(),u=h*a<1,y=Date.now(),be={full:()=>window.location.href,origin:()=>window.location.origin,path:()=>window.location.href.replace(/\?.*$/,"")};window.hlx.rum={weight:a,id:l,random:h,isSelected:u,firstReadTime:y,sampleRUM:c,sanitizeURL:be[window.hlx.RUM_MASK_URL||"path"]}}const{weight:n,id:o,firstReadTime:r}=window.hlx.rum;if(window.hlx&&window.hlx.rum&&window.hlx.rum.isSelected){const i=["weight","id","referer","checkpoint","t","source","target","cwv","CLS","FID","LCP","INP"],a=(l=t)=>{const h=JSON.stringify({weight:n,id:o,referer:window.hlx.rum.sanitizeURL(),checkpoint:e,t:Date.now()-r,...t},i),u=`https://rum.hlx.page/.rum/${n}`;navigator.sendBeacon(u,h),console.debug(`ping:${e}`,l)};c.cases=c.cases||{cwv:()=>c.cwv(t)||!0,lazy:()=>{const l=document.createElement("script");return l.src="https://rum.hlx.page/.rum/@adobe/helix-rum-enhancer@^1/src/index.js",document.head.appendChild(l),!0}},a(t),c.cases[e]&&c.cases[e]()}c.always[e]&&c.always[e](t)}catch{}}function Je(e="/dist/main/main.js"){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const t=document.querySelector(`script[src$="${e}"]`);if(t)try{[window.hlx.codeBasePath]=new URL(t.src).pathname.split(e)}catch(s){p.log("setupHlxObj: Could not set codeBasePath.",s)}}function et(){Je(),c("top"),window.addEventListener("load",()=>c("load")),window.addEventListener("unhandledrejection",e=>{c("error",{source:e.reason.sourceURL,target:e.reason.line})}),window.addEventListener("error",e=>{c("error",{source:e.filename,target:e.lineno})})}function we(e){const t=[];return e.querySelectorAll("[data-block-name]").forEach(n=>{t.push({name:n.dataset.blockName,element:n})}),t}async function ge(e){if((e.element.dataset.blockStatus??"unloaded")==="unloaded")try{e.element.dataset.blockStatus="loading";const{href:s}=ye(`dist/${e.name}/${e.name}.js`),n=await ee(()=>import(s),__vite__mapDeps([]));n.default&&await n.default(e.element),e.element.dataset.blockStatus="loaded"}catch(s){e.element.dataset.blockStatus="error",p.error("loadBlockModules:",s)}}async function ve(e){try{await $(`dist/${e.name}/${e.name}.css`)}catch(t){p.error("loadBlockStyles: Could not load css styles.",t)}}function z(e){e.style.removeProperty("display")}async function tt(e){const t=we(e);if(!t.length){z(e);return}const s=[];for(const n of t)s.push(Promise.all([ge(n),ve(n)]));await Promise.all(s),z(e)}async function st(){const t=[...document.querySelectorAll(".section")].map(s=>tt(s));await Promise.all(t)}function nt(){document.querySelectorAll(".default-content-wrapper picture").forEach(t=>{const s=t.parentElement;s&&s.classList.add("image","main")})}function ot(e){const t=[];let s=!1;[...e.children].forEach(n=>{if(n.tagName==="DIV"||!s){const o=document.createElement("div");t.push(o),s=n.tagName!=="DIV",s&&o.classList.add("default-content-wrapper")}t[t.length-1].append(n)}),t.forEach(n=>e.append(n)),nt(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}function rt(e){return/^[a-z][A-Za-z0-9]*$/.test(e)?e:/^[A-Z][A-Za-z0-9]*$/.test(e)?e.charAt(0).toLowerCase()+e.slice(1):L(e).replace(/-([a-z])/g,t=>t[1].toUpperCase())}function it(e){const t={};return e.querySelectorAll(":scope > div").forEach(s=>{if(s.children){const n=[...s.children];if(n[1]){const o=n[1],r=L(n[0].textContent??"");let i="";if(o.querySelector("a")){const a=[...o.querySelectorAll("a")];a.length===1?i=a[0].href:i=a.map(l=>l.href)}else if(o.querySelector("img")){const a=[...o.querySelectorAll("img")];a.length===1?i=a[0].src:i=a.map(l=>l.src)}else if(o.querySelector("p")){const a=[...o.querySelectorAll("p")];a.length===1?i=a[0].textContent:i=a.map(l=>l.textContent)}else i=s.children[1].textContent;t[r]=i}}}),t}function at(e){const t=e.querySelector("div.section-metadata");if(t){const s=it(t);Object.keys(s).forEach(n=>{n==="style"?s.style.split(",").filter(r=>r).map(r=>L(r.trim())).forEach(r=>e.classList.add(r)):e.dataset[rt(n)]=s[n]}),t.parentElement&&t.parentElement.remove()}}function lt(e){e.querySelectorAll(":scope > div").forEach(t=>{ot(t),at(t)})}function ct(e){e.querySelectorAll("div.section > div > div").forEach(t=>{const s=t.classList[0];if(s){t.classList.add("block"),t.dataset.blockName=s;const n=t.parentElement;n==null||n.classList.add(`${s}-wrapper`);const o=t.closest(".section");o&&o.classList.add(`${s}-container`)}})}async function dt(){const e=document.querySelector(".section"),{lcpBlocks:t}=O;if(e){const o=we(e).map(async r=>{(t==null?void 0:t.includes(r.name))&&await Promise.all([ge(r),ve(r)])});await Promise.all(o),z(e)}document.body.style.display=null;const s=document.querySelector("main img");await new Promise(n=>{s&&!s.complete?(s.setAttribute("loading","eager"),s.setAttribute("fetchpriority","high"),s.addEventListener("load",()=>n()),s.addEventListener("error",()=>n())):n()})}class ut{constructor(){this.beforeEagerCallbacks=[],this.loadEagerCallbacks=[],this.beforeLoadLazyCallbacks=[],this.loadLazyCallbacks=[],this.beforeLoadDelayedCallbacks=[],this.loadDelayedCallbacks=[],this.initializedCallbacks=[]}get beforeEager(){return this.beforeEagerPromise===void 0&&(this.beforeEagerPromise=this.beforeLoadEager()),this.beforeEagerPromise}get loadEager(){return this.eagerPromise===void 0&&(this.eagerPromise=this.loadEagerPromise()),this.eagerPromise}get beforeLoadLazy(){return this.beforeLazyPromise===void 0&&(this.beforeLazyPromise=this.beforeLoadLazyPromise()),this.beforeLazyPromise}get loadLazy(){return this.lazyPromise===void 0&&(this.lazyPromise=this.loadLazyPromise()),this.lazyPromise}get beforeLoadDelayed(){return this.beforeDelayedPromise===void 0&&(this.beforeDelayedPromise=this.beforeLoadDelayedPromise()),this.beforeDelayedPromise}get loadDelayed(){return this.delayedPromise===void 0&&(this.delayedPromise=this.loadDelayedPromise()),this.delayedPromise}get initialized(){return this.initializedPromise===void 0&&(this.initializedPromise=this.getInitializedPromise()),this.initializedPromise}addBeforeEagerTask(t){this.beforeEagerCallbacks.push(t)}addLoadEagerTask(t){this.loadEagerCallbacks.push(t)}addBeforeLoadLazyTask(t){this.beforeLoadLazyCallbacks.push(t)}addLoadLazyTask(t){this.loadLazyCallbacks.push(t)}addBeforeLoadDelayedTask(t){this.beforeLoadDelayedCallbacks.push(t)}addLoadDelayedTask(t){this.loadDelayedCallbacks.push(t)}addInitializedTask(t){this.initializedCallbacks.push(t)}async init(){await this.beforeEager,await this.loadEager,await this.beforeLoadLazy,await this.loadLazy,await this.beforeLoadDelayed,await this.loadDelayed,await this.initialized}async beforeLoadEager(){const t=new Promise(s=>{et(),Ze(),We(),s()});await Promise.all([...this.beforeEagerCallbacks.map(s=>s()),t])}async loadEagerPromise(){const t=new Promise(async s=>{try{const n=document.querySelector("main");Ke(n),lt(n),ct(n),setTimeout(()=>{document.body.classList.add("show"),s()},100),(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await X()}catch(n){p.error("index: could not load fonts",n)}});await Promise.all([...this.loadEagerCallbacks.map(s=>s()),t,dt()])}async beforeLoadLazyPromise(){const t=new Promise(s=>s());await Promise.all([...this.beforeLoadLazyCallbacks.map(s=>s()),t])}async loadLazyPromise(){const t=new Promise(async s=>{try{const{lazyStylesScssPath:n,sidekickLibraryStylesScssPath:o,fontsScssPath:r,lazyStylesCssPath:i,sidekickLibraryStylesCssPath:a}=O;await st();const{hash:l}=window.location,h=l?document.getElementById(l.substring(1)):!1;l&&h&&h.scrollIntoView(),n&&i&&await $(i),o&&a&&N()&&await $(a),r&&await X(),c("lazy");const u=document.querySelector("main");c.observe(u.querySelectorAll("div[data-block-name]")),c.observe(u.querySelectorAll("picture > img"))}catch(n){p.error("LoadLazyTask: ",n)}s()});await Promise.all([...this.loadLazyCallbacks.map(s=>s()),t])}async beforeLoadDelayedPromise(){const t=new Promise(s=>s());await Promise.all([...this.beforeLoadDelayedCallbacks.map(s=>s()),t])}async loadDelayedPromise(){const t=new Promise(s=>{setTimeout(()=>{s()},3e3)});await Promise.all([...this.loadDelayedCallbacks.map(s=>s()),t])}async getInitializedPromise(){const t=new Promise(s=>s());await Promise.all([...this.initializedCallbacks.map(s=>s()),t])}}const j=new ut;var ht=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,mt=(e,t,s,n)=>{for(var o=n>1?void 0:n?ft(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,s,o):i(o))||o);return n&&o&&ht(t,s,o),o};const pt=()=>J`<div class="w-full relative bg-white box-border flex flex-row items-center justify-center leading-[normal] tracking-[normal] border-b-[1px] border-solid border-grey-200"><div class="flex-1 flex flex-row items-start justify-between py-0 pr-[15px] pl-[30px] box-border max-w-[1387px] gap-[20px]"><div class="w-[168.1px] flex flex-col items-start justify-center py-0 pr-[15px] pl-0 box-border"><div class="self-stretch flex flex-row items-center justify-start pt-[15.4px] pb-[15.5px] pr-[15px] pl-0"><div class="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-[2.1px]"><div class="self-stretch flex flex-row items-start justify-start pt-0.5 px-0 pb-px"><div class="flex-1 flex flex-row items-center justify-start pt-[2.8px] px-0 pb-[1.2px]"><div class="flex flex-row items-start justify-start"><img class="h-[19px] w-[138.1px] relative overflow-hidden shrink-0" loading="lazy" alt="" src="/public/images/icon1.svg"></div></div></div></div></div></div><div class="flex flex-row items-center justify-end py-[17.5px] pr-0 pl-5"><div class="overflow-hidden flex flex-col items-center justify-start py-[3px] px-px"><div class="flex flex-row items-center justify-center pt-[2.8px] px-0 pb-[1.2px]"><div class="flex flex-row items-start justify-start"><img class="h-[15px] w-[23px] relative overflow-hidden shrink-0" loading="lazy" alt="" src="/public/images/icon-11.svg"></div></div></div></div></div></div>`;let W=class extends G{createRenderRoot(){return this}render(){return pt()}};W=mt([te("hy-header")],W);const yt=()=>{const e=document.createElement("hy-header");e.setAttribute("id","hy-header");const t=document.getElementById("main");t==null||t.before(e)};j.addLoadEagerTask(()=>(yt(),Promise.resolve()));const g={interactive:"interactive",complete:"complete"};async function Y(){j.addBeforeEagerTask(()=>(document.getElementsByTagName("main")[0].setAttribute("id","main"),Promise.resolve())),await j.init()}function wt(){document.readyState===g.interactive||document.readyState===g.complete?Y():document.addEventListener("readystatechange",()=>{const e=document.readyState;(e===g.interactive||e===g.complete)&&Y()})}wt();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
