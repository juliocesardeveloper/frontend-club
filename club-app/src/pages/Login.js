import React from 'react';

import backBtn from '../assets/images/icono-atras-50.png';
import './Login.css';


class SignUp extends React.Component {
  render() {
    return (
      <>
        <section class="card" >
          <a href=""><img src={ backBtn } alt=""/></a>
          <h1>Login</h1>
          <form action="">
            <input class="input" type="text" name="Usuario" id="" placeholder="Nombre de usuario"/>
            <input class="input" type="password" name="" id="" placeholder="Password"/>
            <input class="button" type="button" value="Login"/>
          </form>
          <p>Ingresa con <a href="http://"><b>Facebook</b></a>  o <a href="http://"><b>Google</b></a></p>
          <p>¿No tienes cuenta? Regístrate<a href=""><b>aquí</b></a></p>
        </section>
      </>
    );
  }
}

export default SignUp;