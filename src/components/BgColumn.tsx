import React from 'react';
import styled from 'styled-components';

const BgColumnStyles = styled.div`
  grid-column: 9 / 11;
  grid-row: 1 / -1;

  z-index: -1;
  margin-top: -96px;

  @media (prefers-color-scheme: light) {
    background: linear-gradient(
      180deg,
      var(--blue-white-100) 0%,
      var(--med-blue) 100%
    );
  }
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(180deg, #0e7c86 0%, #1e4d53 100%);
  }
`;

function BgColumn() {
  return <BgColumnStyles className="bg-column hide-bg-column" />;
}

export default BgColumn;
