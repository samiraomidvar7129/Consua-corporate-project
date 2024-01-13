import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import './fonts/Yekan.ttf';
import { BrowserRouter} from 'react-router-dom';
import * as ServiceWorker from './serviceWorkerRegistration'
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

ServiceWorker.register();