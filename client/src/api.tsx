import {useEffect, useState} from "react"

interface HikeData {
  Location: string;
  Trail: string;
  Preparation: string;
  Difficulty: string;
  Rating: Number;
 }


function fetchHikingSpots() {

  const [hikes, setHikes] = useState<HikeData[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5020/hikes")
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

export default  fetchHikingSpots