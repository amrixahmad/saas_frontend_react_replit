// ActivityItem.js
import React from 'react';

const ActivityItem = ({ user, action, target, time, date, avatar, content, images }) => (
  <div className="d-flex align-items-start">
    <img src={avatar} width="36" height="36" className="rounded-circle me-2" alt={user} />
    <div className="flex-grow-1">
      <small className="float-end text-navy">{time}</small>
      <strong>{user}</strong> {action} <strong>{target}</strong><br />
      <small className="text-muted">{date}</small>

      {content && (
        <div className="border text-sm text-muted p-2 mt-1">
          {content}
        </div>
      )}

      {images && (
        <div className="row g-0 mt-1">
          {images.map((img, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-4 col-xl-3">
              <img src={img} className="img-fluid pe-2" alt="Unsplash" />
            </div>
          ))}
        </div>
      )}

      {(content || images) && (
        <a href="#" className="btn btn-sm btn-danger mt-1">
          <i className="feather-sm" data-feather="heart"></i> Like
        </a>
      )}
    </div>
  </div>
);

export default ActivityItem;