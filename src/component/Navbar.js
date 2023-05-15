import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
    let Navigate  = useNavigate()
    const handelLogout =()=>{
        localStorage.removeItem('token')
        Navigate("/login")
    }

    let location = useLocation();

    useEffect(() => {
        console.log(location.pathname)
    }, [location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="/about">About us</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')?<form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                        </form>: <button onClick={handelLogout} className='btn btn-primary'>Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar