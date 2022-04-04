const axios = require("axios");

export const Service = (name, setAstro) => {
    
    var options = {
  method: 'POST',
  url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
  params: {sign: name, day: 'today'},
  headers: {
    'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
    'x-rapidapi-key': '2d8d0b3835mshea6780b6078ae82p108f1ejsnab1fc8da9a2f'
  }  
}

axios
.request(options)
.then(response => {
   setAstro(response.data)
    
}).catch(error => {
	console.error(error);
});

};

