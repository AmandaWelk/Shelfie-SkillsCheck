import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    }
  }

  render() {
    return(
      <div>
        <Header/>
        <div className="main-components">
          <Dashboard/>
          <Form/>
        </div>
      </div>
    )
  }
}

export default App;
