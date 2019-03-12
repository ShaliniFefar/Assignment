import React, { Component } from 'react';
import { render } from "react-dom";
import './App.css';
import Tabs from './Tabs';
import List from './List';
import Create from './Create';
import Email from './Email'

class App extends Component {


  render() {
    return (
      <div>
        <h1>Email Client</h1>
        <Tabs>
      <div label="List">
      <div> {
          <List>
          </List>
         }
      </div>
      </div>
      <div label="Create">
      <Create></Create>
      
      </div>
    </Tabs>
    <Email />
      </div>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
//render(<App />, container);

export default App;
