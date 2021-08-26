import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import { demo_login } from '../../store/session';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleDemo = (e) => {
      e.preventDefault();
      return dispatch(demo_login()).catch(
          async (res) => {
              const data = await res.json();
              if (data && data.errors) setErrors(data.errors);
          }
      )
  }


  return (
    <div className='login__modal'>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className='login__modal--form'>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className='login--btn' type="submit">Log In</button>
      </form>
      <button type='button' className='login--btn' onClick={handleDemo}>Demo</button>
    </div>
  );
}

export default LoginForm;
