import type { ReactNode } from 'react';
import { Link } from 'react-router';

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

interface SmartLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  download?: boolean;
}

/** Uses a router <Link> for pages in this site, and a plain <a> for everything else. */
export function SmartLink({ href, className, children, download }: SmartLinkProps) {
  if (download || isExternal(href) || href.startsWith('#')) {
    return (
      <a href={href} className={className} download={download || undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  arrow?: string;
  download?: boolean;
}

export function LinkButton({ href, children, arrow = '→', download }: LinkButtonProps) {
  return (
    <SmartLink href={href} className="link-button" download={download}>
      {children} <span aria-hidden="true">{arrow}</span>
    </SmartLink>
  );
}
