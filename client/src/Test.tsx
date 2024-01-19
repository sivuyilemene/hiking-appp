import { useEffect, useState } from "react"
import fetchhikingSpots from './api'

function Table() {

    const {loading, hikes} = fetchhikingSpots()

    return (
      <>
      <h1>Hi</h1>
      {loading && <p>Loading.....</p>}
      {
        hikes.map((item, index: number )=>{
          return (
            <div key={index}>
              <h2>{item.Location}</h2>
            </div>
          );
         })
      }
      </>
    ) 
  } 


export default Table