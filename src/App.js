
import './App.css';
import Header from "./components/header.js";
import Body from "./components/body.js";
// import SliderIcon from "./components/slider-icon";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ContactPage from './components/contacts';
import Footer from './components/footer';

function App() {
  return (
    <Router>
     <Header/>
       <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
