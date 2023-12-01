import React from 'react';
import './index.css';
// import styles from './styles/style.module.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Home from './components/home';


const App=()=>{
return (
    <Provider  store={store}>
        <Home/>
    </Provider>
)
}
export default App;