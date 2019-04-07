const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 4000;


const public = path.join(__dirname, 'public');


app.use('/public', express.static(public));

app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});
  

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
})