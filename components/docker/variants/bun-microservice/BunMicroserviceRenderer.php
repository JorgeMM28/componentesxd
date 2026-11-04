<?php
// Variante 05 — Microservicio Ultra-Rápido con Bun Alpine — PHP 8.3 Renderer (components/docker/variants/bun-microservice/BunMicroserviceRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Docker;

final class BunMicroserviceRenderer {
    public static function render(): string {
        return '<div class="cxd-docker-bun-microservice"><h3>Variante 05 — Microservicio Ultra-Rápido con Bun Alpine</h3><p>Ejecución directa de TypeScript con arranque en milisegundos y consumo mínimo de RAM.</p></div>';
    }
}
