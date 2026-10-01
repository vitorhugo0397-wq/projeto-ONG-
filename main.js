const modal=document.getElementById('modal'),toast=document.getElementById('toast');document.getElementById('openModal').onclick=()=>modal.classList.add('open');document.getElementById('closeModal').onclick=()=>modal.classList.remove('open');modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});document.getElementById('showToast').onclick=()=>{toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2500)};

const contrastButton = document.querySelector('#contraste');
const storageKey = 'ong-alto-contraste';
function applyContrast(enabled) {
  document.body.classList.toggle('alto-contraste', enabled);
  contrastButton.setAttribute('aria-pressed', String(enabled));
}
try { applyContrast(localStorage.getItem(storageKey) === 'true'); }
catch { applyContrast(false); }
contrastButton.addEventListener('click', () => {
  const enabled = !document.body.classList.contains('alto-contraste');
  applyContrast(enabled);
  try { localStorage.setItem(storageKey, String(enabled)); } catch {}
});
