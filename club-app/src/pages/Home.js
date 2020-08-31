import React from 'react';

import './Home.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

class Home extends React.Component {
  render() {
    return (
      <>
        <section>
          <Header />
          <div id="mapa"></div>
          <main>
            <div className="main-avatar"></div>
            <div className="main-info">
              <h3>Nombre</h3>
              <p>1 cosa</p>
              <p>2 cosa</p>
              <p>3 cosa</p>
            </div>
          </main>
          <Footer />
        </section>
      </>
    );
  }
}

export default Home;