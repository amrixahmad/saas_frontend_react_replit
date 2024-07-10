// Badge.js
import React from 'react';

const Badge = ({ href, text }) => {
  return (
    <a className="badge bg-dark text-white ms-2" href={href}>
      {text}
    </a>
  );
};

export default Badge;