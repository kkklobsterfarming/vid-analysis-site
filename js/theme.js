function initThemeToggle(){
  const root=document.documentElement;
  const btn=document.querySelector('.theme-toggle');
  if(!btn)return;
  const prefersDark=()=>window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
  const current=()=>root.dataset.theme||localStorage.getItem('theme')||(prefersDark()?'dark':'light');
  const apply=(theme,persist=false)=>{
    root.dataset.theme=theme;
    btn.setAttribute('aria-pressed', theme==='dark'?'true':'false');
    const label=btn.querySelector('.theme-label');
    const icon=btn.querySelector('.theme-icon');
    if(label)label.textContent=theme==='dark'?'Dark':'Light';
    if(icon)icon.textContent=theme==='dark'?'☾':'☼';
    if(persist)localStorage.setItem('theme',theme);
  };
  apply(current());
  btn.addEventListener('click',()=>apply(current()==='dark'?'light':'dark',true));
}
initThemeToggle();
function initTocDefault(){
  const details=document.querySelector('.toc-details');
  if(!details)return;
  const mq=window.matchMedia('(max-width: 900px)');
  const apply=()=>{ if(mq.matches) details.removeAttribute('open'); else details.setAttribute('open',''); };
  apply();
  mq.addEventListener?.('change',apply);
}
initTocDefault();
