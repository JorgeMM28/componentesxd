import { useEffect, useRef } from 'react';
import { mountInteractiveAsyncMorph } from './interactive-async-morph.js';
import './styles.css';
export function InteractiveAsyncMorph() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountInteractiveAsyncMorph(root.current) : undefined, []); return <div className="cxd-control" data-cxd-control="interactive-async-morph" ref={root}><button type="button" data-async aria-busy="false"><span data-spinner>◌ </span><span data-label>Haz clic para probar el ciclo asíncrono</span></button><button type="button" data-magnetic>Pasa el cursor · magnético</button><span role="status">LISTO</span></div>; }
