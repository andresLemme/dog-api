const getDogs = async () =>{
  const url = "https://api.thedogapi.com/v1/images/search";
  const res = await fetch(url);
  const dog = await res.json();

  return dog
}

export default getDogs