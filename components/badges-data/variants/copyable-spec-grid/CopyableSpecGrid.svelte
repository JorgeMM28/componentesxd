<script lang="ts">
import { mountCopyableSpecGrid } from './copyable-spec-grid.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountCopyableSpecGrid(node) }; }
</script>
<div class="cxd-data" data-cxd-control="copyable-spec-grid" use:control><button type="button" data-copy="cxd_public_demo">API_PUBLIC_KEY · copiar</button><button type="button" data-copy="example.test:4321">PRIMARY_ENDPOINT · copiar</button><button type="button" data-copy="sha256:demo">BUILD_DIGEST · copiar</button><span role="status">Selecciona un valor</span></div>
