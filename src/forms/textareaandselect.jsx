import { useState } from "react";

export const Formtextselect = () => {
    const [textarea, setTextarea] = useState(
        "textarea dummy value"
      );
      const [myCar, setMyCar] = useState("ReactJs");
      const handleChange = (event) => {
        setTextarea(event.target.value)
      }
      const handleChangeselect = (event) => {
        setMyCar(event.target.value)
      }
  return (
    <div>
        <form>
      <textarea value={textarea} onChange={handleChange} />
      <select value={myCar} onChange={handleChangeselect}>
        <option value="ReactJs">ReactJs</option>
        <option value="AngularJs">AngularJs</option>
        <option value="NodeJs">NodeJs</option>
        <option value="VueJs">VueJs</option>
      </select>
    </form>
    {textarea},{myCar}
    </div>
  )
}
