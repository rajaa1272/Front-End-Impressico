import './App.css';
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';
import {Products} from './component/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Product } from './component/Product';
import AddProduct from './component/AddProduct';
import  Cart  from './component/Cart';
import Register from './component/Register';
import Login from './component/Login';
import About from './component/About';
import Contact from './component/Contact';
// import { Announcement } from '@material-ui/icons';
import Announcement from './component/Announcement';
import Checkout from './component/Checkout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Announcement/>
        <Routes>
          <Route exact={true} path={'/'} element={<Home />} />
          <Route exact={true} path={'/about'} element={<About/>}/>
          <Route exact={true} path={'/contact'} element={<Contact/>}/>
          <Route exact={true} path={'/addproduct'} element={<AddProduct/>}/>
          <Route exact={true} path={'/products'} element={<Products/>} />
          <Route exact={true} path={'/products/:id'} element={<Product />} />
          <Route exact={true} path={'/cart'} element={<Cart />} />
          <Route exact={true} path={'/register'} element={<Register />} />
          <Route exact={true} path={'/login'} element={<Login />} />
          <Route exact={true} path={"/checkout"} element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
