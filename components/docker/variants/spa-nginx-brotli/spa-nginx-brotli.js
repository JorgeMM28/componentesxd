/**
 * ============================================================================
 * COMPONENTESXD — 03. React / Vue / Svelte / Angular SPA + Nginx (VANILLA JS CONTROLLER)
 * Archivo: components/docker/variants/spa-nginx-brotli/spa-nginx-brotli.js
 * ============================================================================
 */

export function initSpaNginxBrotli(selector = '.cxd-docker-spa-nginx-brotli') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
