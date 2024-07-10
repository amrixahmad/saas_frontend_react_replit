import React from 'react';
import StatCardItem from './StatCardItem'

const StatCardSection = () => {


  return (
    <div className="col-xl-6 col-xxl-5 d-flex">
       <div className="w-100">
         <div className="row">
           <div className="col-sm-6">
             <StatCardItem title="Sales" value="2.382" change="-3.65%" icon="truck" />
             <StatCardItem title="Visitors" value="14.212" change="5.25%" icon="users" />
           </div>
           <div className="col-sm-6">
             <StatCardItem title="Earnings" value="$21.300" change="6.65%" icon="dollar-sign" />
             <StatCardItem title="Orders" value="64" change="-2.25%" icon="shopping-cart" />
           </div>
         </div>
       </div>
     </div>
  )
}

export default StatCardSection

