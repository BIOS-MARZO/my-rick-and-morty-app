import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    token: "",
    username: "",
    password: ""
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUser({
      username: email,
      password: password
    })
  }, [email, password]);

  console.log("User", user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      if (!user.username || !user.password || user.username.trim() === "" || user.password.trim() === "") {
        setUser({
          username: "",
          password: "",
        });
        alert("Por favor, complete todos los campos.")
        return;
      }

      signInWithEmailAndPassword(auth, user.username, user.password).then((userCredential) => {
        const user = userCredential.user;
        console.log("User", user);

        localStorage.setItem('token', user.accessToken)
        setUser({
          id: user.uid,
          token: user.accessToken,
          username: email,
          password: password
        })
        if (user.accessToken) {
          console.log('Redirigiendo...');
          navigate("/personajes");
        }
      });

    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div>
      <h2> Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario/Email:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="Username/Email"
            onChange={(event) => {
              console.log(event.target.value);
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={(event) => {
              console.log(event.target.value);
              setPassword(event.target.value);
            }}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
