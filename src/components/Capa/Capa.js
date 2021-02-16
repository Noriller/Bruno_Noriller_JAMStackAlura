import { node } from 'prop-types';
import React from 'react';

export default function Capa({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Capa.propTypes = {
  children: node.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
