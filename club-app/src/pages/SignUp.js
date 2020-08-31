import React from 'react';

import backBtn from '../assets/images/icono-atras-50.png';
import './SignUp.css';


class SignUp extends React.Component {
  render() {
    return (
      <>
        <section className="card">
          <a href=""><img src={ backBtn } alt=""/></a>
          <h1>Registro</h1>
          <form>
            <input className="input" type="text" name="Usuario" id="" placeholder="Nombre de usuario"/>
            <input className="input" type="text" name="Nombre" id="" placeholder="Tu nombre completo"/>
            <input className="input" type="email" name="E-mail" id="" placeholder="E-mail"/>
            <input className="input" type="tel" name="Numero de celular" id="" placeholder="Número de celular"/>
            <input className="input" type="password" name="" id="" placeholder="Password"/>
            <input className="button" type="submit" value="Registrarse"/>
          </form>
          <p>Regístrate con <a href="http://"><b>Facebook</b></a>  o <a href="http://"><b>Google</b></a></p>
          <p>¿Ya tienes cuenta? Ingresa<a href=""><b>aquí</b></a></p>
        </section>
      </>
    );
  }
}

export default SignUp;