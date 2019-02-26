import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddDogForm extends Component {
  static propTypes = {
    addDog: PropTypes.func.isRequired
  };
  
  state = {
    dogName: '',
    weight: '',
    age: '',
  };


  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dogName, weight, age } = this.state;
    this.props.addDog({ dogName, weight, age });
  };

  render() {
    const { weight, age, dogName } = this.state;
    return (
    <>
      <form onSubmit={this.handleSubmit}>
        <label>  Dog Name  </label>
        <input name="dogName" onChange={this.handleChange} value={dogName} type="text" /> 
        <label> Age </label>
        <input name="age" onChange={this.handleChange}  value={age} type="number" /> 
        <label> Weight </label>
        <input name="weight"  onChange={this.handleChange} value={weight} type="number" />
        <button> Add dog to List</button>
      </form>
    </> 
    );
  }
}

