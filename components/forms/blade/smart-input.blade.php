{{--
  ============================================================================
  COMPONENTESXD — SMART FLOATING INPUT (LARAVEL BLADE / LIVEWIRE)
  Archivo: components/forms/blade/smart-input.blade.php
  ============================================================================
--}}
@props(['label' => 'Campo', 'type' => 'text', 'name' => ''])

<div class="cxd-field">
    <div class="cxd-floating-wrap">
        <input
            type="{{ $type }}"
            name="{{ $name }}"
            placeholder=" "
            {{ $attributes->merge(['class' => 'cxd-floating-input']) }}
        />
        <label class="cxd-floating-label">{{ $label }}</label>
    </div>
</div>

