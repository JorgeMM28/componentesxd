import { useEffect, useRef } from 'react';
import { mountTactileSwitchesSliders } from './tactile-switches-sliders.js';
import './styles.css';
export function TactileSwitchesSliders() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountTactileSwitchesSliders(root.current) : undefined, []); return <div className="cxd-form" data-cxd-control="tactile-switches-sliders" ref={root}><label><input type="checkbox" defaultChecked /> Auto-deploy en push</label><label><input type="checkbox" /> Modo estricto WAF</label><button type="button" data-step="-1" aria-label="Reducir réplicas">−</button><span data-value>4</span><button type="button" data-step="1" aria-label="Aumentar réplicas">+</button><span role="status">4 réplicas</span></div>; }
