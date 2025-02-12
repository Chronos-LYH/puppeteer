/*! For license information please see 49f7d348.b021556f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6604],{94182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api/puppeteer.frame.select","title":"Frame.select() method","description":"Selects a set of value on the first ` element that matches the selector`.","source":"@site/../docs/api/puppeteer.frame.select.md","sourceDirName":"api","slug":"/api/puppeteer.frame.select","permalink":"/next/api/puppeteer.frame.select","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Frame.select"},"sidebar":"api","previous":{"title":"Frame.parentFrame","permalink":"/next/api/puppeteer.frame.parentframe"},"next":{"title":"Frame.setContent","permalink":"/next/api/puppeteer.frame.setcontent"}}');var n=r(74848),l=r(28453);const c={sidebar_label:"Frame.select"},i="Frame.select() method",a={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"frameselect-method",children:"Frame.select() method"})}),"\n",(0,n.jsxs)(t.p,{children:["Selects a set of value on the first ",(0,n.jsx)(t.code,{children:"<select>"})," element that matches the ",(0,n.jsx)(t.code,{children:"selector"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  select(selector: string, ...values: string[]): Promise<string[]>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"The selector to query for."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"values"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"string[]"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["The array of values to select. If the ",(0,n.jsx)(t.code,{children:"<select>"})," has the ",(0,n.jsx)(t.code,{children:"multiple"})," attribute, all values are considered, otherwise only the first one is taken into account."]})})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<string[]>"}),"\n",(0,n.jsx)(t.p,{children:"the list of values that were successfully selected."}),"\n",(0,n.jsx)(t.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,n.jsxs)(t.p,{children:["Throws if there's no ",(0,n.jsx)(t.code,{children:"<select>"})," matching ",(0,n.jsx)(t.code,{children:"selector"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"frame.select('select#colors', 'blue'); // single selection\nframe.select('select#colors', 'red', 'green', 'blue'); // multiple selections\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},21020:(e,t,r)=>{var s=r(96540),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var s,l={},o=null,d=null;for(s in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,s)&&!a.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:n,type:e,key:o,ref:d,props:l,_owner:i.current}}t.Fragment=l,t.jsx=o,t.jsxs=o},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var s=r(96540);const n={},l=s.createContext(n);function c(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);