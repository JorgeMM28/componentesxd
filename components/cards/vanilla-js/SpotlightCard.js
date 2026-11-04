/**
 * ============================================================================
 * COMPONENTESXD — SPOTLIGHT CARD ENGINE (VANILLA JS)
 * Archivo: components/cards/vanilla-js/SpotlightCard.js
 * ============================================================================
 */
export function initSpotlightCards(selector = '.cxd-spotlight-card') {
  const cards = document.querySelectorAll(selector);

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spot-x', `${x}px`);
      card.style.setProperty('--spot-y', `${y}px`);
    });
  });
}

