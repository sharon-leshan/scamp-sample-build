import React, { Fragment } from 'react';

import ParagraphSection from '../paragraphSection/ParagraphSection';

const Detail = () => (
  <ParagraphSection
    paragraphs={[
      <Fragment>
        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio
        nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi{' '}
        <a href="/" className="underline">
          bibendum diam
        </a>
        . Tempor integer aliquam in vitae malesuada fringilla.
      </Fragment>,
      <Fragment>
        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
        commodo consectetur convallis risus. Sed condimentum enim dignissim
        adipiscing faucibus consequat, urna. Viverra purus et erat{' '}
        <a href="/" className="underline">
          auctor aliquam
        </a>
        . Risus, volutpat vulputate posuere purus sit congue convallis aliquet.
        Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies
        eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in
        tellus, pharetra, porttitor.
      </Fragment>,
      <Fragment>
        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.
        Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie
        sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut
        tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
      </Fragment>,
    ]}
  />
);

export default Detail;
