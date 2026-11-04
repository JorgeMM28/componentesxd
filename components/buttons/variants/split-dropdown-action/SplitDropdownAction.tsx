import { useEffect, useRef } from 'react';
import { mountSplitDropdownAction } from './split-dropdown-action.js';
import './styles.css';
export function SplitDropdownAction() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountSplitDropdownAction(root.current) : undefined, []); return <div className="cxd-control" data-cxd-control="split-dropdown-action" ref={root}><button type="button" data-run>Ejecutar: <span data-label>Producción Directa</span></button><select data-mode aria-label="Modo de ejecución"><option>Producción Directa</option><option>Simulación Dry-Run</option><option>Rollback Instantáneo</option></select><span role="status">LISTO PARA EJECUTAR ACCIÓN SELECCIONADA</span></div>; }
