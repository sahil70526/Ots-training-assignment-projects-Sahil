import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Product from './component/Product';
import Cart from './component/Cart';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <div style={{display:'flex', background:'gray', padding:'4px'}}>
        <Link style={{marginRight:'20px'}} to='/'>Product</Link>
        <Link to='/cart'>Cart</Link>
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
