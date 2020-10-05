import React, { useState, useEffect } from "react";
import getBreeds from '../../Helpers/getBreeds'
import Error from "../Error/Error";

const Select = ({updateDog}) => {
  const initialBreeds = [
    {
      id: 1,
      name: "Boxer",
    },
    {
      id: 2,
      name: "Labrador",
    },
    {
      id: 3,
      name: "Bull dog",
    },
  ];

  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setError] = useState(null)
  

  useEffect(() =>{
      updateBreeds()
      console.log(updateBreeds)
  },[]) // nos indica que se va ejecutar una sola vez  cuando se renderiza el componente

  

  const updateBreeds = () => {
    getBreeds()
    //recibe como argumento lo que retorna getBreeds, que trae de la api las distintas razas de perros
    .then((newBreeds) =>{ 
        setBreeds(newBreeds)
    })
    .catch((error) => {
      console.log(error)
      setError("Error al cargar las razas")
    })
    

  }

  return (
    <>
  <select onChange={(e) => updateDog(e.target.value)}>
      {breeds.map((breed) => {
        return (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        );
      })}
    </select>
    {error && <Error error={error}/>}
    </>
    
  );
};

export default Select;
