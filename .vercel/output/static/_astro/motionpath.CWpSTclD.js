import{E as l,aa as y,ac as p,K as S,ad as v}from"./position.CnCwDA14.js";/**
 * Anime.js - svg - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const T=n=>{const t=l(n)[0];return!t||!y(t)?console.warn(`${n} is not a valid SVGGeometryElement`):t};/**
 * Anime.js - svg - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const m=(n,s,t,c,o)=>{const a=t+c,e=o?Math.max(0,Math.min(a,s)):(a%s+s)%s;return n.getPointAtLength(e)},u=(n,s,t=0)=>c=>{const o=+n.getTotalLength(),a=c[p],e=n.getCTM(),i=t===0;return{from:0,to:o,modifier:P=>{const d=t*o,g=P+d;if(s==="a"){const r=m(n,o,g,-1,i),x=m(n,o,g,1,i);return S(x.y-r.y,x.x-r.x)*180/v}else{const r=m(n,o,g,0,i);return s==="x"?a||!e?r.x:r.x*e.a+r.y*e.c+e.e:a||!e?r.y:r.x*e.b+r.y*e.d+e.f}}}},M=(n,s=0)=>{const t=T(n);if(t)return{translateX:u(t,"x",s),translateY:u(t,"y",s),rotate:u(t,"a",s)}};export{M as c};
