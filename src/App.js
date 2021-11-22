import React from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {Routes, Route,BrowserRouter} from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/review" element={<ReviewOrder />} />
            <Route path="*" element={<NotFound/>}/>
            <Route path="/product/:productId" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
