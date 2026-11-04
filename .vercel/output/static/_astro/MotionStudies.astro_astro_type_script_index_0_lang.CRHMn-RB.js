import{a as r}from"./position.CnCwDA14.js";import{s}from"./stagger.Ug0NWO4L.js";import{c as u}from"./index.DVgHUXWn.js";function d(o,e,t){const n=o.querySelectorAll(".motion-piece");switch(e){case"ripple":return r(n,{scale:[.2,1.5+t*.3],opacity:[.85,0],delay:s(60+t*35),duration:1100+t*250,ease:"outExpo"});case"spring":return r(n,{y:[70+t*20,0],rotate:[-12+t*8,0],opacity:[0,1],delay:s(45+t*20,{from:"center"}),ease:u({stiffness:90+t*25,damping:10+t*2})});case"orbit":return r(n,{rotate:[0,t%2?-360:360],delay:s(25+t*20),duration:2200+t*500,ease:"inOutSine"});case"bars":return r(n,{scaleY:[.05,1],opacity:[.3,1],delay:s(50+t*30,{from:t%2?"last":"first"}),duration:800+t*200,ease:"outExpo"});default:return r(n,{y:[t%2?-55:55,0],rotate:[-12+t*8,0],opacity:[0,1],delay:s(50+t*25,{from:t%2?"last":"first"}),duration:800+t*200,ease:"outExpo"})}}const g=`.motion-stage{position:relative;display:grid;place-items:center;min-height:300px;background:radial-gradient(circle at 50% 40%,color-mix(in srgb,var(--motion-accent) 25%,#141327),#090b18 70%);overflow:hidden}
.motion-scene{position:relative;width:230px;height:180px;display:flex;align-items:center;justify-content:center;gap:6px}
.motion-piece{background:var(--motion-accent);border-radius:8px;width:20px;height:70px;transform-origin:bottom;opacity:.85}
.motion-piece span{display:none}
.motion-stage--reveal .motion-scene,.motion-stage--spring .motion-scene{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.motion-stage--reveal .motion-piece,.motion-stage--spring .motion-piece{width:auto;height:48px;background:color-mix(in srgb,var(--motion-accent) 50%,#1b1d32);border:1px solid var(--motion-accent)}
.motion-stage--ripple .motion-piece{position:absolute;width:100px;height:100px;background:transparent;border:2px solid var(--motion-accent);border-radius:50%;transform-origin:center}
.motion-stage--orbit .motion-piece{position:absolute;width:150px;height:150px;background:transparent;border:1px solid color-mix(in srgb,var(--motion-accent) 35%,transparent);border-radius:50%;transform-origin:center}
.motion-stage--orbit .motion-piece:before{content:"";display:block;width:9px;height:9px;background:var(--motion-accent);border-radius:50%;transform:rotate(calc(var(--i)*40deg)) translate(70px)}
.motion-stage--bars .motion-piece{height:calc(45px + var(--i)*10px)}`;function y(o,e){switch(o){case"ripple":return`animate(pieces, { scale: [0.2, ${1.5+e*.3}], opacity: [0.85, 0], delay: stagger(${60+e*35}), duration: ${1100+e*250}, ease: 'outExpo' });`;case"spring":return`animate(pieces, { y: [${70+e*20}, 0], rotate: [${-12+e*8}, 0], opacity: [0, 1], delay: stagger(${45+e*20}, { from: 'center' }), ease: createSpring({ stiffness: ${90+e*25}, damping: ${10+e*2} }) });`;case"orbit":return`animate(pieces, { rotate: [0, ${e%2?-360:360}], delay: stagger(${25+e*20}), duration: ${2200+e*500}, ease: 'inOutSine' });`;case"bars":return`animate(pieces, { scaleY: [0.05, 1], opacity: [0.3, 1], delay: stagger(${50+e*30}, { from: '${e%2?"last":"first"}' }), duration: ${800+e*200}, ease: 'outExpo' });`;default:return`animate(pieces, { y: [${e%2?-55:55}, 0], rotate: [${-12+e*8}, 0], opacity: [0, 1], delay: stagger(${50+e*25}, { from: '${e%2?"last":"first"}' }), duration: ${800+e*200}, ease: 'outExpo' });`}}document.querySelectorAll("[data-motion-study]").forEach(o=>{const e=o.querySelector(".motion-stage"),t=o.dataset.mode||"reveal",n=Number(o.dataset.profile||0),m=o.querySelector("[data-motion-code]"),a=o.querySelector("[data-motion-status]");let i=null;if(!e)return;const l=`${`<div class="motion-stage motion-stage--${t}" style="--motion-accent:${o.style.getPropertyValue("--motion-accent")}">
  <div class="motion-scene">
${Array.from({length:9},(p,c)=>`    <div class="motion-piece" style="--i:${c}"></div>`).join(`
`)}
  </div>
</div>`}

<style>
${g}
</style>

<script type="module">
import { animate, stagger, createSpring } from 'animejs';
const pieces = document.querySelectorAll('.motion-piece');
${y(t,n)}
<\/script>`;m&&(m.textContent=l),o.querySelector("[data-motion-play]")?.addEventListener("click",()=>{i?i.play():i=d(e,t,n),a&&(a.textContent="Reproduciendo")}),o.querySelector("[data-motion-pause]")?.addEventListener("click",()=>{i?.pause(),a&&i&&(a.textContent="Pausado")}),o.querySelector("[data-motion-reverse]")?.addEventListener("click",()=>{i||(i=d(e,t,n)),i.reverse(),i.play(),a&&(a.textContent="Reproduciendo en sentido inverso")}),o.querySelector("[data-motion-restart]")?.addEventListener("click",()=>{i?i.restart():i=d(e,t,n),a&&(a.textContent="Reiniciado")}),"IntersectionObserver"in window&&new IntersectionObserver(c=>{!c[0].isIntersecting&&i&&(i.pause(),a&&(a.textContent="Pausado fuera de pantalla"))}).observe(o),o.querySelector("[data-motion-copy]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(l),a&&(a.textContent="Ejemplo copiado")}catch{a&&(a.textContent="Selecciona el código para copiarlo")}})});
