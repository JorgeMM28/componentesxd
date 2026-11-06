import { useEffect, useRef } from 'react';
import { mountQueueSimulator } from './queue-simulator.js';
import './styles.css';
export function QueueSimulator() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountQueueSimulator(root.current) : undefined, []); return <section className="cxd-special cxd-queue" data-cxd-control="queue-simulator" ref={root}><header><small>WORKER · 1 DISPONIBLE</small><h3>Simulador de cola</h3></header><ol data-queue><li>exportar-reporte</li><li>indexar-búsqueda</li><li>enviar-resumen</li></ol><div className="cxd-special__actions"><button type="button" data-process>Procesar siguiente</button><button type="button" data-reset>Restaurar cola</button></div><span role="status"></span></section>; }
