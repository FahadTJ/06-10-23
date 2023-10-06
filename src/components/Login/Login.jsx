import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [un,setUn] =useState('');
    const [pwd,setPwd]=useState('');
    const [error,setError] =useState(false);
    const readusername =(event) =>{
        event.preventDefault();
setUn(event.target.value);
console.log(event.target.value)
    }

    const readpassword =(event) =>{
        event.preventDefault();
        setUn(event.target.value);
        console.log(event.target.value)
            }
            const checkfilldata =(event) =>{
                event.preventDefault();
                if(un.trim ()===''|| pwd.trim ==='')
{
    setError(true);
    return;
}
            }
  return (
    <div>
      <h1>sign-in</h1>
<form>
    username<input type="text" onChange={readusername}/><br/>
    password<input type="password" onChange={readpassword}/><br/>
    <button type="submit" onClick={checkfilldata}>Log in</button>
{error && 'Error occured'}
</form>
    </div>
  )
}

export default Login
