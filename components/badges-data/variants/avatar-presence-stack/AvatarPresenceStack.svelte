<!--
  ============================================================================
  COMPONENTESXD — 05. Collaborator Avatar Stack + Presence Ring (SVELTE 5 RUNES)
  Archivo: components/badges-data/variants/avatar-presence-stack/AvatarPresenceStack.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '05. Collaborator Avatar Stack + Presence Ring',
    badge = 'PRESENCE UI',
    interfaceTheme = undefined,
    onAction
  }: {
    title?: string;
    badge?: string;
    interfaceTheme?: string;
    onAction?: (id: string) => void;
  } = $props();

  let count = $state(0);
</script>

<section class="cxd-badges-data-avatar-presence-stack" data-theme={interfaceTheme}>
  <header class="cxd-badges-data-avatar-presence-stack__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-badges-data-avatar-presence-stack__body">
    <p>Grupo superpuesto de colaboradores activos con contador de excedente (+8) y estado online.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('avatar-presence-stack');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
