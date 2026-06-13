/* Asia-Connect website — Routing Concierge
   A floating agent: reads a visitor's situation, routes to the right
   service + names the principal who has done it before. Scripted demo
   over the real routing map in data.js. */
const { Button, Avatar, Badge } = window.AsiaConnectDesignSystem_f91cce;

const SERVICE_TO_SELECT = {
  'Interim Leadership': 'Interim executive',
  'Project Delivery': 'Project leadership',
  'Crisis & Recovery': 'Crisis & recovery',
};

function matchRoute(text) {
  const t = (text || '').toLowerCase();
  let best = null, bestScore = 0;
  for (const r of window.AC_DATA.routes) {
    let score = 0;
    for (const kw of r.match) { if (t.includes(kw)) score += 1; }
    if (score > bestScore) { bestScore = score; best = r; }
  }
  return bestScore > 0 ? best : null;
}

function RoutingConcierge({ open, onClose, navigate, bandTheme }) {
  const D = window.AC_DATA;
  const [msgs, setMsgs] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const scroller = React.useRef(null);

  const greet = {
    role: 'agent',
    kind: 'text',
    text: 'I’m the Asia-Connect concierge. In a sentence — what are you facing, and in which market? I’ll point you to the right partner.',
  };

  React.useEffect(() => {
    if (open && msgs.length === 0) setMsgs([greet]);
  }, [open]);

  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [msgs, busy]);

  const push = (m) => setMsgs((prev) => [...prev, m]);

  const respond = (text) => {
    if (!text.trim()) return;
    push({ role: 'user', kind: 'text', text });
    setInput('');
    setBusy(true);
    setTimeout(() => {
      const route = matchRoute(text);
      setBusy(false);
      if (!route) {
        push({ role: 'agent', kind: 'text', text: 'Got it. That could sit with a few of our principals — the fastest path is a two-line brief and a partner will route it personally within two working days.' });
        push({ role: 'agent', kind: 'fallback' });
        return;
      }
      const partners = route.partners.map(D.byId).filter(Boolean);
      push({ role: 'agent', kind: 'text', text: route.line });
      push({ role: 'agent', kind: 'result', route, partners });
    }, 650);
  };

  const closeGo = (screen, prefill) => { onClose(); navigate(screen, prefill); };

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', padding: 'clamp(0px, 2vw, 28px)' }}>
      {/* scrim */}
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'color-mix(in oklab, var(--ink-900) 42%, transparent)', backdropFilter: 'blur(2px)' }} />
      {/* panel */}
      <div role="dialog" aria-label="Asia-Connect concierge" style={{
        position: 'relative', width: 'min(440px, 100%)', height: 'min(620px, 92vh)',
        display: 'flex', flexDirection: 'column', background: 'var(--surface)',
        border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)', animation: 'acFade var(--dur-base) var(--ease-out)',
      }}>
        {/* header */}
        <div className="ac-band" data-theme={bandTheme} style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border)' }}>
          <img src="../../assets/mark-inverse.svg" alt="" style={{ width: 34, height: 34 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-lg)', color: 'var(--text-strong)', lineHeight: 1 }}>Concierge</div>
            <div className="coord" style={{ color: 'var(--accent-strong)', marginTop: 4 }}>◷ Routes you to the right partner</div>
          </div>
          <button onClick={onClose} aria-label="Close" style={{ width: 32, height: 32, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-body)', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>×</button>
        </div>

        {/* messages */}
        <div ref={scroller} style={{ flex: 1, overflowY: 'auto', padding: '18px', display: 'flex', flexDirection: 'column', gap: 12, background: 'var(--bg)' }}>
          {msgs.map((m, i) => <Message key={i} m={m} closeGo={closeGo} />)}
          {busy && <Typing />}
          {/* quick chips after greeting only */}
          {msgs.length === 1 && !busy && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 4 }}>
              {D.routes.slice(0, 6).map((r) => (
                <button key={r.id} onClick={() => respond(r.label)} style={chipStyle}>{r.label}</button>
              ))}
            </div>
          )}
        </div>

        {/* input */}
        <form onSubmit={(e) => { e.preventDefault(); respond(input); }} style={{ display: 'flex', gap: 8, padding: 14, borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Describe your situation…" style={{
            flex: 1, height: 44, padding: '0 14px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-strong)',
            background: 'var(--bg)', color: 'var(--text-strong)', fontFamily: 'var(--font-text)', fontSize: 'var(--text-sm)', outline: 'none',
          }} />
          <Button type="submit" variant="primary" size="md" aria-label="Send">→</Button>
        </form>
      </div>
    </div>
  );
}

const chipStyle = {
  fontFamily: 'var(--font-text)', fontSize: 'var(--text-sm)', fontWeight: 500,
  padding: '8px 13px', borderRadius: 'var(--radius-pill)', border: '1.5px solid var(--border)',
  background: 'var(--surface)', color: 'var(--text-body)', cursor: 'pointer',
};

function Typing() {
  return (
    <div style={{ alignSelf: 'flex-start', display: 'flex', gap: 4, padding: '12px 14px', background: 'var(--surface-sunken)', borderRadius: '12px 12px 12px 3px' }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-faint)', animation: `acBlink 1s ${i * 0.15}s infinite` }} />
      ))}
    </div>
  );
}

function Message({ m, closeGo }) {
  if (m.role === 'user') {
    return <div style={{ alignSelf: 'flex-end', maxWidth: '85%', background: 'var(--accent)', color: 'var(--on-accent)', padding: '10px 14px', borderRadius: '12px 12px 3px 12px', fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>{m.text}</div>;
  }
  if (m.kind === 'text') {
    return <div style={{ alignSelf: 'flex-start', maxWidth: '90%', background: 'var(--surface-sunken)', color: 'var(--text-body)', padding: '10px 14px', borderRadius: '12px 12px 12px 3px', fontSize: 'var(--text-sm)', lineHeight: 1.55 }}>{m.text}</div>;
  }
  if (m.kind === 'fallback') {
    return (
      <div style={{ alignSelf: 'flex-start', width: '92%' }}>
        <Button variant="primary" size="sm" arrow onClick={() => closeGo('contact', {})}>Send a two-line brief</Button>
      </div>
    );
  }
  if (m.kind === 'result') {
    const { route, partners } = m;
    const prefill = { service: SERVICE_TO_SELECT[route.service] || 'Project leadership', note: '' };
    return (
      <div style={{ alignSelf: 'flex-start', width: '92%', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Badge tone="brass">{route.service}</Badge>
          <span className="coord" style={{ color: 'var(--text-faint)' }}>Recommended</span>
        </div>
        {partners.map((p) => (
          <div key={p.id} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', paddingTop: 10, borderTop: '1px solid var(--border-faint)' }}>
            <Avatar name={p.name} size={42} ring />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>{p.name}</div>
              <div className="coord" style={{ color: 'var(--accent-strong)', margin: '2px 0 5px' }}>{p.base} · {p.tenure}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', lineHeight: 1.5 }}>{p.note}</div>
            </div>
          </div>
        ))}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 2 }}>
          <Button variant="primary" size="sm" arrow onClick={() => closeGo('contact', prefill)}>Introduce me</Button>
          <Button variant="outline" size="sm" onClick={() => closeGo('partners')}>Meet the team</Button>
        </div>
      </div>
    );
  }
  return null;
}

Object.assign(window, { RoutingConcierge });
