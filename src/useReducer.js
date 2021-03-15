//Reducer 
// function countReducer(state, action) {
//   switch (action.type) {
//     case 'add':
//       return state + 1
//     case 'del':
//       return state - 1
//     default:
//       return state
//   }
// }
// export default countReducer

import { useReducer } from "react";

function ReducerDemo(){
  const [count, dispatch] = useReducer((state,action) => {
    switch (action) {
      case 'add':
        console.log('add')
        return state + 1
      case 'del':
        console.log('del')
        return state - 1
      default:
        return state
    }
  },0)
  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <button onClick = { () => dispatch('add')}>add</button>
      <button onClick = { () => dispatch('del')}>del</button>
    </div>
  )
}
export default ReducerDemo;