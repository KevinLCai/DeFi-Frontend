import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = "http://localhost:3000"; // the endpoint where the websocket is running

function App() {
  const [dataFromBackend, setDataFromBackend] = useState([]);
  const tableHeaders = ["Strategy", "Token ID", "Timestamp", "Order Type", "Price", "Size"];

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("data_from_backend", (data) => {
      console.log(`Received data from backend: ${JSON.stringify(data)}`);
      const { strategy, tokenID, timestamp, orderType, price, size } = data.data;
      setDataFromBackend(prevData => [...prevData, { strategy, tokenID, timestamp, orderType, price, size }]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Data from backend:</h2>
      <table>
        <thead>
          <tr>
            {tableHeaders.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataFromBackend.map((data, index) => (
            <tr key={index}>
              <td>{data.strategy}</td>
              <td>{data.tokenID}</td>
              <td>{data.timestamp}</td>
              <td>{data.orderType}</td>
              <td>{data.price}</td>
              <td>{data.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
