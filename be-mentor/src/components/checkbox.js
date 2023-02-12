import React, { useState } from "react";

function Checkbox() {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(checkedItems)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ marginLeft: 8, width: 50, display: 'flex' }}> 
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <input
            type="checkbox"
            name="item1"
            onChange={handleChange}
          />
          </div>
          <p style={{ margin: 0, paddingLeft: 8, display: "inline", width: 150, height: 50, overflow: "hidden" }}>Agriculture, Food, and Natural Resources</p><br/>
        
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <input
            type="checkbox"
            name="item2"
            onChange={handleChange}
          /> </div>
          <p style={{ margin: 0, paddingLeft: 8 }}>Architecture and Construction</p>
       
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <input
            type="checkbox"
            name="item3"
            onChange={handleChange}
          /></div>
          <p style={{ margin: 0, paddingLeft: 8 }}>Arts, Audio/Video Technology and Communications</p>
        
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <input
            type="checkbox"
            name="item4"
            onChange={handleChange}
          /></div>
          <p style={{ margin: 0, paddingLeft: 8 }}>Business, Management, and Administration</p>
        
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <input
            type="checkbox"
            name="item3"
            onChange={handleChange}
          /></div>
          <p style={{ margin: 0, paddingLeft: 8 }}>Education and Training</p>
        
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <input
            type="checkbox"
            name="item6"
            onChange={handleChange}
            ></input>
            </div>
            <p style={{ margin: 0, paddingLeft: 8 }}>Business, Management, and Administration</p>
            </form>
            
        </div>
    

);
};

export default Checkbox ; 


    
