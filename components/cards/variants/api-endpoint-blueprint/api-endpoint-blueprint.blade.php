{{--
  ============================================================================
  COMPONENTESXD — 03. REST / GraphQL Endpoint Spec Card (LARAVEL BLADE)
  Archivo: components/cards/variants/api-endpoint-blueprint/api-endpoint-blueprint.blade.php
  Uso: <x-cxd.cards.api-endpoint-blueprint title="03. REST / GraphQL Endpoint Spec Card" />
  ============================================================================
--}}
@props([
    'title' => '03. REST / GraphQL Endpoint Spec Card',
    'badge' => 'API SPEC',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-cards-api-endpoint-blueprint']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-cards-api-endpoint-blueprint__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-cards-api-endpoint-blueprint__body">
        <p>Muestra método HTTP, ruta parametrizada, latencia media y esquema de respuesta con botón de prueba.</p>
        {{ $slot }}
    </div>
</section>
