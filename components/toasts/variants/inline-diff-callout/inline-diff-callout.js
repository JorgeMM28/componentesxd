/**
 * ============================================================================
 * COMPONENTESXD — 06. Architectural Callout & Warning Block (VANILLA JS CONTROLLER)
 * Archivo: components/toasts/variants/inline-diff-callout/inline-diff-callout.js
 * ============================================================================
 */

export function initInlineDiffCallout(selector = '.cxd-toasts-inline-diff-callout') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
