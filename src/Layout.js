import { createContext ,useEffect} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export const RootContext = createContext({});
const initialState = { uInfo: {} }
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
export const Layout = () => {
  return (
    <>
      <RootContext.Provider value={initialState}>
        <Router>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/list">列表</Link>
            </li>
          </ul>
          <Route path="/" exact component={Index} />
          <Route path="/list" component={List} />
        </Router>
      </RootContext.Provider>
    </>
  )
}
