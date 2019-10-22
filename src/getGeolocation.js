import React, { useState, useEffect } from 'react';

const getGeolocation = (setLocation, callback) => {
  let currLocation = {lat: null, log: null}
  navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition((position) => {
    currLocation = { lat: position.coords.latitude, log: position.coords.longitude}
    setLocation(currLocation)
  });
  alert('currLocation'+currLocation)
  callback(currLocation)
}
  
export default getGeolocation;