import { useEffect } from "react";
import { useState } from "react"
import { getStoredCard } from "../utilities/fakedb";

const usecard=(products)=>{

    const [card,setCard]=useState([]);
    useEffect(()=>{

        const storedcard=getStoredCard();
        const savedcard=[];
        for(const id in storedcard){
            const addedProducts=products.find(product=>product.id===id)
            if(addedProducts){

                const quantity=storedcard[id];
                addedProducts.quantity=quantity;
                savedcard.push(addedProducts)
            }


        }
        setCard(savedcard);
    },[products])

    return[card,setCard]
}
export default usecard;