import React, { useState } from 'react';

const TextFields = () => {
  const [field1Value, setField1Value] = useState('');
  const [field2Value, setField2Value] = useState('');

  const handleField1Change = event => {
    setField1Value(event.target.value);
  };

  const handleField2Change = event => {
    setField2Value(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch('http://your-backend-server.com/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          field1: field1Value,
          field2: field2Value
        })
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      alert('Data sent successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-fields">
        <input
          type="text"
          placeholder="First Name"
          value={field1Value}
          onChange={handleField1Change}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={field2Value}
          onChange={handleField2Change}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextFields;
