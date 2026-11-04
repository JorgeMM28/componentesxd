// Copia styles.css. La función devuelve un desmontador.
export function mountMicrosoftCascadeNav(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const menu=root.querySelector('[data-menu]');const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const category=event.target.closest('[data-category]');const leaf=event.target.closest('[data-leaf]');if(category){const was=category.getAttribute('aria-expanded')==='true';root.querySelectorAll('[data-category]').forEach(item=>item.setAttribute('aria-expanded','false'));menu.hidden=was;category.setAttribute('aria-expanded',String(!was));root.querySelectorAll('[data-group]').forEach(item=>{item.hidden=item.dataset.group!==category.dataset.category;});status.textContent='Categoría: '+category.dataset.category;}if(leaf){status.textContent='Seleccionado: '+leaf.dataset.leaf;menu.hidden=true;root.querySelectorAll('[data-category]').forEach(item=>item.setAttribute('aria-expanded','false'));}},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="microsoft-cascade-nav"]').forEach(mountMicrosoftCascadeNav);
// HTML:
/*
<div class="cxd-nav" data-cxd-control="microsoft-cascade-nav"><button type="button" data-category="Componentes" aria-expanded="false">Componentes</button><button type="button" data-category="Animaciones" aria-expanded="false">Animaciones</button><div class="cxd-nav__menu" data-menu hidden><button type="button" data-group="Componentes" data-leaf="Tablas">Tablas</button><button type="button" data-group="Componentes" data-leaf="Botones">Botones</button><button type="button" data-group="Componentes" data-leaf="Formularios">Formularios</button><button type="button" data-group="Animaciones" data-leaf="SVG" hidden>SVG</button><button type="button" data-group="Animaciones" data-leaf="Timelines" hidden>Timelines</button></div><span role="status">Selecciona una categoría</span></div>
*/
