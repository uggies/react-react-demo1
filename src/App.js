import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer />
      <NewCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
