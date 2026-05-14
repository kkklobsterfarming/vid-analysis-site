async function initSearch(){
  const input=document.getElementById('search');
  const cards=[...document.querySelectorAll('.card')];
  let index=[];
  try{index=await fetch('/index.json').then(r=>r.json())}catch(e){index=[]}
  const byUrl=new Map(index.map(x=>[x.url,x]));
  input?.addEventListener('input',()=>{
    const q=input.value.toLowerCase().trim();
    cards.forEach(card=>{
      const doc=byUrl.get(new URL(card.href).pathname)||{};
      const hay=(card.dataset.search+' '+(doc.content||'')).toLowerCase();
      card.style.display=!q||hay.includes(q)?'':'none';
    });
  });
}
initSearch();
