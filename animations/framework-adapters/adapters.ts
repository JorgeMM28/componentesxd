/**
 * ============================================================================
 * ANIME.JS v4 — ADAPTADORES MULTI-FRAMEWORK (REACT, VUE, SVELTE, ANGULAR, LIVEWIRE)
 * Archivo: animations/framework-adapters/adapters.ts
 * ============================================================================
 * Copia el adaptador de tu framework para garantizar limpieza automática
 * (`animation.pause()` / `animation.revert()`) al desmontar el componente.
 */
import { animate, type AnimationParams } from 'animejs';

// 1. SVELTE 5 ACTION (`use:anime={params}`)
export function animeAction(node: HTMLElement, params: AnimationParams) {
  let instance = animate(node, params);
  return {
    update(newParams: AnimationParams) {
      instance.pause();
      instance = animate(node, newParams);
    },
    destroy() {
      instance.pause();
    }
  };
}

// 2. VANILLA / ASTRO / LIVEWIRE HOOK
export function mountScopedAnimation(root: HTMLElement, selector: string, params: AnimationParams) {
  const targets = root.querySelectorAll(selector);
  if (!targets.length) return null;
  return animate(targets, params);
}

