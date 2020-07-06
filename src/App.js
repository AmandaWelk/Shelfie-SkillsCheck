import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     inventory: [
  //       {
  //         image_url: 'https://cdni.llbean.com/is/image/wim/247251_47_41?%20wid=200&hei=231',
  //         name: 'shirt',
  //         price: 59.99
  //       },
  //       {
  //         image_url: 'https://i.pinimg.com/originals/ef/d8/bc/efd8bc064cd1335d9fb1d88ab1d66f55.jpg',
  //         name: 'boots',
  //         price: 65.98
  //       }
  //     ]
  //   }
  // }

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
