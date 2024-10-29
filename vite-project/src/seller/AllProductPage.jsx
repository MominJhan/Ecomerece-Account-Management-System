import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AllProductPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/addproduct');
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/sellerAccount')
      .then((res) => {
        const sellerAcc = res.data;
        const allProducts = sellerAcc.flatMap((acc) =>
          (acc.products || []).map((product) => ({
            ...product,
            status: acc.status === 'approved' || acc.status === 'rejected' ? acc.status : 'pending'
          }))
        );
        console.log(allProducts); 
        setProducts(allProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <button onClick={handleAddProduct}>+ Add Product</button>

      {products.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Attributes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.attribute}</td>
                <td>{product.status}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default AllProductPage;
