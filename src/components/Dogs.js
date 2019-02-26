import PropTypes from 'prop-types';
import React from 'react';
import Dog from './Dog';

function Dogs({ dogs }) {
  const listOfDogs = dogs.map(dog => {
    return (
      <li key={dog.dogName}>
        <Dog dogName={dog.dogName} age={dog.age} weight={dog.weight} />
      </li>
    );
  });

  return (
    <ul>
      {listOfDogs}
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};



export default Dogs;
