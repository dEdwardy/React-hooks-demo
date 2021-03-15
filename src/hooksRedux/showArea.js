
import { useContext } from 'react';
import { ColorContext } from './Color'
function ShowArea() {
  const { color } = useContext(ColorContext)
  return (
    <div style={{color}}>
      Blue
    </div>
  )
}
export default ShowArea;