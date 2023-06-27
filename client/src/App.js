import "./App.css";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";
import ContactUs from "./pages/ContactPage";
import RentalDetailPage from "./pages/RentalDetailPage";
import { Route, Routes } from "react-router-dom";
import About from "./pages/AboutPage";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="App">
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="listings" element={<ListingsPage />} />
        <Route path="listings/:id" element={<RentalDetailPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
