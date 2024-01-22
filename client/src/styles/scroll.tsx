

import React from 'react';
import hiking1 from "./src/assets/hiking1.jpeg";
import hiking2 from "./src/assets/hiking2.jpg";


//import hiking2 from './src/assets/hiking2.jpg';

const MyView = () => {
  const images = [hiking1, hiking2];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-2xl p-4 bg-white rounded-md shadow-md flex-grow">
        <div className="overflow-y-scroll max-h-60">
          {/* ScrollView with images */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hiking ${index + 1}`}
              className="w-full h-auto rounded-md mb-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyView;