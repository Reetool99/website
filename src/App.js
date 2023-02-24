import { Route, Routes } from "react-router-dom";
import Api from "./api";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import State from "./state";

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Contact />
      </Routes>
      <Footer />
      <State />
      <Api />
    </div>
  );
}

export default App;
