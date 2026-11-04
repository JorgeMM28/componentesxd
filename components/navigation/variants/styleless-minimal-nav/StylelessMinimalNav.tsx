import { useEffect, useRef } from 'react';
import { mountStylelessMinimalNav } from './styleless-minimal-nav.js';
import './styles.css';
export function StylelessMinimalNav() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountStylelessMinimalNav(root.current) : undefined, []); return <div className="cxd-nav cxd-nav--bare" data-cxd-control="styleless-minimal-nav" ref={root}><button type="button" data-destination="Resumen" aria-pressed="true">Resumen</button><button type="button" data-destination="Actividad" aria-pressed="false">Actividad</button><button type="button" data-destination="Ajustes" aria-pressed="false">Ajustes</button><span role="status">Vista activa: Resumen</span></div>; }
