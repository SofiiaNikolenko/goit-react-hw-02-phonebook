import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.filter().map(({ id, name, number }) => {
            return (
              <li key={id}>
                <div>
                  <p>
                    {name}: {number}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      this.props.onDeleteContact(id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ContactList;
