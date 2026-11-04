{{--
  ============================================================================
  COMPONENTESXD — 03. Floating Bottom Command Dock (LARAVEL BLADE)
  Archivo: components/navigation/variants/floating-command-dock/floating-command-dock.blade.php
  Uso: <x-cxd.navigation.floating-command-dock title="03. Floating Bottom Command Dock" />
  ============================================================================
--}}
@props([
    'title' => '03. Floating Bottom Command Dock',
    'badge' => 'FLOATING DOCK',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-navigation-floating-command-dock']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-navigation-floating-command-dock__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-navigation-floating-command-dock__body">
        <p>Barra flotante inferior con tooltips instantáneos, separadores verticales y accesos rápidos.</p>
        {{ $slot }}
    </div>
</section>
