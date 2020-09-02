import React from 'react';

import { Link } from 'react-router-dom';

import backBtn from '../assets/images/icono-atras-50.png';
import './styles/SignUp.css';


class SignUp extends React.Component {
  data = [];
  state={
    userName: ''
  };
  handleChange = e => {
    // console.log({ name: e.target.name, value: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    this.data.push(this.state);
    console.log(this.data);
  };


  render() {
    return (
      <>
        <section className="card signup-section">
          <Link to="/"><img src={ backBtn } alt=""/></Link>
          <h1>Registro</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              className="input"
              type="text"
              name="userName"
              // id=""
              placeholder="Nombre de usuario"
              value={this.state.userName}
            />
            <input
              onChange={this.handleChange}
              className="input"
              type="text"
              name="completeName"
              // id=""
              placeholder="Tu nombre completo"
              value={this.state.completeName}
            />
            <input
              onChange={this.handleChange}
              className="input"
              type="email"
              name="email"
              // id=""
              placeholder="Tu email"
              value={this.state.email}
            />
            <input
              onChange={this.handleChange}
              className="input"
              type="tel"
              name="tel"
              // id=""
              placeholder="Número de celular"
              value={this.state.tel}
            />
            <input
              onChange={this.handleChange}
              className="input"
              type="password"
              name="password"
              // id=""
              placeholder="Password"
              value={this.state.password}
            />
            <input
              onClick={this.handleClick}
              className="button"
              type="submit"
              value="Registrarse"
            />
          </form>
          <p>Regístrate con <a href="http://"><b>Facebook</b></a>  o <a href="http://"><b>Google</b></a></p>
          <p>¿Ya tienes cuenta? Ingresa<Link to="/login"><b>aquí</b></Link></p>
        </section>
      </>
    );
  }
}

export default SignUp;