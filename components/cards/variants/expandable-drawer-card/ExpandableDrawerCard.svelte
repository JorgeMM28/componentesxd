<script lang="ts">
import { mountExpandableDrawerCard } from './expandable-drawer-card.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountExpandableDrawerCard(node) }; }
</script>
<div class="cxd-card" data-cxd-control="expandable-drawer-card" use:control><strong>Reporte de seguridad automático</strong><button type="button" data-toggle aria-expanded="true">Desplegar / ocultar diagnóstico</button><p data-detail>0 vulnerabilidades críticas · Certificados TLS renovados por 90 días.</p></div>
