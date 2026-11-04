<?php
// Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR — PHP 8.3 Renderer (components/docker/variants/astro-node-ssr/AstroNodeSsrRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Docker;

final class AstroNodeSsrRenderer {
    public static function render(): string {
        return '<div class="cxd-docker-astro-node-ssr"><h3>Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR</h3><p>Contenedor de producción de 3 etapas (deps → builder → runner sin root) para Astro, Next o Remix.</p></div>';
    }
}
