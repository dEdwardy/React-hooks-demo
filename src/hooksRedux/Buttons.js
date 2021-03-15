import { useContext } from 'react';
import { ColorContext,UPDATE_COLOR } from './Color'

function Buttons( ) {
  const { dispatch } = useContext(ColorContext)
  return (
    <div>
      <button onClick = { () => dispatch({type:UPDATE_COLOR,color:'red'}) }>红1</button>
      <button onClick = { () => dispatch({type:UPDATE_COLOR,color:'yellow'}) }>黄2</button> 
      <button onClick = { () => dispatch({type:UPDATE_COLOR,color:'green'}) }>绿3</button> 
    </div>
  )
}
export default Buttons;