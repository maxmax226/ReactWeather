var express = require('express');

//Create then app
var app = express();
const PORT = process.env.PORT || 3000;

app.use((req,res,next) =>{
  if(req.headers['x-forwarded-proto'] === 'http'){
    res.redirect(`http://${req.hostname+res.url}`);
  }else{
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT,()=>{
    console.log('Express server is up on port 3000');
})