import React from 'react'
import Spinner from '../Spinner/Spinner'

const Card = ({dog,loading, updateDog}) => {
   if (loading) return <Spinner/>
  return (
    <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
    <img src={dog.image}  alt="Dog"/>
    <p>{dog.breed.name}</p>
      
    </div>
  )
}

export default Card
