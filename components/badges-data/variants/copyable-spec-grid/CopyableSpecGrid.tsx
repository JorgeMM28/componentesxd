import { useEffect, useRef } from 'react';
import { mountCopyableSpecGrid } from './copyable-spec-grid.js';
import './styles.css';
export function CopyableSpecGrid() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountCopyableSpecGrid(root.current) : undefined, []); return <div className="cxd-data" data-cxd-control="copyable-spec-grid" ref={root}><button type="button" data-copy="cxd_public_demo">API_PUBLIC_KEY · copiar</button><button type="button" data-copy="example.test:4321">PRIMARY_ENDPOINT · copiar</button><button type="button" data-copy="sha256:demo">BUILD_DIGEST · copiar</button><span role="status">Selecciona un valor</span></div>; }
