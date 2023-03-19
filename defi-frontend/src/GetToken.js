import React, { useState } from 'react';
import axios from 'axios';

function GetToken() {
  const [tokenID, setTokenID] = useState('');
  const [tokenData, setTokenData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://127.0.0.1:5000/get_token?token_id=${tokenID}`)
      .then(res => {
        console.log(res.data);
        setTokenData(res.data.data);
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <div>
      <h2>Get Token</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="token_id">Token ID:</label>
          <input type="text" id="token_id" name="token_id" value={tokenID} onChange={(e) => setTokenID(e.target.value)} />
        </div>
        <button type="submit">Get Token</button>
      </form>
      {tokenData &&
        <div>
          <h3>Token Data</h3>
          <p>Token ID: {tokenData[0]}</p>
          <p>Token Name: {tokenData[1]}</p>
          <p>Token Type: {tokenData[2]}</p>
        </div>
      }
    </div>
  );
}

export default GetToken
