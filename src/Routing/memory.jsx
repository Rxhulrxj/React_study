import React from 'react'
import {
    MemoryRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Nopage from './components/Nopage';
function Routingmemoryexample() {
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
    <Route path="*" element={<Nopage />} />
    </Routes>
    </Router>
  )
}

export default Routingmemoryexample;