import React, { useState } from 'react'
import CommonDashboard from './CommonDashboard'
import Products from '../customer/Products';
import Cart from '../customer/Cart';
import { useSelector } from 'react-redux';

function CustomerPage() {
  const[activeTab ,setActiveTab] = useState('product')

  const renderContent = () =>{
    switch (activeTab) {
      case 'product':
        return <Products/>
       
      default:
        return <Cart/>;
    }
  }

  const cart = useSelector((state)=>state.cart.cart)
  const totalitem = cart.reduce((acc,item)=>acc+item.quantity,0)
  return (
   <CommonDashboard>
    <div>
      <div className="tab-buttons">
       <button onClick={()=>setActiveTab('product')}>Products</button>
       <button onClick={()=>setActiveTab('cart')}>Cart({totalitem})</button>

      </div>
      <div>{renderContent()}</div>
    </div>
   </CommonDashboard>
  )
}

export default CustomerPage