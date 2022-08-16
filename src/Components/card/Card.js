import React from 'react';
import './card.css'

const Card = (props) => {
    const {card}=props
    
    
   
    let total = 0
    let shipping = 0
    let tax = 0
    let gTotal = 0
    let quantity = 0
    for (const product of card) {
        total = total + ((product.price) * (product.quantity))
        shipping = shipping + product.shipping
        tax = ((total * 10) / 100).toFixed(2);
        gTotal = total + shipping + parseFloat(tax)
        quantity = quantity + product.quantity
    }



    return (
        <div className='card'>
            <h1>Order summary</h1>
            <p>Selected item {quantity}</p>
            <p>Total price :${total}</p>
            <p>shipping price :${shipping}</p>
            <p>Tax :{tax}</p>
            <h4>Grand Total :{gTotal}</h4>
            {props.children}
          


        </div>
    );
};

export default Card;