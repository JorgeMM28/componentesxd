import { animate, stagger, createTimeline, createTimer, createSpring, steps, svg } from 'animejs';

export function buildAnimeFrameworkSnippets(preset: { id: string; name: string; ease: string; duration: number }) {
  const openScriptTs = '<' + 'script lang="ts">';
  const openScriptSetup = '<' + 'script setup lang="ts">';
  const openScript = '<' + 'script>';
  const closeScript = '</' + 'script>';

  const reactSnippet = `// React 18/19 + Anime.js v4 (${preset.name})
import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export function AnimeDemo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const targets = rootRef.current.querySelectorAll('.anim-target');
    const anim = animate(targets, {
      x: [0, 140, 0],
      scale: [1, 1.15, 1],
      ease: '${preset.ease}',
      duration: ${preset.duration},
      delay: stagger(75)
    });
    return () => { anim.pause(); };
  }, []);

  return <div ref={rootRef}><div className="anim-target" /></div>;
}`;

  const vueSnippet = `<!-- Vue 3 Composition API + Anime.js v4 (${preset.name}) -->
${openScriptSetup}
import { onMounted, onUnmounted, ref } from 'vue';
import { animate, stagger } from 'animejs';

const boxRef = ref<HTMLElement | null>(null);
let animInstance: ReturnType<typeof animate> | null = null;

onMounted(() => {
  if (!boxRef.value) return;
  animInstance = animate(boxRef.value.querySelectorAll('.anim-target'), {
    x: [0, 140, 0],
    ease: '${preset.ease}',
    duration: ${preset.duration},
    delay: stagger(75)
  });
});

onUnmounted(() => animInstance?.pause());
${closeScript}`;

  const svelteSnippet = `<!-- Svelte 5 Runes + Anime.js v4 (${preset.name}) -->
${openScriptTs}
  import { animate, stagger } from 'animejs';

  function animeEffect(node: HTMLElement) {
    const anim = animate(node.querySelectorAll('.anim-target'), {
      x: [0, 140, 0],
      ease: '${preset.ease}',
      duration: ${preset.duration},
      delay: stagger(75)
    });
    return { destroy: () => anim.pause() };
  }
${closeScript}
<div use:animeEffect><div class="anim-target"></div></div>`;

  const astroSnippet = `---
// Astro 5 Component + Anime.js v4 (${preset.name})
---
<div class="anime-stage-container" id="stage-${preset.id}">
  <div class="anim-target"></div>
</div>

${openScript}
  import { animate, stagger } from 'animejs';
  animate('#stage-${preset.id} .anim-target', {
    x: [0, 140, 0],
    ease: '${preset.ease}',
    duration: ${preset.duration},
    delay: stagger(75)
  });
${closeScript}`;

  return { reactSnippet, vueSnippet, svelteSnippet, astroSnippet };
}

