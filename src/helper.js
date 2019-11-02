export const fetchData = (inquiry) => {
  dispatch({type: 'isFetchingData'})
  axios.get(inquiry)
  .then(res=>{
    dispatch({type: 'receivedData', payload: res.data})
  })
  .catch(err=>{
    dispatch({type: 'receivedError', payload: err})
  })
}