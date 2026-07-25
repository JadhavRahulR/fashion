import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Products from "./Products";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={  <LandingPage />   } />
        <Route path="/collections" element={ <Products/>} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;