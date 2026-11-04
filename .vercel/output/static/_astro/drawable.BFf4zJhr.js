import{o as C,N as L,A as x,K as g,e as A}from"./stagger.CD3hUQhb.js";/**
 * Anime.js - svg - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const F=e=>{let n=1;if(e&&e.getCTM){const t=e.getCTM();if(t){const s=A(t.a*t.a+t.b*t.b),o=A(t.c*t.c+t.d*t.d);n=(s+o)/2}}return n},S=(e,n,t)=>{const s=g,o=getComputedStyle(e),p=o.strokeLinecap,k=o.vectorEffect==="non-scaling-stroke"?e:null;let d=p;const y=new Proxy(e,{get(c,f){const a=c[f];return f===L?c:f==="setAttribute"?(...r)=>{if(r[0]==="draw"){const h=r[1].split(" "),l=+h[0],u=+h[1],i=F(k),m=l*-s*i,v=u*s*i+m,w=s*i+(l===0&&u===1||l===1&&u===0?0:10*i)-v;if(p!=="butt"){const b=l===u?"butt":p;d!==b&&(c.style.strokeLinecap=`${b}`,d=b)}c.setAttribute("stroke-dashoffset",`${m}`),c.setAttribute("stroke-dasharray",`${v} ${w}`)}return Reflect.apply(a,c,r)}:x(a)?(...r)=>Reflect.apply(a,c,r):a}});return e.getAttribute("pathLength")!==`${s}`&&(e.setAttribute("pathLength",`${s}`),y.setAttribute("draw",`${n} ${t}`)),y},D=(e,n=0,t=0)=>C(e).map(o=>S(o,n,t));export{D as c};
