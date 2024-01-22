//import React from "react";
//import { useState, useEffect} from "react";

//import PreferenceForm from "./PreferenceForm";
import fetchHikingSpots from "./api";
//import Navbar from "./assets/Navbar";
//import Header from "./assets/Header";
//import Myview from "./styles/sroll";



const HikingSpotsList = () => {
  const {loading, hikes} =  fetchHikingSpots()

  return (
    <>
       
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-2xl p-4 bg-white rounded-md shadow-md flex-grow">

        <table className="w-full border-collapse border border-gray-300">

          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Trail</th>
              <th className="py-2 px-4">Rating</th>
            </tr>
          </thead>
          <tbody>
          {loading && <p>Loading</p>}
            {hikes.map((spot:HikeData, index: number) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="py-2 px-4">{spot.Trail}</td>
                <td className="py-2 px-4">{spot.Rating.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
      

  );
};

export default HikingSpotsList;

