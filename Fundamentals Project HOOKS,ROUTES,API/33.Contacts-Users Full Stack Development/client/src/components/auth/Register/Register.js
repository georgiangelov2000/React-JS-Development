import React, { useState, useContext,useEffect } from "react";
import AlertsContext from "../../../context/alert/alertContext";
import AuthContext from "../../../context/auth/authContext";
import style from "./Register.module.css";

const Register = props => {
  const alertContext = useContext(AlertsContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { register,error,clearError,isAuthenticated } = authContext;


  useEffect(()=>{
    if(isAuthenticated){
      props.history.push('/');
    }

    if(error==='User already exists'){
      setAlert(error,'danger');
      clearError();
    }
  },[error, isAuthenticated,props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please eter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({
        name,
        email,
        password
      })
    }
  };

  return (
    <div className={style.container} >
      <h1 >
        Account:
        <span>Register</span>
      </h1>
      <form  className={style.myForm} onSubmit={onSubmit}>
        <div className={style.divForm}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
            placeholder="Name"
          />
        </div>
        <div className={style.divForm}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            placeholder="email"
          />
        </div>
        <div className={style.divForm}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
            placeholder="password"
          />
        </div>
        <div className={style.divForm}>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
            placeholder="Repeat Password"
          />
        </div>
        <input className={style.submit} type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
