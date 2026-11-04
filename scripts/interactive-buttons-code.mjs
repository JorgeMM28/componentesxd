/** Adaptadores para los controles interactivos del catálogo de botones. */
const commonCss = `.cxd-control{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.7rem}.cxd-control button,.cxd-control select{border:1px solid #a78bfa;border-radius:8px;padding:.7rem 1rem;background:#211c38;color:#fff;font:600 .85rem system-ui;cursor:pointer}.cxd-control button:hover{background:#5944a1}.cxd-control button:focus-visible,.cxd-control select:focus-visible{outline:3px solid #c4b5fd;outline-offset:3px}.cxd-control button:disabled{opacity:.65;cursor:wait}.cxd-control [role=status]{width:100%;text-align:center;font:500 .75rem system-ui}.cxd-control [hidden]{display:none!important}.cxd-control__actions{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center}.cxd-control [data-hold]{background:linear-gradient(90deg,#ef476f var(--progress,0%),#211c38 var(--progress,0%))}.cxd-control [data-magnetic]{transition:transform .15s}.cxd-control [data-spinner]{display:none}.cxd-control [aria-busy=true] [data-spinner]{display:inline-block}@media(prefers-reduced-motion:reduce){.cxd-control [data-magnetic]{transition:none}}\n`;
const specs = {
  'floating-fab-radial': {
    name:'FloatingFabRadial', mount:'mountFloatingFabRadial',
    markup:`<div class="cxd-control" data-cxd-control><button type="button" data-fab aria-expanded="true">Abrir / Cerrar menú flotante</button><span role="status">SATÉLITES ACTIVOS</span><div class="cxd-control__actions" data-actions><button type="button" data-action="Nuevo despliegue ejecutado">01. Nuevo despliegue</button><button type="button" data-action="Repositorio clonado">02. Clonar repositorio</button><button type="button" data-action="Logs exportados">03. Exportar logs</button></div></div>`,
    body:`const trigger = root.querySelector('[data-fab]'); const actions = root.querySelector('[data-actions]'); const status = root.querySelector('[role="status"]');
  root.addEventListener('click', event => { const action = event.target.closest('[data-action]'); if (action && root.contains(action)) status.textContent = 'ACCIÓN: ' + action.dataset.action; if (event.target.closest('[data-fab]')) { actions.hidden = !actions.hidden; trigger.setAttribute('aria-expanded', String(!actions.hidden)); status.textContent = actions.hidden ? 'MENÚ CERRADO' : 'MENÚ ABIERTO'; } }, {signal});`
  },
  'split-dropdown-action': {
    name:'SplitDropdownAction', mount:'mountSplitDropdownAction',
    markup:`<div class="cxd-control" data-cxd-control><button type="button" data-run>Ejecutar: <span data-label>Producción Directa</span></button><select data-mode aria-label="Modo de ejecución"><option>Producción Directa</option><option>Simulación Dry-Run</option><option>Rollback Instantáneo</option></select><span role="status">LISTO PARA EJECUTAR ACCIÓN SELECCIONADA</span></div>`,
    body:`const select = root.querySelector('[data-mode]'); const status = root.querySelector('[role="status"]'); const label = root.querySelector('[data-label]');
  select.addEventListener('change', () => { label.textContent = select.value; status.textContent = 'MODO SELECCIONADO: ' + select.value; }, {signal});
  root.querySelector('[data-run]').addEventListener('click', () => { status.textContent = 'ACCIÓN EJECUTADA: ' + select.value; }, {signal});`
  },
  'interactive-async-morph': {
    name:'InteractiveAsyncMorph', mount:'mountInteractiveAsyncMorph',
    markup:`<div class="cxd-control" data-cxd-control><button type="button" data-async aria-busy="false"><span data-spinner>◌ </span><span data-label>Haz clic para probar el ciclo asíncrono</span></button><button type="button" data-magnetic>Pasa el cursor · magnético</button><span role="status">LISTO</span></div>`,
    body:`const button = root.querySelector('[data-async]'); const label = root.querySelector('[data-label]'); const status = root.querySelector('[role="status"]'); const magnetic = root.querySelector('[data-magnetic]');
  button.addEventListener('click', () => { button.disabled = true; button.setAttribute('aria-busy','true'); label.textContent = 'Procesando...'; status.textContent = 'CARGANDO'; timer = setTimeout(() => { button.disabled = false; button.setAttribute('aria-busy','false'); label.textContent = 'Completado · volver a probar'; status.textContent = 'ÉXITO'; }, 950); }, {signal});
  magnetic.addEventListener('pointermove', event => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const rect = magnetic.getBoundingClientRect(); magnetic.style.transform = 'translate(' + ((event.clientX - rect.left - rect.width / 2) * .12) + 'px,' + ((event.clientY - rect.top - rect.height / 2) * .12) + 'px)'; }, {signal});
  magnetic.addEventListener('pointerleave', () => { magnetic.style.transform = ''; }, {signal});`
  },
  'hold-confirm-safety': {
    name:'HoldConfirmSafety', mount:'mountHoldConfirmSafety',
    markup:`<div class="cxd-control" data-cxd-control><button type="button" data-hold>Mantén presionado para purgar; con teclado pulsa dos veces</button><span role="status">PROGRESO DE SEGURIDAD: 0%</span></div>`,
    body:`const button = root.querySelector('[data-hold]'); const status = root.querySelector('[role="status"]'); let start = 0; let completed = false; let armed = false; let frame = 0;
  const reset = () => { cancelAnimationFrame(frame); frame = 0; button.style.setProperty('--progress','0%'); };
  const update = now => { const pct = Math.min(100, Math.round((now - start) / 850 * 100)); button.style.setProperty('--progress', pct + '%'); status.textContent = 'PROGRESO DE SEGURIDAD: ' + pct + '%'; if (pct < 100) frame = requestAnimationFrame(update); else { completed = true; status.textContent = 'PURGA CONFIRMADA'; } };
  button.addEventListener('pointerdown', event => { if (event.button !== 0) return; reset(); armed = false; completed = false; start = performance.now(); frame = requestAnimationFrame(update); }, {signal});
  button.addEventListener('pointerleave', () => { if (!completed) reset(); }, {signal});
  button.addEventListener('pointerup', () => { if (!completed) reset(); }, {signal});
  button.addEventListener('pointercancel', reset, {signal});
  button.addEventListener('click', event => { if (event.detail !== 0) return; if (!armed) { armed = true; status.textContent = 'PULSA DE NUEVO PARA CONFIRMAR'; } else { armed = false; completed = true; button.style.setProperty('--progress','100%'); status.textContent = 'PURGA CONFIRMADA'; } }, {signal});
  button.addEventListener('blur', () => { armed = false; }, {signal});
  signal.addEventListener('abort', reset, {once:true});`
  }
};
export function buildInteractiveAdapters(id, fw, s, css = commonCss) {
  if (!s) return undefined;
  const marker = `data-cxd-control="${id}"`;
  const markup = s.markup.replace('data-cxd-control', marker);
  const selector = `[data-cxd-control="${id}"]`;
  const js = `// Copia styles.css. La función devuelve un desmontador.\n${s.imports ? s.imports + '\n' : ''}export function ${s.mount}(root) {\n  const controller = new AbortController(); const signal = controller.signal; let timer;\n  ${s.body}\n  return () => { controller.abort(); clearTimeout(timer); };\n}\n// Montaje: document.querySelectorAll('${selector}').forEach(${s.mount});\n// HTML:\n/*\n${markup}\n*/\n`;
  const jsx = markup.replace(marker, marker + ' ref={root}').replaceAll('class=', 'className=').replace(/(<input\b[^>]*?)\bvalue=/g, '$1defaultValue=').replace(/(<input\b[^>]*?)\bchecked(?=[\s/>])/g, '$1defaultChecked').replaceAll('inputmode=', 'inputMode=').replaceAll('maxlength=', 'maxLength=').replaceAll('autocomplete=', 'autoComplete=');
  const load = `import { ${s.mount} } from './${id}.js';`;
  const init = `document.querySelectorAll('${selector}:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; ${s.mount}(root); });`;
  switch (fw) {
    case 'css-scss': return css;
    case 'vanilla-js': return js;
    case 'react': return `import { useEffect, useRef } from 'react';\n${load}\nimport './styles.css';\nexport function ${s.name}() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? ${s.mount}(root.current) : undefined, []); return ${jsx}; }\n`;
    case 'vue': return `<script setup lang="ts">\nimport { ref, onMounted, onUnmounted } from 'vue';\n${load}\nimport './styles.css';\nconst root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = ${s.mount}(root.value); }); onUnmounted(() => unmount?.());\n</script>\n<template>${markup.replace(marker, marker + ' ref="root"')}</template>\n`;
    case 'svelte': return `<script lang="ts">\n${load}\nimport './styles.css';\nfunction control(node: HTMLElement) { return { destroy: ${s.mount}(node) }; }\n</script>\n${markup.replace(marker, marker + ' use:control')}\n`;
    case 'angular': return `import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';\n${load}\n@Component({ selector:'cxd-${id}', standalone:true, styleUrls:['./styles.css'], template:\`${markup.replace(marker, marker + ' #root')}\` })\nexport class ${s.name}Component implements AfterViewInit, OnDestroy { @ViewChild('root') root!: ElementRef<HTMLElement>; private unmount?: () => void; ngAfterViewInit() { this.unmount = ${s.mount}(this.root.nativeElement); } ngOnDestroy() { this.unmount?.(); } }\n`;
    case 'astro': return `---\nimport './styles.css';\n---\n${markup}\n<script>\n${load}\n${init}\n</script>\n`;
    case 'blade': return `{{-- Incluye styles.css y ajusta la ruta del módulo. --}}\n${markup}\n<script type="module">\nimport { ${s.mount} } from '/assets/${id}.js';\n${init}\n</script>\n`;
    case 'livewire': {
      const livewireScript = `@script\n<script>\nimport('/assets/${id}.js').then(module => module.${s.mount}($wire.$el));\n</script>\n@endscript`;
      const livewireMarkup = markup.replace(marker, marker + ' wire:ignore').replace(/<\/div>$/, livewireScript + '</div>');
      return `<?php\nnamespace App\\Livewire;\nuse Livewire\\Component;\n// Incluye styles.css y ajusta la ruta del módulo.\nclass ${s.name}Wire extends Component { public function render(): string { return <<<'HTML'\n${livewireMarkup}\nHTML; } }\n`;
    }
    case 'php': return `<?php\ndeclare(strict_types=1);\n// Incluye styles.css y ajusta la ruta del módulo.\nfunction render${s.name}(): string { return <<<'HTML'\n${markup}\n<script type="module">\nimport { ${s.mount} } from '/assets/${id}.js';\n${init}\n</script>\nHTML; }\n`;
  }
}

export function interactiveButtonsCode(id, fw) { return buildInteractiveAdapters(id, fw, specs[id]); }
