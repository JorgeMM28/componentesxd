<!--
  ============================================================================
  COMPONENTESXD — SMART FLOATING INPUT (SVELTE 5)
  Archivo: components/forms/svelte/SmartInput.svelte
  ============================================================================
-->
<script lang="ts">
  import '../css-scss/forms.css';
  let { value = $bindable(''), label = 'Campo', type = 'text' } = $props();
</script>

<div class="cxd-field">
  <div class="cxd-floating-wrap">
    <input {type} bind:value placeholder=" " class="cxd-floating-input" />
    <label class="cxd-floating-label">{label}</label>
  </div>
</div>

