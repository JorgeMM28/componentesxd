import { useEffect, useRef } from 'react';
import { mountCompactNavigationRail } from './compact-navigation-rail.js';
import './styles.css';
export function CompactNavigationRail() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountCompactNavigationRail(root.current) : undefined, []); return <div className="cxd-nav cxd-nav--rail" data-cxd-control="compact-navigation-rail" ref={root}><button type="button" data-destination="Consola" aria-label="Consola" aria-pressed="true">⌘</button><button type="button" data-destination="Catálogo" aria-label="Catálogo" aria-pressed="false">▦</button><button type="button" data-destination="Métricas" aria-label="Métricas" aria-pressed="false">◉</button><span role="status">Vista activa: Consola</span></div>; }
