import React, { useState } from "react";
import {  useNavigate} from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if (username && password) {
            navigate('/')

    }else {
        alert('Enter username and password')
    }
    }
  return <section className="container">
    <h2>Login</h2>
        <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:
        
      </label><input    
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="username"
        /><label htmlFor="password">Password:
        
      </label><input 
          type="text" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
        />
      <input type="submit" />
    </form>
    </section>;
}

export default Login;
