import React from 'react';
import usecard from '../../hooks/Usecard';
import useProducts from '../../hooks/useproducts';
import { removeFromDb } from '../../utilities/fakedb';
import Card from '../card/Card';
import Rivew from '../Rivew/Rivew';
import{Link, useNavigate} from 'react-router-dom'

const Order = () => {
    const navigat=useNavigate();
    const [products, setProducts] = useProducts()
    const [card, setCard] = usecard(products);
    const handleRemoveProduct=product=>{
        const rest=card.filter(pd=> pd.id !== product.id)
        setCard(rest)
        removeFromDb(product.id)

    }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {

                    card.map(product => <Rivew key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}>
                           
                        </Rivew>)
                }

            </div>
            <div className="card-container">
                <Card card={card}
                >

                 <button onClick={()=>navigat('/shipment')}>Proceed checkout</button>
                </Card>
            </div>


        </div>
    );
};

export default Order;