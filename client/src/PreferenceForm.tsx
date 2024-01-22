import React, { useState } from 'react';
//import fetchHikingSpots from "./api";

//OnRecommendation is a prop passed in by  preferenceform 
//values ent//ered by the user(not final)


  


const PreferenceForm = async ({ onRecommendation }: any) => {
  const [location, setLocation] = useState('');
  const [trail, setTrail] = useState('');
  const [rating, setRating] = useState('');
  const [showResults, setShowResults] = useState('false');


  const handleRecommendation = async (e: { preventDefault: () => void }) => {
   e.preventDefault();
    try {
      
       const recommendations = await fetchHikingSpots({ location, trail, rating });
      onRecommendation(recommendations);
    } catch (error) {
        console.error("Error finding hiking spots", error);
    }

     setShowResults('true');
  };



    

    return (
        <form onSubmit={onRecommendation} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
          <label className="block mb-2">
            Select Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
    
          <label className="block mb-2">
            Select Trail:
            <input
              type="text"
              value={trail}
              onChange={(e) => setTrail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
    
          <label className="block mb-2">
            Rating:
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>

          
    
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-amber-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Get Hiking Spots
          </button>
    
          {
        // display results based on user input
          showResults && (
            <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
              
              <h2 className="text-2xl font-bold mb-4">Hiking Spots Recommendations</h2>
              <div className="mb-2">
                <strong>Location:</strong> {location}
              </div>
              <div className="mb-2">
                <strong>Trail:</strong> {trail}
              </div>
              <div className="mb-4">
                <strong>Rating:</strong> {rating}
              </div>
              <p className="text-gray-600">
                Based on your preferences, here are some hiking spots recommended for you.
              </p>
              <button
                onClick={() => setShowResults('false')}
                className="mt-4 px-4 py-2 text-white bg-amber-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                <p className="text-gray-600">
                 Here's how you can prepare for the.
              </p>
                Back to Form
              </button>
            </div>
          )
        }
        </form>
    
        
        
          )
        };


  

  

    


export default PreferenceForm;