import React from 'react';
import './index.css';
// import styles from './styles/style.module.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Home from './components/home';
// import Services from './components/services';
// import Projects from './components/projects';
// import Blog from './components/webLog';
// import AboutUs from './components/aboutUs';
// import ContactUs from './components/contactUs';
import Users from './components/users';

const App=()=>{
return (
    <Provider  store={store}>
        <Home/>
     <Users/>
    </Provider>
)
}
export default App;