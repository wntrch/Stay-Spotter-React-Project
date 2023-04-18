import "./App.css";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";
import ContactUs from "./pages/ContactUs";
import RentalDetailPage from "./pages/RentalDetailPage";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="listings" element={<ListingsPage />} />
        <Route path="listings/:id" element={<RentalDetailPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
