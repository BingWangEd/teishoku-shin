import axios from 'axios';

export const fetchData = (inquiry, dispatch) => {
  dispatch({type: 'isFetchingData'})
  axios.get(inquiry)
  .then(res=>{
    console.log('received data in fetchData')
    dispatch({type: 'receivedData', payload: res.data})
  })
  .catch(err=>{
    dispatch({type: 'receivedError', payload: err})
  })
}