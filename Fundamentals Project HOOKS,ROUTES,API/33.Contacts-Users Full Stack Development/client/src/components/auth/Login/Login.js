import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Login Submit");
  };

  return (
    <div>
      <h1>
        Account:
        <span>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
