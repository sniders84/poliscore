import React from 'react';
import officials from '../data/officialsMeta_Master.json';
import legislation from '../data/legislationMeta.json';

const top10 = [...officials].sort((a, b) => b.score.overall - a.score.overall).slice(0, 10);
const bottom10 = [...officials].sort((a, b) => a.score.overall - b.score.overall).slice(0, 10);
const recentBills = [...legislation].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);

function Home() {
  return (
    <div className="container">
      <h1>Top 10 Performers</h1>
      {top10.map((official) => (
        <div key={official.id} className="official-card">
          <div className="state-icon" style={{ backgroundColor: official.partyColor }}>
            <img src={`/states/${official.stateShape}.svg`} alt={official.state} />
          </div>
          <div>
            <h2>{official.name}</h2>
            <p>{official.role} – {official.state}</p>
            <p>Score: {official.score.overall}</p>
          </div>
        </div>
      ))}

      <h1>Bottom 10 Performers</h1>
      {bottom10.map((official) => (
        <div key={official.id} className="official-card">
          <div className="state-icon" style={{ backgroundColor: official.partyColor }}>
            <img src={`/states/${official.stateShape}.svg`} alt={official.state} />
          </div>
          <div>
            <h2>{official.name}</h2>
            <p>{official.role} – {official.state}</p>
            <p>Score: {official.score.overall}</p>
          </div>
        </div>
      ))}

      <h1>Recent Legislation</h1>
      <ul>
        {recentBills.map((bill) => (
          <li key={bill.id}>
            <strong>{bill.title}</strong> – {bill.status} ({bill.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
