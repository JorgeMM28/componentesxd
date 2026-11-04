<!--
  ============================================================================
  COMPONENTESXD — 07. Drag & Drop Artifact Dropzone (SVELTE 5 RUNES)
  Archivo: components/forms/variants/file-dropzone-inspector/FileDropzoneInspector.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '07. Drag & Drop Artifact Dropzone',
    badge = 'FILE UPLOAD',
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

<section class="cxd-forms-file-dropzone-inspector" data-theme={interfaceTheme}>
  <header class="cxd-forms-file-dropzone-inspector__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-forms-file-dropzone-inspector__body">
    <p>Zona de carga con borde punteado reactivo, validación de extensión/tamaño y vista previa del archivo.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('file-dropzone-inspector');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
