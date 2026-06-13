/* Asia-Connect website, Contact (token-driven) */
const { Button, Kicker, Input, Textarea, Select, Badge } = window.AsiaConnectDesignSystem_f91cce;

function ContactScreen({ go, prefill, bandTheme }) {
  const [sent, setSent] = React.useState(false);
  return (
    <section className="ac-band" data-theme={bandTheme} style={{ minHeight: '78vh' }}>
      <div className="ac-grid-bg" style={{ WebkitMaskImage: 'radial-gradient(100% 110% at 80% 20%, #000 35%, transparent 80%)', maskImage: 'radial-gradient(100% 110% at 80% 20%, #000 35%, transparent 80%)' }} />
      <div className="ac-meridian" style={{ left: '64%' }} />
      <div className="ac-node" style={{ left: 'calc(64% - 6px)', top: '30%' }} />

      <div className="container" style={{ position: 'relative', paddingBlock: 'clamp(3rem,2rem + 4vw,6rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem,1rem + 5vw,6rem)', alignItems: 'start' }}>
          <div>
            <Kicker tick accent style={{ marginBottom: 24 }}>Send a brief</Kicker>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-display-3)', lineHeight: 1.06, letterSpacing: '-0.022em', color: 'var(--text-strong)', margin: 0, maxWidth: '16ch' }}>
              Tell us what you’re facing.
            </h1>
            <p style={{ marginTop: 22, fontSize: 'var(--text-lead)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', maxWidth: '42ch' }}>
              A principal will respond within two working days. Everything you share is held in confidence.
            </p>
            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <span className="coord" style={{ color: 'var(--text-faint)' }}>Companies</span>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--text-lg)', color: 'var(--accent-strong)', marginTop: 4 }}>help@asia-connect.partners</div>
              </div>
              <div>
                <span className="coord" style={{ color: 'var(--text-faint)' }}>Candidates</span>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--text-lg)', color: 'var(--accent-strong)', marginTop: 4 }}>leaders@asia-connect.partners</div>
              </div>
              <div style={{ paddingTop: 12 }}>
                <span className="coord" style={{ color: 'var(--text-faint)' }}>Asia-Connect Executive Partners Pte. Ltd. · Singapore · 1°17′N 103°50′E</span>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 'clamp(1.5rem,1rem + 2vw,2.5rem)', boxShadow: 'var(--shadow-lg)' }}>
            {sent ? (
              <div style={{ padding: '40px 8px', textAlign: 'center' }}>
                <Badge tone="success" dot>Received</Badge>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h2)', color: 'var(--text-strong)', margin: '18px 0 10px' }}>Thank you, we’ll be in touch.</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '36ch', margin: '0 auto 24px' }}>A partner will read your note personally and respond within two working days.</p>
                <Button variant="outline" onClick={() => setSent(false)}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'grid', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Input label="First name" placeholder="Jane" required />
                  <Input label="Last name" placeholder="Doe" required />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Input label="Work email" type="email" placeholder="you@company.com" required />
                  <Input label="Company" placeholder="Company Ltd" />
                </div>
                <Select label="What do you need?" defaultValue={prefill && prefill.service ? prefill.service : 'Interim executive'}>
                  <option>Interim executive</option>
                  <option>Project leadership</option>
                  <option>Crisis &amp; recovery</option>
                  <option>I’m a candidate</option>
                </Select>
                <Textarea label="Your situation" rows={4} placeholder="A sentence or two on what you’re facing and where." defaultValue={prefill && prefill.note ? prefill.note : ''} />
                <Button type="submit" variant="primary" size="lg" arrow fullWidth>Send to a partner</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ContactScreen });
