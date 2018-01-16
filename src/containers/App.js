import React, { Component } from 'react';
import styled from 'styled-components';

// import FlipingCards from './FlipingCards/FlipingCards';
import Card from './FlipingCard/FlipingCard';
import logo from '../logo.svg';

import '../assets/css/App.css';

const Container = styled.section `
    margin: 0 auto;
`


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container>
            <Card/>
        </Container>
      </div>
    );
  }
}

export default App;
