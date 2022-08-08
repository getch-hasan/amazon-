import { faRemove, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Rivew.css';

const Rivew = (props) => {
    const {product,handleRemoveProduct}=props;
    const {name,price,shipping,img,quantity}=props.product;
    return (
        <div className='review-item'>
            <div><img src={img} alt="" /></div>
            
            <div className='review-item-detail-container'>
                <div className='review-item-detail'>
                <p className='name'>{name.length >20? name.slice(0,20) + '...':name}</p>
                <p> price:{price}</p>
                <p>shipping price:{shipping}</p>
                <p>quantity:{quantity}</p>
                </div>
                <div className='delete-item'>
                    <button onClick={()=>handleRemoveProduct(product)} >
                        <FontAwesomeIcon className='delete-icon' icon={ faTrashAlt }></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Rivew;