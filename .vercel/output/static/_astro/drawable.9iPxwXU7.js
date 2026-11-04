import{E as A,am as C,U as x,a7 as g,L}from"./position.CnCwDA14.js";/**
 * Anime.js - svg - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const F=e=>{let n=1;if(e&&e.getCTM){const t=e.getCTM();if(t){const s=L(t.a*t.a+t.b*t.b),o=L(t.c*t.c+t.d*t.d);n=(s+o)/2}}return n},S=(e,n,t)=>{const s=g,o=getComputedStyle(e),p=o.strokeLinecap,k=o.vectorEffect==="non-scaling-stroke"?e:null;let d=p;const y=new Proxy(e,{get(c,f){const r=c[f];return f===C?c:f==="setAttribute"?(...a)=>{if(a[0]==="draw"){const h=a[1].split(" "),l=+h[0],u=+h[1],i=F(k),m=l*-s*i,v=u*s*i+m,w=s*i+(l===0&&u===1||l===1&&u===0?0:10*i)-v;if(p!=="butt"){const b=l===u?"butt":p;d!==b&&(c.style.strokeLinecap=`${b}`,d=b)}c.setAttribute("stroke-dashoffset",`${m}`),c.setAttribute("stroke-dasharray",`${v} ${w}`)}return Reflect.apply(r,c,a)}:x(r)?(...a)=>Reflect.apply(r,c,a):r}});return e.getAttribute("pathLength")!==`${s}`&&(e.setAttribute("pathLength",`${s}`),y.setAttribute("draw",`${n} ${t}`)),y},D=(e,n=0,t=0)=>A(e).map(o=>S(o,n,t));export{D as c};
