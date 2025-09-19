import React from 'react';
import './OfficialCard.css'; // optional styling

const OfficialCard = ({ official }) => {
  return (
    <div className="official-card">
     <img
  src={official.photoUrl}
  alt={official.name}
  className="official-photo"
  referrerPolicy="no-referrer"
  style={{
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    marginBottom: '12px',
    display: 'block'
  }}
/>
  alt={official.name}
  className="official-photo"
  referrerPolicy="no-referrer"
  style={{
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    marginBottom: '12px',
    display: 'block'
  }}
/>
  src={official.photoUrl || 'https://via.placeholder.com/100'}
  alt={official.name}
  className="official-photo"
/>
      <h2>{official.name}</h2>
      <p>{official.role} — {official.state || official.territory}</p>
      <div className="score-bar">
        <span>Score: {official.score?.overall || 'N/A'}</span>
        <progress value={official.score?.overall || 0} max="100"></progress>
      </div>
      <div className="stats">
        <p>Approval: {official.approvalRating}%</p>
        <p>Attendance: {official.attendanceRate}%</p>
        <p>Bills Passed: {official.billsPassed}</p>
      </div>
      <button onClick={() => alert('Expand profile coming soon')}>View Profile</button>
    </div>
  );
};

export default OfficialCard;
