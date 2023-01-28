import React from 'react';
import { useProducts } from '../context/ProductContext/ProductContext';
import ProductCard from './ProductCard';

const Cart = () => {
    const {state :{card, loading , error}} = useProducts();
    console.log(card)
    let content  ; 
    if(loading){
     content = <p>Loading.....</p>
    }
    if(error){
      content = <p>Error....</p>
    }
    if(!loading && !error && card.length === 0){
     content = <p>Nothing to show products card is empty</p>
    }
    if(!loading && !error && card.length ){
     content =  card?.map((product ,idx)=>
         <ProductCard
     key={idx}
     product={product}
     ></ProductCard>
     )
    }
 
     return (
         <div className='grid my-20 grid-cols-3 gap-5 space-y-3'>
     
          
            {content}
       
         </div>
     );
};

export default Cart;