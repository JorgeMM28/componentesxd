{{--
  ============================================================================
  COMPONENTESXD — 04. Precision Tab Bar with Sliding Hairline (LARAVEL BLADE)
  Archivo: components/navigation/variants/sliding-indicator-tabs/sliding-indicator-tabs.blade.php
  Uso: <x-cxd.navigation.sliding-indicator-tabs title="04. Precision Tab Bar with Sliding Hairline" />
  ============================================================================
--}}
@props([
    'title' => '04. Precision Tab Bar with Sliding Hairline',
    'badge' => 'TABS BAR',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-navigation-sliding-indicator-tabs']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-navigation-sliding-indicator-tabs__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-navigation-sliding-indicator-tabs__body">
        <p>Pestañas horizontales con línea inferior activa que se desliza suavemente hacia la pestaña seleccionada.</p>
        {{ $slot }}
    </div>
</section>
