import FooterMain from "./components/footer/FooterMain";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MobileDetails from "./components/pages/mobile_detail/MobileDetails";

function App() {

  return (
    <div className="scroll-smooth">

      <BrowserRouter>
        <Navbar />

        <section className="bg-gray-300 min-h-screen w-full">

          <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/mobiles" element={<MobileDetails />} />

          </Routes>

        </section>

        <FooterMain />
      </BrowserRouter>
    </div>
  );
}

export default App;
