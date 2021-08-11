import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../img/logo.png'
import './Navbar.css';


const Navbar = ({name}) => {
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext)
     console.log({name})
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active"  href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Company</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Servies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                           
                            {
                                 name ? <button className="btn-brand">{name} </button>:<button className="btn-brand"><Link to ="/login">Get Started</Link></button>
                            }
                            
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;