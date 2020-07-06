import React from 'react';
import './product.css';

function Product(props) {
    return(
        <div className="productContainer">
            <img src={props.addedProduct.image_url} alt={props.addedProduct.name} className="productImage"/>
            <div>
                <div className="productNP">
                    <p>{props.addedProduct.name}</p>
                    <p>{`$ ${props.addedProduct.price}`}</p>
                </div> 
            </div>    
        </div>
    )
}

export default Product;