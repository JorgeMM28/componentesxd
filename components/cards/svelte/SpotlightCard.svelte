<!--
  ============================================================================
  COMPONENTESXD — SPOTLIGHT BENTO CARD (SVELTE 5)
  Archivo: components/cards/svelte/SpotlightCard.svelte
  ============================================================================
-->
<script lang="ts">
  import '../css-scss/cards.css';

  let {
    tag,
    title,
    metric,
    delta = '+14.2%',
    description
  }: {
    tag: string;
    title: string;
    metric: string;
    delta?: string;
    description: string;
  } = $props();

  function onMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  }
</script>

<article class="cxd-spotlight-card" onmousemove={onMove}>
  <div class="cxd-card-header">
    <span class="cxd-card-tag">{tag}</span>
    <span class="cxd-card-delta">{delta}</span>
  </div>
  <h4>{title}</h4>
  <div class="cxd-card-metric">{metric}</div>
  <p class="cxd-card-desc">{description}</p>
</article>

