import { useEffect, useRef } from 'react';
import { mountModernPulseBadges } from './modern-pulse-badges.js';
import './styles.css';
export function ModernPulseBadges() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountModernPulseBadges(root.current) : undefined, []); return <div className="cxd-data" data-cxd-control="modern-pulse-badges" ref={root}><span className="cxd-data__tag">OPERATIONAL</span><span className="cxd-data__tag">DEGRADED</span><span className="cxd-data__tag">OUTAGE</span><button type="button" data-tag>astro-5 ×</button><button type="button" data-tag>animejs-v4 ×</button><button type="button" data-tag>typescript ×</button><button type="button" data-restore>Restaurar etiquetas</button><span role="status">3 etiquetas activas</span></div>; }
