const getDogs = async (breedid) =>{

   let url;

  if (breedid === 0){

     url = "https://api.thedogapi.com/v1/images/search";
  } else{
     url = "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedid;
  }

  const res = await fetch(url);
  const [data] = await res.json();

  const {url: image, breeds: [breed]} = data


 if (!breed){
  breed = {
     id: 0,
     name: 'random'
   }
 }
  

  const dog = {
    image: image,
    breed: breed
  }
 console.log(dog)
  return dog
}

export default getDogs