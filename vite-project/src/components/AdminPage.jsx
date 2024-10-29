import React, { useState } from 'react'
import CommonDashboard from './CommonDashboard'
import AdminDashboard from '../admin/AdminDashboard';
import ProductProjects from '../admin/ProductProjects';

function AdminPage() {
  const [activetab , setActiveTab] = useState('')
  const renderContent = () =>{
    switch (activetab) {
      case 'admindashboard':
         return <AdminDashboard/>
      case 'productprojects':
        return <ProductProjects/>
      default:
        return  <AdminDashboard/>;
    }
  }
  return (
      <CommonDashboard>
       <div>
        <div className='tab-buttons'> 
        <button onClick={()=>setActiveTab('admindashboard')} > Admin Dashboard</button>
        <button onClick={()=>setActiveTab('productprojects')} > Product Project</button>

        </div>
        <div className='tab-content'>{renderContent()}</div>
       </div>

      </CommonDashboard>
   
  )
}

export default AdminPage