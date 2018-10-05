import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLoginProp }) => (
  <div>
    <button onClick={startLoginProp}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLoginProp: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
