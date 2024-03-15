import React from 'react'
import { useGetRandomDestinationQuery } from "../../api/randomDestinationApi"
function RandomDestination() {
    const {data, isLoading, isSuccess} =  useGetRandomDestinationQuery()

    let content;
  
    if(isLoading){
      content = <p>Loading...</p>
    }
    else if(isSuccess)
    {
      content = (
      <div className='text-center border p-3'>
        <h4 className='text-success'>random Travel Suggestion:</h4>
        {data.city}, {data.country}
      </div>
        )
    }

    return <div>{content}</div>
  }

export default RandomDestination
