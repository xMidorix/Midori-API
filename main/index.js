const axios = require('axios');
const { url, version } = require("./config.json")

//const options = {
 // method: 'GET',
  //url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',
  //params: {
   // top: 'Top Text',
   // bottom: 'Bottom Text',
     //meme: 'Condescending-Wonka',
     //font_size: '50',
    //font: 'Impact'
  //},
  //headers: {
    //'X-RapidAPI-Key': 'be4bb93c08msh534c74296b033c9p1ef157jsn055588f1322d',
   // 'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
  // }
// };


class Base {

    constructor() {
        this.url = url;
        this.version = version;
    }

    async meme() {
        const req = await axios.get(`${'reddit-meme-api.herokuapp.com/'}/meme`)
        const json = req.data
        if (json.error) throw new Error(json.error)
        return json;


}
}

module.exports = { Base };
