<!--
  ============================================================================
  COMPONENTESXD — KINETIC BUTTON (SVELTE 5)
  Archivo: components/buttons/svelte/KineticButton.svelte
  ============================================================================
-->
<script lang="ts">
  import '../css-scss/buttons.css';
  import type { Snippet } from 'svelte';

  let {
    variant = 'primary',
    loading = false,
    magnetic = true,
    children,
    onclick
  }: {
    variant?: 'primary' | 'shimmer' | 'glass' | 'brutalist';
    loading?: boolean;
    magnetic?: boolean;
    children?: Snippet;
    onclick?: (e: MouseEvent) => void;
  } = $props();

  let tx = $state(0);
  let ty = $state(0);

  function handleMove(e: MouseEvent) {
    if (!magnetic) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    tx = (e.clientX - rect.left - rect.width / 2) * 0.25;
    ty = (e.clientY - rect.top - rect.height / 2) * 0.25;
  }
</script>

<button
  type="button"
  class="cxd-btn cxd-btn--{variant} {loading ? 'is-loading' : ''}"
  style:transform={tx || ty ? `translate3d(${tx}px, ${ty}px, 0)` : undefined}
  onmousemove={handleMove}
  onmouseleave={() => { tx = 0; ty = 0; }}
  {onclick}
>
  <span class="cxd-btn__spinner"></span>
  {@render children?.()}
</button>

