import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="row w-100">
          <div className="col-4">
            <h1>Logo</h1>
          </div>
          <div className="col-4">
            <ul className='nav_list'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="col-4">
            <div className="nav_buttons">
              <button>Login</button>
              <button>Register</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
