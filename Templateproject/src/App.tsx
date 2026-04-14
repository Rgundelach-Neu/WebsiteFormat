import Navbar from './Components/Navbar/Navbar'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'

function App() {
  console.log("test,app")

  const routes = useRoutes([
    {path: "/", element: <Home/> },
  ])

  return (
    <>
    {routes}
    </>
  )
}

export default App
