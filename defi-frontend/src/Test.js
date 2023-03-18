import React, { useState } from 'react';
import axios from 'axios';

function Test() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    axios.post('http://127.0.0.1:5000/data', { name: 'John' })
      .then(response => {
        setMessage(JSON.stringify(response.data));
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Say Hello</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Test;
