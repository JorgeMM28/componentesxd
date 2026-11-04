import { useEffect, useRef } from 'react';
import { mountInteractiveSvgGauges } from './interactive-svg-gauges.js';
import './styles.css';
export function InteractiveSvgGauges() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountInteractiveSvgGauges(root.current) : undefined, []); return <div className="cxd-data" data-cxd-control="interactive-svg-gauges" ref={root}><div className="cxd-data__gauge" data-gauge><strong data-value>84%</strong></div><label>Ajustar porcentaje <input type="range" min="0" max="100" defaultValue="84" data-slider /></label><button type="button" data-set="45">45%</button><button type="button" data-set="78">78%</button><button type="button" data-set="99">99%</button><span role="status">SLA global: 84%</span></div>; }
