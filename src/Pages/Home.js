import React from 'react'
import BannerImage from "../assets/pizza.jpeg";
import { Link, NavLink } from 'react-router-dom';
function Home() {
     return (

          <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
               <div className="headerContainer">
                    <h1> Pedro's Pizzeria </h1>
                    <p> PIZZA TO FIT ANY TASTE</p>
                    <Link to="/menu">
                         <button> ORDER NOW </button>
                    </Link>
               </div>
          </div>

     )
}

export default Home