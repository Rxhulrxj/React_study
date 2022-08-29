import { useLocation, useParams } from 'react-router-dom'

function Item() {
  const location = useLocation();
    const {id} = useParams();
    console.log(location.pathname)
  return (
    <div>Item{id}</div>
  )
}

export default Item