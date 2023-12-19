import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from '../components/home/HomePage'

function App() {

  return (
    <>
      <div className="header">
        <h1>Made 2 Automate</h1>
      </div>

      <div className="main-contianer">
        <HomePage />
      </div>
    </>
  );
}

export default App;
