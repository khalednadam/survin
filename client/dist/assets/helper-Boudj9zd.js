import{e as y,J as j,i as O,W as P,X as q,z as A,q as L,D as k,p as D,d as G}from"./index-Co2dN-DA.js";function T(e){return P()?(q(e),!0):!1}function g(e){return typeof e=="function"?e():O(e)}const w=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const R=Object.prototype.toString,z=e=>R.call(e)==="[object Object]",B=()=>{};function F(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const r=t;t=void 0,r&&await r},n}function I(e,t,n={}){const{immediate:r=!0}=n,a=y(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function c(){a.value=!1,s()}function p(...l){s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...l)},g(t))}return r&&(a.value=!0,w&&p()),T(c),{isPending:j(a),start:p,stop:c}}function J(e){var t;const n=g(e);return(t=n==null?void 0:n.$el)!=null?t:n}const N=w?window:void 0,x=w?window.navigator:void 0;function E(...e){let t,n,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,a]=e,t=N):[t,n,r,a]=e,!t)return B;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],s=()=>{o.forEach(u=>u()),o.length=0},c=(u,f,v,m)=>(u.addEventListener(f,v,m),()=>u.removeEventListener(f,v,m)),p=L(()=>[J(t),g(a)],([u,f])=>{if(s(),!u)return;const v=z(f)?{...f}:f;o.push(...n.flatMap(m=>r.map(b=>c(u,m,b,v))))},{immediate:!0,flush:"post"}),l=()=>{p(),s()};return T(l),l}function V(){const e=y(!1),t=k();return t&&D(()=>{e.value=!0},t),e}function W(e){const t=V();return A(()=>(t.value,!!e()))}function C(e,t={}){const{controls:n=!1,navigator:r=x}=t,a=W(()=>r&&"permissions"in r);let o;const s=typeof e=="string"?{name:e}:e,c=y(),p=()=>{o&&(c.value=o.state)},l=F(async()=>{if(a.value){if(!o)try{o=await r.permissions.query(s),E(o,"change",p),p()}catch{c.value="prompt"}return o}});return l(),n?{state:c,isSupported:a,query:l}:c}function $(e={}){const{navigator:t=x,read:n=!1,source:r,copiedDuring:a=1500,legacy:o=!1}=e,s=W(()=>t&&"clipboard"in t),c=C("clipboard-read"),p=C("clipboard-write"),l=A(()=>s.value||o),u=y(""),f=y(!1),v=I(()=>f.value=!1,a);function m(){s.value&&S(c.value)?t.clipboard.readText().then(i=>{u.value=i}):u.value=M()}l.value&&n&&E(["copy","cut"],m);async function b(i=g(r)){l.value&&i!=null&&(s.value&&S(p.value)?await t.clipboard.writeText(i):_(i),u.value=i,f.value=!0,v.start())}function _(i){const d=document.createElement("textarea");d.value=i??"",d.style.position="absolute",d.style.opacity="0",document.body.appendChild(d),d.select(),document.execCommand("copy"),d.remove()}function M(){var i,d,h;return(h=(d=(i=document==null?void 0:document.getSelection)==null?void 0:i.call(document))==null?void 0:d.toString())!=null?h:""}function S(i){return i==="granted"||i==="prompt"}return{isSupported:l,text:u,copied:f,copy:b}}G();export{$ as u};