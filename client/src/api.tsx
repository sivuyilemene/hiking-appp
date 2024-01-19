import React, {useEffect, useState} from 'react';

interface HikeData {
    Location: string;
    Trail: string;
    Preparation: string;
    Difficulty: string;
    Rating: string;
   }

function fetchhikingSpots() {

    const [hikes, setHikes] = useState<HikeData[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
      fetch("http://localhost:5000/hikes")
        .then(response => response.json())
        .then(json => {
            console.log(json.hikes)
            setHikes(json.hikes)
            setLoading(false)
        }).catch((error) => {
            console.error(error);
            setLoading(false)
        })
     
    }, [])

    return {loading, hikes}

    
    
}

export default fetchhikingSpots