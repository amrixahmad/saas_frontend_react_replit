// StatCard.js
import React from 'react';
import { Truck, Users, DollarSign, ShoppingCart } from 'react-feather';

const iconMap = {
  truck: Truck,
  users: Users,
  'dollar-sign': DollarSign,
  'shopping-cart': ShoppingCart
};

const StatCardItem = ({ title, value, change, icon }) => {
    const IconComponent = iconMap[icon] || Truck; // Default to Truck if icon not found
    const isPositive = change.startsWith('+');
    
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="col-auto">
            <div className="stat text-primary">
              <IconComponent className="align-middle" />
            </div>
          </div>
        </div>
        <h1 className="mt-1 mb-3">{value}</h1>
        <div className="mb-0">
          <span className={`text-${isPositive ? 'success' : 'danger'}`}>
            <i className={`mdi mdi-arrow-${isPositive ? 'up' : 'down'}-right`}></i> {change}
          </span>
          <span className="text-muted"> Since last week</span>
        </div>
      </div>
    </div>
  );
};

export default StatCardItem;