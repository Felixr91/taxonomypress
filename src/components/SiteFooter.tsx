import { Link } from 'react-router';
import { links, nav } from '../data/site';
import { InstagramIcon } from './primitives';

export function SiteFooter() {
  return (
    <footer className="site-footer grid">
      <div className="cell cell--loose span-md-6 span-lg-6">
        <p className="site-footer__mark">Taxonomy Press</p>
      </div>
      <nav className="cell span-md-3 span-lg-3" aria-label="Footer">
        <p className="label label--muted">Index</p>
        <ul className="label" style={{ marginTop: 'var(--space-3)' }}>
          {nav.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
          <li>
            <a href={links.substack}>Substack</a>
          </li>
          <li>
            <a className="social-link" href={links.instagram}>
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="cell span-md-3 span-lg-3">
        <p className="label label--muted">Colophon</p>
        <p className="label" style={{ marginTop: 'var(--space-3)' }}>
          Printed in cornflower, paprika, turquoise &amp; violet.
        </p>
        <p className="label label--muted">© {new Date().getFullYear()} Taxonomy Press</p>
      </div>
    </footer>
  );
}
