const express = require('express');
const app = express();




app.get('/', (req, res) => {

    res.send("hi you have reached the web work server. ");
   
        console.log("Hi, How are you");
    
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});