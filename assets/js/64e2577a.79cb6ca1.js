/*! For license information please see 64e2577a.79cb6ca1.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70024],{49967:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/puppeteer.page.evaluateonnewdocument","title":"Page.evaluateOnNewDocument() method","description":"Adds a function which would be invoked in one of the following scenarios:","source":"@site/versioned_docs/version-24.2.0/api/puppeteer.page.evaluateonnewdocument.md","sourceDirName":"api","slug":"/api/puppeteer.page.evaluateonnewdocument","permalink":"/api/puppeteer.page.evaluateonnewdocument","draft":false,"unlisted":false,"tags":[],"version":"24.2.0","frontMatter":{"sidebar_label":"Page.evaluateOnNewDocument"},"sidebar":"api","previous":{"title":"Page.evaluateHandle","permalink":"/api/puppeteer.page.evaluatehandle"},"next":{"title":"Page.exposeFunction","permalink":"/api/puppeteer.page.exposefunction"}}');var a=t(74848),s=t(28453);const i={sidebar_label:"Page.evaluateOnNewDocument"},o="Page.evaluateOnNewDocument() method",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"pageevaluateonnewdocument-method",children:"Page.evaluateOnNewDocument() method"})}),"\n",(0,a.jsx)(n.p,{children:"Adds a function which would be invoked in one of the following scenarios:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"whenever the page is navigated"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"whenever the child frame is attached or navigated. In this case, the function is invoked in the context of the newly attached frame."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The function is invoked after the document was created but before any of its scripts were run. This is useful to amend the JavaScript environment, e.g. to seed ",(0,a.jsx)(n.code,{children:"Math.random"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract evaluateOnNewDocument<\n    Params extends unknown[],\n    Func extends (...args: Params) => unknown = (...args: Params) => unknown,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<NewDocumentScriptEvaluation>;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Description"})})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"pageFunction"})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"Func | string"})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"Function to be evaluated in browser context"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"args"})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"Params"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(n.p,{children:["Arguments to pass to ",(0,a.jsx)(n.code,{children:"pageFunction"})]})})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(n.p,{children:["Promise<",(0,a.jsx)(n.a,{href:"/api/puppeteer.newdocumentscriptevaluation",children:"NewDocumentScriptEvaluation"}),">"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"An example of overriding the navigator.languages property before the page loads:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// preload.js\n\n// overwrite the `languages` property to use a custom getter\nObject.defineProperty(navigator, 'languages', {\n  get: function () {\n    return ['en-US', 'en', 'bn'];\n  },\n});\n\n// In your puppeteer script, assuming the preload.js file is\n// in same folder of our script.\nconst preloadFile = fs.readFileSync('./preload.js', 'utf8');\nawait page.evaluateOnNewDocument(preloadFile);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var r=t(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);