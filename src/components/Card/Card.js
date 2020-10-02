import React from 'react'

const Card = ({dog}) => {
  return (
    <div className="card">
    <img src={dog.image}  alt="Dog"/>
    <p>{dog.breed.name}</p>
      
    </div>
  )
}

export default Card
