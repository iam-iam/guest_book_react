import React from 'react';
import Reflux from 'reflux';
import GuestStore from '../Stores';
import Actions from '../Actions';
import './GBForm.css';

class GBForm extends Reflux.Component {

  constructor(props){
    super(props);
    this.store = GuestStore;
    this.state = { 
      email: '',
      message: ''
    };
  }

  render() {
    return (
      <div className="panel panel-default">
   <div className="panel-body">
      <div>
         <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email{this.state.messages.length}</label>
            <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} id="exampleInputEmail1" placeholder="Email"/>
         </div>
         <div className="form-group">
            <label htmlFor="exampleInputPassword1">Сообщение</label>
            <input type="text" className="form-control" name="message" value={this.state.message} onChange={this.handleInputChange} id="exampleInputPassword1" placeholder="Message"/>
         </div>
         <button onClick={this.onClick}>Отправить</button>
      </div>
   </div>
</div>
);
  }

  onClick = (e) => {
    console.log(this.state);
    if(this.state.email && this.state.message){
      Actions.submit(this.state.email, this.state.message);
    }
    
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState, props) => {
      return { [name]: value };
    });

  }


}

export default GBForm;
