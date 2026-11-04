// Copia styles.css. La función devuelve un desmontador.
export function mountModernRoundedForm(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const form=root.querySelector('[data-form]'); const status=root.querySelector('[role="status"]'); form.addEventListener('submit',event=>{event.preventDefault();status.textContent='Correo guardado en la demostración';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="modern-rounded-form"]').forEach(mountModernRoundedForm);
// HTML:
/*
<div class="cxd-form" data-cxd-control="modern-rounded-form"><form data-form><label>Correo electrónico <input type="email" data-email required value="arquitectura@componentesxd.dev" /></label><button type="submit">Guardar</button></form><span role="status">Listo para guardar</span></div>
*/
