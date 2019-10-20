import React, { useState, useEffect } from 'react';

function useGeolocation() {
  const [location, setLocation] = useState({ lat: null, log: null })

  useEffect(()=>{
    navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition((position) => {
			setLocation({ lat: position.coords.latitude, log: position.coords.longitude});
		});
	}, [])

  return [location]
}
  
export default useGeolocation;