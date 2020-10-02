import React, {useState} from 'react';
import Card from './components/Card/Card';
import Select from './components/Select/Select';
import getDogs from './Helpers/getDogs'

const initialDog = {
  image: "https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg",
  breed: {
    id: "1",
    name: "Labrador"
  }

}


function App() {

  const updateDog = () => {
    getDogs()
    .then((newDog) => {
      setDog(newDog)
    })
    
  }


  const [dog, setDog] = useState(initialDog)
  return (
    <div className="app" >
    <p>Soy una api dog</p>
    <Select/>
    <Card dog={dog}/>
   
    </div>
  );
}

export default App;
