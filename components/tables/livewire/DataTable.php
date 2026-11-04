<?php
/**
 * ============================================================================
 * COMPONENTESXD — DATA TABLE PRO (LARAVEL LIVEWIRE v3 COMPONENT)
 * Archivo: components/tables/livewire/DataTable.php
 * ============================================================================
 */

namespace App\Livewire\Cxd;

use Livewire\Component;
use Livewire\Attributes\Url;

class DataTable extends Component
{
    #[Url(except: '')]
    public string $search = '';

    #[Url(except: 'all')]
    public string $status = 'all';

    public string $sortField = 'name';
    public string $sortDirection = 'asc';
    public string $theme = 'obsidian';

    public array $rows = [];

    public function sortBy(string $field): void
    {
        if ($this->sortField === $field) {
            $this->sortDirection = $this->sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            $this->sortField = $field;
            $this->sortDirection = 'asc';
        }
    }

    public function setStatus(string $status): void
    {
        $this->status = $status;
    }

    public function getFilteredRowsProperty(): array
    {
        $items = collect($this->rows)
            ->when($this->search !== '', function ($collection) {
                $q = mb_strtolower($this->search);
                return $collection->filter(fn ($row) =>
                    str_contains(mb_strtolower($row['name']), $q) ||
                    str_contains(mb_strtolower($row['code']), $q)
                );
            })
            ->when($this->status !== 'all', fn ($c) => $c->where('status', $this->status));

        return $this->sortDirection === 'asc'
            ? $items->sortBy($this->sortField)->values()->all()
            : $items->sortByDesc($this->sortField)->values()->all();
    }

    public function render()
    {
        return view('livewire.cxd.data-table', [
            'filteredRows' => $this->filteredRows,
        ]);
    }
}

