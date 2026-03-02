import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className='container'>
            <div className='box'>
                <div className='logo'>
                    <img src='images/logo.png' alt='Company Logo'/>
                </div>
                <div className='nav_item'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/properties'>Properties</a><i className="fa-solid fa-angle-down"></i></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar