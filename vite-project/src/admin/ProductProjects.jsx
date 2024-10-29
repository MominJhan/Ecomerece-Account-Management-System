import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ProductProjects() {
  const [sellerAccount, setSellerAccount] = useState([]);

  useEffect(() => {
    const fetchSellerAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/sellerAccount');
        setSellerAccount(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSellerAccounts();
  }, []);

  const handleApprovalStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:3000/sellerAccount/${id}`, {
        status: status
      });
      setSellerAccount((prevAccounts) =>
        prevAccounts.map((account) =>
          account.id === id ? { ...account, status: status } : account
        )
      );
    } catch (err) {
      console.log('Error updating company status:', err);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Address</th>
            <th>Financials</th>
            <th>Products</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sellerAccount.map((item) => (
            <tr key={item.id}>
              <td>{item.companyName}</td>
              <td>{item.address}</td>
              <td>{item.financials}</td>
              <td>
                {item.products && item.products.length > 0 ? (
                  <ul>
                    {item.products.map((product) => (
                      <li key={product.productid}>
                        {product.productName} - Price: {product.price}, Quantity: {product.quantity}, Attribute: {product.attribute}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>No products available</span>
                )}
              </td>
              <td>
                {item.status === 'approved' ? (
                  <span>Approved</span>
                ) : item.status === 'rejected' ? (
                  <span>Rejected</span>
                ) : (
                  <>
                    <button onClick={() => handleApprovalStatus(item.id, 'approved')}>Approve</button>
                    <button onClick={() => handleApprovalStatus(item.id, 'rejected')}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductProjects;
