const axios = require('axios');

axios.get('https://small-express-server.herokuapp.com/sgfsdgzg')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.response.data);
  });