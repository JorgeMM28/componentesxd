// Copia styles.css. La función devuelve un desmontador.
export function mountStylelessEditorial(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  root.querySelector('[data-read]').addEventListener('click',()=>{root.querySelector('[role="status"]').textContent='Especificación seleccionada';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="styleless-editorial"]').forEach(mountStylelessEditorial);
// HTML:
/*
<div class="cxd-card cxd-card--editorial" data-cxd-control="styleless-editorial"><span>ENSAYO ARQUITECTÓNICO // Nº 04</span><h3>La eliminación del contenedor innecesario</h3><p>La jerarquía tipográfica y el espacio definen el bloque.</p><button type="button" data-read>Leer especificación</button><span role="status">Listo para explorar</span></div>
*/
