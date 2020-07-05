import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            price: 0,
            image_URL: ''
        }
    }

    render() {
        return(
            <div className="form">
                <div className="form-image"> 
                </div>
                <p id="ptags">Image URL:</p>
                <input id="input-line" type="text"/>
                <p id="ptags">Product Name:</p>
                <input id="input-line" type="text"/>
                <p id="ptags">Price:</p>
                <input id="input-line" type="text" value="0"/>
                <div className="form-buttons">
                    <button className="formButton">Cancel</button>
                    <button className="formButton">Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;