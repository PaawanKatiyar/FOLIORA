import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Component/Navbar.jsx';
import Home from './Component/Home.jsx';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path = "/" element = {<Home/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
