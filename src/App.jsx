import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{
        backgroundRepeat: "repeat",
        backgroundImage: "url('/images/BGAndLogo/background.png')",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
