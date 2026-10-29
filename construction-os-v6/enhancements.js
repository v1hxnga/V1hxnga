// Construction OS V6 feature layer
const originalHomeView = homeView;
homeView = function(){
  return `
  ${head('Build with certainty.','A premium command centre for modern construction teams.','Construction OS connects site operations, design coordination, commercial control and executive visibility in one system.')}

  <section class="hero-grid">
    <div class="hero-card">
      <div class="hero-top">
        <div>
          <div class="ey" style="color:#9fb0c9">Focus project</div>
          <h2>Harbourview Residences</h2>
          <p>Sydney, NSW · Structure + facade · High-rise residential delivery</p>
        </div>
        <span class="state"><i></i>On track</span>
      </div>
      <div class="hero-metrics">
        <div class="metric"><small>Contract value</small><b>A$28.4m</b><span>Approved project budget</span></div>
        <div class="metric"><small>Forecast final cost</small><b>A$28.1m</b><span>Currently trending favourable</span></div>
        <div class="metric"><small>Open RFIs</small><b>7</b><span>2 require same-day response</span></div>
      </div>
      <div class="progress-wrap"><div class="progress-label"><span>Overall delivery progress</span><span>68% complete</span></div><div class="progress"><i></i></div></div>
      <div class="quick-actions">
        <button class="quick-action" data-a="quick-rfi"><i>+</i><b>New RFI</b><small>Raise a design question</small></button>
        <button class="quick-action" data-a="quick-inspection"><i>✓</i><b>Inspection</b><small>Start a field check</small></button>
        <button class="quick-action" data-a="quick-photo"><i>▧</i><b>Site Photo</b><small>Capture site evidence</small></button>
        <button class="quick-action" data-a="quick-variation"><i>$</i><b>Variation</b><small>Record scope change</small></button>
      </div>
    </div>

    <div class="intelligence-card">
      <div class="intel-head"><div><div class="ey" style="color:#9fb0c9">Construction OS Intelligence</div><h3>AI Project Brief</h3></div><span class="intel-mark">✦</span></div>
      <p>Harbourview is currently on track. Construction OS has reviewed current design, programme and commercial signals.</p>
      <div class="intel-points">
        <div class="intel-point"><i></i><span>Forecast remains <b>A$310k favourable</b> against contract allowance.</span></div>
        <div class="intel-point warn"><i></i><span>Two RFIs may affect the <b>Level 8 concrete pour</b>.</span></div>
        <div class="intel-point warn"><i></i><span>VO-042 presents a potential <b>+2 day schedule impact</b>.</span></div>
      </div>
      <div class="intel-actions"><button class="intel-btn" data-a="ai-risks">View Risks</button><button class="intel-btn secondary" data-a="ai-recommendations">View Recommendations</button></div>
    </div>
  </section>

  <section class="section">
    <div class="section-head"><div><h3>Requires your approval</h3><p>Decisions waiting on management — surfaced in one place so nothing gets buried in email.</p></div><span class="badge"><i></i>3 open actions</span></div>
    <div class="approval-list">
      <div class="approval"><div><h4>VO-042 — Facade Revision</h4><p>Commercial change · Schedule impact +2 days</p><strong>A$84,600</strong></div><div class="approval-actions"><button class="primary" data-a="approve-vo">Approve</button><button data-a="variation">Review</button></div></div>
      <div class="approval"><div><h4>RFI-118 — Slab penetration</h4><p>Design response required today by 2:00 PM</p><strong>2-day risk</strong></div><div class="approval-actions"><button class="primary" data-a="rfi">Open RFI</button></div></div>
      <div class="approval"><div><h4>Subcontractor Claim #07</h4><p>Facade contractor · October progress claim</p><strong>A$185,400</strong></div><div class="approval-actions"><button class="primary" data-a="claim-07">Review</button></div></div>
    </div>
  </section>

  <section class="section"><div class="section-head"><div><h3>Portfolio performance</h3><p>The numbers senior leadership wants immediately — value, safety, people and attention items.</p></div><span class="badge"><i></i>Live operating snapshot</span></div><div class="cards-4"><div class="panel"><small>Active portfolio value</small><b>A$48.8m</b><span>1.1% under forecast</span></div><div class="panel"><small>Safety performance</small><b>0 LTIs</b><span>31 days injury-free</span></div><div class="panel"><small>Current site workforce</small><b>173</b><span>Across 3 active projects</span></div><div class="panel"><small>Priority actions</small><b>6</b><span class="warn">2 due today</span></div></div></section>

  <section class="section"><div class="section-head"><div><h3>Priority workflow</h3><p>Click a live item to see how the system captures issues, decisions and approvals.</p></div></div><div class="priority-grid"><button class="action-card" data-a="rfi"><div class="icon">?</div><h4>RFI-118 · Slab penetration</h4><p>Architect response is required by 2:00 PM to prevent a two-day programme impact on the upcoming slab sequence.</p><div class="foot"><span class="tag amber">Answer today</span><span class="arrow">→</span></div></button><button class="action-card" data-a="inspect"><div class="icon">✓</div><h4>Pre-pour inspection · Zone C</h4><p>Quality and services checks are almost complete. Site can only proceed once final supervisor release is recorded.</p><div class="foot"><span class="tag">3 items left</span><span class="arrow">→</span></div></button><button class="action-card" data-a="variation"><div class="icon">$</div><h4>Variation VO-042 · Facade revision</h4><p>A scope change is awaiting approval. The platform shows cost, margin and time impact before commercial sign-off.</p><div class="foot"><span class="tag green">A$84,600 value</span><span class="arrow">→</span></div></button></div></section>`;
};

