import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { mountFloating3dTilt } from './floating-3d-tilt.js';
@Component({ selector:'cxd-floating-3d-tilt', standalone:true, styleUrls:['./styles.css'], template:`<div class="cxd-card" data-cxd-control="floating-3d-tilt" #root><span>PERSPECTIVA 3D</span><h3>Mueve el cursor sobre esta tarjeta</h3><p>La perspectiva responde a la posición del puntero.</p></div>` })
export class Floating3dTiltComponent implements AfterViewInit, OnDestroy { @ViewChild('root') root!: ElementRef<HTMLElement>; private unmount?: () => void; ngAfterViewInit() { this.unmount = mountFloating3dTilt(this.root.nativeElement); } ngOnDestroy() { this.unmount?.(); } }
