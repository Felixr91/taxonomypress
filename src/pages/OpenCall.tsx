import { ImageSlot, MetaRow, PageMeta, Plate } from '../components/primitives';
import { PageHero } from '../components/sections';
import { links } from '../data/site';
import bats from '../../public/img/bats.png'

/* EDITOR: fill in the meta values and guideline text below. */
export default function OpenCall() {
  return (
    <article>
      <PageMeta
        title="Open Call | Taxonomy Press"
        description="Taxonomy Press is looking for comics and short books to print on the risograph."
      />

      <PageHero
        media={
          <Plate ink="violet">

            <ImageSlot
              image={{ src: bats, alt: "Riso-printed bats flying in front of the moon at night" }}
              placeholder="Open call image"
            />          </Plate>
        }
        title={
          <>
            Open <br />
            Call
          </>
        }
        deck="We're looking for comics and short books to print on the risograph."
      />

      <MetaRow
        items={[
          { term: 'Looking for', value: 'Comics & short books' },
          { term: 'Length', value: 'Page count' },
          { term: 'Deadline', value: 'Date' },
          { term: 'Contributor pay', value: 'Details' },
        ]}
      />

      <div className="grid">
        <div className="cell span-md-6 span-lg-3 section-head">
          <p className="label">Guidelines</p>
        </div>
        <div className="cell cell--loose span-md-6 span-lg-9">
          <div className="passage">
            <h2 id="what-were-looking-for">What we're looking for</h2>
            <p>
              Comics and short books with a feel for the natural world and the everyday. Describe the themes and kinds
              of work you want here.
            </p>

            <h2 id="specs">Print specs</h2>
            <p>Add trim size, number of ink colors, and file requirements here.</p>

            <h2 id="how-to-apply">How to apply</h2>
            <p>
              Send a short pitch, a few sample pages, and a link to your work to{' '}
              <a href={`mailto:${links.email}`}>{links.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
