import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <>
        <label htmlFor="">Find contacts by name</label>
        <input
          type="text"
          id="findContacts"
          onChange={this.props.onChangeFilter}
        />
      </>
    );
  }
}

export default Filter;
