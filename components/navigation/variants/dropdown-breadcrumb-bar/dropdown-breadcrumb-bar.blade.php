{{--
  ============================================================================
  COMPONENTESXD — 02. Multi-Tenant Breadcrumb + Context Switcher (LARAVEL BLADE)
  Archivo: components/navigation/variants/dropdown-breadcrumb-bar/dropdown-breadcrumb-bar.blade.php
  Uso: <x-cxd.navigation.dropdown-breadcrumb-bar title="02. Multi-Tenant Breadcrumb + Context Switcher" />
  ============================================================================
--}}
@props([
    'title' => '02. Multi-Tenant Breadcrumb + Context Switcher',
    'badge' => 'BREADCRUMBS',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-navigation-dropdown-breadcrumb-bar']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-navigation-dropdown-breadcrumb-bar__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-navigation-dropdown-breadcrumb-bar__body">
        <p>Ruta de navegación estilo Vercel/GitHub con listas desplegables para cambiar organización, proyecto o rama.</p>
        {{ $slot }}
    </div>
</section>
