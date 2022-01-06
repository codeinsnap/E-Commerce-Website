import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './container/Header';
import ProductComponents from './container/ProductComponents';
import ProductDetails from './container/ProductDetails';
import ProductListing from './container/ProductListing';

function App() {
  return (
    <div className='home'>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/component" element={<ProductComponents />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
