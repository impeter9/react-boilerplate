/**
 *
 * MainPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeStringsSelector } from './selectors';
import { loadStrings } from './actions';
import reducer from './reducer';
import saga from './saga';

export const MainDiv = styled.div`
  position: fixed;
  top: 4rem;
`;

export function MainPage(props) {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });

  useEffect(() => {
    // load strings
    props.loadStrings();
  }, []);

  const { strings } = props;

  return (
    <MainDiv>
      <Helmet>
        <title>MainPage</title>
        <meta name="description" content="Description of MainPage" />
      </Helmet>
      <ul>
        {strings.map(string => (
          <li key={string}>{string}</li>
        ))}
      </ul>
    </MainDiv>
  );
}

MainPage.propTypes = {
  strings: PropTypes.array,
  loadStrings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeStringsSelector(),
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
