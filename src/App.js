import React, { Component } from 'react';
import AnimalsListContainer from './containers/AnimalsListContainer';
import NewAnimalContainer from './containers/NewAnimalContainer';
import AnimalTotalContainer from './containers/AnimalTotalContainer';

class App extends Component {
  render() {
    return (
      <>
        <NewAnimalContainer />
        <h2>Animals</h2>
        <AnimalTotalContainer />
        <AnimalsListContainer />
      </>
    );
  }
}

export default App;
