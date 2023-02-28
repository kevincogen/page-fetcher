const URL = process.argv[2];
const localPath = process.argv[3];
const request = require('request');
const fs = require('fs');


request(URL, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received - Does the resolve parameter need to be here?
  body = ('body:', body); // Store Body
  //bodyLength = body.length - Alternative filesize finder: to find character length
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.error(err);
    }
    fs.stat(localPath, (err, stats) => {
      if (err) {
        console.error(err);
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${localPath}`);
      // we have access to the file stats in `stats`
    });
  });
});
