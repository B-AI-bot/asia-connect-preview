/* Asia-Connect website, "The Asia Operator" newsletter, Issue No. 01 */
const { Button, Kicker, Badge, Avatar } = window.AsiaConnectDesignSystem_f91cce;

/* Editorial illustration, real art, with a photo / sketch toggle controlled at issue level. */
function NLImage({ idx, src, alt, caption, ratio = '16 / 9' }) {
  return (
    <figure className="ac-fig">
      <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', aspectRatio: ratio, background: 'var(--surface-sunken)', boxShadow: 'var(--shadow-sm)' }}>
        <img src={src} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      {caption && <div className="ac-fig-cap"><span className="idx">Fig. {idx}</span><span>{caption}</span></div>}
    </figure>
  );
}

/* Newsletter subscribe: email capture (window.acCaptureLead) */
function NLSubscribe() {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const sub = () => { const r = window.acCaptureLead && window.acCaptureLead(email, 'newsletter:asia-operator'); if (r && r.ok) setDone(true); };
  if (done) return (
    <div style={{ marginTop: 26, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--accent-strong)' }}>You are on the list. The next issue lands in your inbox.</div>
  );
  return (
    <form onSubmit={(e) => { e.preventDefault(); sub(); }} style={{ marginTop: 28, display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: 480 }}>
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com"
        style={{ flex: '1 1 220px', minWidth: 0, border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', background: 'var(--paper-raised)', fontFamily: 'var(--font-text)', fontSize: 'var(--text-base)', color: 'var(--ink-800)' }} />
      <Button variant="primary" size="lg" arrow onClick={sub}>Subscribe</Button>
    </form>
  );
}

function NewsletterScreen({ go, openAgent, bandTheme }) {
  const [imgMode, setImgMode] = React.useState('photo');
  const IMG = {
    hero:  { photo: 'img/ev-photo.jpg',   sketch: 'img/ev-sketch.jpg' },
    field: { photo: 'img/split-photo.jpg', sketch: 'img/split-sketch.jpg' },
  };

  const Sub = ({ children }) => (
    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h2)', lineHeight: 1.16, letterSpacing: '-0.018em', color: 'var(--text-strong)', margin: '46px 0 14px', textWrap: 'balance' }}>{children}</h2>
  );

  const Toggle = () => (
    <div className="ac-imgtoggle" role="group" aria-label="Illustration style">
      <span className="lbl">Illustrations</span>
      <button className={imgMode === 'photo' ? 'on' : ''} onClick={() => setImgMode('photo')}>Photo</button>
      <button className={imgMode === 'sketch' ? 'on' : ''} onClick={() => setImgMode('sketch')}>Sketch</button>
    </div>
  );

  return (
    <div>
      {/* Masthead */}
      <section className="ac-band" data-theme={bandTheme}>
        <div className="ac-grid-bg" style={{ WebkitMaskImage: 'radial-gradient(120% 130% at 80% 10%, #000 35%, transparent 80%)', maskImage: 'radial-gradient(120% 130% at 80% 10%, #000 35%, transparent 80%)' }} />
        <div className="container" style={{ position: 'relative', paddingBlock: 'clamp(2.5rem,2rem + 3vw,4.5rem)', maxWidth: 'var(--container-narrow)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: 20, flexWrap: 'wrap', gap: 12 }}>
            <span className="coord" style={{ color: 'var(--text-faint)' }}>Asia-Connect Executive Partners</span>
            <span className="coord" style={{ color: 'var(--accent-strong)' }}>Issue No. 01</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(2.6rem,1.6rem + 4vw,4.6rem)', lineHeight: 0.98, letterSpacing: '-0.03em', color: 'var(--text-strong)', margin: '26px 0 0' }}>
            The Asia Operator
          </h1>
          <p style={{ marginTop: 18, maxWidth: '54ch', fontSize: 'var(--text-lead)', color: 'var(--text-body)', lineHeight: 1.5 }}>
            The operator’s view of doing business in Asia. Where the compliance newsletters tell you the rules, this one tells you what actually happens on the ground, and what to do about it.
          </p>
        </div>
      </section>

      {/* Issue */}
      <section className="container" style={{ paddingBlock: 'clamp(2.5rem,2rem + 3vw,4.5rem)' }}>
        <div className="ac-nl-body" style={{ maxWidth: '68ch', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 22, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <Badge tone="brass">Mobility &amp; EV</Badge>
              <Badge tone="neutral">Southeast Asia</Badge>
              <span className="coord" style={{ color: 'var(--text-faint)', alignSelf: 'center' }}>June 2026 · 5 min read</span>
            </div>
            <Toggle />
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-display-3)', lineHeight: 1.08, letterSpacing: '-0.022em', color: 'var(--text-strong)', margin: 0 }}>
            The EV clock just started in Southeast Asia
          </h2>
          <p style={{ marginTop: 16, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-lead)', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Local-content deadlines are landing across the region. The strategy was the easy part.
          </p>

          {/* author strip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '28px 0 0', paddingBlock: 18, borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <Avatar name="Franck Euvrard" size={52} ring />
            <div>
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, color: 'var(--text-strong)' }}>Franck Euvrard</div>
              <div className="coord" style={{ color: 'var(--text-faint)' }}>Partner, Mobility &amp; EV · Asia-Connect</div>
            </div>
          </div>

          {/* HERO image (photo / sketch) */}
          <NLImage
            idx="1" ratio="16 / 9" src={IMG.hero[imgMode]}
            alt="EV assembly line inside a Southeast-Asian factory at dusk, a wall clock and a regional map in the background"
            caption="The EV clock just started in Southeast Asia." />

          {/* Field notes, TL;DR for skimmers */}
          <div className="ac-fieldnotes">
            <div className="ac-fieldnotes-h">
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-strong)' }}>Field notes · the 30-second version</span>
            </div>
            {[
              ['01', 'Incentives across SE Asia are now tied to local production, and the rules bite in 2026.'],
              ['02', 'The hard part is not the engineering. It is the pace: decisions made and acted on locally, fast.'],
              ['03', 'A local-content threshold is a deadline, not a target. Win it with someone on the ground, not another deck.'],
            ].map(([k, t]) => (
              <div key={k} className="ac-fieldnotes-li">
                <span className="k">{k}</span>
                <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-strong)', lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <p className="ac-nl-dropcap">Several Southeast Asian governments have tied their EV incentives to local production, and the rules start to bite in 2026. If you build or sell vehicles in the region, market entry now comes with a date attached. I spent years running automotive and EV operations across Asia before I moved back to Europe, so I know what a deadline like that does to a plan.</p>

            <Sub>The real problem was never the engineering</Sub>
            <p>I ran those operations on site, not over a video call from a head office. I led vehicle systems integration for ICONIQ Motors in Shanghai, then product development for VinFast’s full EV lineup in Hanoi, as Deputy CEO. Decisions I expected to argue over for a month in Europe were closed in a week, and the local team had moved on before head office had even booked the call.</p>
            <p>What European companies underestimate about EV in Asia is rarely the technology. It is the pace: how fast a decision has to be made and acted on. When I ran a global vehicle program out of Tokyo, from 2015 to 2017, with parts coming out of Mexico, Poland and China at once, the hard part was never the engineering. It was that the people closest to the work often could not move without a call to a head office eight time zones away.</p>

            <blockquote className="ac-pullquote">That distance is the real tax on an Asian operation, and you do not pay it down with a better strategy. You pay it down by letting the people on the spot decide, and decide fast.</blockquote>

            <Sub>What changed this quarter</Sub>
            <p>Indonesia now ties its import-duty and luxury-tax breaks to a local-production commitment, backed by a bank guarantee the carmaker forfeits if it does not deliver. Local content has to reach 40 percent in 2026 and 60 percent by 2029. BYD has started trial production at its Subang plant this year, and Chery opens its largest ASEAN factory in Vietnam in mid-2026. Thailand and Vietnam are pulling assembly onshore with their own subsidies and duty waivers.</p>

            {/* pull stat */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, margin: '28px 0', padding: '24px 26px', background: 'var(--surface-sunken)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
              {[['40%', 'Local content · 2026'], ['60%', 'Local content · 2029'], ['~$6B', 'Regional EV market, 2026']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,1.3rem + 1.6vw,2.6rem)', lineHeight: 0.9, color: 'var(--text-strong)' }}>{v}</div>
                  <div className="coord" style={{ color: 'var(--text-muted)', marginTop: 8 }}>{l}</div>
                </div>
              ))}
            </div>

            <p>A local-content threshold is not a target you meet at your own pace. It is a deadline. Hitting those numbers means qualifying suppliers, fixing their quality, and standing up a line, usually faster than a European head office is used to moving. The companies that win in 2027 will be the ones that hit the number, not the ones with the best market-entry plan from 2025.</p>

            <Sub>What this looks like on the ground</Sub>

            <NLImage
              idx="2" ratio="3 / 2" src={IMG.field[imgMode]}
              alt="Split scene: a polished boardroom strategy slide on the left, the factory-floor reality on the right"
              caption="Month seven: the plan meets the plant." />

            <p>I have watched this play out more than once. A European group commits to a localization target to protect its incentives. The strategy is sound. The plan is thorough. Then month seven arrives, and the plan runs into a supplier who does not deliver, a regulator nobody put in the slides, and a local team that sends every real decision back to Europe. The deadline holds. The progress is what slips.</p>
            <p>What closes that gap is not another adviser, and it is not another deck. It is someone on the spot, yours or ours, who has done this before: who can qualify a supplier, read the regulator, and make the call on site this week instead of next quarter. That is the difference between a localization plan and a localized plant.</p>

            {/* five questions */}
            <Sub>Five questions before you commit</Sub>
            <p>If you are weighing a local-content commitment in Southeast Asia, ask these before you sign:</p>
            <ol style={{ listStyle: 'none', counterReset: 'q', margin: '8px 0 0', padding: 0 }}>
              {[
                'Who on the ground can make a binding decision without calling Europe first?',
                'Have we qualified real suppliers, or only mapped them on a slide?',
                'What is the true lead time to the threshold, counted backward from the deadline?',
                'When something breaks at 2am local time, who fixes it, and do they already know the system?',
                'Who owns the local-content number by name, and what happens if it slips?',
              ].map((q, i) => (
                <li key={i} style={{ display: 'flex', gap: 18, alignItems: 'baseline', padding: '16px 0', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--accent)', lineHeight: 1, flex: 'none' }}>{'0' + (i + 1)}</span>
                  <span style={{ fontSize: 'var(--text-lg)', color: 'var(--text-strong)', lineHeight: 1.5 }}>{q}</span>
                </li>
              ))}
            </ol>
            <p style={{ marginTop: 18 }}>If those answers are not clear, you do not have an execution plan yet. You have a strategy, and a clock running against it.</p>

            <Sub>Where I would start</Sub>
            <p>If you are staring at one of these deadlines, start with the first question: who on the ground can actually say yes. Tell me which market you are working in, and I will tell you what I would watch first.</p>

            <div style={{ margin: '28px 0', padding: 'clamp(1.5rem,1rem + 2vw,2.2rem)', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap', boxShadow: 'var(--shadow-sm)' }}>
              <div>
                <Kicker accent style={{ marginBottom: 8 }}>Reply to this issue</Kicker>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--text-strong)' }}>Which market are you working in?</div>
              </div>
              <Button variant="primary" size="lg" arrow onClick={openAgent}>Ask the concierge</Button>
            </div>

            {/* sign-off + bio */}
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--text-strong)', margin: '32px 0 18px' }}>Franck</p>
            <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', borderTop: '1px solid var(--border)', paddingTop: 20 }}>
              <Avatar name="Franck Euvrard" size={64} ring />
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                Franck Euvrard, Asia-Connect Executive Partners. 30+ years building and running automotive and EV operations. Built and ran Faurecia’s automotive R&amp;D center in India as its CEO (Pune, 2006 to 2011), then Managing Director India. Ran a global vehicle program from Tokyo (2015 to 2017) with production across Mexico, Poland and China. Led vehicle systems integration for ICONIQ Motors in Shanghai. Deputy CEO, Product Development for VinFast’s full EV lineup in Hanoi. EVP Global Engineering at Tata Technologies. Most recently ran software-defined-vehicle development as KPIT Managing Director in France. French Foreign-Trade Advisor since 2021.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* subscribe footer band */}
      <section className="ac-band" data-theme={bandTheme} style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ paddingBlock: 'clamp(2.5rem,2rem + 3vw,4rem)', maxWidth: 'var(--container-narrow)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Kicker accent style={{ marginBottom: 16 }}>The Asia Operator</Kicker>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-h1)', color: 'var(--text-strong)', margin: 0, maxWidth: '22ch' }}>
            One operator’s field note, once a month.
          </h2>
          <p style={{ marginTop: 16, maxWidth: '46ch', color: 'var(--text-body)', fontSize: 'var(--text-lg)', lineHeight: 1.6 }}>
            What actually happens on the ground in Asia, and what to do about it. No fluff, no decks.
          </p>
          <NLSubscribe />
          <span className="coord" style={{ marginTop: 26, color: 'var(--text-faint)' }}>You receive this because you subscribed or exchanged with Franck · Unsubscribe · Update preferences</span>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { NewsletterScreen });
