import { useEffect, useRef } from 'react';
import { mountContentFitKpiBadge } from './content-fit-kpi-badge.js';
import './styles.css';
export function ContentFitKpiBadge() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountContentFitKpiBadge(root.current) : undefined, []); return <div className="cxd-card cxd-card--fit" data-cxd-control="content-fit-kpi-badge" ref={root}><span>LATENCIA P99</span><h3>6.42 ms</h3><p>−1.8 ms hoy</p></div>; }