fieldView = function(){
  return `
  ${head('Field operations.','A premium mobile-first workspace for supervisors, engineers and site teams.','Replace paper forms and disconnected updates with structured real-time field capture.')}
  <section class="section">
    <div class="capture-head"><div><h3 class="mini-title">Live Site Capture</h3><p class="muted-copy">Timestamped visual evidence flows straight from site into the project record.</p></div><button class="capture-btn" data-a="quick-photo">📷 Take Photo</button></div>
    <div class="capture-grid">
      <button class="capture-card" data-a="site-photo-1"><div class="capture-img"></div><div class="capture-copy"><b>Level 8 — East elevation</b><small>Today · 3:42 PM</small><span>Uploaded by Site Engineer</span></div></button>
      <button class="capture-card" data-a="site-photo-2"><div class="capture-img"></div><div class="capture-copy"><b>Zone C reinforcement</b><small>Today · 2:18 PM</small><span>Quality record</span></div></button>
      <button class="capture-card" data-a="site-photo-3"><div class="capture-img"></div><div class="capture-copy"><b>Facade installation</b><small>Yesterday · 4:51 PM</small><span>Progress evidence</span></div></button>
    </div>
  </section>
  <section class="section"><div class="section-head"><div><h3>Core site workflows</h3><p>Everything the field team captures here becomes immediately visible to project and commercial leadership.</p></div><span class="badge"><i></i>Live site capture</span></div><div class="modules">${modules.map(m=>`<button class="module-card" data-a="${m.id}"><span class="module-count">${m.count}</span><div class="icon">${m.icon}</div><h4>${m.title}</h4><p>${m.desc}</p><span class="tag">Open workflow</span></button>`).join('')}</div></section>`;
};

