//import React from "react";
//import { useState, useEffect} from "react";

//import PreferenceForm from "./PreferenceForm";
import fetchHikingSpots from "./api";
//import Navbar from "./assets/Navbar";
//import Header from "./assets/Header";
//import Myview from "./styles/sroll";



/*const HikingSpotList =  ()=>{
 const[hikingSpots, setHikingSpots]= useState([]);


 useEffect(()=> {

    const getHikingSpots = async() =>{
        try{
            const spots =  await fetchHikingSpots()// not callable because it's not a fuction(pulling data from array)
        
    setHikingSpots(spots);

    }catch(error){

        console.error("Error finding hiking spots", error);
    }
    };
    getHikingSpots();
},[])*/


const HikingSpotsList = () => {
  return (
    <div>
      
     
      
    
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-2xl p-4 bg-white rounded-md shadow-md flex-grow">

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Trail</th>
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Rating</th>
            </tr>
          </thead>
          <tbody>
            {fetchHikingSpots.map((spot: any) => (
              <tr key={spot.id} className="border-t border-gray-300">
                <td className="py-2 px-4">{spot.trail}</td>
                <td className="py-2 px-4">{spot.location}</td>
                <td className="py-2 px-4">{spot.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  );
};

export default HikingSpotsList;

