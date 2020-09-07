/**
 *
 * AddPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import makeSelectAddPage from './selectors';
import { postString } from './actions';
import reducer from '../MainPage/reducer';
import saga from '../MainPage/saga';
import messages from './messages';

export function AddPage(props) {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });

  const [string, setString] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.postString(string);
    alert(`string '${string}' added to the list`);
    setString('');
  };

  return (
    <div>
      <Helmet>
        <title>AddPage</title>
        <meta name="description" content="Description of AddPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <form onSubmit={handleSubmit}>
        <label>
          Add a string to the list:
          <input
            type="text"
            name="string"
            onChange={e => setString(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

AddPage.propTypes = {
  postString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    postString: string => dispatch(postString(string)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddPage);
