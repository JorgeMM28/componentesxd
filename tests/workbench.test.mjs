import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const preview = readFileSync('src/components/LiveComponentPreview.astro', 'utf8');
const workbench = readFileSync('src/components/ComponentWorkbench.astro', 'utf8');
const anime = readFileSync('src/utils/animeWorkbenchClient.ts', 'utf8');
const laboratory = readFileSync('src/pages/laboratorio.astro', 'utf8');

test('los controles de botones usan los mismos atributos que sus manejadores', () => {
  for (const attribute of ['data-pill-btn', 'data-pill-status', 'data-styleless-btn', 'data-styleless-status', 'data-fab-toggle', 'data-fab-action', 'data-fab-readout', 'data-hold-pct', 'data-split-mode-sel', 'data-split-exec', 'data-seg-val', 'data-seg-output', 'data-push-3d', 'data-push-toggle']) {
    assert.ok(preview.includes(attribute), `falta ${attribute} en la vista`);
    assert.ok(workbench.includes(attribute), `falta ${attribute} en el controlador`);
  }
});

test('los controles de reproducción gestionan todas las instancias', () => {
  assert.match(anime, /running\.forEach\(instance => instance\.cancel/);
  assert.match(anime, /running\.forEach\(instance => instance\.pause\(\)\)/);
  assert.match(anime, /running\.forEach\(instance => \{ instance\.reverse/);
  assert.match(anime, /scrubber\.oninput/);
});

test('los selectores de vistas interactivas apuntan a atributos existentes', () => {
  const workbenchMarkup = workbench.slice(0, workbench.indexOf('<script>'));
  const attributes = source => new Set(source.match(/data-[a-z0-9-]+/g) || []);
  const present = new Set([...attributes(preview), ...attributes(workbenchMarkup)]);
  const referenced = attributes(workbench.slice(workbench.indexOf('<script>')));
  assert.deepEqual([...referenced].filter(name => !present.has(name)).sort(), []);
});

test('las cifras del registro corresponden a los datos publicados', async () => {
  const registry = JSON.parse(readFileSync('src/data/vaultRegistry.json', 'utf8'));
  const variants = registry.componentCategories.flatMap(category => category.variants);
  assert.equal(registry.stats.componentVariantsCount, variants.length);
  assert.equal(registry.stats.totalComponentFiles, variants.reduce((sum, variant) => sum + Object.keys(variant.files).length, 0));
  assert.equal(registry.stats.animationPresetsCount, registry.animationCategories.reduce((sum, category) => sum + category.presets.length, 0));
});

test('cada variante publicada tiene una vista previa declarada y evita la plantilla genérica', () => {
  const registry = JSON.parse(readFileSync('src/data/vaultRegistry.json', 'utf8'));
  for (const category of registry.componentCategories) for (const variant of category.variants) {
    const previewIsDeclared = variant.previewType.startsWith('hybrid-new-') || preview.includes(`previewType === '${variant.previewType}'`);
    assert.ok(previewIsDeclared, `${category.slug}/${variant.id} no tiene una vista previa`);
    for (const file of Object.values(variant.files)) assert.doesNotMatch(file.code, /Alternar Estado/, file.path);
  }
});

test('el catálogo declara alternativas de movimiento reducido en las vistas y adaptadores interactivos', () => {
  const styles = [preview, workbench, anime].join('\n');
  assert.match(styles, /prefers-reduced-motion:\s*reduce/);
  assert.match(anime, /reducedMotion\.matches/);
  assert.match(workbench, /reducedMotion\.matches/);
  assert.match(laboratory, /prefers-reduced-motion:\s*reduce/);
  assert.match(laboratory, /Movimiento reducido activo/);
});

test('los especiales no reutilizan el contador genérico y las 20 vistas nuevas tienen composición propia', () => {
  const source = readFileSync('scripts/special-code.mjs', 'utf8');
  const registry = JSON.parse(readFileSync('src/data/vaultRegistry.json', 'utf8'));
  const special = registry.componentCategories.find(category => category.slug === 'special-hybrids').variants;
  assert.doesNotMatch(source, /operationalSpecials|Demostración autónoma|count\+' \/ 3'/);
  for (const variant of special.slice(7)) {
    const vanilla = variant.files['vanilla-js'].code;
    assert.doesNotMatch(vanilla, /Demostración autónoma|0 \/ 3/);
  }
  for (const id of ['agenda','flow','query','server','mail','media','inventory','orders','seats','events','permissions','survey','downloads','products','expenses','charts','files','deploy','queue','goals']) {
    assert.match(preview, new RegExp(`hybrid-new-${id}`));
  }
});

test('el hub de laboratorio expone cuatro módulos independientes y código copiable', () => {
  for (const id of ['lab-text', 'surface-output', 'motion-output', 'layout-output', 'surface-copy', 'motion-copy', 'layout-copy']) assert.match(laboratory, new RegExp(id));
  assert.match(laboratory, /motion-pause/);
  assert.match(laboratory, /motion-reverse/);
  assert.match(laboratory, /motion-reset/);
});

test('el botón moderno Vanilla actualiza selección, estado y permite desmontar', async () => {
  const { mountModernRoundedPills } = await import('../components/buttons/variants/modern-rounded-pills/modern-rounded-pills.js');
  const buttons = ['Despliegue Iniciado', 'Modo Previsualización Activo', 'Sincronizado con Éxito'].map(message => ({ dataset: { message }, pressed: '', setAttribute(_, value) { this.pressed = value; } }));
  const status = { textContent: '' };
  let handler;
  const root = { addEventListener(_, fn) { handler = fn; }, removeEventListener(_, fn) { if (handler === fn) handler = null; }, contains(button) { return buttons.includes(button); }, querySelectorAll() { return buttons; }, querySelector() { return status; } };
  const unmount = mountModernRoundedPills(root);
  handler({ target: { closest: () => buttons[1] } });
  assert.deepEqual(buttons.map(button => button.pressed), ['false', 'true', 'false']);
  assert.equal(status.textContent, 'ACCIÓN EJECUTADA: Modo Previsualización Activo');
  unmount();
  assert.equal(handler, null);
});

test('el registro y los archivos del botón moderno coinciden con el generador', async () => {
  const { modernButtonsCode } = await import('../scripts/modern-buttons-code.mjs');
  const registry = JSON.parse(readFileSync('src/data/vaultRegistry.json', 'utf8'));
  const variant = registry.componentCategories.find(category => category.slug === 'buttons').variants.find(item => item.id === 'modern-rounded-pills');
  for (const [framework, file] of Object.entries(variant.files)) {
    assert.equal(file.code, modernButtonsCode(framework));
    assert.equal(readFileSync(file.path, 'utf8'), file.code);
  }
});

test('cada archivo del catálogo coincide con el código mostrado', () => {
  const registry = JSON.parse(readFileSync('src/data/vaultRegistry.json', 'utf8'));
  for (const category of registry.componentCategories) for (const variant of category.variants) for (const file of Object.values(variant.files)) {
    assert.equal(readFileSync(file.path, 'utf8'), file.code, file.path);
  }
});

test('la barra segmentada selecciona una opción y deja de escuchar al desmontarse', async () => {
  const { mountSegmentedToolbarFit } = await import('../components/buttons/variants/segmented-toolbar-fit/segmented-toolbar-fit.js');
  const buttons = ['Vista de Tabla Estructurada (10 Variantes)', 'Vista de Tarjetas Bento (8 Variantes)', 'Vista de Grafo Vectorial 3D', 'Inspector JSON Raw en Vivo'].map(message => ({ dataset: { message }, pressed: '', setAttribute(_, value) { this.pressed = value; } }));
  const status = { textContent: '' };
  let handler;
  const root = { addEventListener(_, fn) { handler = fn; }, removeEventListener(_, fn) { if (handler === fn) handler = null; }, contains(button) { return buttons.includes(button); }, querySelectorAll() { return buttons; }, querySelector() { return status; } };
  const unmount = mountSegmentedToolbarFit(root);
  handler({ target: { closest: () => buttons[3] } });
  assert.deepEqual(buttons.map(button => button.pressed), ['false', 'false', 'false', 'true']);
  assert.equal(status.textContent, 'MODO ACTIVO: Inspector JSON Raw en Vivo');
  unmount();
  assert.equal(handler, null);
});

test('los adaptadores segmentados provienen de su fuente mantenible', async () => {
  const { segmentedButtonsCode } = await import('../scripts/segmented-buttons-code.mjs');
  const registry = JSON.parse(readFileSync('src/data/vaultRegistry.json', 'utf8'));
  const variant = registry.componentCategories.find(category => category.slug === 'buttons').variants.find(item => item.id === 'segmented-toolbar-fit');
  for (const [framework, file] of Object.entries(variant.files)) assert.equal(file.code, segmentedButtonsCode(framework));
});

test('los botones editoriales actualizan la ruta activa y permiten desmontar', async () => {
  const { mountStylelessTextLinks } = await import('../components/buttons/variants/styleless-text-links/styleless-text-links.js');
  const buttons = ['Abriendo especificación técnica v4.2...', 'Descargando manifiesto raw (42 KB)...'].map(message => ({ dataset: { message }, pressed: '', setAttribute(_, value) { this.pressed = value; } }));
  const status = { textContent: '' };
  let handler;
  const root = { addEventListener(_, fn) { handler = fn; }, removeEventListener(_, fn) { if (handler === fn) handler = null; }, contains(button) { return buttons.includes(button); }, querySelectorAll() { return buttons; }, querySelector() { return status; } };
  const unmount = mountStylelessTextLinks(root);
  handler({ target: { closest: () => buttons[1] } });
  assert.deepEqual(buttons.map(button => button.pressed), ['false', 'true']);
  assert.equal(status.textContent, 'RUTA ACTIVA: Descargando manifiesto raw (42 KB)...');
  unmount();
  assert.equal(handler, null);
});

test('el botón mecánico cuenta pulsaciones y alterna el interruptor', async () => {
  const { mountBrutalist3dPush } = await import('../components/buttons/variants/brutalist-3d-push/brutalist-3d-push.js');
  const count = { textContent: '0' }, state = { textContent: 'ON' };
  const push = {}, toggle = { pressed: 'true', getAttribute() { return this.pressed; }, setAttribute(_, value) { this.pressed = value; } };
  let handler;
  const root = { querySelector(selector) { return selector === '[data-count]' ? count : state; }, addEventListener(_, fn) { handler = fn; }, removeEventListener() { handler = null; }, contains(item) { return item === push || item === toggle; } };
  const unmount = mountBrutalist3dPush(root);
  handler({ target: { closest: selector => selector === '[data-push]' ? push : null } });
  handler({ target: { closest: selector => selector === '[data-toggle]' ? toggle : null } });
  assert.equal(count.textContent, '1');
  assert.equal(state.textContent, 'OFF');
  assert.equal(toggle.pressed, 'false');
  unmount();
  assert.equal(handler, null);
});

test('el selector de acción actualiza la etiqueta y ejecuta el modo elegido', async () => {
  const { mountSplitDropdownAction } = await import('../components/buttons/variants/split-dropdown-action/split-dropdown-action.js');
  const listeners = {};
  const select = { value:'Producción Directa', addEventListener(type, fn) { listeners['select:' + type] = fn; } };
  const label = { textContent:'' }, status = { textContent:'' };
  const button = { addEventListener(type, fn) { listeners['button:' + type] = fn; } };
  const root = { querySelector(selector) { return ({'[data-mode]': select, '[role="status"]': status, '[data-label]': label, '[data-run]': button})[selector]; } };
  const cleanup = mountSplitDropdownAction(root);
  select.value = 'Simulación Dry-Run'; listeners['select:change']();
  assert.equal(label.textContent, 'Simulación Dry-Run');
  listeners['button:click']();
  assert.equal(status.textContent, 'ACCIÓN EJECUTADA: Simulación Dry-Run');
  cleanup();
});

test('los cuatro adaptadores interactivos utilizan selectores de montaje aislados', async () => {
  const { interactiveButtonsCode } = await import('../scripts/interactive-buttons-code.mjs');
  const ids = ['floating-fab-radial','split-dropdown-action','interactive-async-morph','hold-confirm-safety'];
  for (const id of ids) {
    const astro = interactiveButtonsCode(id, 'astro');
    assert.ok(astro.includes(`data-cxd-control="${id}"`));
    assert.ok(astro.includes(`[data-cxd-control="${id}"]:not([data-ready])`));
  }
});

test('la confirmación exige mantener pulsado o dos activaciones de teclado', async () => {
  const { mountHoldConfirmSafety } = await import('../components/buttons/variants/hold-confirm-safety/hold-confirm-safety.js');
  const listeners = {};
  const button = { style: { setProperty() {} }, addEventListener(type, fn) { listeners[type] = fn; } };
  const status = { textContent: '' };
  const root = { querySelector(selector) { return selector === '[data-hold]' ? button : status; } };
  const previousCancel = globalThis.cancelAnimationFrame;
  globalThis.cancelAnimationFrame = () => {};
  try {
    const cleanup = mountHoldConfirmSafety(root);
    listeners.click({ detail: 1 });
    assert.notEqual(status.textContent, 'PURGA CONFIRMADA');
    listeners.click({ detail: 0 });
    assert.equal(status.textContent, 'PULSA DE NUEVO PARA CONFIRMAR');
    listeners.blur();
    listeners.click({ detail: 0 });
    assert.equal(status.textContent, 'PULSA DE NUEVO PARA CONFIRMAR');
    listeners.click({ detail: 0 });
    assert.equal(status.textContent, 'PURGA CONFIRMADA');
    cleanup();
  } finally { globalThis.cancelAnimationFrame = previousCancel; }
});

test('el mazo exportado descarta todas las tarjetas y se puede restaurar', async () => {
  const { mountCardDeckThrow } = await import('../components/carousels/variants/card-deck-throw/card-deck-throw.js');
  const slides = Array.from({length: 4}, () => ({ hidden: false, setAttribute() {}, style: { setProperty() {} } }));
  const listeners = {};
  const dismiss = { disabled: false, addEventListener(type, fn) { listeners.dismiss = fn; } };
  const reset = { addEventListener(type, fn) { listeners.reset = fn; } };
  const status = { textContent: '' };
  const root = { querySelectorAll() { return slides; }, querySelector(selector) { return ({'[data-dismiss]':dismiss,'[data-reset]':reset,'[role="status"]':status})[selector]; } };
  const cleanup = mountCardDeckThrow(root);
  for (let i = 0; i < 4; i++) listeners.dismiss();
  assert.equal(status.textContent, '0 tarjetas restantes');
  assert.ok(dismiss.disabled);
  assert.ok(slides.every(slide => slide.hidden));
  listeners.reset();
  assert.equal(status.textContent, '4 tarjetas restantes');
  assert.ok(slides.every(slide => !slide.hidden));
  cleanup();
});

test('las ocho exportaciones de carrusel se regeneran desde su fuente', async () => {
  const { carouselCode } = await import('../scripts/carousel-code.mjs');
  const registry = JSON.parse(readFileSync('src/data/vaultRegistry.json', 'utf8'));
  const variants = registry.componentCategories.find(category => category.slug === 'carousels').variants;
  assert.equal(variants.length, 8);
  for (const variant of variants) for (const [framework, file] of Object.entries(variant.files)) {
    assert.equal(file.code, carouselCode(variant.id, framework), file.path);
  }
});

test('las topologías Docker exportan controles funcionales y no plantillas genéricas', async () => {
  const { dockerCode, dockerIds } = await import('../scripts/docker-code.mjs');
  const ts = (await import('typescript')).default;
  const registry = JSON.parse(readFileSync('src/data/vaultRegistry.json', 'utf8'));
  const variants = registry.componentCategories.find(category => category.slug === 'docker').variants;
  assert.deepEqual(variants.map(variant => variant.id), dockerIds);
  for (const variant of variants) {
    for (const [framework, file] of Object.entries(variant.files)) {
      assert.equal(file.code, dockerCode(variant.id, framework), file.path);
      assert.doesNotMatch(file.code, /Alternar Estado/);
    }
    for (const framework of ['react', 'angular']) {
      const file = variant.files[framework];
      const result = ts.transpileModule(file.code, { fileName: file.path, reportDiagnostics: true, compilerOptions: { target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, experimentalDecorators: true } });
      assert.deepEqual((result.diagnostics || []).filter(item => item.category === ts.DiagnosticCategory.Error), [], file.path);
    }
  }
});

test('los especiales implementados se regeneran y sus adaptadores se analizan', async () => {
  const { specialCode, specialIds } = await import('../scripts/special-code.mjs');
  const ts = (await import('typescript')).default;
  const { transform } = await import('@astrojs/compiler');
  const registry = JSON.parse(readFileSync('src/data/vaultRegistry.json', 'utf8'));
  const variants = registry.componentCategories.find(category => category.slug === 'special-hybrids').variants.filter(variant => specialIds.includes(variant.id));
  assert.equal(specialIds.length, 50);
  assert.equal(variants.length, specialIds.length);
  for (const variant of variants) {
    assert.equal(Object.keys(variant.files).length, 10, `${variant.id} debe exponer diez adaptadores`);
    for (const [framework, file] of Object.entries(variant.files)) assert.equal(file.code, specialCode(variant.id, framework), file.path);
    for (const framework of ['react', 'angular']) {
      const file = variant.files[framework];
      const result = ts.transpileModule(file.code, { fileName: file.path, reportDiagnostics: true, compilerOptions: { target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, experimentalDecorators: true } });
      assert.deepEqual((result.diagnostics || []).filter(item => item.category === ts.DiagnosticCategory.Error), [], file.path);
    }
    const file = variant.files.astro;
    assert.deepEqual((await transform(file.code, { filename: file.path })).diagnostics.filter(item => item.severity === 1), [], file.path);
  }
});

test('los adaptadores de botones, notificaciones, formularios, tarjetas, telemetría, diálogos, navegación, acordeones y tablas se pueden analizar', async () => {
  const ts = (await import('typescript')).default;
  const { transform } = await import('@astrojs/compiler');
  const registry = JSON.parse(readFileSync('src/data/vaultRegistry.json', 'utf8'));
  const variants = registry.componentCategories.filter(category => ['buttons', 'toasts', 'forms', 'cards', 'badges-data', 'modals', 'navigation', 'accordions-tabs', 'tables', 'carousels'].includes(category.slug)).flatMap(category => category.variants);
  for (const variant of variants) {
    for (const framework of ['react', 'angular']) {
      const file = variant.files[framework];
      const result = ts.transpileModule(file.code, { fileName: file.path, reportDiagnostics: true, compilerOptions: { target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, experimentalDecorators: true } });
      assert.deepEqual((result.diagnostics || []).filter(item => item.category === ts.DiagnosticCategory.Error).map(item => ts.flattenDiagnosticMessageText(item.messageText, ' ')), [], file.path);
    }
    const file = variant.files.astro;
    const result = await transform(file.code, { filename: file.path });
    assert.deepEqual(result.diagnostics.filter(item => item.severity === 1), [], file.path);
  }
});

test('los controles Livewire inicializan el módulo al montar el componente', async () => {
  const { interactiveButtonsCode } = await import('../scripts/interactive-buttons-code.mjs');
  for (const id of ['floating-fab-radial', 'split-dropdown-action', 'interactive-async-morph', 'hold-confirm-safety']) {
    const code = interactiveButtonsCode(id, 'livewire');
    assert.match(code, /@script[\s\S]*import\([\s\S]*\$wire\.\$el[\s\S]*@endscript/);
    assert.match(code, /wire:ignore/);
  }
});

test('regenerar conserva las categorías y variantes publicadas', async () => {
  const { mkdtempSync, rmSync, readFileSync: read } = await import('node:fs');
  const { tmpdir } = await import('node:os');
  const { join, resolve } = await import('node:path');
  const { execFileSync } = await import('node:child_process');
  const temp = mkdtempSync(join(tmpdir(), 'cxd-registry-'));
  try {
    execFileSync(process.execPath, [resolve('scripts/generate-vault.mjs')], { cwd: temp, stdio: 'pipe' });
    const current = JSON.parse(read('src/data/vaultRegistry.json', 'utf8'));
    const generated = JSON.parse(read(join(temp, 'src/data/vaultRegistry.json'), 'utf8'));
    const ids = registry => registry.componentCategories.map(category => [category.slug, category.variants.map(variant => variant.id)]);
    assert.deepEqual(ids(generated), ids(current));
  } finally { rmSync(temp, { recursive: true, force: true }); }
});
