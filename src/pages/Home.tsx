import { DownloadCard, ProjectCard } from '../components/cards';
import { cardSpan } from '../components/grid';
import { InkStrip } from '../components/InkStrip';
import { LinkButton } from '../components/links';
import { MediaSlot, Overprint, PageMeta, Plate } from '../components/primitives';
import { CtaSection } from '../components/sections';
import { inks } from '../data/inks';
import { subscription } from '../data/issues';
import { printables } from '../data/printables';
import { projects } from '../data/projects';
import { links } from '../data/site';

export default function Home() {
  return (
    <>

      <PageMeta
        title="Taxonomy Press | Risograph prints and zines"
        description="Small-batch risograph prints of birds, blooms and good dogs."
      />

      {/* ===== Hero ===== */}
      <section className="grid" aria-labelledby="hero-title">
        <div className="cell cell--loose span-md-4 span-lg-8 hero">
          <h1 id="hero-title" className="wordmark">
            <Overprint>
              Taxonomy <em>Press</em>
            </Overprint>
          </h1>
          <p className="deck">
            An independent risograph micropress and print studio based in Detroit, Michigan. Operated by printer and
            artist Rachel Hays since 2019–2020 in the Jefferson Chalmers neighborhood, the press collaborates with a
            rotating group of artists and writers to produce nature-focused publications, comics, zines, and printed
            ephemera.
          </p>
        </div>
        <div className="cell cell--flush span-md-2 span-lg-4">
          <Plate ink="paprika">
            <img src="/img/iris.png" alt="" width={400} height={480} />
          </Plate>
        </div>
      </section>

      {/* ===== Substack ===== */}
      <CtaSection
        kicker="§ 01 / Newsletter"
        title="Notes from the studio"
        image={{ src: '/img/moth.png', alt: '', width: 200, height: 200 }}
        action={<LinkButton href={links.substack}>Read on Substack</LinkButton>}
      >
        <p className="body">
          Our Substack is where we share what's happening at the risograph studio: new projects, print runs in
          progress, and calls for contributors. It's free and lands in your inbox now and then.
        </p>
      </CtaSection>

      {/* ===== Subscribe to Floral Observer ===== */}
      <section className="grid" aria-labelledby="observer-title">
        <div className="cell cell--flush span-md-3 span-lg-5">
          <Plate ink="cornflower">
            {/* Swap for an image with: media={{ src: '/img/moth.png', alt: '' }} */}
            <MediaSlot
              media={{ type: 'video', src: '/img/floralobserverspring2026.mov', poster: '/img/floralobserverspring2026.mov' }}
            />
          </Plate>
        </div>
        <div className="cell cell--loose span-md-3 span-lg-7 teaser">
          <div className="stack">
            <p className="label">§ 02 / Subscribe</p>
            <h2 id="observer-title" className="display italic">
              The Floral Observer
            </h2>
            <p className="body">
              A riso-printed quarterly newspaper of personal essays, comics, foraging recipes, puzzles, and nature
              observations. Subscribe for 2027 and get all four seasonal issues mailed to you with printed extras.
            </p>
            <p className="label">{subscription.price}</p>
          </div>
          <div className="cta__actions">
            <LinkButton href={subscription.shop.url}>{subscription.shop.label}</LinkButton>
            <LinkButton href="/floral-observer#issues">See single issues</LinkButton>
          </div>
        </div>
      </section>

      {/* ===== Projects ===== */}
      <section id="shop" className="grid" aria-labelledby="shop-title">
        <CtaSection
          kicker="§ 03 / Projects"
          title="Projects & Publications"
          image={{ src: '/img/hawkflying.png', alt: '', width: 200, height: 200 }}
          action={<LinkButton href={links.shop}>Shop</LinkButton>}
        >
          <p className="body">
            Check out our indy books.
          </p>
        </CtaSection>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            span={cardSpan(i, projects.length, { md: 3, lg: 4 })}
          />
        ))}
      </section>

      {/* ===== Free printables ===== */}
      <CtaSection
        id="printables"
        kicker="§ 04 / Free printables"
        title="Print it at home"
        image={{ src: '/img/goldfinch.png', alt: 'finch', width: 200, height: 200 }}
        cards={printables.map((p, i) => (
          <DownloadCard key={p.id} printable={p} span={cardSpan(i, printables.length, { md: 2, lg: 3 })} />
        ))}
      >
        <p className="body">Free PDFs to download and print on your own printer. Letter size, black and white friendly.</p>
      </CtaSection>

      {/* ===== Open call ===== */}
      <CtaSection
        kicker="§ 05 / Open call"
        title="Make a book with us"
        image={{ src: '/img/butterflysolo.png', alt: 'butterfly', width: 100, height: 100 }}
        action={<LinkButton href="/open-call">See the open call</LinkButton>}
      >
        <p className="body">
          We're looking for comics and short books to print. If you have a project that would feel at home on the
          risograph, we'd love to see it.
        </p>
      </CtaSection>

      {/* ===== Submit to Floral Observer ===== */}
      <CtaSection
        kicker="§ 06 / Submit"
        title="Write for the Floral Observer"
        image={{ src: '/img/toad.png', alt: 'toad', width: 100, height: 100 }}
        action={<LinkButton href="/submit">How to submit</LinkButton>}
      >
        <p className="body">
          Send us your essays, comics, foraging recipes, puzzles, and nature observations for an upcoming issue.
        </p>
      </CtaSection>

      {/* ===== Ink strip (edit inks in src/data/inks.ts) ===== */}
      <InkStrip inks={inks} />
    </>
  );
}