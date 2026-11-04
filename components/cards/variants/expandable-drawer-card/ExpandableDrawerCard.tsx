import { useEffect, useRef } from 'react';
import { mountExpandableDrawerCard } from './expandable-drawer-card.js';
import './styles.css';
export function ExpandableDrawerCard() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountExpandableDrawerCard(root.current) : undefined, []); return <div className="cxd-card" data-cxd-control="expandable-drawer-card" ref={root}><strong>Reporte de seguridad automático</strong><button type="button" data-toggle aria-expanded="true">Desplegar / ocultar diagnóstico</button><p data-detail>0 vulnerabilidades críticas · Certificados TLS renovados por 90 días.</p></div>; }
