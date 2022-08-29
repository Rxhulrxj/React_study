import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

function Fetchexample() {
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>console.log('Good',res)).catch(err => console.log('BAD'))
    // },[])
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>console.log(res)).catch(err=>console.log('Bad'))
    // },[])

    useEffect(() => {
        async function fetchMyAPI() {
          let response = await fetch("https://jsonplaceholder.typicode.com/todos")
          response = await response.json()
          console.log(response)
        }
    
        fetchMyAPI()
      }, [])
  return (
    <div>Fetchexample</div>
  )
}

export default Fetchexample