/**
 * ============================================================================
 * COMPONENTESXD — 07. Multi-File Upload Progress Toaster (VANILLA JS CONTROLLER)
 * Archivo: components/toasts/variants/floating-upload-Dock/floating-upload-Dock.js
 * ============================================================================
 */

export function initFloatingUploadDock(selector = '.cxd-toasts-floating-upload-Dock') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
