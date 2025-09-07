import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar.jsx';
import Home from './Component/Home.jsx';
import Comfy from './Component/Comfy.jsx';
import Self from './Component/Self.jsx';
import YA from './Component/YA.jsx';
import Classic from './Component/Classic.jsx';
import DA from './Component/DA.jsx';
import Mystery from './Component/Mystery.jsx';
import Scroll from './Component/Scroll.jsx';
import Footer from './Component/Footer.jsx';
import Copyright from './Component/Copyright.jsx';



const App = () => {
  return (
    <Router>
      <Scroll/>
      <Navbar/>
      <main>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/Comfy" element = {<Comfy/>} />
          <Route path = "/Self" element = {<Self/>} />
          <Route path = "/YA" element = {<YA/>} />
          <Route path = "/Classic" element = {<Classic/>} />
          <Route path = "/DA" element = {<DA/>} />
          <Route path = "/Mystery" element = {<Mystery/>} />
        </Routes>
      </main>
      <Footer/>
      <Copyright/>
    </Router>
  );
}

export default App
