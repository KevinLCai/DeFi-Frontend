import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = "http://localhost:3000"; // the endpoint where the websocket is running

function App() {
  const [dataFromBackend, setDataFromBackend] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("data_from_backend", (data) => {
      console.log(`Received data from backend: ${JSON.stringify(data)}`);
      setDataFromBackend(data.data.message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <p>Data from backend: {dataFromBackend}</p>
    </div>
  );
}

export default App;
