import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            // navigate("/")
        }
    }, [])

    const handleLogin = async () => {
        let result = await fetch("http://localhost:8080/api/v1/auth/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.auth) {
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
            // navigate("/")
        } else {
            alert("Please enter correct details")
        }
    }

    return (
        <div className='card text-center col-md-3 text-center offset-md-4 mt-5 p-3 shadow-lg'>
          <div className='card-header login bg-warning text-white'>
            <h3>Login</h3></div>
            <div className='card-body bg-white'>
            <div className='my-3'>
            <input type="text" className="form-control mb-3" placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)} value={email} /></div>
                <div className='my-3'>
            <input type="password" className="form-control mb-3" placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)} value={password} /></div>
            </div>
            <div className='bg-white'>
            <button onClick={handleLogin} className="btn btn-warning text-white" type="button">Login</button>
            </div>
            
            <span>Don't have an account?
                <Link to = {'/register'} className="fw-bold text-danger text-decoration-none"> Register</Link>
            </span>
        </div>
        
    )
}

export default Login