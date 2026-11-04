<?php
// Variante 03 — React / Vue / Svelte / Angular SPA + Nginx — PHP 8.3 Renderer (components/docker/variants/spa-nginx-alpine/SpaNginxAlpineRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Docker;

final class SpaNginxAlpineRenderer {
    public static function render(): string {
        return '<div class="cxd-docker-spa-nginx-alpine"><h3>Variante 03 — React / Vue / Svelte / Angular SPA + Nginx</h3><p>Compilación estática servida por Nginx Alpine con compresión gzip y try_files para rutas SPA.</p></div>';
    }
}
