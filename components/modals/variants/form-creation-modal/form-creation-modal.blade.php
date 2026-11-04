{{-- Variante 04 — Modal con Formulario de Creación de Proyecto — Laravel Blade (components/modals/variants/form-creation-modal/form-creation-modal.blade.php) --}}
@props(['title' => 'Variante 04 — Modal con Formulario de Creación de Proyecto'])
<div {{ $attributes->merge(['class' => 'cxd-modals-form-creation-modal']) }}>
    <h3>{{ $title }}</h3>
    <p>Diálogo completo con inputs de nombre, selector de región, visibilidad y envío interactivo.</p>
    {{ $slot }}
</div>
