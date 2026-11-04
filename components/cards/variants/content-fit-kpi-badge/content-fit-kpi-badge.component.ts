import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { mountContentFitKpiBadge } from './content-fit-kpi-badge.js';
@Component({ selector:'cxd-content-fit-kpi-badge', standalone:true, styleUrls:['./styles.css'], template:`<div class="cxd-card cxd-card--fit" data-cxd-control="content-fit-kpi-badge" #root><span>LATENCIA P99</span><h3>6.42 ms</h3><p>−1.8 ms hoy</p></div>` })
export class ContentFitKpiBadgeComponent implements AfterViewInit, OnDestroy { @ViewChild('root') root!: ElementRef<HTMLElement>; private unmount?: () => void; ngAfterViewInit() { this.unmount = mountContentFitKpiBadge(this.root.nativeElement); } ngOnDestroy() { this.unmount?.(); } }
