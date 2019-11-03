import React, { useState, useEffect } from 'react';

function useGetLocation() {
  const [location, setLocation] = useState()

  useEffect(()=>{
    let currLocation = null
    navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition((position) => {
    currLocation = { lat: position.coords.latitude, log: position.coords.longitude}
    setLocation(currLocation)
    console.log('location is called')
  });
  }, [])
  
  const locationPromise = new Promise((resolve, reject)=>{
		if (location) {
      console.log('location:'+location)
			resolve(location)
		} else {
			reject('Location is not here yet.')
		}
	})

  return [location, locationPromise]
}
  
export default useGetLocation;
