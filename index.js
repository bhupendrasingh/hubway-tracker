var express =require('express');
var app=express();
app.use(express.static(__dirname + '/public'));
var fs=require('fs');
app.get('/data',function(req,res){
  fs.readFile('stations.json', 'utf8', function (err, data) {
      if (err) throw err;
      var obj = JSON.parse(data);
      //res.setHeader('Content-Type', 'application/json');
      //res.json(obj);
  });  
});
app.listen(8000);
console.log("Server started on port 8000");