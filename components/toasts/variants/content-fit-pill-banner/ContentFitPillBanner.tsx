import { useEffect, useRef } from 'react';
import { mountContentFitPillBanner } from './content-fit-pill-banner.js';
import './styles.css';
export function ContentFitPillBanner() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountContentFitPillBanner(root.current) : undefined, []); return <div className="cxd-toast cxd-toast--pill" data-cxd-control="content-fit-pill-banner" ref={root}><strong>NUEVO</strong><span data-message>Motor Anime.js v4 integrado</span><button type="button" data-dismiss>Entendido</button><span role="status"></span></div>; }
