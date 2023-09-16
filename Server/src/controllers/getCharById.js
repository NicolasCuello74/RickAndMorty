const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  
  try {
    const { id: charId } = req.params;
    
    const response = await axios.get(URL + charId) // response
    
    const { id, name, gender, species, origin, image, status }= response.data;
      res.json({id, name, gender, species, origin, image, status})
  } catch (error){
    res.status(500).json({message: error.message}); //5xx
  }
 
  // axios
  //   .get(URL + id).then((response) => {
  //     if (response.status === 200) {
  //       const { id, name, gender, species, origin, image, status } =
  //         response.data;
  //       res.json({ id, name, gender, species, origin, image, status });
  //     } else {
  //       res.status(404).send("Not found");
  //     }
  //   })
  //   .catch((error) => res.status(500).json({message: error.message}));


}

module.exports = getCharById;