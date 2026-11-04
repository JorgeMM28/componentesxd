import { useEffect, useRef } from 'react';
import { mountFloatingActionDock } from './floating-action-dock.js';
import './styles.css';
export function FloatingActionDock() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountFloatingActionDock(root.current) : undefined, []); return <div className="cxd-nav cxd-nav--pill" data-cxd-control="floating-action-dock" ref={root}><button type="button" data-destination="Consola" aria-pressed="true">⌘ Consola</button><button type="button" data-destination="Archivos" aria-pressed="false">▦ Archivos</button><button type="button" data-destination="Métricas" aria-pressed="false">◉ Métricas</button><span role="status">Vista activa: Consola</span></div>; }
