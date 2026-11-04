import { useEffect, useRef } from 'react';
import { mountModernRoundedBento } from './modern-rounded-bento.js';
import './styles.css';
export function ModernRoundedBento() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountModernRoundedBento(root.current) : undefined, []); return <div className="cxd-card" data-cxd-control="modern-rounded-bento" ref={root}><span>MODERN BENTO · +31.4%</span><h3>Rendimiento global de red</h3><strong data-metric>2.48M req/s</strong><p>Una tarjeta con iluminación que sigue al cursor.</p></div>; }
