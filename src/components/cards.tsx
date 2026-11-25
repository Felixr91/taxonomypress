import type { CSSProperties } from 'react';
import type { Issue, Printable, Project, Species, Subscription } from '../data/types';
import { LinkButton, SmartLink } from './links';
import { ImageSlot, Plate } from './primitives';

export function IssueCard({ issue }: { issue: Issue }) {
  return (
    <article className={`issue-card issue-card--${issue.ink}`}>
      <figure className="issue-card__image">
        <ImageSlot image={issue.image} placeholder={issue.placeholder} />
      </figure>
      <p className="label label--muted">{issue.kicker}</p>
      <h3 className="issue-card__title">{issue.title}</h3>
      {issue.blurb && <p>{issue.blurb}</p>}
      {issue.price && <p className="issue-card__price label">{issue.price}</p>}
      {issue.shop && (
        <a className="issue-card__link label" href={issue.shop.url}>
          {issue.shop.label}
        </a>
      )}
    </article>
  );
}

export function SubscriptionFeature({ subscription }: { subscription: Subscription }) {
  return (
    <div className="grid">
      <div className="cell cell--flush span-md-6 span-lg-6">
        <figure className="issue-card__image issue-card__image--wide">
          <ImageSlot image={subscription.image} placeholder={subscription.placeholder} />
        </figure>
      </div>
      <div className="cell cell--loose span-md-6 span-lg-6">
        <div className="stack">
          <p className="label label--muted">{subscription.kicker}</p>
          <h3 className="issue-card__title">{subscription.title}</h3>
          <p>{subscription.blurb}</p>
          <p className="issue-card__price label">{subscription.price}</p>
          <a className="issue-card__link label" href={subscription.shop.url}>
            {subscription.shop.label}
          </a>
          {subscription.note && <p className="label label--muted">{subscription.note}</p>}
        </div>
      </div>
    </div>
  );
}

/** `span` comes from cardSpan() in grid.ts so the row always fills. */
export function ProjectCard({ project, span }: { project: Project; span: string }) {
  return (
    <article className={`cell cell--flush ${span} product`}>
      <Plate ink={project.ink} cover>
        <ImageSlot image={project.image} placeholder={project.placeholder} />
      </Plate>
      <div className="product__body">
        <h3 className="product__title">
          {project.url ? <SmartLink href={project.url}>{project.title}</SmartLink> : project.title}
        </h3>
        <p className="label label--muted">{project.details}</p>
        <div className="product__meta label">
          <span>{project.inks}</span>
          <span>{project.price}</span>
        </div>
      </div>
    </article>
  );
}

export function DownloadCard({ printable, span }: { printable: Printable; span: string }) {
  return (
    <article className={`cell cell--flush ${span} download download--${printable.ink}`}>
      <div className="download__preview">
        <ImageSlot image={printable.image} placeholder={printable.placeholder} />
      </div>
      <div className="download__body">
        <h3 className="download__title">{printable.title}</h3>
        <p className="label label--muted">{printable.details}</p>
        <LinkButton href={printable.file} arrow="↓" download>
          Download PDF
        </LinkButton>
      </div>
    </article>
  );
}

function SpeciesList({ items }: { items: Species[] }) {
  return (
    <ul className="species-index">
      {items.map((s) => {
        const content = (
          <>
            <span className="species-index__common">{s.common}</span>{' '}
            <span className="species-index__latin">{s.latin}</span>
          </>
        );
        return <li key={s.latin}>{s.anchor ? <a href={`#${s.anchor}`}>{content}</a> : content}</li>;
      })}
    </ul>
  );
}

export function SpeciesRail({ flowers, birds }: { flowers: Species[]; birds: Species[] }) {
  return (
    <div className="rail">
      <h2 id="index-title" className="label">
        Species observed
      </h2>
      <div
        className="stack"
        style={{ '--stack-gap': 'var(--space-3)', marginTop: 'var(--space-5)' } as CSSProperties}
      >
        <h3 className="label label--muted">Flowers</h3>
        <SpeciesList items={flowers} />
        <h3 className="label label--muted">Birds</h3>
        <SpeciesList items={birds} />
      </div>
    </div>
  );
}
