/**
 * ============================================================================
 * COMPONENTESXD — 05. Collaborator Avatar Stack + Presence Ring (VANILLA JS CONTROLLER)
 * Archivo: components/badges-data/variants/avatar-presence-stack/avatar-presence-stack.js
 * ============================================================================
 */

export function initAvatarPresenceStack(selector = '.cxd-badges-data-avatar-presence-stack') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
