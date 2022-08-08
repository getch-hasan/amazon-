
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/shop/Shop';
import{Routes,Link,Route}from 'react-router-dom';
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';

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
     </Routes>
      
     
     
    </div>
  );
}

export default App;
