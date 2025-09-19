import React from 'react';
import { Link } from 'react-router-dom';
import './OfficialCard.css';

const OfficialCard = ({ official }) => {
  return (
    <div className="official-card">
      <img
        src={official.photoUrl}
        alt={official.name}
        className="official-photo"
        referrerPolicy="no-referrer"
      />
      <div className="official-info">
        <h3>{official.name}</h3>
        <p>{official.role} — {official.state}</p>
        <p>Score: {official.score?.overall ?? 'N/A'}</p>
        <Link to={`/profile/${official.id}`} className="profile-button">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default OfficialCard;
