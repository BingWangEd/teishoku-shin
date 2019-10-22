import React, { useState, useEffect } from 'react';
import getGeolocation from './getGeolocation';
import useDataState from './useDataState';
import axios from 'axios';

function useGetTotalRest() {
  const [location, setLocation] = useState({ lat: null, log: null })
  //const [dataState, fetchData] = useDataState(location)

  useEffect(()=>{
    getGeolocation(setLocation, (location)=>{alert('callback'+location)})
	}, [])

  return [location]
}
  
export default useGetTotalRest;