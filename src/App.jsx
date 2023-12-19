import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardData from "./components/CardData";
import TotalOrders from "./components/TotalOrders";
import TotalLeads from "./components/TotalLeads";
import { useState } from "react";
import AddProduct from "./components/AddProduct";
import Footer from "./components/Footer";

function App() {

  const [currentPage, setCurrentPage] = useState("Home-Page")

  return (
    <>
      <div className="header">
        <h1>Made 2 Automate</h1>
      </div>

      <div className="main-contianer">
        <CardData />
        
        <TotalOrders />

        <TotalLeads />

        <Footer />

        <AddProduct />

      </div>
    </>
  );
}

export default App;
