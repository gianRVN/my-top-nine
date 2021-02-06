import { useEffect, useState } from "react"
import axios from "axios"

function useFetch(value) {
  const[place, setPlace] = useState([])
  
  console.log(value, 'masuk usefetch')

  useEffect(() => {
    if(!value.placeSearch || !value.location){
      return{
        data: place,
        setPlace: setPlace 
      }
    }
    console.log(value, 'berjalan useEffect')
    axios.post(`http://localhost:3000/place`, value)
    .then((data) => {
      console.log(data, 'kita fetching')
      for (let i = 0; i < data.data.results.length; i++) {
        for (let j = 1; j < data.data.results.length; j++) {
          if(data.data.results[j-1]['user_ratings_total'] <= data.data.results[j]['user_ratings_total']){
            let temp = data.data.results[j-1]
            data.data.results[j-1] = data.data.results[j]
            data.data.results[j] = temp            
          }
        }
      }
      data.data.results[0].top = '1st'
      data.data.results[1].top = '2nd'
      data.data.results[2].top = '3rd'
      setPlace(data.data.results.slice(0, 9))
    })
    .catch(err => {
      console.log(err, 'ini err di client')
    })
    // eslint-disable-next-line
  }, [value.location, value.placeSearch])

  return{
    data: place,
    setPlace: setPlace 
  }
}

export default useFetch