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

const style = {
  background: `linear-gradient(180deg,
      var(--blue-white-100)0%,
      var(--med-blue) 100%)
  `};

function BgColumn() {
  return <div style={style} className="z-[-10] absolute w-[200px] opacity-10 ml-[72vw] h-[125vh] max-h-screen top-0 bottom-0 overflow-hidden
  " />;
}

export default BgColumn;
