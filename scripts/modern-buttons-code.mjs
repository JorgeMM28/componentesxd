/** Fuente mantenible para la variante Botones modernos redondeados. */
const items = [
  ['primary', 'Botón Píldora Moderno', 'Despliegue Iniciado'],
  ['soft', 'Secundario Suave', 'Modo Previsualización Activo'],
  ['outline', 'Contorno Redondeado', 'Sincronizado con Éxito'],
];
const css = `.cxd-pills { display:flex; flex-wrap:wrap; justify-content:center; gap:1rem; }
.cxd-pills__button { border:1px solid transparent; border-radius:999px; padding:.8rem 1.2rem; font:600 .9rem system-ui,sans-serif; cursor:pointer; transition:transform .18s,box-shadow .18s; }
.cxd-pills__button:active { transform:scale(.95); }
.cxd-pills__button:focus-visible { outline:3px solid #a78bfa; outline-offset:3px; }
.cxd-pills__button--primary { background:linear-gradient(120deg,#7253f4,#b082ff); color:white; box-shadow:0 8px 25px #7253f455; }
.cxd-pills__button--soft { background:#eae5ff; color:#36226b; }
.cxd-pills__button--outline { background:transparent; border-color:#8d76ed; color:inherit; }
.cxd-pills__button[aria-pressed="true"] { box-shadow:0 0 0 3px #a78bfa80; }
.cxd-pills__status { width:100%; text-align:center; font:500 .75rem system-ui,sans-serif; }
@media (prefers-reduced-motion:reduce) { .cxd-pills__button { transition:none; } }\n`;
const html = items.map(([kind, label, message]) => `  <button type="button" class="cxd-pills__button cxd-pills__button--${kind}" data-message="${message}" aria-pressed="false">${label}</button>`).join('\n');
const markup = `<div class="cxd-pills" data-cxd-pills>\n${html}\n  <span class="cxd-pills__status" role="status">Selecciona una acción</span>\n</div>`;
const domJs = `// Copia también styles.css. Devuelve una función para retirar el listener.
export function mountModernRoundedPills(root) {
  const handler = (event) => {
    const button = event.target.closest('[data-message]');
    if (!button || !root.contains(button)) return;
    root.querySelectorAll('[data-message]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    root.querySelector('[role="status"]').textContent = 'ACCIÓN EJECUTADA: ' + button.dataset.message;
  };
  root.addEventListener('click', handler);
  return () => root.removeEventListener('click', handler);
}
// Montaje: document.querySelectorAll('[data-cxd-pills]').forEach(mountModernRoundedPills);\n// HTML para montar este módulo:\n/*\n${markup}\n*/\n`;
const stateMethods = `const items = ${JSON.stringify(items)};`;
export function modernButtonsCode(fw) {
  switch (fw) {
    case 'css-scss': return css;
    case 'vanilla-js': return domJs;
    case 'react': return `import { useState } from 'react';
import './styles.css';
${stateMethods}
export function ModernRoundedPills() {
  const [active, setActive] = useState(-1);
  return <div className="cxd-pills">{items.map(([kind, label], index) => <button key={kind} type="button" className={\`cxd-pills__button cxd-pills__button--\${kind}\`} aria-pressed={active === index} onClick={() => setActive(index)}>{label}</button>)}<span className="cxd-pills__status" role="status">{active < 0 ? 'Selecciona una acción' : 'ACCIÓN EJECUTADA: ' + items[active][2]}</span></div>;
}\n`;
    case 'vue': return `<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
${stateMethods}
const active = ref(-1);
</script>
<template><div class="cxd-pills"><button v-for="([kind, label], index) in items" :key="kind" type="button" :class="['cxd-pills__button', 'cxd-pills__button--' + kind]" :aria-pressed="active === index" @click="active = index">{{ label }}</button><span class="cxd-pills__status" role="status">{{ active < 0 ? 'Selecciona una acción' : 'ACCIÓN EJECUTADA: ' + items[active][2] }}</span></div></template>\n`;
    case 'svelte': return `<script lang="ts">
import './styles.css';
${stateMethods}
let active = $state(-1);
</script>
<div class="cxd-pills">{#each items as [kind, label], index (kind)}<button type="button" class="cxd-pills__button cxd-pills__button--{kind}" aria-pressed={active === index} onclick={() => active = index}>{label}</button>{/each}<span class="cxd-pills__status" role="status">{active < 0 ? 'Selecciona una acción' : 'ACCIÓN EJECUTADA: ' + items[active][2]}</span></div>\n`;
    case 'angular': return `import { Component, signal } from '@angular/core';
@Component({ selector: 'cxd-modern-rounded-pills', standalone: true, styleUrls: ['./styles.css'], template: \`
<div class="cxd-pills">@for (item of items; track item[0]; let i = $index) { <button type="button" class="cxd-pills__button" [class]="'cxd-pills__button cxd-pills__button--' + item[0]" [attr.aria-pressed]="active() === i" (click)="active.set(i)">{{ item[1] }}</button> }<span class="cxd-pills__status" role="status">{{ active() < 0 ? 'Selecciona una acción' : 'ACCIÓN EJECUTADA: ' + items[active()][2] }}</span></div>\` })
export class ModernRoundedPillsComponent { readonly items = ${JSON.stringify(items)}; readonly active = signal(-1); }\n`;
    case 'astro': return `---
import './styles.css';
---
${markup}
<script>
  import { mountModernRoundedPills } from './modern-rounded-pills.js';
  document.querySelectorAll('[data-cxd-pills]').forEach(root => mountModernRoundedPills(root));
</script>\n`;
    case 'blade': return `{{-- Copia styles.css y modern-rounded-pills.js a tus assets y ajusta las URLs. --}}
${markup}
<script type="module">
import { mountModernRoundedPills } from '/assets/modern-rounded-pills.js';
document.querySelectorAll('[data-cxd-pills]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountModernRoundedPills(root); });
</script>\n`;
    case 'livewire': return `<?php
namespace App\\Livewire;
use Livewire\\Component;
// Incluye styles.css en tus assets.
class ModernRoundedPillsWire extends Component {
    public int $active = -1;
    public array $items = [['primary','Botón Píldora Moderno','Despliegue Iniciado'],['soft','Secundario Suave','Modo Previsualización Activo'],['outline','Contorno Redondeado','Sincronizado con Éxito']];
    public function select(int $index): void { if (isset($this->items[$index])) $this->active = $index; }
    public function render(): string { return <<<'HTML'
<div class="cxd-pills">@foreach ($items as $index => $item)<button type="button" class="cxd-pills__button cxd-pills__button--{{ $item[0] }}" aria-pressed="{{ $active === $index ? 'true' : 'false' }}" wire:click="select({{ $index }})">{{ $item[1] }}</button>@endforeach<span class="cxd-pills__status" role="status">{{ $active < 0 ? 'Selecciona una acción' : 'ACCIÓN EJECUTADA: ' . $items[$active][2] }}</span></div>
HTML; }
}\n`;
    case 'php': return `<?php
declare(strict_types=1);
// Incluye styles.css y monta modern-rounded-pills.js como módulo en el navegador.
function renderModernRoundedPills(): string {
    return <<<'HTML'
${markup}
<script type="module">
import { mountModernRoundedPills } from '/assets/modern-rounded-pills.js';
document.querySelectorAll('[data-cxd-pills]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountModernRoundedPills(root); });
</script>
HTML;
}
`;
    default: return undefined;
  }
}
