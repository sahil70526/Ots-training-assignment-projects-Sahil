import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Product from './component/Product';
import Cart from './component/Cart';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <div style={{display:'flex', background:'black', padding:'4px',height:'50px'}}>
        <Link style={{marginRight:'20px', color:'white',fontSize:'larger',marginTop:'10px'}} to='/'>Product</Link>
        <Link style={{ color:'white',fontSize:'larger' ,marginLeft:'20px',marginTop:'10px'}} to='/cart'>Cart</Link>
      </div>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route  path='/cart' element={<Cart />} />
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
