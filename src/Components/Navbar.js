import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/pizzaLogo.png";
function Navbar() {
     return (
          <div>
               <nav class="navbar navbar-expand-lg bg-dark">
                    <div class="container-fluid">
                         <Link class="navbar-brand" to="#">
                              <img src={Logo} alt="" />
                         </Link>
                         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                         </button>
                         <div class="collapse navbar-collapse" id="navbarNavDropdown">
                              <ul class="navbar-nav">
                                   <li class="nav-item">
                                        <Link class="nav-link" aria-current="page" to="#">Home</Link>
                                   </li>
                                   <li class="nav-item">
                                        <Link class="nav-link" to="#">Menu</Link>
                                   </li>
                                   <li class="nav-item">
                                        <Link class="nav-link" to="#">About Us</Link>
                                   </li>
                                   <li class="nav-item dropdown">
                                        <Link class="nav-link">
                                             Contact
                                        </Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
          </div>
     )
}

export default Navbar