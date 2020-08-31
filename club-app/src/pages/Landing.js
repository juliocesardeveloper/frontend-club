import React from 'react';

import './Landing.css';

import clubLogo from '../assets/images/logo1.png';
import { Footer } from '../components/Footer';

class Landing extends React.Component {
  render() {
    return (
      <>
        <section>
          <main>
            <img className="logo-club1" src={ clubLogo } alt="logo club"/>
            <h1 className="welcome">Seguridad y tranquilidad en tus viajes</h1>
            <button>Login</button>
            <p>¿No tienes cuenta? Regístrate <a class="register" href="#">aquí</a></p>
          </main>
          <Footer />
        </section>
      </>
    );
  }
}

export default Landing;