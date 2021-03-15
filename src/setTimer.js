import { useEffect, useState } from "react"

function Interval() {
  const [count,setCount] = useState(0)
  useEffect(() => {
    let t = setTimeout(() => {
      console.log(count)
      setCount(count => count +1)
    }, 1000);
    return () => clearTimeout(t)
  },[count])
  return (
    <>
      <div>{ count }</div>
    </>
  )
}
export default Interval