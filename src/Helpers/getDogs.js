const getDogs = async (breedid) =>{

   
  const url = breedid === 0 || !breedid  ? "https://api.thedogapi.com/v1/images/search" : "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedid;

  const res = await fetch(url);

  if (!res.ok) {
    const {status, url, statusText} = res;
    throw Error (`Error: ${status} ${statusText} in fetch ${url}`)
    
  }

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