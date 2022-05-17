import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const Navbar = () => {

    const state = useSelector((state)=>state.handleCart)

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-sm">
            <img  className='ms-5' style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBIr37_7GqUwrvfg2xDYh2sIHCkMprsGzK4MwG1UleY6j-8JSPE8NuJ6HW9OohADhyRg&usqp=CAU" width="100" height="60" alt="" />
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/"><h2><span className="fst-italic text-white">Shopi<span className="text-warning">fy</span></span></h2></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" to="/products">Category</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" to="/addproduct">AddProduct</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" to="/contact">Contact us</NavLink>
                            </li>

                            
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="text-white" style={{textDecoration:"none"}}><i className="fa fa-sign-in me-1"></i> Login</NavLink>
                            <NavLink to="/register" className="text-white ms-2" style={{textDecoration:"none"}}><i className="fa fa-user-plus me-1"></i> Register</NavLink>
                            <NavLink to="/cart" className="text-white ms-2" style={{textDecoration:"none"}}><i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
