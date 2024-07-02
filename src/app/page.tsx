"use client";
import React, { useEffect, useState } from "react";
import InputPage from "./input";

const HomePage = () => {
  let [data, setdata] = useState([]);
  let [obj,setobj]=useState({})

  useEffect(() => {
    let getdata = async () => {
      let fetchdata = await fetch("http://localhost:3000/api/users",{
        next:{
          tags:["fatima "]
        }
      });
      let res = await fetchdata.json();
      setdata(res);
    };
    getdata();
  }, []);
  return (
    <div className="flex min-h-screen items-center flex-col p-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-center text-4xl font-bold text-white drop-shadow-md mb-8 hover:bg-sky-500">
        HELLO MY VERCEL DATA <br /> POSTGRESQL DATABASE WITH DRIZZLE QUERY
      </h1>
      <div className="flex flex-col gap-5">
        <div className="pl-5 pb-5 gap-5">
        <InputPage obj={obj}/>
        </div>
        
        <ul className="list">
        {data.map((val: any, i: number) => (
          <li key={i} className="list-item">
            <span className="id">{val._id}</span>
            <span className="username">{val.username}</span>
            <span className="email">{val.email}</span><button className="ml-5" onClick={()=>setobj(val)}>EDIT</button>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .list {
          list-style-type: none; /* Remove default bullets */
          padding: 0; /* Remove default padding */
          margin: 0; /* Remove default margin */
        }

        .list-item {
          padding: 10px 15px; /* Add padding to each list item */
          margin-bottom: 10px; /* Add spacing between list items */
          border: 1px solid #ccc; /* Add a border to each item */
          border-radius: 5px; /* Round the corners of the borders */
          background-color: #f9f9f9; /* Light background color */
          display: flex; /* Use flexbox for alignment */
          align-items: center; /* Align items vertically center */
          justify-content: space-between; /* Space out items evenly */
        }

        .id {
          font-weight: bold;
          color: #333;
        }

        .username {
          margin-left: 15px;
          color: #555;
        }

        .email {
          margin-left: 15px;
          color: #777;
        }
      `}</style>
      </div>
    </div>
  );
};

export default HomePage;
