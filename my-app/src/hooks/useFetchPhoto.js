import { useEffect, useState } from "react"
import axios from "axios"

function useFetchPhoto(value) {
  const[photo, setPhoto] = useState('')
  
  useEffect(() => {
    console.log('masuk fetch photo')
    axios.post(`http://localhost:3000/photos`, {photoId: value})
    .then((data) => 
    setPhoto(data.data)
    )
    .catch(err => {
      console.log(err, 'ini err')
    })
    // eslint-disable-next-line
  }, [value])

  return{
    data: photo,
    setPhoto: setPhoto
  }
}

export default useFetchPhoto