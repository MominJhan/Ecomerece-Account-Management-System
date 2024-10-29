import React, { useState } from 'react';
import CommonDashboard from '../components/CommonDashboard';
import AllProductPage from '../seller/AllProductPage';
import AccountManage from '../seller/AcountManage';
import IncomePage from '../seller/IncomePage';
import ExpensePage from '../seller/ExpensePage';

function SellerPage() {
  const [activeTab, setActiveTab] = useState('accountManage');

  const renderContent = () => {
    switch (activeTab) {
      case 'allProducts':
        return <AllProductPage />;
      case 'incomePage':
        return <IncomePage />;
      case 'expensePage':
        return <ExpensePage />;
      case 'accountManage':
      default:
        return <AccountManage />;
    }
  };

  return (
    <CommonDashboard>
      <div>
        <div className="tab-buttons">
          <button onClick={() => setActiveTab('accountManage')}>
            Account Manage
          </button>
          <button onClick={() => setActiveTab('incomePage')}>
           Income Page
          </button>
          <button onClick={() => setActiveTab('expensePage')}>
            Expense Page
          </button>
          <button onClick={() => setActiveTab('allProducts')}>
            All Products
          </button>
        </div>

        <div className="tab-content">{renderContent()}</div>
      </div>
    </CommonDashboard>
  );
}

export default SellerPage;
