!function(e){function t(t){for(var r,c,l=t[0],u=t[1],i=t[2],d=0,s=[];d<l.length;d++)c=l[d],a[c]&&s.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(p&&p(t);s.length;)s.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={1:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var p=u;o.push([37,0]),n()}({37:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(21),c=n(20),l=n(19),u=n.n(l),i=n(6),p=u()({loader:function(){return n.e(0).then(n.bind(null,22))},delay:5e3,loading:function(){return a.a.createElement("div",{style:{background:"aqua",width:"100px",height:"100px"}},"Loading...")}}),d=document.createElement("div");d.setAttribute("id","dynamic-react-root"),d.setAttribute("style","height: 100%; margin: 0;"),document.body.appendChild(d),Object(o.render)(a.a.createElement(function(){return a.a.createElement(i.a,null,a.a.createElement("div",null,a.a.createElement("a",{href:"/async"},"Hard redirect to /async"),a.a.createElement("br",null),a.a.createElement("a",{href:"/"},"Hard redirect to /"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{exact:!0,path:"/",component:c.a}),a.a.createElement(i.b,{path:"/async",component:p})))},null),d)}});