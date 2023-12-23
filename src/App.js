import React from 'react';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Services from './components/services';
import AboutUs from './components/aboutUs';
import Projects from './components/projects';
import ContactUs from './components/contactUs';
import Footer from './components/footer'
import Login from './components/login';
import SearchBar from './components/serachBar';


const App=()=>{
return (
<Provider  store={store}> 
        <Navbar/>
        <Home/>
        <section className='routes'>
        <Routes>
        <Route path="/home"  element={ <Home/>}></Route>
        <Route path="/services"  element={<Services/>}></Route>
        <Route path="/projects"  element={<Projects/>}></Route>
        <Route path="/about-us"  element={<AboutUs/>}  ></Route>
        <Route path="/contact-us"  element={<ContactUs/>}  ></Route>
        <Route path="/login"  element={<Login/>} ></Route>
        <Route path="/search"  element={<SearchBar/>} ></Route>
        </Routes>
        </section> 
        <Footer/>
     </Provider>

     
)
}
export default App;