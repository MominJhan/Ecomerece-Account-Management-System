import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../cartslice'

function Products() {
  const [products , setProduct] =useState([])
  const dispatch = useDispatch()
 useEffect(()=>{
  axios.get('http://localhost:3000/sellerAccount')
  .then((res)=>{ 
const reponse =( res.data)
const allproduct  = reponse.flatMap(acc=>acc.products ||[])
setProduct(allproduct)
})
.catch((err)=>

console.log(err)
)
 },[])

 const handleAddToCart=(product)=>{
   dispatch(addToCart(product))
 }
  return (
   <div>
   <table>
   <thead>
   <tr>
      <th>Products</th>
      <th>Price</th>
      <th>Attribute</th>
      <th>Actions </th>
    </tr>
   </thead>
    <tbody>
    {products.map((product,index)=>(
     <tr key={index}>
       <td>{product.productName}</td>
       <td>{product.price}</td>
       <td>{product.attribute}</td>
       <td>
       <div  className="tab-buttons">
       <button  onClick={()=>handleAddToCart(product)}>Add to cart</button>
       </div>

       </td>
     </tr>
     ))}
    </tbody>
   </table>
   </div>
   
  )
}

export default Products