import React, {Component} from 'react';
import './form.css'
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
           image_url: '',
           name: '',
           price: '0',
           id: null
        }
    }

    handleImageInput = (event) => {
        this.setState({
            image_url: event.target.value
        });
    }

    handleNameInput = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handlePriceInput = (event) => {
        this.setState({
            price: event.target.value
        });
    }

    resetInputs() {
        document.getElementById("form").reset();
    }

    addProduct() {
        const addedProduct = {
            image_url: this.state.image_url,
            name: this.state.name,
            price: this.state.price
        };

        axios.post('/api/product', addedProduct)
        .then((res) => {
            
            });
            this.props.getProductInventory()
            .then(() => {
                this.resetState();
            })
        .catch((err) => {
            console.log(err);
        })
    }

    // addProduct() {
    //     let addedProducts = this.props.inventory.slice();
    //     addedProducts.push({image: this.state.image_url, name: this.state.name, price: this.state.price});

    //     this.props({inventory: addedProducts})
    // }

    render() {
        console.log(this.props.inventory)
        return(
            <div className="form">
                <div className="form-image">
                    {(this.state.image_url) 
                        ?
                        <img height='200px' width='300px' src={this.state.image_url} alt={this.state.name}/>
                        :
                        <img height='200px' width='300px' src="https://www.freeiconspng.com/uploads/no-image-icon-11.PNG" alt="default"/>
                    }
                </div>
                <form id="form">
                <p id="ptags">Image URL:</p>
                <input id="input-line" type="text" onChange={(event) => this.handleImageInput(event)} value={this.state.image_url}/>
                <p id="ptags">Product Name:</p>
                <input id="input-line" type="text" onChange={(event) => this.handleNameInput(event)} value={this.state.name}/>
                <p id="ptags">Price:</p>
                <input id="input-line" type="text" onChange={(event) => this.handlePriceInput(event)} value={this.state.price}/>
                <div className="form-buttons">
                    <button className="formButton" onClick={this.resetInputs}>Cancel</button>
                    <button className="formButton" onClick={this.addProduct}>Add to Inventory</button>
                </div>
                </form>
            </div>
        )
    }
}

export default Form;