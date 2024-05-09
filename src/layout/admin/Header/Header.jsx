import React from 'react'
import { Link } from 'react-router-dom'
import "../../site/Header/Header.css"

const Header = () => {
  return (
    <div className='navbar'>
      <div className="container">
           <div className="row w-100">
            <div className="col-4">
              <h1>Admin</h1>
            </div>
            <div className="col-4">
              <ul className='nav_list'>
                <li><Link to="/admin">Dashboard</Link></li>
                <li><Link to="/admin/products">Products</Link></li>
                <li>
                <Link to="/admin/users">Users</Link>
                </li>
                <li><Link to="/admin/add">Add</Link></li>
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
    
