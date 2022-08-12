import React from 'react'
import Adminheader from './components/adminheader'
import Carbrand from './components/Carbrand';
import Normalheader from './components/normalheader'

function ConditionalRendering(props) {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
      ];
  return (
    <div className>
    {props.isAdmin ? 
        <Adminheader /> :
        <Normalheader />}
        {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
      {cars.map((car) => <Carbrand key={car.id} brand={car.brand} />)}
        </div>
  )
}

export default ConditionalRendering