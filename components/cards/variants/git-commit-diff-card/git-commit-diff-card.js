/**
 * ============================================================================
 * COMPONENTESXD — 04. Git Commit & Code Diff Inspection Card (VANILLA JS CONTROLLER)
 * Archivo: components/cards/variants/git-commit-diff-card/git-commit-diff-card.js
 * ============================================================================
 */

export function initGitCommitDiffCard(selector = '.cxd-cards-git-commit-diff-card') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
