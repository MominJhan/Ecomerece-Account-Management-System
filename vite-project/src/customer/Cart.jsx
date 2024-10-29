import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemCart, updateCartQuantity } from '../cartslice'; // You will need this action in your Redux slice

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (productid, newQuantity) => {
      dispatch(updateCartQuantity({ productid, newQuantity }));
  };
  const hanldeRemove=(productid)=>{
  dispatch(removeItemCart(productid))
  }
  const totalquantity = cart.reduce((acc,item)=>acc+item.quantity , 0)

  const totalAmount = cart.reduce((acc,item)=>acc+ item.price * item.quantity , 0)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>TotalPrice</th>
            <th>Attribute</th>
             <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td>
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.productid, parseInt(e.target.value))}
                  />
              </td>
              <td>
              {item.price * item.quantity}
              </td>
              <td>{item.attribute}</td>
              <td >
                <button onClick={()=>hanldeRemove(item.productid)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>

      <div>
        <h2>Summary</h2>
        <div ><b>Product Quantity: </b>{totalquantity}</div><br />
        <div ><b>Total Amount: </b>{totalAmount}</div><br />
        <button>Go To CHECKOUT</button>
      </div>
     
    </div>
  );
}

export default Cart;
