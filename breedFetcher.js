request = require('request');
// command line argument
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data[0].description);
    } else {
      console.log('Breed not found');
    }
  } else if (error) {
    console.log(error);
  } else {
    console.log(`Status code: ${response.statusCode}`);
  }
});
