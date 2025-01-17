"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[391],{7034:function(e,r,t){t.d(r,{Z:function(){return s}});var o=t(2265);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,o.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:r,...i,width:n,height:n,stroke:t,strokeWidth:s?24*Number(a)/Number(n):a,className:l("lucide",c),...p},[...u.map(e=>{let[r,t]=e;return(0,o.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),s=((e,r)=>{let t=(0,o.forwardRef)((t,i)=>{let{className:s,...c}=t;return(0,o.createElement)(a,{ref:i,iconNode:r,className:l("lucide-".concat(n(e)),s),...c})});return t.displayName="".concat(e),t})("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},8591:function(e,r,t){t.d(r,{VY:function(){return eg},h4:function(){return em},ck:function(){return ef},fC:function(){return ep},xz:function(){return eb}});var o=t(2265),n=t.t(o,2),l=t(7437);function i(e,r=[]){let t=[],n=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return n.scopeName=e,[function(r,n){let i=o.createContext(n),a=t.length;t=[...t,n];let s=r=>{let{scope:t,children:n,...s}=r,c=t?.[e]?.[a]||i,d=o.useMemo(()=>s,Object.values(s));return(0,l.jsx)(c.Provider,{value:d,children:n})};return s.displayName=r+"Provider",[s,function(t,l){let s=l?.[e]?.[a]||i,c=o.useContext(s);if(c)return c;if(void 0!==n)return n;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e)[`__scope${o}`];return{...r,...n}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(n,...r)]}function a(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function s(...e){return r=>{let t=!1,o=e.map(e=>{let o=a(e,r);return t||"function"!=typeof o||(t=!0),o});if(t)return()=>{for(let r=0;r<o.length;r++){let t=o[r];"function"==typeof t?t():a(e[r],null)}}}}function c(...e){return o.useCallback(s(...e),e)}var d=o.forwardRef((e,r)=>{let{children:t,...n}=e,i=o.Children.toArray(t),a=i.find(f);if(a){let e=a.props.children,t=i.map(r=>r!==a?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(u,{...n,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(u,{...n,ref:r,children:t})});d.displayName="Slot";var u=o.forwardRef((e,r)=>{let{children:t,...n}=e;if(o.isValidElement(t)){let e,l;let i=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return o.cloneElement(t,{...function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o];/^on[A-Z]/.test(o)?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(n,t.props),ref:r?s(r,i):i})}return o.Children.count(t)>1?o.Children.only(null):null});u.displayName="SlotClone";var p=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function f(e){return o.isValidElement(e)&&e.type===p}function m(e,r,{checkForDefaultPrevented:t=!0}={}){return function(o){if(e?.(o),!1===t||!o.defaultPrevented)return r?.(o)}}function b(e){let r=o.useRef(e);return o.useEffect(()=>{r.current=e}),o.useMemo(()=>(...e)=>r.current?.(...e),[])}function g({prop:e,defaultProp:r,onChange:t=()=>{}}){let[n,l]=function({defaultProp:e,onChange:r}){let t=o.useState(e),[n]=t,l=o.useRef(n),i=b(r);return o.useEffect(()=>{l.current!==n&&(i(n),l.current=n)},[n,l,i]),t}({defaultProp:r,onChange:t}),i=void 0!==e,a=i?e:n,s=b(t);return[a,o.useCallback(r=>{if(i){let t="function"==typeof r?r(e):r;t!==e&&s(t)}else l(r)},[i,e,l,s])]}t(4887);var h=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=o.forwardRef((e,t)=>{let{asChild:o,...n}=e,i=o?d:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(i,{...n,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),v=globalThis?.document?o.useLayoutEffect:()=>{},y=e=>{var r,t;let n,l;let{present:i,children:a}=e,s=function(e){var r,t;let[n,l]=o.useState(),i=o.useRef({}),a=o.useRef(e),s=o.useRef("none"),[c,d]=(r=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,r)=>{let o=t[e][r];return null!=o?o:e},r));return o.useEffect(()=>{let e=x(i.current);s.current="mounted"===c?e:"none"},[c]),v(()=>{let r=i.current,t=a.current;if(t!==e){let o=s.current,n=x(r);e?d("MOUNT"):"none"===n||(null==r?void 0:r.display)==="none"?d("UNMOUNT"):t&&o!==n?d("ANIMATION_OUT"):d("UNMOUNT"),a.current=e}},[e,d]),v(()=>{if(n){var e;let r;let t=null!==(e=n.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=x(i.current).includes(e.animationName);if(e.target===n&&o&&(d("ANIMATION_END"),!a.current)){let e=n.style.animationFillMode;n.style.animationFillMode="forwards",r=t.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=e)})}},l=e=>{e.target===n&&(s.current=x(i.current))};return n.addEventListener("animationstart",l),n.addEventListener("animationcancel",o),n.addEventListener("animationend",o),()=>{t.clearTimeout(r),n.removeEventListener("animationstart",l),n.removeEventListener("animationcancel",o),n.removeEventListener("animationend",o)}}d("ANIMATION_END")},[n,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:o.useCallback(e=>{e&&(i.current=getComputedStyle(e)),l(e)},[])}}(i),d="function"==typeof a?a({present:s.isPresent}):o.Children.only(a),u=c(s.ref,(n=null===(r=Object.getOwnPropertyDescriptor(d.props,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning?d.ref:(n=null===(t=Object.getOwnPropertyDescriptor(d,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in n&&n.isReactWarning?d.props.ref:d.props.ref||d.ref);return"function"==typeof a||s.isPresent?o.cloneElement(d,{ref:u}):null};function x(e){return(null==e?void 0:e.animationName)||"none"}y.displayName="Presence";var w=n["useId".toString()]||(()=>void 0),k=0;function N(e){let[r,t]=o.useState(w());return v(()=>{e||t(e=>e??String(k++))},[e]),e||(r?`radix-${r}`:"")}var j="Collapsible",[C,R]=i(j),[z,A]=C(j),E=o.forwardRef((e,r)=>{let{__scopeCollapsible:t,open:n,defaultOpen:i,disabled:a,onOpenChange:s,...c}=e,[d=!1,u]=g({prop:n,defaultProp:i,onChange:s});return(0,l.jsx)(z,{scope:t,disabled:a,contentId:N(),open:d,onOpenToggle:o.useCallback(()=>u(e=>!e),[u]),children:(0,l.jsx)(h.div,{"data-state":P(d),"data-disabled":a?"":void 0,...c,ref:r})})});E.displayName=j;var O="CollapsibleTrigger",I=o.forwardRef((e,r)=>{let{__scopeCollapsible:t,...o}=e,n=A(O,t);return(0,l.jsx)(h.button,{type:"button","aria-controls":n.contentId,"aria-expanded":n.open||!1,"data-state":P(n.open),"data-disabled":n.disabled?"":void 0,disabled:n.disabled,...o,ref:r,onClick:m(e.onClick,n.onOpenToggle)})});I.displayName=O;var M="CollapsibleContent",S=o.forwardRef((e,r)=>{let{forceMount:t,...o}=e,n=A(M,e.__scopeCollapsible);return(0,l.jsx)(y,{present:t||n.open,children:e=>{let{present:t}=e;return(0,l.jsx)(_,{...o,ref:r,present:t})}})});S.displayName=M;var _=o.forwardRef((e,r)=>{let{__scopeCollapsible:t,present:n,children:i,...a}=e,s=A(M,t),[d,u]=o.useState(n),p=o.useRef(null),f=c(r,p),m=o.useRef(0),b=m.current,g=o.useRef(0),y=g.current,x=s.open||d,w=o.useRef(x),k=o.useRef(void 0);return o.useEffect(()=>{let e=requestAnimationFrame(()=>w.current=!1);return()=>cancelAnimationFrame(e)},[]),v(()=>{let e=p.current;if(e){k.current=k.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let r=e.getBoundingClientRect();m.current=r.height,g.current=r.width,w.current||(e.style.transitionDuration=k.current.transitionDuration,e.style.animationName=k.current.animationName),u(n)}},[s.open,n]),(0,l.jsx)(h.div,{"data-state":P(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!x,...a,ref:f,style:{"--radix-collapsible-content-height":b?"".concat(b,"px"):void 0,"--radix-collapsible-content-width":y?"".concat(y,"px"):void 0,...e.style},children:x&&i})});function P(e){return e?"open":"closed"}var T=o.createContext(void 0),D="Accordion",$=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[W,U,L]=function(e){let r=e+"CollectionProvider",[t,n]=i(r),[a,s]=t(r,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:r,children:t}=e,n=o.useRef(null),i=o.useRef(new Map).current;return(0,l.jsx)(a,{scope:r,itemMap:i,collectionRef:n,children:t})};u.displayName=r;let p=e+"CollectionSlot",f=o.forwardRef((e,r)=>{let{scope:t,children:o}=e,n=c(r,s(p,t).collectionRef);return(0,l.jsx)(d,{ref:n,children:o})});f.displayName=p;let m=e+"CollectionItemSlot",b="data-radix-collection-item",g=o.forwardRef((e,r)=>{let{scope:t,children:n,...i}=e,a=o.useRef(null),u=c(r,a),p=s(m,t);return o.useEffect(()=>(p.itemMap.set(a,{ref:a,...i}),()=>void p.itemMap.delete(a))),(0,l.jsx)(d,{[b]:"",ref:u,children:n})});return g.displayName=m,[{Provider:u,Slot:f,ItemSlot:g},function(r){let t=s(e+"CollectionConsumer",r);return o.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll("[".concat(b,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},n]}(D),[G,F]=i(D,[L,R]),V=R(),q=o.forwardRef((e,r)=>{let{type:t,...o}=e;return(0,l.jsx)(W.Provider,{scope:e.__scopeAccordion,children:"multiple"===t?(0,l.jsx)(J,{...o,ref:r}):(0,l.jsx)(Y,{...o,ref:r})})});q.displayName=D;var[B,H]=G(D),[Z,K]=G(D,{collapsible:!1}),Y=o.forwardRef((e,r)=>{let{value:t,defaultValue:n,onValueChange:i=()=>{},collapsible:a=!1,...s}=e,[c,d]=g({prop:t,defaultProp:n,onChange:i});return(0,l.jsx)(B,{scope:e.__scopeAccordion,value:c?[c]:[],onItemOpen:d,onItemClose:o.useCallback(()=>a&&d(""),[a,d]),children:(0,l.jsx)(Z,{scope:e.__scopeAccordion,collapsible:a,children:(0,l.jsx)(ee,{...s,ref:r})})})}),J=o.forwardRef((e,r)=>{let{value:t,defaultValue:n,onValueChange:i=()=>{},...a}=e,[s=[],c]=g({prop:t,defaultProp:n,onChange:i}),d=o.useCallback(e=>c(function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...r,e]}),[c]),u=o.useCallback(e=>c(function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.filter(r=>r!==e)}),[c]);return(0,l.jsx)(B,{scope:e.__scopeAccordion,value:s,onItemOpen:d,onItemClose:u,children:(0,l.jsx)(Z,{scope:e.__scopeAccordion,collapsible:!0,children:(0,l.jsx)(ee,{...a,ref:r})})})}),[Q,X]=G(D),ee=o.forwardRef((e,r)=>{let{__scopeAccordion:t,disabled:n,dir:i,orientation:a="vertical",...s}=e,d=c(o.useRef(null),r),u=U(t),p="ltr"===function(e){let r=o.useContext(T);return e||r||"ltr"}(i),f=m(e.onKeyDown,e=>{var r;if(!$.includes(e.key))return;let t=e.target,o=u().filter(e=>{var r;return!(null===(r=e.ref.current)||void 0===r?void 0:r.disabled)}),n=o.findIndex(e=>e.ref.current===t),l=o.length;if(-1===n)return;e.preventDefault();let i=n,s=l-1,c=()=>{(i=n+1)>s&&(i=0)},d=()=>{(i=n-1)<0&&(i=s)};switch(e.key){case"Home":i=0;break;case"End":i=s;break;case"ArrowRight":"horizontal"===a&&(p?c():d());break;case"ArrowDown":"vertical"===a&&c();break;case"ArrowLeft":"horizontal"===a&&(p?d():c());break;case"ArrowUp":"vertical"===a&&d()}null===(r=o[i%l].ref.current)||void 0===r||r.focus()});return(0,l.jsx)(Q,{scope:t,disabled:n,direction:i,orientation:a,children:(0,l.jsx)(W.Slot,{scope:t,children:(0,l.jsx)(h.div,{...s,"data-orientation":a,ref:d,onKeyDown:n?void 0:f})})})}),er="AccordionItem",[et,eo]=G(er),en=o.forwardRef((e,r)=>{let{__scopeAccordion:t,value:o,...n}=e,i=X(er,t),a=H(er,t),s=V(t),c=N(),d=o&&a.value.includes(o)||!1,u=i.disabled||e.disabled;return(0,l.jsx)(et,{scope:t,open:d,disabled:u,triggerId:c,children:(0,l.jsx)(E,{"data-orientation":i.orientation,"data-state":eu(d),...s,...n,ref:r,disabled:u,open:d,onOpenChange:e=>{e?a.onItemOpen(o):a.onItemClose(o)}})})});en.displayName=er;var el="AccordionHeader",ei=o.forwardRef((e,r)=>{let{__scopeAccordion:t,...o}=e,n=X(D,t),i=eo(el,t);return(0,l.jsx)(h.h3,{"data-orientation":n.orientation,"data-state":eu(i.open),"data-disabled":i.disabled?"":void 0,...o,ref:r})});ei.displayName=el;var ea="AccordionTrigger",es=o.forwardRef((e,r)=>{let{__scopeAccordion:t,...o}=e,n=X(D,t),i=eo(ea,t),a=K(ea,t),s=V(t);return(0,l.jsx)(W.ItemSlot,{scope:t,children:(0,l.jsx)(I,{"aria-disabled":i.open&&!a.collapsible||void 0,"data-orientation":n.orientation,id:i.triggerId,...s,...o,ref:r})})});es.displayName=ea;var ec="AccordionContent",ed=o.forwardRef((e,r)=>{let{__scopeAccordion:t,...o}=e,n=X(D,t),i=eo(ec,t),a=V(t);return(0,l.jsx)(S,{role:"region","aria-labelledby":i.triggerId,"data-orientation":n.orientation,...a,...o,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function eu(e){return e?"open":"closed"}ed.displayName=ec;var ep=q,ef=en,em=ei,eb=es,eg=ed},1994:function(e,r,t){t.d(r,{W:function(){return o}});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},3335:function(e,r,t){t.d(r,{m6:function(){return K}});let o=e=>{let r=a(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||i(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let i=e.join("-");return r.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},a=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),t).forEach(([e,t])=>{s(t,o,e,r)}),o},s=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:c(r,e)).classGroupId=t;return}if("function"==typeof e){if(d(e)){s(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{s(n,c(r,e),t,o)})})},c=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},d=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},f=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],l=r.length,i=e=>{let t;let i=[],a=0,s=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===a){if(d===n&&(o||e.slice(c,c+l)===r)){i.push(e.slice(s,c)),s=c+l;continue}if("/"===d){t=c;continue}}"["===d?a++:"]"===d&&a--}let c=0===i.length?e:e.substring(s),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:i,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:t&&t>s?t-s:void 0}};return t?e=>t({className:e,parseClassName:i}):i},m=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},b=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=[],i=e.trim().split(g),a="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{modifiers:s,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=t(r),p=!!u,f=o(p?d.substring(0,u):d);if(!f){if(!p||!(f=o(d))){a=r+(a.length>0?" "+a:a);continue}p=!1}let b=m(s).join(":"),g=c?b+"!":b,h=g+f;if(l.includes(h))continue;l.push(h);let v=n(f,p);for(let e=0;e<v.length;++e){let r=v[e];l.push(g+r)}a=r+(a.length>0?" "+a:a)}return a};function v(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=y(e))&&(o&&(o+=" "),o+=r);return o}let y=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=y(e[o]))&&(t&&(t+=" "),t+=r);return t},x=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},w=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,N=new Set(["px","full","screen"]),j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,R=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,z=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,A=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,E=e=>I(e)||N.has(e)||k.test(e),O=e=>V(e,"length",q),I=e=>!!e&&!Number.isNaN(Number(e)),M=e=>V(e,"number",I),S=e=>!!e&&Number.isInteger(Number(e)),_=e=>e.endsWith("%")&&I(e.slice(0,-1)),P=e=>w.test(e),T=e=>j.test(e),D=new Set(["length","size","percentage"]),$=e=>V(e,D,B),W=e=>V(e,"position",B),U=new Set(["image","url"]),L=e=>V(e,U,Z),G=e=>V(e,"",H),F=()=>!0,V=(e,r,t)=>{let o=w.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},q=e=>C.test(e)&&!R.test(e),B=()=>!1,H=e=>z.test(e),Z=e=>A.test(e),K=function(e,...r){let t,o,n;let l=function(a){return o=(t=b(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=i,i(a)};function i(e){let r=o(e);if(r)return r;let l=h(e,t);return n(e,l),l}return function(){return l(v.apply(null,arguments))}}(()=>{let e=x("colors"),r=x("spacing"),t=x("blur"),o=x("brightness"),n=x("borderColor"),l=x("borderRadius"),i=x("borderSpacing"),a=x("borderWidth"),s=x("contrast"),c=x("grayscale"),d=x("hueRotate"),u=x("invert"),p=x("gap"),f=x("gradientColorStops"),m=x("gradientColorStopPositions"),b=x("inset"),g=x("margin"),h=x("opacity"),v=x("padding"),y=x("saturate"),w=x("scale"),k=x("sepia"),N=x("skew"),j=x("space"),C=x("translate"),R=()=>["auto","contain","none"],z=()=>["auto","hidden","clip","visible","scroll"],A=()=>["auto",P,r],D=()=>[P,r],U=()=>["",E,O],V=()=>["auto",I,P],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Z=()=>["start","end","center","between","around","evenly","stretch"],K=()=>["","0",P],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],J=()=>[I,P];return{cacheSize:500,separator:":",theme:{colors:[F],spacing:[E,O],blur:["none","",T,P],brightness:J(),borderColor:[e],borderRadius:["none","","full",T,P],borderSpacing:D(),borderWidth:U(),contrast:J(),grayscale:K(),hueRotate:J(),invert:K(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[_,O],inset:A(),margin:A(),opacity:J(),padding:D(),saturate:J(),scale:J(),sepia:K(),skew:J(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",P]}],container:["container"],columns:[{columns:[T]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),P]}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",S,P]}],basis:[{basis:A()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",P]}],grow:[{grow:K()}],shrink:[{shrink:K()}],order:[{order:["first","last","none",S,P]}],"grid-cols":[{"grid-cols":[F]}],"col-start-end":[{col:["auto",{span:["full",S,P]},P]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[F]}],"row-start-end":[{row:["auto",{span:[S,P]},P]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",P]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",P]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",P,r]}],"min-w":[{"min-w":[P,r,"min","max","fit"]}],"max-w":[{"max-w":[P,r,"none","full","min","max","fit","prose",{screen:[T]},T]}],h:[{h:[P,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[P,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[P,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[P,r,"auto","min","max","fit"]}],"font-size":[{text:["base",T,O]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",M]}],"font-family":[{font:[F]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",P]}],"line-clamp":[{"line-clamp":["none",I,M]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",E,P]}],"list-image":[{"list-image":["none",P]}],"list-style-type":[{list:["none","disc","decimal",P]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",E,O]}],"underline-offset":[{"underline-offset":["auto",E,P]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",P]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",P]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),W]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},L]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:B()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[E,P]}],"outline-w":[{outline:[E,O]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[E,O]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",T,G]}],"shadow-color":[{shadow:[F]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",T,P]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",P]}],duration:[{duration:J()}],ease:[{ease:["linear","in","out","in-out",P]}],delay:[{delay:J()}],animate:[{animate:["none","spin","ping","pulse","bounce",P]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[S,P]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",P]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",P]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",P]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[E,O,M]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);