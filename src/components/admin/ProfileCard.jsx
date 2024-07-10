// ProfileCard.js
import React from 'react';
import { Home, Briefcase, MapPin, MessageSquare } from 'react-feather'; // Import icons

const ProfileCard = () => {
  const skills = ['HTML', 'JavaScript', 'Sass', 'Angular', 'Vue', 'React', 'Redux', 'UI', 'UX'];

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5 className="card-title mb-0">Profile Details</h5>
      </div>
      <div className="card-body text-center">
        <img src="src/assets/img/admin/avatars/avatar-4.jpg" alt="Christina Mason" className="img-fluid rounded-circle mb-2" width="128" height="128" ></img>
        <h5 className="card-title mb-0">Christina Mason</h5>
        <div className="text-muted mb-2">Lead Developer</div>
      </div>
      <hr className="my-0" />      
    </div>
  );
};

export default ProfileCard;