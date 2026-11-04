<script lang="ts">
import { mountFormReplyToast } from './form-reply-toast.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountFormReplyToast(node) }; }
</script>
<div class="cxd-toast" data-cxd-control="form-reply-toast" use:control><strong>Comentario de revisión</strong><p>¿Podemos subir el límite de rate-limiting?</p><form data-form><input data-input type="text" required aria-label="Respuesta rápida" placeholder="Escribe una respuesta" /><button type="submit">Responder</button></form><span role="status">Esperando respuesta</span></div>
