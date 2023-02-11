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
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <form onSubmit={handleSubmit}>
      <input
        type="checkbox"
        name="item1"
        onChange={handleChange}
        />
        <p>Agriculture, Food, and Natural Resources</p>
      <input
        type="checkbox"
        name="item2"
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="item3"
        onChange={handleChange}
      />
    </form>
    </div>
  );
}

export default Checkbox;
