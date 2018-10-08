import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLoginProp }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>Get your expenses under control.</p>
      <button className="button" onClick={startLoginProp}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLoginProp: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
