import fs from 'node:fs';
import { modernButtonsCode } from './modern-buttons-code.mjs';
import { segmentedButtonsCode } from './segmented-buttons-code.mjs';
import { stylelessButtonsCode } from './styleless-buttons-code.mjs';
import { mechanicalButtonsCode } from './mechanical-buttons-code.mjs';
import { interactiveButtonsCode } from './interactive-buttons-code.mjs';
import { toastCode } from './toast-code.mjs';
import { formCode } from './form-code.mjs';
import { cardCode } from './card-code.mjs';
import { dataCode } from './data-code.mjs';
import { modalCode } from './modal-code.mjs';
import { navigationCode } from './navigation-code.mjs';
import { accordionCode } from './accordion-code.mjs';
import { tableCode } from './table-code.mjs';
import { carouselCode } from './carousel-code.mjs';
const registryPath = 'src/data/vaultRegistry.json';
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const category = registry.componentCategories.find(item => item.slug === 'buttons');
for (const [id, generate] of [['modern-rounded-pills', modernButtonsCode], ['segmented-toolbar-fit', segmentedButtonsCode], ['styleless-text-links', stylelessButtonsCode], ['brutalist-3d-push', mechanicalButtonsCode], ...['floating-fab-radial', 'split-dropdown-action', 'interactive-async-morph', 'hold-confirm-safety'].map(id => [id, fw => interactiveButtonsCode(id, fw)])]) {
  const variant = category.variants.find(item => item.id === id);
  for (const [framework, file] of Object.entries(variant.files)) {
    file.code = generate(framework);
    fs.writeFileSync(file.path, file.code, 'utf8');
  }
}
const toasts = registry.componentCategories.find(item => item.slug === 'toasts');
for (const variant of toasts.variants) for (const [framework, file] of Object.entries(variant.files)) {
  file.code = toastCode(variant.id, framework);
  fs.writeFileSync(file.path, file.code, 'utf8');
}
const forms = registry.componentCategories.find(item => item.slug === 'forms');
for (const variant of forms.variants) for (const [framework, file] of Object.entries(variant.files)) {
  file.code = formCode(variant.id, framework);
  fs.writeFileSync(file.path, file.code, 'utf8');
}
const cards = registry.componentCategories.find(item => item.slug === 'cards');
for (const variant of cards.variants) for (const [framework, file] of Object.entries(variant.files)) {
  file.code = cardCode(variant.id, framework);
  fs.writeFileSync(file.path, file.code, 'utf8');
}
const data = registry.componentCategories.find(item => item.slug === 'badges-data');
for (const variant of data.variants) for (const [framework, file] of Object.entries(variant.files)) {
  file.code = dataCode(variant.id, framework);
  fs.writeFileSync(file.path, file.code, 'utf8');
}
const modals = registry.componentCategories.find(item => item.slug === 'modals');
for (const variant of modals.variants) for (const [framework, file] of Object.entries(variant.files)) {
  file.code = modalCode(variant.id, framework);
  fs.writeFileSync(file.path, file.code, 'utf8');
}
const navigation = registry.componentCategories.find(item => item.slug === 'navigation');
for (const variant of navigation.variants) for (const [framework, file] of Object.entries(variant.files)) {
  file.code = navigationCode(variant.id, framework);
  fs.writeFileSync(file.path, file.code, 'utf8');
}
const accordions = registry.componentCategories.find(item => item.slug === 'accordions-tabs');
for (const variant of accordions.variants) for (const [framework, file] of Object.entries(variant.files)) {
  file.code = accordionCode(variant.id, framework);
  fs.writeFileSync(file.path, file.code, 'utf8');
}
const tables = registry.componentCategories.find(item => item.slug === 'tables');
for (const variant of tables.variants) for (const [framework, file] of Object.entries(variant.files)) {
  file.code = tableCode(variant.id, framework);
  fs.writeFileSync(file.path, file.code, 'utf8');
}
const carousels = registry.componentCategories.find(item => item.slug === 'carousels');
for (const variant of carousels.variants) for (const [framework, file] of Object.entries(variant.files)) {
  file.code = carouselCode(variant.id, framework);
  fs.writeFileSync(file.path, file.code, 'utf8');
}
fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2) + '\n');
