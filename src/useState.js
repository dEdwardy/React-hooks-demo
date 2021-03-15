import { useState } from "react"

//注意  hooks必须在function根部 而且不能再条件判断中 顺序必须一致
function useStateDemo(){
  const [count, setCount] = useState(0)
  return (
    <>
      <p>You click  {count } times</p>
      <button onClick={() => setCount(count+1) }>+</button>
      <button onClick={() => setCount(count-1) }>-</button>
    </>
  )
}

export default useStateDemo