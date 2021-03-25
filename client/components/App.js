import React, { Component } from 'react';
import module from '../../dummyData';
import SpaceshipList from './SpaceshipList';
import SpaceshipForm from './SpaceshipForm';

// TO-DO
// [ ] Determine a state for the App component(hint: use the dummy data file)
// [ ] Render the SpaceshipList & SpaceshipForm components
// [ ] Finish the handleSubmitNewSpaceship method

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaceships: module.spaceships
    };
    this.handleSubmitNewSpaceship = this.handleSubmitNewSpaceship.bind(this);
  }

  handleSubmitNewSpaceship(ship) {
    this.setState({
      spaceships: [...this.state.spaceships, ship]
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <SpaceshipForm handleSubmitNewSpaceship={this.handleSubmitNewSpaceship} />
        <SpaceshipList ships={this.state.spaceships}/>
      </div>
    );
  }
}