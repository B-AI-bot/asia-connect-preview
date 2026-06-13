/* Asia-Connect website, Services (token-driven) */
const { Button, Kicker, Card } = window.AsiaConnectDesignSystem_f91cce;

const DETAIL = [
  { n: '01', k: 'Interim Leadership', t: 'Executive on demand', lead: 'Leadership coverage when you cannot afford a gap.', body: 'When a key executive leaves unexpectedly, or you need senior capacity during recruitment, restructuring or a board mandate, we deploy an experienced C-suite leader who steps in, stabilises, and keeps strategy moving.', roles: ['Interim CEO', 'Interim CFO', 'Interim COO', 'Interim CHRO', 'Country Manager'] },
  { n: '02', k: 'Project Delivery', t: 'Complex projects, led from within', lead: 'The projects that decide the year, run by operators.', body: 'From market entry and M&A to carve-outs and digital transformation, we embed senior program leaders who turn complex plans into delivered outcomes, with the cultural fluency that cross-border work demands.', roles: ['Market entry', 'M&A & integration', 'Carve-outs', 'Transformation', 'PMO leadership'] },
  { n: '03', k: 'Crisis & Recovery', t: 'Stability, restored', lead: 'When the situation is serious, we take over.', body: 'In financial strain, operational disruption, disputes or reputational risk, we bring proven crisis managers who assess fast, take the wheel, manage stakeholders and lead the recovery, through to a clean hand-over.', roles: ['Turnaround', 'Restructuring', 'Dispute management', 'Business recovery'] },
];

const PROCESS = [
  { s: 'Day 0–2', t: 'Assessment', d: 'A partner scopes the situation, the stakeholders and the decisive moves, in person, fast.' },
  { s: 'Week 1', t: 'Deployment', d: 'Your principal is in the seat, with clear milestones and a mandate the board has signed off.' },
  { s: 'Ongoing', t: 'Implementation', d: 'Hands-on execution, weekly governance, measurable progress against the milestones.' },
  { s: 'Exit', t: 'Hand-over', d: 'Knowledge transfer to permanent leadership; we leave the organisation stronger than we found it.' },
];

const FAQ = [
  { q: 'How fast can a principal start?', a: 'Typically within ten working days of an initial conversation, and faster in a genuine crisis. The first partner assessment can happen within 48 hours.' },
  { q: 'How long is a typical engagement?', a: 'Most mandates run three to twelve months, structured around clear milestones and a defined hand-over, rather than an open-ended retainer.' },
  { q: 'Where do you operate?', a: 'From our Singapore headquarters across the ASEAN, Singapore, Vietnam, Malaysia, Indonesia, Thailand, the Philippines, plus India, China, Japan, South Korea and the Gulf.' },
];

function ServicesScreen({ go, openAgent, bandTheme }) {
  return (
    <div>
      <section className="ac-band" data-theme={bandTheme}>
        <div className="ac-grid-bg" style={{ WebkitMaskImage: 'radial-gradient(110% 120% at 85% 20%, #000 35%, transparent 78%)', maskImage: 'radial-gradient(110% 120% at 85% 20%, #000 35%, transparent 78%)' }} />
        <div className="container" style={{ position: 'relative', paddingBlock: 'clamp(3rem,2rem + 5vw,6rem)' }}>
          <Kicker tick accent style={{ marginBottom: 22 }}>Services</Kicker>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-display-2)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: 0, maxWidth: '20ch' }}>
            Senior leadership, deployed where it’s decisive.
          </h1>
          <p style={{ marginTop: 24, maxWidth: '54ch', fontSize: 'var(--text-lead)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
            Three mandates, one standard: a partner who has held the seat before, accountable for the outcome from day one.
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingBlock: 'var(--section-y)' }}>
        <div style={{ display: 'grid', gap: 2 }}>
          {DETAIL.map((d, i) => (
            <div key={d.n} style={{ display: 'grid', gridTemplateColumns: '88px 1fr 1fr', gap: 'clamp(1rem,0.5rem + 2vw,3rem)', padding: 'clamp(2rem,1rem + 2vw,3rem) 0', borderTop: i === 0 ? 'none' : '1px solid var(--border)', alignItems: 'start' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem,1.6rem + 2vw,3.4rem)', color: 'var(--accent)', lineHeight: 0.9 }}>{d.n}</span>
              <div>
                <Kicker style={{ marginBottom: 12 }}>{d.k}</Kicker>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h1)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '0 0 6px' }}>{d.t}</h2>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-lead)', color: 'var(--accent-strong)', marginBottom: 14 }}>{d.lead}</p>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 'var(--leading-body)', maxWidth: '50ch' }}>{d.body}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 8 }}>
                <span className="coord" style={{ color: 'var(--text-faint)', marginBottom: 4 }}>Typical roles</span>
                {d.roles.map((r) => (
                  <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 'var(--text-base)', color: 'var(--text-strong)' }}>
                    <span style={{ width: 16, height: 1, background: 'var(--accent)' }} />{r}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--surface-sunken)' }}>
        <div className="container section">
          <div className="ac-eyebrow"><Kicker index="№ 01">How an engagement runs</Kicker><div className="ac-rule-grow" /></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 36 }}>
            {PROCESS.map((p) => (
              <div key={p.t} style={{ position: 'relative', paddingTop: 26 }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--border)' }}>
                  <div style={{ width: 26, height: 2, background: 'var(--accent)' }} />
                </div>
                <span className="coord" style={{ color: 'var(--accent-strong)' }}>{p.s}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h3)', color: 'var(--text-strong)', margin: '8px 0 8px' }}>{p.t}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-body)' }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 'clamp(1.5rem,1rem + 3vw,4rem)', alignItems: 'start' }}>
          <div>
            <Kicker index="№ 02" style={{ marginBottom: 16 }}>Common questions</Kicker>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h1)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: 0 }}>
              The answers buyers, and their research, ask for.
            </h2>
          </div>
          <div>
            {FAQ.map((f, i) => (
              <details key={i} style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }} open={i === 0}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', listStyle: 'none', fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 'var(--text-lg)', color: 'var(--text-strong)' }}>
                  {f.q}<span className="coord" style={{ color: 'var(--accent-strong)' }}>＋</span>
                </summary>
                <p style={{ marginTop: 12, fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 'var(--leading-body)', maxWidth: '60ch' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" arrow onClick={openAgent}>Ask the concierge</Button>
          <Button variant="outline" size="lg" onClick={() => go('contact')}>Send a brief</Button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ServicesScreen });
