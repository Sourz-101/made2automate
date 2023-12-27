import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductDataProvider from "../store/add-product-store";

function App() {
  return (
    <ProductDataProvider>
      <Navbar />
      <div className="main-contianer">
        <Outlet />
        <Footer />
      </div>
    </ProductDataProvider>
  );
}

export default App;
