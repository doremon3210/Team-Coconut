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
      <div className="text-fields" style={{ marginLeft: 8 , width: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
        <input
          type="text"
          placeholder="First Name"
          value={field1Value}
          onChange={handleField1Change}
          style={{ width: 200, height: 40, padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 5, margin: '0 10px' }}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={field2Value}
          onChange={handleField2Change}
          style={{ width: 200, height: 40, padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 5, margin: 10 }}
        />
        <input
           type="text"
           placeholder="Saluation"
           style={{ width: 100, height: 40, padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 5, margin: '0 10px' }}
           />
          
           
           
      </div>
      <div className="text-fields" style={{ marginLeft: 55 ,width: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
      <input
           type="text"
           placeholder="Date of Birth"
           style={{ width: 200, height: 40, padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 5, margin: '0 10px' }}
           />
           <input
           type="text"
           placeholder="SSN#"
           style={{ width: 200, height: 40, padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 5, margin: '0 10px' }}
           />
      </div>
      <div className="text-fields" style={{ marginLeft: 55 ,width: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
    
      <input
           type="text"
           placeholder="Driver's License#"
           style={{ width: 200, height: 40, padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 5, margin: '0 10px' }}
           />
           <input
           type="text"
           placeholder="Employer"
           style={{ width: 200, height: 40, padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 5, margin: '0 10px' }}
           />
      </div>
      <div className="text-fields" style={{marginLeft: 55 , width: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
      
      <input
           type="text"
           placeholder="Job Title"
           style={{ width: 200, height: 40, padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 5, margin: '0 10px' }}
           />
           <input
           type="text"
           placeholder="Employment start date"
           style={{ width: 200, height: 40, padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 5, margin: '0 10px' }}
           />
      </div>
    </form>
    
  );
};

export default TextFields;