moreView = function(){
  return `
  ${head('Platform modules.','The wider operating system around project delivery.','Design management, programme, resources, analytics and compliance all connect back to the same project record.')}
  <section class="feature-split">
    <div class="glass-card">
      <div class="ey">Document control</div><h3 class="mini-title">Latest Drawings</h3><p class="muted-copy">Everyone sees the current approved revision before work starts.</p>
      <div class="document-list">
        <div class="doc-row" data-a="drawing-a208"><span class="doc-icon">A</span><div><b>A-208 — Level 8 Floor Plan</b><small>Rev C · Issued today</small></div><span class="current">Current ✓</span></div>
        <div class="doc-row" data-a="drawing-s114"><span class="doc-icon">S</span><div><b>S-114 — Slab Reinforcement</b><small>Rev B · Structural</small></div><span class="current">Current ✓</span></div>
        <div class="doc-row" data-a="drawing-m320"><span class="doc-icon">M</span><div><b>M-320 — Mechanical Layout</b><small>Rev D · Updated today</small></div><span class="current">Current ✓</span></div>
      </div>
    </div>
    <div class="glass-card">
      <div class="ey">Resource forecast</div><h3 class="mini-title">Next 7 Days</h3><p class="muted-copy">See labour pressure before it becomes a delivery problem.</p>
      <div class="resource-list">
        <div class="resource-row" data-a="resources"><div><b>Harbourview</b><small>Sydney, NSW</small><div class="resource-status warn">● Carpenter shortage Friday</div></div><div class="resource-count">72<small>workers</small></div></div>
        <div class="resource-row" data-a="resources"><div><b>Riverside</b><small>Brisbane, QLD</small><div class="resource-status">● Fully resourced</div></div><div class="resource-count">51<small>workers</small></div></div>
        <div class="resource-row" data-a="resources"><div><b>Northline</b><small>Melbourne, VIC</small><div class="resource-status">● Fully resourced</div></div><div class="resource-count">50<small>workers</small></div></div>
      </div>
    </div>
  </section>
  <section class="section"><div class="section-head"><div><h3>Connected modules</h3><p>Each module removes another disconnected process from the delivery environment.</p></div><span class="badge"><i></i>Expandable platform architecture</span></div><div class="tools">${tools.map(t=>`<button class="tool-card" data-a="${t.id}"><h4>${t.title}</h4><p>${t.desc}</p><div class="tool-meta"><span class="tag">${t.tag}</span><span class="arrow">→</span></div></button>`).join('')}</div></section>`;
};

projectModal = function(index){
  const p=projects[index];
  return {title:p.name,lead:'Project Command Centre — one view of operational health, commercial position, site activity and programme exposure.',body:`
    <div class="command-tabs"><button class="command-tab on" data-a="project-${index}">Overview</button><button class="command-tab" data-a="project-site">Site</button><button class="command-tab" data-a="project-cost">Cost</button><button class="command-tab" data-a="project-programme">Programme</button></div>
    <div class="detail-grid"><div class="detail-card"><small>Progress</small><b>${p.progress}</b></div><div class="detail-card"><small>Forecast</small><b>${p.forecast}</b></div><div class="detail-card"><small>Open RFIs</small><b>${p.rfis}</b></div><div class="detail-card"><small>Health</small><b>${p.status}</b></div></div>
    <div class="health-grid"><div class="health-item"><small>Cost</small><b><span class="signal">🟢</span>Healthy</b></div><div class="health-item"><small>Schedule</small><b><span class="signal">🟠</span>2-day exposure</b></div><div class="health-item"><small>Safety</small><b><span class="signal">🟢</span>31 days injury-free</b></div><div class="health-item"><small>Design</small><b><span class="signal">🟠</span>${p.rfis} open RFIs</b></div></div>
    <div class="milestone"><small>Next milestone</small><b>Level 8 concrete pour</b><span>Friday · 07:00 · Zone C</span></div>
    <div class="activity-list"><div class="activity"><i>✓</i><div><b>Inspection completed</b><small>Zone B · 36 min ago</small></div></div><div class="activity"><i>▧</i><div><b>18 progress photos uploaded</b><small>Level 8 · 1 hr ago</small></div></div><div class="activity"><i>?</i><div><b>RFI-118 submitted</b><small>Awaiting architect response</small></div></div><div class="activity"><i>$</i><div><b>VO-042 awaiting approval</b><small>A$84,600 · +2 days</small></div></div></div>`};
};

