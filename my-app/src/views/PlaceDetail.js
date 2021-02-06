import React from 'react'
import useFetchDetail from '../hooks/useFetchDetail'
import { useParams } from 'react-router-dom'

function PlaceDetail() {
  const { placeID } = useParams()

  const {data: placeDetail} = useFetchDetail(placeID)
  return (
    <>
     <h1>masuk yeah</h1>
     <h6>{JSON.stringify(placeDetail)}</h6>
    </>
    )
}

export default PlaceDetail;
