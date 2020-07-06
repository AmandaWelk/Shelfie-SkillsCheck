import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';


class Dashboard extends Component {
    constructor() {
        super();
    
        this.state = {
          inventory: []
        }
      }

    getProductInventory = () => {
        console.log('hit')
        axios.get('/api/inventory')
        .then((res) => {
            this.setState({inventory: res.data});
        });
    }

    componentDidMount = () => {
        this.getProductInventory()
    }

    render() {
        console.log(this.state.inventory)
        const mappedProducts = this.state.inventory.map((product, i) => {
            return(
                <Product 
                    getProductInventory={() => this.getProductInventory()}
                    addedProduct={product}
                    key={i}
                />
            )  
        });
        return(
            <div>
                {mappedProducts}
            </div>
        )
    }
}

export default Dashboard;