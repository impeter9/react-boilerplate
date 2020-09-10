import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export const StyledUl = styled.ul`
  color: ${props => props.color};
`;

const List = ({ strings, listColor }) => (
  <StyledUl color={listColor}>
    {strings.map(string => (
      <li key={string}>{string}</li>
    ))}
  </StyledUl>
);

List.propTypes = {
  strings: PropTypes.array,
  listColor: PropTypes.string,
};

export default List;
