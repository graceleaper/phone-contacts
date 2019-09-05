import React, { Component } from "react";
import ReactDOM from "react-dom";
import ContactList from './ContactList'
import axios from 'axios'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/contacts')
      const contacts = res.data
      this.setState({contacts})
    } catch(err) {
      console.log('There was a problem making a contact.')
    }
  }

  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          {/* your components here */}
          <ContactList contacts = {this.state.contacts}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
