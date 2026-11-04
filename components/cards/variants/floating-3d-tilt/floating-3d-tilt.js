// Copia styles.css. La función devuelve un desmontador.
export function mountFloating3dTilt(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  root.addEventListener('pointermove',event=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const rect=root.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5;const y=(event.clientY-rect.top)/rect.height-.5;root.style.transform='perspective(800px) rotateX('+(-y*12)+'deg) rotateY('+(x*12)+'deg)';},{signal});root.addEventListener('pointerleave',()=>{root.style.transform='';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="floating-3d-tilt"]').forEach(mountFloating3dTilt);
// HTML:
/*
<div class="cxd-card" data-cxd-control="floating-3d-tilt"><span>PERSPECTIVA 3D</span><h3>Mueve el cursor sobre esta tarjeta</h3><p>La perspectiva responde a la posición del puntero.</p></div>
*/
