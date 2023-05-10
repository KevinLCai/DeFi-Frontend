import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from "socket.io-client";


function App() {
  const [tradeData, setTradeData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post('http://127.0.0.1:5000/get_new_deals');
        const sortedData = response.data.sort((a, b) => b.timestamp - a.timestamp);
        setTradeData(sortedData);
      } catch (error) {
        console.error(error);
      }
    }

    const socket = io('http://127.0.0.1:5000');
    socket.on('new_trade', () => {
      fetchData();
    });

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trade Data</h1>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Timestamp</th>
            <th>Price</th>
            <th>Size</th>
            <th>Direction</th>
          </tr>
        </thead>
        <tbody>
          {tradeData && tradeData.map((data, index) => (
            <tr key={index}>
              <td>{data.asset}</td>
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
