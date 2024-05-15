import React from 'react'
import MainNav from './MainNav'
import { Outlet  } from "react-router-dom";
function MainLayout() {
  return (
    <div>
   <MainNav/>
   <Outlet/>
    </div>
  )
}

export default MainLayout
