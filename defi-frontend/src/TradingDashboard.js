import React, { useState, useEffect } from "react";
import axios from "axios";
// import Chart from "./Chart";


function TradingDashboard() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/data");
        setMessage(response.data.message);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="message-container">
      {loading ? (
        <p>Loading...</p>
      ) : message ? (
        <p>{message}</p>
        // <Chart data={message} />
      ) : (
        <p>No message...</p>
      )}
    </div>
  );
}

export default TradingDashboard;
