function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}function i(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,c,u){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(s){const r=i(n,e,o,u);t.p(r,s)}}function a(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function $(){return p("")}function m(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t){return Array.from(t.childNodes)}function x(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):h(n)}function _(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return p(n)}function v(t){return _(t," ")}function w(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let E;function k(t){E=t}function j(){if(!E)throw new Error("Function called outside component initialization");return E}function A(t){j().$$.on_mount.push(t)}function N(t){j().$$.after_update.push(t)}function O(t,n){j().$$.context.set(t,n)}const S=[],C=[],T=[],q=[],z=Promise.resolve();let B=!1;function F(t){T.push(t)}let L=!1;const M=new Set;function D(){if(!L){L=!0;do{for(let t=0;t<S.length;t+=1){const n=S[t];k(n),G(n.$$)}for(k(null),S.length=0;C.length;)C.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];M.has(n)||(M.add(n),n())}T.length=0}while(S.length);for(;q.length;)q.pop()();B=!1,L=!1,M.clear()}}function G(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}const H=new Set;let P;function I(){P={r:0,c:[],p:P}}function J(){P.r||r(P.c),P=P.p}function K(t,n){t&&t.i&&(H.delete(t),t.i(n))}function Q(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),P.c.push((()=>{H.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function R(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],s=n[c];if(s){for(const t in u)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in u)r[t]=1}for(const u in o)u in e||(e[u]=void 0);return e}function U(t){return"object"==typeof t&&null!==t?t:{}}function V(t){t&&t.c()}function W(t,n){t&&t.l(n)}function X(t,n,o,u){const{fragment:s,on_mount:i,on_destroy:f,after_update:a}=t.$$;s&&s.m(n,o),u||F((()=>{const n=i.map(e).filter(c);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(F)}function Y(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(t,n){-1===t.$$.dirty[0]&&(S.push(t),B||(B=!0,z.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function tt(n,e,c,u,s,i,f=[-1]){const a=E;k(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let h=!1;if(l.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&s(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),h&&Z(n,t)),e})):[],l.update(),h=!0,r(l.before_update),l.fragment=!!u&&u(l.ctx),e.target){if(e.hydrate){const t=y(e.target);l.fragment&&l.fragment.l(t),t.forEach(d)}else l.fragment&&l.fragment.c();e.intro&&K(n.$$.fragment),X(n,e.target,e.anchor,e.customElement),D()}k(a)}class nt{$destroy(){Y(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function ot(n,e=t){let o;const r=[];function c(t){if(u(n,t)&&(n=t,o)){const t=!et.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),et.push(t,n)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(u,s=t){const i=[u,s];return r.push(i),1===r.length&&(o=e(c)||t),u(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{N as A,A as B,I as C,J as D,s as E,f as F,ot as G,m as H,nt as S,g as a,y as b,x as c,_ as d,h as e,d as f,v as g,l as h,tt as i,a as j,w as k,n as l,b as m,t as n,V as o,$ as p,W as q,X as r,u as s,p as t,R as u,U as v,K as w,Q as x,Y as y,O as z};
