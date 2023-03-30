import './App.css';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='contact' element={<ContactUs />} />
        </Routes>
    </div>
  );
}

export default App;
