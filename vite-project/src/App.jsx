import { useState } from 'react'
import './App.css'
import Login from './Login'
import SignUp from './SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './components/AdminPage'
import SellerPage from './components/SellerPage'
import CustomerPage from './components/CustomerPage'
import CommonDashboard from './components/CommonDashboard'
import AddProductPage from './seller/AddProductPage'
import AllProductPage from './seller/AllProductPage'
import Cart from './customer/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/seller' element={<SellerPage />} />
        <Route path='/customer' element={<CustomerPage />} />
        <Route path='/commondashboard' element={<CommonDashboard />} />
        <Route path='/allproduct' element={<AllProductPage />} />
        <Route path='/addproduct' element={<AddProductPage />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
