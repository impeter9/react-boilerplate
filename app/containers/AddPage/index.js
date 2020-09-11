/**
 *
 * AddPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { postString } from './actions';
import reducer from '../MainPage/reducer';
import saga from '../MainPage/saga';

export const MainDiv = styled.div`
  position: fixed;
  top: 4rem;
`;

export const AddForm = styled.form`
  margin: 0.5rem;
  input {
    margin: 0.1rem;
  }
`;

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
    <MainDiv>
      <Helmet>
        <title>AddPage</title>
        <meta name="description" content="Description of AddPage" />
      </Helmet>
      <AddForm onSubmit={handleSubmit}>
        <label>
          Add a string to the list:
          <input
            value={string}
            type="text"
            name="string"
            onChange={e => setString(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </AddForm>
    </MainDiv>
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
