{{--
  ============================================================================
  COMPONENTESXD — 01. Architectural Tree Sidebar Navigation (LARAVEL BLADE)
  Archivo: components/navigation/variants/collapsible-tree-sidebar/collapsible-tree-sidebar.blade.php
  Uso: <x-cxd.navigation.collapsible-tree-sidebar title="01. Architectural Tree Sidebar Navigation" />
  ============================================================================
--}}
@props([
    'title' => '01. Architectural Tree Sidebar Navigation',
    'badge' => 'APP SIDEBAR',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-navigation-collapsible-tree-sidebar']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-navigation-collapsible-tree-sidebar__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-navigation-collapsible-tree-sidebar__body">
        <p>Navegación vertical con secciones colapsables, contadores numéricos tabulares e indicador activo.</p>
        {{ $slot }}
    </div>
</section>
