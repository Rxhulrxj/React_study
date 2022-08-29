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
import State from './useRef/main';
import Ref from './useRef/main';
import Reducerhook from './useReducer/main';
import WithoutMemo from './useMemo/withoutuseMemo';
import WithMemo from './useMemo/withMemo';
import Withouthook from './useCallback/withoutcallback';
import Withcallback from './useCallback/withcallback';
import WithoutcustomHook from './customhook/withoutcustomhook';
import WithcustomHook from './customhook/withcustomhook';
import Formexample from './forms/main';
import Multiform from './forms/multiform';
import { Formtextselect } from './forms/textareaandselect';
import Ashik from './ashik';
import Routingexample from './Routing';
import Routingmemoryexample from './Routing/memory';
import Routinghashexample from './Routing/hashRouting';
import NavlinkRouting from './Routing/Navlink';
import Fetchexample from './fetch_and_axios/fetch';

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
    {/* <Contextmain /> */}

    {/* <Ref /> */}

    {/* <Reducerhook /> */}
    {/* <WithoutMemo /> */}
    {/* <WithMemo /> */}
    {/* <Withouthook /> */}
    {/* <Withcallback /> */}
    {/* <WithoutcustomHook /> */}
    {/* <WithcustomHook /> */}
    {/* <Formexample /> */}
    {/* <Ashik /> */}
    {/* <Multiform />  */}
    {/* <Formtextselect /> */}
    {/* <Routingexample /> */}
    {/* <Routingmemoryexample /> */}
    {/* <Routinghashexample /> */}
    {/* <NavlinkRouting /> */}
    <Fetchexample />
  </React.StrictMode>
);

