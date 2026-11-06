// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountMediaPlayer(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const progress=root.querySelector('[data-progress]');const play=root.querySelector('[data-play]');const status=root.querySelector('[role=status]');const time=root.querySelector('[data-time]');let playing=false;let playback;const render=()=>{const seconds=Math.round(Number(progress.value)*2.1);time.textContent=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0')+' / 03:30';};play.addEventListener('click',()=>{playing=!playing;play.setAttribute('aria-pressed',String(playing));play.textContent=playing?'Pausar':'Reproducir';status.textContent=playing?'Reproduciendo.':'En pausa.';clearInterval(playback);if(playing)playback=setInterval(()=>{progress.value=String((Number(progress.value)+1)%101);render();},450);},{signal});root.querySelector('[data-stop]').addEventListener('click',()=>{playing=false;clearInterval(playback);progress.value='0';play.textContent='Reproducir';play.setAttribute('aria-pressed','false');status.textContent='Pista detenida.';render();},{signal});progress.addEventListener('input',render,{signal});signal.addEventListener('abort',()=>clearInterval(playback),{once:true});render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="media-player"]').forEach(mountMediaPlayer);
// HTML:
/*
<section class="cxd-special cxd-player" data-cxd-control="media-player"><header><small>NOW PLAYING</small><h3>Neon Relay</h3></header><div class="cxd-player__equalizer" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><label>Progreso <input type="range" min="0" max="100" value="34" data-progress /></label><div class="cxd-special__actions"><button type="button" data-play aria-pressed="false">Reproducir</button><button type="button" data-stop>Detener</button><output data-time>01:12 / 03:30</output></div><span role="status">En pausa.</span></section>
*/
