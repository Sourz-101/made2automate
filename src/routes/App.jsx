import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      {/* <div className="nav">
        <Link to="/" className="addProduct">
          <img src="https://i0.wp.com/made2automate.com/wp-content/uploads/2023/03/cropped-cropped-cropped-Untitled-design-2023-03-27T165416.581.png?w=261&ssl=1" />
        </Link>

        <ul className="navItem">
          <Link to="/" className="addProduct">
            <li className="navText">Dashboard</li>
          </Link>

          <Link to="/my-order-page" className="addProduct">
            <li className="navText">My Orders</li>
          </Link>
          <Link to="add-product-page" className="addProduct">
            <li className="navText">Add Products</li>
          </Link>
        </ul>
      </div> */}

      <Navbar/>

      <div className="main-contianer">
        <Outlet />

        <Footer />
      </div>
    </>
  );
};

export default App;
