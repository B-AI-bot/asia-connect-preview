/* Asia-Connect website — Partners (real roster, token-driven, filterable) */
const { Button, Kicker, Tag, Stat, Avatar } = window.AsiaConnectDesignSystem_f91cce;

const FILTERS = [
  { id: 'all', label: 'All', test: () => true },
  { id: 'mobility', label: 'Mobility & Industry', test: (p) => /mobilit|industr|machinery|engineer|supply|turnaround/i.test(p.domains.join(' ')) },
  { id: 'tech', label: 'Tech & Innovation', test: (p) => /tech|digital|ai|innovation|media|telecom/i.test(p.domains.join(' ')) },
  { id: 'finance', label: 'Finance & M&A', test: (p) => /finance|m&a|capital|debt|invest/i.test(p.domains.join(' ')) },
  { id: 'energy', label: 'Energy & Health', test: (p) => /energy|chemical|health|biotech|esg|climate|sustain/i.test(p.domains.join(' ')) },
  { id: 'entry', label: 'Market Entry', test: (p) => /entry|cross-border|expansion|greenfield|gcc|globaliz/i.test(p.domains.join(' ')) },
];

function PartnersScreen({ go, openAgent, bandTheme }) {
  const D = window.AC_DATA;
  const [filter, setFilter] = React.useState('all');
  const active = FILTERS.find((f) => f.id === filter) || FILTERS[0];
  const shown = D.partners.filter(active.test);

  return (
    <div>
      <section className="ac-band" data-theme={bandTheme}>
        <div className="ac-grid-bg" style={{ WebkitMaskImage: 'radial-gradient(110% 120% at 20% 30%, #000 35%, transparent 78%)', maskImage: 'radial-gradient(110% 120% at 20% 30%, #000 35%, transparent 78%)' }} />
        <div className="container" style={{ position: 'relative', paddingBlock: 'clamp(3rem,2rem + 5vw,6rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 40, alignItems: 'end' }}>
            <div>
              <Kicker tick accent style={{ marginBottom: 22 }}>The Partners</Kicker>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-display-2)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: 0, maxWidth: '18ch' }}>
                A unified team of senior operators.
              </h1>
              <p style={{ marginTop: 22, maxWidth: '50ch', fontSize: 'var(--text-lead)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
                Most are based in the region; all have lived and led here. You engage a principal — not a profile from a pool.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 36, justifyContent: 'flex-end' }}>
              <Stat value={D.facts.partners} label="Partners" />
              <Stat value={D.facts.markets} label="Markets" />
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        {/* filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
          {FILTERS.map((f) => (
            <Tag key={f.id} interactive selected={filter === f.id} onClick={() => setFilter(f.id)}>{f.label}</Tag>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, border: '1px solid var(--border)', background: 'var(--border)' }}>
          {shown.map((p) => (
            <div key={p.id} style={{ background: 'var(--surface)', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 230 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Avatar name={p.name} size={58} ring={p.id === 'laredo'} />
                <span className="coord" style={{ color: 'var(--text-faint)' }}>{p.base}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h3)', color: 'var(--text-strong)', margin: '0 0 3px' }}>{p.name}</h3>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--text-sm)', color: 'var(--accent-strong)', fontWeight: 600 }}>{p.role}</div>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-body)', margin: 0 }}>{p.note}</p>
              <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--border-faint)', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.domains.slice(0, 2).map((d) => (
                  <span key={d} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', letterSpacing: '0.04em', color: 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '3px 7px' }}>{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="coord" style={{ textAlign: 'center', color: 'var(--text-faint)', marginTop: 18 }}>Roster &amp; bios from asia-connect.partners · portraits to be added.</p>
      </section>

      <section className="ac-band" data-theme={bandTheme} style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ paddingBlock: 'clamp(3rem,2rem + 4vw,5rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-h1)', color: 'var(--text-strong)', margin: 0, maxWidth: '24ch' }}>
            Not sure who you need? Let the concierge match you.
          </h2>
          <Button variant="primary" size="lg" arrow onClick={openAgent}>Ask the concierge</Button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PartnersScreen });