export function initAnimeCategoryWorkbench() {
  document.querySelectorAll<HTMLElement>('[data-preset-block]').forEach((block) => {
    const stageType = block.dataset.stageType || 'transforms-xyz';
    const baseEase = block.dataset.defaultEase || 'outExpo';
    const baseDuration = Number(block.dataset.defaultDuration || 1200);
    let currentSpeed = 1;
    let activeAnim: { pause?: () => void; play?: () => void; reverse?: () => void } | null = null;
    let stepIndex = 0;

    function launchAnimation(customOrigin: 'center' | 'first' | 'last' | number = 'center') {
      if (activeAnim && typeof activeAnim.pause === 'function') {
        activeAnim.pause();
      }
      const duration = Math.max(200, Math.round(baseDuration / currentSpeed));
      const els = block.querySelectorAll<HTMLElement>('[data-anim-el]');

      // 0A. 3D Perspective Transforms XYZ
      if (stageType === 'transforms-xyz') {
        const c1 = block.querySelector<HTMLElement>('[data-xyz-card="1"]');
        const c2 = block.querySelector<HTMLElement>('[data-xyz-card="2"]');
        const c3 = block.querySelector<HTMLElement>('[data-xyz-card="3"]');
        if (c1) {
          animate(c1, {
            rotateX: [0, 360],
            rotateY: [0, 180],
            duration: duration * 1.5,
            ease: 'inOutSine',
            loop: true,
            alternate: true
          });
        }
        if (c2) {
          animate(c2, {
            skewX: [-22, 22, -22],
            skewY: [-10, 10, -10],
            scale: [1, 1.18, 1],
            duration: duration * 1.2,
            ease: 'inOutQuad',
            loop: true
          });
        }
        if (c3) {
          activeAnim = animate(c3, {
            translateZ: [-60, 60, -60],
            rotateZ: [-25, 25, -25],
            ease: createSpring({ mass: 1, stiffness: 120, damping: 8 }),
            loop: true
          });
        }
        return;
      }

      // 0B. CSS Variables Reactivity
      if (stageType === 'css-vars') {
        const t1 = block.querySelector<HTMLElement>('[data-css-target="1"]');
        const t2 = block.querySelector<HTMLElement>('[data-css-target="2"]');
        const t3 = block.querySelector<HTMLElement>('[data-css-target="3"]');
        const lbl1 = block.querySelector<HTMLElement>('[data-css-val-1]');
        const lbl2 = block.querySelector<HTMLElement>('[data-css-val-2]');
        const lbl3 = block.querySelector<HTMLElement>('[data-css-val-3]');

        const state = { r: 16, g: 14, b: 2 };
        activeAnim = animate(state, {
          r: [16, 60, 16],
          g: [14, 40, 14],
          b: [2, 8, 2],
          duration: duration * 1.3,
          ease: 'inOutSine',
          loop: true,
          onUpdate: () => {
            const rad = Math.round(state.r);
            const glw = Math.round(state.g);
            const bdr = Math.round(state.b);
            if (t1) t1.style.setProperty('--radius', `${rad}px`);
            if (t2) t2.style.setProperty('--glow', `${glw}px`);
            if (t3) t3.style.setProperty('--border', `${bdr}px`);
            if (lbl1) lbl1.textContent = `--radius: ${rad}px`;
            if (lbl2) lbl2.textContent = `--glow: ${glw}px`;
            if (lbl3) lbl3.textContent = `--border: ${bdr}px`;
          }
        });
        return;
      }

      // 0C. DOM & SVG Attributes
      if (stageType === 'dom-attrs') {
        const prog = block.querySelector<HTMLProgressElement>('[data-dom-progress]');
        const progLbl = block.querySelector<HTMLElement>('[data-dom-progress-lbl]');
        const circle = block.querySelector<SVGCircleElement>('[data-dom-circle]');
        const circleLbl = block.querySelector<HTMLElement>('[data-dom-circle-lbl]');
        const range = block.querySelector<HTMLInputElement>('[data-dom-range]');
        const rangeLbl = block.querySelector<HTMLElement>('[data-dom-range-lbl]');

        const domState = { p: 0, r: 16, flow: 100 };
        activeAnim = animate(domState, {
          p: [0, 100, 0],
          r: [16, 38, 16],
          flow: [100, 1000, 100],
          duration: duration * 1.4,
          ease: 'inOutQuad',
          loop: true,
          onUpdate: () => {
            const val = Math.round(domState.p);
            const rad = Math.round(domState.r);
            const flw = Math.round(domState.flow);
            if (prog) prog.value = val;
            if (progLbl) progLbl.textContent = `VALOR: ${val}%`;
            if (circle) {
              circle.setAttribute('r', String(rad));
              const offset = 176 - (176 * val) / 100;
              circle.style.strokeDashoffset = String(offset);
            }
            if (circleLbl) circleLbl.textContent = `RADIO: ${rad}px`;
            if (range) range.value = String(flw);
            if (rangeLbl) rangeLbl.textContent = `TELEMETRÍA: ${flw} MB/s`;
          }
        });
        return;
      }

      // 0D. Color Spectrum Morphing
      if (stageType === 'color-morph') {
        const cards = Array.from(block.querySelectorAll<HTMLElement>('[data-color-card]'));
        const colors = [
          '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#06b6d4', '#10b981'
        ];
        cards.forEach((card, idx) => {
          const lbl = card.querySelector<HTMLElement>('[data-color-label]');
          const shiftColors = [...colors.slice(idx), ...colors.slice(0, idx), colors[idx]];
          animate(card, {
            backgroundColor: shiftColors,
            duration: duration * 2.2,
            ease: 'linear',
            loop: true,
            delay: idx * 120,
            onUpdate: () => {
              const bg = window.getComputedStyle(card).backgroundColor;
              if (lbl) lbl.textContent = bg.startsWith('rgb') ? bg.replace('rgb(', '').replace(')', '') : bg;
            }
          });
        });
        return;
      }

      // 0E. Heterogeneous Multi-Targets
      if (stageType === 'multi-targets') {
        const box = block.querySelector<HTMLElement>('[data-multi-el="box"]');
        const circle = block.querySelector<HTMLElement>('[data-multi-el="circle"]');
        const btn = block.querySelector<HTMLElement>('[data-multi-el="btn"]');
        const badge = block.querySelector<HTMLElement>('[data-multi-el="badge"]');
        const mono = block.querySelector<HTMLElement>('[data-multi-el="mono"]');
        const targets = [box, circle, btn, badge, mono].filter(Boolean) as HTMLElement[];

        activeAnim = animate(targets, {
          y: [0, -32, 0],
          scale: [1, 1.25, 1],
          rotate: (_el, i) => ((i ?? 0) % 2 === 0 ? ['0deg', '25deg', '0deg'] : ['0deg', '-25deg', '0deg']),
          duration: duration * 1.1,
          delay: stagger(90),
          ease: 'outBack',
          loop: true
        });
        return;
      }

      // 0F. Explicit From/To Properties
      if (stageType === 'from-to-prop') {
        const b1 = block.querySelector<HTMLElement>('[data-ft-node="1"]');
        const b2 = block.querySelector<HTMLElement>('[data-ft-node="2"]');
        const b3 = block.querySelector<HTMLElement>('[data-ft-node="3"]');
        if (b1) {
          animate(b1, {
            x: [0, 260, 0],
            duration: duration * 1.3,
            ease: 'outExpo',
            loop: true
          });
        }
        if (b2) {
          animate(b2, {
            x: [0, 260, 0],
            rotate: ['0deg', '720deg'],
            duration: duration * 1.5,
            ease: 'inOutQuad',
            loop: true
          });
        }
        if (b3) {
          activeAnim = animate(b3, {
            x: [0, 260, 0],
            scale: [0.6, 1.4, 0.6],
            duration: duration * 1.1,
            ease: createSpring({ mass: 1, stiffness: 140, damping: 9 }),
            loop: true
          });
        }
        return;
      }

      // 1. Easing Race
      if (stageType === 'easing-race') {
        const r1 = block.querySelector<HTMLElement>('[data-runner="linear"]');
        const r2 = block.querySelector<HTMLElement>('[data-runner="outQuad"]');
        const r3 = block.querySelector<HTMLElement>('[data-runner="outExpo"]');
        const r4 = block.querySelector<HTMLElement>('[data-runner="spring"]');
        if (r1) animate(r1, { x: [0, 260], duration, ease: 'linear', loop: true, alternate: true });
        if (r2) animate(r2, { x: [0, 260], duration, ease: 'outQuad', loop: true, alternate: true });
        if (r3) animate(r3, { x: [0, 260], duration, ease: 'outExpo', loop: true, alternate: true });
        if (r4) activeAnim = animate(r4, { x: [0, 260], ease: createSpring({ mass: 1, stiffness: 110, damping: 9 }), loop: true, alternate: true });
        return;
      }

      // 2. 2D Grid Stagger Ripple
      if (stageType === 'stagger-grid-2d' || stageType === 'space-shatter') {
        const cells = block.querySelectorAll<HTMLElement>('.grid-2d-cell');
        activeAnim = animate(cells, {
          scale: [1, 0.25, 1.18, 1],
          rotate: ['0deg', '45deg', '0deg'],
          opacity: [1, 0.35, 1],
          duration,
          delay: stagger(38, { grid: [8, 4], from: customOrigin }),
          ease: 'inOutQuad',
          loop: true
        });
        return;
      }

      // 3. SVG Drawable, Morphing & Motion Path
      if (stageType.startsWith('svg-')) {
        if (stageType === 'svg-morph') {
          const poly = block.querySelector<SVGPolygonElement>('[data-morph-poly]');
          if (poly) {
            const shapes = [
              '120,10 180,35 180,85 120,110 60,85 60,35',
              '120,12 148,44 190,50 158,80 166,114 120,94 74,114 82,80 50,50 92,44',
              '40,20 200,20 220,60 200,100 40,100 20,60'
            ];
            activeAnim = animate(poly, {
              points: shapes,
              duration: duration * 1.4,
              ease: 'inOutCubic',
              loop: true,
              alternate: true
            });
          }
          return;
        }
        if (stageType === 'svg-motionpath') {
          const track = block.querySelector<SVGPathElement>('[data-motion-track]');
          const rider = block.querySelector<HTMLElement>('[data-motion-rider]');
          if (track && rider) {
            const motion = svg.createMotionPath(track);
            activeAnim = animate(rider, {
              ...motion,
              duration: duration * 1.3,
              ease: 'inOutSine',
              loop: true,
              alternate: true
            });
          }
          return;
        }
        const drawables = block.querySelectorAll<SVGGeometryElement>('[data-drawable-path]');
        if (drawables.length) {
          activeAnim = animate(svg.createDrawable(drawables), {
            draw: ['0 0', '0 1', '1 1'],
            duration: duration * 1.3,
            delay: stagger(180),
            ease: 'inOutQuad',
            loop: true
          });
        }
        return;
      }

      // 4. Scrubbable Timeline
      if (stageType === 'tl-scrub') {
        const tl = createTimeline({ autoplay: false, defaults: { duration: 500, ease: 'outBack' } });
        tl.add(els, { y: [0, -28, 0], scale: [1, 1.25, 1], rotate: ['0deg', '180deg', '360deg'] }, stagger(120));
        activeAnim = tl;
        tl.play();
        const scrubber = block.querySelector<HTMLInputElement>('[data-tl-scrubber]');
        scrubber?.addEventListener('input', () => {
          tl.pause();
          tl.seek((Number(scrubber.value) / 100) * tl.duration);
        });
        return;
      }

      // 5. Step-by-Step Wizard
      if (stageType === 'tl-stepper') {
        const nodes = block.querySelectorAll<HTMLElement>('[data-st-node]');
        const bar = block.querySelector<HTMLElement>('[data-st-bar]');
        nodes.forEach((n, i) => n.classList.toggle('is-on', i <= stepIndex));
        if (bar) {
          activeAnim = animate(bar, { width: `${((stepIndex + 1) / nodes.length) * 100}%`, duration: 480, ease: 'outExpo' });
        }
        return;
      }

      // 6. Timers & Calculators
      if (stageType.startsWith('timer-') || stageType.startsWith('calc-')) {
        const readout = block.querySelector<HTMLElement>('[data-telemetry-readout]');
        if (stageType === 'calc-scramble' && readout) {
          const chars = '0123456789ABCDEF';
          const timerObj = createTimer({
            duration,
            onUpdate: (self) => {
              if (self.progress > 0.92) {
                readout.textContent = 'VERIFIED // 8F92A4C10E7B';
              } else {
                let s = 'COMPUTING // ';
                for (let i = 0; i < 12; i++) s += chars[Math.floor(Math.random() * chars.length)];
                readout.textContent = s;
              }
            }
          });
          activeAnim = timerObj;
        } else if (stageType.startsWith('timer-') && readout) {
          activeAnim = createTimer({
            duration: 10000,
            onUpdate: (self) => {
              const s = (self.currentTime / 1000).toFixed(2);
              readout.textContent = `${s}s ELAPSED`;
            }
          });
        } else if (readout) {
          const state = { v: 0 };
          activeAnim = animate(state, {
            v: 148920.5,
            duration,
            ease: 'outExpo',
            onUpdate: () => {
              readout.textContent = '$' + state.v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }
          });
        }
        if (els.length) {
          animate(els, { scaleX: [0.15, 1], duration, delay: stagger(100), ease: 'outQuart' });
        }
        return;
      }

      // 7. Loaders & Skeletons
      if (stageType.startsWith('load-')) {
        if (stageType === 'load-spinner') {
          activeAnim = animate(els, {
            rotate: (_el, i) => (i === 0 ? '1turn' : '-1turn'),
            duration,
            ease: 'linear',
            loop: true
          });
          return;
        }
        if (stageType === 'load-dots') {
          activeAnim = animate(els, {
            y: ['0px', '-16px', '0px'],
            scale: [1, 1.3, 1],
            duration: 850,
            delay: stagger(120),
            ease: 'inOutCubic',
            loop: true
          });
          return;
        }
        activeAnim = animate(els, {
          scaleY: [0.25, 1, 0.35],
          opacity: [0.35, 1],
          duration: 850,
          delay: stagger(70),
          ease: 'inOutSine',
          loop: true,
          alternate: true
        });
        return;
      }

      // 8. 3D Stackers & Component Decomposition
      if (stageType.startsWith('space-')) {
        const layers = Array.from(els);
        if (stageType === 'space-decompose') {
          layers.forEach((layer, i) => {
            activeAnim = animate(layer, {
              y: [0, (i - 1.5) * 28, 0],
              x: [0, (i - 1.5) * 18, 0],
              rotateX: [0, 22, 0],
              rotateZ: [0, -8, 0],
              scale: [1, 0.94, 1],
              duration: duration * 1.4,
              delay: i * 80,
              ease: 'outBack',
              loop: true
            });
          });
          return;
        }
        if (stageType === 'space-fan') {
          layers.forEach((layer, i) => {
            activeAnim = animate(layer, {
              rotate: [0, (i - 1.5) * 14, 0],
              x: [0, (i - 1.5) * 42, 0],
              duration: duration * 1.2,
              delay: i * 60,
              ease: 'outBack',
              loop: true
            });
          });
          return;
        }
        layers.forEach((layer, i) => {
          activeAnim = animate(layer, {
            y: [0, i * -12, 0],
            scale: [1, 1 - i * 0.06, 1],
            rotateX: [0, 18, 0],
            duration,
            delay: i * 75,
            ease: 'outBack',
            loop: true
          });
        });
        return;
      }

      // 9. Spring Physics / Steps / Transforms / Stagger
      if (stageType === 'spring-physics') {
        activeAnim = animate(els, {
          y: [0, -32, 0],
          scale: [1, 1.25, 1],
          rotate: ['0deg', '180deg', '0deg'],
          delay: stagger(70),
          ease: createSpring({ mass: 1, stiffness: 130, damping: 8 }),
          loop: true
        });
      } else if (stageType === 'steps-motion') {
        activeAnim = animate(els, {
          y: [-24, 24, 0],
          rotate: ['0deg', '90deg', '0deg'],
          duration,
          delay: stagger(65),
          ease: steps(5),
          loop: true
        });
      } else {
        activeAnim = animate(els, {
          y: [0, -24, 0],
          scale: [1, 1.18, 1],
          rotate: ['0deg', '15deg', '0deg'],
          duration,
          delay: stagger(65, { from: 'center' }),
          ease: baseEase,
          loop: true
        });
      }
    }

    launchAnimation();

    // Controles de Reproducción
    block.querySelector('[data-anim-play]')?.addEventListener('click', () => launchAnimation());
    block.querySelector('[data-anim-pause]')?.addEventListener('click', () => activeAnim?.pause?.());
    block.querySelector('[data-anim-reverse]')?.addEventListener('click', () => {
      if (activeAnim?.reverse) {
        activeAnim.reverse();
        activeAnim.play?.();
      } else {
        launchAnimation('last');
      }
    });

    block.querySelectorAll<HTMLButtonElement>('[data-spd]').forEach((sBtn) => {
      sBtn.addEventListener('click', () => {
        currentSpeed = Number(sBtn.dataset.spd || 1);
        block.querySelectorAll('[data-spd]').forEach((b) => b.classList.remove('is-active'));
        sBtn.classList.add('is-active');
        launchAnimation();
      });
    });

    block.querySelectorAll<HTMLButtonElement>('.grid-2d-cell').forEach((cell) => {
      cell.addEventListener('click', () => {
        launchAnimation(Number(cell.dataset.cellIdx || 0));
      });
    });

    block.querySelector('[data-st-advance]')?.addEventListener('click', () => {
      stepIndex = (stepIndex + 1) % 4;
      launchAnimation();
    });

    // Selector Desplegable Exclusivo para el Código del Framework
    const fwSelect = block.querySelector<HTMLSelectElement>('[data-anime-fw-select]');
    const panels = block.querySelectorAll<HTMLElement>('[data-afw-panel]');
    const toggleBtn = block.querySelector<HTMLButtonElement>('[data-toggle-anime-code]');
    const drawer = block.querySelector<HTMLElement>('[data-anime-drawer]');
    const copyBtn = block.querySelector<HTMLButtonElement>('[data-copy-anime-code]');
    const copyLbl = block.querySelector<HTMLElement>('[data-copy-lbl]');

    fwSelect?.addEventListener('change', () => {
      const val = fwSelect.value;
      panels.forEach((p) => p.classList.toggle('is-active', p.dataset.afwPanel === val));
    });

    toggleBtn?.addEventListener('click', () => {
      drawer?.classList.toggle('is-collapsed');
    });

    copyBtn?.addEventListener('click', async () => {
      const activeCode = block.querySelector('.unit-code-block.is-active code');
      if (!activeCode) return;
      await navigator.clipboard.writeText(activeCode.textContent || '');
      if (copyLbl) {
        const prev = copyLbl.textContent;
        copyLbl.textContent = '¡Código Copiado!';
        setTimeout(() => {
          copyLbl.textContent = prev;
        }, 1400);
      }
    });
  });
}

