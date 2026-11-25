/*
  EDITOR: the Floral Observer field notes.
  Write paragraphs in <p> tags and section titles in <h2> tags.
  Keep the id on each <h2> so the species list links still work
  (the ids are listed in src/data/species.ts).
  The first letter of the first paragraph becomes a drop cap automatically.
*/
export default function FieldNotes() {
  return (
    <div className="passage">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere
        velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
        semper. Cras mattis consectetur purus sit amet fermentum, maecenas faucibus mollis interdum.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare
        vel eu leo. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
        malesuada magna mollis euismod.
      </p>

      <h2 id="love-in-a-mist">Love-in-a-mist</h2>
      <p>
        Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis
        mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.
      </p>

      <figure>
        <div className="plate plate--turquoise">
          <img
            src="/img/love-in-a-mist.svg"
            alt="Riso print of a love-in-a-mist bloom, cornflower petals inside a turquoise haze of filaments"
            width={200}
            height={200}
          />
        </div>
        <figcaption className="label label--muted">Plate I. Nigella damascena, cornflower and turquoise.</figcaption>
      </figure>

      <h2 id="zinnia">Zinnia</h2>
      <p>
        Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id
        elit. Integer posuere erat a ante venenatis dapibus.
      </p>

      <blockquote className="pull-quote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <cite className="label label--muted">From the field notebook</cite>
      </blockquote>

      <p>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta
        gravida at eget metus.
      </p>

      <h2 id="sunflower">Sunflower</h2>
      <p>
        Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a
        pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus
        porttitor, donec ullamcorper nulla non metus auctor fringilla.
      </p>
      <p>
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi
        erat porttitor ligula, eget lacinia odio sem nec elit.
      </p>

      <h2 id="phlox">Phlox</h2>
      <p>
        Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus
        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      </p>
    </div>
  );
}
