import { useEffect, useRef } from 'react';
import { mountInteractiveBreadcrumbs } from './interactive-breadcrumbs.js';
import './styles.css';
export function InteractiveBreadcrumbs() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountInteractiveBreadcrumbs(root.current) : undefined, []); return <div className="cxd-nav" data-cxd-control="interactive-breadcrumbs" ref={root}><nav aria-label="Ruta de navegación"><button type="button" data-path="Inicio">Inicio</button><span> / </span><button type="button" data-path="Componentes">Componentes</button><span> / </span><button type="button" data-path="Botones">Botones</button></nav><span role="status">Ruta actual: Inicio / Componentes / Botones</span></div>; }
