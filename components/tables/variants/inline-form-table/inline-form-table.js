// Copia styles.css. La función devuelve un desmontador.
export function mountInlineFormTable(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const sync=()=>{let total=0;root.querySelectorAll('[data-row]').forEach(row=>{const subtotal=Math.max(0,Number(row.querySelector('[data-quantity]').value)||0)*Number(row.querySelector('[data-price]').value);row.querySelector('[data-subtotal]').textContent='$'+subtotal.toFixed(2);total+=subtotal;});root.querySelector('[role="status"]').textContent='Total: $'+total.toFixed(2);};root.addEventListener('input',sync,{signal});root.addEventListener('change',sync,{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="inline-form-table"]').forEach(mountInlineFormTable);
// HTML:
/*
<div class="cxd-table" data-cxd-control="inline-form-table"><table><thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr></thead><tbody><tr data-row><td>Nodos</td><td><input type="number" data-quantity min="0" value="2" aria-label="Cantidad nodos" /></td><td><select data-price aria-label="Precio nodos"><option value="20">$20</option><option value="40">$40</option></select></td><td data-subtotal>$40.00</td></tr><tr data-row><td>Almacenamiento</td><td><input type="number" data-quantity min="0" value="3" aria-label="Cantidad almacenamiento" /></td><td><select data-price aria-label="Precio almacenamiento"><option value="10">$10</option><option value="30">$30</option></select></td><td data-subtotal>$30.00</td></tr></tbody></table><span role="status">Total: $70.00</span></div>
*/
