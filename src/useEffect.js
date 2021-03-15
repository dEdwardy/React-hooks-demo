import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' 
// useEffect   => 实现  componentDidMount && componentDidUpdate  componentWillUnmount
function List(){
  useEffect(() => {
    console.log('list in')
    return () => {
      console.log('list out')
    }
  },[])
  return (
    <h2>List</h2>
  )
}

function Index(){
  useEffect(() => {
    console.log('index in')
    return () => {
      console.log('index out')
    }
  },[])
  return (
    <h2>Index</h2>
  )
}

function useEffectDemo(){
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`You click ${ count } times`)
  },[count])
  return (
    <>
      <p>You click { count} times</p>
      <button onClick={ () => setCount(count+1) }>+</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list"  component={List} />
      </Router>
    </>
  )
};

export default useEffectDemo