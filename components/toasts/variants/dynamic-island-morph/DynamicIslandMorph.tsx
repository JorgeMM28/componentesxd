import { useEffect, useRef } from 'react';
import { mountDynamicIslandMorph } from './dynamic-island-morph.js';
import './styles.css';
export function DynamicIslandMorph() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountDynamicIslandMorph(root.current) : undefined, []); return <div className="cxd-toast cxd-toast--island" data-cxd-control="dynamic-island-morph" ref={root}><strong data-title>MODO COMPACTO // IDLE</strong><button type="button" data-mode="compact">Compacto</button><button type="button" data-mode="expanded">Expandir detalles</button><p data-details hidden>Despliegue en curso hacia 12 regiones · 94% completado.</p><span role="status">Modo compacto</span></div>; }
