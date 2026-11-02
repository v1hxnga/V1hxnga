/* Construction OS V11 — safe stakeholder persona layer. Does not override core render/pop/home. */
const PERSONA_KEY='cos_persona_v11';
const PERSONAS={
  executive:{name:'Sarah Mitchell',role:'Executive Director',initials:'SM',tag:'Portfolio oversight',access:'Portfolio-wide access',legacy:'executive'},
  project:{name:'Marcus Vance',role:'Project Manager',initials:'MV',tag:'Project delivery',access:'Full project delivery access',legacy:'project'},
  supervisor:{name:'Dave Harris',role:'Site Supervisor',initials:'DH',tag:'Field execution',access:'Field operations access',legacy:'project'},
  client:{name:'Robert Chen',role:'Client',initials:'RC',tag:'Owner visibility',access:'Client visibility access',legacy:'client'},
  admin:{name:'Alex Mercer',role:'System Administrator',initials:'AM',tag:'Platform control',access:'System administration access',legacy:'project'}
};
function personaId(){
  let p=localStorage.getItem(PERSONA_KEY);
  if(!p){
    const old=localStorage.getItem('cos_persona_v10')||localStorage.getItem('cos_view_mode_v1');
    p=PERSONAS[old]?old:(old==='project'?'project':old==='client'?'client':'executive');
    localStorage.setItem(PERSONA_KEY,p);
  }
  return PERSONAS[p]?p:'executive';
}
function persona(){return PERSONAS[personaId()]}
function personaSelector(){
  const current=persona(),id=personaId();
  const rows=Object.entries(PERSONAS).map(([key,p])=>`<button class="personaOption ${key===id?'selected':''}" data-persona="${key}"><span class="personaAvatar">${p.initials}</span><span class="personaOptionCopy"><b>${p.role}</b><small>${p.name}</small></span><span class="personaOptionMeta">${key===id?'✓':p.tag}</span></button>`).join('');
  return `<section class="personaDock" id="personaDock"><div class="personaLabel">STAKEHOLDER PERSONA</div><div class="personaControlRow"><button class="personaTrigger" data-persona-toggle aria-expanded="false"><span class="personaAvatar large">${current.initials}</span><span class="personaTriggerCopy"><b>${current.name}</b><small>${current.role}</small></span><span class="personaChevron">⌄</span></button><button class="notifyBtn personaNotify" data-a="notifications" aria-label="Notifications">🔔<b>5</b></button></div><div class="personaMenu"><div class="personaMenuHead"><b>Select workspace role</b><span>${current.access}</span></div>${rows}<button class="personaPermissions" data-v11-action="permissions">View role permissions</button></div></section>`;
}
function rolePanel(){
  const id=personaId();
  if(id==='project') return `<section id="personaRolePanel" class="personaRolePanel"><section class="roleHero pmHero"><div><div class="ey">PROJECT MANAGER TODAY</div><h2>Harbourview needs three decisions.</h2><p>RFI-118, VO-042 and subcontractor Claim #07 are the items most likely to affect delivery today.</p></div><div class="roleHeroScore"><small>Project health</small><b>82</b><span>Stable · watch schedule</span></div></section><div class="roleActionGrid"><button data-a="quick-rfi"><i>?</i><b>Raise RFI</b><small>Clarify design</small></button><button data-a="quick-inspection"><i>✓</i><b>Inspection</b><small>Complete QA check</small></button><button data-a="quick-photo"><i>▧</i><b>Site Capture</b><small>Add evidence</small></button><button data-a="quick-variation"><i>$</i><b>Variation</b><small>Track change</small></button></div></section>`;
  if(id==='supervisor') return `<section id="personaRolePanel" class="personaRolePanel"><section class="roleHero supervisorHero"><div><div class="ey">SITE SUPERVISOR TODAY</div><h2>Level 8 pour readiness.</h2><p>Pre-pour inspection is due before 11:30. Two design items remain open and the concrete delivery is booked for Friday 07:00.</p></div><div class="roleHeroScore"><small>Crew on site</small><b>72</b><span>8 trades active</span></div></section><div class="sitePulse"><div><small>Inspections</small><b>2</b><span>1 due today</span></div><div><small>Safety</small><b>31 days</b><span>Injury free</span></div><div><small>Deliveries</small><b>6</b><span>1 timing watch</span></div><div><small>Open issues</small><b>4</b><span>2 priority</span></div></div><div class="roleActionGrid"><button data-a="quick-inspection"><i>✓</i><b>Inspection</b><small>Pre-pour QA</small></button><button data-a="quick-photo"><i>▧</i><b>Capture Photo</b><small>Add evidence</small></button><button data-a="rfi"><i>?</i><b>Open RFIs</b><small>Design queries</small></button><button data-a="swms"><i>!</i><b>Safety & SWMS</b><small>Site compliance</small></button></div></section>`;
  if(id==='admin') return `<section id="personaRolePanel" class="personaRolePanel"><section class="roleHero adminHero"><div><div class="ey">SYSTEM ADMINISTRATION</div><h2>All systems operational.</h2><p>Manage users, permissions, project access and connected services across Construction OS.</p></div><div class="roleHeroScore"><small>Platform health</small><b>99.98%</b><span>Operational</span></div></section><div class="adminStats"><button data-v11-action="users"><small>Active users</small><b>24</b><span>5 role groups</span></button><button data-v11-action="permissions"><small>Permission sets</small><b>5</b><span>Role based</span></button><button data-v11-action="integrations"><small>Integrations</small><b>3</b><span>Connected</span></button><button data-v11-action="project-access"><small>Project access</small><b>3</b><span>Active projects</span></button></div></section>`;
  return '';
}
function applyPersonaNav(){
  const id=personaId();
  const allowed={executive:['home','projects','field','costs','more'],project:['home','projects','field','costs','more'],supervisor:['home','projects','field','more'],client:['home','projects','more'],admin:['home','projects','more']}[id];
  document.querySelectorAll('[data-r]').forEach(btn=>{btn.style.display=allowed.includes(btn.dataset.r)?'':'none'});
  document.querySelectorAll('#mobile,.mobile').forEach(nav=>{
    const visible=[...nav.querySelectorAll('[data-r]')].filter(b=>b.style.display!=='none').length;
    nav.style.gridTemplateColumns=`repeat(${Math.max(1,visible)},1fr)`;
  });
  document.body.dataset.persona=id;
}
let decorating=false;
function decoratePersona(){
  if(decorating) return;
  decorating=true;
  try{
    const main=document.querySelector('.main');
    if(main){
      if(!main.querySelector('#personaDock')) main.insertAdjacentHTML('afterbegin',personaSelector());
      if(!main.querySelector('#personaRolePanel')){
        const panel=rolePanel();
        if(panel) main.querySelector('#personaDock')?.insertAdjacentHTML('afterend',panel);
      }
    }
    document.querySelectorAll('.viewSwitch').forEach(x=>x.style.display='none');
    document.querySelectorAll('.aiAsk>p').forEach(p=>{if(/prototype|demo data/i.test(p.textContent))p.textContent='Construction OS Intelligence analyses the portfolio records and surfaces the answer that matters.'});
    applyPersonaNav();
  } finally {decorating=false;}
}
function showV11Modal(action){
  if(typeof v6Modal!=='function') return;
  if(action==='permissions') return v6Modal('Role permissions','Construction OS adapts the workspace to the stakeholder using it.',typeof v6Steps==='function'?v6Steps([['Executive Director','Portfolio health, financials, AI intelligence, approvals and all project views.'],['Project Manager','Project delivery, field workflows, costs, documents, RFIs and variations.'],['Site Supervisor','Field operations, inspections, safety, site diary, captures and project progress.'],['Client','Progress, programme, budget status, site photos and selected approvals.'],['System Administrator','Users, role permissions, project access, platform settings and integrations.']]):'');
  if(action==='users') return v6Modal('User management','24 active users across five role groups.',v6Details([['Executive','2'],['Project Managers','5'],['Site Supervisors','8'],['Client users','4'],['Administrators','5']]));
  if(action==='integrations') return v6Modal('Connected services','All configured services are currently healthy.',v6Steps([['Document storage','Connected and synchronised.'],['Cost management','Connected and operational.'],['Identity & access','Connected with 24 active users.']]));
  if(action==='project-access') return v6Modal('Project access','Three active projects are available in this workspace.',v6Details([['Harbourview Residences','18 users'],['Riverside Medical Centre','11 users'],['Northline Logistics Hub','9 users']]));
}
document.addEventListener('click',e=>{
  const action=e.target.closest('[data-v11-action]');
  if(action){e.preventDefault();e.stopPropagation();showV11Modal(action.dataset.v11Action);return;}
  const toggle=e.target.closest('[data-persona-toggle]');
  if(toggle){e.preventDefault();e.stopPropagation();const dock=toggle.closest('.personaDock');dock.classList.toggle('open');toggle.setAttribute('aria-expanded',dock.classList.contains('open')?'true':'false');return;}
  const option=e.target.closest('[data-persona]');
  if(option){
    e.preventDefault();e.stopPropagation();
    const id=option.dataset.persona;
    localStorage.setItem(PERSONA_KEY,id);
    localStorage.setItem('cos_persona_v10',id);
    localStorage.setItem('cos_view_mode_v1',PERSONAS[id].legacy);
    if(typeof r!=='undefined') r='home';
    if(typeof render==='function') render();
    setTimeout(decoratePersona,0);
    return;
  }
  if(!e.target.closest('.personaDock')) document.querySelectorAll('.personaDock.open').forEach(d=>d.classList.remove('open'));
},true);
let queued=false;
const obs=new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;decoratePersona()})});
obs.observe(document.body,{childList:true,subtree:true});
decoratePersona();
