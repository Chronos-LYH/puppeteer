"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={},s="Chrome Extensions",p={unversionedId:"guides/chrome-extensions",id:"version-19.7.0/guides/chrome-extensions",title:"Chrome Extensions",description:"Puppeteer can be used for testing Chrome Extensions.",source:"@site/versioned_docs/version-19.7.0/guides/chrome-extensions.md",sourceDirName:"guides",slug:"/guides/chrome-extensions",permalink:"/guides/chrome-extensions",draft:!1,tags:[],version:"19.7.0",frontMatter:{},sidebar:"docs",previous:{title:"Request Interception",permalink:"/guides/request-interception"},next:{title:"Debugging",permalink:"/guides/debugging"}},c={},u=[],l={toc:u};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"chrome-extensions"}),"Chrome Extensions"),(0,r.kt)("p",null,"Puppeteer can be used for testing Chrome Extensions."),(0,r.kt)("admonition",o({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"Extensions in Chrome/Chromium currently only work in non-headless mode and\nexperimental Chrome headless mode.")),(0,r.kt)("p",null,"The following is code for getting a handle to the\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://developer.chrome.com/extensions/background_pages"}),"background page")," of\nan extension whose source is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"./my-extension"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"import puppeteer from 'puppeteer';\nimport path from 'path';\n\n(async () => {\n  const pathToExtension = path.join(process.cwd(), 'my-extension');\n  const browser = await puppeteer.launch({\n    headless: 'chrome',\n    args: [\n      `--disable-extensions-except=${pathToExtension}`,\n      `--load-extension=${pathToExtension}`,\n    ],\n  });\n  const backgroundPageTarget = await browser.waitForTarget(\n    target => target.type() === 'background_page'\n  );\n  const backgroundPage = await backgroundPageTarget.page();\n  // Test the background page as you would any other page.\n  await browser.close();\n})();\n")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Chrome Manifest V3 extensions have a background ServiceWorker of type\n'service_worker', instead of a page of type 'background_page'.")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"It is not yet possible to test extension popups or content scripts.")))}m.isMDXComponent=!0}}]);