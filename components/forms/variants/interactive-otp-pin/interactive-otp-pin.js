// Copia styles.css. La función devuelve un desmontador.
export function mountInteractiveOtpPin(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const slots=Array.from(root.querySelectorAll('input')); const status=root.querySelector('[role="status"]'); const sync=()=>{const count=slots.filter(input=>input.value).length; status.textContent=count===slots.length?'6 dígitos completos':count+' de 6 dígitos';}; slots.forEach((input,index)=>{input.addEventListener('input',()=>{input.value=input.value.replace(/\D/g,'').slice(-1); if(input.value)slots[index+1]?.focus(); sync();},{signal}); input.addEventListener('keydown',event=>{if(event.key==='Backspace'&&!input.value)slots[index-1]?.focus();},{signal}); input.addEventListener('paste',event=>{const digits=event.clipboardData?.getData('text').replace(/\D/g,'').slice(0,slots.length-index); if(!digits)return; event.preventDefault(); [...digits].forEach((digit,i)=>{slots[index+i].value=digit;}); slots[Math.min(index+digits.length,slots.length-1)].focus(); sync();},{signal});}); root.querySelector('[data-generate]').addEventListener('click',()=>{slots.forEach(input=>{input.value=String(Math.floor(Math.random()*10));}); sync();},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="interactive-otp-pin"]').forEach(mountInteractiveOtpPin);
// HTML:
/*
<div class="cxd-form" data-cxd-control="interactive-otp-pin"><div class="cxd-form__otp"><input inputmode="numeric" maxlength="1" aria-label="Dígito 1" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 2" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 3" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 4" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 5" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 6" /></div><button type="button" data-generate>Generar código</button><span role="status">Introduce 6 dígitos</span></div>
*/
