import React, {useState, useEffect} from 'react';
import Card from './components/Card/Card';
import Error from './components/Error/Error';
import Select from './components/Select/Select';
import getDogs from './Helpers/getDogs'

const initialDog = {
  image: "",
  breed: {
    id: "0",
    name: ""
  }

}


function App() {
  const [dog, setDog] = useState(initialDog)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() =>{
      updateDog()
  }, [])


  const updateDog = (breedid) => {
    setLoading(true)
    getDogs(breedid)
    .then((newDog) => {
      setDog(newDog)
      setLoading(false)
      // console.log(newDog)
    })
    .catch((error) =>{
      console.log(error)
      setError("Error al cargar un perro")
      setLoading(false)
    })
    
  }


  
  return (
    <div className="app" >
    <p>Soy una api dog</p>
    <Select updateDog={updateDog}/>
    {error &&  <Error error={error}/>} 
    <Card dog={dog} updateDog={updateDog} loading={loading}/>
   
   
    </div>
  );
}

export default App;
