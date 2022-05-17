import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
// import axios from "axios"

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [about, setAbout] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            // navigate('/')
        }
    }, [])

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch("http://localhost:8080/api/v1/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password, address, about }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))

        // navigate('/')
    }

    return (
        <div className="card col-sm-3 register text-center offset-md-4 mt-5 p-3 shadow-lg">
            <div className="card-header bg-warning text-white">
                    <h4>Register Here</h4>
                </div>
            <div className="card-body bg-white">
            <div>
            <input className="form-control mb-3" type="text" placeholder="Enter Name"
                value={name} onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
            <input className="form-control mb-3" type="text" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <input className="form-control mb-3" type="password" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div>
            <textarea className="form-control mb-3 " type="text" rows={3} placeholder="About"
                value={about} onChange={(e) => setAbout(e.target.value)}
            />
            </div>
            <div>
            <input className="form-control mb-3" type="text" placeholder="Address"
                value={address} onChange={(e) => setAddress(e.target.value)}
            />
            </div>
            </div>
            <div className='bg-white'>
            <button onClick={collectData} className="btn btn-warning text-white" type="button">Register</button>
            </div>
            <span>
                Already have an account?
                <Link to = {'/login'} className="fw-bold text-danger text-decoration-none"> Login</Link>
            </span>
        </div>
    )
}
export default Register