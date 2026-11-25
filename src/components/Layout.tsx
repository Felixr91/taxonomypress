import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

/**
 * On page change: jump to the #hash if there is one, otherwise go to the top
 * and move focus to <main> so keyboard and screen reader users start there.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="page">
        <SiteHeader />
        <main id="main">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <ScrollManager />
    </>
  );
}
