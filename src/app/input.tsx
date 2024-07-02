"use client";
import React, { useEffect, useState } from "react";

const InputPage = ({ obj }:any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [_id, set_id] = useState("");
  

  const addHandle = async () => {
    await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setUsername("")
  setEmail("")
  set_id("")
  };

  const updateHandle = async () => {
    await fetch("http://localhost:3000/api/users", {
      method: "PUT",
      body: JSON.stringify({ username, email, _id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setUsername("")
  setEmail("")
  set_id("")
  };

  const deleteHandle = async () => {
    await fetch("http://localhost:3000/api/users", {
      method: "DELETE",
      body: JSON.stringify({ username, email, _id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setUsername("")
  setEmail("")
  set_id("")
  };

  useEffect(() => {
    setUsername(obj.username);
    setEmail(obj.email);
    set_id(obj._id);
  }, [obj]);
  

  return (
    <div className="flex flex-col items-center p-8 gap-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex gap-2">
        <button
          onClick={addHandle}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
        >
          Add
        </button>
        <button
          onClick={updateHandle}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Edit
        </button>
        <button
          onClick={deleteHandle}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default InputPage;
