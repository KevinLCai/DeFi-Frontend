import React from 'react';
import Chart from './Chart';
import AddToken from './AddToken';
import GetToken from './GetToken';
import TradingDataDisplay from './TradingDataDisplay';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <Chart/>
      <AddToken/>
      <GetToken/>
      {/* <TradingDataDisplay/> */}
      <Test/>
    </div>
  );
}

export default App;