const oldPopupData = popupData;
popupData = function(id){
  const custom={
    'ai-risks':{title:'AI Risk Brief',lead:'Construction OS has combined design, commercial and programme signals to surface the items most likely to affect Harbourview.',body:`<div class="steps"><div class="step"><i>1</i><div><b>RFI-118 · High priority</b><p>Design response is due today. If unresolved, the Level 8 pour could move by up to two days.</p></div></div><div class="step"><i>2</i><div><b>VO-042 · Medium priority</b><p>Facade revision introduces a known +2 day time impact. Approval timing will determine whether recovery action is required.</p></div></div><div class="step"><i>3</i><div><b>Facade labour · Watch</b><p>Current resource plan shows a carpenter shortage on Friday if the revised sequence proceeds.</p></div></div></div>`},
    'ai-recommendations':{title:'AI Recommendations',lead:'Suggested actions to protect programme certainty while preserving the current favourable cost position.',body:`<div class="steps"><div class="step"><i>1</i><div><b>Escalate RFI-118 before noon</b><p>Secure the design response before the pre-pour release window.</p></div></div><div class="step"><i>2</i><div><b>Re-sequence Level 9 framing</b><p>Keep productive work moving while the facade package recovers float.</p></div></div><div class="step"><i>3</i><div><b>Price an additional carpenter crew</b><p>Compare acceleration cost against the +2 day programme exposure.</p></div></div></div><button class="btn" data-demoaction>Assign recommended actions</button>`},
    'approve-vo':{title:'Variation Approved',lead:'VO-042 has been approved in the prototype workflow.',body:`<div class="detail-grid"><div class="detail-card"><small>Approved value</small><b>A$84,600</b></div><div class="detail-card"><small>Margin</small><b>A$23,200</b></div><div class="detail-card"><small>Time impact</small><b>+2 days</b></div><div class="detail-card"><small>Status</small><b>Approved ✓</b></div></div><button class="btn" data-demoaction>Notify project team</button>`},
    'claim-07':{title:'Subcontractor Claim #07',lead:'October facade progress claim awaiting commercial review.',body:`<div class="detail-grid"><div class="detail-card"><small>Claim value</small><b>A$185,400</b></div><div class="detail-card"><small>Certified to date</small><b>A$1.72m</b></div><div class="detail-card"><small>Retention</small><b>A$9,270</b></div><div class="detail-card"><small>Status</small><b>Review</b></div></div><div class="steps"><div class="step"><i>1</i><div><b>Site verification</b><p>Measured progress is consistent with the latest site capture and package status.</p></div></div></div><button class="btn" data-demoaction>Certify claim</button>`},
    'quick-rfi':{title:'Create New RFI',lead:'Raise a design question from site in seconds.',body:`<div class="checks"><label>Project · Harbourview Residences</label><label>Area · Level 8 / Zone C</label><label>Discipline · Structural</label><label>Due date · Today 2:00 PM</label></div><button class="btn" data-demoaction>Create RFI</button>`},
    'quick-inspection':{title:'Start Inspection',lead:'Launch a field quality check against the current approved work package.',body:`<div class="checks"><label><input type="checkbox"> Reinforcement</label><label><input type="checkbox"> Formwork</label><label><input type="checkbox"> Services</label><label><input type="checkbox"> Supervisor release</label></div><button class="btn" data-demoaction>Start inspection</button>`},
    'quick-photo':{title:'Capture Site Photo',lead:'This prototype simulates a timestamped site photo upload tied to project, location and trade.',body:`<div class="detail-grid"><div class="detail-card"><small>Project</small><b>Harbourview</b></div><div class="detail-card"><small>Location</small><b>Level 8</b></div><div class="detail-card"><small>Trade</small><b>Structure</b></div><div class="detail-card"><small>Time</small><b>Now</b></div></div><button class="btn" data-demoaction>Save photo</button>`},
    'quick-variation':{title:'Create Variation',lead:'Capture a scope change before cost or programme impact gets lost.',body:`<div class="checks"><label>Package · Facade</label><label>Reason · Design revision</label><label>Estimated value · A$84,600</label><label>Time impact · +2 days</label></div><button class="btn" data-demoaction>Create variation</button>`},
    'site-photo-1':{title:'Level 8 — East elevation',lead:'Timestamped site evidence linked to the Harbourview project record.',body:`<div class="detail-grid"><div class="detail-card"><small>Location</small><b>Level 8 East</b></div><div class="detail-card"><small>Timestamp</small><b>Today · 3:42 PM</b></div><div class="detail-card"><small>Project</small><b>Harbourview</b></div><div class="detail-card"><small>Trade</small><b>Facade</b></div></div><div class="steps"><div class="step"><i>✓</i><div><b>Related inspection</b><p>Facade bracket inspection · Passed</p></div></div></div>`},
    'site-photo-2':{title:'Zone C reinforcement',lead:'Visual quality record captured before concrete placement.',body:`<div class="detail-grid"><div class="detail-card"><small>Location</small><b>Level 8 · Zone C</b></div><div class="detail-card"><small>Timestamp</small><b>Today · 2:18 PM</b></div><div class="detail-card"><small>Project</small><b>Harbourview</b></div><div class="detail-card"><small>Trade</small><b>Structure</b></div></div>`},
    'site-photo-3':{title:'Facade installation',lead:'Progress image attached to the facade package and project timeline.',body:`<div class="detail-grid"><div class="detail-card"><small>Location</small><b>Level 7 North</b></div><div class="detail-card"><small>Timestamp</small><b>Yesterday · 4:51 PM</b></div><div class="detail-card"><small>Project</small><b>Harbourview</b></div><div class="detail-card"><small>Trade</small><b>Facade</b></div></div>`},
    'drawing-a208':{title:'A-208 — Level 8 Floor Plan',lead:'You are viewing the latest approved revision.',body:`<div class="detail-grid"><div class="detail-card"><small>Revision</small><b>Rev C</b></div><div class="detail-card"><small>Status</small><b>Current ✓</b></div><div class="detail-card"><small>Issued</small><b>Today</b></div><div class="detail-card"><small>Viewed by</small><b>28 / 31</b></div></div><button class="btn" data-demoaction>Open drawing viewer</button>`},
    'drawing-s114':{title:'S-114 — Slab Reinforcement',lead:'You are viewing the latest approved structural revision.',body:`<div class="detail-grid"><div class="detail-card"><small>Revision</small><b>Rev B</b></div><div class="detail-card"><small>Status</small><b>Current ✓</b></div><div class="detail-card"><small>Discipline</small><b>Structural</b></div><div class="detail-card"><small>Linked RFI</small><b>RFI-118</b></div></div>`},
    'drawing-m320':{title:'M-320 — Mechanical Layout',lead:'Updated today and marked as the current approved issue.',body:`<div class="detail-grid"><div class="detail-card"><small>Revision</small><b>Rev D</b></div><div class="detail-card"><small>Status</small><b>Current ✓</b></div><div class="detail-card"><small>Updated</small><b>Today</b></div><div class="detail-card"><small>Discipline</small><b>Mechanical</b></div></div>`},
    'project-site':{title:'Harbourview · Site',lead:'Live field activity and quality status for the project.',body:`<div class="detail-grid"><div class="detail-card"><small>Workforce</small><b>72</b></div><div class="detail-card"><small>Inspections today</small><b>5</b></div><div class="detail-card"><small>Open defects</small><b>8</b></div><div class="detail-card"><small>Photos today</small><b>18</b></div></div><button class="btn" data-demoaction>Open field workspace</button>`},
    'project-cost':{title:'Harbourview · Cost',lead:'Commercial health for the selected project.',body:`<div class="detail-grid"><div class="detail-card"><small>Contract</small><b>A$28.4m</b></div><div class="detail-card"><small>Forecast</small><b>A$28.1m</b></div><div class="detail-card"><small>Committed</small><b>A$23.6m</b></div><div class="detail-card"><small>Favourable</small><b>A$310k</b></div></div><button class="btn" data-demoaction>Open commercial control</button>`},
    'project-programme':{title:'Harbourview · Programme',lead:'Current milestone and short-term programme exposure.',body:`<div class="milestone"><small>Next milestone</small><b>Level 8 concrete pour</b><span>Friday · 07:00</span></div><div class="steps"><div class="step"><i>!</i><div><b>2-day exposure</b><p>RFI-118 and VO-042 are the current programme watch items.</p></div></div></div><button class="btn" data-demoaction>Open lookahead</button>`}
  };
  return custom[id] || oldPopupData(id);
};

render();