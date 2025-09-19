import React from 'react';
import OfficialCard from './OfficialCard'; // ✅ Move this here

function CompareOfficials({ officials }) {
  if (!officials || !officials.length) {
    return <p>No officials match your filters.</p>;
  }

  return (
  <div className="compare-grid">
    {officials.map(o => (
      <OfficialCard key={o.id} official={o} />
    ))}
  </div>
);
}

export default CompareOfficials;
