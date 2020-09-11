/**
 *
 * MainPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeStringsSelector, makeLoadingSelector } from './selectors';
import { loadStrings } from './actions';
import reducer from './reducer';
import saga from './saga';
import List from '../../components/List';
import Spinner from '../../components/Spinner';

export const MainDiv = styled.div`
  position: fixed;
  top: 4rem;
`;

export const StyledButton = styled.button`
  background-color: ${props => props.color};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export function MainPage(props) {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });

  const [listColor, setListColor] = useState('red');

  useEffect(() => {
    // load strings
    props.loadStrings();
  }, []);

  const { strings } = props;
  const handleColorChangeRed = e => {
    e.preventDefault();
    setListColor('red');
  };
  const handleColorChangeBlue = e => {
    e.preventDefault();
    setListColor('blue');
  };

  return (
    <MainDiv>
      <Helmet>
        <title>MainPage</title>
        <meta name="description" content="Description of MainPage" />
      </Helmet>
      <StyledButton color="red" onClick={handleColorChangeRed}>
        Red
      </StyledButton>
      <StyledButton color="blue" onClick={handleColorChangeBlue}>
        Blue
      </StyledButton>
      {props.loading ? (
        <Spinner />
      ) : (
        <List strings={strings} listColor={listColor} />
      )}
      {/* <List strings={strings} listColor={listColor} /> */}
    </MainDiv>
  );
}

MainPage.propTypes = {
  strings: PropTypes.array,
  loadStrings: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  strings: makeStringsSelector(),
  loading: makeLoadingSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadStrings: () => dispatch(loadStrings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MainPage);
