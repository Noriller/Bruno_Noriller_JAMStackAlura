import { node } from 'prop-types';
import React from 'react';

export default function WrapperProjetos({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

WrapperProjetos.propTypes = {
  children: node.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
