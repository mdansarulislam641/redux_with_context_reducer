import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import Home from "../components/Home";
import TopRatedProducts from "../components/TopRatedProducts";
import WishList from "../components/WishList";
import Main from "../layout/Main/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            },
            {
                path:'wishlist',
                element:<WishList></WishList>
            },
            {
                path:'top-rated',
                element:<TopRatedProducts></TopRatedProducts>
            }
        ]
    },
 

])