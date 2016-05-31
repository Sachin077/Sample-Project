var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/index.htm', function(req,res){
     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse(data);
       var count = Object.keys(data).length;
       
       console.log(count);
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})