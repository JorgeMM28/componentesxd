// Copia styles.css. La función devuelve un desmontador.
export function mountFormReplyToast(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const form=root.querySelector('[data-form]'); const input=root.querySelector('[data-input]'); const status=root.querySelector('[role="status"]'); form.addEventListener('submit',event=>{event.preventDefault(); const value=input.value.trim(); if(!value)return; status.textContent='Respuesta enviada: '+value; input.value='';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="form-reply-toast"]').forEach(mountFormReplyToast);
// HTML:
/*
<div class="cxd-toast" data-cxd-control="form-reply-toast"><strong>Comentario de revisión</strong><p>¿Podemos subir el límite de rate-limiting?</p><form data-form><input data-input type="text" required aria-label="Respuesta rápida" placeholder="Escribe una respuesta" /><button type="submit">Responder</button></form><span role="status">Esperando respuesta</span></div>
*/
