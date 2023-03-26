import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://127.0.0.1:5000/cefi_deal');

function App() {
  const [tradeData, setTradeData] = useState([]);

  useEffect(() => {
    socket.on('cefi_deal', (data) => {
      console.log('Received data:', data);
      setTradeData([...tradeData, data]);
    });
  }, [tradeData]);

  return (
    <div>
      <h1>Trade Data</h1>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Price</th>
            <th>Size</th>
            <th>Direction</th>
          </tr>
        </thead>
        <tbody>
          {tradeData.map((data, index) => (
            <tr key={index}>
              <td>{data.timestamp}</td>
              <td>{data.price}</td>
              <td>{data.size}</td>
              <td>{data.direction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
