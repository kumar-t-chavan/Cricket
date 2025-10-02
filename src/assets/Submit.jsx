import React, { useState } from "react";

const Submit = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // page reload ko rokta hai
    alert(`Form submitted with name: ${name}`);
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name" 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Submit;
