import { useEffect, useRef } from 'react';
import { mountSegmentedPricingToggle } from './segmented-pricing-toggle.js';
import './styles.css';
export function SegmentedPricingToggle() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountSegmentedPricingToggle(root.current) : undefined, []); return <div className="cxd-widget" data-cxd-control="segmented-pricing-toggle" ref={root}><div className="cxd-widget__row"><button type="button" data-period="monthly" aria-pressed="true">Mensual</button><button type="button" data-period="yearly" aria-pressed="false">Anual · 20% menos</button></div><strong data-price>$20 / mes</strong><span role="status">Facturación mensual</span></div>; }
