import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {Routes, Route,BrowserRouter} from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Authentication from './components/Authentication/Authentication';
import Shipment from './components/Shipment/Shipment';
import ProtectedRoute from './components/ProtectedRoute';
export const LoginContext=createContext();
function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    photo: ""
  });
  return (
    <LoginContext.Provider value={[user,setUser]}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route element={<ProtectedRoute/>}>
              <Route path="/inventory" element={<Inventory />} />
            </Route>
            <Route path="/review" element={<ReviewOrder />} />
            <Route path="*" element={<NotFound/>}/>
            <Route path="/product/:productId" element={<ProductDetail/>}/>
            <Route path="/login" element={<Authentication/>}/>
            <Route element={<ProtectedRoute />}>
              <Route path="/shipment" element={<Shipment/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
