import { useEffect, useState } from "react"
import axios from "axios"

function useFetch(value) {
  console.log('masuk usefetch')
  const[placeDetail, setPlaceDetail] = useState([])

  useEffect(() => {
    console.log('berjalan useEffectDetail')
    axios.post(`http://localhost:3000/detail`, {photoId: value})
    .then((data) => {
      console.log(data.data.result, '<<<< ini dia')
      setPlaceDetail(data.data.result)
    })
    .catch(err => {
      console.log(err, 'ini err')
    })
    // eslint-disable-next-line
  }, [])

  return{
    data: placeDetail,
    setPlaceDetail: setPlaceDetail 
  }
}

export default useFetch