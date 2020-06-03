import React, { Component } from 'react';
import './App.css';

import axios from 'axios';



class App extends Component {

  //php -S 127.0.0.1:8080 to start development server.

  state = {
    // Fetch should be asynchronous if possible. Now needs dummy.
    contacts: []
  }

  componentDidMount() {

    console.log("componentDidMount")

    const url = 'http://localhost:8080/endpoint/contacts.php'

    // const url = 'http://52.223.179.81/endpoint/contacts.php';


    axios.get(url).then(response => response.data)
      .then((data) => {
        console.log("Axios GET promise fulfilled!")
        this.setState({ contacts: data })
        console.log(this.state.contacts)
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div>
        <h1>Contact Management</h1>
        <table border='1' width='100%' >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>City</th>
              <th>Job</th>
            </tr>
          </thead>

          <tbody>
            {this.state.contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.country}</td>
                  <td>{contact.city}</td>
                  <td>{contact.job}</td>
                </tr>
            ))}
          </tbody>

        </table>
      </div>    );
  }
}

export default App;
