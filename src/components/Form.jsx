import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
    <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex">
      <input
        className="border-2 py-2 px-4 mr-6 rounded-2xl shadow-2xl"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
      />
      <input
        className="border-2 py-2 px-4 mr-6 rounded-2xl shadow-2xl"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter Your Age"
      />
      
      <button className="border-2 py-2 px-4 rounded-2xl hover:bg-black hover:text-white shadow-2xl " onClick={handleSubmit}>
        Submit
      </button>
      </div>
      {submitted &&( <p className="mt-7 text-green-600 font-bold">Form Submitted!</p>)}
   </div>
    </div>
  );
}

export default Form;
