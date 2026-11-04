import { useEffect, useRef } from 'react';
import { mountVerticalEventTimeline } from './vertical-event-timeline.js';
import './styles.css';
export function VerticalEventTimeline() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountVerticalEventTimeline(root.current) : undefined, []); return <div className="cxd-data" data-cxd-control="vertical-event-timeline" ref={root}><strong>Cronología de eventos</strong><button type="button" data-add>+ Agregar evento</button><div className="cxd-data__list" data-list aria-live="polite"><div className="cxd-data__item">Despliegue completado</div><div className="cxd-data__item">Archivos sincronizados</div></div></div>; }
