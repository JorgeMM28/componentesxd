{{-- Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache — Laravel Blade (components/docker/variants/laravel-livewire-fpm/laravel-livewire-fpm.blade.php) --}}
@props(['title' => 'Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache'])
<div {{ $attributes->merge(['class' => 'cxd-docker-laravel-livewire-fpm']) }}>
    <h3>{{ $title }}</h3>
    <p>Imagen lista para Laravel y Blade con OPcache JIT, Redis, PostgreSQL y Composer 2.8.</p>
    {{ $slot }}
</div>
