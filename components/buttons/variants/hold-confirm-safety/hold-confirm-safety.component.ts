import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { mountHoldConfirmSafety } from './hold-confirm-safety.js';
@Component({ selector:'cxd-hold-confirm-safety', standalone:true, styleUrls:['./styles.css'], template:`<div class="cxd-control" data-cxd-control="hold-confirm-safety" #root><button type="button" data-hold>Mantén presionado para purgar; con teclado pulsa dos veces</button><span role="status">PROGRESO DE SEGURIDAD: 0%</span></div>` })
export class HoldConfirmSafetyComponent implements AfterViewInit, OnDestroy { @ViewChild('root') root!: ElementRef<HTMLElement>; private unmount?: () => void; ngAfterViewInit() { this.unmount = mountHoldConfirmSafety(this.root.nativeElement); } ngOnDestroy() { this.unmount?.(); } }
