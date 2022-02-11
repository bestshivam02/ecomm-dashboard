import './App.css';
import React from 'react';
import Header from './Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'

// Shiv

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <h1>E-Comm</h1>
      <Routes>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />} />
      <Route path="add" element={<AddProduct />} />
      <Route path="update" element={<UpdateProduct />} />
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
