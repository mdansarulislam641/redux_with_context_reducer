import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes';
import ProductProvider from './context/ProductContext/ProductContext';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <ProductProvider>

      <RouterProvider router ={router}></RouterProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
