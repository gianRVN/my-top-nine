import React from 'react'
import useFetchPhoto from '../hooks/useFetchPhoto'
import { useHistory } from 'react-router-dom'

function Place(props) {
  const {data: photo} = useFetchPhoto(props.place.photos[0].photo_reference)
  console.log(photo, 'ini si data photo hasil fetch')

  const history = useHistory()

  function checkItOut(id) {
    history.push(`/place/${id}`)
  }

  return (
    <>
      <div className='col-md-4 col-sm-12 d-flex align-items-stretch p-3'>
        <div className="card" style={{width: '100%'}}>
          <img src={photo.data} className="card-img-top" alt="..." style={{ height: '200px', width: '100%', objectFit: 'cover'}} />
          <div className="card-body d-flex flex-column justify-content-around">
            <h5 className="card-title" style={{textAlign: 'left', fontWeight: 800}}>{props.place.name}</h5>
            <div  style={{textAlign: 'left', color: 'grey', marginBottom: '1vh'}}>
              <svg width="20" height="20" fill="currentColor" className="text-violet-600">
                <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
              </svg>
              <span className="text-black">{props.place.rating}</span>
              <span className="sm:hidden md:inline">({props.place['user_ratings_total']})</span>
            </div>
            <p className="card-text" style={{textAlign: 'left'}}>{props.place.formatted_address}</p>
            <div className='d-flex flex-stretch flex-column'>
              <button className="btn btn-warning btn-sm" style={{fontWeight: 600}} onClick={() => checkItOut(props.place.place_id)}>check it out</button>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}



export default Place;
