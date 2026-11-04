<?php
// Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4) — PHP 8.3 Renderer (components/docker/variants/fullstack-compose-stack/FullstackComposeStackRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Docker;

final class FullstackComposeStackRenderer {
    public static function render(): string {
        return '<div class="cxd-docker-fullstack-compose-stack"><h3>Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4)</h3><p>Orquestación completa con volúmenes persistentes y healthchecks automáticos.</p></div>';
    }
}
