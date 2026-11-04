// Copia styles.css. La función devuelve un desmontador.
export function mountModernFloatingToast(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const bar=root.querySelector('[data-progress]'); const status=root.querySelector('[role="status"]');
  root.querySelector('[data-replay]').addEventListener('click',()=>{ cancelAnimationFrame(timer); bar.value=100; const state={ start:performance.now() }; const update=now=>{ const value=Math.max(0,100-(now-state.start)/40); bar.value=value; if(value>0) timer=requestAnimationFrame(update); else status.textContent='Tiempo finalizado'; }; status.textContent='Temporizador reiniciado'; timer=requestAnimationFrame(update); },{signal}); signal.addEventListener('abort',()=>cancelAnimationFrame(timer),{once:true});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="modern-floating-toast"]').forEach(mountModernFloatingToast);
// HTML:
/*
<div class="cxd-toast" data-cxd-control="modern-floating-toast"><strong>Copia de seguridad completada con éxito</strong><p>14.2 GB sincronizados en el almacenamiento encriptado.</p><button type="button" data-replay>Reiniciar barra</button><progress data-progress max="100" value="100" aria-label="Tiempo restante"></progress><span role="status">Notificación activa</span></div>
*/
