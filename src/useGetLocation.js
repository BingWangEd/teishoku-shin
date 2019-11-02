import React, { useState, useEffect } from 'react';

function useGetLocation() {
  const [location, setLocation] = useState()

  useEffect(()=>{
    let currLocation = null
    navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition((position) => {
    currLocation = { lat: position.coords.latitude, log: position.coords.longitude}
    setLocation(currLocation)
  });
	}, [])

  return [location]
}
  
export default useGetLocation;
