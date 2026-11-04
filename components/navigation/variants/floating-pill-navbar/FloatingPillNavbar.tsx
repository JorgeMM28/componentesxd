import { useEffect, useRef } from 'react';
import { mountFloatingPillNavbar } from './floating-pill-navbar.js';
import './styles.css';
export function FloatingPillNavbar() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountFloatingPillNavbar(root.current) : undefined, []); return <div className="cxd-nav cxd-nav--pill" data-cxd-control="floating-pill-navbar" ref={root}><button type="button" data-destination="Inicio" aria-pressed="true">Inicio</button><button type="button" data-destination="Componentes" aria-pressed="false">Componentes</button><button type="button" data-destination="Animaciones" aria-pressed="false">Animaciones</button><span role="status">Vista activa: Inicio</span></div>; }
