/* Asia-Connect website, shared chrome (header + footer + brand switcher) */
const { Button } = window.AsiaConnectDesignSystem_f91cce;

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'partners', label: 'Partners' },
  { id: 'insight', label: 'Insight' },
  { id: 'newsletter', label: 'The Asia Operator' },
];

function BrandSwitch({ brand, setBrand }) {
  return (
    <div className="ac-brandswitch" title="Brand direction">
      <button className={brand === 'meridian' ? 'on' : ''} onClick={() => setBrand('meridian')}>Meridian</button>
      <button className={brand === 'almanac' ? 'on' : ''} onClick={() => setBrand('almanac')}>Almanac</button>
    </div>
  );
}

function SiteHeader({ screen, go, onInk, brand, setBrand, openAgent }) {
  const logo = onInk ? '../../assets/mark-inverse.svg' : '../../assets/mark.svg';
  return (
    <header className={'ac-header' + (onInk ? ' on-ink' : '')} data-theme={onInk ? 'ink' : undefined}>
      <div className="container ac-header-inner">
        <div className="ac-logo" onClick={() => go('home')}>
          <img src={logo} alt="Asia-Connect" />
          <div>
            <div className="nm">Asia&#8209;Connect</div>
            <div className="sub">Executive Partners</div>
          </div>
        </div>
        <nav className="ac-nav">
          {NAV.map((n) => (
            <button key={n.id} className={'ac-navlink' + (screen === n.id ? ' active' : '')} onClick={() => go(n.id)}>{n.label}</button>
          ))}
          <a className="ac-navlink" href="deck.html" style={{ color: 'var(--accent-strong)', fontWeight: 600 }}>The 360 plan</a>
          <BrandSwitch brand={brand} setBrand={setBrand} />
          <Button variant="primary" size="sm" arrow onClick={openAgent}>Ask the concierge</Button>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter({ go, brand, openAgent, bandTheme }) {
  const logo = brand === 'almanac' ? '../../assets/mark.svg' : '../../assets/mark-inverse.svg';
  return (
    <footer className="ac-footer" data-theme={bandTheme}>
      <div className="container">
        <div className="ac-foot-grid">
          <div>
            <div className="ac-logo" style={{ marginBottom: 18 }}>
              <img src={logo} alt="" style={{ width: 40, height: 40 }} />
              <div>
                <div className="nm">Asia&#8209;Connect</div>
                <div className="sub">Executive Partners</div>
              </div>
            </div>
            <p style={{ maxWidth: '30ch', color: 'var(--text-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)' }}>
              The bridge between your HQ and Asia. Interim leadership, project delivery and crisis recovery, from 1°North.
            </p>
            <div className="coord" style={{ marginTop: 22, color: 'var(--text-faint)' }}>SGP · 1°17′N 103°50′E</div>
          </div>
          <div>
            <div className="ac-foot-h">Firm</div>
            <a className="ac-foot-link" onClick={() => go('services')}>Services</a>
            <a className="ac-foot-link" onClick={() => go('partners')}>Partners</a>
            <a className="ac-foot-link" onClick={() => go('insight')}>Insight</a>
            <a className="ac-foot-link" onClick={() => go('newsletter')}>The Asia Operator</a>
          </div>
          <div>
            <div className="ac-foot-h">Coverage</div>
            <a className="ac-foot-link">Singapore · HQ</a>
            <a className="ac-foot-link">ASEAN</a>
            <a className="ac-foot-link">India &amp; China</a>
            <a className="ac-foot-link">Gulf &amp; KSA</a>
          </div>
          <div>
            <div className="ac-foot-h">Engage</div>
            <p style={{ color: 'var(--text-body)', fontSize: 'var(--text-sm)', lineHeight: 1.7, marginBottom: 14 }}>
              Companies: <a style={{ color: 'var(--accent-strong)' }}>help@asia-connect.partners</a><br />
              Candidates: <a style={{ color: 'var(--accent-strong)' }}>leaders@asia-connect.partners</a>
            </p>
            <Button variant="primary" size="sm" arrow onClick={openAgent}>Ask the concierge</Button>
          </div>
        </div>
        <div className="ac-divider" style={{ marginTop: 56 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 0 30px', flexWrap: 'wrap', gap: 12 }}>
          <span className="coord" style={{ color: 'var(--text-faint)' }}>© 2026 Asia-Connect Executive Partners Pte. Ltd.</span>
          <span className="coord" style={{ color: 'var(--text-faint)' }}>Terms · Privacy</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, NAV });
