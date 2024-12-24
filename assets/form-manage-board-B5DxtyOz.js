import{c as O,r as l,u as Me,j as e,a as ee,b as De,d as z,e as re,f as Ge,g as k,h as oe,B as y,P as se,i as Oe,k as B,l as q,m as te,n as ne,o as Be,p as S,q as I,s as qe,t as Le,v as Ue,w as Ke,x as ae,C as w,L as H,I as L,S as Ve,y as $e,z as ze,A as He,D as ce,E as Qe,F as Ye,G as We,H as Je,J as Xe,T as Q,K as Y,M as W,N as F,O as J,Q as X,R as N,U as Ze,V as er,W as rr}from"./index-BY5cu3jy.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=O("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=O("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=O("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),ie=l.createContext({}),E=()=>l.useContext(ie),Z=r=>{const{fields:s,append:o,prepend:t,remove:c,swap:d,move:m,insert:i,replace:u,update:n}=Me({name:r.name}),a=l.useMemo(()=>({append:o,prepend:t,remove:c,swap:d,move:m,insert:i,replace:u,update:n}),[o,t,c,d,m,i,u,n]);return e.jsx(ie.Provider,{value:a,children:r.children({fields:s})})},nr=()=>{const r=ee(),s=l.useRef(null),o=De(),t=!!r,c=z({mutationFn:a=>k.createBoard(a),onSuccess:async()=>{var a;await o(),(a=s.current)==null||a.click()}}),d=z({mutationFn:a=>k.updateBoard({id:r,...a}),onSuccess:async()=>{var a;await o(),(a=s.current)==null||a.click()}}),{data:m,isPending:i}=re({queryKey:["manage-board",r],queryFn:async()=>{const a=await k.getBoard(r);return{title:a.title,description:a.description??"",columns:a.columns,project_access:a.project_access,board_access:a.board_access}},gcTime:0,enabled:t}),u=Ge({mode:"onChange",defaultValues:{title:"",description:"",project_access:[{user:void 0,role:void 0}],board_access:"open",columns:[{title:"TODO"},{title:"IN PROGRESS"},{title:"DONE"}]},values:m}),n=l.useCallback(a=>{t?d.mutate(a):c.mutate(a)},[c,t,d]);return{methodsForm:u,isPending:i,onSubmit:n,closeButtonRef:s,isMutating:c.isPending||d.isPending}},ar=r=>{const{append:s}=E(),{trigger:o}=oe();return e.jsxs(y,{variant:"outline",onClick:async()=>{const t=`columns.${r.lastIndex}.title`;await o([t])&&s({})},children:[e.jsx(se,{}),"Add"]})},cr=r=>{const{append:s}=E(),{trigger:o}=oe();return e.jsxs(y,{variant:"outline",onClick:async()=>{const t=`project_access.${r.lastIndex}.user`,c=`project_access.${r.lastIndex}.role`;await o([t,c])&&s({})},children:[e.jsx(se,{}),"Add"]})};var M="rovingFocusGroup.onEntryFocus",ir={bubbles:!1,cancelable:!0},_="RovingFocusGroup",[D,le,lr]=Oe(_),[dr,de]=B(_,[lr]),[ur,mr]=dr(_),ue=l.forwardRef((r,s)=>e.jsx(D.Provider,{scope:r.__scopeRovingFocusGroup,children:e.jsx(D.Slot,{scope:r.__scopeRovingFocusGroup,children:e.jsx(pr,{...r,ref:s})})}));ue.displayName=_;var pr=l.forwardRef((r,s)=>{const{__scopeRovingFocusGroup:o,orientation:t,loop:c=!1,dir:d,currentTabStopId:m,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:n,preventScrollOnEntryFocus:a=!1,...f}=r,x=l.useRef(null),h=q(s,x),p=te(d),[v=null,j]=ne({prop:m,defaultProp:i,onChange:u}),[R,b]=l.useState(!1),A=Be(n),ke=le(o),P=l.useRef(!1),[Ee,V]=l.useState(0);return l.useEffect(()=>{const g=x.current;if(g)return g.addEventListener(M,A),()=>g.removeEventListener(M,A)},[A]),e.jsx(ur,{scope:o,orientation:t,dir:p,loop:c,currentTabStopId:v,onItemFocus:l.useCallback(g=>j(g),[j]),onItemShiftTab:l.useCallback(()=>b(!0),[]),onFocusableItemAdd:l.useCallback(()=>V(g=>g+1),[]),onFocusableItemRemove:l.useCallback(()=>V(g=>g-1),[]),children:e.jsx(S.div,{tabIndex:R||Ee===0?-1:0,"data-orientation":t,...f,ref:h,style:{outline:"none",...r.style},onMouseDown:I(r.onMouseDown,()=>{P.current=!0}),onFocus:I(r.onFocus,g=>{const _e=!P.current;if(g.target===g.currentTarget&&_e&&!R){const $=new CustomEvent(M,ir);if(g.currentTarget.dispatchEvent($),!$.defaultPrevented){const T=ke().filter(C=>C.focusable),Ae=T.find(C=>C.active),Pe=T.find(C=>C.id===v),Te=[Ae,Pe,...T].filter(Boolean).map(C=>C.ref.current);fe(Te,a)}}P.current=!1}),onBlur:I(r.onBlur,()=>b(!1))})})}),me="RovingFocusGroupItem",pe=l.forwardRef((r,s)=>{const{__scopeRovingFocusGroup:o,focusable:t=!0,active:c=!1,tabStopId:d,...m}=r,i=qe(),u=d||i,n=mr(me,o),a=n.currentTabStopId===u,f=le(o),{onFocusableItemAdd:x,onFocusableItemRemove:h}=n;return l.useEffect(()=>{if(t)return x(),()=>h()},[t,x,h]),e.jsx(D.ItemSlot,{scope:o,id:u,focusable:t,active:c,children:e.jsx(S.span,{tabIndex:a?0:-1,"data-orientation":n.orientation,...m,ref:s,onMouseDown:I(r.onMouseDown,p=>{t?n.onItemFocus(u):p.preventDefault()}),onFocus:I(r.onFocus,()=>n.onItemFocus(u)),onKeyDown:I(r.onKeyDown,p=>{if(p.key==="Tab"&&p.shiftKey){n.onItemShiftTab();return}if(p.target!==p.currentTarget)return;const v=hr(p,n.orientation,n.dir);if(v!==void 0){if(p.metaKey||p.ctrlKey||p.altKey||p.shiftKey)return;p.preventDefault();let R=f().filter(b=>b.focusable).map(b=>b.ref.current);if(v==="last")R.reverse();else if(v==="prev"||v==="next"){v==="prev"&&R.reverse();const b=R.indexOf(p.currentTarget);R=n.loop?vr(R,b+1):R.slice(b+1)}setTimeout(()=>fe(R))}})})})});pe.displayName=me;var fr={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function xr(r,s){return s!=="rtl"?r:r==="ArrowLeft"?"ArrowRight":r==="ArrowRight"?"ArrowLeft":r}function hr(r,s,o){const t=xr(r.key,o);if(!(s==="vertical"&&["ArrowLeft","ArrowRight"].includes(t))&&!(s==="horizontal"&&["ArrowUp","ArrowDown"].includes(t)))return fr[t]}function fe(r,s=!1){const o=document.activeElement;for(const t of r)if(t===o||(t.focus({preventScroll:s}),document.activeElement!==o))return}function vr(r,s){return r.map((o,t)=>r[(s+t)%r.length])}var gr=ue,jr=pe,U="Radio",[Rr,xe]=B(U),[br,Ir]=Rr(U),he=l.forwardRef((r,s)=>{const{__scopeRadio:o,name:t,checked:c=!1,required:d,disabled:m,value:i="on",onCheck:u,form:n,...a}=r,[f,x]=l.useState(null),h=q(s,j=>x(j)),p=l.useRef(!1),v=f?n||!!f.closest("form"):!0;return e.jsxs(br,{scope:o,checked:c,disabled:m,children:[e.jsx(S.button,{type:"button",role:"radio","aria-checked":c,"data-state":je(c),"data-disabled":m?"":void 0,disabled:m,value:i,...a,ref:h,onClick:I(r.onClick,j=>{c||u==null||u(),v&&(p.current=j.isPropagationStopped(),p.current||j.stopPropagation())})}),v&&e.jsx(Cr,{control:f,bubbles:!p.current,name:t,value:i,checked:c,required:d,disabled:m,form:n,style:{transform:"translateX(-100%)"}})]})});he.displayName=U;var ve="RadioIndicator",ge=l.forwardRef((r,s)=>{const{__scopeRadio:o,forceMount:t,...c}=r,d=Ir(ve,o);return e.jsx(Le,{present:t||d.checked,children:e.jsx(S.span,{"data-state":je(d.checked),"data-disabled":d.disabled?"":void 0,...c,ref:s})})});ge.displayName=ve;var Cr=r=>{const{control:s,checked:o,bubbles:t=!0,...c}=r,d=l.useRef(null),m=Ue(o),i=Ke(s);return l.useEffect(()=>{const u=d.current,n=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(n,"checked").set;if(m!==o&&f){const x=new Event("click",{bubbles:t});f.call(u,o),u.dispatchEvent(x)}},[m,o,t]),e.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:o,...c,tabIndex:-1,ref:d,style:{...r.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function je(r){return r?"checked":"unchecked"}var yr=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],K="RadioGroup",[wr,Vr]=B(K,[de,xe]),Re=de(),be=xe(),[Fr,Nr]=wr(K),Ie=l.forwardRef((r,s)=>{const{__scopeRadioGroup:o,name:t,defaultValue:c,value:d,required:m=!1,disabled:i=!1,orientation:u,dir:n,loop:a=!0,onValueChange:f,...x}=r,h=Re(o),p=te(n),[v,j]=ne({prop:d,defaultProp:c,onChange:f});return e.jsx(Fr,{scope:o,name:t,required:m,disabled:i,value:v,onValueChange:j,children:e.jsx(gr,{asChild:!0,...h,orientation:u,dir:p,loop:a,children:e.jsx(S.div,{role:"radiogroup","aria-required":m,"aria-orientation":u,"data-disabled":i?"":void 0,dir:p,...x,ref:s})})})});Ie.displayName=K;var Ce="RadioGroupItem",ye=l.forwardRef((r,s)=>{const{__scopeRadioGroup:o,disabled:t,...c}=r,d=Nr(Ce,o),m=d.disabled||t,i=Re(o),u=be(o),n=l.useRef(null),a=q(s,n),f=d.value===c.value,x=l.useRef(!1);return l.useEffect(()=>{const h=v=>{yr.includes(v.key)&&(x.current=!0)},p=()=>x.current=!1;return document.addEventListener("keydown",h),document.addEventListener("keyup",p),()=>{document.removeEventListener("keydown",h),document.removeEventListener("keyup",p)}},[]),e.jsx(jr,{asChild:!0,...i,focusable:!m,active:f,children:e.jsx(he,{disabled:m,required:d.required,checked:f,...u,...c,name:d.name,ref:a,onCheck:()=>d.onValueChange(c.value),onKeyDown:I(h=>{h.key==="Enter"&&h.preventDefault()}),onFocus:I(c.onFocus,()=>{var h;x.current&&((h=n.current)==null||h.click())})})})});ye.displayName=Ce;var Sr="RadioGroupIndicator",we=l.forwardRef((r,s)=>{const{__scopeRadioGroup:o,...t}=r,c=be(o);return e.jsx(ge,{...c,...t,ref:s})});we.displayName=Sr;var Fe=Ie,Ne=ye,kr=we;const Se=l.forwardRef(({className:r,...s},o)=>e.jsx(Fe,{className:ae("grid gap-2",r),...s,ref:o}));Se.displayName=Fe.displayName;const G=l.forwardRef(({className:r,...s},o)=>e.jsx(Ne,{ref:o,className:ae("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),...s,children:e.jsx(kr,{className:"flex items-center justify-center",children:e.jsx(or,{className:"h-3.5 w-3.5 fill-primary"})})}));G.displayName=Ne.displayName;const Er=()=>e.jsx(w,{name:"board_access",render:({field:r})=>e.jsxs(Se,{value:r.value,onValueChange:r.onChange,children:[e.jsx("div",{className:"text font-bold",children:"Access"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(G,{value:"open",id:"open"}),e.jsxs(H,{className:"flex items-center gap-x-2",htmlFor:"open",children:[e.jsx(sr,{className:"h-[1.25rem] w-[1.25rem]"}),"Open"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(G,{value:"private",id:"private"}),e.jsxs(H,{className:"flex items-center gap-x-2",htmlFor:"private",children:[e.jsx(tr,{className:"h-[1.25rem] w-[1.25rem]"}),"Private"]})]})]})}),_r=r=>e.jsx(w,{name:r.name,rules:{required:"Column name is required"},render:({field:s,fieldState:o})=>{var t;return e.jsx(L,{value:s.value,onChange:s.onChange,placeholder:"Column name...",error:(t=o.error)==null?void 0:t.message})}}),Ar=()=>e.jsx(w,{name:"description",render:({field:r})=>e.jsx("div",{className:"grid gap-2",children:e.jsx(L,{id:"description",type:"text",label:"Description",placeholder:"Description",required:!0,...r})})}),Pr=()=>e.jsx(w,{name:"title",rules:{required:"Title is required"},render:({field:r,fieldState:s})=>{var o;return e.jsx(L,{type:"text",placeholder:"Title",label:"Title",required:!0,...r,error:(o=s.error)==null?void 0:o.message})}}),Tr=l.memo(Pr),Mr=r=>{const{remove:s}=E();return r.isSingle?null:e.jsx(y,{size:"sm",variant:"link",onClick:()=>s(r.index),children:"Remove"})},Dr=r=>{const{remove:s}=E();return r.isSingle?null:e.jsx(y,{size:"sm",variant:"link",onClick:()=>s(r.index),children:"Remove"})},Gr="manage-roles",Or=()=>({queryKey:[Gr],queryFn:()=>k.getManageRoles()}),Br=r=>{const{className:s,onChange:o,value:t,error:c}=r,[d,m]=l.useState(!1),{data:i,isPending:u}=re({...Or(),enabled:d});return e.jsxs(Ve,{error:c,onOpenChange:m,onValueChange:n=>{const a=i==null?void 0:i.find(f=>f.id===n);a&&o(a)},children:[e.jsx($e,{className:s,isError:!!c,children:e.jsx(ze,{placeholder:(t==null?void 0:t.name)||"Role..."})}),e.jsxs(He,{children:[u&&Array.from({length:5},(n,a)=>e.jsx(ce,{className:"h-[1.5rem] mb-[0.2rem] rounded"},a)),i==null?void 0:i.map(n=>e.jsx(Qe,{value:n.id,onClick:()=>o(n),children:n.name},n.id))]})]})},qr=r=>!!Ye({name:r.formUserName})&&e.jsx(w,{name:r.name,rules:{required:"Role is required"},render:({field:o,fieldState:t})=>{var c;return e.jsx(Br,{value:o.value,onChange:o.onChange,error:(c=t.error)==null?void 0:c.message})}}),Lr=r=>e.jsx(w,{name:r.name,rules:{required:"User is required"},render:({field:s,fieldState:o})=>{var t;return e.jsx(We,{value:s.value,onChange:s.onChange,error:(t=o.error)==null?void 0:t.message})}}),$r=()=>{const s=!!ee(),{methodsForm:o,isPending:t,onSubmit:c,isMutating:d,closeButtonRef:m}=nr();return e.jsxs(Je,{...o,children:[e.jsxs(Xe,{className:"grid gap-6",children:[s&&t&&Array.from({length:8},(i,u)=>e.jsx(ce,{className:"h-[3.5rem] w-full"},u)),(s?!t:!0)&&e.jsxs(e.Fragment,{children:[e.jsx(Tr,{}),e.jsx(Ar,{}),e.jsx(Er,{}),e.jsx(Z,{name:"project_access",children:({fields:i})=>e.jsxs("div",{children:[e.jsx(Q,{className:"mb-2 h-auto p-0 shadow-[none]",children:e.jsxs(Y,{children:[e.jsxs(W,{children:[e.jsx(F,{className:"w-[50%]",children:"Name"}),e.jsx(F,{className:"w-[50%]",children:"Role"}),e.jsx(F,{className:"min-w-[5rem]"})]}),e.jsx(J,{children:i.map((u,n)=>{const a=`project_access.${n}.user`,f=`project_access.${n}.role`,x=i.length===1;return e.jsxs(X,{id:u.id,children:[e.jsx(N,{children:e.jsx(Lr,{name:a})}),e.jsx(N,{children:e.jsx(qr,{name:f,formUserName:a})}),e.jsx(N,{children:e.jsx(Dr,{index:n,isSingle:x})})]},u.id)})})]})}),e.jsx(cr,{lastIndex:i.length-1})]})}),e.jsx(Z,{name:"columns",children:({fields:i})=>e.jsxs("div",{children:[e.jsx("div",{className:"text font-bold",children:"Columns"}),e.jsx(Q,{className:"mb-2 h-auto p-0 shadow-[none]",children:e.jsxs(Y,{children:[e.jsxs(W,{children:[e.jsx(F,{className:"w-full",children:"Column name"}),e.jsx(F,{className:"min-w-[5rem]"})]}),e.jsx(J,{children:i.map((u,n)=>{const a=`columns.${n}.title`,f=i.length===1;return e.jsxs(X,{id:u.id,children:[e.jsx(N,{children:e.jsx(_r,{name:a})}),e.jsx(N,{children:e.jsx(Mr,{index:n,isSingle:f})})]},u.id)})})]})}),e.jsx(ar,{lastIndex:i.length-1})]})})]})]}),e.jsxs(Ze,{children:[e.jsxs(y,{disabled:d,onClick:o.handleSubmit(c),children:[d&&e.jsx(er,{className:"stroke-white"}),s?"Update":"Create"]}),e.jsx(rr,{asChild:!0,ref:m,children:e.jsx(y,{variant:"outline",children:"Cancel"})})]})]})};export{$r as default};