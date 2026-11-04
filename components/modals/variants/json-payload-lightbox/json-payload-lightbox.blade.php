{{--
  ============================================================================
  COMPONENTESXD — 06. Raw JSON / Schema Diff Modal Inspector (LARAVEL BLADE)
  Archivo: components/modals/variants/json-payload-lightbox/json-payload-lightbox.blade.php
  Uso: <x-cxd.modals.json-payload-lightbox title="06. Raw JSON / Schema Diff Modal Inspector" />
  ============================================================================
--}}
@props([
    'title' => '06. Raw JSON / Schema Diff Modal Inspector',
    'badge' => 'PAYLOAD VIEWER',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-modals-json-payload-lightbox']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-modals-json-payload-lightbox__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-modals-json-payload-lightbox__body">
        <p>Visor modal con numeración de líneas, plegado de nodos y copiado directo de estructuras JSON.</p>
        {{ $slot }}
    </div>
</section>
