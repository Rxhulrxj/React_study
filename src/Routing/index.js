import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Item from './components/item';
import Nopage from './components/Nopage';
function Routingexample() {
  return (
    <Router>
        <div className="App">
    <ul>
      <li>
        <Link to="/">Home</Link>
        
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
</div>
    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route>
    <Route exact path='/page/:id' element={<Item />}></Route>
    <Route path="*" element={<Nopage />} />
    </Routes>
    </Router>
  )
}

export default Routingexample;