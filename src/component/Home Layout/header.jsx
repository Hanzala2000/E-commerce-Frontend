import React from 'react'
import './layout.css'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className='headerMain'>
            <div className='one'>
                <img  src="https://seeklogo.com/images/E/e-commerce-concept-logo-5146F23CC5-seeklogo.com.png" alt="" />
            </div>
            <div className='two'>
                <input type="text"  />
            </div>
            <div className='three'>
                <ul>
                    <li><Link className='linkStyle' to='/'>Home</Link></li>
                    <li><Link  className='linkStyle' to='/products'>Product</Link></li>
                    {/* <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li> */}
                    <li><Link  className='linkStyle' to='/login'>Log In</Link></li>
                    <li><Link  className='linkStyle' to='/signup'>Sign Up</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Header

