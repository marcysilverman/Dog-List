import React from 'react';
import PropTypes from 'prop-types';

function Dog({ dogName, weight, age }) {
  return (
    <>
      <h1> {dogName} </h1> 
      <h2> {weight} lbs </h2> 
      <h2> {age} years old </h2> 
    </>
  );
}

Dog.propTypes = {
  dogName: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired
};

export default Dog;
