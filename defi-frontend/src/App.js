import React from 'react';
import Chart from './Chart';
import AddToken from './AddToken';
import GetToken from './GetToken';
import TradingDataDisplay from './TradingDataDisplay';
import DealFromDatabase from './DealFromDatabase';

function App() {
  return (
    <div className="App">
      <Chart/>
      <AddToken/>
      <GetToken/>
      {/* <TradingDataDisplay/> */}
      <DealFromDatabase/>
    </div>
  );
}

export default App;

