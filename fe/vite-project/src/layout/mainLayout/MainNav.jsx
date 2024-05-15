import React from 'react'
import {  Link } from "react-router-dom";
function MainNav() {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Admin">admin</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainNav
