import{r as l,j as t,P as u,l as i,ac as f,ad as m}from"./index-1EszKwq-.js";var x="Label",n=l.forwardRef((a,r)=>t.jsx(u.label,{...a,ref:r,onMouseDown:e=>{var s;e.target.closest("button, input, select, textarea")||((s=a.onMouseDown)==null||s.call(a,e),!e.defaultPrevented&&e.detail>1&&e.preventDefault())}}));n.displayName=x;var d=n;const b=f("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=l.forwardRef(({className:a,...r},e)=>t.jsx(d,{ref:e,className:i(b(),a),...r}));c.displayName=d.displayName;const g=l.forwardRef(({className:a,type:r,...e},o)=>{const s=l.useId();return t.jsxs("div",{className:"grid gap-1",children:[e.label&&t.jsx(c,{htmlFor:s,children:e.label}),t.jsx("input",{type:r,className:i("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a,e.error&&"border-destructive"),ref:o,...e,id:s}),e.error&&t.jsx(m,{children:e.error})]})});g.displayName="Input";const w=({children:a,className:r})=>t.jsx("main",{className:i("flex flex-col flex-1 gap-6",r),children:a});export{g as I,c as L,w as M};