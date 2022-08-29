import React, { useState } from 'react'

function Formpage(props) {
    const [name,setName] = useState("")
    const handleChange = (e) => {
        e.preventDefault();
        console.log(name);
    }
  return (
    <div>
        <form>
            <input type="text" onChange={(e) => setName(e.target.value)} />
             <input type="button" value="ok" onClick={handleChange}></input>
        </form>
        {name}
    </div>
  )
}

export default Formpage;