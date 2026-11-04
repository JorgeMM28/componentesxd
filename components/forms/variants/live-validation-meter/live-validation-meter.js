// Copia styles.css. La función devuelve un desmontador.
export function mountLiveValidationMeter(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const input=root.querySelector('[data-password]'); const meter=root.querySelector('[data-meter]'); const status=root.querySelector('[role="status"]'); input.addEventListener('input',()=>{const value=input.value; const score=Number(value.length>=8)+Number(/[a-z]/.test(value)&&/[A-Z]/.test(value))+Number(/\d/.test(value))+Number(/[^a-zA-Z0-9]/.test(value)); meter.value=score; status.textContent=['Sin evaluar','Baja','Media','Buena','Alta'][score];},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="live-validation-meter"]').forEach(mountLiveValidationMeter);
// HTML:
/*
<div class="cxd-form" data-cxd-control="live-validation-meter"><label>Contraseña <input type="password" data-password autocomplete="new-password" /></label><meter min="0" max="4" value="0" data-meter aria-label="Fortaleza de contraseña"></meter><span role="status">Sin evaluar</span></div>
*/
