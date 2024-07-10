import React from 'react';

const Card = ({ title, body }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">{title}</h5>
      </div>
      <div className="card-body">
        {body}
      </div>
    </div>
  );
};

export default Card;