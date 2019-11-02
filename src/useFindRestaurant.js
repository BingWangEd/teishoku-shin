import React, { useState, useEffect } from 'react';
import useGetRestaurantData from './useGetRestaurantData';

function useGetLocation() {
  const [dataState, fetchData] = useGetRestaurantData()
  //const randomNum = Math.floor(Math.random() * Math.floor(dataState.restaurant_number))
  //alert(`random number is ${randomNum}`)

  return [location]
}
  
export default useGetLocation;