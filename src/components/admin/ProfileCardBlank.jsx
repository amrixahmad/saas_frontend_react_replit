// ProfileCard.js
import React from 'react';
import { Home, Briefcase, MapPin, MessageSquare } from 'react-feather'; // Import icons
import Skill from './Skill';

const ProfileCard = () => {
  const skills = ['HTML', 'JavaScript', 'Sass', 'Angular', 'Vue', 'React', 'Redux', 'UI', 'UX'];

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5 className="card-title mb-0">Profile Details</h5>
      </div>
      <div className="card-body text-center">
        <img src="src/assets/img/admin/avatars/avatar-4.jpg" alt="Christina Mason" className="img-fluid rounded-circle mb-2" width="128" height="128" />
        <h5 className="card-title mb-0">Christina Mason</h5>
        <div className="text-muted mb-2">Lead Developer</div>

        <div>
          <a className="btn btn-primary btn-sm" href="#">Follow</a>
          <a className="btn btn-primary btn-sm" href="#">
            <MessageSquare size={14} /> Message
          </a>
        </div>
      </div>
      <hr className="my-0" />
      <div className="card-body">
        <h5 className="h6 card-title">Skills</h5>
        {skills.map(skill => <Skill key={skill} name={skill} />)}
      </div>
      <hr className="my-0" />
      <div className="card-body">
        <h5 className="h6 card-title">About</h5>
        <ul className="list-unstyled mb-0">
          <li className="mb-1"><Home size={14} className="feather-sm me-1" /> Lives in <a href="#">San Francisco, SA</a></li>
          <li className="mb-1"><Briefcase size={14} className="feather-sm me-1" /> Works at <a href="#">GitHub</a></li>
          <li className="mb-1"><MapPin size={14} className="feather-sm me-1" /> From <a href="#">Boston</a></li>
        </ul>
      </div>
      <hr className="my-0" />
      <div className="card-body">
        <h5 className="h6 card-title">Elsewhere</h5>
        <ul className="list-unstyled mb-0">
          <li className="mb-1"><a href="#">staciehall.co</a></li>
          <li className="mb-1"><a href="#">Twitter</a></li>
          <li className="mb-1"><a href="#">Facebook</a></li>
          <li className="mb-1"><a href="#">Instagram</a></li>
          <li className="mb-1"><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;