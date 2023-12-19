import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from '../components/home/HomePage'
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div className="header">
        <h1>Made 2 Automate</h1>
      </div>

      <div className="main-contianer">
        <Outlet />
        
        <Footer />
      </div>

    </>
  );
}

export default App;
