<script lang="ts">
import { mountDownloadsCenter } from './downloads-center.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountDownloadsCenter(node) }; }
</script>
<section class="cxd-special cxd-downloads" data-cxd-control="downloads-center" use:control><header><small>TRANSFERENCIAS</small><h3>Centro de descargas</h3></header><div data-downloads><label>kit-ui.zip <progress max="100" value="64"></progress><b>64%</b></label><label>assets.mov <progress max="100" value="28"></progress><b>28%</b></label></div><button type="button" data-start>Iniciar / continuar</button><span role="status">2 transferencias en espera.</span></section>
