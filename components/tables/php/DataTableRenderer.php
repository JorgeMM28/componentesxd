<?php
/**
 * ============================================================================
 * COMPONENTESXD — DATA TABLE PRO (PHP 8.2+ ZERO-FRAMEWORK RENDERER)
 * Archivo: components/tables/php/DataTableRenderer.php
 * ============================================================================
 * Ideal para proyectos PHP clásicos, WordPress, Slim, Symfony o microservicios.
 */

declare(strict_types=1);

namespace ComponentesXD\Tables;

final class DataTableRenderer
{
    public static function render(array $rows, string $theme = 'obsidian'): string
    {
        $escapedTheme = htmlspecialchars($theme, ENT_QUOTES, 'UTF-8');
        $bodyHtml = '';

        foreach ($rows as $row) {
            $id = htmlspecialchars((string) ($row['id'] ?? ''), ENT_QUOTES, 'UTF-8');
            $name = htmlspecialchars((string) ($row['name'] ?? ''), ENT_QUOTES, 'UTF-8');
            $code = htmlspecialchars((string) ($row['code'] ?? ''), ENT_QUOTES, 'UTF-8');
            $role = htmlspecialchars((string) ($row['role'] ?? ''), ENT_QUOTES, 'UTF-8');
            $status = htmlspecialchars((string) ($row['status'] ?? 'active'), ENT_QUOTES, 'UTF-8');
            $load = max(0, min(100, (int) ($row['load'] ?? 0)));
            $latency = htmlspecialchars((string) ($row['latency'] ?? '0ms'), ENT_QUOTES, 'UTF-8');
            $initials = strtoupper(substr($name, 0, 2));

            $bodyHtml .= <<<HTML
            <tr data-row-id="{$id}" data-name="{$name}" data-status="{$status}" data-load="{$load}">
                <td>
                    <div class="cxd-entity-cell">
                        <div class="cxd-entity-avatar">{$initials}</div>
                        <div class="cxd-entity-meta">
                            <span class="cxd-entity-name">{$name}</span>
                            <span class="cxd-entity-sub">{$code}</span>
                        </div>
                    </div>
                </td>
                <td>{$role}</td>
                <td>
                    <span class="cxd-badge cxd-badge--{$status}">
                        <span class="cxd-badge-dot"></span>{$status}
                    </span>
                </td>
                <td>
                    <div class="cxd-telemetry-cell">
                        <div class="cxd-telemetry-bar">
                            <div class="cxd-telemetry-fill" style="width: {$load}%"></div>
                        </div>
                        <span class="cxd-telemetry-val">{$load}%</span>
                    </div>
                </td>
                <td>{$latency}</td>
            </tr>
            HTML;
        }

        return <<<HTML
        <div class="cxd-table-shell" data-theme="{$escapedTheme}">
            <div class="cxd-table-scroll">
                <table class="cxd-table">
                    <thead>
                        <tr>
                            <th>Nodo / Servicio</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Carga CPU</th>
                            <th>Latencia</th>
                        </tr>
                    </thead>
                    <tbody>{$bodyHtml}</tbody>
                </table>
            </div>
        </div>
        HTML;
    }
}

