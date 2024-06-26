import React from "react";
import Login from "./Pages/User/LogIn/LogIn";
import Register from "./Pages/User/Register/Register";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import "./App.css";
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductPage from "./Components/Product Page/ProductPage";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";


function App() {
  return (
    <>
      <div>
        <Routes>
         <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>       
          <Route path="/productpage" element={<ProductPage />}></Route>
          <Route path="/productdetails" element={<ProductDetails />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
