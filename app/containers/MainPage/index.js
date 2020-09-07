/**
 *
 * MainPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeStringsSelector } from './selectors';
import { loadStrings } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function MainPage(props) {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });

  useEffect(() => {
    // load strings
    props.loadStrings();
  }, []);

  // const { strings } = props;

  return (
    <div>
      <Helmet>
        <title>MainPage</title>
        <meta name="description" content="Description of MainPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
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
