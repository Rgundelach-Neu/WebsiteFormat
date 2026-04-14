import { useRoutes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'


function App() {
  console.log("test,app")

  const routes = useRoutes([
    {path: "/", element: <Home/> },
    {path: "/login", element: <Login />}
  ])

  return (
    <>
    {routes}
    </>
  )
}

export default App
