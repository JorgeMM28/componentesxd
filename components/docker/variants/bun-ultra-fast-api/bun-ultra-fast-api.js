/**
 * ============================================================================
 * COMPONENTESXD — 05. Bun Distroless High-Performance Runtime (VANILLA JS CONTROLLER)
 * Archivo: components/docker/variants/bun-ultra-fast-api/bun-ultra-fast-api.js
 * ============================================================================
 */

export function initBunUltraFastApi(selector = '.cxd-docker-bun-ultra-fast-api') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
