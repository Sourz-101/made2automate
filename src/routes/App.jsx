import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      <Navbar/>

      <div className="main-contianer">
        <Outlet />

        <Footer />
      </div>
    </>
  );
};

export default App;
