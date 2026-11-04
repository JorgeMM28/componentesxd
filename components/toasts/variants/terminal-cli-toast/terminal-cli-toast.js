/**
 * ============================================================================
 * COMPONENTESXD — 04. CLI & Webhook Telemetry Toast (VANILLA JS CONTROLLER)
 * Archivo: components/toasts/variants/terminal-cli-toast/terminal-cli-toast.js
 * ============================================================================
 */

export function initTerminalCliToast(selector = '.cxd-toasts-terminal-cli-toast') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
