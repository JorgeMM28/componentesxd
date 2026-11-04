/**
 * ============================================================================
 * COMPONENTESXD — 02. Vertical Deployment & Event Timeline (VANILLA JS CONTROLLER)
 * Archivo: components/badges-data/variants/activity-timeline-feed/activity-timeline-feed.js
 * ============================================================================
 */

export function initActivityTimelineFeed(selector = '.cxd-badges-data-activity-timeline-feed') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
