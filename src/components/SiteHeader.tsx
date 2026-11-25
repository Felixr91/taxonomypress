import { Link, NavLink } from 'react-router';
import { nav } from '../data/site';

export function SiteHeader() {
  return (
    <header className="site-header grid">
      <div className="cell span-md-3 span-lg-6">
        <Link className="site-header__brand" to="/">
          Taxonomy <em>Press</em>
        </Link>
      </div>
      <nav className="cell cell--flush span-md-3 span-lg-6" aria-label="Main">
        <div className="site-nav label">
          {nav.map((item) =>
            // Links to a section (#shop) never mark themselves as the current page.
            item.to.includes('#') ? (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ) : (
              <NavLink key={item.to} to={item.to} end>
                {item.label}
              </NavLink>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}
