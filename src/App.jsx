import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Products from "./Products";
import Footer from "./Footer";
import Categories from "./Categories"

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={  <LandingPage />   } />
        <Route path="/collections" element={ <Products/>} />
        <Route path="/categories" element={ <Categories/>} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;