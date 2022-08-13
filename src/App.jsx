import React, { useEffect } from 'react'
import Header from './component/Home Layout/header';
import Main from './component/Home Layout/main';
import Footer from './component/Home Layout/footer';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ProductDetails from './component/Product Details/productDetails'
import './App.css'
import Products from './component/allProducts/products';
import Login from './component/User/login';
import Signup from './component/User/signup';
import store  from './store/store';
import { loadUser } from './store/action/userAction';


function App() {
  // useEffect(()=>{
  //   store.dispatch(loadUser())
  // })
  return (
    <Router>
      <Header/>
      <Routes>
      <Route exact path='/' element={<Main/>}/> 
      <Route exact path='/product/:id' element={<ProductDetails/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route path='/products/:keyword' element={<Products/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
