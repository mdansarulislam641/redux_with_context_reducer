import React from 'react';
import { useProducts } from '../context/ProductContext/ProductContext';
import ProductCard from './ProductCard';

const TopRatedProducts = () => {
    const {state :{products, loading , error}} = useProducts();
   let content  ; 
   if(loading){
    content = <p>Loading.....</p>
   }
   if(error){
     content = <p>Error....</p>
   }
   if(!loading && !error && products.length === 0){
    content = <p>Nothing to show products card is empty</p>
   }
   if(!loading && !error && products.length ){
    content =  products?.filter(product=> product.rating > 3).map((product ,idx)=>
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

export default TopRatedProducts;