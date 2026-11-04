import { useEffect, useRef } from 'react';
import { mountBeforeAfterSplit } from './before-after-split.js';
import './styles.css';
export function BeforeAfterSplit() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountBeforeAfterSplit(root.current) : undefined, []); return <div className="cxd-widget" data-cxd-control="before-after-split" ref={root}><div className="cxd-widget__compare" data-compare>DESPUÉS<span>ANTES</span></div><label>Divisor <input type="range" min="0" max="100" defaultValue="50" data-range /></label><span role="status">50%</span></div>; }
