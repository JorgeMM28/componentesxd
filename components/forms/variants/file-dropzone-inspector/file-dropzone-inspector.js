/**
 * ============================================================================
 * COMPONENTESXD — 07. Drag & Drop Artifact Dropzone (VANILLA JS CONTROLLER)
 * Archivo: components/forms/variants/file-dropzone-inspector/file-dropzone-inspector.js
 * ============================================================================
 */

export function initFileDropzoneInspector(selector = '.cxd-forms-file-dropzone-inspector') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
