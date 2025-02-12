/*! For license information please see f67ae7a8.5efe2d41.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58204],{23911:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"api/puppeteer.connectoptions","title":"ConnectOptions interface","description":"Generic browser options that can be passed when launching any browser or when connecting to an existing browser instance.","source":"@site/versioned_docs/version-24.2.0/api/puppeteer.connectoptions.md","sourceDirName":"api","slug":"/api/puppeteer.connectoptions","permalink":"/api/puppeteer.connectoptions","draft":false,"unlisted":false,"tags":[],"version":"24.2.0","frontMatter":{"sidebar_label":"ConnectOptions"},"sidebar":"api","previous":{"title":"ConnectionTransport.send","permalink":"/api/puppeteer.connectiontransport.send"},"next":{"title":"ConsoleMessageLocation","permalink":"/api/puppeteer.consolemessagelocation"}}');var s=r(74848),t=r(28453);const d={sidebar_label:"ConnectOptions"},c="ConnectOptions interface",o={},l=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"connectoptions-interface",children:"ConnectOptions interface"})}),"\n",(0,s.jsx)(n.p,{children:"Generic browser options that can be passed when launching any browser or when connecting to an existing browser instance."}),"\n",(0,s.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"export interface ConnectOptions\n"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Description"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Default"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"acceptinsecurecerts",children:"acceptInsecureCerts"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Whether to ignore HTTPS errors during navigation."})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"browserurl",children:"browserURL"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"string"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"browserwsendpoint",children:"browserWSEndpoint"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"string"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"capabilities",children:"capabilities"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/puppeteer.supportedwebdrivercapabilities",children:"SupportedWebDriverCapabilities"})})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["WebDriver BiDi capabilities passed to BiDi ",(0,s.jsx)(n.code,{children:"session.new"}),"."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Remarks:"})}),(0,s.jsxs)(n.p,{children:["Only works for ",(0,s.jsx)(n.code,{children:'protocol="webDriverBiDi"'})," and ",(0,s.jsx)(n.a,{href:"/api/puppeteer.puppeteer.connect",children:"Puppeteer.connect()"}),"."]})]}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"defaultviewport",children:"defaultViewport"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/puppeteer.viewport",children:"Viewport"})," | null"]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Sets the viewport for each page."})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"'{width: 800, height: 600}'"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"downloadbehavior",children:"downloadBehavior"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/puppeteer.downloadbehavior",children:"DownloadBehavior"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Sets the download behavior for the context."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"headers",children:"headers"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Record<string, string>"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"Headers to use for the web socket connection."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Remarks:"})}),(0,s.jsx)(n.p,{children:"Only works in the Node.js environment."})]}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"protocol",children:"protocol"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/puppeteer.protocoltype",children:"ProtocolType"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"Determined at run time:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Launching Chrome - 'cdp'."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Launching Firefox - 'webDriverBiDi'."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Connecting to a browser - 'cdp'."}),"\n"]}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"protocoltimeout",children:"protocolTimeout"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"number"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Timeout setting for individual protocol (CDP) calls."})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"180_000"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"slowmo",children:"slowMo"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"number"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Slows down Puppeteer operations by the specified amount of milliseconds to aid debugging."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"targetfilter",children:"targetFilter"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/puppeteer.targetfiltercallback",children:"TargetFilterCallback"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Callback to decide if Puppeteer should connect to a given target or not."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"transport",children:"transport"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/puppeteer.connectiontransport",children:"ConnectionTransport"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21020:(e,n,r)=>{var i=r(96540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var i,t={},l=null,p=null;for(i in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)d.call(n,i)&&!o.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:s,type:e,key:l,ref:p,props:t,_owner:c.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var i=r(96540);const s={},t=i.createContext(s);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);