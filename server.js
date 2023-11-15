const express =require('express');
const port = 3000;
const app = express();
app.get('/', (req, res)=>{
    res.send("Welcome to Bamidele's Backend Application")
});

app.get('/bam', (req,res) => {res.send("Hello Bamidele")});

app.listen(port, ()=>console.log("Listening"));