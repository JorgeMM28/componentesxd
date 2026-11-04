<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Git Commit & Code Diff Inspection Card (LARAVEL LIVEWIRE 3)
 * Archivo: components/cards/variants/git-commit-diff-card/GitCommitDiffCardWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Cards;

use Livewire\Component;

class GitCommitDiffCardWire extends Component
{
    public string $title = '04. Git Commit & Code Diff Inspection Card';
    public string $badge = 'VERSION CONTROL';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'git-commit-diff-card');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-cards-git-commit-diff-card" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-cards-git-commit-diff-card__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-cards-git-commit-diff-card__body">
                <p>Superficie para visualizar hash de commit, rama, líneas añadidas/eliminadas y bloque diff coloreado.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
