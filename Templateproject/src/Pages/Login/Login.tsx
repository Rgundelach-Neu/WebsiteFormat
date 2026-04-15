import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const LoginRequest = () => {
      console.log("Login Request")
      console.log(username)
      console.log(password)
    }

  return (
    <>
    <Navbar />
    <body>
        <h1>Login Page</h1>
        <p>Please enter your credentials to log in.</p>
        <form onSubmit={LoginRequest} >
            <label> Username:</label>
            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label> Password:</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit">Login</button>
        </form>
        <h1 id="error"></h1>
    </body>
    </>
  )
}

export default Login;