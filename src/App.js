
import Navbar from "./Components/Navbar";
import {Route, Routes,Link} from "react-router-dom";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home"
import Offer from './Components/Offer'
import Features from "./Components/Features";
function App() {
  return (
      <>
          <Navbar/>

         <Routes>
             <Route path={'/'} exact element={<Home/>}/>
             <Route path='/about'   element={<About/>}/>
             <Route path='/contact'   element={<Contact/>}/>
             <Route path='/offer'   element={<Offer/>}/>
             <Route path='/features'   element={<Features/>}/>
         </Routes>
      </>
  );
}

export default App;
