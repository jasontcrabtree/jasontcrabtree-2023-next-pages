import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
// import SEO from '../components/utils/SEO';

const FourOhFourParentStyles = styled.main`
  grid-row-start: 2;
  margin-top: var(--size-48);

  * {
    margin-bottom: var(--size-40);
  }

  @media screen and (min-width: 960px) {
    grid-column: 1 / -7;
    * {
      margin-bottom: var(--size-72);
    }
  }
`;

const PageNotFound = props => {
  if (!props) return null;

  return (
    <FourOhFourParentStyles id="main">
      {/* <SEO /> */}
      <header className="four-oh-four-header">
        <h1>Sh*t! Something's broken 🛠</h1>
      </header>
      <section>
        <p>
          Uhh, the link you clicked on didn't work. I better fix that. In the
          meantime, let's give you some sweet content that actually works.
        </p>
      </section>
      <Link href="/">Return Home</Link>
    </FourOhFourParentStyles>
  );
};

export default PageNotFound;
