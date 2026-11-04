import { useEffect, useRef } from 'react';
import { mountTableBulkExplosion } from './table-bulk-explosion.js';
import './styles.css';
export function TableBulkExplosion() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountTableBulkExplosion(root.current) : undefined, []); return <div className="cxd-special" data-cxd-control="table-bulk-explosion" ref={root}><h3>Selección masiva</h3><table><thead><tr><th>Seleccionar</th><th>Recurso</th><th>Estado</th></tr></thead><tbody data-rows></tbody></table><div className="cxd-special__actions"><button type="button" data-purge>Eliminar selección</button><button type="button" data-reset>Restaurar todo</button></div><span role="status"></span></div>; }
