import React, { useEffect, useRef, useState } from 'react';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Card from '../card/Card';
import Product from '../product/Product';


import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

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
                <Card card={card}></Card>

            </div>
        </div>
    );
};

export default Shop;