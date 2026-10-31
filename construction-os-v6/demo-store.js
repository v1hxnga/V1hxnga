/* Construction OS — client-side workspace storage */
const STORAGE_KEYS={projects:'cos_demo_projects_v1',captures:'cos_demo_captures_v1',items:'cos_demo_items_v1'};
const SAMPLE_IMAGES=[
  'https://images.unsplash.com/photo-1724113595861-93b16bc264a5?auto=format&fit=crop&w=1200&q=78',
  'https://images.unsplash.com/photo-1723134016539-2ee1950ec2c0?auto=format&fit=crop&w=1200&q=78',
  'https://images.unsplash.com/photo-1762356731874-b4042915d34c?auto=format&fit=crop&w=1200&q=78'
];
function storeRead(key){try{return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return []}}
function storeWrite(key,val){localStorage.setItem(key,JSON.stringify(val))}
function recordId(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function workspaceProjectCard(p,id){return `<div class="project" data-a="${id}"><div class="pt"><div><h3>${esc(p.name)}</h3><p>${esc(p.location)}</p></div><span class="health ${p.status==='Attention'?'att':''}">${esc(p.status||'On track')}</span></div><div class="stats"><div class="stat"><small>Physical progress</small><b>${esc(p.progress||'0%')}</b></div><div class="stat"><small>Forecast final cost</small><b>${esc(p.forecast||'A$0.0m')}</b></div><div class="stat"><small>Open RFIs</small><b>${esc(p.rfis||'0')}</b></div></div><p class="note">${esc(p.note||'Project record created in Construction OS.')}</p></div>`}
projects=function(){
  const saved=storeRead(STORAGE_KEYS.projects);
  const built=P.map((p,i)=>workspaceProjectCard({name:p[0],location:p[1],progress:p[2],forecast:p[3],rfis:p[4],status:p[5],note:p[6]},`p${i}`)).join('');
  const added=saved.map(p=>workspaceProjectCard(p,`dp-${p.id}`)).join('');
  return H('Every build, one view.','Compare project progress, expected final cost, design pressure and delivery risk from one screen.')+`<div class="projectsToolbar"><div><b>${P.length+saved.length} projects</b><span>${saved.length?`${saved.length} project${saved.length===1?'':'s'} added to this workspace`:'Create a new project and it will appear here instantly.'}</span></div><button class="addPrimary" data-a="add-project">＋ ADD PROJECT</button></div><div class="projects">${built}${added}</div>`;
};
function activitySection(){
  const items=storeRead(STORAGE_KEYS.items);
  return `<section class="section tempWorkspace"><div class="sh"><div><h3>Project activity</h3><p>Add a site note, issue, delivery or action and keep important project updates in one place.</p></div><button class="addPrimary compact" data-a="add-temp-item">＋ ADD ITEM</button></div>${items.length?`<div class="tempGrid">${items.map(x=>`<button class="tempItem" data-a="ti-${x.id}"><span>${esc(x.type)}</span><b>${esc(x.title)}</b><p>${esc(x.project)} · ${esc(x.detail)}</p><small>Added ${esc(x.time)}</small></button>`).join('')}</div>`:`<div class="tempEmpty">No activity items yet. Add the first site note, issue, delivery or action.</div>`}</section>`
}
const baseHomeStore=home;
home=function(){return baseHomeStore()+activitySection()};
const baseFieldStore=field;
field=function(){
  let h=baseFieldStore();
  let n=0;
  h=h.replace(/<div class="captureImg"><\/div>/g,()=>`<div class="captureImg"><img src="${SAMPLE_IMAGES[n++%SAMPLE_IMAGES.length]}" alt="Construction site capture" loading="lazy"></div>`);
  const extra=storeRead(STORAGE_KEYS.captures).map(c=>`<button class="captureCard" data-a="dc-${c.id}"><div class="captureImg"><img src="${esc(c.image||SAMPLE_IMAGES[0])}" alt="${esc(c.title)}" loading="lazy"></div><div class="captureCopy"><b>${esc(c.title)}</b><small>${esc(c.time)}</small><span>${esc(c.trade)} · ${esc(c.location)}</span></div></button>`).join('');
  if(extra)h=h.replace('</button></div></section><section class="section">','</button>'+extra+'</div></section><section class="section">');
  return h;
};
function projectForm(){v6Modal('Add Project','Create a new project record in Construction OS.',`<form class="demoForm" id="demoProjectForm"><label>Project name<input name="name" required placeholder="e.g. Central Park Offices"></label><label>Location<input name="location" required placeholder="e.g. Sydney, NSW"></label><div class="form2"><label>Progress<input name="progress" value="12%" placeholder="12%"></label><label>Forecast cost<input name="forecast" value="A$6.8m" placeholder="A$6.8m"></label></div><div class="form2"><label>Open RFIs<input name="rfis" type="number" min="0" value="3"></label><label>Status<select name="status"><option>On track</option><option>Attention</option></select></label></div><label>Project note<textarea name="note" placeholder="Early works commenced. Site mobilisation is progressing to plan."></textarea></label><button class="v6Btn full" type="submit">ADD PROJECT</button></form>`)}
function activityForm(){v6Modal('Add Project Item','Capture a new action, site note, issue, delivery or safety item.',`<form class="demoForm" id="demoItemForm"><label>Item type<select name="type"><option>Action</option><option>Site Note</option><option>Issue</option><option>Delivery</option><option>Safety</option></select></label><label>Title<input name="title" required placeholder="e.g. Confirm crane delivery"></label><label>Project<input name="project" value="Harbourview Residences"></label><label>Details<textarea name="detail" placeholder="Short note for the team"></textarea></label><button class="v6Btn full" type="submit">ADD ITEM</button></form>`)}
function captureForm(){v6Modal('Add Site Capture','Create a timestamped site record linked to the project.',`<form class="demoForm" id="demoCaptureForm"><label>Capture title<input name="title" required placeholder="e.g. Level 9 formwork"></label><div class="form2"><label>Location<input name="location" required value="Level 8 · Zone C"></label><label>Trade<input name="trade" required value="Structure"></label></div><label>Site photo<select name="image"><option value="0">High-rise construction</option><option value="1">Site works & equipment</option><option value="2">Building construction</option></select></label><button class="v6Btn full" type="submit">SAVE SITE CAPTURE</button></form>`)}
const basePopStore=pop;
pop=function(id){
  if(id==='add-project')return projectForm();
  if(id==='add-temp-item')return activityForm();
  if(id==='quick-photo')return captureForm();
  if(id.startsWith('dp-')){const q=storeRead(STORAGE_KEYS.projects).find(x=>x.id===id.slice(3));if(q)return v6Modal(q.name,'Project overview.',v6Details([['Progress',q.progress],['Forecast',q.forecast],['Open RFIs',q.rfis],['Health',q.status]])+`<div class="demoNotice">${esc(q.note||'Project record created in Construction OS.')}</div>`)}
  if(id.startsWith('ti-')){const q=storeRead(STORAGE_KEYS.items).find(x=>x.id===id.slice(3));if(q)return v6Modal(q.title,`${q.type} · ${q.project}`,`<div class="demoNotice">${esc(q.detail||'Project activity item')}</div>${v6Details([['Type',q.type],['Project',q.project],['Added',q.time]])}`)}
  if(id.startsWith('dc-')){const q=storeRead(STORAGE_KEYS.captures).find(x=>x.id===id.slice(3));if(q)return v6Modal(q.title,'Timestamped site evidence tied to a project record.',`<img class="modalPhoto" src="${esc(q.image)}" alt="${esc(q.title)}">${v6Details([['Location',q.location],['Timestamp',q.time],['Project','Harbourview'],['Trade',q.trade]])}`)}
  return basePopStore(id);
};
document.addEventListener('submit',e=>{
  if(e.target.id==='demoProjectForm'){
    e.preventDefault();const f=new FormData(e.target),arr=storeRead(STORAGE_KEYS.projects);arr.unshift({id:recordId(),name:f.get('name'),location:f.get('location'),progress:f.get('progress')||'0%',forecast:f.get('forecast')||'A$0.0m',rfis:f.get('rfis')||'0',status:f.get('status')||'On track',note:f.get('note')||'Project record created in Construction OS.'});storeWrite(STORAGE_KEYS.projects,arr);X.innerHTML='';r='projects';render();
  }
  if(e.target.id==='demoItemForm'){
    e.preventDefault();const f=new FormData(e.target),arr=storeRead(STORAGE_KEYS.items);arr.unshift({id:recordId(),type:f.get('type'),title:f.get('title'),project:f.get('project')||'Harbourview Residences',detail:f.get('detail')||'Project activity item',time:new Date().toLocaleString([], {month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})});storeWrite(STORAGE_KEYS.items,arr);X.innerHTML='';r='home';render();
  }
  if(e.target.id==='demoCaptureForm'){
    e.preventDefault();const f=new FormData(e.target),arr=storeRead(STORAGE_KEYS.captures),img=SAMPLE_IMAGES[Number(f.get('image'))||0];arr.unshift({id:recordId(),title:f.get('title'),location:f.get('location'),trade:f.get('trade'),image:img,time:'Just now'});storeWrite(STORAGE_KEYS.captures,arr);X.innerHTML='';r='field';render();
  }
});
render();