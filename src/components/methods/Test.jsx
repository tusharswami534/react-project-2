import React, { useState } from "react";

const Test = () => {
  const [text, setText] = useState("");
  const [arr, ] = useState(['names' , ]);

  const handler = () => {
    arr.push(text);
    setText("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex-col p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
          Add to the List
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full text-lg font-medium py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handler}
          className="bg-purple-600 text-white w-full rounded-lg mt-4 font-medium text-lg py-3 px-4 hover:bg-purple-700 transition duration-200"
        >
          Add to List
        </button>
      </div>
      <div className="mt-8 w-full max-w-md">
        {arr.length > 0 ? (
          <ul className="bg-white p-4 rounded-lg shadow-lg">
            {arr.map((obj, i) => (
              <li
                key={i}
                className="text-lg font-medium py-2 border-b last:border-none text-gray-700"
              >
                {obj}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white text-lg text-center mt-4">No items added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Test;
