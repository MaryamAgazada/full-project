import React from 'react'
import AdminNav from './AdminNav'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
      <AdminNav/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
