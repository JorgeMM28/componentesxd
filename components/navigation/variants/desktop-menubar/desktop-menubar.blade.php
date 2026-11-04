{{-- Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git) — Laravel Blade (components/navigation/variants/desktop-menubar/desktop-menubar.blade.php) --}}
@props(['title' => 'Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git)'])
<nav {{ $attributes->merge(['class' => 'cxd-navigation-desktop-menubar']) }}>
    <h3>{{ $title }}</h3>
    <p>Barra horizontal estilo aplicación de escritorio con menús desplegables en cascada al hacer hover o clic, atajos de teclado e indicador de sync.</p>
    {{ $slot }}
</nav>
