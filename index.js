const colors = require("colors");
// install express with `npm install express` 
const express = require('express')
const app = express();


// for hosting static files
app.use(express.static('public'));

app.get("/",function (req,res) {
    console.log("/ route called".america);
    res.sendFile(__dirname+"/index.html" ,function (err) {
        if(err){
            console.log(err.message);
            
        }
    })

})



app.get("/name/:n",function (req,res) {
    console.log("/name route called".green);
    res.send("Hello : "+req.params.n);
    
})
// export 'app'
module.exports = app


// For running locally opn port 3000
// app.listen(3000);
