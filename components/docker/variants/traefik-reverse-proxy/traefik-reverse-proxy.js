/**
 * ============================================================================
 * COMPONENTESXD — 06. Traefik v3 Automatic TLS + Reverse Proxy (VANILLA JS CONTROLLER)
 * Archivo: components/docker/variants/traefik-reverse-proxy/traefik-reverse-proxy.js
 * ============================================================================
 */

export function initTraefikReverseProxy(selector = '.cxd-docker-traefik-reverse-proxy') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
