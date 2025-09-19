import React from 'react';
import CompareOfficials from './components/CompareOfficials';
import officials from './officialsMeta_Master.json';

function App() {
  return (
    <div>
      <h1>Civic Performance Dashboard</h1>
      <CompareOfficials officials={officials} />
    </div>
  );
}

export default App;
