// shared/components.jsx
// Shared Nav, Footer, PageHeader, CookieBanner
// Exports everything to window so each page script can use them

const { useState, useEffect } = React;

const NAV_LINKS = [
  { id: 'Home.html',          label: 'Home' },
  { id: 'News.html',          label: 'Latest Email / News' },
  { id: 'Matches.html',       label: 'Matches & Events' },
  { id: 'Memberships.html',   label: 'Memberships' },
  { id: 'FAQs.html',          label: 'Membership FAQs' },
  { id: 'Tickets.html',       label: 'Match Tickets' },
  { id: 'Pub Points.html',    label: 'Attendance Prizes' },
  { id: 'Shop.html',          label: 'Shop' },
  { id: 'Gallery.html',       label: 'Gallery' },
  { id: 'Annual Report.html', label: 'Annual Report' },
  { id: 'About.html',         label: 'About' },
  { id: 'Contact.html',       label: 'Contact' },
  { id: 'Privacy.html',       label: 'Privacy & Cookie Policy' },
];

function Nav({ cartCount = 0 }) {
  const current = window.location.pathname.split('/').pop() || 'Home.html';

  return (
    <nav className="nav">
      <a href="Home.html" className="nav__logo">
        <div style={{background:'var(--white)',borderRadius:6,padding:'3px 5px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
          <img src="uploads/Chelsea_Vancouver.png" alt="CSCV" style={{height:38,width:38,objectFit:'contain',display:'block'}} />
        </div>
        <div className="nav__logo-text">
          <strong>Chelsea Vancouver</strong>
          <span>Official Supporters Club</span>
        </div>
      </a>

      <div className="nav__links">
        {NAV_LINKS.map(l => (
          <a
            key={l.id}
            href={l.id}
            className={`nav__link${current === l.id ? ' active' : ''}`}
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="nav__actions">
        <a href="Memberships.html" className="btn btn-gold btn-sm">Join Now</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">

        {/* Brand col */}
        <div>
          <div className="footer__logo">
            <div style={{background:'var(--white)',borderRadius:6,padding:'4px 6px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <img src="uploads/Chelsea_Vancouver.png" alt="CSCV" style={{height:44,width:44,objectFit:'contain',display:'block'}} />
            </div>
            <div>
              <div style={{fontFamily:'Archivo',fontSize:15,fontWeight:800,color:'var(--white)',letterSpacing:'-0.01em'}}>Chelsea Vancouver</div>
              <div style={{fontSize:10,color:'var(--gold)',letterSpacing:'0.12em',textTransform:'uppercase',fontWeight:700}}>Official Supporters Club</div>
            </div>
          </div>
          <p className="footer__tagline">
            Vancouver's official Chelsea FC Platinum Supporters Club since 1999. 
            Watch parties at The Brass Fish every match day.
          </p>

          {/* Social */}
          <div className="footer__social">
            {[
              { icon: 'X',  href: '#', label: 'Twitter/X' },
              { icon: 'Fb', href: '#', label: 'Facebook' },
              { icon: 'IG', href: '#', label: 'Instagram' },
            ].map(s => (
              <a key={s.label} href={s.href} className="footer__social-btn" title={s.label}>{s.icon}</a>
            ))}
          </div>

          {/* Affiliation badges */}
          <div className="affiliations">
            <div className="affil-badge">
              <img src="uploads/Screen_Shot_2022-03-12_at_7.43.14_PM.jpg" alt="Chelsea Supporters' Trust" />
              <span>Supporters' Trust</span>
            </div>
            <div className="affil-badge">
              <img src="uploads/Chelsea_Vancouver.png" alt="CFC Platinum Club" />
              <span>Platinum Club</span>
            </div>
          </div>
        </div>

        {/* Club links */}
        <div>
          <div className="footer__col-title">Club</div>
          <ul className="footer__links">
            {[
              ['About.html',         'About CSCV'],
              ['Memberships.html',   'Memberships'],
              ['FAQs.html',          'Membership FAQs'],
              ['Pub Points.html',    'Attendance Prizes'],
              ['Annual Report.html', 'Annual Report'],
              ['News.html',          'Latest Email / News'],
            ].map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Matchday links */}
        <div>
          <div className="footer__col-title">Match Day</div>
          <ul className="footer__links">
            {[
              ['Matches.html',  'Matches & Events'],
              ['Tickets.html',  'Match Tickets'],
              ['Shop.html',     'Shop'],
              ['Gallery.html',  'Gallery'],
              ['Contact.html',  'Contact'],
              ['Privacy.html',  'Privacy & Cookie Policy'],
            ].map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* External links */}
        <div>
          <div className="footer__col-title">Chelsea FC</div>
          <ul className="footer__links">
            {[
              ['https://chelseafc.com',                  'Chelsea FC Website ↗'],
              ['https://chelseafc.com/trueblue',         'Chelsea True Blue ↗'],
              ['https://chelseafc.com/pitchowners',      'Chelsea Pitch Owners ↗'],
              ['https://chelseafansupporters.co.uk',     'Supporters\' Trust ↗'],
              ['https://www.premierleague.com',          'Premier League ↗'],
            ].map(([href, label]) => (
              <li key={href}><a href={href} target="_blank" rel="noopener">{label}</a></li>
            ))}
          </ul>
          <div style={{marginTop:20}}>
            <div className="footer__col-title">Contact</div>
            <a href="mailto:chelseafcvancouver@gmail.com" style={{fontSize:13,color:'var(--gold)',display:'block',marginBottom:4}}>chelseafcvancouver@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2025 Chelsea Supporters Club Vancouver. Not officially affiliated with Chelsea FC Ltd.</span>
        <span style={{display:'flex',gap:16}}>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="FAQs.html">FAQs</a>
        </span>
      </div>
    </footer>
  );
}

function PageHeader({ label, title, sub, img }) {
  const style = img
    ? { backgroundImage: `url(../${img})` }
    : {};
  return (
    <div
      className={`page-header${img ? ' page-header--img' : ''}`}
      style={style}
    >
      <div className="page-header__inner">
        {label && <div className="page-header__label">{label}</div>}
        <h1 className="page-header__title">{title}</h1>
        {sub && <p className="page-header__sub">{sub}</p>}
      </div>
    </div>
  );
}

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('cscv_cookie_ok')) setVisible(true);
  }, []);
  const accept = () => { localStorage.setItem('cscv_cookie_ok', '1'); setVisible(false); };
  const decline = () => { setVisible(false); };
  if (!visible) return null;
  return (
    <div className="cookie-banner">
      <p>
        We use cookies to improve your experience and remember your preferences.
        Your data is handled in accordance with our{' '}
        <a href="#">Privacy Policy</a> and <a href="#">Cookie Policy</a>.
        CSCV is PIPEDA compliant.
      </p>
      <div className="cookie-banner__actions">
        <button className="btn btn-outline-white btn-sm" onClick={decline}>Decline</button>
        <button className="btn btn-gold btn-sm" onClick={accept}>Accept All</button>
      </div>
    </div>
  );
}

// Step indicator for multi-step forms
function StepIndicator({ steps, current }) {
  return (
    <div style={{display:'flex',alignItems:'center',gap:0,marginBottom:40}}>
      {steps.map((label, i) => (
        <React.Fragment key={label}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: current > i ? 'var(--blue)' : current === i ? 'var(--gold)' : 'var(--border)',
              color: current >= i ? (current === i ? 'var(--blue-dark)' : 'var(--white)') : 'var(--muted)',
              display:'flex',alignItems:'center',justifyContent:'center',
              fontFamily:'Archivo',fontSize:14,fontWeight:800,
              transition:'all 0.2s',flexShrink:0
            }}>
              {current > i ? '✓' : i + 1}
            </div>
            <span style={{
              fontFamily:'Archivo',fontSize:13,fontWeight:700,
              letterSpacing:'0.03em',textTransform:'uppercase',
              color: current >= i ? 'var(--text)' : 'var(--muted)',
              transition:'color 0.2s'
            }}>{label}</span>
          </div>
          {i < steps.length - 1 && (
            <div style={{flex:1,height:2,background:current > i ? 'var(--blue)' : 'var(--border)',margin:'0 14px',transition:'background 0.3s'}}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// Expose everything to window
Object.assign(window, { Nav, Footer, PageHeader, CookieBanner, StepIndicator, NAV_LINKS });
