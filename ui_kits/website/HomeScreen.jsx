/* Asia-Connect website — Home (token-driven; reskins under both themes) */
const { Button, Kicker, Card, Tag, Stat, Avatar } = window.AsiaConnectDesignSystem_f91cce;

const SERVICES = [
  { n: '01', k: 'Interim Leadership', t: 'Executive on demand', d: 'When a CEO, CFO or COO leaves unexpectedly, we deploy a seasoned principal in days — to hold the line, reassure the board, and keep strategy moving.' },
  { n: '02', k: 'Project Delivery', t: 'Complex projects, led', d: 'Market entry, M&A, carve-outs and transformation — run from inside your teams by operators who have done it before, in-region.' },
  { n: '03', k: 'Crisis & Recovery', t: 'Stability, restored', d: 'In financial, operational or reputational distress, we take over, stabilise the situation, and lead the recovery through to a clean hand-over.' },
];

function HomeScreen({ go, openAgent, bandTheme }) {
  const D = window.AC_DATA;
  return (
    <div>
      {/* ---------------- HERO ---------------- */}
      <section className="ac-band" data-theme={bandTheme}>
        <div className="ac-grid-bg" style={{ WebkitMaskImage: 'radial-gradient(120% 110% at 78% 30%, #000 35%, transparent 78%)', maskImage: 'radial-gradient(120% 110% at 78% 30%, #000 35%, transparent 78%)' }} />
        <div className="ac-meridian" style={{ left: '72%' }} />
        <div className="ac-node" style={{ left: 'calc(72% - 6px)', top: '46%' }} />
        <span className="coord" style={{ position: 'absolute', top: '46%', left: 'calc(72% + 16px)', color: 'var(--accent)' }}>SGP · 1°17′N</span>
        <span className="coord" style={{ position: 'absolute', top: 40, right: 'var(--gutter)', color: 'var(--text-faint)' }}>103°50′E</span>

        <div className="container" style={{ position: 'relative', paddingTop: 'clamp(4rem,3rem+6vw,8rem)', paddingBottom: 'clamp(3rem,2rem+5vw,6rem)' }}>
          <div style={{ maxWidth: '17ch' }}>
            <Kicker tick accent style={{ marginBottom: 26 }}>Executive Interim · Singapore</Kicker>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-display-1)', lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--text-strong)', fontOpticalSizing: 'auto', margin: 0 }}>
              The bridge between your <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>HQ</span> and Asia.
            </h1>
          </div>
          <p style={{ maxWidth: '52ch', marginTop: 28, fontSize: 'var(--text-lead)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)' }}>
            A partner-led firm of senior operators who step in as interim executives, project leaders and crisis managers across Asia — and are accountable for the result. Not advice from a distance. Principals, on the ground.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 38, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" arrow onClick={openAgent}>Ask the concierge</Button>
            <Button variant="outline" size="lg" onClick={() => go('services')}>How we work</Button>
          </div>

          <div style={{ display: 'flex', gap: 'clamp(2rem,1rem+4vw,5rem)', marginTop: 'clamp(3rem,2rem+4vw,5.5rem)', paddingTop: 34, borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
            <Stat value={D.facts.deploy} label="To deploy a principal" />
            <Stat value={D.facts.partners} label="Senior partners" sub="across 13 markets" />
            <Stat value="20+" label="Years led in region" />
            <Stat value="C-suite" label="Mandate seniority" />
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="section container">
        <div className="ac-eyebrow"><Kicker index="№ 01">What we do</Kicker><div className="ac-rule-grow" /></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'clamp(1.5rem,1rem+3vw,4rem)', alignItems: 'end', marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-3)', lineHeight: 1.06, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: 0 }}>
            Three ways we step in — each one accountable for an outcome, not a deck.
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', lineHeight: 'var(--leading-body)' }}>
            Every engagement is run by a partner who has held the seat before, with a clear assessment, implementation and hand-over framework.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {SERVICES.map((s) => (
            <Card key={s.n} interactive index={s.n} kicker={s.k} title={s.t}
              footer={<Button variant="ghost" arrow style={{ padding: 0, height: 'auto' }} onClick={() => go('services')}>Learn more</Button>}>
              {s.d}
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- CONCIERGE TEASER ---------------- */}
      <section className="ac-band" data-theme={bandTheme} style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container section" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(2rem,1rem+4vw,5rem)', alignItems: 'center' }}>
          <div>
            <Kicker tick accent style={{ marginBottom: 22 }}>New · Routing concierge</Kicker>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-display-3)', lineHeight: 1.06, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: 0, maxWidth: '18ch' }}>
              Tell us the situation. We’ll route you to the right partner.
            </h2>
            <p style={{ marginTop: 20, fontSize: 'var(--text-lg)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', maxWidth: '46ch' }}>
              Describe what you’re facing in a sentence. The concierge reads the situation, points to the right service, and names the principal who has done it before — or books the call.
            </p>
            <div style={{ marginTop: 30 }}>
              <Button variant="primary" size="lg" arrow onClick={openAgent}>Describe your situation</Button>
            </div>
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', background: 'var(--surface)', padding: 22, boxShadow: 'var(--shadow-md)' }}>
            <div className="coord" style={{ color: 'var(--text-faint)', marginBottom: 14 }}>◷ Concierge · sample</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ alignSelf: 'flex-end', maxWidth: '85%', background: 'var(--accent)', color: 'var(--on-accent)', padding: '10px 14px', borderRadius: '12px 12px 3px 12px', fontSize: 'var(--text-sm)' }}>“EV local-content deadline in Indonesia, 2026. Behind on suppliers.”</div>
              <div style={{ alignSelf: 'flex-start', maxWidth: '90%', background: 'var(--surface-sunken)', color: 'var(--text-body)', padding: '10px 14px', borderRadius: '12px 12px 12px 3px', fontSize: 'var(--text-sm)' }}>That’s an execution clock. I’d put <strong style={{ color: 'var(--text-strong)' }}>Franck Euvrard</strong> on it — Faurecia, VinFast, Tata. Shall I introduce you?</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTORS ---------------- */}
      <section className="section container">
        <div className="ac-eyebrow"><Kicker index="№ 02">Where we operate</Kicker><div className="ac-rule-grow" /></div>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(1.5rem,1rem+3vw,4rem)', alignItems: 'start' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h1)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: 0 }}>
            Senior experience across the sectors that drive Asia.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {D.sectors.map((s) => <Tag key={s} interactive>{s}</Tag>)}
          </div>
        </div>
      </section>

      {/* ---------------- CHAIRMAN ---------------- */}
      <section style={{ background: 'var(--surface-sunken)' }}>
        <div className="container section">
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(1.5rem,1rem+3vw,3.5rem)', alignItems: 'start' }}>
            <Avatar name="Patrick Laredo" size={92} ring />
            <div>
              <Kicker style={{ marginBottom: 20 }}>From the Chairman</Kicker>
              <blockquote style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-h2)', lineHeight: 1.32, letterSpacing: '-0.01em', color: 'var(--text-strong)', margin: 0, maxWidth: '40ch', textWrap: 'balance' }}>
                “Asia is now central to global strategy. We run growth and transformation projects, provide true leaders, and secure results — across Asia. Time is of the essence.”
              </blockquote>
              <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-text)', fontWeight: 600, color: 'var(--text-strong)' }}>Patrick Laredo</span>
                <span className="coord" style={{ color: 'var(--text-faint)' }}>— Chairman &amp; Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="ac-band" data-theme={bandTheme} style={{ borderTop: '1px solid var(--border)' }}>
        <div className="ac-grid-bg" style={{ WebkitMaskImage: 'radial-gradient(120% 120% at 50% 30%, #000 30%, transparent 72%)', maskImage: 'radial-gradient(120% 120% at 50% 30%, #000 30%, transparent 72%)' }} />
        <div className="container" style={{ position: 'relative', paddingBlock: 'clamp(3.5rem,2rem+5vw,6rem)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Kicker tick accent style={{ marginBottom: 24 }}>Let’s find out how we can help</Kicker>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-display-2)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: 0, maxWidth: '18ch', textWrap: 'balance' }}>
            Tell us what you’re facing.
          </h2>
          <p style={{ marginTop: 22, maxWidth: '48ch', fontSize: 'var(--text-lg)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
            Whether it’s a sudden gap at the top, a project that must land, or a situation to recover — a principal will respond within two working days.
          </p>
          <div style={{ marginTop: 34, display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="primary" size="lg" arrow onClick={openAgent}>Ask the concierge</Button>
            <Button variant="outline" size="lg" onClick={() => go('contact')}>Send a brief</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
