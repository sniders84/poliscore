import React from 'react';
import './OfficialCard.css'; // optional styling

const OfficialCard = ({ official }) => {
  return (
    <div className="official-card">
      <img src={official.photoUrl} alt={official.name} className="official-photo" />
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
