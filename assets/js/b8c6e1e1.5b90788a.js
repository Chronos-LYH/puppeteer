/*! For license information please see b8c6e1e1.5b90788a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76974],{81574:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/puppeteer.cdpsession","title":"CDPSession class","description":"The CDPSession instances are used to talk raw Chrome Devtools Protocol.","source":"@site/../docs/api/puppeteer.cdpsession.md","sourceDirName":"api","slug":"/api/puppeteer.cdpsession","permalink":"/next/api/puppeteer.cdpsession","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"CDPSession"},"sidebar":"api","previous":{"title":"Target.worker","permalink":"/next/api/puppeteer.target.worker"},"next":{"title":"CDPSession.connection","permalink":"/next/api/puppeteer.cdpsession.connection"}}');var r=n(74848),i=n(28453);const o={sidebar_label:"CDPSession"},c="CDPSession class",a={},d=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"cdpsession-class",children:"CDPSession class"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"CDPSession"})," instances are used to talk raw Chrome Devtools Protocol."]}),"\n",(0,r.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"export declare abstract class CDPSession extends EventEmitter<CDPSessionEvents>\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Extends:"})," ",(0,r.jsx)(s.a,{href:"/next/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,r.jsx)(s.a,{href:"/next/api/puppeteer.cdpsessionevents",children:"CDPSessionEvents"}),">"]}),"\n",(0,r.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(s.p,{children:["Protocol methods can be called with ",(0,r.jsx)(s.a,{href:"/next/api/puppeteer.cdpsession.send",children:"CDPSession.send()"})," method and protocol events can be subscribed to with ",(0,r.jsx)(s.code,{children:"CDPSession.on"})," method."]}),"\n",(0,r.jsxs)(s.p,{children:["Useful links: ",(0,r.jsx)(s.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"DevTools Protocol Viewer"})," and ",(0,r.jsx)(s.a,{href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md",children:"Getting Started with DevTools Protocol"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.jsx)(s.code,{children:"CDPSession"})," class."]}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const client = await page.createCDPSession();\nawait client.send('Animation.enable');\nclient.on('Animation.animationCreated', () =>\n  console.log('Animation created!'),\n);\nconst response = await client.send('Animation.getPlaybackRate');\nconsole.log('playback rate is ' + response.playbackRate);\nawait client.send('Animation.setPlaybackRate', {\n  playbackRate: response.playbackRate / 2,\n});\n"})}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Method"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"connection",children:(0,r.jsx)(s.a,{href:"/next/api/puppeteer.cdpsession.connection",children:"connection()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"detach",children:(0,r.jsx)(s.a,{href:"/next/api/puppeteer.cdpsession.detach",children:"detach()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"Detaches the cdpSession from the target. Once detached, the cdpSession object won't emit any events and can't be used to send messages."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"id",children:(0,r.jsx)(s.a,{href:"/next/api/puppeteer.cdpsession.id",children:"id()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"Returns the session's id."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"send",children:(0,r.jsx)(s.a,{href:"/next/api/puppeteer.cdpsession.send",children:"send(method, params, options)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},21020:(e,s,n)=>{var t=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var t,i={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)o.call(s,t)&&!a.hasOwnProperty(t)&&(i[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===i[t]&&(i[t]=s[t]);return{$$typeof:r,type:e,key:d,ref:l,props:i,_owner:c.current}}s.Fragment=i,s.jsx=d,s.jsxs=d},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var t=n(96540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);