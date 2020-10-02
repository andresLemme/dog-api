import React, { useState, useEffect } from "react";
import getBreeds from '../../Helpers/getBreeds'

const Select = () => {
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
    

  }

  return (
    <select>
      {breeds.map((breed) => {
        return (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
