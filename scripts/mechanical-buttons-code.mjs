/** Botón mecánico y conmutador: fuente común para los adaptadores. */
const markup = `<div class="cxd-mechanical" data-mechanical>
  <button type="button" class="cxd-mechanical__button" data-push>Presión física 3D (<span data-count>0</span>)</button>
  <button type="button" class="cxd-mechanical__button cxd-mechanical__button--secondary" data-toggle aria-pressed="true">Interruptor mecánico: <span data-state>ON</span></button>
</div>`;
const css = `.cxd-mechanical{display:flex;flex-wrap:wrap;justify-content:center;gap:1rem}.cxd-mechanical__button{border:2px solid #a78bfa;border-radius:5px;padding:.9rem 1.1rem;background:#8e72f4;color:#100b24;box-shadow:0 5px 0 #443486;font:700 .85rem system-ui;cursor:pointer;transition:transform .12s,box-shadow .12s}.cxd-mechanical__button:active{transform:translateY(4px);box-shadow:0 1px 0 #443486}.cxd-mechanical__button--secondary{background:#212438;color:#fff}.cxd-mechanical__button:focus-visible{outline:3px solid #d4c9ff;outline-offset:4px}@media(prefers-reduced-motion:reduce){.cxd-mechanical__button{transition:none}}\n`;
const moduleCode = `// Copia styles.css. La función devuelve un desmontador.
export function mountBrutalist3dPush(root) {
  const count = root.querySelector('[data-count]');
  const state = root.querySelector('[data-state]');
  const handler = event => {
    const push = event.target.closest('[data-push]');
    const toggle = event.target.closest('[data-toggle]');
    if (push && root.contains(push)) count.textContent = String(Number(count.textContent) + 1);
    if (toggle && root.contains(toggle)) {
      const on = toggle.getAttribute('aria-pressed') !== 'true';
      toggle.setAttribute('aria-pressed', String(on));
      state.textContent = on ? 'ON' : 'OFF';
    }
  };
  root.addEventListener('click', handler);
  return () => root.removeEventListener('click', handler);
}
// Montaje: document.querySelectorAll('[data-mechanical]').forEach(mountBrutalist3dPush);
// HTML:\n/*\n${markup}\n*/\n`;
const jsx = `<div className="cxd-mechanical" ref={root}><button type="button" className="cxd-mechanical__button" data-push>Presión física 3D (<span data-count>0</span>)</button><button type="button" className="cxd-mechanical__button cxd-mechanical__button--secondary" data-toggle aria-pressed="true">Interruptor mecánico: <span data-state>ON</span></button></div>`;
export function mechanicalButtonsCode(fw) {
 switch(fw) {
  case 'css-scss': return css;
  case 'vanilla-js': return moduleCode;
  case 'react': return `import { useEffect, useRef } from 'react';\nimport { mountBrutalist3dPush } from './brutalist-3d-push.js';\nimport './styles.css';\nexport function Brutalist3dPush() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountBrutalist3dPush(root.current) : undefined, []); return ${jsx}; }\n`;
  case 'vue': return `<script setup lang="ts">\nimport { ref, onMounted, onUnmounted } from 'vue';\nimport { mountBrutalist3dPush } from './brutalist-3d-push.js';\nimport './styles.css';\nconst root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined;\nonMounted(() => { if (root.value) unmount = mountBrutalist3dPush(root.value); });\nonUnmounted(() => unmount?.());\n</script>\n<template>${markup.replace('data-mechanical>', 'data-mechanical ref="root">')}</template>\n`;
  case 'svelte': return `<script lang="ts">\nimport { mountBrutalist3dPush } from './brutalist-3d-push.js';\nimport './styles.css';\nfunction mechanical(node: HTMLElement) { const unmount = mountBrutalist3dPush(node); return { destroy: unmount }; }\n</script>\n${markup.replace('data-mechanical>', 'data-mechanical use:mechanical>')}\n`;
  case 'angular': return `import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';\nimport { mountBrutalist3dPush } from './brutalist-3d-push.js';\n@Component({ selector:'cxd-brutalist-3d-push', standalone:true, styleUrls:['./styles.css'], template:\`${markup.replace('data-mechanical>', 'data-mechanical #root>')}\` })\nexport class Brutalist3dPushComponent implements AfterViewInit, OnDestroy { @ViewChild('root') root!: ElementRef<HTMLElement>; private unmount?: () => void; ngAfterViewInit() { this.unmount = mountBrutalist3dPush(this.root.nativeElement); } ngOnDestroy() { this.unmount?.(); } }\n`;
  case 'astro': return `---\nimport './styles.css';\n---\n${markup}\n<script>\nimport { mountBrutalist3dPush } from './brutalist-3d-push.js';\ndocument.querySelectorAll('[data-mechanical]').forEach(mountBrutalist3dPush);\n</script>\n`;
  case 'blade': return `{{-- Incluye styles.css y ajusta la ruta del módulo. --}}\n${markup}\n<script type="module">\nimport { mountBrutalist3dPush } from '/assets/brutalist-3d-push.js';\ndocument.querySelectorAll('[data-mechanical]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountBrutalist3dPush(root); });\n</script>\n`;
  case 'livewire': return `<?php\nnamespace App\\Livewire;\nuse Livewire\\Component;\n// Incluye styles.css en tus assets.\nclass Brutalist3dPushWire extends Component { public int $count = 0; public bool $on = true; public function push(): void { $this->count++; } public function toggle(): void { $this->on = !$this->on; } public function render(): string { return <<<'HTML'\n<div class="cxd-mechanical"><button type="button" class="cxd-mechanical__button" wire:click="push">Presión física 3D ({{ $count }})</button><button type="button" class="cxd-mechanical__button cxd-mechanical__button--secondary" wire:click="toggle" aria-pressed="{{ $on ? 'true' : 'false' }}">Interruptor mecánico: {{ $on ? 'ON' : 'OFF' }}</button></div>\nHTML; } }\n`;
  case 'php': return `<?php\ndeclare(strict_types=1);\n// Incluye styles.css y ajusta la ruta del módulo.\nfunction renderBrutalist3dPush(): string { return <<<'HTML'\n${markup}\n<script type="module">\nimport { mountBrutalist3dPush } from '/assets/brutalist-3d-push.js';\ndocument.querySelectorAll('[data-mechanical]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountBrutalist3dPush(root); });\n</script>\nHTML; }\n`;
 }
}
