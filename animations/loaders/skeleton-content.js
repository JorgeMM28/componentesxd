/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 04. PREVISUALIZACIÓN DE CONTENIDO CARGANDO (SKELETON -> REVEAL)
 * Archivo: animations/loaders/skeleton-content.js
 * ============================================================================
 * 1) Anima el pulso luminoso de las líneas skeleton mientras carga.
 * 2) Ejecuta `revealLoadedContent()` con `createTimeline` + `stagger` para
 *    desvanecer el skeleton y revelar el contenido real con cascada suave.
 */
import { animate, createTimeline, stagger } from 'animejs';

export function createSkeletonPulse(skeletonItemsSelector) {
  return animate(skeletonItemsSelector, {
    opacity: [0.3, 0.85],
    duration: 850,
    delay: stagger(110),
    ease: 'inOutSine',
    alternate: true,
    loop: true
  });
}

export function revealLoadedContent(skeletonLayer, realContentItems) {
  const tl = createTimeline({
    defaults: { ease: 'outExpo', duration: 550 }
  });

  tl.add(skeletonLayer, {
    opacity: [1, 0],
    scale: [1, 0.96],
    duration: 320
  }).add(
    realContentItems,
    {
      opacity: [0, 1],
      y: ['14px', '0px'],
      delay: stagger(90)
    },
    '-=120'
  );

  return tl;
}

