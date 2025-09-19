import React from 'react';

function CompareOfficials({ officials }) {
  if (!officials || !officials.length) {
    return <p>No officials match your filters.</p>;
  }

  return (
    <div className="compare-grid">
      {officials.map(o => (
        <div key={o.id} className="official-card">
          <h3>{o.name}</h3>
         <p>{o.role} — {o.state || o.territory || 'Unknown'}</p>
        </div>
      ))}
    </div>
  );
}

export default CompareOfficials;
