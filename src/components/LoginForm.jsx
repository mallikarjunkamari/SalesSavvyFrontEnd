import React, { useState } from "react";


const LoginForm = () => {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState("");

const handleSubmit = async (e) => {

e.preventDefault();

if(!username || !password){
setError("Username and Password are required");
return;
}

try{

const response = await fetch("http://localhost:8080/auth/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username:username,
password:password
})
});

if(response.ok){

const data = await response.json();

localStorage.setItem("token",data.token);

window.location.href="/customerhome";

}else{

setError("Invalid username or password");

}

}catch(err){

setError("Server error");

}

};

return(

<div className="login-container">

<h2>Customer Login</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Login</button>

</form>

{error && <p className="error">{error}</p>}

<div className="links">
<a href="/forgot-password">Forgot Password?</a>
<a href="/register">Register</a>
</div>

</div>

);

};

export default LoginForm;