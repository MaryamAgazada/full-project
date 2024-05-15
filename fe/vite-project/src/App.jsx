import { useState } from 'react'
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/mainLayout/MainLayout';
import Home from './pages/MainPages/home/Home';
import Admin from './pages/MainPages/admin/Admin';
import AdminLayout from './layout/adminLayout/AdminLayout';
import Product from './pages/adminPages/product/Product';
import Add from './pages/adminPages/add/Add';
import Detail from './pages/adminPages/detail/Detail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './pages/adminPages/update/Update';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HelmetProvider>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
        </Route>
        <Route path="/Admin" element={<AdminLayout />}>
          <Route index element={<Product />} />
          <Route path="/Admin/add" element={<Add />} />
          <Route path="/Admin/update" element={<Update/>} />
          <Route path="/Admin/detail" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
      
    </>
  )
}

export default App
