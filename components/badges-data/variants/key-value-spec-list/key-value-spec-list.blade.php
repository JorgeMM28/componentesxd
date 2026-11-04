{{--
  ============================================================================
  COMPONENTESXD — 04. Architectural Key-Value Description Grid (LARAVEL BLADE)
  Archivo: components/badges-data/variants/key-value-spec-list/key-value-spec-list.blade.php
  Uso: <x-cxd.badges-data.key-value-spec-list title="04. Architectural Key-Value Description Grid" />
  ============================================================================
--}}
@props([
    'title' => '04. Architectural Key-Value Description Grid',
    'badge' => 'SPEC LIST',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-badges-data-key-value-spec-list']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-badges-data-key-value-spec-list__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-badges-data-key-value-spec-list__body">
        <p>Lista estructurada de propiedades técnicas con líneas guía punteadas y copiado rápido por valor.</p>
        {{ $slot }}
    </div>
</section>
