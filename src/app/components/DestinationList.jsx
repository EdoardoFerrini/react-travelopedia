import React from 'react'
import { useGetAllDestinationQuery } from "../../api/destinationApi"
import Destination from './Destination';

function DestinationList() {
  const {data, isLoading,isSuccess} = useGetAllDestinationQuery()

  let content;

  if(isLoading){
    content = <p>Loading...</p>
  }
  else if(isSuccess){
    content = data.map((destination)=>{
      return(
          <Destination destination={destination} key={destination.id} />
      )
    })
  }
  return <div>{content}</div>
}

export default DestinationList
