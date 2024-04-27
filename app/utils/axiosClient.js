
const axios = require('axios');


const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api',
  // other custom settings
});

module.exports = axiosClient;
