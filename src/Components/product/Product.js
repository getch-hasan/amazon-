import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './product.css'

const Product = (props) => {
    const { name, img, ratings, price, seller } = props.product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p>Price:{price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratting:{ratings}</small></p>
            </div>
            <button onClick={() => props.handleAddToCard(props.product)} className='button-card'><p>Add to card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

            </button>


        </div>
    );
};

export default Product;