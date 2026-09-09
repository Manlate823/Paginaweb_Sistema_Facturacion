const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
const themeButton=document.querySelector('.theme-toggle');
const downloadUrl=String(window.MANLATE_CONFIG?.downloadUrl||'').trim();
document.querySelectorAll('[data-download]').forEach(button=>{
  const configured=downloadUrl&&downloadUrl!=='#'&&!downloadUrl.startsWith('PEGA_AQUI');
  if(configured){button.href=downloadUrl;button.target='_blank';button.rel='noopener'}
  else button.addEventListener('click',event=>{event.preventDefault();alert('El enlace de descarga todavía no está configurado. Abre assets/config.js y pega tu enlace.')});
});
const applyTheme=theme=>{
  const dark=theme==='dark';
  document.documentElement.dataset.theme=dark?'dark':'light';
  localStorage.setItem('manlate-web-theme',dark?'dark':'light');
  themeButton.querySelector('b').textContent=dark?'Modo claro':'Modo oscuro';
  themeButton.setAttribute('aria-label',dark?'Activar modo claro':'Activar modo oscuro');
};
applyTheme(document.documentElement.dataset.theme);
themeButton.addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const panel=document.querySelector('.whatsapp-panel');
const bubble=document.querySelector('.wa-bubble');
document.querySelector('.wa-close').addEventListener('click',()=>{panel.classList.add('hidden');bubble.classList.add('show')});
bubble.addEventListener('click',()=>{panel.classList.remove('hidden');bubble.classList.remove('show')});
