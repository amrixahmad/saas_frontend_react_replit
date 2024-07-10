// ActivityFeed.js
import React from 'react';
import ActivityItem from './ActivityItem';

const ActivityFeed = () => {
  const activities = [
    { id: 1, user: 'Vanessa Tucker', action: 'started following', target: 'Christina Mason', time: '5m ago', date: 'Today 7:51 pm', avatar: 'src/assets/img/admin/avatars/avatar-5.jpg' },
    // ... add more activities here
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Activities</h5>
      </div>
      <div className="card-body h-100">
        {activities.map(activity => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
        <div className="d-grid">
          <a href="#" className="btn btn-primary">Load more</a>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;