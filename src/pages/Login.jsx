import React from 'react';
import { auth, provider } from '../firebase-config';

function Login() {
  return (
    <div className="login-page">
      <p>Fazer login com uma conta Google</p>
      <button className="login-page__btn">Login</button>
    </div>
  )
}

export default Login;