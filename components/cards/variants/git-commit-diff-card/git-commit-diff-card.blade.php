{{--
  ============================================================================
  COMPONENTESXD — 04. Git Commit & Code Diff Inspection Card (LARAVEL BLADE)
  Archivo: components/cards/variants/git-commit-diff-card/git-commit-diff-card.blade.php
  Uso: <x-cxd.cards.git-commit-diff-card title="04. Git Commit & Code Diff Inspection Card" />
  ============================================================================
--}}
@props([
    'title' => '04. Git Commit & Code Diff Inspection Card',
    'badge' => 'VERSION CONTROL',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-cards-git-commit-diff-card']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-cards-git-commit-diff-card__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-cards-git-commit-diff-card__body">
        <p>Superficie para visualizar hash de commit, rama, líneas añadidas/eliminadas y bloque diff coloreado.</p>
        {{ $slot }}
    </div>
</section>
