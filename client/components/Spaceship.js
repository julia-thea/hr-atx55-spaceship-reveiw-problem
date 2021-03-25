import React from 'react';

// TO-DO
// [ ] Finish implementing this component

// What a boring component. But that's okay! It serves as a template for each ship.
const Spaceship = ({ ship  }) => {
  return (
    <li>
      The {ship.name}, a beautiful {ship.color} ship from fleet: {ship.fleet}
    </li>
  )
};

export default Spaceship;
