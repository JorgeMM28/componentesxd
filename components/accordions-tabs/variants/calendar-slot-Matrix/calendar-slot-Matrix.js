// Copia styles.css. La función devuelve un desmontador.
export function mountCalendarSlotMatrix(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const day=root.querySelector('[data-day]');const status=root.querySelector('[role="status"]');let selected='';const sync=()=>{status.textContent=selected?'Horario seleccionado: '+day.value+' '+selected:'Selecciona un horario';};root.addEventListener('click',event=>{const button=event.target.closest('[data-slot]');if(!button)return;selected=button.dataset.slot;root.querySelectorAll('[data-slot]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));sync();},{signal});day.addEventListener('change',sync,{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="calendar-slot-Matrix"]').forEach(mountCalendarSlotMatrix);
// HTML:
/*
<div class="cxd-widget" data-cxd-control="calendar-slot-Matrix"><label>Día <select data-day><option>Lunes</option><option>Martes</option><option>Miércoles</option><option>Jueves</option><option>Viernes</option></select></label><div class="cxd-widget__row"><button type="button" data-slot="09:00" aria-pressed="false">09:00</button><button type="button" data-slot="11:00" aria-pressed="false">11:00</button><button type="button" data-slot="15:00" aria-pressed="false">15:00</button></div><span role="status">Selecciona un horario</span></div>
*/
