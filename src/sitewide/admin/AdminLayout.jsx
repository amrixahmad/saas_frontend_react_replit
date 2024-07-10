import React from 'react'
import AdminNavbar from './AdminNavBar'
import AdminFooter from './AdminFooter'
import AdminSideBar from './AdminSideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {


  return (
    <div className="wrapper">
      <AdminSideBar />
      <div className="main">
        <AdminNavbar />
        <Outlet />
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminLayout