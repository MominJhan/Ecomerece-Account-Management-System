import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSellerAccount, deleteSellerAccount, fetchSellerAccount } from '../userSeller';

function AcountManage() {
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const [financials, setFinancials] = useState('');
    const { accounts, loading, error } = useSelector((state) => state.seller); 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSellerAccount()); 
    }, [dispatch]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const accountData = { companyName, address, financials  };

        dispatch(addSellerAccount(accountData));
        setCompanyName('');
        setAddress('');
        setFinancials('');
    };

    const handleRemove = (id) => {
        dispatch(deleteSellerAccount(id));
    };

    return (
        <div className="container">
            <h2>Manage your Account</h2>
            <form onSubmit={handleSubmit}>
                <label>Company Name:</label>
                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                />

                <label>Address:</label>
                <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />

                <label>Financials:</label>
                <textarea
                    value={financials}
                    onChange={(e) => setFinancials(e.target.value)}
                    required
                />

                <button type="submit">Update Information</button>
            </form>

            {loading && <p>Loading...</p>} 
            {error && <p className="error">Error: {error}</p>} 

            {accounts.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Company Name</th>
                            <th>Address</th>
                            <th>Financials</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((account) => (
                            <tr key={account.id}>
                                <td>{account.id}</td>
                                <td>{account.companyName}</td>
                                <td>{account.address}</td>
                                <td>{account.financials}</td>
                                <td>
                                    <button onClick={() => handleRemove(account.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default AcountManage;
