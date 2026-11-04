<?php
// Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático — PHP 8.3 Renderer (components/docker/variants/traefik-tls-proxy/TraefikTlsProxyRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Docker;

final class TraefikTlsProxyRenderer {
    public static function render(): string {
        return '<div class="cxd-docker-traefik-tls-proxy"><h3>Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático</h3><p>Enrutamiento dinámico por etiquetas de contenedor y certificados TLS automáticos.</p></div>';
    }
}
