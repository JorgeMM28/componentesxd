// Copia styles.css. La función devuelve un desmontador.
export function mountBrutalistLedger(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  // Registro financiero informativo sin listeners.
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="brutalist-ledger"]').forEach(mountBrutalistLedger);
// HTML:
/*
<div class="cxd-table cxd-table--ledger" data-cxd-control="brutalist-ledger"><table><thead><tr><th>LOTE</th><th>OPERACIÓN</th><th>IMPORTE NETO</th></tr></thead><tbody><tr><td>001</td><td>Liquidación</td><td>$420,000.00</td></tr><tr><td>002</td><td>Cobertura</td><td>$185,500.00</td></tr><tr><td>003</td><td>Custodia</td><td>$910,250.00</td></tr></tbody><tfoot><tr><th>TOTAL</th><td></td><td>$1,515,750.00</td></tr></tfoot></table></div>
*/
