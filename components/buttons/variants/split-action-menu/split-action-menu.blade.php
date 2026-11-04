{{--
  ============================================================================
  COMPONENTESXD — 05. Split Primary + Context Dropdown Button (LARAVEL BLADE)
  Archivo: components/buttons/variants/split-action-menu/split-action-menu.blade.php
  Uso: <x-cxd.buttons.split-action-menu title="05. Split Primary + Context Dropdown Button" />
  ============================================================================
--}}
@props([
    'title' => '05. Split Primary + Context Dropdown Button',
    'badge' => 'SPLIT ACTION',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-buttons-split-action-menu']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-buttons-split-action-menu__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-buttons-split-action-menu__body">
        <p>Combina la ejecución principal inmediata con un selector desplegable de opciones secundarias (Deploy / Dry-run).</p>
        {{ $slot }}
    </div>
</section>
