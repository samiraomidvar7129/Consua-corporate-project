import React from 'react';
import './index.css'
import store from './redux/store';
import { Provider } from 'react-redux';
import Users from './components/users';

const App=()=>{
return (
    <Provider  store={store}>
     <Users/>
    </Provider>
)
}
export default App;