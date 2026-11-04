/**
 * ============================================================================
 * COMPONENTESXD — 04. Fullstack Compose (App + Postgres 17 + Redis 7.4) (VANILLA JS CONTROLLER)
 * Archivo: components/docker/variants/fullstack-postgres-redis/fullstack-postgres-redis.js
 * ============================================================================
 */

export function initFullstackPostgresRedis(selector = '.cxd-docker-fullstack-postgres-redis') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
