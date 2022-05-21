// WIP - File used for testings
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, err => {
  if (err) console.log(err);
  console.log('Server is running on port:', port);
});
