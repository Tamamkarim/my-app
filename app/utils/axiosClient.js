
const axios = require('axios');


const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api',
  timeout: 5000, 
  headers: {
    "Content-Type": "application/json", 
    
  },
 
});

module.exports = axiosClient;



  


