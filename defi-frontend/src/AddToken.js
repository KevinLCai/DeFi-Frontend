import React, { useState } from 'react';
import axios from 'axios';

function AddToken() {
  const [tokenID, setTokenID] = useState('');
  const [tokenName, setTokenName] = useState('');
  const [tokenType, setTokenType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = { token_id: tokenID, token_name: tokenName, token_type: tokenType };
    axios.post('http://127.0.0.1:5000/add_token', token)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <div>
      <h2>Add Token</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="token_id">Token ID:</label>
          <input type="text" id="token_id" name="token_id" value={tokenID} onChange={(e) => setTokenID(e.target.value)} />
        </div>
        <div>
          <label htmlFor="token_name">Token Name:</label>
          <input type="text" id="token_name" name="token_name" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="token_type">Token Type:</label>
          <input type="text" id="token_type" name="token_type" value={tokenType} onChange={(e) => setTokenType(e.target.value)} />
        </div>
        <button type="submit">Add Token</button>
      </form>
    </div>
  );
}

export default AddToken;
