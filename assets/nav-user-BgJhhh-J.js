import{c as ae,r as s,j as r,P as N,ay as se,az as Ne,l as _,aA as zn,aB as be,aC as Xn,b as Z,u as K,h as Yn,a as g,d as Hn,F as Wn,D as qn,aD as Zn,aE as Jn,aF as ye,R as Qn,S as et,aG as nt,ao as tt,aH as ot,i as rt,f as at,g as Re,aw as st,a3 as ct,ae as it,aI as ut,E as y,L as H}from"./index-yxd27OAT.js";import{c as Se,R as dt,I as lt}from"./index-SBL0oRxQ.js";import{C as pt}from"./chevron-right-CGRjkxUS.js";import{C as ft}from"./circle-Dtj5K3N_.js";import{a as mt,B as vt,U as gt,C as xt,S as ht,L as wt}from"./user-round-check-Nw1R8Ntl.js";var De=(e=>(e.GUIDED_TOUR="guided-tour",e))(De||{}),ce="Avatar",[Mt,zo]=ae(ce),[Ct,Ee]=Mt(ce),Pe=s.forwardRef((e,t)=>{const{__scopeAvatar:n,...o}=e,[a,c]=s.useState("idle");return r.jsx(Ct,{scope:n,imageLoadingStatus:a,onImageLoadingStatusChange:c,children:r.jsx(N.span,{...o,ref:t})})});Pe.displayName=ce;var je="AvatarImage",Ae=s.forwardRef((e,t)=>{const{__scopeAvatar:n,src:o,onLoadingStatusChange:a=()=>{},...c}=e,i=Ee(je,n),u=_t(o,c.referrerPolicy),p=se(v=>{a(v),i.onImageLoadingStatusChange(v)});return Ne(()=>{u!=="idle"&&p(u)},[u,p]),u==="loaded"?r.jsx(N.img,{...c,ref:t,src:o}):null});Ae.displayName=je;var Te="AvatarFallback",Oe=s.forwardRef((e,t)=>{const{__scopeAvatar:n,delayMs:o,...a}=e,c=Ee(Te,n),[i,u]=s.useState(o===void 0);return s.useEffect(()=>{if(o!==void 0){const p=window.setTimeout(()=>u(!0),o);return()=>window.clearTimeout(p)}},[o]),i&&c.imageLoadingStatus!=="loaded"?r.jsx(N.span,{...a,ref:t}):null});Oe.displayName=Te;function _t(e,t){const[n,o]=s.useState("idle");return Ne(()=>{if(!e){o("error");return}let a=!0;const c=new window.Image,i=u=>()=>{a&&o(u)};return o("loading"),c.onload=i("loaded"),c.onerror=i("error"),c.src=e,t&&(c.referrerPolicy=t),()=>{a=!1}},[e,t]),n}var ke=Pe,Le=Ae,Ge=Oe;const Fe=s.forwardRef(({className:e,...t},n)=>r.jsx(ke,{ref:n,className:_("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...t}));Fe.displayName=ke.displayName;const Ke=s.forwardRef(({className:e,...t},n)=>r.jsx(Le,{ref:n,className:_("aspect-square h-full w-full",e),...t}));Ke.displayName=Le.displayName;const Ue=s.forwardRef(({className:e,...t},n)=>r.jsx(Ge,{ref:n,className:_("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...t}));Ue.displayName=Ge.displayName;var re=["Enter"," "],Rt=["ArrowDown","PageUp","Home"],$e=["ArrowUp","PageDown","End"],It=[...Rt,...$e],Nt={ltr:[...re,"ArrowRight"],rtl:[...re,"ArrowLeft"]},bt={ltr:["ArrowLeft"],rtl:["ArrowRight"]},U="Menu",[G,yt,St]=zn(U),[D,Be]=ae(U,[St,be,Se]),J=be(),Ve=Se(),[Dt,E]=D(U),[Et,$]=D(U),ze=e=>{const{__scopeMenu:t,open:n=!1,children:o,dir:a,onOpenChange:c,modal:i=!0}=e,u=J(t),[p,v]=s.useState(null),f=s.useRef(!1),d=se(c),m=tt(a);return s.useEffect(()=>{const h=()=>{f.current=!0,document.addEventListener("pointerdown",x,{capture:!0,once:!0}),document.addEventListener("pointermove",x,{capture:!0,once:!0})},x=()=>f.current=!1;return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",x,{capture:!0}),document.removeEventListener("pointermove",x,{capture:!0})}},[]),r.jsx(ot,{...u,children:r.jsx(Dt,{scope:t,open:n,onOpenChange:d,content:p,onContentChange:v,children:r.jsx(Et,{scope:t,onClose:s.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:f,dir:m,modal:i,children:o})})})};ze.displayName=U;var Pt="MenuAnchor",ie=s.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,a=J(n);return r.jsx(Xn,{...a,...o,ref:t})});ie.displayName=Pt;var ue="MenuPortal",[jt,Xe]=D(ue,{forceMount:void 0}),Ye=e=>{const{__scopeMenu:t,forceMount:n,children:o,container:a}=e,c=E(ue,t);return r.jsx(jt,{scope:t,forceMount:n,children:r.jsx(Z,{present:n||c.open,children:r.jsx(rt,{asChild:!0,container:a,children:o})})})};Ye.displayName=ue;var C="MenuContent",[At,de]=D(C),He=s.forwardRef((e,t)=>{const n=Xe(C,e.__scopeMenu),{forceMount:o=n.forceMount,...a}=e,c=E(C,e.__scopeMenu),i=$(C,e.__scopeMenu);return r.jsx(G.Provider,{scope:e.__scopeMenu,children:r.jsx(Z,{present:o||c.open,children:r.jsx(G.Slot,{scope:e.__scopeMenu,children:i.modal?r.jsx(Tt,{...a,ref:t}):r.jsx(Ot,{...a,ref:t})})})})}),Tt=s.forwardRef((e,t)=>{const n=E(C,e.__scopeMenu),o=s.useRef(null),a=K(t,o);return s.useEffect(()=>{const c=o.current;if(c)return Yn(c)},[]),r.jsx(le,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:g(e.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),Ot=s.forwardRef((e,t)=>{const n=E(C,e.__scopeMenu);return r.jsx(le,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),le=s.forwardRef((e,t)=>{const{__scopeMenu:n,loop:o=!1,trapFocus:a,onOpenAutoFocus:c,onCloseAutoFocus:i,disableOutsidePointerEvents:u,onEntryFocus:p,onEscapeKeyDown:v,onPointerDownOutside:f,onFocusOutside:d,onInteractOutside:m,onDismiss:h,disableOutsideScroll:x,...S}=e,P=E(C,n),T=$(C,n),B=J(n),V=Ve(n),xe=yt(n),[Fn,he]=s.useState(null),z=s.useRef(null),Kn=K(t,z,P.onContentChange),X=s.useRef(0),Y=s.useRef(""),Un=s.useRef(0),ee=s.useRef(null),we=s.useRef("right"),ne=s.useRef(0),$n=x?Qn:s.Fragment,Bn=x?{as:et,allowPinchZoom:!0}:void 0,Vn=l=>{var A,Ce;const M=Y.current+l,R=xe().filter(I=>!I.disabled),b=document.activeElement,te=(A=R.find(I=>I.ref.current===b))==null?void 0:A.textValue,oe=R.map(I=>I.textValue),Me=Yt(oe,M,te),O=(Ce=R.find(I=>I.textValue===Me))==null?void 0:Ce.ref.current;(function I(_e){Y.current=_e,window.clearTimeout(X.current),_e!==""&&(X.current=window.setTimeout(()=>I(""),1e3))})(M),O&&setTimeout(()=>O.focus())};s.useEffect(()=>()=>window.clearTimeout(X.current),[]),Hn();const j=s.useCallback(l=>{var R,b;return we.current===((R=ee.current)==null?void 0:R.side)&&Wt(l,(b=ee.current)==null?void 0:b.area)},[]);return r.jsx(At,{scope:n,searchRef:Y,onItemEnter:s.useCallback(l=>{j(l)&&l.preventDefault()},[j]),onItemLeave:s.useCallback(l=>{var M;j(l)||((M=z.current)==null||M.focus(),he(null))},[j]),onTriggerLeave:s.useCallback(l=>{j(l)&&l.preventDefault()},[j]),pointerGraceTimerRef:Un,onPointerGraceIntentChange:s.useCallback(l=>{ee.current=l},[]),children:r.jsx($n,{...Bn,children:r.jsx(Wn,{asChild:!0,trapped:a,onMountAutoFocus:g(c,l=>{var M;l.preventDefault(),(M=z.current)==null||M.focus({preventScroll:!0})}),onUnmountAutoFocus:i,children:r.jsx(qn,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:v,onPointerDownOutside:f,onFocusOutside:d,onInteractOutside:m,onDismiss:h,children:r.jsx(dt,{asChild:!0,...V,dir:T.dir,orientation:"vertical",loop:o,currentTabStopId:Fn,onCurrentTabStopIdChange:he,onEntryFocus:g(p,l=>{T.isUsingKeyboardRef.current||l.preventDefault()}),preventScrollOnEntryFocus:!0,children:r.jsx(Zn,{role:"menu","aria-orientation":"vertical","data-state":ln(P.open),"data-radix-menu-content":"",dir:T.dir,...B,...S,ref:Kn,style:{outline:"none",...S.style},onKeyDown:g(S.onKeyDown,l=>{const R=l.target.closest("[data-radix-menu-content]")===l.currentTarget,b=l.ctrlKey||l.altKey||l.metaKey,te=l.key.length===1;R&&(l.key==="Tab"&&l.preventDefault(),!b&&te&&Vn(l.key));const oe=z.current;if(l.target!==oe||!It.includes(l.key))return;l.preventDefault();const O=xe().filter(A=>!A.disabled).map(A=>A.ref.current);$e.includes(l.key)&&O.reverse(),zt(O)}),onBlur:g(e.onBlur,l=>{l.currentTarget.contains(l.target)||(window.clearTimeout(X.current),Y.current="")}),onPointerMove:g(e.onPointerMove,F(l=>{const M=l.target,R=ne.current!==l.clientX;if(l.currentTarget.contains(M)&&R){const b=l.clientX>ne.current?"right":"left";we.current=b,ne.current=l.clientX}}))})})})})})})});He.displayName=C;var kt="MenuGroup",pe=s.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return r.jsx(N.div,{role:"group",...o,ref:t})});pe.displayName=kt;var Lt="MenuLabel",We=s.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return r.jsx(N.div,{...o,ref:t})});We.displayName=Lt;var W="MenuItem",Ie="menu.itemSelect",Q=s.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:o,...a}=e,c=s.useRef(null),i=$(W,e.__scopeMenu),u=de(W,e.__scopeMenu),p=K(t,c),v=s.useRef(!1),f=()=>{const d=c.current;if(!n&&d){const m=new CustomEvent(Ie,{bubbles:!0,cancelable:!0});d.addEventListener(Ie,h=>o==null?void 0:o(h),{once:!0}),nt(d,m),m.defaultPrevented?v.current=!1:i.onClose()}};return r.jsx(qe,{...a,ref:p,disabled:n,onClick:g(e.onClick,f),onPointerDown:d=>{var m;(m=e.onPointerDown)==null||m.call(e,d),v.current=!0},onPointerUp:g(e.onPointerUp,d=>{var m;v.current||(m=d.currentTarget)==null||m.click()}),onKeyDown:g(e.onKeyDown,d=>{const m=u.searchRef.current!=="";n||m&&d.key===" "||re.includes(d.key)&&(d.currentTarget.click(),d.preventDefault())})})});Q.displayName=W;var qe=s.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:o=!1,textValue:a,...c}=e,i=de(W,n),u=Ve(n),p=s.useRef(null),v=K(t,p),[f,d]=s.useState(!1),[m,h]=s.useState("");return s.useEffect(()=>{const x=p.current;x&&h((x.textContent??"").trim())},[c.children]),r.jsx(G.ItemSlot,{scope:n,disabled:o,textValue:a??m,children:r.jsx(lt,{asChild:!0,...u,focusable:!o,children:r.jsx(N.div,{role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...c,ref:v,onPointerMove:g(e.onPointerMove,F(x=>{o?i.onItemLeave(x):(i.onItemEnter(x),x.defaultPrevented||x.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:g(e.onPointerLeave,F(x=>i.onItemLeave(x))),onFocus:g(e.onFocus,()=>d(!0)),onBlur:g(e.onBlur,()=>d(!1))})})})}),Gt="MenuCheckboxItem",Ze=s.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:o,...a}=e;return r.jsx(tn,{scope:e.__scopeMenu,checked:n,children:r.jsx(Q,{role:"menuitemcheckbox","aria-checked":q(n)?"mixed":n,...a,ref:t,"data-state":me(n),onSelect:g(a.onSelect,()=>o==null?void 0:o(q(n)?!0:!n),{checkForDefaultPrevented:!1})})})});Ze.displayName=Gt;var Je="MenuRadioGroup",[Ft,Kt]=D(Je,{value:void 0,onValueChange:()=>{}}),Qe=s.forwardRef((e,t)=>{const{value:n,onValueChange:o,...a}=e,c=se(o);return r.jsx(Ft,{scope:e.__scopeMenu,value:n,onValueChange:c,children:r.jsx(pe,{...a,ref:t})})});Qe.displayName=Je;var en="MenuRadioItem",nn=s.forwardRef((e,t)=>{const{value:n,...o}=e,a=Kt(en,e.__scopeMenu),c=n===a.value;return r.jsx(tn,{scope:e.__scopeMenu,checked:c,children:r.jsx(Q,{role:"menuitemradio","aria-checked":c,...o,ref:t,"data-state":me(c),onSelect:g(o.onSelect,()=>{var i;return(i=a.onValueChange)==null?void 0:i.call(a,n)},{checkForDefaultPrevented:!1})})})});nn.displayName=en;var fe="MenuItemIndicator",[tn,Ut]=D(fe,{checked:!1}),on=s.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:o,...a}=e,c=Ut(fe,n);return r.jsx(Z,{present:o||q(c.checked)||c.checked===!0,children:r.jsx(N.span,{...a,ref:t,"data-state":me(c.checked)})})});on.displayName=fe;var $t="MenuSeparator",rn=s.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return r.jsx(N.div,{role:"separator","aria-orientation":"horizontal",...o,ref:t})});rn.displayName=$t;var Bt="MenuArrow",an=s.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,a=J(n);return r.jsx(Jn,{...a,...o,ref:t})});an.displayName=Bt;var Vt="MenuSub",[Xo,sn]=D(Vt),L="MenuSubTrigger",cn=s.forwardRef((e,t)=>{const n=E(L,e.__scopeMenu),o=$(L,e.__scopeMenu),a=sn(L,e.__scopeMenu),c=de(L,e.__scopeMenu),i=s.useRef(null),{pointerGraceTimerRef:u,onPointerGraceIntentChange:p}=c,v={__scopeMenu:e.__scopeMenu},f=s.useCallback(()=>{i.current&&window.clearTimeout(i.current),i.current=null},[]);return s.useEffect(()=>f,[f]),s.useEffect(()=>{const d=u.current;return()=>{window.clearTimeout(d),p(null)}},[u,p]),r.jsx(ie,{asChild:!0,...v,children:r.jsx(qe,{id:a.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":a.contentId,"data-state":ln(n.open),...e,ref:ye(t,a.onTriggerChange),onClick:d=>{var m;(m=e.onClick)==null||m.call(e,d),!(e.disabled||d.defaultPrevented)&&(d.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:g(e.onPointerMove,F(d=>{c.onItemEnter(d),!d.defaultPrevented&&!e.disabled&&!n.open&&!i.current&&(c.onPointerGraceIntentChange(null),i.current=window.setTimeout(()=>{n.onOpenChange(!0),f()},100))})),onPointerLeave:g(e.onPointerLeave,F(d=>{var h,x;f();const m=(h=n.content)==null?void 0:h.getBoundingClientRect();if(m){const S=(x=n.content)==null?void 0:x.dataset.side,P=S==="right",T=P?-5:5,B=m[P?"left":"right"],V=m[P?"right":"left"];c.onPointerGraceIntentChange({area:[{x:d.clientX+T,y:d.clientY},{x:B,y:m.top},{x:V,y:m.top},{x:V,y:m.bottom},{x:B,y:m.bottom}],side:S}),window.clearTimeout(u.current),u.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(d),d.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:g(e.onKeyDown,d=>{var h;const m=c.searchRef.current!=="";e.disabled||m&&d.key===" "||Nt[o.dir].includes(d.key)&&(n.onOpenChange(!0),(h=n.content)==null||h.focus(),d.preventDefault())})})})});cn.displayName=L;var un="MenuSubContent",dn=s.forwardRef((e,t)=>{const n=Xe(C,e.__scopeMenu),{forceMount:o=n.forceMount,...a}=e,c=E(C,e.__scopeMenu),i=$(C,e.__scopeMenu),u=sn(un,e.__scopeMenu),p=s.useRef(null),v=K(t,p);return r.jsx(G.Provider,{scope:e.__scopeMenu,children:r.jsx(Z,{present:o||c.open,children:r.jsx(G.Slot,{scope:e.__scopeMenu,children:r.jsx(le,{id:u.contentId,"aria-labelledby":u.triggerId,...a,ref:v,align:"start",side:i.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var d;i.isUsingKeyboardRef.current&&((d=p.current)==null||d.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:g(e.onFocusOutside,f=>{f.target!==u.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:g(e.onEscapeKeyDown,f=>{i.onClose(),f.preventDefault()}),onKeyDown:g(e.onKeyDown,f=>{var h;const d=f.currentTarget.contains(f.target),m=bt[i.dir].includes(f.key);d&&m&&(c.onOpenChange(!1),(h=u.trigger)==null||h.focus(),f.preventDefault())})})})})})});dn.displayName=un;function ln(e){return e?"open":"closed"}function q(e){return e==="indeterminate"}function me(e){return q(e)?"indeterminate":e?"checked":"unchecked"}function zt(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function Xt(e,t){return e.map((n,o)=>e[(t+o)%e.length])}function Yt(e,t,n){const a=t.length>1&&Array.from(t).every(v=>v===t[0])?t[0]:t,c=n?e.indexOf(n):-1;let i=Xt(e,Math.max(c,0));a.length===1&&(i=i.filter(v=>v!==n));const p=i.find(v=>v.toLowerCase().startsWith(a.toLowerCase()));return p!==n?p:void 0}function Ht(e,t){const{x:n,y:o}=e;let a=!1;for(let c=0,i=t.length-1;c<t.length;i=c++){const u=t[c].x,p=t[c].y,v=t[i].x,f=t[i].y;p>o!=f>o&&n<(v-u)*(o-p)/(f-p)+u&&(a=!a)}return a}function Wt(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return Ht(n,t)}function F(e){return t=>t.pointerType==="mouse"?e(t):void 0}var qt=ze,Zt=ie,Jt=Ye,Qt=He,eo=pe,no=We,to=Q,oo=Ze,ro=Qe,ao=nn,so=on,co=rn,io=an,uo=cn,lo=dn,ve="DropdownMenu",[po,Yo]=ae(ve,[Be]),w=Be(),[fo,pn]=po(ve),fn=e=>{const{__scopeDropdownMenu:t,children:n,dir:o,open:a,defaultOpen:c,onOpenChange:i,modal:u=!0}=e,p=w(t),v=s.useRef(null),[f=!1,d]=at({prop:a,defaultProp:c,onChange:i});return r.jsx(fo,{scope:t,triggerId:Re(),triggerRef:v,contentId:Re(),open:f,onOpenChange:d,onOpenToggle:s.useCallback(()=>d(m=>!m),[d]),modal:u,children:r.jsx(qt,{...p,open:f,onOpenChange:d,dir:o,modal:u,children:n})})};fn.displayName=ve;var mn="DropdownMenuTrigger",vn=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:o=!1,...a}=e,c=pn(mn,n),i=w(n);return r.jsx(Zt,{asChild:!0,...i,children:r.jsx(N.button,{type:"button",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open,"aria-controls":c.open?c.contentId:void 0,"data-state":c.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...a,ref:ye(t,c.triggerRef),onPointerDown:g(e.onPointerDown,u=>{!o&&u.button===0&&u.ctrlKey===!1&&(c.onOpenToggle(),c.open||u.preventDefault())}),onKeyDown:g(e.onKeyDown,u=>{o||(["Enter"," "].includes(u.key)&&c.onOpenToggle(),u.key==="ArrowDown"&&c.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})});vn.displayName=mn;var mo="DropdownMenuPortal",gn=e=>{const{__scopeDropdownMenu:t,...n}=e,o=w(t);return r.jsx(Jt,{...o,...n})};gn.displayName=mo;var xn="DropdownMenuContent",hn=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=pn(xn,n),c=w(n),i=s.useRef(!1);return r.jsx(Qt,{id:a.contentId,"aria-labelledby":a.triggerId,...c,...o,ref:t,onCloseAutoFocus:g(e.onCloseAutoFocus,u=>{var p;i.current||(p=a.triggerRef.current)==null||p.focus(),i.current=!1,u.preventDefault()}),onInteractOutside:g(e.onInteractOutside,u=>{const p=u.detail.originalEvent,v=p.button===0&&p.ctrlKey===!0,f=p.button===2||v;(!a.modal||f)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});hn.displayName=xn;var vo="DropdownMenuGroup",wn=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=w(n);return r.jsx(eo,{...a,...o,ref:t})});wn.displayName=vo;var go="DropdownMenuLabel",Mn=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=w(n);return r.jsx(no,{...a,...o,ref:t})});Mn.displayName=go;var xo="DropdownMenuItem",Cn=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=w(n);return r.jsx(to,{...a,...o,ref:t})});Cn.displayName=xo;var ho="DropdownMenuCheckboxItem",_n=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=w(n);return r.jsx(oo,{...a,...o,ref:t})});_n.displayName=ho;var wo="DropdownMenuRadioGroup",Mo=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=w(n);return r.jsx(ro,{...a,...o,ref:t})});Mo.displayName=wo;var Co="DropdownMenuRadioItem",Rn=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=w(n);return r.jsx(ao,{...a,...o,ref:t})});Rn.displayName=Co;var _o="DropdownMenuItemIndicator",In=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=w(n);return r.jsx(so,{...a,...o,ref:t})});In.displayName=_o;var Ro="DropdownMenuSeparator",Nn=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=w(n);return r.jsx(co,{...a,...o,ref:t})});Nn.displayName=Ro;var Io="DropdownMenuArrow",No=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=w(n);return r.jsx(io,{...a,...o,ref:t})});No.displayName=Io;var bo="DropdownMenuSubTrigger",bn=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=w(n);return r.jsx(uo,{...a,...o,ref:t})});bn.displayName=bo;var yo="DropdownMenuSubContent",yn=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=w(n);return r.jsx(lo,{...a,...o,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});yn.displayName=yo;var So=fn,Do=vn,Eo=gn,Sn=hn,Po=wn,Dn=Mn,En=Cn,Pn=_n,jn=Rn,An=In,Tn=Nn,On=bn,kn=yn;const jo=So,Ao=Do,To=Po,Oo=s.forwardRef(({className:e,inset:t,children:n,...o},a)=>r.jsxs(On,{ref:a,className:_("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",t&&"pl-8",e),...o,children:[n,r.jsx(pt,{className:"ml-auto"})]}));Oo.displayName=On.displayName;const ko=s.forwardRef(({className:e,...t},n)=>r.jsx(kn,{ref:n,className:_("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));ko.displayName=kn.displayName;const Ln=s.forwardRef(({className:e,sideOffset:t=4,...n},o)=>r.jsx(Eo,{children:r.jsx(Sn,{ref:o,sideOffset:t,className:_("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));Ln.displayName=Sn.displayName;const ge=s.forwardRef(({className:e,inset:t,...n},o)=>r.jsx(En,{ref:o,className:_("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",t&&"pl-8",e),...n}));ge.displayName=En.displayName;const Lo=s.forwardRef(({className:e,children:t,checked:n,...o},a)=>r.jsxs(Pn,{ref:a,className:_("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...o,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(An,{children:r.jsx(st,{className:"h-4 w-4"})})}),t]}));Lo.displayName=Pn.displayName;const Go=s.forwardRef(({className:e,children:t,...n},o)=>r.jsxs(jn,{ref:o,className:_("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(An,{children:r.jsx(ft,{className:"h-2 w-2 fill-current"})})}),t]}));Go.displayName=jn.displayName;const Fo=s.forwardRef(({className:e,inset:t,...n},o)=>r.jsx(Dn,{ref:o,className:_("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...n}));Fo.displayName=Dn.displayName;const Gn=s.forwardRef(({className:e,...t},n)=>r.jsx(Tn,{ref:n,className:_("-mx-1 my-1 h-px bg-muted",e),...t}));Gn.displayName=Tn.displayName;const k=s.memo(e=>{const{Icon:t}=e;return r.jsxs(ge,{className:_(e.isActivePath&&"bg-muted"),children:[r.jsx(t,{}),e.name]})}),Ho=e=>{const t=ct(),n=it(),{children:o}=e;if(t)return r.jsxs(jo,{children:[r.jsx(Ao,{asChild:!0,children:r.jsxs("button",{type:"button",className:"flex items-center gap-2 flex-shrink-0",children:[r.jsxs(Fe,{className:"h-8 w-8 rounded-lg",children:[r.jsx(Ke,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),r.jsx(Ue,{className:"rounded-lg",children:"CN"})]}),r.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[r.jsx("span",{className:"truncate font-semibold",children:t.name}),r.jsx("span",{className:"truncate text-xs",children:"m@example.com"})]})]})}),r.jsxs(Ln,{className:"w-[max-content]",children:[o==null?void 0:o.map(a=>{var c;return r.jsxs(s.Fragment,{children:[r.jsx(To,{children:(c=a.children)==null?void 0:c.map(i=>{const u=ut(i.path,n.pathname);switch(i.path){case y.UPGRADE_TO_PRO:return r.jsx(H,{to:y.UPGRADE_TO_PRO,children:r.jsx(k,{isActivePath:u,Icon:ht,name:"Upgrade to pro"})},i.path);case y.BILLING:return r.jsx(H,{to:y.BILLING,children:r.jsx(k,{isActivePath:u,Icon:xt,name:"Billing"})},i.path);case De.GUIDED_TOUR:return r.jsx(k,{isActivePath:u,Icon:gt,name:"Guided tour"},i.path);case y.ACCOUNT:return r.jsx(H,{to:y.ACCOUNT,children:r.jsx(k,{isActivePath:u,Icon:vt,name:"Account"})},i.path);case y.NOTIFICATIONS:return r.jsx(H,{to:y.NOTIFICATIONS,children:r.jsx(k,{isActivePath:u,Icon:mt,name:"Notifications"})},i.path);default:return null}})}),r.jsx(Gn,{})]},a.path)}),r.jsxs(ge,{children:[r.jsx(wt,{}),"Log out"]})]})]})};export{Ho as NavUser};
