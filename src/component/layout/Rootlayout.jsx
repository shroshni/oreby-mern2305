import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Header from "../Header";


const Rootlayout = () => {
  return (
    <div>
      
      <Navbar />
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Rootlayout;
