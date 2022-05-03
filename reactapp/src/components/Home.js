import React, { useState } from 'react';
import { useNavigate } from 'react-router';
// import Dashboard from './Dashboard';
import './home.css'


const Home = () => {


  let navigate = useNavigate();

  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState("")
//   const handle = () => {
//     console.log(username,password)
//     localStorage.setItem('Username', username);
//     localStorage.setItem('Password', password);
//     navigate('/dash')
//  };

 const onChangeHandler = (fieldName, value)=>{
  if(fieldName === "username"){
    setName(value);
  }
  else if(fieldName==="password"){
    setPassword(value);
  }
}
 const onSubmitHandler = (e)=>{
 const passReg=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
 const userReg=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  e.preventDefault();
  if(username.trim()==="" || password.trim() ==""){
    // alert("required both field");
    setError("required both field")
  }
  else if(!userReg.test(username)){
    setError("email format is not matching")
    // setError({usernameError:"email format is not matching"})
  }
  else if(!passReg.test(password)){
    setError("password must contain minimum eight characters, at least one letter and one number");
    // setError({passwordError:"password must contain minimum eight characters, at least one letter and one number"})
  }
  else{
    navigate('/dash')
    localStorage.setItem('Username', username);
    localStorage.setItem('Password', password);
    // alert(username+" " +password);
    // setName("");
    // setPassword("");
  }
}


  return (
    <div className="login-page">
{/* <Dashboard data={username}/> */}
  <div className="form">
    {/* <form className="register-form">
      <input type="text" placeholder="name" />
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className="message">Already registered? <a href="#">Sign In</a></p>
    </form> */}
    <form className="login-form" onSubmit={(e)=> onSubmitHandler(e) }>
      <input type="text" placeholder="username" value={username} onChange={(e) => { onChangeHandler("username",e.target.value)}}/>
      {/* <span className="text-danger">{error.usernameError}</span> */}
      <input type="password" placeholder="password" value={password} onChange={(e) => { onChangeHandler("password",e.target.value)}}/>
      {/* <span className="text-danger">{error.passwordError}</span> */}
      <button type= "submit" >login</button>
       {error?<span className="text-danger">{error}</span>:null}
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
  )
}

export default Home
