import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Shopp from './Pages/Shopp';
import ShoppCategory from './Pages/ShoppCategory';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shopp/>} />
        <Route path='/Mens' element={<ShoppCategory category='Men'/>}/>
        <Route path='/Womens' element={<ShoppCategory category='Women' />}/>
        <Route path='/Kids' element={<ShoppCategory category='Kid'/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>


      </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
