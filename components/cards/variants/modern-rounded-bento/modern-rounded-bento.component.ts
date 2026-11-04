import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { mountModernRoundedBento } from './modern-rounded-bento.js';
@Component({ selector:'cxd-modern-rounded-bento', standalone:true, styleUrls:['./styles.css'], template:`<div class="cxd-card" data-cxd-control="modern-rounded-bento" #root><span>MODERN BENTO · +31.4%</span><h3>Rendimiento global de red</h3><strong data-metric>2.48M req/s</strong><p>Una tarjeta con iluminación que sigue al cursor.</p></div>` })
export class ModernRoundedBentoComponent implements AfterViewInit, OnDestroy { @ViewChild('root') root!: ElementRef<HTMLElement>; private unmount?: () => void; ngAfterViewInit() { this.unmount = mountModernRoundedBento(this.root.nativeElement); } ngOnDestroy() { this.unmount?.(); } }
