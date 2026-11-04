import { useEffect, useRef } from 'react';
import { mountInteractivePagination } from './interactive-pagination.js';
import './styles.css';
export function InteractivePagination() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountInteractivePagination(root.current) : undefined, []); return <div className="cxd-nav" data-cxd-control="interactive-pagination" ref={root}><button type="button" data-step="-1">Anterior</button><button type="button" data-page="1" aria-current="page">1</button><button type="button" data-page="2">2</button><button type="button" data-page="3">3</button><button type="button" data-step="1">Siguiente</button><span role="status">Página 1 de 3</span></div>; }
