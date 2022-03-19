/* React */
import React from 'react';
import { useNavigate } from 'react-router-dom';
/* Firebase */
import { auth, provider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
/* Styles */
import "./styles.css";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true)
      navigate('/')
    })
  };

  return (
    <div className="login-page">
      <p>Fazer login com uma conta Google</p>
      <button className="login-page__btn" onClick={signInWithGoogle}>Login</button>
    </div>
  )
}

export default Login;