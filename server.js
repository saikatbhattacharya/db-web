var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  if(!req.query.content) res.sendFile(__dirname +'/index.html')
  else res.sendFile(__dirname +'/content.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});