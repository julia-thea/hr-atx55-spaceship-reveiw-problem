import React from 'react';
import Spaceship from './Spaceship';

// TO-DO
// [ ] implement a map method for rendering the spaceship list

// Destructuring props, because we can
const SpaceshipList = ({ ships }) => {
  return (
    <div>
      <h2>
        Our Ships!
      </h2>
      <ul>
        {ships.map((ship) => {
          return <Spaceship ship={ship} />
        })}
      </ul>
    </div>
  )
};

export default SpaceshipList;
