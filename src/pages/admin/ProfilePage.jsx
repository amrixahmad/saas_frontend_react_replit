import React from 'react';
import { ProfileCard, ActivityFeed } from '../../components/component-services'

const ProfilePage = () => {
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <div className="mb-3">
          <h1 className="h3 d-inline align-middle">Profile</h1>          
        </div>
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <ProfileCard />
          </div>
          <div className="col-md-8 col-xl-9">
            <ActivityFeed />
            <ActivityFeed />
          </div>          
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;