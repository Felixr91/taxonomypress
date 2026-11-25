import { IssueCard, SpeciesRail, SubscriptionFeature } from '../components/cards';
import { MediaSlot, MetaRow, PageMeta } from '../components/primitives';
import { PageHero } from '../components/sections';
import FieldNotes from '../content/FieldNotes';
import { issues, subscription } from '../data/issues';
import { links } from '../data/site';
import { birds, flowers } from '../data/species';

export default function FloralObserver() {
  return (
    <article>
      <PageMeta
        title="The Floral Observer | Taxonomy Press"
        description="Floral Observer is a riso-printed quarterly newspaper from Taxonomy Press: personal essays, comics, foraging recipes, puzzles, and nature observations."
      />

      <PageHero
        media={
          <div className="video-bg">
            <MediaSlot
              media={{ type: 'video', src: '/img/floral-observer.mp4', poster: '/img/floral-observer-poster.jpg' }}
            />
          </div>
        }
        title={
          <>
            Floral <br />
            Observer
          </>
        }
        deck="A riso-printed quarterly newspaper about how people live alongside the natural world, told through personal essays, comics, foraging recipes, puzzles, and nature observations."
      />

      <MetaRow
        cellClassName="span-sm-2 span-md-4 span-lg-4"
        items={[
          { term: 'Format', value: 'Riso-printed newspaper' },
          { term: 'Published', value: 'Quarterly, one per season' },
          { term: 'Inside', value: 'Essays, comics, recipes & puzzles' },
        ]}
      />

      {/* ===== Issues & subscriptions ===== */}
      <section aria-labelledby="issues-title" id="issues">
        <div className="grid">
          <div className="cell cell--loose span-md-6 span-lg-3">
            <h2 id="issues-title" className="deck">
              2026 Issues
            </h2>
          </div>
          <div className="cell cell--loose span-md-6 span-lg-9">
            <p>
              Each season gets its own issue. Pick up a single copy or subscribe for the whole year.
              <br />
              <br />
              Browse everything on the <a href={links.floralObserverShop}>Floral Observer shop page</a>.
            </p>
          </div>
        </div>

        <ul className="grid issues" role="list">
          {issues.map((issue) => (
            <li key={issue.id} className="cell span-md-3 span-lg-3">
              <IssueCard issue={issue} />
            </li>
          ))}
        </ul>

        <SubscriptionFeature subscription={subscription} />
      </section>

      {/* ===== Species rail + field notes ===== */}
      <div className="grid">
        <aside className="cell span-md-6 span-lg-3" aria-labelledby="index-title">
          <SpeciesRail flowers={flowers} birds={birds} />
        </aside>
        <div className="cell cell--loose span-md-6 span-lg-9">
          <FieldNotes />
        </div>
      </div>
    </article>
  );
}