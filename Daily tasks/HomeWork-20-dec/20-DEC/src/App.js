import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Login from './Login';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
}

export default App;
