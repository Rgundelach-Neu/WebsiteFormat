//import Navbar from '../../Components/Navbar/Navbar'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'


const Home = () => {

  console.log("test,Home")

return (
  <>
    <Navbar />
    <body>
      <p>Welcome to the Home page of {import.meta.env.VITE_APP_NAME}!</p>
      <p>This is where you can find the latest updates, news, and featured content related to our application.</p>
      <p>Feel free to explore and discover all the amazing features we have to offer!</p>
    </body>
    </>
  )
}

export default Home