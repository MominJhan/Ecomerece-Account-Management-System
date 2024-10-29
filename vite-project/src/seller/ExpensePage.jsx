import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Expense() {
  const [ products , setProducts] = useState([])
 
  useEffect(()=>{
    axios.get('http://localhost:3000/sellerAccount')
    .then((res)=>{
      const sellerAcc = (res.data);
      const allProducts = sellerAcc.flatMap(acc=>acc.products || [])
      setProducts(allProducts)
    })
    .catch((err)=>console.log(err))
  },[])

  const totalAmount = products.reduce((sum, product) => {
    return sum + (product.price * product.quantity)
  }, 0)
  
  return (
    <div>
    <h2>All Products</h2>

    {products.length > 0 ? ( 
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.price * product.quantity}</td>
            </tr>
          ))}
            <td colSpan={3}>Total Expense Amount =</td>
            <td > {totalAmount}</td>
     
        </tbody>
      </table>
    ) : (
      <p>No products available.</p>
    )}
  </div>
  )
}

export default Expense