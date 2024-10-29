import axios from 'axios'
import React from 'react'

function IncomePage() {
  const cartitems =  JSON.parse(localStorage.getItem('cart' || []))
  const totalAmount =  cartitems.reduce((acc,item)=>acc + (item.price * item.quantity),0)
  return (
    <div>
     <h1>IncomePage</h1>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
      {cartitems.map((item,index)=>(
     <tr key={index}>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>{item.price * item.quantity}</td>
      
     </tr>
     
    ))}
       <td colSpan={3}>Total Expense Amount =</td>
       <td > {totalAmount}</td>
      </tbody>
    </table>

    </div>
  )
}

export default IncomePage