import Navbar from "./Components/Navbar"
import {Footer} from "./Components/Footer";
import MainRoutes from "./Pages/mainRoutes"

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
