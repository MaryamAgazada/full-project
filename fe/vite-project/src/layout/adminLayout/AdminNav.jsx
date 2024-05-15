import React from 'react'
import {  Link } from "react-router-dom";
function AdminNav() {
  return (
    <div>
              <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Admin/product">product</Link>
          </li>
          <li>
            <Link to="/Admin/add">add</Link>
          </li>
          <li>
            <Link to="/Admin/basket">basket</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  )
}

export default AdminNav
