import React from 'react';

function CompareOfficials({ officials }) {
  if (!officials || !officials.length) {
    return <p>No officials match your filters.</p>;
  }

  return (
    <div className="compare-grid">
      import OfficialCard from './OfficialCard';

{officials.map(o => (
  <OfficialCard key={o.id} official={o} />
))}
    </div>
  );
}

export default CompareOfficials;
