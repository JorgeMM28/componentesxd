// Copia styles.css. La función devuelve un desmontador.
export function mountKanbanMiniBoard(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const backlog=root.querySelector('[data-backlog]');const done=root.querySelector('[data-done]');const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const button=event.target.closest('[data-move]');if(!button)return;const task=button.closest('[data-task]');const active=task.parentElement===backlog;(active?done:backlog).append(task);button.textContent=active?'← Regresar':'Avanzar →';status.textContent=active?'Tarea en producción':'Tarea pendiente';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="kanban-mini-board"]').forEach(mountKanbanMiniBoard);
// HTML:
/*
<div class="cxd-widget" data-cxd-control="kanban-mini-board"><div class="cxd-widget__columns"><div class="cxd-widget__list" data-backlog><strong>Pendiente</strong><div data-task>Revisar tokens <button type="button" data-move>Avanzar →</button></div></div><div class="cxd-widget__list" data-done><strong>Producción</strong></div></div><span role="status">Mueve una tarea</span></div>
*/
