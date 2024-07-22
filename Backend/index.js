const express = require("express");
const app = express();
const PORT= 3001;
const cors = require('cors');
app.listen(PORT,()=>console.log(`Server is started at PORT${PORT}`));
app.use(cors());
app.use(express.json());
app.get('/hello',(req,res)=>
{
    console.log("requested");
    res.json({data:"this is data"});
})