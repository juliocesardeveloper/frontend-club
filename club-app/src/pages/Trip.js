import React from 'react';

import './Trip.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

class Trip extends React.Component {
  render() {
    return (
      <>
        <section>
          <Header />
          <div id="mapa"></div>
          <main>
            <form action="">
              <input class="input" type="text" name="Origen" id="" placeholder="¿Dónde estás?"/>
              <input class="input" type="text" name="Destino" id="" placeholder="¿A dónde vas?"/>
              <input class="button" type="submit" value="Viajar"/>
            </form>
          </main>
          <Footer />
        </section>
      </>
    );
  }
}

export default Trip;