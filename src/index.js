import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './classbasedapp';
import FnApp from './functionbasedapp';
import ConditionalRendering from './ConditionalRendering';
import Formpage from './form';
import CounterApp from './CounterApp';
import Contextmain from './useContext/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* function based app page */}
    {/* <FnApp text="Function based app"/> */}
    {/* <App/> */}
    {/* class based app page */}
    {/* <App1 text="class based app"/> */}
    {/* <ConditionalRendering isAdmin={true} /> */}
    {/* <Formpage /> */}
    {/* <CounterApp /> */}
    
    {/* useContext */}
    <Contextmain />
  </React.StrictMode>
);

