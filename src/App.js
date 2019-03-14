import React, { Component } from 'react';
import Tabs from './Components/Tabs';
import List from './Components/List';
import Create from './Components/Create';
import './App.css';


class App extends Component {


  render() {
    return (
      <div>
        <h1>Email Client</h1>
        <Tabs>
      <div label="List">
      <div> 
          <List>
          </List>  
      </div>
      </div>
      <div label="Create">
      <Create></Create>
      </div>
    </Tabs>
    
      </div>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
//render(<App />, container);

export default App;
