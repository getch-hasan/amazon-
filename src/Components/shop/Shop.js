import React, { useEffect, useRef, useState } from 'react';
import useProducts from '../../hooks/useproducts';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Card from '../card/Card';
import Product from '../product/Product';
import {Link} from 'react-router-dom'


import './Shop.css'
import usecard from '../../hooks/Usecard';

const Shop = () => {
    const [products,setProducts]=useProducts()
    const[card,setCard]=usecard(products)

    useEffect(() => {

        const storedcard = getStoredCard();
        const savedcard = [];
        for (const id in storedcard) {
            const addedProducts = products.find(product => product.id === id)
            if (addedProducts) {
                const quantity = storedcard[id]
                addedProducts.quantity = quantity

                savedcard.push(addedProducts)

            }
            setCard(savedcard)
        }
    }, [products])

    const handleAddToCard = (selectproduct) => {
        let newCard = []
        /*  console.log(product); */

        const exist = card.find(product => product.id === selectproduct.id)
        if (!exist) {
            selectproduct.quantity = 1
            newCard = [...card, selectproduct]
        }
        else {

            const rest = card.filter(product => product.id !== selectproduct.id)
            exist.quantity = exist.quantity + 1;
            newCard = [...rest, exist]
        }
        setCard(newCard);
        addToDb(selectproduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}


                        product={product}
                        handleAddToCard={handleAddToCard}

                    ></Product>)
                }

            </div>
            <div className="card-container">
                <Card card={card}>
                    <Link to='/order'>
                        <button>Review order</button>
                    </Link>
                </Card>

            </div>
        </div>
    );
};

export default Shop;