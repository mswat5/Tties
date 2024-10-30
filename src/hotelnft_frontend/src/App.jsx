import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Outlets from "./pages/Outlets";
import Catering from "./pages/Catering";
import Cart from "./pages/Cart";
import { HomeCooks } from "./pages/HomeCooks";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/outlets" element={<Outlets />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/cooks" element={<HomeCooks />} />
          {/* <Route path="/laundry" element={<LaundryServices />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
