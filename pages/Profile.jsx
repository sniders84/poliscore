import React from 'react';
import { useParams } from 'react-router-dom';
import officials from '../data/officialsMeta_Master.json';

function Profile() {
  const { id } = useParams();
  const official = officials.find((o) => o.id === id);

  if (!official) return <div className="container"><h1>Official not found</h1></div>;

  return (
    <div className="container">
      <div className="official-card">
        <div className="state-icon" style={{ backgroundColor: official.partyColor }}>
          <img src={`/states/${official.stateShape}.svg`} alt={official.state} />
        </div>
        <div>
          <h1>{official.name}</h1>
          <p>{official.role} – {official.state}</p>
          <p>Party: {official.party}</p>
          <p>Score: {official.score.overall}</p>
          <p>Platform: {official.platform}</p>
          <p>Attendance: {official.attendanceRate}%</p>
          <p>Bills Sponsored: {official.billsSponsored}</p>
          <p>Bills Passed: {official.billsPassed}</p>
          <p>Approval Rating: {official.approvalRating}%</p>
          <p>Committees: {official.committees.join(', ')}</p>
          <p>Achievements: {official.achievements.join(', ')}</p>
          <p>Contact: {official.contact.email} | {official.contact.phone}</p>
          <p><a href={official.contact.website} target="_blank">Website</a></p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
