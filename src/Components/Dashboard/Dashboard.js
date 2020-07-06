import React, {Component} from 'react';
import Product from '../Product/Product';


class Dashboard extends Component {
    constructor() {
        super();
    
        this.state = {
          inventory: [
            {
              image_url: `https://cdni.llbean.com/is/image/wim/247251_47_41?%20wid=200&hei=231`,
              name: 'shirt',
              price: 59.99
            },
            {
              image_url: `https://i.pinimg.com/originals/ef/d8/bc/efd8bc064cd1335d9fb1d88ab1d66f55.jpg`,
              name: 'boots',
              price: 65.98
            }
          ]
        }
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