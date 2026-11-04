<script lang="ts">
import { mountContentFitInlineBar } from './content-fit-inline-bar.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountContentFitInlineBar(node) }; }
</script>
<div class="cxd-form cxd-form--inline" data-cxd-control="content-fit-inline-bar" use:control><span>https://</span><input type="text" data-domain value="mi-proyecto.dev" aria-label="Dominio" /><button type="button" data-connect>Conectar dominio</button><span role="status">Listo</span></div>
