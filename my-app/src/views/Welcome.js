import React, { useState } from 'react'
import Place from '../components/Place'
import Intro from '../components/Intro'
import useFetch from '../hooks/useFetch'

function Welcome() {
  console.log('rerender')
  const [placeSearch, setPlaceSearch] = useState('')
  const [location, setLocation] = useState('')
  const [placeSearchInput, setPlaceSearchInput] = useState('')
  const [locationInput, setLocationInput] = useState('')
  const {data: place} = useFetch({placeSearch, location})

  const searchTopPlace = (event) => {
    console.log('masuk search place function')
    setPlaceSearch(placeSearchInput)
    setLocation(locationInput)
    event.preventDefault()
  }

  return (
    <>
      <div className='shadow mb-5 rounded' style={{backgroundColor: '#FED053'}}>
        <h1 className='' style={{color: 'black', paddingTop:'4vh', textAlign: 'center'}}>My Top Nine</h1>
        <h3 className='' style={{color: 'black', paddingBottom: '4vh', textAlign: 'center'}}>Find List of Top Places for Hangouts!</h3>
      <form style={{padding: '3vh', backgroundColor: '#2A2E34'}}>
        <div className="form-group d-flex justify-content-center row" style={{margin: 0}}>
          <input type="text" className="form-control col-lg-4 col-md-6 col-sm-6" id="placeName" style={{height: '7vh', border: '1px solid black', borderRadius: '20px', textAlign: 'center'}} placeholder="places to hangouts (ex: coffee shops, museum, etc)" value={placeSearchInput} onChange={(e) => setPlaceSearchInput(e.target.value)}/>
          <input type="text" className="form-control col-lg-3 col-md-6 col-sm-6" id="location" style={{height: '7vh', marginLeft: '1vh', border: '1px solid black', borderRadius: '20px', textAlign: 'center'}} placeholder="location (ex: bandung, etc)" value={locationInput} onChange={(e) => setLocationInput(e.target.value)}/>
        <button type="submit" value="submit" className="btn btn-warning col-lg-1 col-md-6 col-sm-6" style={{marginLeft: '1vh', fontSize: '20px', borderRadius: '20px', height: '7vh' }} onClick={searchTopPlace}>Search</button>
        </div>
      </form>
      </div>
      <div className="container">
        {location && 
        <div className="row">
          {
            place.map(el => {
              return (
                <Place key={el.place_id} place={el}/>      
              )            
            })
          }
        </div> }
        {!location && 
        <div className="row d-flex flex-stretch">
          <Intro/>
        </div> }
      </div>
    </>
    )
}

export default Welcome;
