import React, { useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:5000/hello', { name })
      .then(response => {
        setMessage(response.data.message);
        console.log(response.data.message)
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <button type="submit">Say Hello</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default MyComponent;
