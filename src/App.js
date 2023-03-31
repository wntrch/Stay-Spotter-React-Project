import './App.css';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='listings' element={<ListingsPage />} />
          {/* <Route path='about' element={<About />} /> */}
          <Route path='contact' element={<ContactUs />} />
        </Routes>
    </div>
  );
}

export default App;
