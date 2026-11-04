<?php
// Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache — PHP 8.3 Renderer (components/docker/variants/laravel-livewire-fpm/LaravelLivewireFpmRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Docker;

final class LaravelLivewireFpmRenderer {
    public static function render(): string {
        return '<div class="cxd-docker-laravel-livewire-fpm"><h3>Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache</h3><p>Imagen lista para Laravel y Blade con OPcache JIT, Redis, PostgreSQL y Composer 2.8.</p></div>';
    }
}
