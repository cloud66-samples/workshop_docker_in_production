var express    = require('express');
var app = express();

app.get("/",function(req,res){
  res.send({"message": "hello world"});
});

app.listen(process.env.PORT || 3000);
