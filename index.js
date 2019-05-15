const express = require('express');
const bodyParse - require('body-parser');
const path = require('path');




const app = express();


app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'client', 'build', 'index.html')));

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})



app.listen(9000, function() {
  console.log("the server is running on port 9000")
})
