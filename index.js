var express =require('express');
var app=express();
app.use(express.static(__dirname ));

app.listen(8000);
console.log("Server started on port 8000");
