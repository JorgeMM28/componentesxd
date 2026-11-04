{{-- Variante 01 — Formulario Moderno con Bordes Redondeados — Laravel Blade (components/forms/variants/modern-rounded-form/modern-rounded-form.blade.php) --}}
@props(['title' => 'Variante 01 — Formulario Moderno con Bordes Redondeados'])
<div {{ $attributes->merge(['class' => 'cxd-forms-modern-rounded-form']) }}>
    <h3>{{ $title }}</h3>
    <p>Campos con esquinas suaves de 12px, iconos SVG integrados a la izquierda y anillo de enfoque suave.</p>
    {{ $slot }}
</div>
