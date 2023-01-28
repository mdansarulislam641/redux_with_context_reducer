import React from 'react';
import { useProducts } from '../context/ProductContext/ProductContext';
import ProductCard from './ProductCard';

const WishList = () => {
    const {state: {wishlist, loading , error} } = useProducts();
    console.log(wishlist)
    let content  ; 
    if(loading){
     content = <p>Loading.....</p>
    }
    if(error){
      content = <p>Error....</p>
    }
    if(!loading && !error && wishlist.length === 0){
     content = <p>Nothing to show products card is empty</p>
    }
    if(!loading && !error && wishlist.length ){
     content =  wishlist?.map((product ,idx)=>
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

export default WishList;