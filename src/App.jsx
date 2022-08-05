import { useState, useRef } from 'react';
import { Header, Main, Footer } from './page'
import './App.scss';
import Container from './components/container/container';
import BigContainer from './components/container/bigContainer';
import Hero from './components/hero/hero';
function App() {
    return (
      <>
      <Container>
        <Header />
        <Hero />
      </Container>
      <BigContainer>
        <Container>
        <Main>

        </Main>
        </Container>
      </BigContainer>
       <Container>
        <Footer />
       </Container>
      </>
    )
}

export default App;
