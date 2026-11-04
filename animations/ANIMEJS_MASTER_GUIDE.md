# Guía Maestra de Anime.js v4 — Laboratorio de Animaciones (`componentesxd`)

Esta guía condensa la documentación oficial de **Anime.js v4** (`https://animejs.com/`) y documenta cómo usar, copiar y adaptar cada animación del directorio `animations/` en cualquier stack (**Astro, React, Vue, Svelte, Angular, Laravel Blade, Livewire y Vanilla JS**).

---

## 1. Arquitectura Modular de Anime.js v4

En **Anime.js v4**, toda la librería es modular y *tree-shakeable*. En lugar de usar una variable global `anime()`, importas únicamente los motores que necesitas:

```js
import { animate, stagger, createTimeline, createTimer } from 'animejs';
```

### Diferencias Clave respecto a v3
1. **Target como primer argumento obligatorio**:
   - **v4**: `animate('.selector', { x: 120, rotate: '1turn', ease: 'outExpo' })`
2. **Nombres de Easing simplificados**:
   - `'outQuad'`, `'inOutCubic'`, `'outExpo'`, `'outBack'`, `'linear'`
3. **Propiedades abreviadas de transformación**:
   - `x` (`translateX`), `y` (`translateY`), `z` (`translateZ`), `rotate`, `rotateX`, `rotateY`, `scale`, `scaleX`, `scaleY`.

---

## 2. Catálogo de Animaciones Listas para Copiar (`animations/`)

| Categoría | Archivo en Raíz | Función / Clase | Caso de Uso Ideal |
| :--- | :--- | :--- | :--- |
| **Carga Sencilla** | `animations/loaders/simple-pulse.js` | `createSimplePulseLoader()` | Barras de progreso indeterminadas y cabeceras de carga |
| **Spinner Orbital** | `animations/loaders/orbital-spinner.js` | `createOrbitalSpinner()` | Operaciones críticas, inferencia IA, sincronización |
| **Tres Puntos Wave** | `animations/loaders/three-dots.js` | `createThreeDotsLoader()` | Indicador "Escribiendo...", botones asíncronos, chat |
| **Skeleton Shimmer** | `animations/loaders/skeleton-content.js` | `createSkeletonPulse()` + `revealLoadedContent()` | Previsualización de tarjetas/tablas antes de recibir JSON |
| **Step-by-Step** | `animations/workflows/step-by-step.js` | `animateToStep()` | Wizards multi-paso, pipelines CI/CD, checkouts |
| **3D Card Stacker** | `animations/layouts/card-stacker.js` | `new CardStacker()` | Pilas de notificaciones, wallets, tarjetas interactivas |
| **Calculando / Counter** | `animations/metrics/calculating-engine.js` | `runCalculationAnimation()` | Dashboards financieros, cotizadores, telemetría en vivo |
| **Descomposición 3D/2D** | `animations/effects/component-decomposition.js` | `toggleComponentDecomposition()` | Inspección de capas UI y efectos de matriz `stagger` 2D |
| **Chrono Timer** | `animations/timers/chrono-timer.js` | `new ChronoTimerController()` | Temporizadores OTP, subastas, SLA timers, pomodoros |

---

## 3. Recetas Avanzadas de Anime.js v4

### A. Distribución con `stagger()` (Lineal y Cuadrícula 2D)
```js
import { animate, stagger } from 'animejs';

// Cascada lineal desde el centro
animate('.card-item', {
  y: ['24px', '0px'],
  opacity: [0, 1],
  delay: stagger(80, { from: 'center' }),
  ease: 'outExpo'
});

// Onda expansiva en una cuadrícula 2D de 6 columnas x 4 filas
animate('.grid-cell', {
  scale: [1, 0.3, 1],
  delay: stagger(45, { grid: [6, 4], from: 'center' }),
  ease: 'inOutQuad'
});
```

### B. Secuencias Complejas con `createTimeline()`
```js
import { createTimeline, stagger } from 'animejs';

const tl = createTimeline({
  defaults: { duration: 500, ease: 'outQuart' }
});

tl.add('.modal-backdrop', { opacity: [0, 1], duration: 250 })
  .add('.modal-window', { scale: [0.9, 1], opacity: [0, 1] }, '-=120')
  .add('.modal-field', { y: [12, 0], opacity: [0, 1], delay: stagger(60) }, '-=200');
```

### C. Bucle de Tiempo Preciso con `createTimer()`
```js
import { createTimer } from 'animejs';

const timer = createTimer({
  duration: 10000,
  autoplay: true,
  onUpdate: (self) => {
    console.log('Tiempo transcurrido (ms):', self.currentTime);
  }
});
```

