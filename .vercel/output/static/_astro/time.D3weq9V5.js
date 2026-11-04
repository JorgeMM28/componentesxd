import{n as c,T as u,A as m,U as p,i as T}from"./position.CnCwDA14.js";/**
 * Anime.js - utils - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const f=(s=c)=>new u({duration:1*m.timeScale,onComplete:s},null,0).resume(),g=s=>{let e;return((...l)=>{let a,t,n,i,o;e&&(a=e.currentIteration,t=e.iterationProgress,n=e.reversed,i=e._alternate,o=e._startTime,e.revert());const r=s(...l);return r&&!p(r)&&r.revert&&(e=r),T(t)||(e.currentIteration=a,e.iterationProgress=(i&&a%2?!n:n)?1-t:t,e._startTime=o),r||c})};export{g as k,f as s};
