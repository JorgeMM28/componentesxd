{{--
  ============================================================================
  COMPONENTESXD — 03. Searchable Multi-Option Dropdown Select (LARAVEL BLADE)
  Archivo: components/forms/variants/custom-command-select/custom-command-select.blade.php
  Uso: <x-cxd.forms.custom-command-select title="03. Searchable Multi-Option Dropdown Select" />
  ============================================================================
--}}
@props([
    'title' => '03. Searchable Multi-Option Dropdown Select',
    'badge' => 'CUSTOM SELECT',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-forms-custom-command-select']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-forms-custom-command-select__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-forms-custom-command-select__body">
        <p>Lista desplegable organizada con categorías, prefijos técnicos y selección instantánea sin desorden visual.</p>
        {{ $slot }}
    </div>
</section>
