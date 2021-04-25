import React from 'react';
import Reflux from 'reflux';
import GuestStore from '../Stores';
import './GBList.css';

class GBList extends Reflux.Component {

  constructor(props){
    super(props);
    this.store = GuestStore;
  }

  render() {
    const messageList =  this.state.messages.map((message, index) => {
      return (
          <a href={'mailto:'+message.email} key={index} className="list-group-item">
          <h4 className="list-group-item-heading">{message.email}</h4>
          <p className="list-group-item-text">{message.text}</p>
        </a>
        );
    });

    return (
      <div className="list-group">
        {messageList}
      </div>
    );
  }
}

export default GBList;
