{{-- Variante 01 — Step-by-Step Wizard + Carrusel 3D Sincronizado + Timeline — Laravel Blade (components/special-hybrids/variants/stepper-carousel-wizard/stepper-carousel-wizard.blade.php) --}}
@props(['title' => 'Variante 01 — Step-by-Step Wizard + Carrusel 3D Sincronizado + Timeline'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-stepper-carousel-wizard']) }}>
    <h3>{{ $title }}</h3>
    <p>Asistente paso a paso donde avanzar o retroceder sincroniza la barra de progreso superior, desliza el carrusel 3D y anima los sub-elementos con stagger.</p>
    {{ $slot }}
</div>
