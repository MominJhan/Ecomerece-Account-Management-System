import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSellerAccount, addProductAccount } from '../userSeller';

function AddProductPage() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [attribute, setAttribute] = useState('');
  const [companyName, setCompanyName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accounts } = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(fetchSellerAccount());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newProduct = {
      productName,
      price,
      quantity,
      attribute,
      companyName,
    };
  
    dispatch(addProductAccount(newProduct))
      .then(() => {
        navigate('/seller'); 
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };
  
  return (
    <div >
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Attribute Set:</label>
            <input
              type="text"
              value={attribute}
              onChange={(e) => setAttribute(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Company Name:</label>
            <select
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            >
              <option value="">Select Company</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.companyName}>
                  {account.companyName}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="submit-button">
            Add New Product
          </button>
        </form>
    </div>
  );
}

export default AddProductPage;
