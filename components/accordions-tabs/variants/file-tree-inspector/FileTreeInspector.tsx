import { useEffect, useRef } from 'react';
import { mountFileTreeInspector } from './file-tree-inspector.js';
import './styles.css';
export function FileTreeInspector() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountFileTreeInspector(root.current) : undefined, []); return <div className="cxd-widget" data-cxd-control="file-tree-inspector" ref={root}><div className="cxd-widget__columns"><div className="cxd-widget__list"><strong>src/</strong><div><button type="button" data-file="index.astro">index.astro</button></div><div><button type="button" data-file="tokens.css">tokens.css</button></div></div><div className="cxd-widget__list"><strong>Inspector</strong><p data-output>Selecciona un archivo</p></div></div></div>; }
