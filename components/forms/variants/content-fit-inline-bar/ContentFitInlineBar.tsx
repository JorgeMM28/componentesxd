import { useEffect, useRef } from 'react';
import { mountContentFitInlineBar } from './content-fit-inline-bar.js';
import './styles.css';
export function ContentFitInlineBar() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountContentFitInlineBar(root.current) : undefined, []); return <div className="cxd-form cxd-form--inline" data-cxd-control="content-fit-inline-bar" ref={root}><span>https://</span><input type="text" data-domain defaultValue="mi-proyecto.dev" aria-label="Dominio" /><button type="button" data-connect>Conectar dominio</button><span role="status">Listo</span></div>; }
