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

    getProductInventory() {
        axios.get('/api/inventory')
        .then((res) => {
            this.setState({inventory: res.data});
        });
    }

    render() {
        const mappedProducts = this.state.inventory.map((product, i) => {
            return(
                <Product 
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