import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './component/Navbar';
import Aboutus from './routes/Aboutus';
//import Dashboard from './routes/Dashboard';
import Dash from './Dashboard/Dash';
import Details from './routes/Details';
import Faq from './routes/Faq';
import Home from './routes/Home';


export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      <>
      
      
      {location.pathname !== "/Dashboard" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/About" element={<Aboutus />} />
        <Route path="/Dashboard" element={<Dash/>} />
        </Routes> 
        
        </>         
    </div>
  );
}
