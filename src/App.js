
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/shop/Shop';
import { Routes, Link, Route } from 'react-router-dom';
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import RequireAuth from './Components/RequerAuth/RequireAuth';
import Shipment from './Components/Shipment/Shipment';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes >

        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/order' element={<RequireAuth><Order></Order></RequireAuth>}></Route>
        <Route path='/inventory' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/shipment'element={<RequireAuth> <Shipment></Shipment></RequireAuth>}></Route>
      </Routes>



    </div>
  );
}

export default App;
