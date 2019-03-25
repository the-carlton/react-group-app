import React, { Component } from 'react';
// import Navbar1 from './components/Nav-bar.js';
// import Contact from './components/Contact.js';
import Contacts from './components/Contacts.js';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './components/Clock.js';
import Form1 from './components/Form.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header branding="Contact Manager"/>
          <div className={"container"}>{/*<Navbar1 />*/}
            <Contacts />
            <Clock />
            <Form1 />
          </div>
        </div>
    );
  }
}

export default App;
