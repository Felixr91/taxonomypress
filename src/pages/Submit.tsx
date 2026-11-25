import { ImageSlot, MetaRow, PageMeta, Plate } from '../components/primitives';
import { PageHero } from '../components/sections';
import { links } from '../data/site';
import warbler from '../../public/img/warbler.png';

/* EDITOR: fill in the meta values and guideline text below. */
export default function Submit() {
  return (
    <article>
      <PageMeta
        title="Submit to the Floral Observer | Taxonomy Press"
        description="Send essays, comics, foraging recipes, puzzles, and nature observations to the Floral Observer."
      />

      <PageHero
        media={
          <Plate ink="turquoise">
            <ImageSlot
              image={{ src: warbler, alt: "Riso-printed bats flying in front of the moon at night" }}
              placeholder="Open call image"
            />
          </Plate>
        }
        title="Submit"
        deck="Send your work to the Floral Observer, our riso-printed quarterly newspaper about people and the natural world."
      />

      <MetaRow
        items={[
          { term: 'Now reading for', value: 'Season / year' },
          { term: 'Deadline', value: 'Date' },
          { term: 'Word count', value: 'Range' },
          { term: 'Contributor pay', value: 'Details' },
        ]}
      />

      <div className="grid">
        <div className="cell span-md-6 span-lg-3 section-head">
          <p className="label">Guidelines</p>
        </div>
        <div className="cell cell--loose span-md-6 span-lg-9">
          <div className="passage">
            <h2 id="what-we-publish">What we publish</h2>
            <p>
              Each issue mixes personal essays, comics, foraging recipes, puzzles, and nature observations. We like work
              rooted in a specific place and season.
            </p>
            <ul>
              <li>Personal essays</li>
              <li>Comics</li>
              <li>Foraging recipes</li>
              <li>Puzzles</li>
              <li>Nature observations</li>
            </ul>

            <h2 id="seasons">Upcoming themes</h2>
            <p>Add the theme and deadline for the next issue here.</p>

            <h2 id="how-to-submit">How to submit</h2>
            <p>
              Email your piece and a short bio to <a href={`mailto:${links.email}`}>{links.email}</a> with "Floral
              Observer" in the subject line.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
