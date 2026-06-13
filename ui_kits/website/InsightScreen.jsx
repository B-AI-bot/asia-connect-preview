/* Asia-Connect website — Insight (reference-grade article; token-driven) */
const { Button, Kicker, Badge, Stat } = window.AsiaConnectDesignSystem_f91cce;

const TOC = ['Definition', 'When to engage', 'Interim vs. consulting', 'How it works in Asia', 'Key facts'];

function InsightScreen({ go, openAgent, bandTheme }) {
  const H = ({ id, n, children }) => (
    <h2 id={id} style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h2)', lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '48px 0 14px', display: 'flex', gap: 14, alignItems: 'baseline' }}>
      <span className="coord" style={{ color: 'var(--accent-strong)' }}>{n}</span>{children}
    </h2>
  );
  const P = ({ children }) => (
    <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 16px', maxWidth: '68ch' }}>{children}</p>
  );

  return (
    <div>
      <section className="container" style={{ paddingTop: 'clamp(2.5rem,2rem+3vw,4.5rem)', paddingBottom: 0 }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 22 }}>
            <Badge tone="brass">Reference</Badge>
            <Badge tone="neutral">Interim Management</Badge>
            <span className="coord" style={{ color: 'var(--text-faint)', alignSelf: 'center' }}>Updated June 2026 · 6 min</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-display-3)', lineHeight: 1.08, letterSpacing: '-0.022em', color: 'var(--text-strong)', margin: 0 }}>
            Interim management in Asia: what it is, when to use it, and how it differs from consulting.
          </h1>
          <p style={{ marginTop: 20, fontSize: 'var(--text-lead)', fontStyle: 'italic', fontFamily: 'var(--font-display)', color: 'var(--text-muted)', lineHeight: 1.5, maxWidth: '60ch' }}>
            A plain-language reference for boards, owners and HQ leaders weighing interim leadership across the region.
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingBlock: 'clamp(2rem,1.5rem+2vw,3.5rem)' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 'clamp(1.5rem,1rem+3vw,4rem)', alignItems: 'start' }}>
          <nav style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span className="coord" style={{ color: 'var(--text-faint)', marginBottom: 10 }}>On this page</span>
            {TOC.map((t, i) => (
              <a key={t} style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--text-sm)', color: i === 0 ? 'var(--text-strong)' : 'var(--text-muted)', padding: '6px 0 6px 14px', borderLeft: i === 0 ? '2px solid var(--accent)' : '2px solid var(--border)', cursor: 'pointer' }}>{t}</a>
            ))}
            <div data-theme={bandTheme} className="ac-band" style={{ marginTop: 22, padding: 16, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 1.5, margin: '0 0 12px' }}>Facing one of these situations now?</p>
              <Button variant="primary" size="sm" arrow onClick={openAgent}>Ask the concierge</Button>
            </div>
          </nav>

          <article>
            <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 22, marginBottom: 28 }}>
              <span className="coord" style={{ color: 'var(--accent-strong)' }}>Definition</span>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', lineHeight: 1.4, color: 'var(--text-strong)', margin: '8px 0 0', maxWidth: '58ch' }}>
                <strong style={{ fontWeight: 600 }}>Interim management</strong> is the temporary appointment of a seasoned executive to a senior role — to lead through transition, crisis or strategic change, and be accountable for the result.
              </p>
            </div>

            <H id="definition" n="01">A working definition</H>
            <P>Unlike a temporary placement that holds the fort, an interim executive operates at or near board level with the authority to make and own difficult decisions. They are independent — able to act in the company’s interest without the politics of an incumbent — and they are measured on outcomes, not advice.</P>

            <H id="when" n="02">When to engage one</H>
            <P>Boards typically reach for interim leadership in five moments: a sudden departure at the top; coverage during a recruitment or restructuring; a carve-out, acquisition or post-merger integration; a transformation that must land on time; or a crisis that needs a steady, experienced hand.</P>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '20px 0 8px' }}>
              {['Sudden C-suite departure', 'Cover during recruitment', 'M&A & carve-outs', 'Transformation delivery', 'Turnaround & recovery', 'Board-mandated change'].map((s) => (
                <div key={s} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '12px 0', borderTop: '1px solid var(--border-faint)', fontSize: 'var(--text-base)', color: 'var(--text-strong)' }}>
                  <span style={{ width: 16, height: 1, background: 'var(--accent)' }} />{s}
                </div>
              ))}
            </div>

            <H id="vs" n="03">Interim vs. consulting</H>
            <P>A consultant advises and hands you a recommendation; an interim executive takes the seat and is accountable for delivering it. In Asia, where a global HQ and a local team can read the same situation very differently, that distinction matters — the interim is inside the organisation, bridging both.</P>

            <H id="asia" n="04">How it works in Asia</H>
            <P>Cross-border mandates demand cultural and market fluency that cannot be improvised. The most effective interim leaders in the region have lived and led there — they understand local realities and global expectations, and move between them. That is the bridge Asia-Connect is built to be.</P>

            <div id="facts" style={{ marginTop: 36, padding: '26px 28px', background: 'var(--surface-sunken)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
              <Kicker style={{ marginBottom: 18 }}>Key facts</Kicker>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                <Stat size="sm" value="3–12 mo" label="Typical mandate" />
                <Stat size="sm" value="< 10 days" label="To deploy" />
                <Stat size="sm" value="Board-level" label="Seniority" />
              </div>
            </div>

            <div style={{ marginTop: 40, paddingTop: 26, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--text-strong)', margin: 0, maxWidth: '24ch' }}>Weighing interim leadership for a situation in Asia?</p>
              <Button variant="primary" size="lg" arrow onClick={openAgent}>Ask the concierge</Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { InsightScreen });
