import { useEffect, useRef } from 'react';
import { mountFilterSearchFacet } from './filter-search-facet.js';
import './styles.css';
export function FilterSearchFacet() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountFilterSearchFacet(root.current) : undefined, []); return <div className="cxd-form" data-cxd-control="filter-search-facet" ref={root}><button type="button" data-filter aria-pressed="true">SSR activo</button><button type="button" data-filter aria-pressed="true">Edge ready</button><button type="button" data-filter aria-pressed="false">TypeScript strict</button><button type="button" data-filter aria-pressed="false">Dockerizado</button><span role="status">2 filtros activos</span></div>; }
