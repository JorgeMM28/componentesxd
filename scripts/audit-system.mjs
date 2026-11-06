import fs from 'node:fs';

const reg = JSON.parse(fs.readFileSync('src/data/vaultRegistry.json', 'utf8'));
const acw = fs.readFileSync('src/components/AnimeCategoryWorkbench.astro', 'utf8');
const lcp = fs.readFileSync('src/components/LiveComponentPreview.astro', 'utf8');
const cwb = fs.readFileSync('src/components/ComponentWorkbench.astro', 'utf8');

console.log('--- AUDIT REPORT ---');
console.log('Categories:', reg.componentCategories.length);
console.log('Component Variants:', reg.stats.componentVariantsCount);
console.log('Animation Categories:', reg.animationCategories.length);
console.log('Animation Presets:', reg.stats.animationPresetsCount);

// Check animation presets
const animUnhandled = [];
for (const cat of reg.animationCategories) {
  for (const preset of cat.presets) {
    if (!acw.includes(`presetId === '${preset.id}'`) && !acw.includes(`data-stage="${preset.id}"`) && !acw.includes(`stageType === '${preset.stageType}'`)) {
      animUnhandled.push(`${cat.slug} -> ${preset.id} (${preset.stageType})`);
    }
  }
}
console.log('Unhandled animation stages count:', animUnhandled.length);
if (animUnhandled.length > 0) {
  console.log(animUnhandled);
}
