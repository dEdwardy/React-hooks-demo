import { useState, useContext, createContext } from "react"

//  useContext 解决父子组件传值
//  通常context 需要export 这里子组件由于在一个文件里所以没有export
const CountContext = createContext();

function useContextDemo(){
  const [count, setCount] = useState(0)
  return (
    <>
      <p>You click  {count } times</p>
      <button onClick={() => setCount(count+1) }>+</button>
      <CountContext.Provider value= { count }>
        <Counter/>
      </CountContext.Provider>
    </>
  )
}

function Counter(){
  let count = useContext(CountContext)
  return <h2>{ count }</h2>
}
export default useContextDemo