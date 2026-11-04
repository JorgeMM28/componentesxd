{{--
  ============================================================================
  COMPONENTESXD — 02. 3D Perspective Stacked Toast Queue (LARAVEL BLADE)
  Archivo: components/toasts/variants/stacked-3d-queue/stacked-3d-queue.blade.php
  Uso: <x-cxd.toasts.stacked-3d-queue title="02. 3D Perspective Stacked Toast Queue" />
  ============================================================================
--}}
@props([
    'title' => '02. 3D Perspective Stacked Toast Queue',
    'badge' => 'STACKED QUEUE',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-toasts-stacked-3d-queue']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-toasts-stacked-3d-queue__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-toasts-stacked-3d-queue__body">
        <p>Cola de notificaciones apiladas en profundidad 3D que se despliegan en abanico al pasar el cursor.</p>
        {{ $slot }}
    </div>
</section>
