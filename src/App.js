
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/shop/Shop';
import{Routes,Link,Route}from 'react-router-dom';
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div >
     <Header></Header>
     <Routes >

      <Route path='/home' element={<Shop></Shop>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/order' element={<Order></Order>}></Route>
      <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
     </Routes>
      
     
     
    </div>
  );
}

export default App;
